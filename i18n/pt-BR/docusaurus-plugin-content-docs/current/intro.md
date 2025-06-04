---
title: Visão Geral
sidebar_position: 1
slug: /
---

## O que é DNS?

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/MSp7Ki03-LI" title="Player de vídeo do YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

DNS significa "Sistema de nomes de domínio" e seu objetivo é converter os nomes dos sites em endereços IP. Each time you go to a website, your browser sends a DNS query to a DNS server to figure out the IP address of the website. E um resolvedor de DNS regular simplesmente retorna o endereço IP do domínio solicitado.

:::note

O servidor DNS padrão geralmente é fornecido pelo seu ISP. Isso significa que seu ISP pode rastrear sua atividade online e vender logs para terceiros.

:::

![Your device always uses a DNS server to obtain the IP addresses of the domains that are accessed by various apps, services, etc.](https://cdn.adtidy.org/content/blog/articles/dns-cbs/scr1.png)

Existem também servidores DNS que podem bloquear determinados sites no nível DNS. How do they work? Quando seu dispositivo envia uma solicitação "ruim", seja um anúncio ou um rastreador, um servidor DNS impede a conexão respondendo com um endereço IP não roteável para um domínio bloqueado.

## Why use DNS for content blocking

Absolutely everything is connected to the Internet these days, from TV to smart light bulbs, from mobile devices to smart car. And where the Internet is, there are ads and trackers. In this case, a browser-based ad blocker has proven insufficient. To get a better protection, use DNS in combination with VPN and ad blocker.

Using DNS for content blocking has some advantages as well as obvious flaws. On the one hand, DNS is in the loop for queries from all devices and their apps. But, on the other hand, DNS blocking alone cannot provide cosmetic filtering.

## O que é AdGuard DNS?

O AdGuard DNS é um dos serviços de DNS mais focados na privacidade do mercado. Ele suporta protocolos de criptografia confiáveis como DNS-over-HTTPS, DNS-over-TLS e DNS-over-QUIC. Ele pode funcionar como um resolvedor de DNS regular no modo sem filtragem, mas também pode fornecer bloqueio de conteúdo no nível de DNS: identifique solicitações para domínios de anúncio, rastreamento e/ou adulto (opcionalmente) e responda com uma resposta vazia. O AdGuard possui seu próprio banco de dados atualizado frequentemente com nomes de domínios que servem anúncios, rastreadores e golpes.

![An approximate scheme of how AdGuard DNS works](https://cdn.adtidy.org/public/Adguard/Blog/scr2.png)

About 75% of AdGuard DNS traffic is encrypted. This is actually what differentiates content-blocking DNS servers from others. If you take a look at CloudFlare or Quad9 stats, you’ll see that encrypted DNS is just a small share of all queries.

AdGuard DNS exists in two main forms: [Public AdGuard DNS](public-dns/overview) and [Private AdGuard DNS](private-dns/overview). None of these services require the installation of apps. They are easy to set up and use, and provide users with the minimum features necessary to block ads, trackers, malicious websites, and adult content (if required). There are no restrictions on what devices they can be used with.

Despite so many similarities, private AdGuard DNS and public AdGuard DNS are two different products. Their main difference is that you can customize Private AdGuard DNS, while Public AdGuard DNS cannot.

## Módulo de filtragem de DNS em produtos AdGuard

All major AdGuard products, including AdGuard VPN, have a **DNS filtering module** where you can select a DNS server by a provider you trust. Of course, AdGuard DNS Default, AdGuard DNS Non-filtering and AdGuard DNS Family Protection are on the list. Also, AdGuard apps allow users to [easily configure and use AdGuard DNS](https://adguard-dns.io/public-dns.html) — Public or Private.
