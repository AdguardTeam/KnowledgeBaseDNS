---
title: Synology NAS
sidebar_position: 9
---

Los routers Synology NAS son increíblemente fáciles de usar y se pueden combinar en una sola red en malla. Puedes administrar tu red de forma remota en cualquier momento y lugar. También puedes configurar AdGuard DNS directamente en el router.

## Utiliza el panel de administración del router

Usa estas instrucciones si tu router Keenetic no admite la configuración de DNS-over-HTTPS o DNS mediante TLS:

1. Abre el panel de administración del router. Se puede acceder en `192.168.1.1` o `192.168.0.1`.
2. Introduce el nombre de usuario del administrador (generalmente, es admin) y la contraseña del router.
3. Abre _Panel de control_ o _Red_.
4. Selecciona _Interfaz de Red_ o _Configuración de Red_.
5. Selecciona tu red Wi-Fi o conexión por cable.
6. Elige _DNS manual_. Selecciona _Usar estos servidores DNS_ o _Especificar servidor DNS manualmente_ e introduce las siguientes direcciones de servidor DNS:
   - IPv4: `94.140.14.49` y `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` y `2a10:50c0:0:0:0:0:dad:ff`
7. Guarda la configuración.
8. Vincula tu IP (o tu IP dedicada si tienes una suscripción de equipo).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IPs vinculadas](private-dns/connect-devices/other-options/linked-ip.md)
