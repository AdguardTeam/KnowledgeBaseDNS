---
title: Linkede IP'er
sidebar_position: 3
---

## Hvad linkede IP-adresser er, og hvorfor de er nyttige

Ikke alle enheder understøtter krypterede DNS-protokoller. I så tilfælde bør man overveje at opsætte ukrypteret DNS. Man kan f.eks. bruge en **linket IP-adresse**. Eneste krav for at linke en IP-adresse er, at den skal være en hjemme IP-adresse.

:::note

En **hjemme IP-adresse** tildeles en enhed, der er tilsluttet en privat ISP. Den er typisk knyttet til en fysisk placering og tildeles individuelle boliger/lejligheder. Folk bruger hjemme IP-adresser til daglige onlineaktiviteter, såsom at surfe, sende e-mails, bruge sociale medier eller streaming.

:::

Nogle gange kan en hjemme IP-adresse allerede være i brug, og forsøger man at tilslutte til den, vil AdGuard DNS forhindre forbindelsen.
![Linket IPv4-adresse \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked.png)
Sker dette, kontakt venligst supporten via [support@adguard-dns.io](mailto:support@adguard-dns.io), og de vil assistere med de korrekte opsætningsindstillinger.

## Sådan opsættes linket IP

Den følgende vejledning forklarer, hvordan der forbindes til enheden via en **linket IP-adresse**:

1. Åbn Kontrolpanel.
2. Tilføj en ny enhed, eller åbn indstillingerne for en tidligere tilsluttet enhed.
3. Gå til _Brug DNS-serveradresser_.
4. Åbn _Almindelige DNS-serveradresser_ og tilslut den linkede IP.
   ![Linket IP \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked_step4.png)

## Dynamisk DNS: Hvorfor det er nyttigt

Hver gang en enhed tilslutter sig netværket, får den en ny dynamisk IP-adresse. Når en enhed afbryder forbindelsen, kan DHCP-serveren tildele den frigivne IP-adresse til en anden enhed på netværket. Dette betyder, at dynamiske IP-adresser ændres ofte og uforudsigeligt. Derfor skal indstillingerne opdateres, hver gang enheden genstartes, eller der sker netværksændringer.

For automatisk at holde den linkede IP-adresse opdateret, kan man bruge DNS. AdGuard DNS tjekker regelmæssigt IP-adressen på DDNS-domænet og linker det til serveren.

:::note

Dynamisk DNS (DDNS) er en tjeneste, der automatisk opdaterer DNS-poster, når IP-adressen ændrer sig. Den konverterer netværks IP-adresser til letlæselige domænenavne for bekvemmelighed. Den information, der forbinder et navn til en IP-adresse, lagres i en tabel på DNS-serveren. DDNS opdaterer disse poster, når der sker ændringer i IP-adresserne.

:::

På denne måde behøver man ikke manuelt at opdatere den tilknyttede IP-adresse, hver gang den ændres.

## Dynamisk DNS: Sådan opsættes det

1. Tjek først, om DDNS understøttes i routerindstillingerne:
   - Gå til _Routerindstillinger_ → _Netværk_
   - Find DDNS eller afsnittet _Dynamisk DNS_
   - Gå til dette og bekræft, at indstillingerne faktisk understøttes. _Dette er blot et eksempel på, hvordan det kan se ud. Det kan variere afhængigt af routeren_
     ![DDNS understøttet \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dynamic_dns.png)
2. Registrér domænet hos en populær tjeneste, såsom [DynDNS](https://dyn.com/remote-access/), [NO-IP](https://www.noip.com/) eller en anden foretrukken DDNS-udbyder.
3. Angiv domænet i routerindstillingerne og synk opsætningerne.
4. Gå til Linket IP-indstillinger for at tilslutte adressen, gå derefter til _Avancerede indstillinger_ og klik på _Opsæt DDNS_.
5. Angiv det domæne, man tidligere registrerede, og klik på _Opsæt DDNS_.
   ![Opsæt DDNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dns_supported.png)

Opsætningen af DDNS er hermed færdig!

## Automation af linket IP-opdatering via script

### Windows

Den nemmeste måde er at bruge Opgavestyring:

1. Opret en opgave:
   - Åbn Opgavestyring.
   - Opret en ny opgave.
   - Indstil udløseren til at køre hvert 5. minut.
   - Vælg _Kør program_ som handlingen.
2. Vælg et program:
   - Skriv i feltet _Program eller Script_ \`powershell'
   - I feltet _Tilføj argumenter_, skriv:
     - `Command "Invoke-WebRequest -Uri 'https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}'"`
3. Gem opgaven.

### macOS og Linux

Den nemmeste måde på macOS og Linux er at bruge `cron`:

1. Åbn crontab:
   - Eksekvér i terminalen `crontab -e`.
2. Tilføj en opgave:
   - Indsæt flg. linje:
     `/5 * * * * curl https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}`
   - Denne opgave eksekveres hvert 5. minut
3. Gem crontab.

:::note Vigtigt

- Sørg for, at `curl` er installeret på macOS og Linux.
- Husk at kopiere adressen fra indstillingerne og erstatte `ServerID` og `UniqueKey`.
- Er mere kompleks logik eller behandling af forespørgselsresultater nødvendig, overvej at bruge scripts (f.eks. Bash, Python) ifm. opgavestyring eller cron.

:::
