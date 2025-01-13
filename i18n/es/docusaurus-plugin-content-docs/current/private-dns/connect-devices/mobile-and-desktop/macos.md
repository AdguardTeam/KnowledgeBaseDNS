---
title: macOS
sidebar_position: 4
---

Para conectar un dispositivo macOS a AdGuard DNS, primero agrégalo a _Dashboard_:

1. Ve a _Dashboard_ y haz clic en _Conectar nuevo dispositivo_.
2. En el menú desplegable _Tipo de dispositivo_, selecciona Mac.
3. Dale un nombre al dispositivo.
   ![Conectando dispositivo \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/choose_mac.png)

## Usa el Bloqueador de anuncios AdGuard (opción de pago)

La aplicación AdGuard te permite usar DNS encriptado, lo que la hace perfecta para configurar AdGuard DNS en tu dispositivo macOS. Puedes elegir entre varios protocolos de cifrado. Junto con el filtrado DNS, también obtienes un excelente bloqueador de anuncios que funciona en todo tu sistema.

1. [Instala la app](https://adguard.com/adguard-mac/overview.html) en el dispositivo que deseas conectar a AdGuard DNS.
2. Abre la aplicación.
3. Haz clic en el icono en la esquina superior derecha.
   ![Icono de protección \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step3.png)
4. Selecciona _Preferencias..._.
   ![Preferencias \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step4.png)
5. Haz clic en la pestaña _DNS_ de la fila superior de iconos.
   ![Pestaña DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step5.png)
6. Habilita la protección DNS marcando la casilla de la parte superior.
   ![Protección DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step6.png)
7. Haz clic en _+_ en la esquina inferior izquierda.
   ![Haz clic en + \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step7.png)
8. Copia una de las siguientes direcciones DNS y pégala en el campo _Servidores DNS_ en la aplicación. Si no estás seguro de cuál preferir, selecciona _DNS-over-HTTPS_.
   ![Servidor DoH \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_1.png)
   ![Crear servidor \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_2.png)
9. Haz clic en _Guardar y Elegir_.
   ![Guardar y elegir \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step9.png)
10. Tu servidor recién creado debería aparecer al final de la lista.
    ![Proveedores \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step10.png)

¡Todo listo! Tu dispositivo está conectado correctamente a AdGuard DNS.

## Usar AdGuard VPN

No todos los servicios VPN soportan DNS cifrado. Sin embargo, nuestro VPN sí lo hace, así que si necesitas tanto un VPN como un DNS privado, AdGuard VPN es tu opción ideal.

1. Instala la [app de AdGuard VPN](https://adguard-vpn.com/mac/overview.html) en el dispositivo que deseas conectar a AdGuard DNS.
2. Abre la app AdGuard VPN.
3. Abre _Configuración_ → _Configuración de la app_ → _Servidores DNS_ → _Agregar servidor personalizado_.
   ![Agregar servidor personalizado \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step3.png)
4. Copia una de las siguientes direcciones DNS y pégala en el campo de texto _direcciones del servidor DNS_. Si no estás seguro de cuál preferir, selecciona _DNS-over-HTTPS_. Si no estás seguro de cuál prefieres, selecciona DNS-over-HTTPS.
   ![Servidores DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step4.png)
5. Haz clic en _Guardar y seleccionar_.
6. El servidor DNS que has añadido aparecerá en la parte inferior de la lista de _Servidores DNS personalizados_.
   ![Servidores DNS personalizados \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step6.png)

¡Todo listo! Tu dispositivo está conectado correctamente a AdGuard DNS.

## Usar un perfil de configuración

Un perfil de dispositivo macOS, también llamado "perfil de configuración" por Apple, es un archivo XML firmado por certificado que puedes instalar manualmente en tu dispositivo o implementar utilizando una solución MDM. También te permite configurar DNS privado de AdGuard en tu dispositivo.

:::note Importante

Si estás usando un VPN, el perfil de configuración será ignorado.

:::

1. En el dispositivo que deseas conectar a AdGuard DNS, descarga el perfil de configuración.
2. Elige Menú Apple → _Configuración del sistema_, haz clic en _Privacidad y seguridad_ en la barra lateral, luego haz clic en _Perfiles_ a la derecha (es posible que debas desplazarte hacia abajo).
   ![Perfil descargado \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step2.png)
3. En la sección _Descargas_, haz doble clic en el perfil.
   ![Descargado \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step3.png)
4. Revisa el contenido del perfil y haz clic en _Instalar_.
   ![Instalar \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step4.png)
5. Introduce la contraseña de administrador y haz clic en _OK_.

¡Todo listo! Tu dispositivo está conectado correctamente a AdGuard DNS.

## Configurar DNS simple

Si prefieres no usar software adicional para la configuración de DNS, puedes optar por DNS no encriptado. Tienes dos opciones: usar IPs vinculadas o IPs dedicadas.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
