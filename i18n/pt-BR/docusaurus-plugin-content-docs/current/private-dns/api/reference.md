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

Este artigo contém documentação para a [ API do AdGuard DNS](private-dns/api/overview.md). Para o changelog completo da API do AdGuard DNS, visite [esta página](private-dns/api/changelog.md).

## Current version: 1.10

### /oapi/v1/account/limits

#### OBTER

##### Resumo

Obtém limites de conta

##### Respostas

| Código | Descrição                          |
| ------ | ---------------------------------- |
| 200    | Informações sobre limites de conta |

### /oapi/v1/dedicated_addresses/ipv4

#### OBTER

##### Resumo

Lista de endereços IPv4 dedicados

##### Respostas

| Código | Descrição                         |
| ------ | --------------------------------- |
| 200    | Lista de endereços IPv4 dedicados |

#### POST

##### Resumo

Atribui novo IPv4

##### Respostas

| Código | Descrição                                   |
| ------ | ------------------------------------------- |
| 200    | Novo IPv4 atribuído com sucesso             |
| 429    | Contagem de IPv4 dedicados atingiu o limite |

### /oapi/v1/devices

#### OBTER

##### Resumo

Lista dispositivos

##### Respostas

| Código | Descrição             |
| ------ | --------------------- |
| 200    | Lista de dispositivos |

#### POST

##### Resumo

Cria um novo dispositivo

##### Respostas

| Código | Descrição                                   |
| ------ | ------------------------------------------- |
| 200    | Dispositivo criado                          |
| 400    | Falha na validação                          |
| 429    | A contagem de dispositivos atingiu o limite |

### /oapi/v1/devices/{device_id}

#### EXCLUIR

##### Resumo

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

##### Resumo

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

##### Resumo

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

### /oapi/v1/devices/{device_id}/dedicated_addresses

#### OBTER

##### Resumo

Lista de endereços IPv4 e IPv6 dedicados para um dispositivo

##### Parâmetros

| Nome      | Localizado em | Descrição | Obrigatório | Esquema |
| --------- | ------------- | --------- | ----------- | ------- |
| device_id | path          |           | Sim         | linhas  |

##### Respostas

| Código | Descrição             |
| ------ | --------------------- |
| 200    | IPv4 e IPv6 dedicados |

### /oapi/v1/devices/{device_id}/dedicated_addresses/ipv4

#### EXCLUIR

##### Resumo

Desvincular IPv4 dedicado do dispositivo

##### Parâmetros

| Nome      | Localizado em | Descrição | Obrigatório | Esquema |
| --------- | ------------- | --------- | ----------- | ------- |
| device_id | path          |           | Sim         | linhas  |

##### Respostas

| Código | Descrição                                             |
| ------ | ----------------------------------------------------- |
| 200    | IPv4 dedicado desvinculado com sucesso do dispositivo |
| 404    | Dispositivo ou endereço não encontrado                |

#### POST

##### Resumo

Vincular IPv4 dedicado ao dispositivo

##### Parâmetros

| Nome      | Localizado em | Descrição | Obrigatório | Esquema |
| --------- | ------------- | --------- | ----------- | ------- |
| device_id | path          |           | Sim         | linhas  |

##### Respostas

| Código | Descrição                                                |
| ------ | -------------------------------------------------------- |
| 200    | IPv4 dedicado vinculado com sucesso ao dispositivo       |
| 400    | Falha na validação                                       |
| 404    | Dispositivo ou endereço não encontrado                   |
| 429    | A contagem de IPv4 dedicados vinculados atingiu o limite |

### /oapi/v1/devices/{device_id}/doh.mobileconfig

#### OBTER

##### Resumo

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

### /oapi/v1/devices/{device_id}/doh_password/reset

#### PUT

##### Resumo

Gerar e definir nova senha do DNS-over-HTTPS

##### Parâmetros

| Nome      | Localizado em | Descrição | Obrigatório | Esquema |
| --------- | ------------- | --------- | ----------- | ------- |
| device_id | path          |           | Sim         | linhas  |

##### Respostas

| Código | Descrição                                      |
| ------ | ---------------------------------------------- |
| 200    | Senha do DNS-over-HTTPS redefinida com sucesso |
| 404    | Dispositivo não encontrado                     |

### /oapi/v1/devices/{device_id}/dot.mobileconfig

#### OBTER

##### Resumo

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

##### Resumo

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

##### Resumo

Lista os servidores DNS que pertencem ao usuário.

##### Descrição

Lista os servidores DNS que pertencem ao usuário. Por padrão, há pelo menos um servidor padrão.

##### Respostas

| Código | Descrição               |
| ------ | ----------------------- |
| 200    | Lista de servidores DNS |

#### POST

##### Resumo

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

##### Resumo

Remove um servidor DNS

##### Descrição

Remove um servidor DNS. Todos os dispositivos conectados a este servidor DNS serão movidos para o servidor DNS padrão. É proibido excluir o servidor DNS padrão.

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

##### Resumo

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

##### Resumo

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

##### Resumo

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

##### Resumo

Obtém listas de filtros

##### Respostas

| Código | Descrição        |
| ------ | ---------------- |
| 200    | Lista de filtros |

### /oapi/v1/oauth_token

#### POST

##### Resumo

Gera o token de acesso e de atualização

##### Respostas

| Código | Descrição                                                           |
| ------ | ------------------------------------------------------------------- |
| 200    | Token de acesso emitido                                             |
| 400    | Parâmetros obrigatórios ausentes                                    |
| 401    | Credenciais inválidas, token MFA ou token de atualização fornecidos |

null

### /oapi/v1/query_log

#### EXCLUIR

##### Resumo

Limpa o registo de consultas

##### Respostas

| Código | Descrição                          |
| ------ | ---------------------------------- |
| 202    | O registo de consultas foi apagado |

#### OBTER

##### Resumo

Obtém o registo de consultas

##### Parâmetros

| Nome               | Localizado em | Descrição                                                                  | Obrigatório | Esquema                                            |
| ------------------ | ------------- | -------------------------------------------------------------------------- | ----------- | -------------------------------------------------- |
| time_from_millis | consulta      | Tempo de em milissegundos (inclusivo)                                      | Sim         | longo                                              |
| time_to_millis   | consulta      | Tempo até em milissegundos (inclusivo)                                     | Sim         | longo                                              |
| dispositivos       | consulta      | Filtrar por dispositivos                                                   | Não         | [ linha ]                                          |
| países             | consulta      | Filtrar por países                                                         | Não         | [ linha ]                                          |
| empresas           | consulta      | Filtrar por empresas                                                       | Não         | [ linha ]                                          |
| status             | consulta      | Filtrar por status                                                         | Não         | [ [FilteringActionStatus](#FilteringActionStatus)] |
| categorias         | consulta      | Filtrar por categorias                                                     | Não         | [ [CategoryType](#CategoryType)]                   |
| pesquisa           | consulta      | Filtrar por nome de domínio                                                | Não         | linhas                                             |
| limite             | consulta      | Limitar o número de registros a serem retornados                           | Não         | integer                                            |
| cursor             | consulta      | Cursor de paginação. Usar o cursor da resposta para paginar pelas páginas. | Não         | linhas                                             |

##### Respostas

| Código | Descrição             |
| ------ | --------------------- |
| 200    | Registro de consultas |

### /oapi/v1/revoke_token

#### POST

##### Resumo

Revoga um token de atualização

##### Parâmetros

| Nome          | Localizado em | Descrição       | Obrigatório | Esquema |
| ------------- | ------------- | --------------- | ----------- | ------- |
| refresh_token | consulta      | Atualizar token | Sim         | linhas  |

##### Respostas

| Código | Descrição                |
| ------ | ------------------------ |
| 200    | Atualizar token revogado |

null

### /oapi/v1/stats/categories

#### OBTER

##### Resumo

Obtém estatísticas de categorias

##### Parâmetros

| Nome               | Localizado em | Descrição                              | Obrigatório | Esquema   |
| ------------------ | ------------- | -------------------------------------- | ----------- | --------- |
| time_from_millis | consulta      | Tempo de em milissegundos (inclusivo)  | Sim         | longo     |
| time_to_millis   | consulta      | Tempo até em milissegundos (inclusivo) | Sim         | longo     |
| dispositivos       | consulta      | Filtrar por dispositivos               | Não         | [ linha ] |
| países             | consulta      | Filtrar por países                     | Não         | [ linha ] |

##### Respostas

| Código | Descrição                            |
| ------ | ------------------------------------ |
| 200    | Estatísticas de categorias recebidas |
| 400    | Falha na validação                   |

### /oapi/v1/stats/companies

#### OBTER

##### Resumo

Obtém estatísticas de empresas

##### Parâmetros

| Nome               | Localizado em | Descrição                              | Obrigatório | Esquema   |
| ------------------ | ------------- | -------------------------------------- | ----------- | --------- |
| time_from_millis | consulta      | Tempo de em milissegundos (inclusivo)  | Sim         | longo     |
| time_to_millis   | consulta      | Tempo até em milissegundos (inclusivo) | Sim         | longo     |
| dispositivos       | consulta      | Filtrar por dispositivos               | Não         | [ linha ] |
| países             | consulta      | Filtrar por países                     | Não         | [ linha ] |

##### Respostas

| Código | Descrição                          |
| ------ | ---------------------------------- |
| 200    | Estatísticas de empresas recebidas |
| 400    | Falha na validação                 |

### /oapi/v1/stats/companies/detailed

#### OBTER

##### Resumo

Obtém estatísticas detalhadas das empresas

##### Parâmetros

| Nome               | Localizado em | Descrição                              | Obrigatório | Esquema   |
| ------------------ | ------------- | -------------------------------------- | ----------- | --------- |
| time_from_millis | consulta      | Tempo de em milissegundos (inclusivo)  | Sim         | longo     |
| time_to_millis   | consulta      | Tempo até em milissegundos (inclusivo) | Sim         | longo     |
| dispositivos       | consulta      | Filtrar por dispositivos               | Não         | [ linha ] |
| países             | consulta      | Filtrar por países                     | Não         | [ linha ] |
| cursor             | consulta      | Cursor de paginação                    | Não         | linhas    |

##### Respostas

| Código | Descrição                                      |
| ------ | ---------------------------------------------- |
| 200    | Estatísticas detalhadas das empresas recebidas |
| 400    | Falha na validação                             |

### /oapi/v1/stats/countries

#### OBTER

##### Resumo

Obtém estatísticas dos países

##### Parâmetros

| Nome               | Localizado em | Descrição                              | Obrigatório | Esquema   |
| ------------------ | ------------- | -------------------------------------- | ----------- | --------- |
| time_from_millis | consulta      | Tempo de em milissegundos (inclusivo)  | Sim         | longo     |
| time_to_millis   | consulta      | Tempo até em milissegundos (inclusivo) | Sim         | longo     |
| dispositivos       | consulta      | Filtrar por dispositivos               | Não         | [ linha ] |
| países             | consulta      | Filtrar por países                     | Não         | [ linha ] |

##### Respostas

| Código | Descrição                         |
| ------ | --------------------------------- |
| 200    | Estatísticas dos países recebidas |
| 400    | Falha na validação                |

### /oapi/v1/stats/devices

#### OBTER

##### Resumo

Reúne estatísticas de dispositivos

##### Parâmetros

| Nome               | Localizado em | Descrição                              | Obrigatório | Esquema   |
| ------------------ | ------------- | -------------------------------------- | ----------- | --------- |
| time_from_millis | consulta      | Tempo de em milissegundos (inclusivo)  | Sim         | longo     |
| time_to_millis   | consulta      | Tempo até em milissegundos (inclusivo) | Sim         | longo     |
| dispositivos       | consulta      | Filtrar por dispositivos               | Não         | [ linha ] |
| países             | consulta      | Filtrar por países                     | Não         | [ linha ] |

##### Respostas

| Código | Descrição                              |
| ------ | -------------------------------------- |
| 200    | Estatísticas de dispositivos recebidas |
| 400    | Falha na validação                     |

### /oapi/v1/stats/domains

#### OBTER

##### Resumo

Obtém estatísticas de domínios

##### Parâmetros

| Nome               | Localizado em | Descrição                              | Obrigatório | Esquema   |
| ------------------ | ------------- | -------------------------------------- | ----------- | --------- |
| time_from_millis | consulta      | Tempo de em milissegundos (inclusivo)  | Sim         | longo     |
| time_to_millis   | consulta      | Tempo até em milissegundos (inclusivo) | Sim         | longo     |
| dispositivos       | consulta      | Filtrar por dispositivos               | Não         | [ linha ] |
| países             | consulta      | Filtrar por países                     | Não         | [ linha ] |

##### Respostas

| Código | Descrição                          |
| ------ | ---------------------------------- |
| 200    | Estatísticas de domínios recebidas |
| 400    | Falha na validação                 |

### /oapi/v1/stats/time

#### OBTER

##### Resumo

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

##### Resumo

Lista serviços web

##### Respostas

| Código | Descrição             |
| ------ | --------------------- |
| 200    | Lista de serviços Web |
