---
title: Automatische Geräteverbindung
sidebar_position: 5
---

## Why it is useful

Not everyone feels at ease adding devices through the Dashboard. For instance, if you’re a system administrator setting up multiple corporate devices simultaneously, you’ll want to minimize manual tasks as much as possible.

You can create a connection link and use it in the device settings. Your device will be detected and automatically connected to the server.

## How to configure automatic connection

1. Öffnen Sie die _Übersicht_ und wählen Sie den erforderlichen Server aus.
2. Wechseln Sie zu _Geräte_.
3. Aktivieren Sie die Option, um Geräte automatisch zu verbinden.
   ![Geräte automatisch verbinden \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step4.png)

Now you can automatically connect your device to the server by creating a special address that includes the device name, device type, and current server ID. Let’s explore what these addresses look like and the rules for creating them.

### Examples of automatic connection addresses

- `tls://adr-{Your_Server_ID}-AdGuard-Test-Device.d.adguard-dns.com` — dies erstellt automatisch ein `Android`-Gerät mit dem `DNS-over-TLS` Protokoll namens `AdGuard Test Device`

- `https://d.adguard-dns.com/dns-query/win-{Your_Server_ID}-John-Doe` — dies erstellt automatisch ein `Windows`-Gerät mit dem `DNS-over-HTTPS` Protokoll namens `John Doe`

- `quic://ios-73f78a1d-Mary-Sue.d.adguard-dns.com` — dies wird automatisch ein `iOS`-Gerät mit dem `DNS-over-QUIC` Protokoll namens `Mary Sue` erstellen

### Naming conventions

When creating devices manually, please note that there are restrictions related to name length, characters, spaces, and hyphens.

**Name length**: 50 characters maximum. Characters beyond this limit are ignored.

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
- Spielkonsole — `gam`
- Sonstiges — `otr`

## Link-Generator

We’ve added a template that generates a link for the specific device type and protocol.

1. Go to _Servers_ → _Server settings_ → _Devices_ → _Connect devices automatically_ and click _Link generator and instructions_.
2. Select the protocol you want to use as well as the device name and the device type.
3. Click _Generate link_.
   ![Link generieren \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step7.png)
4. You have successfully generated the link, now copy the server address and use it in one of the [AdGuard apps](https://adguard.com/welcome.html)
