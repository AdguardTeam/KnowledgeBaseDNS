---
title: UniFi
sidebar_position: 10
---

The UiFi router, commonly known as the Ubiquiti UniFi series, has a number of advantages that make it particularly suitable for home, business, and enterprise environments.

The newer UniFi firmware recently added support for DNS-over-HTTPS. UniFi refers to this feature as _Encrypted DNS_.

## Configurazione di DNS-over-HTTPS

Follow these instructions if your UniFi router supports DNS-over-HTTPS.

UiFi routers use a DNS Stamp URL to specify the DNS-over-HTTPS URL. This URL must be calculated using your private DNS-over-HTTPS URL.

Obtain the DNS-over-HTTPS URL that is used to calculate the DNS Stamp URL.

1. Go to the AdGuard DNS Private Dashboard.
2. Proceed to _Encrypted DNS_ → _Custom_ and enter the following DNS server settings:
   - Device type: 'Router'
   - Device brand: 'Unifi'
   - Device name: Use your Unifi device name
3. Click _Next_.
4. Scroll to _Use DNS server addresses_ → _DNS-over-HTTPS_ and take note of the DNS-over-HTTPS URL (e.g., https://d.adguard-dns.com/dns-query/123456abc).

Generate a DNS stamp using the [DNSCrypt DNS Stamp Calculator](https://dnscrypt.info/stamps/) and set it.

1. Protocol: DNS-over-HTTPS
2. Host name: d.adguard-dns.com
3. Path: /dns-query/123456abc (replace 123456abc with the value obtained from your AdGuard DNS Private Dashboard)
4. Untick
   - No filter
   - No logs
5. Copy the DNS stamp URL (e.g., sdns://AgcAAAAAA…)

Turn on DNS-over-HTTPS in UniFi.

1. Accedi al controller Ubiquiti UniFi.
2. Go to _Settings_ → _Security_.
3. Click _Protection_.
4. Proceed to _Encrypted DNS_ → _Custom_ and enter the following DNS server addresses.
   - Server Name: 'AdGuard DNS'
   - DNS Stamp: DNS stamp URL copied from above
5. Clicca _Salva_.

## Utilizza il pannello di amministrazione del tuo router

Use these instructions if your UniFi router does not support the DNS-over-HTTPS or DNS-over-TLS configuration.

1. Accedi al controller Ubiquiti UniFi.
2. Vai in _Impostazioni_ → _Reti_.
3. Fai clic su _Modifica rete_ → _WAN_.
4. Proceed to _Common Settings_ → _DNS Server_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
5. Clicca _Salva_.
6. Ritorna alla _Rete_.
7. Scegli _Modifica rete_ → _LAN_.
8. Trova _DHCP Name Server_ e seleziona _Manuale_.
9. Inserisci il tuo indirizzo gateway nel campo _Server DNS 1_. Alternatively, you can enter the AdGuard DNS server addresses in the _DNS Server 1_ and _DNS Server 2_ fields:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
10. Salva le impostazioni.
11. Collega il tuo IP (o il tuo IP dedicato se hai un abbonamento Team).
    - [Dedicated IPs](private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linked IPs](private-dns/connect-devices/other-options/linked-ip.md)
