---
title: Access settings
sidebar_position: 3
---

By configuring Access settings, you can protect your AdGuard DNS from unauthorized access. For example, you are using a dedicated IPv4 address, and attackers using sniffers have recognized it and are bombarding it with requests. No problem, just add the pesky domain or IP address to the list and it won't bother you anymore!

Blocked requests will not be displayed in the Query Log and are not counted in the total limit.

## Come configurarlo

### Allowed clients

This setting allows you to specify which clients can use your DNS server. It has the highest priority. For example, if the same IP address is on both the denied and allowed list, it will still be allowed.

### Disallowed clients

Here you can list the clients that are not allowed to use your DNS server. You can block access to all clients and use only selected ones. To do this, add two addresses to the disallowed clients: `0.0.0.0.0/0` and `::/0`. Then, in the _Allowed clients_ field, specify the addresses that can access your server.

:::note Importante

Before applying the access settings, make sure you're not blocking your own IP address. If you do, you won't be able to access the network. Se ciò accade, disconnetti semplicemente dal server DNS, vai alle impostazioni di accesso e regola le configurazioni di conseguenza.

:::

### Disallowed domains

Here you can specify the domains (as well as wildcard and DNS filtering rules) that will be denied access to your DNS server.

![Access settings \*border](https://cdn.adtidy.org/content/release_notes/dns/v2-5/AS-en.png)

To display IP addresses associated with DNS requests in the Query log, select the _Log IP addresses_ checkbox. To do this, open _Server settings_ → _Advanced settings_.
