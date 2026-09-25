// Dev-only plugin: proxies the same-origin API paths to the live upstream so
// `pnpm start` works without infra. `devServer` is ignored by the prod build,
// so prod (infra-served) is unaffected.
//
// webpack-dev-server v5 (bundled with Docusaurus 3.10) requires the `proxy`
// option to be an array of config objects; the legacy object/map shorthand
// (proxy: { [path]: {...} }) is rejected by the schema.
const PROXY_ROUTES = [
  {
    // Swagger/OpenAPI spec used by the OpenApiReference component.
    // Use the non-redirecting canonical upstream: `/swagger/openapi.json`
    // 301-redirects to `/swagger/openapi.json`, and following that redirect on
    // the dev origin would fall through to the Docusaurus SPA shell instead of
    // JSON.
    path: '/api/swagger/openapi.json',
    upstream: 'https://api.adguard-dns.io/swagger/openapi.json',
  },
  {
    // API changelog used by the ApiChangelog component, served by the same
    // infra rewrite as the OpenAPI spec (no redirects).
    path: '/api/CHANGELOG.md',
    upstream: 'https://adguard-dns.io/api/CHANGELOG.md',
  },
];

module.exports = function devApiProxy() {
  const proxy = PROXY_ROUTES.map(({path, upstream}) => {
    const target = new URL(upstream);
    return {
      context: [path],
      target: `${target.origin}`,
      changeOrigin: true,
      secure: true,
      pathRewrite: {
        [`^${path}`]: target.pathname,
      },
    };
  });
  return {
    name: 'dev-api-proxy',
    configureWebpack() {
      return {
        devServer: {proxy},
      };
    },
  };
};
