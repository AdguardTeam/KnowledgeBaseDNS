---
title: DNS-Filterung
sidebar_position: 1
---

:::info

Der einfachste Weg, die Vorteile der DNS-Filterung zu entdecken, ist die Installation von AdGuard Werbeblocker oder das Ausprobieren von AdGuard DNS. Wenn Sie DNS auf Netzwerkebene filtern möchten, ist AdGuard Home Ihr Werkzeug

Schnellzugriff: [AdGuard Werbeblocker herunterladen](https://adguard.com/download.html?auto=true&utm_source=kb_dns), [AdGuard Home erhalten](https://github.com/AdguardTeam/AdGuardHome#getting-started), [AdGuard DNS ausprobieren](https://adguard-dns.io/dashboard/)

:::

Um die DNS-Filterung besser zu verstehen, sollten wir zunächst die Frage „Was ist DNS?” beantworten.

## Was bedeutet DNS?

DNS steht für „Domain Name System“ und hat die Aufgabe, die Namen von Websites in etwas zu übersetzen, das Browser verstehen können, nämlich in IP-Adressen. Jedes Mal, wenn Sie eine Website aufrufen, sendet Ihr Browser eine Anfrage an einen speziellen Servertyp (DNS-Server). Dieser Server prüft den angeforderten Domainnamen und antwortet mit einer entsprechenden IP-Adresse. Sehr schematisch lässt sich das so darstellen:

![Wie DNS funktioniert](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

Das Gleiche gilt natürlich für alle Anwendungen und Programme, die Webanfragen senden, nicht nur für Browser.

## Wie funktioniert die DNS-Filterung?

Wenn Sie eine der AdGuard-Apps verwenden, die DNS-Filterung unterstützen, fungiert sie als Puffer zwischen Ihrem Gerät und dem DNS-Server. Alle DNS-Anfragen, die Ihre Browser oder Anwendungen senden, werden zuerst von AdGuard verarbeitet. Wenn Sie den Standard-DNS-Server Ihres Internetanbieters verwenden, ist Ihr DNS-Datenverkehr wahrscheinlich nicht verschlüsselt und anfällig für Snooping (herumspionieren) und Hijacking (entführen). AdGuard verschlüsselt alle Ihre DNS-Anfragen, bevor sie Ihr Gerät verlassen, so dass kein Angreifer Zugriff auf deren Inhalt erhalten kann. Darüber hinaus kann AdGuard Anfragen an Werbe-, Tracking- und/oder Erwachsenen-Domains erkennen und sie zu verwerfen, anstatt sie an den DNS-Server weiterzuleiten. Mehr dazu [später](#local-dns-blocklists).

![So funktioniert DNS-Filterung](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

DNS-Filterung ist ein leistungsfähiges Werkzeug und wird von allen wichtigen AdGuard-Anwendungen unterstützt: [AdGuard für Windows](https://adguard.com/adguard-windows/overview.html), [AdGuard für Mac](https://adguard.com/adguard-mac/overview.html), [AdGuard für Android](https://adguard.com/adguard-android/overview.html) und [AdGuard für iOS](https://adguard.com/adguard-ios/overview.html).

Die DNS-Filterung kann in zwei separate Funktionen unterteilt werden: Verschlüsselung und Umleitung des DNS-Verkehrs zu DNS-Servern und lokale Sperrung bestimmter Domains durch Anwendung von DNS-Blocklisten.

### DNS-Server

Es stehen Tausende von DNS-Servern zur Auswahl, die sich alle durch ihre Eigenschaften und ihren Zweck unterscheiden. Die meisten geben einfach die IP-Adresse der angefragten Domain zurück, aber einige haben zusätzliche Funktionen: Sie sperren Werbung, Tracking, Domains für Erwachsene und so weiter. Heutzutage verwenden alle großen DNS-Server ein oder mehrere zuverlässige Verschlüsselungsprotokolle: DNS-over-HTTPS, DNS-over-TLS. AdGuard bietet auch einen [DNS-Dienst](https://adguard-dns.io/) an und war weltweit das erste Unternehmen, das das sehr neue und vielversprechende Verschlüsselungsprotokoll [DNS-over-QUIC](https://adguard.com/blog/dns-over-quic.html) anbot. AdGuard stellt verschiedene Server für unterschiedliche Ziele bereit. Dieses Diagramm veranschaulicht die Funktionsweise der Sperr-Server von AdGuard:

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Andere DNS-Anbieter arbeiten möglicherweise anders. Informieren Sie sich daher über sie, bevor Sie sich auf diesen oder einen anderen DNS-Server festlegen. Die Liste der beliebtesten DNS-Anbieter finden Sie unter [in diesem Artikel](dns-providers.md). Alle AdGuard-Anwendungen, die DNS-Funktionen unterstützen, verfügen über eine Liste von DNS-Servern, aus der Sie auswählen können, oder erlauben sogar die Auswahl eines beliebigen benutzerdefinierten DNS-Servers, den Sie wünschen.

### Lokale DNS-Blocklisten

Aber wenn Sie sich nur auf DNS-Server verlassen, um Ihren DNS-Verkehr zu filtern, verlieren Sie jegliche Flexibilität. Wenn der gewählte Server eine Domain sperrt, können Sie nicht auf diese zugreifen. Mit AdGuard müssen Sie nicht einmal einen bestimmten DNS-Server konfigurieren, um den DNS-Verkehr zu filtern. Alle AdGuard-Produkte ermöglichen den Einsatz von DNS-Blocklisten, seien es einfache Hosts-Dateien oder Listen mit der [erweiterten Syntax](dns-filtering-syntax.md). Sie funktionieren ähnlich wie normale Blocklisten: Wenn eine DNS-Anfrage mit einer der Regeln in der aktiven Filterliste übereinstimmt, wird sie sperrt. Um genau zu sein, wird es in ein „schwarzes Loch” umgeleitet (also verworfen).

> In AdGuard für iOS müssen Sie zunächst in den Einstellungen den „Erweiterten Modus“ aktivieren, um Zugang zur DNS-Blockierung zu erhalten.

Sie können so viele benutzerdefinierte Blocklisten hinzufügen, wie Sie möchten. Sie können beispielsweise [AdGuard DNS-Filter](https://github.com/AdguardTeam/AdGuardSDNSFilter) verwenden. Er sperrt buchstäblich alles, was der AdGuard-DNS-Server tut, aber in diesem Fall steht es Ihnen frei, einen anderen DNS-Server zu verwenden. Außerdem können Sie auf diese Weise weitere Filter hinzufügen oder benutzerdefinierte Ausnahmeregeln erstellen, was mit einer einfachen „Verwendung eines blockierenden DNS-Servers“ nicht möglich wäre.
> Es gibt Hunderte verschiedener DNS-Blocklisten, Sie können [hier](https://filterlists.com/) nach ihnen suchen.

## DNS-Filterung im Vergleich zur Netzwerkfilterung

Netzwerkfilterung ist das, was wir die „normale“ Art und Weise nennen, wie eigenständige AdGuard-Apps den Netzwerkverkehr verarbeiten, daher der Name. Informieren Sie sich in [diesem Artikel](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/).

Zunächst einmal müssen wir erwähnen, dass Sie mit AdGuard nicht wählen müssen. Sie können immer sowohl die reguläre Netzwerkfilterung als auch die DNS-Filterung gleichzeitig verwenden. Es ist jedoch wichtig, die Hauptunterschiede zwischen den beiden zu verstehen. Die DNS-Filterung hat sowohl ihre einzigartigen Vor- als auch Nachteile:

**Vorteile der DNS-Filterung:**

1. Auf einigen Plattformen ist dies die einzige Möglichkeit, eine systemweite Filterung zu erreichen. Unter iOS unterstützt beispielsweise nur der Safari-Browser das Sperren von Inhalten im bekannten Sinne, für alles andere gibt es nur DNS-Filterung.
1. Einige Formen der Verfolgung (wie [CNAME-cloaked tracking](https://adguard.com/blog/cname-tracking.html)) können nur durch DNS-Filterung bekämpft werden.
1. Die Phase der Verarbeitung einer DNS-Anfrage ist die früheste Phase, in der Sie möglicherweise mit einer Anzeige oder einem Tracker umgehen können. Dies hilft, ein wenig Akkulaufzeit und Datenverkehr zu sparen.

**Nachteile der DNS-Filterung:**

1. DNS filtering is "rough", meaning that it won't remove whitespaces that are left behind a blocked ad, or apply any sorts of cosmetic filtering. Many of the more complicated ads can't be blocked on DNS-level (or rather, they can, but only by blocking the entire domains which are being used for other purposes).

    ![Example of difference](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *An example of the difference between DNS filtering and network filtering*

1. It's not possible to know the origin of a DNS request, which means you can't distinguish between different apps on the DNS-level. This impacts the statistics negatively and makes it impossible to create app-specific filtering rules.

We recommend using DNS filtering in addition to network filtering, not instead of it, whenever possible.
