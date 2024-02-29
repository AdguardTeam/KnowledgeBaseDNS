---
title: Filtrado de DNS
sidebar_position: 1
---

:::info

La forma más fácil de explorar los beneficios del filtrado de DNS es instalar el bloqueador de anuncios AdGuard o probar AdGuard DNS. Si quieres filtrar DNS a nivel de red, AdGuard Home es la mejor herramienta para ti

Quick links: [Download AdGuard Ad Blocker](https://agrd.io/download-kb-adblock), [Get AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Try AdGuard DNS](https://agrd.io/download-dns)

:::

Para comprender mejor el filtrado de DNS, primero debemos responder a la pregunta "¿Qué es DNS?".

## ¿Qué es un DNS?

DNS significa «Sistema de nombres de dominio», y su propósito es traducir los nombres de los sitios web en algo que los navegadores puedan entender, es decir, direcciones IP. Por lo tanto, cada vez que visitas un sitio web, tu navegador envía una solicitud a un tipo especial de servidor (servidor DNS). Ese servidor mira el nombre de dominio solicitado y responde con una dirección IP correspondiente. De forma muy esquemática se puede representar de la siguiente manera:

![Cómo funciona el DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

Lo mismo se aplica, por supuesto, a todas las aplicaciones y programas que envían cualquier solicitud web, no solo a los navegadores.

## ¿Cómo funciona el filtrado de DNS?

Cuando utilizas una de las aplicaciones de AdGuard que admite el filtrado de DNS, esta actúa como un búfer entre tu dispositivo y el servidor DNS. Todas las solicitudes de DNS que tus navegadores o aplicaciones van a enviar, primero son procesadas por AdGuard. Si utilizas el servidor DNS predeterminado proporcionado por tu ISP, es probable que tu tráfico DNS no esté encriptado y sea vulnerable al snooping y al hijacking. AdGuard encriptará todas tus solicitudes de DNS antes de que salgan de tu dispositivo, para que nadie pueda acceder a tu contenido. Además, AdGuard puede identificar las solicitudes a los dominios de anuncios, de seguimiento y/o de adultos y redirigirlas a un "agujero negro" en lugar de reenviarlas al servidor DNS. [Más adelante](#local-dns-blocklists) se hablará de ello.

![Cómo funciona el filtrado DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

El filtrado de DNS es una herramienta poderosa y es compatible con todas las principales aplicaciones de AdGuard: [AdGuard para Windows](https://adguard.com/adguard-windows/overview.html), [AdGuard para Mac](https://adguard.com/adguard-mac/overview.html), [AdGuard para Android](https://adguard.com/adguard-android/overview.html) y [AdGuard para iOS](https://adguard.com/adguard-ios/overview.html).

El filtrado de DNS puede desglosarse en dos funciones distintas: cifrar y redirigir el tráfico DNS a los servidores DNS, y bloquear algunos dominios localmente, aplicando listas de bloqueo DNS.

### Servidores DNS

Hay miles de servidores DNS para elegir, y todos son únicos en sus propiedades y propósitos. La mayoría simplemente devuelve la dirección IP del dominio solicitado, pero algunos tienen funciones adicionales: bloquean publicidad, seguimiento, dominios para adultos, etc. Hoy en día, todos los principales servidores DNS emplean uno o varios protocolos de cifrado fiables: DNS-over-HTTPS, DNS-over-TLS. AdGuard also provides a [DNS service](https://adguard-dns.io/), and it was the world's first to offer the brand new and very promising [DNS-over-QUIC](https://adguard.com/blog/dns-over-quic.html) encryption protocol. AdGuard tiene diferentes servidores para diferentes objetivos. Este diagrama ilustra cómo funcionan los servidores de bloqueo de AdGuard:

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Otros proveedores de DNS pueden funcionar de forma diferente, así que infórmate sobre ellos antes de comprometerte con uno u otro servidor DNS. Puedes encontrar la lista de algunos de los proveedores de DNS más populares en [este artículo](dns-providers.md). Todas las aplicaciones de AdGuard compatibles con la funcionalidad DNS también tienen una lista de servidores DNS para elegir, o incluso permiten seleccionar cualquier servidor DNS personalizado que desees.

### Listas de bloqueo de DNS locales

Pero al depender sólo de los servidores DNS para filtrar tu tráfico DNS, se pierde toda la flexibilidad. Si él servidor seleccionado bloquea un dominio, no podrás acceder a él. Con AdGuard, ni siquiera es necesario configurar un servidor DNS específico para filtrar el tráfico DNS. Todos los productos de AdGuard te permiten emplear listas de bloqueo DNS, ya sean simples archivos de hosts o listas que utilizan [sintaxis más avanzada](dns-filtering-syntax.md). Funcionan de manera similar a las listas de bloqueo regulares: cuando una solicitud DNS coincide con una de las reglas de la lista de filtros activa, se bloquea. To be more precise, the DNS server gives a non-routable IP address for such a request.

:::tip

In AdGuard for iOS, first you have to enable *Advanced mode* in *Settings* in order to get access to DNS blocking.

:::

You can add as many custom blocklists as you wish. For instance, you can use [AdGuard DNS filter](https://github.com/AdguardTeam/AdGuardSDNSFilter). It quite literally blocks everything that AdGuard DNS server does, but in this case you are free to use any other DNS server. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple "use a blocking DNS server" setup.

There are hundreds of different DNS blocklists, you can look for them [here](https://filterlists.com/).

## Filtrado de DNS vs. filtrado de red

Network filtering is what we call the 'regular' way AdGuard standalone apps process network traffic, hence the name. Feel free to brush up on it by reading [this article](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/).

First of all, we have to mention that with AdGuard you don't have to choose. You can always use both regular network filtering and DNS filtering at the same time. However, it's important to understand key differences between the two. DNS filtering has both its unique advantages and drawbacks:

**Pros of DNS filtering:**

1. En algunas plataformas, esta es la única manera de lograr el filtrado en todo el sistema. Por ejemplo, en iOS sólo el navegador Safari admite el bloqueo de contenido en el sentido familiar, para todo lo demás sólo hay filtrado DNS.
1. Algunas formas de seguimiento (como [Seguimiento con capa CNAME](https://adguard.com/blog/cname-tracking.html)) sólo se puede tratar con el filtrado DNS.
1. La etapa de procesamiento de una solicitud DNS es la más temprana que podría tratar con un anuncio o un rastreador, esto ayuda a ahorrar un poco de duración de la batería y el tráfico.

**Cons of DNS filtering:**

1. DNS filtering is "coarse", which means it doesn't remove whitespace left behind a blocked ad or apply any sorts of cosmetic filtering. Many of the more complicated ads can't be blocked on DNS-level (or rather, they can, but only by blocking the entire domains which are being used for other purposes).

    ![Example of difference](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *An example of the difference between DNS filtering and network filtering*

1. It's not possible to know the origin of a DNS request, which means you can't distinguish between different apps on the DNS-level. This impacts the statistics negatively and makes it impossible to create app-specific filtering rules.

We recommend using DNS filtering in addition to network filtering, not instead of it, whenever possible.
