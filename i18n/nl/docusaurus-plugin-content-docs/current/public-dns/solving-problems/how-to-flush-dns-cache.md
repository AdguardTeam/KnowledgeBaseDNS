---
title: Hoe de DNS-cache leeg te maken
sidebar_position: 1
---

:::info

Hier leggen we uit hoe je de DNS-cache kunt leegmaken om problemen met publieke DNS op te lossen. Je kunt AdGuard Advertentieblokker gebruiken om DNS-servers in te stellen, inclusief versleutelde servers

Snelle link: [AdGuard Advertentieblokker downloaden](https://agrd.io/download-kb-adblock)

:::

## Wat is DNS-cache?

DNS-cache slaat de IP-adressen van bezochte sites op de lokale computer op, zodat ze de volgende keer sneller worden geladen. In plaats van een langdurende DNS-zoekopdracht uit te voeren, gebruikt het systeem de DNS-records uit de tijdelijke DNS-cache.

De DNS-cache bevat zogenaamde [resource records (RR's)](https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records), namelijk:

- **Resource data (or rdata)**;
- **Record type**;
- **Record name**;
- **TTL (time to live)**;
- **Class**;
- **Resource data length**.

## Wanneer u mogelijk de cache moet wissen

**You’ve changed your DNS provider to AdGuard DNS.** If the user has changed their DNS, it may take some time to see the result because of the cache.

**Je krijgt regelmatig een 404-foutmelding.** De website is bijvoorbeeld overgezet naar een andere server en het IP-adres is veranderd. Om ervoor te zorgen dat de browser de website opent vanaf het nieuwe IP-adres, moet je het in de cache opgeslagen IP-adres uit de DNS-cache verwijderen.

**Je wilt je privacy verbeteren.**

## Hoe DNS-cache op verschillende besturingssystemen leeg te maken

### iOS

Er zijn verschillende manieren om de DNS-cache op je iPad of iPhone te wissen.

De eenvoudigste manier is om de Vliegtuigmodus te activeren (bijvoorbeeld in het Controlecentrum of in de app-instellingen) en deze weer te deactiveren. De DNS-cache wordt geleegd.

Een andere optie is om de netwerkinstellingen van jouw apparaat opnieuw in te stellen in de app Instellingen. Open *Algemeen*, scrol omlaag, zoek *Herstellen* en tik op *Netwerkinstellingen herstellen*.

:::opmerking

Door dat te doen, verlies je verbindingen met Wi-Fi-routers en andere specifieke netwerkinstellingen, inclusief aanpassingen van DNS-servers. Je moet ze handmatig opnieuw instellen.

:::

### Android

There are different ways to clear the DNS cache on your Android device. The exact steps may vary depending on the version of Android you’re using and the device manufacturer.

#### Clear DNS cache via Chrome

Google Chrome, often the default browser on Android, has its own DNS cache. To flush this cache in the Chrome browser, follow the instructions below:

1. Launch Chrome on your Android device
1. Type `chrome://net-internals/#DNS` in the address bar
1. On the DNS lookup page, choose DNS from the menu on the left
1. In the panel on the right, tap the *Clear Host Cache* button to clear the DNS cache on your device

#### Modify the Wi-Fi network to Static

To clear your Android device’s DNS cache by changing Wi-Fi network settings to Static, follow these steps:

1. Go to *Settings → Wi-Fi* and choose the network you’re connected to
1. Look for IP settings and select *Static*
1. Fill in the required fields. You can get the necessary information from your network administrator or from your router’s configuration page
1. After entering the required information, reconnect to your Wi-Fi network. This action will force your device to update its IP and DNS settings and clear the DNS cache

#### Reset network settings

Een andere optie is om de netwerkinstellingen van jouw apparaat opnieuw in te stellen in de app Instellingen. Open *Settings → System → Advanced → Reset options → Reset network settings* and tap *Reset Settings* to confirm.

:::opmerking

Door dat te doen, verlies je verbindingen met Wi-Fi-routers en andere specifieke netwerkinstellingen, inclusief aanpassingen van DNS-servers. Je moet ze handmatig opnieuw instellen.

:::

### macOS

To clear the DNS cache on macOS, open the Terminal (you can find it by using the Spotlight search — to do that, press Command+Space and type *Terminal*) and enter the following command:

`sudo killall -HUP mDNSResponder`

On macOS Big Sur 11.2.0 and macOS Monterey 12.0.0, you may also use this command:

`sudo dscacheutil -flushcache`

After that, enter your administrator password to complete the process.

### Windows

To flush DNS cache on your Windows device, do the following:

Open the Command Prompt as an administrator. You can find it in the Start Menu by typing *command prompt* or *cmd*. Typ vervolgens `ipconfig /flushdns` en druk op Enter.

You will see the line *Successfully flushed the DNS Resolver Cache*. Voltooid!

### Linux

Linux beschikt niet over DNS-caching op OS-niveau tenzij een caching-service zoals systemd-resolved, DNSMasq, BIND, of nscd is geïnstalleerd en actief is. The process of clearing the DNS cache depends on the Linux distribution and the caching service used.

For each distribution you need to start a terminal window. Press Ctrl+Alt+T on your keyboard and use the corresponding command to clear the DNS cache for the service your Linux system is running.

To find out which DNS resolver you’re using, command `sudo lsof -i :53 -S`.

#### systemd-resolved

To clear the **systemd-resolved** DNS cache, type:

`sudo systemd-resolve --flush-caches`

On success, the command doesn’t return any message.

#### DNSMasq

To clear the **DNSMasq** cache, you need to restart it:

`sudo service dnsmasq restart`

#### NSCD

Om de **NSCD** cache te wissen, moet je ook de service herstarten:

`sudo service nscd restart`

#### BIND

Om de **BIND** DNS-cache leeg te maken, voer je de opdracht uit:

`rndc flush`

Vervolgens moet je BIND opnieuw laden:

`rndc reload`

Je krijgt de melding dat de server succesvol opnieuw is geladen.

## Hoe DNS-cache in Chrome leeg te maken

Dit kan handig zijn als je tijdens het werken met de privé AdGuard DNS of AdGuard Home niet elke keer een browser opnieuw wilt opstarten. Instellingen 1–2 hoeven slechts één keer te worden gewijzigd.

1. **Beveiligde DNS** uitschakelen in Chrome-instellingen

    ```bash
    chrome://settings/security
    ```

1. **Asynchrone DNS-resolver** uitschakelen

    ```bash
    chrome://flags/#enable-async-dns
    ```

1. Druk hier op beide knoppen

    ```bash
    chrome://net-internals/#sockets
    ```

1. Druk op **Hostcache wissen**

    ```bash
    chrome://net-internals/#dns
    ```
