---
title: Listas de bloqueio
sidebar_position: 1
---

## O que são Listas de bloqueio

Listas de bloqueio são conjuntos de regras em formato de texto que o AdGuard DNS usa para filtrar anúncios e conteúdos que podem comprometer sua privacidade. Em geral, um filtro consiste em regras com um foco semelhante. Por exemplo, pode haver regras para idiomas de sites (como filtros em alemão ou russo) ou regras que protegem contra sites de phishing (como a Lista de Bloqueio de URL de Phishing). Você pode facilmente ativar ou desativar essas regras como um grupo.

## Por que elas são úteis

Listas de bloqueio são projetadas para uma personalização flexível das regras de filtragem. Por exemplo, pode ser que você queira bloquear domínios de publicidade em uma região de idioma específica, ou talvez queira se livrar de domínios de rastreamento ou publicidade. Selecione as listas de bloqueio que você deseja e personalize a filtragem a seu gosto.

## Como ativar listas de bloqueio no AdGuard DNS

Para ativar as listas de bloqueio:

1. Abra a Dashboard.
2. Vá para a seção _Servidores_.
3. Selecione o servidor requerido.
4. Clique em _Listas de bloqueio_.

## Tipos de listas de bloqueio

### Geral

Um grupo de filtros que inclui listas para bloquear anúncios e domínios de rastreadores.

![Listas de bloqueio gerais \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/general.png)

### Regional

A group of filters consisting of regional lists to block domains in specific languages.

![Regional blocklists \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/regional.png)

### Security

A group of filters containing rules for blocking fraudulent sites and phishing domains.

![Security blocklists \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/security.png)

### Other

Blocklists with various blocking rules from third-party developers.

![Other blocklists \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/other.png)

## Adding filters

If you would like the list of AdGuard DNS filters to be expanded, you can submit a request to add them in the relevant section of [Hostlistsregistry](https://github.com/AdguardTeam/HostlistsRegistry) on GitHub.

To submit a request:

1. Go to the link above (you may need to register on GitHub).
2. Click _New issue_.
3. Click _Blocklist request_ and fill out the form.
4. After filling out the form, click _Submit new issue_.

If your filter's blocking rules do not duplicate the existing lists, it will be added to the repository.

## User rules

You can also create your own blocking rules.
Learn more in the [User rules article](/private-dns/setting-up-filtering/user-rules.md).
