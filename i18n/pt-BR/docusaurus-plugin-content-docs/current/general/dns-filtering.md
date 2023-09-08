---
title: Filtragem de DNS
sidebar_position: 1
---

:::info

A maneira mais fácil de explorar os benefícios da filtragem de DNS é instalar o bloqueador de anúncios AdGuard ou experimentar o AdGuard DNS. Se você deseja filtrar o DNS no nível da rede, o AdGuard Home é a ferramenta para você

Quick links: [Download AdGuard Ad Blocker](https://agrd.io/download-kb-adblock), [Get AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Try AdGuard DNS](https://agrd.io/download-dns)

:::

Para entender melhor a filtragem de DNS, primeiro devemos responder à pergunta "O que é DNS?".

## O que é DNS?

DNS significa "Domain Name System", e seu objetivo é traduzir os nomes dos sites em algo que os navegadores possam entender, ou seja, endereços IP. Assim, cada vez que você acessa um site, seu navegador envia uma solicitação para um servidor especial (servidor DNS). Esse servidor examina o nome de domínio solicitado e responde com um endereço IP correspondente. Muito esquematicamente, pode ser representado assim:

![Como funciona o DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

O mesmo se aplica, é claro, a todos os aplicativos e programas que enviam solicitações da Web, não apenas aos navegadores.

## Como funciona a filtragem de DNS?

Quando você usa um dos aplicativos AdGuard que oferece suporte à filtragem de DNS, ele atua como um buffer entre seu dispositivo e o servidor DNS. Todas as solicitações de DNS que seus navegadores ou aplicativos estão prestes a enviar primeiro são processadas pelo AdGuard. Se você estiver usando o servidor DNS padrão fornecido pelo seu ISP, seu tráfego DNS provavelmente não está criptografado e está vulnerável a espionagem e sequestro. O AdGuard criptografará todas as suas solicitações de DNS antes que elas saiam do seu dispositivo, para que nenhum malfeitor tenha acesso ao seu conteúdo. Além disso, o AdGuard pode identificar solicitações para domínios de anúncios, rastreamento e/ou adultos e redirecioná-los para um "buraco negro" em vez de encaminhá-los para o servidor DNS. Saiba mais [a seguir](#local-dns-blocklists).

![Como funciona a filtragem de DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

A filtragem de DNS é uma ferramenta poderosa compatível com todos os principais aplicativos AdGuard: [AdGuard para Windows](https://adguard.com/adguard-windows/overview.html), [AdGuard para Mac](https://adguard.com/adguard-mac/overview.html), [AdGuard para Android](https://adguard.com/adguard-android/overview.html) e [AdGuard para iOS](https://adguard.com/adguard-ios/overview.html).

A filtragem DNS pode ser dividida em duas funções separadas: criptografar e redirecionar o tráfego DNS para servidores DNS e bloquear alguns domínios localmente aplicando listas de bloqueio DNS.

### Servidores DNS

Existem milhares de servidores DNS para escolher, e todos eles são únicos em suas propriedades e propósitos. A maioria simplesmente retorna o endereço IP do domínio solicitado, mas alguns têm funções adicionais: bloqueiam anúncios, rastreamento, domínios adultos e assim por diante. Atualmente, todos os principais servidores DNS empregam um ou mais protocolos de criptografia confiáveis: DNS sobre HTTPS, DNS sobre TLS. O AdGuard também fornece um serviço [DNS](https://adguard-dns.io/) e foi o primeiro do mundo a oferecer o novo e promissor protocolo de criptografia [DNS sobre QUIC](https://adguard.com/blog/dns-over-quic.html). O AdGuard possui diferentes servidores para diferentes objetivos. Este diagrama ilustra como funcionam os servidores de bloqueio do AdGuard:

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Outros provedores de DNS podem funcionar de maneira diferente, portanto, aprenda mais sobre eles antes de se comprometer com este ou aquele servidor DNS. Você pode encontrar a lista de alguns dos provedores de DNS mais populares [neste artigo](dns-providers.md). Todos os aplicativos AdGuard que oferecem suporte à funcionalidade DNS também têm uma lista de servidores DNS para escolher ou até permitem selecionar qualquer servidor DNS personalizado que você desejar.

### Listas de bloqueio de DNS locais

Mas, ao confiar apenas nos servidores DNS para filtrar seu tráfego DNS, você perde toda a flexibilidade. Se o servidor selecionado bloquear um domínio, você não poderá acessá-lo. Com o AdGuard, você nem precisa configurar um servidor DNS específico para filtrar o tráfego DNS. Todos os produtos AdGuard permitem que você empregue listas de bloqueio de DNS, sejam arquivos de hosts simples ou listas que usam [sintaxe mais avançada](dns-filtering-syntax.md). Eles funcionam de maneira semelhante às listas de bloqueio regulares: quando uma solicitação de DNS corresponde a uma das regras na lista de filtros ativos, ela é bloqueada. Para ser mais preciso, ele é redirecionado para um "buraco negro".

:::tip

In AdGuard for iOS, first you have to enable *Advanced mode* in settings in order to get access to DNS blocking.

:::

You can add as many custom blocklists as you wish. For instance, you can use [AdGuard DNS filter](https://github.com/AdguardTeam/AdGuardSDNSFilter). It quite literally blocks everything that AdGuard DNS server does, but in this case you are free to use any other DNS server. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple "use a blocking DNS server" setup.

There are hundreds of different DNS blocklists, you can look for them [here](https://filterlists.com/).

## Filtragem de DNS vs. filtragem de rede

Network filtering is what we call the 'regular' way AdGuard standalone apps process network traffic, hence the name. Feel free to brush up on it by reading [this article](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/).

First of all, we have to mention that with AdGuard you don't have to choose. You can always use both regular network filtering and DNS filtering at the same time. However, it's important to understand key differences between the two. DNS filtering has both its unique advantages and drawbacks:

**Pros of DNS filtering:**

1. Em algumas plataformas, essa é a única maneira de obter filtragem em todo o sistema. Por exemplo, no iOS apenas o navegador Safari suporta bloqueio de conteúdo no sentido familiar, para todo o resto há apenas filtragem de DNS.
1. Algumas formas de rastreamento (como [rastreamento CNAME-cloaked](https://adguard.com/blog/cname-tracking.html)) só podem ser tratadas pela filtragem de DNS.
1. O estágio de processamento de uma solicitação de DNS é o mais cedo possível para lidar com um anúncio ou um rastreador, o que ajuda a economizar um pouco da vida útil da bateria e do tráfego.

**Cons of DNS filtering:**

1. DNS filtering is "rough", meaning that it won't remove whitespaces that are left behind a blocked ad, or apply any sorts of cosmetic filtering. Many of the more complicated ads can't be blocked on DNS-level (or rather, they can, but only by blocking the entire domains which are being used for other purposes).

    ![Example of difference](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *An example of the difference between DNS filtering and network filtering*

1. It's not possible to know the origin of a DNS request, which means you can't distinguish between different apps on the DNS-level. This impacts the statistics negatively and makes it impossible to create app-specific filtering rules.

We recommend using DNS filtering in addition to network filtering, not instead of it, whenever possible.
