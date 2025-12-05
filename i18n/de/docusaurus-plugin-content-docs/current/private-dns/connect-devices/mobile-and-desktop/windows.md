---
title: Windows
sidebar_position: 5
---

Um ein Windows-Gerät mit AdGuard DNS zu verbinden, fügen Sie es zunächst zu _Übersicht_ hinzu:

1. In _Übersicht_ klicken Sie auf _Neues Gerät verbinden_.
2. Wählen Sie im Auswahlmenü _Gerätetyp_ Windows aus.
3. Benennen Sie das Gerät.
   ![Gerät verbinden \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/choose_windows.png)

Sie können es über die Anwendungen [AdGuard](#use-adguard-ad-blocker-paid-option) oder [AdGuard VPN](#use-adguard-vpn), in den [Windows-Einstellungen](#configure-via-windows-settings) oder über den [AdGuard DNS Client](#use-adguard-dns-client) einrichten.

## AdGuard Werbeblocker verwenden (kostenpflichtige Option)

Die AdGuard-App ermöglicht das Verwenden von verschlüsseltem DNS, was sie ideal für die Einstellungen von AdGuard DNS auf Ihrem Windows-Gerät macht. Sie können zwischen verschiedenen Verschlüsselungsprotokollen wählen. Zusätzlich zur DNS-Filterung erhalten Sie auch einen hervorragenden Werbeblocker, der im gesamten System funktioniert.

1. [Installieren Sie die App](https://adguard.com/adguard-windows/overview.html) auf dem Gerät, das Sie mit AdGuard DNS verbinden möchten.
2. Öffnen Sie die App.
3. Klicken Sie oben auf der Startseite der App auf _Einstellungen_.
   ![Einstellungen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step3.png)
4. Wählen Sie _DNS-Schutz_ aus dem Menü auf der linken Seite.
   ![DNS-Schutz \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step4.png)
5. Klicken Sie auf Ihren aktuell ausgewählten DNS-Server.
   ![DNS-Server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step5.png)
6. Scrollen Sie nach unten und klicken Sie auf _Benutzerdefinierten DNS-Server hinzufügen_.
   ![Benutzerdefinierten DNS-Server hinzufügen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step6.png)
7. Fügen Sie in das Feld DNS-Upstreams eine der folgenden Adressen ein. Wenn Sie nicht sicher sind, welche Sie verwenden sollen, wählen Sie DNS-over-HTTPS.
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
4. Scrollen Sie nach unten und wählen Sie _DNS-Server_.
   ![DNS-Server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step5.png)
5. Klicken Sie auf _Eigenen DNS-Server hinzufügen_.
   ![Eigenen DNS-Server hinzufügen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step6.png)
6. Fügen Sie im Feld _Adresse des Servers_ eine der folgenden Adressen ein. Wenn Sie nicht sicher sind, welche Sie verwenden sollen, wählen Sie DNS-over-HTTPS.
   ![DoH-Server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_1.png)
   ![Server erstellen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_2.png)
7. Klicken Sie auf _Speichern und auswählen_.
   ![Speichern und auswählen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step8.png)

Fertig! Ihr Gerät ist erfolgreich mit AdGuard DNS verbunden.

## Über die Windows-Einstellungen konfigurieren

:::note

Nur unter Windows 11 verfügbar.

:::

1. Geben Sie in der _Suchleiste_ auf der Taskleiste **Ethernet-Einstellungen** oder **WLAN-Einstellungen** ein, je nach Verbindungstyp.
   Klicken Sie auf das Netzwerk (WLAN-ID oder Ethernet), welches Sie konfigurieren möchten.
   ![Suchen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_step_1.png)
2. Blättern Sie zu _DNS-Serverzuweisung_ und klicken Sie auf _Bearbeiten_.
   ![DNS-Serverzuweisung \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_step_2.png)
3. Ändern Sie die DNS-Einstellungen auf _Manuell_.
4. Schalten Sie den IPv4-Schalter auf _Ein_.
5. Geben Sie die folgenden DNS-Serveradressen ein:
   - Bevorzugter DNS: `94.140.14.49`
   - Alternativer DNS: `94.140.14.59`
6. Stellen Sie _DNS über HTTPS_ auf _Ein (manuelle Vorlage)_ und geben Sie Ihre persönliche DNS-Adresse ein. Sie finden sie in der Übersicht unter _Servereinstellungen_ → _Geräte_ → _Geräteeinstellungen_ → DNS über HTTPS.
7. Klicken Sie auf _Speichern_. Das war's - Ihr Gerät ist jetzt mit AdGuard DNS verbunden!
   ![DNS-Einstellungen speichern \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_settings_done.png)

## AdGuard DNS Client verwenden

AdGuard DNS Client ist ein vielseitiges, plattformübergreifendes Konsolentool, das Ihnen die Verbindung zu AdGuard DNS über verschlüsselte DNS-Protokolle ermöglicht.

Weitere Details finden Sie in einem [anderen Artikel](/dns-client/overview/).

## Unverschlüsseltes DNS konfigurieren

Wenn Sie keine zusätzliche Software für die DNS-Konfiguration verwenden möchten, können Sie sich für unverschlüsseltes DNS entscheiden. Sie haben zwei Optionen: Verknüpfte IPs oder dedizierte IPs verwenden.

- [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)
