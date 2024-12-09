---
title: Structured DNS Errors (SDE)
sidebar_position: 5
---

AdGuard er med udgivelsen af AdGuard DNS v2.10 blevet den første offentlige DNS-opløser, der implementerer understøttelse af [_Structured DNS Errors_ (SDE)](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/), en opdatering til [RFC 8914](https://datatracker.ietf.org/doc/rfc8914/). Denne funktion tillader DNS-servere at give detaljeret information om blokerede websteder direkte i DNS-svaret, i stedet for at være afhængige af generiske webbrowserbeskeder. I denne artikel forklarer vi, hvad _Structured DNS Errors_ er, og hvordan de fungerer.

## Hvad Structured DNS Errors er

Når en forespørgsel til et reklame- eller trackingdomæne blokeres, kan brugeren se tomme pladser på et websted eller måske endda ikke bemærke, at DNS-filtrering er sket. Blokeres et helt websted imidlertid på DNS-niveau, vil brugeren være helt ude af stand til at tilgå siden. Når et blokeret websted forsøges tilgået, kan brugeren se en generisk "Dette websted kan ikke nås"-fejl vist af webbrowseren.

!["Dette websted kan ikke nås"-fejl](https://cdn.adtidy.org/content/blog/dns/dns_error.png)

Sådanne fejl forklarer ikke, hvad der skete, og hvorfor. Dette efterlader brugere forvirrede over, hvorfor et websted er utilgængeligt, hvilket ofte får dem til at antage, at deres internetforbindelse eller DNS-opløser er i stykker.

For at præcisere dette, kan DNS-servere omdirigere brugere til deres egen side med en forklaring. HTTPS-websteder (hvilket udgør flertallet af websteder) ville imidlertid kræve et særskilt certifikat.

![Certifikatfejl](https://cdn.adtidy.org/content/blog/dns/certificate_error.png?1)

Der er en enklere løsning: [Structured DNS Errors (SDE)](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/). Konceptet SDE bygger på grundlaget for [_Extended DNS Errors_ (RFC 8914)](https://datatracker.ietf.org/doc/rfc8914/), der introducerede muligheden for at inkludere yderligere fejlinformation i DNS-svar. Udkastet til SDE tager dette et skridt videre brug af [I-JSON](https://www.rfc-editor.org/rfc/rfc7493) (JSON-profil med restriktioner) til at formatere informationen på en måde, som webbrowsere og klientapplikationer nemt kan fortolke.

SDE-dataen er inkluderet i feltet `EXTRA-TEXT` i DNS-svaret. Det indeholder:

- `j` (justifikation): Årsag til blokering
- `c` (kontakt): Kontaktoplysninger til forespørgsler, hvis siden blev blokeret ved en fejl
- `o` (organisation): Organisation ansvarlig for DNS-filtrering i dette tilfælde (valgfri)
- `s` (underfejl): Fejlkoden for denne specifikke DNS-filtrering (valgfri)

Et sådant system forbedrer transparensen mellem DNS-tjenester og brugere.

### Hvad der kræves for at implementere Structured DNS Errors

Selvom AdGuard DNS har implementeret understøttelse af Structured DNS Errors, understøtter webbrowsere p.t. ikke indbygget fortolkning og visning af SDE-data. For at brugere kan se detaljerede forklaringer i deres webbrowsere, når et websted er blokeret, skal webbrowserudviklere adoptere og understøtte SDE-udkastspecifikationen.

### AdGuard DNS-demoudvidelse til SDE

For at vise, hvordan Structured DNS Errors fungerer, har AdGuard DNS udviklet en demo-webbrowserudvidelse, der viser, hvordan _Structured DNS Errors_ kunne fungere, hvis webbrowsere understøttede dem. Forsøger man at besøge et websted, der er blokeret af AdGuard DNS med denne udvidelse aktiveret, vil man se en detaljeret forklaringsside med de oplysninger, som gives via SDE, såsom blokeringsårsag, kontaktoplysninger og ansvarlig organisation.

![Forklaringsside](https://cdn.adtidy.org/blog/new/jlkdbaccess_blocked.png)

Man kan installere udvidelsen via [Chrome Web Store](https://chromewebstore.google.com/detail/oeinmjfnchfhaabhchfjkbdpmgeageen) or from [GitHub](https://github.com/AdguardTeam/dns-sde-extension/).

Vil man vide, hvordan det ser ud på DNS-niveau, kan kommandoen `dig` bruges til at lede efter `EDE` i outputtet.

```text
% dig @94.140.14.14 'ad.doubleclick.net' A IN +ednsopt=15:0000

...

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; EDE: 17 (Filtered): ({"j":"Filtered by AdGuard DNS","o":"AdGuard DNS","c":["mailto:support@adguard-dns.io"]})
;; QUESTION SECTION:
;ad.doubleclick.net.  IN A

...
```
