---
title: Advanced settings
sidebar_position: 2
---

The Advanced settings section is intended for the more experienced user and includes the following settings.

## Respond to blocked domains

Here you can select the DNS response for the blocked request:

- **Default**: Respond with zero IP address (0.0.0.0 for A; :: for AAAA) when blocked by Adblock-style rule; respond with the IP address specified in the rule when blocked by /etc/hosts-style rule
- **REFUSED**: Respond with REFUSED code
- **NXDOMAIN**: Respond with NXDOMAIN code
- **Custom IP**: Respond with a manually set IP address

## TTL (Time-To-Live)

Time-to-live (TTL) sets the time period (in seconds) for a client device to cache the response to a DNS request and retrieve it from its cache without re-requesting the DNS server. If the TTL value is high, recently unblocked requests may still look blocked for a while. If TTL is 0, the device does not cache responses.

## Block access to iCloud Private Relay

Devices that use iCloud Private Relay may ignore their DNS settings, so AdGuard DNS cannot protect them.

## Block Firefox canary domain

Prevents Firefox from switching to the DoH resolver from its settings when AdGuard DNS is configured system-wide.

## Log IP addresses

By default, AdGuard DNS doesn’t log IP addresses of incoming DNS requests. If you enable this setting, IP addresses will be logged and displayed in Query log.
