---
title: Propojené IP
sidebar_position: 3
---

## Co jsou propojené IP adresy a proč jsou užitečné

Ne všechna zařízení podporují šifrované protokoly DNS. V takovém případě byste měli zvážit nastavení nešifrovaného DNS. Můžete například použít **propojenou IP adresu**. Jediným požadavkem na propojenou IP adresu je, že se musí jednat o rezidenční IP adresu.

:::note

**Rezidenční IP adresa** je přiřazená zařízení připojenému k rezidenčnímu ISP. Obvykle se váže k fyzickému místu a přiděluje se jednotlivým domům nebo bytům. Lidé používají rezidenční IP adresy pro každodenní online aktivity, jako je procházení webu, posílání e-mailů, používání sociálních médií nebo streamování obsahu.

:::

Někdy se může stát, že je IP adresa rezidenční sítě již používána, a pokud se k ní pokusíte připojit, AdGuard DNS připojení zabrání.
![Linked IPv4 address \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked.png)
If that happens, please reach out to support at [support@adguard-dns.io](mailto:support@adguard-dns.io), and they’ll assist you with the right configuration settings.

## Jak nastavit propojenou IP

Následující pokyny vysvětlují, jak se k zařízení připojit pomocí **propojené IP adresy**:

1. Otevřete hlavní panel.
2. Přidejte nové zařízení nebo otevřete nastavení dříve připojeného zařízení.
3. Přejděte na _Použít adresy DNS serverů_.
4. Otevřete _Adresy běžného DNS serveru_ a připojte propojenou IP.
   ![Linked IP \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked_step4.png)

## Dynamický DNS: Proč je užitečný

Při každém připojení zařízení k síti získá novou dynamickou IP adresu. Když se zařízení odpojí, server DHCP může uvolněnou adresu IP přidělit jinému zařízení v síti. To znamená, že dynamické IP adresy se často a nepředvídatelně mění. Proto je nutné aktualizovat nastavení při každém restartu zařízení nebo při změně sítě.

Chcete-li automaticky aktualizovat propojenou IP adresu, můžete použít DNS. AdGuard DNS pravidelně kontroluje IP adresu vaší domény DDNS a propojuje ji s vaším serverem.

:::note

Dynamická služba DNS (DDNS) je služba, která automaticky aktualizuje záznamy DNS, kdykoli se změní vaše IP adresa. Převádí IP adresy sítě na snadno čitelné názvy domén. Informace, které spojují název s IP adresou, jsou uloženy v tabulce na serveru DNS. DDNS tyto záznamy aktualizuje při každé změně IP adres.

:::

Takto nebudete muset ručně aktualizovat přidruženou IP adresu při každé její změně.

## Dynamický DNS: Jak nastavit

1. Nejprve je třeba zkontrolovat, zda nastavení vašeho routeru podporuje DDNS:
   - Přejděte do _Nastavení routeru_ → _Sítě_
   - Vyhledejte sekci DDNS nebo _Dynamický DNS_
   - Přejděte na něj a ověřte, zda jsou nastavení skutečně podporována. _Jedná se pouze o příklad, jak to může vypadat. Může se lišit v závislosti na routeru_ ![DDNS supported \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dynamic_dns.png)
2. Zaregistrujte svou doménu u oblíbené služby, jako je [DynDNS](https://dyn.com/remote-access/), [NO-IP](https://www.noip.com/) nebo u jiného poskytovatele DDNS, který vám vyhovuje.
3. Zadejte doménu do nastavení routeru a synchronizujte konfigurace.
4. Přejděte do nastavení propojené IP a připojte adresu, poté přejděte na _Rozšířená nastavení_ a klikněte na _Konfigurace DDNS_.
5. Zadejte doménu, kterou jste dříve zaregistrovali, a klikněte na tlačítko _Konfigurace DDNS_.
   ![Configure DDNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dns_supported.png)

Hotovo, úspěšně jste nastavili DDNS!

## Automatizace aktualizace propojené IP pomocí skriptu

### Ve Windows

Nejjednodušší je použít Plánovač úloh:

1. Vytvořte úlohu:
   - Otevřete Plánovač úloh.
   - Vytvořte novou úlohu.
   - Nastavte spouštění na každých 5 minut.
   - Jako akci vyberte _Spustit program_.
2. Vyberte program:
   - Do pole _Program nebo Script_ zadejte \`powershell'
   - Do pole _Přidat argumenty_ zadejte:
     - `Příkaz "Invoke-WebRequest -Uri 'https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}'"`
3. Uložte úlohu.

### V macOS a Linux

V systémech MacOS a Linux je nejjednodušší použít příkaz `cron`:

1. Otevřete crontab:
   - V Terminalu spusťte `crontab -e`.
2. Přidejte úlohu:
   - Vložte následující řádek:
     `/5 * * * * curl https://linkip.adguard dns.com/linkip/{ServerID}/{UniqueKey}`
   - Tato úloha se spustí každých 5 minut
3. Uložte crontab.

:::note Důležité

- Ujistěte se, že máte nainstalovaný `curl` na macOS a Linuxu.
- Nezapomeňte zkopírovat adresu z nastavení a nahradit `ServerID` a `UniqueKey`.
- Pokud je vyžadována složitější logika nebo zpracování výsledků dotazu, zvažte použití skriptů (např. Bash, Python) ve spojení s plánovačem úloh nebo cronem.

:::
