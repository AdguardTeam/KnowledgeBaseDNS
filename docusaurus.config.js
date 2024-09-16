const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const DNS_WEBSITE_URL = 'https://adguard-dns.io';
const ADGUARD_WEBSITE_URL = 'https://adguard.com';
const VPN_WEBSITE_URL = 'https://adguard-vpn.com';
const REPORTS_WEBSITE_URL = 'https://reports.adguard.com';

// Allow to parameterise the website URL and the base path during the build.
// By default, the website is published to Cloudflare Pages.
const url = process.env.URL || 'https://kb-dns.pages.dev';
const baseUrl = process.env.BASE_URL || '/';

const typesenseCollectionName = process.env.SEARCH_COLLECTION || 'docusaurus-2';
const typesenseHost = process.env.SEARCH_HOST || 'xxx-1.a1.typesense.net';
const typesenseApiKey = process.env.SEARCH_API_KEY || 'test';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'AdGuard DNS Knowledge Base',
  tagline: 'Knowledge base for AdGuard DNS',
  url: url,
  baseUrl: baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: true,
  organizationName: 'AdGuard',
  projectName: 'AdGuardDNSKB',
  themes: ['docusaurus-theme-search-typesense'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'cs', 'da', 'de', 'fr', 'es', 'it', 'ja', 'ko', 'tr', 'zh-CN', 'zh-TW'],
  },
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
      }
    },
    navbar: {
      hideOnScroll: true,
      title: '',
      logo: {
        alt: 'AdGuard DNS',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'docs',
        },
        {
          to: DNS_WEBSITE_URL + '/blog/index.html',
          position: 'left',
          label: 'blog',
        },
        {
          to: DNS_WEBSITE_URL,
          position: 'left',
          label: 'official_website',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              to: '/miscellaneous/update-kb/',
              label: 'Help Us Translate',
            },
          ],
        },
        {
          href: 'https://github.com/AdguardTeam/KnowledgeBaseDNS',
          label: 'github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      logo: {
        alt: 'AdGuard DNS',
        src: 'img/logo_dark.svg',
        srcDark: 'img/logo_dark.svg',
      },
      links: [
        {
          title: 'dns',
          items: [
            {
              label: 'homepage',
              href: DNS_WEBSITE_URL + '/welcome.html',
            },
            {
              label: 'pricing',
              href: DNS_WEBSITE_URL + '/license.html',
            },
            {
              label: 'blog',
              href: DNS_WEBSITE_URL + '/blog/index.html',
            },
            {
              label: 'about_us',
              href: DNS_WEBSITE_URL + '/about.html',
            },
            {
              label: 'connect_dns',
              href: DNS_WEBSITE_URL + '/public-dns.html',
            },
            {
              label: 'promo',
              href: ADGUARD_WEBSITE_URL + '/promopages.html',
            },
            {
              label: 'media',
              href: DNS_WEBSITE_URL + '/media-materials.html',
            },
            {
              label: 'press',
              href: DNS_WEBSITE_URL + '/press-releases.html',
            },
          ]
        },
        {
          title: 'other_products',
          items: [
            {
              label: 'ad_blocker',
              href: ADGUARD_WEBSITE_URL,
            },
            {
              label: 'vpn',
              href: VPN_WEBSITE_URL,
            },
            {
              label: 'temp_mail',
              href: ADGUARD_WEBSITE_URL + '/adguard-temp-mail/overview.html',
            },
            {
              label: 'adguard_home',
              href: ADGUARD_WEBSITE_URL + '/adguard-home/overview.html',
            },
          ],
        },
        {
          title: 'support',
          items: [
            {
              label: 'support_center',
              href: DNS_WEBSITE_URL + '/support.html',
            },
            {
              label: 'faq',
              href: DNS_WEBSITE_URL + '/support/faq.html',
            },
            {
              label: 'versions',
              href: DNS_WEBSITE_URL + '/versions.html',
            },
            {
              label: 'report',
              href: REPORTS_WEBSITE_URL + '/new_issue.html',
            },
            {
              label: 'status',
              href: 'https://status.adguard.com/',
            }
          ],
        },
        {
          title: 'legal',
          items: [
            {
              label: 'terms',
              href: DNS_WEBSITE_URL + '/eula.html',
            },
            {
              label: 'privacy_policy',
              href: DNS_WEBSITE_URL + '/privacy.html',
            },
            {
              label: 'terms_of_sale',
              href: DNS_WEBSITE_URL + '/terms-of-sale.html',
            },
            {
              label: 'refund',
              href: DNS_WEBSITE_URL + '/terms-of-sale.html',
            },
            {
              label: 'terms_and_conditions',
              href: ADGUARD_WEBSITE_URL + '/terms-and-conditions.html',
            },
          ],
        },
      ],
      copyright: `© AdGuard DNS, ${new Date().getFullYear()}`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    typesense: {
      typesenseCollectionName: typesenseCollectionName,
      typesenseServerConfig: {
        nodes: [
          {
            host: typesenseHost,
            port: 443,
            protocol: 'https',
          },
        ],
        apiKey: typesenseApiKey,
      },
      contextualSearch: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
};
