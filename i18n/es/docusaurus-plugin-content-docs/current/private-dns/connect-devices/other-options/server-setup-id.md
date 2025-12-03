---
title: ID de configuración del servidor
sidebar_position: 6
---

## ¿Qué es un ID de configuración del servidor?

Si quieres conectar un dispositivo a un servidor específico y no quieres crear manualmente cada dispositivo en el Panel de control del sitio web, puedes usar el **ID de configuración del servidor**. Simplemente toma el ID y úsalo para conectarte a través de la app DNS de AdGuard. De esta manera, el "dispositivo" se creará automáticamente al conectarse.

## Cómo conectar usando el ID de configuración del servidor

1. Ve a _panel de control_ → [_Servidores_](https://adguard-dns.io/dashboard/servers).
2. Selecciona el servidor deseado.
3. Desplácese hacia abajo y haz clic en _ID de configuración_.
   ![Setup ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/server_settings_setup_ID.png)
4. Copia el **ID de configuración**.
   ![Server setup ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/settings_setup_ID.png)
5. Abre la aplicación y pega el **ID de configuración**.
   ![Pegar ID de configuración \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/SetupIDMobile.png)
6. Elige un nombre para el dispositivo.
7. Haz clic en **Conectar**.
   ![Connect \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ConnectMobile.png)

¡Listo! Ya estás conectado y el dispositivo se creará automáticamente en el Panel de control.

## Restableciendo el ID de configuración del servidor

Si deseas desconectar todos los dispositivos que utilizan un ID de configuración específico, puede restablecerlo. Para hacerlo, sigue estos pasos:

1. Ve a _panel de control_ → [_Servidores_](https://adguard-dns.io/dashboard/servers) y selecciona el servidor deseado.
2. Desplácese hacia abajo y haz clic en _ID de configuración_.
3. Haz clic en _Restablecer ID de configuración_.

Tras el restablecimiento, el ID de configuración cambiará y todos los dispositivos que utilizaban el ID antiguo se desconectarán del servidor.
