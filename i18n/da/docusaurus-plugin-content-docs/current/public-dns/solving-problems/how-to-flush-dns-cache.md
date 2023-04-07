---
title: Sådan tømmes DNS-cache
sidebar_position: 1
---

# Sådan tømmes DNS-cache

## Hvad er DNS-cache?

DNS-cache gemmer IP-adresserne på besøgte websteder på den lokale enhed, så de indlæses hurtigere næste gang. I stedet for at udføre et langt DNS-opslag, besvarer systemet forespørgslerne med DNS-poster fra den midlertidige DNS-cache.

DNS-cachen indeholder såkaldte [-ressourceposter (RR'er)](https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records), som er:

* **Ressourcedata (eller rdata)**;
* **Posttype**;
* **Postnavn**;
* **TTL (levetid)**;
* **Klasse**;
* **Ressourcedatalængde**.

## Hvornår man muligvis skal rydde cachen

**Ved jævnlige 404-fejl.** F.eks. hvis webstedet er overført til en anden server, og dets IP-adresse er ændret. For at få browseren til at åbne webstedet fra den nye IP-adresse, skal den cachelagrede IP fra DNS-cachen fjernes.

**Fortrolighed ønsker forbedret.**

**Der ønskes beskyttelse mod hackerangreb og vira.** Når DNS-cachen er beskadiget, kan browseren omdirigere dig til en IP-adresse på et ondsindet websted, som en angriber har indsat i enhedens DNS-poster.

## Sådan renses DNS-cache på forskellige OS'er

### macOS

For at rydde DNS-cachen på macOS, så åbn Terminal (den findes ved at bruge Spotlight-søgningen — for at gøre dette, tryk på Kommando+Mellemrum og skriv *Terminal*) og angiv dernæst flg. kommando:

`sudo killall -HUP mDNSResponder`

På macOS Big Sur 11.2.0/Monterey 12.0.0 kan denne kommando også bruges:

`sudo dscacheutil -flushcache`

Angiv herefter administratoradgangskoden for at fuldføre processen.

### Windows

Gør flg. for at rense DNS-cache på en Windows-enhed:

Start en kommandoprompt som administrator. Den findes via Startmenu ved at skrive *kommandoprompt* eller *cmd*. Angiv derefter `ipconfig/flushdns` og tryk på Enter.

Derefter ses linjen *DNS-opløser cachen er tømt*. Færdig!

### Linux

Linux har ikke DNS-caching på OS-niveau, medmindre en cachingtjeneste såsom systemd-resolved, DNSMasq, BIND eller Nscd er installeret og kører. Processen med at rense DNS-cachen afhænger af Linux-distributionen og den anvendte cachetjeneste.

For hver distribution skal et terminalvindue startes. Tryk på Ctrl+Alt+T på tastaturet, og brug den relevante kommando til at rense DNS-cachen for den tjeneste, Linux-systemet kører.

Brug flg. kommando til at fastslå den anvendte DNS-opløser: `sudo lsof -i :53 -S`.

#### systemd-resolved

For at rydde **systemd-resolved** DNS-cache, så skriv:

`sudo systemd-resolve --flush-caches`

Ved vellykket udførsel returneres ingen besked fra kommandoen.

#### DNSMasq

For at rense **DNSMasq**-cachen, skal den genstartes:

`sudo service dnsmasq restart`

#### Nscd

For at rense **Nscd**-cachen, skal tjenesten også genstartes:

`sudo service nscd restart`

#### BIND

For at rense **BIND** DNS-cachen, kør kommandoen:

`rndc flush`

Genindlæs dernæst BIND:

`rndc reload`

En besked om, at serveren er blevet genindlæst, vises efter gennemførsel.

### Android

Den nemmeste måde at rydde DNS-cachen på en Android-enhed er at slå flytilstand til og fra. Flytilstand kan aktiveres/deaktiveres i ruden Hurtige indstillinger.

En "hård genstart" kan også hjælpe med at rense enhedens DNS-cachen. For at gøre dette, tryk på tænd-/sluk-knappen og holde den nede i mindst 20 sekunder. Det vil (normalt) tvinge enheden til at genstarte manuelt, og hvilket bl.a. også renser DNS-cachen.

En anden mulighed er at nulstille enhedens netværksindstillingerne i appen Indstillinger. Åbn *Indstillinger > System > Avanceret > Nulstil indstillinger > Nulstil netværksindstillinger* og tryk på *Nulstil indstillinger* for at bekræfte.

> Bemærk: Ved at gøre dette, mistes alle forbindelser til Wi-Fi routere samt øvrige specifikke netværksindstillinger, inkl. DNS-servertilpasninger. Disse vil skulle nulstilles manuelt.

### iOS

Der er forskellige måder at rydde DNS-cachen på iPad eller iPhone.

Den enkleste måde er at aktivere Flytilstand (f.eks. via Kontrolcenter eller i appen Indstillinger) og deaktivere den igen. DNS-cachen vil blive renset.

En anden mulighed er at nulstille enhedens netværksindstillingerne i Indstillinger-appen. Åbn *Generelt*, rul ned til *Nulstil* og tryk på *Nulstil netværksindstillinger*.

> Bemærk: Ved at gøre dette, mistes alle forbindelser til Wi-Fi routere samt øvrige specifikke netværksindstillinger, inkl. DNS-servertilpasninger. Disse vil skulle nulstilles manuelt.