---
title: Bezpečné nastavení AdGuard Home
sidebar_position: 4
---

Tato stránka obsahuje seznam dalších doporučení, která vám pomohou zajistit bezpečnost vašeho AdGuard Home.

## Výběr adres serveru

Při prvním spuštění AdGuard Home budete dotázáni, které rozhraní má použít k obsluze běžného DNS. Nejbezpečnější a nejpohodlnější možnost závisí na tom, jak chcete AdGuard Home provozovat. Adresy můžete později změnit tak, že ukončíte AdGuard Home, upravíte pole `dns.bind_hosts` v konfiguračním souboru a znovu AdGuard Home spustíte.

:::note

Uživatelské rozhraní v současné době umožňuje vybrat pouze jedno rozhraní, ale ve skutečnosti můžete prostřednictvím konfiguračního souboru vybrat více adres. V dalších verzích budeme uživatelské rozhraní vylepšovat.

:::

Pokud hodláte spustit AdGuard Home pouze na **svém počítači,** vyberte zařízení zpětné smyčky (známé také jako "localhost"). Obvykle se nazývá `localhost`, `lo` nebo podobně a má adresu `127.0.0.1`.

Pokud plánujete spustit AdGuard Home na **routeru v rámci malé izolované sítě**, vyberte rozhraní s lokální obsluhou. Názvy se mohou lišit, ale obvykle obsahují slova `wlan` nebo `wlp` a mají adresu začínající na `192.168.`. Pokud chcete, aby software v samotném routeru používal také AdGuard Home, měli byste pravděpodobně přidat také adresu zpětné smyčky.

Pokud hodláte spustit AdGuard Home na **veřejně přístupném serveru**, pravděpodobně budete chtít vybrat možnost _Všechna rozhraní_. Upozorňujeme, že tím může být váš server vystaven útokům DDoS, proto si přečtěte níže uvedené části o nastavení přístupu a omezení rychlosti.

## Nastavení přístupu

:::note

Pokud váš AdGuard Home není přístupný zvenčí, můžete tuto část přeskočit.

:::

V dolní části stránky _Nastavení_ → _Nastavení DNS_ najdete část _Nastavení přístupu_. Tato nastavení umožňují zakázat klienty, o kterých je známo, že zneužívají instanci AdGuard Home, nebo povolit režim seznamu povolených klientů. Režim Seznam povolených se doporučuje pro veřejné instance, kde je znám počet klientů a kde všichni klienti mohou používat zabezpečený DNS.

Chcete-li povolit režim Seznam povolených, zadejte do pole _Povolení klienti_ [ClientIDs][cid] (doporučeno) nebo IP adresy povolených klientů.

[cid]: https://github.com/AdguardTeam/AdGuardHome/wiki/Clients#clientid

## Zakázání běžného DNS

:::note

Pokud váš AdGuard Home není přístupný zvenčí, můžete tuto část přeskočit.

:::

Pokud všichni klienti používající váš AdGuard Home mohou používat šifrované protokoly, je vhodné zakázat běžný DNS nebo jej znepřístupnit zvenčí.

Pokud chcete zcela zakázat běžný DNS, můžete tak učinit na stránce _Nastavení_ → _Nastavení šifrování_.

Pokud chcete omezit běžný DNS pouze na interní použití, ukončete AdGuard Home, upravte pole `dns.bind_hosts` v konfiguračním souboru tak, aby obsahovalo pouze adresy zpětné smyčky a restartujte AdGuard Home.

## Omezení rychlosti běžného DNS

:::note

Pokud váš AdGuard Home není přístupný zvenčí, můžete tuto část přeskočit.

:::

Výchozí omezení rychlosti běžného DNS na 20 by mělo být obecně dostačující, ale pokud máte seznam známých klientů, můžete je přidat do seznamu povolených klientů a pro ostatní klienty nastavit přísnější omezení rychlosti.

## Obavy týkající se služeb OS

Aby se zabránilo zvýšení oprávnění prostřednictvím binárního podvržení, je důležité, aby adresář, do kterého je AdGuard Home nainstalován, měl správně nastavené vlastnictví a oprávnění.

Děkujeme Go Compile za pomoc při psaní této sekce.

### Unix (FreeBSD, Linux, macOS, OpenBSD)

Pracovní adresář AdGuard Home, který je ve výchozím nastavení `/Applications/AdGuardHome` v macOS a `/opt/AdGuardHome` v ostatních unixových systémech, stejně jako samotná binárka, by měl mít obecně vlastnictví `root:root` a neměl by do něj mít možnost zápisu nikdo jiný než `root`. To můžete zkontrolovat následujícím příkazem, ve kterém nahradíte `/opt/AdGuardHome` svým adresářem a `/opt/AdGuardHome/AdGuardHome` svou binárkou:

```sh
ls -d -l /opt/AdGuardHome
ls -l /opt/AdGuardHome/AdGuardHome
```

Poměrně bezpečný výstup by měl vypadat takto:

```none
drwxr-xr-x 4 root root 4096 Jan 1 12:00 /opt/AdGuardHome/
-rwxr-xr-x 1 root root 29409280 Jan 1 12:00 /opt/AdGuardHome/AdGuardHome
```

Všimněte si, že nikdo kromě `root` nemá oprávnění k zápisu, stejně jako vlastnictví `root`. Pokud nejsou oprávnění a/nebo vlastnictví správná, spusťte následující příkazy pod `root`:

```sh
chmod 755 /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
chown root:root /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
```

### Windows

Princip je stejný i ve Windows: ujistěte se, že adresář AdGuard Home, obvykle `C:\Program Files\AdGuardHome`, a binární soubor `AdGuardHome.exe` mají oprávnění, která umožní čtení a spuštění/vypsání pouze běžným uživatelům.

V budoucnu plánujeme vydat sestavení pro Windows jako instalační soubory MSI, které zajistí, že se tato funkce provede automaticky.
