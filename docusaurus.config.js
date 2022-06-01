const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'AdGuard Knowledge Base',
  tagline: 'Knowledge base for AdGuard products',
  url: 'https://adguardteam.github.io/',
  baseUrl: '/KnowledgeBaseDNS/',
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
    navbar: {
      title: 'AdGuard DNS',
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
          label: 'Docs',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/AdguardTeam/KnowledgeBaseDNS',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Knowledgebase',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'AdGuard Forum',
              href: 'https://forum.adguard.com',
            },
            {
              label: 'AdGuard Reddit',
              href: 'https://www.reddit.com/r/Adguard/',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://adguard.com/blog/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/AdguardTeam/KnowledgeBaseDNS',
            },
            {
              label: 'EULA',
              href: 'https://adguard-dns.com/eula.html',
            },
            {
              label: 'Privacy Policy',
              href: 'https://adguard-dns.com/privacy.html',
            },
          ],
        },
      ],
      copyright: `Copyright © 2009-${new Date().getFullYear()} AdGuard. Built with Docusaurus.`,
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
          // Please change this to your repo.
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
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
      }
    ],
  ],
};
