---
title: PlayStation PS4/PS5
sidebar_position: 4
---

Les consoles de jeux ne prennent pas en charge le DNS crypté, mais elles sont bien adaptées à la configuration de l'AdGuard DNS public ou de l'AdGuard DNS privé via une adresse IP liée.

Il est probable que votre routeur prenne en charge l'utilisation de serveurs DNS cryptés, vous pouvez donc toujours configurer l'AdGuard DNS privé dessus et connecter votre console de jeux à celui-ci.

[Comment configurer votre routeur](/private-dns/connect-devices/routers/routers.md)

## Connectez AdGuard DNS

Configure your game console to use a public AdGuard DNS server or configure it via linked IP.

### For PlayStation 4

1. Turn on your PS4 console and sign in to your account.
2. From the home screen, select the gear icon located in the top row.
3. Go to _Settings_ → _Network_ → _Settings_.
4. Select _Set Up Internet Connection_.
5. Select _Use a LAN Cable_ → _Easy_.
6. Select _Manual_ and then select _Automatic_ for _IP Address Settings_.
7. For _DHCP Host Name_, select _Do Not Specify_.
8. For _DNS Settings_, select _Manual_.
9. Dans le champ _Serveur DNS_, saisissez l'une des adresses de serveur DNS suivantes :
    - `94.140.14.49`
    - `94.140.14.59`
10. Select _Next_ to continue.
11. On the _MTU Settings_ screen, select _Automatic_.
12. On the _Proxy Server_ screen, select _Do Not Use_.
13. Select _Test Internet Connection_ to test your new DNS settings.
14. Once the test is complete and you see “Internet Connection: Successful”, save your settings.

### For PlayStation 5

1. Turn on your PS5 console and sign in to your account.
2. From the home screen, select the gear icon located in the top row.
3. Go to _Settings_ → _Network_ → _Settings_.
4. Select _Set Up Internet Connection_.
5. Select _Set Up Wired LAN_ → _Connect_.
6. Select _Manual_ and then select _Automatic_ for _IP Address Settings_.
7. For _DHCP Host Name_, select _Do Not Specify_.
8. For _DNS Settings_, select _Manual_.
9. Dans le champ _Serveur DNS_, saisissez l'une des adresses de serveur DNS suivantes :
    - `94.140.14.49`
    - `94.140.14.59`
10. Select _Next_ to continue.
11. On the _MTU Settings_ screen, select _Automatic_.
12. On the _Proxy Server_ screen, select _Do Not Use_.
13. Select _Test Internet Connection_ to test your new DNS settings.
14. Once the test is complete and you see “Internet Connection: Successful”, save your settings.

Il serait préférable d'utiliser une IP liée (ou une IP dédiée si vous avez un abonnement Équipe) :

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
