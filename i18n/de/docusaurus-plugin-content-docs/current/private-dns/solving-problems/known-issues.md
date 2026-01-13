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

![iOS Privat-Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay-ios-1.png)

Auf Ihrem Mac:

1. Öffnen Sie *Systemeinstellungen* und klicken Sie auf Ihren Namen oder *Apple ID*.
1. Wählen Sie *iCloud* → *Privat-Relay*.
1. Deaktivieren Sie das Privat-Relay.
1. Klicken Sie auf *Fertig*.

![macOS Privat-Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png)

## Erweiterter Schutz vor Tracking und Identifizierung (Safari, ab iOS 17)

Nach dem iOS 17-Update kann der erweiterte Schutz vor Tracking und Identifizierung in den Safari-Einstellungen aktiviert werden, was möglicherweise einen ähnlichen Effekt wie das Umgehen der AdGuard-DNS-Einstellungen durch iCloud Privat-Relay haben könnte.

Hier erfahren Sie, wie Sie den erweiterten Tracking- und Identifizierungsschutz deaktivieren können:

For iOS 26.1 and later versions:

1. Go to *Settings*.
1. Scroll down and select *Apps*.
1. Go to *Safari* → *Advanced*.
1. Tap *Advanced Tracking and Fingerprinting Protection* and then *Off*.

![iOS 26.1 Tracking and Fingerprinting Protection *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/adv-tracking-browser-1.png)

For iOS versions prior to 26.1:

1. Open *Settings* and scroll down to *Safari*.
1. Tap *Advanced*.
1. Disable *Advanced Tracking and Fingerprinting Protection*.

![iOS Tracking and Fingerprinting Protection *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)

## Limit IP Address Tracking on iPhone

When the Limit IP Address Tracking feature is enabled on your iPhone, it can interfere with AdGuard DNS’s ability to filter traffic.

This happens because the feature routes DNS queries from Safari (and other apps that support it) through Apple’s own private relay servers. This prevents AdGuard DNS from receiving your device’s actual IP address and processing DNS requests, resulting in disabled filtering for ads and trackers.

To restore full DNS-based filtering, you will need to disable this feature for the Wi-Fi network you are currently using.

Please follow the steps below:

1. Open *Settings* on your iPhone.
1. Tap *Wi-Fi*.
1. Find and tap the name of the Wi-Fi network you are currently connected to.
1. On the network’s settings page, toggle off the switch for *Limit IP Address Tracking.*

![Limit IP Address Tracking *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-wifi-limit-ip-1.png)

DNS filtering will resume immediately after disabling this setting. Please note that you may need to repeat this process for other Wi-Fi networks you connect to in the future.
