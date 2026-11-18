---
title: White-Label-Endpunkt (Konto-IP-Adresse)
sidebar_position: 7
---

Benutzerdefinierte Domains ermöglichen es Partnern, AdGuard DNS unter eigener Marke anzubieten. Beim Enterprise-Plan kann dieser Dienst über eine private IP-Adresse ausgeführt werden: Diese Funktion wird als _Konto-IP_ bezeichnet. Domains verweisen über einen A-Eintrag auf die _Konto-IP_ statt über einen CNAME-Eintrag, der bei standardmäßigen benutzerdefinierten Domains verwendet wird.

:::note

**CNAME** zeigt deine Domain auf eine andere Domain (`dns.partner.com` → `cname.adguard-dns.com`). Die tatsächliche IP-Adresse wird über diese zweite Domain aufgelöst, sodass der Datenverkehr über die gemeinsame Infrastruktur läuft, die sie bedient.

**Der A-Eintrag** zeigt deine Domain direkt auf eine IP-Adresse (`dns.partner.com` → `203.0.113.10`). Dazwischen liegt keine weitere Domain: Die Adresse, auf die deine Domain aufgelöst wird, ist die, die den Datenverkehr verarbeitet.

:::

Jedes Konto kann eine _Konto-IP_ haben, und Sie können mehrere Domains darauf verweisen. Dies ist nicht dasselbe wie die dedizierten IPv4- und IPv6-Adressen, die zur Identifizierung von Geräten verwendet werden: Eine _Konto-IP_ ist die Adresse, zu der Ihre benutzerdefinierten Domains aufgelöst werden.

## Wie man eine Konto-IP erhält

Um eine _Konto-IP_ anzufordern, wenden Sie sich bitte an Ihren Kundenbetreuer oder den Support unter [support@adguard-dns.io](mailto:support@adguard-dns.io).

Sobald die Adresse zugewiesen ist, erscheint der Block _White-Label-Endpunkt_ unter _Einstellungen_ → _Erweiterte Einstellungen_ → _Benutzerdefinierte Domains_ und zeigt Ihre _Konto-IP-Adresse_ an. Bis dahin wird der Block nicht angezeigt.

![White-Label-Endpunkt](https://cdn.adtidy.org/content/kb/dns/enterprise/whitelabel_endpoint_de.png)

:::caution

Wenn dein Konto das Enterprise-Paket verlässt, wird die Adresse inaktiv und Domains, die darauf zeigen, funktionieren nicht mehr. Benutzerdefinierte Domains bleiben im **Team**-Paket verfügbar, aber nur über einen CNAME-Eintrag — um die pausierten Domains wiederzubeleben, füge sie erneut als standardmäßige benutzerdefinierte Domains hinzu.

Die Adresse selbst bleibt für dein Konto reserviert. Wenn du zum Enterprise-Paket zurückkehrst, bekommst du dieselbe zurück.

:::

## So verknüpfen Sie eine Domain mit Ihrer Konto-IP-Adresse

Die Einrichtung erfolgt in denselben Schritten wie bei einer normalen benutzerdefinierten Domain, mit dem Unterschied, dass Sie einen A-Eintrag anstelle eines CNAME-Eintrags erstellen. Außerdem wird bei DoH-Domains das Zertifikat nicht automatisch ausgestellt – Sie müssen Ihr eigenes hochladen.

1. Wählen Sie unter _Benutzerdefinierte Domains_ das Protokoll aus: _DoH-Domain hinzufügen_ (für DNS-over-HTTPS) oder _DoT/DoQ-Domain hinzufügen_ (für DNS-over-TLS oder DNS-over-QUIC).

   ![Auswahl des Protokolls](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_protocol_de.png)

2. Geben Sie die gewünschte Domain ein (z. B. `dns.partner.com`) und klicken Sie auf _Weiter_. Sie benötigen Zugriff auf das DNS-Verwaltungspanel dieser Domain.

   ![Eingabe der Domain](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_domain_de.png)

3. Auf dem nächsten Bildschirm werden die Werte für Ihren DNS-Eintrag angezeigt: Ihre Domain unter _Name (Host)_ und Ihre _Konto-IP_ unter _Wert (Verweist auf / IP-Adresse)_. Lassen Sie dieses Fenster geöffnet, gehen Sie zum Kontrollfeld Ihres DNS-Anbieters und erstellen Sie einen A-Eintrag mit diesen Werten. Erstellen Sie keinen CNAME-Eintrag – Domains unter einer _Konto-IP_ verweisen direkt auf die Adresse.

   ![Werte des DNS-Eintrags](https://cdn.adtidy.org/content/kb/dns/enterprise/a_record_de.png)

4. Klicken Sie auf dem AdGuard-DNS-Bildschirm mit den Eintragswerten auf _Überprüfen_. Wenn der Datensatz noch nicht übertragen wurde oder auf einen anderen Speicherort verweist, schlägt die Überprüfung fehl. Überprüfen Sie den Eintrag und versuchen Sie es in ein paar Minuten erneut.

5. Laden Sie ein TLS-Zertifikat hoch. Für Domains unter einer _Konto-IP_ werden keine Zertifikate automatisch ausgestellt:

   - Für **DoT/DoQ** laden Sie ein Wildcard-Zertifikat (`*.partner.com`) hoch, genau wie bei einer normalen benutzerdefinierten Domain.
   - Für **DoH** laden Sie auch Ihr eigenes Zertifikat hoch. Dies weicht vom Standardablauf ab, bei dem AdGuard DNS einen solchen für Sie generieren kann.

   Solange Sie kein Zertifikat hinzufügen, wird für die Domain der Status „_Kein Zertifikat_“ angezeigt, und Ihre Kunden können keine Verbindung zu ihr herstellen.

   ![Hochladen eines Zertifikats](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_certificate_de.png)

:::note

Die Verlängerung steht auf Ihrer Seite. Sie erhalten eine E-Mail-Erinnerung, bevor das Zertifikat abläuft. In diesem Fall funktioniert Ihre Domain so lange nicht mehr, bis Sie ein neues Zertifikat hochladen.

:::

## Bestehende benutzerdefinierte Domains und die IP-Adresse des Kontos

Domains, die Sie vor dem Erhalt einer _Konto-IP_ hinzugefügt haben, werden nicht automatisch dorthin verschoben. Sie funktionieren weiterhin über ihren CNAME-Eintrag wie bisher.

Um eine Domain auf Ihre _Konto-IP_ zu übertragen, löschen Sie zunächst den zugehörigen CNAME-Eintrag bei Ihrem DNS-Anbieter – eine Domain kann nicht gleichzeitig einen CNAME- und einen A-Eintrag haben. Löschen Sie anschließend die Domain in AdGuard DNS und fügen Sie sie gemäß den oben beschriebenen Schritten erneut hinzu.

:::caution

Ihre Kunden können die Domain zwischen dem Zeitpunkt der Löschung und der Verifizierung der neuen Konfiguration nicht nutzen.

:::

## Einschränkungen

Eine _Konto-IP_ ändert die Adresse, zu der Ihre Domain aufgelöst wird. Einige Dinge deckt sie nicht ab:

- Die IP-Adresse des Kontos ist auf Netzwerkebene nicht vollständig White-Label. Eine WHOIS-, RDAP- oder ASN-Abfrage der IP-Adresse kann AdGuard weiterhin als Anbieter der zugrunde liegenden IP-Infrastruktur identifizieren.
- Reverse-DNS kann nicht angepasst werden, daher gibt eine PTR-Abfrage deine Domain nicht zurück.
- Die DNS-Servererkennung (DDR) ist auf einer _Account IP_ nicht verfügbar.
- Zertifikate mit der IP-Adresse im SAN-Feld werden nicht unterstützt, deine Kunden verbinden sich daher über den Domainnamen statt über die Adresse selbst.
- Die Verwendung eines eigenen IP-Bereichs (BYOIP) wird nicht unterstützt, da die Adresse von AdGuard zugewiesen wird.
- DNSCheck-Domains, mit denen die DNS-Verbindung eines Geräts überprüft wird, werden weiterhin über die Infrastruktur von AdGuard aufgelöst.
