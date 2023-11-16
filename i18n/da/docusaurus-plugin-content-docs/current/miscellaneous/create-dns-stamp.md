# Sådan opretter eget DNS-stempel til Sikker DNS

Denne guide viser dig, hvordan et eget DNS-stempel til sikker DNS oprettes. Sikker DNS er en tjeneste, der forbedrer internetsikkerhed og fortrolighed ved at kryptere DNS-forespørgslerne. Dette forhindrer forespørgslerne i at blive opsnappet eller manipuleret af ondsindede aktører.

Sikker DNS bruger normalt `tls://`, `https://` eller `quic://` URL'er. Dette er tilstrækkeligt for de fleste brugere og er den anbefalede måde.

Har man brug for yderligere sikkerhed, som f.eks. forudopløste server-IP'er og certifikat pinning med hash, kan man generere sit eget DNS-stempel.

## Introduktion til DNS-stempler

DNS-stempler er korte strenge indeholdende alle de nødvendige oplysninger for at oprette forbindelse til en sikker DNS-server. De forenkler processen med at opsætte sikker DNS, da brugeren ikke behøver at angive alle disse data manuelt.

DNS-stempler muliggør tilpasning af Sikker DNS-indstillinger ud over de sædvanlige URL'er. De giver især mulighed for at angive faste (hard-koded) serveradresser, bruge certifikat-hashing mv. Disse funktioner gør DNS-stempler til en mere robust og alsidig mulighed til opsætning af Sikker DNS-indstillinger.

## Valg af protokol

Typer af Sikker DNS inkluderer `DNS-over-HTTPS (DoH)`, `DNS-over-QUIC (DoQ)`og `DNS-over-TLS (DoT)` og en række andre. Valget af en af disse protokoller afhænger af brugskonteksten.

## Oprettelse af et DNS-stempel

1. Åbn [DNSCrypt Stamp Calculator](https://dnscrypt.info/stamps/).

2. Afhængigt af den valgte protokol, vælg den korresponderende protokol fra rullemenuen (DoH, DoT eller DoQ).

3. Udfyld de nødvendige felter:
    - **IP-adresse**: Angiv DNS-serverens IP-adresse. Bruges DoT- eller DoQ-protokollen, så sørg for, at den relevante port ligeledes er angivet.

    :::note

    Dette felt er valgfrit og bør bruges med forsigtighed: Brug af denne indstilling kan afbryde internet på IPv6-netværk.


:::
    - **Hashes**: Angiv SHA256-sammendraget for et af de TBS-certifikater, der findes i valideringskæden. Leverer den anvendte DNS-server en færdig hash, så find og kopiér denne. Ellers kan den hentes ved at følge vejledningen i afsnittet [*Hentning af Certifikat Hash'en*](#obtaining-the-certificate-hash).

    :::note

    Dette felt er valgfrit


:::

    - **Værtsnavn**: Angiv DNS-serverens værtsnavn. Dette felt bruges til bekræftelse af servernavnet i DoT- og DoQ-protokoller.

    - For **DoH**:
      - **Sti**: Angiv stien til udførelse af DoH-forespørgsler. Dette er normalt `"/dns-query"`, men din udbyder kan bruge en anden sti.

    -     For **DoT og DoQ**:
      - Der er normalt ingen bestemte felter til disse protokoller i dette værktøj. Sørg blot for, at den i opløseradressen angivne port også er den korrekte port.

    - I afsnittet **Egenskaber** kan de relevante egenskaber markeres, såfremt de er kendte og relevante for DNS-serveren.

4. Dit stempel genereres automatisk og vil fremgå i feltet **Stamp**.

### Indhentning af certifikat-hash

For at udfylde **hash'ene for serverens certifikat**-felt kan flg. kommando bruges, hvor `<IP_ADDRESS>`, `<PORT>`og `<SERVER_NAME>` erstattes med de korresponderende værdier for din DNS-server:

```bash
echo | openssl s_client -connect <IP_ADDRESS>:<PORT> -servernavn <SERVER_NAME> 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256
```

:::caution

Resultatet af hash-kommandoen kan ændre sig over tid i takt med, at serverens certifikat opdateres. Holder DNS-stemplet derfor pludselig op holder op med at virke, skal certifikat-hash'en muligvis genberegnes og et nyt stempel genereres. Regelmæssig opdatering af DNS-stemplet vil medvirke til at sikre den fortsatte sikre drift af Sikker DNS-tjenesten.

:::

## Brug af DNS-stemplet

Du har nu dit eget DNS-stempel, som kan bruges til at opsætte Sikker DNS. Dette stempel kan angives i AdGuard og AdGuard VPN for forbedret internetfortrolighed og sikkerhed.

## Eksempel på oprettelse af et DNS-stempel

Lad os se på et eksempel på oprettelsen af et stempel til AdGuard DNS vha. DoT:

1. Åbn [DNSCrypt Stamp Calculator](https://dnscrypt.info/stamps/).

2. Vælg protokollen DNS-over-TLS (DoT).

3. Udfyld flg. felter:

    - **IP-adresse**: Angiv DNS-serverens IP-adresse og port. I dette eksempel `94.140.14.14:853`.

    - **Værtsnavn**: Angiv DNS-serverens værtsnavn. I dette eksempel `dns.adguard-dns.com`.

    - **Hashes**: Eksekvér kommandoen

    ```bash
    echo | openssl s_client -connect 94.140.14.14:853 -servername dns.adguard-dns.com 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256
    ```

    Resultatet er `1ebea9685d57a3063c427ac4f0983f34e73c129b06e7e7705640cacd40c371c8` Indsæt denne SHA256-hash af serverens certifikat i feltet.

4. Lad afsnittet Egenskaber stå tomt.

5. Dit stempel genereres automatisk og vil fremgå i feltet **Stamp**.
