---
title: Nintendo
sidebar_position: 2
---

Las consolas de juegos no admiten DNS encriptados, pero son adecuadas para configurar DNS público de AdGuard o DNS privado de AdGuard a través de una dirección IP vinculada.

Es probable que tu router admita el uso de servidores DNS encriptados, por lo que siempre puedes configurar DNS privado de AdGuard en él y conectar tu consola de juegos a él.

[Cómo configurar tu router](/private-dns/connect-devices/routers/routers.md)

:::note Compatibilidad

Se aplica a: Nueva Nintendo 3DS, Nueva Nintendo 3DS XL, Nueva Nintendo 2DS XL, Nintendo 3DS, Nintendo 3DS XL y Nintendo 2DS.

:::

## Conectar AdGuard DNS

Configura tu consola de juegos para usar un servidor DNS público de AdGuard o configúralo a través de IP vinculada:

1. En el menú Inicio, selecciona _Configuración del sistema_.
2. Go to _Internet_ → _Internet Settings_ → _Connection Settings_.
3. Select your network from the list.
4. Select _Change Settings_ → _DNS Settings_.
5. Set _Automatic_ to _Manual_.
6. Select _Primary DNS_. Hold down the left arrow (B button) to delete the existing DNS.
7. In the _Primary DNS_ field, enter one of the following DNS server addresses:
    - `94.140.14.49`
    - `94.140.14.59`
8. Guarda la configuración.

Sería preferible usar IP vinculada (o IP dedicada si tienes una suscripción de Team):

 - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
 - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
