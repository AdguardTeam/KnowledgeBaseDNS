---
title: Listas de bloqueio
sidebar_position: 2
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

![Listas de bloqueio gerais \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/general_pt_br.png)

### Regional

Um grupo de filtros composto por listas regionais para bloquear domínios em idiomas específicos.

![Listas de bloqueio regionais \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/regional_pt_br.png)

### Segurança

Um grupo de filtros contendo regras para bloquear sites fraudulentos e domínios de phishing.

![Listas de bloqueio de segurança \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/security_pt_br.png)

### Outro

Listas de bloqueio com várias regras de bloqueio de desenvolvedores de terceiros.

![Outras listas de bloqueio \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/other_pt_br.png)

## Adicionando filtros

Se você gostaria que a lista de filtros do AdGuard DNS fosse expandida, pode enviar uma solicitação para adicioná-los na seção relevante do [Hostlistsregistry](https://github.com/AdguardTeam/HostlistsRegistry) no GitHub.

Para enviar uma solicitação:

1. Acesse o link acima (pode ser necessário se registrar no GitHub).
2. Clique em _Novo problema_.
3. Clique em _Solicitação de lista de bloqueio_ e preencha o formulário.
4. Após preencher o formulário, clique em _Enviar nova questão_.

Se as regras de bloqueio do seu filtro não duplicarem as listas existentes, serão adicionadas ao repositório.

## Regras de usuário

Você também pode criar suas próprias regras de bloqueio.
Saiba mais no [artigo de regras de usuário](/private-dns/setting-up-filtering/user-rules.md).

## Listas de bloqueio personalizadas

Se você precisar de alguma lista de bloqueio específica para ser adicionada ao AdGuard DNS, você pode baixá-la via URL.

![Adicionar lista de bloqueio personalizada](https://cdn.adguardvpn.com/content/release_notes/dns/v2-20/add_blocklists_pt_br.png)

1. Abra o painel de controle e clique em _Servidores_ no menu à esquerda
2. Selecione _Meu servidor → Listas de bloqueio_
3. Na seção _Personalizado_, clique em _Adicionar lista de bloqueio personalizada_
4. Insira o nome da lista de bloqueio, seu URL e uma descrição opcional e clique em _Adicionar_

:::note

Cada plano de assinatura tem um limite no número total de regras de filtragem: Personal — 1K, Equipe — 5K, Enterprise — 100K. Essa limitação está em vigor porque as listas de bloqueio são baixadas para servidores DNS, e permitir tamanhos ilimitados de listas de bloqueio pode levar à sobrecarga do servidor, potencialmente causando problemas de desempenho.

:::

Se uma lista de bloqueio personalizada exceder o limite, ela será **desativada automaticamente**, e você verá uma notificação correspondente. Para habilitar uma lista de bloqueio recém-adicionada que exceda o limite de regras, você precisará remover outras listas de bloqueio ou atualizar para um plano com um limite de regras maior.
