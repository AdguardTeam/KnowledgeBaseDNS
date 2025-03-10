---
title: DNS-over-HTTPS con autenticación
sidebar_position: 4
---

## ¿Por qué es útil?

DNS-over-HTTPS con autenticación permite que configures un nombre de usuario y una contraseña para acceder a tu servidor elegido.

Esto ayuda a prevenir que usuarios no autorizados accedan a él y mejora la seguridad. Además, puedes restringir el uso de otros protocolos para perfiles específicos. Esta función es particularmente útil cuando la dirección de tu servidor DNS es conocida por otros. Al agregar una contraseña, puedes bloquear el acceso y asegurarte de que solo tú puedas usarlo.

## Cómo configurarlo

:::note Compatibilidad

Esta función es compatible con [AdGuard DNS Client](/dns-client/overview.md) así como con [AdGuard apps](https://adguard.com/welcome.html).

:::

1. Abre el dashboard.
2. Agrega un dispositivo o ve a la configuración de un dispositivo creado previamente.
3. Haz clic en _Usar direcciones del servidor DNS_ y abre la sección _Direcciones del servidor DNS Cifrada_.
4. Configura DNS-over-HTTPS con autenticación como desees.
5. Reconfigura tu dispositivo para usar este servidor en el Cliente AdGuard DNS o en una de las apps de AdGuard.
6. Para hacer esto, copia la dirección del servidor encriptado y pégala en la app de AdGuard o en la configuración del Cliente AdGuard DNS.
    ![Copiar dirección \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/doh_step6.png)
7. También puedes denegar el uso de otros protocolos.
    ![Denegar protocolos \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/deny_protocol.png)
