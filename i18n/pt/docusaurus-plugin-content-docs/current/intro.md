---
title: Visão Geral
sidebar_position: 1
slug: /
---

## O que é DNS

DNS significa "Sistema de nomes de domínio" e seu objetivo é converter os nomes dos sites em endereços IP. Cada vez que você acessa um site, seu navegador envia uma consulta DNS a um servidor DNS para descobrir o endereço IP do site. E um resolvedor de DNS regular simplesmente retorna o endereço IP do domínio solicitado.

> O servidor DNS padrão geralmente é fornecido pelo seu ISP. Isso significa que seu ISP pode rastrear sua atividade online e vender logs para terceiros.

![Seu dispositivo sempre usa algum servidor DNS para obter endereços IP dos aplicativos de nome de domínio para os quais deseja navegar](https://cdn.adguard.com/public/Adguard/Blog/scr1.png)

Existem também servidores DNS que podem bloquear determinados sites no nível DNS. Como eles funcionam? Quando seu dispositivo envia uma solicitação "ruim", seja um anúncio ou um rastreador, um servidor DNS impede a conexão respondendo com um endereço IP não roteável para um domínio bloqueado.

## Por que usar DNS para bloqueio de conteúdo

Absolutamente tudo está conectado à Internet hoje em dia, de TV a lâmpadas inteligentes, de dispositivos móveis a carros inteligentes. E onde há Internet, há anúncios e rastreadores. Nesse caso, um bloqueador de anúncios baseado em navegador parece não ser suficiente. Para obter uma proteção melhor, use DNS em combinação com VPN e bloqueador de anúncios.

O uso de DNS para bloqueio de conteúdo tem algumas vantagens, além de falhas óbvias. Por um lado, o DNS não tem pontos cegos, pois observa todos os dispositivos e não apenas os navegadores. Mas, por outro lado, o bloqueio de DNS por si só não pode fornecer filtragem cosmética.

## O que é AdGuard DNS

O AdGuard DNS é um dos serviços de DNS mais amigáveis à privacidade do mercado. Ele suporta protocolos de criptografia confiáveis como DNS-over-HTTPS, DNS-over-TLS e DNS-over-QUIC. Ele pode funcionar como um resolvedor de DNS regular no modo sem filtragem, mas também pode fornecer bloqueio de conteúdo no nível de DNS: identifique solicitações para domínios de anúncio, rastreamento e/ou adulto (opcionalmente) e responda com uma resposta vazia. O AdGuard tem sua própria base de nomes de domínio que veiculam anúncios, rastreadores e fraudes, e é atualizado regularmente.

![Um esquema aproximado de como funciona o AdGuard DNS](https://cdn.adguard.com/public/Adguard/Blog/scr2.png)

> Cerca de 75% do tráfego DNS do AdGuard é criptografado. Na verdade, isso é o que diferencia os servidores DNS de bloqueio de conteúdo de outros. Se você der uma olhada nas estatísticas do CloudFlare ou Quad9, verá que o DNS criptografado é apenas uma pequena parte de todas as consultas.

O AdGuard DNS existe em duas formas principais: [AdGuard DNS público](public-dns/overview.md) e [AdGuard DNS privado](private-dns/overview.md). Ambos os serviços não requerem a instalação de nenhum aplicativo. Eles são fáceis de configurar e usar, e fornecem aos usuários os recursos mínimos necessários para bloquear anúncios, rastreadores, sites maliciosos e conteúdo adulto (se necessário). Não há restrições sobre quais dispositivos eles podem ser usados.

Apesar de tantas semelhanças, o AdGuard DNS privado e o AdGuard DNS público são dois serviços diferentes. A principal diferença é que você pode personalizar o AdGuard DNS privado, enquanto o AdGuard DNS público não pode.

## Módulo de filtragem de DNS em produtos AdGuard

Todos os principais produtos AdGuard, incluindo AdGuard VPN, têm um **módulo de filtragem de DNS** onde você pode selecionar um servidor DNS de um provedor de sua confiança. Obviamente, AdGuard DNS Default, AdGuard DNS Non-filtering e AdGuard DNS Family Protection estão na lista. Além disso, os aplicativos AdGuard permitem que os usuários [configurem e usem facilmente o AdGuard DNS](https://adguard-dns.io/en/public-dns.html) — público ou privado.







