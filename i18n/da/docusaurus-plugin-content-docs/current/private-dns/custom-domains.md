---
title: Tilpassede domæner
sidebar_position: 6
---

AdGuard DNS-abonnenter kan opsætte egne domæner (såsom `dns.eksempel.com`) i stedet for standard `d.adguard-dns.com`. Denne funktion er beregnet til at hjælpe virksomheder med at tilpasse DNS-beskyttelse til deres infrastruktur ved at sikre problemfri integration med virksomhedens sikkerhedspolitikker, mens alle adblocking- og fortrolighedsfunktioner leveret af AdGuard DNS samtidig bevares.

:::note

Tilpassede domæner er tilgængelige for brugere af **Enterprise**- og **Team**-abonnementstyper.

:::

## Sådan opsættes et tilpasset domæne

For at opsætte et tilpasset domæne, log ind på AdGuard DNS-kontrolpanelet og gå til [_Kontoindstillinger_](https://adguard-dns.io/en/dashboard/account). Rul ned til _Avanceret indstillinger_ og vælg _Tilpassede domæner_. Gennemgå dernæst de tre hovedtrin.

1. Vælg protokol. Her findes to muligheder:

    - Tilføj DoH-domæne (til DNS-over-HTTPS)
    - Tilføj DoT-/DoQ-domæne (til DNS-over-TLS/DNS-over-QUIC)

   ![Vælg protokol \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_1.png)

2. Efter valg af protokol, angiv det foretrukne domænenavn (f.eks. `eksempel.com`) og bekræft CNAME-posten.

   ![CNAME-post \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_2.png)

3. Opsætning af certifikat. Til DoT-/DoQ-domæner skal et jokertegns TLS-certifikat uploades. Vælges DoH, kan man enten angive sit eget TLS-certifikat eller få AdGuard DNS til at generere ét. Når det er blevet bekræftet, vil det tilpasset domæne fremgå i kontrolpanelet, klar til brug.

   ![Tilpasset domæneliste \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_3.png)
