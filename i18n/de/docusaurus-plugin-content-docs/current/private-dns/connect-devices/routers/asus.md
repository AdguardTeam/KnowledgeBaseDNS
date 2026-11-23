---
title: Asus
sidebar_position: 3
---

## DNS-over-TLS konfigurieren

Dies sind allgemeine Anweisungen zur Konfiguration des Privaten AdGuard DNS für Asus-Router.

Die Konfigurationsinformationen in diesen Anweisungen stammen von einem bestimmten Router-Modell, daher kann es Unterschiede zur Benutzeroberfläche eines einzelnen Geräts geben.

If necessary: Configure DNS-over-TLS on Asus, install the [Asus Merlin firmware](https://www.asuswrt-merlin.net/download) suitable for your router version on your computer.

1. Melden Sie sich bei Ihrer Router-Administrationsoberfläche an. Sie können über [http://router.asus.com](http://router.asus.com/), [http://192.168.1.1](http://192.168.1.1/), [http://192.168.0.1](http://192.168.0.1/), oder [http://192.168.2.1](http://192.168.2.1/) darauf zugreifen.
2. Geben Sie den Benutzernamen des Administrators (in der Regel admin) und das Passwort des Routers ein.
3. Navigieren Sie in der Seitenleiste „Erweiterte Einstellungen“ zum Abschnitt „WAN“.
4. Setzen Sie im Abschnitt _WAN-DNS-Einstellungen_ die Option _Automatisch mit DNS-Server verbinden_ auf _Nein_.
5. Setzen Sie _Lokale Anfragen weiterleiten_, _DNS-Rebind-Schutz aktivieren_ und _DNSSEC-Unterstützung aktivieren_ auf _Nein_.
6. Ändern Sie das DNS-Datenschutzprotokoll in „DNS-over-TLS (DoT)“.
7. Stellen Sie sicher, dass das _DNS-over-TLS-Profil_ auf _Streng_ eingestellt ist.
8. Blättern Sie nach unten zum Abschnitt _DNS-over-TLS-Serverliste_. Geben Sie im Feld _Adresse_ eine der folgenden Adressen ein:
   - `94.140.14.49` und `94.140.14.59`
9. Geben Sie als _TLS-Port_ 853 ein.
10. Geben Sie im Feld _TLS-Hostname_ die Private AdGuard DNS-Serveradresse ein:
    - `{Your_Device_ID}.d.adguard-dns.com`
11. Blättern Sie bis zum Ende der Seite und klicken Sie auf _Übernehmen_.

## Administrationsoberfläche Ihres Routers verwenden

Use these instructions if your Asus router does not support DNS-over-TLS configuration:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Geben Sie den Benutzernamen des Administrators (in der Regel admin) und das Passwort des Routers ein.
3. Open _Advanced Settings_ or _Advanced_.
4. Select _WAN_ or _Internet_.
5. Open _DNS Settings_ or _DNS_.
6. Choose _Manual Setting_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` und `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` und `2a10:50c0:0:0:0:0:dad:ff`
7. Speichern Sie die Einstellungen.
8. Verknüpfen Sie Ihre IP-Adresse (oder Ihre dedizierte IP, falls Sie ein Team-Abonnement haben).
   - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
   - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
