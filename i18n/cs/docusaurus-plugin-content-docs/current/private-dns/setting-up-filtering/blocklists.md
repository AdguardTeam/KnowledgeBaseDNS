---
title: Seznamy zakázaných
sidebar_position: 2
---

## Jaké jsou seznamy zakázaných

Seznamy zakázaných jsou sady pravidel v textovém formátu, které AdGuard DNS používá k filtrování reklam a obsahu, který by mohl ohrozit vaše soukromí. Obecně se filtr skládá z pravidel s podobným zaměřením. Mohou existovat například pravidla pro jazyky webových stránek (například filtry pro němčinu nebo ruštinu) nebo pravidla chránící před phishingovými stránkami (například seznam blokovaných phishingových adres URL). Tato pravidla můžete snadno povolit nebo zakázat jako skupinu.

## Proč jsou užitečné

Seznamy zakázaných jsou navrženy pro flexibilní přizpůsobení pravidel filtrování. Můžete například chtít zablokovat reklamní domény v určité jazykové oblasti nebo se zbavit sledovacích či reklamních domén. Vyberte požadované seznamy zakázaných a upravte filtrování podle svých představ.

## Jak aktivovat seznamy zakázaných v AdGuard DNS

Aktivace seznamů zakázaných:

1. Otevřete ovládací panel.
2. Přejděte do sekce _Servery_.
3. Vyberte požadovaný server.
4. Klikněte na _Seznamy zakázaných_.

## Typy seznamů zakázaných

### Obecné

Skupina filtrů, která obsahuje seznamy pro blokování reklam a sledovacích domén.

![General blocklists \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/general.png)

### Regionální

Skupina filtrů sestávající z regionálních seznamů pro blokování domén v určitých jazycích.

![Regional blocklists \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/regional.png)

### Zabezpečení

Skupina filtrů obsahující pravidla pro blokování podvodných stránek a phishingových domén.

![Security blocklists \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/security.png)

### Další

Seznamy zakázaných s různými pravidly blokování od vývojářů třetích stran.

![Other blocklists \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/other.png)

## Přidávání filtrů

Pokud si přejete rozšířit seznam filtrů AdGuard DNS, můžete podat žádost o jejich přidání do příslušné sekce [Hostlistsregistry](https://github.com/AdguardTeam/HostlistsRegistry) na GitHubu.

Podání žádosti:

1. Přejděte na výše uvedený odkaz (možná se budete muset zaregistrovat na GitHubu).
2. Klikněte na _New issue_.
3. Klikněte na _Blocklist request_ a vyplňte formulář.
4. Po vyplnění formuláře klikněte na _Submit new issue_.

Pokud pravidla blokování vašeho filtru nejsou duplicitní s existujícími seznamy, bude přidán do repozitáře.

## Uživatelská pravidla

Můžete si také vytvořit vlastní pravidla blokování.
Více informací naleznete v článku [Uživatelská pravidla](/private-dns/setting-up-filtering/user-rules.md).
