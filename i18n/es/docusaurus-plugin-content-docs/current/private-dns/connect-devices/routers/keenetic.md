---
title: Keenetic
sidebar_position: 5
---

Los routers Keenetic son conocidos por su estabilidad y configuraciones flexibles, y son fáciles de configurar, permitiéndote instalar fácilmente AdGuard DNS privado cifrado en tu dispositivo.

## Configurar DNS-over-HTTPS

1. Abre el panel de administración del router. Se puede acceder en my.keenetic.net, la dirección IP de tu router, o `192.168.1.1`.
2. Pulsa el botón de menú en la parte inferior de la pantalla y selecciona _Gestión_.
3. Abre _Configuración del sistema_.
4. Pulsa en _Opciones de componentes_ → _Opciones de componentes del sistema_.
5. En _Utilidades y servicios_, selecciona el proxy DNS-over-HTTPS e instálalo.
6. Ve a _Menú_ → _Reglas de red_ → _Seguridad en Internet_.
7. Navega hasta los servidores DNS-over-HTTPS y haz clic en _Añadir servidor DNS-over-HTTPS_.
8. Introduce la URL del servidor DNS privado de AdGuard en el campo `https://d.adguard-dns.com/dns-query/{Your_Device_ID}`.
9. Haz clic en _Guardar_.

## Configura DNS-over-TLS

1. Abre el panel de administración del router. Se puede acceder en my.keenetic.net, la dirección IP de tu router, o `192.168.1.1`.
2. Pulsa el botón de menú en la parte inferior de la pantalla y selecciona _Gestión_.
3. Abre _Configuración del sistema_.
4. Pulsa en _Opciones de componentes_ → _Opciones de componentes del sistema_.
5. En _Utilidades y servicios_, selecciona el proxy DNS-over-HTTPS e instálalo.
6. Ve a _Menú_ → _Reglas de red_ → _Seguridad en Internet_.
7. Navega hasta los servidores DNS-over-HTTPS y haz clic en _Añadir servidor DNS mediante HTTPS_.
8. Introduce la URL del servidor DNS privado de AdGuard en el campo `tls://*********.d.adguard-dns.com`.
9. Haz clic en _Guardar_.

## Utiliza el panel de administración del router

Usa estas instrucciones si tu router Keenetic no admite la configuración de DNS-over-HTTPS o DNS-over-TLS:

1. Abre el panel de administración del router. Se puede acceder en `192.168.1.1` o `192.168.0.1`.
2. Introduce el nombre de usuario del administrador (generalmente, es admin) y la contraseña del router.
3. Abre _Internet_ o _Red doméstica_.
4. Selecciona _WAN_ o _Internet_.
5. Selecciona _DNS_ o _Configuración de DNS_.
6. Elige _DNS manual_. Selecciona _Usar estos servidores DNS_ o _Especificar servidor DNS manualmente_ e introduce las siguientes direcciones de servidor DNS:
   - IPv4: `94.140.14.49` y `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` y `2a10:50c0:0:0:0:0:dad:ff`
7. Guarda la configuración.
8. Vincula tu IP (o tu IP dedicada si tienes una suscripción de equipo).

- [IP dedicadas](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP vinculadas](/private-dns/connect-devices/other-options/linked-ip.md)
