---
title: OpenWRT
sidebar_position: 7
---

Los routers OpenWRT utilizan un sistema operativo de código abierto basado en Linux que proporciona la flexibilidad para configurar routers y puertas de enlace según las preferencias del usuario. Los desarrolladores se encargaron de agregar soporte para servidores DNS cifrados, permitiéndote configurar AdGuard DNS privado en tu dispositivo.

## Configurar DNS-over-HTTPS

- **Instrucciones de línea de comandos**. Instala los paquetes necesarios. El cifrado DNS debe habilitarse automáticamente.

  ```# Install packages
  1. opkg update
  2. opkg install https-dns-proxy

  ```
- **Interfaz web**. Si quieres administrar la configuración mediante la interfaz web, instala los paquetes necesarios.

  ```# Install packages
  1. opkg update
  2. opkg install luci-app-https-dns-proxy
  3. /etc/init.d/rpcd restart
  ```

Navega a _LuCI_ → _Servicios_ → _HTTPS DNS Proxy_ para configurar el https-dns-proxy.

- **Configura el proveedor DoH**. https-dns-proxy está configurado con Google DNS y Cloudflare DNS por defecto. Debes cambiarlo a AdGuard DoH. Especifica varios resolutores para mejorar la tolerancia a fallos.

  ```# Configure DoH provider
  1. while uci -q delete https-dns-proxy.@https-dns-proxy[0]; do :; done
  2. uci set https-dns-proxy.dns="https-dns-proxy"
  3. uci set https-dns-proxy.dns.bootstrap_dns="94.140.14.49,94.140.14.59"
  4. uci set https-dns-proxy.dns.resolver_url="https://d.adguard-dns.com/dns-query/{Your_Private_Server_ID}"
  5. uci set https-dns-proxy.dns.listen_addr="127.0.0.1"
  6. uci set https-dns-proxy.dns.listen_port="5053"
  7. uci commit https-dns-proxy
  8. /etc/init.d/https-dns-proxy restart
  ```

## Configura DNS-over-TLS

- **Instrucciones de línea de comandos**. [Deshabilita](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#disabling_dns_role) el rol DNS de Dnsmasq o elimínalo opcionalmente [reemplazando](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#replacing_dnsmasq_with_odhcpd_and_unbound) su rol de DHCP con odhcpd.

  ```# Install packages
  1. opkg update
  2. opkg install unbound-daemon ca-certificates
  ```

Los clientes de LAN y el sistema local deben usar Unbound como un resolutor principal, suponiendo que Dnsmasq esté deshabilitado.

- **Interfaz web**. Si quieres administrar la configuración mediante la interfaz web, instala los paquetes necesarios.

  ```# Install packages
  1. opkg update
  2. opkg install luci-app-unbound ca-certificates
  3. /etc/init.d/rpcd restart
  ```

Navega a _LuCI_ → _Servicios_ → _DNS recursivo_ para configurar Unbound.

- **Configura AdGuard DNS-over-TLS**.

  ```1. uci add unbound zone
  2. uci set unbound.@zone[-1].enabled="1"
  3. uci set unbound.@zone[-1].fallback="0"
  4. uci set unbound.@zone[-1].zone_type="forward_zone"
  5. uci add_list unbound.@zone[-1].zone_name="."
  6. uci set unbound.@zone[-1].tls_upstream="1"
  7. uci set unbound.@zone[-1].tls_index="{Your_Private_Server_ID}.d.adguard-dns.com"
  8. uci add_list unbound.@zone[-1].server="94.140.14.49"
  9. uci add_list unbound.@zone[-1].server="94.140.14.59"
  10. uci add_list unbound.@zone[-1].server="2a10:50c0::ded:ff"
  11. uci add_list unbound.@zone[-1].server="2a10:50c0::dad:ff"
  12. uci commit unbound
  13. /etc/init.d/unbound restart
  ```

## Utiliza el panel de administración del router

Usa estas instrucciones si tu router Keenetic no admite la configuración de DNS-over-HTTPS o DNS-over-TLS:

1. Abre el panel de administración del router. Se puede acceder en `192.168.1.1` o `192.168.0.1`.
2. Introduce el nombre de usuario del administrador (generalmente, es admin) y la contraseña del router.
3. Abre _Red_ → _Interfaces_.
4. Selecciona tu red Wi-Fi o conexión por cable.
5. Desplázate hacia abajo hasta la dirección IPv4 o dirección IPv6, según la versión de IP que desees configurar.
6. Bajo _Usar servidores DNS personalizados_, introduce las direcciones IP de los servidores DNS que deseas utilizar. Puedes introducir varios servidores DNS, separados por espacios o comas:
   - IPv4: `94.140.14.49` y `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` y `2a10:50c0:0:0:0:0:dad:ff`
7. Opcionalmente, puedes habilitar el reenvío de DNS si deseas que el router actúe como un reenviador de DNS para dispositivos en tu red.
8. Guarda la configuración.
9. Vincula tu IP (o tu IP dedicada si tienes una suscripción de equipo).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
