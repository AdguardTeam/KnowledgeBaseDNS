---
title: Überblick
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    API info is from here:
    https://api.adguard-dns.io/static/api/API.md
-->

AdGuard DNS bietet eine REST-API, die Sie zur Integration Ihrer Anwendungen verwenden können.

## Authentifizierung

### Zugriffstoken generieren

Stellen Sie eine POST-Anfrage für die folgende URL mit den angegebenen Parametern, um den `access_token` zu erzeugen:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parameter    | Beschreibung                                                                            |
|:------------ |:--------------------------------------------------------------------------------------- |
| **username** | Konto-E-Mail                                                                            |
| **password** | Konto-Passwort                                                                          |
| mfa_token    | Token für die Zwei-Faktor-Authentifizierung (falls in den Kontoeinstellungen aktiviert) |

In der Antwort erhalten Sie sowohl den `access_token` als auch den `refresh_token`.

- Der `access_token` läuft nach einigen angegebenen Sekunden ab (dargestellt durch den `expires_in` Parameter in der Antwort). Sie können einen neuen `access_token` unter Verwendung des `refresh_token` neu generieren (siehe: `Generieren eines Zugriffstokens aus einem Aktualisierungs-Token`).

- Das `refresh_token` ist dauerhaft. Um den `refresh_token`zu widerrufen, siehe: `Widerruf eines Aktualisierungs-Tokens`.

#### Beispielanfrage

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'username=user%40adguard.com' \
    -d 'password=********' \
    -d 'mfa_token=727810'
```

#### Beispielantwort

```json
{
  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2620978
}
```

### Zugriffstoken aus Aktualisierungs-Token generieren

Zugriffstoken haben eine begrenzte Gültigkeit. Nach Ablauf muss Ihre App das Aktualisierungs-Token `` verwenden, um ein neues `Zugriffstoken`anzufordern.

Führen Sie die folgende POST-Anfrage mit den angegebenen Parametern aus, um ein neues Zugriffstoken zu erhalten:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parameter         | Beschreibung                                                                   |
|:----------------- |:------------------------------------------------------------------------------ |
| **refresh_token** | `AKTUALISIERUNGS-TOKEN`, mit dem ein neuer Zugangstoken generiert werden muss. |

#### Beispielanfrage

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

#### Beispielantwort

```json
{
  "access_token": "xQnT7GYT6Ag--3oY_EcOOdXe-I0",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2627999
}
```

### Widerruf eines Aktualisierungs-Tokens

Um ein Aktualisierungstoken zu widerrufen, führen Sie die folgende POST-Anfrage mit den angegebenen Parametern aus:

`https://api.adguard-dns.io/oapi/v1/revoke_token`

#### Beispiel einer Anfrage

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/revoke_token' -i -X POST \
    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

| Parameter         | Beschreibung                                        |
|:----------------- |:--------------------------------------------------- |
| **refresh_token** | `AKTUALISIERUNGS-TOKEN`, der widerrufen werden soll |

### Autorisierungsendpunkt

> Um Zugang zu diesem Endpunkt zu erhalten, müssen Sie uns unter **devteam@adguard.com** kontaktieren. Bitte beschreiben Sie den Grund und die Anwendungsfälle für diesen Endpunkt und geben Sie den URI für die Umleitung an. Nach der Genehmigung erhalten Sie eine eindeutige Kundenkennung, die für den Parameter **Client_id** verwendet werden sollte.

Der Endpunkt **/oapi/v1/oauth_authorize** wird verwendet, um mit dem Ressourceneigentümer zu interagieren und die Genehmigung für den Zugriff auf die geschützte Ressource zu erhalten.

Der Dienst leitet Sie an AdGuard weiter, um sich zu authentifizieren (falls Sie nicht bereits angemeldet sind) und dann zurück zu Ihrer Anwendung.

Die Anfrageparameter des Endpunkts **/oapi/v1/oauth_authorize** sind:

| Parameter         | Beschreibung                                                                                                                                                                                      |
|:----------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **response_type** | Weist den Autorisierungsserver an, welche Erlaubnis ausgeführt werden soll                                                                                                                        |
| **client_id**     | Die ID des OAuth-Clients, der die Autorisierung anfordert                                                                                                                                         |
| **redirect_uri**  | Enthält eine URL. Eine erfolgreiche Antwort von diesem Endpunkt führt zu einer Umleitung zu dieser URL                                                                                            |
| **state**         | Ein intransparenter Wert, der zu Sicherheitszwecken verwendet wird. Wenn dieser Anfrageparameter in der Anfrage gesetzt ist, wird er als Teil der **redirect_uri** an die Anwendung zurückgegeben |
| **aid**           | Partnerkennung                                                                                                                                                                                    |

Zum Beispiel:

```http request
https://api.adguard-dns.io/oapi/v1/oauth_authorize?response_type=token&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&state=1jbmuc0m9WTr1T6dOO82
```

Um dem Autorisierungsserver mitzuteilen, welcher Grant-Typ zu verwenden ist, wird der Anfrageparameter **response_type** wie folgt verwendet:

- Für die implizite Gewährung verwenden Sie **response_type=token**, um ein Zugriffstoken einzuschließen.

Eine erfolgreiche Antwort ist **302 Found**, was eine Umleitung zu **redirect_uri** (ein Anfrageparameter) auslöst. Die Antwortparameter werden in die Fragmentkomponente (der Teil nach `#`) des **redirect_uri**-Parameters im **Location**-Header eingebettet.

Zum Beispiel:

```http request
HTTP/1.1 302 Found
Standort: REDIRECT_URI#access_token=...&token_type=Bearer&expires_in=3600&state=1jbmuc0m9WTr1T6dOO82
```

### Zugriff auf API

Sobald das Zugriffs- und das Aktualisierungs-Token generiert sind, können API-Aufrufe durch Übergabe des Zugriffstokens in der Kopfzeile erfolgen.

- Der Name der Kopfzeile muss `Authorization` lauten
- Kopfzeilen-Wert muss sein `Bearer {access_token}`

## API

### Referenz

Bitte lesen Sie die Methodenreferenz [hier](reference.md).

### OpenAPI-Spezifikation

Die OpenAPI-Spezifikation ist verfügbar unter [https://api.adguard-dns.io/static/swagger/openapi.json][openapi].

Sie können verschiedene Methoden verwenden, um die Liste der verfügbaren API-Methoden anzuzeigen. Sie können diese Datei zum Beispiel in [https://editor.swagger.io/][swagger] öffnen.

### Änderungsprotokoll

Das vollständige Änderungsprotokoll der AdGuard DNS-API finden Sie auf [dieser Seite](private-dns/api/changelog.md).

## Feedback

Wenn Sie möchten, dass diese API um neue Methoden erweitert wird, senden Sie uns bitte eine E-Mail an `devteam@adguard.com` und teilen Sie uns mit, was Sie gerne hinzufügen möchten.

[openapi]: https://api.adguard-dns.io/static/swagger/openapi.json
[swagger]: https://editor.swagger.io/
