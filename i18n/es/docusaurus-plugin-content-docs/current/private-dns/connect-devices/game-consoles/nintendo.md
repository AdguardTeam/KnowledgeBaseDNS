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
2. Ve a _Configuración de Internet_ → _Configuración de conexión_.
3. Selecciona el archivo de conexión, luego selecciona _Cambiar Configuración_.
4. Selecciona _DNS_ → _Configuración_.
5. Establece _Obtener DNS automáticamente_ en _No_.
6. Selecciona _Configuración detallada_ → _DNS Primario_. Mantén presionada la flecha izquierda para eliminar el DNS existente.
7. En el campo _Servidor DNS_, ingresa una de las siguientes direcciones de servidor DNS:
   - `94.140.14.49`
   - `94.140.14.59`
8. Guarda la configuración.

Sería preferible usar IP vinculada (o IP dedicada si tienes una suscripción de Team):

- [IP dedicadas](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP vinculadas](/private-dns/connect-devices/other-options/linked-ip.md)
