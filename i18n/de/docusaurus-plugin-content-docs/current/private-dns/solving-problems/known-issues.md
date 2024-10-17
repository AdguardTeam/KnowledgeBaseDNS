---
title: Bekannte Probleme
sidebar_position: 1
---

After setting up AdGuard DNS, some users may find that it doesn’t work properly: they see a message that their device is not connected to AdGuard DNS and the requests from that device are not displayed in the Query log. Dies kann aufgrund bestimmter versteckter Einstellungen in Ihrem Browser oder Betriebssystem geschehen. Lassen Sie uns einige häufige Probleme und ihre Lösungen betrachten.

:::tip

Sie können den Status von AdGuard DNS auf der [Testseite](https://adguard.com/test.html) überprüfen.

:::

## Chrome’s secure DNS settings

Wenn Sie Chrome verwenden und keine Anfragen in Ihrer AdGuard DNS-Übersicht sehen, kann das daran liegen, dass Chrome seinen eigenen DNS-Server verwendet. Hier erfahren Sie, wie Sie diese Funktion deaktivieren können:

1. Öffnen Sie die Einstellungen in Chrome.
1. Navigieren Sie zu *Datenschutz und Sicherheit*.
1. Wählen Sie *Sicherheit*.
1. Blättern Sie nach unten zu *Sicheres DNS verwenden*.
1. Deaktivieren Sie diese Funktion.

![Chromes Funktion „Sicheres DNS verwenden“](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/secure-dns.png)

Wenn Sie die eigenen DNS-Einstellungen von Chrome deaktivieren, verwendet der Browser das in Ihrem Betriebssystem angegebene DNS, das AdGuard DNS sein sollte, wenn Sie es korrekt eingerichtet haben.

## iCloud Privat-Relay (Safari, macOS und iOS)

Wenn Sie in den Einstellungen Ihres Geräts iCloud Privat-Relay aktivieren, verwendet Safari die DNS-Adressen von Apple, die die DNS-Einstellungen von AdGuard außer Kraft setzen.

Hier erfahren Sie, wie Sie iCloud Privat-Relay auf Ihrem iPhone deaktivieren können:

1. Öffnen Sie *Einstellungen* und tippen Sie auf Ihren Namen.
1. Wählen Sie *iCloud* → *Privat-Relay*.
1. Deaktivieren Sie das Privat-Relay.

![iOS Privat-Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay.png)

Auf Ihrem Mac:

1. Öffnen Sie *Systemeinstellungen* und klicken Sie auf Ihren Namen oder *Apple ID*.
1. Wählen Sie *iCloud* → *Privat-Relay*.
1. Deaktivieren Sie das Privat-Relay.
1. Klicken Sie auf *Fertig*.

![macOS Privat-Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png)

## Erweiterter Schutz vor Tracking und Identifizierung (Safari, ab iOS 17)

After the iOS 17 update, Advanced Tracking and Fingerprinting Protection may be enabled in Safari settings, which could potentially have a similar effect to iCloud Private Relay bypassing AdGuard DNS settings.

Here’s how you can disable Advanced Tracking and Fingerprinting Protection:

1. Öffnen Sie *Einstellungen* und scrollen Sie nach unten zu *Safari*.
1. Tippen Sie auf *Erweitert*.
1. Disable *Advanced Tracking and Fingerprinting Protection*.

![iOS Tracking and Fingerprinting Protection *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)
