---
title: Funkce zabezpečení
sidebar_position: 4
---

Nastavení zabezpečení AdGuard DNS je soubor konfigurací určených k ochraně osobních údajů uživatele.

Zde si můžete vybrat metody, které chcete použít k ochraně před útočníky. To vás ochrání před návštěvou phishingových a falešných webových stránek i před možným únikem citlivých údajů.

## Blokování škodlivého software, phishingu a podvodných domén

K dnešnímu dni jsme kategorizovali více než 15 milionů webů a vytvořili databázi 1,5 milionu webů, o nichž je známo, že obsahují phishing a malware. Pomocí této databáze, AdGuard kontroluje navštívené webové stránky a chrání vás před online hrozbami.

## Blokování nově registrovaných domén

Podvodníci často používají nedávno registrované domény k phishingu a podvodným schématům. Z tohoto důvodu jsme vyvinuli speciální filtr, který zjišťuje životnost domény a blokuje ji, pokud byla vytvořena nedávno.
Někdy to může způsobit falešné poplachy, ale statistiky ukazují, že ve většině případů toto nastavení stále chrání naše uživatele před ztrátou důvěrných dat.

## Blokování škodlivých domén pomocí seznamů zakázaných

AdGuard DNS podporuje přidávání filtrů blokování třetích stran.
Pro další ochranu aktivujte filtry označené jako `bezpečnostní`.

Další informace o seznamech zakázaných [viz samostatný článek](/private-dns/setting-up-filtering/blocklists.md).

## Ochrana proti doménám s překlepy

AdGuard DNS rozpoznává a blokuje podezřelé domény, které se podobají originálu, na úrovni DNS tím, že analyzuje vzorce, jako jsou běžné překlepy, zaměněné znaky a chybějící nebo nadbytečná písmena. Zablokuje požadavek ještě před navázáním spojení.

Vzhledem k tomu, že tato funkce využívá detekci podobnosti, může se stát, že budou občas označeny i legitimní domény, které se podobají populárním webovým stránkám. Pokud se tak stane, můžete doménu přidat do seznamu povolených, že přejdete na stránku [_Servery_](https://adguard-dns.io/dashboard/servers) ⭢ _Nastavení serveru_ ⭢ _Uživatelská pravidla_ ⭢ _Přidat nové pravidlo_.

## Protection against IDN homograph attacks

Some phishing sites use lookalike characters from different alphabets to impersonate legitimate domains — for example, substituting a Cyrillic “o” for a Latin one. This technique is known as an IDN (Internationalized Domain Name) homograph attack.

AdGuard DNS detects and blocks such domains at the DNS level. This feature is disabled by default. To enable it, go to _Security_ → _IDN homograph attacks protection_.
