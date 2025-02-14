---
title: Android
sidebar_position: 2
---

Para conectar un dispositivo Android a AdGuard DNS, primero agrégalo a _Dashboard_:

1. Ve a _Dashboard_ y haz clic en _Conectar nuevo dispositivo_.
2. En el menú desplegable _Tipo de dispositivo_, selecciona Android.
3. Dale un nombre al dispositivo.
   ![Conectando dispositivo \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/choose_android.png)

## Usa el Bloqueador de anuncios AdGuard (opción de pago)

La app de AdGuard te permite usar DNS encriptado, lo que la hace perfecta para configurar AdGuard DNS en tu dispositivo Android. Puedes elegir entre varios protocolos de cifrado. Junto con el filtrado DNS, también obtienes un excelente bloqueador de anuncios que funciona en todo tu sistema.

1. Instala [la app de AdGuard](https://adguard.com/adguard-android/overview.html) en el dispositivo que deseas conectar a AdGuard DNS.
2. Abre la aplicación.
3. Toca el icono del escudo en la barra de menú en la parte inferior de la pantalla.
   ![Icono del escudo \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step3.png)
4. Toca _Protección DNS_.
   ![Protección DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step4.png)
5. Selecciona _Servidor DNS_.
   ![Servidor DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step5.png)
6. Desplázate hacia abajo hasta _Servidores personalizados_ y toca _Añadir servidor DNS_.
   ![Añadir servidor DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step6.png)
7. Copy one of the following DNS addresses and paste it into the _Server addresses_ field in the app. Si no estás seguro de cuál usar, selecciona _DNS-over-HTTPS_.
   ![DoH \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_1.png)
   ![Servidor DNS personalizado \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_2.png)
8. Toca _Añadir_.
9. El servidor DNS que has añadido aparecerá en la parte inferior de la lista de _Servidores personalizados_. Para seleccionarlo, toca su nombre o el botón de radio junto a él.
   ![Seleccionar servidor DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step_9.png)
10. Toca _Guardar y seleccionar_.
    ![Guardar y seleccionar \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step10.png)

¡Todo listo! Tu dispositivo está conectado correctamente a AdGuard DNS.

## Usar AdGuard VPN

No todos los servicios VPN soportan DNS cifrado. Sin embargo, nuestro VPN sí lo hace, así que si necesitas tanto un VPN como un DNS privado, AdGuard VPN es tu opción ideal.

1. Instala [la app AdGuard VPN](https://adguard-vpn.com/android/overview.html) en el dispositivo que deseas conectar a AdGuard DNS.
2. Abre la aplicación.
3. En la barra de menú en la parte inferior de la pantalla, toca el ícono de configuración.
   ![Icono de configuración \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step3.png)
4. Abre _Configuración de la app_.
   ![Configuración de la app \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step4.png)
5. Selecciona _Servidor DNS_.
   ![Servidor DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step5.png)
6. Desplázate hacia abajo y toca _Añadir un servidor DNS personalizado_.
   ![Añadir un servidor DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step6.png)
7. Copy one of the following DNS addresses and paste it into the _DNS server addresses_ field in the app. Si no estás seguro de cuál usar, selecciona DNS-over-HTTPS.
   ![DoH \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_1.png)
   ![Servidor DNS personalizado \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_2.png)
8. Toca _Guardar y seleccionar_.
   ![Añade un servidor DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step8.png)
9. El servidor DNS que has añadido aparecerá en la parte inferior de la lista de _Servidores DNS personalizados_.

¡Todo listo! Tu dispositivo está conectado correctamente a AdGuard DNS.

## Configurar DNS privado manualmente

Puedes configurar tu servidor DNS en la configuración de tu dispositivo. Ten en cuenta que los dispositivos Android solo admiten el protocolo DNS-over-TLS.

1. Ve a _Configuración_ → _Wi-Fi e Internet_ (o _Red e Internet_, dependiendo de tu versión de sistema operativo).
   ![Configuración \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step1.png)
2. Selecciona _Avanzado_ y toca _DNS privado_.
   ![DNS privado \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step2.png)
3. Selecciona la opción _Nombre del proveedor de DNS privado_ e introduce la dirección de tu servidor personal: `{Your_Device_ID}.d.adguard-dns.com`.
4. Toca _Guardar_.
   ![DNS privado \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step4.png)
   ¡Listo! Tu dispositivo está conectado correctamente a AdGuard DNS.

## Configurar DNS simple

Si prefieres no usar software adicional para la configuración de DNS, puedes optar por DNS no encriptado. Tienes dos opciones: usar IPs vinculadas o IPs dedicadas.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
