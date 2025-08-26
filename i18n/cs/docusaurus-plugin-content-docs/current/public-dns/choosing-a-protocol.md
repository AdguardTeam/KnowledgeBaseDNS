---
title: Výběr DNS protokolu
sidebar_position: 2
---

DNS protokol je sada pravidel, která vaše zařízení používá ke komunikaci se serverem DNS — systémem, který překládá názvy webových stránek, například example.com na IP adresy srozumitelné počítačům. Tento proces dříve probíhal v prostém textu, což znamená, že jej mohly vidět nebo zachytit třetí strany, například poskytovatel internetových služeb nebo hackeři. Šifrované DNS protokoly řeší tento problém tím, že chrání vaše požadavky DNS, čímž je vaše procházení soukromější a bezpečnější.

AdGuard DNS podporuje tři zabezpečené, šifrované DNS protokoly: DoH, DoT a DoQ. Všechny jsou určeny k ochraně přenosů DNS, ale každý z nich má své silné stránky a omezení. Následující přehled vám pomůže pochopit rozdíly a vybrat si ten nejvhodnější.

### DNS-over-TLS (DoT)

DNS-over-TLS zlepšuje soukromí šifrováním přenosů DNS a jejich odesíláním skrze port 853, který je vyhrazen speciálně pro šifrované přenosy DNS.

DoT není nejsilnější možností, pokud jde o soukromí. Používá vyhrazený port (853), což usnadňuje jeho detekci a případné blokování sítěmi. DoT však může být stále užitečný v podnikových nebo spravovaných prostředích, kde správci chtějí umožnit bezpečný DNS a zároveň zachovat kontrolu nad síťovým provozem.

### DNS-over-HTTPS (DoH)

DNS-over-HTTPS odesílá dotazy DNS skrze port 443, což je stejné zabezpečené připojení, které se používá k načítání webových stránek. Díky tomu je pro sítě nebo cenzory obtížnější je odhalit nebo zablokovat.

Může však být nestabilní a způsobovat problémy s výkonem. Pokud všechny datové pakety sdílejí stejné připojení, využívají stejnou transportní vrstvu. To může způsobit problém, který se nazývá head-of-line blocking. Pokud dojde ke ztrátě nebo zpoždění jednoho paketu, zdrží to všechny ostatní, včetně nesouvisejících paketů. V důsledku toho se všechny odpovědi zpožďují, i když je většina dat připravena k doručení.

### DNS-over-QUIC (DoQ)

DNS-over-QUIC je protokol DNS, který k přenosu požadavků DNS používá protokol transportní vrstvy QUIC. Řeší jeden z hlavních problémů protokolu DoH: head-of-line blocking.

Protože DoQ používá protokol QUIC k oddělení činnosti DNS od webového provozu, vyhýbá se problémům s časováním pozorovaným u DoH. Z toho vyplývá, že neodhaluje žádné vzorce provozu. Díky tomu je obtížnější spojit vaše dotazy DNS s vaší aktivitou při procházení, i když samotný provoz je snadněji zjistitelný.

DoQ však zůstává experimentálním protokolem a může čelit problémům se stabilitou nebo být blokován poskytovateli internetových služeb a cenzory. Pokud na to nejste připraveni, možná to není ta nejlepší volba.

![DoH vs. DoQ \*border](https://cdn.adtidy.org/blog/new/gy178dohdoq.jpg)

:::note

Podrobnější informace o blokování head-of-line a protokolu DNS-over-QUIC naleznete v našem [příspěvku blogu](https://adguard-dns.io/en/blog/dns-over-quic.html)

:::
