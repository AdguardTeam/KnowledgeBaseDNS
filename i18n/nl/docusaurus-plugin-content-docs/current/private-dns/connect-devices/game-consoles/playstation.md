---
title: PlayStation PS4/PS5
sidebar_position: 4
---

Game consoles do not support encrypted DNS, but they are well suited for setting up Public AdGuard DNS or Private AdGuard DNS via a linked IP address.

It is likely that your router supports the use of encrypted DNS servers, so you can always configure Private AdGuard DNS on it and connect your game console to it.

[How to configure your router](/private-dns/connect-devices/routers/routers.md)

## Connect AdGuard DNS

Configure your game console to use a public AdGuard DNS server or configure it via linked IP.

### Voor PlayStation 4

1. Zet je PS4-console aan en meld je aan bij je account.
2. From the home screen, select the gear icon located in the top row.
3. Ga naar _Instellingen_ → _Netwerk_ → _Instellingen_.
4. Select _Set Up Internet Connection_.
5. Kies _Gebruik een LAN-kabel_ → _Gemakkelijk_.
6. Selecteer _Handmatig_ en selecteer vervolgens _Automatisch_ voor _IP-adresinstellingen_.
7. For _DHCP Host Name_, select _Do Not Specify_.
8. For _DNS Settings_, select _Manual_.
9. In the _DNS Server_ field, enter one of the following DNS server addresses:
   - `94.140.14.49`
   - `94.140.14.59`
10. Select _Next_ to continue.
11. On the _MTU Settings_ screen, select _Automatic_.
12. On the _Proxy Server_ screen, select _Do Not Use_.
13. Select _Test Internet Connection_ to test your new DNS settings.
14. Zodra de test is voltooid en je "Internetverbinding: geslaagd" ziet, bewaar je jouw instellingen.

### Voor PlayStation 5

1. Zet je PS5-console aan en meld je aan bij je account.
2. Selecteer in het startscherm het tandwielpictogram in de bovenste rij.
3. Ga naar _Instellingen_ → _Netwerk_ → _Instellingen_.
4. Selecteer _Internetverbinding instellen_.
5. Selecteer _Bekabeld LAN instellen_ → _Verbinden_.
6. Selecteer _Handmatig_ en selecteer vervolgens _Automatisch_ voor _IP-adresinstellingen_.
7. Selecteer bij _DHCP-hostnaam_ de optie _Niet opgeven_.
8. Selecteer bij _DNS-instellingen_ de optie _Handmatig_.
9. Voer in het veld _DNS-server_ een van de volgende DNS-serveradressen in:
   - `94.140.14.49`
   - `94.140.14.59`
10. Selecteer _Volgende_ om door te gaan.
11. Selecteer in het _MTU-instellingen_ scherm de optie _Automatisch_.
12. Selecteer in het scherm _Proxyserver_ de optie _Niet gebruiken_.
13. Selecteer _Internetverbinding testen_ om jouw nieuwe DNS-instellingen te testen.
14. Zodra de test is voltooid en je "Internetverbinding: geslaagd" ziet, bewaar je jouw instellingen.

It would be preferable to use linked IP (or dedicated IP if you have a Team subscription):

- [Toegewezen IP's](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Gekoppelde IP's](/private-dns/connect-devices/other-options/linked-ip.md)
