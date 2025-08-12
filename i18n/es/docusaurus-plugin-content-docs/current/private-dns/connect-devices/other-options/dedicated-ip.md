---
title: IPs dedicados
sidebar_position: 2
---

## ¿Qué son los IPs dedicados?

Las direcciones IPv4 dedicadas están disponibles para usuarios con suscripciones de Equipo y Empresa, mientras que los IPs enlazados están disponibles para todos.

If you have a Team or Enterprise subscription, you’ll receive several personal dedicated IP addresses. Requests to these addresses are treated as yours, and server-level configurations and filtering rules are applied accordingly. Las direcciones IP dedicadas son mucho más seguras y fáciles de administrar. With linked IPs, you have to manually reconnect or use a special program every time the device’s IP address changes, which happens after every reboot.

## ¿Por qué necesitas una IP dedicada?

Unfortunately, the technical specifications of the connected device may not always allow you to set up an encrypted Private AdGuard DNS server. En este caso, tendrás que usar DNS estándar no cifrado. Hay dos formas de configurar AdGuard DNS: [usando IPs enlazados](/private-dns/connect-devices/other-options/linked-ip.md) y usando IPs dedicados.

Los IPs dedicados son generalmente una opción más estable. Linked IP has some limitations, such as only residential addresses are allowed, your provider can change the IP, and you’ll need to relink the IP address. Con los IPs dedicados, obtienes una dirección IP que es exclusivamente tuya, y todas las peticiones serán contadas para tu dispositivo.

La desventaja es que puedes comenzar a recibir tráfico irrelevante (escáneres, bots), como siempre sucede con los resolutores DNS públicos. Es posible que necesites usar [Configuraciones de acceso](/private-dns/server-and-settings/access.md) para limitar el tráfico de bots.

Las instrucciones a continuación explican cómo conectar una IP dedicada al dispositivo:

## Conectar AdGuard DNS usando IPs dedicados

1. Abre el dashboard.
2. Agrega un nuevo dispositivo o abrir la configuración de un dispositivo creado previamente.
3. Selecciona _Usar direcciones de servidor_.
4. A continuación, abre _Direcciones de servidores DNS simples_.
5. Selecciona el servidor que deseas usar.
6. Para enlazar una dirección IPv4 dedicada, haz clic en _Asignar_.
7. Si deseas usar una dirección IPv6 dedicada, haz clic en _Copiar_.
    ![Copiar dirección \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dedicated_step7.png)
8. Copia y pega la dirección dedicada seleccionada en la configuración del dispositivo.
