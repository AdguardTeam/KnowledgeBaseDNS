---
title: Kendte problemer
sidebar_position: 1
---

Efter opsætning af AdGuard DNS kan nogle brugere opleve, at det ikke fungerer korrekt: De ser en meddelelse om, at enheden ikke er forbundet til AdGuard DNS, og forespørgslerne fra enheden ikke vises i Forespørgselslog. Dette kan ske grundet visse skjulte indstillinger i webbrowseren eller operativsystemet. Lad os se på flere almindelige problemer og deres løsninger.

:::tip

Status for AdGuard DNS kan tjekkes på [-testsiden](https://adguard.com/test.html).

:::

## Chromes sikre DNS-indstillinger

Anvendes Chrome, og ses ingen forespørgsler i AdGuard DNS-kontrolpanelet, kan dette skyldes, at Chrome bruger sin egen DNS-server. Sådan slås den fra:

1. Åbn Chromes indstillinger.
1. Gå til *Fortrolighed og sikkerhed*.
1. Vælg *Sikkerhed*.
1. Rul ned til *Benyt sikker DNS*.
1. Slå funktionen fra.

![Chromes funktion Benyt sikker DNS](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/secure-dns.png)

Deaktiveres Chromes egne DNS-indstillinger, vil webbrowseren bruge operativsystemets opsatte DNS, hvilket bør være AdGuard DNS, såfremt den er korrekt opsat.

## iCloud Private Relay (Safari, macOS og iOS)

Aktiveres iCloud Private Relay i enhedsindstillingerne, bruger Safari Apples DNS-adresser, hvilket tilsidesætter AdGuards DNS-indstillinger.

Sådan deaktiveres iCloud Private Relay på en iPhone:

1. Åbn *Indstillinger* og tryk på dit navn.
1. Vælg *iCloud* → *Private Relay*.
1. Slå Private Relay fra.

![iOS Private Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay-ios-1.png)

På Mac:

1. Åbn *Systemindstillinger* og klik på dit navn eller *Apple ID'et*.
1. Vælg *iCloud* → *Private Relay*.
1. Slå Private Relay fra.
1. Klik på *Udført*.

![macOS Private Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png)

## Avanceret sporings- og fingeraftryksbeskyttelse (Safari, fra iOS 17)

Efter iOS 17-opdateringen kan Avanceret sporings- og fingeraftryksbeskyttelse være aktiveret i Safari-indstillingerne med potentielt næsten samme effekt som iCloud Private Relay, dvs. omgåelse af AdGuards DNS-indstillinger.

Sådan deaktiveres Avanceret sporings- og fingeraftryksbeskyttelse:

Til iOS 26.1 og senere versioner:

1. Gå til *Indstillinger*.
1. Rul ned, og vælg *Apps*.
1. Gå til *Safari* → *Avanceret*.
1. Tryk på *Avanceret sporings- og fingeraftryksbeskyttelse* og dernæst *Fra*.

![iOS 26.1 Sporings- og fingeraftryksbeskyttelse *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/adv-tracking-browser-1.png)

Til iOS-versioner før 26.1:

1. Åbn *Indstillinger* og rul ned til *Safari*.
1. Tryk på *Avanceret*.
1. Slå *Avanceret sporings- og fingeraftryksbeskyttelse* fra.

![iOS Sporings- og fingeraftryksbeskyttelse *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)

## Begræns IP-adressesporing på iPhone

Når funktionen Begræns IP-adressesporing er slået til på iPhone, kan det forstyrre AdGuard DNS' evne til at filtrere trafik.

Dette sker, fordi funktionen sender DNS-forespørgsler fra Safari (og andre apps, som understøtter den) via Apples egne private relæservere. Dette forhindrer AdGuard DNS i at modtage enhedens reelle IP-adresse og behandle DNS-forespørgsler, hvilket resulterer i deaktiveret filtrering af annoncer og trackere.

For at gendanne fuld DNS-baseret filtrering, slå denne funktion fra for det Wi-Fi-netværk, der p.t. anvendes.

Følg venligst trinnene nedenfor:

1. Åbn appen *Indstillinger* på iPhonen.
1. Tryk på *Wi-Fi*.
1. Klik på navnet på det p.t. tilsluttede Wi-Fi-netværk.
1. Slå kontakten *Begræns IP-adressesporing fra* fra på netværksindstillingssiden.

![Begræns IP-adressesporing *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-wifi-limit-ip-1.png)

DNS-filtrering genoptages straks efter deaktivering af denne indstilling. Bemærk, at denne proces muligvis skal gentages for øvrige Wi-Fi-netværk, som der kan oprettes forbindelse til i fremtiden.
