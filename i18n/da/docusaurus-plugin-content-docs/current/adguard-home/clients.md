---
title: Klienter
sidebar_position: 7
---

AdGuard Home tilbyder fleksible opsætningsmuligheder for tilsluttede enheder. På det mest grundlæggende niveau ønsker der måske blot skelnet mellem dem og se brugervenlige navne i stedet for IP-adresser. AdGuard Home muliggør også anvendelse af forskellige regler afhængigt af klienten.

## Brugervenlige navne {#friendly-names}

AdGuard Home forsøger automatisk at indsamle visse basisoplysninger om den enhed, der opretter forbindelse til den.

Her er, hvad den forsøger at gøre for at finde klientens værtsnavn:

1. Inspicerer hosts-filerne (f.eks. `/etc/hosts`) og bruger værtsnavne fundet der til at identificere klienter.

2. Udfører reverse DNS-opslag.

3. Inspicerer systemets ARP-tabel.

4. For offentlige IP-adresser foretager den også [WHOIS][whois]-forespørgsler for at bestemme klientens placering, og det firma IP'en tilhører.

5. For IP-adresser udleaset af AdGuard Home DHCP-serveren, henter den værtsnavnet fra leasingerne.

Ved behov for kun at se læsevenlige navne i AdGuard Home-statistikken, opnås dette nok nemmest ved at redigere hosts-filen. Bemærk, at AdGuard Home muligvis skal genstarte for at effektuere ændringerne.

<!-- TODO(m.kazantsev): Host all screenshots from CDN.-->

![top-klientnavne](https://cdn.adtidy.org/content/kb/dns/adguard-home/agh-top-clients-names.png)

Runtime-klientkilder kan deaktiveres via objektet [`clients.runtime_sources`][sources] i opsætningsfilen.

[whois]: https://en.wikipedia.org/wiki/WHOIS
[sources]: /adguard-home/configuration#clients

## Vedvarende klienter {#persistent-clients}

Ønskes mere end blot klientnavnene, skal hver klient opsættes manuelt. Dette gøres ved at gå til _Indstillinger_ → _Klientindstillinger_ og klikke på _Tilføj klient_.

![ny klient](https://cdn.adtidy.org/content/kb/dns/adguard-home/agh-new-client.png)

### Identificering af klienter {#identifying-clients}

<!-- TODO(m.kazantsev): When the DHCP server article is moved, add a link to this article.-->

Beslut først og fremmest, hvordan klienten ønskes identificeret. Der er flere muligheder for at gøre dette.

1. **IP-adresse.** F.eks. `192.168.0.1`. Dette er den nemmeste måde at gøre dette på, men det er muligvis ikke godt nok, hvis IP-adressen skiftes for ofte.

2. **CIDR-område.** F.eks. `192.168.0.1/24`. Det muliggør at tilknytte et helt IP-adresseområde (i dette eksempel `192.168.0.*`) til den samme klient.

3. **MAC-adresse.** Brug af MAC som klientidentifikator er **kun** muligt, når AdGuard Home fungerer som netværkets DHCP-server.

4. **ClientID'er.** Særlige identifikatorer, som kan bruges med visse krypterede DNS-protokoller. [Se nedenfor](#client-id).

#### ClientID {#client-id}

ClientID'er er identifikatorer, som kan benyttes med flg. DNS-protokoller: DNS-over-HTTPS, DNS-over-TLS og DNS-over-QUIC. For at bruge denne identifikator skal klientforespørgsler foretage vha. et særligt domænenavn eller en URL. F.eks.:

- AdGuard Home har domænenavnet `example.org`.

- Tilføj i AdGuard Home en vedvarende klient med ClientID'et `my-client`.

- På klientenheden kan der nu opsættes flg.:

  :::note

  URL-ClientID'et har højere prioritet end servernavnets ClientID. Anvendes begge, benyttes kun URL ClientID'et.

  :::

  - **DNS-over-HTTPS:**

    - URL ClientID: `https://example.org/dns-query/my-client`.

    - Servernavn ClientID: `https://my-client.example.org/dns-query` (kræver et [jokertegnscertifikat][wild]).

  - **DNS-over-QUIC:** `quic://my-client.example.org` (kræver et [jokertegnscertificat][wild]).

  - **DNS-over-TLS:** `tls://my-client.example.org` (kræver et [jokertegnscertifikat][wild]).

Bemærk, at TLS-certifikatet skal være gyldigt **både** for `*.example.org` **og** `example.org`.

[wild]: https://en.wikipedia.org/wiki/Wildcard_certificate

### Indstillinger {#settings}

Hver klient kan opsættes individuelt. Det kan vælges, hvad der skal blokeres, hvilke indstillinger, som skal bruges, eller der kan endda opsættes et helt andet sæt upstream-DNS-servere til brug for denne klient.

![klientindstillinger](https://cdn.adtidy.org/content/kb/dns/adguard-home/agh-client-settings.png)

## Pr. klient-blokering {#per-client-blocking}

Der er to måder, hvorpå pr. klient-blokering kan opsættes. Begge er baseret på brugen af AdGuards sortlisteregelsyntaks til de regler, som føjes til _Tilpassede filtreringsregler_.

### `client`-regler {#client-rules}

Den første metode bruger `client`-modifikatoren. Den muliggør at begrænse reglen til en specifik klient eller flere klienter.

Eksempel:

- \`@@||\*^$client=127.0.0.1: Afblokér alt for localhost.

- `||example.org^$client='Frank\'s laptop'`: Blokér `example.org` kun for klienten med navnet `Frank's laptop`. Bemærk, at anførselstegnet (`'`) i navnet skal escapes.

- `||example.org^$client=192.168.0.0/24`: Blokér `example.org` for alle klienter med IP-adresser i intervallet `192.168.0.0-192.168.0.255`.

Flere `client`-eksempler kan findes i [artiklen om filtreringsregelsyntaks][filtering-syntax-client].

### `ctag`-regler {#ctag-rules}

Den anden måde er ved brugen af en anden modifikator kaldet `ctag`. Når en ny klient oprettes, kan den tildeles tags. Disse tags kan dernæst anvendes i filtreringsreglerne.

Eksempel:

- `||example.org^$ctag=device_pc|device_phone`: Blokér `example.org` for klienter tagget som `device_pc` eller `device_phone`.

- `||example.org^$ctag=~device_phone`: Blokér `example.org` for alle klienter undtagen dem tagget som `device_phone`.

Flere `ctag`-eksempler samt den fulde liste over tags kan findes i [artiklen om filterregelsyntaks][filtering-syntax-ctag].

[filtering-syntax-client]: /general/dns-filtering-syntax.md#client-modifier
[filtering-syntax-ctag]: /general/dns-filtering-syntax.md#ctag-modifier
