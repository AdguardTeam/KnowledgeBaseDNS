---
title: Oversigt
sidebar_position: 1
slug: /
---

## Hvad er DNS?

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/MSp7Ki03-LI" title="YouTube-videoafspiller" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

DNS står for "Domain Name System", hvis formål er at konvertere websteders navne til IP-adresser. Hver gang man går til et websted, sender browseren en DNS-forespørgsel til en DNS-server for at få oplyst webstedets IP-adresse. En alm. DNS-opløser returnerer blot IP-adressen på det anmodede domæne.

:::note

Standard DNS-serveren leveres normalt af internetudbyderen. Det betyder, at internetudbyderen kan spore brugeres onlineaktivitet og sælge logfiler til tredjeparter.

:::

![Enheden bruger altid en DNS-server til at få IP-adresserne på de domæner, som tilgås af forskellige apps, tjenester mv.](https://cdn.adtidy.org/content/blog/articles/dns-cbs/scr1.png)

Der findes også DNS-servere, som kan blokere bestemte websteder på DNS-niveau. Hvordan fungerer de? Når enheden sender en "dårlig" forespørgsel, hvad enten det er en annonce eller tracker, obstruerer en DNS-server forbindelsen ved at svare med en ikke-rutbar IP-adresse for et blokeret domæne.

## Hvorfor bruge DNS til indholdsblokering?

Alt har i dag interetadgang, fra TV til intelligente pærer, fra mobilenheder til intelligente køretøjer. Og hvor der er internetforbindelse, er der også annoncer og trackere. I dette tilfælde har en browserbaseret adblocker vist sig utilstrækkelig. For at opnå bedre beskyttelse, brug DNS kombineret med VPN og en adblocker.

Brug af DNS til indholdsblokering har nogle fordele såvel som åbenlyse mangler. På den ene side er DNS involveret ifm. forespørgsler fra alle enheder og deres apps, tjenester mv. På den anden side kan DNS-blokering i sig selv ikke levere kosmetisk filtrering.

## Hvad er AdGuard DNS?

AdGuard DNS er en af de mest fortrolighedsorienterede DNS-tjenester på markedet. Den understøtter så pålidelige krypteringsprotokoller som DNS-over-HTTPS, DNS-over-TLS og DNS-over-QUIC. Den kan fungere som en alm. DNS-opløser i tilstanden Ikke-filtrering, men den kan også levere indholdsblokering på DNS-niveau: Identificere forespørgsler til annonce-, sporings- og/eller voksendomæner (valgfrit) og reagere med et tomt svar. AdGuard har sin egen hyppigt opdaterede base med navne på domæne, som leverer annoncer, trackere og svindel.

![Omtrentligt skema over, hvordan AdGuard DNS fungerer](https://cdn.adtidy.org/public/Adguard/Blog/scr2.png)

Ca. 75% af AdGuard DNS-trafik er krypteret. Det er faktisk dét, der adskiller indholdsblokerende DNS-servere fra de øvrige. Ved at kigge på statistikkerne fra CloudFlare eller Quad9 kan man se, at krypteret DNS kun udgør en lille del af samtlige forespørgsler.

AdGuard DNS findes i to varianter: [Public AdGuard DNS](public-dns/overview) og [Private AdGuard DNS](private-dns/overview). Ingen af disse tjenester kræver installation af apps. De er nemme at opsætte og anvende, og de giver brugerne det minimum af funktioner, som kræves for at blokere annoncer, trackere, ondsindede websteder og, om ønsket, voksenindhold. Der er ingen begrænsninger af, med hvilke enheder de kan bruges.

Trods mange ligheder, så er Private AdGuard DNS og Public AdGuard DNS to forskellige tjenestevarianter. Deres største forskel er, at Private AdGuard DNS kan tilpasses, mens Public AdGuard DNS ikke kan.

## DNS-filtreringsmodul i AdGuard-produkter

Alle AdGuard-hovedprodukter, inkl. AdGuard VPN, har et **DNS-filtreringsmodul**, hvorfra en DNS-server fra en udbyder, man stoler på, kan vælges. AdGuard DNS Standard, AdGuard DNS Ikke-filtrerende og AdGuard DNS Familiebeskyttelse er selvfølgelig på listen. AdGuard-apps lader også brugere [ nemt at opsætte og anvende AdGuard DNS](https://adguard-dns.io/public-dns.html) — offentlig eller privat.
