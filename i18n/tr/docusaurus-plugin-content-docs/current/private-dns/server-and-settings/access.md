---
title: Erişim ayarları
sidebar_position: 3
---

Erişim ayarlarını yapılandırarak AdGuard DNS'inizi yetkisiz erişime karşı koruyabilirsiniz. For example, you are using a dedicated IPv4 address, and attackers using sniffers have recognized it and are bombarding it with requests. No problem, just add the pesky domain or IP address to the list and it won't bother you anymore!

Blocked requests will not be displayed in the Query Log and are not counted in the total limit.

## Nasıl ayarlanır

### İzin verilen istemciler

Bu ayar, hangi istemcilerin DNS sunucunuzu kullanabileceğini belirlemenizi sağlar. En yüksek önceliğe sahiptir. Örneğin, aynı IP adresi hem reddedilenler hem de izin verilenler listesindeyse, yine de izin verilecektir.

### İzin verilmeyen istemciler

Burada DNS sunucunuzu kullanmasına izin verilmeyen istemcileri listeleyebilirsiniz. You can block access to all clients and use only selected ones. To do this, add two addresses to the disallowed clients: `0.0.0.0.0/0` and `::/0`. Then, in the _Allowed clients_ field, specify the addresses that can access your server.

:::note Önemli

Before applying the access settings, make sure you're not blocking your own IP address. If you do, you won't be able to access the network. If that happens, just disconnect from the DNS server, go to the access settings, and adjust the configurations accordingly.

:::

### İzin verilmeyen alan adları

Here you can specify the domains (as well as wildcard and DNS filtering rules) that will be denied access to your DNS server.

![Access settings \*border](https://cdn.adtidy.org/content/release_notes/dns/v2-5/AS-en.png)

To display IP addresses associated with DNS requests in the Query log, select the _Log IP addresses_ checkbox. To do this, open _Server settings_ → _Advanced settings_.
