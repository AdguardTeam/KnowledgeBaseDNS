---
title: FritzBox
sidebar_position: 4
---

FRITZ!Box giver maksimal fleksibilitet for alle enheder ved samtidig brug af 2,4 GHz og 5 GHz frekvensbåndene. Alle enheder tilsluttet FRITZ!Box er fuldt beskyttet mod angreb fra internet. Opsætningen af dette routermærke muliggør også opsætning af Private AdGuard DNS.

## Opsæt DNS-over-TLS

1. Åbn routerens admin-panel. Den kan tilgås på fritz.box, IP-adressen på routeren eller `192.168.178.1`.
2. Angiv routerens administratorbrugernavn (normalt admin) samt adgangskode.
3. Åbn _Internet_ eller _Hjemmenetværk_.
4. Vælg _DNS_ eller _DNS-indstillinger_.
5. Under DNS-over-TLS (DoT) markeres _Anvend DNS-over-TLS_, hvis understøttet af udbyderen.
6. Vælg _Anvend tilpasset TLS Server Name Indication (SNI)_, og angiv flg. AdGuard Private DNS-serveradresse: `{Your_Device_ID}.d.adguard-dns.com`.
7. Gem indstillingerne.

## Brug routerens håndteringspanel

Brug denne vejledning, hvis FritzBox-routeren ikke understøtter opsætning af DNS-over-TLS:

1. Åbn routerens admin-panel. Den kan tilgås på `192.168.1.1` eller `192.168.0.1`.
2. Angiv routerens administratorbrugernavn (normalt admin) samt adgangskode.
3. Åbn _Internet_ eller _Hjemmenetværk_.
4. Vælg _DNS_ eller _DNS-indstillinger_.
5. Vælg _Manuel DNS_, dernæst _Anvend disse DNS-servere_ eller _Angiv DNS-server manuelt_ og angiv flg. DNS-serveradresser:
    - IPv4: `94.140.14.49` and `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
6. Gem indstillingerne.
7. Link IP'en (eller den dedikerede IP, hvis man har et Team-abonnement).

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linkede IP'er](/private-dns/connect-devices/other-options/linked-ip.md)
