---
title: Jak vyprázdnit mezipaměť DNS
sidebar_position: 4
---

Operační systémy strojů a internetové prohlížeče ukládají mezipaměť DNS – informace o předchozích vyhledáváních DNS. To urychluje načítání webových stránek, protože mezipaměť obsahuje IP adresy požadovaných domén: místo odkazování na servery DNS, systém načítá odpovědi na dotazy z mezipaměti.

Neaktuální data mezipaměti DNS uložená v počítači nebo prohlížeči však mohou způsobit problémy se zobrazováním nebo načítáním webových stránek. Ještě horší je, že mezipaměť DNS může být poškozena síťovými útoky nebo viry. V takovém případě se do ní vloží neautorizované názvy domén nebo IP adresy. A například místo na stránku google.com vás prohlížeč může přesměrovat na škodlivou IP adresu nebo stránku s reklamou.

Chcete-li se vyhnout výše uvedeným problémům, musíte vymazat mezipaměť DNS: odstranit všechny uložené informace o vyhledávání DNS, aby při příštím odeslání požadavku na vyhledávání počítač obdržel od serverů DNS aktualizovaná data.

## Jak vyprázdnit mezipaměť DNS v macOS

Chcete-li vyprázdnit mezipaměť DNS v macOS, spusťte aplikaci **Terminal** a zadejte konkrétní příkaz v závislosti na verzi macOS nainstalované na vašem zařízení:

* `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` v macOS v13 (Ventura), 12 (Monterey), 11 (Big Sur), 10.15 (Catalina)

* `sudo killall -HUP mDNSResponder` v macOS v10.14 (Mojave), 10.13 (High Sierra), 10.12 (Sierra), 10.08 (Mountain Lion), 10.07 (Lion)

* `sudo dscacheutil -flushcache` a `sudo killall -HUP mDNSResponder` v macOS v10.11 (El Capitan), 10.9 (Mavericks)

* `sudo discoveryutil mdnsflushcache` a `sudo discoveryutil udnsflushcaches` v macOS v10.10

* `sudo dscacheutil -flushcache` v macOS v10.6 (Snow Leopard), 10.5 (Leopard)

* `lookupd -flushcache` v macOS v10.4 (Tiger)

Poté stiskněte na klávesnici *Return*, zadejte heslo správce účtu a stiskněte *Return*. Po dokončení procesu není k dispozici žádné oznámení. Můžete však přidat další příkaz, například upozornění na dokončení vyprázdnění mezipaměti DNS:

`sudo killall -HUP mDNSResponder; sdělí, že vymazání proběhlo úspěšně`

## Jak vyprázdnit mezipaměť DNS ve Windows

Vymazání mezipaměti DNS v systému Windows je jednoduché. Postup je stejný pro téměř všechny verze systému Windows.

Otevřete příkazový řádek jako správce a zadejte následující příkaz: `ipconfig /flushdns`. Pokud příkaz projde, zobrazí se zpráva *Úspěšné vyprázdnění mezipaměti řešitele DNS*.

## Jak vyprázdnit mezipaměť DNS v Linuxu

Různé distribuce Linuxu mohou používat vlastní DNS službu. Některé distribuce, například Ubuntu, nemají ve výchozím nastavení vůbec žádnou DNS službu.

Před vyprázdněním mezipaměti DNS zjistěte, jakou službu má vaše distribuce a zda je ve výchozím nastavení povolena. Některé z nich jsou **NCSD** (Name Service Caching Daemon), **dnsmasq** and **BIND** (Berkeley Internet Name Domain).

### Jak vyprázdnit lokální mezipaměť NCSD DNS

Použijte tento příkaz na svém počítači s Linuxem:

`sudo /etc/init.d/nscd restart`

V případě potřeby zadejte heslo.

### Jak vyprázdnit lokální mezipaměť dnsmasq DNS

Použijte tento příkaz na svém počítači s Linuxem:

`sudo /etc/init.d/dnsmasq restart`

V případě potřeby zadejte heslo. Odezva se zobrazí po zastavení a opětovném spuštění služby.

### Jak vyprázdnit lokální mezipaměť BIND DNS

Pokud používáte službu DNS BIND, můžete spustit několik příkazů, které vymažou mezipaměť DNS. Pro dokončení procesu může být nutné zadání hesla.

`sudo /etc/init.d/named restart`

`sudo rndc restart`

`sudo rndc exec`

## Jak vyprázdnit mezipaměť DNS v prohlížečích založených na Chrome

Do adresního řádku prohlížeče vložte odkaz **chrome://net-internals/#dns** a klikněte na tlačítko *Vymazat mezipaměť hostitele*. 
