// Dev-only plugin: proxies the same-origin spec path to the live upstream so
// `pnpm start` works without infra. `devServer` is ignored by the prod build,
// so prod (infra-served) is unaffected.
//
// webpack-dev-server v5 (bundled with Docusaurus 3.10) requires the `proxy`
// option to be an array of config objects; the legacy object/map shorthand
// (proxy: { [path]: {...} }) is rejected by the schema.
const PROXY_PATH = '/api/swagger/openapi.json';
// Use the non-redirecting canonical upstream: `/static/swagger/openapi.json`
// 301-redirects to `/swagger/openapi.json`, and following that redirect on the
// dev origin would fall through to the Docusaurus SPA shell instead of JSON.
const UPSTREAM_SPEC_URL = 'https://api.adguard-dns.io/swagger/openapi.json';

module.exports = function devApiProxy() {
  const upstream = new URL(UPSTREAM_SPEC_URL);
  return {
    name: 'dev-api-proxy',
    configureWebpack() {
      return {
        devServer: {
          proxy: [
            {
              context: [PROXY_PATH],
              target: `${upstream.origin}`,
              changeOrigin: true,
              secure: true,
              pathRewrite: {
                [`^${PROXY_PATH}`]: upstream.pathname,
              },
            },
          ],
        },
      };
    },
  };
};
