---
title: Sikkerhedsfunktioner
sidebar_position: 4
---

AdGuard DNS-sikkerhedsindstillingerne er et sæt opsætninger designet til at beskytte brugerens personlige oplysninger.

Her kan man vælge, hvilke metoder, som skal bruges, til at beskytte sig selv mod angribere. Dette vil beskytte mod at besøge falske eller phishing-websteder samt mod potentielle lækager af sensitive data.

### Blokér skadelige, phishing- og svindeldomæner

Til dato har vi kategoriseret flere end 15 millioner websteder og opbygget en database med 1,5 millioner websteder kendt for phishing og malware. Via denne database tjekker AdGuard de websteder, som besøges, for at beskytte mod onlinetrusler.

### Blokér nyregistrerede domæner

Svindlere bruger ofte nyligt registrerede domæner til phishing og svigagtige aktiviteter. Af denne grund har vi udviklet et specialfilter, der detekterer et domænes levetid, og blokerer det, hvis det er oprettet for nylig.
Nogle gange forårsager dette falske positiver, men statistikker viser, at i de fleste tilfælde beskytter denne indstilling stadig vores brugere mod at miste fortrolige data.

### Blokér skadelige domæner med sortlister

AdGuard DNS understøtter tilføjelse af tredjeparts blokeringsfiltre.
Aktivér filtre markeret `sikkerhed` for ekstra beskyttelse.

For mere viden om Sortlister [se separat artikel](/private-dns/setting-up-filtering/blocklists.md).

## Protection against typosquatting domains

AdGuard DNS detects and blocks suspicious look-alike domains at the DNS level by analyzing patterns such as common typos, swapped characters, and missing or extra letters. It blocks the request before a connection is even established.

Because this feature relies on similarity detection, legitimate domains that resemble popular websites may occasionally be flagged. If that happens, you can add the domain to the allowlist by going to [_Servers_](https://adguard-dns.io/dashboard/servers) ⭢ Server settings ⭢ _User rules_ ⭢ _Add new rule_.
