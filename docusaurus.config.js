const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const DNS_WEBSITE_URL = 'https://adguard-dns.io';
const ADGUARD_WEBSITE_URL = 'https://adguard.com';
const VPN_WEBSITE_URL = 'https://adguard-vpn.com';

// Allow to parameterise the website URL and the base path during the build.
const url = process.env.URL || 'https://adguardteam.github.io';
const baseUrl = process.env.BASE_URL || '/KnowledgeBaseDNS/';

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
              html: `Cloud-based DNS service that will help you protect privacy and block ads.`
            },
          ]
        },
        {
          title: 'dns',
          items: [
            {
              label: 'connect_dns',
              href: DNS_WEBSITE_URL + '/public-dns.html',
            },
            {
              label: 'support_center',
              href: DNS_WEBSITE_URL + '/support.html',
            },
            {
              label: 'faq',
              href: DNS_WEBSITE_URL + '/support/faq.html',
            },
          ],
        },
        {
          title: 'engage',
          items: [
            {
              label: 'blog',
              href: DNS_WEBSITE_URL + '/blog/index.html',
            },
            {
              label: 'privacy_policy',
              href: ADGUARD_WEBSITE_URL + '/privacy/dns.html',
            },
            {
              label: 'terms',
              href: ADGUARD_WEBSITE_URL + '/eula.html',
            },
            {
              label: 'status',
              href: 'https://status.adguard.com/',
            }
          ],
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
  plugins: [
    '@docusaurus/plugin-ideal-image',
  ],
};
