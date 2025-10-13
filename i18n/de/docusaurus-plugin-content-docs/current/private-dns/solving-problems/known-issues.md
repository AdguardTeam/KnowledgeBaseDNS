---
title: Bekannte Probleme
sidebar_position: 1
---

Nach der Einrichtung von AdGuard DNS kann es vorkommen, dass, dass es nicht richtig funktioniert: Man sieht eine Meldung, dass das Gerät nicht mit AdGuard DNS verbunden ist und die Anfragen von diesem Gerät werden nicht im Anfragenprotokoll angezeigt. Dies kann aufgrund bestimmter versteckter Einstellungen in Ihrem Browser oder Betriebssystem geschehen. Lassen Sie uns einige häufige Probleme und ihre Lösungen betrachten.

:::tip

Sie können den Status von AdGuard DNS auf der [Testseite](https://adguard.com/test.html) überprüfen.

:::

## Sichere DNS-Einstellungen von Chrome

Wenn Sie Chrome verwenden und keine Anfragen in Ihrer AdGuard DNS-Übersicht sehen, kann das daran liegen, dass Chrome seinen eigenen DNS-Server verwendet. Hier erfahren Sie, wie Sie diese Funktion deaktivieren können:

1. Öffnen Sie die Einstellungen in Chrome.
1. Navigieren Sie zu *Datenschutz und Sicherheit*.
1. Wählen Sie *Sicherheit*.
1. Blättern Sie nach unten zu *Sicheres DNS verwenden*.
1. Deaktivieren Sie diese Funktion.

![Chromes Funktion „Sicheres DNS verwenden“](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/secure-dns.png)

If you disable Chrome’s own DNS settings, the browser will use the DNS specified in your operating system, which should be AdGuard DNS if you’ve set it up correctly.

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

Nach dem iOS 17-Update kann der erweiterte Schutz vor Tracking und Identifizierung in den Safari-Einstellungen aktiviert werden, was möglicherweise einen ähnlichen Effekt wie das Umgehen der AdGuard-DNS-Einstellungen durch iCloud Privat-Relay haben könnte.

Hier erfahren Sie, wie Sie den erweiterten Tracking- und Identifizierungsschutz deaktivieren können:

1. Öffnen Sie *Einstellungen* und scrollen Sie nach unten zu *Safari*.
1. Tippen Sie auf *Erweitert*.
1. Deaktivieren Sie den *Erweiterter Tracking- und Identifizierungsschutz*.

![Erweiterter Tracking- und Identifizierungsschutz auf iOS *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)
