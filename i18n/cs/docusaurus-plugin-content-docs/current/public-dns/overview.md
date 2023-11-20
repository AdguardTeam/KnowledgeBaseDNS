---
title: Přehled
sidebar_position: 1
---

## Co je AdGuard DNS?

AdGuard DNS je bezplatný DNS řešitel zaměřený na ochranu soukromí, který poskytuje bezpečné připojení a také dokáže blokovat slídiče, reklamy, krádež identity a obsah pro dospělé (volitelně). AdGuard DNS nevyžaduje instalaci žádné aplikace. Snadno se používá a lze jej snadno nastavit na jakémkoli zařízení (chytré telefony, stolní počítače, routery, herní konzole atd.).

## Veřejné servery DNS AdGuard

AdGuard DNS má tři různé typy veřejných serverů. "Výchozí" server slouží k blokování reklam, slídičů, malwaru a krádeže identity. "Ochrana rodiny" dělá totéž, ale také blokuje weby s obsahem pro dospělé a vynucuje možnost "Bezpečné vyhledávání" v prohlížečích, které ji poskytují. "Bez filtrování" poskytuje bezpečné a spolehlivé připojení, ale nic neblokuje. Podrobné pokyny k nastavení AdGuard DNS na libovolném zařízení najdete na [našich stránkách](https://adguard-dns.io/public-dns.html). Každý server podporuje jiné zabezpečené protokoly: DNSCrypt, DNS-over-HTTPS (DoH), DNS skrze TLS (DoT) a DNS-over-QUIC (DoQ).

## Protokoly AdGuard DNS

Kromě běžného DNS (IPv4 i IPv6) podporuje AdGuard DNS různé šifrované protokoly, takže si můžete vybrat ten, který vám nejlépe vyhovuje.

### DNSCrypt

AdGuard DNS umožňuje používat specifický šifrovaný protokol — DNSCrypt. Díky tomu jsou všechny DNS požadavky šifrovány, což vás chrání před možným zachycením požadavků a následným odposlechem a/nebo změnou. Ve srovnání s protokoly DoH, DoT a DoQ je však DNSCrypt považován za zastaralý a pokud je to možné, doporučujeme používat tyto protokoly.

### DNS-over-HTTPS (DoH) a DNS-over-TLS (DoT)

DoH a DoT jsou moderní bezpečné protokoly DNS, které získávají stále větší popularitu a v dohledné budoucnosti se stanou průmyslovými standardy. Oba jsou spolehlivější než DNSCrypt a oba jsou podporovány AdGuard DNS.

### DNS-over-QUIC (DoQ)

[DNS-over-QUIC je nový šifrovací protokol DNS](https://adguard.com/blog/dns-over-quic.html) a AdGuard DNS je první veřejný řešitel, který jej podporuje. Na rozdíl od DoH a DoT používá jako transportní protokol QUIC a konečně vrací DNS k jeho kořenům — pracuje přes UDP. Přináší všechny dobré vlastnosti, které nabízí QUIC — výchozí šifrování, zkrácení doby připojení, lepší výkon při ztrátě datových paketů. Kromě toho má být QUIC protokolem na transportní úrovni a nehrozí zde žádné riziko úniku metadat, k němuž by mohlo dojít v případě DoH.
