---
title: Automatisk tilslutning
sidebar_position: 5
---

## Hvorfor det er nyttigt

Ikke alle føler sig på hjemmebane ved at tilføje enheder via Kontrolpanel. Er man f.eks. en systemadministrator, der opsætter flere virksomhedsenheder samtidig, vil man gerne minimere manuelle opgaver mest muligt.

Man kan oprette et tilslutningslink og bruge dette i enhedsindstillingerne. Enheden blive detekteret og tilsluttes serveren automatisk.

## Sådan opsættes automatisk tilslutning

1. Åbn _Kontrolpanel_ og vælg den relevante servere.
2. Gå til _Avanceret_.
3. Aktivér muligheden for at tilslutte enheder automatisk.
   ![Tilslut enheder automatisk \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically.png)

Nu kan man automatisk tilslutte sin enhed til serveren ved at oprette en særlig adresse, der inkluderer enhedsnavn, enhedstype og aktuelt server-ID. Lad os se på, hvordan disse adresser ser ud og reglerne for at oprette dem.

### Eksempler på automatiske tilslutningsadresser

- `tls://adr-{Your_Server_ID}-AdGuard-Test-Device.d.adguard-dns.com` — dette vil automatisk oprette en `Android`-enhed med `DNS-over-TLS`-protokollen kaldet `AdGuard Test Device`

- `https://d.adguard-dns.com/dns-query/win-{Your_Server_ID}-John-Doe` — dette vil automatisk oprette en `Windows`-enhed med `DNS-over-HTTPS`-protokollen kaldet `John Doe`

- `quic://ios-73f78a1d-Mary-Sue.d.adguard-dns.com` – dette vil automatisk oprette en `iOS`-enhed med `DNS-over-QUIC`-protokollen kaldet `Mary Sue`

### Navngivningskonventioner

Når enheder oprettes manuelt, skal man være opmærksom på, at der er begrænsninger relateret til navnelængde, tegn, mellemrum og bindestreger.

**Navnelængde**: Maks. 50 tegn. Tegn ud over denne længde ignoreres.

**Tilladte tegn**: Engelske bogstaver, tal og bindestreger "-". Andre tegn ignoreres.

**Mellemrum og bindestreger**: Brug en bindestreg for et mellemrum og en dobbelt bindestreg ( `--`) for en bindestreg.

**Enhedstype**: Brug flg. forkortelser:

- Windows — `win`
- macOS — `mac`
- Android — `adr`
- iOS — `ios`
- Linux — `lnx`
- Router — `rtr`
- Smart TV — `stv`
- Spillekonsol — `gam`
- Andre — `otr`

## Linkgenerator

Vi har tilføjet en skabelon, der genererer et link til den bestemte enhedstype og protokol.

1. Gå til _Servere_ → _Serverindstillinger_ → _Enheder_ → _Tilslut enheder automatisk_ og klik på _Linkgenerator og vejledning_.
2. Vælg den ønskede protokol samt enhedsnavnet og enhedstypen.
3. Klik på _Generér link_.
   ![Generér link \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step7.png)
4. Linket er hermed genereret, kopiér nu serveradressen og brug den i en af [AdGuard-apperne](https://adguard.com/welcome.html)
