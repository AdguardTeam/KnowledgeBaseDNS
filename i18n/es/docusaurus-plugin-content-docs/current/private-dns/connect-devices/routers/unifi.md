---
title: UniFi
sidebar_position: 10
---

El router UiFi (comúnmente conocido como la serie UniFi de Ubiquiti) tiene varias ventajas que lo hacen particularmente adecuado para entornos domésticos, empresariales y corporativos. Desafortunadamente, no es compatible con DNS cifrado, pero es excelente para configurar AdGuard DNS a través de IP vinculada.

## Utiliza el panel de administración del router

Usa estas instrucciones si tu router Keenetic no admite la configuración de DNS-over-HTTPS o DNS-over-TLS:

1. Inicia sesión en el controlador Ubiquiti UniFi.
2. Ve a _Configuración_ → _Redes_.
3. Haz clic en _Editar Red_ → _WAN_.
4. Ve a _Configuración común_ → _Servidor DNS_ e introduce las siguientes direcciones del servidor DNS.
    - IPv4: `94.140.14.49` y `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` y `2a10:50c0:0:0:0:0:dad:ff`
5. Haz clic en _Guardar_.
6. Regresa a _Red_.
7. Elige _Editar Red_ → _LAN_.
8. Busca _Servidor de nombres DHCP_ y selecciona _Manual_.
9. Introduce la dirección de tu puerta de enlace en el campo _Servidor DNS 1_. Alternativamente, puedes introducir las direcciones de los servidores de AdGuard DNS en los campos _Servidor DNS 1_ y _Servidor DNS 2_:
    - IPv4: `94.140.14.49` y `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` y `2a10:50c0:0:0:0:0:dad:ff`
10. Guarda la configuración.
11. Vincula tu IP (o tu IP dedicada si tienes una suscripción de equipo).

- [IPs dedicadas](private-dns/connect-devices/other-options/dedicated-ip.md)
- [IPs vinculadas](private-dns/connect-devices/other-options/linked-ip.md)
