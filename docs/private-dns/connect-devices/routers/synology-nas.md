---
title: Synology NAS
sidebar_position: 9
---

Synology NAS routers are incredibly easy to use and can be combined into a single mesh network. You can manage your network remotely anytime, anywhere. You can also configure AdGuard DNS directly on the router.

## Use your router admin panel

Use these instructions if your Keenetic router does not support DNS-over-HTTPS or DNS-over-TLS configuration:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
1. Enter the administrator username (usually, it’s admin) and router password.
1. Open *Control Panel* or *Network*.
1. Select *Network Interface* or *Network Settings*.
1. Select your Wi-Fi network or wired connection.
1. Choose *Manual DNS*. Select *Use These DNS Servers* or *Specify DNS Server Manually* and enter the following DNS server addresses:
    - IPv4: `94.140.14.49` and `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
1. Save the settings.
1. Link your IP (or your dedicated IP if you have a Team subscription).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](private-dns/connect-devices/other-options/linked-ip.md)
