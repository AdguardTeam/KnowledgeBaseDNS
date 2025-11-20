---
title: Android
sidebar_position: 2
---

Para conectar un dispositivo Android a AdGuard DNS, primero agrégalo a _Dashboard_:

1. Ve a _Dashboard_ y haz clic en _Conectar nuevo dispositivo_.
2. En el menú desplegable _Tipo de dispositivo_, selecciona Android.
3. Dale un nombre al dispositivo.
   ![Conectando dispositivo \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/choose_android.png)

## Utiliza la aplicación AdGuard DNS

La aplicación AdGuard DNS está diseñada para ofrecer una protección básica a nivel DNS: bloqueo de anuncios, rastreadores y sitios web maliciosos. Si no necesitas todas las funciones que ofrecen AdGuard Ad Blocker o AdGuard VPN, esta puede ser la mejor opción para ti.

Para la configuración de tu dispositivo:

1. [Descarga la aplicación AdGuard DNS](https://agrd.io/android_dns).

2. Ve a tu panel de control de DNS de AdGuard en [adguard-dns.io/dashboard](https://adguard-dns.io/dashboard/).

3. Click _Connect device_ on the _Home_ tab.

4. Selecciona tu tipo de dispositivo y dale un nombre, después haz clic en _Siguiente_.

5. Amplía la sección _Usar aplicaciones AdGuard_.

   ![Use AdGuard apps \*border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/UseAdGuardApps-es.png)

6. En _Usar la aplicación AdGuard DNS_, elige uno de estos métodos de configuración:

   - Haz clic en _Configurar_ si estás en el dispositivo que quieres proteger.
   - Escanea el código QR con el dispositivo que deseas proteger.
   - Copia tu ID de configuración y pégalo directamente en la aplicación.

     ![Setup ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/Setup-id-es.png)

7. Toca _Continuar_ → _Conectar_.

   ![Conectar \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/Connect.png)

8. Al usar un protocolo basado en VPN, aún debes permitir la creación de un perfil VPN antes de estar completamente protegido. Para ello, ve a la página de inicio de la aplicación, haz clic en _Activar_ y sigue las instrucciones que aparecen en la aplicación.

9. ¡Todo listo! Tu dispositivo está conectado correctamente a AdGuard DNS. Haz clic en _Activar_ cada vez que quieras iniciar la protección.

   ![Enable \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/Protect-es.png)

## Usa el Bloqueador de anuncios AdGuard (opción de pago)

La app de AdGuard te permite usar DNS encriptado, lo que la hace perfecta para configurar AdGuard DNS en tu dispositivo Android. Puedes elegir entre varios protocolos de cifrado. Junto con el filtrado DNS, también obtienes un excelente bloqueador de anuncios que funciona en todo tu sistema.

1. Instala [la app de AdGuard](https://adguard.com/adguard-android/overview.html) en el dispositivo que deseas conectar a AdGuard DNS.
2. Abre la aplicación.
3. Toca el icono del escudo en la barra de menú en la parte inferior de la pantalla.
   ![Icono del escudo \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step3.png)
4. Toca _Protección DNS_.
   ![Protección DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step4.png)
5. Selecciona _Servidor DNS_.
   ![Servidor DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step5.png)
6. Desplázate hacia abajo hasta _Servidores personalizados_ y toca _Añadir servidor DNS_.
   ![Añadir servidor DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step6.png)
7. Copia una de las siguientes direcciones DNS y pégala en el campo _Direcciones del servidor_ en la aplicación. Si no estás seguro de cuál usar, selecciona _DNS-over-HTTPS_.
   ![DoH \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_1.png)
   ![Servidor DNS personalizado \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_2.png)
8. Toca _Añadir_.
9. El servidor DNS que has añadido aparecerá en la parte inferior de la lista de _Servidores personalizados_. Para seleccionarlo, toca su nombre o el botón de radio junto a él.
   ![Seleccionar servidor DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step_9.png)
10. Toca _Guardar y seleccionar_.
    ![Guardar y seleccionar \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step10.png)

¡Todo listo! Tu dispositivo está conectado correctamente a AdGuard DNS.

## Usar AdGuard VPN

No todos los servicios VPN soportan DNS cifrado. Sin embargo, nuestro VPN sí lo hace, así que si necesitas tanto un VPN como un DNS privado, AdGuard VPN es tu opción ideal.

1. Instala [la app AdGuard VPN](https://adguard-vpn.com/android/overview.html) en el dispositivo que deseas conectar a AdGuard DNS.
2. Abre la aplicación.
3. En la barra de menú en la parte inferior de la pantalla, toca el ícono de configuración.
   ![Icono de configuración \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step3.png)
4. Abre _Configuración de la app_.
   ![Configuración de la app \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step4.png)
5. Selecciona _Servidor DNS_.
   ![Servidor DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step5.png)
6. Desplázate hacia abajo y toca _Añadir un servidor DNS personalizado_.
   ![Añadir un servidor DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step6.png)
7. Copia una de las siguientes direcciones DNS y pégala en el campo _Direcciones de servidores DNS_ en la aplicación. Si no estás seguro de cuál usar, selecciona DNS-over-HTTPS.
   ![DoH \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_1.png)
   ![Servidor DNS personalizado \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_2.png)
8. Toca _Guardar y seleccionar_.
   ![Añade un servidor DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step8.png)
9. El servidor DNS que has añadido aparecerá en la parte inferior de la lista de _Servidores DNS personalizados_.

¡Todo listo! Tu dispositivo está conectado correctamente a AdGuard DNS.

## Configurar DNS privado manualmente

Puedes configurar tu servidor DNS en la configuración de tu dispositivo. Ten en cuenta que los dispositivos Android solo admiten el protocolo DNS-over-TLS.

1. Ve a _Configuración_ → _Wi-Fi e Internet_ (o _Red e Internet_, dependiendo de tu versión de sistema operativo).
   ![Configuración \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step1.png)
2. Selecciona _Avanzado_ y toca _DNS privado_.
   ![DNS privado \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step2.png)
3. Selecciona la opción _Nombre del proveedor de DNS privado_ e introduce la dirección de tu servidor personal: `{Your_Device_ID}.d.adguard-dns.com`.
4. Toca _Guardar_.
   ![DNS privado \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step4.png)
   ¡Listo! Tu dispositivo está conectado correctamente a AdGuard DNS.

## Configurar DNS simple

Si prefieres no usar software adicional para la configuración de DNS, puedes optar por DNS no encriptado. Tienes dos opciones: usar IPs vinculadas o IPs dedicadas.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
