---
title: AdGuard Home sicher einrichten
sidebar_position: 4
---

Auf dieser Seite finden Sie eine Liste mit zusätzlichen Empfehlungen, die Ihnen helfen, die Sicherheit Ihres AdGuard Home zu gewährleisten.

## Auswahl von Serveradressen

Wenn Sie AdGuard Home zum ersten Mal starten, werden Sie gefragt, welche Schnittstelle er für den reinen DNS-Dienst verwenden soll. Welche Option am sichersten und bequemsten ist, hängt davon ab, wie Sie AdGuard Home einsetzen möchten. Sie können die Adresse(n) später ändern, indem Sie AdGuard Home stoppen, das Feld `dns.bind_hosts` in der Konfigurationsdatei bearbeiten und AdGuard Home neu starten.

:::note

Über die Benutzeroberfläche können Sie derzeit nur eine Schnittstelle auswählen, aber Sie können über die Konfigurationsdatei mehrere Adressen auswählen. Wir werden die Benutzeroberfläche in zukünftigen Versionen verbessern.

:::

Wenn Sie AdGuard Home nur auf **Ihrem Computer** ausführen möchten, wählen Sie das Loopback-Gerät (auch bekannt als "localhost"). Er heißt normalerweise `localhost`, `lo` oder ähnlich und hat die Adresse `127.0.0.1`.

Wenn Sie AdGuard Home auf einem **Router innerhalb eines kleinen isolierten Netzwerks** betreiben wollen, wählen Sie die lokal genutzte Schnittstelle. Die Namen können variieren, aber sie enthalten in der Regel die Worte `wlan` oder `wlp` und haben eine Adresse, die mit `192.168.` beginnt. Sie sollten vielleicht auch die Loopback-Adresse hinzufügen, wenn Sie möchten, dass die Software auf dem Router selbst auch AdGuard Home verwendet.

Wenn Sie AdGuard Home auf einem **öffentlich zugänglichen Server** betreiben wollen, sollten Sie die Option _Alle Schnittstellen_ wählen. Beachten Sie, dass Ihr Server dadurch DDoS-Angriffen ausgesetzt sein kann. Lesen Sie daher bitte die Abschnitte über die Zugriffseinstellungen und die Ratenbegrenzung weiter unten.

## Zugriffsrechte

:::note

Wenn Ihr AdGuard Home nicht von außerhalb zugänglich ist, können Sie diesen Abschnitt überspringen.

:::

Am Ende der Seite _Einstellungen_ ➜ _DNS-Einstellungen_ finden Sie den Abschnitt _Zugangseinstellungen_. Mit diesen Einstellungen können Sie Clients, die bekanntermaßen Ihre AdGuard Home Instanz missbrauchen, entweder verbieten oder den Zulassen-Modus aktivieren. Der Modus „Zulassen“ wird für öffentliche Instanzen empfohlen, bei denen die Anzahl der Clients bekannt ist und alle Clients in der Lage sind, sicheres DNS zu verwenden.

Um den Modus „Zulassen“ zu aktivieren, geben Sie [ClientIDs][cid] (empfohlen) oder IP-Adressen für erlaubte Clients in das Feld _Zugelassene Clients_ ein.

[cid]: https://github.com/AdguardTeam/AdGuardHome/wiki/Clients#clientid

## Einfaches DNS deaktivieren

:::note

Wenn Ihr AdGuard Home nicht von außerhalb zugänglich ist, können Sie diesen Abschnitt überspringen.

:::

Wenn alle Clients, die Ihren AdGuard Home nutzen, verschlüsselte Protokolle verwenden können, ist es eine gute Wahl, den einfachen DNS zu deaktivieren oder ihn von außerhalb unzugänglich zu machen.

Wenn Sie das reine DNS-Serving vollständig deaktivieren möchten, können Sie dies auf der Seite _Einstellungen_ ➜ _Verschlüsselungseinstellungen_ tun.

Wenn Sie den reinen DNS auf die interne Nutzung beschränken wollen, stoppen Sie AdGuard Home, ändern Sie das Feld `dns.bind_hosts` in der Konfigurationsdatei so, dass es nur die Loopback-Adresse(n) enthält, und starten Sie AdGuard Home neu.

## Einfaches DNS - Ratenbegrenzung

:::note

Wenn Ihr AdGuard Home nicht von außerhalb zugänglich ist, können Sie diesen Abschnitt überspringen.

:::

Die standardmäßige Plain-DNS-Ratelimitierung von 20 sollte im Allgemeinen ausreichen, aber wenn Sie eine Liste bekannter Clients haben, können Sie diese in die Zulassen-Liste aufnehmen und eine strengere Ratelimitierung für andere Clients festlegen.

## Bedenken hinsichtlich der OS-Dienste

Um eine Privilegienerweiterung durch das Einschleusen von Binärdateien zu verhindern, ist es wichtig, dass der Ordner, in dem AdGuard Home installiert wird, die korrekten Eigentums- und Zugriffsrechte hat.

Wir danken Go Compile für die Unterstützung bei der Erstellung dieses Abschnitts.

### Unix (FreeBSD, Linux, macOS, OpenBSD)

Das Arbeitsverzeichnis von AdGuard Home, das standardmäßig `/Applications/AdGuardHome` auf macOS und `/opt/AdGuardHome` auf anderen Unix-Systemen ist, sowie das Binärprogramm selbst sollten im Allgemeinen den Besitz von `root:root` haben und von niemandem außer `root` geschrieben werden können. Sie können dies mit dem folgenden Befehl überprüfen, indem Sie `/opt/AdGuardHome` durch Ihr Verzeichnis und `/opt/AdGuardHome/AdGuardHome` durch Ihr Binärprogramm ersetzen:

```sh
ls -d -l /opt/AdGuardHome
ls -l /opt/AdGuardHome/AdGuardHome
```

Eine einigermaßen sichere Ausgabe sollte in etwa so aussehen:

```none
drwxr-xr-x 4 root root 4096 Jan 1 12:00 /opt/AdGuardHome/
-rwxr-xr-x 1 root root 29409280 Jan 1 12:00 /opt/AdGuardHome/AdGuardHome
```

Beachten Sie die fehlende Schreibberechtigung für alle außer `root` sowie das `root`-Eigentum. Wenn die Berechtigungen und/oder Besitzverhältnisse nicht korrekt sind, führen Sie die folgenden Befehle unter `root` aus:

```sh
chmod 755 /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
chown root:root /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
```

### Windows

Das Prinzip ist unter Windows dasselbe: Stellen Sie sicher, dass das AdGuard Home Verzeichnis, typischerweise `C:\Programme\AdGuardHome`, und die Binärdatei `AdGuardHome.exe` die Berechtigungen haben, die es nur normalen Benutzern erlauben, sie zu lesen und auszuführen/aufzulisten.

In Zukunft planen wir, Windows-Builds als MSI-Installationsdateien zu veröffentlichen, die sicherstellen, dass dies automatisch geschieht.
