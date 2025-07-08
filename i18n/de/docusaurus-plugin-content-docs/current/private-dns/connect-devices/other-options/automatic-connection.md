---
title: Automatische Geräteverbindung
sidebar_position: 5
---

## Warum sie nützlich ist

Nicht alle sind mit dem Hinzufügen von Geräten über die Übersicht vertraut. Wenn Sie beispielsweise als Systemadministrator mehrere Unternehmensgeräte gleichzeitig einrichten, möchten Sie manuelle Aufgaben so weit wie möglich minimieren.

Sie können einen Verbindungslink erstellen und ihn in den Geräteeinstellungen verwenden. Ihr Gerät wird erkannt und automatisch mit dem Server verbunden.

## So richten Sie die automatische Verbindung ein

1. Öffnen Sie die _Übersicht_ und wählen Sie den erforderlichen Server aus.
2. Go to _Advanced_.
3. Aktivieren Sie die Option, um Geräte automatisch zu verbinden.
    ![Connect devices automatically \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically.png)

Nun können Sie Ihr Gerät automatisch mit dem Server verbinden, indem Sie eine spezielle Adresse erstellen, die den Gerätenamen, den Gerätetyp und die aktuelle Server-ID enthält. Lassen Sie uns untersuchen, wie diese Adressen aussehen und welche Regeln für ihre Erstellung gelten.

### Beispiele für automatische Verbindungsadressen

- `tls://adr-{Your_Server_ID}-AdGuard-Test-Device.d.adguard-dns.com` — dies erstellt automatisch ein `Android`-Gerät mit dem `DNS-over-TLS` Protokoll namens `AdGuard Test Device`

- `https://d.adguard-dns.com/dns-query/win-{Your_Server_ID}-John-Doe` — dies erstellt automatisch ein `Windows`-Gerät mit dem `DNS-over-HTTPS` Protokoll namens `John Doe`

- `quic://ios-73f78a1d-Mary-Sue.d.adguard-dns.com` — dies wird automatisch ein `iOS`-Gerät mit dem `DNS-over-QUIC` Protokoll namens `Mary Sue` erstellen

### Konventionen zur Namensgebung

Beim manuellen Erstellen von Geräten gibt es Einschränkungen in Bezug auf die Namenslänge, Zeichen, Leerzeichen und Bindestriche.

**Namenslänge**: maximal 50 Zeichen. Zeichen über dieser Begrenzung werden ignoriert.

**Erlaubte Zeichen**: Englische Buchstaben, Zahlen und Bindestriche `-`. Andere Zeichen werden ignoriert.

**Leerzeichen und Bindestriche**: Verwenden Sie einen Bindestrich für ein Leerzeichen und ein doppelte Bindestriche (`--`) für ein Bindestrich.

**Gerätetyp**: Verwenden Sie die folgenden Abkürzungen:

- Windows — `win`
- macOS — `mac`
- Android — `adr`
- iOS — `ios`
- Linux — `lnx`
- Router — `rtr`
- Smart TV — `stv`
- Spielkonsole — `gam`
- Sonstiges — `otr`

## Link-Generator

Wir haben eine Vorlage hinzugefügt, die einen Link für den spezifischen Gerätetyp und das Protokoll generiert.

1. Wechseln Sie zu _Server_ → _Server-Einstellungen_ → _Geräte_ → _Geräte automatisch verbinden_ und klicken Sie auf _Link-Generator und Anleitung_.
2. Wählen Sie das Protokoll aus, das Sie verwenden möchten, sowie den Gerätenamen und den Gerätetyp.
3. Klicken Sie auf _Link generieren_.
    ![Link generieren \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step7.png)
4. Sie haben den Link erfolgreich generiert. Kopieren Sie jetzt die Serveradresse und verwenden Sie sie in einer der [AdGuard-Apps](https://adguard.com/welcome.html)
