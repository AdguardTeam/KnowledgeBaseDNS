---
title: UniFi
sidebar_position: 10
---

The UiFi router (commonly known as Ubiquiti's UniFi series) has a number of advantages that make it particularly suitable for home, business, and enterprise environments. Unfortunately, it does not support encrypted DNS, but it is great for setting up AdGuard DNS via linked IP.

## Use your router admin panel

Use these instructions if your Keenetic router does not support DNS-over-HTTPS or DNS-over-TLS configuration:

1. Log in to the Ubiquiti UniFi controller.
2. Go to _Settings_ → _Networks_.
3. Click _Edit Network_ → _WAN_.
4. Proceed to _Common Settings_ → _DNS Server_ and enter the following DNS server addresses.
   - IPv4: `94.140.14.49` and `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
5. Klikněte na _Uložit_.
6. Return to _Network_.
7. Choose _Edit Network_ → _LAN_.
8. Find _DHCP Name Server_ and select _Manual_.
9. Enter your gateway address in the _DNS Server 1_ field. Alternatively, you can enter the AdGuard DNS server addresses in _DNS Server 1_ and _DNS Server 2_ fields:
   - IPv4: `94.140.14.49` and `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
10. Save the settings.
11. Link your IP (or your dedicated IP if you have a Team subscription).

- [Dedicated IPs](private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](private-dns/connect-devices/other-options/linked-ip.md)
