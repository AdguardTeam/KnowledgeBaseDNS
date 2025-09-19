---
title: Steam Deck
sidebar_position: 5
---

Spielkonsolen unterstützen kein verschlüsseltes DNS, eignen sich aber gut für die Einrichtung von Öffentlichem AdGuard DNS oder Privatem AdGuard DNS über eine verknüpfte IP-Adresse.

Möglicherweise unterstützt Ihr Router die Verwendung von verschlüsselten DNS-Servern, so dass Sie jederzeit Privates AdGuard DNS auf ihm konfigurieren und Ihre Spielkonsole damit verbinden können.

[So konfigurieren Sie Ihren Router](/private-dns/connect-devices/routers/routers.md)

## Mit AdGuard DNS verbinden

Konfigurieren Sie Ihre Spielkonsole so, dass sie einen Öffentlichen AdGuard DNS-Server verwendet, oder konfigurieren Sie sie über eine verknüpfte IP:

1. Öffnen Sie die Steam Deck-Einstellungen, indem Sie auf das Zahnradsymbol in der oberen rechten Ecke des Bildschirms klicken.
2. Klicken Sie auf _Netzwerk_.
3. Klicken Sie auf das Zahnradsymbol neben jener Netzwerkverbindung, die Sie konfigurieren möchten.
4. Select IPv4 or IPv6, depending on the type of network you’re using.
5. Wählen Sie _Nur automatische (DHCP) Adressen_ oder _Automatisch (DHCP)_.
6. Geben Sie in das Feld _DNS-Server_ eine der folgenden DNS-Serveradressen ein:
   - `94.140.14.49`
   - `94.140.14.59`
7. Speichern Sie die Änderungen.

Es wäre vorzuziehen, eine verknüpfte IP zu verwenden (oder eine dedizierte IP, wenn Sie ein Team-Abonnement haben):

- [Dedizierte IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Verknüpfte IPs](/private-dns/connect-devices/other-options/linked-ip.md)
