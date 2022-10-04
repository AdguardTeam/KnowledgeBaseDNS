---
title: DNS filtrování
sidebar_position: 1
---

Abychom lépe porozuměli filtrování DNS, měli bychom si nejprve odpovědět na otázku "Co je to DNS"?

## Co je DNS?

DNS je zkratka pro "Domain name system" (decentralizovaný systém doménových názvů) a jeho účelem je překládat názvy webových stránek do podoby srozumitelné prohlížečům, tj. IP adres. Pokaždé, když přejdete na webovou stránku, prohlížeč odešle požadavek na speciální server (server DNS). Tento server se podívá na požadovaný název domény a odpoví odpovídající IP adresou. Velmi schematicky to lze znázornit takto:

![Jak funguje DNS](https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

Totéž samozřejmě platí pro všechny aplikace a programy, které odesílají jakékoli webové požadavky, nejen pro prohlížeče.

## Jak funguje DNS filtrování?

Pokud používáte některou z aplikací AdGuard, která podporuje DNS filtrování, funguje jako vyrovnávací paměť mezi vaším zařízením a serverem DNS. Všechny DNS požadavky, které se vaše prohlížeče nebo aplikace chystají odeslat, nejprve zpracuje AdGuard. Pokud používáte výchozí DNS server poskytovaný poskytovatelem internetových služeb (ISP), je pravděpodobné, že vaše přenosy DNS nejsou šifrované a jsou náchylné k odposlechu a zcizení. AdGuard zašifruje všechny vaše DNS požadavky ještě předtím, než opustí vaše zařízení, aby se k jejich obsahu nedostal žádný zloduch. Kromě toho dokáže AdGuard identifikovat požadavky na reklamní, sledovací domény a/nebo domény pro dospělé a přesměrovat je do "černé díry" namísto přesměrování na DNS server. Více o tom později [později](#local-dns-blocklists).

![Jak funguje DNS filtrování](https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

Filtrování DNS je výkonný nástroj, který podporují všechny hlavní aplikace AdGuardu: [AdGuard pro Windows](https://adguard.com/en/adguard-windows/overview.html), [AdGuard pro macOS](https://adguard.com/en/adguard-mac/overview.html), [AdGuard pro Android](https://adguard.com/en/adguard-android/overview.html) a [AdGuard pro iOS](https://adguard.com/en/adguard-ios/overview.html).

DNS filtrování lze rozdělit na dvě samostatné funkce: šifrování a přesměrování přenosů DNS na servery DNS a místní blokování některých domén pomocí DNS seznamů zakázaných.

### DNS servery

Na výběr jsou tisíce DNS serverů, které jsou jedinečné svými vlastnostmi a účelem. Většina z nich jednoduše vrací IP adresu požadované domény, ale některé mají i další funkce: blokují reklamy, slídiče, domény pro dospělé atd. V současné době všechny hlavní DNS servery používají jeden nebo více spolehlivých šifrovacích protokolů: DNS skrze HTTPS, DNS skrze TLS. AdGuard také poskytuje [ službu DNS ](https://adguard-dns.io/en/welcome.html)a jako první na světě nabízí velmi nový a slibný šifrovací protokol [DNS skrze QUIC](https://adguard.com/en/blog/dns-over-quic.html). AdGuard má různé servery pro různé cíle. Tento diagram znázorňuje, jak fungují blokovací servery AdGuardu:

![AdGuard DNS](https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Jiní poskytovatelé DNS mohou fungovat jinak, proto si o nich zjistěte více informací, než se rozhodnete pro ten či onen server DNS. Seznam nejoblíbenějších poskytovatelů DNS najdete v [tomto článku](dns-providers.md). Všechny aplikace AdGuardu, které podporují funkci DNS, mají také seznam serverů DNS, ze kterého si můžete vybrat, nebo dokonce umožňují vybrat libovolný vlastní server DNS.

### Místní DNS seznam blokovaných

Spoléháte-li se však na servery DNS pouze při filtrování provozu DNS, ztrácíte veškerou flexibilitu. Pokud vybraný server blokuje doménu, nemáte k ní přístup. S AdGuardem nemusíte pro filtrování provozu DNS konfigurovat žádný konkrétní server DNS. Všechny produkty AdGuardu umožňují používat DNS seznamy zakázaných, ať už se jedná o jednoduché soubory hosts nebo seznamy, které používají [pokročilejší syntaxi](dns-filtering-syntax.md). Fungují podobně jako běžné seznamy zakázaných: pokud požadavek DNS odpovídá jednomu z pravidel v aktivním seznamu filtrů, je zablokován. Přesněji řečeno, je přesměrován do "černé díry".
> V aplikaci AdGuard pro iOS musíte nejprve v nastavení povolit "Pokročilý režim", abyste získali přístup k DNS blokování.

Můžete přidat libovolný počet vlastních seznamů zakázaných. Můžete např. použít [filtr AdGuard DNS](https://github.com/AdguardTeam/AdGuardSDNSFilter). Doslova blokuje vše, co dělá server AdGuard DNS, ale v tomto případě můžete použít jakýkoli jiný server DNS. Navíc tímto způsobem můžete přidávat další filtry nebo vytvářet vlastní pravidla výjimek, což by při jednoduchém "použití DNS serveru zakázaných" nebylo možné.
> Existují stovky různých DNS seznamů zakázaných, můžete je hledat [zde](https://filterlists.com/).

## Srovnání DNS filtrování se filtrováním sítě

Filtrování sítě je to, čemu říkáme 'obvyklý' způsob, jakým samostatné aplikace AdGuard zpracovávají síťový provoz, odtud i název. Klidně si to osvěžte přečtením [tohoto článku](https://kb.adguard.com/en/general/how-ad-blocking-works).

Především musíme zmínit, že s AdGuardem si nemusíte vybírat. Vždy můžete současně používat běžné filtrování sítě i DNS filtrování. Je však důležité pochopit hlavní rozdíly mezi nimi. DNS filtrování má své jedinečné výhody i nevýhody:

**Výhody DNS filtrování:**

1. Na některých platformách je to jediný způsob, jak dosáhnout filtrování v celém systému. Například v systému iOS podporuje blokování obsahu ve známém smyslu pouze prohlížeč Safari, u všech ostatních je k dispozici pouze DNS filtrování.
2. Některé formy sledování (jako je [sledování se skrytým jménem CNAME](https://adguard.com/en/blog/cname-tracking.html)) lze řešit pouze pomocí DNS filtrování.
3. Fáze zpracování DNS požadavku je první, kterou byste mohli řešit s reklamou nebo slídičem, což pomáhá ušetřit trochu výdrže baterie a datového provozu.

**Nevýhody DNS filtrování:**

1. DNS filtrování je "hrubé", což znamená, že neodstraňuje prázdná místa, která zůstávají za blokovanou reklamou, ani nepoužívá žádné kosmetické filtrování. Mnoho složitějších reklam nelze zablokovat na úrovni DNS (respektive lze, ale pouze zablokováním celých domén, které se používají k jiným účelům).

![Příklad rozdílů](https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *Příklad rozdílu mezi filtrováním DNS a filtrováním sítě*

2. Není možné zjistit původ DNS požadavku, což znamená, že nelze rozlišovat mezi různými aplikacemi na úrovni DNS. To poškozuje statistiky a znemožňuje vytvářet pravidla filtrování pro konkrétní aplikace.

Doporučujeme používat DNS filtrování jako doplněk k filtrování sítě, nikoli místo něj.
