---
title: Endpoint de marca blanca (dirección IP de la cuenta)
sidebar_position: 7
---

Los dominios personalizados permiten a los socios ofrecer AdGuard DNS bajo su propia marca. Con el plan Enterprise, este servicio puede funcionar en una dirección IP privada: esta función se llama _Account IP_. Los dominios apuntan al _Account IP_ mediante un registro A en lugar de un registro CNAME, que se usa para los dominios personalizados estándar.

:::note

**CNAME** apunta tu dominio a otro dominio (`dns.partner.com` → `cname.adguard-dns.com`). La dirección IP real se resuelve a través de ese segundo dominio, por lo que el tráfico pasa por la infraestructura compartida que sirve.

**El registro A** apunta tu dominio directamente a una dirección IP (`dns.partner.com` → `203.0.113.10`). No hay ningún dominio intermedio: la dirección a la que se resuelve tu dominio es la que gestiona el tráfico.

:::

Cada cuenta puede tener un _Account IP_ y puedes apuntar varios dominios a él. No es lo mismo que las direcciones IPv4 e IPv6 dedicadas que se usan para identificar dispositivos: un _Account IP_ es la dirección a la que se resuelven tus dominios personalizados.

## Cómo obtener un Account IP

Para solicitar un _Account IP_, contacta con tu gestor de cuentas o con el equipo de soporte en [support@adguard-dns.io](mailto:support@adguard-dns.io).

Una vez asignada la dirección, el bloque _Endpoint de marca blanca_ aparece en _Configuración_ → _Configuración avanzada_ → _Dominios personalizados_, mostrando tu _dirección IP de la cuenta_. Hasta entonces, el bloque no se muestra.

![Endpoint de marca blanca](https://cdn.adtidy.org/content/kb/dns/enterprise/whitelabel_endpoint_en.png)

:::caution

Si tu cuenta deja el plan Enterprise, la dirección queda inactiva y los dominios que apuntan a ella dejan de funcionar. Los dominios personalizados siguen disponibles en el plan **Team**, pero solo mediante un registro CNAME — para reactivar los dominios en pausa, vuelve a añadirlos como dominios personalizados estándar.

La dirección en sí permanece reservada para tu cuenta, así que si vuelves al plan Enterprise, recuperarás la misma.

:::

## Cómo apuntar un dominio a tu dirección IP de cuenta

La configuración sigue los mismos pasos que un dominio personalizado estándar, salvo que creas un registro A en lugar de un CNAME. Además, para los dominios DoH, el certificado no se emite automáticamente — debes subir el tuyo.

1. En _Dominios personalizados_, elige el protocolo: _Añadir dominio DoH_ (para DNS-over-HTTPS) o _Añadir dominio DoT/DoQ_ (para DNS-over-TLS o DNS-over-QUIC).

   ![Elección del protocolo](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_protocol_en.png)

2. Introduce el dominio que quieres usar (por ejemplo, `dns.partner.com`) y haz clic en _Siguiente_. Necesitas acceso al panel de gestión de DNS de este dominio.

   ![Introducción del dominio](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_domain_en.png)

3. La siguiente pantalla muestra los valores de tu registro DNS: tu dominio en _Nombre (host)_ y tu _Account IP_ en _Valor (apunta a / dirección IP)_. Dejando esta pantalla abierta, ve al panel de control de tu proveedor de DNS y crea un registro A con esos valores. No crees un registro CNAME — los dominios en un _Account IP_ apuntan directamente a la dirección.

   ![Valores del registro DNS](https://cdn.adtidy.org/content/kb/dns/enterprise/a_record_en.png)

4. En la pantalla de AdGuard DNS con los valores del registro, haz clic en _Verificar_. Si el registro aún no se ha propagado o apunta a otro lugar, la verificación falla. Comprueba el registro y vuelve a intentarlo en unos minutos.

5. Sube un certificado TLS. Los certificados no se emiten automáticamente para los dominios en un _Account IP_:

   - Para **DoT/DoQ**, subes un certificado comodín (`*.partner.com`), igual que para un dominio personalizado estándar.
   - Para **DoH**, también subes tu propio certificado. Esto difiere del flujo estándar, donde AdGuard DNS puede generar uno por ti.

   Hasta que añadas un certificado, el dominio muestra el estado _Sin certificado_ y tus clientes no pueden conectarse a él.

   ![Carga de un certificado](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_certificate_en.png)

:::note

La renovación corre de tu cuenta. Recibirás un recordatorio por correo electrónico antes de que caduque el certificado. Cuando ocurra, tu dominio dejará de funcionar hasta que subas un certificado nuevo.

:::

## Dominios personalizados existentes y dirección IP de la cuenta

Los dominios que añadiste antes de obtener un _Account IP_ no se trasladan automáticamente a él. Siguen funcionando mediante su registro CNAME, como antes.

Para trasladar un dominio a tu _Account IP_, empieza por eliminar su registro CNAME en tu proveedor de DNS — un dominio no puede tener a la vez un CNAME y un registro A. Después, elimina el dominio en AdGuard DNS y vuelve a añadirlo siguiendo los pasos anteriores.

:::caution

Tus clientes no podrán usar el dominio entre el momento en que lo elimines y el momento en que se verifique la nueva configuración.

:::

## Limitaciones

Un _Account IP_ cambia la dirección a la que se resuelve tu dominio. Esto es lo que no cubre:

- La dirección IP de la cuenta no es totalmente de marca blanca a nivel de red. Una consulta WHOIS, RDAP o ASN de la dirección IP aún puede identificar a AdGuard como proveedor de la infraestructura IP subyacente.
- El DNS inverso no se puede personalizar, por lo que una consulta PTR no devolverá tu dominio.
- La detección de servidores DNS (DDR) no está disponible en un _Account IP_.
- No se admiten certificados con la dirección IP en el campo SAN, por lo que tus clientes se conectan mediante el nombre de dominio en lugar de la dirección en sí.
- No se admite el uso de tu propio rango de IP (BYOIP), ya que la dirección la asigna AdGuard.
- Los dominios DNSCheck, utilizados para verificar la conexión DNS de un dispositivo, siguen resolviéndose a través de la infraestructura de AdGuard.
