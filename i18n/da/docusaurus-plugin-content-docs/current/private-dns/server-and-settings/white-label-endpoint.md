---
title: White-label-endepunkt (konto-IP-adresse)
sidebar_position: 7
---

Tilpassede domæner giver partnere mulighed for at tilbyde AdGuard DNS under egne brands. Med Enterprise-abonnementtypen kan denne tjeneste køre på en privat IP-adresse, en funktion kaldet _Konto IP_. Domæner peger på _Konto-IP_ via en A-record i stedet for en CNAME-pos brugt til standard tilpassede domæner.

:::note

**CNAME** peger dit domæne mod et andet domæne (`dns.partner.com` → `cname.adguard-dns.com`). Den reelle IP-adresse opløses via det andet domæne, så trafikken går igennem den delte infrastruktur, det betjener.

**A-post** peger dit domæne direkte mod en IP-adresse (`dns.partner.com` → `203.0.113.10`). Der er intet domæne imellem: Adressen, dit domæne opløses til, er den, der håndterer trafikken.

:::

Hver konto kan have én _Konto IP_, og der kan peges flere domæner mod den. Dette er ikke det samme som de dedikerede IPv4- og IPv6-adresser brugt tilenhedsidentifikation: En _Konto IP_ er den adresse, de tilpassede domæner opløser til.

## Sådan fås en Konto IP

For at anmode om en _Konto IP_, kontakt den kontoansvarlige eller supportteamet via [support@adguard-dns.io](mailto:support@adguard-dns.io).

Når adressen er tildelt, vises blokken _White-label-endepunkt_ i _Indstillinger_ → _Avancerede indstillinger_ → _Tilpassede domæner_, der viser din _Konto-IP-adresse_. Indtil da vises blokken ikke.

![White-label-endepunkt](https://cdn.adtidy.org/content/kb/dns/enterprise/whitelabel_endpoint_en.png)

:::caution

Flyttes din konto fra Enterprise-abonnementet, bliver adressen inaktiv, og domæner, som peger på den, ophører med at fungere. Tilpassede domæner forbliver tilgængelige i **Team**-abonnementstypen, men kun via en CNAME-post – for at få de pauserede domæner tilbage, skal de tilføjes igen som standard tilpassede domæner.

Selve adressen forbliver reserveret til din konto, så returneres der til Enterprise-abonnementet, får du den samme adresse tilbage.

:::

## Sådan peges et domæne mod din Konto IP-adresse

Opsætningen følger de samme trin som et standard tilpasset domæne, bortset fra at der oprettes en A-post i stedet for et CNAME. For DoH-domæner udstedes certifikatet heller ikke automatisk – du skal uploade dit eget.

1. I _Tilpassede domæner_, vælg protokollen: _Tilføj DoH-domæne_ (til DNS-over-HTTPS) eller _Tilføj DoT/DoQ-domæne_ (til DNS-over-TLS eller DNS-over-QUIC).

   ![Valg af protokol](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_protocol_en.png)

2. Angiv det ønskede det domæne (f.eks. `dns.partner.com`), og klik på _Næste_. Du skal have adgang til dette domænes DNS-håndteringspanel.

   ![Angivelse af domæne](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_domain_en.png)

3. Den næste skærm viser værdierne for DNS-posten: Dit domæne under _Navn (Vært)_ og din _Konto IP_ under _Værdi (Peger mod/IP-adresse)_. Lad denne skærm stå åben, gå til DNS-udbyderens kontrolpanel og opret en A-post med disse værdier. Opret ikke en CNAME-post — domæner på en _Konto-IP_ peger direkte på adressen.

   ![DNS-postværdier](https://cdn.adtidy.org/content/kb/dns/enterprise/a_record_en.png)

4. Klik på _Bekræft_ på AdGuard DNS-skærmen med postværdierne. Er posten ikke offentliggjort endnu eller peger et andet sted hen, mislykkes bekræftelsen. Tjek posten, og forsøg igen efter et par minutter.

5. Upload TLS-certifikat. Certifikater udstedes ikke automatisk til domæner på en _Konto IP_:

   - Til **DoT/DoQ** uploades et jokertegnscertifikat (`*.partner.com`), ligesom for et standard tilpasset domæne.
   - Til **DoH** uploades også dit eget certifikat. Dette adskiller sig fra standardflowet, hvor AdGuard DNS kan generere et til dig.

   Indtil et certifikat tilføjes, viser domænet statussen _Intet certifikat_, og dine kunder kan ikke oprette forbindelse til det.

   ![Upload af certifikat](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_certificate_en.png)

:::note

Fornyelse sker på din side. Du modtager en e-mail-påmindelse, inden certifikatet udløber. Ved licensudløb ophører domænet med at virke, indtil du uploader et nyt certifikat.

:::

## Eksisterende tilpassede domæner og Konto IP-adresse

Domæner tilføjet, før du fik en _Konto IP_, flyttes ikke automatisk til den. De fungerer fortsat via deres CNAME-post ligesom før.

For at flytte et domæne til din _Konto IP_, start med at slette dets CNAME-post hos DNS-udbyderen – et domæne kan ikke have en CNAME- og en A-post samtidigt. Slet derefter domænet i AdGuard DNS, og tilføj det igen ved at følge ovenstående trin.

:::caution

Dine kunder vil ikke kunne bruge domænet fra dét øjeblik, du sletter det, og til dét øjeblik, den nye opsætning er bekræftet.

:::

## Begrænsninger

En _Konto IP_ ændrer den adresse, dit domæne opløses til. Et par ting, den ikke dækker:

- Konto IP-adresse er ikke fuldt ud white-label på netværksniveau. Et WHOIS-, RDAP- eller ASN-opslag på IP-adressen kan stadig identificere AdGuard som udbyder af den underliggende IP-infrastruktur.
- Omvendt-DNS kan ikke tilpasses, så et PTR-opslag vil ikke returnere dit domæne.
- DNS-serveropdagelse (DDR) er ikke tilgængelig på en _Konto IP_.
- Certifikater med IP-adressen i SAN-feltet understøttes ikke, så dine kunder opretter forbindelse via domænenavnet i stedet for selve adressen.
- Brug af dit eget IP-område (BYOIP) understøttes ikke, da adressen tildeles af AdGuard.
- DNSCheck-domæner, der bruges til at bekræfte en enheds DNS-forbindelse, opløses stadig via AdGuards infrastruktur.
