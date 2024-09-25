---
title: Steam Deck
sidebar_position: 5
---

Game consoles do not support encrypted DNS, but they are well suited for setting up Public AdGuard DNS or Private AdGuard DNS via a linked IP address.

It is likely that your router supports the use of encrypted DNS servers, so you can always configure Private AdGuard DNS on it and connect your game console to it.

[How to configure your router](/private-dns/connect-devices/routers/routers.md)

## Connect AdGuard DNS

Configure your game console to use a public AdGuard DNS server or configure it via linked IP:

1. Open the Steam Deck settings by clicking the gear icon in the upper right corner of the screen.
1. Click *Network*.
1. Click the gear icon next to the network connection you want to configure.
1. Select IPv4 or IPv6, depending on the type of network you're using.
1. Select *Automatic (DHCP) addresses only* or *Automatic (DHCP)*.
1. In the *DNS Server* field, enter one of the following DNS server addresses:
    * `94.140.14.49`
    * `94.140.14.59`
1. Save the changes.

It would be preferable to use linked IP (or dedicated IP if you have a Team subscription):

* [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
* [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
