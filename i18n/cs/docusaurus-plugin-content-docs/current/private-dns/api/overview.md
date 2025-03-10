---
title: Přehled
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    API info is from here:
    https://api.adguard-dns.io/static/api/API.md
-->

AdGuard DNS poskytuje rozhraní REST API, které můžete použít k integraci svých aplikací.

## Ověřování

### Generování přístupového tokenu

Proveďte požadavek POST na následující URL s danými parametry a vygenerujte `access_token`:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parametr        | Popis                                                             |
|:--------------- |:----------------------------------------------------------------- |
| **uživ. jméno** | E-mail účtu                                                       |
| **heslo**       | Heslo účtu                                                        |
| mfa_token       | Dvoufaktorový ověřovací token (pokud je povolen v nastavení účtu) |

V odpovědi obdržíte jak `access_token`, tak i `refresh_token`.

- Platnost `code_token` vyprší po několika zadaných sekundách (reprezentovaných hodnotou parametrem `expires_in` v odpovědi). Můžete znovu vygenerovat nový `code_token` pomocí `refresh_token` (viz: `Generate Access Token from Refresh Token`).

- `refresh_token` je trvalý. Odvolání `refresh_token`, viz: `Revoking a Refresh Token`.

#### Příklad požadavku

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'username=user%40adguard.com' \
    -d 'password=********' \
    -d 'mfa_token=727810'
```

#### Příklad odpovědi

```json
{
  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2620978
}
```

### Generování přístupového tokenu z obnovovacího tokenu

Přístupové tokeny mají omezenou platnost. Po vypršení jeho platnosti bude muset vaše aplikace použít `refresh_token` a požádat o nový `access_token`.

Pro získání nového přístupového tokenu proveďte následující požadavek POST se zadanými parametry:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parametr          | Popis                                                                     |
|:----------------- |:------------------------------------------------------------------------- |
| **refresh_token** | `REFRESH TOKEN`, pomocí kterého je třeba vygenerovat nový `access_token`. |

#### Příklad požadavku

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

#### Příklad odpovědi

```json
{
  "access_token": "xQnT7GYT6Ag--3oY_EcOOdXe-I0",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2627999
}
```

### Odvolání obnovovacího tokenu

Chcete-li odvolat obnovovací token, proveďte následující požadavek POST s danými parametry:

`https://api.adguard-dns.io/oapi/v1/revoke_token`

#### Příklad požadavku

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/revoke_token' -i -X POST \
    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

| Parametr          | Popis                                 |
|:----------------- |:------------------------------------- |
| **refresh_token** | `REFRESH TOKEN`, který má být odvolán |

### Autorizační koncový bod

> Chcete-li získat přístup k tomuto koncovému bodu, musíte nás kontaktovat na **devteam@adguard.com**. Popište prosím důvod a případy použití tohoto koncového bodu a uveďte URI přesměrování. Po schválení obdržíte jedinečný identifikátor klienta, který by měl být použit pro parametr **client_id**.

Koncový bod **/oapi/v1/oauth_authorize** slouží k interakci s vlastníkem zdroje a k získání oprávnění k přístupu k chráněnému zdroji.

Služba vás přesměruje na AdGuard k ověření (pokud ještě nejste přihlášeni) a poté zpět do vaší aplikace.

Parametry požadavku koncového bodu **/oapi/v1/oauth_authorize** jsou:

| Parametr          | Popis                                                                                                                                                         |
|:----------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **response_type** | Sděluje autorizačnímu serveru, který grant má provést                                                                                                         |
| **client_id**     | ID klienta OAuth, který žádá o autorizaci                                                                                                                     |
| **redirect_uri**  | Obsahuje URL. Úspěšná odezva z tohoto koncového bodu vede k přesměrování na tuto URL                                                                          |
| **state**         | Neprůhledná hodnota používaná pro účely zabezpečení. Pokud je tento parametr požadavku nastaven v požadavku, je vrácen aplikaci jako součást **redirect_uri** |
| **aid**           | Identifikátor přidruženého subjektu                                                                                                                           |

Např:

```http request
https://api.adguard-dns.io/oapi/v1/oauth_authorize?response_type=token&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&state=1jbmuc0m9WTr1T6dOO82
```

K informování autorizačního serveru o tom, který typ grantu má být použit, se používá následující parametr požadavku **response_type**:

- Pro implicitní grant použijte **response_type=token** k zahrnutí přístupového tokenu.

Úspěšná odezva je **302 Found**, což vyvolá přesměrování na **redirect_uri** (což je parametr požadavku). Parametry odezvy jsou vloženy do fragmentové složky (část za `#`) parametru **redirect_uri** v záhlaví **Location**.

Např:

```http request
HTTP/1.1 302 Found
Location: REDIRECT_URI#access_token=...&token_type=Bearer&expires_in=3600&state=1jbmuc0m9WTr1T6dOO82
```

### Přístup k rozhraní API

Po vygenerování přístupových a obnovovacích tokenů lze volání API provádět pomocí předání přístupového tokenu v záhlaví.

- Název záhlaví by měl být `Autorization`
- Hodnota záhlaví by měla být `Bearer {access_token}`

## API

### Odkaz

Viz odkaz na metody [zde](reference.md).

### Specifikace OpenAPI

Specifikace OpenAPI je k dispozici na [https://api.adguard-dns.io/swagger/openapi.json][openapi].

K zobrazení seznamu dostupných metod API můžete použít různé nástroje. Tento soubor můžete otevřít například v [https://editor.swagger.io/][swagger].

### Seznam změn

Kompletní seznam změn AdGuard DNS API je k dispozici na [této stránce](private-dns/api/changelog.md).

## Zpětná vazba

Pokud si přejete, aby bylo toto rozhraní API rozšířeno o nové metody, napište nám prosím na adresu. `devteam@adguard.com` a sdělte nám, co byste chtěli přidat.

[openapi]: https://api.adguard-dns.io/swagger/openapi.json
[swagger]: https://editor.swagger.io/
