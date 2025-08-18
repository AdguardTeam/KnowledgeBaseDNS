---
title: Sortlister
sidebar_position: 1
---

## Hvad sortlister er

Sortlister er sæt af regler i tekstformat, som AdGuard DNS bruger til at bortfiltrere annoncer og indhold, som kan kompromittere fortroligheden. Generelt består et filtre af regler med et tilsvarende fokus. Der kan f.eks. kan der være regler for webstedssprog (såsom tyske eller russiske filtre) eller regler, som beskytter mod phishing-websteder (såsom Phishing URL Blocklist). Disse regler kan nemt aktiveres eller deaktiveres som en gruppe.

## Hvorfor de er nyttige

Sortlister er designet til fleksibel tilpasning af filtreringsregler. Man kan f.eks. ønske at blokere reklamedomæner i en bestemt sprogregion eller ønske at slippe af med sporings- eller reklamedomæner. Vælg de ønskede sortlister og tilpas filtreringen efter egne præferencer.

## Sådan aktiveres sortlister i AdGuard DNS

For at aktivere sortlister:

1. Åbn Kontrolpanel.
2. Gå til afsnittet _Servere_.
3. Vælg den ønskede server.
4. Klik på _Sortlister_.

## Sortlistetyper

### Generelt

En gruppe af filtre, som omfatter lister til blokering af reklame- og sporingsdomæner.

![Generelle sortlister \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/general.png)

### Regional

En gruppe af filtre bestående af regionale lister til at blokere domæner på bestemte sprog.

![Regionale sortlister \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/regional.png)

### Sikkerhed

En gruppe af filtre, som indeholder regler til blokering af svigagtige websteder og phishing-domæner.

![Sikkerhedssortlister \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/security.png)

### Øvrigt

Sortlister med forskellige blokeringsregler fra tredjepartsudviklere.

![Yderligere sortlister \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/other.png)

## Tilføjelse af filtre

Ønsker man listen over AdGuard DNS-filtre udvidet, kan man indsende en anmodning om at tilføje dem i den relevante sektion i [HostlistsRegistry](https://github.com/AdguardTeam/HostlistsRegistry) på GitHub.

For at indsend en forespørgsel:

1. Gå til linket ovenfor (GitHub beder muligvis om registrering).
2. Klik på _Ny problematik_.
3. Klik på _Sortlisteanmodning_ og udfyld formularen.
4. Efter udfyldelsen, klik på _Indsend ny problematik_.

If your filter’s blocking rules do not duplicate the existing lists, it will be added to the repository.

## Brugerregler

Man kan også oprette egne blokeringsregler.
Læs mere herom i [artiklen Brugerregler](/private-dns/setting-up-filtering/user-rules.md).
