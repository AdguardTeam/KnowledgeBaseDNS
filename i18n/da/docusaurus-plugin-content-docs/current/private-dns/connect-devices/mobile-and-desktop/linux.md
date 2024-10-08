---
title: Linux
sidebar_position: 6
---

To connect a Linux device to AdGuard DNS, first add it to _Dashboard_:

1. Go to _Dashboard_ and click _Connect new device_.
2. In the drop-down menu _Device type_, select Linux.
3. Name the device.
   ![Connecting device \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/choose_linux.png)

## Use AdGuard DNS Client

AdGuard DNS Client is a cross-platform console utility that allows you to use encrypted DNS protocols to access AdGuard DNS.

You can learn more about this in the [related article](/dns-client/overview/).

## Use AdGuard VPN CLI

You can set up Private AdGuard DNS using the AdGuard VPN CLI (command-line interface). To get started with AdGuard VPN CLI, you’ll need to use Terminal.

1. Install AdGuard VPN CLI by following [these instructions](https://adguard-vpn.com/kb/adguard-vpn-for-linux/installation/).
2. Access [settings](https://adguard-vpn.com/kb/adguard-vpn-for-linux/settings/).
3. To set a specific DNS server, use the command: `adguardvpn-cli config set-dns <server_address>`, where `<server_address>` is your private server’s address.
4. Activate the DNS settings by entering `adguardvpn-cli config set-system-dns on`.

## Configure manually on Ubuntu (linked IP or dedicated IP required)

1. Click _System_ → _Preferences_ → _Network Connections_.
2. Select the _Wireless_ tab, then choose the network you’re connected to.
3. Click _Edit_ → _IPv4_.
4. Change the listed DNS addresses to the following addresses:
   - `94.140.14.49`
   - `94.140.14.59`
5. Turn off _Auto mode_.
6. Click _Apply_.
7. Go to _IPv6_.
8. Change the listed DNS addresses to the following addresses:
   - `2a10:50c0:0:0:0:0:ded:ff`
   - `2a10:50c0:0:0:0:0:dad:ff`
9. Turn off _Auto mode_.
10. Click _Apply_.
11. Link your IP address (or your dedicated IP if you have a Team subscription):
    - [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)

## Configure manually on Debian (linked IP or dedicated IP required)

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
