---
title: Funkce zabezpečení
sidebar_position: 4
---

Nastavení zabezpečení AdGuard DNS je soubor konfigurací určených k ochraně osobních údajů uživatele.

Zde si můžete vybrat metody, které chcete použít k ochraně před útočníky. To vás ochrání před návštěvou phishingových a falešných webových stránek i před možným únikem citlivých údajů.

### Blokování škodlivého software, phishingu a podvodných domén

K dnešnímu dni jsme kategorizovali více než 15 milionů webů a vytvořili databázi 1,5 milionu webů, o nichž je známo, že obsahují phishing a malware. Pomocí této databáze, AdGuard kontroluje navštívené webové stránky a chrání vás před online hrozbami.

### Blokování nově registrovaných domén

Podvodníci často používají nedávno registrované domény k phishingu a podvodným schématům. Z tohoto důvodu jsme vyvinuli speciální filtr, který zjišťuje životnost domény a blokuje ji, pokud byla vytvořena nedávno.
Někdy to může způsobit falešné poplachy, ale statistiky ukazují, že ve většině případů toto nastavení stále chrání naše uživatele před ztrátou důvěrných dat.

### Blokování škodlivých domén pomocí seznamů zakázaných

AdGuard DNS podporuje přidávání filtrů blokování třetích stran.
Pro další ochranu aktivujte filtry označené jako `bezpečnostní`.

Další informace o seznamech zakázaných [viz samostatný článek](/private-dns/setting-up-filtering/blocklists.md).

## Protection against typosquatting domains

AdGuard DNS detects and blocks suspicious look-alike domains at the DNS level by analyzing patterns such as common typos, swapped characters, and missing or extra letters. It blocks the request before a connection is even established.

Because this feature relies on similarity detection, legitimate domains that resemble popular websites may occasionally be flagged. If that happens, you can add the domain to the allowlist by going to [_Servers_](https://adguard-dns.io/dashboard/servers) ⭢ Server settings ⭢ _User rules_ ⭢ _Add new rule_.
