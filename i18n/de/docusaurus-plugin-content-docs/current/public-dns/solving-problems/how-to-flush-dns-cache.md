---
title: So leeren Sie den DNS-Cache
sidebar_position: 1
---

:::info

Hier erklären wir, wie Sie den DNS-Cache leeren können, um Probleme mit dem öffentlichen DNS zu beheben. Sie können AdGuard Werbeblocker verwenden, um DNS-Server (auch verschlüsselte) einzurichten

Schnellzugriff: [AdGuard Werbeblocker herunterladen](https://agrd.io/download-kb-adblock)

:::

## Was ist der DNS-Cache?

Der DNS-Cache speichert die IP-Adressen von besuchten Websites auf Ihrem lokalen Computer, damit sie beim nächsten Mal schneller geladen werden. Anstatt eine lange dauernde DNS-Suche durchzuführen, beantwortet das System die Abfragen mit DNS-Einträgen aus diesem temporären DNS-Cache.

Der DNS-Cache enthält sogenannte [Resource Records (RRs)](https://de.wikipedia.org/wiki/Resource_Record), das sind:

- **Resource data (oder rdata)**-Daten, welche den Resource Record näher beschreiben (zum Beispiel eine IP-Adresse);
- **Record type** - beschreibt den Typ des Resource Records;
- **Record name** - der Domainname des Objekts, zu dem der Resource Record gehört;
- **TTL (time to live)** - Gültigkeit des Resource Records in Sekunden;
- **Class**;
- **Resource data length** - Länge der Daten, welche den Resource Record näher beschreiben.

## Wann Sie den Cache leeren sollten

**You’ve changed your DNS provider to AdGuard DNS.** If the user has changed their DNS, it may take some time to see the result because of the cache.

**Sie erhalten regelmäßig eine 404-Fehlermeldung.** Zum Beispiel wurde die Website auf einen anderen Server übertragen und die IP-Adresse hat sich geändert. Damit der Browser die Website von der neuen IP-Adresse laden kann, müssen Sie die alte zwischengespeicherte IP-Adresse aus dem DNS-Cache entfernen.

**Sie möchten Ihre Privatsphäre verbessern.**

## So leeren Sie den DNS-Cache auf verschiedenen Betriebssystemen

### iOS

Es gibt verschiedene Möglichkeiten, den DNS-Cache auf Ihrem iPad oder iPhone zu leeren.

Am einfachsten ist es, den Flugmodus zu aktivieren (zum Beispiel im Kontrollzentrum oder in der Einstellungs-App) und wieder zu deaktivieren. Der DNS-Cache wird hierbei geleert.

Eine weitere Möglichkeit besteht darin, die Netzwerkeinstellungen Ihres Geräts in der App „Einstellungen“ zurückzusetzen. Öffnen Sie *„Allgemein”*, blättern Sie nach unten, suchen Sie „*iPhone/iPad übertragen/zurücksetzen*” ➜ „*Zurücksetzen*” und tippen Sie auf „*Netzwerkeinstellungen*”.

:::note

Dadurch verlieren Sie die Verbindungen zu WLAN-Routern und andere spezifische Netzwerkeinstellungen, einschließlich der Anpassung von DNS-Servern. Sie müssen diese manuell erneut eintragen.

:::

### Android

Es gibt verschiedene Möglichkeiten, den DNS-Cache auf Ihrem Android-Gerät zu leeren. The exact steps may vary depending on the version of Android you’re using and the device manufacturer.

#### DNS-Cache über Chrome leeren

Google Chrome, oft der Standardbrowser auf Android, verwendet einen eigenen DNS-Cache. Um diesen Cache im Chrome-Browser zu leeren, folgen Sie den nachstehenden Anweisungen:

1. Starten Sie Chrome auf Ihrem Android-Gerät
1. Geben Sie `chrome://net-internals/#DNS` in die Adressleiste ein
1. Wählen Sie auf der Seite für die DNS-Suche „DNS“ aus dem Menü auf der linken Seite
1. Tippen Sie im Feld rechts auf die Schaltfläche *Host-Cache leeren*, um den DNS-Cache auf Ihrem Gerät zu leeren

#### Ändern Sie das WLAN-Netzwerk auf „Statisch“

To clear your Android device’s DNS cache by changing Wi-Fi network settings to Static, follow these steps:

1. Go to *Settings → Wi-Fi* and choose the network you’re connected to
1. Suchen Sie nach IP-Einstellungen und wählen Sie *Statisch*
1. Füllen Sie die erforderlichen Felder aus. You can get the necessary information from your network administrator or from your router’s configuration page
1. Nachdem Sie die erforderlichen Informationen eingegeben haben, verbinden Sie sich erneut mit Ihrem WLAN-Netzwerk. Durch diese Aktion wird Ihr Gerät gezwungen, seine IP- und DNS-Einstellungen zu aktualisieren und den DNS-Cache zu leeren

#### Netzwerkeinstellungen zurücksetzen

Eine weitere Möglichkeit besteht darin, die Netzwerkeinstellungen Ihres Geräts in der App „Einstellungen“ zurückzusetzen. Öffnen Sie *„Einstellungen” ➜ „System” ➜ „Erweitert” ➜ „Optionen zurücksetzen” ➜ „Netzwerkeinstellungen zurücksetzen”* und tippen Sie zur Bestätigung auf *„Einstellungen zurücksetzen”*.

:::note

Dadurch verlieren Sie die Verbindungen zu WLAN-Routern und andere spezifische Netzwerkeinstellungen, einschließlich der Anpassung von DNS-Servern. Sie müssen diese manuell erneut eintragen.

:::

### macOS

Um den DNS-Cache unter macOS zu leeren, öffnen Sie das Terminal (Sie können es über die Spotlight-Suche finden. Drücken Sie dazu „Befehl“ ⌘ + „Leertaste“ und geben Sie *Terminal* ein) und geben Sie den folgenden Befehl ein:

`sudo killall -HUP mDNSResponder`

Unter macOS Big Sur 11.2.0 und macOS Monterey 12.0.0 können Sie diesen Befehl auch verwenden:

`sudo dscacheutil -flushcache`

Geben Sie anschließend Ihr Administratorkennwort ein, um den Vorgang abzuschließen.

### Windows

Um den DNS-Cache auf Ihrem Windows-Gerät zu leeren, gehen Sie wie folgt vor:

Öffnen Sie die Eingabeaufforderung als Administrator. Sie finden es im Startmenü, indem Sie *Eingabeaufforderung* oder *cmd* eingeben. Geben Sie dann `ipconfig /flushdns` ein und drücken Sie die Eingabetaste.

Als Ergebnis sehen Sie die Textzeile *Der DNS-Auflösungscache wurde geleert*. Fertig!

### Linux

Linux verfügt über kein DNS-Caching auf Betriebssystemebene, es sei denn, ein Caching-Dienst wie systemd-resolved, DNSMasq, BIND oder nscd ist installiert und wird ausgeführt. Wie der DNS-Cache geleert wird, hängt von der Linux-Distribution und dem verwendeten Caching-Dienst ab.

Für jede Distribution müssen Sie zunächst ein Terminalfenster öffnen. Drücken Sie das Tastaturkürzel Strg+Alt+T und verwenden Sie den zu dem auf Ihrem Linux-System ausgeführten Dienst passenden Befehl, um den DNS-Cache zu leeren.

To find out which DNS resolver you’re using, command `sudo lsof -i :53 -S`.

#### systemd-resolved

Um den **systemd-resolved** DNS-Cache zu leeren, geben Sie ein:

`sudo systemd-resolve --flush-caches`

Wenn der Befehl erfolgreich ausgeführt wurde, wird keine Meldung zurückgegeben.

#### DNSMasq

Um den Cache von **DNSMasq** zu leeren, müssen Sie ihn neu starten:

`sudo service dnsmasq restart`

#### NSCD

Um den Cache von **Nscd** zu leeren, müssen Sie ebenfalls den Dienst neu starten:

`sudo service nscd restart`

#### BIND

Um den **BIND** DNS-Cache zu leeren, führen Sie den Befehl aus:

`rndc flush`

Anschließend muss BIND neu geladen werden:

`rndc reload`

Sie erhalten daraufhin die Meldung, dass der Server erfolgreich neu geladen wurde.

## So leeren Sie den DNS-Cache in Chrome

Dies kann nützlich sein, wenn Sie bei der Arbeit mit dem privaten AdGuard DNS oder AdGuard Home nicht jedes Mal den Browser neu starten möchten. Die Einstellungen 1 und 2 müssen nur einmalig geändert werden.

1. Deaktivieren Sie **Sicheres DNS verwenden** in den Chrome-Einstellungen

    ```bash
    chrome://settings/security
    ```

1. Deaktivieren Sie den **Async DNS resolver**

    ```bash
    chrome://flags/#enable-async-dns
    ```

1. Drücken Sie hier beide Tasten („Close idle sockets“ und „Flush socket pools“)

    ```bash
    chrome://net-internals/#sockets
    ```

1. Drücken Sie **Clear host cache** (Host-Cache leeren)

    ```bash
    chrome://net-internals/#dns
    ```
