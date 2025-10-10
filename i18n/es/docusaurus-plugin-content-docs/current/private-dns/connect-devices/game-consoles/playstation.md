---
title: PlayStation PS4/PS5
sidebar_position: 4
---

Las consolas de juegos no admiten DNS encriptados, pero son adecuadas para configurar DNS público de AdGuard o DNS privado de AdGuard a través de una dirección IP vinculada.

Es probable que tu router admita el uso de servidores DNS encriptados, por lo que siempre puedes configurar DNS privado de AdGuard en él y conectar tu consola de juegos a él.

[Cómo configurar tu router](/private-dns/connect-devices/routers/routers.md)

## Conectar AdGuard DNS

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
9. En el campo _Servidor DNS_, ingresa una de las siguientes direcciones de servidor DNS:
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
9. En el campo _Servidor DNS_, ingresa una de las siguientes direcciones de servidor DNS:
    - `94.140.14.49`
    - `94.140.14.59`
10. Select _Next_ to continue.
11. On the _MTU Settings_ screen, select _Automatic_.
12. On the _Proxy Server_ screen, select _Do Not Use_.
13. Select _Test Internet Connection_ to test your new DNS settings.
14. Once the test is complete and you see “Internet Connection: Successful”, save your settings.

Sería preferible usar IP vinculada (o IP dedicada si tienes una suscripción de Team):

 - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
 - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
