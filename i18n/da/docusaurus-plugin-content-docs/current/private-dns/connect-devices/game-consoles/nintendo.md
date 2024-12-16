---
title: Nintendo
sidebar_position: 2
---

Spillekonsoller understøtter ikke krypteret DNS, men de er velegnede til opsætning af Public AdGuard DNS eller Private AdGuard DNS via en linket IP-adresse.

Det er sandsynligt, at routeren understøtter brugen af krypterede DNS-servere, så man kan altid opsætte Private AdGuard DNS på den og tilslutte spillekonsollen til den.

[Sådan opsættes routeren](/private-dns/connect-devices/routers/routers.md)

:::note Kompatibilitet

Gælder for Ny Nintendo 3DS, Ny Nintendo 3DS XL, Ny Nintendo 2DS XL, Nintendo 3DS, Nintendo 3DS XL og Nintendo 2DS.

:::

## Tilslut AdGuard DNS

Opsæt spillekonsollen til at bruge en offentlig AdGuard DNS-server eller opsæt den via en linket IP:

1. Vælg fra hjemmenuen _Systemindstillinger_.
2. Gå til _Internetindstillinger_ → _Forbindelsesindstillinger_.
3. Vælg forbindelsesfilen, og vælg dernæst _Skift indstillinger_.
4. Vælg _DNS_ → _Opsætning_.
5. Indstil _Auto-hent DNS_ til _Nej_.
6. Vælg _Detaljeret opsætning_ → _Primær DNS_. Hold venstre pil nede for at slette den eksisterende DNS.
7. Angiv i feltet _DNS-server_ en af flg. DNS-serveradresser:
   - `94.140.14.49`
   - `94.140.14.59`
8. Gem indstillingerne.

Det vil være at foretrække at bruge en linket IP (eller en dedikeret IP, hvis man har et Team-abonnement):

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md)
