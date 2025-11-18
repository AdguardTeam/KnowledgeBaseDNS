---
title: iOS
sidebar_position: 3
---

Um ein iOS-Gerät mit AdGuard DNS zu verbinden, fügen Sie es zunächst der _Übersicht_ hinzu:

1. In _Übersicht_ klicken Sie auf _Neues Gerät verbinden_.
2. Wählen Sie im Auswahlmenü _Gerätetyp_ iOS.
3. Benennen Sie das Gerät.
   ![Gerät verbinden \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/choose_ios.png)

## AdGuard DNS-App verwenden

Die AdGuard DNS-App ist für den grundlegenden Schutz auf DNS-Ebene konzipiert — sie blockiert Werbung, Tracker und schädliche Websites. Wenn Sie nicht den vollen Funktionsumfang von AdGuard Werbeblocker oder AdGuard VPN benötigen, ist dies möglicherweise die beste Wahl für Sie.

So richten Sie Ihr Gerät ein:

1. [Laden Sie die AdGuard DNS-App herunter](https://agrd.io/ios_dns).
2. Gehen Sie zu Ihrer AdGuard DNS Übersicht unter [adguard-dns.io/dashboard](https://adguard-dns.io/dashboard/).
3. Klicken Sie auf _Neues Gerät hinzufügen_ im Tab _Startseite_.
4. Wählen Sie Ihren Gerätetyp und geben Sie ihm einen Namen, und klicken Sie dann auf _Weiter_.
5. Erweitern Sie den Abschnitt _AdGuard-Apps verwenden_.

![AdGuard-Apps verwenden \*border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/UseAdGuardDnsAppsiOS.png)

1. Wählen Sie unter _AdGuard DNS-App verwenden_ eine dieser Einrichtungsmethoden aus:

   - Klicken Sie auf _Konfigurieren_, wenn Sie sich auf dem Gerät befinden, das Sie schützen möchten.
   - Scannen Sie den QR-Code mit dem Gerät, das Sie schützen möchten.
   - Kopieren Sie Ihre Setup-ID und fügen Sie sie direkt in die App ein.

     ![SetupID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/SetupIDiOS.png)

2. Tippen Sie auf _Weiter_ → _Verbinden_.

![Verbinden \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ConnectiOS.png)

1. Ihr Gerät ist erfolgreich mit AdGuard DNS verbunden. Sie müssen nur auf _Aktivieren_ tippen, um den Schutz zu starten.

![Aktivieren \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ProtectioniOS.png)

1. Wenn Sie ein VPN-basiertes Protokoll verwenden, müssen Sie dennoch die Erstellung eines VPN-Profils zulassen, bevor Sie vollständig geschützt sind. Gehen Sie dazu auf die Startseite der App, klicken Sie auf _Aktivieren_ und folgen Sie den Anweisungen in der App.

2. Wenn Sie lieber das native DNS verwenden möchten, gehen Sie zu _Einstellungen_ → _Allgemein_ → _VPN & Geräteverwaltung_ → _DNS_ und aktivieren Sie AdGuard DNS.

Fertig! Ihr Gerät ist erfolgreich mit AdGuard DNS verbunden.

## AdGuard Werbeblocker verwenden (kostenpflichtige Option)

Die AdGuard-App ermöglicht die Nutzung von verschlüsseltem DNS und eignet sich gut für die Einrichtung von AdGuard DNS auf Ihrem iOS-Gerät. Sie können zwischen verschiedenen Verschlüsselungsprotokollen wählen. Zusätzlich zur DNS-Filterung erhalten Sie auch einen hervorragenden Werbeblocker, der im gesamten System funktioniert.

1. Installieren Sie die [AdGuard-App](https://adguard.com/adguard-ios/overview.html) auf dem Gerät, das Sie mit AdGuard DNS verbinden möchten.
2. Öffnen Sie die AdGuard-App.
3. Wählen Sie die Registerkarte _Schutz_ im unteren Menü.
   ![Schutzsymbol \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step3.jpg)
4. Stellen Sie sicher, dass _DNS-Schutz_ aktiviert ist, und tippen Sie darauf. Wählen Sie _DNS-Server_.
   ![DNS-Schutz \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4.jpg)
   ![Benutzerdefinierter DNS-Server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4_2.jpg)
5. Blättern Sie nach unten und tippen Sie auf _Benutzerdefinierten DNS-Server hinzufügen_.
   ![DNS-Server hinzufügen \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step5.jpg)
6. Kopieren Sie eine der folgenden DNS-Adressen und fügen Sie sie in das Feld _Adresse des DNS-Servers_ in der App ein. Wenn Sie nicht sicher sind, welche Sie verwenden sollen, wählen Sie DNS-over-HTTPS.
   ![Serveradresse kopieren \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_1.png)
   ![Serveradresse einfügen \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_2.jpg)
7. Tippen Sie auf _Speichern und Auswählen_.
   ![Speichern und Auswählen \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step7.jpg)
8. Ihr neu erstellter Server muss am Ende der Liste erscheinen.
   ![Benutzerdefinierter Server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step8.jpg)

Fertig! Ihr Gerät ist erfolgreich mit AdGuard DNS verbunden.

## AdGuard VPN verwenden

Nicht alle VPN-Dienste unterstützen verschlüsseltes DNS. Unser VPN jedoch schon, daher ist AdGuard VPN die erste Wahl für Sie, wenn Sie sowohl ein VPN als auch ein privates DNS benötigen.

1. Installieren Sie die [AdGuard VPN-App](https://adguard-vpn.com/ios/overview.html) auf dem Gerät, das Sie mit AdGuard DNS verbinden möchten.
2. Öffnen Sie die AdGuard VPN-App.
3. Tippen Sie auf das Zahnradsymbol in der unteren rechten Ecke des Bildschirms.
   ![Zahnradsymbol \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step3.jpg)
4. Öffnen Sie _Allgemein_.
   ![Allgemeine Einstellungen \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step4.jpg)
5. Wählen Sie _DNS-Server_.
   ![DNS-Server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step5.png)
6. Blättern Sie nach unten zu _Benutzerdefinierten DNS-Server hinzufügen_.
   ![Server hinzufügen \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step6.png)
7. Kopieren Sie eine der folgenden DNS-Adressen und fügen Sie sie in das Textfeld _Adresse des DNS-Servers_ ein. Wenn Sie nicht sicher sind, welche Sie verwenden sollen, wählen Sie _DNS-over-HTTPS_.
   ![DoH-Server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_1.png)
   ![Benutzerdefinierter DNS-Server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_2.jpg)
8. Tippen Sie auf _Speichern_.
   ![Server speichern \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step8.jpg)
9. Ihr neu erstellter Server wird im Abschnitt _Benutzerdefinierte DNS-Server_ angezeigt.
   ![Benutzerdefinierte Server \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step9.png)

Fertig! Ihr Gerät ist erfolgreich mit AdGuard DNS verbunden.

## Ein Konfigurationsprofil verwenden

Ein iOS-Geräteprofil, von Apple auch als Konfigurationsprofil bezeichnet, ist eine zertifikatsignierte XML-Datei, die Sie manuell auf Ihrem iOS-Gerät installieren oder mithilfe einer MDM-Lösung bereitstellen können. Außerdem können Sie Privates AdGuard DNS auf Ihrem Gerät konfigurieren.

:::note Wichtig

Wenn Sie ein VPN verwenden, wird das Konfigurationsprofil ignoriert.

:::

1. Laden Sie das Profil herunter.
2. Öffnen Sie die Einstellungen.
3. Tippen Sie auf _Profil heruntergeladen_.
   ![Profil heruntergeladen \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step3.png)
4. Tippen Sie auf „Installieren“ und folgen Sie den Anweisungen.
   ![Installieren \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step4.png)

## Unverschlüsseltes DNS konfigurieren

Wenn Sie keine zusätzliche Software für die DNS-Konfiguration verwenden möchten, können Sie sich für unverschlüsseltes DNS entscheiden. Sie haben zwei Möglichkeiten: Verknüpfte IPs oder dedizierte IPs zu verwenden.

- [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)
