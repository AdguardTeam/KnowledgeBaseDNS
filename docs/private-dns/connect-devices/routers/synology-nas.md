---
title: Synology NAS
sidebar_position: 9
---

A Synology NAS runs DSM (DiskStation Manager), a web-based OS that you use to manage the device, including its network settings. You can manage it remotely and configure AdGuard DNS directly on the NAS.

## Use the DSM control panel

Use these instructions if your Synology NAS does not support DNS-over-HTTPS or DNS-over-TLS configuration:

1. Open the DSM control panel. It can be accessed in a browser at the NAS’s IP address, e.g. `http://192.168.1.1:5000` or `https://192.168.1.1:5001`.
1. Enter the administrator username and password for your NAS.
1. Go to *Control Panel* → *Network* → *General*.
1. Under *DNS Server*, select *Manually configure DNS server*.
1. In the *Preferred DNS server* and *Alternative DNS server* fields, enter the addresses you want to use, e.g. `94.140.14.49` and `94.140.14.59`, or `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff` for IPv6.
1. Click *Apply*.
1. Link your IP (or your dedicated IP if you have a Team subscription).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](private-dns/connect-devices/other-options/linked-ip.md)
