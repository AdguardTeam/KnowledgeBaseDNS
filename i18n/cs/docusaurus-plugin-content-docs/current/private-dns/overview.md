---
title: Přehled
sidebar_position: 1
---

:::info

Pomocí AdGuard DNS můžete nastavit své soukromé DNS servery, které budou řešit požadavky DNS a blokovat reklamy, slídiče a škodlivé domény dříve, než se dostanou do vašeho zařízení

Rychlý odkaz: [Vyzkoušet AdGuard DNS](https://agrd.io/download-dns)

:::

![Private AdGuard DNS dashboard main](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## Obecné

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/ME3_Ms9LO8M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Soukromý AdGuard DNS nabízí všechny výhody veřejného serveru AdGuard DNS, včetně šifrování provozu a seznamů zakázaných domén. Nabízí také další funkce, jako je flexibilní přizpůsobení, statistiky DNS a Rodičovská kontrola. Všechny tyto možnosti jsou snadno dostupné a spravované prostřednictvím uživatelsky přívětivého přehledu.

### Proč potřebujete soukromý AdGuard DNS

Dnes můžete k internetu připojit cokoli: televizory, ledničky, chytré žárovky nebo reproduktory. Spolu s nepopiratelnými vymoženostmi však získáte i slídiče zařízení a reklamy. Jednoduchý blokátor reklam v prohlížeči vás v tomto případě neochrání, ale AdGuard DNS, který můžete nastavit tak, aby filtroval datový provoz, blokoval obsah a slídiče, má účinek na celý systém.

Kdysi řada produktů AdGuard zahrnovala pouze [veřejný AdGuard DNS](../public-dns/overview.md) a [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome). Některým uživatelům tato řešení vyhovují, ale pro jiné je veřejný AdGuard DNS málo flexibilní v konfiguraci a AdGuard Home postrádá jednoduchost. Zde přichází ke slovu soukromý AdGuard DNS. Má to nejlepší z obou světů: nabízí možnost přizpůsobení, ovládání a informace — to vše prostřednictvím jednoduchého a snadno použitelného ovládacího panelu.

### Rozdíl mezi soukromým a veřejným AdGuard DNS

Zde je jednoduché srovnání funkcí dostupných ve veřejném a soukromém AdGuard DNS.

| Veřejný AdGuard DNS                    | Soukromý DNS AdGuard                                                                                          |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Šifrování provozu DNS                  | Šifrování provozu DNS                                                                                         |
| Předem určené seznamy zakázaných domén | Přizpůsobitelné seznamy zakázaných domén                                                                      |
| -                                      | Vlastní pravidla DNS filtrování s funkcí importu/exportu                                                      |
| -                                      | Statistiky požadavků (zjistěte, kam směřují vaše DNS požadavky: do kterých zemí, ke kterým společnostem atd.) |
| -                                      | Podrobný záznam dotazů                                                                                        |
| -                                      | Rodičovská ochrana                                                                                            |

## Jak nastavit soukromý AdGuard DNS

### Pro zařízení podporující DoH, DoT a DoQ

1. Přejděte na svůj [ovládací panel AdGuard DNS](https://agrd.io/download-dns) (pokud nejste přihlášeni, přihlaste se pomocí svého AdGuard účtu)
1. Klikněte na *Připojit zařízení* a postupujte podle pokynů na obrazovce

:::note Podporované platformy:

- Android
- iOS
- Windows
- Mac
- Linux
- Routery
- Herní konzole
- Chytré TV

:::

Každé zařízení, které přidáte do panelu AdGuard DNS, má svou vlastní jedinečnou adresu, kterou lze použít, pokud zařízení podporuje moderní šifrované protokoly DNS (DoH, DoT a DoQ).

### Pro zařízení nepodporující DoH, DoT a DoQ

Pokud zařízení nepodporuje šifrovaný DNS a musíte použít běžný DNS, existují další dva způsoby, jak umožnit AdGuard DNS rozpoznat zařízení — použijte vyhrazené IP adresy nebo IP adresu připojeného zařízení.

:::note

Běžné adresy DNS používejte pouze v případě, že nemáte jinou možnost: snižuje to bezpečnost požadavků DNS. Pokud se rozhodnete používat běžný DNS, doporučujeme zvolit vyhrazené IP adresy.

:::

#### Vyhrazené IP adresy

Pro každé zařízení, které připojíte k AdGuard DNS, vám budou nabídnuty dvě vyhrazené adresy IPv6, které můžete zadat v nastavení zařízení. Použití obou adres IPv6 není povinné, ale zařízení mohou často požadovat zadání dvou adres IPv6.

Po připojení k nim bude AdGuard DNS schopen určit, které konkrétní zařízení odesílá požadavky DNS a zobrazit pro ně statistiky. A budete moci nakonfigurovat pravidla DNS speciálně pro toto zařízení.

Bohužel ne všichni poskytovatelé služeb nabízejí podporu protokolu IPv6 a ne všechna zařízení umožňují konfigurovat adresy IPv6. V takovém případě se možná budete muset spolehnout na metodu připojené IP.

#### Připojená IP

Pokud připojíte zařízení k AdGuard DNS prostřednictvím připojené IP adresy, služba započítá všechny běžné požadavky DNS přicházející z této IP adresy do tohoto "zařízení". Při tomto způsobu připojení byste se museli znovu připojit ručně nebo pomocí speciálního programu pokaždé, když se změní IP adresa zařízení, což se děje po každém restartu.

Jediným požadavkem pro připojení IP je, že **musí být rezidentní IP adresa**.

:::note

Rezidenční IP adresa je IP adresa přiřazená zařízení připojenému k rezidentnímu ISP. Obvykle je spojena s fyzickou lokalitou a je přidělena jednotlivým domům nebo bytům. Rezidenční IP adresy používají běžní uživatelé internetu pro své každodenní online aktivity, jako je procházení webu, přístup k platformám sociálních médií, odesílání e-mailů nebo streamování obsahu.

:::

Pokud se snažíte připojit rezidenční IP adresu a AdGuard DNS vám to neumožňuje, kontaktujte náš tým podpory na adrese support@adguard-dns.io.

## Funkce soukromého AdGuard DNS

### Statistiky

Na kartě *Statistiky* můžete zobrazit všechny souhrnné statistiky DNS dotazů provedených zařízeními připojenými k vašemu soukromému AdGuard DNS. Zobrazuje celkový počet a zeměpisnou polohu požadavků, počet zablokovaných požadavků, seznam společností, kterým byly požadavky adresovány, typy požadavků a nejžádanější domény.

![Private AdGuard DNS dashboard statistics](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/statistics.png)

### Cíl datového provozu

Tato funkce vám ukáže, kam směřují DNS požadavky odeslané vašimi zařízeními. Kromě zobrazení mapy cílů požadavků můžete informace filtrovat podle data, zařízení a země.

![Private AdGuard DNS dashboard traffic](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/traffic_destination.png)

### Společnosti

Na této kartě můžete rychle zjistit, které společnosti odesílají nejvíce požadavků a které společnosti jich mají nejvíce zablokovaných.

![Private AdGuard DNS dashboard companies](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/companies.png)

### Protokol dotazů

Jedná se o podrobný protokol, kde můžete zkontrolovat informace o každém jednotlivém požadavku a také třídit požadavky podle stavu, typu, společnosti, zařízení, času a země.

![Private AdGuard DNS dashboard query log](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/query_log.png)

## Nastavení serveru

Tato část obsahuje řadu nastavení, která vám umožní přizpůsobit provoz soukromého AdGuard DNS a zajistit, aby internet fungoval přesně podle vašich představ.

### Správa seznamů zakázaných

Funkce *Seznamy zakázaných* umožňuje určit, které domény chcete blokovat a které ne. Vyberte si z široké škály seznamů zakázaných pro různé účely.

![Private AdGuard DNS dashboard blocklists](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### Nastavení zabezpečení

I když jste si vědomi všech triků, které online podvodníci používají, vždy existuje nebezpečí, že omylem kliknete na škodlivý odkaz. Chcete-li se před podobnými nehodami chránit, přejděte do části *Nastavení zabezpečení* a zaškrtněte políčka vedle možností, které jsou zde uvedeny.

Funkce *Blokovat škodlivé, phishingové a podvodné domény* zablokuje domény nalezené ve vyhrazené databázi. A možnost *Blokovat nově registrované domény* zablokuje všechny domény registrované před méně než 30 dny, které jsou často považovány za rizikové pro vaše online soukromí.

### Rodičovská ochrana

Chcete-li své dítě chránit před online obsahem, který považujete za nevhodný, nastavte a aktivujte možnost *Rodičovská ochrana*. Kromě možností, jako je blokování obsahu pro dospělé a bezpečné vyhledávání, jsme přidali možnost ručně zadat domény pro blokování a nastavit plán, podle kterého bude *Rodičovská ochrana* fungovat.

![Rodičovská ochrana](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)

### Uživatelská pravidla

Pro případy, kdy předinstalované seznamy zakázaných s tisíci pravidly nestačí, máme šikovnou funkci s názvem *Uživatelská pravidla*. Zde můžete ručně přidat vlastní pravidla pro blokování/odblokování určité domény nebo importovat seznamy vlastních pravidel. (podívejte se na [syntaxi pravidel DNS filtrování](../general/dns-filtering-syntax.md)). Seznamy můžete vyexportovat.

![Private AdGuard DNS dashboard user rules](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

### DNS-over-HTTPS s ověřováním

DNS-over-HTTPS s ověřováním poskytuje přihlašovací jméno a heslo pro připojení k serveru. To může omezit přístup neoprávněných uživatelů a zvýšit bezpečnost.

Chcete-li tuto funkci povolit, přejděte do *Nastavení serveru* → *Zařízení* → *Nastavení* a změňte DNS server na jeden s ověřováním. Výběrem možnosti *Zamítnout jiné protokoly* zakážete používání alternativních protokolů, čímž zajistíte výhradní ověřování DNS-over-HTTPS a zablokujete přístup třetích stran.

![DNS-over-HTTPS with authentication](https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png)

## Pokročilé

Zde můžete nastavit způsob, jakým má AdGuard DNS reagovat na blokované domény:

- Výchozí — nulová IP adresa
- NXDOMAIN — doména neexistuje
- REFUSED — server odmítl požadavek zpracovat
- Vlastní IP — můžete ručně zadat IP adresu

Kromě toho můžete upravit nastavení *time-to-live* (TTL). Tento parametr definuje dobu (v sekundách), po kterou zařízení klienta ukládá odezvu na DNS požadavek do mezipaměti. Vyšší TTL znamená, že i když je dříve zablokovaná doména odblokována, může se ještě nějakou dobu jevit jako zablokovaná. Hodnota TTL 0 znamená, že zařízení neukládá odezvy do mezipaměti.

V sekci Pokročilé jsou tři možnosti, které lze přizpůsobit:

- Blokovat přístup k iCloud Private Relay. Zařízení, která používají iCloud Private Relay, mohou nastavení DNS ignorovat. Povolením této možnosti zajistíte, že AdGuard DNS bude vaše zařízení účinně chránit.
- Blokovat doménu Firefox canary. Toto nastavení zabraňuje automatickému přepnutí prohlížeče Firefox na řešitele DoH, pokud je AdGuard DNS nastaven jako DNS služba pro celý systém.
- Zaznamenat IP adresy. Pokud je tato možnost povolena, budou IP adresy spojené s příchozími požadavky DNS zaznamenány a zobrazeny v protokolu dotazů.

### Nastavení přístupu

Zde můžete spravovat přístup k DNS serveru pomocí následujících nastavení:

- Povolení klienti. Určete, kteří klienti mohou používat váš DNS server. Vezměte prosím na vědomí, že do přidaných pravidel přístupu se nezapočítávají povolení klienti, ale pouze zakázaní klienti a domény

![Přidaná pravidla](https://cdn.adtidy.org/content/kb/dns/private/rules_added.png)

- Blokovaní klienti. Seznam klientů, kterým je zakázáno používat váš DNS server
- Blokované domény. Zadejte názvy domén, kterým bude odepřen přístup k DNS serveru. Zde lze také uvést zástupné znaky a pravidla DNS filtrování

:::note

Pokud chcete používat DNS pouze na určitých číslech AS nebo IP adresách, měli byste v poli Blokovaní klienti zablokovat vše ostatní. Pouhé povolení pouze potřebných čísel a adres v poli *Povolení klienti* nestačí.

:::

Nastavením těchto možností můžete kontrolovat, kdo používá váš DNS server, a zabránit případným útokům DDoS. Požadavky, které nejsou povoleny, se nezobrazí v protokolu dotazů a nejsou účtovány.
