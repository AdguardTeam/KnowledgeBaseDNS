---
title: Oversigt
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    API info is from here:
    https://api.adguard-dns.io/static/api/API.md
-->

AdGuard DNS tilbyder en REST API, hvormed apps integreres i den.

## Godkendelse

### API-nøgler

Når API-nøgler medtages i forespørgsels-headeren, kan de bruges til at godkende forespørgsler til Bruger-API'en.

#### Forespørgselseksempel

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/devices' -i -X GET \
    -H 'Authorization: ApiKey {api_key}'
```

#### Generering af API-nøgler

For at udstede eller tilbagekalde API-nøgler, gå til det [korresponderende underafsnit](https://adguard-dns.io/en/dashboard/user-settings/api-keys) i *Brugerpræferencer*.

### Adgangstokener

Når adgangstokener medtages i forespørgsels-headeren, kan de bruges til at godkende forespørgsler til Bruger-API'en.

#### Forespørgselseksempel

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/devices' -i -X GET \
    -H 'Authorization: Bearer {access_token}'
```

#### Generering af adgangstokens med brugernavn og adgangskode

Foretag en POST-forespørgsel for flg. URL med de givne parametre for at generere et `access_token`:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parameter       | Beskrivelse                                                     |
|:--------------- |:--------------------------------------------------------------- |
| **grant_type**  | Skal være `password`                                            |
| **brugernavn**  | Kontoe-mail                                                     |
| **adgangskode** | Kontoadgangskode                                                |
| mfa_token       | Tofaktorgodkendelsestoken (hvis aktiveret i kontoindstillinger) |

I svaret vil både `access_token` og `refresh_token` fremgå.

- `access_token` udløber efter et antal angivne sekunder (jf. svarets `expires_in`-parameter). Et nyt `access_token` kan genereres vha. `refresh_token` (se: `Generering af adgangstokener fra opfriskningstokener`).

- `refresh_token` er permanent. For at tilbagekalde et `refresh_token`, se: `Tilbagekaldelse af et Refresh-token`.

##### Forespørgselseksempel

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'grant_type=password' \
    -d 'username=user%40adguard.com' \
    -d 'password=********' \
    -d 'mfa_token=727810'
```

##### Svareksempel

```json
{
  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2620978
}
```

#### Generering af adgangstokener fra Refresh-tokener

Adgangstokener har begrænset gyldighed. Når det udløber, vil appen skulle bruge `refresh-token` til at anmode om et nyt `adgangstoken`.

Foretag flg. POST-forespørgsel med de givne parametre for at få et nyt adgangstoken:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parameter         | Beskrivelse                                                   |
|:----------------- |:------------------------------------------------------------- |
| **grant_type**    | Skal være `refresh_token`                                     |
| **refresh_token** | `REFRESH TOKEN` bruges til generering af et nyt adgangstoken. |

##### Forespørgselseksempel

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'grant_type=refresh_token' \
    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

##### Svareksempel

```json
{
  "access_token": "xQnT7GYT6Ag--3oY_EcOOdXe-I0",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2627999
}
```

#### Tilbagekaldelse af et opdateringstokener

For at tilbagekalde et opdateringstoken skal flg. POST-forespørgsel foretages med de givne parametre:

`https://api.adguard-dns.io/oapi/v1/revoke_token`

##### Forespørgselseksempel

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/revoke_token' -i -X POST \
    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

| Parameter         | Beskrivelse                       |
|:----------------- |:--------------------------------- |
| **refresh_token** | `REFRESH TOKEN`, der skal ophæves |

### Godkendelsesendepunkt

:::warning

For at tilgå dette endepunkt, kontakt os via **devteam@adguard.com**. Beskriv venligst årsagen til og brugstilfælde for dette endepunkt, samt angiv omdirigerings-URI'en. Efter godkendelse fremsendes en unik klientidentifikator til brug for parameteren **client_id**.

:::

Endepunktet **/oapi/v1/oauth_authorize** bruges til at interager med ressourceejeren og opnå godkendelse til at tilgå den beskyttede ressource.

Tjenesten foretager omdirigering til AdGuard for godkendelse (hvis indlogning ikke allerede er sket) og dernæst tilbage til applikationen.

Forespørgselsparametrene til **/oapi/v1/oauth_authorize**-endepunktet er:

| Parameter         | Beskrivelse                                                                                                                                                                  |
|:----------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **response_type** | Fortæller godkendelsesserveren, hvilken tildeling, der skal eksekveres                                                                                                       |
| **client_id**     | ID'et på den OAuth-klient, der beder om godkendelse                                                                                                                          |
| **redirect_uri**  | Indeholder en URL. Et vellykket svar fra dette endepunkt resulterer i en omdirigering til denne URL                                                                          |
| **tilstand**      | En uigennemsigtig værdi brugt til sikkerhedsformål. Er denne forespørgselsparameter angivet i forespørgslen, returneres den til applikationen som en del af **redirect_uri** |
| **aid**           | Affilieret-identifikator                                                                                                                                                     |

F.eks.:

```http request
https://api.adguard-dns.io/oapi/v1/oauth_authorize?response_type=token&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&state=1jbmuc0m9WTr1T6dOO82
```

For at underrette godkendelsesserveren om, hvilken tildelingstype, der skal bruges, anvendes **response_type**-forespørgselsparameteren som følger:

- For den implicitte tildeling, brug **response_type=token** til at inkludere et adgangstoken.

Et vellykket svar er **302 Found**, der udløser en omdirigering til **redirect_uri** (der er en forespørgselsparameter). Svarparametrene er indlejret i fragmentkomponenten (delen efter symbolet `#`) i `redirect_uri` i headeren *Location*.

F.eks.:

```http request
HTTP/1.1 302 Found
Location: REDIRECT_URI#access_token=...&token_type=Bearer&expires_in=3600&state=1jbmuc0m9WTr1T6dOO82
```

### Godkendelseskode + PKCE

:::warning

For at tilgå dette endepunkt, kontakt os venligst via **devteam@adguard.com**. Beskeden bedes beskrive årsagen til og anvendelsestilfældene for dette endepunkt samt angive omdirigerings-URI'en. Efter godkendelsen modtages en unik klientidentifikator til brug i parameteren **client_id**.

:::

Godkendelseskode + PKCE-flowet er den **anbefalede integrationsmetode** til nye klienter. Den er designet til offentlige klienter (enkeltside-apps, mobil-apps) og kræver ingen klienthemmelighed.

**Trin 1: Generér en kodeverifikator og kodeudfordring**

Generér en kryptografisk tilfældig `code_verifier` (43–128 tegn), og beregn dernæst:

``` text
code_challenge = BASE64URL(SHA256(ASCII(code_verifier)))
```

**Trin 2: Omdirigér brugeren til godkendelsesendepunktet**

`GET https://api.adguard-dns.io/oapi/v1/oauth_authorize`

| Parameter                   | Obligatorisk | Beskrivelse                                     |
|:--------------------------- |:------------ |:----------------------------------------------- |
| **response_type**           | Ja           | Skal være `code`                                |
| **client_id**               | Ja           | Din registrerede OAuth2-klient-id               |
| **redirect_uri**            | Ja           | Hvortil, der skal omdirigeres efter godkendelse |
| **tilstand**                | Ja           | Tilfældig streng for at forhindre CSRF          |
| **code_challenge**          | Ja           | BASE64URL(SHA256(code_verifier))                |
| **code_challenge_method** | Ja           | Skal være `S256`                                |

Eksempel:

```http request
https://api.adguard-dns.io/oapi/v1/oauth_authorize?response_type=code&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&state=RANDOM_STATE&code_challenge=CODE_CHALLENGE&code_challenge_method=S256
```

Efter gennemført godkendelse omdirigerer tjenesten til:

```http request
HTTP/1.1 302 Found
Location: REDIRECT_URI?code=AUTH_CODE&state=RANDOM_STATE
```

**Trin 3: Omveksl koden til et adgangstoken**

`POST https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parameter         | Obligatorisk | Beskrivelse                                        |
|:----------------- |:------------ |:-------------------------------------------------- |
| **grant_type**    | Ja           | Skal være `authorization_code`                     |
| **kode**          | Ja           | Godkendelseskode modtaget i Trin 2                 |
| **client_id**     | Ja           | Din registrerede OAuth2-klient-id                  |
| **code_verifier** | Ja           | Den oprindelige kodeverifikator genereret i Trin 1 |
| **redirect_uri**  | Ja           | Skal matche `redirect_uri` benyttet i Trin 2       |

#### Forespørgselseksempel

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'grant_type=authorization_code' \
    -d 'code=SplxlOBeZQQYbYS6WxSbIA' \
    -d 'client_id=CLIENT_ID' \
    -d 'code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk' \
    -d 'redirect_uri=REDIRECT_URI'
```

##### Svareksempel

```json
{
  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",
  "token_type": "bearer",
  "expires_in": 2620978
}
```

## API

### Reference

Se [metodereferencen](reference.md).

### OpenAPI-specifikation

OpenAPI-specifikation er tilgængelig via [https://api.adguard-dns.io/swagger/openapi.json][openapi].

Forskellige værktøjer kan bruges til at se listen over tilgængelige API-metoder. Filen kan f.eks. åbnes i [https://editor.swagger.io/][swagger].

### Ændringslog

Den komplette AdGuard DNS API-ændringslog er tilgængelig på [denne side](private-dns/api/changelog.md).

## Feedback

Ønskes denne API udvidet med nye metoder, send os venligst en e-mail via `devteam@adguard.com` med information om, hvad der ønskes tilføjet.

[openapi]: https://api.adguard-dns.io/swagger/openapi.json
[swagger]: https://editor.swagger.io/
