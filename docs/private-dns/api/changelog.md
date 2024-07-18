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

## v1.9 (11 July 2024)

- Added automatic device connection functionality:
    - New DNS server setting — `auto_connect_devices_enabled`, allowing approval for auto-connecting devices through a specific link type
    New field in Device — `auto_device`, indicating that the device is automatically connected
- Replaced `int` with `long` for `queries` in CategoryQueriesStats, for `used` in AccountLimits, and for `blocked` and `queries` in QueriesStats

## v1.8

*Released on April 20, 2024*

- Added support for DNS-over-HTTPS with authentication:
    - New operation — reset DNS-over-HTTPS password for device
    - New device setting — `detect_doh_auth_only`. Disables all DNS connection methods except DNS-over-HTTPS with authentication
    - New field in Device DNSAddresses — `dns_over_https_with_auth_url`. Indicates the URL to use when connecting using DNS-over-HTTPS with authentication

## v1.7

*Released on March 11, 2024*

- Added dedicated IPv4 addresses functionality:
    - Dedicated IPv4 addresses can now be used on devices for DNS server configuration
    - Dedicated IPv4 address is now associated with the device it is linked to, so that queries made to this address are logged for that device
- Added new operations:
    - List all available dedicated IPv4 addresses
    - Allocate new dedicated IPv4 address
    - Link an available IPv4 address to a device
    - Unlink an IPv4 address from a device
    - Request info on dedicated addresses associated with a device
- Added new limits to Account limits:
    - `dedicated_ipv4` — provides information about the amount of already allocated dedicated IPv4 addresses, as well as the limit on them
- Removed deprecated field of DNSServerSettings:
    - `safebrowsing_enabled`

## v1.6

*Released on January 22, 2024*

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

*Released on June 16, 2023*

- Added new setting `block_nrd` and group all security-related settings to one place.

### Model for safebrowsing settings changed

From

``` json
{
   "enabled": true
}
```

To:

``` json
{
   "enabled": true,
   "block_dangerous_domains": true,
   "block_nrd": false
}
```

where `enabled` is now control all settings in group, `block_dangerous_domains` is previous model field "enabled" and `block_nrd` is settings for filtering newly registered domains.

### Model for saving server settings changed

From:

``` json
{
  "protection_enabled" : true,
  "safebrowsing_enabled" : true,
  ..
}
```

to:

``` json
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

*Released on March 29, 2023*

- Added configurable option for blocking response: default (0.0.0.0), REFUSED, NXDOMAIN or custom IP-address.

## v1.3

*Released on December 13, 2022*

- Added method to get account limits.

## v1.2

*Released on October 14, 2022*

- Added new protocol types DNS and DNSCRYPT. Deprecating the PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP and DNSCRYPT_UDP that will be removed later.

## v1.1

*Released on July 07, 2022*

- Added methods to retrieve statistics by time, domains, companies and devices.
- Added method for updating device settings.
- Fixed required fields definition.

## v1.0

*Released on February 22, 2022*

- Added authentication.
- CRUD operations with devices and DNS servers.
- Query log.
- Downloading DOT and DOT .mobileconfig.
- Filter Lists and Web-Services.
