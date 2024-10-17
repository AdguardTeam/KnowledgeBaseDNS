---
title: User rules
sidebar_position: 2
---

## What is it and why you need it

User rules are the same filtering rules as those used in common blocklists. You can customize website filtering to suit your needs by adding rules manually or importing them from a predefined list.

To make your filtering more flexible and better suited to your preferences, check out the [rule syntax](/general/dns-filtering-syntax/) for AdGuard DNS filtering rules.

## How to use

Para configurar as regras de usuário:

1. Navegue até a _Daashboard_.

2. Vá para a seção _Servidores_.

3. Selecione o servidor requerido.

4. Clique na opção _Regras de usuário_.

5. Você encontrará várias opções para adicionar regras de usuário.

   - A maneira mais fácil é usar o gerador. Para usá-lo, clique em _Adicionar nova regra_ → Insira o nome do domínio que você deseja bloquear ou desbloquear → Clique em _Adicionar regra_
     ![Adicionar regra \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/userrules_step5.png)
   - A maneira avançada é usar o editor de regras. Clique em _Abrir editor_ e insira regras de bloqueio de acordo com a [sintaxe](/general/dns-filtering-syntax/)

Esse recurso permite que você [redirecione uma consulta para outro domínio substituindo o conteúdo da consulta DNS](/general/dns-filtering-syntax/#dnsrewrite-modifier).
