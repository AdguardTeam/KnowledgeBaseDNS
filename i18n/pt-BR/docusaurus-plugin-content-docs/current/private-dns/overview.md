---
title: Visão Geral
sidebar_position: 1
---

:::info

Com o AdGuard DNS, você pode configurar seus servidores DNS privados para resolver solicitações de DNS e bloquear anúncios, rastreadores e domínios maliciosos antes que cheguem ao seu dispositivo

Quick link: [Try AdGuard DNS](https://agrd.io/download-dns)

:::

![Painel do AdGuard DNS Privado principal](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## What is Private AdGuard DNS?

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/ME3_Ms9LO8M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In addition to the benefits of a public DNS server (such as traffic encryption and domain blocklists), Private AdGuard DNS provides features like flexible customization, DNS statistics, and parental control, and is easily managed through a handy dashboard.

## Why you need Private AdGuard DNS

Hoje, você pode conectar qualquer coisa à Internet: TVs, geladeiras, lâmpadas inteligentes ou alto-falantes. Mas junto com as conveniências inegáveis, você obtém rastreadores e anúncios. Um bloqueador de anúncios simples baseado em navegador não o protegerá neste caso, mas o AdGuard DNS, que você pode configurar para filtrar tráfego, bloquear conteúdo e rastreadores, tem um efeito em todo o sistema.

Já temos o [AdGuard DNS público](../public-dns/overview.md) e [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome). Essas soluções funcionam bem para alguns usuários, mas para outros, o AdGuard DNS público não tem flexibilidade de configuração, enquanto o AdGuard Home não tem simplicidade. É aí que entra o AdGuard DNS privado. Ele tem o melhor dos dois mundos: oferece personalização, controle e informações - tudo através de um painel simples e fácil de usar.

## The difference between Private and Public AdGuard DNS

Aqui está uma comparação simples dos recursos disponíveis nos servidores AdGuard DNS Público e AdGuard DNS Privado.

| AdGuard DNS Público                            | AdGuard DNS Privado                                                                                           |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Criptografia de tráfego DNS                    | Criptografia de tráfego DNS                                                                                   |
| Listas de bloqueio de domínio pré-determinadas | Listas de bloqueio de domínio personalizáveis                                                                 |
| -                                              | Regras de filtragem de DNS personalizadas com recurso de importação/exportação                                |
| -                                              | Estatísticas de solicitações (veja para onde vão suas solicitações de DNS: quais países, quais empresas etc.) |
| -                                              | Registro de consulta detalhado                                                                                |
| -                                              | Controle parental                                                                                             |

## How to set up Private AdGuard DNS

1. Go to your [AdGuard DNS dashboard](https://agrd.io/download-dns) (if not logged in, log in using your AdGuard account)
1. Click "Connect device" and follow on-screen instructions

:::note Supported platforms:

- Android
- iOS
- Windows
- Mac
- Linux
- Roteadores
- Consolas de jogos
- Smart TVs

:::

Every device that you add in the AdGuard DNS panel has its own unique address that can be used if the device supports modern encrypted DNS protocols (DoH, DoT, and DoQ).

## Linked IP

If the device does not support encrypted DNS and you have to use plain DNS, there's another way to allow AdGuard DNS to recognize the device — link its IP address. In this case AdGuard DNS counts all plain DNS requests that come from that IP address towards that "device".

The only requirement for linking IP is that **it must be a residential IP address**.

:::note

A residential IP address is an IP address assigned to a device connected to a residential ISP. It is typically associated with a physical location and is allocated to individual homes or apartments. Residential IP addresses are used by regular Internet users for their everyday online activities, such as browsing the web, accessing social media platforms, sending emails, or streaming content.

:::

If you're trying to link a residential IP address and AdGuard DNS does not allow you to do that, please contact our support team at support@adguard.com.

## Private AdGuard DNS features

### Blocklists management

With "Blocklists" feature you can set which domains you want to block and which you don't. Сhoose from wide variety of blocklists for different purposes.

![Private AdGuard DNS dashboard blocklists](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### User rules

For times when pre-installed *Blocklists* with thousands of rules are not enough, we have a handy function called "User rules". Here you can add custom rules manually to block/unblock a certain domain or import custom rules lists (check out [DNS filtering rules syntax](../general/dns-filtering-syntax.md)). You can export the lists.

![Private AdGuard DNS dashboard user rules](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

### Statistics

In the *Statistics* tab you can see all the summarized statistics on DNS queries made by devices connected to your Private AdGuard  DNS. It shows the total number and geography of requests, the number of blocked requests, the list of companies the requests were addressed to, requests types and top requested domains.

![Private AdGuard DNS dashboard statistics](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/statistics.png)

### Traffic destination

This feature shows you where DNS requests sent by your devices go. On top of seeing the map of request destinations, you can filter the information by date, device and country.

![Private AdGuard DNS dashboard traffic](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/traffic_destination.png)

### Companies

This tab allows you to quickly check which companies send the most requests, and which companies have the most blocked requests.

![Private AdGuard DNS dashboard companies](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/companies.png)

### Query log

This is a detailed log where you can check out the information on every single request and also sort requests by status, type, company, device, time, country.

![Private AdGuard DNS dashboard query log](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/query_log.png)

### Controle parental

To protect your child from online content you deem inappropriate, set up and activate the *Parental control* option. In addition to options such as "adult content" blocking and safe search, we've added the ability to manually specify domains for blocking and set a schedule for the *Parental control* to work accordingly.

![Private AdGuard DNS dashboard Parental Control](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)

Caso você ainda não tenha o AdGuard DNS Privado, você pode [obtê-lo no site oficial](https://adguard-dns.io/).
