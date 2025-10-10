---
title: Valg af DNS-protokol
sidebar_position: 2
---

En DNS-protokol er et sæt regler, som enheden bruger til at kommunikere med en DNS-server — et system, der oversætter webstednavne, såsom eksempel.com, til IP-adresser, som computere kan forstå. Denne proces foregik tidligere i klartekst, hvilket betød, at den kunne ses eller opsnappes af tredjeparter, såsom en ISP eller hackere. Krypterede DNS-protokoller løser dette problem ved at beskytte DNS-forespørgslerne, hvilket gør surfing mere fortrolig og sikker.

AdGuard DNS understøtter tre sikre, krypterede DNS-protokoller: DoH, DoT og DoQ. De er alle designet til at beskytte DNS-trafikken, men har hver især sine styrker og begrænsninger. Følgende oversigt vil bidrage til at forstå forskellene og vælge den bedste i en given relation.

### DNS-over-TLS (DoT)

DNS-over-TLS forbedrer fortrolighed ved at kryptere DNS-trafikken og sende den over port 853, der er specifikt reserveret til krypteret DNS-trafik.

DoT er ikke den stærkeste mulighed i forhold til fortrolighed. Den bruger den dedikerede port (853), hvilket gør det lettere for netværk at opdage og muligvis blokere. DoT kan dog stadig være nyttig i virksomheds- eller administrerede miljøer, hvor administratorer ønsker at tillade sikker DNS og samtidig bevare kontrollen over netværkstrafikken.

### DNS-over-HTTPS (DoH)

DNS-over-HTTPS sender DNS-forespørgslerne over port 443, den samme sikre forbindelse, som bruges til at indlæse websteder. Dette gør det sværere for netværk eller censur at opdage eller blokere.

Den kan dog være ustabil og medføre i ydelsesproblemer. Når alle datapakker deler den samme forbindelse, er de afhængige af det samme transportlag. Dette kan forårsage et problem kaldet head-of-line blokering. Hvis én pakke går tabt eller forsinkes, holder den alt andet tilbage, herunder ikke-relaterede pakker. Som følge heraf forsinkes alle svar, selv hvis de fleste data er klar til at blive leveret.

### DNS-over-QUIC (DoQ)

DNS-over-Quic er en DNS-protokol, der bruger QUIC-transportlagsprotokollen til at transmittere DNS-forespørgsler. Den løser et af hovedproblemerne med DoH-protokollen: head-of-line blokering.

Da DoQ bruger QUIC-protokollen til at holde DNS-aktivitet adskilt fra webtrafik, undgår den de timingproblemer, som ses med DoH. Den afslører derfor ingen trafikmønstre. Dette gør det sværere at linke DNS-forespørgslerne til surfingaktiviten, selvom trafikken i sig selv er lettere at opdage.

Dog er DoQ stadig en eksperimentel protokol, der kan opleve stabilitetsproblemer eller ISP- og censurmyndighedsblokering. Er man ikke klar til at håndtere dét, er den muligvis ikke det optimale valg.

![DoH kontra DoQ \*border](https://cdn.adtidy.org/blog/new/gy178dohdoq.jpg)

:::note

Yderligere, detaljeret information om head-of-line blokering og DNS-over-Quic protokollen findes i vores [blogopslag](https://adguard-dns.io/en/blog/dns-over-quic.html)

:::
