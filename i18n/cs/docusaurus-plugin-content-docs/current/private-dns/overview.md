---
title: Přehled
sidebar_position: 1
---

:::info

Pomocí AdGuard DNS můžete nastavit své soukromé DNS servery, které budou řešit požadavky DNS a blokovat reklamy, slídiče a škodlivé domény dříve, než se dostanou do vašeho zařízení

Rychlý odkaz: [Vyzkoušet AdGuard DNS](https://agrd.io/download-dns)

:::

![Private AdGuard DNS dashboard main](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## Co je soukromý AdGuard DNS?

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/ME3_Ms9LO8M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Kromě výhod veřejného DNS serveru (jako je šifrování provozu a seznamy blokovaných domén) poskytuje Soukromý AdGuard DNS funkce, jako je flexibilní přizpůsobení, statistiky DNS a rodičovská ochrana a lze ho snadno spravovat pomocí praktického ovládacího panelu.

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

1. Přejděte na svůj [ovládací panel AdGuard DNS](https://agrd.io/download-dns) (pokud nejste přihlášeni, přihlaste se pomocí svého AdGuard účtu)
1. Klikněte na "Připojit zařízení" a postupujte podle pokynů na obrazovce

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

### Uživatelská pravidla

Pro chvíle, kdy předinstalované *seznamy zakázaných* s tisíci pravidly nestačí, máme šikovnou funkci nazvanou "Uživatelská pravidla". Zde můžete ručně přidat vlastní pravidla pro blokování/odblokování určité domény nebo importovat seznamy vlastních pravidel. (zkontrolujte [syntaxi pravidel DNS filtrování](../general/dns-filtering-syntax.md)). Seznamy můžete vyexportovat.

![Private AdGuard DNS dashboard user rules](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

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

### Rodičovská ochrana

Chcete-li své dítě chránit před online obsahem, který považujete za nevhodný, nastavte a aktivujte možnost *Rodičovská ochrana*. Kromě možností, jako je blokování obsahu pro dospělé a bezpečné vyhledávání, jsme přidali možnost ručně zadat domény pro blokování a nastavit plán, podle kterého bude *Rodičovská ochrana* fungovat.

![Private AdGuard DNS dashboard Parental Control](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)

V případě, že ještě nemáte soukromý AdGuard DNS, můžete jej získat na [oficiálních stránkách](https://adguard-dns.io/).
