---
title: Asus
sidebar_position: 3
---

## Configure DNS-over-TLS

These are general instructions for configuring Private AdGuard DNS for Asus routers.

The configuration information in these instructions is taken from a specific router model, so it may differ from the interface of an individual device.

If necessary: Configure DNS-over-TLS on ASUS, install the [ASUS Merlin firmware](https://www.asuswrt-merlin.net/download) suitable for your router version on your computer.

1. Log in to your Asus router admin panel. It can be accessed via [http://router.asus.com](http://router.asus.com/), [http://192.168.1.1](http://192.168.1.1/), [http://192.168.0.1](http://192.168.0.1/), or [http://192.168.2.1](http://192.168.2.1/).
1. Enter the administrator username (usually, it’s admin) and router password.
1. In the *Advanced Settings* sidebar, navigate to the WAN section.
1. In the *WAN DNS Settings* section, set *Connect to DNS Server automatically* to *No*.
1. Set *Forward local queries*, *Enable DNS Rebind protection*, and *Enable DNSSEC suppport* to *No*.
1. Change DNS Privacy Protocol to DNS-over-TLS (DoT).
1. Make sure the *DNS-over-TLS Profile* is set to *Strict*.
1. Scroll down to the *DNS-over-TLS Servers List* section. In the *Address* field, enter one of the addresses below:
    - `94.140.14.49` and `94.140.14.59`
1. For *TLS Port*, enter 853.
1. In the *TLS Hostname* field, enter the Private AdGuard DNS server address:
    - `{Your_Device_ID}.d.adguard-dns.com`
1. Scroll to the bottom of the page and click *Apply*.

## Use your router admin panel

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
1. Enter the administrator username (usually, it’s admin) and router password.
1. Open *Advanced Settings* or *Advanced*.
1. Select *WAN* or *Internet*.
1. Open *DNS Settings* or *DNS*.
1. Choose *Manual DNS*. Select *Use These DNS Servers* or *Specify DNS Server Manually* and enter the following DNS server addresses:
    - IPv4: `94.140.14.49` and `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
1. Save the settings.
1. Link your IP (or your dedicated IP if you have a Team subscription).
    - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
