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

## v1.9

_Sortie le 11 juillet 2024_

- Added automatic device connection functionality:
  - Nouveau paramètre de serveur DNS — `auto_connect_devices_enabled`, permettant l’approbation pour des appareils se connectant automatiquement via un type de lien spécifique
  - New field in Device — `auto_device`, indicating that the device is automatically connected
- Remplacement de `int` par `long` pour `queries` dans CategoryQueriesStats, pour `used` dans AccountLimits, et pour `blocked` et `queries` dans QueriesStats

## v1.8

_Sortie le 20 avril 2024_

- Added support for DNS-over-HTTPS with authentication:
  - New operation — reset DNS-over-HTTPS password for device
  - New device setting — `detect_doh_auth_only`. Disables all DNS connection methods except DNS-over-HTTPS with authentication
  - New field in DeviceDNSAddresses — `dns_over_https_with_auth_url`. Indicates the URL to use when connecting using DNS-over-HTTPS with authentication

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

- Added new Access settings section for DNS profiles (`access_settings`). By customizing these fields, you’ll be able to protect your AdGuard DNS server from unauthorized access:

  - `allowed_clients` — here you can specify which clients can use your DNS server. This field will have priority over the `blocked_clients` field
  - `blocked_clients` — here you can specify which clients are not allowed to use your DNS server
  - `blocked_domain_rules` — here you can specify which domains are not allowed to access your DNS server, as well as define such domains with wildcard and DNS filtering rules

- Ajout de nouvelles limites aux limites de compte :

  - `access_rules` fournit la somme des valeurs `blocked_clients` et `blocked_domain_rules` actuellement utilisées, ainsi que la limite des règles d'accès
  - `user_rules` montre le nombre de règles utilisateur créées, ainsi que la limite qui leur est imposée

- Added a new `ip_log_enabled` setting to log client IP addresses and domains

- Ajout d'un nouveau code d'erreur `FIELD_REACHED_LIMIT` pour indiquer quand les limites ont été atteintes :

  - For the total number of `blocked_clients` and `blocked_domain_rules` in access settings
  - For `rules` in custom user rules settings

## v1.5

_Sortie le 16 juin 2023_

- Added a new `block_nrd` setting and grouped all security-related settings in one place

### Model for safebrowsing settings changed

From:

```json
{
   "enabled": true
}
```

To:

```json
{
   "enabled": true,
   "block_dangerous_domains": true,
   "block_nrd": false
}
```

where `enabled` now controls all settings in the group, `block_dangerous_domains` is the previous `enabled` model field, and `block_nrd` is a setting that blocks newly registered domains.

### Model for saving server settings changed

From:

```json
{
  "protection_enabled" : true,
  "safebrowsing_enabled" : true,
  ..
}
```

to:

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

here a new field `safebrowsing_settings` is used instead of the deprecated `safebrowsing_enabled`, whose value is stored in `block_dangerous_domains`.

## v1.4

_Sortie le 29 mars 2023_

- Added configurable option for blocking response: default (0.0.0.0), REFUSED, NXDOMAIN or custom IP address

## v1.3

_Sortie le 13 décembre 2022_

- Ajout d'une méthode pour obtenir les limites du compte

## v1.2

_Sortie le 14 octobre 2022_

- Added new protocol types DNS and DNSCRYPT. Deprecating the PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP and DNSCRYPT_UDP that will be removed later

## v1.1

_Sortie le 7 juillet 2022_

- Ajout de méthodes pour récupérer des statistiques par temps, domaines, sociétés et appareils
- Added method for updating device settings
- Fixed required fields definition

## v1.0

_Sortie le 22 février 2022_

- Added authentication
- Opérations CRUD avec des appareils et des serveurs DNS
- Journal des requêtes
- Downloading DoH and DoT .mobileconfig
- Filter lists and web services
