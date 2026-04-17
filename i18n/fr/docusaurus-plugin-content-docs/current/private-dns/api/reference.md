---
title: Référence
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

{/* The content below is simply an automatic conversion from the OpenAPI spec https://api.adguard-dns.io/static/swagger/openapi.json to markdown using https://swagger-markdown-ui.netlify.app/.

    If you want to change it, ask the developers to change the OpenAPI spec.
*/}

This article contains documentation for [AdGuard DNS API](private-dns/api/overview.md). For the complete AdGuard DNS API changelog, visit [this page](private-dns/api/changelog.md).

## Version actuelle : 1.10

### /oapi/v1/account/limits

#### GET

##### Résumé

Gets account limits

##### Réponses

| Code | Description                            |
| ---- | -------------------------------------- |
| 200  | Informations sur les limites du compte |

### /oapi/v1/dedicated_addresses/ipv4

#### GET

##### Résumé

Lists dedicated IPv4 addresses

##### Réponses

| Code | Description                     |
| ---- | ------------------------------- |
| 200  | Liste des adresses IPv4 dédiées |

#### POST

##### Résumé

Allocates new IPv4

##### Réponses

| Code | Description                                  |
| ---- | -------------------------------------------- |
| 200  | Nouvelle IPv4 attribuée avec succès          |
| 429  | Le nombre d'IPv4 dédiées a atteint la limite |

### /oapi/v1/devices

#### GET

##### Résumé

Lists devices

##### Réponses

| Code | Description           |
| ---- | --------------------- |
| 200  | Liste des dispositifs |

#### POST

##### Résumé

Creates a new device

##### Réponses

| Code | Description                               |
| ---- | ----------------------------------------- |
| 200  | Dispositif créé                           |
| 400  | Échec de la validation                    |
| 429  | Le nombre d'appareils a atteint la limite |

### /oapi/v1/devices/\{device_id\}

#### DELETE

##### Résumé

Removes a device

##### Paramètres

| Nom       | Situé dans | Description | Obligatoire | Schéma |
| --------- | ---------- | ----------- | ----------- | ------ |
| device_id | chemin     |             | Oui         | chaîne |

##### Réponses

| Code | Description           |
| ---- | --------------------- |
| 200  | Dispositif supprimé   |
| 404  | Dispositif non trouvé |

#### GET

##### Résumé

Gets an existing device by ID

##### Paramètres

| Nom       | Situé dans | Description | Obligatoire | Schéma |
| --------- | ---------- | ----------- | ----------- | ------ |
| device_id | chemin     |             | Oui         | chaîne |

##### Réponses

| Code | Description           |
| ---- | --------------------- |
| 200  | Infos sur l'appareil  |
| 404  | Dispositif non trouvé |

#### PUT

##### Résumé

Updates an existing device

##### Paramètres

| Nom       | Situé dans | Description | Obligatoire | Schéma |
| --------- | ---------- | ----------- | ----------- | ------ |
| device_id | chemin     |             | Oui         | chaîne |

##### Réponses

| Code | Description            |
| ---- | ---------------------- |
| 200  | Appareil mis à jour    |
| 400  | Échec de la validation |
| 404  | Dispositif non trouvé  |

### /oapi/v1/devices/\{device_id\}/dedicated_addresses

#### GET

##### Résumé

List dedicated IPv4 and IPv6 addresses for a device

##### Paramètres

| Nom       | Situé dans | Description | Obligatoire | Schéma |
| --------- | ---------- | ----------- | ----------- | ------ |
| device_id | chemin     |             | Oui         | chaîne |

##### Réponses

| Code | Description                   |
| ---- | ----------------------------- |
| 200  | Adresses IPv4 et IPv6 dédiées |

### /oapi/v1/devices/\{device_id\}/dedicated_addresses/ipv4

#### DELETE

##### Résumé

Unlink dedicated IPv4 from the device

##### Paramètres

| Nom       | Situé dans | Description | Obligatoire | Schéma |
| --------- | ---------- | ----------- | ----------- | ------ |
| device_id | chemin     |             | Oui         | chaîne |

##### Réponses

| Code | Description                                 |
| ---- | ------------------------------------------- |
| 200  | L'IPv4 dédiée a été dissociée de l'appareil |
| 404  | Dispositif ou adresse introuvable           |

#### POST

##### Résumé

Link dedicated IPv4 to the device

##### Paramètres

| Nom       | Situé dans | Description | Obligatoire | Schéma |
| --------- | ---------- | ----------- | ----------- | ------ |
| device_id | chemin     |             | Oui         | chaîne |

##### Réponses

| Code | Description                                        |
| ---- | -------------------------------------------------- |
| 200  | L'IPv4 dédiée a été associée à l'appareil          |
| 400  | Échec de la validation                             |
| 404  | Dispositif ou adresse introuvable                  |
| 429  | Le nombre d'IPv4 dédiées liées a atteint la limite |

### /oapi/v1/devices/\{device_id\}/doh.mobileconfig

#### GET

##### Résumé

Gets DNS-over-HTTPS .mobileconfig file.

##### Paramètres

| Nom                     | Situé dans | Description                                                                                 | Obligatoire | Schéma     |
| ----------------------- | ---------- | ------------------------------------------------------------------------------------------- | ----------- | ---------- |
| device_id               | chemin     |                                                                                             | Oui         | chaîne     |
| exclude_wifi_networks | query      | Énumérez les réseaux Wi-Fi où vous souhaitez désactiver AdGuard DNS, selon leur SSID        | Non         | [ chaîne ] |
| exclude_domain          | query      | Repertoriez les domaines qui utiliseront les serveurs DNS par défaut au lieu de AdGuard DNS | Non         | [ chaîne ] |

##### Réponses

| Code | Description                   |
| ---- | ----------------------------- |
| 200  | Fichier DNS-over-HTTPS .plist |
| 404  | Dispositif non trouvé         |

### /oapi/v1/devices/\{device_id\}/doh_password/reset

#### PUT

##### Résumé

Generate and set new DNS-over-HTTPS password

##### Paramètres

| Nom       | Situé dans | Description | Obligatoire | Schéma |
| --------- | ---------- | ----------- | ----------- | ------ |
| device_id | chemin     |             | Oui         | chaîne |

##### Réponses

| Code | Description                                             |
| ---- | ------------------------------------------------------- |
| 200  | Réinitialisation réussie du mot de passe DNS-over-HTTPS |
| 404  | Dispositif non trouvé                                   |

### /oapi/v1/devices/\{device_id\}/dot.mobileconfig

#### GET

##### Résumé

Gets DNS-over-TLS .mobileconfig file.

##### Paramètres

| Nom                     | Situé dans | Description                                                                                 | Obligatoire | Schéma     |
| ----------------------- | ---------- | ------------------------------------------------------------------------------------------- | ----------- | ---------- |
| device_id               | chemin     |                                                                                             | Oui         | chaîne     |
| exclude_wifi_networks | query      | Énumérez les réseaux Wi-Fi où vous souhaitez désactiver AdGuard DNS, selon leur SSID        | Non         | [ chaîne ] |
| exclude_domain          | query      | Repertoriez les domaines qui utiliseront les serveurs DNS par défaut au lieu de AdGuard DNS | Non         | [ chaîne ] |

##### Réponses

| Code | Description                   |
| ---- | ----------------------------- |
| 200  | Fichier DNS-over-HTTPS .plist |
| 404  | Dispositif non trouvé         |

### /oapi/v1/devices/\{device_id\}/settings

#### PUT

##### Résumé

Updates device settings

##### Paramètres

| Nom       | Situé dans | Description | Obligatoire | Schéma |
| --------- | ---------- | ----------- | ----------- | ------ |
| device_id | chemin     |             | Oui         | chaîne |

##### Réponses

| Code | Description                       |
| ---- | --------------------------------- |
| 200  | Réglages de l'appareil mis à jour |
| 400  | Échec de la validation            |
| 404  | Dispositif non trouvé             |

### /oapi/v1/dns_servers

#### GET

##### Résumé

Lists DNS servers that belong to the user.

##### Description

Lists DNS servers that belong to the user. By default there is at least one default server.

##### Réponses

| Code | Description            |
| ---- | ---------------------- |
| 200  | Liste des serveurs DNS |

#### POST

##### Résumé

Creates a new DNS server

##### Description

Creates a new DNS server. You can attach custom settings, otherwise DNS server will be created with default settings.

##### Réponses

| Code | Description                                   |
| ---- | --------------------------------------------- |
| 200  | Serveur DNS créé                              |
| 400  | Échec de la validation                        |
| 429  | Le nombre de serveurs DNS a atteint la limite |

### /oapi/v1/dns_servers/\{dns_server_id\}

#### DELETE

##### Résumé

Removes a DNS server

##### Description

Removes a DNS server. All devices attached to this DNS server will be moved to the default DNS server. Deleting the default DNS server is forbidden.

##### Paramètres

| Nom             | Situé dans | Description | Obligatoire | Schéma |
| --------------- | ---------- | ----------- | ----------- | ------ |
| dns_server_id | chemin     |             | Oui         | chaîne |

##### Réponses

| Code | Description             |
| ---- | ----------------------- |
| 200  | Serveur DNS supprimé    |
| 404  | Serveur DNS introuvable |

#### GET

##### Résumé

Gets an existing DNS server by ID

##### Paramètres

| Nom             | Situé dans | Description | Obligatoire | Schéma |
| --------------- | ---------- | ----------- | ----------- | ------ |
| dns_server_id | chemin     |             | Oui         | chaîne |

##### Réponses

| Code | Description              |
| ---- | ------------------------ |
| 200  | Infos sur le serveur DNS |
| 404  | Serveur DNS introuvable  |

#### PUT

##### Résumé

Updates an existing DNS server

##### Paramètres

| Nom             | Situé dans | Description | Obligatoire | Schéma |
| --------------- | ---------- | ----------- | ----------- | ------ |
| dns_server_id | chemin     |             | Oui         | chaîne |

##### Réponses

| Code | Description             |
| ---- | ----------------------- |
| 200  | Serveur DNS mis à jour  |
| 400  | Échec de la validation  |
| 404  | Serveur DNS introuvable |

### /oapi/v1/dns_servers/\{dns_server_id\}/settings

#### PUT

##### Résumé

Updates DNS server settings

##### Paramètres

| Nom             | Situé dans | Description | Obligatoire | Schéma |
| --------------- | ---------- | ----------- | ----------- | ------ |
| dns_server_id | chemin     |             | Oui         | chaîne |

##### Réponses

| Code | Description                          |
| ---- | ------------------------------------ |
| 200  | Paramètres du serveur DNS mis à jour |
| 400  | Échec de la validation               |
| 404  | Serveur DNS introuvable              |

### /oapi/v1/filter_lists

#### GET

##### Résumé

Gets filter lists

##### Réponses

| Code | Description       |
| ---- | ----------------- |
| 200  | Liste des filtres |

### /oapi/v1/oauth_token

#### POST

##### Résumé

Generates Access and Refresh token

##### Réponses

| Code | Description                                                                   |
| ---- | ----------------------------------------------------------------------------- |
| 200  | Jeton d'accès émis                                                            |
| 400  | Paramètres obligatoires manquants                                             |
| 401  | Informations d'identification, jeton MFA ou jeton d'actualisation non valides |

null

### /oapi/v1/query_log

#### DELETE

##### Résumé

Clears query log

##### Réponses

| Code | Description                          |
| ---- | ------------------------------------ |
| 202  | Le journal des requêtes a été effacé |

#### GET

##### Résumé

Gets query log

##### Paramètres

| Nom                | Situé dans | Description                                                                          | Obligatoire | Schéma                                              |
| ------------------ | ---------- | ------------------------------------------------------------------------------------ | ----------- | --------------------------------------------------- |
| time_from_millis | query      | Temps à partir de, en millisecondes (inclus)                                         | Oui         | long                                                |
| time_to_millis   | query      | Temps jusqu'à, en millisecondes (inclus)                                             | Oui         | long                                                |
| devices            | query      | Filtrage par dispositifs                                                             | Non         | [ chaîne ]                                          |
| countries          | query      | Filtrage par pays                                                                    | Non         | [ chaîne ]                                          |
| companies          | query      | Filtrage par sociétés                                                                | Non         | [ chaîne ]                                          |
| statuses           | query      | Filtrage par états                                                                   | Non         | [ [FilteringActionStatus](#FilteringActionStatus) ] |
| categories         | query      | Filtrage par catégories                                                              | Non         | [ [CategoryType](#CategoryType) ]                   |
| search             | query      | Filtrage par nom de domaine                                                          | Non         | chaîne                                              |
| limit              | query      | Limite le nombre d'enregistrements à renvoyer                                        | Non         | integer                                             |
| cursor             | query      | Pagination cursor. Utilisez le curseur de réponse pour naviguer à travers les pages. | Non         | chaîne                                              |

##### Réponses

| Code | Description          |
| ---- | -------------------- |
| 200  | Journal des requêtes |

### /oapi/v1/revoke_token

#### POST

##### Résumé

Revokes a Refresh Token

##### Paramètres

| Nom           | Situé dans | Description           | Obligatoire | Schéma |
| ------------- | ---------- | --------------------- | ----------- | ------ |
| refresh_token | query      | Jeton d'actualisation | Oui         | chaîne |

##### Réponses

| Code | Description                   |
| ---- | ----------------------------- |
| 200  | Jeton d'actualisation révoqué |

null

### /oapi/v1/stats/categories

#### GET

##### Résumé

Gets categories statistics

##### Paramètres

| Nom                | Situé dans | Description                                  | Obligatoire | Schéma     |
| ------------------ | ---------- | -------------------------------------------- | ----------- | ---------- |
| time_from_millis | query      | Temps à partir de, en millisecondes (inclus) | Oui         | long       |
| time_to_millis   | query      | Temps jusqu'à, en millisecondes (inclus)     | Oui         | long       |
| devices            | query      | Filtrage par dispositifs                     | Non         | [ chaîne ] |
| countries          | query      | Filtrage par pays                            | Non         | [ chaîne ] |

##### Réponses

| Code | Description                        |
| ---- | ---------------------------------- |
| 200  | Statistiques des catégories reçues |
| 400  | Échec de la validation             |

### /oapi/v1/stats/companies

#### GET

##### Résumé

Gets companies statistics

##### Paramètres

| Nom                | Situé dans | Description                                  | Obligatoire | Schéma     |
| ------------------ | ---------- | -------------------------------------------- | ----------- | ---------- |
| time_from_millis | query      | Temps à partir de, en millisecondes (inclus) | Oui         | long       |
| time_to_millis   | query      | Temps jusqu'à, en millisecondes (inclus)     | Oui         | long       |
| devices            | query      | Filtrage par dispositifs                     | Non         | [ chaîne ] |
| countries          | query      | Filtrage par pays                            | Non         | [ chaîne ] |

##### Réponses

| Code | Description                      |
| ---- | -------------------------------- |
| 200  | Statistiques des sociétés reçues |
| 400  | Échec de la validation           |

### /oapi/v1/stats/companies/detailed

#### GET

##### Résumé

Gets detailed companies statistics

##### Paramètres

| Nom                | Situé dans | Description                                  | Obligatoire | Schéma     |
| ------------------ | ---------- | -------------------------------------------- | ----------- | ---------- |
| time_from_millis | query      | Temps à partir de, en millisecondes (inclus) | Oui         | long       |
| time_to_millis   | query      | Temps jusqu'à, en millisecondes (inclus)     | Oui         | long       |
| devices            | query      | Filtrage par dispositifs                     | Non         | [ chaîne ] |
| countries          | query      | Filtrage par pays                            | Non         | [ chaîne ] |
| cursor             | query      | Curseur de pagination                        | Non         | chaîne     |

##### Réponses

| Code | Description                                 |
| ---- | ------------------------------------------- |
| 200  | Statistiques détaillées reçues des sociétés |
| 400  | Échec de la validation                      |

### /oapi/v1/stats/countries

#### GET

##### Résumé

Gets countries statistics

##### Paramètres

| Nom                | Situé dans | Description                                  | Obligatoire | Schéma     |
| ------------------ | ---------- | -------------------------------------------- | ----------- | ---------- |
| time_from_millis | query      | Temps à partir de, en millisecondes (inclus) | Oui         | long       |
| time_to_millis   | query      | Temps jusqu'à, en millisecondes (inclus)     | Oui         | long       |
| devices            | query      | Filtrage par dispositifs                     | Non         | [ chaîne ] |
| countries          | query      | Filtrage par pays                            | Non         | [ chaîne ] |

##### Réponses

| Code | Description                  |
| ---- | ---------------------------- |
| 200  | Statistiques des pays reçues |
| 400  | Échec de la validation       |

### /oapi/v1/stats/devices

#### GET

##### Résumé

Gets devices statistics

##### Paramètres

| Nom                | Situé dans | Description                                  | Obligatoire | Schéma     |
| ------------------ | ---------- | -------------------------------------------- | ----------- | ---------- |
| time_from_millis | query      | Temps à partir de, en millisecondes (inclus) | Oui         | long       |
| time_to_millis   | query      | Temps jusqu'à, en millisecondes (inclus)     | Oui         | long       |
| devices            | query      | Filtrage par dispositifs                     | Non         | [ chaîne ] |
| countries          | query      | Filtrage par pays                            | Non         | [ chaîne ] |

##### Réponses

| Code | Description                         |
| ---- | ----------------------------------- |
| 200  | Statistiques des dispositifs reçues |
| 400  | Échec de la validation              |

### /oapi/v1/stats/domains

#### GET

##### Résumé

Gets domains statistics

##### Paramètres

| Nom                | Situé dans | Description                                  | Obligatoire | Schéma     |
| ------------------ | ---------- | -------------------------------------------- | ----------- | ---------- |
| time_from_millis | query      | Temps à partir de, en millisecondes (inclus) | Oui         | long       |
| time_to_millis   | query      | Temps jusqu'à, en millisecondes (inclus)     | Oui         | long       |
| devices            | query      | Filtrage par dispositifs                     | Non         | [ chaîne ] |
| countries          | query      | Filtrage par pays                            | Non         | [ chaîne ] |

##### Réponses

| Code | Description                      |
| ---- | -------------------------------- |
| 200  | Statistiques des domaines reçues |
| 400  | Échec de la validation           |

### /oapi/v1/stats/time

#### GET

##### Résumé

Gets time statistics

##### Paramètres

| Nom                | Situé dans | Description                                  | Obligatoire | Schéma     |
| ------------------ | ---------- | -------------------------------------------- | ----------- | ---------- |
| time_from_millis | query      | Temps à partir de, en millisecondes (inclus) | Oui         | long       |
| time_to_millis   | query      | Temps jusqu'à, en millisecondes (inclus)     | Oui         | long       |
| devices            | query      | Filtrage par dispositifs                     | Non         | [ chaîne ] |
| countries          | query      | Filtrage par pays                            | Non         | [ chaîne ] |

##### Réponses

| Code | Description                   |
| ---- | ----------------------------- |
| 200  | Statistiques des temps reçues |
| 400  | Échec de la validation        |

### /oapi/v1/web_services

#### GET

##### Résumé

Lists web services

##### Réponses

| Code | Description            |
| ---- | ---------------------- |
| 200  | Liste des services web |
