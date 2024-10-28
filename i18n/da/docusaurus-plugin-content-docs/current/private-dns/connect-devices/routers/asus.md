---
title: Asus
sidebar_position: 3
---

## Opsæt DNS-over-TLS

Dette er en generel vejledning til opsætning af Private AdGuard DNS på Asus-routere.

Opsætningsinformationen i denne vejledning er taget fra en bestemt routermodel og kan derfor afvige fra brugerfladen på en individuel enhed.

Om nødvendigt: Opsæt DNS-over-TLS på ASUS, installér på computeren [ASUS Merlin-firmwaren](https://www.asuswrt-merlin.net/download) til den aktuelle routerversion.

1. Log ind på Asus-routerens admin-panel. Det kan tilgås via [http://router.asus.com](http://router.asus.com/), [http://192.168.1.1](http://192.168.1.1/), [http://192.168.0.1](http://192.168.0.1/) eller [http://192.168.2.1](http://192.168.2.1/).
2. Angiv routerens administratorbrugernavn (normalt admin) samt adgangskode.
3. Gå fra sidebjælken _Avancerede indstillinger_ til afsnittet _WAN_.
4. I afsnittet _WAN DNS-indstillinger_ sættes _Forbind til DNS-server automatisk_ til _Nej_.
5. Sæt _Videresend lokale forespørgsler_, _Aktivér DNS-genbinding_ og _Aktivér DNSSEC_ til _Nej_.
6. Skift DNS-fortrolighedsprotokol til DNS-over-TLS (DoT).
7. Sørg for, at _DNS-over-TLS-profilen_ er sat til _Striks_.
8. Rul ned til afsnittet _DNS-over-TLS Serverliste_. Angiv i feltet _Adresse_ én af nedenstående adresser:
   - `94.140.14.49` og `94.140.14.59`
9. Som _TLS-port_, angiv 853.
10. Angiv Private AdGuard DNS-serveradressen i feltet _TLS-værtsnavn_:
    - `{Your_Device_ID}.d.adguard-dns.com`
11. Rul til bunden af siden, og tryk på _Anvend_.

## Brug routerens håndteringspanel

1. Åbn routerens admin-panel. Den kan tilgås på `192.168.1.1` eller `192.168.0.1`.
2. Angiv routerens administratorbrugernavn (normalt admin) samt adgangskode.
3. Åbn _Avancerede indstillinger_ eller _Avanceret_.
4. Vælg _WAN_ eller _Internet_.
5. Åbn _DNS-indstillinger_ eller _DNS_.
6. Vælg _Manuel DNS_. Vælg _Brug disse DNS-servere_ eller _Angiv DNS-server manuelt_, og angiv flg. DNS-serveradresser:
   - IPv4: `94.140.14.49` and `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
7. Gem indstillingerne.
8. Tilslut IP'en (eller den dedikerede IP, hvis man har et Team-abonnement).

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md)
