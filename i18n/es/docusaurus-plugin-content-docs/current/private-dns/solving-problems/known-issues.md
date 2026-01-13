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

If you disable Chrome’s own DNS settings, the browser will use the DNS specified in your operating system, which should be AdGuard DNS if you’ve set it up correctly.

## iCloud Private Relay (Safari, macOS e iOS)

Si activas iCloud Private Relay en los ajustes de su dispositivo, Safari utilizará las direcciones DNS de Apple, que anularán los ajustes DNS de AdGuard.

A continuación, te explicamos cómo puedes desactivar iCloud Private Relay en tu iPhone:

1. Abre *Ajustes* y pulsa tu nombre.
1. Selecciona *iCloud* → *Private Relay*.
1. Desactiva Private Relay.

![iOS Private Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay-ios-1.png)

En tu Mac:

1. Abre *Ajustes del sistema* y haz clic en tu nombre o *Apple ID*.
1. Selecciona *iCloud* → *Private Relay*.
1. Desactiva Private Relay.
1. Haz clic en *Listo*.

![macOS Private Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png)

## Protección avanzada contra rastreo y huellas dactilares (Safari, a partir de iOS 17)

Tras la actualización de iOS 17, es posible que se active la Protección avanzada contra rastreo y huellas dactilares en los ajustes de Safari, lo que podría tener un efecto similar al de la iCloud Private Relay al omitir los ajustes AdGuard DNS.

A continuación se explica cómo desactivar la Protección avanzada contra rastreo y huellas dactilares:

For iOS 26.1 and later versions:

1. Go to *Settings*.
1. Scroll down and select *Apps*.
1. Go to *Safari* → *Advanced*.
1. Tap *Advanced Tracking and Fingerprinting Protection* and then *Off*.

![iOS 26.1 Tracking and Fingerprinting Protection *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/adv-tracking-browser-1.png)

For iOS versions prior to 26.1:

1. Open *Settings* and scroll down to *Safari*.
1. Tap *Advanced*.
1. Disable *Advanced Tracking and Fingerprinting Protection*.

![iOS Tracking and Fingerprinting Protection *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)

## Limit IP Address Tracking on iPhone

When the Limit IP Address Tracking feature is enabled on your iPhone, it can interfere with AdGuard DNS’s ability to filter traffic.

This happens because the feature routes DNS queries from Safari (and other apps that support it) through Apple’s own private relay servers. This prevents AdGuard DNS from receiving your device’s actual IP address and processing DNS requests, resulting in disabled filtering for ads and trackers.

To restore full DNS-based filtering, you will need to disable this feature for the Wi-Fi network you are currently using.

Please follow the steps below:

1. Open *Settings* on your iPhone.
1. Tap *Wi-Fi*.
1. Find and tap the name of the Wi-Fi network you are currently connected to.
1. On the network’s settings page, toggle off the switch for *Limit IP Address Tracking.*

![Limit IP Address Tracking *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-wifi-limit-ip-1.png)

DNS filtering will resume immediately after disabling this setting. Please note that you may need to repeat this process for other Wi-Fi networks you connect to in the future.
