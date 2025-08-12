---
title: Instrucciones universales
sidebar_position: 2
---

Aquí hay algunas instrucciones generales para configurar AdGuard DNS privado en routers. You can refer to this guide if you can’t find your specific router in the main list. Ten en cuenta que los detalles de configuración proporcionados aquí son aproximados y pueden diferir de la configuración de tu modelo particular.

## Utiliza el panel de administración del router

1. Abre las preferencias de tu router. Generalmente puedes acceder a ellos desde tu navegador. Dependiendo del modelo de tu router, intenta ingresar una de las siguientes direcciones:
    - Los routers Linksys y Asus generalmente utilizan: [http://192.168.1.1](http://192.168.1.1/)
    - Los routers Netgear generalmente utilizan: [http://192.168.0.1](http://192.168.0.1/) o [http://192.168.1.1](http://192.168.1.1/) Los routers D-Link generalmente utilizan [http://192.168.0.1](http://192.168.0.1/)
    - Los routers Ubiquiti generalmente utilizan: [http://unifi.ubnt.com](http://unifi.ubnt.com/)

2. Enter the router’s password.

    :::note Importante

    Si la contraseña es desconocida, a menudo puedes restablecerla presionando un botón en el router; también restablecerá el router a su configuración de fábrica. Algunos modelos tienen una aplicación de gestión dedicada, que debería estar ya instalada en tu computadora.

    :::

3. Find where DNS settings are located in the router’s admin console. Change the listed DNS addresses to the following addresses:
    - IPv4: `94.140.14.49` y `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` y `2a10:50c0:0:0:0:0:dad:ff`

4. Guarda la configuración.

5. Vincula tu IP (o tu IP dedicada si tienes una suscripción de equipo).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
