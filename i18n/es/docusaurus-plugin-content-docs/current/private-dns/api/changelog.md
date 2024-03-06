---
title: Changelog
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    Changelog is from here:
    https://api.adguard-dns.io/static/api/CHANGELOG.md
-->

This article contains the changelog for [AdGuard DNS API](private-dns/api/overview.md).

## v1.6

- Added new section "Access settings" for DNS profiles (`access_settings`). By customizing these fields, you’ll be able to protect your AdGuard DNS server from unauthorized access:

  - `allowed_clients` — here you can specify which clients can use your DNS server. This field will have priority over the `blocked_clients` field
  - `blocked_clients` — here you can specify which clients are not allowed to use your DNS server
  - `blocked_domain_rules` — here you can specify which domains are not allowed to access your DNS server, as well as define such domains with wildcard and DNS filtering rules

- Added new limits to Account limits:

  - `access_rules` provides the sum of currently used `blocked_clients` and `blocked_domain_rules` values, as well as the limit on access rules
  - `user_rules` shows the amount of created user rules, as well as the limit on them

- Added new setting: `ip_log_enabled` for the ability to log client IP addresses and domains.

- Added new error code `FIELD_REACHED_LIMIT` to indicate when limits have been reached:

  - For the total number of `blocked_clients` and `blocked_domain_rules` in access settings
  - For `rules` in custom user rules settings

## v1.5

- Added new setting `block_nrd` and group all security-related settings to one place.

### Model for safebrowsing settings changed

From

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

where `enabled` is now control all settings in group, `block_dangerous_domains` is previous model field "enabled" and `block_nrd` is settings for filtering newly registered domains.

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

here new field `safebrowsing_settings` is used instead of deprecated `safebrowsing_enabled`, whose value stored in `block_dangerous_domains`.

## v1.4

- Added configurable option for blocking response: default (0.0.0.0), REFUSED, NXDOMAIN or custom IP-address.

## v1.3

- Added method to get account limits.

## v1.2

- Added new protocol types DNS and DNSCRYPT. Deprecating the PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP and DNSCRYPT_UDP that will be removed later.

## v1.1

- Added methods to retrieve statistics by time, domains, companies and devices.
- Added method for updating device settings.
- Fixed required fields definition.

## v1.0

- Added authentication.
- CRUD operations with devices and DNS servers.
- Query log.
- Downloading DOT and DOT .mobileconfig.
- Filter Lists and Web-Services.
