---
title: Visão Geral
sidebar_position: 1
---

:::info

Com o AdGuard DNS, você pode configurar seus servidores DNS privados para resolver solicitações de DNS e bloquear anúncios, rastreadores e domínios maliciosos antes que cheguem ao seu dispositivo

Link rápido: [Experimente o AdGuard DNS](https://adguard-dns.io/dashboard/)

:::

# AdGuard DNS Privado

![Private AdGuard DNS dashboard main](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## What is Private AdGuard DNS?

Private AdGuard DNS is a DNS server that, in addition to benefits of a public DNS server (such as traffic encryption and domain blocklists), provides features like flexible customization, DNS statistics and parental control and is easily managed through a handy dashboard.

## Why you need Private AdGuard DNS

Today, you can connect anything to the Internet: TVs, refrigerators, smart bulbs, or speakers. But along with the undeniable conveniences you get trackers and ads. A simple browser-based ad blocker will not protect you in this case, but AdGuard DNS, which you can set up to filter traffic, block content and trackers, has a system-wide effect.

We already have [public AdGuard DNS](../public-dns/overview.md) and [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome). These solutions work fine for some users, but for others, the public AdGuard DNS lacks the flexibility of configuration, while the AdGuard Home lacks simplicity. That's where private AdGuard DNS comes into play. It has the best of both worlds: it offers customizability, control and information - all through a simple easy-to-use dashboard.

## A diferença entre AdGuard DNS Privado e Público

Here is a simple comparison of features available in Public AdGuard DNS and Private AdGuard DNS servers.

| AdGuard DNS Público                            | AdGuard DNS Privado                                                                                           |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Criptografia de tráfego DNS                    | Criptografia de tráfego DNS                                                                                   |
| Listas de bloqueio de domínio pré-determinadas | Listas de bloqueio de domínio personalizáveis                                                                 |
| -                                              | Regras de filtragem de DNS personalizadas com recurso de importação/exportação                                |
| -                                              | Estatísticas de solicitações (veja para onde vão suas solicitações de DNS: quais países, quais empresas etc.) |
| -                                              | Registro de consulta detalhado                                                                                |
| -                                              | Controle parental                                                                                             |

## Como configurar o AdGuard DNS Privado

1. Vá para o seu [painel de DNS do AdGuard](https://adguard-dns.io/dashboard/) (se não estiver logado, faça login usando sua conta do AdGuard)
2. Clique em “Conectar dispositivo” e siga as instruções na tela

> Supported platforms: - Android - iOS - Windows - Mac - Linux - Routers - Gaming consoles

## Recursos do AdGuard DNS Privado

### Gerenciamento de listas de bloqueio

With "Blocklists" feature you can set which domains you want to block and which you don't. Сhoose from wide variety of blocklists for different purposes.

![Private AdGuard DNS dashboard blocklists](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### Regras de usuário

For times when pre-installed *Blocklists* with thousands of rules are not enough, we have a handy function called "User rules". Here you can add custom rules manually to block/unblock a certain domain or import custom rules lists (check out [DNS filtering rules syntax](../general/dns-filtering-syntax.md)). You can export the lists.

![Private AdGuard DNS dashboard user rules](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

### Estatísticas

In "Statistics" tab you can see all the summarized statistics on DNS queries made by devices connected to your Private AdGuard  DNS. It shows the total number and geography of requests, the number of blocked requests, the list of companies the requests were addressed to, requests types and top requested domains.

![Private AdGuard DNS dashboard statistics](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/statistics.png)

### Destino do tráfego

This feature shows you where DNS requests sent by your devices go. On top of seeing the map of request destinations, you can filter the information by date, device and country.

![Private AdGuard DNS dashboard traffic](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/traffic_destination.png)

### Empresas

This tab allows you to quickly check which companies send the most requests, and which companies have the most blocked requests.

![Private AdGuard DNS dashboard companies](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/companies.png)

### Registro de consultas

This is a detailed log where you can check out the information on every single request and also sort requests by status, type, company, device, time, country.

![Private AdGuard DNS dashboard query log](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/query_log.png)

### Controle parental

To protect your child from online content you deem inappropriate, set up and activate the *Parental control* option. In addition to options such as "adult content" blocking and safe search, we've added the ability to manually specify domains for blocking and set a schedule for the *Parental control* to work accordingly.

![Private AdGuard DNS dashboard Parental Control](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)

> Caso você ainda não tenha o AdGuard DNS Privado, você pode [obtê-lo no site oficial](https://adguard-dns.io/).
