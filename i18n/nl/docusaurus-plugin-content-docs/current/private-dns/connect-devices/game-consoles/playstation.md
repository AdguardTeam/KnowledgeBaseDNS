---
title: PlayStation PS4/PS5
sidebar_position: 4
---

Game consoles do not support encrypted DNS, but they are well suited for setting up Public AdGuard DNS or Private AdGuard DNS via a linked IP address.

It is likely that your router supports the use of encrypted DNS servers, so you can always configure Private AdGuard DNS on it and connect your game console to it.

[How to configure your router](/private-dns/connect-devices/routers/routers.md)

## Connect AdGuard DNS

Configure your game console to use a public AdGuard DNS server or configure it via linked IP:

1. Turn on your PS4/PS5 console and sign in to your account.
2. From the home screen, select the gear icon located in the top row.
3. In the _Settings_ menu, select _Network_.
4. Select _Set Up Internet Connection_.
5. Choose _Use Wi-Fi_ or _Use a LAN Cable_, depending on your network setup.
6. Select _Custom_ and then select _Automatic_ for _IP Address Settings_.
7. For _DHCP Host Name_, select _Do Not Specify_.
8. For _DNS Settings_, select _Manual_.
9. In the _DNS Server_ field, enter one of the following DNS server addresses:
   - `94.140.14.49`
   - `94.140.14.59`
10. Select _Next_ to continue.
11. On the _MTU Settings_ screen, select _Automatic_.
12. On the _Proxy Server_ screen, select _Do Not Use_.
13. Select _Test Internet Connection_ to test your new DNS settings.
14. Once the test is complete and you see "Internet Connection: Successful", save your settings.

It would be preferable to use linked IP (or dedicated IP if you have a Team subscription):

- [Toegewezen IP's](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Gekoppelde IP's](/private-dns/connect-devices/other-options/linked-ip.md)
