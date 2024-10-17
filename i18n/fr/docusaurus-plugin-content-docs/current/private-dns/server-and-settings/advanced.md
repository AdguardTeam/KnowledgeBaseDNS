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

## Durée de vie (TTL)

Time-to-live (TTL) sets the time period (in seconds) for a client device to cache the response to a DNS request and retrieve it from its cache without re-requesting the DNS server. Si la valeur TTL est élevée, les requêtes récemment débloquées peuvent sembler encore bloquées pendant un certain temps. Si le TTL est 0, le dispositif ne met pas les réponses en cache.

## Block access to iCloud Private Relay

Les appareils qui utilisent le relais privé iCloud peuvent ignorer leurs paramètres DNS, donc AdGuard DNS ne peut pas les protéger.

## Block Firefox canary domain

Prevents Firefox from switching to the DoH resolver from its settings when AdGuard DNS is configured system-wide.

## Log IP addresses

By default, AdGuard DNS doesn’t log IP addresses of incoming DNS requests. Si vous activez ce paramètre, les adresses IP seront journalisées et affichées dans le journal des requêtes.
