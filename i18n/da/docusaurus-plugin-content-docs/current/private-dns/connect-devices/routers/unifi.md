---
title: UniFi
sidebar_position: 10
---

UiFi-routeren (almindeligvis kendt som Ubiquitis UniFi-serie) har en række fordele, der gør den særligt velegnet til hjemme-, erhvervs- og virksomhedsmiljøer.

Den nyere UniFi-firmware har for nylig tilføjet understøttelse af DNS-over-HTTPS. UniFi betegner denne funktion som _Krypteret DNS_.

## Opsæt DNS-over-HTTPS

Følg disse vejledninger, hvis UniFi-routeren understøtter DNS-over-HTTPS.

UiFi-routere bruger en DNS Stamp URL til at angive DNS-over-HTTPS URL'en. Denne URL skal beregnes vha. den private DNS-over-HTTPS URL.

Hent DNS-over-HTTPS URL'en, der bruges til at beregne DNS Stamp URL'en.

1. Gå til AdGuard DNS Private-kontrolpanelet.
2. Fortsæt til _Krypteret DNS_ → _Tilpasset_ og angiv flg. DNS-serverindstillinger:
   - Enhedstype: 'Router'
   - Enhedsmærke: 'Unifi'
   - Enhedsnavn: Benyt det aktuelle Unifi-enhedsnavn
3. Klik på _Næste_.
4. Rul til _Anvend DNS-serveradresser_ → _DNS-over-HTTPS_ og notér DNS-over-HTTPS URL'en (f.eks. https://d.adguard-dns.com/dns-query/123456abc).

Generér et DNS-stempel vha. [DNSCrypt DNS Stempel Calculator](https://dnscrypt.info/stamps/), og indstil det:

1. Protokol: DNS-over-HTTPS
2. Værtsnavn: d.adguard-dns.com
3. Sti: /dns-query/123456abc (erstat 123456abc med den værdi, man har hentet fra sit AdGuard DNS Private-kontrolpanel)
4. Afmarkér
   - Intet filter
   - Ingen logger
5. Kopiér DNS Stamp URL'en (f.eks. sdns://AgcAAAAAA…)

Slå DNS-over-HTTPS til i UniFi

1. Log ind på Ubiquiti UniFi-controlleren.
2. Gå til _Indstillinger_ → _Sikkerhed_.
3. Klik på _Beskyttelse_.
4. Fortsæt til _Krypteret DNS_ → _Tilpasset_ og angiv flg. DNS-serveradresser.
   - Servernavn: 'AdGuard DNS'
   - DNS Stamp: DNS Stamp URL kopieret fra ovenfor
5. Klik på _Gem_.

## Brug routerens håndteringspanel

Brug denne vejledning, hvis UniFi-routeren ikke understøtter opsætning af DNS-over-HTTPS eller DNS-over-TLS.

1. Log ind på Ubiquiti UniFi-controlleren.
2. Gå til _Indstillinger_ → _Netværk_.
3. Klik på _Redigér netværk_ → _WAN_.
4. Fortsæt til _Almindelige indstillinger_ → _DNS-server_, og angiv flg. DNS-serveradresser.
   - IPv4: `94.140.14.49` and `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
5. Klik på _Gem_.
6. Returnér til _Netværk_.
7. Vælg _Redigér netværk_ → _LAN_.
8. Find _DHCP-navneserver_ og vælg _Manuel_.
9. Angiv gateway-adressen i feltet _DNS Server 1_. Alternativt kan AdGuard DNS-serveradresserne angives i felterne _DNS-server 1_ og _DNS-server 2_:
   - IPv4: `94.140.14.49` and `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
10. Gem indstillingerne.
11. Link IP'en (eller den dedikerede IP, hvis man har et Team-abonnement).
    - [Dedikerede IP'er](private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linkede IP'er](private-dns/connect-devices/other-options/linked-ip.md)
