---
title: Änderungsprotokoll
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    Changelog is from here:
    https://api.adguard-dns.io/static/api/CHANGELOG.md
-->

Dieser Artikel enthält das Änderungsprotokoll für [AdGuard DNS-API](private-dns/api/overview.md).

## v1.10

_Veröffentlicht am 12. Dezember 2024_

Eine neue DNS-Server-Einstellung wurde hinzugefügt — `block_chrome_prefetch`. Es deaktiviert den _Private Prefetch Proxy_ in Chrome. Wenn diese Funktion aktiviert ist, lädt Chrome manchmal Links auf der Google-Suchergebnisseite und anderen teilnehmenden Websites vor, noch bevor der Nutzer sie anklickt.

## v1.9

_Veröffentlicht am 11. Juli 2024_

- Automatische Geräteverbindungsfunktionalität hinzugefügt:
  - Neue DNS-Server-Einstellung — `auto_connect_devices_enabled`, die das automatische Verbinden von Geräten über einen bestimmten Verbindungstyp erlaubt
  - Neues Feld in Gerät — `auto_device`, das angibt, dass das Gerät automatisch verbunden ist
- Ersetzen von `int` durch `long` für `queries` in CategoryQueriesStats, für `used` in AccountLimits, und für `blocked` und `queries` in QueriesStats

## v1.8

_Veröffentlicht am 20. April 2024_

- Unterstützung für DNS-over-HTTPS mit Authentifizierung hinzugefügt:
  - Neuer Schritt — Zurücksetzen des DNS-over-HTTPS-Passworts für das Gerät
  - Neue Geräteeinstellung — `detect_doh_auth_only`. Deaktiviert alle DNS-Verbindungsmethoden außer DNS-over-HTTPS mit Authentifizierung
  - Neues Feld in DeviceDNSAddresses — `dns_over_https_with_auth_url`. Gibt die URL an, die bei der Verbindung über DNS-over-HTTPS mit Authentifizierung verwendet werden soll

## v1.7

_Veröffentlicht am 11. März 2024_

- Funktionalität für dedizierte IPv4-Adressen hinzugefügt:
  - Dedizierte IPv4-Adressen können jetzt auf Geräten für die DNS-Serverkonfiguration verwendet werden
  - Die dedizierte IPv4-Adresse ist jetzt mit dem Gerät verbunden, mit dem sie verknüpft ist, so dass Abfragen, die an diese Adresse gerichtet sind, für dieses Gerät protokolliert werden
- Neue Operationen hinzugefügt:
  - Auflisten aller verfügbaren dedizierten IPv4-Adressen
  - Zuweisung einer neuen dedizierten IPv4-Adresse
  - Verknüpfen einer verfügbaren IPv4-Adresse mit einem Gerät
  - Aufheben der Verknüpfung einer IPv4-Adresse mit einem Gerät
  - Anfordern von Informationen über dedizierte Adressen, die mit einem Gerät verbunden sind
- Neue Grenzwerte für Kontenbeschränkungen hinzugefügt:
  - `dedicated_ipv4` liefert Informationen über die Anzahl der bereits zugewiesenen dedizierten IPv4-Adressen sowie über deren Einschränkung
- Veraltetes Feld von DNSServerSettings entfernt:
  - `safebrowsing_enabled`

## v1.6

_Veröffentlicht am 22. Januar 2024_

- Neuer Abschnitt „Zugriffsrechte“ für DNS-Profile hinzugefügt (`access_settings`). Durch die Anpassung dieser Felder können Sie Ihren AdGuard DNS-Server vor unbefugtem Zugriff schützen:

  - `allowed_clients` — hier können Sie angeben, welche Clients Ihren DNS-Server verwenden dürfen. Dieses Feld hat Vorrang vor dem Feld `blocked_clients`
  - `blocked_clients` — hier können Sie angeben, welche Clients Ihren DNS-Server nicht verwenden dürfen
  - `blocked_domain_rules` — hier können Sie angeben, welche Domains nicht auf Ihren DNS-Server zugreifen dürfen, und solche Domains mit Wildcard- und DNS-Filterregeln definieren

- Neue Grenzwerte für Kontenbeschränkungen hinzugefügt:

  - `access_rules` liefert die Zusammenfassung der derzeit verwendeten Werte für `blocked_clients` und `blocked_domain_rules` sowie die Begrenzung der Zugangsregeln
  - `user_rules` zeigt die Anzahl der erstellten Benutzerregeln sowie deren Limit an

- Neue Einstellung `ip_log_enabled` zur Protokollierung von Client-IP-Adressen und -Domains hinzugefügt

- Es wurde ein neuer Fehlercode `FIELD_REACHED_LIMIT` hinzugefügt, der anzeigt, wenn die Grenzen erreicht wurden:

  - Für die Gesamtzahl der `blocked_clients` und `blocked_domain_rules` in den Zugriffseinstellungen
  - Für `rules` in den Einstellungen für Benutzerregeln

## v1.5

_Veröffentlicht am 16. Juni 2023_

- Neue Einstellung `block_nrd` hinzugefügt und alle sicherheitsrelevanten Einstellungen an einem Ort zusammengefasst

### Modell für Safebrowsing-Einstellungen geändert

Von:

```json
{
   "enabled": true
}
```

Auf:

```json
{
   "enabled": true,
   "block_dangerous_domains": true,
   "block_nrd": false
}
```

wobei `enabled` nun alle Einstellungen in der Gruppe kontrolliert, `block_dangerous_domains` das frühere Modellfeld `enabled` ist, und `block_nrd` eine Einstellung ist, die neu registrierte Domains sperrt.

### Modell zum Speichern von Servereinstellungen geändert

Von:

```json
{
  "protection_enabled" : true,
  "safebrowsing_enabled" : true,
  ..
}
```

zu:

```json
{
  "protection_enabled" : true,
  "safebrowsing_settings" : {
     "enabled": true,
     "block_dangerous_domains": true,
     "block_nrd": false
  }
  ..
}
```

hier wird ein neues Feld `safebrowsing_settings` anstelle des veralteten `safebrowsing_enabled` verwendet, dessen Wert in `block_dangerous_domains` gespeichert ist.

## v1.4

_Veröffentlicht am 29. März 2023_

- Konfigurierbare Option zum Sperren von Antworten hinzugefügt: Standard (0.0.0.0), REFUSED, NXDOMAIN oder benutzerdefinierte IP-Adresse

## v1.3

_Veröffentlicht am 13. Dezember 2022_

- Methode zum Abrufen von Kontolimits hinzugefügt

## v1.2

_Veröffentlicht am 14. Oktober 2022_

- Neue Protokolltypen DNS und DNSCrypt hinzugefügt. Veraltete PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP und DNSCRYPT_UDP, die später entfernt werden sollen

## v1.1

_Veröffentlicht am 7. Juli 2022_

- Methoden zum Abrufen von Statistiken nach Zeit, Domains, Unternehmen und Geräten hinzugefügt
- Methode zum Aktualisieren von Geräteeinstellungen hinzugefügt
- Definition der erforderlichen Felder wurde korrigiert

## v1.0

_Veröffentlicht am 22. Februar 2022_

- Authentifizierung hinzugefügt
- CRUD-Operationen mit Geräten und DNS-Servern
- Anfragenprotokoll
- Herunterladen von DoH und DoT .mobileconfig
- Filterlisten und Webdienste
