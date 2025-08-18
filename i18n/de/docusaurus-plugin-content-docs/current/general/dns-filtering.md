---
title: DNS-Filterung
sidebar_position: 1
---

:::info

Der einfachste Weg, die Vorteile der DNS-Filterung zu entdecken, ist die Installation von AdGuard Werbeblocker oder das Ausprobieren von AdGuard DNS. Wenn Sie DNS auf Netzwerkebene filtern möchten, ist AdGuard Home Ihr Werkzeug

Schnellzugriff: [AdGuard Werbeblocker herunterladen](https://agrd.io/download-kb-adblock), [AdGuard Home erhalten](https://github.com/AdguardTeam/AdGuardHome#getting-started), [AdGuard DNS ausprobieren](https://agrd.io/download-dns)

:::

To better understand DNS filtering, first, we should answer the question “What is DNS?”

## Was bedeutet DNS?

DNS stands for *Domain Name System*, and its purpose is to translate websites’ names into something browsers can understand, i.e. IP addresses. Jedes Mal, wenn Sie eine Website aufrufen, sendet Ihr Browser eine Anfrage an einen speziellen Servertyp (DNS-Server). Dieser Server prüft den angeforderten Domainnamen und antwortet mit einer entsprechenden IP-Adresse. Sehr schematisch lässt sich das so darstellen:

![Wie DNS funktioniert](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

Das Gleiche gilt natürlich für alle Anwendungen und Programme, die Webanfragen senden, nicht nur für Browser.

## Wie funktioniert die DNS-Filterung?

Wenn Sie eine der AdGuard-Apps verwenden, die DNS-Filterung unterstützen, fungiert sie als Puffer zwischen Ihrem Gerät und dem DNS-Server. Alle DNS-Anfragen, die Ihre Browser oder Anwendungen senden, werden zuerst von AdGuard verarbeitet. If you’re using the default DNS server provided by your ISP, your DNS traffic is likely not encrypted and vulnerable to snooping and hijacking. AdGuard verschlüsselt alle Ihre DNS-Anfragen, bevor sie Ihr Gerät verlassen, so dass kein Angreifer Zugriff auf deren Inhalt erhalten kann. On top of that, AdGuard can identify requests to ad, tracking, and/or adult domains and redirect them to a “blackhole” instead of forwarding them to the DNS server. Mehr dazu [später](#local-dns-blocklists).

![So funktioniert DNS-Filterung](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

DNS filtering is a powerful tool and it’s supported by all major AdGuard apps: [AdGuard for Windows](https://adguard.com/adguard-windows/overview.html), [AdGuard for Mac](https://adguard.com/adguard-mac/overview.html), [AdGuard for Android](https://adguard.com/adguard-android/overview.html) and [AdGuard for iOS](https://adguard.com/adguard-ios/overview.html).

Die DNS-Filterung kann in zwei separate Funktionen unterteilt werden: Verschlüsselung und Umleitung des DNS-Verkehrs zu DNS-Servern und lokale Sperrung bestimmter Domains durch Anwendung von DNS-Blocklisten.

### DNS-Server

Es stehen Tausende von DNS-Servern zur Auswahl, die sich alle durch ihre Eigenschaften und ihren Zweck unterscheiden. Die meisten geben einfach die IP-Adresse der angefragten Domain zurück, aber einige haben zusätzliche Funktionen: Sie sperren Werbung, Tracking, Domains für Erwachsene und so weiter. Heutzutage verwenden alle großen DNS-Server ein oder mehrere zuverlässige Verschlüsselungsprotokolle: DNS-over-HTTPS, DNS-over-TLS. AdGuard also provides a [DNS service](https://adguard-dns.io/), and it was the world’s first to offer the brand new and very promising [DNS-over-QUIC](https://adguard.com/blog/dns-over-quic.html) encryption protocol. AdGuard stellt verschiedene Server für unterschiedliche Ziele bereit. Dieses Diagramm veranschaulicht die Funktionsweise der Sperr-Server von AdGuard:

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Andere DNS-Anbieter arbeiten möglicherweise anders. Informieren Sie sich daher über sie, bevor Sie sich auf diesen oder einen anderen DNS-Server festlegen. Die Liste der beliebtesten DNS-Anbieter finden Sie unter [in diesem Artikel](dns-providers.md). All AdGuard apps that support DNS functionality also have a list of DNS servers to choose from, or even allow to select any custom DNS server that you’d like.

### Lokale DNS-Blocklisten

Aber wenn Sie sich nur auf DNS-Server verlassen, um Ihren DNS-Verkehr zu filtern, verlieren Sie jegliche Flexibilität. If the selected server blocks a domain, you can’t access it. With AdGuard, you don’t even need to configure any specific DNS server to filter DNS traffic. Alle AdGuard-Produkte ermöglichen den Einsatz von DNS-Blocklisten, seien es einfache Hosts-Dateien oder Listen mit der [erweiterten Syntax](dns-filtering-syntax.md). Sie funktionieren ähnlich wie normale Blocklisten: Wenn eine DNS-Anfrage mit einer der Regeln in der aktiven Filterliste übereinstimmt, wird sie sperrt. Genauer gesagt, gibt der DNS-Server eine nicht weiterleitbare IP-Adresse für eine solche Anfrage an.

:::tip

In AdGuard für iOS müssen Sie zunächst den *Erweiterten Modus* in den *Einstellungen* aktivieren, um Zugang zur DNS-Blockierung zu erhalten.

:::

Sie können so viele benutzerdefinierte Sperrlisten hinzufügen, wie Sie möchten. Sie können zum Beispiel den [AdGuard DNS-Filter](https://github.com/AdguardTeam/AdGuardSDNSFilter) verwenden. Er sperrt buchstäblich alles, was der AdGuard DNS-Server tut, aber in diesem Fall können Sie jeden anderen DNS-Server verwenden. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple “use a blocking DNS server” setup.

There are hundreds of different DNS blocklists, you can look for them on [filterlists.com](https://filterlists.com/).

## DNS-Filterung im Vergleich zur Netzwerkfilterung

Network filtering is what we call the regular way AdGuard standalone apps process network traffic, hence the name. Sie können sich gerne näher damit vertraut machen, indem Sie [diesen Artikel](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/) lesen.

First of all, we have to mention that with AdGuard you don’t have to choose. Sie können immer sowohl die reguläre Netzwerkfilterung als auch die DNS-Filterung gleichzeitig verwenden. However, it’s important to understand key differences between the two. Die DNS-Filterung hat sowohl ihre einzigartigen Vor- als auch Nachteile:

**Vorteile der DNS-Filterung:**

1. Auf einigen Plattformen ist dies die einzige Möglichkeit, eine systemweite Filterung zu erreichen. For example, on iOS only the Safari browser supports content blocking in the familiar sense, for everything else there’s only DNS filtering.
1. Einige Formen der Verfolgung (wie [CNAME-cloaked tracking](https://adguard.com/blog/cname-tracking.html)) können nur durch DNS-Filterung bekämpft werden.
1. Die Phase der Verarbeitung einer DNS-Anfrage ist die früheste Phase, in der Sie möglicherweise mit einer Anzeige oder einem Tracker umgehen können. Dies hilft, ein wenig Akkulaufzeit und Datenverkehr zu sparen.

**Nachteile der DNS-Filterung:**

1. DNS filtering is coarse — it doesn’t remove whitespace left behind a blocked ad or apply any sorts of cosmetic filtering. Many of the more complicated ads can’t be blocked on DNS-level (or rather, they can, but only by blocking the entire domains which are being used for other purposes).

    ![Beispiel für den Unterschied](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *Ein Beispiel für den Unterschied zwischen DNS-Filterung und Netzwerk-Filterung*

1. It’s not possible to know the origin of a DNS request, which means you can’t distinguish between different apps on the DNS-level. Dies wirkt sich negativ auf die Statistiken aus und macht es unmöglich, app-spezifische Filterregeln zu erstellen.

Wir empfehlen, die DNS-Filterung nach Möglichkeit zusätzlich zur Netzwerkfilterung zu verwenden, nicht an deren Stelle.
