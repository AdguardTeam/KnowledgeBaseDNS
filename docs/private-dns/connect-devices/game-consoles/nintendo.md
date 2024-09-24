---
title: Nintendo
sidebar_position: 2
---

Game consoles do not support encrypted DNS, but they are well suited for setting up a public AdGuard DNS or a private AdGuard DNS via linked IP address.

It is likely that your router supports the use of encrypted DNS servers, so you can always configure Private AdGuard DNS on it and connect your game console to it.

You can find instructions on how to configure your router in [this section](/private-dns/connect-devices/routers/routers.md).

:::note Compatibility

Applies to New Nintendo 3DS, New Nintendo 3DS XL, New Nintendo 2DS XL, Nintendo 3DS, Nintendo 3DS XL, and Nintendo 2DS.

:::

## Connect AdGuard DNS

Configure your game console to use a public AdGuard DNS server or configure it via linked IP:

1. From the home menu, select System Settings.
1. Go to *Internet Settings* → *Connection Settings*.
1. Select the connection file, then select *Change Settings*.
1. Select *DNS*, then select *Set Up*.
1. Set *Auto-Obtain DNS* to *No*.
1. Select *Detailed Setup*, then *Primary DNS*. Hold down the left arrow to delete the existing DNS.
1. In the *DNS Server* field, enter one of the following DNS server addresses:

    94.140.14.49

    94.140.14.59

1. Save the settings.

It would be preferable to use linked IP (or link your dedicated IP if you're using a Team subscription):

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
