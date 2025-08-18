---
title: Dedikerede IP'er
sidebar_position: 2
---

## Hvad er dedikerede IP'er?

Dedikerede IPv4-adresser er tilgængelige for brugere med Team- og Enterprise-abonnementer, mens linkede IP'er er tilgængelige for alle.

If you have a Team or Enterprise subscription, you’ll receive several personal dedicated IP addresses. Requests to these addresses are treated as yours, and server-level configurations and filtering rules are applied accordingly. Dedikerede IP-adresser er meget mere sikre og lettere at håndtere. With linked IPs, you have to manually reconnect or use a special program every time the device’s IP address changes, which happens after every reboot.

## Hvorfor har man brug for en dedikeret IP?

Desværre tillader de tekniske specifikationer for den tilsluttede enhed ikke altid, at man kan opsætte en krypteret Private AdGuard DNS-server. I så tilfælde vil man skulle bruge standard ukrypteret DNS. Der er to måder at opsætte AdGuard DNS på: [Vha. linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md) og vha. dedikerede IP'er.

Dedikerede IP'er er generelt en mere stabil mulighed. Linked IP has some limitations, such as only residential addresses are allowed, your provider can change the IP, and you’ll need to relink the IP address. Med dedikerede IP’er får man en IP-adresse, der er eksklusivt ens egen, og alle forespørgsler tælles for ens enhed.

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
