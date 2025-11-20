---
title: Journal des modifications
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    Changelog is from here:
    https://api.adguard-dns.io/static/api/CHANGELOG.md
-->

Cet article contient le journal des changements pour [AdGuard DNS API](private-dns/api/overview.md).

## v1.11

_Released on November 5, 2025_

- Added API keys authentication method:
  - API keys can be generated and revoked in the [User preferences](https://adguard-dns.io/en/dashboard/user-settings/api-keys) section
  - API keys can be used to authorize requests to the API by including them in the request header with the `Authorization: ApiKey {api_key}` format
  - API keys provide an alternative authentication method alongside access tokens

## v1.10

_Released on December 12, 2024_

Added a new DNS server setting — `block_chrome_prefetch`. It disables _Private prefetch proxy_ in Chrome. When this feature is enabled, Chrome will sometimes prefetch links on the Google Search results page and other participating websites even before the user clicks them.

## v1.9

_Sortie le 11 juillet 2024_

- Ajout de la fonctionnalité de connexion automatique des appareils :
  - Nouveau paramètre de serveur DNS — `auto_connect_devices_enabled`, permettant l’approbation pour des appareils se connectant automatiquement via un type de lien spécifique
  - Nouveau champ dans l'appareil — `auto_device`, indiquant que l'appareil est connecté automatiquement
- Remplacement de `int` par `long` pour `queries` dans CategoryQueriesStats, pour `used` dans AccountLimits, et pour `blocked` et `queries` dans QueriesStats

## v1.8

_Sortie le 20 avril 2024_

- Ajout du support pour DNS-over-HTTPS avec authentification :
  - Nouvelle opération — réinitialiser le mot de passe DNS-over-HTTPS pour l'appareil
  - Nouveau paramètre d'appareil — `detect_doh_auth_only`. Désactive tous les méthodes de connexion DNS sauf DNS-over-HTTPS avec authentification
  - Nouveau champ dans DeviceDNSAddresses — `dns_over_https_with_auth_url`. Indique l'URL à utiliser lors de la connexion en utilisant DNS-over-HTTPS avec authentification

## v1.7

_Sortie le 11 mars 2024_

- Ajout de la fonctionnalité d'adresses IPv4 dédiées :
  - Les adresses IPv4 dédiées peuvent désormais être utilisées sur des appareils pour la configuration du serveur DNS
  - L'adresse IPv4 dédiée est désormais associée à l'appareil auquel elle est liée, de sorte que les requêtes faites à cette adresse sont enregistrées pour cet appareil
- Ajout de nouvelles opérations :
  - Répertorier toutes les adresses IPv4 dédiées disponibles
  - Allouer une nouvelle adresse IPv4 dédiée
  - Lier une adresse IPv4 disponible à un appareil
  - Dissocier une adresse IPv4 d'un appareil
  - Requête d'information sur les addresse dédiées associées à un appareil
- Ajout de nouvelles limites aux limites de compte :
  - `dedicated_ipv4` fournit des informations sur le nombre d'adresses IPv4 dédiées déjà allouées, ainsi que la limite sur celles-ci
- Champs obsolète de DNSServerSettings supprimé :
  - `safebrowsing_enabled`

## v1.6

_Sortie le 22 janvier 2024_

- Ajout d'une nouvelle section de paramètres d'accès pour les profils DNS (`access_settings`). En personnalisant ces champs, vous pourrez protéger votre serveur DNS AdGuard contre tout accès non autorisé :

  - `allowed_clients` - ici vous pouvez spécifier quels clients peuvent utiliser votre serveur DNS. Ce champ est prioritaire sur le champ `blocked_clients`
  - `blocked_clients` - ici vous pouvez spécifier quels clients ne sont pas autorisés à utiliser votre serveur DNS
  - `blocked_domain_rules` — ici, vous pouvez spécifier quels domaines ne sont pas autorisés à accéder à votre serveur DNS, ainsi que définir ces domaines avec des règles génériques et de filtrage DNS

- Ajout de nouvelles limites aux limites de compte :

  - `access_rules` fournit la somme des valeurs `blocked_clients` et `blocked_domain_rules` actuellement utilisées, ainsi que la limite des règles d'accès
  - `user_rules` montre le nombre de règles utilisateur créées, ainsi que la limite qui leur est imposée

- Ajout d'un nouveau paramètre `ip_log_enabled` pour enregistrer les adresses IP et les domaines des clients

- Ajout d'un nouveau code d'erreur `FIELD_REACHED_LIMIT` pour indiquer quand les limites ont été atteintes :

  - Pour le nombre total de `blocked_clients` et `blocked_domain_rules` dans les paramètres d'accès
  - Pour `rules` dans les paramètres des règles utilisateur personnalisées

## v1.5

_Sortie le 16 juin 2023_

- Ajout d'un nouveau paramètre `block_nrd` et regroupement de tous les paramètres liés à la sécurité à un seul endroit

### Le modèle des paramètres de navigation sécurisée a été modifié

De :

```json
{
   "enabled": true
}
```

Au :

```json
{
   "enabled": true,
   "block_dangerous_domains": true,
   "block_nrd": false
}
```

où `enabled` contrôle désormais tous les paramètres du groupe, `block_dangerous_domains` est le champ de modèle `enabled` précédent, et `block_nrd` est un paramètre qui bloque les domaines nouvellement enregistrés.

### Le modèle des paramètres de serveur sauvegardés a été modifié

De :

```json
{
  "protection_enabled" : true,
  "safebrowsing_enabled" : true,
  ..
}
```

à :

```json
{
  "protection_enabled" : true,
  "safebrowsing_settings" : {
     "enabled": true,
     "block_dangerous_domains": true,
     "block_nrd": false
  }
  ..
}
```

ici un nouveau champ `safebrowsing_settings` est utilisé à la place de l'obsolète `safebrowsing_enabled`, dont la valeur est stockée dans `block_dangerous_domains`.

## v1.4

_Sortie le 29 mars 2023_

- Ajout d'une option configurable pour bloquer la réponse : par défaut (0.0.0.0), REFUSED, NXDOMAIN ou adresse IP personnalisée

## v1.3

_Sortie le 13 décembre 2022_

- Ajout d'une méthode pour obtenir les limites du compte

## v1.2

_Sortie le 14 octobre 2022_

- Ajout de nouveaux types de protocole DNS et DNSCRYPT. Dépréciation de PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP et DNSCRYPT_UDP qui seront supprimés plus tard

## v1.1

_Sortie le 7 juillet 2022_

- Ajout de méthodes pour récupérer des statistiques par temps, domaines, sociétés et appareils
- Ajout d'une méthode pour mettre à jour les paramètres de l'appareil
- Correction de la définition des champs requis

## v1.0

_Sortie le 22 février 2022_

- Authentification ajoutée
- Opérations CRUD avec des appareils et des serveurs DNS
- Journal des requêtes
- Téléchargement de DoH et DoT .mobileconfig
- Listes de filtres et services Web
