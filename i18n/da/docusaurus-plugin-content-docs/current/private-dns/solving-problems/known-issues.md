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

If you disable Chrome’s own DNS settings, the browser will use the DNS specified in your operating system, which should be AdGuard DNS if you’ve set it up correctly.

## iCloud Private Relay (Safari, macOS og iOS)

Aktiveres iCloud Private Relay i enhedsindstillingerne, bruger Safari Apples DNS-adresser, hvilket tilsidesætter AdGuards DNS-indstillinger.

Sådan deaktiveres iCloud Private Relay på en iPhone:

1. Åbn *Indstillinger* og tryk på dit navn.
1. Vælg *iCloud* → *Private Relay*.
1. Slå Private Relay fra.

![iOS Private Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay.png)

På Mac:

1. Åbn *Systemindstillinger* og klik på dit navn eller *Apple ID'et*.
1. Vælg *iCloud* → *Private Relay*.
1. Slå Private Relay fra.
1. Klik på *Udført*.

![macOS Private Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png)

## Avanceret sporings- og fingeraftryksbeskyttelse (Safari, fra iOS 17)

Efter iOS 17-opdateringen kan Avanceret sporings- og fingeraftryksbeskyttelse være aktiveret i Safari-indstillingerne med potentielt næsten samme effekt som iCloud Private Relay, dvs. omgåelse af AdGuards DNS-indstillinger.

Sådan deaktiveres Avanceret sporings- og fingeraftryksbeskyttelse:

1. Åbn *Indstillinger* og rul ned til *Safari*.
1. Tryk på *Avanceret*.
1. Slå *Avanceret sporings- og fingeraftryksbeskyttelse* fra.

![iOS Sporings- og fingeraftryksbeskyttelse *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)
