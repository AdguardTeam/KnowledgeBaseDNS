---
title: Jak vyprázdnit mezipaměť DNS
sidebar_position: 1
---

:::info

Zde vysvětlíme, jak můžete vyprázdnit mezipaměť DNS a vyřešit tak problémy se službami veřejného DNS. Pomocí Blokátoru reklam AdGuard můžete nastavit DNS servery, včetně šifrovaných

Rychlý odkaz: [Stáhnout Blokátor reklam AdGuard](https://adguard.com/download.html?auto=true&utm_source=kb_dns)

:::

## Co je mezipaměť DNS?

Do mezipaměti DNS se ukládají IP adresy navštívených webů v lokálním počítači, aby se příště načítaly rychleji. Místo dlouhého vyhledávání DNS systém odpovídá na dotazy pomocí záznamů DNS z dočasné mezipaměti DNS.

Mezipaměť DNS obsahuje tzv. [zdrojová data (RR)](https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records), které jsou:

* **Zdrojová data (nebo rdata)**;
* **Typ záznamu**;
* **Název záznamu**;
* **TTL (životnost)**;
* **Třída**;
* **Délka zdrojových dat**.

## Kdy může být nutné vyprázdnit mezipaměť

**Změnili jste poskytovatele DNS na AdGuard DNS.** Pokud uživatel změnil svůj DNS, může kvůli mezipaměti chvíli trvat, než se výsledek zobrazí.

**Pravidelně se vám zobrazuje chyba 404.** Webové stránky byly např. přeneseny na jiný server a změnila se jejich IP adresa. Aby prohlížeč otevřel webovou stránku z nové IP adresy, je třeba odstranit IP adresu z mezipaměti DNS.

**Chcete vylepšit své soukromí.**

## Jak vyprázdnit mezipaměť DNS v různých OS

### iOS

Vyprázdnění mezipaměti DNS v iPadu nebo iPhonu lze provést různými způsoby.

Nejjednodušší je aktivovat režim Letadlo (například v Ovládacím centru nebo v aplikaci Nastavení) a opět jej deaktivovat. Mezipaměť DNS bude vyprázdněna.

Další možností je obnovit síťové nastavení zařízení v Nastavení telefonu. Otevřete *Obecné*, sjeďte dolů, vyhledejte *Resetovat* a klepněte na *Resetovat nastavení sítě*.

> Poznámka: tímto postupem ztratíte připojení k routerům Wi-Fi a dalším specifickým nastavením sítě, včetně přizpůsobení serverů DNS. Budete muset resetovat ručně.

### Android

Nejjednodušší způsob, jak vyprázdnit mezipaměť DNS v zařízení se systémem Android, je zapnout a vypnout režim Letadlo. Režim Letadlo můžete zapnout/vypnout v panelu Rychlých nastavení.

Tvrdý restart může také pomoci vyprázdnit mezipaměť DNS zařízení. Za tímto účelem stiskněte a podržte tlačítko napájení po dobu alespoň 20 sekund. To (obvykle) vynutí ruční restart zařízení a vyprázdnění mezipaměti DNS.

Další možností je obnovit síťové nastavení zařízení v Nastavení telefonu. Otevřete *Nastavení > Systém > Pokročilé > Možnosti resetování > Resetovat nastavení sítě* a klepněte na *Resetovat nastavení*.

> Poznámka: tímto postupem ztratíte připojení k routerům Wi-Fi a dalším specifickým nastavením sítě, včetně přizpůsobení serverů DNS. Budete muset resetovat ručně.

### macOS

Chcete-li v systému macOS vyprázdnit mezipaměť DNS, otevřete Terminál (najdete ho pomocí vyhledávání Spotlight — stiskněte klávesy Command+Mezerník a napište *Terminal*) a zadejte následující příkaz:

`sudo killall -HUP mDNSResponder`

V systémech macOS Big Sur 11.2.0 a macOS Monterey 12.0.0 můžete použít také tento příkaz:

`sudo dscacheutil -flushcache`

Poté zadejte heslo správce a dokončete proces.

### Windows

Chcete-li vyprázdnit mezipaměť DNS v zařízení se systémem Windows, postupujte takto:

Otevřete příkazový řádek jako správce. Najdete jej v nabídce Start zadáním *příkazový řádek* nebo *cmd*. Poté zadejte příkaz `ipconfig/flushdns` a stiskněte Enter.

Zobrazí se řádek *Successfully flushed the DNS Resolver Cache*. Hotovo!

### Linux

Linux neobsahuje mezipaměť DNS na úrovni operačního systému, pokud není nainstalována a spuštěna služba mezipaměti, například systemd-resolved, DNSMasq, BIND nebo Nscd. Proces vyprázdnění mezipaměti DNS závisí na distribuci systému Linux a použité službě ukládání do mezipaměti.

Pro každou distribuci je třeba spustit okno terminálu. Stiskněte Ctrl+Alt+T na klávesnici a pomocí odpovídajícího příkazu vymažte mezipaměť DNS pro službu, na které váš Linux běží.

Chcete-li zjistit, který řešitel DNS používáte, zadejte příkaz `sudo lsof -i :53 -S`.

#### systemd-resolved

Chcete-li vyprázdnit mezipaměť DNS **systemd-resolved**, zadejte příkaz:

`sudo systemd-resolve --flush-caches`

V případě úspěchu příkaz nevrátí žádnou odpověď.

#### DNSMasq

Chcete-li vyprázdnit mezipaměť **DNSMasq**, musíte ji restartovat:

`sudo service dnsmasq restart`

#### NSCD

Chcete-li vyprázdnit mezipaměť **NSCD**, musíte službu také restartovat:

`sudo service nscd restart`

#### BIND

Chcete-li vyprázdnit mezipaměť DNS **BIND**, spusťte příkaz:

`rndc flush`

Pak je třeba znovu načíst BIND:

`rndc reload`

Zobrazí se zpráva, že server byl znovu úspěšně načten.

## Jak vyprázdnit mezipaměť DNS v Chrome

To může být užitečné, pokud nechcete restartovat prohlížeč pokaždé, když pracujete se soukromým AdGuard DNS nebo AdGuard Home. Nastavení 1-2 stačí změnit pouze jednou.

1. Deaktivujte **zabezpečený DNS** v nastavení Chrome

```bash
chrome://settings/security
```

2. Deaktivujte **DNS řešitel Async**

```bash
chrome://flags/#enable-async-dns
```

3. Zde stiskněte obě tlačítka

```bash
chrome://net-internals/#sockets
```

4. Stiskněte **Vymazat mezipaměť hostitele**

```bash
chrome://net-internals/#dns
```
