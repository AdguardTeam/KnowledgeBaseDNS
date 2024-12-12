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

Este artículo contiene la documentación para la [API de AdGuard DNS](private-dns/api/overview.md). Para ver el registro de cambios completo de la API de AdGuard DNS, visita [esta página](private-dns/api/changelog.md).

## Versión actual: 1.9

### /oapi/v1/account/limits

#### GET

##### Resumen

Obtiene los límites de la cuenta

##### Respuestas

| Código | Descripción                      |
| ------ | -------------------------------- |
| 200    | Información de límites de cuenta |

### /oapi/v1/dedicated_addresses/ipv4

#### GET

##### Resumen

Lista de direcciones IPv4 dedicadas

##### Respuestas

| Código | Descripción                         |
| ------ | ----------------------------------- |
| 200    | Lista de direcciones IPv4 dedicadas |

#### POST

##### Resumen

Asignar nueva IPv4

##### Respuestas

| Código | Descripción                                        |
| ------ | -------------------------------------------------- |
| 200    | Nueva IPv4 asignada con éxito                      |
| 429    | Se alcanzó el límite de direcciones IPv4 dedicadas |

### /oapi/v1/devices

#### GET

##### Resumen

Listas de dispositivos

##### Respuestas

| Código | Descripción           |
| ------ | --------------------- |
| 200    | Lista de dispositivos |

#### POST

##### Resumen

Crea un nuevo dispositivo

##### Respuestas

| Código | Descripción                                 |
| ------ | ------------------------------------------- |
| 200    | Dispositivo creado                          |
| 400    | Validación fallida                          |
| 429    | El número de dispositivos alcanzó el límite |

### /oapi/v1/devices/{device_id}

#### DELETE

##### Resumen

Elimina un dispositivo

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

Obtiene un dispositivo existente por ID

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

### /oapi/v1/devices/{device_id}/dedicated_addresses

#### GET

##### Resumen

Lista de direcciones IPv4 e IPv6 dedicadas para un dispositivo

##### Parámetros

| Nombre    | Ubicado en | Descripción | Requerido | Esquema |
| --------- | ---------- | ----------- | --------- | ------- |
| device_id | path       |             | Sí        | string  |

##### Respuestas

| Código | Descripción           |
| ------ | --------------------- |
| 200    | IPv4 e IPv6 dedicados |

### /oapi/v1/devices/{device_id}/dedicated_addresses/ipv4

#### DELETE

##### Resumen

Desvincular IPv4 dedicada del dispositivo

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

Vincular IPv4 dedicada al dispositivo

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

### /oapi/v1/devices/{device_id}/doh.mobileconfig

#### GET

##### Resumen

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

### /oapi/v1/devices/{device_id}/doh_password/reset

#### PUT

##### Resumen

Generar y establecer nueva contraseña para DNS-over-HTTPS

##### Parámetros

| Nombre    | Ubicado en | Descripción | Requerido | Esquema |
| --------- | ---------- | ----------- | --------- | ------- |
| device_id | path       |             | Sí        | string  |

##### Respuestas

| Código | Descripción                                         |
| ------ | --------------------------------------------------- |
| 200    | Contraseña de DNS-over-HTTPS restablecida con éxito |
| 404    | Dispositivo no encontrado                           |

### /oapi/v1/devices/{device_id}/dot.mobileconfig

#### OBTENER

##### Resumen

Obtiene el archivo .mobileconfig de DNS-over-TLS.

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

### /oapi/v1/devices/{device_id}/settings

#### PUT

##### Resumen

Actualiza la configuración del dispositivo

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

Lista los servidores DNS que pertenecen al usuario.

##### Descripción

Lista los servidores DNS que pertenecen al usuario. De forma predeterminada, hay al menos un servidor predeterminado.

##### Respuestas

| Código | Descripción             |
| ------ | ----------------------- |
| 200    | Lista de servidores DNS |

#### POST

##### Resumen

Crea un nuevo servidor DNS

##### Descripción

Crea un nuevo servidor DNS. Puedes adjuntar configuraciones personalizadas; de lo contrario, el servidor DNS se creará con la configuración predeterminada.

##### Respuestas

| Código | Descripción                            |
| ------ | -------------------------------------- |
| 200    | Servidor DNS creado                    |
| 400    | Validación fallida                     |
| 429    | Se alcanzó el límite de servidores DNS |

### /oapi/v1/dns_servers/{dns_server_id}

#### DELETE

##### Resumen

Elimina un servidor DNS

##### Descripción

Elimina un servidor DNS. Todos los dispositivos conectados a este servidor DNS se moverán al servidor DNS por defecto. Está prohibido eliminar un servidor DNS predeterminado.

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

Obtiene un servidor DNS existente por ID

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

Actualiza un servidor DNS existente

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

##### Resumen

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

##### Resumen

Obtiene listas de filtros

##### Respuestas

| Código | Descripción      |
| ------ | ---------------- |
| 200    | Lista de filtros |

### /oapi/v1/oauth_token

#### POST

##### Resumen

Genera un token de Acceso y Actualización

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

Borrar registros de consultas

##### Respuestas

| Código | Descripción                       |
| ------ | --------------------------------- |
| 202    | Se borró el registro de consultas |

#### GET

##### Resumen

Obtiene el registro de consultas

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

Revoca un Token de Actualización

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

Obtiene estadísticas de categorías

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

Obtiene estadísticas de empresas

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

Obtiene estadísticas detalladas de empresas

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

Obtiene estadísticas de países

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

Obtiene estadísticas de dispositivos

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

Obtiene estadísticas de dominios

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

Obtiene estadísticas de tiempo

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

Lista de servicios web

##### Respuestas

| Código | Descripción            |
| ------ | ---------------------- |
| 200    | Lista de servicios web |
