---
title: Usar junto con iCloud Private Relay
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

Cuando utilizas iCloud Private Relay, el panel de DNS de AdGuard (y la página de prueba de AdGuard [asociada](https://adguard.com/test.html)) mostrará que no estás utilizando AdGuard DNS en ese dispositivo.

![El dispositivo no está conectado](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

Para solucionar este problema, debes permitir que los sitios web de AdGuard vean tu dirección IP en la configuración de tu dispositivo.

- En iPhone o iPad:

    1. Ve a `adguard-dns.io`

    1. Toca el botón **Configuración de página**, luego toca **Mostrar dirección IP**

        ![Configuración de iCloud Private Relay *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. Repite para `adguard.com`

- En Mac:

    1. Ve a `adguard-dns.io`

    1. En Safari, elige **Ver** → **Recargar y Mostrar dirección IP**

    1. Repite para `adguard.com`

Si no puedes ver la opción para permitir temporalmente que un sitio web vea tu dirección IP, actualiza tu dispositivo a la última versión de iOS, iPadOS o macOS y vuelve a intentarlo.

Ahora tu dispositivo debería mostrarse correctamente en el dashboard de AdGuard DNS:

![El dispositivo está conectado](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Ten en cuenta que una vez que desactivas Private Relay para un sitio web específico, tu proveedor de red también podrá ver en qué sitio estás navegando.
