---
title: Regras de usuário
sidebar_position: 2
---

## O que são e por que você precisa delas

As regras de usuário são as mesmas regras de filtragem usadas nas listas de bloqueio comuns. Você pode personalizar a filtragem do site para atender às suas necessidades, adicionando regras manualmente ou importando-as de uma lista predefinida.

Para tornar sua filtragem mais flexível e melhor adaptada às suas preferências, dê uma olhada na [sintaxe das regras](/general/dns-filtering-syntax/) para as regras de filtragem do AdGuard DNS.

## Como usar

Para configurar as regras de usuário:

1. Navegue até a _Daashboard_.

2. Vá para a seção _Servidores_.

3. Selecione o servidor requerido.

4. Clique na opção _Regras de usuário_.

5. You’ll find several options for adding user rules.

    - A maneira mais fácil é usar o gerador. Para usá-lo, clique em _Adicionar nova regra_ → Insira o nome do domínio que você deseja bloquear ou desbloquear → Clique em _Adicionar regra_
        ![Adicionar regra \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/userrules_step5.png)
    - A maneira avançada é usar o editor de regras. Clique em _Abrir editor_ e insira regras de bloqueio de acordo com a [sintaxe](/general/dns-filtering-syntax/)

Esse recurso permite que você [redirecione uma consulta para outro domínio substituindo o conteúdo da consulta DNS](/general/dns-filtering-syntax/#dnsrewrite-modifier).
