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

This article contains documentation for [AdGuard DNS API](private-dns/api/overview.md). For the complete AdGuard DNS API changelog, visit [this page](private-dns/api/changelog.md).

## Aktuelle Version: 1.9

### /oapi/v1/account/limits

#### GET

##### Zusammenfassung

Gets account limits

##### Antworten

| Code | Beschreibung                         |
| ---- | ------------------------------------ |
| 200  | Informationen zu Kontobeschränkungen |

### /oapi/v1/dedicated_addresses/ipv4

#### GET

##### Zusammenfassung

Lists dedicated IPv4 addresses

##### Antworten

| Code | Beschreibung                        |
| ---- | ----------------------------------- |
| 200  | Liste der dedizierten IPv4-Adressen |

#### POST

##### Zusammenfassung

Allocates new IPv4

##### Antworten

| Code | Beschreibung                                      |
| ---- | ------------------------------------------------- |
| 200  | Neue IPv4 erfolgreich zugewiesen                  |
| 429  | Dedizierte IPv4-Anzahl hat den Grenzwert erreicht |

### /oapi/v1/devices

#### GET

##### Zusammenfassung

Lists devices

##### Antworten

| Code | Beschreibung     |
| ---- | ---------------- |
| 200  | Liste der Geräte |

#### POST

##### Zusammenfassung

Creates a new device

##### Antworten

| Code | Beschreibung                                 |
| ---- | -------------------------------------------- |
| 200  | Gerät erstellt                               |
| 400  | Validierung fehlgeschlagen                   |
| 429  | Die Anzahl der Geräte hat das Limit erreicht |

### /oapi/v1/devices/\{device_id\}

#### DELETE

##### Zusammenfassung

Removes a device

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

Gets an existing device by ID

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

Updates an existing device

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

### /oapi/v1/devices/\{device_id\}/dedicated_addresses

#### GET

##### Zusammenfassung

List dedicated IPv4 and IPv6 addresses for a device

##### Parameter

| Name      | Gefunden in | Beschreibung | Erforderlich | Schema |
| --------- | ----------- | ------------ | ------------ | ------ |
| device_id | path        |              | Ja           | string |

##### Antworten

| Code | Beschreibung             |
| ---- | ------------------------ |
| 200  | Dedizierte IPv4 und IPv6 |

### /oapi/v1/devices/\{device_id\}/dedicated_addresses/ipv4

#### DELETE

##### Zusammenfassung

Unlink dedicated IPv4 from the device

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

Link dedicated IPv4 to the device

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

### /oapi/v1/devices/\{device_id\}/doh.mobileconfig

#### GET

##### Zusammenfassung

Gets DNS-over-HTTPS .mobileconfig file.

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

### /oapi/v1/devices/\{device_id\}/doh_password/reset

#### PUT

##### Zusammenfassung

Generate and set new DNS-over-HTTPS password

##### Parameter

| Name      | Gefunden in | Beschreibung | Erforderlich | Schema |
| --------- | ----------- | ------------ | ------------ | ------ |
| device_id | path        |              | Ja           | string |

##### Antworten

| Code | Beschreibung                                      |
| ---- | ------------------------------------------------- |
| 200  | DNS-over-HTTPS-Passwort erfolgreich zurückgesetzt |
| 404  | Gerät nicht gefunden                              |

### /oapi/v1/devices/\{device_id\}/dot.mobileconfig

#### GET

##### Zusammenfassung

Gets DNS-over-TLS .mobileconfig file.

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

### /oapi/v1/devices/\{device_id\}/settings

#### PUT

##### Zusammenfassung

Updates device settings

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

Lists DNS servers that belong to the user.

##### Beschreibung

Lists DNS servers that belong to the user. By default there is at least one default server.

##### Antworten

| Code | Beschreibung         |
| ---- | -------------------- |
| 200  | Liste der DNS-Server |

#### POST

##### Zusammenfassung

Creates a new DNS server

##### Beschreibung

Creates a new DNS server. You can attach custom settings, otherwise DNS server will be created with default settings.

##### Antworten

| Code | Beschreibung                                     |
| ---- | ------------------------------------------------ |
| 200  | DNS-Server erstellt                              |
| 400  | Validierung fehlgeschlagen                       |
| 429  | Die Anzahl der DNS-Server hat das Limit erreicht |

### /oapi/v1/dns_servers/\{dns_server_id\}

#### DELETE

##### Zusammenfassung

Removes a DNS server

##### Beschreibung

Removes a DNS server. All devices attached to this DNS server will be moved to the default DNS server. Deleting the default DNS server is forbidden.

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

Gets an existing DNS server by ID

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

Updates an existing DNS server

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

### /oapi/v1/dns_servers/\{dns_server_id\}/settings

#### PUT

##### Zusammenfassung

Updates DNS server settings

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

Gets filter lists

##### Antworten

| Code | Beschreibung     |
| ---- | ---------------- |
| 200  | Liste der Filter |

### /oapi/v1/oauth_token

#### POST

##### Zusammenfassung

Generates Access and Refresh token

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

Clears query log

##### Antworten

| Code | Beschreibung                    |
| ---- | ------------------------------- |
| 202  | Anfragenprotokoll wurde geleert |

#### GET

##### Zusammenfassung

Gets query log

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

Revokes a Refresh Token

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

Gets categories statistics

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

Gets companies statistics

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

Gets detailed companies statistics

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

Gets countries statistics

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

Gets devices statistics

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

Gets domains statistics

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

Gets time statistics

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

Lists web services

##### Antworten

| Code | Beschreibung         |
| ---- | -------------------- |
| 200  | Liste der Webdienste |
