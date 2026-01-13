---
title: Oversigt
sidebar_position: 1
---

## Hvad er AdGuard DNS?

AdGuard DNS er en gratis, fortrolighedsorienteret DNS-opløser, der giver sikker forbindelse og også kan blokere sporing, annoncer, phishing og voksenindhold (valgfrit). AdGuard DNS kræver ikke installation af nogen applikationer. Den er nem at bruge og kan nemt opsættes på enhver enhed (smartphones, computere, routere, spillekonsoller mv.).

## Offentlige AdGuard DNS-servere

AdGuard DNS har tre forskellige typer offentlige servere. *Standard*-serveren er til blokering af annonce-, tracker-, malware- og phishing-websteder. *Familiebeskyttelse* gør det samme, men blokerer også websteder med voksenindhold og håndhæver muligheden *Sikker søgning* i webbrowsere, som tilbyder den. *Ikke-filtrering* leverer en sikker og pålidelig forbindelse uden blokering af nogen art. Detaljerede vejledninger til opsætning af AdGuard DNS på enhver enhed kan findes på [vores websted](https://adguard-dns.io/public-dns.html). Hver server understøtter forskellige sikre protokoller: DNSCrypt, DNS-over-HTTPS (DoH), DNS-over-TLS (DoT) og DNS-over-QUIC (DoQ).

## AdGuard DNS-protokoller

Udover alm. DNS (både IPv4 og IPv6) understøtter AdGuard DNS forskellige krypterede protokoller, så man kan vælge den, der passer bedst.

### DNS-over-HTTPS (DoH) og DNS-over-TLS (DoT)

DoH og DoT er moderne sikre DNS-protokoller, som vinder mere og mere popularitet og vil blive industristandarderne indenfor en overskuelig fremtid. Begge er mere pålidelige end DNSCrypt, og begge understøttes af AdGuard DNS.

#### JSON API til DNS

AdGuard DNS leverer også en JSON API til DNS. Det er muligt at få et DNS-svar i JSON ved at skrive:

```text
curl 'https://dns.adguard-dns.com/resolve?name=www.example.com'
```

For detaljeret dokumentation henvises til [Googles guide til JSON API til DNS-over-HTTPS](https://developers.google.com/speed/public-dns/docs/doh/json). At få DNS-svar i JSON fungerer på samme måde med AdGuard DNS.

:::note

Ulig Google DNS understøtter AdGuard DNS ikke `edns_client_subnet` og `Kommentar` værdier i svar-JSON'er.

:::

### DNS-over-QUIC (DoQ)

[DNS-over-QUIC er en ny DNS-krypteringsprotokol](https://adguard-dns.io/en/blog/dns-over-quic.html), og AdGuard DNS er den første offentlige opløser, der understøtter den. I modsætning til DoH og DoT, bruger den QUIC som en transportprotokol og bringer endelig DNS tilbage til sine rødder — at fungere over UDP. Det har alle de gode ting, som QUIC har at tilbyde — out-of-the-box kryptering, reducerede forbindelsesoprettelsestider, bedre ydeevne ifm. tab af datapakker. QUIC anses også for at være en protokol på transportniveau uden risiko for de metadatalæk, som kan forekomme med DoH.

### Forespørgselskvote

DNS-forespørgselskvote er en teknik, der bruges til at regulere den trafikmængde, en DNS-server kan håndtere inden for en bestemt tidsperiode. Vi tilbyder muligheden for at øge standardkvoten for Private AdGuard DNS-abonnementstyperne Team og Enterprise. For mere information, se [denne relaterede artikel](/private-dns/server-and-settings/rate-limit.md).

### DNSCrypt

AdGuard DNS muliggør brug af en dedikeret krypteringsprotokol — DNSCrypt. Grundet denne, krypteres alle DNS-forespørgsler, hvilket beskytter mod mulig opfangning af forespørgsler og efterfølgende aflytning og/eller ændring.

:::note

Dette er en forældet protokol med begrænset understøttelse.

:::
