---
title: Universal instructions
sidebar_position: 2
---

Ecco alcune istruzioni generali per impostare AdGuard DNS privato sui router. You can refer to this guide if you can't find your specific router in the main list. Please note that the configuration details provided here are approximate and may differ from the settings on your particular model.

## Utilizza il pannello di amministrazione del tuo router

1. Open the preferences for your router. Usually you can access them from your browser. Depending on the model of your router, try entering one the following addresses:
   - I router Linksys e Asus di solito usano: [http://192.168.1.1](http://192.168.1.1/)
   - I router Netgear di solito usano: [http://192.168.0.1](http://192.168.0.1/) o [http://192.168.1.1](http://192.168.1.1/) I router D-Link di solito usano [http://192.168.0.1](http://192.168.0.1/)
   - I router Ubiquiti di solito utilizzano: [http://unifi.ubnt.com](http://unifi.ubnt.com/)

2. Enter the router's password.

   :::note Importante

   If the password is unknown, you can often reset it by pressing a button on the router; it will also reset the router to its factory settings. Some models have a dedicated management application, which should already be installed on your computer.

   :::

3. Find where DNS settings are located in the router's admin console. Sostituisci gli indirizzi DNS elencati con gli indirizzi seguenti:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`

4. Salva le impostazioni.

5. Collega il tuo IP (o il tuo IP dedicato se hai un abbonamento Team).

- [IP dedicate](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP collegate](/private-dns/connect-devices/other-options/linked-ip.md)
