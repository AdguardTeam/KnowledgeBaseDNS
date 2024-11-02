---
title: MikroTik
sidebar_position: 6
---

Los routers MikroTik utilizan el sistema operativo RouterOS de código abierto, que proporciona servicios de enrutamiento, redes inalámbricas y cortafuegos para redes domésticas y de pequeñas oficinas.

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
   - En el campo _Usar servidor DoH_, ingresa la URL del servidor DNS privado de AdGuard: `https://d.adguard-dns.com/dns-query/*******`
   - Haz clic en _OK_
4. Crear registros DNS estáticos:
   - En la _Configuración de DNS_, haz clic en _Estático_
   - Haz clic en _Agregar Nuevo_
   - Establece _Nombre_ como d.adguard-dns.com
   - Establece _Tipo_ como A
   - Establece _Dirección_ como `94.140.14.49`
   - Establece _TTL_ como 1d 00:00:00
   - Repite el proceso para crear una entrada idéntica, pero con _Dirección_ establecida en `94.140.14.59`
5. Desactiva Peer DNS en Cliente DHCP:
   - Ve a _IP_ → _Cliente DHCP_
   - Haz doble clic en el cliente utilizado para tu Conexión a Internet (normalmente en la interfaz WAN)
   - Desmarca _Usar Peer DNS_
   - Haz clic en _OK_
6. Vincula tu IP.
7. Prueba y verifica:
   - Es posible que tengas que reiniciar tu enrutador MikroTik para que todos los cambios surtan efecto
   - Borra el caché DNS de tu navegador. Puedes usar una herramienta como [https://www.dnsleaktest.com](https://www.dnsleaktest.com/) para comprobar si tus peticiones DNS ahora se enrutan a través de AdGuard

## Utiliza el panel de administración del router

Usa estas instrucciones si tu router Keenetic no admite la configuración de DNS-over-HTTPS o DNS-over-TLS:

1. Abre el panel de administración del router. Se puede acceder en `192.168.1.1` o `192.168.0.1`.
2. Introduce el nombre de usuario del administrador (generalmente, es admin) y la contraseña del router.
3. Abre _Webfig_ → _IP_ → _DNS_.
4. Selecciona _Servidores_ e ingresa una de las siguientes direcciones de servidor DNS.
   - IPv4: `94.140.14.49` y `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` y `2a10:50c0:0:0:0:0:dad:ff`
5. Guarda la configuración.
6. Vincula tu IP (o tu IP dedicada si tienes una suscripción de equipo).

- [IP dedicadas](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP vinculadas](/private-dns/connect-devices/other-options/linked-ip.md)
