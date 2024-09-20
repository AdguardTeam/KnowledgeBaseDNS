---
title: Automatic connection
sidebar_position: 5
---

## What it is and why you need it

Not everyone feels at ease adding devices through the Dashboard. For instance, if you're a system administrator setting up multiple corporate devices simultaneously, you'll want to minimize manual tasks as much as possible.

You can create a connection link and use it in the device settings; it will be detected and automatically connect to the server.

In *Servers* → *Server settings* → *Devices*, we’ve added a template that generates a link for the specific device type and protocol. If you prefer to create links manually, just follow the instructions in the Dashboard.

## How to configure automatic connection

1. Open Dashboard.
1. Select the required server.
1. Go to *Devices*.

1. Enable the option to connect devices automatically.

    ![Connect devices automatically *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step4.png)

1. Next, go to the device settings in the *Connect devices automatically* section by clicking on the *Link generator and instructions* button
1. Select the desired protocol as well as the device name and type
1. Click *Generate link*.

    ![Generate link *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step7.png)

1. You have successfully generated the link, now copy the server address and use it in one of the [AdGuard apps](https://adguard.website.agrd.dev/welcome.html)

## Rules for generating automatically connected devices

### Naming conventions

When manually creating devices, please note that there are a number of restrictions related to name length, characters, spaces, and hyphens.

**Name length**: 50 characters maximum. Characters beyond this limit are ignored.

**Permitted characters**: English letters, numbers, and hyphens `-`. Other characters are ignored.

**Spaces and hyphens**: To represent a space, use a hyphen. To represent a hyphen, use a double hyphen `--`.

Let's look at one of the options with an example:

- Create a device with the selected DNS-over-TLS protocol
- Give it a space-sensitive name: AdGuard Test Device
- Device type: Android
- Click the *Generate Link* button
- Link generated: **tls://adr-{Your_Server_ID}-AdGuard-Test-Device.d.adguard-dns.com**

### Device type

- Windows — `win`
- macOS — `mac`
- Android — `adr`
- iOS — `ios`
- Linux — `lnx`
- Router — `rtr
- Smart TV — `stv
- Game console — `gam`
- Other — `otr`
