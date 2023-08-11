---
title: Visão Geral
sidebar_position: 1
---

# API do AdGuard DNS

O AdGuard DNS fornece uma API REST que você pode usar para integrar seus aplicativos a ele.

## Autenticação

### Gerar token de acesso

Faça uma solicitação POST para a seguinte URL com os parâmetros fornecidos para gerar a `access_token`:

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

Os tokens de acesso têm validade limitada. Quando expirar, seu aplicativo terá que usar o `refresh_token` para solicitar um novo `access_token`.

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

Uma vez que os tokens de acesso e atualização são gerados, as chamadas de API podem ser feitas passando o token de acesso no cabeçalho.

- O nome do cabeçalho deve ser `Authorization`
- O valor do cabeçalho deve ser `Bearer {access_token}`

## API

### Reference

Please see the methods reference [here](private-dns/api/reference.md).

### OpenAPI spec

A especificação OpenAPI está disponível em [https://api.adguard-dns.io/static/swagger/openapi.json][openapi].

Você pode usar diferentes ferramentas para visualizar a lista de métodos de API disponíveis. Para instância, você pode abrir este arquivo em [https://editor.swagger.io/][swagger].

## Comentários

Se você deseja que esta API seja estendida com novos métodos, envie um e-mail para `devteam@adguard.com` e informe-nos o que você gostaria que fosse adicionado.

[openapi]: https://api.adguard-dns.io/static/swagger/openapi.json
[swagger]: https://editor.swagger.io/
