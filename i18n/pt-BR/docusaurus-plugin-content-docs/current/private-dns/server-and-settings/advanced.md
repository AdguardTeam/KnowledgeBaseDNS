---
title: Configurações avançadas
sidebar_position: 2
---

A seção de configurações avançadas é destinada a usuários mais experientes e inclui as seguintes configurações.

## Responder a domínios bloqueados

Aqui você pode selecionar a resposta DNS para a solicitação bloqueada:

- **Padrão**: responder com zero endereço IP (0.0.0.0 para A; :: para AAAA) quando bloqueado pela regra de estilo Bloqueio de anúncios; responde com o endereço IP especificado na regra quando bloqueado pela regra /etc/hosts-style
- **REFUSED**: responder com o código REFUSED
- **NXDOMAIN**: responder com o código NXDOMAIN
- **IP personalizado**: responder com um endereço IP definido manualmente

## TTL (Time-To-Live)

Time-to-live (TTL) define o período de tempo (em segundos) para um dispositivo cliente armazenar em cache a resposta a uma solicitação de DNS e recuperá-la de seu cache sem solicitar novamente o servidor DNS. Se o valor de TTL for alto, as solicitações desbloqueadas recentemente ainda podem parecer bloqueadas por um tempo. Se o TTL for 0, o dispositivo não armazena em cache as respostas.

## Bloquear o acesso ao iCloud Private Relay

Os dispositivos que usam o iCloud Private Relay podem ignorar suas configurações de DNS, portanto, o AdGuard DNS não pode protegê-los.

## Bloquear o domínio canário do Firefox

Impede que o Firefox alterne para o resolvedor DoH de suas configurações quando o AdGuard DNS é configurado em todo o sistema.

## Registrar endereços IP

Por padrão, o AdGuard DNS não registra endereços IP de solicitações DNS recebidas. Se você ativar esta configuração, os endereços IP serão registrados e exibidos no registro de consultas.
