---
title: Avancerede indstillinger
sidebar_position: 2
---

Afsnittet Avanceret indstillinger er beregnet til den mere erfarne bruger og omfatter flg. indstillinger.

## Besvarelse ved blokerede domæner

Her kan man vælge DNS-svaret til den blokerede forespørgsel:

- **Standard**: Svar med nul IP-adresse (0.0.0.0 for A; :: for AAAA), når blokeret af Adblock-lignende regel; svar med den i reglen angivne IP-adresse, når blokeret af /etc/hosts-lignende regel
- **NÆGTET**: Svar med en NÆGTET-kode
- **NXDOMAIN**: Svar med NXDOMAIN-kode
- **Tilpasset IP**: Svar med en manuelt indstillet IP-adresse

## TTL (levetid)

Levetid ((Time-to-live) TTL) angiver den tidsperiode (i sekunder), i hvilken en klientenhed kan cache et DNS-forespørgselssvar og hente det fra sin cache uden igen at forespørge DNS-serveren. Er TTL-værdien høj, kan nyligt ublokerede forespørgsler stadig se ud til at være blokeret i et stykke tid. Er TTL 0, cachelagrer enheden ikke svar.

## Blokér adgang til iCloud Private Relay

Enheder, som bruger iCloud Private Relay, ignorerer muligvis deres DNS-indstillinger, så AdGuard DNS kan ikke beskytte dem.

## Blokér Firefox canary-domæne

Forhindrer Firefox i at skifte til DoH-opløseren fra sine indstillinger, når AdGuard DNS er opsat på hele systemet.

## Log IP-adresser

Som standard logger AdGuard DNS ikke IP-adresser for indgående DNS-forespørgsler. Aktiveres denne indstilling, vil IP-adresser blive logget og vist i forespørgselsloggen.
