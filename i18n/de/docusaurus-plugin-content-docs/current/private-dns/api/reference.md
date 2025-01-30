---
title: Referenz
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

<!--
    The content below is simply an automatic conversion from the OpenAPI spec https://api.adguard-dns.io/static/swagger/openapi.json to markdown using https://swagger-markdown-ui.netlify.app/.

    If you want to change it, ask the developers to change the OpenAPI spec.
-->

Dieser Artikel enthält die Dokumentation für die [AdGuard DNS-API](private-dns/api/overview.md). Das vollständige Änderungsprotokoll der AdGuard DNS-API finden Sie auf [dieser Seite](private-dns/api/changelog.md).

## Current version: 1.10

### /oapi/v1/account/limits

#### GET

##### Zusammenfassung

Abrufen von Kontobeschränkungen

##### Antworten

| Code | Beschreibung                         |
| ---- | ------------------------------------ |
| 200  | Informationen zu Kontobeschränkungen |

### /oapi/v1/dedicated_addresses/ipv4

#### GET

##### Zusammenfassung

Liste der dedizierten IPv4-Adressen

##### Antworten

| Code | Beschreibung                        |
| ---- | ----------------------------------- |
| 200  | Liste der dedizierten IPv4-Adressen |

#### POST

##### Zusammenfassung

Zuteilung neuer IPv4

##### Antworten

| Code | Beschreibung                                      |
| ---- | ------------------------------------------------- |
| 200  | Neue IPv4 erfolgreich zugewiesen                  |
| 429  | Dedizierte IPv4-Anzahl hat den Grenzwert erreicht |

### /oapi/v1/devices

#### GET

##### Zusammenfassung

Listet Geräte auf

##### Antworten

| Code | Beschreibung     |
| ---- | ---------------- |
| 200  | Liste der Geräte |

#### POST

##### Zusammenfassung

Erstellt ein neues Gerät

##### Antworten

| Code | Beschreibung                                 |
| ---- | -------------------------------------------- |
| 200  | Gerät erstellt                               |
| 400  | Validierung fehlgeschlagen                   |
| 429  | Die Anzahl der Geräte hat das Limit erreicht |

### /oapi/v1/devices/{device_id}

#### DELETE

##### Zusammenfassung

Entfernt ein Gerät

##### Parameter

| Name      | Gefunden in | Beschreibung | Erforderlich | Schema |
| --------- | ----------- | ------------ | ------------ | ------ |
| device_id | path        |              | Ja           | string |

##### Antworten

| Code | Beschreibung         |
| ---- | -------------------- |
| 200  | Gerät gelöscht       |
| 404  | Gerät nicht gefunden |

#### GET

##### Zusammenfassung

Ruft ein vorhandenes Gerät nach ID ab

##### Parameter

| Name      | Gefunden in | Beschreibung | Erforderlich | Schema |
| --------- | ----------- | ------------ | ------------ | ------ |
| device_id | path        |              | Ja           | string |

##### Antworten

| Code | Beschreibung            |
| ---- | ----------------------- |
| 200  | Informationen zum Gerät |
| 404  | Gerät nicht gefunden    |

#### PUT

##### Zusammenfassung

Aktualisiert ein vorhandenes Gerät

##### Parameter

| Name      | Gefunden in | Beschreibung | Erforderlich | Schema |
| --------- | ----------- | ------------ | ------------ | ------ |
| device_id | path        |              | Ja           | string |

##### Antworten

| Code | Beschreibung               |
| ---- | -------------------------- |
| 200  | Gerät aktualisiert         |
| 400  | Validierung fehlgeschlagen |
| 404  | Gerät nicht gefunden       |

### /oapi/v1/devices/{device_id}/dedicated_addresses

#### GET

##### Zusammenfassung

Liste der dedizierten IPv4- und IPv6-Adressen für ein Gerät

##### Parameter

| Name      | Gefunden in | Beschreibung | Erforderlich | Schema |
| --------- | ----------- | ------------ | ------------ | ------ |
| device_id | path        |              | Ja           | string |

##### Antworten

| Code | Beschreibung             |
| ---- | ------------------------ |
| 200  | Dedizierte IPv4 und IPv6 |

### /oapi/v1/devices/{device_id}/dedicated_addresses/ipv4

#### DELETE

##### Zusammenfassung

Dedizierte IPv4-Verbindung vom Gerät trennen

##### Parameter

| Name      | Gefunden in | Beschreibung | Erforderlich | Schema |
| --------- | ----------- | ------------ | ------------ | ------ |
| device_id | path        |              | Ja           | string |

##### Antworten

| Code | Beschreibung                                              |
| ---- | --------------------------------------------------------- |
| 200  | Dedizierte IPv4-Verbindung erfolgreich vom Gerät getrennt |
| 404  | Gerät oder Adresse nicht gefunden                         |

#### POST

##### Zusammenfassung

Dedizierte IPv4-Verknüpfung mit dem Gerät

##### Parameter

| Name      | Gefunden in | Beschreibung | Erforderlich | Schema |
| --------- | ----------- | ------------ | ------------ | ------ |
| device_id | path        |              | Ja           | string |

##### Antworten

| Code | Beschreibung                                                            |
| ---- | ----------------------------------------------------------------------- |
| 200  | Dedizierte IPv4 erfolgreich mit dem Gerät verknüpft                     |
| 400  | Validierung fehlgeschlagen                                              |
| 404  | Gerät oder Adresse nicht gefunden                                       |
| 429  | Die Anzahl verknüpfter dedizierter IPv4-Adressen hat das Limit erreicht |

### /oapi/v1/devices/{device_id}/doh.mobileconfig

#### GET

##### Zusammenfassung

Ruft die DNS-over-HTTPS .mobileconfig-Datei ab.

##### Parameter

| Name                    | Gefunden in | Beschreibung                                                                           | Erforderlich | Schema     |
| ----------------------- | ----------- | -------------------------------------------------------------------------------------- | ------------ | ---------- |
| device_id               | path        |                                                                                        | Ja           | string     |
| exclude_wifi_networks | query       | Liste der WLAN-Netzwerke nach deren SSID, in denen AdGuard DNS deaktiviert werden soll | Nein         | [ string ] |
| exclude_domain          | query       | Listet Domains auf, die Standard-DNS-Server anstelle von AdGuard DNS verwenden sollen  | Nein         | [ string ] |

##### Antworten

| Code | Beschreibung                |
| ---- | --------------------------- |
| 200  | DNS-über-HTTPS .plist-Datei |
| 404  | Gerät nicht gefunden        |

### /oapi/v1/devices/{device_id}/doh_password/reset

#### PUT

##### Zusammenfassung

Generieren und Festlegen eines neuen DNS-over-HTTPS-Passworts

##### Parameter

| Name      | Gefunden in | Beschreibung | Erforderlich | Schema |
| --------- | ----------- | ------------ | ------------ | ------ |
| device_id | path        |              | Ja           | string |

##### Antworten

| Code | Beschreibung                                      |
| ---- | ------------------------------------------------- |
| 200  | DNS-over-HTTPS-Passwort erfolgreich zurückgesetzt |
| 404  | Gerät nicht gefunden                              |

### /oapi/v1/devices/{device_id}/dot.mobileconfig

#### GET

##### Zusammenfassung

Ruft die DNS-over-TLS .mobileconfig-Datei ab.

##### Parameter

| Name                    | Gefunden in | Beschreibung                                                                           | Erforderlich | Schema     |
| ----------------------- | ----------- | -------------------------------------------------------------------------------------- | ------------ | ---------- |
| device_id               | path        |                                                                                        | Ja           | string     |
| exclude_wifi_networks | query       | Liste der WLAN-Netzwerke nach deren SSID, in denen AdGuard DNS deaktiviert werden soll | Nein         | [ string ] |
| exclude_domain          | query       | Listet Domains auf, die Standard-DNS-Server anstelle von AdGuard DNS verwenden sollen  | Nein         | [ string ] |

##### Antworten

| Code | Beschreibung                |
| ---- | --------------------------- |
| 200  | DNS-über-HTTPS .plist-Datei |
| 404  | Gerät nicht gefunden        |

### /oapi/v1/devices/{device_id}/settings

#### PUT

##### Zusammenfassung

Aktualisiert die Geräteeinstellungen

##### Parameter

| Name      | Gefunden in | Beschreibung | Erforderlich | Schema |
| --------- | ----------- | ------------ | ------------ | ------ |
| device_id | path        |              | Ja           | string |

##### Antworten

| Code | Beschreibung                     |
| ---- | -------------------------------- |
| 200  | Geräteeinstellungen aktualisiert |
| 400  | Validierung fehlgeschlagen       |
| 404  | Gerät nicht gefunden             |

### /oapi/v1/dns_servers

#### GET

##### Zusammenfassung

Listet die DNS-Server auf, die dem Benutzer zugeordnet sind.

##### Beschreibung

Listet die DNS-Server auf, die dem Benutzer zugeordnet sind. Standardmäßig gibt es mindestens einen Standardserver.

##### Antworten

| Code | Beschreibung         |
| ---- | -------------------- |
| 200  | Liste der DNS-Server |

#### POST

##### Zusammenfassung

Erstellt einen neuen DNS-Server

##### Beschreibung

Erstellt einen neuen DNS-Server. Sie können benutzerdefinierte Einstellungen vornehmen, andernfalls wird der DNS-Server mit den Standardeinstellungen erstellt.

##### Antworten

| Code | Beschreibung                                     |
| ---- | ------------------------------------------------ |
| 200  | DNS-Server erstellt                              |
| 400  | Validierung fehlgeschlagen                       |
| 429  | Die Anzahl der DNS-Server hat das Limit erreicht |

### /oapi/v1/dns_servers/{dns_server_id}

#### DELETE

##### Zusammenfassung

Entfernt einen DNS-Server

##### Beschreibung

Entfernt einen DNS-Server. Alle Geräte, die mit diesem DNS-Server verbunden sind, werden auf den Standard-DNS-Server verschoben. Das Löschen des Standard-DNS-Servers ist nicht zulässig.

##### Parameter

| Name            | Gefunden in | Beschreibung | Erforderlich | Schema |
| --------------- | ----------- | ------------ | ------------ | ------ |
| dns_server_id | path        |              | Ja           | string |

##### Antworten

| Code | Beschreibung              |
| ---- | ------------------------- |
| 200  | DNS-Server entfernt       |
| 404  | DNS-Server nicht gefunden |

#### GET

##### Zusammenfassung

Ruft einen vorhandenen DNS-Server nach ID ab

##### Parameter

| Name            | Gefunden in | Beschreibung | Erforderlich | Schema |
| --------------- | ----------- | ------------ | ------------ | ------ |
| dns_server_id | path        |              | Ja           | string |

##### Antworten

| Code | Beschreibung              |
| ---- | ------------------------- |
| 200  | DNS-Server-Informationen  |
| 404  | DNS-Server nicht gefunden |

#### PUT

##### Zusammenfassung

Aktualisiert einen vorhandenen DNS-Server

##### Parameter

| Name            | Gefunden in | Beschreibung | Erforderlich | Schema |
| --------------- | ----------- | ------------ | ------------ | ------ |
| dns_server_id | path        |              | Ja           | string |

##### Antworten

| Code | Beschreibung               |
| ---- | -------------------------- |
| 200  | DNS-Server aktualisiert    |
| 400  | Validierung fehlgeschlagen |
| 404  | DNS-Server nicht gefunden  |

### /oapi/v1/dns_servers/{dns_server_id}/settings

#### PUT

##### Zusammenfassung

Aktualisiert DNS-Server-Einstellungen

##### Parameter

| Name            | Gefunden in | Beschreibung | Erforderlich | Schema |
| --------------- | ----------- | ------------ | ------------ | ------ |
| dns_server_id | path        |              | Ja           | string |

##### Antworten

| Code | Beschreibung                          |
| ---- | ------------------------------------- |
| 200  | DNS-Server-Einstellungen aktualisiert |
| 400  | Validierung fehlgeschlagen            |
| 404  | DNS-Server nicht gefunden             |

### /oapi/v1/filter_lists

#### GET

##### Zusammenfassung

Abrufen von Filterlisten

##### Antworten

| Code | Beschreibung     |
| ---- | ---------------- |
| 200  | Liste der Filter |

### /oapi/v1/oauth_token

#### POST

##### Zusammenfassung

Erzeugt Zugriffs- und Aktualisierungs-Token

##### Antworten

| Code | Beschreibung                                                                |
| ---- | --------------------------------------------------------------------------- |
| 200  | Zugriffstoken ausgestellt                                                   |
| 400  | Erforderliche Parameter fehlen                                              |
| 401  | Ungültige Anmeldedaten, MFA-Token oder Aktualisierungs-Token bereitgestellt |

null

### /oapi/v1/query_log

#### DELETE

##### Zusammenfassung

Leert das Anfragenprotokoll

##### Antworten

| Code | Beschreibung                    |
| ---- | ------------------------------- |
| 202  | Anfragenprotokoll wurde geleert |

#### GET

##### Zusammenfassung

Ruft das Anfragenprotokoll ab

##### Parameter

| Name               | Gefunden in | Beschreibung                                                                               | Erforderlich | Schema                                              |
| ------------------ | ----------- | ------------------------------------------------------------------------------------------ | ------------ | --------------------------------------------------- |
| time_from_millis | query       | „Zeit von” in Millisekunden (einschließlich)                                               | Ja           | long                                                |
| time_to_millis   | query       | „Zeit bis” in Millisekunden (einschließlich)                                               | Ja           | long                                                |
| devices            | query       | Nach Geräten filtern                                                                       | Nein         | [ string ]                                          |
| countries          | query       | Nach Ländern filtern                                                                       | Nein         | [ string ]                                          |
| companies          | query       | Nach Unternehmen filtern                                                                   | Nein         | [ string ]                                          |
| statuses           | query       | Nach Status filtern                                                                        | Nein         | [ [FilteringActionStatus](#FilteringActionStatus) ] |
| categories         | query       | Nach Kategorien filtern                                                                    | Nein         | [ [CategoryType](#CategoryType) ]                   |
| search             | query       | Nach Domainnamen filtern                                                                   | Nein         | string                                              |
| limit              | query       | Begrenzt die Anzahl der zurückzugebenden Datensätze                                        | Nein         | integer                                             |
| cursor             | query       | Paginierungs-Cursor Verwendet den Cursor aus der Antwort, um durch die Seiten zu blättern. | Nein         | string                                              |

##### Antworten

| Code | Beschreibung      |
| ---- | ----------------- |
| 200  | Anfragenprotokoll |

### /oapi/v1/revoke_token

#### POST

##### Zusammenfassung

Widerruft ein Aktualisierungs-Token

##### Parameter

| Name          | Gefunden in | Beschreibung          | Erforderlich | Schema |
| ------------- | ----------- | --------------------- | ------------ | ------ |
| refresh_token | query       | Aktualisierungs-Token | Ja           | string |

##### Antworten

| Code | Beschreibung                     |
| ---- | -------------------------------- |
| 200  | Aktualisierungs-Token widerrufen |

null

### /oapi/v1/stats/categories

#### GET

##### Zusammenfassung

Abrufen von Kategorienstatistiken

##### Parameter

| Name               | Gefunden in | Beschreibung                                 | Erforderlich | Schema     |
| ------------------ | ----------- | -------------------------------------------- | ------------ | ---------- |
| time_from_millis | query       | „Zeit von” in Millisekunden (einschließlich) | Ja           | long       |
| time_to_millis   | query       | „Zeit bis” in Millisekunden (einschließlich) | Ja           | long       |
| devices            | query       | Nach Geräten filtern                         | Nein         | [ string ] |
| countries          | query       | Nach Ländern filtern                         | Nein         | [ string ] |

##### Antworten

| Code | Beschreibung                  |
| ---- | ----------------------------- |
| 200  | Kategoriestatistiken erhalten |
| 400  | Validierung fehlgeschlagen    |

### /oapi/v1/stats/companies

#### GET

##### Zusammenfassung

Abrufen von Unternehmensstatistiken

##### Parameter

| Name               | Gefunden in | Beschreibung                                 | Erforderlich | Schema     |
| ------------------ | ----------- | -------------------------------------------- | ------------ | ---------- |
| time_from_millis | query       | „Zeit von” in Millisekunden (einschließlich) | Ja           | long       |
| time_to_millis   | query       | „Zeit bis” in Millisekunden (einschließlich) | Ja           | long       |
| devices            | query       | Nach Geräten filtern                         | Nein         | [ string ] |
| countries          | query       | Nach Ländern filtern                         | Nein         | [ string ] |

##### Antworten

| Code | Beschreibung                      |
| ---- | --------------------------------- |
| 200  | Unternehmensstatistiken empfangen |
| 400  | Validierung fehlgeschlagen        |

### /oapi/v1/stats/companies/detailed

#### GET

##### Zusammenfassung

Ruft detaillierte Unternehmensstatistiken ab

##### Parameter

| Name               | Gefunden in | Beschreibung                                 | Erforderlich | Schema     |
| ------------------ | ----------- | -------------------------------------------- | ------------ | ---------- |
| time_from_millis | query       | „Zeit von” in Millisekunden (einschließlich) | Ja           | long       |
| time_to_millis   | query       | „Zeit bis” in Millisekunden (einschließlich) | Ja           | long       |
| devices            | query       | Nach Geräten filtern                         | Nein         | [ string ] |
| countries          | query       | Nach Ländern filtern                         | Nein         | [ string ] |
| cursor             | query       | Paginierungs-Cursor                          | Nein         | string     |

##### Antworten

| Code | Beschreibung                                   |
| ---- | ---------------------------------------------- |
| 200  | Detaillierte Unternehmensstatistiken empfangen |
| 400  | Validierung fehlgeschlagen                     |

### /oapi/v1/stats/countries

#### GET

##### Zusammenfassung

Abrufen von Länderstatistiken

##### Parameter

| Name               | Gefunden in | Beschreibung                                 | Erforderlich | Schema     |
| ------------------ | ----------- | -------------------------------------------- | ------------ | ---------- |
| time_from_millis | query       | „Zeit von” in Millisekunden (einschließlich) | Ja           | long       |
| time_to_millis   | query       | „Zeit bis” in Millisekunden (einschließlich) | Ja           | long       |
| devices            | query       | Nach Geräten filtern                         | Nein         | [ string ] |
| countries          | query       | Nach Ländern filtern                         | Nein         | [ string ] |

##### Antworten

| Code | Beschreibung               |
| ---- | -------------------------- |
| 200  | Länderstatistiken erhalten |
| 400  | Validierung fehlgeschlagen |

### /oapi/v1/stats/devices

#### GET

##### Zusammenfassung

Abrufen von Gerätestatistiken

##### Parameter

| Name               | Gefunden in | Beschreibung                                 | Erforderlich | Schema     |
| ------------------ | ----------- | -------------------------------------------- | ------------ | ---------- |
| time_from_millis | query       | „Zeit von” in Millisekunden (einschließlich) | Ja           | long       |
| time_to_millis   | query       | „Zeit bis” in Millisekunden (einschließlich) | Ja           | long       |
| devices            | query       | Nach Geräten filtern                         | Nein         | [ string ] |
| countries          | query       | Nach Ländern filtern                         | Nein         | [ string ] |

##### Antworten

| Code | Beschreibung                |
| ---- | --------------------------- |
| 200  | Gerätestatistiken empfangen |
| 400  | Validierung fehlgeschlagen  |

### /oapi/v1/stats/domains

#### GET

##### Zusammenfassung

Ruft Domainstatistiken ab

##### Parameter

| Name               | Gefunden in | Beschreibung                                 | Erforderlich | Schema     |
| ------------------ | ----------- | -------------------------------------------- | ------------ | ---------- |
| time_from_millis | query       | „Zeit von” in Millisekunden (einschließlich) | Ja           | long       |
| time_to_millis   | query       | „Zeit bis” in Millisekunden (einschließlich) | Ja           | long       |
| devices            | query       | Nach Geräten filtern                         | Nein         | [ string ] |
| countries          | query       | Nach Ländern filtern                         | Nein         | [ string ] |

##### Antworten

| Code | Beschreibung                |
| ---- | --------------------------- |
| 200  | Domainstatistiken empfangen |
| 400  | Validierung fehlgeschlagen  |

### /oapi/v1/stats/time

#### GET

##### Zusammenfassung

Ruft Zeitstatistiken ab

##### Parameter

| Name               | Gefunden in | Beschreibung                                 | Erforderlich | Schema     |
| ------------------ | ----------- | -------------------------------------------- | ------------ | ---------- |
| time_from_millis | query       | „Zeit von” in Millisekunden (einschließlich) | Ja           | long       |
| time_to_millis   | query       | „Zeit bis” in Millisekunden (einschließlich) | Ja           | long       |
| devices            | query       | Nach Geräten filtern                         | Nein         | [ string ] |
| countries          | query       | Nach Ländern filtern                         | Nein         | [ string ] |

##### Antworten

| Code | Beschreibung               |
| ---- | -------------------------- |
| 200  | Zeitstatistiken empfangen  |
| 400  | Validierung fehlgeschlagen |

### /oapi/v1/web_services

#### GET

##### Zusammenfassung

Listet Webdienste auf

##### Antworten

| Code | Beschreibung         |
| ---- | -------------------- |
| 200  | Liste der Webdienste |
