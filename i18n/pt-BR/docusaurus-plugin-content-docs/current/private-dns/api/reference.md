---
title: Referência
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

#### OBTER

##### Summary

Obtém limites de conta

##### Respostas

| Código | Descrição                          |
| ------ | ---------------------------------- |
| 200    | Informações sobre limites de conta |

### /oapi/v1/devices

#### OBTER

##### Summary

Lista dispositivos

##### Respostas

| Código | Descrição             |
| ------ | --------------------- |
| 200    | Lista de dispositivos |

#### POST

##### Summary

Cria um novo dispositivo

##### Respostas

| Código | Descrição                                   |
| ------ | ------------------------------------------- |
| 200    | Dispositivo criado                          |
| 400    | Falha na validação                          |
| 429    | A contagem de dispositivos atingiu o limite |

### /oapi/v1/devices/{device_id}

#### EXCLUIR

##### Summary

Remove um dispositivo

##### Parâmetros

| Nome      | Localizado em | Descrição | Obrigatório | Esquema |
| --------- | ------------- | --------- | ----------- | ------- |
| device_id | path          |           | Sim         | linhas  |

##### Respostas

| Código | Descrição                  |
| ------ | -------------------------- |
| 200    | Dispositivo excluído       |
| 404    | Dispositivo não encontrado |

#### OBTER

##### Summary

Obtém um dispositivo existente por ID

##### Parâmetros

| Nome      | Localizado em | Descrição | Obrigatório | Esquema |
| --------- | ------------- | --------- | ----------- | ------- |
| device_id | path          |           | Sim         | linhas  |

##### Respostas

| Código | Descrição                  |
| ------ | -------------------------- |
| 200    | Informação do dispositivo  |
| 404    | Dispositivo não encontrado |

#### PUT

##### Summary

Atualiza um dispositivo existente

##### Parâmetros

| Nome      | Localizado em | Descrição | Obrigatório | Esquema |
| --------- | ------------- | --------- | ----------- | ------- |
| device_id | path          |           | Sim         | linhas  |

##### Respostas

| Código | Descrição                  |
| ------ | -------------------------- |
| 200    | Dispositivo atualizado     |
| 400    | Falha na validação         |
| 404    | Dispositivo não encontrado |

### /oapi/v1/devices/{device_id}/doh.mobileconfig

#### OBTER

##### Summary

Obtém o arquivo .mobileconfig DNS-over-HTTPS.

##### Parâmetros

| Nome                    | Localizado em | Descrição                                                                                 | Obrigatório | Esquema   |
| ----------------------- | ------------- | ----------------------------------------------------------------------------------------- | ----------- | --------- |
| device_id               | path          |                                                                                           | Sim         | linhas    |
| exclude_wifi_networks | consulta      | Liste as redes Wi-Fi pelo SSID nas quais você deseja que o DNS do AdGuard seja desativado | Não         | [ linha ] |
| exclude_domain          | consulta      | Listar domínios que utilizarão servidores DNS predefinidos em vez do AdGuard DNS          | Não         | [ linha ] |

##### Respostas

| Código | Descrição                     |
| ------ | ----------------------------- |
| 200    | Arquivo .plist DNS-over-HTTPS |
| 404    | Dispositivo não encontrado    |

### /oapi/v1/devices/{device_id}/dot.mobileconfig

#### OBTER

##### Summary

Obtém o ficheiro .mobileconfig do DNS-over-TLS.

##### Parâmetros

| Nome                    | Localizado em | Descrição                                                                                 | Obrigatório | Esquema   |
| ----------------------- | ------------- | ----------------------------------------------------------------------------------------- | ----------- | --------- |
| device_id               | path          |                                                                                           | Sim         | linhas    |
| exclude_wifi_networks | consulta      | Liste as redes Wi-Fi pelo SSID nas quais você deseja que o DNS do AdGuard seja desativado | Não         | [ linha ] |
| exclude_domain          | consulta      | Listar domínios que utilizarão servidores DNS predefinidos em vez do AdGuard DNS          | Não         | [ linha ] |

##### Respostas

| Código | Descrição                     |
| ------ | ----------------------------- |
| 200    | Arquivo .plist DNS-over-HTTPS |
| 404    | Dispositivo não encontrado    |

### /oapi/v1/devices/{device_id}/settings

#### PUT

##### Summary

Atualiza as configurações do dispositivo

##### Parâmetros

| Nome      | Localizado em | Descrição | Obrigatório | Esquema |
| --------- | ------------- | --------- | ----------- | ------- |
| device_id | path          |           | Sim         | linhas  |

##### Respostas

| Código | Descrição                                |
| ------ | ---------------------------------------- |
| 200    | Configurações do dispositivo atualizadas |
| 400    | Falha na validação                       |
| 404    | Dispositivo não encontrado               |

### /oapi/v1/dns_servers

#### OBTER

##### Summary

Lista os servidores DNS que pertencem ao usuário.

##### Descrição

Lista os servidores DNS que pertencem ao usuário. By default there is at least one default server.

##### Respostas

| Código | Descrição               |
| ------ | ----------------------- |
| 200    | Lista de servidores DNS |

#### POST

##### Summary

Cria um novo servidor DNS

##### Descrição

Cria um novo servidor DNS. Você pode anexar configurações personalizadas, caso contrário, o servidor DNS será criado com as configurações padrão.

##### Respostas

| Código | Descrição                                     |
| ------ | --------------------------------------------- |
| 200    | Servidor DNS criado                           |
| 400    | Falha na validação                            |
| 429    | A contagem de servidores DNS atingiu o limite |

### /oapi/v1/dns_servers/{dns_server_id}

#### EXCLUIR

##### Summary

Remove um servidor DNS

##### Descrição

Remove um servidor DNS. Todos os dispositivos conectados a este servidor DNS serão movidos para o servidor DNS padrão. Deleting the default DNS server is forbidden.

##### Parâmetros

| Nome            | Localizado em | Descrição | Obrigatório | Esquema |
| --------------- | ------------- | --------- | ----------- | ------- |
| dns_server_id | path          |           | Sim         | linhas  |

##### Respostas

| Código | Descrição                   |
| ------ | --------------------------- |
| 200    | Servidor DNS excluído       |
| 404    | Servidor DNS não encontrado |

#### OBTER

##### Summary

Obtém um servidor DNS existente pelo ID

##### Parâmetros

| Nome            | Localizado em | Descrição | Obrigatório | Esquema |
| --------------- | ------------- | --------- | ----------- | ------- |
| dns_server_id | path          |           | Sim         | linhas  |

##### Respostas

| Código | Descrição                   |
| ------ | --------------------------- |
| 200    | Informação do servidor DNS  |
| 404    | Servidor DNS não encontrado |

#### PUT

##### Summary

Atualiza um servidor DNS existente

##### Parâmetros

| Nome            | Localizado em | Descrição | Obrigatório | Esquema |
| --------------- | ------------- | --------- | ----------- | ------- |
| dns_server_id | path          |           | Sim         | linhas  |

##### Respostas

| Código | Descrição                   |
| ------ | --------------------------- |
| 200    | Servidor DNS atualizado     |
| 400    | Falha na validação          |
| 404    | Servidor DNS não encontrado |

### /oapi/v1/dns_servers/{dns_server_id}/settings

#### PUT

##### Summary

Atualiza as configurações do servidor DNS

##### Parâmetros

| Nome            | Localizado em | Descrição | Obrigatório | Esquema |
| --------------- | ------------- | --------- | ----------- | ------- |
| dns_server_id | path          |           | Sim         | linhas  |

##### Respostas

| Código | Descrição                                 |
| ------ | ----------------------------------------- |
| 200    | Configurações do servidor DNS atualizadas |
| 400    | Falha na validação                        |
| 404    | Servidor DNS não encontrado               |

### /oapi/v1/filter_lists

#### OBTER

##### Summary

Obtém listas de filtros

##### Respostas

| Código | Descrição        |
| ------ | ---------------- |
| 200    | Lista de filtros |

### /oapi/v1/oauth_token

#### POST

##### Summary

Gera o token de acesso e de atualização

##### Respostas

| Código | Descrição                                                           |
| ------ | ------------------------------------------------------------------- |
| 200    | Token de acesso emitido                                             |
| 400    | Parâmetros obrigatórios ausentes                                    |
| 401    | Credenciais inválidas, token MFA ou token de atualização fornecidos |

### /oapi/v1/query_log

#### EXCLUIR

##### Summary

Limpa o registo de consultas

##### Respostas

| Código | Descrição                          |
| ------ | ---------------------------------- |
| 202    | O registo de consultas foi apagado |

#### OBTER

##### Summary

Obtém o registo de consultas

##### Parâmetros

| Nome               | Localizado em | Descrição                                                                  | Obrigatório | Esquema                                            |
| ------------------ | ------------- | -------------------------------------------------------------------------- | ----------- | -------------------------------------------------- |
| time_from_millis | consulta      | Time from in milliseconds (inclusive)                                      | Sim         | longo                                              |
| time_to_millis   | consulta      | Time to in milliseconds (inclusive)                                        | Sim         | longo                                              |
| dispositivos       | consulta      | Filtrar por dispositivos                                                   | Não         | [ linha ]                                          |
| países             | consulta      | Filtrar por países                                                         | Não         | [ linha ]                                          |
| empresas           | consulta      | Filtrar por empresas                                                       | Não         | [ linha ]                                          |
| status             | consulta      | Filtrar por status                                                         | Não         | [ [FilteringActionStatus](#FilteringActionStatus)] |
| categorias         | consulta      | Filtrar por categorias                                                     | Não         | [ [CategoryType](#CategoryType)]                   |
| pesquisa           | consulta      | Filtrar por nome de domínio                                                | Não         | linhas                                             |
| limite             | consulta      | Limitar o número de registros a serem retornados                           | Não         | integer                                            |
| cursor             | consulta      | Cursor de paginação. Usar o cursor da resposta para paginar pelas páginas. | Não         | linhas                                             |

##### Respostas

| Código | Descrição |
| ------ | --------- |
| 200    | Query log |

### /oapi/v1/revoke_token

#### POST

##### Summary

Revoga um token de atualização

##### Parâmetros

| Nome          | Localizado em | Descrição       | Obrigatório | Esquema |
| ------------- | ------------- | --------------- | ----------- | ------- |
| refresh_token | consulta      | Atualizar token | Sim         | linhas  |

##### Respostas

| Código | Descrição                |
| ------ | ------------------------ |
| 200    | Atualizar token revogado |

### /oapi/v1/stats/categories

#### OBTER

##### Summary

Obtém estatísticas de categorias

##### Parâmetros

| Nome               | Localizado em | Descrição                             | Obrigatório | Esquema   |
| ------------------ | ------------- | ------------------------------------- | ----------- | --------- |
| time_from_millis | consulta      | Time from in milliseconds (inclusive) | Sim         | longo     |
| time_to_millis   | consulta      | Time to in milliseconds (inclusive)   | Sim         | longo     |
| dispositivos       | consulta      | Filtrar por dispositivos              | Não         | [ linha ] |
| países             | consulta      | Filtrar por países                    | Não         | [ linha ] |

##### Respostas

| Código | Descrição                            |
| ------ | ------------------------------------ |
| 200    | Estatísticas de categorias recebidas |
| 400    | Falha na validação                   |

### /oapi/v1/stats/companies

#### OBTER

##### Summary

Obtém estatísticas de empresas

##### Parâmetros

| Nome               | Localizado em | Descrição                             | Obrigatório | Esquema   |
| ------------------ | ------------- | ------------------------------------- | ----------- | --------- |
| time_from_millis | consulta      | Time from in milliseconds (inclusive) | Sim         | longo     |
| time_to_millis   | consulta      | Time to in milliseconds (inclusive)   | Sim         | longo     |
| dispositivos       | consulta      | Filtrar por dispositivos              | Não         | [ linha ] |
| países             | consulta      | Filtrar por países                    | Não         | [ linha ] |

##### Respostas

| Código | Descrição                          |
| ------ | ---------------------------------- |
| 200    | Estatísticas de empresas recebidas |
| 400    | Falha na validação                 |

### /oapi/v1/stats/companies/detailed

#### OBTER

##### Summary

Obtém estatísticas detalhadas das empresas

##### Parâmetros

| Nome               | Localizado em | Descrição                             | Obrigatório | Esquema   |
| ------------------ | ------------- | ------------------------------------- | ----------- | --------- |
| time_from_millis | consulta      | Time from in milliseconds (inclusive) | Sim         | longo     |
| time_to_millis   | consulta      | Time to in milliseconds (inclusive)   | Sim         | longo     |
| dispositivos       | consulta      | Filtrar por dispositivos              | Não         | [ linha ] |
| países             | consulta      | Filtrar por países                    | Não         | [ linha ] |
| cursor             | consulta      | Cursor de paginação                   | Não         | linhas    |

##### Respostas

| Código | Descrição                                      |
| ------ | ---------------------------------------------- |
| 200    | Estatísticas detalhadas das empresas recebidas |
| 400    | Falha na validação                             |

### /oapi/v1/stats/countries

#### OBTER

##### Summary

Obtém estatísticas dos países

##### Parâmetros

| Nome               | Localizado em | Descrição                             | Obrigatório | Esquema   |
| ------------------ | ------------- | ------------------------------------- | ----------- | --------- |
| time_from_millis | consulta      | Time from in milliseconds (inclusive) | Sim         | longo     |
| time_to_millis   | consulta      | Time to in milliseconds (inclusive)   | Sim         | longo     |
| dispositivos       | consulta      | Filtrar por dispositivos              | Não         | [ linha ] |
| países             | consulta      | Filtrar por países                    | Não         | [ linha ] |

##### Respostas

| Código | Descrição                         |
| ------ | --------------------------------- |
| 200    | Estatísticas dos países recebidas |
| 400    | Falha na validação                |

### /oapi/v1/stats/devices

#### OBTER

##### Summary

Reúne estatísticas de dispositivos

##### Parâmetros

| Nome               | Localizado em | Descrição                             | Obrigatório | Esquema   |
| ------------------ | ------------- | ------------------------------------- | ----------- | --------- |
| time_from_millis | consulta      | Time from in milliseconds (inclusive) | Sim         | longo     |
| time_to_millis   | consulta      | Time to in milliseconds (inclusive)   | Sim         | longo     |
| dispositivos       | consulta      | Filtrar por dispositivos              | Não         | [ linha ] |
| países             | consulta      | Filtrar por países                    | Não         | [ linha ] |

##### Respostas

| Código | Descrição                              |
| ------ | -------------------------------------- |
| 200    | Estatísticas de dispositivos recebidas |
| 400    | Falha na validação                     |

### /oapi/v1/stats/domains

#### OBTER

##### Summary

Obtém estatísticas de domínios

##### Parâmetros

| Nome               | Localizado em | Descrição                             | Obrigatório | Esquema   |
| ------------------ | ------------- | ------------------------------------- | ----------- | --------- |
| time_from_millis | consulta      | Time from in milliseconds (inclusive) | Sim         | longo     |
| time_to_millis   | consulta      | Time to in milliseconds (inclusive)   | Sim         | longo     |
| dispositivos       | consulta      | Filtrar por dispositivos              | Não         | [ linha ] |
| países             | consulta      | Filtrar por países                    | Não         | [ linha ] |

##### Respostas

| Código | Descrição                          |
| ------ | ---------------------------------- |
| 200    | Estatísticas de domínios recebidas |
| 400    | Falha na validação                 |

### /oapi/v1/stats/time

#### OBTER

##### Summary

Obtém estatísticas de tempo

##### Parâmetros

| Nome               | Localizado em | Descrição                              | Obrigatório | Esquema   |
| ------------------ | ------------- | -------------------------------------- | ----------- | --------- |
| time_from_millis | consulta      | Tempo de em milissegundos (inclusivo)  | Sim         | longo     |
| time_to_millis   | consulta      | Tempo até em milissegundos (inclusivo) | Sim         | longo     |
| dispositivos       | consulta      | Filtrar por dispositivos               | Não         | [ linha ] |
| países             | consulta      | Filtrar por países                     | Não         | [ linha ] |

##### Respostas

| Código | Descrição                       |
| ------ | ------------------------------- |
| 200    | Estatísticas de tempo recebidas |
| 400    | Falha na validação              |

### /oapi/v1/web_services

#### OBTER

##### Summary

Lista serviços web

##### Respostas

| Código | Descrição             |
| ------ | --------------------- |
| 200    | Lista de serviços Web |
