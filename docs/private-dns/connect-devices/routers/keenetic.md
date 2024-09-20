---
title: Keenetic
sidebar_position: 5
---

Keenetic routers are known for their stability and flexible configurations, and are easy to set up, allowing you to easily install encrypted Private AdGuard DNS on your device.

## Configure DNS-over-HTTPS

1. Open the router admin panel. It can be accessed at my.keenetic.net, the IP address of your router, or 192.168.1.1.
1. Press the menu button at the bottom of the screen and select *Management*.
1. Open *System settings*.
1. Press *Component options* → *System component options*.
1. In *Utilities and services*, select DNS-over-HTTPS proxy and install it.
1. Head to *Menu* → *Network rules* → *Internet safety*.
1. Navigate to DNS-over-HTTPS servers and click *Add DNS-over-HTTPS server*.
1. Enter the Private AdGuard DNS server URL in field: `https://d.adguard-dns.com/dns-query/{Your_Device_ID}`
1. Click *Save*.

## Configure DNS-over-TLS

1. Open the router admin panel. It can be accessed at my.keenetic.net, the IP address of your router, or 192.168.1.1.
1. Press the menu button at the bottom of the screen and select *Management*.
1. Open *System settings*.
1. Press *Component options* → *System component options*.
1. In *Utilities and services*, select DNS-over-HTTPS proxy and install it.
1. Head to *Menu* → *Network rules* → *Internet safety*.
1. Navigate to DNS-over-HTTPS servers and click *Add DNS-over-HTTPS server*.
1. Enter the Private AdGuard DNS server URL in field: `tls://*********.d.adguard-dns.com`
1. Click *Save*.

## Use your router admin panel

Use these instructions if your Keenetic router does not support DNS-over-HTTPS or DNS-over-TLS configuration:

1. Open the router admin panel. It can be accessed at 192.168.1.1 or 192.168.0.1.
1. Enter the administrator username (usually, it’s admin) and router password.
1. Open *Internet* or *Home Network*.
1. Select *WAN* or *Internet*.
1. Select *DNS* or *DNS Settings*.
1. Choose *Manual DNS*. Select *Use These DNS Servers* or *Specify DNS Server Manually* and enter the following DNS server addresses:

    IPv4: 94.140.14.49 and 94.140.14.59

    IPv6: 2a10:50c0:0:0:0:0:ded:ff and 2a10:50c0:0:0:0:0:dad:ff

1. Save the settings.
1. Link your IP (or link your dedicated IP if you're using a Team subscription).

    - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
