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

## Vlastní seznamy zakázaných

Pokud potřebujete přidat do AdGuard DNS konkrétní seznam zakázaných, můžete si jej stáhnout skrze URL.

![Add custom blocklist](https://cdn.adguardvpn.com/content/release_notes/dns/v2-20/add_blocklists_en.png)

1. Otevřete hlavní panel a klikněte na _Servery_ v levém menu
2. Vyberte _Můj server → Seznamy zakázaných_
3. V sekci _Vlastní_ klikněte na _Přidat vlastní seznam zakázaných_
4. Zadejte název seznamu zakázaných, jeho URL a volitelný popis, poté klikněte na _Přidat_

:::note

Každé předplatné tarifu má limit na celkový počet pravidel filtrování: Personal — 1000, Team — 5000, Enterprise — 100000. Toto omezení platí, protože seznamy zakázaných se stahují na servery DNS a povolení neomezené velikosti těchto seznamů by mohlo vést k přetížení serveru, což by mohlo způsobit problémy s výkonem.

:::

Pokud vlastní seznam zakázaných překročí limit, bude **automaticky deaktivován** a zobrazí se vám odpovídající oznámení. Chcete-li povolit nově přidaný seznam zakázaných, který překračuje limit pravidel, musíte buď odebrat jiné seznamy zakázaných, nebo přejít na tarif s vyšším limitem pravidel.
