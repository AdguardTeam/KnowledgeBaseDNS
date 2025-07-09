---
title: UniFi
sidebar_position: 10
---

De UiFi router, algemeen bekend als de Ubiquiti UniFi-serie, heeft een aantal voordelen die het bijzonder geschikt maken voor thuis-, zakelijk- en ondernemingsomgevingen.

De nieuwere UniFi-firmware heeft onlangs ondersteuning toegevoegd voor DNS-over-HTTPS. UniFi verwijst naar deze functie als _Versleutelde DNS_.

## DNS-over-HTTPS configureren

Volg deze instructies als je UniFi-router DNS-over-HTTPS ondersteunt.

UiFi-routers gebruiken een DNS Stamp URL om de DNS-over-HTTPS URL op te geven. Deze URL moet worden berekend met behulp van je privé DNS-over-HTTPS URL.

Verkrijg de DNS-over-HTTPS URL die wordt gebruikt om de DNS Stamp URL te berekenen.

1. Ga naar het AdGuard DNS Private Dashboard.
2. Ga naar _Versleutelde DNS_ → _Aangepast_ en voer de volgende DNS-serverinstellingen in:
    - Type apparaat: 'Router'
    - Merk apparaat: 'Unifi'
    - Device name: Use your Unifi device name
3. Klik op _Volgende_.
4. Blader naar _DNS-serveradressen gebruiken_ → _DNS-over-HTTPS_ en noteer de DNS-over-HTTPS URL (bijv. https://d.adguard-dns.com/dns-query/123456abc).

Generate a DNS stamp using the [DNSCrypt DNS Stamp Calculator](https://dnscrypt.info/stamps/) and set it.

1. Protocol: DNS-over-HTTPS
2. Hostnaam: d.adguard-dns.com
3. Pad: /dns-query/123456abc (vervang 123456abc door de waarde die je hebt verkregen via jouw AdGuard DNS Private Dashboard)
4. Vink uit
    - Geen filter
    - Geen logboeken
5. Copy the DNS stamp URL (e.g., sdns://AgcAAAAAA…)

Turn on DNS-over-HTTPS in UniFi.

1. Log in to the Ubiquiti UniFi controller.
2. Ga naar _Instellingen_ → _Beveiliging_.
3. Klik op _Bescherming_.
4. Ga naar _Versleutelde DNS_ → _Aangepast_ en voer de volgende DNS-serveradressen in.
    - Servernaam: 'AdGuard DNS'
    - DNS Stamp: DNS stamp URL copied from above
5. Click _Save_.

## Use your router admin panel

Use these instructions if your UniFi router does not support the DNS-over-HTTPS or DNS-over-TLS configuration.

1. Meld je aan bij de Ubiquiti UniFi-controller.
2. Go to _Settings_ → _Networks_.
3. Click _Edit Network_ → _WAN_.
4. Proceed to _Common Settings_ → _DNS Server_ and enter the following DNS server addresses:
    - IPv4: `94.140.14.49` and `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
5. Klik op _Opslaan_.
6. Return to _Network_.
7. Choose _Edit Network_ → _LAN_.
8. Find _DHCP Name Server_ and select _Manual_.
9. Enter your gateway address in the _DNS Server 1_ field. Alternatively, you can enter the AdGuard DNS server addresses in the _DNS Server 1_ and _DNS Server 2_ fields:
    - IPv4: `94.140.14.49` and `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
10. Save the settings.
11. Link your IP (or your dedicated IP if you have a Team subscription).
    - [Toegewezen IP's](private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Gekoppelde IP's](private-dns/connect-devices/other-options/linked-ip.md)
