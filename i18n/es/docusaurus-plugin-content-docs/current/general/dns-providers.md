---
title: Proveedores de DNS conocidos
sidebar_position: 3
---

:::info

Aquí sugerimos una lista de proveedores de DNS de confianza. Para usarlos, primero instala el bloqueador de anuncios AdGuard o AdGuard VPN en tu dispositivo. Luego, en el mismo dispositivo, haz clic en el enlace de un proveedor en este artículo

Enlaces rápidos: [Descargar el bloqueador de anuncios AdGuard](https://adguard.com/download.html?auto=true&utm_source=kb_dns), [Descargar AdGuard VPN](https://adguard-vpn.com/download.html?auto=true&utm_source=kb_dns)

:::

### AdGuard DNS

[AdGuard DNS](https://adguard-dns.io/welcome.html) es una solución alternativa para el bloqueo de anuncios, la protección de la privacidad y el control parental. Ofrece el número de funciones necesarias para protegerte de los anuncios en línea, los rastreadores y el phishing, independientemente de la plataforma y el dispositivo que utilizas.

#### Predeterminado

Estos servidores bloquean anuncios, seguimiento y phishing.

| Protocolo        | Dirección                                                                      |                                                                                                                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4        | `94.140.14.14` y `94.140.15.15`                                                | [Agregar a AdGuard](adguard:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS)                                                   |
| DNS, IPv6        | `2a10:50c0::ad1:ff` y `2a10:50c0::ad2:ff`                                      | [Agregar a AdGuard](adguard:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS)                                         |
| DNS-over-HTTPS   | `https://dns.adguard-dns.com/dns-query`                                        | [Agregar a AdGuard](adguard:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS mediante TLS | `tls://dns.adguard-dns.com`                                                    | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC    | `quic://dns.adguard-dns.com`                                                   | [Agregar a AdGuard](adguard:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4   | Proveedor: `2.dnscrypt.default.ns1.adguard.com` IP: `94.140.14.14:5443`        | [Añadir a AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUso_OQhzIjIuZG5zY3J5cHQuZGVmYXVsdC5uczEuYWRndWFyZC5jb20)                                                                        |
| DNSCrypt, IPv6   | Proveedor: `2.dnscrypt.default.ns1.adguard.com` IP: `[2a10:50c0::ad1:ff]:5443` | [Añadir a AdGuard](sdns://AQIAAAAAAAAAGFsyYTEwOjUwYzA6OmFkMTpmZl06NTQ0MyDRK0fyUtzywrv4mRCG6vec5EldixbIoMQyLlLKPzkIcyIyLmRuc2NyeXB0LmRlZmF1bHQubnMxLmFkZ3VhcmQuY29t)                                                               |

#### Protección Familiar

Estos servidores proporcionan las funciones predeterminadas + el bloqueo de sitios web para adultos + la búsqueda segura.

| Protocolo      | Dirección                                                                      |                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `94.140.14.15` y `94.140.15.16`                                                | [Agregar a AdGuard](adguard:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS),  [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS)                                                        |
| DNS, IPv6      | `2a10:50c0::bad1:ff` y `2a10:50c0::bad2:ff`                                    | [Agregar a AdGuard](adguard:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS)                                             |
| DNS-over-HTTPS | `https://family.adguard-dns.com/dns-query`                                     | [Agregar a AdGuard](adguard:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS-over-TLS   | `tls://family.adguard-dns.com`                                                 | [Agregar a AdGuard](adguard:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS-over-QUIC  | `quic://family.adguard-dns.com`                                                | [Agregar a AdGuard](adguard:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4 | Proveedor:`2.dnscrypt.family.ns1.adguard.com` IP: `94.140.14.15:5443`          | [Añadir a AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNTo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6ITIuZG5zY3J5cHQuZmFtaWx5Lm5zMS5hZGd1YXJkLmNvbQ)                                                                               |
| DNSCrypt, IPv6 | Proveedor: `2.dnscrypt.family.ns1.adguard.com` IP: `[2a10:50c0::bad1:ff]:5443` | [Añadir a AdGuard](sdns://AQIAAAAAAAAAGVsyYTEwOjUwYzA6OmJhZDE6ZmZdOjU0NDMguDFd17FLbuMgpHDcLtaxqjmMyeWG-F1FRda4ybUAWrohMi5kbnNjcnlwdC5mYW1pbHkubnMxLmFkZ3VhcmQuY29t)                                                                     |

#### Sin filtrado

Cada uno de estos servidores proporciona una conexión segura y confiable, pero a diferencia de los servidores "Estándar" y "Protección familiar", no filtran nada.

| Protocolo         | Dirección                                                                       |                                                                                                                                                                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4         | `94.140.14.140` y `94.140.14.141`                                               | [Agregar a AdGuard](adguard:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS)                                                               |
| DNS, IPv6         | `2a10:50c0::1:ff` y `2a10:50c0::2:ff`                                           | [Agregar a AdGuard](adguard:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS)                                                           |
| DNS-over-HTTPS    | `https://unfiltered.adguard-dns.com/dns-query`                                  | [Agregar a AdGuard](adguard:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS) |
| DNS mediante TLS  | `tls://unfiltered.adguard-dns.com`                                              | [Agregar a AdGuard](adguard:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                         |
| DNS mediante QUIC | `quic://unfiltered.adguard-dns.com`                                             | [Agregar a AdGuard](adguard:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS)                       |
| DNSCrypt, IPv4    | Proveedor: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `94.140.14.140:5443`     | [Añadir a AdGuard](sdns://AQIAAAAAAAAAFlsyYTEwOjUwYzA6OjE6ZmZdOjU0NDMgtehE1rg6Pj4SaOtoH76nDePF-mjb1ogUHb8uwGay2volMi5kbnNjcnlwdC51bmZpbHRlcmVkLm5zMS5hZGd1YXJkLmNvbQ)                                                                           |
| DNSCrypt, IPv6    | Proveedor: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `[2a10:50c0::1:ff]:5443` | [Añadir a AdGuard](sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHLYThWKiCOQD39xV6UIjIuZG5zY3J5cHQuZGVmYXVsdC5uczIuYWRndWFyZC5jb20)                                                                              |

### Yandex DNS

[Yandex.DNS](https://dns.yandex.com/) es un servicio gratuito de DNS recursivo. Los servidores de Yandex.DNS están situados en Rusia, los países de la CEI y Europa Occidental. Las solicitudes de los usuarios son procesadas por el centro de datos más cercanos que proporciona altas velocidades de conexión.

#### Básico

En el modo "Básico", no hay filtrado de tráfico.

| Protocolo      | Dirección                                                              |                                                                                                                                                                   |
| -------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `77.88.8.8` y `77.88.8.1`                                              | [Agregar a AdGuard](adguard:add_dns_server?address=77.88.8.8&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.8&name=)                   |
| DNS, IPv6      | `2a02:6b8::feed:0ff` y `2a02:6b8:0:1::feed:0ff`                        | [Agregar a AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:0ff&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:0ff&name=) |
| DNSCrypt, IPv4 | Proveedor: `2.dnscrypt-cert.browser.yandex.net` IP: `77.88.8.78:15353` | [Añadir a AdGuard](sdns://AQQAAAAAAAAAEDc3Ljg4LjguNzg6MTUzNTMg04TAccn3RmKvKszVe13MlxTUB7atNgHhrtwG1W1JYyciMi5kbnNjcnlwdC1jZXJ0LmJyb3dzZXIueWFuZGV4Lm5ldA)         |

#### Seguro

En el modo "Seguro", se ofrece protección contra sitios web maliciosos y fraudulentos.

| Protocolo | Dirección                                       |                                                                                                                                                                   |
| --------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.88` y `77.88.8.2`                      | [Agregar a AdGuard](adguard:add_dns_server?address=77.88.8.88&name=),  [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.88&name=)                |
| DNS, IPv6 | `2a02:6b8::feed:bad` y `2a02:6b8:0:1::feed:bad` | [Agregar a AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:bad&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:bad&name=) |

#### Familia

En el modo "Familia", se brinda protección contra sitios infectados, fraudulentos y para adultos.

| Protocolo | Dirección                                       |                                                                                                                                                                   |
| --------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `77.88.8.3` y `77.88.8.7`                       | [Agregar a AdGuard](adguard:add_dns_server?address=77.88.8.3&name=),  [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=77.88.8.3&name=)                  |
| DNS, IPv6 | `2a02:6b8::feed:a11` y `2a02:6b8:0:1::feed:a11` | [Agregar a AdGuard](adguard:add_dns_server?address=2a02:6b8::feed:a11&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2a02:6b8::feed:a11&name=) |

### CleanBrowsing

[CleanBrowsing](https://cleanbrowsing.org/) es un servicio DNS que proporciona filtrado personalizable. Este servicio ofrece una forma segura de navegar por la web sin contenidos inapropiados.

#### Filtro Familiar

Bloquea el contenido de todos los sitios para adultos, pornográficos y explícitos, incluidos los dominios proxy & VPN y los sitios de contenido mixto.

| Protocolo          | Dirección                                                 |                                                                                                                                                                                                                                                                                       |
| ------------------ | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `185.228.168.168` y `185.228.169.168`                     | [Agregar a AdGuard](adguard:add_dns_server?address=185.228.168.168&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.168&name=)                                                                                                                           |
| DNS, IPv6          | `2a0d:2a00:1::` y `2a0d:2a00:2::`                         | [Agregar a AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::&name=)                                                                                                                               |
| DNSCrypt, IPv4     | Proveedor: `cleanbrowsing.org` IP: `185.228.168.168:8443` | [Añadir a AdGuard](sdns://AQMAAAAAAAAAFDE4NS4yMjguMTY4LjE2ODo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                               |
| DNSCrypt, IPv6     | Proveedor: `cleanbrowsing.org` IP: `[2a0d:2a00:1::]:8443` | [Añadir a AdGuard](sdns://AQMAAAAAAAAAFFsyYTBkOjJhMDA6MTo6XTo4NDQzILysMvrVQ2kXHwgy1gdQJ8MgjO7w6OmflBjcd2Bl1I8pEWNsZWFuYnJvd3Npbmcub3Jn)                                                                                                                                               |
| DNS mediante HTTPS | `https://doh.cleanbrowsing.org/doh/family-filter/`        | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/family-filter/&name=doh.cleanbrowsing.org)               |
| DNS mediante TLS   | `tls://family-filter-dns.cleanbrowsing.org`               | [Agregar a AdGuard](adguard:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://family-filter-dns.cleanbrowsing.org&name=family-filter-dns.cleanbrowsing.org) |

#### Filtro para adultos

Menos restrictivo que el filtro familiar, sólo bloquea el acceso a contenidos para adultos y a dominios maliciosos y de phishing.

| Protocolo          | Dirección                                                  |                                                                                                                                                                                                                                                                                   |
| ------------------ | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `185.228.168.10` y `185.228.169.11`                        | [Agregar a AdGuard](adguard:add_dns_server?address=185.228.168.10&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.10&name=)                                                                                                                         |
| DNS, IPv6          | `2a0d:2a00:1::1` y `2a0d:2a00:2::1`                        | [Agregar a AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::1&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::1&name=)                                                                                                                         |
| DNSCrypt, IPv4     | Proveedor: `cleanbrowsing.org` IP: `185.228.168.10:8443`   | [Añadir a AdGuard](sdns://AQMAAAAAAAAAEzE4NS4yMjguMTY4LjEwOjg0NDMgvKwy-tVDaRcfCDLWB1AnwyCM7vDo6Z-UGNx3YGXUjykRY2xlYW5icm93c2luZy5vcmc)                                                                                                                                            |
| DNSCrypt, IPv6     | Proveedor: `cleanbrowsing.org` IP: `[2a0d:2a00:1::1]:8443` | [Añadir a AdGuard](sdns://AQMAAAAAAAAAFVsyYTBkOjJhMDA6MTo6MV06ODQ0MyC8rDL61UNpFx8IMtYHUCfDIIzu8Ojpn5QY3HdgZdSPKRFjbGVhbmJyb3dzaW5nLm9yZw)                                                                                                                                         |
| DNS mediante HTTPS | `https://doh.cleanbrowsing.org/doh/adult-filter/`          | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/adult-filter/&name=doh.cleanbrowsing.org)             |
| DNS mediante TLS   | `tls://adult-filter-dns.cleanbrowsing.org`                 | [Agregar a AdGuard](adguard:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://adult-filter-dns.cleanbrowsing.org&name=adult-filter-dns.cleanbrowsing.org) |

#### Filtro de Seguridad

Bloquea phishing, spam y dominios maliciosos.

| Protocolo          | Dirección                                            |                                                                                                                                                                                                                                                                                               |
| ------------------ | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `185.228.168.9` y `185.228.169.9`                    | [Agregar a AdGuard](adguard:add_dns_server?address=185.228.168.9&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=185.228.168.9&name=)                                                                                                                                       |
| DNS, IPv6          | `2a0d:2a00:1::2` y `2a0d:2a00:2::2`                  | [Agregar a AdGuard](adguard:add_dns_server?address=2a0d:2a00:1::2&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:2a00:1::2&name=)                                                                                                                                     |
| DNS mediante HTTPS | `https://doh.cleanbrowsing.org/doh/security-filter/` | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.cleanbrowsing.org/doh/security-filter/&name=doh.cleanbrowsing.org)                   |
| DNS mediante TLS   | `tls://security-filter-dns.cleanbrowsing.org`        | [Agregar a AdGuard](adguard:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://security-filter-dns.cleanbrowsing.org&name=security-filter-dns.cleanbrowsing.org) |

### Comodo Secure DNS

[Comodo Secure DNS](https://comodo.com/secure-dns/) es un servicio de resolución de nombres de dominio que resuelve sus solicitudes de DNS a través de una red mundial de servidores DNS. Elimina los anuncios excesivos y protege del phishing y del spyware.

| Protocolo      | Dirección                                                              |                                                                                                                                                           |
| -------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `8.26.56.26` y `8.20.247.20`                                           | [Agregar a AdGuard](adguard:add_dns_server?address=8.26.56.26&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=8.26.56.26&name=)         |
| DNSCrypt, IPv4 | Proveedor: `2.dnscrypt-cert.shield-2.dnsbycomodo.com` IP: `8.20.247.2` | [Añadir a AdGuard](sdns://AQAAAAAAAAAACjguMjAuMjQ3LjIg0sJUqpYcHsoXmZb1X7yAHwg2xyN5q1J-zaiGG-Dgs7AoMi5kbnNjcnlwdC1jZXJ0LnNoaWVsZC0yLmRuc2J5Y29tb2RvLmNvbQ) |

### Neustar Recursive DNS

[DNS Recursivo de Neustar](https://www.security.neustar/digital-performance/dns-services/recursive-dns) es un servicio gratuito de DNS recursivo basado en la nube que ofrece un acceso rápido y fiable a sitios y aplicaciones en línea con seguridad e inteligencia de amenazas integradas.

#### Fiabilidad & Rendimiento 1

Estos servidores brindan búsquedas de DNS confiables y rápidas sin bloquear ninguna categoría específica.

| Protocolo | Dirección                             |                                                                                                                                                             |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.1` y `156.154.71.1`       | [Agregar a AdGuard](adguard:add_dns_server?address=156.154.70.1&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.1&name=)       |
| DNS, IPv6 | `2610:a1:1018::1` y `2610:a1:1019::1` | [Agregar a AdGuard](adguard:add_dns_server?address=2610:a1:1018::1&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::1&name=) |

#### Fiabilidad & Rendimiento 2*

Estos servidores brindan búsquedas de DNS confiables y rápidas sin bloquear ninguna categoría específica y también evitan el redireccionamiento de las respuestas de NXDomain (dominio inexistente) a las páginas de destino.

| Protocolo | Dirección                             |                                                                                                                                                             |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.5` y `156.154.71.5`       | [Agregar a AdGuard](adguard:add_dns_server?address=156.154.70.5&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.5&name=)       |
| DNS, IPv6 | `2610:a1:1018::5` y `2610:a1:1019::5` | [Agregar a AdGuard](adguard:add_dns_server?address=2610:a1:1018::5&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::5&name=) |

#### Protección contra amenazas

Estos servidores brindan protección contra dominios maliciosos y también incluyen características de "Fiabilidad & Rendimiento".

| Protocolo | Dirección                             |                                                                                                                                                             |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.2` y `156.154.71.2`       | [Agregar a AdGuard](adguard:add_dns_server?address=156.154.70.2&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.2&name=)       |
| DNS, IPv6 | `2610:a1:1018::2` y `2610:a1:1019::2` | [Agregar a AdGuard](adguard:add_dns_server?address=2610:a1:1018::2&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::2&name=) |

#### Seguridad para la Familia

Estos servidores brindan bloqueo de contenido para adultos y también incluyen características de "Confiabilidad & Rendimiento" + "Protección contra amenazas".

| Protocolo | Dirección                             |                                                                                                                                                             |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.3` y `156.154.71.3`       | [Agregar a AdGuard](adguard:add_dns_server?address=156.154.70.3&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.3&name=)       |
| DNS, IPv6 | `2610:a1:1018::3` y `2610:a1:1019::3` | [Agregar a AdGuard](adguard:add_dns_server?address=2610:a1:1018::3&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::3&name=) |

#### Business Secure

Estos servidores brindan bloqueo de contenido no deseado y pérdida de tiempo. También incluyen características de "Confiabilidad & Rendimiento" + "Protección contra amenazas" + "Family Secure".

| Protocolo | Dirección                             |                                                                                                                                                             |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `156.154.70.4` y `156.154.71.4`       | [Agregar a AdGuard](adguard:add_dns_server?address=156.154.70.4&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=156.154.70.4&name=)       |
| DNS, IPv6 | `2610:a1:1018::4` y `2610:a1:1019::4` | [Agregar a AdGuard](adguard:add_dns_server?address=2610:a1:1018::4&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2610:a1:1018::4&name=) |

### Cisco OpenDNS

[Cisco OpenDNS](https://www.opendns.com/) es un servicio que amplía el DNS mediante la incorporación de funciones como filtrado de contenido y protección contra phishing sin tiempo de inactividad.

#### Estándar

Servidores DNS con filtrado personalizado que protege tu dispositivo contra malware.

| Protocolo          | Dirección                                                      |                                                                                                                                                                                                                               |
| ------------------ | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `208.67.222.222` y `208.67.220.220`                            | [Agregar a AdGuard](adguard:add_dns_server?address=208.67.222.222&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.222&name=)                                                                     |
| DNS, IPv6          | `2620:119:35::35` y `2620:119:53::53`                          | [Agregar a AdGuard](adguard:add_dns_server?address=2620:119:35::35&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2620:119:35::35&name=)                                                                   |
| DNSCrypt, IPv4     | Proveedor: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.220`  | [Añadir a AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMjIwILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                                 |
| DNSCrypt, IPv6     | Proveedor: `2.dnscrypt-cert.opendns.com` IP: `[2620:0:ccc::2]` | [Añadir a AdGuard](sdns://AQAAAAAAAAAAD1syNjIwOjA6Y2NjOjoyXSC3NRFAIG8iXT4r2CLX_WkeocM8yNZmjQy-BL-rykP7eRsyLmRuc2NyeXB0LWNlcnQub3BlbmRucy5jb20)                                                                                |
| DNS mediante HTTPS | `https://doh.opendns.com/dns-query`                            | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.opendns.com/dns-query&name=doh.opendns.com) |

#### FamilyShield

Servidores OpenDNS que brindan bloqueo de contenido para adultos.

| Protocolo          | Dirección                                                     |                                                                                                                                                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `208.67.222.123` y `208.67.220.123`                           | [Agregar a AdGuard](adguard:add_dns_server?address=208.67.222.123&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=208.67.222.123&name=)                                                                                                                         |
| DNSCrypt, IPv4     | Proveedor: `2.dnscrypt-cert.opendns.com` IP: `208.67.220.123` | [Añadir a AdGuard](sdns://AQAAAAAAAAAADjIwOC42Ny4yMjAuMTIzILc1EUAgbyJdPivYItf9aR6hwzzI1maNDL4Ev6vKQ_t5GzIuZG5zY3J5cHQtY2VydC5vcGVuZG5zLmNvbQ)                                                                                                                                     |
| DNS mediante HTTPS | `https://doh.familyshield.opendns.com/dns-query`              | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.familyshield.opendns.com/dns-query&name=doh.familyshield.opendns.com) |

### Google DNS

[Google DNS](https://developers.google.com/speed/public-dns/) es un servicio de resolución de DNS global y gratuito que puedes utilizar como alternativa a tu proveedor de DNS actual.

| Protocolo          | Dirección                                       |                                                                                                                                                                                                           |
| ------------------ | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `8.8.8.8` y `8.8.4.4`                           | [Agregar a AdGuard](adguard:add_dns_server?address=8.8.8.8&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=8.8.8.8&name=)                                                               |
| DNS, IPv6          | `2001:4860:4860::8888` y `2001:4860:4860::8844` | [Agregar a AdGuard](adguard:add_dns_server?address=2001:4860:4860::8888&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2001:4860:4860::8888&name=)                                     |
| DNS mediante HTTPS | `https://dns.google/dns-query`                  | [Agregar a AdGuard](adguard:add_dns_server?address=https://dns.google/dns-query&name=dns.google), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.google/dns-query&name=dns.google) |
| DNS mediante TLS   | `tls://dns.google`                              | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dns.google&name=dns.google), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.google&name=dns.google)                         |

### Cloudflare DNS

[Cloudflare DNS](https://1.1.1.1/) es un servicio de DNS gratuito y rápido que funciona como un servidor de nombres recursivo que brinda resolución de nombres de dominio para cualquier host en Internet.

#### Estándar

| Protocolo            | Dirección                                       |                                                                                                                                                                                                                                                                           |
| -------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.1` y `1.0.0.1`                           | [Agregar a AdGuard](adguard:add_dns_server?address=1.1.1.1&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.1&name=)                                                                                                                               |
| DNS, IPv6            | `2606:4700:4700::1111` y `2606:4700:4700::1001` | [Agregar a AdGuard](adguard:add_dns_server?address=2606:4700:4700::1111&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1111&name=)                                                                                                     |
| DNS-over-HTTPS, IPv4 | `https://dns.cloudflare.com/dns-query`          | [Agregar a AdGuard](adguard:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cloudflare.com/dns-query&name=dns.cloudflare.com)                                 |
| DNS-over-HTTPS, IPv6 | `https://dns.cloudflare.com/dns-query`          | [Agregar a AdGuard](adguard:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cloudflare.com:53/dns-query&name=dns.cloudflare.com)                           |
| DNS mediante TLS     | `tls://1dot1dot1dot1.cloudflare-dns.com`        | [Agregar a AdGuard](adguard:add_dns_server?address=tls://1dot1dot1dot1.cloudflare-dns.com&name=1dot1dot1dot1.cloudflare-dns.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://1dot1dot1dot1.cloudflare-dns.com&name=1dot1dot1dot1.cloudflare-dns.com) |

#### Solo bloqueo de malware

| Protocolo          | Dirección                                       |                                                                                                                                                                                                                                                                               |
| ------------------ | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `1.1.1.2` y `1.0.0.2`                           | [Agregar a AdGuard](adguard:add_dns_server?address=1.1.1.2&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.2&name=)                                                                                                                                   |
| DNS, IPv6          | `2606:4700:4700::1112` y `2606:4700:4700::1002` | [Añadir a AdGuard](adguard:add_dns_server?address=2606:4700:4700::1112&name=), [Añadir a AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1112&name=)                                                                                                           |
| DNS mediante HTTPS | `https://security.cloudflare-dns.com/dns-query` | [Agregar a AdGuard](adguard:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://security.cloudflare-dns.com/dns-query&name=security.cloudflare-dns.com) |
| DNS mediante TLS   | `tls://security.cloudflare-dns.com`             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://security.cloudflare-dns.com&name=security.cloudflare-dns.com)                         |

#### Bloqueo de malware y contenido para adultos

| Protocolo            | Dirección                                       |                                                                                                                                                                                                                                                                       |
| -------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4            | `1.1.1.3` y `1.0.0.3`                           | [Agregar a AdGuard](adguard:add_dns_server?address=1.1.1.3&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=1.1.1.3&name=)                                                                                                                           |
| DNS, IPv6            | `2606:4700:4700::1113` y `2606:4700:4700::1003` | [Agregar a AdGuard](adguard:add_dns_server?address=2606:4700:4700::1113&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2606:4700:4700::1113&name=)                                                                                                 |
| DNS-over-HTTPS, IPv4 | `https://family.cloudflare-dns.com/dns-query`   | [Agregar a AdGuard](adguard:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://family.cloudflare-dns.com/dns-query&name=family.cloudflare-dns.com) |
| DNS mediante TLS     | `tls://family.cloudflare-dns.com`               | [Agregar a AdGuard](adguard:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.cloudflare-dns.com&name=family.cloudflare-dns.com)                         |

### Quad9 DNS

[Quad9 DNS](https://quad9.net/) es una plataforma DNS gratuita, recursiva y anycast que brinda protección de alto rendimiento, privacidad y seguridad contra el phishing y el spyware. Los servidores Quad9 no proporcionan un componente de censura.

#### Estándar

Servidores DNS regulares que brindan protección contra phishing y spyware. Incluyen listas de bloqueo, validación de DNSSEC y otras características de seguridad.

| Protocolo          | Dirección                                                       |                                                                                                                                                                                                                       |
| ------------------ | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `9.9.9.9` y `149.112.112.112`                                   | [Agregar a AdGuard](adguard:add_dns_server?address=9.9.9.9&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.9&name=)                                                                           |
| DNS, IPv6          | `2620:fe::fe` IP: `2620:fe::fe:9`                               | [Agregar a AdGuard](adguard:add_dns_server?address=2620:fe::fe&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::fe&name=)                                                                   |
| DNSCrypt, IPv4     | Proveedor: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.9:8443`       | [Añadir a AdGuard](sdns://AQMAAAAAAAAADDkuOS45Ljk6ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                               |
| DNSCrypt, IPv6     | Proveedor: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe]:8443` | [Añadir a AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjpmZV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                       |
| DNS mediante HTTPS | `https://dns.quad9.net/dns-query`                               | [Agregar a AdGuard](adguard:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.quad9.net/dns-query&name=dns.quad9.net) |
| DNS mediante TLS   | `tls://dns.quad9.net`                                           | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.quad9.net&name=dns.quad9.net)                         |

#### Inseguro

Los servidores DNS no seguros no proporcionan listas de bloqueo de seguridad, DNSSEC o subred de cliente EDNS.

| Protocolo          | Dirección                                                          |                                                                                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `9.9.9.10` y `149.112.112.10`                                      | [Agregar a AdGuard](adguard:add_dns_server?address=9.9.9.10&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.100&name=)                                                                                |
| DNS, IPv6          | `2620:fe::10` IP: `2620:fe::fe:10`                                 | [Agregar a AdGuard](adguard:add_dns_server?address=2620:fe::10&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::10&name=)                                                                           |
| DNSCrypt, IPv4     | Proveedor: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.10:8443`         | [Añadir a AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjEwOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                     |
| DNSCrypt, IPv6     | Proveedor: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::fe:10]:8443` | [Añadir a AdGuard](sdns://AQMAAAAAAAAAFVsyNjIwOmZlOjpmZToxMF06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                           |
| DNS mediante HTTPS | `https://dns10.quad9.net/dns-query`                                | [Agregar a AdGuard](adguard:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dns10.quad9.net/dns-query&name=dns10.quad9.net) |
| DNS mediante TLS   | `tls://dns10.quad9.net`                                            | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns10.quad9.net&name=dns10.quad9.net)                         |

#### Compatibilidad [ECS](https://en.wikipedia.org/wiki/EDNS_Client_Subnet)

La subred de cliente EDNS es un método que incluye componentes de datos de direcciones IP de usuario final en las solicitudes que se envían a los servidores DNS autoritativos. Proporciona lista de bloqueo de seguridad, DNSSEC, subred de cliente EDNS.

| Protocolo          | Dirección                                                       |                                                                                                                                                                                                                               |
| ------------------ | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `9.9.9.11` y `149.112.112.11`                                   | [Agregar a AdGuard](adguard:add_dns_server?address=9.9.9.11&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=9.9.9.11&name=)                                                                                 |
| DNS, IPv6          | `2620:fe::11` IP: `2620:fe::fe:11`                              | [Agregar a AdGuard](adguard:add_dns_server?address=2620:fe::11&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2620:fe::11&name=)                                                                           |
| DNSCrypt, IPv4     | Proveedor: `2.dnscrypt-cert.quad9.net` IP: `9.9.9.11:8443`      | [Añadir a AdGuard](sdns://AQMAAAAAAAAADTkuOS45LjExOjg0NDMgZ8hHuMh1jNEgJFVDvnVnRt803x2EwAuMRwNo34Idhj4ZMi5kbnNjcnlwdC1jZXJ0LnF1YWQ5Lm5ldA)                                                                                     |
| DNSCrypt, IPv6     | Proveedor: `2.dnscrypt-cert.quad9.net` IP: `[2620:fe::11]:8443` | [Añadir a AdGuard](sdns://AQMAAAAAAAAAElsyNjIwOmZlOjoxMV06ODQ0MyBnyEe4yHWM0SAkVUO-dWdG3zTfHYTAC4xHA2jfgh2GPhkyLmRuc2NyeXB0LWNlcnQucXVhZDkubmV0)                                                                               |
| DNS mediante HTTPS | `https://dns11.quad9.net/dns-query`                             | [Agregar a AdGuard](adguard:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dns11.quad9.net/dns-query&name=dns11.quad9.net) |
| DNS mediante TLS   | `tls://dns11.quad9.net`                                         | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns11.quad9.net&name=dns11.quad9.net)                         |

### Verisign Public DNS

[Verisign Public DNS](https://www.verisign.com/security-services/public-dns/) es un servicio de DNS gratuito que ofrece mayor estabilidad y seguridad de DNS que otras alternativas. Verisign respeta la privacidad de los usuarios: no vende datos DNS públicos a terceros ni redirige las consultas de los usuarios para mostrarles anuncios.

| Protocolo | Dirección                             |                                                                                                                                                           |
| --------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `64.6.64.6` y `64.6.65.6`             | [Agregar a AdGuard](adguard:add_dns_server?address=64.6.64.6&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=64.6.64.6&name=)           |
| DNS, IPv6 | `2620:74:1b::1:1` y `2620:74:1c::2:2` | [Añadir a AdGuard](adguard:add_dns_server?address=2620:74:1b::1:1&name=), [Añadir a AdGuard VPN](adguardvpn:add_dns_server?address=2620:74:1b::1:1&name=) |

### SWITCH DNS

[SWITCH DNS](https://www.switch.ch/security/info/public-dns/) es un servicio de DNS público suizo proporcionado por [switch.ch](https://www.switch.ch/).

| Protocolo          | Dirección                                                                            |                                                                                                                                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | Proveedor: `dns.switch.ch` IP: `130.59.31.248`                                       | [Agregar a AdGuard](adguard:add_dns_server?address=130.59.31.248&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=130.59.31.248&name=)                                                               |
| DNS, IPv6          | Proveedor: `dns.switch.ch` IPv6: `2001:620:0:ff::2`                                  | [Agregar a AdGuard](adguard:add_dns_server?address=2001:620:0:ff::2&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2001:620:0:ff::2&name=)                                                         |
| DNS mediante HTTPS | `https://dns.switch.ch/dns-query`                                                    | [Agregar a AdGuard](adguard:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.switch.ch/dns-query&name=dns.switch.ch) |
| DNS mediante TLS   | Nombre de host: `tls://dns.switch.ch` IP: `130.59.31.248` y IPv6: `2001:620:0:ff::2` | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.switch.ch&name=dns.switch.ch)                         |

### Dyn DNS

[Dyn DNS](https://help.dyn.com/internet-guide-setup/) es un servicio DNS alternativo gratuito de Dyn.

| Protocolo | Dirección                         |                                                                                                                                                         |
| --------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `216.146.35.35` y `216.146.36.36` | [Agregar a AdGuard](adguard:add_dns_server?address=216.146.35.35&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=216.146.35.35&name=) |

### DNS.WATCH

[DNS.WATCH](https://dns.watch/) es un servidor rápido y gratuito sin registro con función de protección de la privacidad.

| Protocolo | Dirección                                                   |                                                                                                                                                                                   |
| --------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `84.200.69.80` y `84.200.70.40`                             | [Agregar a AdGuard](adguard:add_dns_server?address=84.200.69.80&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=84.200.69.80&name=)                             |
| DNS, IPv6 | `2001:1608:10:25::1c04:b12f` y `2001:1608:10:25::9249:d69b` | [Agregar a AdGuard](adguard:add_dns_server?address=2001:1608:10:25::1c04:b12f&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2001:1608:10:25::1c04:b12f&name=) |

### SkyDNS RU

[Soluciones SkyDNS](https://www.skydns.ru/en/) para filtrado de contenido y seguridad en Internet.

| Protocolo | Dirección        |                                                                                                                                                           |
| --------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `193.58.251.251` | [Agregar a AdGuard](adguard:add_dns_server?address=193.58.251.251&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=193.58.251.251&name=) |

### Comss.one DNS

[Comss.one DNS](https://www.comss.ru/page.php?id=7315) es un servicio DNS rápido y seguro con protección contra anuncios, seguimiento y phishing.

#### West DNS Server (Principal)

| Protocolo          | Dirección                         |                                                                                                                                                                                                                       |
| ------------------ | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante HTTPS | `https://dns.comss.one/dns-query` | [Agregar a AdGuard](adguard:add_dns_server?address=https://dns.comss.one/dns-query&name=dns.comss.one), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.comss.one/dns-query&name=dns.comss.one) |
| DNS mediante TLS   | `tls://dns.comss.one`             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dns.comss.one&name=dns.comss.one), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.comss.one&name=dns.comss.one)                         |
| DNS-over-QUIC      | `quic://dns.comss.one:784`        | [Agregar a AdGuard](adguard:add_dns_server?address=quic://dns.comss.one:784&name=dns.comss.one:784), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.comss.one:784&name=dns.comss.one:784)       |

#### East DNS Server (Sibéria e Extremo Oriente)

| Protocolo          | Dirección                              |                                                                                                                                                                                                                                           |
| ------------------ | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante HTTPS | `https://dns.east.comss.one/dns-query` | [Agregar a AdGuard](adguard:add_dns_server?address=https://dns.east.comss.one/dns-query&name=dns.east.comss.one), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.east.comss.one/dns-query&name=dns.east.comss.one) |
| DNS mediante TLS   | `tls://dns.east.comss.one`             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dns.east.comss.one&name=dns.east.comss.one), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.east.comss.one&name=dns.east.comss.one)                         |
| DNS-over-QUIC      | `quic://dns.east.comss.one`            | [Agregar a AdGuard](adguard:add_dns_server?address=quic://dns.east.comss.one:784&name=dns.east.comss.one:784), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=quic://dns.east.comss.one:784&name=dns.east.comss.one:784)       |

### Safe DNS

[Safe DNS](https://www.safedns.com/) es una red anycast global que consta de servidores ubicados en todo el mundo, tanto en América, Europa, África, Australia y el Extremo Oriente para garantizar una resolución de DNS rápida y confiable desde cualquier punto del mundo.

| Protocolo | Dirección                       |                                                                                                                                                       |
| --------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `195.46.39.39` y `195.46.39.40` | [Agregar a AdGuard](adguard:add_dns_server?address=195.46.39.39&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=195.46.39.39&name=) |

### CIRA Canadian Shield DNS

[CIRA Shield DNS](https://www.cira.ca/cybersecurity-services/canadianshield/how-works) protege contra el robo de datos personales y financieros. Mantén los virus, ransomware y otro malware fuera de tu hogar.

#### Privado

En modo "Privado", solo resolución DNS.

| Protocolo              | Dirección                                                                                               |                                                                                                                                                                                                                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4              | `149.112.121.10` y `149.112.122.10`                                                                     | [Agregar a AdGuard](adguard:add_dns_server?address=149.112.121.10&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.10&name=)                                                                                                                                 |
| DNS, IPv6              | `2620:10A:80BB::10` y `2620:10A:80BC::10`                                                               | [Agregar a AdGuard](adguard:add_dns_server?address=2620:10A:80BB::10&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::10&name=)                                                                                                                           |
| DNS mediante HTTPS     | `https://private.canadianshield.cira.ca/dns-query`                                                      | [Agregar a AdGuard](adguard:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://private.canadianshield.cira.ca/dns-query&name=private.canadianshield.cira.ca) |
| DNS-over-TLS - Privado | Nombre de host: `tls://private.canadianshield.cira.ca` IP: `149.112.121.10` e IPv6: `2620:10A:80BB::10` | [Agregar a AdGuard](adguard:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://private.canadianshield.cira.ca&name=private.canadianshield.cira.ca)                         |

#### Protegido

En modo "Protegido", protección contra malware y phishing.

| Protocolo                | Dirección                                                                                                 |                                                                                                                                                                                                                                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4                | `149.112.121.20` y `149.112.122.20`                                                                       | [Agregar a AdGuard](adguard:add_dns_server?address=149.112.121.20&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.20&name=)                                                                                                                                         |
| DNS, IPv6                | `2620:10A:80BB::20` y  `2620:10A:80BC::20`                                                                | [Agregar a AdGuard](adguard:add_dns_server?address=2620:10A:80BB::20&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::20&name=)                                                                                                                                   |
| DNS mediante HTTPS       | `https://protected.canadianshield.cira.ca/dns-query`                                                      | [Agregar a AdGuard](adguard:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://protected.canadianshield.cira.ca/dns-query&name=protected.canadianshield.cira.ca) |
| DNS-over-TLS - Protegido | Nombre de host: `tls://protected.canadianshield.cira.ca` IP: `149.112.121.20` y IPv6: `2620:10A:80BB::20` | [Agregar a AdGuard](adguard:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://protected.canadianshield.cira.ca&name=protected.canadianshield.cira.ca)                         |

#### Familia

En modo "Familia", Protegido + bloqueo de contenido para adultos.

| Protocolo              | Dirección                                                                                              |                                                                                                                                                                                                                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4              | `149.112.121.30` y `149.112.122.30`                                                                    | [Agregar a AdGuard](adguard:add_dns_server?address=149.112.121.30&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=149.112.121.30&name=)                                                                                                                             |
| DNS, IPv6              | `2620:10A:80BB::30` y `2620:10A:80BC::30`                                                              | [Agregar a AdGuard](adguard:add_dns_server?address=2620:10A:80BB::30&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2620:10A:80BB::30&name=)                                                                                                                       |
| DNS mediante HTTPS     | `https://family.canadianshield.cira.ca/dns-query`                                                      | [Agregar a AdGuard](adguard:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://family.canadianshield.cira.ca/dns-query&name=family.canadianshield.cira.ca) |
| DNS-over-TLS - Familia | Nombre de host: `tls://family.canadianshield.cira.ca` IP: `149.112.121.30` e IPv6: `2620:10A:80BB::30` | [Agregar a AdGuard](adguard:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://family.canadianshield.cira.ca&name=family.canadianshield.cira.ca)                         |

### OpenNIC DNS

[OpenNIC DNS](https://www.opennic.org/) es un servicio DNS alternativo gratuito de OpenNIC Project.

| Protocolo | Dirección                                |                                                                                                                                                             |
| --------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `185.121.177.177` y `169.239.202.202`    | [Agregar a AdGuard](adguard:add_dns_server?address=185.121.177.177&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=185.121.177.177&name=) |
| DNS, IPv6 | `2a05:dfc7:5::53` y `2a05:dfc7:5353::53` | [Agregar a AdGuard](adguard:add_dns_server?address=2a05:dfc7:5::53&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2a05:dfc7:5::53&name=) |

### BlahDNS

[BlahDNS](https://blahdns.com/) Un pequeño proyecto DNS de hobby. Sin registros, servicio de nombres Ethereum, listo para DNSSEC & Anuncios filtrados, rastreadores, malware.

#### Servidor DNS de Finlandia

| Protocolo            | Dirección                                                                   |                                                                                                                                                                                                                                           |
| -------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Nombre de host: `tls://dot-fi.blahdns.com` IP: `95.216.212.177`             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://tls://dot-fi.blahdns.com&name=tls://dot-fi.blahdns.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dot-fi.blahdns.com&name=tls://dot-fi.blahdns.com) |
| DNS-over-HTTPS, IPv4 | Nombre de host: `https://doh-fi.blahdns.com/dns-query` IP: `95.216.212.177` | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh-fi.blahdns.com/dns-query&name=doh-fi.blahdns.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh-fi.blahdns.com/dns-query&name=doh-fi.blahdns.com) |
| DNSCrypt, IPv4       | Proveedor: `2.dnscrypt-cert.blahdns.com` IP: `95.216.212.177:8443`          | [Añadir a AdGuard](sdns://AQMAAAAAAAAAEzk1LjIxNi4yMTIuMTc3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                       |
| DNSCrypt, IPv6       | Proveedor: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f9:c010:43ce::1:8443`   | [Añadir a AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmOTpjMDEwOjQzY2U6OjFdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                           |

#### Servidor DNS de Japón

| Protocolo            | Dirección                                                                            |                                                                                                                                                                                                                                           |
| -------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Nombre de host: `tls://dot-jp.blahdns.com` IP: `139.162.112.47`                      | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dot-jp.blahdns.com&name=dot-jp.blahdns.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot-jp.blahdns.com&name=dot-jp.blahdns.com)                         |
| DNS-over-HTTPS, IPv4 | Nombre de host: `https://doh-jp.blahdns.com/dns-query`                               | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh-jp.blahdns.com/dns-query&name=doh-jp.blahdns.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh-jp.blahdns.com/dns-query&name=doh-jp.blahdns.com) |
| DNSCrypt, IPv4       | Proveedor: `2.dnscrypt-cert.blahdns.com` IP: `139.162.112.47:8443`                   | [Añadir a AdGuard](sdns://AQMAAAAAAAAAEzEzOS4xNjIuMTEyLjQ3Ojg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                       |
| DNSCrypt, IPv6       | Proveedor: `2.dnscrypt-cert.blahdns.com` IP: `[2400:8902::f03c:92ff:fe27:344b]:8443` | [Añadir a AdGuard](sdns://AQMAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTJmZjpmZTI3OjM0NGJdOjg0NDMgbC1IEdPcd6w0tIkpG7PJPgsGG0O9BZX-gf0hJ0E_SLUbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                               |

#### Servidor DNS de Alemania

| Protocolo            | Dirección                                                                   |                                                                                                                                                                                                                                           |
| -------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Nombre de host: `tls://dot-de.blahdns.com` IP: `159.69.198.101`             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dot-de.blahdns.com&name=dot-de.blahdns.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot-de.blahdns.com&name=dot-de.blahdns.com)                         |
| DNS-over-HTTPS, IPv4 | Nombre de host: `https://doh-de.blahdns.com/dns-query` IP: `159.69.198.101` | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh-de.blahdns.com/dns-query&name=doh-de.blahdns.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh-de.blahdns.com/dns-query&name=doh-de.blahdns.com) |
| DNSCrypt, IPv4       | Proveedor: `2.dnscrypt-cert.blahdns.com` IP: `159.69.198.101:8443`          | [Añadir a AdGuard](sdns://AQMAAAAAAAAAEzE1OS42OS4xOTguMTAxOjg0NDMgyJjbSS4IgTY_2KH3NVGG0DNIgBPzLEqf8r00nAbcUxQbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                                       |
| DNSCrypt, IPv6       | Proveedor: `2.dnscrypt-cert.blahdns.com` IP: `2a01:4f8:1c1c:6b4b::1:8443`   | [Añadir a AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxYzFjOjZiNGI6OjFdOjg0NDMgU4ToFEMUKT5W3RsUCh7xcq1HvboXmciVcpSVPQNOtccbMi5kbnNjcnlwdC1jZXJ0LmJsYWhkbnMuY29t)                                                                           |

### DNS para la familia

[DNS for Family](https://dnsforfamily.com/) tiene como objetivo bloquear sitios web para adultos. Permite que niños y adultos naveguen por Internet de manera segura sin preocuparse por ser rastreados por sitios web maliciosos.

| Protocolo          | Dirección                                                   |                                                                                                                                                                                                                                                                                                   |
| ------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante HTTPS | `https://dns-doh.dnsforfamily.com/dns-query`                | [Agregar a AdGuard](adguard:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://https://dns-doh.dnsforfamily.com/dns-query&name=https://dns-doh.dnsforfamily.com) |
| DNS mediante TLS   | `tls://dns-dot.dnsforfamily.com`                            | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-dot.dnsforfamily.com&name=dns-dot.dnsforfamily.com)                                                         |
| DNS, IPv4          | `94.130.180.225` y `78.47.64.161`                           | [Agregar a AdGuard](adguard:add_dns_server?address=94.130.180.225&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=94.130.180.225&name=)                                                                                                                                         |
| DNS, IPv6          | `2a01:4f8:1c0c:40db::1` y `2a01:4f8:1c17:4df8::1`           | [Agregar a AdGuard](adguard:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4f8:1c0c:40db::1&name=)                                                                                                                           |
| DNSCrypt, IPv4     | Proveedor: `dnsforfamily.com` IP: `94.130.180.225`          | [Añadir a AdGuard](sdns://AQIAAAAAAAAADjk0LjEzMC4xODAuMjI1ILtn1Ada3rLi6VNcj4pB-I5eHBqFzFbs_XFRHG-6KenTEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                                    |
| DNSCrypt, IPv6     | Proveedor: `dnsforfamily.com` IP: `[2a01:4f8:1c0c:40db::1]` | [Añadir a AdGuard](sdns://AQIAAAAAAAAAF1syYTAxOjRmODoxYzBjOjQwZGI6OjFdIKeNqJacdMufL_kvUDGFm5-J2r4yS94vn4S5ie-o8MCMEGRuc2ZvcmZhbWlseS5jb20)                                                                                                                                                        |

### CZ.NIC ODVR

[CZ.NIC ODVR](https://www.nic.cz/odvr/) CZ.NIC ODVR son solucionadores de validación de DNSSEC abiertos. CZ.NIC no recopila ningún dato personal ni recopila información en las páginas donde los dispositivos envían datos personales.

| Protocolo          | Dirección                                |                                                                                                                                                                                                   |
| ------------------ | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `193.17.47.1` y `185.43.135.1`           | [Agregar a AdGuard](adguard:add_dns_server?address=193.17.47.1&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=193.17.47.1&name=)                                               |
| DNS, IPv6          | `2001:148f:ffff::1` y `2001:148f:fff::1` | [Agregar a AdGuard](adguard:add_dns_server?address=2001:148f:ffff::1&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2001:148f:ffff::1&name=)                                   |
| DNS mediante HTTPS | `https://odvr.nic.cz/doh`                | [Agregar a AdGuard](adguard:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://odvr.nic.cz/doh&name=odvr.nic.cz) |
| DNS mediante TLS   | `tls://odvr.nic.cz`                      | [Agregar a AdGuard](adguard:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://odvr.nic.cz&name=odvr.nic.cz)             |

### Ali DNS

[Ali DNS](https://alidns.com/) es un servicio de DNS recursivo gratuito que se comprometió a proporcionar una resolución de DNS rápida, estable y segura para la mayoría de los usuarios de Internet. Incluye la función AliGuard para proteger a los usuarios de varios ataques y amenazas.

| Protocolo          | Dirección                            |                                                                                                                                                                                                                           |
| ------------------ | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `223.5.5.5` y `223.6.6.6`            | [Agregar a AdGuard](adguard:add_dns_server?address=223.5.5.5&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=223.5.5.5&name=)                                                                           |
| DNS, IPv6          | `2400:3200::1` y `2400:3200:baba::1` | [Añadir a AdGuard](adguard:add_dns_server?address=2400:3200::1&name=), [Añadir a AdGuard VPN](adguardvpn:add_dns_server?address=2400:3200::1&name=)                                                                       |
| DNS mediante HTTPS | `https://dns.alidns.com/dns-query`   | [Agregar a AdGuard](adguard:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com) |
| DNS mediante TLS   | `tls://dns.alidns.com`               | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com)                         |

### DNS Público CFIEC

Servicio DNS anycast basado en IPv6 con fuertes capacidades de seguridad y protección contra spyware y sitios web maliciosos. Es compatible con DNS64 para proporcionar resolución de nombres de dominio solo para usuarios de IPv6.

| Protocolo          | Dirección                         |                                                                                                                                                                                                                       |
| ------------------ | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv6          | `240C::6666` y `240C::6644`       | [Agregar a AdGuard](adguard:add_dns_server?address=240C::6666&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=240C::6666&name=)                                                                     |
| DNS mediante HTTPS | `https://dns.cfiec.net/dns-query` | [Agregar a AdGuard](adguard:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.cfiec.net/dns-query&name=dns.cfiec.net) |
| DNS mediante TLS   | `tls://dns.cfiec.net`             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dns.cfiec.net&name=tls://dns.cfiec.net) |

### Nawala Childprotection DNS

[Nawala Childprotection DNS](http://nawala.id/) es un sistema de filtrado de Internet anycast que protege a los niños de sitios web inapropiados y contenidos abusivos.

| Protocolo      | Dirección                                                    |                                                                                                                                                             |
| -------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `180.131.144.144` y `180.131.145.145`                        | [Agregar a AdGuard](adguard:add_dns_server?address=180.131.144.144&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=180.131.144.144&name=) |
| DNSCrypt, IPv4 | Proveedor: `2.dnscrypt-cert.nawala.id` IP: `180.131.144.144` | [Añadir a AdGuard](sdns://AQAAAAAAAAAADzE4MC4xMzEuMTQ0LjE0NCDGC-b_38Dj4-ikI477AO1GXcLPfETOFpE36KZIHdOzLhkyLmRuc2NyeXB0LWNlcnQubmF3YWxhLmlk)                 |

### 360 Secure DNS

**360 Secure DNS** es un servicio de DNS recursivo líder en la industria con protección avanzada contra amenazas de seguridad de red.

| Protocolo          | Dirección                        |                                                                                                                                                                                                           |
| ------------------ | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `101.226.4.6` y `218.30.118.6`   | [Agregar a AdGuard](adguard:add_dns_server?address=101.226.4.6&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=101.226.4.6&name=)                                                       |
| DNS, IPv4          | `123.125.81.6` y `140.207.198.6` | [Agregar a AdGuard](adguard:add_dns_server?address=123.125.81.6&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=123.125.81.6&name=)                                                     |
| DNS mediante HTTPS | `https://doh.360.cn/dns-query`   | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.360.cn/dns-query&name=doh.360.cn) |
| DNS mediante TLS   | `tls://dot.360.cn`               | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.360.cn&name=dot.360.cn)                         |

### IIJ.JP DNS

[IIJ.JP](https://public.dns.iij.jp/) es un servicio de DNS público operado por Internet Initiative Japan. También bloquea el contenido de abuso infantil.

| Protocolo          | Dirección                             |                                                                                                                                                                                                                                       |
| ------------------ | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante HTTPS | `https://public.dns.iij.jp/dns-query` | [Agregar a AdGuard](adguard:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://public.dns.iij.jp/dns-query&name=public.dns.iij.jp) |
| DNS mediante TLS   | `tls://public.dns.iij.jp`             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://public.dns.iij.jp&name=public.dns.iij.jp)                         |

### DNSPod Public DNS+

[DNSPod DNS público+](https://www.dnspod.com/) es un proveedor de DNS privacy-friendly con años de experiencia en el desarrollo de servicios de resolución de nombres de dominio. Su objetivo es proporcionar a los usuarios un servicio de resolución recursiva más rápido, preciso y estable.

| Protocolo          | Dirección                       |                                                                                                                                                                                               |
| ------------------ | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `119.29.29.29` y `119.28.28.28` | [Agregar a AdGuard](adguard:add_dns_server?address=119.29.29.29&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=119.29.29.29&name=)                                         |
| DNS mediante HTTPS | `https://doh.pub/dns-query`     | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.pub/dns-query&name=doh.pub), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.pub/dns-query&name=doh.pub) |
| DNS mediante HTTPS | `https://dns.pub/dns-query`     | [Agregar a AdGuard](adguard:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.pub/dns-query&name=dns.pub) |
| DNS mediante TLS   | `tls://punto.pub`               | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dot.pub&name=dot.pub), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.pub&name=dot.pub)                         |

### 114DNS

**114DNS** es un servicio DNS profesional y de alta confiabilidad.

#### Normal

Bloquea anuncios y sitios web molestos.

| Protocolo | Dirección                             |                                                                                                                                                             |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.114` y `114.114.115.115` | [Agregar a AdGuard](adguard:add_dns_server?address=114.114.114.114&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.114&name=) |

#### Seguro

Bloquea sitios web de phishing, maliciosos y otros sitios no seguros.

| Protocolo | Dirección                             |                                                                                                                                                             |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.119` y `114.114.115.119` | [Agregar a AdGuard](adguard:add_dns_server?address=114.114.114.119&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.119&name=) |

#### Familia

Estos servidores bloquean sitios web para adultos y contenidos inapropiados.

| Protocolo | Dirección                             |                                                                                                                                                             |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `114.114.114.110` y `114.114.115.110` | [Agregar a AdGuard](adguard:add_dns_server?address=114.114.114.110&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=114.114.114.110&name=) |

### Quad101

[Quad101](https://101.101.101.101) es un servicio DNS alternativo gratuito sin registro de TWNIC (Taiwan Network Information Center).

| Protocolo          | Dirección                             |                                                                                                                                                                                                                   |
| ------------------ | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `101.101.101.101` y `101.102.103.104` | [Agregar a AdGuard](adguard:add_dns_server?address=101.101.101.101&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=101.101.101.101&name=)                                                       |
| DNS, IPv6          | `2001:de4::101` y  `2001:de4::102`    | [Agregar a AdGuard](adguard:add_dns_server?address=2001:de4::101&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2001:de4::101&name=)                                                           |
| DNS mediante HTTPS | `https://dns.twnic.tw/dns-query`      | [Agregar a AdGuard](adguard:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.twnic.tw/dns-query&name=dns.twnic.tw) |
| DNS mediante TLS   | `tls://101.101.101.101`               | [Agregar a AdGuard](adguard:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://101.101.101.101&name=101.101.101.101)             |

### OneDNS

**OneDNS** es un servicio de DNS de nicho seguro, rápido y gratuito con función de bloqueo de dominios maliciosos.

#### Pure Edition

| Protocolo | Dirección                      |                                                                                                                                                       |
| --------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.10.10` y `52.80.52.52` | [Agregar a AdGuard](adguard:add_dns_server?address=117.50.10.10&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=117.50.10.10&name=) |

#### Block Edition

| Protocolo | Dirección                      |                                                                                                                                                       |
| --------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `117.50.11.11` y `52.80.66.66` | [Agregar a AdGuard](adguard:add_dns_server?address=117.50.11.11&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=117.50.11.11&name=) |

### Privacy-First DNS

[Privacy-First DNS](https://tiarap.org/) bloquea más de 140 000 anuncios, seguimiento de anuncios, malware y dominios de phishing. Sin registro, sin ECS, con validación de DNSSEC, ¡gratis!

#### Servidor DNS de Singapur

| Protocolo          | Dirección                                                                       | Ubicación                                                                                                                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `174.138.21.128`                                                                | [Agregar a AdGuard](adguard:add_dns_server?address=174.138.21.128&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=174.138.21.128&name=)                                                                 |
| DNS, IPv6          | `2400:6180:0:d0::5f6e:4001`                                                     | [Agregar a AdGuard](adguard:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2400:6180:0:d0::5f6e:4001&name=)                                           |
| DNSCrypt, IPv4     | Proveedor: `2.dnscrypt-cert.dns.tiar.app` IP: `174.138.21.128`                  | [Añadir a AdGuard](sdns://AQMAAAAAAAAADjE3NC4xMzguMjEuMTI4IO-WgGbo2ZTwZdg-3dMa7u31bYZXRj5KykfN1_6Xw9T2HDIuZG5zY3J5cHQtY2VydC5kbnMudGlhci5hcHA)                                                                            |
| DNSCrypt, IPv6     | Proveedor: `2.dnscrypt-cert.dns.tiar.app` IP: `[2400:6180:0:d0::5f6e:4001]`     | [Añadir a AdGuard](sdns://AQMAAAAAAAAAG1syNDAwOjYxODA6MDpkMDo6NWY2ZTo0MDAxXSDvloBm6NmU8GXYPt3TGu7t9W2GV0Y-SspHzdf-l8PU9hwyLmRuc2NyeXB0LWNlcnQuZG5zLnRpYXIuYXBw)                                                           |
| DNS mediante HTTPS | `https://doh.tiarap.org/dns-query` (almacenado en caché a través de un tercero) | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.tiarap.org/dns-query&name=doh.tiarap.org) |
| DNS mediante HTTPS | `https://doh.tiar.app/dns-query`                                                | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.tiar.app/dns-query&name=doh.tiar.app)         |
| DNS-over-QUIC      | `quic://doh.tiar.app`                                                           | [Agregar a AdGuard](adguard:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=quic://doh.tiar.app:784&name=doh.tiar.app)                       |
| DNS mediante TLS   | `tls://dot.tiar.app`                                                            | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.tiar.app&name=dot.tiar.app)                                 |

#### Servidor DNS de Japón

| Protocolo          | Dirección                                                                       |                                                                                                                                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `172.104.93.80`                                                                 | [Agregar a AdGuard](adguard:add_dns_server?address=172.104.93.80&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=172.104.93.80&name=)                                                               |
| DNS, IPv6          | `2400:8902::f03c:91ff:feda:c514`                                                | [Agregar a AdGuard](adguard:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2400:8902::f03c:91ff:feda:c514&name=)                             |
| DNSCrypt, IPv4     | Proveedor: `2.dnscrypt-cert.jp.tiar.app` IP: `172.104.93.80`                    | [Añadir a AdGuard](sdns://AQcAAAAAAAAAEjE3Mi4xMDQuOTMuODA6MTQ0MyAyuHY-8b9lNqHeahPAzW9IoXnjiLaZpTeNbVs8TN9UUxsyLmRuc2NyeXB0LWNlcnQuanAudGlhci5hcHA)                                                                    |
| DNSCrypt, IPv6     | Proveedor: `2.dnscrypt-cert.jp.tiar.app` IP: `[2400:8902::f03c:91ff:feda:c514]` | [Añadir a AdGuard](sdns://AQcAAAAAAAAAJVsyNDAwOjg5MDI6OmYwM2M6OTFmZjpmZWRhOmM1MTRdOjE0NDMgMrh2PvG_ZTah3moTwM1vSKF544i2maU3jW1bPEzfVFMbMi5kbnNjcnlwdC1jZXJ0LmpwLnRpYXIuYXBw)                                           |
| DNS mediante HTTPS | `https://jp.tiarap.org/dns-query`                                               | [Agregar a AdGuard](adguard:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://jp.tiarap.org/dns-query&name=jp.tiarap.org) |
| DNS mediante HTTPS | `https://jp.tiar.app/dns-query`                                                 | [Agregar a AdGuard](adguard:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://jp.tiar.app/dns-query&name=jp.tiar.app)         |
| DNS mediante TLS   | `tls://jp.tiar.app`                                                             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://jp.tiar.app&name=jp.tiar.app)                                 |

### FreeDNS

[FreeDNS](https://freedns.zone/) es un servicio DNS abierto, gratuito y público. Sin redireccionamientos de DNS, sin registro.

| Protocolo | Dirección                           |                                                                                                                                                           |
| --------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `172.104.237.57` y `172.104.49.100` | [Agregar a AdGuard](adguard:add_dns_server?address=172.104.237.57&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=172.104.237.57&name=) |
| DNS, IPv4 | `37.235.1.174` y `37.235.1.177`     | [Agregar a AdGuard](adguard:add_dns_server?address=37.235.1.174&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=37.235.1.174&name=)     |

### Freenom World

[Freenom World](https://freenom.world/en/index.html) es un solucionador de DNS anónimo gratuito de Freenom World.

| Protocolo | Dirección                     |                                                                                                                                                     |
| --------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `80.80.80.80` y `80.80.81.81` | [Agregar a AdGuard](adguard:add_dns_server?address=80.80.80.80&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=80.80.80.80&name=) |

### OSZX DNS

[OSZX DNS](https://dns.oszx.co/) es un pequeño proyecto de hobby de DNS de bloqueo de anuncios.

#### Servidor OSZX

Estos servidores no bloquean anuncios, no guardan registros y tienen DNSSEC habilitado.

| Protocolo          | Dirección                                                                 |                                                                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `51.38.83.141`                                                            | [Agregar a AdGuard](adguard:add_dns_server?address=51.38.83.141&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=51.38.83.141&name=)                                                         |
| DNS, IPv6          | `2001:41d0:801:2000::d64`                                                 | [Agregar a AdGuard](adguard:add_dns_server?address=2001:41d0:801:2000::d64&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2001:41d0:801:2000::d64&name=)                                   |
| DNSCrypt, IPv4     | Proveedor: `2.dnscrypt-cert.oszx.co` IP: `51.38.83.141:5353`              | [Añadir a AdGuard](sdns://AQIAAAAAAAAAETUxLjM4LjgzLjE0MTo1MzUzIMwm9_oYw26P4JIVoDhJ_5kFDdNxX1ke4fEzL1V5bwEjFzIuZG5zY3J5cHQtY2VydC5vc3p4LmNv)                                                                   |
| DNSCrypt, IPv6     | Proveedor: `2.dnscrypt-cert.oszx.co` IP: `[2001:41d0:801:2000::d64]:5353` | [Añadir a AdGuard](sdns://AQIAAAAAAAAAHDIwMDE6NDFkMDo4MDE6MjAwMDo6ZDY0OjUzNTMgzCb3-hjDbo_gkhWgOEn_mQUN03FfWR7h8TMvVXlvASMXMi5kbnNjcnlwdC1jZXJ0Lm9zenguY28)                                                    |
| DNS mediante HTTPS | `https://dns.oszx.co/dns-query`                                           | [Agregar a AdGuard](adguard:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.oszx.co/dns-query&name=dns.oszx.co) |
| DNS mediante TLS   | `tls://dns.oszx.co`                                                       | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.oszx.co&name=dns.oszx.co)                         |

#### Servidor PumpleX

Estos servidores no bloquean anuncios, no guardan registros y tienen DNSSEC habilitado.

| Protocolo          | Dirección                                                                      |                                                                                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `51.38.82.198`                                                                 | [Agregar a AdGuard](adguard:add_dns_server?address=51.38.82.198&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=51.38.82.198&name=)                                                                         |
| DNS, IPv6          | `2001:41d0:801:2000::1b28`                                                     | [Agregar a AdGuard](adguard:add_dns_server?address=2001:41d0:801:2000::1b28&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2001:41d0:801:2000::1b28&name=)                                                 |
| DNSCrypt, IPv4     | Proveedor: `2.dnscrypt-cert.pumplex.com` IP: `51.38.82.198:5353`               | [Añadir a AdGuard](sdns://AQcAAAAAAAAAETUxLjM4LjgyLjE5ODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                                             |
| DNSCrypt, IPv6     | Proveedor: `2.dnscrypt-cert.pumplex.com` IP: `[2001:41d0:801:2000::1b28]:5353` | [Añadir a AdGuard](sdns://AQcAAAAAAAAAHTIwMDE6NDFkMDo4MDE6MjAwMDo6MWIyODo1MzUzIMg95SNgpDPLmaHlbZVbYh5tJRvnYuDWqZ4lUG-mD49eGzIuZG5zY3J5cHQtY2VydC5wdW1wbGV4LmNvbQ)                                                             |
| DNS mediante HTTPS | `https://dns.pumplex.com/dns-query`                                            | [Agregar a AdGuard](adguard:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.pumplex.com/dns-query&name=dns.pumplex.com) |
| DNS mediante TLS   | `tls://dns.pumplex.com`                                                        | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.pumplex.com&name=dns.pumplex.com)                         |

### Applied Privacy DNS

[Privacidad aplicada DNS](https://applied-privacy.net/) opera servicios de privacidad de DNS para ayudar a proteger el tráfico de DNS y para ayudar a diversificar el panorama de resolución de DNS que ofrece protocolos modernos.

| Protocolo          | Dirección                               |                                                                                                                                                                                                                                                       |
| ------------------ | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante HTTPS | `https://doh.applied-privacy.net/query` | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.applied-privacy.net/query&name=doh.applied-privacy.net) |
| DNS mediante TLS   | `tls://dot1.applied-privacy.net`        | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot1.applied-privacy.net&name=dot1.applied-privacy.net)             |

### Strongarm DNS

[Strongarm DNS](https://strongarm.io) es un servicio DNS de Strongarm que evita que las personas interactúen con contenido malicioso.

| Protocolo | Dirección                        |                                                                                                                                                         |
| --------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `54.174.40.213` y `52.3.100.184` | [Agregar a AdGuard](adguard:add_dns_server?address=54.174.40.213&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=54.174.40.213&name=) |

### SafeSurfer DNS

[SafeSurfer DNS](https://www.safesurfer.co.nz/) es un servicio DNS de SafeSurfer que protege tu dispositivo de contenido dañino y para adultos.

| Protocolo      | Dirección                                                          |                                                                                                                                                             |
| -------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4      | `104.155.237.225` y `104.197.28.121`                               | [Agregar a AdGuard](adguard:add_dns_server?address=104.155.237.225&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=104.155.237.225&name=) |
| DNSCrypt, IPv4 | Proveedor: `2.dnscrypt-cert.safesurfer.co.nz` IP: `104.197.28.121` | [Añadir a AdGuard](sdns://AQMAAAAAAAAADjEwNC4xOTcuMjguMTIxICcgf9USBOg2e0g0AF35_9HTC74qnDNjnm7b-K7ZHUDYIDIuZG5zY3J5cHQtY2VydC5zYWZlc3VyZmVyLmNvLm56)         |

### DeCloudUs DNS

[DeCloudUs DNS](https://decloudus.com/) Un solucionador de DNS seguro, privado y de código abierto con protección contra malware, bloqueo de anuncios y sin registros. Degoogle y Ungoogle tu teléfono, tableta y computadora.

| Protocolo          | Dirección                                                                      |                                                                                                                                                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4     | Proveedor: `2.dnscrypt-cert.DeCloudUs-test` IP: `78.47.212.211:9443`           | [Añadir a AdGuard](sdns://AQMAAAAAAAAAEjc4LjQ3LjIxMi4yMTE6OTQ0MyBNRN4TaVynkcwkVAbSBrCvr4X3c3Cygz_4VDUcRhhhYx4yLmRuc2NyeXB0LWNlcnQuRGVDbG91ZFVzLXRlc3Q)                                                                                 |
| DNSCrypt, IPv6     | Proveedor: `2.dnscrypt-cert.DeCloudUs-test` IP: `[2a01:4f8:13a:250b::30]:9443` | [Añadir a AdGuard](sdns://AQMAAAAAAAAAHFsyYTAxOjRmODoxM2E6MjUwYjo6MzBdOjk0NDMgTUTeE2lcp5HMJFQG0gawr6-F93NwsoM_-FQ1HEYYYWMeMi5kbnNjcnlwdC1jZXJ0LkRlQ2xvdWRVcy10ZXN0)                                                                    |
| DNS mediante HTTPS | `https://dns.decloudus.com/dns-query`                                          | [Agregar a AdGuard](adguard:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com),  [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.decloudus.com/dns-query&name=dns.decloudus.com) |
| DNS mediante TLS   | `tls://dns.decloudus.com`                                                      | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com),  [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.decloudus.com&name=dns.decloudus.com)                         |

### Lelux DNS

[Lelux.fi](https://lelux.fi/resolver/) está dirigido por Elias Ojala, Finlandia.

| Protocolo          | Dirección                                |                                                                                                                                                                                                                                                    |
| ------------------ | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante HTTPS | `https://resolver-eu.lelux.fi/dns-query` | [Agregar a AdGuard](adguard:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi),  [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://resolver-eu.lelux.fi/dns-query&name=resolver-eu.lelux.fi) |
| DNS mediante TLS   | `tls://resolver-eu.lelux.fi`             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi),  [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://resolver-eu.lelux.fi&name=resolver-eu.lelux.fi)                         |

### Captnemo DNS

[Captnemo DNS](https://captnemo.in/dnscrypt/) es un servidor que se ejecuta en un droplet de Digital Ocean en la región BLR1. Mantenido por Abhay Rana, también conocido como Nemo.

| Protocolo      | Dirección                                                         |                                                                                                                                                    |
| -------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Proveedor: `2.dnscrypt-cert.captnemo.in` IP: `139.59.48.222:4434` | [Añadir a AdGuard](sdns://AQQAAAAAAAAAEjEzOS41OS40OC4yMjI6NDQzNCAFOt_yxaMpFtga2IpneSwwK6rV0oAyleham9IvhoceEBsyLmRuc2NyeXB0LWNlcnQuY2FwdG5lbW8uaW4) |

### DNS.SB

[DNS.SB](https://dns.sb/) proporciona un servicio DNS gratuito sin registro, DNSSEC habilitado.

| Protocolo          | Dirección                         |                                                                                                                                                                                                           |
| ------------------ | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `185.222.222.222` y `45.11.45.11` | [Agregar a AdGuard](adguard:add_dns_server?address=185.222.222.222&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=185.222.222.222&name=)                                               |
| DNS, IPv6          | `2a09::` y `2a11::`               | [Agregar a AdGuard](adguard:add_dns_server?address=2a09::&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2a09::&name=)                                                                 |
| DNS mediante HTTPS | `https://doh.dns.sb/dns-query`    | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.dns.sb/dns-query&name=doh.dns.sb) |
| DNS mediante TLS   | `tls://185.222.222.222`           | [Agregar a AdGuard](adguard:add_dns_server?address=tls://185.222.222.222&name=185.222.222.222), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://185.222.222.222&name=185.222.222.222)     |

### DNS Forge

[DNS Forge](https://dnsforge.de/) es un solucionador de DNS redundante con un bloqueador de anuncios y no proporciona registro por parte de [adminforge](https://adminforge.de/).

| Protocolo          | Dirección                                           |                                                                                                                                                                                                               |
| ------------------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `176.9.93.198` y `176.9.1.117`                      | [Agregar a AdGuard](adguard:add_dns_server?address=176.9.93.198&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=176.9.93.198&name=)                                                         |
| DNS, IPv6          | `2a01:4f8:151:34aa::198` y `2a01:4f8:141:316d::117` | [Agregar a AdGuard](adguard:add_dns_server?address=2a01:4f8:151:34aa::198&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2a01:4f8:151:34aa::198&name=)                                     |
| DNS mediante HTTPS | `https://dnsforge.de/dns-query`                     | [Agregar a AdGuard](adguard:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dnsforge.de/dns-query&name=dnsforge.de) |
| DNS mediante TLS   | `tls://dnsforge.de`                                 | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsforge.de&name=dnsforge.de)                         |

### Fondation Restena DNS

Servidores [Restena DNS](https://www.restena.lu/en/service/public-dns-resolver) proporcionados por [Fundación Restena](https://www.restena.lu/).

| Protocolo          | Dirección                                                                         |                                                                                                                                                                                                                                           |
| ------------------ | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante HTTPS | `https://kaitain.restena.lu/dns-query` IP: `158.64.1.29` e IPv6: `2001:a18:1::29` | [Agregar a AdGuard](adguard:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://kaitain.restena.lu/dns-query&name=kaitain.restena.lu) |

| DNS sobre TLS| `tls://kaitain.restena.lu` IP: `158.64.1.29` e IPv6: `2001:a18:1::29`   | [Agregar a AdGuard](adguard:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://kaitain.restena.lu&name=kaitain.restena.lu)|

### fvz DNS

[fvz DNS](http://meo.ws/) es un solucionador de DNS Anycast Tier2 OpenNIC principal público de Fusl.

| Protocolo      | Dirección                                                             |                                                                                                                                                         |
| -------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4 | Proveedor: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `185.121.177.177:5353` | [Añadir a AdGuard](sdns://AQYAAAAAAAAAFDE4NS4xMjEuMTc3LjE3Nzo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |
| DNSCrypt, IPv4 | Proveedor: `2.dnscrypt-cert.dnsrec.meo.ws` IP: `169.239.202.202:5353` | [Añadir a AdGuard](sdns://AQYAAAAAAAAAFDE2OS4yMzkuMjAyLjIwMjo1MzUzIBpq0KMrTFphppXRU2cNaasWkD-ew_f2TxPlNaMYsiilHTIuZG5zY3J5cHQtY2VydC5kbnNyZWMubWVvLndz) |

### FFMUC DNS

[FFMUC](https://ffmuc.net/) servidores DNS gratuitos proporcionados por Freifunk München.

| Protocolo            | Dirección                                                               |                                                                                                                                                                                                                       |
| -------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Nombre de host: `tls://dot.ffmuc.net`                                   | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.ffmuc.net&name=dot.ffmuc.net)                         |
| DNS-over-HTTPS, IPv4 | Nombre de host: `https://doh.ffmuc.net/dns-query`                       | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.ffmuc.net/dns-query&name=doh.ffmuc.net) |
| DNSCrypt, IPv4       | Proveedor: `2.dnscrypt-cert.ffmuc.net` IP: `5.1.66.255:8443`            | [Añadir a AdGuard](sdns://AQcAAAAAAAAADzUuMS42Ni4yNTU6ODQ0MyAH0Hrxz9xdmXadPwJmkKcESWXCdCdseRyu9a7zuQxG-hkyLmRuc2NyeXB0LWNlcnQuZmZtdWMubmV0)                                                                           |
| DNSCrypt, IPv6       | Proveedor: `2.dnscrypt-cert.ffmuc.net` IP: `[2001:678:e68:f000::]:8443` | [Añadir a AdGuard](sdns://AQcAAAAAAAAAGlsyMDAxOjY3ODplNjg6ZjAwMDo6XTo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ)                                                            |

### Digitale Gesellschaft DNS

[Digitale Gesellschaft](https://www.digitale-gesellschaft.ch/dns/) es un resolver público operado por Digital Society. Organizado en Zúrich, Suiza.

| Protocolo          | Dirección                                                                                    |                                                                                                                                                                                                                                                                                   |
| ------------------ | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante HTTPS | `https://dns.digitale-gesellschaft.ch/dns-query` IP: `185.95.218.42` e IPv6: `2a05:fc84::42` | [Agregar a AdGuard](adguard:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.digitale-gesellschaft.ch/dns-query&name=dns.digitale-gesellschaft.ch) |
| DNS mediante TLS   | `tls://dns.digitale-gesellschaft.ch` IP: `185.95.218.43` e IPv6: `2a05:fc84::43`             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.digitale-gesellschaft.ch&name=dns.digitale-gesellschaft.ch)                         |

### LibreDNS

[LibreDNS](https://libredns.gr/) es un servicio público de DNS cifrado gestionado por [LibreOps](https://libreops.cc/).

| Protocolo          | Dirección                                    |                                                                                                                                                                                                                               |
| ------------------ | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `88.198.92.222`                              | [Agregar a AdGuard](adguard:add_dns_server?address=88.198.92.222&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=88.198.92.222&name=)                                                                       |
| DNS mediante HTTPS | `https://doh.libredns.gr/dns-query`          | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.libredns.gr/dns-query&name=doh.libredns.gr) |
| DNS mediante HTTPS | `https://doh.libredns.gr/ads`                | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.libredns.gr/ads&name=doh.libredns.gr)             |
| DNS mediante TLS   | `tls://dot.libredns.gr` IP: `116.202.176.26` | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.libredns.gr&name=dot.libredns.gr)                         |

### ibksturm DNS

Servidores de prueba [ibksturm DNS](https://ibksturm.synology.me/) proporcionados por ibksturm. OPENNIC, DNSSEC, sin filtrado, sin registro.

| Protocolo            | Dirección                                                                     |                                                                                                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-TLS, IPv4   | Nombre de host: `tls://ibksturm.synology.me` IP: `213.196.191.96`             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://ibksturm.synology.me&name=ibksturm.synology.me)                         |
| DNS-over-QUIC, IPv4  | Nombre de host: `quic://ibksturm.synology.me` IP: `213.196.191.96`            | [Agregar a AdGuard](adguard:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=quic://ibksturm.synology.me&name=ibksturm.synology.me)                       |
| DNS-over-HTTPS, IPv4 | Nombre de host: `https://ibksturm.synology.me/dns-query` IP: `213.196.191.96` | [Agregar a AdGuard](adguard:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://ibksturm.synology.me/dns-query&name=ibksturm.synology.me) |
| DNSCrypt, IPv4       | Proveedor: `2.dnscrypt-cert.ibksturm` IP: `213.196.191.96:8443`               | [Añadir a AdGuard](sdns://AQcAAAAAAAAAEzIxMy4xOTYuMTkxLjk2Ojg0NDMgKmPSv6jOgF7lERDduUMH7a4Z5ShV7PrD-IcS23XUsPkYMi5kbnNjcnlwdC1jZXJ0Lmlia3N0dXJt)                                                                                                   |

### DNS Privacy

Un proyecto abierto colaborativo para promover y implementar la [Privacidad de DNS](https://dnsprivacy.org/).

Servidores DNS ejecutados por los desarrolladores de [Stubby](https://getdnsapi.net/).

| Protocolo        | Dirección                                                                                                                          |                                                                                                                                                                                                                                       |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante TLS | Nombre de host: `tls://getdnsapi.net` IP: `185.49.141.37` e IPv6: `2a04:b900:0:100::37`                                            | [Agregar a AdGuard](adguard:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://getdnsapi.net&name=getdnsapi.net)                                         |
| DNS mediante TLS | Proveedor: `Surfnet` Nombre de host: `tls://dnsovertls.sinodun.com` IP: `145.100.185.15` y IPv6: `2001:610:1:40ba:145:100:185:15`  | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsovertls.sinodun.com&name=dnsovertls.sinodun.com)     |
| DNS mediante TLS | Proveedor: `Surfnet` Nombre de host: `tls://dnsovertls1.sinodun.com` IP: `145.100.185.16` y IPv6: `2001:610:1:40ba:145:100:185:16` | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsovertls1.sinodun.com&name=dnsovertls1.sinodun.com) |

Otros servidores DNS con política de "no registro".

| Protocolo          | Dirección                                                                                                                  |                                                                                                                                                                                                                                           |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante TLS   | Proveedor: `UncensoredDNS` Nombre del host: `tls://unicast.censurfridns.dk` IP: `89.233.43.71` y IPv6: `2a01:3a0:53:53::0` | [Agregar a AdGuard](adguard:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://unicast.censurfridns.dk&name=unicast.censurfridns.dk)     |
| DNS mediante TLS   | Proveedor: `UncensoredDNS` Hostname: `tls://anycast.censurfridns.dk` IP: `91.239.100.100` y IPv6: `2001:67c:28a4::`        | [Agregar a AdGuard](adguard:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://anycast.censurfridns.dk&name=anycast.censurfridns.dk)     |
| DNS mediante TLS   | Proveedor: `dkg` Nombre de host: `tls://dns.cmrg.net`  IP: `199.58.81.218` e IPv6: `2001:470:1c:76d::53`                   | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.cmrg.net&name=dns.cmrg.net)                                                 |
| DNS-over-TLS, IPv4 | Hostname: `tls://dns.larsdebruin.net` IP: `51.15.70.167`                                                                   | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.larsdebruin.net&name=dns.larsdebruin.net)                     |
| DNS mediante TLS   | Nombre de host: `tls://dns-tls.bitwiseshift.net` IP: `81.187.221.24` y IPv6: `2001:8b0:24:24::24`                          | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns-tls.bitwiseshift.net&name=dns-tls.bitwiseshift.net) |
| DNS mediante TLS   | Nombre de host: `tls://ns1.dnsprivacy.at` IP: `94.130.110.185` y IPv6: `2a01:4f8:c0c:3c03::2`                              | [Agregar a AdGuard](adguard:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://ns1.dnsprivacy.at&name=ns1.dnsprivacy.at)                             |
| DNS mediante TLS   | Nombre de host: `tls://ns1.dnsprivacy.at` IP: `94.130.110.185` y IPv6: `2a01:4f8:c0c:3c03::2`                              | [Agregar a AdGuard](adguard:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://ns2.dnsprivacy.at&name=ns2.dnsprivacy.at)                             |
| DNS-over-TLS, IPv4 | Nombre de host: `tls://dns.bitgeek.in` IP: `139.59.51.46`                                                                  | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.bitgeek.in&name=dns.bitgeek.in)                                         |
| DNS mediante TLS   | Nombre de host: `tls://ns2.dnsprivacy.at` IP: `94.130.110.178` y IPv6: `2a01:4f8:c0c:3bfc::2`                              | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.neutopia.org&name=dns.neutopia.org)                                 |
| DNS mediante TLS   | Proveedor: `Go6Lab` Nombre de host: `tls://privacydns.go6lab.si` e IPv6: `2001:67c:27e4::35`                               | [Agregar a AdGuard](adguard:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://privacydns.go6lab.si&name=privacydns.go6lab.si)                 |
| DNS mediante TLS   | Nombre de host: `tls://dot.securedns.eu` IP: `146.185.167.43` e IPv6: `2a03:b0c0:0:1010::e9a:3001`                         | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.securedns.eu&name=dot.securedns.eu)                                 |

Servidores DNS con registro/restricciones mínimas. Estos servidores usan algunos registros, certificados autofirmados o no admiten el modo estricto.

| Protocolo        | Dirección                                                                                                              |                                                                                                                                                                                                                                                       |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante TLS | Proveedor: `NIC Chile` Nombre de host: `dnsotls.lab.nic.cl` IP: `200.1.123.46` y IPv6: `2001:1398:1:0:200:1:123:46`    | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dnsotls.lab.nic.cl&name=dnsotls.lab.nic.cl)                                     |
| DNS mediante TLS | Proveedor: `OARC` Nombre de host: `tls-dns-u.odvr.dns-oarc.net` IP: `184.105.193.78` y IPv6: `2620:ff:c000:0:1::64:25` | [Agregar a AdGuard](adguard:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls-dns-u.odvr.dns-oarc.net&name=tls-dns-u.odvr.dns-oarc.net) |

### AhaDNS

[AhaDNS](https://ahadns.com/) Un servicio DNS de bloqueo de publicidad y registro cero proporcionado por Fredrik Pettersson.

#### Blitz

Opción de [filtrado configurable](https://blitz-setup.ahadns.com/) mundial DoH.

| Protocolo                                    | Dirección                         |                                                                                                                                                                                                                             |
| -------------------------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS-over-HTTPS, sin censura                  | `https://blitz.ahadns.com`        | [Agregar a AdGuard](adguard:add_dns_server?address=https://blitz.ahadns.com&name=blitz.ahadns.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://blitz.ahadns.com&name=blitz.ahadns.com)               |
| DNS-over-HTTPS, filtro OISD                  | `https://blitz.ahadns.com/1:1`    | [Agregar a AdGuard](adguard:add_dns_server?address=https://blitz.ahadns.com/1:1&name=blitz.ahadns.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://blitz.ahadns.com/1:1&name=blitz.ahadns.com)       |
| DNS-over-HTTPS, OISD & Energized porn filter | `https://blitz.ahadns.com/1:1.12` | [Agregar a AdGuard](adguard:add_dns_server?address=https://blitz.ahadns.com/1:1.12&name=blitz.ahadns.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://blitz.ahadns.com/1:1.12&name=blitz.ahadns.com) |

#### Países Bajos

| Protocolo          | Dirección                             |                                                                                                                                                                                                                                       |
| ------------------ | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `5.2.75.75`                           | [Agregar a AdGuard](adguard:add_dns_server?address=5.2.75.75&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=5.2.75.75&name=)                                                                                       |
| DNS, IPv6          | `2a04:52c0:101:75::75`                | [Agregar a AdGuard](adguard:add_dns_server?address=2a04:52c0:101:75::75&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2a04:52c0:101:75::75&name=)                                                                 |
| DNS mediante HTTPS | `https://doh.nl.ahadns.net/dns-query` | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.nl.ahadns.net/dns-query&name=doh.nl.ahadns.net) |
| DNS mediante TLS   | `tls://dot.nl.ahadns.net`             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.nl.ahadns.net&name=dot.nl.ahadns.net)                         |

#### India

| Protocolo          | Dirección                             |                                                                                                                                                                                                                                       |
| ------------------ | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `45.79.120.233`                       | [Agregar a AdGuard](adguard:add_dns_server?address=45.79.120.233&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=45.79.120.233&name=)                                                                               |
| DNS, IPv6          | `2400:8904:e001:43::43`               | [Agregar a AdGuard](adguard:add_dns_server?address=2400:8904:e001:43::43&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2400:8904:e001:43::43&name=)                                                               |
| DNS mediante HTTPS | `https://doh.in.ahadns.net/dns-query` | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.in.ahadns.net/dns-query&name=doh.in.ahadns.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.in.ahadns.net/dns-query&name=doh.in.ahadns.net) |
| DNS mediante TLS   | `tls://dot.in.ahadns.net`             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dot.in.ahadns.net&name=dot.in.ahadns.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.in.ahadns.net&name=dot.in.ahadns.net)                         |

#### Los Angeles

| Protocolo          | Dirección                             |                                                                                                                                                                                                                                       |
| ------------------ | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `45.67.219.208`                       | [Agregar a AdGuard](adguard:add_dns_server?address=45.67.219.208&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=45.67.219.208&name=)                                                                               |
| DNS, IPv6          | `2a04:bdc7:100:70::70`                | [Agregar a AdGuard](adguard:add_dns_server?address=2a04:bdc7:100:70::70&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2a04:bdc7:100:70::70&name=)                                                                 |
| DNS mediante HTTPS | `https://doh.la.ahadns.net/dns-query` | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.la.ahadns.net/dns-query&name=doh.la.ahadns.net) |
| DNS mediante TLS   | `tls://dot.la.ahadns.net`             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.la.ahadns.net&name=dot.la.ahadns.net)                         |

#### New York

| Protocolo          | Dirección                             |                                                                                                                                                                                                                                       |
| ------------------ | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `185.213.26.187`                      | [Agregar a AdGuard](adguard:add_dns_server?address=185.213.26.187&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=185.213.26.187&name=)                                                                             |
| DNS, IPv6          | `2a0d:5600:33:3::3`                   | [Agregar a AdGuard](adguard:add_dns_server?address=2a0d:5600:33:3::3&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:5600:33:3::3&name=)                                                                       |
| DNS mediante HTTPS | `https://doh.ny.ahadns.net/dns-query` | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.ny.ahadns.net/dns-query&name=doh.ny.ahadns.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.ny.ahadns.net/dns-query&name=doh.ny.ahadns.net) |
| DNS mediante TLS   | `tls://dot.ny.ahadns.net`             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dot.ny.ahadns.net&name=dot.ny.ahadns.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.ny.ahadns.net&name=dot.ny.ahadns.net)                         |

#### Polonia

| Protocolo          | Dirección                             |                                                                                                                                                                                                                                       |
| ------------------ | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante HTTPS | `https://doh.pl.ahadns.net/dns-query` | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.pl.ahadns.net/dns-query&name=doh.pl.ahadns.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.pl.ahadns.net/dns-query&name=doh.pl.ahadns.net) |
| DNS mediante TLS   | `tls://dot.pl.ahadns.net`             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dot.pl.ahadns.net&name=dot.pl.ahadns.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.pl.ahadns.net&name=dot.pl.ahadns.net)                         |

#### Italia

| Protocolo          | Dirección                             |                                                                                                                                                                                                                                       |
| ------------------ | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante HTTPS | `https://doh.it.ahadns.net/dns-query` | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.it.ahadns.net/dns-query&name=doh.it.ahadns.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.it.ahadns.net/dns-query&name=doh.it.ahadns.net) |
| DNS mediante TLS   | `tls://dot.it.ahadns.net`             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dot.it.ahadns.net&name=dot.it.ahadns.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.it.ahadns.net&name=dot.it.ahadns.net)                         |

#### España

| Protocolo          | Dirección                             |                                                                                                                                                                                                                                       |
| ------------------ | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante HTTPS | `https://doh.es.ahadns.net/dns-query` | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.es.ahadns.net/dns-query&name=doh.es.ahadns.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.es.ahadns.net/dns-query&name=doh.es.ahadns.net) |
| DNS mediante TLS   | `tls://dot.es.ahadns.net`             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dot.es.ahadns.net&name=dot.es.ahadns.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.es.ahadns.net&name=dot.es.ahadns.net)                         |

#### Noruega

| Protocolo          | Dirección                             |                                                                                                                                                                                                                                       |
| ------------------ | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante HTTPS | `https://doh.no.ahadns.net/dns-query` | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.no.ahadns.net/dns-query&name=doh.no.ahadns.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.no.ahadns.net/dns-query&name=doh.no.ahadns.net) |
| DNS mediante TLS   | `tls://dot.no.ahadns.net`             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dot.no.ahadns.net&name=dot.no.ahadns.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.no.ahadns.net&name=dot.no.ahadns.net)                         |

#### Chicago

| Protocolo          | Dirección                              |                                                                                                                                                                                                                                           |
| ------------------ | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante HTTPS | `https://doh.chi.ahadns.net/dns-query` | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.chi.ahadns.net/dns-query&name=doh.chi.ahadns.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.chi.ahadns.net/dns-query&name=doh.chi.ahadns.net) |
| DNS mediante TLS   | `tls://dot.chi.ahadns.net`             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dot.chi.ahadns.net&name=dot.chi.ahadns.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dot.chi.ahadns.net&name=dot.chi.ahadns.net)                         |

### Seby DNS

[Seby DNS](https://dns.seby.io/) es un servicio de DNS centrado en la privacidad proporcionado por Sebastian Schmidt. Sin registro, validación de DNSSEC.

#### DNS Server 1

| Protocolo        | Dirección                                                   |                                                                                                                                                                                                               |
| ---------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4        | `45.76.113.31`                                              | [Agregar a AdGuard](adguard:add_dns_server?address=45.76.113.31&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=45.76.113.31&name=)                                                         |
| DNSCrypt, IPv4   | Proveedor: `2.dnscrypt-cert.dns.seby.io` IP: `45.76.113.31` | [Añadir a AdGuard](sdns://AQcAAAAAAAAADDQ1Ljc2LjExMy4zMSAIVGh4i6eKXqlF6o9Fg92cgD2WcDvKQJ7v_Wq4XrQsVhsyLmRuc2NyeXB0LWNlcnQuZG5zLnNlYnkuaW8)                                                                    |
| DNS mediante TLS | `tls://dot.seby.io`                                         | [Agregar a AdGuard](adguard:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://tls://dot.seby.io&name=tls://dot.seby.io) |

### puntCAT DNS

[puntCAT](http://www.servidordenoms.cat/) está ubicado físicamente cerca de Barcelona, España. puntCAT ofrece un servicio de DNS público, gratuito, seguro y que respeta tu privacidad.

| Protocolo | Dirección          |                                                                                                                                                               |
| --------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `109.69.8.51`      | [Agregar a AdGuard](adguard:add_dns_server?address=109.69.8.51&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=109.69.8.51&name=)           |
| DNS, IPv6 | `2a00:1508:0:4::9` | [Agregar a AdGuard](adguard:add_dns_server?address=2a00:1508:0:4::9&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2a00:1508:0:4::9&name=) |

### DNSlify DNS

[DNSlify DNS](https://www.dnslify.com/services/) Opera resolutores de DNS públicos para acelerar las solicitudes y aumentar la redundancia. El servicio es proporcionado por [Peerix](https://www.peerix.net/)

#### Predeterminado

Estos servidores proporcionan resolución de DNS sin filtrado de tráfico.

| Protocolo          | Dirección                             |                                                                                                                                                                                                                               |
| ------------------ | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `185.235.81.1` y `185.235.81.2`       | [Agregar a AdGuard](adguard:add_dns_server?address=185.235.81.1&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=185.235.81.1&name=)                                                                         |
| DNS, IPv6          | `2a0d:4d00:81::1` y `2a0d:4d00:81::2` | [Agregar a AdGuard](adguard:add_dns_server?address=2a0d:4d00:81::1&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:4d00:81::1&name=)                                                                   |
| DNS mediante HTTPS | `https://doh.dnslify.com/dns-query`   | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.dnslify.com/dns-query&name=doh.dnslify.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.dnslify.com/dns-query&name=doh.dnslify.com) |
| DNS mediante TLS   | `tls://doh.dnslify.com`               | [Agregar a AdGuard](adguard:add_dns_server?address=tls://doh.dnslify.com&name=doh.dnslify.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://doh.dnslify.com&name=doh.dnslify.com)                         |

#### Seguro

El modo seguro protege contra sitios infectados, fraudulentos o bots.

| Protocolo | Dirección                             |                                                                                                                                                             |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.3` y `185.235.81.4`       | [Agregar a AdGuard](adguard:add_dns_server?address=185.235.81.3&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=185.235.81.3&name=)       |
| DNS, IPv6 | `2a0d:4d00:81::3` y `2a0d:4d00:81::4` | [Agregar a AdGuard](adguard:add_dns_server?address=2a0d:4d00:81::3&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:4d00:81::3&name=) |

#### Familia

El modo familiar ofrece protección mediante resolutores "seguros" y bloquea sitios para adultos.

| Protocolo | Dirección                             |                                                                                                                                                             |
| --------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4 | `185.235.81.5` y `185.235.81.6`       | [Agregar a AdGuard](adguard:add_dns_server?address=185.235.81.5&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=185.235.81.5&name=)       |
| DNS, IPv6 | `2a0d:4d00:81::5` y `2a0d:4d00:81::6` | [Agregar a AdGuard](adguard:add_dns_server?address=2a0d:4d00:81::5&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2a0d:4d00:81::5&name=) |

### NextDNS

[NextDNS](https://nextdns.io/) proporciona resolutores sin filtrado de acceso público sin registro, además de sus resolutores de filtrado configurables freemium con registro opcional.

#### Latencia ultrabaja

| Protocolo          | Dirección                |                                                                                                                                                                                                                           |
| ------------------ | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante HTTPS | `https://dns.nextdns.io` | [Agregar a AdGuard](adguard:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.nextdns.io/dns-query&name=dns.nextdns.io) |
| DNS mediante TLS   | `tls://dns.nextdns.io`   | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dns.nextdns.io&name=dns.nextdns.io)                         |

#### Anycast

| Protocolo          | Dirección                        |                                                                                                                                                                                                                                                           |
| ------------------ | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante HTTPS | `https://anycast.dns.nextdns.io` | [Agregar a AdGuard](adguard:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://anycast.dns.nextdns.io/dns-query&name=anycast.dns.nextdns.io) |
| DNS mediante TLS   | `tls://anycast.dns.nextdns.io`   | [Agregar a AdGuard](adguard:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://anycast.dns.nextdns.io&name=anycast.dns.nextdns.io)                         |

### RethinkDNS

[RethinkDNS](https://www.rethinkdns.com/configure) proporciona un servicio DNS-over-HTTPS que se ejecuta como Cloudflare Worker y un servicio DNS-over-TLS que se ejecuta como Fly.io Worker con listas de bloqueo configurables.

#### Sin filtrado

| Protocolo          | Dirección                       |                                                                                                                                                                                                                                 |
| ------------------ | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante HTTPS | `https://basic.rethinkdns.com/` | [Agregar a AdGuard](adguard:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://basic.rethinkdns.com/&name=basic.rethinkdns.com) |
| DNS mediante TLS   | `tls://max.rethinkdns.com`      | [Agregar a AdGuard](adguard:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://max.rethinkdns.com&name=max.rethinkdns.com)               |

### ControlD

[ControlD](https://controld.com/free-dns) es un servicio de DNS personalizable con capacidades de proxy. Esto significa que no solo bloquea cosas (anuncios, pornografía, etc.), sino que también puede desbloquear sitios web y servicios.

#### Sin filtrado

| Protocolo          | Dirección                         |                                                                                                                                                                                             |
| ------------------ | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `76.76.2.0` y `76.76.10.0`        | [Agregar a AdGuard](adguard:add_dns_server?address=76.76.2.1&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| IPv6               | `2606:1a40::` y `2606:1a40:1::`   | [Agregar a AdGuard](adguard:add_dns_server?address=2606:1a40::&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=2606:1a40::&name=)                                         |
| DNS mediante HTTPS | `https://freedns.controld.com/p0` | [Agregar a AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p0&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p0&name=) |
| DNS mediante TLS   | `p0.freedns.controld.com`         | [Agregar a AdGuard](adguard:add_dns_server?address=p0.freedns.controld.com&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=p0.freedns.controld.com&name=)                 |

#### Bloquear malware

| Protocolo          | Dirección                         |                                                                                                                                                                                             |
| ------------------ | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `76.76.2.1`                       | [Agregar a AdGuard](adguard:add_dns_server?address=76.76.2.1&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.1&name=)                                             |
| DNS mediante HTTPS | `https://freedns.controld.com/p1` | [Agregar a AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p1&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p1&name=) |
| DNS mediante TLS   | `tls://p1.freedns.controld.com`   | [Agregar a AdGuard](adguard:add_dns_server?address=tls://p1.freedns.controld.com&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://p1.freedns.controld.com&name=)     |

##### Bloquear malware + anuncios

| Protocolo          | Dirección                         |                                                                                                                                                                                             |
| ------------------ | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `76.76.2.2`                       | [Agregar a AdGuard](adguard:add_dns_server?address=76.76.2.2&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.2&name=)                                             |
| DNS mediante HTTPS | `https://freedns.controld.com/p2` | [Agregar a AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p2&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p2&name=) |
| DNS mediante TLS   | `tls://p2.freedns.controld.com`   | [Agregar a AdGuard](adguard:add_dns_server?address=tls://p2.freedns.controld.com&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://p2.freedns.controld.com&name=)     |

##### Bloquea malware + anuncios + redes sociales

| Protocolo          | Dirección                         |                                                                                                                                                                                             |
| ------------------ | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS, IPv4          | `76.76.2.3`                       | [Agregar a AdGuard](adguard:add_dns_server?address=76.76.2.3&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=76.76.2.3&name=)                                             |
| DNS mediante HTTPS | `https://freedns.controld.com/p3` | [Agregar a AdGuard](adguard:add_dns_server?address=https://freedns.controld.com/p3&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://freedns.controld.com/p3&name=) |
| DNS mediante TLS   | `tls://p3.freedns.controld.com`   | [[Agregar a AdGuard](adguard:add_dns_server?address=tls://p3.freedns.controld.com&name=), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://p3.freedns.controld.com&name=)    |

### Mullvad

[Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls/) proporciona DNS de acceso público con minimización de QNAME, puntos finales ubicados en Australia, Alemania, Singapur, Suecia, Reino Unido y Estados Unidos (Nueva York y Los Ángeles).

#### Sin filtrado

| Protocolo          | Dirección                           |                                                                                                                                                                                                                               |
| ------------------ | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante HTTPS | `https://doh.mullvad.net/dns-query` | [Agregar a AdGuard](adguard:add_dns_server?address=https://doh.mullvad.net/dns-query&name=doh.mullvad.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://doh.mullvad.net/dns-query&name=doh.mullvad.net) |
| DNS mediante TLS   | `tls://doh.mullvad.net`             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://doh.mullvad.net&name=doh.mullvad.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://doh.mullvad.net&name=doh.mullvad.net)                         |

#### Bloqueo de anuncios

| Protocolo          | Dirección                                   |                                                                                                                                                                                                                                                               |
| ------------------ | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante HTTPS | `https://adblock.doh.mullvad.net/dns-query` | [Agregar a AdGuard](adguard:add_dns_server?address=https://adblock.doh.mullvad.net/dns-query&name=adblock.doh.mullvad.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://adblock.doh.mullvad.net/dns-query&name=adblock.doh.mullvad.net) |
| DNS mediante TLS   | `tls://adblock.doh.mullvad.net`             | [Agregar a AdGuard](adguard:add_dns_server?address=tls://adblock.doh.mullvad.net&name=adblock.doh.mullvad.net), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://adblock.doh.mullvad.net&name=adblock.doh.mullvad.net)                         |

### Pequeños solucionadores personales

En esta sección, enumeramos resolutores de DNS pequeños, en su mayoría personales. A menudo tienen solo uno o muy pocos servidores y un peor tiempo de actividad que los proveedores "grandes". No podremos controlar adecuadamente su disponibilidad. **Úsalos a tu propio riesgo!**

#### Arapurayil

[Arapurayil](https://dns.arapurayil.com) es un servicio DNS personal alojado en Mumbai, India.

Sin registro | Filtros de anuncios, rastreadores, phishing, etc | DNSSEC | Minimización de QNAME | Sin subred de cliente EDNS.

| Protocolo          | Dirección                                                    |                                                                                                                                                                                                                                           |
| ------------------ | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNSCrypt, IPv4     | Host: `2.dnscrypt-cert.dns.arapurayil.com` IP: `3.7.156.128` | [Añadir a AdGuard](sdns://AQMAAAAAAAAAEDMuNy4xNTYuMTI4Ojg0NDMgDXD9OSDJDwe2q9bi836PURTP14NLYS03RbDq6j891ZciMi5kbnNjcnlwdC1jZXJ0LmRucy5hcmFwdXJheWlsLmNvbQ)                                                                                 |
| DNS mediante HTTPS | Anfitrión: `https://dns.arapurayil.com/dns-query`            | [Agregar a AdGuard](adguard:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dns.arapurayil.com/dns-query&name=dns.arapurayil.com) |

#### Servidor DNS oficial de Dandelion Sprout

[El servidor DNS oficial](https://github.com/DandelionSprout/adfilt/tree/master/Dandelion%20Sprout's%20Official%20DNS%20Server) de Dandelion Sprout es un servicio DNS personal alojado en Trondheim, Noruega, que utiliza una infraestructura de AdGuard Home.

Bloquea más anuncios y malware que AdGuard DNS gracias a una sintaxis más avanzada, pero es más fácil en los rastreadores, y bloquea tabloides alt-right y la mayoría de imageboards. El registro se utiliza para mejorar sus listas de filtros usados (por ejemplo, desbloqueando sitios que no deberían haber sido bloqueados) y para determinar los tiempos menos malos para las actualizaciones del sistema del servidor.

| Protocolo          | Dirección                                             |                                                                                                                                                                                                                                                                                                       |
| ------------------ | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DNS mediante HTTPS | `https://dandelionsprout.asuscomm.com:2501/dns-query` | [Agregar a AdGuard](adguard:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=https://dandelionsprout.asuscomm.com:2501/dns-query&name=dandelionsprout.asuscomm.com:2501) |
| DNS mediante TLS   | `tls://dandelionsprout.asuscomm.com:853`              | [Agregar a AdGuard](adguard:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=tls://dandelionsprout.asuscomm.com:853&name=dandelionsprout.asuscomm.com:853)                             |
| DNS-over-QUIC      | `quic://dandelionsprout.asuscomm.com:48582`           | [Agregar a AdGuard](adguard:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582), [Agregar a AdGuard VPN](adguardvpn:add_dns_server?address=quic://dandelionsprout.asuscomm.com:48582&name=dandelionsprout.asuscomm.com:48582)                   |
| DNS, IPv4          | Varía; ver enlace arriba.                             |                                                                                                                                                                                                                                                                                                       |
| DNS, IPv6          | Varía; ver enlace arriba.                             |                                                                                                                                                                                                                                                                                                       |
| DNSCrypt, IPv4     | Varía; ver enlace arriba.                             |                                                                                                                                                                                                                                                                                                       |

### DNS de OpenBLD.net

[OpenBLD.net DNS](https://openbld.net/) - Anycast/GeoDNS DNS-over-HTTPS, DNS-over-TLS resovers con bloqueo: publicidad, seguimiento, adware, malware, actividades maliciosas y compañías de phishing, bloquea ~1 millón de dominios. Puede tener registros 24h/48h para mitigar ataques DDoS/Flood.

#### Filtrado adaptativo (ADA)

Recomendado para la mayoría de los usuarios, filtrado muy flexible con bloqueo de la mayoría de las redes publicitarias, seguimiento de anuncios, malware y dominios de phishing.

| Protocolo          | Dirección                           |                                                                                |
| ------------------ | ----------------------------------- | ------------------------------------------------------------------------------ |
| DNS mediante HTTPS | `https://ada.openbld.net/dns-query` | [Añadir a AdGuard](sdns://AgAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS mediante TLS   | `tls://ada.openbld.net`             | [Añadir a AdGuard](sdns://AwAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0)                |

#### Filtrado estricto (RIC)

Políticas de filtrado más estrictas con bloqueo: anuncios, marketing, seguimiento, malware, clickbait, coinhive y dominios de phishing.

| Protocolo          | Dirección                           |                                                                                |
| ------------------ | ----------------------------------- | ------------------------------------------------------------------------------ |
| DNS mediante HTTPS | `https://ric.openbld.net/dns-query` | [Añadir a AdGuard](sdns://AgAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk) |
| DNS mediante TLS   | `tls://ric.openbld.net`             | [Añadir a AdGuard](sdns://AwAAAAAAAAAAAAAPcmljLm9wZW5ibGQubmV0)                |
