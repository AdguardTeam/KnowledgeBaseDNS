---
title: Android
sidebar_position: 2
---

Um ein Android-Gerät mit AdGuard DNS zu verbinden, fügen Sie es zunächst der _Übersicht_ hinzu:

1. In _Übersicht_ klicken Sie auf _Neues Gerät verbinden_.
2. Wählen Sie im Auswahlmenü _Gerätetyp_ Android aus.
3. Benennen Sie das Gerät.
   ![Gerät verbinden \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/choose_android.png)

## AdGuard Werbeblocker verwenden (kostenpflichtige Option)

Die AdGuard-App ermöglicht die Nutzung von verschlüsseltem DNS und eignet sich gut für die Einrichtung von AdGuard DNS auf Ihrem Android-Gerät. Sie können zwischen verschiedenen Verschlüsselungsprotokollen wählen. Zusätzlich zur DNS-Filterung erhalten Sie auch einen hervorragenden Werbeblocker, der systemweit funktioniert.

1. Installieren Sie [die AdGuard-App](https://adguard.com/adguard-android/overview.html) auf dem Gerät, das Sie mit AdGuard DNS verbinden möchten.
2. Öffnen Sie die App.
3. Tippen Sie auf das Schildsymbol in der Menüleiste unten auf dem Bildschirm.
   ![Schildsymbol \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step3.png)
4. Tippen Sie auf _DNS-Schutz_.
   ![DNS-Schutz \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step4.png)
5. Wählen Sie _DNS-Server_.
   ![DNS-Server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step5.png)
6. Blättern Sie nach unten zu _Benutzerdefinierte Server_ und tippen Sie auf _DNS-Server hinzufügen_.
   ![DNS-Server hinzufügen \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step6.png)
7. Copy one of the following DNS addresses and paste it into the _Server addresses_ field in the app. Wenn Sie nicht sicher sind, welche Sie verwenden sollen, wählen Sie _DNS-over-HTTPS_.
   ![DoH \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_1.png)
   ![Benutzerdefinierter DNS-Server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_2.png)
8. Tippen Sie auf _Hinzufügen_.
9. Der hinzugefügte DNS-Server wird unten in der Liste der _Benutzerdefinierten Server_ angezeigt. Tippen Sie auf seinen Namen oder den Radio-Button daneben, um ihn auszuwählen.
   ![DNS-Server auswählen \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step_9.png)
10. Tippen Sie auf _Speichern und auswählen_.
    ![Speichern und auswählen \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step10.png)

Fertig! Ihr Gerät ist erfolgreich mit AdGuard DNS verbunden.

## AdGuard VPN verwenden

Nicht alle VPN-Dienste unterstützen verschlüsseltes DNS. Unser VPN jedoch schon, daher ist AdGuard VPN die erste Wahl für Sie, wenn Sie sowohl ein VPN als auch ein privates DNS benötigen.

1. Installieren Sie [die AdGuard VPN-App](https://adguard-vpn.com/android/overview.html) auf dem Gerät, das Sie mit AdGuard DNS verbinden möchten.
2. Öffnen Sie die App.
3. Tippen Sie in der Menüleiste am unteren Rand des Bildschirms auf das Zahnradsymbol.
   ![Zahnradsymbol \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step3.png)
4. Öffnen Sie _App-Einstellungen_.
   ![App-Einstellungen \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step4.png)
5. Wählen Sie _DNS-Server_.
   ![DNS-Server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step5.png)
6. Blättern Sie nach unten und tippen Sie auf _Benutzerdefinierten DNS-Server hinzufügen_.
   ![DNS-Server hinzufügen \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step6.png)
7. Copy one of the following DNS addresses and paste it into the _DNS server addresses_ field in the app. Wenn Sie nicht sicher sind, welche Sie verwenden sollen, wählen Sie DNS-over-HTTPS.
   ![DoH \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_1.png)
   ![Benutzerdefinierter DNS-Server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_2.png)
8. Tippen Sie auf _Speichern und auswählen_.
   ![DNS-Server hinzufügen \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step8.png)
9. Der hinzugefügte DNS-Server wird unten in der Liste der _Benutzerdefinierten DNS-Server_ angezeigt.

Fertig! Ihr Gerät ist erfolgreich mit AdGuard DNS verbunden.

## Privates DNS manuell konfigurieren

Sie können Ihren DNS-Server in den Geräteeinstellungen konfigurieren. Bitte beachten Sie, dass Android-Geräte nur das DNS-over-TLS-Protokoll unterstützen.

1. Gehen Sie zu _Einstellungen_ → _WLAN & Internet_ (oder _Netzwerk und Internet_, abhängig von Ihrer OS-Version).
   ![Einstellungen \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step1.png)
2. Wählen Sie _Erweitert_ und tippen Sie auf _Privates DNS_.
   ![Privates DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step2.png)
3. Wählen Sie die Option _Private DNS-Anbieter Hostname_ und geben Sie die Adresse Ihres eigenen Servers ein: `{Your_Device_ID}.d.adguard-dns.com`.
4. Tippen Sie auf _Speichern_.
   ![Privates DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step4.png)
   Fertig! Ihr Gerät ist erfolgreich mit AdGuard DNS verbunden.

## Unverschlüsseltes DNS konfigurieren

Wenn Sie keine zusätzliche Software für die DNS-Konfiguration verwenden möchten, können Sie sich für unverschlüsseltes DNS entscheiden. Sie haben zwei Optionen: Verknüpfte IPs oder dedizierte IPs verwenden.

- [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)
