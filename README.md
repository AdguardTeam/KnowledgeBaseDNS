# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

`main` branch is published automatically to https://adguardteam.github.io/KnowledgeBaseDNS/.

## How to contribute

You can help by contributing to the Knowledge Base, all details are in [this article](https://adguard-dns.io/kb/miscellaneous/update-kb/).

## How to develop

### Prepare

First of all, you need to install the following:

- [git](https://github.com/git-guides/install-git)
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/)

Second, clone this repo to your local computer:

- `git clone git@github.com:AdguardTeam/KnowledgeBaseDNS.git`

Alternatively, you can use the [Github app](https://desktop.github.com/) to do that.

Then you should open Terminal on your computer and navigate to the directory where you cloned this repo and run this command to install the local dependencies:

- `yarn install`

### How to run it locally

- `yarn start`

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## How to build it

- `yarn build`

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Localization

Translations are not pushed to the repo and prepared on-the-fly (`i18n` folder is added to `.gitignore`).

Here's how you can debug translations locally.

1. Download translations: `CROWDIN_PERSONAL_TOKEN="YOURTOKEN" yarn run crowdin download`
2. Run Docusaurus with the language of your choice: `yarn run start -- --locale de`
