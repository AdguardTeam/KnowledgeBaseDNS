---
title: Überblick
sidebar_position: 1
---

## Was ist AdGuard DNS?

AdGuard DNS ist ein kostenloser, datenschutzorientierter DNS-Auflösungsdienst, der eine sichere Verbindung bietet und auch Tracking, Werbung, Phishing und nicht jugendfreie Inhalte (optional) sperren kann. Für AdGuard DNS müssen keine Anwendungen installiert werden. Es ist einfach zu bedienen und lässt sich mühelos auf jedem Gerät einrichten (Smartphones, Desktops, Router, Spielkonsolen usw.).

## Öffentliche AdGuard DNS-Server

AdGuard DNS verfügt über drei verschiedene Arten von öffentlichen Servern. *Default* server is for blocking ads, trackers, malware and phishing websites. *Family protection* does the same, but also blocks websites with adult content and enforces *Safe search* option in browsers that provide it. *Non-filtering* provides a secure and reliable connection but doesn’t block anything. Eine ausführliche Anleitung zur Einrichtung von AdGuard DNS auf jedem Gerät finden Sie auf [unserer Website](https://adguard-dns.io/public-dns.html). Jeder Server unterstützt verschiedene Sicherheitsprotokolle: DNSCrypt, DNS-over-HTTPS (DoH), DNS-over-TLS (DoT), und DNS-over-QUIC (DoQ).

## AdGuard DNS-Protokoll

Neben einfachem DNS (sowohl IPv4 als auch IPv6) unterstützt AdGuard DNS verschiedene verschlüsselte Protokolle, so dass Sie das für Sie am besten geeignete auswählen können.

### DNS-over-HTTPS (DoH) und DNS-over-TLS (DoT)

DoH und DoT sind moderne, sichere DNS-Protokolle, die sich immer größerer Beliebtheit erfreuen und in absehbarer Zeit zu den Industriestandards gehören werden. Beide sind zuverlässiger als DNSCrypt und beide werden von AdGuard DNS unterstützt.

#### JSON API für DNS

AdGuard DNS bietet auch eine JSON-API für DNS. Es ist möglich, eine DNS-Antwort in JSON zu erhalten, indem man Folgendes eingibt:

```text
curl 'https://dns.adguard-dns.com/resolve?name=www.example.com'
```

For detailed documentation, refer to [Google’s guide to JSON API for DNS-over-HTTPS](https://developers.google.com/speed/public-dns/docs/doh/json). Das Abrufen einer DNS-Antwort in JSON funktioniert mit AdGuard DNS auf die gleiche Weise.

:::note

Unlike with Google DNS, AdGuard DNS doesn’t support `edns_client_subnet` and `Comment` values in response JSONs.

:::

### DNS-over-QUIC (DoQ)

[DNS-over-QUIC is a new DNS encryption protocol](https://adguard-dns.io/en/blog/dns-over-quic.html) and AdGuard DNS is the first public resolver that supports it. Im Gegensatz zu DoH und DoT verwendet es QUIC als Transportprotokoll und bringt DNS endlich zu seinen Wurzeln zurück - es arbeitet über UDP. Es bringt alle Vorteile von QUIC mit sich - sofort einsatzbereite Verschlüsselung, kürzere Verbindungszeiten, bessere Leistung bei Verlust von Datenpaketen. Außerdem soll QUIC ein Protokoll auf Transportebene sein, und es besteht keine Gefahr von Metadatenlecks, wie sie bei DoH auftreten können.

### Ratenbegrenzung

DNS-Datenstrombegrenzung ist eine Technik, mit der die Menge des Datenverkehrs, die ein DNS-Server innerhalb eines bestimmten Zeitraums bewältigen kann, geregelt wird. Wir bieten die Möglichkeit, das Standardlimit für Team- und Enterprise-Pakete von Private AdGuard DNS zu erhöhen. Für weitere Informationen lesen Sie bitte [den entsprechenden Artikel](/private-dns/server-and-settings/rate-limit.md).

### DNSCrypt

AdGuard DNS allows you to use a specific encrypted protocol — DNSCrypt. Thanks to it, all DNS requests are being encrypted, which protects you from possible request interception and subsequent eavesdropping and/or alteration.

:::note

This is an obsolete protocol with restricted support.

:::
