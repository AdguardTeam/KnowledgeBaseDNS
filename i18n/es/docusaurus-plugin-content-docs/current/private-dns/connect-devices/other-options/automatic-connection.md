---
title: Conexión automática
sidebar_position: 5
---

## ¿Por qué es útil?

No todos se sienten cómodos agregando dispositivos a través del _Dashboard_. Por ejemplo, si eres un administrador del sistema configurando múltiples dispositivos corporativos simultáneamente, querrás minimizar las tareas manuales tanto como sea posible.

Puedes crear un enlace de conexión y usarlo en la configuración del dispositivo. Tu dispositivo será detectado y se conectará automáticamente al servidor.

## Cómo configurar la conexión automática

1. Abre el _Dashboard_ y selecciona el servidor requerido.
2. Go to _Advanced_.
3. Habilita la opción para conectar dispositivos automáticamente.
    ![Connect devices automatically \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically.png)

Ahora puedes conectar automáticamente tu dispositivo al servidor creando una dirección especial que incluye el nombre del dispositivo, el tipo de dispositivo y el ID de servidor actual. Exploremos cómo son estas direcciones y las reglas para crearlas.

### Ejemplos de direcciones de conexión automática

- `tls://adr-{Your_Server_ID}-AdGuard-Test-Device.d.adguard-dns.com` — esto creará automáticamente un dispositivo `Android` con el protocolo `DNS-over-TLS` llamado `AdGuard Test Device`

- `https://d.adguard-dns.com/dns-query/win-{Your_Server_ID}-John-Doe` — esto creará automáticamente un dispositivo `Windows` con el protocolo `DNS-over-HTTPS` llamado `John Doe`

- `quic://ios-73f78a1d-Mary-Sue.d.adguard-dns.com` — esto creará automáticamente un dispositivo `iOS` con el protocolo `DNS mediante QUIC` llamado `Mary Sue`

### Convenciones de nomenclatura

Al crear dispositivos manualmente, ten en cuenta que hay restricciones relacionadas con la longitud del nombre, caracteres, espacios y guiones.

**Tamaño del nombre**: máximo 50 caracteres. Los caracteres que sobrepasen este límite se ignoran.

**Caracteres permitidos**: letras, números y guiones `-`. Otros caracteres son ignorados.

**Espacios y guiones**: usa un guion para un espacio y un doble guion ( `--`) para un guion.

**Tipo de dispositivo**: usa las siguientes abreviaturas:

- Windows — `win`
- macOS — `mac`
- Android — `adr`
- iOS — `ios`
- Linux — `lnx`
- Router — `rtr`
- Smart TV — `stv`
- Consola de videojuegos — `gam`
- Otro — `otr`

## Generador de enlaces

Hemos agregado una plantilla que genera un enlace para el tipo de dispositivo específico y protocolo.

1. Ve a _Servidores_ → _Configuración del servidor_ → _Dispositivos_ → _Conectar dispositivos automáticamente_ y haz clic en _Generador de enlaces e instrucciones_.
2. Selecciona el protocolo que deseas usar, así como el nombre del dispositivo y el tipo de dispositivo.
3. Haz clic en _Generar enlace_.
    ![Generar enlace \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step7.png)
4. Has generado el enlace con éxito, ahora copia la dirección del servidor y úsala en una de las [aplicaciones de AdGuard](https://adguard.com/welcome.html)
