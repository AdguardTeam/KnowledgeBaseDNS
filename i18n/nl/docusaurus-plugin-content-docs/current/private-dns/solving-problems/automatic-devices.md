---
title: Automatische apparaatverbinding
sidebar_position: 4
---

Systeembeheerders moeten vaak meerdere apparaten tegelijk beheren. Om de hoeveelheid handmatig werk te verminderen, kun je de functie [_Automatische verbinding_][ac] gebruiken.

Dit artikel beschrijft in meer detail hoe een systeembeheerder zijn netwerk kan instellen om automatisch apparaten aan te maken op een AdGuard DNS-server met behulp van toegankelijke gegevens.

[ac]: /private-dns/connect-devices/other-options/automatic-connection

## Vereisten

Zorg ervoor dat de functie is ingeschakeld op je DNS-server. Ga hiervoor naar _Dashboard → Servers → Serverinstellingen → Geavanceerd_ en controleer of de instelling _Apparaten automatisch verbinden_ is ingeschakeld.

## Het basisformaat

Het basisformaat van de hostnaam of URL die wordt gebruikt om automatische apparaten te maken is:

- voor DoT en DoQ:

    ```none
    ${TYPE}-${SERVERID}-${HUMANID}.d.adguard-dns.com
    ```

- voor DoH:

    ```none
    https://d.adguard-dns.com/dns-query/${TYPE}-${SERVERID}-${HUMANID}
    ```

### Apparaattype

Apparaattypen worden gebruikt om in de gebruikersinterface gemakkelijker onderscheid te maken tussen verschillende apparaten. Voor automatische identificatie van een apparaat is een apparaattype vereist.

De volgende afkortingen worden ondersteund:

- 'adr': Android-apparaten.
- 'gam': Spelconsoles.
- `ios`: Apple iOS en andere Apple-besturingssystemen voor mobiele apparaten.
- `lnx`: Apparaten met Linux-gebaseerde besturingssystemen.
- 'mac': Apple macOS-apparaten.
- 'rtr': Routers.
- `stv`: Smart-TV's.
- 'win': Microsoft Windows-apparaten.
- `otr`: Algemene apparaten.

### DNS-server-ID

De volgende vereiste parameter is de ID van uw AdGuard DNS-server waarmee het apparaat is verbonden.

Je kunt de ID vinden in de URL van je _Dashboard → Servers → Serverinstellingen_-pagina. Als de URL bijvoorbeeld 'https://adguard-dns.io/en/dashboard/settings/server?server_id=abcd1234' is, dan is de ID van je DNS-server 'abcd1234'.

De ID bestaat altijd uit precies acht hexadecimale karakters.

### Door mensen leesbare apparaatidentificatie

Het voor mensen leesbare identificatiegedeelte wordt gebruikt om apparaten van elkaar te onderscheiden en dient ook als basis voor de apparaatnaam die in de gebruikersinterface en in de regels met de `client`-modifier wordt gebruikt. Deze identificaties kunnen automatisch worden aangemaakt op basis van andere identificaties, zoals hostnamen die zijn geregistreerd in je DHCP-server.

De volgende regels zijn van toepassing:

- Alleen ASCII.

- De toegestane tekens in de identificatiecodes zijn cijfers van nul tot en met negen, koppeltekens en zowel hoofd- als kleine Latijnse letters. Alle andere tekens worden genegeerd.

- De lengte van de identificatiecode mag niet groter zijn dan 50 bytes. Alles wat daarbuiten valt, wordt verwijderd.

- De identificatiecode mag niet met een koppelteken beginnen of eindigen.

- Er mogen geen reeksen van drie of meer koppeltekens achter elkaar voorkomen.

De apparaatnaam wordt gevormd uit de voor mensen leesbare identificatiecode door alle enkele koppeltekens te vervangen door spaties en alle dubbele koppeltekens door enkele koppeltekens. Een voor mensen leesbare aanduiding zoals `Super--duper-phone` wordt bijvoorbeeld omgezet in de apparaatnaam `Super-duper phone`.

### Een compleet voorbeeld

Hier is een eenvoudig POSIX-shellscript dat een initiële identificatiecode kan omzetten in een volledig DNS-upstreamadres voor automatische apparaatverbindingen:

```sh
devtype='adr'
serverid='abcd1234'

# Bijvoorbeeld, van de DHCP-server of een andere bron.
initid='This Is My New And ✨Absolutely Amazing✨ SuperPhone-X-123456!!!!!!!'
humanid="$initid"

# Ten eerste, vervang opeenvolgende koppeltekens door dubbele koppeltekens en opeenvolgende spaties door enkele koppeltekens, resulterend in 'This-Is-My-New-And-✨Absolutely-Amazing✨-SuperPhone--X--123456!!!!!!!'.
humanid="$(printf '%s\n' "$humanid" | sed -e 's/-\+/--/g' -e 's/[[:space:]]\+/-/g' )"

# Ten tweede, verwijder ongeschikte bytes, resulterend in 'This-Is-My-New-And-Absolutely-Amazing-SuperPhone--X--123456'.
humanid="$(printf '%s\n' "$humanid" | tr -c -d 'a-zA-Z0-9-')"

# Ten derde, inkorten tot 50 bytes, resulterend in 'This-Is-My-New-And-Absolutely-Amazing-SuperPhone--'
humanid="$(printf '%s\n' "$humanid" | head -c 50)"

# Vervolgens, zorg ervoor dat er geen koppeltekens overblijven aan het begin en het einde van het label om 'This-Is-My-New-And-Absolutely-Amazing-SuperPhone' te krijgen
humanid="$(printf '%s\n' "$humanid" | sed -e 's/^-\+//g' -e 's/-\+$//g' )"

# Ten slotte, stel het upstream adres samen. In dit geval, voor DNS-via-TLS of DNS-via-Quic:
dns_upstream="${devtype}-${serverid}-${humanid}.d.adguard-dns.com"

# Het resultaat is:
# adr-abcd1234-This-Is-My-New-And-Absolutely-Amazing-SuperPhone.d.adguard-dns.com
```

Dit resulteert in een Android-apparaat met de naam `This Is My New And Absolutely Amazing SuperPhone` dat verbonden is met de server met ID `abcd1234`.
