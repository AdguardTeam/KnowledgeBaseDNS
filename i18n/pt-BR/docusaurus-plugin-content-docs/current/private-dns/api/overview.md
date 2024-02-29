---
title: Visão Geral
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    API info is from here:
    https://api.adguard-dns.io/static/api/API.md
-->

O AdGuard DNS fornece uma API REST que você pode usar para integrar seus aplicativos a ele.

## Authentication

### Gerar token de acesso

Make a POST request for the following URL with the given params to generate the `access_token`:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parâmetro    | Descrição                                                                     |
|:------------ |:----------------------------------------------------------------------------- |
| **username** | Conta de e-mail                                                               |
| **password** | Senha da conta                                                                |
| mfa_token    | Token de autenticação de dois fatores (se ativado nas configurações da conta) |

Na resposta, você obterá `access_token` e `refresh_token`.

- O `access_token` expirará após alguns segundos especificados (representado pelo parâmetro `expires_in` na resposta). Você pode gerar um novo `access_token` usando o `refresh_token` (Consulte: `Gerar Token de Acesso a partir do Token de Atualização`).

- O `refresh_token` é permanente. Para revogar um `refresh_token`, consulte: `Revogando um Token de Atualização`.

#### Exemplo de solicitação

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'username=user%40adguard.com' \
    -d 'password=********' \
    -d 'mfa_token=727810'
```

#### Exemplo de resposta

```json
{
  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2620978
}
```

### Gerar Token de Acesso a partir do Token de Atualização

Os tokens de acesso têm validade limitada. Once it expires, your app will have to use the `refresh token` to request for a new `access token`.

Faça a seguinte solicitação POST com os parâmetros fornecidos para obter um novo token de acesso:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parâmetro         | Descrição                                                                  |
|:----------------- |:-------------------------------------------------------------------------- |
| **refresh_token** | `TOKEN DE ATUALIZAÇÃO` com o qual um novo token de acesso deve ser gerado. |

#### Exemplo de solicitação

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

#### Exemplo de resposta

```json
{
  "access_token": "xQnT7GYT6Ag--3oY_EcOOdXe-I0",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2627999
}
```

### Revogando um Token de Atualização

Para revogar um token de atualização, faça a seguinte solicitação POST com os parâmetros fornecidos:

`https://api.adguard-dns.io/oapi/v1/revoke_token`

#### Exemplo de Solicitação

```bash
$ curl 'https://api.adguard-dns.com/oapi/v1/revoke_token' -i -X POST \
    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

| Parâmetro         | Descrição                                    |
|:----------------- |:-------------------------------------------- |
| **refresh_token** | `TOKEN DE ATUALIZAÇÃO` que deve ser revogado |

### Acessando a API

Once the access and the refresh tokens are generated, API calls can be made by passing the access token in the header.

- O nome do cabeçalho deve ser `Authorization`
- O valor do cabeçalho deve ser `Bearer {access_token}`

## API

### Referência

Please see the methods reference [here](reference.md).

### OpenAPI spec

A especificação OpenAPI está disponível em [https://api.adguard-dns.io/static/swagger/openapi.json][openapi].

Você pode usar diferentes ferramentas para visualizar a lista de métodos de API disponíveis. For instance, you can open this file in [https://editor.swagger.io/][swagger].

### Changelog

The complete AdGuard DNS API changelog is available on [this page](private-dns/api/changelog.md).

## Feedback

If you would like this API to be extended with new methods, please email us to `devteam@adguard.com` and let us know what you would like to be added.

[openapi]: https://api.adguard-dns.io/static/swagger/openapi.json
[swagger]: https://editor.swagger.io/
