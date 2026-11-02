---
title: White-label-eindpunt (IP-adres van het account)
sidebar_position: 7
---

Aangepaste domeinen stellen partners in staat om AdGuard DNS onder hun eigen merk aan te bieden. Met het Zakelijk-abonnement kan deze service op een privé-IP-adres draaien: deze functie heet _Account-IP_. Domeinen verwijzen naar het _Account-IP_ via een A-record in plaats van een CNAME-record, dat wordt gebruikt voor standaard aangepaste domeinen.

:::note

**CNAME** verwijst jouw domein naar een ander domein (`dns.partner.com` → `cname.adguard-dns.com`). Het werkelijke IP-adres wordt omgezet via dat tweede domein, waardoor het verkeer via de gedeelde infrastructuur loopt die het bedient.

**A-record** verwijst je domein rechtstreeks naar een IP-adres (`dns.partner.com` → `203.0.113.10`). Er zit geen domein tussen: het adres waarnaar jouw domein verwijst, is het adres dat het verkeer afhandelt.

:::

Elk account kan één _Account-IP_ hebben en je kunt er meerdere domeinen naar laten verwijzen. Dit is niet hetzelfde als de toegewezen IPv4- en IPv6-adressen die worden gebruikt om apparaten te identificeren: een _Account-IP_ is het adres waarnaar jouw aangepaste domeinen verwijzen.

## Hoe je een Account-IP verkrijgt

Neem contact op met je accountmanager of het ondersteuningsteam via [support@adguard-dns.io](mailto:support@adguard-dns.io) om een _Account-IP_ aan te vragen.

Zodra het adres is toegewezen, verschijnt het blok _White-label-eindpunt_ in _Instellingen_ → _Geavanceerde instellingen_ → _Aangepaste domeinen_, waarin jouw _Account-IP-adres_ wordt weergegeven. Tot die tijd wordt het blok niet weergegeven.

![White-label-eindpunt](https://cdn.adtidy.org/content/kb/dns/enterprise/whitelabel_endpoint_en.png)

:::caution

Als jouw account het Zakelijk-abonnement verlaat, wordt het adres inactief en werken domeinen die ernaar verwijzen niet meer. Aangepaste domeinen blijven beschikbaar in het **Team**-abonnement, maar alleen via een CNAME-record — om de gepauzeerde domeinen terug te halen, voeg je ze opnieuw toe als standaard aangepaste domeinen.

Het adres zelf blijft gereserveerd voor je account, dus als je terugkeert naar het Zakelijk-abonnement, krijg je hetzelfde weer terug.

:::

## Hoe je een domein naar het IP-adres van jouw account laat verwijzen

De configuratie volgt dezelfde stappen als bij een standaard aangepast domein, behalve dat je een A-record aanmaakt in plaats van een CNAME. Bovendien wordt voor DoH-domeinen het certificaat niet automatisch uitgegeven; je moet jouw eigen certificaat uploaden.

1. Kies in _Aangepaste domeinen_ het protocol: _DoH-domein toevoegen_ (voor DNS-over-HTTPS) of _DoT/DoQ-domein toevoegen_ (voor DNS-over-TLS of DNS-over-QUIC).

   ![Het protocol kiezen](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_protocol_en.png)

2. Voer het domein in dat je wilt gebruiken (bijv. `dns.partner.com`) en klik op _Volgende_. Je hebt toegang nodig tot het DNS-beheerpaneel van dit domein.

   ![Het domein invoeren](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_domain_en.png)

3. Het volgende scherm toont de waarden voor jouw DNS-record: jouw domein onder _Naam (Host)_ en jouw _Account-IP_ onder _Waarde (Verwijst naar / IP-adres)_. Laat dit scherm open, ga naar het configuratiescherm van jouw DNS-provider en maak een A-record aan met die waarden. Maak geen CNAME-record aan; domeinen op een _Account-IP_ verwijzen rechtstreeks naar het adres.

   ![DNS-recordwaarden](https://cdn.adtidy.org/content/kb/dns/enterprise/a_record_en.png)

4. Klik in het AdGuard DNS-scherm met de recordwaarden op _Verifiëren_. Als het record nog niet is gepropageerd of ergens anders naar verwijst, mislukt de verificatie. Controleer het record en probeer het over een paar minuten opnieuw.

5. Upload een TLS-certificaat. Certificaten worden niet automatisch uitgegeven voor domeinen op een _Account-IP_:

   - Voor **DoT/DoQ** upload je een wildcardcertificaat (`*.partner.com`), net als voor een standaard aangepast domein.
   - Voor **DoH** upload je ook je eigen certificaat. Dit verschilt van de standaardprocedure, waarbij AdGuard DNS er een voor jou kan genereren.

   Totdat u een certificaat toevoegt, toont het domein de status _Geen certificaat_ en kunnen jouw klanten er geen verbinding mee maken.

   ![Een certificaat uploaden](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_certificate_en.png)

:::note

Verlenging staat aan jouw kant. Je ontvangt een e-mailherinnering voordat het certificaat verloopt. Wanneer dit gebeurt, stopt jouw domein met werken totdat je een nieuw certificaat uploadt.

:::

## Bestaande aangepaste domeinen en Account-IP-adres

Domeinen die je hebt toegevoegd voordat je een _Account-IP_ kreeg, worden er niet automatisch naartoe verplaatst. Ze blijven werken via hun CNAME-record, zoals voorheen.

Om een domein over te zetten naar jouw _Account-IP_, begint je met het verwijderen van het CNAME-record bij jouw DNS-provider; een domein kan niet tegelijkertijd zowel een CNAME- als een A-record hebben. Verwijder vervolgens het domein in AdGuard DNS en voeg het opnieuw toe volgens de bovenstaande stappen.

:::caution

Jouw klanten kunnen het domein niet gebruiken tussen het moment waarop jij het verwijdert en het moment waarop de nieuwe configuratie is geverifieerd.

:::

## Beperkingen

Een _Account-IP_ wijzigt het adres waarnaar jouw domein verwijst. Een paar dingen die het niet dekt:

- Het IP-adres van het account is niet volledig white-label op netwerkniveau. Een WHOIS-, RDAP- of ASN-lookup van het IP-adres kan AdGuard nog steeds identificeren als de provider van de onderliggende IP-infrastructuur.
- Reverse DNS kan niet worden aangepast, dus een PTR-lookup retourneert jouw domein niet.
- DNS-serverdetectie (DDR) is niet beschikbaar op een _Account-IP_.
- Certificaten met het IP-adres in het SAN-veld worden niet ondersteund, zodat jouw klanten verbinding maken via de domeinnaam in plaats van het adres zelf.
- Het gebruik van je eigen IP-bereik (BYOIP) wordt niet ondersteund, aangezien het adres wordt toegewezen door AdGuard.
- DNSCheck-domeinen, die worden gebruikt om de DNS-verbinding van een apparaat te verifiëren, worden nog steeds omgezet via de infrastructuur van AdGuard.
