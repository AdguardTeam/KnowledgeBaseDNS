---
title: Linux
sidebar_position: 6
---

For at tilslutte en Linux-enhed til AdGuard DNS, føj den først til _Kontrolpanel_:

1. Gå til _Kontrolpanel_ og klik på _Tilslut ny enhed_.
2. Vælg Linux i rullemenuen _Enhedstype_.
3. Navngiv enheden.
   ![Tilslutning af enhed \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/choose_linux.png)

## Benyt AdGuard DNS CLI

AdGuard DNS CLI er et tværplatforms konsolværktøj, der muliggør brug af krypterede DNS-protokoller til at tilgå AdGuard DNS.

Der kan læses mere om dette i den [relaterede artikel](/dns-client/overview/).

:::note

Der kan [bruges AdGuard DNS CLI til automatisk enhedstilslutning][agdnscli-autodevice].

:::

[agdnscli-autodevice]: /dns-client/configuration.md#dns-upstream

## Benyt AdGuard DNS CLI

Der kan opsættes Private AdGuard DNS vha. AdGuard VPN CLI (kommandolinjegrænseflade). Det kræver brug af Terminal at komme i gang med AdGuard VPN CLI.

1. Installér AdGuard VPN CLI ved at følge [denne vejledning](https://adguard-vpn.com/kb/adguard-vpn-for-linux/installation/).
2. Gå til [Indstillinger](https://adguard-vpn.com/kb/adguard-vpn-for-linux/settings/).
3. For at indstille en bestemt DNS-server, brug kommandoen: `adguardvpn-cli config set-dns <server_address>`, hvor `<server_address>` er adressen på den private server.
4. Aktivér DNS-indstillingerne ved at indtaste `adguardvpn-cli config set-system-dns on`.

## Opsæt manuelt på Ubuntu (linket IP eller dedikeret IP kræves)

1. Klik på _System_ → _Indstillinger_ → _Netværk_.
2. Vælg fanen _Trådløst_ og dernæst det tilsluttede netværk.
3. Gå til _IPv4_.
4. Indstil _Automatisk (DHCP)_ til _Manuel_.
5. Skift de listede DNS-adresser til flg.:
   - `94.140.14.49`
   - `94.140.14.59`
6. Klik på _Anvend_.
7. Gå til _IPv6_.
8. Indstil _Automatisk_ til _Manuel_.
9. Skift de listede DNS-adresser til flg.:
   - `2a10:50c0:0:0:0:0:ded:ff`
   - `2a10:50c0:0:0:0:0:dad:ff`
10. Klik på _Anvend_.
11. Link IP-adressen (eller den dedikerede IP, hvis et Team-abonnement anvendes):
    - [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md)

## Opsæt manuelt på Debian (linket IP eller dedikeret IP kræves)

1. Åbn Terminal.
2. Skriv på kommandolinjen: `su`.
3. Angiv `admin`-adgangskoden.
4. Skriv på kommandolinjen: `nano /etc/resolv.conf`.
5. Erstat de viste DNS-adresser med flg.:
   - IPv4: `94.140.14.49 and 94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff and 2a10:50c0:0:0:0:0:dad:ff`
6. Tryk på _Ctrl + O_ for at gemme dokumentet.
7. Tryk på _Retur_.
8. Tryk på _Ctrl + X_ for at gemme dokumentet.
9. Skriv på kommandolinjen: `/etc/init.d/networking restart`.
10. Tryk på _Retur_.
11. Luk Terminal.
12. Link IP-adressen (eller den dedikerede IP, hvis et Team-abonnement anvendes):
    - [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md)

## Benyt dnsmasq

1. Installér dnsmasq via flg. kommandoer:

   `sudo apt updatesudo`

   `apt install`

   `dnsmasqsudo nano /etc/dnsmasq.conf`

2. Benyt flg. kommandoer i dnsmasq.conf:

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

Ses en notifikation om, at man ikke er forbundet til AdGuard DNS, er det mest sandsynlige, at den port, som dnsmasq kører på, er optaget af andre tjenester. Benyt [denne vejledning](https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#bindinuse) til at løse problemet.

:::

## Benyt EDNS (Udvidet DNS)

EDNS udvider DNS-protokollen, hvilket muliggør større UDP-pakker til transport af yderligere data. I AdGuard DNS muliggør det at videregive DeviceID i almindelig DNS vha. en ekstra parameter.

DeviceID, en ottecifret hexadecimal identifikator (f.eks. `1a2b3c4d`), assisterer med at linke DNS-forespørgsler til specifikke enheder. Ved krypteret DNS, er denne ID en del af domænet (f.eks. `1a2b3c4d.d.adguard-dns.com`). Ved ukrypteret DNS, kræves EDNS for at overføre denne identifikator.

AdGuard DNS bruger EDNS til at hente DeviceID ved at lede efter indstillingstallet `65074`. Hvis en sådan mulighed findes, læses DeviceID derfra. Til dette kan der bruges `dig`-kommandoen i terminal:

```sh
dig @94.140.14.49 'www.example.com' A IN +ednsopt=65074:3031323334353637
```

Her er `65074` indstillings-ID'en, og `3031323334353637` er dens værdi i hex format (DeviceID: `01234567`).

Færdig! DeviceID skal vises.

:::note

`dig`-kommandoen er blot et eksempel, der kan bruge enhver DNS-software med evnen til at tilføje EDNS-indstillinger for at udføre denne handling.

:::

## Brug almindelig DNS

Foretrækkes det ikke at bruge ekstra software til DNS-opsætning, kan der vælges ukrypteret DNS. Der er to valgmuligheder: Brug linkede IP'er eller dedikerede IP'er:

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md)
