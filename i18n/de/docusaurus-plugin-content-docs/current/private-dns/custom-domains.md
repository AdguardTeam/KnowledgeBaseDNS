---
title: Benutzerdefinierte Domains
sidebar_position: 6
---

Wenn Sie ein AdGuard DNS-Abonnement haben, können Sie Ihre eigenen Domains (wie `dns.example.com`) anstelle der Standarddomain `d.adguard-dns.com` einrichten. Mit dieser Funktion können Unternehmen den DNS-Schutz einfach in ihre eigene Infrastruktur integrieren — nahtlos in die Sicherheitsrichtlinien eingebunden und mit allen Werbeblocker- und Datenschutzfunktionen von AdGuard DNS.

:::note

Benutzerdefinierte Domains sind in den Paketen **Enterprise** und **Team** verfügbar.

:::

## So richten Sie eine benutzerdefinierte Domain ein

Um eine benutzerdefinierte Domain zu konfigurieren, melden Sie sich bei Ihrem AdGuard DNS-Übersicht an und wählen Sie [_Kontoeinstellungen_](https://adguard-dns.io/de/dashboard/account). Blättern Sie nach unten zu _Erweiterte Einstellungen_ und wählen Sie _Benutzerdefinierte Domains_. Als Nächstes müssen Sie die drei wichtigsten Schritte befolgen.

1. Protokoll auswählen. Hier haben Sie zwei Möglichkeiten:

    - DoH-Domain hinzufügen (für DNS-over-HTTPS)
    - DoT/DoQ-Domain hinzufügen (für DNS-over-TLS oder DNS-over-QUIC)

   ![Protokoll auswählen \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_de_1.png)

2. Nachdem Sie das Protokoll ausgewählt haben, geben Sie den gewünschten Domainnamen ein (z. B. `beispiel.com`) und überprüfen Sie den CNAME-Eintrag.

   ![CNAME-Eintrag \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_de_2.png)

3. Zertifikat einrichten. Für DoT/DoQ-Domains müssen Sie ein sogenanntes Wildcard-TLS-Zertifikat hochladen. Wenn Sie sich für DoH entscheiden, können Sie entweder Ihr eigenes TLS-Zertifikat bereitstellen oder AdGuard DNS eines für Sie generieren lassen. Sobald die Überprüfung abgeschlossen ist, wird Ihre eigene Domain in der Übersicht angezeigt und kann verwendet werden.

   ![Liste der benutzerdefienierten Domains \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_de_3.png)
