---
title: Problemas conocidos
sidebar_position: 1
---

Después de configurar AdGuard DNS, algunos usuarios pueden encontrarse con que no funciona correctamente: ven un mensaje que indica que su dispositivo no está conectado a AdGuard DNS y las peticiones de ese dispositivo no se muestran en el Registro de consultas. Esto puede ocurrir debido a ciertos ajustes ocultos en tu navegador o sistema operativo. Veamos varios problemas comunes y sus soluciones.

:::tip

Puedes comprobar el estado de AdGuard DNS en la [página de prueba](https://adguard.com/test.html).

:::

## Configuración del DNS seguro de Chrome

Si utilizas Chrome y no ves ninguna solicitud en el panel de AdGuard DNS, puede deberse a que Chrome utiliza su propio servidor DNS. Así es cómo puedes desactivarlo:

1. Abre la configuración de Chrome.
1. Ve a *Privacidad y seguridad*.
1. Selecciona *Seguridad*.
1. Desplázate hacia abajo hasta *Utilizar DNS Seguro*.
1. Desactiva la función.

![Función Usar DNS seguro de Chrome](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/secure-dns.png)

Si desactivas la configuración DNS propia de Chrome, el navegador utilizará el DNS especificado en tu sistema operativo, que debería ser AdGuard DNS si lo has configurado correctamente.

## iCloud Private Relay (Safari, macOS e iOS)

Si activas iCloud Private Relay en los ajustes de su dispositivo, Safari utilizará las direcciones DNS de Apple, que anularán los ajustes DNS de AdGuard.

A continuación, te explicamos cómo puedes desactivar iCloud Private Relay en tu iPhone:

1. Abre *Ajustes* y pulsa tu nombre.
1. Selecciona *iCloud* → *Private Relay*.
1. Desactiva Private Relay.

![iOS Private Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay.png)

En tu Mac:

1. Abre *Ajustes del sistema* y haz clic en tu nombre o *Apple ID*.
1. Selecciona *iCloud* → *Private Relay*.
1. Desactiva Private Relay.
1. Haz clic en *Listo*.

![macOS Private Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png)

## Protección avanzada contra rastreo y huellas dactilares (Safari, a partir de iOS 17)

Tras la actualización de iOS 17, es posible que se active la Protección avanzada contra rastreo y huellas dactilares en los ajustes de Safari, lo que podría tener un efecto similar al de la iCloud Private Relay al omitir los ajustes AdGuard DNS.

A continuación se explica cómo desactivar la Protección avanzada contra rastreo y huellas dactilares:

1. Abre *Ajustes* y desplázate hasta *Safari*.
1. Pulsa *Avanzado*.
1. Desactiva *Protección contra rastreo y huellas dactilares*.

![Protección contra rastreo y huellas dactilares en iOS *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)
