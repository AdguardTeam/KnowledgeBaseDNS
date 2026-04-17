---
title: Referencia
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

{/* The content below is simply an automatic conversion from the OpenAPI spec https://api.adguard-dns.io/static/swagger/openapi.json to markdown using https://swagger-markdown-ui.netlify.app/.

    If you want to change it, ask the developers to change the OpenAPI spec.
*/}

This article contains documentation for [AdGuard DNS API](private-dns/api/overview.md). For the complete AdGuard DNS API changelog, visit [this page](private-dns/api/changelog.md).

## Current version: 1.10

### /oapi/v1/account/limits

#### GET

##### Resumen

Gets account limits

##### Respuestas

| Código | Descripción                      |
| ------ | -------------------------------- |
| 200    | Información de límites de cuenta |

### /oapi/v1/dedicated_addresses/ipv4

#### GET

##### Resumen

Lists dedicated IPv4 addresses

##### Respuestas

| Código | Descripción                         |
| ------ | ----------------------------------- |
| 200    | Lista de direcciones IPv4 dedicadas |

#### POST

##### Resumen

Allocates new IPv4

##### Respuestas

| Código | Descripción                                        |
| ------ | -------------------------------------------------- |
| 200    | Nueva IPv4 asignada con éxito                      |
| 429    | Se alcanzó el límite de direcciones IPv4 dedicadas |

### /oapi/v1/devices

#### GET

##### Resumen

Lists devices

##### Respuestas

| Código | Descripción           |
| ------ | --------------------- |
| 200    | Lista de dispositivos |

#### POST

##### Resumen

Creates a new device

##### Respuestas

| Código | Descripción                                 |
| ------ | ------------------------------------------- |
| 200    | Dispositivo creado                          |
| 400    | Validación fallida                          |
| 429    | El número de dispositivos alcanzó el límite |

### /oapi/v1/devices/\{device_id\}

#### DELETE

##### Resumen

Removes a device

##### Parámetros

| Nombre    | Ubicado en | Descripción | Requerido | Esquema |
| --------- | ---------- | ----------- | --------- | ------- |
| device_id | path       |             | Sí        | linha   |

##### Respuestas

| Código | Descripción               |
| ------ | ------------------------- |
| 200    | Dispositivo eliminado     |
| 404    | Dispositivo no encontrado |

#### GET

##### Resumen

Gets an existing device by ID

##### Parámetros

| Nombre    | Ubicado en | Descripción | Requerido | Esquema |
| --------- | ---------- | ----------- | --------- | ------- |
| device_id | path       |             | Sí        | string  |

##### Respuestas

| Código | Descripción                 |
| ------ | --------------------------- |
| 200    | Información del dispositivo |
| 404    | Dispositivo no encontrado   |

#### PUT

##### Resumen

Updates an existing device

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

### /oapi/v1/devices/\{device_id\}/dedicated_addresses

#### GET

##### Resumen

List dedicated IPv4 and IPv6 addresses for a device

##### Parámetros

| Nombre    | Ubicado en | Descripción | Requerido | Esquema |
| --------- | ---------- | ----------- | --------- | ------- |
| device_id | path       |             | Sí        | string  |

##### Respuestas

| Código | Descripción           |
| ------ | --------------------- |
| 200    | IPv4 e IPv6 dedicados |

### /oapi/v1/devices/\{device_id\}/dedicated_addresses/ipv4

#### DELETE

##### Resumen

Unlink dedicated IPv4 from the device

##### Parámetros

| Nombre    | Ubicado en | Descripción | Requerido | Esquema |
| --------- | ---------- | ----------- | --------- | ------- |
| device_id | path       |             | Sí        | linha   |

##### Respuestas

| Código | Descripción                                          |
| ------ | ---------------------------------------------------- |
| 200    | IPv4 dedicada desvinculada del dispositivo con éxito |
| 404    | Dispositivo o dirección no encontrados               |

#### POST

##### Resumen

Link dedicated IPv4 to the device

##### Parámetros

| Nombre    | Ubicado en | Descripción | Requerido | Esquema |
| --------- | ---------- | ----------- | --------- | ------- |
| device_id | path       |             | Sí        | linha   |

##### Respuestas

| Código | Descripción                                                      |
| ------ | ---------------------------------------------------------------- |
| 200    | IPv4 dedicada vinculada al dispositivo con éxito                 |
| 400    | Validación fallida                                               |
| 404    | Dispositivo o dirección no encontrados                           |
| 429    | Se alcanzó el límite de la cantidad de IPv4 dedicadas vinculadas |

### /oapi/v1/devices/\{device_id\}/doh.mobileconfig

#### GET

##### Resumen

Gets DNS-over-HTTPS .mobileconfig file.

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

### /oapi/v1/devices/\{device_id\}/doh_password/reset

#### PUT

##### Resumen

Generate and set new DNS-over-HTTPS password

##### Parámetros

| Nombre    | Ubicado en | Descripción | Requerido | Esquema |
| --------- | ---------- | ----------- | --------- | ------- |
| device_id | path       |             | Sí        | string  |

##### Respuestas

| Código | Descripción                                         |
| ------ | --------------------------------------------------- |
| 200    | Contraseña de DNS-over-HTTPS restablecida con éxito |
| 404    | Dispositivo no encontrado                           |

### /oapi/v1/devices/\{device_id\}/dot.mobileconfig

#### OBTENER

##### Resumen

Gets DNS-over-TLS .mobileconfig file.

##### Parámetros

| Nombre                  | Ubicado en | Descripción                                                                            | Requerido | Esquema   |
| ----------------------- | ---------- | -------------------------------------------------------------------------------------- | --------- | --------- |
| device_id               | path       |                                                                                        | Sí        | string    |
| exclude_wifi_networks | consulta   | Enumera las redes Wi-Fi por su SSID, en las que deseas deshabilitar AdGuard DNS        | No        | [ linha ] |
| exclude_domain          | consulta   | Enumera los dominios que usarán servidores DNS predeterminados en lugar de AdGuard DNS | No        | [ linha ] |

##### Respuestas

| Código | Descripción                    |
| ------ | ------------------------------ |
| 200    | Archivo .plist DNS-sobre-HTTPS |
| 404    | Dispositivo no encontrado      |

### /oapi/v1/devices/\{device_id\}/settings

#### PUT

##### Resumen

Updates device settings

##### Parámetros

| Nombre    | Ubicado en | Descripción | Requerido | Esquema |
| --------- | ---------- | ----------- | --------- | ------- |
| device_id | path       |             | Sí        | string  |

##### Respuestas

| Código | Descripción                               |
| ------ | ----------------------------------------- |
| 200    | Configuración del dispositivo actualizada |
| 400    | Validación fallida                        |
| 404    | Dispositivo no encontrado                 |

### /oapi/v1/dns_servers

#### OBTENER

##### Resumen

Lists DNS servers that belong to the user.

##### Descripción

Lists DNS servers that belong to the user. By default there is at least one default server.

##### Respuestas

| Código | Descripción             |
| ------ | ----------------------- |
| 200    | Lista de servidores DNS |

#### POST

##### Resumen

Creates a new DNS server

##### Descripción

Creates a new DNS server. You can attach custom settings, otherwise DNS server will be created with default settings.

##### Respuestas

| Código | Descripción                            |
| ------ | -------------------------------------- |
| 200    | Servidor DNS creado                    |
| 400    | Validación fallida                     |
| 429    | Se alcanzó el límite de servidores DNS |

### /oapi/v1/dns_servers/\{dns_server_id\}

#### DELETE

##### Resumen

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
| 200    | Servidor DNS eliminado     |
| 404    | Servidor DNS no encontrado |

#### OBTENER

##### Resumen

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

##### Resumen

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

### /oapi/v1/dns_servers/\{dns_server_id\}/settings

#### PUT

##### Resumen

Updates DNS server settings

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

##### Resumen

Gets filter lists

##### Respuestas

| Código | Descripción      |
| ------ | ---------------- |
| 200    | Lista de filtros |

### /oapi/v1/oauth_token

#### POST

##### Resumen

Generates Access and Refresh token

##### Respuestas

| Código | Descripción                                                               |
| ------ | ------------------------------------------------------------------------- |
| 200    | Token de acceso emitido                                                   |
| 400    | Faltan parámetros obligatorios                                            |
| 401    | Credenciales no válidas, token MFA o token de actualización proporcionado |

null

### /oapi/v1/query_log

#### DELETE

##### Resumen

Clears query log

##### Respuestas

| Código | Descripción                       |
| ------ | --------------------------------- |
| 202    | Se borró el registro de consultas |

#### GET

##### Resumen

Gets query log

##### Parámetros

| Nombre             | Ubicado en | Descripción                                                                            | Requerido | Esquema                                             |
| ------------------ | ---------- | -------------------------------------------------------------------------------------- | --------- | --------------------------------------------------- |
| time_from_millis | query      | Tiempo desde en milisegundos (inclusivo)                                               | Sí        | long                                                |
| time_to_millis   | query      | Tiempo hasta en milisegundos (inclusivo)                                               | Sí        | long                                                |
| devices            | query      | Filtra por dispositivos                                                                | No        | [ string ]                                          |
| countries          | query      | Filtra por países                                                                      | No        | [ string ]                                          |
| companies          | query      | Filtra por empresas                                                                    | No        | [ string ]                                          |
| statuses           | query      | Filtra por status                                                                      | No        | [ [FilteringActionStatus](#FilteringActionStatus) ] |
| categories         | query      | Filtra por categorías                                                                  | No        | [ [CategoryType](#CategoryType) ]                   |
| search             | query      | Filtrar por nombre de dominio                                                          | No        | linha                                               |
| limit              | query      | Limita el número de registros a devolver                                               | No        | integer                                             |
| cursor             | query      | Cursor de paginación. Usa el cursor de respuesta para paginar a través de las páginas. | No        | linha                                               |

##### Respuestas

| Código | Descripción           |
| ------ | --------------------- |
| 200    | Registro de consultas |

### /oapi/v1/revoke_token

#### POST

##### Resumen

Revokes a Refresh Token

##### Parámetros

| Nombre        | Ubicado en | Descripción            | Requerido | Esquema |
| ------------- | ---------- | ---------------------- | --------- | ------- |
| refresh_token | query      | Token de actualización | Sí        | linha   |

##### Respuestas

| Código | Descripción                     |
| ------ | ------------------------------- |
| 200    | Token de actualización revocado |

null

### /oapi/v1/stats/categories

#### GET

##### Resumen

Gets categories statistics

##### Parámetros

| Nombre             | Ubicado en | Descripción                              | Requerido | Esquema    |
| ------------------ | ---------- | ---------------------------------------- | --------- | ---------- |
| time_from_millis | query      | Tiempo desde en milisegundos (inclusivo) | Sí        | long       |
| time_to_millis   | query      | Tiempo hasta en milisegundos (inclusivo) | Sí        | long       |
| devices            | query      | Filtrar por dispositivos                 | No        | [ string ] |
| countries          | query      | Filtra por países                        | No        | [ string ] |

##### Respuestas

| Código | Descripción                       |
| ------ | --------------------------------- |
| 200    | Categorías estadísticas recibidas |
| 400    | Validación fallida                |

### /oapi/v1/stats/companies

#### GET

##### Resumen

Gets companies statistics

##### Parámetros

| Nombre             | Ubicado en | Descripción                              | Requerido | Esquema    |
| ------------------ | ---------- | ---------------------------------------- | --------- | ---------- |
| time_from_millis | query      | Tiempo desde en milisegundos (inclusivo) | Sí        | long       |
| time_to_millis   | query      | Tiempo hasta en milisegundos (inclusivo) | Sí        | long       |
| devices            | consulta   | Filtrar por dispositivos                 | No        | [ linha ]  |
| countries          | query      | Filtra por países                        | No        | [ string ] |

##### Respuestas

| Código | Descripción                        |
| ------ | ---------------------------------- |
| 200    | Estadísticas de empresas recibidas |
| 400    | Validación fallida                 |

### /oapi/v1/stats/companies/detailed

#### GET

##### Resumen

Gets detailed companies statistics

##### Parámetros

| Nombre             | Ubicado en | Descripción                              | Requerido | Esquema    |
| ------------------ | ---------- | ---------------------------------------- | --------- | ---------- |
| time_from_millis | consulta   | Tiempo desde en milisegundos (inclusivo) | Sí        | long       |
| time_to_millis   | query      | Tiempo hasta en milisegundos (inclusivo) | Sí        | long       |
| devices            | consulta   | Filtra por dispositivos                  | No        | [ linha ]  |
| countries          | consulta   | Filtra por países                        | No        | [ string ] |
| cursor             | consulta   | Cursor de paginación                     | No        | linha      |

##### Respuestas

| Código | Descripción                                   |
| ------ | --------------------------------------------- |
| 200    | Estadísticas detalladas de empresas recibidas |
| 400    | Validación fallida                            |

### /oapi/v1/stats/countries

#### GET

##### Resumen

Gets countries statistics

##### Parámetros

| Nombre             | Ubicado en | Descripción                              | Requerido | Esquema    |
| ------------------ | ---------- | ---------------------------------------- | --------- | ---------- |
| time_from_millis | query      | Tiempo desde en milisegundos (inclusivo) | Sí        | long       |
| time_to_millis   | consulta   | Tiempo hasta en milisegundos (inclusivo) | Sí        | long       |
| devices            | consulta   | Filtra por dispositivos                  | No        | [ string ] |
| countries          | consulta   | Filtra por países                        | No        | [ linha ]  |

##### Respuestas

| Código | Descripción                      |
| ------ | -------------------------------- |
| 200    | Estadísticas de países recibidas |
| 400    | Validación fallida               |

### /oapi/v1/stats/devices

#### GET

##### Resumen

Gets devices statistics

##### Parámetros

| Nombre             | Ubicado en | Descripción                              | Requerido | Esquema    |
| ------------------ | ---------- | ---------------------------------------- | --------- | ---------- |
| time_from_millis | query      | Tiempo desde en milisegundos (inclusivo) | Sí        | long       |
| time_to_millis   | consulta   | Tiempo hasta en milisegundos (inclusivo) | Sí        | long       |
| devices            | consulta   | Filtrar por dispositivos                 | No        | [ string ] |
| countries          | query      | Filtra por países                        | No        | [ linha ]  |

##### Respuestas

| Código | Descripción                            |
| ------ | -------------------------------------- |
| 200    | Estadísticas de dispositivos recibidas |
| 400    | Validación fallida                     |

### /oapi/v1/stats/domains

#### GET

##### Resumen

Gets domains statistics

##### Parámetros

| Nombre             | Ubicado en | Descripción                              | Requerido | Esquema    |
| ------------------ | ---------- | ---------------------------------------- | --------- | ---------- |
| time_from_millis | query      | Tiempo desde en milisegundos (inclusivo) | Sí        | long       |
| time_to_millis   | query      | Tiempo hasta en milisegundos (inclusivo) | Sí        | long       |
| devices            | query      | Filtrar por dispositivos                 | No        | [ string ] |
| countries          | query      | Filtra por países                        | No        | [ linha ]  |

##### Respuestas

| Código | Descripción                        |
| ------ | ---------------------------------- |
| 200    | Estadísticas de dominios recibidas |
| 400    | Validación fallida                 |

### /oapi/v1/stats/time

#### GET

##### Resumen

Gets time statistics

##### Parámetros

| Nombre             | Ubicado en | Descripción                              | Requerido | Esquema    |
| ------------------ | ---------- | ---------------------------------------- | --------- | ---------- |
| time_from_millis | query      | Tiempo desde en milisegundos (inclusivo) | Sí        | long       |
| time_to_millis   | query      | Tiempo hasta en milisegundos (inclusivo) | Sí        | long       |
| devices            | consulta   | Filtra por dispositivos                  | No        | [ string ] |
| countries          | consulta   | Filtra por países                        | No        | [ string ] |

##### Respuestas

| Código | Descripción                      |
| ------ | -------------------------------- |
| 200    | Estadísticas de tiempo recibidas |
| 400    | Validación fallida               |

### /oapi/v1/web_services

#### GET

##### Resumen

Lists web services

##### Respuestas

| Código | Descripción            |
| ------ | ---------------------- |
| 200    | Lista de servicios web |
