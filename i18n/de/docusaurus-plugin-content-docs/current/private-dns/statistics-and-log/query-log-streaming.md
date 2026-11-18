---
title: Anfragenprotokoll-Streaming
sidebar_position: 6
---

:::info

_Anfragenprotokoll-Streaming_ befindet sich derzeit im Betatest. Während dieser Phase erfolgen Konfiguration und Einrichtung halbmanuell und in Abstimmung mit dem AdGuard-Team.

:::

Dieser Artikel beschreibt, wie Sie Einstellungen für das _Anfragenprotokoll-Streaming_ in AdGuard DNS vornehmen und verwenden. Mit dieser Funktion können Nutzer von AdGuard DNS Enterprise Rohdaten von DNS-Abfragen automatisch in einen externen Speicher exportieren, um Sicherheits-, Analyse- oder Compliance-Anforderungen zu erfüllen.

## Was ist Anfragenprotokoll-Streaming?

_Anfragenprotokoll-Streaming_ ermöglicht es AdGuard DNS Enterprise-Nutzern, rohe DNS-Abfrageereignisse automatisch in ihren eigenen externen, S3-kompatiblen Speicher zu exportieren — ohne auf manuelles API-Polling per Anleitung angewiesen zu sein. Nach dem Export können diese Protokolle in SIEM-Systeme, SOC-Plattformen, Data Lakes oder interne Statistik-Pipelines eingespeist werden, wodurch Sie programmatischen Zugriff auf rohe Abfragedaten für Sicherheitsüberwachung, Auditing und Compliance erhalten.

Ereignisse werden in regelmäßigen, komprimierten Batches gesammelt und zugestellt; der Zeitpunkt der Zustellung hängt vom Datenverkehrsvolumen ab (siehe den Abschnitt [_Zustellungsgarantien und -beschränkungen_](#delivery-guarantees-and-limitations) für Details).

## Verfügbarkeit und Voraussetzungen

Um _Anfragenprotokoll-Streaming_ zu verwenden, müssen folgende Voraussetzungen erfüllt sein:

- **Enterprise-Paket:** Diese Funktion steht ausschließlich AdGuard DNS Enterprise-Nutzern zur Verfügung. Wenn das Konto nicht mehr über ein Enterprise-Paket verfügt, wird der Protokoll-Streaming-Service deaktiviert. Für eine freiwillige Deaktivierung siehe die FAQ unten.
- **Aktives Anfragenprotokoll:** In Ihrer AdGuard DNS-Konfiguration muss die Anfrageprotokollierung aktiviert sein.
- **S3-kompatibler Bucket:** Sie müssen über einen aktiven, beschreibbaren Bucket bei Amazon S3 oder einem anderen S3-kompatiblen Cloud-Speicheranbieter (z. B. Cloudflare R2, Backblaze B2, Wasabi oder MinIO) verfügen.
- **Zugangsdaten:** Sie müssen die Verbindungsparameter und Zugangsdaten angeben, die für AdGuard DNS erforderlich sind, um Objekte in Ihren Bucket zu schreiben.

## Wie man die Einrichtung anfordert

Da die Konfiguration derzeit manuell von unserem Infrastrukturteam durchgeführt wird, befolgen Sie bitte diese Schritte, um Protokoll-Streaming anzufordern:

### Schritt 1: Bereiten Sie Ihren S3-Bucket vor

1. Erstellen Sie einen dedizierten Bucket oder Pfad/Präfix in Ihrem S3-kompatiblen Speicher.
2. Erteilen Sie den Anmeldeinformationen, die Sie mit AdGuard teilen, die mindestens erforderlichen Erlaubnisse. Die Anmeldeinformationen müssen mindestens über eine Schreiberlaubnis (`s3:PutObject`) für den angegebenen Pfad verfügen.

### Schritt 2: Kontaktieren Sie Ihren Account-Manager oder den AdGuard-Kundensupport

Wenden Sie sich an Ihren zuständigen AdGuard-Account-Manager oder kontaktieren Sie den AdGuard-Kundensupport unter `support@adguard-dns.io` und geben Sie das Zielkonto oder die Zielorganisation an, für die Protokolle gestreamt werden sollen.

### Schritt 3: Geben Sie Konfigurationsdetails bereit

Sobald die Anfrage genehmigt wurde, wird der Kundensupport weitere Anweisungen bereitstellen und die spezifischen Konfigurationsparameter anfordern, die für die Einrichtung des Protokoll-Streams erforderlich sind.

### Schritt 4: Warten Sie, bis der Protokoll-Stream aktiviert ist

Sobald der Protokoll-Stream aktiviert ist, wird automatisch eine `.healthcheck`-Datei, die `ok` enthält, in den Ziel-Bucket geschrieben. Wenn während der Einrichtung Verbindungs- oder Schreibfehler auftreten, werden Sie benachrichtigt. Sobald der Stream aktiviert ist, ist keine weitere Aktion erforderlich.

## Protokollformat und S3-Objektstruktur

Protokolle werden als **minimierte JSON-Dateien bereitgestellt, die ein Array von Objekten enthalten**, wobei jedes Objekt innerhalb des Arrays ein einzelnes DNS-Abfrageereignis darstellt.

### Komprimierung und Kodierung

- **Kodierung:** UTF-8
- **Komprimierung:** Die Gzip-Komprimierung ist obligatorisch und wird automatisch auf alle exportierten Protokolldateien angewendet.

### Layout und Benennung von S3-Objekten

Protokolldateien werden unter Verwendung einer strukturierten Ordnerhierarchie und einer spezifischen zeitstempelbasierten Benennungskonvention in den S3-kompatiblen Bucket geschrieben, um effiziente partitionsbasierte Abfragen und die Ingestion zu erleichtern.

- **Objektpräfix (Pfad):** `/logs/%Y/%m/%d/` (organisiert nach Jahr, Monat und Tag)
- **Dateinamenmuster:** `%H-%M-%S-%3f.json.gz` (Stunde-Minute-Sekunde-Millisekunde der Batch-Generierung)

**Beispiel für einen S3-Objektschlüssel:**

`logs/2026/08/24/14-02-02-123.json.gz`

### Dateischemastruktur

Im Gegensatz zu JSON Lines (JSONL) ist die gelieferte Datei ein standardmäßiges, einzeiliges, minimiertes JSON-Array.

**Beispiel für die bereitgestellte minimierte Dateistruktur (unkomprimierte Darstellung):**

```json

{"ASN":1234,
"AccountId":4432,
"Action":1,
"CategoryId":null,
"ClientCountry":null,
"DNSSEC":0,
"DeviceId":"54cff1db",
"DnsServerId":"b13fe9a2",
"DomainFQDN":"qwerty20.onlineteam.ru.",
"ElapsedMs":51,
"FilterListId":null,
"FilterRule":null,
"IpAddress":null,
"Protocol":8,
"RequestIdNum":65027,
"RequestType":1,
"ResponseCode":0,
"ResponseCountry":"RU",
"TimeAddedMs":1787671509268,
"TrackerId":null
}
```

## Feldreferenz {#fields-reference}

Die nachstehende Tabelle beschreibt das Schema für die exportierten DNS-Anfragenprotokolle.

| Feld              | Typ           | Erforderlich | Beschreibung                                                                                                                                                                                                                                                                                                                                                   | Beispiel               |
| :---------------- | :------------ | :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------- |
| `AccountId`       | integer       | Nein         | Erkannte Account-ID, falls vorhanden.                                                                                                                                                                                                                                                                                                          | `1234`                 |
| `DnsServerId`     | string        | Nein         | Erkannte Profil-ID, auch bekannt als DNS-ID oder DNS-Server-ID, falls vorhanden.                                                                                                                                                                                                                                                               | `"prof1234"`           |
| `DeviceId`        | string        | Nein         | Erkannte Geräte-ID, falls vorhanden.                                                                                                                                                                                                                                                                                                           | `"dev1234"`            |
| `ClientCountry`   | string        | Nein         | Land der IP-Adresse des Clients als ISO 3166-1-Alpha-2-Code. Fehlend, wenn es nicht festgestellt werden konnte. `XK` steht für Kosovo.                                                                                                                                                                         | `"AU"`                 |
| `ResponseCountry` | string        | Nein         | Land der ersten IP-Adresse in der Antwort als ISO-3166-1-Alpha-2-Code. Fehlend, wenn es nicht festgestellt werden konnte. `XK` steht für Kosovo; `QN` bedeutet „nicht zutreffend“, wenn der Antworttyp keine IP-Adressinformationen enthält.                                                                   | `"US"`                 |
| `DomainFQDN`      | string        | Ja           | Angeforderter DNS-Ressourcenname (FQDN).                                                                                                                                                                                                                                                                                    | `"example.com."`       |
| `FilterListId`    | string        | Nein         | ID des ersten Filters, dessen Regeln mit der Abfrage übereinstimmten. Wird ausgelassen, wenn keine Regel zutrifft. Zu den reservierten Werten gehören `adult_blocking`, `blocked_service`, `category`, `custom`, `general_safe_search`, `newly_registered_domains`, `safe_browsing` und `youtube_safe_search`. | `"adguard_dns_filter"` |
| `FilterRule`      | string        | Nein         | Erste Regel, die zur Anfrage passte. Für `blocked_service` enthält die ID des blockierten Dienstes. Enthält für `category` die Kategorie-ID. Wird ausgelassen, wenn keine Regel zutrifft.                                                                                                      | `"example.com^"`       |
| `TimeAddedMs`     | integer       | Ja           | Unix-Zeitstempel, zu dem die Anfrage empfangen wurde, in Millisekunden.                                                                                                                                                                                                                                                                        | `1629974298000`        |
| `ASN`             | integer       | Nein         | Autonomous System Number (ASN), die anhand der IP-Adresse des Clients erkannt wurde, falls vorhanden.                                                                                                                                                                                                                       | `1234`                 |
| `ElapsedMs`       | integer       | Ja           | Zeit, die seit Beginn der Anfragebearbeitung vergangen ist, in Millisekunden.                                                                                                                                                                                                                                                                  | `3`                    |
| `RequestType`     | integer       | Ja           | Numerischer DNS-Ressourceneintragstyp der Abfrage, zum Beispiel `1` für einen `A`-Eintrag.                                                                                                                                                                                                                                                     | `1`                    |
| `RequestIdNum`    | integer       | Ja           | Zufällige vorzeichenlose 16-Bit-Ganzzahl, die zur Vereinfachung der Deduplizierung verwendet wird, wenn das alte `u`-Feld nicht verwendet wird.                                                                                                                                                                                                | `12345`                |
| `Action`          | integer       | Ja           | Filteraktion: `0` unbekannt, `1` keine Filterung, `2` Anfrage blockiert, `3` Antwort blockiert, `4` Anfrage durch Freigabeliste erlaubt, `5` Antwort durch Freigabeliste erlaubt, `6` Anfrage oder Antwort geändert/umgeschrieben.                                                                                             | `2`                    |
| `DNSSEC`          | integer       | Ja           | Ob die Antwort mit DNSSEC validiert wurde: `0` = Nein, `1` = Ja.                                                                                                                                                                                                                                                               | `1`                    |
| `Protocol`        | integer       | Ja           | DNS-Protokoll: `0` unbekannt, `3` DNS-over-HTTPS, `4` DNS-over-QUIC, `5` DNS-over-TLS, `8` Plain DNS, `9` DNSCrypt.                                                                                                                                                                                                            | `3`                    |
| `ResponseCode`    | integer       | Ja           | An den Client gesendeter DNS-Antwortcode (`RCODE`).                                                                                                                                                                                                                                                                         | `0`                    |
| `IpAddress`       | string        | Nein         | Client-IP-Adresse. Wird ausgelassen, wenn die IP-Protokollierung für das entsprechende Profil deaktiviert ist.                                                                                                                                                                                                                 | `"1.2.3.4"`            |
| `TrackerId`       | string / null | Ja           | Tracker-ID, die durch Abgleich der angefragten Domain mit der Anreicherungstabelle `dns-trackers` ermittelt wurde. Wird auf `null` gesetzt, wenn kein Tracker gefunden wird.                                                                                                                                                   | `"google"`             |
| `CategoryId`      | string / null | Ja           | Tracker-Kategorie-ID, die von der Anreicherungsabfrage `dns-trackers` zurückgegeben wird. Wird auf `null` gesetzt, wenn kein Tracker gefunden wird.                                                                                                                                                                            | `"search_engines"`     |

## Zustellgarantien und Einschränkungen {#delivery-guarantees-and-limitations}

Zu verstehen, wie Protokolle gebündelt und übermittelt werden, ist entscheidend für das Design Ihrer SIEM-Ingestion-Pipeline.

- **Nur-Batch-Bereitstellung:** Protokolle werden ausschließlich in Batches exportiert, nicht in Echtzeit. Um das System stabil zu halten und sich an unterschiedliche Datenverkehr-Level anzupassen, sind sowohl Batch-Größen als auch Zustellungsintervalle flexibel. Genaue Dateigrößen und Upload-Zeiten sind nicht festgelegt und können variieren, während das System optimiert wird.
- **Erwartete Latenz und potenzielle Verzögerungen:** Obwohl wir uns um eine minimale Latenz bemühen, gibt es eine erwartete Zustelllatenz. Gelegentliche Verzögerungen sind aufgrund von hohem Netzwerkdatenverkehr, Systemauslastung oder Verarbeitungswarteschlangen möglich.
- **At-least-once-Zustellung:** Die Protokollzustellung wird auf At-least-once-Basis garantiert. Während dies sicherstellt, dass alle Ereignisse erfolgreich zugestellt werden, können gelegentlich doppelte Protokolleinträge in das Ziel-Bucket geschrieben werden (beispielsweise bei Netzwerk-Wiederholungsversuchen oder der Wiederherstellung nach vorübergehenden Verbindungsabbrüchen). Eine Exactly-Once-Zustellung wird nicht garantiert.
- **Clientseitige Deduplizierung erforderlich:** Der Client muss in der Lage sein, Ereignisse in seinem SIEM oder Data Lake zu deduplizieren. Die Deduplizierung sollte mithilfe einer Kombination aus dem `timestamp` des Ereignisses und anderen einzigartigen Bezeichnern gehandhabt werden.
- **Keine Reihenfolgegarantie:** Aufgrund der verteilten Natur unserer globalen DNS-Infrastruktur wird die chronologische Reihenfolge von Ereignissen nicht garantiert. Ereignisse können innerhalb einer einzelnen Protokolldatei oder über verschiedene Batches hinweg in ungeordneter Reihenfolge eintreffen.
- **Unerreichbares Ziel (Wiederholungsversuche oder Verwerfungen):** Wenn Ihr S3-Endpunkt oder -Bucket unerreichbar wird (z. B. aufgrund abgelaufener Anmeldeinformationen oder Netzwerkausfällen aufseiten Ihres Anbieters), kann AdGuard DNS Wiederholungsversuche unternehmen. Abhängig von den Backend-Limits können während des Ausfalls generierte Protokollereignisse jedoch verworfen (übersprungen) werden, um einen Pufferüberlauf zu verhindern.
- **Kein historischer Backfill:** Protokoll-Streaming ist streng zukunftsorientiert. Das Exportieren historischer Protokolle, die vor der Aktivierung der Streaming-Funktion generiert wurden, wird nicht unterstützt.

## Sicherheit und Privatsphäre

DNS-Anfragenprotokolle enthalten hochsensible Netzwerk- und Metadaten. Um die Sicherheit der Daten Ihrer Organisation zu gewährleisten, beachten Sie bitte die folgenden Sicherheitsgrundsätze:

- **Sensible DNS-Daten:** Beachten Sie, dass gestreamte Protokolle sensible DNS-Metadaten enthalten können, einschließlich abgefragter Domains, Gerätebezeichner, Client-IP-Adressen und geografischer Details Ihrer Clients.
- **Client-Verantwortung:** Der Client ist allein für die Gesamtsicherheit seines S3-kompatiblen Buckets verantwortlich, einschließlich der Konfiguration und Wartung sicherer Bucket-Richtlinien und Zugriffskontrolllisten (ACLs).
- **Zugriff einschränken:** Wir empfehlen dringend, den Zugriff auf den Bucket auf das absolut notwendige Minimum zu beschränken.
- **Rotation von Anmeldeinformationen:** Anmeldeinformationen (Zugriffsschlüssel und Geheimnisse), die AdGuard DNS für den Bucket-Zugriff bereitgestellt werden, sollten gemäß den internen Sicherheitsrichtlinien Ihrer Organisation regelmäßig rotiert werden. Da das Ändern von Schlüsseln aufseiten des Cloud-Anbieters jedoch sofort die Schreiberlaubnis von AdGuard widerruft, müssen neue Anmeldeinformationen gleichzeitig in AdGuard aktualisiert werden, um eine Unterbrechung der Protokollübermittlung zu verhindern.
- **Auswirkungen der Dashboard-Protokollierungseinstellungen:** Wenn bestimmte Arten der Protokollierung in Ihren AdGuard DNS-Kontoeinstellungen deaktiviert sind, wirkt sich dies direkt auf das Schema Ihrer exportierten Protokolle aus. Wenn Sie beispielsweise die Protokollierung bestimmter Gerätemetadaten deaktivieren, werden diese Felder in den gestreamten JSON-Dateien ausgelassen (oder mit Nullwerten befüllt).
- **Keine Umgehung von Datenschutzeinstellungen:** AdGuard DNS respektiert Ihre Konfiguration strikt. Unter keinen Umständen wird AdGuard die Einstellungen für Privatsphäre und Datenanonymisierung Ihres Kontos beim Exportieren von Ereignissen in Ihren externen Speicher umgehen, außer Kraft setzen oder unterlaufen.

## Wie man Protokolle in SIEM einliest

Da AdGuard DNS Abfrageprotokolle an einen S3-kompatiblen Speicher streamt, erfolgt die Konfiguration der Ingestion-Pipeline in Ihre SIEM-Plattform vollständig auf Ihrer Seite.

- **S3-kompatibles Ziel:** AdGuard DNS liefert unverarbeitete Protokolldateien direkt an Ihren vorgesehenen S3-Bucket, der als zentrale Landing Zone für Ihre Sicherheitsdaten dient.
- **Benutzerdefinierte Ingestion-Pipeline:** Sie können diese Protokolldateien mithilfe Ihrer eigenen Datenpipelines, benutzerdefinierten Skripte oder ETL-Prozesse verbinden und in Ihr SIEM- oder Analysesystem einspeisen.
- **Standard-S3-Konnektoren:** Für wichtige Plattformen wie **Splunk**, **Microsoft Sentinel** und **Elastic** nutzen Sie in der Regel deren jeweilige native S3-Konnektoren, Eingaben oder Protokollsammler.
- **Infrastrukturabhängiges Setup:** Die genaue Konfiguration, das Index-Mapping und die Parsing-Regeln in Ihrem SIEM hängen stark von der spezifischen Infrastruktur, den Datenschemata und den Aufbewahrungsrichtlinien Ihrer Organisation ab.

## Fehlersuche

Dieser Abschnitt beschreibt häufige Integrationsprobleme, die bei den Einstellungen oder bei der Ausführung des Anfragenprotokoll-Streams auftreten können, sowie Schritte, um sie aufzulösen.

### Protokolle erscheinen nicht im Bucket

**Mögliche Ursache:** Die Konfiguration auf der AdGuard-Seite ist noch nicht abgeschlossen oder es wurden fehlerhafte Verbindungsparameter angegeben.

**Lösung:** Vergewissern Sie sich, dass Sie eine Bestätigungs-E-Mail von Ihrem AdGuard-Account-Manager erhalten haben, aus der hervorgeht, dass die Stream-Konfiguration abgeschlossen ist. Überprüfen Sie alle geteilten Parameter (Bucket-Name, Endpunkt, Region) noch einmal.

### Falsche Bucket-Erlaubnisse

**Mögliche Ursache:** Die mit AdGuard geteilten Anmeldeinformationen verfügen über keine ausreichende Erlaubnis, um Objekte in den Bucket zu schreiben.

**Lösung:** Stellen Sie sicher, dass die mit den bereitgestellten Zugriffsschlüsseln verknüpfte AWS-IAM-Richtlinie (oder das Äquivalent Ihres Anbieters) ausdrücklich die `s3:PutObject`-Erlaubnis für den Ziel-Bucket und das Präfix gewährt.

### S3-Zugangsdaten abgelaufen

**Mögliche Ursache:** Die Zugangsdaten sind abgelaufen oder wurden gemäß den internen Sicherheitsrichtlinien Ihrer Organisation ausgetauscht/widerrufen.

**Lösung:** Generieren Sie einen neuen Satz von Zugriffs- und Geheimschlüsseln und teilen Sie diese sicher mit Ihrem AdGuard-Account-Manager, um Ihre Stream-Konfiguration zu aktualisieren.

### Im Protokollziel sind Duplikate aufgetreten

**Mögliche Ursache:** Netzwerk-Wiederholungsversuche, die während vorübergehender Netzwerkunterbrechungen durch das „At-least-once“-Zustellungsmodell ausgelöst werden.

**Lösung:** Dies ist ein erwartetes Verhalten in verteilten Protokollierungspipelines. Konfigurieren Sie Deduplizierungsregeln in Ihrem SIEM oder Ihrer Datenbank unter Verwendung einer Kombination aus `timestamp`, `domain` und `device_id` (oder anderen einzigartigen Ereignisbezeichnern).

### Die Latenz ist höher als erwartet

**Mögliche Ursache:** Vorübergehende Netzwerküberlastung, Systemauslastung oder Pufferverzögerungen auf Seiten des Cloud-Anbieters.

**Lösung:** Prüfen Sie den Betriebsstatus Ihres S3-kompatiblen Cloud-Anbieters. Wenn Verzögerungen bei der Protokollübermittlung dauerhaft Ihr erwartetes Batch-Intervall überschreiten (z. B. mehr als 15–30 Minuten), wenden Sie sich an den AdGuard-Support, um den Status unserer ausgehenden Übermittlungswarteschlangen zu überprüfen.

### Fehlende Felder in den Protokollen

**Mögliche Ursache:** Bestimmte Protokollierungs- oder Datenschutzfunktionen (wie die Protokollierung von Client-IPs oder die Erfassung von Gerätemetadaten) sind in den Einstellungen Ihrer AdGuard DNS-Übersicht deaktiviert.

**Lösung:** Überprüfen Sie Ihre Datenschutz- und Protokollierungseinstellungen im AdGuard DNS-Dashboard. Der Protokoll-Streaming-Export hält sich strikt an diese Einstellungen und wird Ihre Einstellungen zur Datenminimierung nicht umgehen.

### Enterprise-Status geändert

**Mögliche Ursache:** Ihr Enterprise-Abonnement ist abgelaufen, wurde gekündigt oder Ihr Konto wurde herabgestuft.

**Lösung:** Das Protokoll-Streaming wird automatisch deaktiviert, wenn das Konto den Enterprise-Status verliert. Kontaktieren Sie Ihren AdGuard-Account-Manager, um Ihr Abonnement wiederherzustellen und den Stream zu reaktivieren.

### SIEM kann das JSON-Array nicht parsen oder aufteilen

**Mögliche Ursache:** Viele S3-Protokollsammler erwarten standardmäßig Newline Delimited JSON (NDJSON/JSONL). Da die exportierten Protokolle als minimiertes JSON-Array (`[...]`) formatiert sind, kann der Collector die Datei möglicherweise nicht parsen oder das gesamte Array als ein einzelnes, massives Protokollereignis erfassen, anstatt es in einzelne Abfragedatensätze aufzuteilen.

**Lösung:** Konfigurieren Sie den S3-Connector, den Protokoll-Shipper oder den SIEM-Parser so, dass standardmäßige JSON-Arrays verarbeitet werden. Die Ingestion-Pipeline muss so eingestellt sein, dass sie das Array entpackt und dessen Elemente vor der Indizierung in separate Protokolleinträge aufteilt.

### Komprimierte Dateien werden nicht dekomprimiert

**Mögliche Ursache:** Das beim Export verwendete Komprimierungsformat (z. B. `.gz`) wird entweder nicht unterstützt oder ist im Ingestion-Connector Ihres SIEM falsch konfiguriert.

**Lösung:** Überprüfen Sie die Dekomprimierungseinstellungen Ihres SIEM-Connectors (stellen Sie z. B. sicher, dass die automatische Gzip-Dekomprimierung für den Abruf von S3-Objekten aktiviert ist).

## FAQ

### Können Protokolle direkt an Splunk oder Microsoft Sentinel gestreamt werden?

Nein. In der aktuellen MVP-Version wird direktes Streaming an SIEM-Endpunkte oder APIs (wie Splunk HEC) nicht unterstützt. Protokolle müssen zuerst in einen S3-kompatiblen Bucket geschrieben werden, den das SIEM dann mithilfe von Standard-S3-Konnektoren überwachen und erfassen kann.

### Können andere Speicheroptionen als S3 verwendet werden?

Nein. Derzeit wird nur S3-kompatibler Speicher unterstützt. Zu den Standardoptionen gehören Amazon S3 oder kompatible Angebote anderer Cloud-Anbieter (z. B. Cloudflare R2, Backblaze B2, Wasabi oder MinIO). Eine native Integration mit anderen Speichertypen (wie z. B. direktes Azure Blob oder SFTP) ist derzeit nicht verfügbar.

### Ist es möglich, historische Protokolle abzurufen?

Nein. Das Protokoll-Streaming ist strikt zukunftsorientiert. Nur DNS-Abfrageereignisse, die generiert wurden, _nachdem_ die Streaming-Funktion erfolgreich aktiviert und konfiguriert wurde, werden exportiert. Das nachträgliche Auffüllen historischer Protokolle wird nicht unterstützt.

### Wie schnell werden Protokolle geliefert?

Protokolle werden in komprimierten Batches statt in Echtzeit bereitgestellt. Weitere Einzelheiten zu Batching-Intervallen und Zustellungsmechanismen finden Sie im Abschnitt [Zustellungsgarantien und -einschränkungen](#delivery-guarantees-and-limitations).

### Wird die Zustellung jedes einzelnen Ereignisses garantiert?

Ja, unter normalen Betriebsbedingungen. Wenn der Ziel-Bucket jedoch nicht mehr erreichbar ist, können Protokollereignisse schließlich verworfen werden, sobald das Limit des Wiederholungspuffers überschritten ist. Details finden Sie im Abschnitt [Zustellungsgarantien und -beschränkungen](#delivery-guarantees-and-limitations).

### Sind doppelte Ereignisse im Ziel möglich?

Ja. Unter dem „At-least-once“-Zustellmodell können durch vorübergehende Ausfälle ausgelöste Netzwerk-Wiederholungsversuche dazu führen, dass doppelte Protokollereignisse in den Bucket geschrieben werden. Die Ingestion-Pipeline oder das SIEM muss so konfiguriert sein, dass die Deduplizierung verarbeitet wird.

### Welche Felder sind in den Protokollen enthalten?

Die Protokolle enthalten wichtige DNS-Abfragefelder wie `TimeAddedMs` (Zeitstempel), `DomainFQDN`, `RequestType`, `Action` und `ClientCountry`. Eine vollständige Liste der Felder und Datentypen finden Sie im Abschnitt [Feldreferenz](#fields-reference). Die Datenschutzeinstellungen des Kontos wirken sich direkt auf diese Protokolle aus; sensible Felder (wie z. B. `IpAddress`) werden weggelassen oder auf `null` gesetzt, wenn die Protokollierung im Dashboard deaktiviert ist.

### Was passiert, wenn der Enterprise-Status verloren geht?

Protokoll-Streaming ist ausschließlich eine Funktion des Enterprise-Tarifs. Wenn das Konto nicht mehr über ein Enterprise-Paket verfügt oder das Abonnement abläuft, wird der Streaming-Service automatisch deaktiviert.

### Kann Protokoll-Streaming deaktiviert werden?

Ja. Der Protokoll-Stream kann jederzeit auf Anfrage deaktiviert werden. Wenden Sie sich dazu bitte an den zuständigen AdGuard-Account-Manager oder kontaktieren Sie den AdGuard-Kundensupport unter `support@adguard-dns.io`.

### Können mehrere S3-Streaming-Ziele konfiguriert werden?

Nein. Die aktuelle Version unterstützt nur die Konfiguration eines einzelnen S3-kompatiblen Streaming-Ziels pro Enterprise-Organisation.
