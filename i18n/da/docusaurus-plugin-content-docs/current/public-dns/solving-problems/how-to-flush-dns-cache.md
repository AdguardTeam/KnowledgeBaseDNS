---
title: Sådan tømmes DNS-cache
sidebar_position: 1
---

:::info

Her forklares, hvordan DNS-cachen kan tømmes for at løse offentlige DNS-problemer. AdGuard Ad Blocker kan bruges til opsætning af DNS-servere (også krypterede)

Hurtige links: [Download AdGuard Ad Blocker](https://agrd.io/download-kb-adblock)

:::

## Hvad er DNS-cache?

DNS-cache gemmer IP-adresserne på besøgte websteder på den lokale enhed, så de indlæses hurtigere næste gang. I stedet for at udføre et langt DNS-opslag, besvarer systemet forespørgslerne med DNS-poster fra den midlertidige DNS-cache.

DNS-cachen indeholder såkaldte [ressourceposter (RR'er)](https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records), som er:

- **Ressourcedata (eller rdata)**;
- **Posttype**;
- **Postnavn**;
- **TTL (levetid)**;
- **Klasse**;
- **Ressourcedatalængde**.

## Hvornår man muligvis skal rydde cachen

**DNS-udbyderen er skiftet til AdGuard DNS.** Ved skift af DNS kan det tage lidt tid at se resultatet grundet cachen.

**Der opleves jævnligt 404-fejl.** Webstedet er f.eks. overført til en anden server, og dets IP-adresse er ændret. For at få browseren til at åbne webstedet fra den nye IP-adresse, skal den cachelagrede IP fra DNS-cachen fjernes.

**Fortroligheden ønskes forbedret.**

## Sådan renses DNS-cache på forskellige OS'er

### iOS

Der er forskellige måder at rydde DNS-cachen på iPad eller iPhone.

Den enkleste måde er at aktivere Flytilstand (f.eks. via Kontrolcenter eller appen Indstillinger) og deaktivere den igen. Dette tømmer DNS-cachen.

En anden mulighed er at nulstille enhedens netværksindstillingerne via Indstillinger-appen. Åbn *Generelt*, rul ned til *Nulstil* og tryk på *Nulstil netværksindstillinger*.

:::note

Bemærk: Ved at gøre dette, mistes alle forbindelser til Wi-Fi routere samt øvrige specifikke netværksindstillinger, inkl. DNS-servertilpasninger. Man bliver nødt til at nulstille dem manuelt.

:::

### Android

På en Android-enhed ryddes DNS-cachen nemmest ved at slå Flytilstand til og fra. Flytilstand kan slås til/fra via ruden Hurtige indstillinger.

En "hård genstart" vil ligeledes rydde enhedens DNS-cache. For at gøre dette, tryk og hold på tænd-/slukknappen nedtrykket i mindst 20 sek. Dette tvinger (normalt) enheden til at genstarte manuelt, hvorefter DNS-cachen er renset.

En anden mulighed er at nulstille enhedens netværksindstillingerne via Indstillinger-appen. Åbn *Indstillinger System Avanceret Nulstillingsmuligheder Nulstil netværksindstillinger* og tryk på *Nulstil indstillinger* for at bekræfte.

:::note

Bemærk: Ved at gøre dette, mistes alle forbindelser til Wi-Fi routere samt øvrige specifikke netværksindstillinger, inkl. DNS-servertilpasninger. Man bliver nødt til at nulstille dem manuelt.

:::

### macOS

For at rydde DNS-cachen på macOS, åbn Terminal (kan findes via Spotlight-søgning, dvs., tryk på Kommando+Mellemrum og skriv *Terminal*) og angiv dernæst flg. kommando:

`sudo killall -HUP mDNSResponder`

På macOS Big Sur 11.2.0/Monterey 12.0.0 kan flg. kommando også bruges:

`sudo dscacheutil -flushcache`

Angiv herefter administratoradgangskoden for at fuldføre processen.

### Windows

Gør flg. for at rydde DNS-cachen på en Windows-enhed:

Åbn en Kommandoprompt som administrator. Den kan findes via Startmenuen ved at skrive *kommandoprompt* eller *cmd*. Skriv derefter `ipconfig/flushdns` og tryk på Retur.

Dernæst ses linjen *DNS-opløser cachen er tømt*. Færdig!

### Linux

Linux har ikke DNS-caching på OS-niveau, medmindre en cachingtjeneste såsom systemd-resolved, DNSMasq, BIND eller Nscd er installeret og kører. Processen med at rense DNS-cachen afhænger af Linux-distributionen og den anvendte cachetjeneste.

For hver distribution skal et terminalvindue startes. Tryk på Ctrl+Alt+T på tastaturet, og brug den relevante kommando til at rense DNS-cachen for den tjeneste, Linux-systemet kører.

Brug flg. kommando til at fastslå den anvendte DNS-opløser: `sudo lsof -i :53 -S`.

#### systemd-resolved

For at rydde **systemd-resolved** DNS-cache, skriv:

`sudo systemd-resolve --flush-caches`

Ved vellykket udførsel returnerer kommandoen ingen besked.

#### DNSMasq

For at rydde **DNSMasq**-cachen, skal den genstartes:

`sudo service dnsmasq restart`

#### NSCD

For at rydde **NSCD**-cachen, skal tjenesten også genstartes:

`sudo service nscd restart`

#### BIND

For at rydde **BIND** DNS-cachen, kør kommandoen:

`rndc flush`

Genindlæs dernæst BIND:

`rndc reload`

En besked om, at serveren er blevet genindlæst, vises efter gennemførsel.

## Sådan tømmes DNS-cache i Chrome

Dette kan være nyttigt, hvis browseren ikke ønskes genstartet hver gang under arbejdet med AdGuard DNS Private eller AdGuard Home. Indstillinger 1-2 skal kun ændres én gang.

1. Slå **sikker DNS** fra i Chrome-indstillinger

    ```bash
    chrome://settings/security
    ```

1. Slå **Async DNS-resolver** fra

    ```bash
    chrome://flags/#enable-async-dns
    ```

1. Tryk på begge knapper her

    ```bash
    chrome://net-internals/#sockets
    ```

1. Tryk på **Ryd værtscache**

    ```bash
    chrome://net-internals/#dns
    ```
