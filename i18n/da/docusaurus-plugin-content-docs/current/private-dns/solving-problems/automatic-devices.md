---
title: Automatisk enhedstilslutning
sidebar_position: 4
---

Systemadministratorer har ofte brug for at håndtere mange enheder på én gang. For at reducere mængden af manuelt arbejde kan funktionen [_Automatisk tilslutning_][ac] bruges.

Denne artikel beskriver mere detaljeret, hvordan en systemadministrator kan opsætte netværket til automatisk at oprette enheder på en AdGuard DNS-server via tilgængelige data.

[ac]: /private-dns/connect-devices/other-options/automatic-connection

## Forudsætninger

Sørg for, at funktionen er aktiveret på DNS-serveren. Gør dette ved at gå til _Kontrolpanel → Servere → Serverindstillinger → Avanceret_ og tjekke, at indstillingen _Tilslut enheder automatisk_ er slået til.

## Basisformatet

Basisformatet for værtsnavnet eller URL'en brugt til at oprette automatiske enheder er:

- til \*\*DoT og DoQ:

    ```none
    ${TYPE}-${SERVERID}-${HUMANID}.d.adguard-dns.com
    ```

- til DoH:

    ```none
    https://d.adguard-dns.com/dns-query/${TYPE}-${SERVERID}-${HUMANID}
    ```

### Enhedstype

Enhedstyper bruges til lettere at skelne imellem forskellige enheder i UI'en. En enhedstype er obligatorisk for automatisk identifikation af en enhed.

Følgende forkortelser understøttes:

- `adr`: Android-enheder.
- `gam`: Spillekonsoller.
- `ios`: Apple iOS og andre Apple-operativsystemer til mobilenheder.
- `lnx`: Enheder med Linux-baserede operativsystemer.
- `mac`: Apple macOS-enheder.
- `rtr`: Routere.
- `stv`: Smart TV'er.
- `win`: Microsoft Windows-enheder.
- `otr`: Generiske enheder.

### DNS-server ID

Den næste obligatoriske parameter er ID'et for AdGuard DNS-serveren, enheden er tilsluttet.

ID'et kan hentes fra URL'en via _Kontrolpanel → Servere → Serverindstillinger_-siden. Er URL'en f.eks. `https://adguard-dns.io/en/dashboard/settings/server?server_id=abcd1234`, er DNS-serverens ID `abcd1234`.

ID'et udgør altid præcist otte hexadecimale cifre.

### Menneskelæsbar enhedsidentifikator

Den menneskeligt læsbare identifikator-del bruges både til at differentiere enheder fra hinanden og fungerer også som grundlag for enhedsnavnet brugt i UI'et og i reglerne med `client`-modifikatoren. Disse identifikatorer kan automatisk oprettes baseret på andre identifikatorer, såsom værtsnavne registreret i DHCP-serveren.

Følgende regler gælder:

- Kun ASCII.

- Tegn tilladt i identifikatorerne udgør cifre fra nul til ni, bindestreger og både latinske minuskler og majuskler. Alle andre tegn ignoreres.

- Identifikatorlængden bør være maks. 50 bytes. Alt derudover trimmes væk.

- The identifier should not start or end with a hyphen.

- There should be no sequences of three or more hyphens in a row.

Enhedsnavnet dannes ud fra den menneskeligt læsbare identifikator ved at erstatte alle enkelte bindestreger med mellemrum og alle dobbelte bindestreger med enkelte bindestreger. F.eks. omdannes en menneskeligt læsbar identifikator såsom `Super--duper-telefon` til enhedsnavnet `Super-duper telefon`.

### Et komplet eksempel

Her er et simpelt POSIX shell-script, der kan oversætte en oprindelig identifikator til en komplet DNS upstream-adresse til brug for automatiske enhedsforbindelser:

```sh
devtype='adr'
serverid='abcd1234'

# F.eks. fra DHCP-serveren eller en anden kilde.
initid='This Is My New And ✨Absolutely Amazing✨ SuperPhone-X-123456!!!!!!!'
humanid="$initid"

# Erstat først fortløbende bindestreger med dobbelte bindestreger og fortløbende mellemrum med enkelte bindestreger, hvilket resulterer i 'This-Is-My-New-And-✨Absolutely-Amazing✨-SuperPhone--X--123456!!!!!!!'.
humanid="$(printf '%s\n' "$humanid" | sed -e 's/-\+/--/g' -e 's/[[:space:]]\+/-/g' )"

# Fjern dernæst ikke-egnede bytes, hvilket resulterer i 'This-Is-My-New-And-Absolutely-Amazing-SuperPhone--X--123456'.
humanid="$(printf '%s\n' "$humanid" | tr -c -d 'a-zA-Z0-9-')"

# Trim som tredje punkt til 50 bytes, hvilket resulterer i 'This-Is-My-New-And-Absolutely-Amazing-SuperPhone--'
humanid="$(printf '%s\n' "$humanid" | head -c 50)"

# Sørg dernæst for, at der ikke er nogen bindestreger tilbage i starten og slutningen af etiketten for at få 'This-Is-My-New-And-Absolutely-Amazing-SuperPhone'
humanid="$(printf '%s\n' "$humanid" | sed -e 's/^-\+//g' -e 's/-\+$//g' )"

# Saml som sidst punkt upstream-adressen. I dette tilfælde, for DoT eller DoQ:
dns_upstream="${devtype}-${serverid}-${humanid}.d.adguard-dns.com"

# Resultatet er:
# adr-abcd1234-This-Is-My-New-And-Absolutely-Amazing-SuperPhone.d.adguard-dns.com
```

Dette vil resultere i en Android-enhed ved navn `This Is My New And Absolutely Amazing SuperPhone` tilsluttet serveren med ID'et `abcd1234`.
