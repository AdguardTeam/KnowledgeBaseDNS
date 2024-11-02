---
title: Windows
sidebar_position: 5
---

Para conectar un dispositivo iOS a AdGuard DNS, primero agrégalo a _Dashboard_:

1. Ve a _Dashboard_ y haz clic en _Conectar nuevo dispositivo_.
2. En el menú desplegable _Tipo de dispositivo_, selecciona Windows.
3. Dale un nombre al dispositivo.
   ![Conectando\_dispositivo \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/choose_windows.png)

## Usa el Bloqueador de anuncios AdGuard (opción de pago)

La app AdGuard te permite usar DNS encriptado, lo que la hace perfecta para configurar AdGuard DNS en tu dispositivo Windows. Puedes elegir entre varios protocolos de cifrado. Junto con el filtrado DNS, también obtienes un excelente bloqueador de anuncios que funciona en todo tu sistema.

1. [Instala la app](https://adguard.com/adguard-windows/overview.html) en el dispositivo que deseas conectar a AdGuard DNS.
2. Abre la aplicación.
3. Haz clic en _Configuración_ en la parte superior de la pantalla inicial de la app.
   ![Configuración \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step3.png)
4. Selecciona la pestaña _Protección DNS_ en el menú de la izquierda.
   ![Protección DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step4.png)
5. Haz clic en tu servidor DNS actualmente seleccionado.
   ![Servidor DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step5.png)
6. Desplázate hacia abajo y haz clic en _Añadir un servidor DNS personalizado_.
   ![Añadir un servidor DNS personalizado \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step6.png)
7. En el campo de upstreams DNS, pega una de las siguientes direcciones. Si no estás seguro de cuál preferir, elige DNS-over-HTTPS.
   ![Servidor DoH \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_1.png)
   ![Crear servidor \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_2.png)
8. Haz clic en _Guardar y seleccionar_.
   ![Guardar y seleccionar \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step8.png)
9. El servidor DNS que has añadido aparecerá en la parte inferior de la lista de _Servidores DNS personalizados_.
   ![Servidores DNS personalizados \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step9.png)

¡Todo listo! Tu dispositivo está conectado correctamente a AdGuard DNS.

## Usar AdGuard VPN

No todos los servicios VPN soportan DNS cifrado. Sin embargo, nuestro VPN sí lo hace, así que si necesitas tanto un VPN como un DNS privado, AdGuard VPN es tu opción ideal.

1. Instala AdGuard VPN.
2. Abre la app y haz clic en _Configuración_.
3. Selecciona _Configuración de la aplicación_.
   ![Configuración de la aplicación \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step4.png)
4. Desplázate hacia abajo y selecciona _Servidores DNS_.
   ![Servidores DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step5.png)
5. Haz clic en _Añadir servidor DNS personalizado_.
   ![Añadir servidor DNS personalizado \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step6.png)
6. En el campo _Dirección del servidor_, pega una de las siguientes direcciones. Si no estás seguro de cuál preferir, selecciona DNS-over-HTTPS.
   ![Servidor DoH \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_1.png)
   ![Crear servidor \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_2.png)
7. Haz clic en _Guardar y seleccionar_.
   ![Guardar y seleccionar \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step8.png)

¡Todo listo! Tu dispositivo está conectado correctamente a AdGuard DNS.

## Usar AdGuard DNS Client

AdGuard DNS Client es una herramienta versátil y multiplataforma que te permite conectarte a AdGuard DNS usando protocolos DNS encriptados.

Más detalles se pueden encontrar en [otro artículo](/dns-client/overview/).

## Configurar DNS simple

Si prefieres no usar software adicional para la configuración de DNS, puedes optar por DNS no encriptado. Tienes dos opciones: usar IPs vinculadas o IPs dedicadas.

- [IP dedicadas](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP vinculadas](/private-dns/connect-devices/other-options/linked-ip.md)
