---
title: Přehled
sidebar_position: 1
---

# Soukromý DNS AdGuard

![Private AdGuard DNS dashboard main](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/main.png)

## Co je soukromý AdGuard DNS

Soukromý AdGuard DNS je DNS server, který kromě výhod veřejného DNS serveru (jako je šifrování provozu a seznamy zakázaných domén) poskytuje funkce, jako je flexibilní přizpůsobení, statistiky DNS a rodičovská kontrola a lze jej snadno spravovat pomocí praktického ovládacího panelu.

## Proč je potřeba soukromý AdGuard DNS

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
2. Klikněte na “Připojit zařízení“ a postupujte podle pokynů na obrazovce

> Podporované platformy: - Android - iOS - Windows - Mac - Linux - Routery - Herní konzole


## Funkce soukromého AdGuard DNS

### Správa seznamů zakázaných

Pomocí funkce "Seznamy zakázaných" můžete nastavit, které domény chcete blokovat a které ne. Vyberte si z široké škály seznamů zakázaných pro různé účely.

![Private AdGuard DNS dashboard blocklists](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### Uživatelská pravidla

Pro chvíle, kdy předinstalované *seznamy zakázaných* s tisíci pravidly nestačí, máme šikovnou funkci nazvanou "Uživatelská pravidla". Zde můžete ručně přidat vlastní pravidla pro blokování/odblokování určité domény nebo importovat seznamy vlastních pravidel. (zkontrolujte [syntaxi pravidel DNS filtrování](../general/dns-filtering-syntax.md)). Seznamy můžete vyexportovat.

![Private AdGuard DNS dashboard user rules](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/import.png)

### Statistiky

Na kartě "Statistiky" můžete zobrazit všechny souhrnné statistiky DNS dotazů provedených zařízeními připojenými k vašemu soukromému AdGuard DNS. Zobrazuje celkový počet a zeměpisnou polohu požadavků, počet zablokovaných požadavků, seznam společností, kterým byly požadavky adresovány, typy požadavků a nejžádanější domény.

![Private AdGuard DNS dashboard statistics](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/statistics.png)

### Cíl datového provozu

Tato funkce vám ukáže, kam směřují DNS požadavky odeslané vašimi zařízeními. Kromě zobrazení mapy cílů požadavků můžete informace filtrovat podle data, zařízení a země.

![Private AdGuard DNS dashboard traffic](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/traffic_destination.png)

### Společnosti

Na této kartě můžete rychle zjistit, které společnosti odesílají nejvíce požadavků a které společnosti jich mají nejvíce zablokovaných.

![Private AdGuard DNS dashboard companies](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/companies.png)

### Protokol dotazů

Jedná se o podrobný protokol, kde můžete zkontrolovat informace o každém jednotlivém požadavku a také třídit požadavky podle stavu, typu, společnosti, zařízení, času a země.

![Private AdGuard DNS dashboard query log](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/query_log.png)

### Rodičovská ochrana

Chcete-li své dítě chránit před online obsahem, který považujete za nevhodný, nastavte a aktivujte možnost *Rodičovská ochrana*. Kromě možností, jako je blokování obsahu pro dospělé a bezpečné vyhledávání, jsme přidali možnost ručně zadat domény pro blokování a nastavit plán, podle kterého bude *Rodičovská ochrana* fungovat.

![Private AdGuard DNS dashboard Parental Control](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/parental_control.png)
> V případě, že ještě nemáte soukromý AdGuard DNS, můžete jej získat na [oficiálních stránkách](https://adguard-dns.io/).