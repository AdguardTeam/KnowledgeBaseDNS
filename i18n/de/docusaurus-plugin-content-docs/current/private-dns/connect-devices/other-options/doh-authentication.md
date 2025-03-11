---
title: DNS-over-HTTPS mit Authentifizierung
sidebar_position: 4
---

## Warum sie nützlich ist

DNS-over-HTTPS mit Authentifizierung erlaubt es dir, einen Benutzernamen und ein Passwort für den Zugriff auf den ausgewählten Server festzulegen.

Dies verhindert den Zugriff durch nicht autorisierte Nutzer:innen und erhöht die Sicherheit. Zusätzlich können Sie die Verwendung anderer Protokolle für bestimmte Profile einschränken. Diese Funktion ist besonders nützlich, wenn die Adresse Ihres DNS-Servers anderen bekannt ist. Durch das Hinzufügen eines Passworts können Sie den Zugriff sperren und sicherstellen, dass nur Sie ihn verwenden können.

## Einrichtung

:::note Kompatibilität

Diese Funktion wird sowohl vom [AdGuard DNS Client](/dns-client/overview.md) als auch von [AdGuard Apps](https://adguard.com/welcome.html) unterstützt.

:::

1. Öffnen Sie Übersicht.
2. Fügen Sie ein neues Gerät hinzu oder öffnen Sie die Einstellungen eines zuvor erstellten Geräts.
3. Klicken Sie auf _DNS-Serveradressen verwenden_ und öffnen Sie den Abschnitt _Verschlüsselte DNS-Serveradressen_.
4. Konfigurieren Sie DNS-over-HTTPS mit Authentifizierung nach Belieben.
5. Konfigurieren Sie Ihr Gerät so, dass es diesen Server in AdGuard DNS Client oder einer der AdGuard-Apps verwendet.
6. Um dies zu tun, kopieren Sie die Adresse des verschlüsselten Servers und fügen Sie sie in die Einstellungen der AdGuard-App oder des AdGuard DNS Clients ein.
    ![Adresse kopieren \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/doh_step6.png)
7. Sie können auch die Verwendung anderer Protokolle verweigern.
    ![Protokolle ablehnen \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/deny_protocol.png)
