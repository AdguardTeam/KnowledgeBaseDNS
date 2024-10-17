---
title: Référence
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

<!--
    The content below is simply an automatic conversion from the OpenAPI spec https://api.adguard-dns.io/static/swagger/openapi.json to markdown using https://swagger-markdown-ui.netlify.app/.

    If you want to change it, ask the developers to change the OpenAPI spec.
-->

Cet article contient la documentation sur l'[API DNS AdGuard](private-dns/api/overview.md). Pour le journal des modifications complet de l'API AdGuard DNS, visitez [cette page](private-dns/api/changelog.md).

## Version actuelle : 1.9

### /oapi/v1/account/limits

#### GET

##### Résumé

Obtention des limites du compte

##### Réponses

| Code | Description                            |
| ---- | -------------------------------------- |
| 200  | Informations sur les limites du compte |

### /oapi/v1/dedicated_addresses/ipv4

#### GET

##### Résumé

Répertorie les adresses IPv4 dédiées

##### Réponses

| Code | Description                     |
| ---- | ------------------------------- |
| 200  | Liste des adresses IPv4 dédiées |

#### POST

##### Résumé

Attribue une nouvelle IPv4

##### Réponses

| Code | Description                                  |
| ---- | -------------------------------------------- |
| 200  | Nouvelle IPv4 attribuée avec succès          |
| 429  | Le nombre d'IPv4 dédiées a atteint la limite |

### /oapi/v1/devices

#### GET

##### Résumé

Énumère les dispositifs

##### Réponses

| Code | Description           |
| ---- | --------------------- |
| 200  | Liste des dispositifs |

#### POST

##### Résumé

Création d'un nouveau dispositif

##### Réponses

| Code | Description                               |
| ---- | ----------------------------------------- |
| 200  | Dispositif créé                           |
| 400  | Échec de la validation                    |
| 429  | Le nombre d'appareils a atteint la limite |

### /oapi/v1/devices/{device_id}

#### DELETE

##### Résumé

Supprime le dispositif

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

Obtention d'un dispositif existant par son identifiant

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

Met à jour un dispositif existant

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

### /oapi/v1/devices/{device_id}/dedicated_addresses

#### GET

##### Résumé

Répertorie les adresses IPv4 et IPv6 dédiées à un appareil

##### Paramètres

| Nom       | Situé dans | Description | Obligatoire | Schéma |
| --------- | ---------- | ----------- | ----------- | ------ |
| device_id | chemin     |             | Oui         | chaîne |

##### Réponses

| Code | Description                   |
| ---- | ----------------------------- |
| 200  | Adresses IPv4 et IPv6 dédiées |

### /oapi/v1/devices/{device_id}/dedicated_addresses/ipv4

#### DELETE

##### Résumé

Dissocier l'IPv4 dédié de l'appareil

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

Associer l'IPv4 dédiée à l'appareil

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

### /oapi/v1/devices/{device_id}/doh.mobileconfig

#### GET

##### Résumé

Obtient le fichier .mobileconfig DNS-over-HTTPS.

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

### /oapi/v1/devices/{device_id}/doh_password/reset

#### PUT

##### Résumé

Générer et définir un nouveau mot de passe DNS-over-HTTPS

##### Paramètres

| Nom       | Situé dans | Description | Obligatoire | Schéma |
| --------- | ---------- | ----------- | ----------- | ------ |
| device_id | chemin     |             | Oui         | chaîne |

##### Réponses

| Code | Description                                             |
| ---- | ------------------------------------------------------- |
| 200  | Réinitialisation réussie du mot de passe DNS-over-HTTPS |
| 404  | Dispositif non trouvé                                   |

### /oapi/v1/devices/{device_id}/dot.mobileconfig

#### GET

##### Résumé

Obtient le fichier .mobileconfig DNS-over-TLS.

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

### /oapi/v1/devices/{device_id}/settings

#### PUT

##### Résumé

Met à jour les paramètres de l'appareil

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

Répertorie les serveurs DNS appartenant à l'utilisateur.

##### Description

Répertorie les serveurs DNS appartenant à l'utilisateur. Par défaut, il existe au moins un serveur prédéfini.

##### Réponses

| Code | Description            |
| ---- | ---------------------- |
| 200  | Liste des serveurs DNS |

#### POST

##### Résumé

Crée un nouveau serveur DNS

##### Description

Crée un nouveau serveur DNS. Vous pouvez attacher des paramètres personnalisés, sinon le serveur DNS sera créé avec les paramètres par défaut.

##### Réponses

| Code | Description                                   |
| ---- | --------------------------------------------- |
| 200  | Serveur DNS créé                              |
| 400  | Échec de la validation                        |
| 429  | Le nombre de serveurs DNS a atteint la limite |

### /oapi/v1/dns_servers/{dns_server_id}

#### DELETE

##### Résumé

Supprime un serveur DNS

##### Description

Supprime un serveur DNS. Tous les appareils connectés à ce serveur DNS seront déplacés vers le serveur DNS par défaut. La suppression du serveur DNS par défaut est interdite.

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

Obtention d'un serveur DNS existant par son identifiant

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

Met à jour un serveur DNS existant

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

### /oapi/v1/dns_servers/{dns_server_id}/settings

#### PUT

##### Résumé

Met à jour les paramètres du serveur DNS

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

Obtient des listes de filtres

##### Réponses

| Code | Description       |
| ---- | ----------------- |
| 200  | Liste des filtres |

### /oapi/v1/oauth_token

#### POST

##### Résumé

Génère un jeton d'accès et d'actualisation

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

Efface le journal des requêtes

##### Réponses

| Code | Description                          |
| ---- | ------------------------------------ |
| 202  | Le journal des requêtes a été effacé |

#### GET

##### Résumé

Obtient le journal des requêtes

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

Révoque un jeton d'actualisation

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

Obtient des statistiques des catégories

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

Obtient des statistiques des sociétés

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

Obtient les statistiques détaillées des sociétés

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

Obtient des statistiques des pays

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

Obtient les statistiques des appareils

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

Obtient les statistiques des domaines

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

Obtient les statistiques des temps

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

Répertorie les services web

##### Réponses

| Code | Description            |
| ---- | ---------------------- |
| 200  | Liste des services web |
