---
title: Sådan tømmes DNS-cache
sidebar_position: 1
---

:::info

Her forklares, hvordan DNS-cachen kan tømmes for at løse offentlige DNS-problemer. AdGuard Ad Blocker kan bruges til opsætning af DNS-servere (også krypterede)

Hurtig-link: [Download AdGuard Ad Blocker](https://adguard.com/download.html?auto=true&utm_source=kb_dns)

:::

## Hvad er DNS-cache?

DNS-cache gemmer IP-adresserne på besøgte websteder på den lokale enhed, så de indlæses hurtigere næste gang. I stedet for at udføre et langt DNS-opslag, besvarer systemet forespørgslerne med DNS-poster fra den midlertidige DNS-cache.

DNS-cachen indeholder såkaldte [ressourceposter (RR'er)](https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records), som er:

- **Ressourcedata (eller rdata)**;
- **Posttype**;
- **Postnavn**;
- **TTL (levetid)**;
- **Klasse**;
- **Ressourcedatalængde**.

## Hvornår man muligvis skal rydde cachen

**DNS-udbyderen er skiftet til AdGuard DNS.** Ved skift af DNS kan det tage lidt tid at se resultatet grundet cachen.

**Der opleves jævnligt 404-fejl.** Webstedet er f.eks. overført til en anden server, og dets IP-adresse er ændret. For at få browseren til at åbne webstedet fra den nye IP-adresse, skal den cachelagrede IP fra DNS-cachen fjernes.

**Fortroligheden ønskes forbedret.**

## Sådan renses DNS-cache på forskellige OS'er

### iOS

Der er forskellige måder at rydde DNS-cachen på iPad eller iPhone.

Den enkleste måde er at aktivere Flytilstand (f.eks. via Kontrolcenter eller appen Indstillinger) og deaktivere den igen. Dette tømmer DNS-cachen.

En anden mulighed er at nulstille enhedens netværksindstillingerne via Indstillinger-appen. Åbn *Generelt*, rul ned til *Nulstil* og tryk på *Nulstil netværksindstillinger*.

:::note

By doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually.

:::

### Android

The easiest way to clear your DNS cache on your Android device is to turn the Airplane mode on and off. You can enable/disable the Airplane Mode in the Quick Settings pane.

A hard reboot can also help flush the DNS cache for your device. In order to do that, press and hold the power button for at least 20 seconds. It will (usually) force your device to reboot manually and the DNS cache will be cleared.

En anden mulighed er at nulstille enhedens netværksindstillingerne via Indstillinger-appen. Open *Settings → System → Advanced → Reset options → Reset network settings* and tap *Reset Settings* to confirm.

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

## Sådan tømmes DNS-cache i Chrome

This may be useful if you do not want restart a browser every time during work with the private AdGuard DNS or AdGuard Home. Settings 1-2 only need to be changed once.

1. Slå **sikker DNS** fra i Chrome-indstillinger

    ```bash
    chrome://settings/security
    ```

1. Slå **Async DNS-resolver** fra

    ```bash
    chrome://flags/#enable-async-dns
    ```

1. Tryk på begge knapper her

    ```bash
    chrome://net-internals/#sockets
    ```

1. Tryk på **Ryd værtscache**

    ```bash
    chrome://net-internals/#dns
    ```
