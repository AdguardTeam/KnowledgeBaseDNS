---
title: Overzicht
sidebar_position: 1
---

## Wat is AdGuard DNS?

AdGuard DNS is een gratis, op privacy gerichte DNS-resolver die een veilige verbinding biedt en ook volgers, advertenties, phishing en inhoud voor volwassenen kan blokkeren (optioneel). AdGuard DNS vereist geen installatie van applicaties. Het is makkelijk te gebruiken en kan moeiteloos op elk apparaat worden geïnstalleerd (smartphones, desktops, routers, gameconsoles, enz.).

## Openbare AdGuard DNS-servers

AdGuard DNS heeft drie verschillende soorten publieke servers. *Default* server is for blocking ads, trackers, malware and phishing websites. *Family protection* does the same, but also blocks websites with adult content and enforces *Safe search* option in browsers that provide it. *Non-filtering* provides a secure and reliable connection but doesn’t block anything. Gedetailleerde instructies voor het instellen van AdGuard DNS op elk apparaat vind je op [onze website](https://adguard-dns.io/public-dns.html). Elke server ondersteunt verschillende veilige protocollen: DNSCrypt, DNS-over-HTTPS (DoH), DNS-over-TLS (DoT) en DNS-over-QUIC (DoQ).

## AdGuard DNS-protocollen

Naast gewone DNS (zowel IPv4 als IPv6) ondersteunt AdGuard DNS verschillende gecodeerde protocollen, zodat je degene kunt kiezen die het beste bij jou past.

### DNS-over-HTTPS (DoH) en DNS-over-TLS (DoT)

DoH en DoT zijn moderne, veilige DNS-protocollen die steeds populairder worden en in de nabije toekomst de industriestandaarden zullen worden. Beide zijn betrouwbaarder dan DNSCrypt en beide worden ondersteund door AdGuard DNS.

#### JSON API voor DNS

AdGuard DNS biedt ook een JSON API voor DNS. Het is mogelijk om een DNS-antwoord in JSON te krijgen door het volgende te typen:

```text
curl 'https://dns.adguard-dns.com/resolve?name=www.example.com'
```

For detailed documentation, refer to [Google’s guide to JSON API for DNS-over-HTTPS](https://developers.google.com/speed/public-dns/docs/doh/json). Het verkrijgen van een DNS-respons in JSON werkt op dezelfde manier met AdGuard DNS.

:::note

Unlike with Google DNS, AdGuard DNS doesn’t support `edns_client_subnet` and `Comment` values in response JSONs.

:::

### DNS-over-QUIC (DoQ)

[DNS-over-QUIC is a new DNS encryption protocol](https://adguard-dns.io/en/blog/dns-over-quic.html) and AdGuard DNS is the first public resolver that supports it. In tegenstelling tot DoH en DoT gebruikt het QUIC als transportprotocol en brengt het DNS eindelijk terug naar zijn roots: het werkt via UDP. Het biedt alle goede dingen die QUIC te bieden heeft: kant-en-klare encryptie, kortere verbindingstijden, betere prestaties wanneer datapakketten verloren gaan. Bovendien wordt QUIC verondersteld een protocol op transportniveau te zijn en zijn er geen risico's op lekken van metagegevens die bij DoH zouden kunnen optreden.

### Snelheidslimiet

DNS-ratelimiting is een techniek die wordt gebruikt om de hoeveelheid verkeer die een DNS-server binnen een specifieke tijdsperiode kan verwerken te reguleren. We bieden de optie om de standaardlimiet voor Team- en Enterprise-abonnementen van AdGuard DNS te verhogen. Voor meer informatie kunt je [het gerelateerde artikel lezen](/private-dns/server-and-settings/rate-limit.md).

### DNSCrypt

Met AdGuard DNS kun je een specifiek versleuteld protocol gebruiken: DNSCrypt. Hierdoor worden alle DNS-verzoeken versleuteld, wat je beschermt tegen mogelijke onderschepping van verzoeken en daaropvolgend afluisteren en/of wijzigen.

:::note

Dit is een verouderd protocol met beperkte ondersteuning.

:::
