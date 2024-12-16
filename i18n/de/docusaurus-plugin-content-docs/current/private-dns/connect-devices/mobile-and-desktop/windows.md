---
title: Windows
sidebar_position: 5
---

Um ein iOS-Gerät mit AdGuard DNS zu verbinden, fügen Sie es zunächst der _Übersicht_ hinzu:

1. In _Übersicht_ klicken Sie auf _Neues Gerät verbinden_.
2. Wählen Sie im Auswahlmenü _Gerätetyp_ Windows aus.
3. Benennen Sie das Gerät.
   ![Gerät verbinden \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/choose_windows.png)

## AdGuard Werbeblocker verwenden (kostenpflichtige Option)

Die AdGuard-App ermöglicht die Nutzung von verschlüsseltem DNS und eignet sich gut für die Einstellungen von AdGuard DNS auf Ihrem Windows-Gerät. Sie können zwischen verschiedenen Verschlüsselungsprotokollen wählen. Zusätzlich zur DNS-Filterung erhalten Sie auch einen hervorragenden Werbeblocker, der im gesamten System funktioniert.

1. [Installieren Sie die App](https://adguard.com/adguard-windows/overview.html) auf dem Gerät, das Sie mit AdGuard DNS verbinden möchten.
2. Öffnen Sie die App.
3. Klicken Sie oben auf der Startseite der App auf _Einstellungen_.
   ![Einstellungen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step3.png)
4. Wählen Sie _DNS-Schutz_ aus dem Menü auf der linken Seite.
   ![DNS-Schutz \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step4.png)
5. Klicken Sie auf Ihren aktuell ausgewählten DNS-Server.
   ![DNS-Server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step5.png)
6. Blättern Sie nach unten und klicken Sie auf _Benutzerdefinierten DNS-Server hinzufügen_.
   ![Benutzerdefinierten DNS-Server hinzufügen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step6.png)
7. Geben Sie im Feld **DNS-Upstreams** eine der folgenden Adressen ein. Wenn Sie nicht sicher sind, welche Sie verwenden sollen, wählen Sie DNS-over-HTTPS.
   ![DoH-Server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_1.png)
   ![Server erstellen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_2.png)
8. Klicken Sie auf _Speichern und auswählen_.
   ![Speichern und auswählen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step8.png)
9. Der hinzugefügte DNS-Server wird unten in der Liste der _Benutzerdefinierten DNS-Server_ angezeigt.
   ![Benutzer-DNS-Server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step9.png)

Fertig! Ihr Gerät ist erfolgreich mit AdGuard DNS verbunden.

## AdGuard VPN verwenden

Nicht alle VPN-Dienste unterstützen verschlüsseltes DNS. Unser VPN jedoch schon, daher ist AdGuard VPN die erste Wahl für Sie, wenn Sie sowohl ein VPN als auch ein privates DNS benötigen.

1. Installieren Sie AdGuard VPN.
2. Öffnen Sie die App und klicken Sie auf _Einstellungen_.
3. Wählen Sie _App-Einstellungen_.
   ![App-Einstellungen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step4.png)
4. Blättern Sie nach unten und wählen Sie _DNS-Server_.
   ![DNS-Server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step5.png)
5. Klicken Sie auf _Eigenen DNS-Server hinzufügen_.
   ![Eigenen DNS-Server hinzufügen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step6.png)
6. Fügen Sie im Feld _Adresse des Servers_ eine der folgenden Adressen ein. Wenn Sie nicht sicher sind, welche Sie verwenden sollen, wählen Sie DNS-over-HTTPS.
   ![DoH-Server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_1.png)
   ![Server erstellen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_2.png)
7. Klicken Sie auf _Speichern und auswählen_.
   ![Speichern und auswählen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step8.png)

Fertig! Ihr Gerät ist erfolgreich mit AdGuard DNS verbunden.

## AdGuard DNS Client verwenden

AdGuard DNS Client ist ein vielseitiges, plattformübergreifendes Konsolentool, das Ihnen die Verbindung zu AdGuard DNS über verschlüsselte DNS-Protokolle ermöglicht.

Weitere Details finden Sie in einem [anderen Artikel](/dns-client/overview/).

## Unverschlüsseltes DNS konfigurieren

Wenn Sie keine zusätzliche Software für die DNS-Konfiguration verwenden möchten, können Sie sich für unverschlüsseltes DNS entscheiden. Sie haben zwei Optionen: Verknüpfte IPs oder dedizierte IPs verwenden.

- [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)
