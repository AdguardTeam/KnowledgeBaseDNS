---
title: DNS-over-HTTPS with authentication
sidebar_position: 4
---

## Why it is useful

DNS-over-HTTPS with authentication allows you to set a username and password for accessing your chosen server.

This helps prevent unauthorized users from accessing it and enhances security. Additionally, you can restrict the use of other protocols for specific profiles. This feature is particularly useful when your DNS server address is known to others. By adding a password, you can block access and ensure that only you can use it.

## How to set it up

:::note Compatibility

This feature is supported by [AdGuard DNS Client](/dns-client/overview.md) as well as [AdGuard apps](https://adguard.com/de/welcome.html).

:::

1. Open Dashboard.
1. Add a device or go to the settings of a previously created device.
1. Click *Use DNS server addresses* and open the *Encrypted DNS server addresses* section.
1. Configure DNS-over-HTTPS with authentication as you like.
1. Reconfigure your device to use this server in the AdGuard DNS Client or one of the AdGuard apps.
1. To do this, copy the address of the encrypted server and paste it into the AdGuard app or AdGuard DNS Client settings.
    ![Copy address *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/doh_step6.png)
1. You can also deny the use of other protocols.
    ![Deny protocols *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/doh_step7.png)
