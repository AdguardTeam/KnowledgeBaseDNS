---
title: Dedikerede IP'er
sidebar_position: 2
---

## Hvad er dedikerede IP'er?

Dedikerede IPv4-adresser er tilgængelige for brugere med Team- og Enterprise-abonnementer, mens linkede IP'er er tilgængelige for alle.

Har man et Team- eller Enterprise-abonnement, vil man modtage flere personlige dedikerede IP-adresser. Forespørgsler til disse adresser behandles som "ens egne," og serveropsætningsindstillinger og filtreringsregler anvendes i overensstemmelse hermed. Dedikerede IP-adresser er meget mere sikre og lettere at håndtere. Med linkede IP'er skal man manuelt genoprette forbindelsen eller bruge et særligt program, hver gang enhedens IP-adresse ændres, hvilket sker efter hver genstart.

## Hvorfor har man brug for en dedikeret IP?

Desværre tillader de tekniske specifikationer for den tilsluttede enhed ikke altid, at man kan opsætte en krypteret Private AdGuard DNS-server. I så tilfælde vil man skulle bruge standard ukrypteret DNS. Der er to måder at opsætte AdGuard DNS på: [Vha. linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md) og vha. dedikerede IP'er.

Dedikerede IP'er er generelt en mere stabil mulighed. Linket IP har nogle begrænsninger, såsom at kun private adresser er tilladt, udbyderen kan ændre IP'en, og man skal genlinke IP-adressen. Med dedikerede IP’er får man en IP-adresse, der er eksklusivt ens egen, og alle forespørgsler tælles for ens enhed.

Ulemperne er, at man måske begynder at modtage irrelevant trafik (skannere, bots), som det altid sker med offentlige DNS-opløsere. Man skal muligvis bruge [Adgangsindstillinger](/private-dns/server-and-settings/access.md) for at begrænse bot-trafik.

Vejledningen nedenfor forklarer, hvordan man tilslutter en dedikeret IP til enheden:

## Tilslut AdGuard DNS vha. dedikerede IP'er

1. Åbn Kontrolpanel.
2. Tilføj en ny enhed, eller åbn indstillingerne for en tidligere oprettet enhed.
3. Vælg _Brug serveradresser_.
4. Åbn dernæst _Almindelig DNS-serveradresser_.
5. Vælg den server, man ønsker at bruge.
6. For at tilknytte en dedikeret IPv4 adresse, klik på _Tildel_.
7. Ønskes en dedikeret IPv6-adresse brugt, klik på _Kopiér_.
   ![Kopér adresse \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dedicated_step7.png)
8. Kopiér og indsæt den valgte dedikerede adresse i enhedens opsætninger.
