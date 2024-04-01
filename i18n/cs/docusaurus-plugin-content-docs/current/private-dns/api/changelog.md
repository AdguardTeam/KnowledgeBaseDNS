---
title: Seznam změn
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    Changelog is from here:
    https://api.adguard-dns.io/static/api/CHANGELOG.md
-->

Tento článek obsahuje seznam změn pro [AdGuard DNS API](private-dns/api/overview.md).

## v1.7

_Released on March 11, 2024_

- Added dedicated IPv4 addresses functionality:
  - Dedicated IPv4 addresses can now be used on devices for DNS server configuration
  - Dedicated IPv4 address is now associated with the device it is linked to, so that queries made to this address are logged for that device
- Added new operations:
  - List all available dedicated IPv4 addresses
  - Allocate new dedicated IPv4 address
  - Link an available IPv4 address to a device
  - Unlink an IPv4 address from a device
  - Request info on dedicated addresses associated with a device
- Přidány nové limity do limitů účtu:
  - `dedicated_ipv4` — provides information about the amount of already allocated dedicated IPv4 addresses, as well as the limit on them
- Removed deprecated field of DNSServerSettings:
  - `safebrowsing_enabled`

## v1.6

_Vydáno 22. ledna 2024_

- Přidána nová sekce "Nastavení přístupu" pro DNS profily (`access_settings`). Přizpůsobením těchto polí budete moci chránit svůj server AdGuard DNS před neoprávněným přístupem:

  - `allowed_clients` — zde můžete určit, kteří klienti mohou používat váš DNS server. Toto pole má přednost před polem `blocked_clients`
  - `blocked_clients` — zde můžete určit, kteří klienti nesmí používat váš DNS server
  - `blocked_domain_rules` — zde můžete určit, které domény nemají povolen přístup k DNS serveru a definovat tyto domény pomocí zástupných znaků a pravidel DNS filtrování

- Přidány nové limity do limitů účtu:

  - `access_rules` poskytuje součet aktuálně používaných hodnot `blocked_clients` a `blocked_domain_rules` a také limit přístupových pravidel
  - `user_rules` zobrazuje počet vytvořených uživatelských pravidel a jejich limit

- Přidáno nové nastavení: `ip_log_enabled` pro možnost protokolování IP adres a domén klientů

- Přidán nový chybový kód `FIELD_REACHED_LIMIT`, který indikuje dosažení limitů:

  - Pro celkový počet `blocked_clients` a `blocked_domain_rules` v nastavení přístupu
  - Pro `rules` v nastavení uživatelských pravidel

## v1.5

_Vydáno 16. června 2023_

- Přidáno nové nastavení `block_nrd` a seskupení všech nastavení souvisejících se zabezpečením na jednom místě.

### Změněn model pro nastavení bezpečného prohlížení

Z:

```json
{
   "enabled": true
}
```

Na:

```json
{
   "enabled": true,
   "block_dangerous_domains": true,
   "block_nrd": false
}
```

kde `enabled` je nyní ovládání všech nastavení ve skupině, `block_dangerous_domains` je pole předchozího modelu "enabled" a `block_nrd` je nastavení profiltrování nově registrovaných domén.

### Změněn model pro ukládání nastavení serveru

Z:

```json
{
  "protection_enabled" : true,
  "safebrowsing_enabled" : true,
  ..
}
```

na:

```json
{
  "protection_enabled" : true,
  "safebrowsing_settings" : {
     "enabled": true,
     "block_dangerous_domains": true,
     "block_nrd": false
  }
  ..
}
```

zde je použito nové pole `safebrowsing_settings` místo zastaralého `safebrowsing_enabled`, jehož hodnotaje uložena v `block_dangerous_domains`.

## v1.4

_Vydáno 29. března 2023_

- Přidána konfigurovatelná možnost blokování odezvy: výchozí (0.0.0.0), REFUSED, NXDOMAIN nebo vlastní IP adresa.

## v1.3

_Vydáno 13. prosince 2022_

- Přidána metoda pro získání limitů účtu.

## v1.2

_Vydáno 14. října 2022_

- Přidány nové typy protokolů DNS a DNSCrypt. Zastaralé protokoly PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP a DNSCRYPT_UDP budou později odstraněny.

## v1.1

_Vydáno 07. července 2022_

- Přidány metody pro načítání statistik podle času, domén, společností a zařízení.
- Přidána metoda pro aktualizaci nastavení zařízení.
- Opravena definice povinných polí.

## v1.0

_Vydáno 22. února 2022_

- Přidáno ověřování.
- Operace CRUD se zařízeními a DNS servery.
- Protokol dotazů.
- Stahování souborů DoT a DoT .mobileconfig.
- Seznamy filtrů a webové služby.
