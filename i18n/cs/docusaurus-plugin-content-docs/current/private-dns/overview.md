---
title: Přehled
sidebar_position: 1
---

:::info

Pomocí AdGuard DNS můžete nastavit své soukromé DNS servery, které budou řešit požadavky DNS a blokovat reklamy, slídiče a škodlivé domény dříve, než se dostanou do vašeho zařízení

Rychlý odkaz: [Vyzkoušet AdGuard DNS](https://adguard-dns.io/dashboard/)

:::

![Private AdGuard DNS dashboard main](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## Co je soukromý AdGuard DNS?

Soukromý AdGuard DNS je DNS server, který kromě výhod veřejného DNS serveru (jako je šifrování provozu a seznamy zakázaných domén) poskytuje funkce, jako je flexibilní přizpůsobení, statistiky DNS a rodičovská kontrola a lze jej snadno spravovat pomocí praktického ovládacího panelu.

## Proč potřebujete soukromý AdGuard DNS

Dnes můžete k internetu připojit cokoli: televizory, ledničky, chytré žárovky nebo reproduktory. Spolu s nepopiratelnými vymoženostmi však získáte i slídiče zařízení a reklamy. Jednoduchý blokátor reklam v prohlížeči vás v tomto případě neochrání, ale AdGuard DNS, který můžete nastavit tak, aby filtroval datový provoz, blokoval obsah a slídiče, má účinek na celý systém.

Již máme [veřejný AdGuard DNS](../public-dns/overview.md) a [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome). Některým uživatelům tato řešení vyhovují, ale pro jiné je veřejný AdGuard DNS málo flexibilní v konfiguraci a AdGuard Home postrádá jednoduchost. Zde přichází ke slovu soukromý AdGuard DNS. Má to nejlepší z obou světů: nabízí možnost přizpůsobení, ovládání a informace - to vše prostřednictvím jednoduchého a snadno použitelného ovládacího panelu.

## Rozdíl mezi soukromým a veřejným AdGuard DNS

Zde je jednoduché srovnání funkcí dostupných ve veřejných serverech AdGuard DNS a soukromých serverech AdGuard DNS.

| Veřejný AdGuard DNS                    | Soukromý DNS AdGuard                                                                                          |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Šifrování provozu DNS                  | Šifrování provozu DNS                                                                                         |
| Předem určené seznamy zakázaných domén | Přizpůsobitelné seznamy zakázaných domén                                                                      |
| -                                      | Vlastní pravidla DNS filtrování s funkcí importu/exportu                                                      |
| -                                      | Statistiky požadavků (zjistěte, kam směřují vaše DNS požadavky: do kterých zemí, ke kterým společnostem atd.) |
| -                                      | Podrobný záznam dotazů                                                                                        |
| -                                      | Rodičovská ochrana                                                                                            |

## Jak nastavit soukromý AdGuard DNS

1. Přejděte na svůj [ovládací panel AdGuard DNS](https://adguard-dns.io/dashboard/) (pokud nejste přihlášeni, přihlaste se pomocí svého AdGuard účtu)
1. Klikněte na "Připojit zařízení" a postupujte podle pokynů na obrazovce

:::note Podporované platformy:

- Android
- iOS
- Windows
- Mac
- Linux
- Routery
- Herní konzole

:::

Každé zařízení, které přidáte do panelu AdGuard DNS, má svou vlastní jedinečnou adresu, kterou lze použít, pokud zařízení podporuje moderní šifrované protokoly DNS (DoH, DoT a DoQ).

## Připojená IP

Pokud zařízení nepodporuje šifrovanou službu DNS a musíte použít běžnou službu DNS, existuje další způsob, jak umožnit službě AdGuard DNS rozpoznat zařízení — připojit jeho IP adresu. V tomto případě AdGuard DNS započítává všechny běžné DNS požadavky, které přicházejí z dané IP adresy do tohoto "zařízení".

Jediným požadavkem pro připojení IP je, že **musí být rezidentní IP adresa**.

:::note

Rezidenční IP adresa je IP adresa přiřazená zařízení připojenému k rezidentnímu ISP. Obvykle je spojena s fyzickou lokalitou a je přidělena jednotlivým domům nebo bytům. Rezidenční IP adresy používají běžní uživatelé internetu pro své každodenní online aktivity, jako je procházení webu, přístup k platformám sociálních médií, odesílání e-mailů nebo streamování obsahu.

:::

Pokud se snažíte připojit rezidenční IP adresu a AdGuard DNS vám to neumožňuje, kontaktujte náš tým podpory na adrese support@adguard.com.

## Funkce soukromého AdGuard DNS

### Správa seznamů zakázaných

Pomocí funkce "Seznamy zakázaných" můžete nastavit, které domény chcete blokovat a které ne. Vyberte si z široké škály seznamů zakázaných pro různé účely.

![Private AdGuard DNS dashboard blocklists](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### User rules

For times when pre-installed *Blocklists* with thousands of rules are not enough, we have a handy function called "User rules". Here you can add custom rules manually to block/unblock a certain domain or import custom rules lists (check out [DNS filtering rules syntax](../general/dns-filtering-syntax.md)). You can export the lists.

![Private AdGuard DNS dashboard user rules](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

### Statistics

In "Statistics" tab you can see all the summarized statistics on DNS queries made by devices connected to your Private AdGuard  DNS. It shows the total number and geography of requests, the number of blocked requests, the list of companies the requests were addressed to, requests types and top requested domains.

![Private AdGuard DNS dashboard statistics](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/statistics.png)

### Traffic destination

This feature shows you where DNS requests sent by your devices go. On top of seeing the map of request destinations, you can filter the information by date, device and country.

![Private AdGuard DNS dashboard traffic](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/traffic_destination.png)

### Companies

This tab allows you to quickly check which companies send the most requests, and which companies have the most blocked requests.

![Private AdGuard DNS dashboard companies](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/companies.png)

### Query log

This is a detailed log where you can check out the information on every single request and also sort requests by status, type, company, device, time, country.

![Private AdGuard DNS dashboard query log](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/query_log.png)

### Rodičovská ochrana

To protect your child from online content you deem inappropriate, set up and activate the *Parental control* option. In addition to options such as "adult content" blocking and safe search, we've added the ability to manually specify domains for blocking and set a schedule for the *Parental control* to work accordingly.

![Private AdGuard DNS dashboard Parental Control](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)

V případě, že ještě nemáte soukromý AdGuard DNS, můžete jej získat na [oficiálních stránkách](https://adguard-dns.io/).
