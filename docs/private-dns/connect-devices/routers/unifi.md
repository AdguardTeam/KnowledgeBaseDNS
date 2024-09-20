---
title: Unifi
sidebar_position: 10
---

The UiFi router (commonly known as Ubiquiti's UniFi series) has a number of advantages that make it particularly suitable for home, business, and enterprise environments. Unfortunately, it does not support encrypted DNS, but it is great for setting up AdGuard DNS via linked IP address:

## Use your router admin panel

Use these instructions if your Keenetic router does not support DNS-over-HTTPS or DNS-over-TLS configuration:

1. Log in to the Ubiquiti UniFi controller.
1. Go to *Settings* → *Networks*.
1. Click *Edit Network* → *WAN*.
1. Proceed to *Common Settings* → *DNS Server* and enter the following DNS server addresses.

    IPv4: 94.140.14.49 and 94.140.14.59

    IPv6: 2a10:50c0:0:0:0:0:ded:ff and 2a10:50c0:0:0:0:0:dad:ff

1. Click *Save*.
1. Return to *Network*.
1. Choose *Edit Network* → *LAN*.
1. Find *DHCP Name Server* and select *Manual*.
1. Enter your gateway address in the DNS Server 1 field. Alternatively, you can enter the AdGuard DNS server addresses in DNS Server 1 and DNS Server 2 fields:

    IPv4: 94.140.14.49 and 94.140.14.59

    IPv6: 2a10:50c0:0:0:0:0:ded:ff and 2a10:50c0:0:0:0:0:dad:ff

1. Save the settings.
1. Link your IP (or link your dedicated IP if you're using a Team subscription).

    - [Dedicated IPs](private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linked IPs](private-dns/connect-devices/other-options/linked-ip.md)
