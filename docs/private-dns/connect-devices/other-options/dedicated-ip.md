---
title: Dedicated IPs
sidebar_position: 2
---

## What are dedicated IPs?

Dedicated IPv4 addresses are available to users with Team and Enterprise subscriptions, while linked IPs are available to everyone.

![Plans](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dedicated.png)

If you have a Team or Enterprise subscription, you'll receive several personal dedicated IP addresses. Requests to these addresses are treated as "yours," and server-level configurations and filtering rules are applied accordingly. Dedicated IP addresses are much more secure and easier to manage. With linked IPs, you have to manually reconnect or use a special program every time the device's IP address changes, which happens after every reboot.

## Why do you need a dedicated IP?

Unfortunately, the technical specifications of the connected device may not always allow you to set up an encrypted private AdGuard DNS server. In this case, users will have to use standard unencrypted DNS. There are two ways to set up AdGuard DNS: [using linked IPs](/private-dns/connect-devices/other-options/linked-ip.md) and using dedicated IPs.

The instructions below explain how to connect a dedicated IP to the device:

## Connect AdGuard DNS using dedicated IPs

1. Open Dashboard.
1. Add a new device or open the settings of a previously created device.
1. Select *Use server addresses*.
1. Next, open *Plain DNS Server Addresses*.
1. Select the server you wish to use.
1. To bind a dedicated IPv4 address, click *Assign*.
1. If you want to use a dedicated IPv6 address, click the Copy button.

    ![Copy address](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dedicated_step7.png)

1. Copy and paste the selected dedicated address into the device configurations.