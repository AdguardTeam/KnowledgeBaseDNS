---
title: Asus
sidebar_position: 3
---

## Configura DNS-over-TLS

Estas son instrucciones generales para configurar AdGuard DNS privado para routers Asus.

La información de configuración en estas instrucciones se toma de un modelo de router específico, por lo que puede diferir de la interfaz de un dispositivo individual.

If necessary: Configure DNS-over-TLS on Asus, install the [Asus Merlin firmware](https://www.asuswrt-merlin.net/download) suitable for your router version on your computer.

1. Inicia sesión en el panel de administración de tu router Asus. Se puede acceder a través de [http://router.asus.com](http://router.asus.com/), [http://192.168.1.1](http://192.168.1.1/), [http://192.168.0.1](http://192.168.0.1/), o [http://192.168.2.1](http://192.168.2.1/).
2. Introduce el nombre de usuario del administrador (generalmente, es admin) y la contraseña del router.
3. En la barra lateral de _Configuración avanzada_, ve a la sección WAN.
4. En la sección _Configuración de DNS de WAN_, configura _Conectar al servidor DNS automáticamente_ en _No_.
5. Set _Forward local queries_, _Enable DNS Rebind protection_, and _Enable DNSSEC suppport_ to _No_.
6. Cambia el Protocolo de Privacidad de DNS a DNS-over-TLS (DoT).
7. Asegúrate de que el _perfil de DNS-over-TLS_ está establecido en _estricto_.
8. Desplázate hacia abajo hasta la sección _Lista de Servidores DNS-over-TLS_. En el campo _Dirección_, introduce una de las direcciones a continuación:
   - `94.140.14.49` y `94.140.14.59`
9. Para _Puerto TLS_, ingresa 853.
10. En el campo _Nombre de host TLS_, ingresa la dirección del servidor DNS privado de AdGuard:
    - `{Your_Device_ID}.d.adguard-dns.com`
11. Desplázate hasta la parte inferior de la página y haz clic en _Aplicar_.

## Utiliza el panel de administración del router

Use these instructions if your Asus router does not support DNS-over-TLS configuration:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Introduce el nombre de usuario del administrador (generalmente, es admin) y la contraseña del router.
3. Open _Advanced Settings_ or _Advanced_.
4. Select _WAN_ or _Internet_.
5. Open _DNS Settings_ or _DNS_.
6. Choose _Manual Setting_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` y `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` y `2a10:50c0:0:0:0:0:dad:ff`
7. Guarda la configuración.
8. Vincula tu IP (o tu IP dedicada si tienes una suscripción de equipo).
   - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
   - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
