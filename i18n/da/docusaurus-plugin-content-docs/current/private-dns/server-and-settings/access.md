---
title: Adgangsindstillinger
sidebar_position: 3
---

Ved at opsætte Adgangsindstillinger kan AdGuard DNS beskyttes mod uautoriseret adgang. F.eks., en dedikeret IPv4-adresse benyttes, og angribere, som bruger sniffere, har genkendt den og bombarderer den med forespørgsler. Intet problem, føj blot det irriterende domæne eller IP-adresse til listen, og det/den vil ikke kunne genere mere!

Blokerede forespørgsler vises ikke i Forespørgselsloggen, og tælles ikke med i den samlede kvote.

## Sådan opsættes det

### Tilladte klienter

Denne indstilling muliggør at angive, hvilke klienter, som kan bruge DNS-serveren. Den har den højeste prioritet. Hvis f.eks. den samme IP-adresse er på både sort- og hvidlisten, vil den stadig blive tilladt.

### Ikke-tilladte klienter

Her kan de klienter listes, som ikke har tilladelse til at bruge DNS-serveren. Man kan blokere adgangen for alle klienter og kun bruge de udvalgte. For at gøre dette, tilføj to adresser til de ikke-tilladte klienter: `0.0.0.0/0` og `::/0`. Angiv derefter i feltet _Tilladte klienter_ de adresser, som kan få adgang til serveren.

:::note Vigtigt

Før adgangsindstillingerne anvendes, skal man sikre sig, at man ikke blokerer sin egen IP-adresse. Gør man det, vil man ikke kunne få adgang til netværket. Skulle dette ske, afbryd blot forbindelsen til DNS-serveren, gå til adgangsindstillingerne og korrigér opsætningen.

:::

### Ikke-tilladte domæner

Her kan man angive de domæner (samt jokertegn og DNS-filtreringsregler), som nægtes adgang til DNS-serveren.

![Adgangsindstillinger \*border](https://cdn.adtidy.org/content/release_notes/dns/v2-5/AS-en.png)

For at få vist IP-adresser knyttet til DNS-forespørgsler i forespørgselsloggen, markér afkrydsningsfeltet _Log IP-adresser_. For at gøre dette, åbn _Serverindstillinger_ → _Avancerede indstillinger_.
