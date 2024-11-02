---
title: OPNSense
sidebar_position: 8
---

El firmware de OPNSense se utiliza a menudo para configurar puntos de acceso inalámbricos, servidores DHCP, servidores DNS, permitiéndole configurar AdGuard DNS directamente en el dispositivo.

## Utiliza el panel de administración del router

Usa estas instrucciones si tu router Keenetic no admite la configuración de DNS-over-HTTPS o DNS-over-TLS:

1. Abre el panel de administración del router. Se puede acceder en `192.168.1.1` o `192.168.0.1`.
2. Introduce el nombre de usuario del administrador (generalmente, es admin) y la contraseña del router.
3. Haz clic en _Servicios_ en el menú superior, luego selecciona _Servidor DHCP_ en el menú desplegable.
4. En la página _Servidor DHCP_, selecciona la interfaz para la que deseas configurar los ajustes de DNS (p. ej., LAN, WLAN).
5. Desplázate hacia abajo hasta _Servidores DNS_.
6. Elige _DNS manual_. Selecciona _Usar estos servidores DNS_ o _Especificar servidor DNS manualmente_ e introduce las siguientes direcciones de servidor DNS:
   - IPv4: `94.140.14.49` y `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` y `2a10:50c0:0:0:0:0:dad:ff`
7. Guarda la configuración.
8. Opcionalmente, puedes habilitar DNSSEC para mejorar la seguridad.
9. Vincula tu IP (o tu IP dedicada si tienes una suscripción de equipo).

- [IP dedicadas](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP vinculadas](/private-dns/connect-devices/other-options/linked-ip.md)
