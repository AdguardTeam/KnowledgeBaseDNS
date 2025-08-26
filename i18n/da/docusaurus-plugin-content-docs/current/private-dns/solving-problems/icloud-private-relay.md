---
title: Anvendelse sammen med iCloud Private Relay
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

Når iCloud Private Relay anvendes, vil AdGuard DNS-kontrolpanelet (og den tilknyttede [AdGuard-testside](https://adguard.com/test.html)) vise, at der ikke anvendes AdGuard DNS på den pågældende enhed.

![Enhed er ikke tilsluttet](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

For at løse dette problem, tillad via enhedens indstillinger, at AdGuard-websteder kan se IP-adressen.

- iPhone eller iPad:

    1. Gå til `adguard-dns.io`

    1. Tryk på knappen **Sideindstillinger**, og tryk dernæst på **Vis IP-adresse**

        ![iCloud Private Relay-indstillinger *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. Gentag for `adguard.com`

- Mac:

    1. Gå til `adguard-dns.io`

    1. I Safari vælges **Vis** → **Genindlæs og vis IP-adresse**

    1. Gentag for `adguard.com`

Findes muligheden for midlertidigt at tillade et websted at se IP-adressen ikke, så opdatér enheden til seneste version af iOS, iPadOS eller macOS, og forsøg dernæst igen.

Nu skulle enheden blive vist korrekt i AdGuard DNS-kontrolpanelet:

![Enhed er tilsluttet](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Husk på, at når Private Relay slås fra for et bestemt websted, vil netværksudbyderen også være i stand til at se, hvilket websted, der besøges.
