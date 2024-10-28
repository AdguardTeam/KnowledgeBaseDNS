---
title: Erweiterte Einstellungen
sidebar_position: 2
---

Der Abschnitt „Erweiterte Einstellungen“ richtet sich an erfahrenere Nutzer:innen und umfasst die folgenden Einstellungen.

## Auf blockierte Domains reagieren

Hier können Sie die DNS-Antwort für die blockierte Anfrage auswählen:

- **Standard**: Antwort mit Null-IP-Adresse (0.0.0.0 für A; :: für AAAA), wenn durch eine Adblock-Regel gesperrt; Antwort mit der in der Regel angegebenen IP-Adresse, wenn durch eine /etc/hosts-Regel gesperrt
- **REFUSED**: Mit dem Code REFUSED antworten
- **NXDOMAIN**: Mit dem Code NXDOMAIN antworten
- **Benutzerdefinierte IP**: Mit einer manuell eingestellten IP-Adresse antworten

## Lebensdauer (TTL)

Lebensdauer (TTL, Time-to-live) legt die Zeitspanne (in Sekunden) fest, die ein Client-Gerät benötigt, um die Antwort auf eine DNS-Anfrage zwischenzuspeichern und aus seinem Cache abzurufen, ohne den DNS-Server erneut anzufordern. Wenn der TTL-Wert hoch ist, können kürzlich freigegebene Anfragen noch eine Weile gesperrt angezeigt werden. Wenn TTL 0 ist, werden die Antworten nicht zwischengespeichert.

## Zugriff auf iCloud Private Relay blockieren

Geräte, die iCloud Private Relay verwenden, ignorieren möglicherweise ihre DNS-Einstellungen, so dass AdGuard DNS sie nicht schützen kann.

## Canary-Domain von Firefox blockieren

Verhindert, dass Firefox von seinen Einstellungen auf den DoH-Resolver umschaltet, wenn AdGuard DNS systemweit konfiguriert ist.

## IP-Adressen protokollieren

Standardmäßig protokolliert AdGuard DNS keine IP-Adressen von eingehenden DNS-Anfragen. Wenn Sie diese Einstellung aktivieren, werden IP-Adressen protokolliert und im Anfragenprotokoll angezeigt.
