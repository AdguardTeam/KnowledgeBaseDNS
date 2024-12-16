---
title: Xiaomi
sidebar_position: 11
---

Xiaomi routers have many advantages: a stable, strong signal, network security, robust performance, and smart management. Users can connect up to 64 devices to a local Wi-Fi network.

Desafortunadamente, no soporta DNS cifrado, pero es excelente para configurar AdGuard DNS a través de la IP vinculada.

## Utiliza el panel de administración del router

Usa estas instrucciones si tu router Keenetic no admite la configuración de DNS-over-HTTPS o DNS mediante TLS:

1. Abre el panel de administración del router. Se puede acceder en `192.168.31.1` o en la dirección IP de tu router.
2. Introduce el nombre de usuario del administrador (generalmente, es admin) y la contraseña del router.
3. Abre Configuración Avanzada o Avanzado, según el modelo de tu router.
4. Abre Red o Internet y busca DNS o Configuración de DNS.
5. Elige _DNS manual_. Selecciona _Usar estos servidores DNS_ o _Especificar servidor DNS manualmente_ e introduce las siguientes direcciones de servidor DNS:
   - IPv4: `94.140.14.49` y `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` y `2a10:50c0:0:0:0:0:dad:ff`
6. Guarda la configuración.
7. Vincula tu IP (o tu IP dedicada si tienes una suscripción de equipo).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
