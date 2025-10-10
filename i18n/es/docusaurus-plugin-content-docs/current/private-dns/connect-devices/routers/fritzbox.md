---
title: FritzBox
sidebar_position: 4
---

FRITZ!Box proporciona máxima flexibilidad para todos los dispositivos al utilizar simultáneamente las bandas de frecuencia de 2.4 GHz y 5 GHz. Todos los dispositivos conectados al FRITZ!Box están completamente protegidos contra ataques desde Internet. La configuración de esta marca de routers también permite configurar DNS privado AdGuard cifrado.

## Configura DNS-over-TLS

1. Abre el panel de administración del router. Se puede acceder en fritz.box, la dirección IP de tu router, o `192.168.178.1`.
2. Introduce el nombre de usuario del administrador (generalmente, es admin) y la contraseña del router.
3. Abre _Internet_ o _Red doméstica_.
4. Selecciona _DNS_ o _Configuración de DNS_.
5. En DNS-over-TLS (DoT), marca _Usar DNS-over-TLS_ si el proveedor lo admite.
6. Selecciona _Usar indicación de nombre de servidor TLS personalizado (SNI)_ e ingresa la dirección del servidor DNS privado AdGuard:  `{Your_Device_ID}.d.adguard-dns.com`.
7. Guarda la configuración.

## Utiliza el panel de administración del router

Utiliza esta guía si tu router FritzBox no admite la configuración de DNS-over-TLS:

1. Abre el panel de administración del router. Se puede acceder en `192.168.1.1` o `192.168.0.1`.
2. Introduce el nombre de usuario del administrador (generalmente, es admin) y la contraseña del router.
3. Abre _Internet_ o _Red doméstica_.
4. Selecciona _DNS_ o _Configuración de DNS_.
5. Selecciona _DNS manual_, luego _Usar estos servidores DNS_ o _Especificar servidor DNS manualmente_, e introduce las siguientes direcciones del servidor DNS:
    - IPv4: `94.140.14.49` y `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` y `2a10:50c0:0:0:0:0:dad:ff`
6. Guarda la configuración.
7. Vincula tu IP (o tu IP dedicada si tienes una suscripción de equipo).

 - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
 - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
