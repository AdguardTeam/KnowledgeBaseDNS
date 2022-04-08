---
title: 'Updating the Knowledgebase'
sidebar_position: 3
---

The goal of this Knowledgebase is to provide everyone with the most up-to-date information on all kinds of AdGuard DNS-related topics. But things constantly change, and sometimes an article doesn't reflect the current state of things anymore — there are simply not so many of us to keep an eye on every single bit of information and update it accordingly when new versions are released. 

This is why we placed all of our KB content to [GitHub](https://github.com/AdguardTeam/KnowledgeBaseDNS/tree/main/docs), and now literally anyone can contribute to it by suggesting edits and translations to existing articles, as well as totally new ones. 

## How to suggest a change?

If you are unfamiliar with principles of working with GitHub and the platform in general, start by reading [this article](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests).

Once you are ready to start, clone [the KnowledgeBaseDNS repository](https://github.com/AdguardTeam/KnowledgeBaseDNS) and open it with GitHub Desktop. Alter articles using [Markdown](https://github.com/LewisVo/Markdown-Tutorial) in any source-code editor you like. Don't forget to commit the changes to the pull request so they don't just stay on your computer.  

> To see the changes you’ve made and to check if you’ve done everything correctly, you can install and configure [Docusaurus](https://docusaurus.io/docs) — an open-source platform that lets you build documentation websites! 

## Writing new articles

To write a completely new article is a much more laborious task. But if you are determined to go down this path, do the following. First, make sure your article has a place in AdGuard Knowledgebase. It should be either related to AdGuard DNS in some way, or be "Meta" (examples of such "meta-articles" can be found in the [General folder](../general/dns-filtering.md)) articles, or this one. Now, when you have found an appropriate topic, go to the [repository](https://github.com/AdguardTeam/KnowledgeBaseDNS) and then to the most suitable category (for example, let's say it is [Private DNS](https://github.com/AdguardTeam/KnowledgeBaseDNS/tree/main/docs/private-dns)). Press the "Create new file" button in the top-right part of the screen and enter the name of your file in English, in small letters, with a dash instead of spaces and `.md` at the end. 

Notice that at the top of every file there should be a certain header:

```
---
title: 'Your title here'
sidebar_position: 'Here you need to specify the number that will denote the position of the article in the side menu.'
---
```
Type the rest of the text below (use [Markdown](https://github.com/LewisVo/Markdown-Tutorial)!) and click "Propose file change" to create a PR. The rest is absolutely the same as described above.

## Translating an article

To make the process of [translating the AdGuard DNS Knowledge Base articles](https://crowdin.com/project/adguard-knowledge-bases/it#/kb.adguard-dns.io) more convenient, we moved it to [Crowdin](https://crowdin.com/project)! If you are not familiar with this platform and are not registered on it, [go to this article](/miscellaneous/adguard-translations/translate-adguard-dns.md) for more information on the topic. 

## Working on open issues

Sometimes there's need to update or complement an existing article, or create a new one, but we can't do it right away for some reason. In such cases usually a task ("issue") gets created in special repository on GitHub. You can get there by [this link](https://github.com/AdguardTeam/KnowledgeBaseDNS/issues/), choose any issue that you find appealing and start working on it. If you have any questions — you can ask them right in the comments in that issue.     