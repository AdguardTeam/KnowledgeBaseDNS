---
title: OPNsense
sidebar_position: 8
---

OPNsense firmware is often used to configure wireless access points, DHCP servers, DNS servers, allowing you to configure AdGuard DNS directly on the device.

## Utiliza el panel de administración del router

Use these instructions if your OPNsense router does not support DNS-over-HTTPS or DNS-over-TLS configuration:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Introduce el nombre de usuario del administrador (generalmente, es admin) y la contraseña del router.
3. Haz clic en _Servicios_ en el menú superior, luego selecciona _Servidor DHCP_ en el menú desplegable.
4. En la página _Servidor DHCP_, selecciona la interfaz para la que deseas configurar los ajustes de DNS (p. ej., LAN, WLAN).
5. Desplázate hacia abajo hasta _Servidores DNS_.
6. Elige _DNS manual_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` y `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` y `2a10:50c0:0:0:0:0:dad:ff`
7. Guarda la configuración.
8. Opcionalmente, puedes habilitar DNSSEC para mejorar la seguridad.
9. Vincula tu IP (o tu IP dedicada si tienes una suscripción de equipo).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
