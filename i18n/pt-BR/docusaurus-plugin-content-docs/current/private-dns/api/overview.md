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

## Autenticação

### Gerar token de acesso

Faça uma solicitação POST para a seguinte URL com os parâmetros fornecidos para gerar o `access_token`:

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
$ curl 'https://api.adguard-dns.io/oapi/v1/revoke_token' -i -X POST \
    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

| Parâmetro         | Descrição                                    |
|:----------------- |:-------------------------------------------- |
| **refresh_token** | `TOKEN DE ATUALIZAÇÃO` que deve ser revogado |

### Endpoint de autorização

> Para acessar este endpoint, você precisa entrar em contato conosco em **devteam@adguard.com**. Por favor, descreva o motivo e os casos de uso para este endpoint e forneça o URI de redirecionamento. Após a aprovação, você receberá um identificador de cliente exclusivo, que deve ser usado para o parâmetro **client_id**.

O ponto final **/oapi/v1/oauth_authorize** é usado para interagir com o proprietário do recurso e obter a autorização para acessar o recurso protegido.

O serviço redireciona você para o AdGuard para autenticar (se você ainda não estiver logado) e depois de volta para seu aplicativo.

Os parâmetros de solicitação do ponto final **/oapi/v1/oauth_authorize** são:

| Parâmetro         | Descrição                                                                                                                                                                      |
|:----------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **response_type** | Informa ao servidor de autorização qual concessão executar                                                                                                                     |
| **client_id**     | O ID do cliente OAuth que solicita a autorização                                                                                                                               |
| **redirect_uri**  | Contém um URL. Uma resposta bem-sucedida deste ponto final resulta em um redirecionamento para este URL                                                                        |
| **state**         | Um valor opaco usado para fins de segurança. Se este parâmetro de solicitação estiver definido na solicitação, ele será retornado ao aplicativo como parte do **redirect_uri** |
| **aid**           | Identificador de afiliado                                                                                                                                                      |

Por exemplo:

```http request
https://api.adguard-dns.io/oapi/v1/oauth_authorize?response_type=token&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&state=1jbmuc0m9WTr1T6dOO82
```

Para informar ao servidor de autorização qual tipo de concessão usar, o parâmetro de solicitação **response_type** é usado da seguinte forma:

- Para a concessão implícita, use **response_type=token** para incluir um token de acesso.

Uma resposta bem-sucedida é **302 Found**, que aciona um redirecionamento para **redirect_uri** (que é um parâmetro de solicitação). Os parâmetros de resposta estão incorporados no componente de fragmento (a parte após `#`) do parâmetro **redirect_uri** no cabeçalho **Location**.

Por exemplo:

```http request
HTTP/1.1 302 Found
Location: REDIRECT_URI#access_token=...&token_type=Bearer&expires_in=3600&state=1jbmuc0m9WTr1T6dOO82
```

### Acessando a API

Uma vez que os tokens de acesso e atualização são gerados, as chamadas de API podem ser feitas passando o token de acesso no cabeçalho.

- O nome do cabeçalho deve ser `Authorization`
- O valor do cabeçalho deve ser `Bearer {access_token}`

## API

### Referência

Por favor, consulte a referência de métodos [aqui](reference.md).

### OpenAPI spec

A especificação OpenAPI está disponível em [https://api.adguard-dns.io/static/swagger/openapi.json][openapi].

Você pode usar diferentes ferramentas para visualizar a lista de métodos de API disponíveis. Por exemplo, você pode abrir este arquivo em [https://editor.swagger.io/][swagger].

### Registro de alterações

O registro completo do API do AdGuard DNS está disponível nesta [página](private-dns/api/changelog.md).

## Comentários

Se você deseja que esta API seja estendida com novos métodos, envie um e-mail para `devteam@adguard.com` e informe-nos o que você gostaria que fosse adicionado.

[openapi]: https://api.adguard-dns.io/static/swagger/openapi.json
[swagger]: https://editor.swagger.io/
