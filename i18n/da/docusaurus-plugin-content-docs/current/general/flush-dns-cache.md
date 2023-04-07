---
title: Sådan tømmes DNS-cache
sidebar_position: 4
---

Maskinoperativsystemer og internetbrowsere gemmer og lagrer DNS-cache information om tidligere DNS-opslag. Dette accelererer webstedsindlæsning, da cachen indeholder IP-adresserne på de forespurgte domæner: I stedet for at henvise til DNS-servere, henter systemet forespørgselssvar fra cachen.

Gemte, forældede DNS-cachedata kan dog forårsage problemer med at vise eller indlæse websteder. Endnu værre, DNS-cachen kan ødelægges af netværksangreb eller vira. I så tilfælde vil uberettigede domænenavne eller IP-adresser kunne indsættes i den. Og i stedet for eksempelvis at gå til google.com, kan browser i stedet gå til en ondsindet IP-adresse eller annonceside.

For at undgå ovenstående problemer skal DNS-cachen ryddes, så alle gemte DNS-opslagsoplysninger slettes og enheden ved næste opslagsforespørgsel i stedet modtager opdaterede data fra DNS-serverene.

## Sådan tømmes DNS-cache på Mac

For at tømme DNS-cachen på en Mac, så kør **Terminal**-appen og angiv en specifik kommando afhængigt af den på enheden installerede macOS-version:

* `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` på macOS v13 (Ventura), 12 (Monterey), 11 (Big Sur), 10.15 (Catalina)

* `sudo killall -HUP mDNSResponder` på macOS v10.14 (Mojave), 10.13 (High Sierra), 10.12 (Sierra), 10.08 (Mountain Lion), 10.07 (Lion)

* `sudo dscacheutil -flushcache` og `sudo killall -HUP mDNSResponder` på macOS v10.11 (El Capitan), 10.9 (Mavericks)

* `sudo discoveryutil mdnsflushcache` og `sudo discoveryutil udnsflushcaches` på macOS v10.10

* `sudo dscacheutil -flushcache` på macOS v10.6 (Snow Leopard), 10.5 (Leopard)

* `lookupd -flushcache` på macOS v10.4 (Tiger)

Tryk dernæst på *Retur* på tastaturet, angiv kontoadministratoradgangskoden og tryk på *Retur* igen. Ingen meddelelse vises ved procesafslutningen. En ekstra kommando kan dog tilføjes for f.eks. at høre en notifikation, når tømning af DNS-cachen er fuldført:

`sudo killall -HUP mDNSResponder; say dns cleared successfully`

## Sådan tømmes DNS-cache på Windows

Rydning af DNS-cachen på Windows er nemt at udføre. Proceduren er den samme i næsten alle Windows-versioner.

Åbn kommandoprompten som administrator, og skriv flg. kommando: `ipconfig /flushdns`. Lykkes kommandoen, vil meddelelsen *DNS Resolver Cache er tømt* vises.

## Sådan tømmes DNS-cache på Linux

Forskellige Linux-distributioner kan bruge deres egen DNS-tjeneste. Nogle distributioner, såsom Ubuntu, har ingen DNS-tjeneste som standard overhovedet.

Før DNS-cachen tømmes, skal man finde ud af, hvilken tjeneste distributionen har, og om den er aktiveret som standard. Nogle af dem er **NCSD** (Name Service Caching Daemon), **dnsmasq** og **BIND** (Berkeley Internet Name Domain).

### Sådan tømmes lokal NCSD DNS-cache

Brug denne kommando på Linux-enheden:

`sudo /etc/init.d/nscd restart`

Angiv om nødvendigt adgangskoden.

### Sådan tømmes lokal dnsmasq DNS сache

Brug denne kommando på Linux-enheden:

`sudo /etc/init.d/dnsmasq restart`

Angiv dernæst om nødvendigt adgangskoden. Svaret vil fremgå, når tjenesten stopper og genstarter.

### Sådan tømmes lokal BIND DNS-cache

Anvendes BIND til DNS-tjenesten, findes flere kommandoer, som kan køres for at rydde DNS-cachen. En adgangskode skal muligvis angives for at fuldføre processen.

`sudo /etc/init.d/named restart`

`sudo rndc restart`

`sudo rndc exec`

## Sådan tømmes DNS-cache i Chrome-baserede browsere

Angiv linket **chrome://net-internals/#dns** i browserens adressefelt, og klik på knappen *Ryd værtscache*. 
