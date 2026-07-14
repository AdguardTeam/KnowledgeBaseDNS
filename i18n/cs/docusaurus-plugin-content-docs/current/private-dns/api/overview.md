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

### API keys

Pokud jsou API klíče zahrnuty v hlavičce požadavku, lze je použít k autorizaci požadavků na uživatelské API.

#### Příklad požadavku

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/devices' -i -X GET \
    -H 'Authorization: ApiKey {api_key}'
```

#### Generování klíčů API

Chcete-li vydat nebo odvolat API klíče, přejděte do [příslušné podsekce](https://adguard-dns.io/en/dashboard/user-settings/api-keys) v části *Předvolby uživatele*.

### Přístupové tokeny

Pokud jsou tokeny zahrnuty v hlavičce požadavku, lze je použít k autorizaci požadavků na uživatelské API.

#### Příklad požadavku

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/devices' -i -X GET \
    -H 'Authorization: Bearer {access_token}'
```

#### Vytváření přístupových tokenů pomocí uživatelského jména a hesla

Proveďte požadavek POST na následující URL s danými parametry a vygenerujte `access_token`:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parametr        | Popis                                                             |
|:--------------- |:----------------------------------------------------------------- |
| **grant_type**  | Musí být `password`                                               |
| **uživ. jméno** | E-mail účtu                                                       |
| **heslo**       | Heslo účtu                                                        |
| mfa_token       | Dvoufaktorový ověřovací token (pokud je povolen v nastavení účtu) |

V odpovědi obdržíte jak `access_token`, tak i `refresh_token`.

- Platnost `code_token` vyprší po několika zadaných sekundách (reprezentovaných hodnotou parametrem `expires_in` v odpovědi). Můžete znovu vygenerovat nový `access_token` pomocí `refresh_token` (viz: `Generování přístupových tokenů z obnovovacích tokenů`).

- `refresh_token` je trvalý. Odvolání `refresh_token`, viz: `Odvolání obnovovacích tokenu`.

##### Příklad požadavku

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'grant_type=password' \
    -d 'username=user%40adguard.com' \
    -d 'password=********' \
    -d 'mfa_token=727810'
```

##### Příklad odpovědi

```json
{
  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2620978
}
```

#### Generování přístupových tokenů z obnovovacích tokenů

Přístupové tokeny mají omezenou platnost. Po vypršení jeho platnosti bude muset vaše aplikace použít `refresh_token` a požádat o nový `access_token`.

Pro získání nového přístupového tokenu proveďte následující požadavek POST se zadanými parametry:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parametr          | Popis                                                             |
|:----------------- |:----------------------------------------------------------------- |
| **grant_type**    | Musí být `refresh_token`                                          |
| **refresh_token** | `REFRESH TOKEN` slouží k vygenerování nového přístupového tokenu. |

##### Příklad požadavku

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'grant_type=refresh_token' \
    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

##### Příklad odpovědi

```json
{
  "access_token": "xQnT7GYT6Ag--3oY_EcOOdXe-I0",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2627999
}
```

#### Odvolání obnovovacích tokenů

Chcete-li odvolat obnovovací token, proveďte následující požadavek POST s danými parametry:

`https://api.adguard-dns.io/oapi/v1/revoke_token`

##### Request example

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/revoke_token' -i -X POST \
    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

| Parametr          | Popis                                 |
|:----------------- |:------------------------------------- |
| **refresh_token** | `REFRESH TOKEN`, který má být odvolán |

### Autorizační koncový bod

:::warning

Chcete-li získat přístup k tomuto koncovému bodu, musíte nás kontaktovat na **devteam@adguard.com**. Popište prosím důvod a případy použití tohoto koncového bodu a uveďte URI přesměrování. Po schválení obdržíte jedinečný identifikátor klienta, který by měl být použit pro parametr **client_id**.

:::

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

Úspěšná odezva je **302 Found**, což vyvolá přesměrování na **redirect_uri** (což je parametr požadavku). Parametry odezvy jsou vloženy do fragmentové složky (část za symbolem `#`) parametru `redirect_uri` v záhlaví *Location*.

Např:

```http request
HTTP/1.1 302 Found
Location: REDIRECT_URI#access_token=...&token_type=Bearer&expires_in=3600&state=1jbmuc0m9WTr1T6dOO82
```

### Autorizační kód + PKCE

:::warning

Chcete-li získat přístup k tomuto koncovému bodu, musíte nás kontaktovat na **devteam@adguard.com**. Ve své zprávě prosím popište důvod a příklady použití tohoto koncového bodu a uveďte přesměrovací URI. Po schválení obdržíte jedinečný identifikátor klienta, který budete používat v parametru **client_id**.

:::

Postup s autorizačním kódem a PKCE je **doporučeným způsobem integrace** pro nové klienty. Je určen pro veřejné klienty (jednostránkové aplikace, mobilní aplikace) a nevyžaduje klientské tajné heslo.

**Krok 1: Vygenerujte ověřovací kód a kontrolní kód**

Vygenerujte kryptograficky náhodný `code_verifier` (43–128 znaků), poté vypočítejte:

``` text
code_challenge = BASE64URL(SHA256(ASCII(code_verifier)))
```

**Krok 2: Přesměrujte uživatele na autorizační koncový bod**

`GET https://api.adguard-dns.io/oapi/v1/oauth_authorize`

| Parametr                    | Požadováno | Popis                                         |
|:--------------------------- |:---------- |:--------------------------------------------- |
| **response_type**           | Ano        | Musí být `code`                               |
| **client_id**               | Ano        | Váš registrovaný identifikátor klienta OAuth2 |
| **redirect_uri**            | Ano        | Kam přesměrovat po autorizaci                 |
| **state**                   | Ano        | Náhodný řetězec pro zabránění CSRF            |
| **code_challenge**          | Ano        | BASE64URL(SHA256(code_verifier))              |
| **code_challenge_method** | Ano        | Musí být `S256`                               |

Příklad:

```http request
https://api.adguard-dns.io/oapi/v1/oauth_authorize?response_type=code&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&state=RANDOM_STATE&code_challenge=CODE_CHALLENGE&code_challenge_method=S256
```

Po úspěšném ověření vás služba přesměruje na:

```http request
HTTP/1.1 302 Nalezeno
Location: REDIRECT_URI?code=AUTH_CODE&state=RANDOM_STATE
```

**Krok 3: Vyměňte kód za přístupový token**

`POST https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parametr          | Požadováno | Popis                                                |
|:----------------- |:---------- |:---------------------------------------------------- |
| **grant_type**    | Ano        | Musí být `authorization_code`                        |
| **code**          | Ano        | Autorizační kód získaný v kroku 2                    |
| **client_id**     | Ano        | Váš registrovaný identifikátor klienta OAuth2        |
| **code_verifier** | Ano        | Původní ověřovací kód vygenerovaný v kroku 1         |
| **redirect_uri**  | Ano        | Musí se shodovat s `redirect_uri` použitým v kroku 2 |

#### Příklad požadavku

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'grant_type=authorization_code' \
    -d 'code=SplxlOBeZQQYbYS6WxSbIA' \
    -d 'client_id=CLIENT_ID' \
    -d 'code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk' \
    -d 'redirect_uri=REDIRECT_URI'
```

##### Příklad odpovědi

```json
{
  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",
  "token_type": "bearer",
  "expires_in": 2620978
}
```

## API

### Odkaz

Viz odkaz na [metody reference](private-dns/api/reference.mdx).

### Specifikace OpenAPI

Specifikace OpenAPI je k dispozici na [https://api.adguard-dns.io/swagger/openapi.json][openapi].

K zobrazení seznamu dostupných metod API můžete použít různé nástroje. Tento soubor můžete otevřít například v [https://editor.swagger.io/][swagger].

### Seznam změn

Kompletní seznam změn AdGuard DNS API je k dispozici na [této stránce](private-dns/api/changelog.md).

## Zpětná vazba

Pokud si přejete, aby bylo toto rozhraní API rozšířeno o nové metody, napište nám prosím na adresu. `devteam@adguard.com` a sdělte nám, co byste chtěli přidat.

[openapi]: https://api.adguard-dns.io/swagger/openapi.json
[swagger]: https://editor.swagger.io/
