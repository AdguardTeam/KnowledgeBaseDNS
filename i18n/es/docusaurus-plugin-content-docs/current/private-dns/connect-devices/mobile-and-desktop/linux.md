---
title: Linux
sidebar_position: 6
---

Para conectar un dispositivo Linux a AdGuard DNS, primero agrégalo a _Dashboard_:

1. Ve a _Dashboard_ y haz clic en _Conectar nuevo dispositivo_.
2. En el menú desplegable _Tipo de dispositivo_, selecciona Linux.
3. Dale un nombre al dispositivo.
   ![Conectando dispositivo \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/choose_linux.png)

## Usar AdGuard DNS Client

AdGuard DNS Client es una utilidad de consola multiplataforma que permite utilizar protocolos DNS encriptados para acceder a AdGuard DNS.

Puedes obtener más información sobre esto en el [artículo relacionado](/dns-client/overview/).

## Usar AdGuard VPN CLI

Puedes configurar AdGuard DNS privado utilizando el AdGuard VPN CLI (interfaz de línea de comandos). Para comenzar con AdGuard VPN CLI, necesitarás usar Terminal.

1. Instala AdGuard VPN CLI siguiendo [estas instrucciones](https://adguard-vpn.com/kb/adguard-vpn-for-linux/installation/).
2. Go to [Settings](https://adguard-vpn.com/kb/adguard-vpn-for-linux/settings/).
3. Para establecer un servidor DNS específico, utiliza el comando: `adguardvpn-cli config set-dns <server_address>`, donde `<server_address>` es la dirección de tu servidor privado.
4. Activa la configuración DNS ingresando `adguardvpn-cli config set-system-dns on`.

## Configura manualmente en Ubuntu (se requiere IP vinculada o IP dedicada)

1. Haz clic en _Sistema_ → _Preferencias_ → _Conexiones de red_.
2. Selecciona la pestaña _Inalámbrico_, luego elige la red a la que estás conectado.
3. Haz clic en _Editar_ → _IPv4_.
4. Cambia las direcciones DNS enumeradas por las siguientes direcciones:
   - `94.140.14.49`
   - `94.140.14.59`
5. Desactiva _Modo automático_.
6. Haz clic en _Aplicar_.
7. Ve a _IPv6_.
8. Cambia las direcciones DNS enumeradas por las siguientes direcciones:
   - `2a10:50c0:0:0:0:0:ded:ff`
   - `2a10:50c0:0:0:0:0:dad:ff`
9. Desactiva _Modo automático_.
10. Haz clic en _Aplicar_.
11. Vincula tu dirección IP (o tu IP dedicada si tienes una suscripción a Team):
    - [IP dedicadas](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [IP vinculadas](/private-dns/connect-devices/other-options/linked-ip.md)

## Configura manualmente en Debian (se requiere IP vinculada o IP dedicada)

1. Abre el Terminal.
2. En la línea de comandos, escribe: `su`.
3. Ingresa tu contraseña `admin`.
4. En la línea de comandos, escribe: `nano /etc/resolv.conf`.
5. Cambia las direcciones DNS enumeradas por las siguientes:
   - IPv4: `94.140.14.49 y 94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff y 2a10:50c0:0:0:0:0:dad:ff`
6. Presiona _Ctrl + O_ para guardar el documento.
7. Presiona _Enter_.
8. Presiona _Ctrl + X_ para guardar el documento.
9. En la línea de comandos, escribe: `/etc/init.d/networking restart`.
10. Presiona _Enter_.
11. Cierra el Terminal.
12. Vincula tu dirección IP (o tu IP dedicada si tienes una suscripción a Team):
    - [IP dedicadas](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [IP vinculadas](/private-dns/connect-devices/other-options/linked-ip.md)

## Usar dnsmasq

1. Instala dnsmasq utilizando los siguientes comandos:

   `sudo apt updatesudo`

   `apt install`

   `dnsmasqsudo nano /etc/dnsmasq.conf`

2. Usa los siguientes comandos en dnsmasq.conf:

   `no-resolv`

   `bogus-priv`

   `strict-order`

   `server=94.140.14.49`

   `server=94.140.14.59`

   `port=5353`

   `add-cpe-id={Your_Device_ID}`

3. Reinicia el servicio dnsmasq:

   `sudo service dnsmasq restart`

¡Todo listo! Tu dispositivo está conectado correctamente a AdGuard DNS.

:::note Importante

Nota: Si ves una notificación que indica que no estás conectado a AdGuard DNS, lo más probable es que el puerto en el que se está ejecutando dnsmasq está ocupado por otros servicios. Utiliza [estas instrucciones](https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#bindinuse) para resolver el problema.

:::

## Usar DNS simple

Si prefieres no usar software adicional para la configuración de DNS, puedes optar por DNS no encriptado. Tienes dos opciones: usar IPs vinculadas o IPs dedicadas:

- [IP dedicadas](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP vinculadas](/private-dns/connect-devices/other-options/linked-ip.md)
