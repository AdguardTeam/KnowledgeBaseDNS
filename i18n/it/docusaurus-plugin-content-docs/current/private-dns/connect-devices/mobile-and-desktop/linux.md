---
title: Linux
sidebar_position: 6
---

Per collegare un dispositivo Linux ad AdGuard DNS, prima aggiungilo a _Cruscotto_:

1. Vai su _Cruscotto_ e fai clic su _Connetti nuovo dispositivo_.
2. Nel menu a tendina _Tipo dispositivo_, seleziona Linux.
3. Assegna un nome al dispositivo.
   ![Collegamento dispositivo \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/choose_linux.png)

## Usa il Client AdGuard DNS

Il Client AdGuard DNS è un'utilità console multipiattaforma che ti consente di utilizzare protocolli DNS crittografati per accedere a AdGuard DNS.

Puoi saperne di più in [questo articolo correlato](/dns-client/overview/).

## Usa AdGuard VPN CLI

Puoi configurare AdGuard DNS privato utilizzando AdGuard VPN CLI (interfaccia a riga di comando). Per iniziare con AdGuard VPN CLI, dovrai utilizzare il Terminale.

1. Installa AdGuard VPN CLI seguendo [queste istruzioni](https://adguard-vpn.com/kb/adguard-vpn-for-linux/installation/).
2. Go to [Settings](https://adguard-vpn.com/kb/adguard-vpn-for-linux/settings/).
3. Per impostare un server DNS specifico, usa il comando: `adguardvpn-cli config set-dns <server_address>`, dove `<server_address>` è l'indirizzo del tuo server privato.
4. Attiva le impostazioni DNS inserendo `adguardvpn-cli config set-system-dns on`.

## Configura manualmente su Ubuntu (richiesta IP collegato o IP dedicato)

1. Click _System_ → _Settings_ → _Network_.
2. Seleziona la scheda _Wireless_, quindi scegli la rete a cui sei connesso.
3. Go to _IPv4_.
4. Set _Automatic (DHCP)_ to _Manual_.
5. Change the listed DNS addresses to the following addresses:
   - `94.140.14.49`
   - `94.140.14.59`
6. Clicca su _Applica_.
7. Vai a _IPv6_.
8. Set _Automatic_ to _Manual_.
9. Change the listed DNS addresses to the following addresses:
   - `2a10:50c0:0:0:0:0:ded:ff`
   - `2a10:50c0:0:0:0:0:dad:ff`
10. Clicca su _Applica_.
11. Collega il tuo indirizzo IP (o il tuo IP dedicato se hai un abbonamento Team):
    - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)

## Configura manualmente su Debian (richiesta IP collegato o IP dedicato)

1. Apri il Terminale.
2. Nella riga di comando, digita: `su`.
3. Inserisci la tua password `admin`.
4. Nella riga di comando, digita: `nano /etc/resolv.conf`.
5. Modifica gli indirizzi DNS elencati come segue:
   - IPv4: `94.140.14.49 e 94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff e 2a10:50c0:0:0:0:0:dad:ff`
6. Premi _Ctrl + O_ per salvare il documento.
7. Premi _Invio_.
8. Premi _Ctrl + X_ per salvare il documento.
9. Nella riga di comando, digita: `/etc/init.d/networking restart`.
10. Premi _Invio_.
11. Chiudi il Terminale.
12. Collega il tuo indirizzo IP (o il tuo IP dedicato se hai un abbonamento Team):
    - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)

## Usa dnsmasq

1. Installa dnsmasq utilizzando i seguenti comandi:

   `sudo apt updatesudo`

   `apt install`

   `dnsmasqsudo nano /etc/dnsmasq.conf`

2. Usa i seguenti comandi in dnsmasq.conf:

   `no-resolv`

   `bogus-priv`

   `strict-order`

   `server=94.140.14.49`

   `server=94.140.14.59`

   `port=5353`

   `add-cpe-id={Your_Device_ID}`

3. Riavvia il servizio dnsmasq:

   `sudo service dnsmasq restart`

Tutto fatto! Il tuo dispositivo è connesso correttamente a AdGuard DNS.

:::note Importante

Se vedi una notifica che non sei connesso a AdGuard DNS, molto probabilmente la porta su cui dnsmasq è in esecuzione è occupata da altri servizi. Usa [queste istruzioni](https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#bindinuse) per risolvere il problema.

:::

## Use EDNS (Extended DNS)

EDNS extends the DNS protocol, enabling larger UDP packets to carry additional data. In AdGuard DNS, it allows passing DeviceID in plain DNS using an extra parameter.

DeviceID, an eight-digit hexadecimal identifier (e.g., `1a2b3c4d`), helps link DNS requests to specific devices. For encrypted DNS, this ID is part of the domain (e.g., `1a2b3c4d.d.adguard-dns.com`). For unencrypted DNS, EDNS is required to transfer this identifier.

AdGuard DNS uses EDNS to retrieve DeviceID by looking for option number `65074`. If such an option exists, it will read DeviceID from there. For this, you can use the `dig` command in the terminal:

```sh
dig @94.140.14.49 'www.example.com' A IN +ednsopt=65074:3031323334353637
```

Here, `65074` is the option ID, and `3031323334353637` is its value in hex format (DeviceID: `01234567`).

Tutto fatto! DeviceID should be displayed.

:::note

The `dig` command is merely an example, you can use any DNS software with an ability to add EDNS options to perform this action.

:::

## Usa DNS semplice

Se preferisci non utilizzare software aggiuntivo per la configurazione DNS, puoi optare per DNS non crittografati. Hai due opzioni: utilizzare IP collegati o IP dedicati:

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
