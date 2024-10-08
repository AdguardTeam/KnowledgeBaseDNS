---
title: Linux
sidebar_position: 6
---

To connect a Linux device to AdGuard DNS, first add it to _Dashboard_:

1. Go to _Dashboard_ and click _Connect new device_.
2. In the drop-down menu _Device type_, select Linux.
3. Benennen Sie das Gerät.
   ![Gerät verbinden \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/choose_linux.png)

## AdGuard DNS Client verwenden

AdGuard DNS Client ist ein plattformübergreifendes Konsolenprogramm, das es Ihnen ermöglicht, verschlüsselte DNS-Protokolle zu verwenden, um auf AdGuard DNS zuzugreifen.

You can learn more about this in the [related article](/dns-client/overview/).

## AdGuard VPN CLI verwenden

You can set up Private AdGuard DNS using the AdGuard VPN CLI (command-line interface). To get started with AdGuard VPN CLI, you’ll need to use Terminal.

1. Install AdGuard VPN CLI by following [these instructions](https://adguard-vpn.com/kb/adguard-vpn-for-linux/installation/).
2. Access [settings](https://adguard-vpn.com/kb/adguard-vpn-for-linux/settings/).
3. To set a specific DNS server, use the command: `adguardvpn-cli config set-dns <server_address>`, where `<server_address>` is your private server’s address.
4. Activate the DNS settings by entering `adguardvpn-cli config set-system-dns on`.

## Configure manually on Ubuntu (linked IP or dedicated IP required)

1. Click _System_ → _Preferences_ → _Network Connections_.
2. Select the _Wireless_ tab, then choose the network you’re connected to.
3. Click _Edit_ → _IPv4_.
4. Change the listed DNS addresses to the following addresses:
   - `94.140.14.49`
   - `94.140.14.59`
5. Turn off _Auto mode_.
6. Click _Apply_.
7. Gehen Sie zu _IPv6_.
8. Change the listed DNS addresses to the following addresses:
   - `2a10:50c0:0:0:0:0:ded:ff`
   - `2a10:50c0:0:0:0:0:dad:ff`
9. Turn off _Auto mode_.
10. Click _Apply_.
11. Verknüpfen Sie Ihre IP-Adresse (oder Ihre dedizierte IP, falls Sie ein Team-Abonnement haben):
    - [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)

## Configure manually on Debian (linked IP or dedicated IP required)

1. Öffnen Sie das Terminal.
2. Geben Sie in die Befehlszeile ein: `su`.
3. Enter your `admin` password.
4. In the command line, type: `nano /etc/resolv.conf`.
5. Change the listed DNS addresses to the following:
   - IPv4: `94.140.14.49 und 94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff und 2a10:50c0:0:0:0:0:dad:ff`
6. Press _Ctrl + O_ to save the document.
7. Drücken Sie _Eingabe_.
8. Drücken Sie _Strg+X_, um das Dokument zu speichern.
9. Geben Sie in die Befehlszeile ein: `/etc/init.d/networking restart`.
10. Drücken Sie _Eingabe_.
11. Schließen Sie das Terminal.
12. Verknüpfen Sie Ihre IP-Adresse (oder Ihre dedizierte IP, falls Sie ein Team-Abonnement haben):
    - [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)

## dnsmasq verwenden

1. Installieren Sie dnsmasq mit den folgenden Befehlen:

   `sudo apt updatesudo`

   `apt install`

   `dnsmasqsudo nano /etc/dnsmasq.conf`

2. Verwenden Sie die folgenden Befehle in dnsmasq.conf:

   `no-resolv`

   `bogus-priv`

   `strict-order`

   `server=94.140.14.49`

   `server=94.140.14.59`

   `port=5353`

   `add-cpe-id={Your_Device_ID}`

3. Starten Sie den dnsmasq-Dienst neu:

   `sudo service dnsmasq restart`

Fertig! Ihr Gerät ist erfolgreich mit AdGuard DNS verbunden.

:::note Wichtig

Wenn Sie eine Benachrichtigung sehen, dass Sie nicht mit AdGuard DNS verbunden sind, ist höchstwahrscheinlich der Port, auf dem dnsmasq läuft, durch andere Dienste belegt. Folgen Sie [diese Anweisungen](https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#bindinuse), um das Problem zu lösen.

:::

## Use plain DNS

Wenn Sie es vorziehen, keine zusätzliche Software für die DNS-Konfiguration zu verwenden, können Sie unverschlüsselte DNS verwenden. Sie haben zwei Möglichkeiten: Verknüpfte IPs oder dedizierte IPs zu verwenden:

- [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)
