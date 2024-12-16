---
title: iOS
sidebar_position: 3
---

Para conectar un dispositivo iOS a AdGuard DNS, primero agrégalo a _Dashboard_:

1. Ve a _Dashboard_ y haz clic en _Conectar nuevo dispositivo_.
2. En el menú desplegable _Tipo de dispositivo_, selecciona iOS.
3. Dale un nombre al dispositivo.
   ![Conectando dispositivo \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/choose_ios.png)

## Usa el Bloqueador de anuncios AdGuard (opción de pago)

La aplicación AdGuard te permite usar DNS cifrado, lo que la hace perfecta para configurar AdGuard DNS en tu dispositivo iOS. Puedes elegir entre varios protocolos de cifrado. Junto con el filtrado DNS, también obtienes un excelente bloqueador de anuncios que funciona en todo tu sistema.

1. Instala la [aplicación AdGuard](https://adguard.com/adguard-ios/overview.html) en el dispositivo que deseas conectar a AdGuard DNS.
2. Abre la aplicación AdGuard.
3. Selecciona la pestaña _Protección_ en el menú inferior.
   ![Icono de escudo \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step3.jpg)
4. Asegúrate de que la _Protección DNS_ esté activada y luego tócala. Elige _Servidor DNS_.
   ![Protección DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4.jpg)
   ![Servidor DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4_2.jpg)
5. Desplázate hasta la parte inferior y toca _Añadir un servidor DNS personalizado_.
   ![Añadir servidor DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step5.jpg)
6. Copia una de las siguientes direcciones DNS y pégala en el campo de _Dirección del servidor DNS_ en la aplicación. Si no estás seguro de cuál preferir, elige DNS-over-HTTPS.
   ![Copia dirección del servidor \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_1.png)
   ![Pega dirección del servidor \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_2.jpg)
7. Toca _Guardar y Seleccionar_.
   ![Guardar y Seleccionar \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step7.jpg)
8. Tu servidor recién creado debería aparecer al final de la lista.
   ![Servidor personalizado \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step8.jpg)

¡Todo listo! Tu dispositivo está conectado correctamente a AdGuard DNS.

## Usa AdGuard VPN

No todos los servicios VPN soportan DNS cifrado. Sin embargo, nuestro VPN sí lo hace, así que si necesitas tanto un VPN como un DNS privado, AdGuard VPN es tu opción ideal.

1. Instala la [aplicación AdGuard VPN](https://adguard-vpn.com/ios/overview.html) en el dispositivo que deseas conectar a AdGuard DNS.
2. Abre la app AdGuard VPN.
3. Toca el icono de engranaje en la esquina inferior derecha de la pantalla.
   ![Icono de engranaje \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step3.jpg)
4. Abre _General_.
   ![Configuración general \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step4.jpg)
5. Selecciona _Servidor DNS_.
   ![Servidor DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step5.png)
6. Desplázate hacia abajo hasta _Añadir servidor DNS personalizado_.
   ![Añadir servidor \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step6.png)
7. Copia una de las siguientes direcciones DNS y pégala en el campo de texto _direcciones del servidor DNS_. Si no estás seguro de cuál preferir, selecciona _DNS-over-HTTPS_. Si no estás seguro de cuál preferir, selecciona _DNS-over-HTTPS_.
   ![Servidor DoH \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_1.png)
   ![Servidor DNS personalizado \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_2.jpg)
8. Toca _Guardar_.
   ![Guardar servidor \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step8.jpg)
9. Tu servidor recién creado debería aparecer bajo _Servidores DNS personalizados_.
   ![Servidores personalizados \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step9.png)

¡Todo listo! Tu dispositivo está conectado correctamente a AdGuard DNS.

## Usa un perfil de configuración

Un perfil de dispositivo iOS, también conocido como "perfil de configuración" por Apple, es un archivo XML firmado por un certificado que puedes instalar manualmente en tu dispositivo iOS o implementar utilizando una solución MDM. También te permite configurar DNS privado de AdGuard en tu dispositivo.

:::note Importante

Si estás usando un VPN, el perfil de configuración será ignorado.

:::

1. [Descargar](https://dns.website.agrd.dev/public_api/v1/settings/e7b499cc-94c0-4448-8404-88d11f4f51a2/doh_mobileconfig.xml) perfil.
2. Abre la configuración.
3. Toca _Perfil Descargado_.
   ![Perfil descargado \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step3.png)
4. Toca _Instalar_ y sigue las instrucciones en pantalla.
   ![Instalar \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step4.png)

## Configurar DNS simple

Si prefieres no usar software adicional para configurar DNS, puedes optar por DNS sin cifrado. Hay dos opciones: usar IPs vinculadas o IPs dedicadas.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
