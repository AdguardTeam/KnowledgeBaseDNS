---
title: Avancerede indstillinger
sidebar_position: 2
---

Afsnittet Avancerede indstillinger er beregnet til mere erfarne brugere og indeholder muligheder, som kan være nyttige i specifikke netværks-, fortroligheds- eller fejlfindingsscenarier. Disse indstillinger muliggør at finjustere DNS-serverens adfærd, hvordan enheder forbinder til den, og hvordan filtrering anvendes.

## Adgang og tilslutningsmuligheder

### Opsætnings-ID

Et serveropsætnings-ID muliggør hurtigt at forbinde enheder til DNS-serveren via AdGuard DNS-appen.

Modsat enhedsspecifikke identifikatorer kan dette ID bruges til at forbinde enhver enhed til serveren, så det bør holdes fortroligt. Det er især nyttigt, når flere enheder opsættes eller forenkler opsætningen for familiemedlemmer eller teammedlemmer.

Opsætnings-ID'et kan når som helst nulstilles. Efter nulstillingen fungerer tidligere genererede opsætningslinks ikke længere.

![Opsætnings-ID](https://cdn.adtidy.org/content/kb/dns/private/setup-id.png)

### Forbind enheder automatisk

Denne funktion gør det muligt for enheder at blive registreret automatisk, når de opretter forbindelse til DNS-serveren via et genereret opsætningslink.

Linket indeholder enhedsnavnet, enhedstypen og server-ID'et. Når en enhed bruger dette link, føjes den automatisk til DNS-serveren uden behov for manuel opsætning.

Dette forenkler enhedsopsætning og er især nyttigt, når flere enheder tilsluttes på én gang.

## Filtreringsadfærd

### Svar ved blokerede domæner

Denne indstilling definerer, hvordan DNS-serveren svarer, når et domæne er blokeret.

Der kan vælges mellem flere svartyper:

- **Standard**: Svar med nul IP-adresse (0.0.0.0 for A; :: for AAAA), når blokeret af Adblock-lignende regel; svar med den i reglen specificerede IP-adresse, når blokeret af /etc/hosts-lignende regel
- **REFUSED**: Respond with REFUSED code
- **NXDOMAIN**: Svar med NXDOMAIN-kode
- **Tilpasset IP**: Svar med en manuelt indstillet IP-adresse

Forskellige svartyper kan være nyttige i forskellige scenarier. F.eks giver omdirigering af forespørgsler til en tilpasset IP-adresse mulighed for at vise en lokal blokeringsside i stedet for blot at blokere adgangen.

### TTL (levetid)

TTL (Time To Live) angiver, hvor længe en klientenhed skal cache et DNS-svar, før den foretager en ny DNS-serverforespørgsel.

Højere TTL-værdier reducerer antallet af DNS-forespørgsler og kan forbedre ydeevnen, da cachelagrede svar genbruges over en længere periode. Det kan dog tage længere tid for ændringer i filtreringsregler eller DNS-poster at propagere.

Er TTL-værdien sat til 0, cachelagres svar ikke, og hver forespørgsel sendes direkte til DNS-serveren.

## Omgåelsesbeskyttelse

### Blokér adgang til iCloud Private Relay

Denne indstilling blokerer enheder, som anvender iCloud Private Relay.

Privat Relay kan omgå de opsatte DNS-indstillinger og i stedet sende trafik igennem Apples relæinfrastruktur. Dette kan medføre ineffektiv DNS-filtrering.

Aktivér denne indstilling for at sikre, at filtreringsregler anvendes konsekvent på Apple-enheder.

### Blokér Firefox canary-domæne

Registrerer Firefox understøttelse af krypteret DNS, kan den automatis skifte til sin egen DNS-over-HTTPS (DoH) opløser.

Denne indstilling blokerer Firefox’ kanariedomæne, hvilket forhindrer webbrowseren i at aktivere sin egen DoH-opløser og dermed omgå den opsatte DNS-server.

Aktivér denne indstilling, såfremt Firefox altid skal benytte AdGuard DNS-filtrering.

### Gennemtving preflight-tilstand for præhentning i Chrome

Chrome kan præindlæse ressourcer via sin prefetch-proxy, før brugerne reelt åbner en webside.

I visse tilfælde kan disse præhentede forespørgsler omgå DNS-filtrering. Denne indstilling tvinger Chrome til at udføre preflight-tjeks, hvilket sikrer, at filtreringsregler anvendes på præindlæste ressourcer.

Aktivér denne indstilling, hvis der ønskes ensartet DNS-filtreringsadfærd i Chrome, især når præindlæsning er aktiveret.

## Logning

### Log IP-adresser

Som standard logger AdGuard DNS ikke IP-adresser for indgående DNS-forespørgsler.

Når aktiveret, logges og vises IP-adresser i Forespørgselslog. Selvom dette kan være nyttigt til fejlfindings- eller analyseformål, kan det have fortrolighedskonsekvenser afhængigt af brugssituationen.
