---
title: Oversigt
sidebar_position: 1
slug: /
---

## Hvad er DNS?

DNS stands for "Domain Name System", and its purpose is to convert websites' names into IP addresses. Hver gang man går til et websted, sender browseren en DNS-forespørgsel til en DNS-server for at få oplyst webstedets IP-adresse. En alm. DNS-opløser returnerer blot IP-adressen på det anmodede domæne.

> Standard DNS-serveren leveres normalt af internetudbyderen. Det betyder, at internetudbyderen kan spore brugeres onlineaktivitet og sælge logfiler til tredjeparter.

![Enheden bruger altid en eller anden DNS-server til at få IP-adresserne på de domænenavne, apps ønsker at navigere til](https://cdn.adguard.com/content/blog/articles/dns-cbs/scr1.png)

There are also DNS servers that can block certain websites at DNS-level. Hvordan fungerer de? When your device sends a "bad" request, be it an ad or a tracker, a DNS server prevents the connection by responding with a non-routable IP address for a blocked domain.

## Hvorfor bruge DNS til indholdsblokering?

Alt har i dag interetadgang, fra TV til intelligente pærer, fra mobilenheder til intelligente køretøjer. Og hvor internet, er der også annoncer og trackere. I disse tilfælde ser en browserbaseret adblocker ikke ud til at være nok. For at opnå bedre beskyttelse, brug DNS kombineret med VPN og en adblocker.

Brug af DNS til indholdsblokering har nogle fordele såvel som åbenlyse mangler. På den ene side har DNS ingen blinde vinkler, da den observerer alle enheder og ikke kun browserne. På den anden side kan DNS-blokering alene ikke levere kosmetisk filtrering.

## Hvad er AdGuard DNS?

AdGuard DNS er en af de mest fortrolighedsorienterede DNS-tjenester på markedet. Den understøtter så pålidelige krypteringsprotokoller som DNS-over-HTTPS, DNS-over-TLS og DNS-over-QUIC. It can work as a regular DNS resolver in Non-filtering mode, but also it can provide DNS-level content blocking: identify requests to ad, tracking, and/or adult domains (optionally), and respond with an empty response. AdGuard har sin egen hyppigt opdateret base over domænenavne, som leverer annoncer, trackere og svindel.

![Omtrentligt skema over, hvordan AdGuard DNS fungerer](https://cdn.adguard.com/public/Adguard/Blog/scr2.png)

> Omkring 75 % af AdGuard DNS-trafikken er krypteret. Det er faktisk dét, der adskiller indholdsblokerende DNS-servere fra de øvrige. Kigger man på CloudFlare- eller Quad9-statistikker, vil man se, at krypteret DNS kun udgør en lille del af alle forespørgsler.

AdGuard DNS findes i to hovedformer: [Offentlig AdGuard DNS](public-dns/overview.md) og [Privat AdGuard DNS](private-dns/overview.md). Begge disse tjenester kræver ikke installation af nogen app. De er nemme at opsætte og anvende, og de giver brugerne det minimum af funktioner, som kræves for at blokere annoncer, trackere, ondsindede websteder og, om ønsket, voksenindhold. Der er ingen begrænsninger af, med hvilke enheder de kan bruges.

På trods af mange ligheder, så er Privat AdGuard DNS og Offentlig AdGuard DNS to forskellige tjenester. Deres største forskel er, at Privat AdGuard DNS kan tilpasses, mens Offentlig AdGuard DNS ikke kan.

## DNS-filtreringsmodul i AdGuard-produkter

Alle større AdGuard-produkter, inkl. AdGuard VPN, har et **DNS-filtreringsmodul**, hvor man kan vælge en DNS-server fra en udbyder, man stoler på. Selvfølgelig er AdGuard DNS Standard, AdGuard DNS Ikke-filtrerende og AdGuard DNS Familiebeskyttelse på listen. AdGuard-apps giver også brugere mulighed for [ nemt at opsætte og anvende AdGuard DNS](https://adguard-dns.io/en/public-dns.html) — offentlig eller privat.







