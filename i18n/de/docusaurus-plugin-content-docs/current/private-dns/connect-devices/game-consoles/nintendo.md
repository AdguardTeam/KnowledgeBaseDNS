---
title: Nintendo
sidebar_position: 2
---

Spielkonsolen unterstützen kein verschlüsseltes DNS, eignen sich aber gut für die Einrichtung von Öffentlichem AdGuard DNS oder Privatem AdGuard DNS über eine verknüpfte IP-Adresse.

Möglicherweise unterstützt Ihr Router die Verwendung von verschlüsselten DNS-Servern, so dass Sie jederzeit Privates AdGuard DNS auf ihm konfigurieren und Ihre Spielkonsole damit verbinden können.

[So konfigurieren Sie Ihren Router](/private-dns/connect-devices/routers/routers.md)

:::note Kompatibilität

Gilt für New Nintendo 3DS, New Nintendo 3DS XL, New Nintendo 2DS XL, Nintendo 3DS, Nintendo 3DS XL und Nintendo 2DS.

:::

## Mit AdGuard DNS verbinden

Konfigurieren Sie Ihre Spielkonsole so, dass sie einen Öffentlichen AdGuard DNS-Server verwendet, oder konfigurieren Sie sie über eine verknüpfte IP:

1. Wählen Sie im Startmenü _Systemeinstellungen_.
2. Öffnen Sie _Interneteinstellungen_ → _Verbindungseinstellungen_.
3. Wählen Sie die Verbindungsdatei und wählen Sie dann _Einstellungen ändern_.
4. Wählen Sie _DNS_ → _Einrichten_.
5. Legen Sie _Auto-Obtain DNS_ auf _Nein_ fest.
6. Wählen Sie _Detaillierte Einrichtung_ → _Primärer DNS_. Halten Sie die linke Pfeiltaste gedrückt, um den vorhandenen DNS zu entfernen.
7. Geben Sie in das Feld _DNS-Server_ eine der folgenden DNS-Serveradressen ein:
   - `94.140.14.49`
   - `94.140.14.59`
8. Speichern Sie die Einstellungen.

Es wäre vorzuziehen, eine verknüpfte IP zu verwenden (oder eine dedizierte IP, wenn Sie ein Team-Abonnement haben):

- [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)
