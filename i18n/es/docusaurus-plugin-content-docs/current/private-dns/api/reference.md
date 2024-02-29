---
title: Referencia
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

<!--
    The content below is simply an automatic conversion from the OpenAPI spec https://api.adguard-dns.io/static/swagger/openapi.json to markdown using https://swagger-markdown-ui.netlify.app/.

    If you want to change it, ask the developers to change the OpenAPI spec.
-->

This article contains documentation for [AdGuard DNS API](private-dns/api/overview.md). For the complete AdGuard DNS API changelog, visit [this page](private-dns/api/changelog.md).

## Current version: 1.6

### /oapi/v1/account/limits

#### GET

##### Summary

Gets account limits

##### Respuestas

| Código | Descripción         |
| ------ | ------------------- |
| 200    | Account limits info |

### /oapi/v1/devices

#### GET

##### Summary

Lists devices

##### Respuestas

| Código | Descripción     |
| ------ | --------------- |
| 200    | List of devices |

#### POST

##### Summary

Creates a new device

##### Respuestas

| Código | Descripción                     |
| ------ | ------------------------------- |
| 200    | Device created                  |
| 400    | Validación fallida              |
| 429    | Devices count reached the limit |

### /oapi/v1/devices/{device_id}

#### DELETE

##### Summary

Removes a device

##### Parámetros

| Nombre    | Ubicado en | Descripción | Requerido | Esquema |
| --------- | ---------- | ----------- | --------- | ------- |
| device_id | path       |             | Sí        | linha   |

##### Respuestas

| Código | Descripción               |
| ------ | ------------------------- |
| 200    | Device deleted            |
| 404    | Dispositivo no encontrado |

#### GET

##### Summary

Gets an existing device by ID

##### Parámetros

| Nombre    | Ubicado en | Descripción | Requerido | Esquema |
| --------- | ---------- | ----------- | --------- | ------- |
| device_id | path       |             | Sí        | string  |

##### Respuestas

| Código | Descripción               |
| ------ | ------------------------- |
| 200    | Device info               |
| 404    | Dispositivo no encontrado |

#### PUT

##### Summary

Actualiza un dispositivo existente

##### Parámetros

| Nombre    | Ubicado en | Descripción | Requerido | Esquema |
| --------- | ---------- | ----------- | --------- | ------- |
| device_id | path       |             | Sí        | string  |

##### Respuestas

| Código | Descripción               |
| ------ | ------------------------- |
| 200    | Dispositivo actualizado   |
| 400    | Validación fallida        |
| 404    | Dispositivo no encontrado |

### /oapi/v1/devices/{device_id}/doh.mobileconfig

#### GET

##### Summary

Obtiene el archivo DNS-over-HTTPS .mobileconfig.

##### Parámetros

| Nombre                  | Ubicado en | Descripción                                                                            | Requerido | Esquema    |
| ----------------------- | ---------- | -------------------------------------------------------------------------------------- | --------- | ---------- |
| device_id               | path       |                                                                                        | Sí        | string     |
| exclude_wifi_networks | consulta   | Enumera las redes Wi-Fi por su SSID, en las que deseas deshabilitar AdGuard DNS        | No        | [ linha ]  |
| exclude_domain          | consulta   | Enumera los dominios que usarán servidores DNS predeterminados en lugar de AdGuard DNS | No        | [ string ] |

##### Respuestas

| Código | Descripción                    |
| ------ | ------------------------------ |
| 200    | Archivo .plist DNS-sobre-HTTPS |
| 404    | Dispositivo no encontrado      |

### /oapi/v1/devices/{device_id}/dot.mobileconfig

#### GET

##### Summary

Obtiene el archivo .mobileconfig de DNS-over-TLS.

##### Parámetros

| Nombre                  | Ubicado en | Descripción                                                                            | Requerido | Esquema   |
| ----------------------- | ---------- | -------------------------------------------------------------------------------------- | --------- | --------- |
| device_id               | path       |                                                                                        | Sí        | linha     |
| exclude_wifi_networks | consulta   | Enumera las redes Wi-Fi por su SSID, en las que deseas deshabilitar AdGuard DNS        | No        | [ linha ] |
| exclude_domain          | consulta   | Enumera los dominios que usarán servidores DNS predeterminados en lugar de AdGuard DNS | No        | [ linha ] |

##### Respuestas

| Código | Descripción                    |
| ------ | ------------------------------ |
| 200    | Archivo .plist DNS-sobre-HTTPS |
| 404    | Dispositivo no encontrado      |

### /oapi/v1/devices/{device_id}/settings

#### PUT

##### Summary

Actualiza la configuración del dispositivo

##### Parámetros

| Nombre    | Ubicado en | Descripción | Requerido | Esquema |
| --------- | ---------- | ----------- | --------- | ------- |
| device_id | path       |             | Sí        | linha   |

##### Respuestas

| Código | Descripción                               |
| ------ | ----------------------------------------- |
| 200    | Configuración del dispositivo actualizada |
| 400    | Validación fallida                        |
| 404    | Dispositivo no encontrado                 |

### /oapi/v1/dns_servers

#### GET

##### Summary

Lists DNS servers that belong to the user.

##### Descripción

Lists DNS servers that belong to the user. By default there is at least one default server.

##### Respuestas

| Código | Descripción         |
| ------ | ------------------- |
| 200    | List of DNS servers |

#### POST

##### Summary

Crea un nuevo servidor DNS

##### Descripción

Crea un nuevo servidor DNS. Puedes adjuntar configuraciones personalizadas; de lo contrario, el servidor DNS se creará con la configuración predeterminada.

##### Respuestas

| Código | Descripción                         |
| ------ | ----------------------------------- |
| 200    | DNS server created                  |
| 400    | Validación fallida                  |
| 429    | DNS servers count reached the limit |

### /oapi/v1/dns_servers/{dns_server_id}

#### DELETE

##### Summary

Removes a DNS server

##### Descripción

Removes a DNS server. All devices attached to this DNS server will be moved to the default DNS server. Deleting the default DNS server is forbidden.

##### Parámetros

| Nombre          | Ubicado en | Descripción | Requerido | Esquema |
| --------------- | ---------- | ----------- | --------- | ------- |
| dns_server_id | path       |             | Sí        | string  |

##### Respuestas

| Código | Descripción                |
| ------ | -------------------------- |
| 200    | DNS server deleted         |
| 404    | Servidor DNS no encontrado |

#### OBTENER

##### Summary

Gets an existing DNS server by ID

##### Parámetros

| Nombre          | Ubicado en | Descripción | Requerido | Esquema |
| --------------- | ---------- | ----------- | --------- | ------- |
| dns_server_id | path       |             | Sí        | string  |

##### Respuestas

| Código | Descripción                  |
| ------ | ---------------------------- |
| 200    | Información del servidor DNS |
| 404    | Servidor DNS no encontrado   |

#### PUT

##### Summary

Updates an existing DNS server

##### Parámetros

| Nombre          | Ubicado en | Descripción | Requerido | Esquema |
| --------------- | ---------- | ----------- | --------- | ------- |
| dns_server_id | path       |             | Sí        | string  |

##### Respuestas

| Código | Descripción                |
| ------ | -------------------------- |
| 200    | Servidor DNS actualizado   |
| 400    | Validación fallida         |
| 404    | Servidor DNS no encontrado |

### /oapi/v1/dns_servers/{dns_server_id}/settings

#### PUT

##### Summary

Actualiza la configuración del servidor DNS

##### Parámetros

| Nombre          | Ubicado en | Descripción | Requerido | Esquema |
| --------------- | ---------- | ----------- | --------- | ------- |
| dns_server_id | path       |             | Sí        | string  |

##### Respuestas

| Código | Descripción                                |
| ------ | ------------------------------------------ |
| 200    | Configuración del servidor DNS actualizada |
| 400    | Validación fallida                         |
| 404    | Servidor DNS no encontrado                 |

### /oapi/v1/filter_lists

#### OBTENER

##### Summary

Obtiene listas de filtros

##### Respuestas

| Código | Descripción      |
| ------ | ---------------- |
| 200    | Lista de filtros |

### /oapi/v1/oauth_token

#### POST

##### Summary

Genera un token de Acceso y Actualización

##### Respuestas

| Código | Descripción                                              |
| ------ | -------------------------------------------------------- |
| 200    | Access token issued                                      |
| 400    | Missing required parameters                              |
| 401    | Invalid credentials, MFA token or refresh token provided |

### /oapi/v1/query_log

#### DELETE

##### Summary

Clears query log

##### Respuestas

| Código | Descripción           |
| ------ | --------------------- |
| 202    | Query log was cleared |

#### OBTENER

##### Summary

Gets query log

##### Parámetros

| Nombre             | Ubicado en | Descripción                                                                | Requerido | Esquema                                             |
| ------------------ | ---------- | -------------------------------------------------------------------------- | --------- | --------------------------------------------------- |
| time_from_millis | consulta   | Time from in milliseconds (inclusive)                                      | Sí        | long                                                |
| time_to_millis   | consulta   | Time to in milliseconds (inclusive)                                        | Sí        | long                                                |
| devices            | consulta   | Filter by devices                                                          | No        | [ string ]                                          |
| countries          | consulta   | Filter by countries                                                        | No        | [ string ]                                          |
| companies          | consulta   | Filter by companies                                                        | No        | [ string ]                                          |
| statuses           | consulta   | Filter by statuses                                                         | No        | [ [FilteringActionStatus](#FilteringActionStatus) ] |
| categories         | consulta   | Filter by categories                                                       | No        | [ [CategoryType](#CategoryType) ]                   |
| search             | consulta   | Filtrar por nombre de dominio                                              | No        | string                                              |
| limit              | consulta   | Limit the number of records to be returned                                 | No        | integer                                             |
| cursor             | consulta   | Pagination cursor. Use cursor from response to paginate through the pages. | No        | string                                              |

##### Respuestas

| Código | Descripción |
| ------ | ----------- |
| 200    | Query log   |

### /oapi/v1/revoke_token

#### POST

##### Summary

Revokes a Refresh Token

##### Parámetros

| Nombre        | Ubicado en | Descripción   | Requerido | Esquema |
| ------------- | ---------- | ------------- | --------- | ------- |
| refresh_token | consulta   | Refresh Token | Sí        | string  |

##### Respuestas

| Código | Descripción           |
| ------ | --------------------- |
| 200    | Refresh token revoked |

### /oapi/v1/stats/categories

#### OBTENER

##### Summary

Gets categories statistics

##### Parámetros

| Nombre             | Ubicado en | Descripción                           | Requerido | Esquema    |
| ------------------ | ---------- | ------------------------------------- | --------- | ---------- |
| time_from_millis | consulta   | Time from in milliseconds (inclusive) | Sí        | long       |
| time_to_millis   | consulta   | Time to in milliseconds (inclusive)   | Sí        | long       |
| devices            | consulta   | Filter by devices                     | No        | [ string ] |
| countries          | consulta   | Filter by countries                   | No        | [ string ] |

##### Respuestas

| Código | Descripción                    |
| ------ | ------------------------------ |
| 200    | Categories statistics received |
| 400    | Validación fallida             |

### /oapi/v1/stats/companies

#### GET

##### Summary

Gets companies statistics

##### Parámetros

| Nombre             | Ubicado en | Descripción                           | Requerido | Esquema    |
| ------------------ | ---------- | ------------------------------------- | --------- | ---------- |
| time_from_millis | consulta   | Time from in milliseconds (inclusive) | Sí        | long       |
| time_to_millis   | consulta   | Time to in milliseconds (inclusive)   | Sí        | long       |
| devices            | consulta   | Filter by devices                     | No        | [ linha ]  |
| countries          | consulta   | Filter by countries                   | No        | [ string ] |

##### Respuestas

| Código | Descripción                   |
| ------ | ----------------------------- |
| 200    | Companies statistics received |
| 400    | Validación fallida            |

### /oapi/v1/stats/companies/detailed

#### GET

##### Summary

Gets detailed companies statistics

##### Parámetros

| Nombre             | Ubicado en | Descripción                           | Requerido | Esquema    |
| ------------------ | ---------- | ------------------------------------- | --------- | ---------- |
| time_from_millis | consulta   | Time from in milliseconds (inclusive) | Sí        | long       |
| time_to_millis   | consulta   | Time to in milliseconds (inclusive)   | Sí        | long       |
| devices            | consulta   | Filter by devices                     | No        | [ linha ]  |
| countries          | consulta   | Filter by countries                   | No        | [ string ] |
| cursor             | consulta   | Pagination cursor                     | No        | string     |

##### Respuestas

| Código | Descripción                            |
| ------ | -------------------------------------- |
| 200    | Detailed companies statistics received |
| 400    | Validación fallida                     |

### /oapi/v1/stats/countries

#### GET

##### Summary

Gets countries statistics

##### Parámetros

| Nombre             | Ubicado en | Descripción                           | Requerido | Esquema    |
| ------------------ | ---------- | ------------------------------------- | --------- | ---------- |
| time_from_millis | consulta   | Time from in milliseconds (inclusive) | Sí        | long       |
| time_to_millis   | consulta   | Time to in milliseconds (inclusive)   | Sí        | long       |
| devices            | consulta   | Filter by devices                     | No        | [ string ] |
| countries          | consulta   | Filter by countries                   | No        | [ string ] |

##### Respuestas

| Código | Descripción                   |
| ------ | ----------------------------- |
| 200    | Countries statistics received |
| 400    | Validación fallida            |

### /oapi/v1/stats/devices

#### GET

##### Summary

Gets devices statistics

##### Parámetros

| Nombre             | Ubicado en | Descripción                           | Requerido | Esquema    |
| ------------------ | ---------- | ------------------------------------- | --------- | ---------- |
| time_from_millis | consulta   | Time from in milliseconds (inclusive) | Sí        | long       |
| time_to_millis   | consulta   | Time to in milliseconds (inclusive)   | Sí        | long       |
| devices            | consulta   | Filter by devices                     | No        | [ linha ]  |
| countries          | consulta   | Filter by countries                   | No        | [ string ] |

##### Respuestas

| Código | Descripción                 |
| ------ | --------------------------- |
| 200    | Devices statistics received |
| 400    | Validación fallida          |

### /oapi/v1/stats/domains

#### GET

##### Summary

Gets domains statistics

##### Parámetros

| Nombre             | Ubicado en | Descripción                           | Requerido | Esquema    |
| ------------------ | ---------- | ------------------------------------- | --------- | ---------- |
| time_from_millis | consulta   | Time from in milliseconds (inclusive) | Sí        | long       |
| time_to_millis   | consulta   | Time to in milliseconds (inclusive)   | Sí        | long       |
| devices            | consulta   | Filter by devices                     | No        | [ linha ]  |
| countries          | consulta   | Filter by countries                   | No        | [ string ] |

##### Respuestas

| Código | Descripción                 |
| ------ | --------------------------- |
| 200    | Domains statistics received |
| 400    | Validación fallida          |

### /oapi/v1/stats/time

#### GET

##### Summary

Gets time statistics

##### Parámetros

| Nombre             | Ubicado en | Descripción                           | Requerido | Esquema    |
| ------------------ | ---------- | ------------------------------------- | --------- | ---------- |
| time_from_millis | consulta   | Time from in milliseconds (inclusive) | Sí        | long       |
| time_to_millis   | consulta   | Time to in milliseconds (inclusive)   | Sí        | long       |
| devices            | consulta   | Filter by devices                     | No        | [ linha ]  |
| countries          | consulta   | Filter by countries                   | No        | [ string ] |

##### Respuestas

| Código | Descripción              |
| ------ | ------------------------ |
| 200    | Time statistics received |
| 400    | Validación fallida       |

### /oapi/v1/web_services

#### GET

##### Summary

Lists web services

##### Respuestas

| Código | Descripción          |
| ------ | -------------------- |
| 200    | List of web-services |
