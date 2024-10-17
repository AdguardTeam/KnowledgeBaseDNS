---
title: macOS
sidebar_position: 4
---

Um ein macOS-Gerät mit AdGuard DNS zu verbinden, fügen Sie es zunächst der _Übersicht_ hinzu:

1. In _Übersicht_ klicken Sie auf _Neues Gerät verbinden_.
2. Wählen Sie im Auswahlmenü _Gerätetyp_ macOS aus.
3. Benennen Sie das Gerät.
   ![Gerät verbinden \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/choose_mac.png)

## AdGuard Werbeblocker verwenden (kostenpflichtige Option)

Die AdGuard-App ermöglicht die Nutzung von verschlüsseltem DNS und eignet sich gut für die Einrichtung von AdGuard DNS auf Ihrem macOS-Gerät. Sie können zwischen verschiedenen Verschlüsselungsprotokollen wählen. Zusätzlich zur DNS-Filterung erhalten Sie auch einen hervorragenden Werbeblocker, der im gesamten System funktioniert.

1. [Installieren Sie die App](https://adguard.com/adguard-mac/overview.html) auf dem Gerät, das Sie mit AdGuard DNS verbinden möchten.
2. Öffnen Sie die App.
3. Klicken Sie auf das Symbol in der oberen rechten Ecke.
   ![Schutzsymbol \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step3.png)
4. Wählen Sie _Einstellungen..._.
   ![Einstellungen \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step4.png)
5. Klicken Sie auf den _DNS_-Tab in der oberen Symbolreihe.
   ![DNS-Registerkarte \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step5.png)
6. Aktivieren Sie den DNS-Schutz, indem Sie das Kästchen oben anklicken.
   ![DNS-Schutz \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step6.png)
7. Klicken Sie auf _+_ in der unteren linken Ecke.
   ![+ Klicken \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step7.png)
8. Copy one of the following DNS addresses and paste it into the _DNS servers_ field in the app. Wenn Sie nicht sicher sind, welche Sie verwenden sollen, wählen Sie _DNS-over-HTTPS_.
   ![DNS-over-HTTPS-Server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_1.png)
   ![Benutzerdefinierter DNS-Server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_2.png)
9. Klicken Sie auf _Speichern und Auswählen_.
   ![Speichern und Auswählen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step9.png)
10. Your newly created server should appear at the bottom of the list.
    ![Anbieter \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step10.png)

Fertig! Ihr Gerät ist erfolgreich mit AdGuard DNS verbunden.

## AdGuard VPN verwenden

Nicht alle VPN-Dienste unterstützen verschlüsseltes DNS. Unser VPN jedoch schon, daher ist AdGuard VPN die erste Wahl für Sie, wenn Sie sowohl ein VPN als auch ein privates DNS benötigen.

1. Installieren Sie die [AdGuard VPN-App](https://adguard-vpn.com/mac/overview.html) auf dem Gerät, das Sie mit AdGuard DNS verbinden möchten.
2. Öffnen Sie die AdGuard VPN-App.
3. Open _Settings_ → _App settings_ → _DNS servers_ → _Add Custom Server_.
   ![Add custom server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step3.png)
4. Copy one of the following DNS addresses and paste it into the _DNS server addresses_ text field. Wenn Sie nicht sicher sind, welche Sie verwenden sollen, wählen Sie DNS-over-HTTPS.
   ![DNS-Server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step4.png)
5. Klicken Sie auf _Speichern und auswählen_.
6. Der hinzugefügte DNS-Server wird unten in der Liste der _Benutzerdefinierten DNS-Server_ angezeigt.
   ![Custom DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step6.png)

Fertig! Ihr Gerät ist erfolgreich mit AdGuard DNS verbunden.

## Ein Konfigurationsprofil verwenden

Ein macOS-Geräteprofil, auch als "Konfigurationsprofil" von Apple bezeichnet, ist eine für den Zertifikateinsatz signierte XML-Datei, die Sie manuell auf Ihrem Gerät installieren oder über eine MDM-Lösung bereitstellen können. It also allows you to configure Private AdGuard DNS on your device.

:::note Wichtig

Wenn Sie ein VPN verwenden, wird das Konfigurationsprofil ignoriert.

:::

1. Laden Sie das Konfigurationsprofil auf das Gerät, das Sie mit AdGuard DNS verbinden möchten, herunter.
2. Wählen Sie das Apple-Menü → _Systemeinstellungen_, klicken Sie in der Seitenleiste auf _Datenschutz & Sicherheit_ und dann rechts auf _Profile_ (möglicherweise müssen Sie nach unten blättern).
   ![Profile Downloaded \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step2.png)
3. In the _Downloaded_ section, double-click the profile.
   ![Downloaded \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step3.png)
4. Überprüfen Sie den Profilinhalt und klicken Sie auf _Installieren_.
   ![Installation \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step4.png)
5. Geben Sie das Administratorpasswort ein und klicken Sie auf _OK_.

Fertig! Ihr Gerät ist erfolgreich mit AdGuard DNS verbunden.

## Unverschlüsseltes DNS konfigurieren

Wenn Sie keine zusätzliche Software für die DNS-Konfiguration verwenden möchten, können Sie sich für unverschlüsseltes DNS entscheiden. Sie haben zwei Optionen: Verknüpfte IPs oder dedizierte IPs verwenden.

- [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)
