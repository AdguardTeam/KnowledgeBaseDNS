---
title: PlayStation PS4/PS5
sidebar_position: 4
---

Spielkonsolen unterstützen kein verschlüsseltes DNS, eignen sich aber gut für die Einrichtung von Öffentlichem AdGuard DNS oder Privatem AdGuard DNS über eine verknüpfte IP-Adresse.

Möglicherweise unterstützt Ihr Router die Verwendung von verschlüsselten DNS-Servern, so dass Sie jederzeit Privates AdGuard DNS auf ihm konfigurieren und Ihre Spielkonsole damit verbinden können.

[So konfigurieren Sie Ihren Router](/private-dns/connect-devices/routers/routers.md)

## Mit AdGuard DNS verbinden

Konfigurieren Sie Ihre Spielkonsole so, dass sie einen Öffentlichen AdGuard DNS-Server verwendet, oder konfigurieren Sie sie über eine verknüpfte IP:

1. Schalten Sie Ihre PS4/PS5-Konsole ein und melden Sie sich bei Ihrem Konto an.
2. Wählen Sie auf dem Startbildschirm das Zahnradsymbol in der oberen Reihe.
3. Wählen Sie im Menü _Einstellungen_ die Option _Netzwerk_.
4. Wählen Sie _Internetverbindung einrichten_.
5. Wählen Sie je nach Netzwerkkonfiguration _WLAN verwenden_ oder _LAN-Kabel verwenden_.
6. Wählen Sie _Benutzerdefiniert_ und dann _Automatisch_ für _IP-Adresse-Einstellungen_.
7. Wählen Sie für _DHCP-Hostname_ die Option _Nicht angeben_.
8. Wählen Sie für _DNS-Einstellungen_ die Option _Manuell_.
9. Geben Sie in das Feld _DNS-Server_ eine der folgenden DNS-Serveradressen ein:
   - `94.140.14.49`
   - `94.140.14.59`
10. Wählen Sie _Weiter_, um fortzufahren.
11. Wählen Sie auf dem Bildschirm _MTU-Einstellungen_ die Option _Automatisch_.
12. Wählen Sie auf dem Bildschirm _Proxyserver_ die Option _Nicht verwenden_.
13. Wählen Sie _Internetverbindung testen_, um Ihre neuen DNS-Einstellungen zu prüfen.
14. Sobald der Test abgeschlossen ist und Sie die Meldung _Internetverbindung: Erfolgreich_ erhalten, speichern Sie Ihre Einstellungen.

Es wäre vorzuziehen, eine verknüpfte IP zu verwenden (oder eine dedizierte IP, wenn Sie ein Team-Abonnement haben):

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
