---
title: MikroTik
sidebar_position: 6
---

MikroTik routers use the open-source RouterOS operating system, which provides routing, wireless networking, and firewall services for home and small office networks.

## Configurar DNS-over-HTTPS

1. Accede a tu enrutador MikroTik:
   - Abre tu navegador web y ve a la dirección IP de tu enrutador (generalmente `192.168.88.1`)
   - Alternativamente, puedes usar Winbox para conectarte a tu enrutador MikroTik
   - Ingresa tu nombre de usuario y contraseña de administrador
2. Importar certificado root:
   - Descarga el último paquete de certificados raíz de confianza: [https://curl.se/docs/caextract.html](https://curl.se/docs/caextract.html)
   - Navega a _Archivos_. Haz clic en _Cargar_ y selecciona el paquete de certificados cacert.pem descargado
   - Ve a _Sistema_ → _Certificados_ → _Importar_
   - En el campo _Nombre de archivo_, elige el archivo de certificado cargado
   - Haz clic en _Importar_
3. Configura DNS-over-HTTPS:
   - Ve a _IP_ → _DNS_
   - En la sección _Servidores_, agrega los siguientes servidores de AdGuard DNS:
     - `94.140.14.49`
     - `94.140.14.59`
   - Establece _Permitir solicitudes remotas_ a _Sí_ (esto es crucial para que DoH funcione)
   - In the _Use DoH server_ field, enter the URL of the Private AdGuard DNS server: `https://d.adguard-dns.com/dns-query/*******`
   - Haz clic en _OK_
4. Crear registros DNS estáticos:
   - En la _Configuración de DNS_, haz clic en _Estático_
   - Haz clic en _Agregar Nuevo_
   - Set _Name_ to `d.adguard-dns.com`
   - Set _Type_ to `A`
   - Establece _Dirección_ como `94.140.14.49`
   - Set _TTL_ to `1d 00:00:00`
   - Repite el proceso para crear una entrada idéntica, pero con _Dirección_ establecida en `94.140.14.59`
5. Desactiva Peer DNS en Cliente DHCP:
   - Ve a _IP_ → _Cliente DHCP_
   - Haz doble clic en el cliente utilizado para tu Conexión a Internet (normalmente en la interfaz WAN)
   - Desmarca _Usar Peer DNS_
   - Haz clic en _OK_
6. Test and verify:
   - You might need to reboot your MikroTik router for all changes to take effect
   - Clear your browser's DNS cache. You can use a tool like [https://www.dnsleaktest.com](https://www.dnsleaktest.com/) to check if your DNS requests are now routed through AdGuard

## My router does not support DNS-over-HTTPS

Use these instructions if your MikroTik router does not support DNS-over-HTTPS configuration:

1. Accede a tu enrutador MikroTik:
   - Abre tu navegador web y ve a la dirección IP de tu enrutador (generalmente `192.168.88.1`)
   - Alternativamente, puedes usar Winbox para conectarte a tu enrutador MikroTik
   - Ingresa tu nombre de usuario y contraseña de administrador
2. Configure Plain DNS:
   - Go to _IP_ → _DNS_
   - In the _Servers_ section, add the following AdGuard DNS servers:
     - IPv4: `94.140.14.49` y `94.140.14.59`
     - IPv6: `2a10:50c0:0:0:0:0:ded:ff` y `2a10:50c0:0:0:0:0:dad:ff`
     - Dedicated IPv6: Private AdGuard DNS supports dedicated IPv6 addresses. To find them, open the Dashboard, click _Settings_ next to your device → _Plain DNS server addresses_ → _Dedicated IPv6 addresses_.
   - Click _OK_
3. Desactiva Peer DNS en Cliente DHCP:
   - Go to _IP_ → _DHCP Client_
   - Haz doble clic en el cliente utilizado para tu Conexión a Internet (normalmente en la interfaz WAN)
   - Uncheck _Use Peer DNS_
   - Click _OK_
