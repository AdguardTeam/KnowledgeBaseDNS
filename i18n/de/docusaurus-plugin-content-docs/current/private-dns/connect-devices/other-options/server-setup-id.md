---
title: Server-Setup-ID
sidebar_position: 6
---

:::info

Dieser Artikel beschreibt eine Funktion, die in der App für Mobilgeräte verfügbar ist. Um es selbst auszuprobieren, laden Sie die AdGuard DNS App für [Android](https://agrd.io/android_dns) oder [iOS](https://agrd.io/ios_dns) herunter.

:::

## Was ist eine Server-Setup-ID?

Wenn Sie ein Gerät mit einem bestimmten Server verbinden möchten und nicht jedes Gerät manuell in der Übersicht erstellen möchten, können Sie die **Server-Setup-ID** verwenden. Nehmen Sie einfach die ID und verwenden Sie sie, um sich über die AdGuard DNS-App zu verbinden. So wird das „Gerät“ automatisch bei der Verbindung erstellt.

## Verbindung mit der Server-Setup-ID

:::note

Wenn Sie AdGuard auf mehreren verwalteten Geräten konfigurieren, sollten Sie die Verwendung der verwalteten App-Konfiguration in Betracht ziehen, um jeder App automatisch die Server-Setup-ID bereitzustellen. [Mehr erfahren](/private-dns/connect-devices/other-options/mdm-config.md).

:::

1. Öffnen Sie Ihre \*Übersicht \*→ [_Server_](https://adguard-dns.io/dashboard/servers).
2. Wählen Sie den gewünschten Server aus.
3. Scrollen Sie nach unten und klicken Sie auf _Setup-ID_.
   ![Setup-ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/server_settings_setup_ID.png)
4. Kopieren Sie die **Setup-ID**.
   ![Server-Setup-ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/settings_setup_ID.png)
5. Öffnen Sie die App und fügen Sie die **Setup-ID** ein.
   ![Setup-ID einfügen \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/SetupIDMobile.png)
6. Wählen Sie einen Gerätenamen.
7. Klicken Sie auf **Verbinden**.
   ![Verbinden \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ConnectMobile.png)

Fertig! Sie sind jetzt verbunden und das Gerät wird automatisch in der Übersicht erstellt.

## Zurücksetzen der Server-Setup-ID

Wenn Sie alle Geräte, die eine bestimmte Setup-ID verwenden, trennen möchten, können Sie die Setup-ID zurücksetzen. Gehen Sie dazu wie folgt vor:

1. Öffnen Sie Ihre _Übersicht_ → [_Server_](https://adguard-dns.io/dashboard/servers) und wählen Sie den gewünschten Server aus.
2. Scrollen Sie nach unten und klicken Sie auf _Setup-ID_.
3. Klicken Sie auf _Setup-ID zurücksetzen_.

Nach dem Zurücksetzen ändert sich die Setup-ID, und alle Geräte, die die alte ID verwendet haben, werden vom Server getrennt.
