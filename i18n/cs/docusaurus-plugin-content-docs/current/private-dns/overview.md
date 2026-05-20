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


<!--

## How to set up private AdGuard DNS

### For devices that support DoH, DoT, and DoQ

1. Go to your [AdGuard DNS dashboard](https://agrd.io/download-dns) (if not logged in, log in using your AdGuard account)
1. Click *Connect device* and follow on-screen instructions

:::note Supported platforms:

- Android
- iOS
- Windows
- Mac
- Linux
- Routers
- Gaming consoles
- Smart TVs

:::

Every device that you add in the AdGuard DNS panel has its own unique address that can be used if the device supports modern encrypted DNS protocols (DoH, DoT, and DoQ).

### For devices that do not support DoH, DoT, and DoQ

If the device does not support encrypted DNS and you have to use plain DNS, there are two more ways to allow AdGuard DNS to recognize the device — use dedicated IP addresses or link device's IP address.

:::note

Use plain DNS addresses only if you have no other options: this reduces the security of DNS requests. If you decide to use plain DNS, we recommend that you choose dedicated IP addresses.

:::

#### Dedicated IP addresses

For every device that you connect to AdGuard DNS, you'll be offered two dedicated IPv6 addresses that you can enter in your device settings. Using both IPv6 addresses is not mandatory, but often devices might request you to enter two IPv6 addresses.

When you connect to them, AdGuard DNS will be able to determine which particular device is sending DNS requests and display statistics for it. And you'll be able to configure DNS rules specifically for this device.

Unfortunately, not all service providers offer IPv6 support, and not all devices allow you to configure IPv6 addresses. If this is your case, you may have to rely on the Linked IP method.

#### Linked IP

If you connect your device to AdGuard DNS via Linked IP, the service will count all plain DNS requests coming from that IP address towards that "device". With this connection method, you would have to reconnect manually or through a special program each time the device's IP changes, which happens after each reboot.

The only requirement for linking IP is that **it must be a residential IP address**.

:::note

A residential IP address is an IP address assigned to a device connected to a residential ISP. It is typically associated with a physical location and is allocated to individual homes or apartments. Residential IP addresses are used by regular Internet users for their everyday online activities, such as browsing the web, accessing social media platforms, sending emails, or streaming content.

:::

If you're trying to link a residential IP address and AdGuard DNS does not allow you to do that, please contact our support team at support@adguard-dns.io.

-->

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

![DNS-over-HTTPS s ověřováním](https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png)

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

### Jak připojit zařízení k AdGuard DNS

AdGuard DNS je velmi flexibilní a lze ho nastavit na různých zařízeních včetně tabletů, počítačů, routerů a herních konzolí. Tato část obsahuje podrobné pokyny pro připojení zařízení k AdGuard DNS.

[Jak připojit zařízení k AdGuard DNS](/private-dns/connect-devices/connect-devices.md)

### Server a nastavení

Tato část vysvětluje, co je to server v AdGuard DNS a jaká nastavení jsou k dispozici. Nastavení umožňují přizpůsobit způsob, jakým AdGuard DNS reaguje na blokované domény, a spravovat přístup k serveru DNS.

[Server a nastavení](/private-dns/server-and-settings/server-and-settings.md)

### Jak nastavit filtrování

V této části popisujeme řadu nastavení, která umožňují jemně vyladit funkce AdGuard DNS. Pomocí seznamů blokování, uživatelských pravidel, rodičovské kontroly a bezpečnostních filtrů můžete nakonfigurovat filtrování podle svých potřeb.

[Jak nastavit filtrování](/private-dns/setting-up-filtering/blocklists.md)

### Statistiky a protokol dotazů

Statistiky a protokol dotazů poskytují přehled o činnosti vašich zařízení. Karta *Statistiky* umožňuje zobrazit přehled požadavků DNS provedených zařízeními připojenými k soukromému AdGuard DNS. V protokolu dotazů můžete zobrazit informace o každém požadavku a také seřadit požadavky podle stavu, typu, společnosti, zařízení, času a země.

[Statistiky a protokol dotazů](/private-dns/statistics-and-log/statistics.md)

### Vlastní domény

Předplatitelé AdGuard DNS Enterprise a Team mohou místo výchozí domény `d.adguard-dns.com` používat své vlastní domény (např. `dns.example.com`). Toto nastavení zajišťuje hladkou integraci s bezpečnostními zásadami společnosti a zároveň zachovává všechny funkce blokování reklam a ochrany soukromí, které poskytuje AdGuard DNS.

[Vlastní domény](/private-dns/server-and-settings/custom-domains.md)
