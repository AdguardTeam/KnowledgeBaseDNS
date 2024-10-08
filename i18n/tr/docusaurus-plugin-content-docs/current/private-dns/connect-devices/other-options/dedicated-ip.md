---
title: Dedicated IPs
sidebar_position: 2
---

## What are dedicated IPs?

Dedicated IPv4 addresses are available to users with Team and Enterprise subscriptions, while linked IPs are available to everyone.

If you have a Team or Enterprise subscription, you'll receive several personal dedicated IP addresses. Requests to these addresses are treated as "yours," and server-level configurations and filtering rules are applied accordingly. Dedicated IP addresses are much more secure and easier to manage. With linked IPs, you have to manually reconnect or use a special program every time the device's IP address changes, which happens after every reboot.

## Why do you need a dedicated IP?

Unfortunately, the technical specifications of the connected device may not always allow you to set up an encrypted private AdGuard DNS server. In this case, you will have to use standard unencrypted DNS. There are two ways to set up AdGuard DNS: [using linked IPs](/private-dns/connect-devices/other-options/linked-ip.md) and using dedicated IPs.

Dedicated IPs are generally a more stable option. Linked IP has some limitations, such as only residential addresses are allowed, your provider can change the IP, and you'll need to relink the IP address. With dedicated IPs, you get an IP address that is exclusively yours, and all requests will be counted for your device.

The disadvantage is that you may start receiving irrelevant traffic (scanners, bots), as always happens with public DNS resolvers. You may need to use [Access settings](/private-dns/server-and-settings/access.md) to limit bot traffic.

The instructions below explain how to connect a dedicated IP to the device:

## Connect AdGuard DNS using dedicated IPs

1. Open Dashboard.
2. Add a new device or open the settings of a previously created device.
3. Select _Use server addresses_.
4. Next, open _Plain DNS Server Addresses_.
5. Kullanmak istediğiniz sunucuyu seçin.
6. To bind a dedicated IPv4 address, click _Assign_.
7. If you want to use a dedicated IPv6 address, click _Copy_.
   ![Copy address \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dedicated_step7.png)
8. Copy and paste the selected dedicated address into the device configurations.
