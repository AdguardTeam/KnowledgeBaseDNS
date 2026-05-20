---
title: Oversigt
sidebar_position: 1
---

:::info

Med AdGuard DNS kan der opsættes egne private DNS-servere til at opløse DNS-forespørgsler og blokere annoncer, trackere og ondsindede domæner, før de når enheden

Hurtigt link: [Prøv AdGuard DNS](https://agrd.io/download-dns)

:::

![Private AdGuard DNS-hovedkontrolpanel](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## Generelt

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/ME3_Ms9LO8M" title="YouTube-videoafspiller" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Privat AdGuard DNS tilbyder alle fordelene ved en offentlig AdGuard DNS-server, herunder trafikkryptering og domænesortlister. Den tilbyder også yderligere funktioner såsom fleksibel tilpasning, DNS-statistik og Forældrekontrol. Alle disse muligheder er let tilgængelige og håndteres via et brugervenligt kontrolpanel.

### Hvorfor man behøver Private AdGuard DNS

I dag kan alt tilsluttes internet: TV, køleskabe, køleskabe, smarte pærer eller højttalere. Men sammen med de ubestridelige bekvemmeligheder kommer trackere og annoncer. En simpel browserbaseret adblocker yder ikke beskyttelse i dette tilfælde, hvorimod AdGuard DNS — som kan opsættes til at filtrere trafik, blokere indhold og trackere — fungerer på systemniveau.

På et tidspunkt omfattede AdGuard-produktlinjen kun [Public AdGuard DNS](../public-dns/overview.md) og [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome). Disse løsninger fungerer fint for visse brugere, mens andre savner opsætningsfleksibilitet i den offentlige AdGuard DNS og enkelhed i AdGuard Home. Det er hér, at Private AdGuard DNS kommer ind i billedet. Den har det bedste fra begge verdener: Den tilbyder tilpasningsmuligheder, styring og information — alt sammen via et enkelt, brugervenligt kontrolpanel.

### Forskellene mellem Public og Private AdGuard DNS

Her er en simpel funktionssammenligning mellem Public og Private AdGuard DNS.

| Offentlig AdGuard DNS          | Privat AdGuard DNS                                                               |
| ------------------------------ | -------------------------------------------------------------------------------- |
| DNS-trafikkryptering           | DNS-trafikkryptering                                                             |
| Forudbestemte domænesortlister | Tilpasselige domænesortlister                                                    |
| -                              | Tilpasselige DNS-filtreringsregler med import-/eksportfunktion                   |
| -                              | Anmod om statistik (se mål for DNS-forepørgsler: Hvilke lande, virksomheder mv.) |
| -                              | Detaljeret forespørgselslog                                                      |
| -                              | Forældrekontrol                                                                  |


<!--

## How to set up private AdGuard DNS

### For devices that support DoH, DoT, and DoQ

1. Go to your [AdGuard DNS dashboard](https://agrd.io/download-dns) (if not logged in, log in using your AdGuard account)
1. Click *Connect device* and follow on-screen instructions

:::note Supported platforms:

- Android
- iOS
- Windows
- Mac
- Linux
- Routers
- Gaming consoles
- Smart TVs

:::

Every device that you add in the AdGuard DNS panel has its own unique address that can be used if the device supports modern encrypted DNS protocols (DoH, DoT, and DoQ).

### For devices that do not support DoH, DoT, and DoQ

If the device does not support encrypted DNS and you have to use plain DNS, there are two more ways to allow AdGuard DNS to recognize the device — use dedicated IP addresses or link device's IP address.

:::note

Use plain DNS addresses only if you have no other options: this reduces the security of DNS requests. If you decide to use plain DNS, we recommend that you choose dedicated IP addresses.

:::

#### Dedicated IP addresses

For every device that you connect to AdGuard DNS, you'll be offered two dedicated IPv6 addresses that you can enter in your device settings. Using both IPv6 addresses is not mandatory, but often devices might request you to enter two IPv6 addresses.

When you connect to them, AdGuard DNS will be able to determine which particular device is sending DNS requests and display statistics for it. And you'll be able to configure DNS rules specifically for this device.

Unfortunately, not all service providers offer IPv6 support, and not all devices allow you to configure IPv6 addresses. If this is your case, you may have to rely on the Linked IP method.

#### Linked IP

If you connect your device to AdGuard DNS via Linked IP, the service will count all plain DNS requests coming from that IP address towards that "device". With this connection method, you would have to reconnect manually or through a special program each time the device's IP changes, which happens after each reboot.

The only requirement for linking IP is that **it must be a residential IP address**.

:::note

A residential IP address is an IP address assigned to a device connected to a residential ISP. It is typically associated with a physical location and is allocated to individual homes or apartments. Residential IP addresses are used by regular Internet users for their everyday online activities, such as browsing the web, accessing social media platforms, sending emails, or streaming content.

:::

If you're trying to link a residential IP address and AdGuard DNS does not allow you to do that, please contact our support team at support@adguard-dns.io.

-->

## Private AdGuard DNS-funktioner

### Statistikker

På fanen *Statistik* fremgår alle de opsummerede statistikker over DNS-forespørgsler foretaget af enheder tilsluttet Private AdGuard  DNS. Den viser det samlede antal samt geografi for forespørgsler, antallet af blokerede forespørgsler, en liste over virksomhederne forespørgslerne blev rettet til, forespørgselstyper og hyppigst forespurgte domæner.

![Private AdGuard DNS-kontrolpanel, statistik](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/statistics.png)

### Trafikdestination

Denne funktion viser målene for enhedernes DNS-forespørgsler. Ud over at se kortet over forespørgselsmål kan oplysningerne filtreres efter dato, enhed og land.

![Private AdGuard DNS-kontrolpanel, trafik](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/traffic_destination.png)

### Virksomheder

Denne fane muliggør hurtigt at tjekke, hvilke virksomheder, som sender flest forespørgsler, og hvilke, som har flest blokerede forespørgsler.

![Private AdGuard DNS-kontrolpanel, virksomheder](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/companies.png)

### Forespørgselslog

Dette er en detaljeret log, hvori der kan tjekkes oplysningerne om hver enkelt forespørgsel samt sorteres forespørgsler efter status, type, virksomhed, enhed, tid, land.

![Private AdGuard DNS-kontrolpanel, forespørgselslog](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/query_log.png)

## Serverindstillinger

Dette afsnit indeholder en række indstillinger, som muliggør driftstilpasning af Private AdGuard DNS, hvilket sikrer, at internet fungerer præcist som ønsket.

### Sortlistehåndtering

Funktionen *Sortlister* giver mulighed for at angive, hvilke domæner, som skal blokeres, og hvilke, som ikke skal. Vælg mellem et bredt udvalg af sortlister til forskellige formål.

![Private AdGuard DNS-kontrolpanel, sortlister](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### Sikkerhedsindstillinger

Selv ved opmærksomhed på alle onlinesvindlernes tricks, er der altid en risiko for et utilsigtet klik på et ondsindet link. For at beskytte mod sådanne uheld, gå til afsnittet *Sikkerhedsindstillinger* og markér afkrydsningsfelterne ud for de her anførte valgmuligheder.

Funktionen *Blokér ondsindede, phishing- og svindeldomæner* blokerer domæner fra den dedikerede database. *Blokér nyregistrerede domæner* blokerer alle domæner registreret for mindre end 30 dage siden, og som ofte anses for risikable for onlinefortroligheden.

### Forældrekontrol

For at beskytte barn mod onlineindhold, der findes upassende, opsæt og aktivér funktionen *Forældrekontrol*. Ud over muligheder såsom blokering af "voksenindhold" og sikker søgning, har vi tilføjet muligheden for manuelt at angive domæner til blokering samt opsætte en tidsplan for, hvornår *Forældrekontrol* skal være aktiv.

![Forældrekontrol](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)

### Brugerregler

I tilfælde, hvor forudinstallerede sortlister med tusindvis af regler ikke er nok, har vi en praktisk funktion kaldet *Brugerregler*. Her kan der manuelt tilføjes tilpassede regler for at blokere/afblokere et bestemt domæne eller importere tilpassede regellister (se [DNS-filtreringsregelsyntaks](../general/dns-filtering-syntax.md)). Listerne kan eksporteres.

![Private AdGuard DNS-kontrolpanel, brugerregler](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

### DNS-over-HTTPS med godkendelse

DNS-over-HTTPS med godkendelse giver et login og adgangskode til at oprette forbindelse til serveren. Dette kan begrænse adgangen for uautoriserede brugere og øge sikkerheden.

For at aktivere denne funktion, gå til *Serverindstillinger* → *Enheder* → *Indstillinger* og skift til en DNS-server med godkendelse. Vælg *Nægt andre protokoller* for at deaktivere alternativ protokolbrug, sikre eksklusiv DNS-over-HTTPS godkendelse og blokering af tredjepartsadgang.

![DNS-over-HTTPS med godkendelse](https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png)

## Avanceret

Her kan vælges, hvordan AdGuard DNS skal reagere på blokerede domæner:

- Standard — nul IP-adresse
- NXDOMAIN — domænet findes ikke
- REFUSED — serveren nægtede at behandle forespørgslen
- Tilpasset IP — der kan manuelt angives en IP-adresse

Derudover kan indstillingen *Time to live* (TTL) justeres. Denne parameter definerer den tidsperiode (i sekunder), i hvilken en klientenhed gemmer svaret på en DNS-forespørgsel. En højere TTL betyder, at selvom et tidligere blokeret domæne afblokeres, kan det stadig se blokeret ud i et stykke tid. En TTL på 0 angiver, at enheden ikke cachelagrer svar.

I afsnittet Avanceret findes tre muligheder, som kan tilpasses:

- Blokér adgang til iCloud Private Relay. Enheder, som bruger iCloud Private Relay, ignorerer muligvis DNS-indstillinger. Aktivering af denne mulighed sikrer, at AdGuard DNS kan beskytte enheden effektivt.
- Blokér Firefox canary-domæne. Denne indstilling forhindrer Firefox i automatisk at skifte til sin DoH-opløser, når AdGuard DNS er sat som overordnet system DNS-tjeneste.
- Log IP-adresser. Er denne indstilling aktiveret, registreres og vises IP-adresser knyttet til indgående DNS-forespørgsler i Forespørgselslog.

### Adgangsindstillinger

Her kan adgangsmulighed til DNS-serveren håndteres via opsætning af flg. indstillinger:

- Tilladte klienter. Angiv klienterne med tilladelse til at bruge DNS-serveren. Bemærk, at tilladte klienter ikke tælles i tilføjede adgangsregler, kun ikke-tilladte klienter og domæner

![Tilføjede regler](https://cdn.adtidy.org/content/kb/dns/private/rules_added.png)

- Ikke-tilladte klienter. Angiv klienter, som nægtes brug af DNS-serveren
- Ikke-tilladte domæner. Angiv domænenavne, som nægtes adgang til DNS-serveren. Jokertegn og DNS-filtreringsregler kan også angives her

:::note

Ønskes kun at brug af DNS på bestemte AS-numre eller IP-adresser, bør alt andet blokeres i feltet Ikke-tilladte klienter. Det vil ikke være nok blot at tillade de nødvendige numre og adresser i feltet *Tilladte klienter*.

:::

Ved at opsætte disse muligheder, kan det styres, hvem som bruger DNS-serveren og forhindre potentielle DDoS-angreb. Ikke-tilladte forespørgsler vises ikke i Forespørgselslog, og de er gratis.

### Sådan tilsluttes enheder til AdGuard DNS

AdGuard DNS er meget fleksibel og kan bruges på en række enheder, herunder tablets, PC'er, routere og spillekonsoller. Dette afsnit giver en detaljeret vejledning i, hvordan man tilslutter sin enhed til AdGuard DNS.

[Sådan tilsluttes enheder til AdGuard DNS](/private-dns/connect-devices/connect-devices.md)

### Servere og indstillinger

Dette afsnit forklarer, hvad en "server" er i AdGuard DNS, og hvilke indstillinger, som er tilgængelige. Indstillingen muliggør at tilpasse, hvordan AdGuard DNS reagerer på blokerede domæner og håndterer adgangen til DNS-serveren.

[Servere og indstillinger](/private-dns/server-and-settings/server-and-settings.md)

### Sådan opsættes filtrering

I dette afsnit beskriver vi en række indstillinger til finjustering af funktionaliteten af AdGuard DNS. Med sortlister, brugerregler, forældrekontrol og sikkerhedsfiltre kan filtrering opsættes, så den passer til behovene.

[Sådan opsættes filtrering](/private-dns/setting-up-filtering/blocklists.md)

### Statistik- og forespørgselslog

Statistik- og forespørgselslog giver indsigt i aktiviteten på enhederne. Fanen *Statistik* viser en oversigt over DNS-forespørgsler foretaget af enheder tilkoblet Private AdGuard DNS. Forespørgselsloggen viser information om hver forespørgsel og sorterer også forespørgsler efter status, type, firma, enhed, tid og land.

[Statistik- og forespørgselslog](/private-dns/statistics-and-log/statistics.md)

### Tilpassede domæner

Abonnenter på AdGuard DNS Enterprise og Team kan bruge deres egne domæner (såsom `dns.eksempel.com`) i stedet for standard `d.adguard-dns.com`. Denne indstilling sikrer problemfri integration med virksomhedens sikkerhedspolitikker, samtidig med at alle adblocking- og fortrolighedsfunktioner leveret af AdGuard DNS bevares.

[Tilpassede domæner](/private-dns/server-and-settings/custom-domains.md)
