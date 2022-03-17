const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const DNS_WEBSITE_URL = 'https://adguard-dns.io';
const ADBLOCK_WEBSITE_URL = 'https://adguard.com';
const VPN_WEBSITE_URL = 'https://adguard-dns.com';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'AdGuard Knowledge Base',
  tagline: 'Knowledge base for AdGuard products',
  url: 'https://adguardteam.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'AdGuard',
  projectName: 'AdGuardKB',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  themeConfig: {
    hideableSidebar: true,
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
          to: ADBLOCK_WEBSITE_URL + '/blog/tag/adguard-dns.html',
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
              href: ADBLOCK_WEBSITE_URL + '/blog/tag/adguard-dns.html',
            },
            {
              label: 'privacy_policy',
              href: ADBLOCK_WEBSITE_URL + '/privacy/dns.html',
            },
            {
              label: 'terms',
              href: ADBLOCK_WEBSITE_URL + '/eula.html',
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
              href: ADBLOCK_WEBSITE_URL,
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
