---
title: DNS-over-HTTPS with authentication
sidebar_position: 4
---

## Why it is useful

DNS-over-HTTPS with authentication allows you to set a username and password for accessing your chosen server.

This helps prevent unauthorized users from accessing it and enhances security. Additionally, you can restrict the use of other protocols for specific profiles. This feature is particularly useful when your DNS server address is known to others. By adding a password, you can block access and ensure that only you can use it.

## Come configurarlo

:::note Compatibilità

This feature is supported by [AdGuard DNS Client](/dns-client/overview.md) as well as [AdGuard apps](https://adguard.com/welcome.html).

:::

1. Apri cruscotto.
2. Add a device or go to the settings of a previously created device.
3. Click _Use DNS server addresses_ and open the _Encrypted DNS server addresses_ section.
4. Configure DNS-over-HTTPS with authentication as you like.
5. Reconfigure your device to use this server in the AdGuard DNS Client or one of the AdGuard apps.
6. Per farlo, copia l'indirizzo del server crittografato e incollalo nelle impostazioni dell'app AdGuard o dell'AdGuard DNS Client.
   ![Copy address \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/doh_step6.png)
7. You can also deny the use of other protocols.
   ![Deny protocols \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/deny_protocol.png)
