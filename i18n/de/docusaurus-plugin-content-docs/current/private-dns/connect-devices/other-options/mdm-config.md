---
title: App für Mobilgeräte über MDM verwalten
sidebar_position: 7
---

:::info

Dieser Artikel beschreibt eine Funktion, die in der App für Mobilgeräte verfügbar ist. Um es selbst auszuprobieren, laden Sie die AdGuard DNS App für [Android](https://agrd.io/android_dns) oder [iOS](https://agrd.io/ios_dns) herunter.

:::

Die AdGuard DNS App für Mobilgeräte unterstützt die Unternehmensverwaltung über MDM-Systeme (Mobile Device Management) unter Verwendung des MAC-Standards (Managed App Configuration).

Dadurch können IT-Administratoren die AdGuard-DNS-Einstellungen über EMM-Konsolen wie Google Workspace, Microsoft Intune und andere mit [AppConfig.org](https://www.appconfig.org/) kompatible Lösungen zentral für mehrere Geräte konfigurieren und implementieren.

### Unterstützte EMM-Lösungen

Die App ist mit allen EMM-Systemen kompatibel, die den AppConfig.org-Standard unterstützen:

- Google Workspace (Android Enterprise)
- Microsoft Intune
- VMware Workspace ONE
- Jamf Pro (für iOS)
- mobiconnect
- MobileIron
- BlackBerry UEM
- Weitere AppConfig-kompatible Lösungen

## Unterstützte Parameter

### Konfigurationsparameter für verwaltete Apps

| **Parameter**                                         | **Typ** | **Erforderlich** | **Gültige Werte**                                                                                                                                                                                                                                                | **Auswirkung des Parameters**                                                                                                                                                          | **Bei der Erstinstallation**                                                                                                                                                   | **Bei Änderung des Wertes**                                                                                                                                                                                                                                                                                                                           | **Falls nicht angegeben**                                                                                              |
| ----------------------------------------------------- | ------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Setup-ID** (`setup_id`)          | String  | Nein             | AdGuard-DNS-Setup-ID                                                                                                                                                                                                                                             | Identifiziert das Gerät für die Verbindung mit dem AdGuard-DNS-Server.                                                                                                 | Die App wechselt in den verwalteten Modus; das Feld ist gesperrt; der Benutzer kann es nicht ändern; die Option „Verbindung zurücksetzen“ ist nicht verfügbar. | Verbindung und Einstellungen werden vollständig zurückgesetzt; Benutzer muss sich erneut verbinden; DNS-Schutz wird beendet.                                                                                                                                                                                                          | Der Benutzer kann die Daten manuell eingeben oder einen QR-Code verwenden.                             |
| **Gerätename** (`device_name`)     | String  | Nein             | Beliebiger Gerätename                                                                                                                                                                                                                                            | Legt den Anzeigenamen des Geräts im AdGuard-DNS-Kontrollpanel fest. Der Name darf maximal 64 Zeichen lang sein.                                        | Die App wechselt in den verwalteten Modus; der Name wird automatisch verwendet, wenn er nicht über die Setup-ID festgelegt wurde; das Feld ist gesperrt.       | Nichts passiert.                                                                                                                                                                                                                                                                                                                      | Der Benutzer kann die Eingabe manuell vornehmen; die App kann den Namen über die Setup-ID vorschlagen. |
| **DNS-Protokoll** (`dns_protocol`) | Auswahl | Nein             | **Android:** doh, dot, doq. **iOS:** doh_native, dot_native, doh_vpn, dot_vpn, doq_vpn. | Legt fest, welches verschlüsselte DNS-Protokoll verwendet wird (Hinweis: DoQ ist nicht mit dem nativen Modus unter iOS kompatibel). | Die App wechselt in den verwalteten Modus; das angegebene Protokoll wird standardmäßig angewendet; die Auswahl in den Einstellungen ist gesperrt.              | Die App wechselt zum neuen Protokoll und stellt automatisch eine neue Verbindung her, wenn der DNS-Schutz aktiv ist. Beim Wechseln des Betriebsmodus (Native ↔ VPN) stellt die App die Verbindung nicht automatisch wieder her, sondern der Benutzer muss die Verbindung manuell wiederherstellen. | Man kann dies manuell in den Einstellungen auswählen.                                                  |

## Verwalteter Modus

Die App wechselt automatisch in den verwalteten Modus, wenn das MDM-System mindestens einen Konfigurationsparameter bereitstellt. In diesem Modus haben MDM-Einstellungen immer Vorrang vor Benutzereinstellungen: Alle über MDM konfigurierten Parameter können vom Benutzer nicht geändert werden, während Parameter, die nicht über MDM definiert sind, weiterhin bearbeitet werden können.

Wenn die MDM-Konfiguration aktualisiert wird, werden alle Änderungen automatisch übernommen. Wenn das MDM-System alle Konfigurationsparameter auf einmal entfernt, verlässt die App den verwalteten Modus, zuvor gesperrte Einstellungen werden wieder verfügbar und der Benutzer kann alle Parameter frei ändern.

## Aktualisierung der Konfiguration

Die App erhält automatisch Benachrichtigungen über Konfigurationsänderungen, und alle vom EMM-System bereitgestellten Aktualisierungen werden sofort nach ihrem Eintreffen übernommen. Je nach EMM-Anbieter kann es zu einer Verzögerung kommen, bevor die Konfiguration das Gerät erreicht. Es ist kein Neustart der App erforderlich, damit die Änderungen wirksam werden.
