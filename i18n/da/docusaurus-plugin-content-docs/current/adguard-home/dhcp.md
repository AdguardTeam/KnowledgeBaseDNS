---
title: DHCP
sidebar_position: 10
---

AdGuard Home kan anvendes som en DHCP-server. Denne side beskriver, hvorledes dette gøres.

## Forudsætninger {#prerequisites}

1. Sørg for, at der anvendes et OS, under hvilket AdGuard Home understøtter DHCP. Vi understøtter p.t. ikke DHCP på Windows.

2. Sørg for, at maskinen er opsat med en statisk IP-adresse.

## Opsætning {#configuration}

Se [oversigten over DHCP-opsætningsindstillingerne][dhcp-conf]. Der er flere DHCP-parametre, som ikke kan opsættes via AdGuard Home-administratorpanelet. Disse beskrives nedenfor.

:::note

AdGuard Home opsætter som standard sig selv som DNS-server for DHCP-klienterne. Standardlejeperioden er 24 timer.

:::

[dhcp-conf]: /adguard-home/configuration#dhcp

### DHCPv4-indstillinger {#dhcpv4-options}

Feltet `options` bruges til eksplicit at angive værdierne for DHCP-indstillinger og ændre svaret. I overensstemmelse med _Afsnit 4.3.1_ i [RFC 2131][rfc-2131] tilsidesætter disse indstillinger standardindstillingernes værdier, som er indstillet af Adguard Home og anmodet om af en klient, hvilket betyder, at såfremt en tilpasset DNS-serveradresser ønskes opsat via indstilling `6` (Domænenavnserver), bør Adguard Homes egne adresser også tilføjes dér. Ellers virker AdGuard Homes filtrering ikke for de DHCP-klienter, som modtager disse DNS-serveradresser.

Hver valgmulighed begynder med en kode skrevet som et decimalt heltal. Se [RFC 2132][rfc-2132] for de faktiske DHCP-indstillingskoder og tilladte længder. Koden efterfølges af indstillingens type og værdi. P.t. understøttes flg. typer:

- `bool`: Læsevenlig form af en boolesk værdi og har en længde på 1 oktet.

  **Eksempel**:

    ```yaml
    'options':
    - '19 bool 0'     # Deaktivér IP-videresendelse for værter.
    - '20 bool t'     # Aktivér ikke-lokal kilderutning for værter.
    - '29 bool F'     # Deaktivér registrering af undernetmaske.
    - '30 bool true'  # Aktivér levering af maske for understøttende værter.
    - '36 bool False' # Få værterne til at bruge RFC 894 til Ethernet-indkapsling.
    ```

- `del`: Indstillingen uden værdi bruges til ubetinget at fjerne indstillinger fra serverens svar (hvilket kan føre til mærkelig adfærd, så anvend med forsigtighed).

  Da listen over indstillinger fortolkes sekventielt fra den første til den sidste, kan den efterfølgende indstilling tilsidesætte de foregående. Så dette:

    ```yaml
    'options':
    - '19 bool T'
    - '19 del'
    - '20 del'
    - '20 bool F'
    ```

  angiver, at indstillingen `19` skal fjernes, og at indstillingen `20` skal sættes til `false`.

- `dur`: En læsevenlig repræsentation af en varighed i intervallet fra 0 til 4.294.967.296 sekunder (ca. 136 dage) bestående af _4_ oktetter, ligesom et 32-bit heltal uden fortegn.

  **Eksempel**:

    ```yaml
    'options':
    - '24 dur 10m'
    ```

- `hex`: En sekvens af hexadecimale tal af vilkårlig længde.

  **Eksempel**:

    ```yaml
    'options':
    - '25 hex 0044012801FC03EE05D407D211001FE645FA'
    ```

- `ip`: Accepterer en IPv4-adresse og har en længde på _4_ oktetter, ligesom selve IPv4-adressen.

  **Eksempel**:

    ```yaml
    'options':
    - '28 ip 192.168.0.255'
    ```

- `ips`: Accepterer en kommasepareret liste over IPv4-adresser. Den har en vilkårlig længde, men er altid et multiplum af _4_ oktetter.

  **Eksempel**:

    ```yaml
    'options':
    - '6 ips 1.2.3.4,1.2.3.5'
    ```

- `text`: Accepterer en vilkårlig UTF-8-kodet streng og har længden af den kodede tekst.

  **Eksempel:**

    ```yaml
    'options':
    - '252 text http://server.domain/proxyconfig.pac'
    ```

- `u8`: Et decimaltal i intervallet 0 til 255, der fylder _1_ oktet, ligesom et 8-bit heltal uden fortegn.

  **Eksempel:**

    ```yaml
    'options':
    - '23 u8 64'
    ```

- `u16`: Et decimaltal i intervallet 0 til 65535, der fylder _2_ oktetter, ligesom et 16-bit heltal uden fortegn.

  **Eksempel:**

    ```yaml
    'options':
    - '22 u16 576'
    ```

:::note

Kontrollér grundigt, at indstillingens format og værdi er gyldige for den valgte type i overensstemmelse med [RFC 2132][rfc-2132] eller andre. AdGuard Home udfører ingen indstillingsspecifikke valideringer.

:::

Der er p.t. et sæt indstillinger angivet i _Bilag A_ i [RFC 2131][rfc-2131] med standardværdierne valgt iht. de dokumenter, som er nævnt der:

| Indstilling                              | Værdi                                                           |
| ---------------------------------------- | --------------------------------------------------------------- |
| IP-videresendelse                        | Deaktiveret                                                     |
| Ikke-lokal kilderutning                  | Deaktiveret                                                     |
| Maksimal størrelse på datagramgensamling | 576 byte                                                        |
| Standard-IP-levetid                      | 64 sekunder                                                     |
| Indstilling for sti-MTU-aldringstimeout  | 10 minutter                                                     |
| Stil-MTU-plateautabel                    | Se [Table 7.1 in RFC 1191][rfc-1191-tbl-7.1]                    |
| MTU-grænseflade                          | 576 byte                                                        |
| Alle undernet er lokale                  | Falsk                                                           |
| Udfør maskeopdagelse                     | Falsk                                                           |
| Maskeleverandør                          | Falsk                                                           |
| Udfør routeropdagelse                    | Sand                                                            |
| Router-anmodningsadresse                 | 224.0.0.2       |
| Broadcastadresse                         | 255.255.255.255 |
| Anvend trailerindkapsling                | Falsk                                                           |
| ARP-cachetimeout                         | 1 minut                                                         |
| Ethernet-indkapslingsversion             | RFC 894                                                         |
| Standard TCP-TTL                         | 60 sekunder                                                     |
| TCP-keepalive-interval                   | 2 timer                                                         |
| Indsæt TCP Keepalive-skrammel            | Sand                                                            |
| Routere                                  | `gateway_ip` fra opsætning                                      |
| Undernetmaske                            | `subnet_mask` fra opsætning                                     |

Nogle af disse værdier kan virke forældede eller forårsage problemer med visse DHCP-klientimplementeringer. Ifølge [RFC 2131][rfc-2131] returneres indstillingerne kun, hvis klienten anmoder om dem i indstilling `55` (Parameter Request List), når de ikke er opsat eksplicit.

### DHCPv6-indstillinger {#dhcpv6-options}

Er indstillingen `dhcp.dhcpv6.ra_slaac_only` angivet til `true`, sender den RA-pakker, som tvinger klienterne til at bruge SLAAC. DHCPv6-serveren startes ikke i dette tilfælde.

Er indstillingen `dhcp.dhcpv6.ra_allow_slaac` angivet til `true`, sender den RA-pakker, som tillader klienterne at vælge mellem SLAAC og DHCPv6.

[rfc-1191-tbl-7.1]: https://datatracker.ietf.org/doc/html/rfc1191#section-7.1
[rfc-2131]: https://datatracker.ietf.org/doc/html/rfc2131
[rfc-2132]: https://datatracker.ietf.org/doc/html/rfc2132

## Automatiske værter {#auto-hosts}

Maskiner på netværket kan nemmere tilgås vha. de værtsnavne, de sender i DHCP-anmodningerne, med et opsætbart topdomæne (TLD). Som standard er TLD'et `lan`. Findes f.eks. en maskine med navnet “workstation” på netværket, og den sender en DHCP-anmodning med indstilling 12 angivet som `workstation`, kan den tilgås via HTTP på værten `http://workstation.lan`.

Der kan også angives et tilpasset TLDA eller domænenavn via feltet `dns.local_domain_name` i [opsætningsfilen][dhcp-conf].

## Gemte lejemål {#stored-leases}

DHCP-lejemål gemmes i `data/leases.json`. Filformatet er ikke stabilt og kan ændres i fremtidige udgivelser.
