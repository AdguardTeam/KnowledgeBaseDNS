---
title: Überblick
sidebar_position: 1
---

## Was ist AdGuard DNS?

AdGuard DNS ist ein kostenloser, datenschutzorientierter DNS-Auflösungsdienst, der eine sichere Verbindung bietet und auch Tracking, Werbung, Phishing und nicht jugendfreie Inhalte (optional) sperren kann. Für AdGuard DNS müssen keine Anwendungen installiert werden. Es ist einfach zu bedienen und lässt sich mühelos auf jedem Gerät einrichten (Smartphones, Desktops, Router, Spielkonsolen usw.).

## Öffentliche AdGuard DNS-Server

AdGuard DNS verfügt über drei verschiedene Arten von öffentlichen Servern. Der *Standardserver* dient zum Blockieren von Werbung, Trackern, Malware und Phishing-Websites. *Familienschutz* tut dasselbe, blockiert aber auch Websites mit nicht jugendfreien Inhalten und erzwingt die Option *"Sichere Suche"* in Browsern, die dies anbieten. *Ohne Filterung* bietet eine sichere und zuverlässige Verbindung, blockiert aber nichts. Eine ausführliche Anleitung zur Einrichtung von AdGuard DNS auf jedem Gerät finden Sie auf [unserer Website](https://adguard-dns.io/public-dns.html). Jeder Server unterstützt verschiedene Sicherheitsprotokolle: DNSCrypt, DNS-over-HTTPS (DoH), DNS-over-TLS (DoT), und DNS-over-QUIC (DoQ).

## AdGuard DNS-Protokoll

Neben einfachem DNS (sowohl IPv4 als auch IPv6) unterstützt AdGuard DNS verschiedene verschlüsselte Protokolle, so dass Sie das für Sie am besten geeignete auswählen können.

### DNS-over-HTTPS (DoH) und DNS-over-TLS (DoT)

DoH und DoT sind moderne, sichere DNS-Protokolle, die sich immer größerer Beliebtheit erfreuen und in absehbarer Zeit zu den Industriestandards gehören werden. Beide sind zuverlässiger als DNSCrypt und beide werden von AdGuard DNS unterstützt.

#### JSON API für DNS

AdGuard DNS bietet auch eine JSON-API für DNS. Es ist möglich, eine DNS-Antwort in JSON zu erhalten, indem man Folgendes eingibt:

```text
curl 'https://dns.adguard-dns.com/resolve?name=www.example.com'
```

Eine ausführliche Dokumentation finden Sie in [Googles Anleitung zu JSON API für DNS-over-HTTPS (DoH) ](https://developers.google.com/speed/public-dns/docs/doh/json). Das Abrufen einer DNS-Antwort in JSON funktioniert mit AdGuard DNS auf die gleiche Weise.

:::note

Im Gegensatz zu Google DNS unterstützt AdGuard DNS keine `edns_client_subnet` und `Comment`-Werte in Antwort-JSONs.

:::

### DNS-over-QUIC (DoQ)

[DNS-over-QUIC ist ein neues DNS-Verschlüsselungsprotokoll](https://adguard.com/blog/dns-over-quic.html) und AdGuard DNS ist der erste öffentliche Resolver, der es unterstützt. Im Gegensatz zu DoH und DoT verwendet es QUIC als Transportprotokoll und bringt DNS endlich zu seinen Wurzeln zurück - es arbeitet über UDP. Es bringt alle Vorteile von QUIC mit sich - sofort einsatzbereite Verschlüsselung, kürzere Verbindungszeiten, bessere Leistung bei Verlust von Datenpaketen. Außerdem soll QUIC ein Protokoll auf Transportebene sein, und es besteht keine Gefahr von Metadatenlecks, wie sie bei DoH auftreten können.

### Ratenbegrenzung

DNS-Datenstrombegrenzung ist eine Technik, mit der die Menge des Datenverkehrs, die ein DNS-Server innerhalb eines bestimmten Zeitraums bewältigen kann, geregelt wird. Wir bieten die Möglichkeit, das Standardlimit für Team- und Enterprise-Pakete von Private AdGuard DNS zu erhöhen. Für weitere Informationen lesen Sie bitte [den entsprechenden Artikel](/private-dns/server-and-settings/rate-limit.md).

### DNSCrypt

AdGuard DNS ermöglicht Ihnen die Verwendung eines speziellen verschlüsselten Protokolls – DNSCrypt. Dank dieser Funktion werden alle DNS-Anfragen verschlüsselt, was Sie vor dem Abfangen von Anfragen und dem anschließenden Abhören und/oder Ändern schützt.

:::note

Dies ist ein veraltetes Protokoll mit eingeschränkter Unterstützung.

:::
