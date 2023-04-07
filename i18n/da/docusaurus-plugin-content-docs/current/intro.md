---
title: Oversigt
sidebar_position: 1
slug: /
---

## Hvad er DNS?

DNS står for "Domain Name System", hvis formål er at konvertere websteders navne til IP-adresser. Hver gang man går til et websted, sender browseren en DNS-forespørgsel til en DNS-server for at få oplyst webstedets IP-adresse. En alm. DNS-opløser returnerer blot IP-adressen på det anmodede domæne.

> Standard DNS-serveren leveres normalt af internetudbyderen. Det betyder, at internetudbyderen kan spore brugeres onlineaktivitet og sælge logfiler til tredjeparter.

![Enheden bruger altid en eller anden DNS-server til at få IP-adresserne på de domænenavne, apps ønsker at navigere til](https://cdn.adtidy.org/content/blog/articles/dns-cbs/scr1.png)

Der er også DNS-servere, som kan blokere bestemte websteder på DNS-niveau. Hvordan fungerer de? Når enheden sender en "dårlig" forespørgsel, hvad enten det er en annonce eller tracker, obstruerer en DNS-server forbindelsen ved at svare med en ikke-rutbar IP-adresse for et blokeret domæne.

## Hvorfor bruge DNS til indholdsblokering?

Alt har i dag interetadgang, fra TV til intelligente pærer, fra mobilenheder til intelligente køretøjer. Og hvor internet, er der også annoncer og trackere. I dette tilfælde har en browserbaseret adblocker vist sig utilstrækkelig. For at opnå bedre beskyttelse, brug DNS kombineret med VPN og en adblocker.

Brug af DNS til indholdsblokering har nogle fordele såvel som åbenlyse mangler. På den ene side har DNS ingen blinde vinkler, da den observerer alle enheder og ikke kun browserne. På den anden side kan DNS-blokering alene ikke levere kosmetisk filtrering.

## Hvad er AdGuard DNS?

AdGuard DNS er en af de mest fortrolighedsorienterede DNS-tjenester på markedet. Den understøtter så pålidelige krypteringsprotokoller som DNS-over-HTTPS, DNS-over-TLS og DNS-over-QUIC. Den kan fungere som en alm. DNS-opløser i tilstanden Ikke-filtrering, men den kan også levere indholdsblokering på DNS-niveau: Identificere forespørgsler til annonce-, sporings- og/eller voksendomæner (valgfrit) og reagere med et tomt svar. AdGuard har sin egen hyppigt opdaterede base over domænenavne, som leverer annoncer, trackere og svindel.

![Omtrentligt skema over, hvordan AdGuard DNS fungerer](https://cdn.adtidy.org/public/Adguard/Blog/scr2.png)

> Omkring 75 % af AdGuard DNS-trafikken er krypteret. Det er faktisk dét, der adskiller indholdsblokerende DNS-servere fra de øvrige. Kigger man på CloudFlare- eller Quad9-statistikker, vil man se, at krypteret DNS kun udgør en lille del af alle forespørgsler.

AdGuard DNS findes i to hovedformer: [Offentlig AdGuard DNS](public-dns/overview.md) og [privat AdGuard DNS](private-dns/overview.md). Begge disse tjenester kræver ikke installation af nogen app. De er nemme at opsætte og anvende, og de giver brugerne det minimum af funktioner, som kræves for at blokere annoncer, trackere, ondsindede websteder og, om ønsket, voksenindhold. Der er ingen begrænsninger af, med hvilke enheder de kan bruges.

Trods mange ligheder, så er privat AdGuard DNS og offentlig AdGuard DNS to forskellige tjenester. Deres største forskel er, at privat AdGuard DNS kan tilpasses, mens offentlig AdGuard DNS ikke kan.

## DNS-filtreringsmodul i AdGuard-produkter

Alle større AdGuard-produkter, inkl. AdGuard VPN, har et **DNS-filtreringsmodul**, hvor man kan vælge en DNS-server fra en udbyder, man stoler på. Selvfølgelig er AdGuard DNS Standard, AdGuard DNS Ikke-filtrerende og AdGuard DNS Familiebeskyttelse på listen. AdGuard-apps giver også brugere mulighed for [ nemt at opsætte og anvende AdGuard DNS](https://adguard-dns.io/public-dns.html) — offentlig eller privat.
