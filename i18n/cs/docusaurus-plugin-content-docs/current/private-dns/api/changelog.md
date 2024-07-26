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

## v1.9 (11. července 2024)

- Přidána funkce automatického připojení zařízení:
  - Nové nastavení serveru DNS — `auto_connect_devices_enabled`, umožnění schválení automatického připojení zařízení prostřednictvím určitého typu odkazu
  - Nové pole v Zařízení - `auto_device`, které označuje, že zařízení je připojeno automaticky
- Nahrazeno `int` za `long` pro `queries` v CategoryQueriesStats, pro `used` v AccountLimits a pro `blocked` a `queries` v QueriesStats

## v1.8

_Vydáno 20. dubna 2024_

- Přidána podpora pro DNS-over-HTTPS s ověřováním:
  - Nová operace — resetování hesla DNS-over-HTTPS pro zařízení
  - Nastavení nového zařízení — `detect_doh_auth_only`. Zakáže všechny metody připojení DNS kromě DNS-over-HTTPS s ověřením
  - Nové pole v Device DNSAddresses — `dns_over_https_with_auth_url`. Určuje adresu URL, která se má použít při připojení pomocí DNS-over-HTTPS s ověřením

## v1.7

_Vydáno 11. března 2024_

- Přidána funkčnost vyhrazených adres IPv4:
  - Vyhrazené adresy IPv4 lze nyní používat v zařízeních pro konfiguraci DNS serveru
  - Vyhrazená adresa IPv4 je nyní přidružena k zařízení, se kterým je propojena, takže dotazy na tuto adresu jsou zaznamenávány pro toto zařízení
- Přidány nové operace:
  - Seznam všech dostupných vyhrazených adres IPv4
  - Přidělení nové vyhrazené adresy IPv4
  - Propojení dostupné adresy IPv4 se zařízením
  - Odpojení adresy IPv4 od zařízení
  - Vyžádání informací o vyhrazených adresách přidružených k zařízení
- Přidány nové limity do limitů účtu:
  - `dedicated_ipv4` — poskytuje informace o množství již přidružených vyhrazených adres IPv4 a o jejich limitu
- Odstraněno zastaralé pole DNSServerSettings:
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
