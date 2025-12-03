---
title: iOS
sidebar_position: 3
---

Para conectar un dispositivo iOS a AdGuard DNS, primero agrégalo a _Dashboard_:

1. Ve a _Dashboard_ y haz clic en _Conectar nuevo dispositivo_.
2. En el menú desplegable _Tipo de dispositivo_, selecciona iOS.
3. Dale un nombre al dispositivo.
   ![Conectando dispositivo \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/choose_ios.png)

## Utiliza la aplicación AdGuard DNS

La aplicación AdGuard DNS está diseñada para ofrecer una protección básica a nivel DNS: bloqueo de anuncios, rastreadores y sitios web maliciosos. Si no necesitas todas las funciones que ofrecen AdGuard Ad Blocker o AdGuard VPN, esta puede ser la mejor opción para ti.

Para la configuración de tu dispositivo:

1. [Descarga la aplicación AdGuard DNS](https://agrd.io/ios_dns).
2. Ve a tu panel de control de DNS de AdGuard en [adguard-dns.io/dashboard](https://adguard-dns.io/dashboard/).
3. Haz clic en _Agregar nuevo dispositivo_ en la pestaña _Inicio_.
4. Selecciona tu tipo de dispositivo y dale un nombre, después haz clic en _Siguiente_.
5. Amplía la sección _Usar aplicaciones AdGuard_.

![Use AdGuard apps \*border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/UseAdGuardDnsAppsiOS.png)

1. En _Usar la aplicación AdGuard DNS_, elige uno de estos métodos de configuración:

   - Haz clic en _Configurar_ si estás en el dispositivo que quieres proteger.
   - Escanea el código QR con el dispositivo que deseas proteger.
   - Copia tu ID de configuración y pégalo directamente en la aplicación.

     ![SetupID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/SetupIDiOS.png)

2. Toca _Continuar_ → _Conectar_.

![Connect \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ConnectiOS.png)

1. Tu dispositivo está conectado correctamente a AdGuard DNS. Solo tienes que pulsar _Activar_ para iniciar la protección.

![Enable \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ProtectioniOS.png)

1. Al usar un protocolo basado en VPN, aún debes permitir la creación de un perfil VPN antes de estar completamente protegido. Para ello, ve a la página de inicio de la aplicación, haz clic en _Activar_ y sigue las instrucciones que aparecen en la aplicación.

2. Si prefieres usar el DNS nativo, ve a _Ajustes_ → _General_ → _VPN y gestión de dispositivos_ → _DNS_ y activa AdGuard DNS.

¡Todo listo! Tu dispositivo está conectado correctamente a AdGuard DNS.

## Usa el Bloqueador de anuncios AdGuard (opción de pago)

La aplicación AdGuard te permite usar DNS cifrado, lo que la hace perfecta para configurar AdGuard DNS en tu dispositivo iOS. Puedes elegir entre varios protocolos de cifrado. Junto con el filtrado DNS, también obtienes un excelente bloqueador de anuncios que funciona en todo tu sistema.

1. Instala la [aplicación AdGuard](https://adguard.com/adguard-ios/overview.html) en el dispositivo que deseas conectar a AdGuard DNS.
2. Abre la aplicación AdGuard.
3. Selecciona la pestaña _Protección_ en el menú inferior.
   ![Icono de escudo \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step3.jpg)
4. Asegúrate de que la _Protección DNS_ esté activada y luego tócala. Elige _Servidor DNS_.
   ![Protección DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4.jpg)
   ![Servidor DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4_2.jpg)
5. Desplázate hasta la parte inferior y toca _Añadir un servidor DNS personalizado_.
   ![Añadir servidor DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step5.jpg)
6. Copia una de las siguientes direcciones DNS y pégala en el campo de _Dirección del servidor DNS_ en la aplicación. Si no estás seguro de cuál preferir, elige DNS-over-HTTPS.
   ![Copia dirección del servidor \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_1.png)
   ![Pega dirección del servidor \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_2.jpg)
7. Toca _Guardar y Seleccionar_.
   ![Guardar y Seleccionar \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step7.jpg)
8. Tu servidor recién creado debería aparecer al final de la lista.
   ![Servidor personalizado \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step8.jpg)

¡Todo listo! Tu dispositivo está conectado correctamente a AdGuard DNS.

## Usa AdGuard VPN

No todos los servicios VPN soportan DNS cifrado. Sin embargo, nuestro VPN sí lo hace, así que si necesitas tanto un VPN como un DNS privado, AdGuard VPN es tu opción ideal.

1. Instala la [aplicación AdGuard VPN](https://adguard-vpn.com/ios/overview.html) en el dispositivo que deseas conectar a AdGuard DNS.
2. Abre la app AdGuard VPN.
3. Toca el icono de engranaje en la esquina inferior derecha de la pantalla.
   ![Icono de engranaje \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step3.jpg)
4. Abre _General_.
   ![Configuración general \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step4.jpg)
5. Selecciona _Servidor DNS_.
   ![Servidor DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step5.png)
6. Desplázate hacia abajo hasta _Añadir servidor DNS personalizado_.
   ![Añadir servidor \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step6.png)
7. Copia una de las siguientes direcciones DNS y pégala en el campo de texto _direcciones del servidor DNS_. Si no estás seguro de cuál preferir, selecciona _DNS-over-HTTPS_. Si no estás seguro de cuál preferir, selecciona _DNS-over-HTTPS_.
   ![Servidor DoH \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_1.png)
   ![Servidor DNS personalizado \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_2.jpg)
8. Toca _Guardar_.
   ![Guardar servidor \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step8.jpg)
9. Tu servidor recién creado debería aparecer bajo _Servidores DNS personalizados_.
   ![Servidores personalizados \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step9.png)

¡Todo listo! Tu dispositivo está conectado correctamente a AdGuard DNS.

## Usa un perfil de configuración

Un perfil de dispositivo iOS, también conocido como "perfil de configuración" por Apple, es un archivo XML firmado por un certificado que puedes instalar manualmente en tu dispositivo iOS o implementar utilizando una solución MDM. También te permite configurar DNS privado de AdGuard en tu dispositivo.

:::note Importante

Si estás usando un VPN, el perfil de configuración será ignorado.

:::

1. Descarga el perfil.
2. Abre la configuración.
3. Toca _Perfil Descargado_.
   ![Perfil descargado \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step3.png)
4. Toca _Instalar_ y sigue las instrucciones en pantalla.
   ![Instalar \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step4.png)

## Configurar DNS simple

Si prefieres no usar software adicional para configurar DNS, puedes optar por DNS sin cifrado. Hay dos opciones: usar IPs vinculadas o IPs dedicadas.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
