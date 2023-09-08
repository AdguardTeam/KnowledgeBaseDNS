---
title: DNS filtrování
sidebar_position: 1
---

:::info

Nejjednodušší způsob, jak prozkoumat výhody DNS filtrování, je nainstalovat Blokátor reklam AdGuard nebo vyzkoušet AdGuard DNS. Pokud chcete filtrovat DNS na úrovni sítě, AdGuard Home je váš nástroj

Rychlé odkazy: [Stáhnout Blokátor reklam AdGuard](https://agrd.io/download-kb-adblock), [Získat AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Vyzkoušet AdGuard DNS](https://agrd.io/download-dns)

:::

Abychom lépe porozuměli filtrování DNS, měli bychom si nejprve odpovědět na otázku "Co je to DNS?".

## Co je DNS?

DNS je zkratka pro "Domain name system" (decentralizovaný systém doménových názvů) a jeho účelem je překládat názvy webových stránek do podoby srozumitelné prohlížečům, tj. IP adres. Pokaždé, když přejdete na webovou stránku, prohlížeč odešle požadavek na speciální typ serveru (server DNS). Tento server se podívá na požadovaný název domény a odpoví odpovídající IP adresou. Velmi schematicky to lze znázornit takto:

![How DNS works](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

Totéž samozřejmě platí pro všechny aplikace a programy, které odesílají jakékoli webové požadavky, nejen pro prohlížeče.

## Jak funguje DNS filtrování?

Pokud používáte některou z aplikací AdGuard, která podporuje DNS filtrování, funguje jako vyrovnávací paměť mezi vaším zařízením a serverem DNS. Všechny DNS požadavky, které se vaše prohlížeče nebo aplikace chystají odeslat, nejprve zpracuje AdGuard. Pokud používáte výchozí DNS server poskytovaný poskytovatelem internetových služeb (ISP), je pravděpodobné, že vaše přenosy DNS nejsou šifrované a jsou náchylné k odposlechu a zcizení. AdGuard zašifruje všechny vaše DNS požadavky ještě předtím, než opustí vaše zařízení, aby se k jejich obsahu nedostal žádný zloduch. Kromě toho dokáže AdGuard identifikovat požadavky na reklamní, sledovací domény a/nebo domény pro dospělé a přesměrovat je do "černé díry" namísto přesměrování na DNS server. Více o tom později [později](#local-dns-blocklists).

![How DNS filtering works](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

Filtrování DNS je výkonný nástroj, který podporují všechny hlavní aplikace AdGuardu: [AdGuard pro Windows](https://adguard.com/adguard-windows/overview.html), [AdGuard pro macOS](https://adguard.com/adguard-mac/overview.html), [AdGuard pro Android](https://adguard.com/adguard-android/overview.html) a [AdGuard pro iOS](https://adguard.com/adguard-ios/overview.html).

DNS filtrování lze rozdělit na dvě samostatné funkce: šifrování a přesměrování přenosů DNS na servery DNS a místní blokování některých domén pomocí DNS seznamů zakázaných.

### DNS servery

Na výběr jsou tisíce DNS serverů, které jsou jedinečné svými vlastnostmi a účelem. Většina z nich jednoduše vrací IP adresu požadované domény, ale některé mají i další funkce: blokují reklamy, slídiče, domény pro dospělé atd. V současné době všechny hlavní DNS servery používají jeden nebo více spolehlivých šifrovacích protokolů: DNS skrze HTTPS, DNS skrze TLS. AdGuard také poskytuje [ službu DNS ](https://adguard-dns.io/)a jako první na světě nabízí velmi nový a slibný šifrovací protokol [DNS skrze QUIC](https://adguard.com/blog/dns-over-quic.html). AdGuard má různé servery pro různé cíle. Tento diagram znázorňuje, jak fungují blokovací servery AdGuardu:

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Jiní poskytovatelé DNS mohou fungovat jinak, proto si o nich zjistěte více informací, než se rozhodnete pro ten či onen server DNS. Seznam nejoblíbenějších poskytovatelů DNS najdete v [tomto článku](dns-providers.md). Všechny aplikace AdGuardu, které podporují funkci DNS, mají také seznam serverů DNS, ze kterého si můžete vybrat, nebo dokonce umožňují vybrat libovolný vlastní server DNS.

### Místní DNS seznam blokovaných

Spoléháte-li se však na servery DNS pouze při filtrování provozu DNS, ztrácíte veškerou flexibilitu. Pokud vybraný server blokuje doménu, nemáte k ní přístup. S AdGuardem nemusíte pro filtrování provozu DNS konfigurovat žádný konkrétní server DNS. Všechny produkty AdGuardu umožňují používat DNS seznamy zakázaných, ať už se jedná o jednoduché soubory hosts nebo seznamy, které používají [pokročilejší syntaxi](dns-filtering-syntax.md). Fungují podobně jako běžné seznamy zakázaných: pokud požadavek DNS odpovídá jednomu z pravidel v aktivním seznamu filtrů, je zablokován. Přesněji řečeno, je přesměrován do "černé díry".

:::tip

In AdGuard for iOS, first you have to enable *Advanced mode* in settings in order to get access to DNS blocking.

:::

You can add as many custom blocklists as you wish. For instance, you can use [AdGuard DNS filter](https://github.com/AdguardTeam/AdGuardSDNSFilter). It quite literally blocks everything that AdGuard DNS server does, but in this case you are free to use any other DNS server. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple "use a blocking DNS server" setup.

There are hundreds of different DNS blocklists, you can look for them [here](https://filterlists.com/).

## DNS filtrování vs. filtrování sítě

Network filtering is what we call the 'regular' way AdGuard standalone apps process network traffic, hence the name. Feel free to brush up on it by reading [this article](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/).

First of all, we have to mention that with AdGuard you don't have to choose. You can always use both regular network filtering and DNS filtering at the same time. However, it's important to understand key differences between the two. DNS filtering has both its unique advantages and drawbacks:

**Pros of DNS filtering:**

1. Na některých platformách je to jediný způsob, jak dosáhnout filtrování v celém systému. Například v systému iOS podporuje blokování obsahu ve známém smyslu pouze prohlížeč Safari, u všech ostatních je k dispozici pouze DNS filtrování.
1. Některé formy sledování (jako je [sledování se skrytým jménem CNAME](https://adguard.com/blog/cname-tracking.html)) lze řešit pouze pomocí DNS filtrování.
1. Fáze zpracování DNS požadavku je první, kterou byste mohli řešit s reklamou nebo slídičem, což pomáhá ušetřit trochu výdrže baterie a datového provozu.

**Cons of DNS filtering:**

1. DNS filtrování je "hrubé", což znamená, že neodstraňuje prázdná místa, která zůstávají za blokovanou reklamou, ani nepoužívá žádné kosmetické filtrování. Mnoho složitějších reklam nelze zablokovat na úrovni DNS (respektive lze, ale pouze zablokováním celých domén, které se používají k jiným účelům).

    ![Example of difference](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *Příklad rozdílu mezi filtrováním DNS a filtrováním sítě*

1. Není možné zjistit původ DNS požadavku, což znamená, že nelze rozlišovat mezi různými aplikacemi na úrovni DNS. To negativně ovlivňuje statistiky a znemožňuje vytváření pravidel filtrování pro konkrétní aplikace.

We recommend using DNS filtering in addition to network filtering, not instead of it, whenever possible.
