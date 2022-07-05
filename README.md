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

### Run it locally

- `yarn start`

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## How to build it

- `yarn build`

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## How to translate

Translations are not pushed to the repo and prepared on-the-fly (`i18n` folder is added to `.gitignore`).

Here's how you can debug translations locally.

1. Download translations: `CROWDIN_PERSONAL_TOKEN="YOURTOKEN" yarn run crowdin download`
2. Run Docusaurus with the language of your choice: `yarn run start -- --locale de`

## How to generate DNS stamps

### For DNS-over-HTTPS

1. Go to [Online DNS Stamp calculator](https://dnscrypt.info/stamps/)
2. Choose DNS-over-HTTPS from the drop-down menu
3. Fill out the following fields of the form: Host name and Path
4. Copy the ready DNS stamp from the Stamp field

### For DNS-over-TLS

1. Go to [Online DNS Stamp calculator](https://dnscrypt.info/stamps/)
2. Choose DNS-over-TLS from the drop-down menu
3. Fill out the Host name field 
4. Copy the ready DNS stamp from the Stamp field

### For DNS-over-QUIC

1. Go to [Online DNS Stamp calculator](https://dnscrypt.info/stamps/)
2. Choose DNS-over-QUIC from the drop-down menu
3. Fill out the Host name field
4. Copy the ready DNS stamp from the Stamp field

### For Plain DNS

1. Go to [Online DNS Stamp calculator](https://dnscrypt.info/stamps/)
2. Choose Plain DNS from the drop-down menu
3. Fill out the IP address field
4. Copy the ready DNS stamp from the Stamp field

### How to check DNS stamps

1. Install dnslookup using [Homebrew](https://brew.sh/) or [from source](https://github.com/ameshkov/dnslookup)
2. Run a command. Examples of commands for different protocols are given [on this page](https://github.com/ameshkov/dnslookup)
