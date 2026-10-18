---
title: DNS-over-HTTPS med godkendelse
sidebar_position: 4
---

## Hvorfor det er nyttigt

Med DNS-over-HTTPS med godkendelse kan man at indstille et brugernavn og adgangskode for adgang til sin valgte server.

Dette bidrager til at forhindre uautoriserede brugere i at tilgå den og forbedrer sikkerheden. Derudover kan man begrænse brugen af andre protokoller for bestemte profiler. Denne funktion er især nyttig, når andre kender den DNS-serveradresse, man bruger. Ved at tilføje en adgangskode, kan man blokere adgangen og sikre, at man kun kan bruge den selv.

## Sådan opsættes det

:::note Kompatibilitet

Denne funktion understøttes af [AdGuard DNS Client](/dns-client/overview.md) as well as [AdGuard apps](https://adguard.com/welcome.html).

:::

1. Åbn Kontrolpanel.
2. Tilføj en enhed eller gå til indstillingerne for en tidligere oprettet enhed.
3. Klik på _Brug DNS-serveradresser_ og åbn afsnittet _Krypterede DNS-serveradresser_.
4. Opsæt DNS-over-HTTPS med godkendelse som ønsket.
5. Genopsæt enheden til at bruge denne server i AdGuard DNS Client eller en af AdGuard-apperne.
6. For at gøre dette, kopiér adressen på den krypterede server og indsæt den i AdGuard-appen eller AdGuard DNS Client-indstillingerne.
   ![Kopér adresse \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/doh_step6.png)
7. Man kan også nægte brugen af andre protokoller.
   ![Nægt protokoller \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/deny_protocol.png)
