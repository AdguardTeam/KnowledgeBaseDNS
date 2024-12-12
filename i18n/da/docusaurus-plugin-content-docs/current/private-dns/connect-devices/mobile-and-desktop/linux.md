---
title: Linux
sidebar_position: 6
---

For at tilslutte en Linux-enhed til AdGuard DNS, føj den først til _Kontrolpanel_:

1. Gå til _Kontrolpanel_ og klik på _Tilslut ny enhed_.
2. Vælg Linux i rullemenuen _Enhedstype_.
3. Navngiv enheden.
   ![Tilslutning af enhed \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/choose_linux.png)

## Brug AdGuard DNS Client

AdGuard DNS Client er et tværplatforms konsolværktøj, der muliggør brug af krypterede DNS-protokoller til at få adgang til AdGuard DNS.

Man kan læse mere om dette i den [relaterede artikel](/dns-client/overview/).

## Brug AdGuard VPN CLI

Man kan opsætte Private AdGuard DNS vha. AdGuard VPN CLI (kommandolinjegrænseflade). For at komme i gang med AdGuard VPN CLI skal man bruge Terminal.

1. Installér AdGuard VPN CLI ved at følge [denne vejledning](https://adguard-vpn.com/kb/adguard-vpn-for-linux/installation/).
2. Gå til [Indstillinger](https://adguard-vpn.com/kb/adguard-vpn-for-linux/settings/).
3. For at indstille en bestemt DNS-server, brug kommandoen: `adguardvpn-cli config set-dns <server_address>`, hvor `<server_address>` er adressen på den private server.
4. Aktivér DNS-indstillingerne ved at indtaste `adguardvpn-cli config set-system-dns on`.

## Opsæt manuelt på Ubuntu (linket IP eller dedikeret IP kræves)

1. Klik på _System_ → _Præferencer_ → _Netværksforbindelser_.
2. Vælg fanen _Trådløst_ og dernæst det tilsluttede netværk.
3. Klik på _Redigér_ → _IPv4_.
4. Skift de listede DNS-adresser til flg.:
   - `94.140.14.49`
   - `94.140.14.59`
5. Slå _Autotilstand_ fra.
6. Klik på _Anvend_.
7. Gå til _IPv6_.
8. Skift de listede DNS-adresser til flg.:
   - `2a10:50c0:0:0:0:0:ded:ff`
   - `2a10:50c0:0:0:0:0:dad:ff`
9. Slå _Autotilstand_ fra.
10. Klik på _Anvend_.
11. Link IP-adressen (eller den dedikerede IP, hvis man har et Team-abonnement):
    - [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md)

## Opsæt manuelt på Debian (linket IP eller dedikeret IP kræves)

1. Åbn en Terminal.
2. Skriv på kommandolinjen: `su`.
3. Angiv `admin`-adgangskoden.
4. Skriv på kommandolinjen: `nano /etc/resolv.conf`.
5. Erstat de viste DNS-adresser med flg.:
   - IPv4: `94.140.14.49 og 94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff og 2a10:50c0:0:0:0:0:dad:ff`
6. Tryk på _Ctrl + O_ for at gemme dokumentet.
7. Tryk på _Retur_.
8. Tryk på _Ctrl + X_ for at gemme dokumentet.
9. Skriv på kommandolinjen: `/etc/init.d/networking restart`.
10. Tryk på _Retur_.
11. Luk Terminal.
12. Link IP-adressen (eller den dedikerede IP, hvis man har et Team-abonnement):
    - [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md)

## Brug dnsmasq

1. Installér dnsmasq vha. flg. kommandoer:

   `sudo apt updatesudo`

   `apt install`

   `dnsmasqsudo nano /etc/dnsmasq.conf`

2. Brug flg. kommandoer i dnsmasq.conf:

   `no-resolv`

   `bogus-priv`

   `strict-order`

   `server=94.140.14.49`

   `server=94.140.14.59`

   `port=5353`

   `add-cpe-id={Your_Device_ID}`

3. Genstart dnsmasq-tjenesten:

   `sudo service dnsmasq restart`

Færdig! Enheden er nu tilsluttet AdGuard DNS.

:::note Vigtigt

Ses en notifikation om, at man ikke er forbundet til AdGuard DNS, er det mest sandsynlige, at den port, som dnsmasq kører på, er optaget af andre tjenester. Brug [denne vejledning](https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#bindinuse) to solve the problem.

:::

## Brug almindelig DNS

Foretrækker man ikke at bruge ekstra software til DNS-opsætning, kan der vælges ikke-krypteret DNS. Man har to valg: Brug linkede IP'er eller dedikerede IP'er:

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md)
