---
title: Strukturované chyby DNS (SDE)
sidebar_position: 5
---

Vydáním AdGuard DNS v2.10 se AdGuard stal prvním veřejným DNS řešitelem, který implementoval podporu [_Strukturované chyby DNS_ (SDE)](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/), aktualizaci [RFC 8914](https://datatracker.ietf.org/doc/rfc8914/). Tato funkce umožňuje DNS serverům poskytovat podrobné informace o blokovaných webových stránkách přímo v odpovědi DNS a nespoléhat se na obecné zprávy prohlížeče. V tomto článku vysvětlíme, co jsou _Strukturované chyby DNS_ a jak fungují.

## Co jsou strukturované chyby DNS

Pokud je požadavek na reklamní nebo sledovací doménu zablokován, může se stát, že se na webových stránkách zobrazí prázdná místa nebo si uživatel ani nevšimne, že došlo k DNS filtrování. Pokud je však celá webová stránka zablokována na úrovni DNS, uživatel se na ni vůbec nedostane. Při pokusu o přístup na blokovanou webovou stránku se může v prohlížeči zobrazit obecná chyba “Tento web není dostupný“.

![“This site can't be reached“ error](https://cdn.adtidy.org/content/blog/dns/dns_error.png)

Takové chyby nevysvětlují, co se stalo a proč. Uživatelé jsou proto zmateni, proč jsou webové stránky nedostupné, a často se domnívají, že jejich připojení k internetu nebo řešitel DNS je nefunkční.

Pro objasnění by DNS servery mohly uživatele přesměrovat na vlastní stránku s vysvětlením. Webové stránky HTTPS (což je většina webových stránek) však vyžadují samostatný certifikát.

![Certificate error](https://cdn.adtidy.org/content/blog/dns/certificate_error.png?1)

Existuje jednodušší řešení: [Strukturované chyby DNS (SDE)](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/). Koncept SDE vychází ze základu [_Rozšířené chyby DNS_ (RFC 8914)](https://datatracker.ietf.org/doc/rfc8914/), které zavedly možnost zahrnout do odpovědí DNS další informace o chybách. Návrh SDE jde v tomto směru ještě dál a používá [I-JSON](https://www.rfc-editor.org/rfc/rfc7493) (omezený profil JSON) k formátování informací způsobem, který mohou prohlížeče a klientské aplikace snadno analyzovat.

Údaje SDE jsou obsaženy v poli `EXTRA-TEXT` odpovědi DNS. Obsahují:

- `j` (justification): Důvod blokování
- `c` (contact): Kontaktní informace pro dotazy, pokud byla stránka omylem zablokována
- `o` (organization): Organizace odpovědná za filtrování DNS v tomto případě (nepovinné)
- `s` (suberror): Kód dílčí chyby pro toto konkrétní filtrování DNS (nepovinné)

Takový systém zvyšuje transparentnost mezi službami DNS a uživateli.

### Co je potřeba k implementaci Strukturovaných chyb DNS

Ačkoli AdGuard DNS implementoval podporu pro Strukturované chyby DNS, prohlížeče v současné době nativně nepodporují analýzu a zobrazení dat SDE. Aby se uživatelům v prohlížečích zobrazovala podrobná vysvětlení blokování webových stránek, musí vývojáři prohlížečů přijmout a podporovat návrh specifikace SDE.

### Demo rozšíření AdGuard DNS pro SDE

Pro ukázku fungování Strukturovaných chyb DNS, vyvinul AdGuard DNS ukázkové rozšíření prohlížeče, které ukazuje, jak by _Strukturované chyby DNS_ mohly fungovat, kdyby je prohlížeče podporovaly. Pokud se pokusíte navštívit webovou stránku blokovanou AdGuard DNS s tímto rozšířením, zobrazí se stránka s podrobným vysvětlením a informacemi poskytnutými prostřednictvím SDE, jako je důvod blokování, kontaktní údaje a odpovědná organizace.

![Explanation page](https://cdn.adtidy.org/blog/new/jlkdbaccess_blocked.png)

Rozšíření můžete nainstalovat z [Chrome Web Store](https://chromewebstore.google.com/detail/oeinmjfnchfhaabhchfjkbdpmgeageen) or from [GitHub](https://github.com/AdguardTeam/dns-sde-extension/).

Pokud chcete zjistit, jak to vypadá na úrovni DNS, můžete použít příkaz `dig` a ve výstupu vyhledat `EDE`.

```text
% dig @94.140.14.14 'ad.doubleclick.net' A IN +ednsopt=15:0000

...

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; EDE: 17 (Filtered): ({"j":"Filtered by AdGuard DNS","o":"AdGuard DNS","c":["mailto:support@adguard-dns.io"]})
;; QUESTION SECTION:
;ad.doubleclick.net.  IN A

...
```
