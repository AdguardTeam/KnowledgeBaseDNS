---
title: Access settings
sidebar_position: 3
---

By configuring Access settings, you can protect your AdGuard DNS from unauthorized access. Par exemple, vous utilisez une adresse IPv4 dédiée et les attaquants utilisant des sniffers l’ont reconnue et la bombardent de requêtes. No problem, just add the pesky domain or IP address to the list and it won't bother you anymore!

Les requêtes bloquées ne seront pas affichées dans le Journal des requêtes et ne sont pas comptées dans la limite totale.

## How to set it up

### Allowed clients

This setting allows you to specify which clients can use your DNS server. It has the highest priority. Par exemple, si la même adresse IP figure à la fois sur la liste des refusés et des autorisés, elle sera quand même autorisée.

### Disallowed clients

Here you can list the clients that are not allowed to use your DNS server. You can block access to all clients and use only selected ones. To do this, add two addresses to the disallowed clients: `0.0.0.0.0/0` and `::/0`. Then, in the _Allowed clients_ field, specify the addresses that can access your server.

:::note Important

Before applying the access settings, make sure you're not blocking your own IP address. If you do, you won't be able to access the network. If that happens, just disconnect from the DNS server, go to the access settings, and adjust the configurations accordingly.

:::

### Disallowed domains

Here you can specify the domains (as well as wildcard and DNS filtering rules) that will be denied access to your DNS server.

![Access settings \*border](https://cdn.adtidy.org/content/release_notes/dns/v2-5/AS-en.png)

To display IP addresses associated with DNS requests in the Query log, select the _Log IP addresses_ checkbox. To do this, open _Server settings_ → _Advanced settings_.
