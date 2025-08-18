---
title: Oversigt
sidebar_position: 1
---

## Hvad er AdGuard DNS?

AdGuard DNS er en gratis, fortrolighedsorienteret DNS-opløser, der giver sikker forbindelse og også kan blokere sporing, annoncer, phishing og voksenindhold (valgfrit). AdGuard DNS kræver ikke installation af nogen applikationer. Den er nem at bruge og kan nemt opsættes på enhver enhed (smartphones, computere, routere, spillekonsoller mv.).

## Offentlige AdGuard DNS-servere

AdGuard DNS har tre forskellige typer offentlige servere. *Default* server is for blocking ads, trackers, malware and phishing websites. *Family protection* does the same, but also blocks websites with adult content and enforces *Safe search* option in browsers that provide it. *Non-filtering* provides a secure and reliable connection but doesn’t block anything. Detaljerede vejledninger til opsætning af AdGuard DNS på enhver enhed kan findes på [vores websted](https://adguard-dns.io/public-dns.html). Hver server understøtter forskellige sikre protokoller: DNSCrypt, DNS-over-HTTPS (DoH), DNS-over-TLS (DoT) og DNS-over-QUIC (DoQ).

## AdGuard DNS-protokoller

Udover alm. DNS (både IPv4 og IPv6) understøtter AdGuard DNS forskellige krypterede protokoller, så man kan vælge den, der passer bedst.

### DNS-over-HTTPS (DoH) og DNS-over-TLS (DoT)

DoH og DoT er moderne sikre DNS-protokoller, som vinder mere og mere popularitet og vil blive industristandarderne indenfor en overskuelig fremtid. Begge er mere pålidelige end DNSCrypt, og begge understøttes af AdGuard DNS.

#### JSON API til DNS

AdGuard DNS leverer også en JSON API til DNS. Det er muligt at få et DNS-svar i JSON ved at skrive:

```text
curl 'https://dns.adguard-dns.com/resolve?name=www.example.com'
```

For detailed documentation, refer to [Google’s guide to JSON API for DNS-over-HTTPS](https://developers.google.com/speed/public-dns/docs/doh/json). At få DNS-svar i JSON fungerer på samme måde med AdGuard DNS.

:::note

Unlike with Google DNS, AdGuard DNS doesn’t support `edns_client_subnet` and `Comment` values in response JSONs.

:::

### DNS-over-QUIC (DoQ)

[DNS-over-QUIC er en ny DNS-krypteringsprotokol](https://adguard-dns.io/en/blog/dns-over-quic.html), og AdGuard DNS er den første offentlige opløser, der understøtter den. I modsætning til DoH og DoT, bruger den QUIC som en transportprotokol og bringer endelig DNS tilbage til sine rødder — at fungere over UDP. Det har alle de gode ting, som QUIC har at tilbyde — out-of-the-box kryptering, reducerede forbindelsesoprettelsestider, bedre ydeevne ifm. tab af datapakker. QUIC anses også for at være en protokol på transportniveau uden risiko for de metadatalæk, som kan forekomme med DoH.

### Forespørgselskvote

DNS-forespørgselskvote er en teknik, der bruges til at regulere den trafikmængde, en DNS-server kan håndtere inden for en bestemt tidsperiode. Vi tilbyder muligheden for at øge standardkvoten for Private AdGuard DNS-abonnementstyperne Team og Enterprise. For mere information, se [denne relaterede artikel](/private-dns/server-and-settings/rate-limit.md).

### DNSCrypt

AdGuard DNS allows you to use a specific encrypted protocol — DNSCrypt. Thanks to it, all DNS requests are being encrypted, which protects you from possible request interception and subsequent eavesdropping and/or alteration.

:::note

This is an obsolete protocol with restricted support.

:::
