---
title: General
sidebar_position: 1
---

# DNS privado de AdGuard

![Private AdGuard DNS dashboard main](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/main.png)

## Que es DNS Privado de AdGuard

DNS Privado de AdGuard es un servidor DNS que, además de los beneficios de un servidor DNS público (como el cifrado de tráfico y las listas de bloqueo de dominios), proporciona características como personalización flexible, estadísticas de DNS y control parental y se administra fácilmente a través de un práctico panel de control.

## Por qué se necesita DNS Privado de AdGuard

Hoy en día, puede conectar cualquier cosa a Internet: televisores, refrigeradores, bombillas inteligentes o altavoces. Pero junto con las innegables comodidades, obtienes rastreadores y anuncios. Un simple bloqueador de anuncios basado en navegador no lo protegerá en este caso, pero AdGuard DNS, que puede configurar para filtrar el tráfico, bloquear contenido y rastreadores, tiene un efecto en todo el sistema.

Ya tenemos [AdGuard DNS público](../public-dns/overview.md) y [AdGuard Hogar](https://github.com/AdguardTeam/AdGuardHome). Estas soluciones funcionan bien para algunos usuarios, pero para otros, el DNS público de AdGuard carece de la flexibilidad de configuración, mientras que AdGuard Hogar carece de simplicidad. Ahí es donde entra en juego el DNS privado de AdGuard. Tiene lo mejor de ambos mundos: ofrece personalización, control e información, todo a través de un panel de control simple y fácil de usar.

## La diferencia entre DNS de AdGuard privado y público

Aquí hay una comparación simple de las características disponibles en los servidores DNS de AdGuard público y Servidores DNS privados de AdGuard.

| DNS público de AdGuard                       | DNS privado de AdGuard                                                                                    |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Cifrado de tráfico DNS                       | Cifrado de tráfico DNS                                                                                    |
| Listas de bloqueo de dominio predeterminadas | Listas de bloqueo de dominio personalizables                                                              |
| -                                            | Reglas de filtrado DNS personalizadas con función de importación/exportación                              |
| -                                            | Estadísticas de solicitudes (consulte a dónde van sus solicitudes de DNS: qué países, qué empresas, etc.) |
| -                                            | Registro de consultas detallado                                                                           |
| -                                            | Control parental                                                                                          |

## Cómo configurar DNS privado de AdGuard

1. Vaya a su [ Panel de control DNS de AdGuard](https://adguard-dns.io/dashboard/) (si no ha iniciado sesión, inicie sesión con su cuenta de AdGuard)
2. Haga clic en "Conectar dispositivo" y siga las instrucciones en pantalla

> Plataformas soportadas: - Android - iOS - Windows - Mac - Linux - Routers - Consolas de juegos


## Funciones de DNS de AdGuard privado

### Gestión de listas de bloqueo

Con la función "Listas de bloqueo", puede establecer qué dominios desea bloquear y cuáles no. Elija una amplia variedad de listas de bloqueo para diferentes propósitos.

![Private AdGuard DNS dashboard blocklists](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### Reglas de usuario

En los momentos en que *las listas de bloqueos preinstaladas* con miles de reglas no son suficientes, tenemos una función útil llamada "Reglas de usuario". Aquí puede agregar reglas personalizadas manualmente para bloquear/desbloquear un determinado dominio o importar listas de reglas personalizadas (consulte [Sintaxis de reglas de filtro](../general/dns-filtering-syntax.md)). Puede exportar las listas.

![Private AdGuard DNS dashboard user rules](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/import.png)

### Statistics

In "Statistics" tab you can see all the summarized statistics on DNS queries made by devices connected to your Private AdGuard  DNS. It shows the total number and geography of requests, the number of blocked requests, the list of companies the requests were addressed to, requests types and top requested domains.

![Private AdGuard DNS dashboard statistics](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/statistics.png)

### Traffic destination

This feature shows you where DNS requests sent by your devices go. On top of seeing the map of request destinations, you can filter the information by date, device and country.

![Private AdGuard DNS dashboard traffic](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/traffic_destination.png)

### Companies

This tab allows you to quickly check which companies send the most requests, and which companies have the most blocked requests.

![Private AdGuard DNS dashboard companies](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/companies.png)

### Query log

This is a detailed log where you can check out the information on every single request and also sort requests by status, type, company, device, time, country.

![Private AdGuard DNS dashboard query log](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/query_log.png)

### Control parental

To protect your child from online content you deem inappropriate, set up and activate the *Parental control* option. In addition to options such as "adult content" blocking and safe search, we've added the ability to manually specify domains for blocking and set a schedule for the *Parental control* to work accordingly.

![Private AdGuard DNS dashboard Parental Control](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/parental_control.png)
> In case you don't have Private AdGuard DNS yet, you can [get it on the official website](https://adguard-dns.io/).