---
title: Nintendo
sidebar_position: 2
---

Game consoles do not support encrypted DNS, but they are well suited for setting up Public AdGuard DNS or Private AdGuard DNS via a linked IP address.

It is likely that your router supports the use of encrypted DNS servers, so you can always configure Private AdGuard DNS on it and connect your game console to it.

[How to configure your router](/private-dns/connect-devices/routers/routers.md)

:::note Compatibility

Applies to New Nintendo 3DS, New Nintendo 3DS XL, New Nintendo 2DS XL, Nintendo 3DS, Nintendo 3DS XL, and Nintendo 2DS.

:::

## Connect AdGuard DNS

Configure your game console to use a public AdGuard DNS server or configure it via linked IP:

1. From the home menu, select _System Settings_.
2. Go to _Internet_ → _Internet Settings_ → _Connection Settings_.
3. Select your network from the list.
4. Select _Change Settings_ → _DNS Settings_.
5. Set _Automatic_ to _Manual_.
6. Select _Primary DNS_. Hold down the left arrow (B button) to delete the existing DNS.
7. In the _Primary DNS_ field, enter one of the following DNS server addresses:
   - `94.140.14.49`
   - `94.140.14.59`
8. Save the settings.

It would be preferable to use linked IP (or dedicated IP if you have a Team subscription):

- [Toegewezen IP's](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Gekoppelde IP's](/private-dns/connect-devices/other-options/linked-ip.md)
