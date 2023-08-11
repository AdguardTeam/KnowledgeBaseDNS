---
title: Reference
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

<!-- 
    The content below is simply an automatic conversion from the OpenAPI spec
    https://api.adguard-dns.io/static/swagger/openapi.json to markdown using
    https://swagger-markdown-ui.netlify.app/.

    If you want to change it, ask the developers to change the OpenAPI spec.
-->

# API do AdGuard DNS
DNS API documentation

## Version: 1.4

### /oapi/v1/account/limits

#### GET
##### Summary:

Gets account limits

##### Responses

| Código | Descrição           |
| ------ | ------------------- |
| 200    | Account limits info |

### /oapi/v1/devices

#### GET
##### Summary:

Lists devices

##### Responses

| Código | Descrição       |
| ------ | --------------- |
| 200    | List of devices |

#### POST
##### Summary:

Creates a new device

##### Responses

| Código | Descrição                       |
| ------ | ------------------------------- |
| 200    | Device created                  |
| 400    | Validation failed               |
| 429    | Devices count reached the limit |

### /oapi/v1/devices/{device_id}

#### DELETE
##### Summary:

Removes a device

##### Parameters

| Name      | Located in | Descrição | Required | Schema |
| --------- | ---------- | --------- | -------- | ------ |
| device_id | path       |           | Sim      | string |

##### Responses

| Código | Descrição                  |
| ------ | -------------------------- |
| 200    | Device deleted             |
| 404    | Dispositivo não encontrado |

#### GET
##### Summary:

Gets an existing device by ID

##### Parameters

| Name      | Located in | Descrição | Required | Schema |
| --------- | ---------- | --------- | -------- | ------ |
| device_id | path       |           | Sim      | string |

##### Responses

| Código | Descrição                  |
| ------ | -------------------------- |
| 200    | Device info                |
| 404    | Dispositivo não encontrado |

#### PUT
##### Summary:

Updates an existing device

##### Parameters

| Name      | Located in | Descrição | Required | Schema |
| --------- | ---------- | --------- | -------- | ------ |
| device_id | path       |           | Sim      | string |

##### Responses

| Código | Descrição                  |
| ------ | -------------------------- |
| 200    | Device updated             |
| 400    | Validation failed          |
| 404    | Dispositivo não encontrado |

### /oapi/v1/devices/{device_id}/doh.mobileconfig

#### GET
##### Summary:

Gets DNS-over-HTTPS .mobileconfig file.

##### Parameters

| Name                    | Located in | Descrição                                                                      | Required | Schema     |
| ----------------------- | ---------- | ------------------------------------------------------------------------------ | -------- | ---------- |
| device_id               | path       |                                                                                | Sim      | string     |
| exclude_wifi_networks | query      | List Wi-Fi networks by their SSID in which you want AdGuard DNS to be disabled | Não      | [ string ] |
| exclude_domain          | query      | List domains that will use default DNS servers instead of AdGuard DNS          | Não      | [ string ] |

##### Responses

| Código | Descrição                  |
| ------ | -------------------------- |
| 200    | DNS-over-HTTPS .plist file |
| 404    | Dispositivo não encontrado |

### /oapi/v1/devices/{device_id}/dot.mobileconfig

#### GET
##### Summary:

Gets DNS-over-TLS .mobileconfig file.

##### Parameters

| Name                    | Located in | Descrição                                                                      | Required | Schema     |
| ----------------------- | ---------- | ------------------------------------------------------------------------------ | -------- | ---------- |
| device_id               | path       |                                                                                | Sim      | string     |
| exclude_wifi_networks | query      | List Wi-Fi networks by their SSID in which you want AdGuard DNS to be disabled | Não      | [ string ] |
| exclude_domain          | query      | List domains that will use default DNS servers instead of AdGuard DNS          | Não      | [ string ] |

##### Responses

| Código | Descrição                  |
| ------ | -------------------------- |
| 200    | DNS-over-HTTPS .plist file |
| 404    | Dispositivo não encontrado |

### /oapi/v1/devices/{device_id}/settings

#### PUT
##### Summary:

Updates device settings

##### Parameters

| Name      | Located in | Descrição | Required | Schema |
| --------- | ---------- | --------- | -------- | ------ |
| device_id | path       |           | Sim      | string |

##### Responses

| Código | Descrição                  |
| ------ | -------------------------- |
| 200    | Device settings updated    |
| 400    | Validation failed          |
| 404    | Dispositivo não encontrado |

### /oapi/v1/dns_servers

#### GET
##### Summary:

Lists DNS servers that belong to the user.

##### Descrição:

Lists DNS servers that belong to the user. By default there is at least one default server.

##### Responses

| Código | Descrição           |
| ------ | ------------------- |
| 200    | List of DNS servers |

#### POST
##### Summary:

Creates a new DNS server

##### Descrição:

Creates a new DNS server. You can attach custom settings, otherwise DNS server will be created with default settings.

##### Responses

| Código | Descrição                           |
| ------ | ----------------------------------- |
| 200    | DNS server created                  |
| 400    | Validation failed                   |
| 429    | DNS servers count reached the limit |

### /oapi/v1/dns_servers/{dns_server_id}

#### DELETE
##### Summary:

Removes a DNS server

##### Descrição:

Removes a DNS server. All devices attached to this DNS server will be moved to the default DNS server. Deleting a default DNS server is forbidden.

##### Parameters

| Name            | Located in | Descrição | Required | Schema |
| --------------- | ---------- | --------- | -------- | ------ |
| dns_server_id | path       |           | Sim      | string |

##### Responses

| Código | Descrição            |
| ------ | -------------------- |
| 200    | DNS server deleted   |
| 404    | DNS server not found |

#### GET
##### Summary:

Gets an existing DNS server by ID

##### Parameters

| Name            | Located in | Descrição | Required | Schema |
| --------------- | ---------- | --------- | -------- | ------ |
| dns_server_id | path       |           | Sim      | string |

##### Responses

| Código | Descrição            |
| ------ | -------------------- |
| 200    | DNS server info      |
| 404    | DNS server not found |

#### PUT
##### Summary:

Updates an existing DNS server

##### Parameters

| Name            | Located in | Descrição | Required | Schema |
| --------------- | ---------- | --------- | -------- | ------ |
| dns_server_id | path       |           | Sim      | string |

##### Responses

| Código | Descrição            |
| ------ | -------------------- |
| 200    | DNS server updated   |
| 400    | Validation failed    |
| 404    | DNS server not found |

### /oapi/v1/dns_servers/{dns_server_id}/settings

#### PUT
##### Summary:

Updates DNS server settings

##### Parameters

| Name            | Located in | Descrição | Required | Schema |
| --------------- | ---------- | --------- | -------- | ------ |
| dns_server_id | path       |           | Sim      | string |

##### Responses

| Código | Descrição                   |
| ------ | --------------------------- |
| 200    | DNS server settings updated |
| 400    | Validation failed           |
| 404    | DNS server not found        |

### /oapi/v1/filter_lists

#### GET
##### Summary:

Gets filter lists

##### Responses

| Código | Descrição       |
| ------ | --------------- |
| 200    | List of filters |

### /oapi/v1/oauth_token

#### POST
##### Summary:

Generates Access and Refresh token

##### Responses

| Código | Descrição                                                |
| ------ | -------------------------------------------------------- |
| 200    | Access token issued                                      |
| 400    | Missing required parameters                              |
| 401    | Invalid credentials, MFA token or refresh token provided |

null

### /oapi/v1/query_log

#### DELETE
##### Summary:

Clears query log

##### Responses

| Código | Descrição             |
| ------ | --------------------- |
| 202    | Query log was cleared |

#### GET
##### Summary:

Gets query log

##### Parameters

| Name               | Located in | Descrição                                                                  | Required | Schema                                              |
| ------------------ | ---------- | -------------------------------------------------------------------------- | -------- | --------------------------------------------------- |
| time_from_millis | query      | Time from in milliseconds (inclusive)                                      | Sim      | long                                                |
| time_to_millis   | query      | Time to in milliseconds (inclusive)                                        | Sim      | long                                                |
| devices            | query      | Filter by devices                                                          | Não      | [ string ]                                          |
| countries          | query      | Filter by countries                                                        | Não      | [ string ]                                          |
| companies          | query      | Filter by companies                                                        | Não      | [ string ]                                          |
| statuses           | query      | Filter by statuses                                                         | Não      | [ [FilteringActionStatus](#FilteringActionStatus) ] |
| categories         | query      | Filter by categories                                                       | Não      | [ [CategoryType](#CategoryType) ]                   |
| search             | query      | Filter by domain name                                                      | Não      | string                                              |
| limit              | query      | Limit the number of records to be returned                                 | Não      | integer                                             |
| cursor             | query      | Pagination cursor. Use cursor from response to paginate through the pages. | Não      | string                                              |

##### Responses

| Código | Descrição |
| ------ | --------- |
| 200    | Query log |

### /oapi/v1/revoke_token

#### POST
##### Summary:

Revokes a Refresh Token

##### Parameters

| Name          | Located in | Descrição     | Required | Schema |
| ------------- | ---------- | ------------- | -------- | ------ |
| refresh_token | query      | Refresh Token | Sim      | string |

##### Responses

| Código | Descrição             |
| ------ | --------------------- |
| 200    | Refresh token revoked |

null

### /oapi/v1/stats/categories

#### GET
##### Summary:

Gets categories statistics

##### Parameters

| Name               | Located in | Descrição                             | Required | Schema     |
| ------------------ | ---------- | ------------------------------------- | -------- | ---------- |
| time_from_millis | query      | Time from in milliseconds (inclusive) | Sim      | long       |
| time_to_millis   | query      | Time to in milliseconds (inclusive)   | Sim      | long       |
| devices            | query      | Filter by devices                     | Não      | [ string ] |
| countries          | query      | Filter by countries                   | Não      | [ string ] |

##### Responses

| Código | Descrição                      |
| ------ | ------------------------------ |
| 200    | Categories statistics received |
| 400    | Validation failed              |

### /oapi/v1/stats/companies

#### GET
##### Summary:

Gets companies statistics

##### Parameters

| Name               | Located in | Descrição                             | Required | Schema     |
| ------------------ | ---------- | ------------------------------------- | -------- | ---------- |
| time_from_millis | query      | Time from in milliseconds (inclusive) | Sim      | long       |
| time_to_millis   | query      | Time to in milliseconds (inclusive)   | Sim      | long       |
| devices            | query      | Filter by devices                     | Não      | [ string ] |
| countries          | query      | Filter by countries                   | Não      | [ string ] |

##### Responses

| Código | Descrição                     |
| ------ | ----------------------------- |
| 200    | Companies statistics received |
| 400    | Validation failed             |

### /oapi/v1/stats/companies/detailed

#### GET
##### Summary:

Gets detailed companies statistics

##### Parameters

| Name               | Located in | Descrição                             | Required | Schema     |
| ------------------ | ---------- | ------------------------------------- | -------- | ---------- |
| time_from_millis | query      | Time from in milliseconds (inclusive) | Sim      | long       |
| time_to_millis   | query      | Time to in milliseconds (inclusive)   | Sim      | long       |
| devices            | query      | Filter by devices                     | Não      | [ string ] |
| countries          | query      | Filter by countries                   | Não      | [ string ] |
| cursor             | query      | Pagination cursor                     | Não      | string     |

##### Responses

| Código | Descrição                              |
| ------ | -------------------------------------- |
| 200    | Detailed companies statistics received |
| 400    | Validation failed                      |

### /oapi/v1/stats/countries

#### GET
##### Summary:

Gets countries statistics

##### Parameters

| Name               | Located in | Descrição                             | Required | Schema     |
| ------------------ | ---------- | ------------------------------------- | -------- | ---------- |
| time_from_millis | query      | Time from in milliseconds (inclusive) | Sim      | long       |
| time_to_millis   | query      | Time to in milliseconds (inclusive)   | Sim      | long       |
| devices            | query      | Filter by devices                     | Não      | [ string ] |
| countries          | query      | Filter by countries                   | Não      | [ string ] |

##### Responses

| Código | Descrição                     |
| ------ | ----------------------------- |
| 200    | Countries statistics received |
| 400    | Validation failed             |

### /oapi/v1/stats/devices

#### GET
##### Summary:

Gets devices statistics

##### Parameters

| Name               | Located in | Descrição                             | Required | Schema     |
| ------------------ | ---------- | ------------------------------------- | -------- | ---------- |
| time_from_millis | query      | Time from in milliseconds (inclusive) | Sim      | long       |
| time_to_millis   | query      | Time to in milliseconds (inclusive)   | Sim      | long       |
| devices            | query      | Filter by devices                     | Não      | [ string ] |
| countries          | query      | Filter by countries                   | Não      | [ string ] |

##### Responses

| Código | Descrição                   |
| ------ | --------------------------- |
| 200    | Devices statistics received |
| 400    | Validation failed           |

### /oapi/v1/stats/domains

#### GET
##### Summary:

Gets domains statistics

##### Parameters

| Name               | Located in | Descrição                             | Required | Schema     |
| ------------------ | ---------- | ------------------------------------- | -------- | ---------- |
| time_from_millis | query      | Time from in milliseconds (inclusive) | Sim      | long       |
| time_to_millis   | query      | Time to in milliseconds (inclusive)   | Sim      | long       |
| devices            | query      | Filter by devices                     | Não      | [ string ] |
| countries          | query      | Filter by countries                   | Não      | [ string ] |

##### Responses

| Código | Descrição                   |
| ------ | --------------------------- |
| 200    | Domains statistics received |
| 400    | Validation failed           |

### /oapi/v1/stats/time

#### GET
##### Summary:

Gets time statistics

##### Parameters

| Name               | Located in | Descrição                             | Required | Schema     |
| ------------------ | ---------- | ------------------------------------- | -------- | ---------- |
| time_from_millis | query      | Time from in milliseconds (inclusive) | Sim      | long       |
| time_to_millis   | query      | Time to in milliseconds (inclusive)   | Sim      | long       |
| devices            | query      | Filter by devices                     | Não      | [ string ] |
| countries          | query      | Filter by countries                   | Não      | [ string ] |

##### Responses

| Código | Descrição                |
| ------ | ------------------------ |
| 200    | Time statistics received |
| 400    | Validation failed        |

### /oapi/v1/web_services

#### GET
##### Summary:

Lists web services

##### Responses

| Código | Descrição            |
| ------ | -------------------- |
| 200    | List of web-services |
