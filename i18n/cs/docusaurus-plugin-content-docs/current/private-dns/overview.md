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

Private AdGuard DNS offers all the advantages of a public AdGuard DNS server, including traffic encryption and domain blocklists. It also offers additional features such as flexible customization, DNS statistics, and Parental control. All these options are easily accessible and managed via a user-friendly dashboard.

### Why you need private AdGuard DNS

Dnes můžete k internetu připojit cokoli: televizory, ledničky, chytré žárovky nebo reproduktory. Spolu s nepopiratelnými vymoženostmi však získáte i slídiče zařízení a reklamy. Jednoduchý blokátor reklam v prohlížeči vás v tomto případě neochrání, ale AdGuard DNS, který můžete nastavit tak, aby filtroval datový provoz, blokoval obsah a slídiče, má účinek na celý systém.

At one time, the AdGuard product line included only [public AdGuard DNS](../public-dns/overview.md) and [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome). Některým uživatelům tato řešení vyhovují, ale pro jiné je veřejný AdGuard DNS málo flexibilní v konfiguraci a AdGuard Home postrádá jednoduchost. Zde přichází ke slovu soukromý AdGuard DNS. Má to nejlepší z obou světů: nabízí možnost přizpůsobení, ovládání a informace - to vše prostřednictvím jednoduchého a snadno použitelného ovládacího panelu.

### The difference between public and private AdGuard DNS

Here is a simple comparison of features available in public and private AdGuard DNS.

| Veřejný AdGuard DNS                    | Soukromý DNS AdGuard                                                                                          |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Šifrování provozu DNS                  | Šifrování provozu DNS                                                                                         |
| Předem určené seznamy zakázaných domén | Přizpůsobitelné seznamy zakázaných domén                                                                      |
| -                                      | Vlastní pravidla DNS filtrování s funkcí importu/exportu                                                      |
| -                                      | Statistiky požadavků (zjistěte, kam směřují vaše DNS požadavky: do kterých zemí, ke kterým společnostem atd.) |
| -                                      | Podrobný záznam dotazů                                                                                        |
| -                                      | Rodičovská ochrana                                                                                            |

## How to set up private AdGuard DNS

### For devices that support DoH, DoT, and DoQ

1. Přejděte na svůj [ovládací panel AdGuard DNS](https://agrd.io/download-dns) (pokud nejste přihlášeni, přihlaste se pomocí svého AdGuard účtu)
1. Click *Connect device* and follow on-screen instructions

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

### For devices that do not support DoH, DoT, and DoQ

If the device does not support encrypted DNS and you have to use plain DNS, there are two more ways to allow AdGuard DNS to recognize the device — use dedicated IP addresses or link device's IP address.

:::note

Use plain DNS addresses only if you have no other options: this reduces the security of DNS requests. If you decide to use plain DNS, we recommend that you choose dedicated IP addresses.

:::

#### Dedicated IP addresses

For every device that you connect to AdGuard DNS, you'll be offered two dedicated IPv6 addresses that you can enter in your device settings. Using both IPv6 addresses is not mandatory, but often devices might request you to enter two IPv6 addresses.

When you connect to them, AdGuard DNS will be able to determine which particular device is sending DNS requests and display statistics for it. And you'll be able to configure DNS rules specifically for this device.

Unfortunately, not all service providers offer IPv6 support, and not all devices allow you to configure IPv6 addresses. If this is your case, you may have to rely on the Linked IP method.

#### Připojená IP

If you connect your device to AdGuard DNS via Linked IP, the service will count all plain DNS requests coming from that IP address towards that "device". With this connection method, you would have to reconnect manually or through a special program each time the device's IP changes, which happens after each reboot.

Jediným požadavkem pro připojení IP je, že **musí být rezidentní IP adresa**.

:::note

Rezidenční IP adresa je IP adresa přiřazená zařízení připojenému k rezidentnímu ISP. Obvykle je spojena s fyzickou lokalitou a je přidělena jednotlivým domům nebo bytům. Rezidenční IP adresy používají běžní uživatelé internetu pro své každodenní online aktivity, jako je procházení webu, přístup k platformám sociálních médií, odesílání e-mailů nebo streamování obsahu.

:::

Pokud se snažíte připojit rezidenční IP adresu a AdGuard DNS vám to neumožňuje, kontaktujte náš tým podpory na adrese support@adguard.com.

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

## Server settings

This section features a range of settings allowing you to customize the operation of private AdGuard DNS, ensuring the Internet functions exactly as you desire.

### Správa seznamů zakázaných

The *Blocklists* feature allows you to specify which domains you want to block and which you don't. Choose from a variety of blocklists for different purposes.

![Private AdGuard DNS dashboard blocklists](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### Security settings

Even if you're aware of all the tricks online scammers use, there's always a chance you'll accidentally click a malicious link. To protect yourself from such accidents, go to the *Security settings* section and check the boxes next to the options listed there.

The *Block malicious, phishing, and scam domains* feature will block domains found in the dedicated database. And the *Block newly registered domains* will block all domains registered less than 30 days ago, which are often considered risky for your online privacy.

### Uživatelská pravidla

For cases where pre-installed blocklists with thousands of rules are not enough, we have a handy feature called *User rules*. Here you can manually add custom rules to block/unblock a specific domain or import custom rule lists (see [DNS filtering rules syntax](../general/dns-filtering-syntax.md)). Seznamy můžete vyexportovat.

![Private AdGuard DNS dashboard user rules](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

### Rodičovská ochrana

Chcete-li své dítě chránit před online obsahem, který považujete za nevhodný, nastavte a aktivujte možnost *Rodičovská ochrana*. Kromě možností, jako je blokování obsahu pro dospělé a bezpečné vyhledávání, jsme přidali možnost ručně zadat domény pro blokování a nastavit plán, podle kterého bude *Rodičovská ochrana* fungovat.

![Private AdGuard DNS dashboard Parental Control](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)
