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

### Generér adgangstoken

Foretag en POST-anmodning for flg. URL med de givne parametre for at generere et `access_token`:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parameter       | Beskrivelse                                                     |
|:--------------- |:--------------------------------------------------------------- |
| **brugernavn**  | Kontoe-mail                                                     |
| **adgangskode** | Kontoadgangskode                                                |
| mfa_token       | Tofaktorgodkendelsestoken (hvis aktiveret i kontoindstillinger) |

I svaret vil både `access_token` og `refresh_token` fremgå.

- `access_token` udløber efter et antal angivne sekunder (jf. svarets `expires_in`-parameter). Et nyt `access_token` kan genereres vha. `refresh_token` (se: `Generere adgangstoken fra Refresh-token`).

- `refresh_token` er permanent. For at ophæve et `refresh_token`, se: `Ophævelse af et Refresh-token`.

#### Eksempelanmodning

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'username=user%40adguard.com' \
    -d 'password=********' \
    -d 'mfa_token=727810'
```

#### Eksempelsvar

```json
{
  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2620978
}
```

### Generere adgangstoken fra Refresh-token

Et adgangstoken har en begrænset gyldighedsperiode. Når det udløber, vil appen skulle bruge `refresh-token` ifm. anmodning om et nyt `adgangstoken`.

Foretag flg. POST-anmodning med de givne parametre for at få et nyt adgangstoken:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parameter         | Beskrivelse                                                  |
|:----------------- |:------------------------------------------------------------ |
| **refresh_token** | `REFRESH TOKEN`, hvormed et nyt adgangstoken skal genereres. |

#### Eksempelanmodning

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

#### Eksempelsvar

```json
{
  "access_token": "xQnT7GYT6Ag--3oY_EcOOdXe-I0",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2627999
}
```

### Ophævelse af et Refresh-token

For at ophæve et opdateringstoken skal flg. POST-anmodning foretages med de givne parametre:

`https://api.adguard-dns.io/oapi/v1/revoke_token`

#### Anmodningseksempel

```bash
$ curl 'https://api.adguard-dns.com/oapi/v1/revoke_token' -i -X POST \
    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

| Parameter         | Beskrivelse                       |
|:----------------- |:--------------------------------- |
| **refresh_token** | `REFRESH TOKEN`, der skal ophæves |

### Adgang til API

Når først adgangs- og refresh-tokenerne er genereret, kan API-kald foretages ved at videregive adgangstokenet i headeren.

- Header-navnet skal være `Authorization`
- Header-værdien skal være `Bearer {access_token}`

## API

### Reference

Se metodereferencen [hér](reference.md).

### OpenAPI-specifikation

OpenAPI-specifikationen er tilgængelig via [https://api.adguard-dns.io/static/swagger/openapi.json][openapi].

Forskellige værktøjer kan bruges til at se listen over tilgængelige API-metoder. Filen kan f.eks. åbnes i [https://editor.swagger.io/][swagger].

### Ændringslog

Den komplette AdGuard DNS API-ændringslog er tilgængelig på [denne side](private-dns/api/changelog.md).

## Feedback

Ønskes denne API udvidet med nye metoder, så send os en e-mail via `devteam@adguard.com` med information om, hvad der ønskes tilføjet.

[openapi]: https://api.adguard-dns.io/static/swagger/openapi.json
[swagger]: https://editor.swagger.io/
