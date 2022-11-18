---
title: Přehled
sidebar_position: 1
slug: /
---

## Co je DNS

DNS je zkratka pro "Domain name system" a jeho účelem je převádět názvy webových stránek na IP adresy. Pokaždé, když přejdete na webovou stránku, odešle prohlížeč DNS dotaz na server DNS, aby zjistil IP adresu webové stránky. A běžný DNS řešitel jednoduše vrátí IP adresu požadované domény.

> Výchozí DNS server obvykle poskytuje váš ISP. To znamená, že poskytovatel internetu může sledovat vaši online aktivitu a prodávat záznamy třetím stranám.

![Vaše zařízení vždy používá nějaký DNS server k získání IP adres názvů domén, na které chcete přejít](https://cdn.adguard.com/content/blog/articles/dns-cbs/scr1.png)

Existují také DNS servery, které mohou blokovat určité webové stránky na úrovni DNS. Jak fungují? Když vaše zařízení odešle "špatný" požadavek, ať už se jedná o reklamu nebo slídič, server DNS zabrání připojení tím, že odpoví nesměrovatelnou IP adresou blokované domény.

## Proč používat DNS pro blokování obsahu

K internetu je dnes připojeno úplně všechno, od televize po chytré žárovky, od mobilních zařízení po chytrá auta. A kde je internet, tam jsou i reklamy a slídiče. V tomto případě se zdá, že blokování reklam v prohlížeči nestačí. Chcete-li získat lepší ochranu, použijte DNS v kombinaci s VPN a blokátorem reklam.

Použití DNS pro blokování obsahu má některé výhody i zjevné nedostatky. Na jedné straně nemá DNS žádná slepá místa, protože sleduje všechna zařízení, nejen prohlížeče. Na druhou stranu však samotné DNS blokování nemůže zajistit kosmetické filtrování.

## Co je AdGuard DNS

AdGuard DNS je jednou z nejpřívětivějších služeb DNS na trhu. Podporuje spolehlivé šifrovací protokoly jako DNS skze HTTPS, DNS skze TLS a DNS skze QUIC. Může pracovat jako obvyklý DNS řešitel v režimu bez filtrování, ale také může zajistit blokování obsahu na úrovni DNS: identifikovat požadavky na reklamní, sledovací a/nebo domény pro dospělé (volitelně) a odpovědět prázdnou odpovědí. AdGuard má vlastní databázi názvů domén, které zobrazují reklamy, slídiče a podvody, a pravidelně ji aktualizuje.

![Přibližné schéma fungování AdGuard DNS](https://cdn.adguard.com/public/Adguard/Blog/scr2.png)

> Přibližně 75 % datového provozu AdGuard DNS je šifrováno. Tím se vlastně DNS servery blokující obsah liší od ostatních. Pokud se podíváte na statistiky CloudFlare nebo Quad9, zjistíte, že šifrované DNS tvoří jen malý podíl všech dotazů.

AdGuard DNS existuje ve dvou hlavních formách: [veřejný AdGuard DNS](public-dns/overview.md) a [soukromý AdGuard DNS](private-dns/overview.md). Obě tyto služby nevyžadují instalaci žádné aplikace. Snadno se nastavují a používají a poskytují uživatelům minimum funkcí potřebných k blokování reklam, slídičů, škodlivých webových stránek a obsahu pro dospělé (pokud je vyžadováno). Neexistují žádná omezení, s jakými zařízeními je lze používat.

Navzdory mnoha podobnostem jsou soukromý AdGuard DNS a veřejný AdGuard DNS dvě různé služby. Hlavní rozdíl spočívá v tom, že soukromý AdGuard DNS si můžete přizpůsobit, zatímco veřejný AdGuard DNS nikoli.

## Modul filtrování DNS v produktech AdGuardu

Všechny hlavní produkty AdGuardu, včetně AdGuard VPN, mají **modul filtrování DNS**, kde můžete vybrat DNS server poskytovatele, kterému důvěřujete. Na seznamu jsou samozřejmě "Výchozí" AdGuard DNS, AdGuard DNS "Bez filtrování" a AdGuard DNS "Ochrana rodiny". Aplikace AdGuardu také umožňují uživatelům [snadno konfigurovat a používat AdGuard DNS](https://adguard-dns.io/en/public-dns.html) — veřejný nebo soukromý.







