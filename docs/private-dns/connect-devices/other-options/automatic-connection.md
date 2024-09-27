---
title: Automatic connection
sidebar_position: 5
---

## Why it is useful

Not everyone feels at ease adding devices through the Dashboard. For instance, if you’re a system administrator setting up multiple corporate devices simultaneously, you’ll want to minimize manual tasks as much as possible.

You can create a connection link and use it in the device settings. Your device will be detected and automatically connected to the server.

## How to configure automatic connection

1. Open the *Dashboard* and select the required server.
1. Go to *Devices*.
1. Enable the option to connect devices automatically.
    ![Connect devices automatically *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step4.png)

Now you can automatically connect your device to the server by creating a special address that includes the device name, device type, and current server ID. Let’s explore what these addresses look like and the rules for creating them.

### Examples of automatic connection addresses

- `tls://adr-{Your_Server_ID}-AdGuard-Test-Device.d.adguard-dns.com` — This will automatically create an `Android` device with the `DNS-over-TLS` protocol named `AdGuard Test Device`.
- `https://d.adguard-dns.com/dns-query/win-{Your_Server_ID}-John-Doe` — This will automatically create a `Windows` device with the `DNS-over-HTTPS` protocol named `John Doe`
- `quic://ios-73f78a1d-Mary-Sue.d.adguard-dns.com` — This will automatically create a `iOS` device with the `DNS-over-QUIC` protocol named `Mary Sue`

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
- Game console — `gam`
- Other — `otr`

## Link generator

We’ve added a template that generates a link for the specific device type and protocol.

1. Go to *Servers* → *Server settings* → *Devices* → *Connect devices automatically* and click *Link generator and instructions*.
1. Select the protocol you want to use as well as the device name and the device type.
1. Click *Generate link*.
    ![Generate link *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step7.png)
1. You have successfully generated the link, now copy the server address and use it in one of the [AdGuard apps](https://adguard.com/welcome.html)
