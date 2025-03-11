---
title: Steam Deck
sidebar_position: 5
---

Las consolas de juegos no admiten DNS encriptados, pero son adecuadas para configurar DNS público de AdGuard o DNS privado de AdGuard a través de una dirección IP vinculada.

Es probable que tu router admita el uso de servidores DNS encriptados, por lo que siempre puedes configurar DNS privado de AdGuard en él y conectar tu consola de juegos a él.

[Cómo configurar tu router](/private-dns/connect-devices/routers/routers.md)

## Conectar AdGuard DNS

Configura tu consola de juegos para usar un servidor DNS público de AdGuard o configúralo a través de IP vinculada:

1. Abre la configuración de Steam Deck haciendo clic en el ícono de ajustes en la esquina superior derecha de la pantalla.
2. Haz clic en _Red_.
3. Haz clic en el ícono de ajustes junto a la conexión de red que deseas configurar.
4. Selecciona IPv4 o IPv6, según el tipo de red que estés utilizando.
5. Selecciona _Direcciones automáticas (DHCP) solo_ o _Automáticas (DHCP)_.
6. En el campo _Servidor DNS_, ingresa una de las siguientes direcciones de servidor DNS:
    - `94.140.14.49`
    - `94.140.14.59`
7. Guarda los cambios.

Sería preferible usar IP vinculada (o IP dedicada si tienes una suscripción de Team):

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
