---
title: Streaming af forespørgselslog
sidebar_position: 6
---

:::info

_Streaming af forespørgselslog_ er p.t. i betatest. I denne fase er opsætningsfaserne halvmanuel og udføres i samarbejde med AdGuard-teamet.

:::

Denne artikel beskriver, hvordan _Streaming af forespørgselslog_ opsættes og benyttes i AdGuard DNS. Denne funktion giver AdGuard DNS Enterprise-brugere mulighed for automatisk at eksportere rå DNS-forespørgselshændelser til ekstern lagring af sikkerheds-, analyse- eller overholdelsesformål.

## Hvad er Streaming af forespørgselslog?

_Streaming af forespørgselslog_ giver AdGuard DNS Enterprise-brugere mulighed for automatisk at eksportere rå DNS-forespørgselshændelser til egne eksterne, S3-kompatible lagre – uden at være afhængige af manuel API-polling. Når disse logfiler er eksporteret, kan de indlæses af SIEM-systemer, SOC-platforme, datasøer eller interne analysepipelines, hvilket giver programmatisk adgang til rå forespørgselsdata til sikkerhedsovervågning, revision og regeloverholdelser.

Hændelser indsamles og leveres i periodiske, komprimerede puljer; leveringstidspunktet afhænger af trafikmængden (se afsnittet [_Leveringsgarantier og begrænsninger_](#delivery-guarantees-and-limitations) for detaljer).

## Tilgængelighed og krav

For brug af _Streaming af forespørgselslog_ skal flg. krav være opfyldt:

- **Enterprise-abonnementstype:** Denne funktion er udelukkende tilgængelig for AdGuard DNS Enterprise-brugere. Er kontoen ikke længere er på en Enterprise-abonnementstype, deaktiveres logstreamingtjenesten. For frivillig deaktivering, se FAQ nedenfor.
- **Aktiv forespørgselslog:** AdGuard DNS-opsætningen skal have forespørgselslogning aktiveret.
- **S3-kompatibel bucket:** En aktiv, skrivbar bucket skal eksistere på Amazon S3 eller en anden S3-kompatibel cloud-lagringsudbyder (f.eks. Cloudflare R2, Backblaze B2, Wasabi eller MinIO).
- **Adgangsoplysninger:** Der skal angives de forbindelsesparametre og legitimationsoplysninger, som kræves, for at AdGuard DNS kan skrive objekter til en bucket.

## Sådan anmodes om opsætning

Da opsætning p.t. håndteres manuelt af vores infrastrukturteam, bedes disse trin følges for at anmode om logstreaming:

### Trin 1: Forbered relevant S3-bucket

1. Opret en dedikeret bucket eller sti/præfiks i det S3-kompatible lager.
2. Tildel de nødvendige minimumsrettigheder til de loginoplysninger, som ønskes delt med AdGuard. Som minimum skal legitimationsoplysningerne have skrivetilladelser (`s3:PutObject`) på den angivne sti.

### Trin 2: Kontakt kontoadministratoren eller AdGuard-supportteamet

Kontakt den dedikerede AdGuard-kontoadministrator, eller kontakt AdGuard-supportteamet via `support@adguard-dns.io`, og angiv den målkonto eller organisation, logfilerne skal streames for.

### Trin 3: Angiv opsætningsoplysninger

Når anmodningen er godkendt, vil supportteamet give yderligere vejledning, samt anmode om de specifikke opsætningsparametre, som kræves for at etablere logstrømmen.

### Trin 4: Afvent, at logstrømmen aktiveres

Når logstrømmen er aktiveret, skrives en `.healthcheck`-fil indeholdende `ok` automatisk til destinations-bucket'en. Opstår forbindelses- eller skrivefejl under opsætningen, vil underretning herom ske. Ingen yderligere handling kræves, når streamen er aktiveret.

## Logformat og S3-objektstruktur

Logfiler leveres som **minificerede JSON-filer indeholdende en række af objekter**, hvor hvert objekt heri repræsenterer en enkelt DNS-forespørgselshændelse.

### Komprimering og kodning

- **Kodning:** UTF-8
- **Komprimering:** Gzip-komprimering er obligatorisk og anvendes automatisk på alle eksporterede logfiler.

### S3-objektlayout og -navngivning

Logfiler skrives til den S3-kompatible bucket via et struktureret mappehierarki og en specifik tidsstempelbaseret navngivningskonvention for at muliggøre effektiv partitionsbaseret forespørgsel og indlæsning.

- **Objektpræfiks (sti):** `/logs/%Y/%m/%d/` (organiseret efter år, måned og dag)
- **Filnavnsmønster:** `%H-%M-%S-%3f.json.gz` (Time-Minut-Sekund-Millisekund af batchgenereringen)

**Eksempel på S3-objektnøgle:**

`logs/2026/08/24/14-02-02-123.json.gz`

### Filskemastruktur

I modsætning til JSON Lines (JSONL) er den leverede fil et standard, minimeret JSON-matrix med én linje.

**Eksempel på den leverede minificerede filstruktur (ukomprimeret repræsentation):**

```json

{"ASN":1234,
"AccountId":4432,
"Action":1,
"CategoryId":null,
"ClientCountry":null,
"DNSSEC":0,
"DeviceId":"54cff1db",
"DnsServerId":"b13fe9a2",
"DomainFQDN":"qwerty20.onlineteam.ru.",
"ElapsedMs":51,
"FilterListId":null,
"FilterRule":null,
"IpAddress":null,
"Protocol":8,
"RequestIdNum":65027,
"RequestType":1,
"ResponseCode":0,
"ResponseCountry":"RU",
"TimeAddedMs":1787671509268,
"TrackerId":null
}
```

## Feltreference {#fields-reference}

Tabellen nedenfor beskriver skemaet for de eksporterede DNS-forespørgselslogfiler.

| Felt              | Type          | Obligatorisk | Beskrivelse                                                                                                                                                                                                                                                                                                                      | Eksempel               |
| :---------------- | :------------ | :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------- |
| `AccountId`       | heltal        | Nej          | Detekteret konto-ID, om noget.                                                                                                                                                                                                                                                                                   | `1234`                 |
| `DnsServerId`     | streng        | Nej          | Detekteret profil-ID, også kendt som DNS ID eller DNS Server ID, om noget.                                                                                                                                                                                                                                       | `"prof1234"`           |
| `DeviceId`        | streng        | Nej          | Detekteret enheds-ID, om noget.                                                                                                                                                                                                                                                                                  | `"dev1234"`            |
| `ClientCountry`   | streng        | Nej          | Landet for klientens IP-adresse som en ISO 3166-1 alpha-2-kode. Fraværende, hvis det ikke kunne detekteres. `XK` bruges til Kosovo.                                                                                                                                              | `"AU"`                 |
| `ResponseCountry` | streng        | Nej          | Landet for klientens IP-adresse i svaret som en ISO 3166-1 alpha-2-kode. Fraværende, hvis det ikke kunne detekteres. `XK` bruges til Kosovo; `QN` betyder "Ikke relevant", når svartypen ikke indeholder IP-adresseoplysninger.                                                  | `"US"`                 |
| `DomainFQDN`      | streng        | Ja           | Anmodet DNS-ressourcenavn (FQDN).                                                                                                                                                                                                                                                             | `"example.com."`       |
| `FilterListId`    | streng        | Nej          | ID for det første filter, hvis regler matchede forespørgslen. Udeladt ved ingen regelmatch. Reserverede værdier omfatter `adult_blocking`, `blocked_service`, `category`, `custom`, `general_safe_search`, `newly_registered_domains`, `safe_browsing` og `youtube_safe_search`. | `"adguard_dns_filter"` |
| `FilterRule`      | streng        | Nej          | Første regel matchende forespørgslen. For `blocked_service` indeholder den det blokerede tjeneste-ID. For `category` indeholder den kategori-ID’et. Udeladt ved ingen regelmatch.                                                                                | `"example.com^"`       |
| `TimeAddedMs`     | heltal        | Ja           | Unix-tidsstempel i millisekunder for modtagelsen af anmodningen.                                                                                                                                                                                                                                                 | `1629974298000`        |
| `ASN`             | heltal        | Nej          | Autonomt systemnummer (ASN) detekteret fra klientens IP-adresse, om noget.                                                                                                                                                                                                                    | `1234`                 |
| `ElapsedMs`       | heltal        | Ja           | Tid forløbet i millisekunder siden starten af forespørgselsbehandlingen.                                                                                                                                                                                                                                         | `3`                    |
| `RequestType`     | heltal        | Ja           | Numerisk DNS-ressourceposttype for forespørgslen, f.eks. `1` for en `A`-post.                                                                                                                                                                                                    | `1`                    |
| `RequestIdNum`    | heltal        | Ja           | Tilfældigt usigneret 16-bit heltal brugt til at forenkle dublering, når det gamle `u`-felt ikke bruges.                                                                                                                                                                                                          | `12345`                |
| `Action`          | heltal        | Ja           | Filtreringshandling: `0` ukendt, `1` ingen filtrering, `2` forespørgsel blokeret, `3` svar blokeret, `4` forespørgsel tilladt af hvidliste, `5` svar tilladt af hvidliste, `6` forespørgsel eller svar ændret/omskrevet.                                                                         | `2`                    |
| `DNSSEC`          | heltal        | Ja           | Hvorvidt svaret er DNSSEC-valideret: `0` = nej, `1` = ja.                                                                                                                                                                                                                                        | `1`                    |
| `Protocol`        | heltal        | Ja           | DNS-protokol: `0` ukendt, `3` DNS-over-HTTPS, `4` DNS-over-QUIC, `5` DNS-over-TLS, `8` Almindelig DNS, `9` DNSCrypt.                                                                                                                                                                             | `3`                    |
| `ResponseCode`    | heltal        | Ja           | DNS-svarkode (`RCODE`) sendt til klienten.                                                                                                                                                                                                                                                    | `0`                    |
| `IpAddress`       | streng        | Nej          | Klient-IP-adresse. Udeladt, når IP-logføring er deaktiveret for den korresponderende profil.                                                                                                                                                                                                     | `"1.2.3.4"`            |
| `TrackerId`       | string / null | Ja           | Tracker-ID fundet ved at matche det anmodede domæne med berigelsestabellen `dns-trackers`. Sæt til `null`, såfremt ingen tracker er fundet.                                                                                                                                                      | `"google"`             |
| `CategoryId`      | string / null | Ja           | Tracker-kategori-ID returneret af `dns-trackers`-berigelsesopslaget. Sæt til `null`, såfremt ingen tracker er fundet.                                                                                                                                                                            | `"search_engines"`     |

## Leveringsgarantier og -begrænsninger {#delivery-guarantees-and-limitations}

Det er afgørende at forstå, hvordan logfiler batches og leveres ved design af en SIEM-indlæsningspipeline.

- **Kun batchlevering:** Logfiler eksporteres udelukkende i batcher, ikke i realtid. For at holde systemet stabilt og tilpasse sig forskellige trafikniveauer er både batchstørrelser og leveringsintervaller fleksible. Nøjagtige filstørrelser og uploadtider er ikke faste og kan variere i takt med at systemet optimeres.
- **Forventet latenstid og potentielle forsinkelser:** Selvom vi stræber efter minimal latenstid, er der en forventet leveringsforsinkelse. Lejlighedsvise forsinkelser kan opstå grundet høj netværkstrafik, systembelastning eller behandlingskøer.
- **Levering mindst én gang:** Loglevering er garanteret mindst én gang. Selvom dette sikrer, at der sker levering af alle hændelser, kan der lejlighedsvis skrives logpostdubletter til destinationsbucketen (f.eks. under netværksgenforsøg eller gendannelse fra midlertidige forbindelsesafbrydelser). Levering præcis én gang garanteres ikke.
- **Dedublering på klientsiden obligatorisk:** Klienten skal være i stand til at dedublere hændelser i sin SIEM- eller datasø. Dedublering bør håndteres via en kombination af begivenhedens `tidsstempel` og andre unikke identifikatorer.
- **Ingen rækkefølgegarantier:** Grundet den distribuerede natur af vores globale DNS-infrastruktur er den kronologiske rækkefølge af begivenheder ikke garanteret. Hændelser kan ankomme i forkert rækkefølge i en enkelt logfil eller på tværs af forskellige batches.
- **Destination, der ikke kan nås (genforsøg eller drop):** Hvis S3-endepunktet eller en bucket bliver utilgængelig (f.eks. på grund af udløbne legitimationsoplysninger eller netværksafbrydelser hos udbyderen), kan AdGuard DNS forsøge med nye forsøg. Afhængigt af backend-begrænsninger kan loghændelser, genereret under nedbruddet, dog blive droppet (oversprunget) for at forhindre bufferoverløb.
- **Ingen historisk efterfyldning:** Logstreaming er udeluende fremadrettet. Eksport af historiske logfiler genereret før aktivering af streamingfunktionen understøttes ikke.

## Sikkerhed og fortrolighed

DNS-forespørgselslogfiler indeholder højsensitive netværks- og metadata. For at sikre sikkerheden af organisationsdata, bedes flg sikkerhedsprincipper overholdt:

- **Sensitive DNS-data:** Vær opmærksom på, at streamede logfiler kan indeholde sensitive DNS-metadata, herunder forespurgte domæner, enheds-ID'er, klient-IP-adresser og geografiske oplysninger om de aktuelle klienter.
- **Klientenansvar:** Klienten er eneansvarlig for den overordnede sikkerhed af vedkommendes S3-kompatible bucket, herunder opsætning og vedligeholdelse af sikre bucketpolitikker og adgangskontrollister (ACL'er).
- **Begræns adgang:** Vi anbefaler kraftigt at begrænse bucketadgangen til et absolut minimum.
- **Rotation af legitimationsoplysninger:** Legitimationsoplysninger (adgangsnøgler og hemmeligheder), som leveres til AdGuard DNS til bucket-adgang, bør roteres regelmæssigt i overensstemmelse med organisationens interne sikkerhedspolitikker. Da skift af nøgler på cloududbydersiden imidlertid øjeblikkeligt tilbagekalder AdGuards skrivetilladelser, skal nye legitimationsoplysninger opdateres i AdGuard samtidig for at forhindre afbrydelse af loglevering.
- **Indvirkning af kontrolpanelets logningsindstillinger:** Er visse typer logning deaktiveret i AdGuard DNS-kontoindstillingerne, vil dette direkte påvirke skemaet for de eksporterede logfiler. Deaktiveres f.eks. logning af specifikke enhedsmetadata, udelades disse felter (eller udfyldes med null-værdier) i de streamede JSON-filer.
- **Ingen omgåelse af fortrolighedsindstillinger:** AdGuard DNS respekterer strikst opsætningen. AdGusrd vil under ingen omstændigheder forbigå, tilsidesætte eller omgå kontoens fortroligheds- og dataanonymiseringsindstillinger ved eksport af hændelser til det eksterne lager.

## Sådan indlæses logfiler i SIEM

Da AdGuard DNS streamer forespørgselslogfiler til et S3-kompatibelt lager, håndteres opsætningen af indlæsnings-pipelinen til SIEM-platformen udelukkende på brugersiden.

- **S3-kompatibel destination:** AdGuard DNS leverer rå logfiler direkte til den angivne S3-bucket, der fungerer som den centrale landingszone for sikkerhedsdataene.
- **Tilpasset indlæsnings-pipeline:** Disse logfiler kan forbindes og indlæses i et SIEM- eller analysesystem via egne data-pipelines, tilpassede scripts eller ETL-processer.
- **Standard S3-forbindelser:** For større platforme, såsom **Splunk**, **Microsoft Sentinel** og **Elastic**, benyttes typisk deres egne respektive S3-konnektorer, input eller logindsamlere.
- **Infrastrukturafhængig opsætning:** Den nøjagtige opsætning, indeksstrukturering og parsingregler i en SIEM afhænger i høj grad af organisationens specifikke infrastruktur, dataskemaer og opbevaringspolitikker.

## Fejlfinding

Dette afsnit beskriver almindelige integrationsproblemer, som kan opleves, når forespørgselslogstreamen opsættes eller køres, samt trin til at løse dem.

### Logfiler vises ikke i bucket'en

**Potentiel årsag:** Opsætningen på AdGuard-siden er endnu ikke fuldført, eller forkerte forbindelsesparametre er angivet.

**Løsning:** Kontrollér, at der er modtaget en bekræftelses-e-mail fra den AdGuard-kundeansvarlige om, at stream-opsætningen er fuldført. Dobbelttjek alle delte parametre (bucket-navn, endepunkt, region).

### Forkerte bucket-tilladelser

**Potentiel årsag:** De legitimationsoplysninger, som er delt med AdGuard, har ikke tilstrækkelige tilladelser til at skrive objekter til bucket'en.

**Løsning:** Sørg for, at den AWS IAM-politik (eller udbyderens tilsvarende), der er knyttet til de angivne adgangsnøgler, udtrykkeligt tildeler `s3:PutObject`-tilladelse til mål-bucket og -præfiks.

### S3-legitimationsoplysninger udløbet

**Potentiel årsag:** Adgangsoplysningerne er udløbet, eller de blev roteret/tilbagekaldt jf. organisationens interne sikkerhedspolitikker.

**Løsning:** Generér et nyt sæt adgangs- og hemmelige nøgler, og del dem sikkert med den AdGuard-kundeansvarlige for at opdatere stream-opsætningen.

### Dubletter dukkede op på logdestinationen

**Potentiel årsag:** Netværksgenforsøg udløst af leveringsmodellen "mindst én gang" under forbigående netværksafbrydelser.

**Løsning:** Dette er forventet adfærd i distribuerede lognings-pipelines. Opsæt dedubleringsregler i SIEM'en eller databasen via en kombination af `timestamp`, `domain` og `device_id` (eller andre unikke hændelsesidentifikatorer).

### Latens er højere end forventet

**Potentiel årsag:** Midlertidig netværksoverbelastning, systembelastning eller bufferforsinkelser på cloududbyderens side.

**Løsning:** Tjek driftsstatussen for den S3-kompatible cloududbyder. Overskrider forsinkelser i loglevering konsekvent det forventede batchinterval (f.eks. mere end 15–30 minutter), kontakt AdGuard-supporten for at tjekke statussen for vores udgående leveringskøer.

### Manglende felter i logfilerne

**Potentiel årsag:** Specifikke lognings- eller fortrolighedsfunktioner (såsom logning af klient-IP eller indsamling af enhedsmetadata) er deaktiveret i indstillingerne på AdGuard DNS-kontrolpanelet.

**Løsning:** Gennemgå fortroligheds- og logningsindstillinger i AdGuard DNS-kontrolpanelet. Eksporten af logstreaming overholder nøje disse indstillinger og omgår ikke dataminimeringspræferencerne.

### Enterprise-status ændret

**Potentiel årsag:** Enterprise-abonnementet er udløbet, opsagt eller kontoen er nedgraderet.

**Løsning:** Logstreaming deaktiveres automatisk, såfremt kontoen mister Enterprise-status. Kontakt den AdGuard-kundeansvarlige for at genoprette abonnementet og genaktivere streamen.

### SIEM'en kan ikke fortolke eller opdele JSON-tabellen

**Potentiel årsag:** Mange S3-logindsamlere forventer som standard Newline Delimited JSON (NDJSON/JSONL). Da de eksporterede logfiler er formateret som en minificeret JSON-tabel (`[...]`), kan indsamleren muligvis ikke fortolke filen eller indlæse hele tabellen som en enkelt, massiv loghændelse i stedet for at opdele den i individuelle forespørgselsposter.

**Løsning:** Opsæt S3-konnektoren, logafsenderen eller SIEM-fortolkeren til at håndtere standard JSON-twbeller. Indlæsnings-pipelinen skal være indstillet til at udpakke tabellen og opdele dens elementer i separate logposter før indeksering.

### Komprimerede filer dekomprimeres ikke

**Potentiel årsag:** Komprimeringsformatet (f.eks. `.gz`), der anvendes under eksporten, er enten ikke understøttet eller forkert opsat i SIEM'ens indlæsningskonnektor.

**Løsning:** Tjek dekomprimeringsindstillingerne på SIEM-konnektoren (sørg f.eks. for, at automatisk gzip-dekomprimering er aktiveret for hentning af S3-objekter).

## FAQ

### Kan logfiler streames direkte til Splunk eller Microsoft Sentinel?

Nej. I den nuværende MVP-version understøttes direkte streaming til SIEM-endepunkter eller API-er (såsom Splunk HEC) ikke. Logfiler skal først skrives til en S3-kompatibel bucket, som SIEM derefter kan monitorere og indlæse fra via standard S3-konnektorer.

### Kan andre lagringsmuligheder end S3 anvendes?

Nej. P.t. understøttes kun S3-kompatibel lagring. Standardmuligheder omfatter Amazon S3 eller kompatible tilbud fra andre cloududbydere (f.eks. Cloudflare R2, Backblaze B2, Wasabi eller MinIO). Direkte integration med andre lagringstyper (såsom direkte Azure Blob eller SFTP) er ikke tilgængelig p.t.

### Er det muligt at hente historiske logfiler?

Nej. Logstreaming er udelukkende fremadrettet. Kun DNS-forespørgselshændelser genereret _efter_, at streamingfunktionen er blevet aktiveret og opsat korrekt, eksporteres. Historisk efterfyldning af logfiler understøttes ikke.

### Hvor hurtigt leveres logfiler?

Logfiler leveres i komprimerede batches frem for i realtid. For yderligere oplysninger om batchintervaller og leveringsmekanismer henvises til afsnittet [Leveringsgarantier og -begrænsninger](#delivery-guarantees-and-limitations).

### Er leveringen af hver eneste hændelse garanteret?

Ja, under normale driftsforhold. Bliver destinations-bucket'en imidlertid utilgængelig, kan loghændelser i sidste ende blive droppet, når først grænsen for genforsøgsbufferen overskrides. Se afsnittet [Leveringsgarantier og -begrænsninger](#delivery-guarantees-and-limitations) for yderligere oplysninger.

### Er dublerede hændelser mulige på destinationen?

Ja. Under leveringsmodellen "mindst-én-gang" kan gentagne netværksforsøg udløst af forbigående udfald medføre, at dublerede loghændelser skrives til bucket'en. Indlæsnings-pipelinen eller SIEM'en skal opsættes til at håndtere dedublering.

### Hvilke felter medtages i logfilerne?

Logfilerne indeholder vigtige DNS-forespørgselsfelter såsom `TimeAddedMs` (tidsstempel), `DomainFQDN`, `RequestType`, `Action` og `ClientCountry`. For den fulde liste over felter og datatyper henvises til afsnittet [Feltreference](#fields-reference). Kontofortrolighedsindstillinger påvirker direkte disse logfiler; sensitive felter (såsom `IpAddress`) udelades eller sættes til `null`, hvis logføring er deaktiveret i kontrolpanelet.

### Hvad sker der, hvis Enterprise-statussen mistes?

Logstreaming er udelukkende en funktion på Enterprise-niveau. Er kontoen ikke længere på en Enterprise-abonnemenystype, eller abonnementet udløber, deaktiveres streamingtjenesten automatisk.

### Kan logstreaming deaktiveres?

Ja. Logstreamen kan til enhver tid deaktiveres pr. anmodning. Dette gøres ved at kontakte den dedikerede AdGuard-kundeansvarlige eller AdGuards supportteam via `support@adguard-dns.io`.

### Kan der opsættes flere S3-streamingdestinationer?

Nej. Den aktuelle version understøtter kun opsætning af én S3-kompatibel streamingdestination pr. Enterprise-organisation.
