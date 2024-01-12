---
title: Overzicht
sidebar_position: 1
---

## Wat is AdGuard DNS?

AdGuard DNS is een gratis, op privacy gerichte DNS-resolver die een veilige verbinding biedt en ook volgers, advertenties, phishing en inhoud voor volwassenen kan blokkeren (optioneel). AdGuard DNS vereist geen installatie van applicaties. Het is makkelijk te gebruiken en kan moeiteloos op elk apparaat worden geïnstalleerd (smartphones, desktops, routers, gameconsoles, enz.).

## Openbare AdGuard DNS-servers

AdGuard DNS heeft drie verschillende soorten publieke servers. De "standaard" server is bedoeld voor het blokkeren van advertenties, volgers, malware en phishing-websites. "Gezinsbescherming" doet hetzelfde, maar blokkeert ook websites met inhoud voor volwassenen en dwingt de optie "Veilig zoeken" af in browsers die deze bieden. "Niet-filteren" zorgt voor een veilige en betrouwbare verbinding, maar blokkeert niets. Gedetailleerde instructies voor het instellen van AdGuard DNS op elk apparaat vind je op [onze website](https://adguard-dns.io/public-dns.html). Elke server ondersteunt verschillende veilige protocollen: DNSCrypt, DNS-over-HTTPS (DoH), DNS-over-TLS (DoT) en DNS-over-QUIC (DoQ).

## AdGuard DNS-protocollen

Naast gewone DNS (zowel IPv4 als IPv6) ondersteunt AdGuard DNS verschillende gecodeerde protocollen, zodat je degene kunt kiezen die het beste bij jou past.

### DNSCrypt

Met AdGuard DNS kun je een specifiek gecodeerd protocol gebruiken: DNSCrypt. Hierdoor worden alle DNS-verzoeken versleuteld, wat je beschermt tegen mogelijke onderschepping van verzoeken en vervolgens afluisteren en/of wijzigen. Maar in vergelijking met de DoH-, DoT- en DoQ-protocollen wordt DNSCrypt als verouderd beschouwd en indien mogelijk raden we aan om deze protocollen te gebruiken.

### DNS-over-HTTPS (DoH) en DNS-over-TLS (DoT)

DoH en DoT zijn moderne, veilige DNS-protocollen die steeds populairder worden en in de nabije toekomst de industriestandaarden zullen worden. Beide zijn betrouwbaarder dan DNSCrypt en beide worden ondersteund door AdGuard DNS.

### DNS-over-QUIC (DoQ)

[DNS-over-QUIC is een nieuw DNS-encryptieprotocol](https://adguard.com/blog/dns-over-quic.html) en AdGuard DNS is de eerste publieke oplossing die dit ondersteunt. In tegenstelling tot DoH en DoT gebruikt het QUIC als transportprotocol en brengt het DNS eindelijk terug naar zijn roots: het werkt via UDP. Het biedt alle goede dingen die QUIC te bieden heeft: kant-en-klare encryptie, kortere verbindingstijden, betere prestaties wanneer datapakketten verloren gaan. Bovendien wordt QUIC verondersteld een protocol op transportniveau te zijn en zijn er geen risico's op lekken van metagegevens die bij DoH zouden kunnen optreden.
