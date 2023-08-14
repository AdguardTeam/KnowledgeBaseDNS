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

- **Zdrojová data (nebo rdata)**;
- **Typ záznamu**;
- **Název záznamu**;
- **TTL (životnost)**;
- **Třída**;
- **Délka zdrojových dat**.

## Kdy může být nutné vyprázdnit mezipaměť

**Změnili jste poskytovatele DNS na AdGuard DNS.** Pokud uživatel změnil svůj DNS, může kvůli mezipaměti chvíli trvat, než se výsledek zobrazí.

**Pravidelně se vám zobrazuje chyba 404.** Webové stránky byly např. přeneseny na jiný server a změnila se jejich IP adresa. Aby prohlížeč otevřel webovou stránku z nové IP adresy, je třeba odstranit IP adresu z mezipaměti DNS.

**Chcete vylepšit své soukromí.**

## Jak vyprázdnit mezipaměť DNS v různých OS

### iOS

Vyprázdnění mezipaměti DNS v iPadu nebo iPhonu lze provést různými způsoby.

Nejjednodušší je aktivovat režim Letadlo (například v Ovládacím centru nebo v aplikaci Nastavení) a opět jej deaktivovat. Mezipaměť DNS bude vyprázdněna.

Další možností je obnovit síťové nastavení zařízení v Nastavení telefonu. Otevřete *Obecné*, sjeďte dolů, vyhledejte *Resetovat* a klepněte na *Resetovat nastavení sítě*.

:::note

By doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually.

:::

### Android

The easiest way to clear your DNS cache on your Android device is to turn the Airplane mode on and off. You can enable/disable the Airplane Mode in the Quick Settings pane.

A hard reboot can also help flush the DNS cache for your device. In order to do that, press and hold the power button for at least 20 seconds. It will (usually) force your device to reboot manually and the DNS cache will be cleared.

Další možností je obnovit síťové nastavení zařízení v Nastavení telefonu. Open *Settings → System → Advanced → Reset options → Reset network settings* and tap *Reset Settings* to confirm.

:::note

By doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually.

:::

### macOS

To clear the DNS cache on macOS, open the Terminal (you can find it by using the Spotlight search — to do that, press Command+Space and type *Terminal*) and enter the following command:

`sudo killall -HUP mDNSResponder`

On macOS Big Sur 11.2.0 and macOS Monterey 12.0.0, you may also use this command:

`sudo dscacheutil -flushcache`

After that, enter your administrator password to complete the process.

### Windows

To flush DNS cache on your Windows device, do the following:

Open the Command Prompt as an administrator. You can find it in the Start Menu by typing *command prompt* or *cmd*. Then type `ipconfig/flushdns` and press Enter.

You will see the line *Successfully flushed the DNS Resolver Cache*. Done!

### Linux

Linux does not have OS-level DNS caching unless a caching service such as systemd-resolved, DNSMasq, BIND or Nscd is installed and running. The process of clearing the DNS cache depends on the Linux distribution and the caching service used.

For each distribution you need to start a terminal window. Press Ctrl+Alt+T on your keyboard and use the corresponding command to clear the DNS cache for the service your Linux system is running.

To find out which DNS resolver you're using, command `sudo lsof -i :53 -S`.

#### systemd-resolved

To clear the **systemd-resolved** DNS cache, type:

`sudo systemd-resolve --flush-caches`

On success, the command doesn’t return any message.

#### DNSMasq

To clear the **DNSMasq** cache, you need to restart it:

`sudo service dnsmasq restart`

#### NSCD

To clear the **NSCD** cache, you also need to restart the service:

`sudo service nscd restart`

#### BIND

To flush the **BIND** DNS cache, run the command:

`rndc flush`

Then you will need to reload BIND:

`rndc reload`

You will get the message that the server has been successfully reloaded.

## Jak vyprázdnit mezipaměť DNS v Chrome

This may be useful if you do not want restart a browser every time during work with the private AdGuard DNS or AdGuard Home. Settings 1-2 only need to be changed once.

1. Deaktivujte **zabezpečený DNS** v nastavení Chrome

    ```bash
    chrome://settings/security
    ```

1. Deaktivujte **DNS řešitel Async**

    ```bash
    chrome://flags/#enable-async-dns
    ```

1. Zde stiskněte obě tlačítka

    ```bash
    chrome://net-internals/#sockets
    ```

1. Stiskněte **Vymazat mezipaměť hostitele**

    ```bash
    chrome://net-internals/#dns
    ```
