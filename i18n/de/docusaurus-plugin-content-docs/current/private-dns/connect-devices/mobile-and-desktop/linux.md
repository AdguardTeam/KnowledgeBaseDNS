---
title: Linux
sidebar_position: 6
---

Um ein Linux-Gerät mit AdGuard DNS zu verbinden, fügen Sie es zunächst der _Übersicht_ hinzu:

1. In _Übersicht_ klicken Sie auf _Neues Gerät verbinden_.
2. Wählen Sie im Auswahlmenü _Gerätetyp_ Linux aus.
3. Benennen Sie das Gerät.
   ![Gerät verbinden \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/choose_linux.png)

## AdGuard DNS Client verwenden

AdGuard DNS Client ist ein plattformübergreifendes Konsolenprogramm, das es Ihnen ermöglicht, verschlüsselte DNS-Protokolle zu verwenden, um auf AdGuard DNS zuzugreifen.

Mehr darüber erfahren Sie in dem [zugehörigen Artikel](/dns-client/overview/).

## AdGuard VPN CLI verwenden

Sie können Privates AdGuard DNS mithilfe AdGuard VPN CLI (Befehlszeilenschnittstelle) einrichten. Um mit AdGuard VPN CLI zu beginnen, müssen Sie das Terminal verwenden.

1. Installieren Sie AdGuard VPN CLI, indem Sie [diesen Anweisungen](https://adguard-vpn.com/kb/adguard-vpn-for-linux/installation/) folgen.
2. Öffnen Sie die [Einstellungen](https://adguard-vpn.com/kb/adguard-vpn-for-linux/settings/).
3. Um einen bestimmten DNS-Server zu konfigurieren, verwenden Sie den Befehl: `adguardvpn-cli config set-dns <server_address>`, wobei `<server_address>` die Adresse Ihres privaten Servers ist.
4. Aktivieren Sie die DNS-Einstellungen durch Eingabe von `adguardvpn-cli config set-system-dns on`.

## Manuell auf Ubuntu konfigurieren (verknüpfte IP oder dedizierte IP erforderlich)

1. Klicken Sie auf _System_ → _Einstellungen_ → _Netzwerk_.
2. Wählen Sie die Registerkarte _Wireless_, und dann das Netzwerk, mit dem Sie verbunden sind.
3. Gehen Sie zu _IPv4_.
4. Setzen Sie _Automatisch (DHCP)_ auf _Manuell_.
5. Ändern Sie die aufgeführten DNS-Adressen in die folgenden Adressen:
    - `94.140.14.49`
    - `94.140.14.59`
6. Klicken Sie auf _Übernehmen_.
7. Gehen Sie zu _IPv6_.
8. Setzen Sie _Automatisch_ auf _Manuell_.
9. Ändern Sie die aufgeführten DNS-Adressen in die folgenden Adressen:
    - `2a10:50c0:0:0:0:0:ded:ff`
    - `2a10:50c0:0:0:0:0:dad:ff`
10. Klicken Sie auf _Übernehmen_.
11. Verknüpfen Sie Ihre IP-Adresse (oder Ihre dedizierte IP, falls Sie ein Team-Abonnement haben):
     - [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
     - [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)

## Manuell auf Debian konfigurieren (verknüpfte IP oder dedizierte IP erforderlich)

1. Öffnen Sie das Terminal.
2. Geben Sie in die Befehlszeile ein: `su`.
3. Geben Sie Ihr `admin`-Passwort ein.
4. Geben Sie in die Befehlszeile ein: `nano /etc/resolv.conf`.
5. Ändern Sie die aufgelisteten DNS-Adressen in folgende:
    - IPv4: `94.140.14.49 und 94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff und 2a10:50c0:0:0:0:0:dad:ff`
6. Drücken Sie _Strg+O_, um das Dokument zu speichern.
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

## EDNS (Extended DNS) verwenden

EDNS erweitert das DNS-Protokoll, indem es größere UDP-Pakete zur Übertragung zusätzlicher Daten ermöglicht. In AdGuard DNS ist es möglich, die DeviceID im reinen DNS mit einem zusätzlichen Parameter zu übergeben.

DeviceID, eine achtstellige hexadezimale Kennung (z. B. „1a2b3c4d“), hilft, DNS-Anfragen mit bestimmten Geräten zu verknüpfen. Bei verschlüsseltem DNS ist diese ID Teil der Domain (z. B. „1a2b3c4d.d.adguard-dns.com“). Bei unverschlüsseltem DNS ist EDNS erforderlich, um diese Kennung zu übertragen.

AdGuard DNS verwendet EDNS, um die DeviceID abzurufen, indem nach der Optionsnummer `65074` gesucht wird. Wenn eine solche Option vorhanden ist, wird die DeviceID von dort ausgelesen. Dazu können Sie den Befehl `dig` im Terminal verwenden:

```sh
dig @94.140.14.49 'www.example.com' A IN +ednsopt=65074:3031323334353637
```

Hier ist `65074` die Options-ID und „3031323334353637“ ihr Wert im Hex-Format (DeviceID: `01234567`).

Fertig! Die DeviceID sollte angezeigt werden.

:::note

Der Befehl `dig` ist nur ein Beispiel, Sie können jede DNS-Software verwenden, die EDNS-Optionen hinzufügen kann, um diese Aktion durchzuführen.

:::

## Einfaches DNS verwenden

Wenn Sie keine zusätzliche Software für die DNS-Konfiguration verwenden möchten, können Sie sich für unverschlüsseltes DNS entscheiden. Sie haben zwei Optionen: Verknüpfte IPs oder dedizierte IPs verwenden:

 - [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
 - [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)
