---
title: Filtrado de DNS
sidebar_position: 1
---

:::info

La forma más fácil de explorar los beneficios del filtrado de DNS es instalar el bloqueador de anuncios AdGuard o probar AdGuard DNS. Si quieres filtrar DNS a nivel de red, AdGuard Home es la mejor herramienta para ti

Enlaces rápidos: [Descargar el Bloqueador de Anuncios AdGuard](https://adguard.com/download.html?auto=true&utm_source=kb_dns), [Obtener AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Probar AdGuard DNS](https://adguard-dns.io/dashboard/)

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

Hay miles de servidores DNS para elegir, y todos son únicos en sus propiedades y propósitos. La mayoría simplemente devuelve la dirección IP del dominio solicitado, pero algunos tienen funciones adicionales: bloquean publicidad, seguimiento, dominios para adultos, etc. Hoy en día, todos los principales servidores DNS emplean uno o varios protocolos de cifrado fiables: DNS-over-HTTPS, DNS-over-TLS. AdGuard también proporciona un [servicio de DNS](https://adguard-dns.io/), y fue el pionero en ofrecer el nuevo y prometedor protocolo de cifrado [DNS-over-QUIC](https://adguard.com/blog/dns-over-quic.html). AdGuard tiene diferentes servidores para diferentes objetivos. Este diagrama ilustra cómo funcionan los servidores de bloqueo de AdGuard:

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Otros proveedores de DNS pueden funcionar de forma diferente, así que infórmate sobre ellos antes de comprometerte con uno u otro servidor DNS. Puedes encontrar la lista de algunos de los proveedores de DNS más populares en [este artículo](dns-providers.md). Todas las aplicaciones de AdGuard compatibles con la funcionalidad DNS también tienen una lista de servidores DNS para elegir, o incluso permiten seleccionar cualquier servidor DNS personalizado que desees.

### Listas de bloqueo de DNS locales

Pero al depender sólo de los servidores DNS para filtrar tu tráfico DNS, se pierde toda la flexibilidad. Si él servidor seleccionado bloquea un dominio, no podrás acceder a él. Con AdGuard, ni siquiera es necesario configurar un servidor DNS específico para filtrar el tráfico DNS. Todos los productos de AdGuard te permiten emplear listas de bloqueo DNS, ya sean simples archivos de hosts o listas que utilizan [sintaxis más avanzada](dns-filtering-syntax.md). Funcionan de manera similar a las listas de bloqueo regulares: cuando una solicitud DNS coincide con una de las reglas de la lista de filtros activa, se bloquea. Para ser más precisos, se desvía a un «agujero negro».
> En AdGuard para iOS, primero tienes que activar el «modo Avanzado» en la configuración para obtener acceso al bloqueo DNS.

Puede agregar tantas listas de bloqueo personalizadas como desee. Por ejemplo, puede utilizar [Filtro DNS de AdGuard](https://github.com/AdguardTeam/AdGuardSDNSFilter). Literalmente bloquea todo lo que hace el servidor DNS de AdGuard, pero en este caso no necesitas usar cualquier otro servidor DNS. Además, de esta manera puedes agregar más filtros o crear reglas de excepción personalizadas, todo lo cual sería imposible con una simple configuración de «usar un servidor DNS de bloqueo».
> Hay cientos de listas de bloques DNS diferentes, puede buscarlos [aquí](https://filterlists.com/).

## Filtrado de DNS vs. filtrado de red

El filtrado de red es lo que llamamos la forma regular de las aplicaciones independientes de AdGuard procesan el tráfico de red, de ahí el nombre. No dudes en repasarlo leyendo [este artículo](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/).

En primer lugar, tenemos que mencionar que con AdGuard no tienes que elegir. Siempre puedes utilizar el filtrado de red normal y el filtrado DNS al mismo tiempo. Sin embargo, es importante entender las diferencias clave entre ambos. El filtrado DNS tiene sus ventajas e inconvenientes únicos:

**Ventajas del filtrado DNS:**

1. En algunas plataformas, esta es la única manera de lograr el filtrado en todo el sistema. Por ejemplo, en iOS sólo el navegador Safari admite el bloqueo de contenido en el sentido familiar, para todo lo demás sólo hay filtrado DNS.
2. Algunas formas de seguimiento (como [Seguimiento con capa CNAME](https://adguard.com/blog/cname-tracking.html)) sólo se puede tratar con el filtrado DNS.
3. La etapa de procesamiento de una solicitud DNS es la más temprana que podría tratar con un anuncio o un rastreador, esto ayuda a ahorrar un poco de duración de la batería y el tráfico.

**Desventajas del filtrado DNS:**

1. El filtrado DNS es «aproximado», lo que significa que no eliminará espacios blancos que quedan detrás de un anuncio bloqueado, ni aplicará ningún tipo de filtrado cosmético. Muchos de los anuncios más complicados no pueden bloquearse a nivel DNS (o mejor dicho, se puede hacerlo, pero sólo bloqueando todos los dominios que se utilizan para otros fines).

![Ejemplo de diferencia](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *Un ejemplo de la diferencia entre el filtrado de DNS y el filtrado de red*

2. No es posible saber el origen de una solicitud DNS, lo que significa que no se puede distinguir entre diferentes aplicaciones en el nivel DNS. Esto afecta negativamente a las estadísticas y hace que sea imposible crear reglas de filtrado específicas de la aplicación.

Recomendamos utilizar el filtrado de DNS además del filtrado de red, no en su lugar, siempre que sea posible.
