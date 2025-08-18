---
title: Přehled
sidebar_position: 1
slug: /
---

## Co je DNS?

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/MSp7Ki03-LI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

DNS je zkratka pro *Domain name system* a jeho účelem je převádět názvy webových stránek na IP adresy. Pokaždé, když přejdete na webovou stránku, odešle prohlížeč DNS dotaz na server DNS, aby zjistil IP adresu webové stránky. A běžný DNS řešitel jednoduše vrátí IP adresu požadované domény.

:::note

Výchozí DNS server obvykle poskytuje váš ISP. To znamená, že poskytovatel internetu může sledovat vaši online aktivitu a prodávat záznamy třetím stranám.

:::

![Your device always uses a DNS server to obtain the IP addresses of the domains that are accessed by various apps, services, etc.](https://cdn.adtidy.org/content/blog/articles/dns-cbs/scr1.png)

Existují také DNS servery, které mohou blokovat určité webové stránky na úrovni DNS. Jak fungují? Když vaše zařízení odešle špatný požadavek, ať už se jedná o reklamu nebo slídič, server DNS zabrání připojení tím, že odpoví nesměrovatelnou IP adresou blokované domény.

## Proč používat DNS pro blokování obsahu

K internetu je dnes připojeno úplně všechno, od televize po chytré žárovky, od mobilních zařízení po chytrá auta. A kde je internet, tam jsou i reklamy a slídiče. V tomto případě se ukázalo, že blokování reklam v prohlížeči nestačí. Chcete-li získat lepší ochranu, použijte DNS v kombinaci s VPN a blokátorem reklam.

Použití DNS pro blokování obsahu má některé výhody i zjevné nedostatky. Na jednu stranu je DNS ve smyčce pro dotazy ze všech zařízení a jejich aplikací. Na druhou stranu však samotné DNS blokování nemůže zajistit kosmetické filtrování.

## Co je AdGuard DNS?

AdGuard DNS je jednou z nejvíce, na soukromí orientovaných služeb DNS na trhu. Podporuje spolehlivé šifrovací protokoly jako DNS-over-HTTPS, DNS-over-TLS a DNS-over-QUIC. Může pracovat jako obvyklý DNS řešitel v režimu bez filtrování, ale také může zajistit blokování obsahu na úrovni DNS: identifikovat požadavky na reklamní, sledovací a/nebo domény pro dospělé (volitelně) a odpovědět prázdnou odpovědí. AdGuard má vlastní často aktualizovanou databázi s názvy domén, které zobrazují reklamy, slídiče a podvody.

![Přibližné schéma fungování AdGuard DNS](https://cdn.adtidy.org/public/Adguard/Blog/scr2.png)

Přibližně 75 % datového provozu AdGuard DNS je šifrováno. Tím se vlastně DNS servery blokující obsah liší od ostatních. Pokud se podíváte na statistiky CloudFlare nebo Quad9, zjistíte, že šifrované DNS tvoří jen malý podíl všech dotazů.

AdGuard DNS existuje ve dvou hlavních formách: [Veřejný AdGuard DNS](public-dns/overview) a [Soukromý AdGuard DNS](private-dns/overview). Žádná z těchto služeb nevyžaduje instalaci aplikací. Snadno se nastavují a používají a poskytují uživatelům minimum funkcí potřebných k blokování reklam, slídičů, škodlivých webových stránek a obsahu pro dospělé (pokud je vyžadováno). Neexistují žádná omezení, s jakými zařízeními je lze používat.

Navzdory mnoha podobnostem jsou Soukromý AdGuard DNS a Veřejný AdGuard DNS dva různé produkty. Hlavní rozdíl spočívá v tom, že Soukromý AdGuard DNS si můžete přizpůsobit, zatímco Veřejný AdGuard DNS nikoli.

## Modul filtrování DNS v produktech AdGuardu

Všechny hlavní produkty AdGuardu, včetně AdGuard VPN, mají **modul filtrování DNS**, kde můžete vybrat DNS server poskytovatele, kterému důvěřujete. Na seznamu jsou samozřejmě "Výchozí" AdGuard DNS, AdGuard DNS "Bez filtrování" a AdGuard DNS "Ochrana rodiny". Aplikace AdGuardu také umožňují uživatelům [snadno konfigurovat a používat AdGuard DNS](https://adguard-dns.io/public-dns.html) — Veřejný nebo Soukromý.
