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

Um grupo de filtros composto por listas regionais para bloquear domínios em idiomas específicos.

![Listas de bloqueio regionais \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/regional.png)

### Segurança

Um grupo de filtros contendo regras para bloquear sites fraudulentos e domínios de phishing.

![Listas de bloqueio de segurança \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/security.png)

### Outro

Listas de bloqueio com várias regras de bloqueio de desenvolvedores de terceiros.

![Outras listas de bloqueio \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/other.png)

## Adicionando filtros

Se você gostaria que a lista de filtros do AdGuard DNS fosse expandida, pode enviar uma solicitação para adicioná-los na seção relevante do [Hostlistsregistry](https://github.com/AdguardTeam/HostlistsRegistry) no GitHub.

Para enviar uma solicitação:

1. Acesse o link acima (pode ser necessário se registrar no GitHub).
2. Clique em _Novo problema_.
3. Clique em _Solicitação de lista de bloqueio_ e preencha o formulário.
4. Após preencher o formulário, clique em _Enviar nova questão_.

If your filter’s blocking rules do not duplicate the existing lists, it will be added to the repository.

## Regras de usuário

Você também pode criar suas próprias regras de bloqueio.
Saiba mais no [artigo de regras de usuário](/private-dns/setting-up-filtering/user-rules.md).
