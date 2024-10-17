---
title: Automatic connection
sidebar_position: 5
---

## Why it is useful

Tout le monde ne se sent pas à l'aise pour ajouter des appareils via le tableau de bord. Par exemple, si vous êtes un administrateur système configurant plusieurs appareils d'entreprise simultanément, vous souhaiterez minimiser les tâches manuelles autant que possible.

You can create a connection link and use it in the device settings. Your device will be detected and automatically connected to the server.

## How to configure automatic connection

1. Open the _Dashboard_ and select the required server.
2. Allez dans _Appareils_.
3. Activez l'option pour connecter les appareils automatiquement.
   ![Connecter les appareils automatiquement \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step4.png)

Now you can automatically connect your device to the server by creating a special address that includes the device name, device type, and current server ID. Let’s explore what these addresses look like and the rules for creating them.

### Examples of automatic connection addresses

- `tls://adr-{Your_Server_ID}-AdGuard-Test-Device.d.adguard-dns.com` — this will automatically create an `Android` device with the `DNS-over-TLS` protocol named `AdGuard Test Device`

- `https://d.adguard-dns.com/dns-query/win-{Your_Server_ID}-John-Doe` — this will automatically create a `Windows` device with the `DNS-over-HTTPS` protocol named `John Doe`

- `quic://ios-73f78a1d-Mary-Sue.d.adguard-dns.com` — this will automatically create a `iOS` device with the `DNS-over-QUIC` protocol named `Mary Sue`

### Naming conventions

Lors de la création manuelle d'appareils, veuillez noter qu'il existe des restrictions liées à la longueur du nom, aux caractères, aux espaces et aux traits d'union.

**Longueur du nom**: 50 caractères maximum. Les caractères au-delà de cette limite sont ignorés.

**Permitted characters**: English letters, numbers, and hyphens `-`. Other characters are ignored.

**Spaces and hyphens**: Use a hyphen for a space and a double hyphen ( `--`) for a hyphen.

**Device type**: Use the following abbreviations:

- Windows — `win`
- macOS — `mac`
- Android — `adr`
- iOS — `ios`
- Linux — `lnx`
- Router — `rtr`
- Smart TV — `stv`
- Game console — `gam`
- Other — `otr`

## Link generator

We’ve added a template that generates a link for the specific device type and protocol.

1. Allez à _Serveurs_ → _Paramètres du serveur_ → _Appareils_ → _Connecter les appareils automatiquement_ et cliquez sur _Générateur de liens et instructions_.
2. Select the protocol you want to use as well as the device name and the device type.
3. Click _Generate link_.
   ![Generate link \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step7.png)
4. You have successfully generated the link, now copy the server address and use it in one of the [AdGuard apps](https://adguard.com/welcome.html)
