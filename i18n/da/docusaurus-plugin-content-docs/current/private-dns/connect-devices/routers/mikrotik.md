---
title: MikroTik
sidebar_position: 6
---

MikroTik routere bruger open-source RouterOS-operativsystemet, der leverer rutning, trådløst netværk og firewall-tjenester til hjemmenetværk og små kontorer.

## Opsæt DNS-over-HTTPS

1. Tilgå MikroTik-routeren:
   - Åbn en webbrowser og gå til routerens IP-adresse (oftest `192.168.88.1`)
   - Brug alternativt Winbox til at oprette forbindelse til MikroTik-routeren
   - Angiv administratorbrugernavn og -adgangskode
2. Import af rodcertifikat:
   - Download den seneste pakke af betroede rodcertifikater: [https://curl.se/docs/caextract.html](https://curl.se/docs/caextract.html)
   - Gå til _Filer_. Klik på _Upload_ og vælg den downloadede cacert.pem-certifikatpakke
   - Gå til _System_ → _Certifikater_ → _Import_
   - Vælg i feltet _Filnavn_ den uploadede certifikatfil
   - Klik på _Importér_
3. Opsæt DNS-over-HTTPS:
   - Gå til _IP_ → _DNS_
   - Tilføj i afsnittet _Servere_ flg. AdGuard DNS-servere:
     - `94.140.14.49`
     - `94.140.14.59`
   - Sæt _Tillad fjernforespørgsler_ til _Ja_ (dette er afgørende for, at DoH kan fungere)
   - Angiv i feltet _Brug DoH-server_ URL'en til den private AdGuard DNS-server: `https://d.adguard-dns.com/dns-query/*******`
   - Klik på _OK_
4. Opret Statiske DNS-poster:
   - Klik i afsnittet _DNS-indstillinger_ på _Statisk_
   - Klik på _Tilføj ny_
   - Sæt _Navn_ til d.adguard-dns.com
   - Sæt _type_ til A
   - Sæt _Adresse_ til `94.140.14.49`
   - Sæt _TTL_ til 1d 00:00:00
   - Gentag processen for at oprette en identisk post, men med _Adresse_ sat til `94.140.14.59`
5. Deaktivér Peer DNS på DHCP-klienten:
   - Gå til _IP_ → _DHCP-klient_
   - Dobbeltklik klienten, der bruges til internetforbindelsen (normalt på WAN-grænsefladen)
   - Afmarkér _Anvend Peer DNS_
   - Klik på _OK_
6. Link IP'en.
7. Test og bekræft:
   - MikroTik-routeren skal muligvis genstartes for at effektuere alle ændringer
   - Ryd webbrowserens DNS-cache. Der kan bruges et værktøj, såsom [https://www.dnsleaktest.com](https://www.dnsleaktest.com/), til at tjekke, om DNS-forespørgslerne nu rutes igennem AdGuard

## Brug routerens håndteringspanel

Brug denne vejledning, hvis Keenetic-routeren ikke understøtter opsætning af DNS-over-HTTPS eller DNS-over-TLS:

1. Åbn routerens admin-panel. Den kan tilgås på `192.168.1.1` eller `192.168.0.1`.
2. Angiv routerens administratorbrugernavn (normalt admin) samt adgangskode.
3. Åbn _Webfig_ → _IP_ → _DNS_.
4. Vælg _Servere_ og angiv en af flg. DNS-serveradresser.
   - IPv4: `94.140.14.49` and `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
5. Gem indstillingerne.
6. Link IP'en (eller den dedikerede IP, hvis man har et Team-abonnement).

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linket IP'er](/private-dns/connect-devices/other-options/linked-ip.md)
