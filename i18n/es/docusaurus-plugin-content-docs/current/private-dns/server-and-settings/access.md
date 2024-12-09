---
title: Configuración de acceso
sidebar_position: 3
---

Al configurar la configuración de acceso, podrás proteger tu AdGuard DNS de accesos no autorizados. Por ejemplo, estás utilizando una dirección IPv4 dedicada, y atacantes que utilizan sniffers la han reconocido y la están bombardeando con peticiones. Sin problema, solo agrega el molesto dominio o dirección IP a la lista y ya no te molestará más.

Las peticiones bloqueadas no se mostrarán en el registro de consultas y no se cuentan en el límite total.

## Cómo configurarlo

### Clientes permitidos

Esta configuración permite especificar qué clientes pueden usar tu servidor DNS. Tiene la máxima prioridad. Por ejemplo, si la misma dirección IP está en ambas listas, la denegada y la permitida, seguirá estando permitida.

### Clientes no permitidos

Aquí puedes enumerar los clientes que no están permitidos para usar tu servidor DNS. Puedes bloquear el acceso a todos los clientes y usar solo los seleccionados. To do this, add two addresses to the disallowed clients: `0.0.0.0/0` and `::/0`. Luego, en el campo _Clientes permitidos_, especifica las direcciones que pueden acceder a tu servidor.

:::note Importante

Antes de aplicar la configuración de acceso, asegúrate de que no estás bloqueando tu propia dirección IP. Si lo haces, no podrás acceder a la red. Si eso sucede, simplemente desconéctate del servidor DNS, ve a la configuración de acceso y ajusta las configuraciones en consecuencia.

:::

### Dominios no permitidos

Aquí puedes especificar los dominios (así como reglas de filtrado y comodines DNS) que se denegarán el acceso a tu servidor DNS.

![Configuración de acceso \*border](https://cdn.adtidy.org/content/release_notes/dns/v2-5/AS-en.png)

Para mostrar las direcciones IP asociadas con las peticiones DNS en el registro de consultas, selecciona la casilla de verificación _Registrar direcciones IP_. Para hacer esto, abre _Configuración del servidor_ → _Configuraciones avanzadas_.
