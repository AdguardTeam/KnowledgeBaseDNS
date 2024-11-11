---
title: Erste Schritte
sidebar_position: 2
---

## Installation {#installation}

### Offizielle Veröffentlichungen

Laden Sie das Archiv mit der Binärdatei für Ihr Betriebssystem von der \[Seite der letzten stabilen Version]\[Veröffentlichungen] herunter. Die vollständige Liste der unterstützten Plattformen sowie Links zu Beta- und Edge-Versionen (instabilen Versionen) finden Sie auf \[unserer Plattformseite]\[Plattformen].

Um AdGuard Home als Dienst zu installieren, entpacken Sie das Archiv, geben Sie das Verzeichnis „AdGuardHome“ an und führen Sie es aus:

```sh
./AdGuardHome -s install
```

#### Hinweise

- Benutzer von **Fedora Linux** und dessen Derivaten: Installieren Sie AdGuard Home in das Verzeichnis „/usr/local/bin“. Andernfalls kann es zu Problemen mit SELinux und Berechtigungen kommen. Siehe \[Problem 765] und \[Problem 3281].

- Benutzer von **macOS 10.15 Catalina** und neuer sollten das Arbeitsverzeichnis von AdGuard Home in das Verzeichnis „/Applications“ (Programme) legen.

### Docker und Snap

Wir bieten auch ein [offizielles AdGuard Home Docker-Image][docker] und ein [offizielles Snap Store-Paket][snap] für erfahrene Benutzer.

### Sonstiges

Einige andere inoffizielle Optionen sind:

- [Home Assistant add-on][has] maintained by [@frenck](https://github.com/frenck).

- [OpenWrt LUCI app][luci] maintained by [@kongfl888](https://github.com/kongfl888).

- [Arch Linux][arch], [Arch Linux ARM][archarm] und andere Arch-basierte Betriebssysteme können über das [`adguardhome`-Paket][aghaur] im [AUR][aur] erstellt werden, das von [@graysky2](https://github.com/graysky2) gepflegt wird.

- Die [Cloudron-App][cloudron] wird von [@gramakri](https://github.com/gramakri) gepflegt.

[aghaur]: https://aur.archlinux.org/packages/adguardhome/
[arch]: https://www.archlinux.org/
[archarm]: https://archlinuxarm.org/
[aur]: https://wiki.archlinux.org/index.php/Arch_User_Repository
[cloudron]: https://git.cloudron.io/cloudron/adguard-home-app
[docker]: https://hub.docker.com/r/adguard/adguardhome
[has]: https://github.com/hassio-addons/addon-adguard-home
[issue 3281]: https://github.com/AdguardTeam/AdGuardHome/issues/3281
[issue 765]: https://github.com/AdguardTeam/AdGuardHome/issues/765#issuecomment-752262353
[luci]: https://github.com/kongfl888/luci-app-adguardhome
[platforms]: https://github.com/AdguardTeam/AdGuardHome/wiki/Platforms
[releases]: https://github.com/AdguardTeam/AdGuardHome/releases/latest
[snap]: https://snapcraft.io/adguard-home

## Erster Start {#first-time}

Überprüfen Sie zunächst Ihre Firewall-Einstellungen. Um AdGuard Home zu installieren und zu verwenden, müssen die folgenden Ports und Protokolle verfügbar sein:

- 3000/TCP für die Erstinstallation;
- 80/TCP für die Webschnittstelle;
- 53/UDP für den DNS-Server.

Möglicherweise müssen Sie zusätzliche Ports für andere Protokolle als reines DNS öffnen, z. B. für DNS-over-HTTPS.

DNS-Server binden sich an Port 53, wofür meistens Superuser-Rechte erforderlich sind [siehe unten] (#running-without-superuser). Daher müssen Sie es auf Unix-Systemen mit `sudo` oder `doas` im Terminal ausführen:

```sh
sudo ./AdGuardHome
```

Starten Sie unter Windows `cmd.exe` oder PowerShell mit Administratorrechten und führen Sie `AdGuardHome.exe` aus.

Wenn Sie AdGuard Home zum ersten Mal starten, beginnt es mit der Überwachung von `0.0.0.0:3000` und fordert Sie auf, es in Ihrem Browser zu öffnen:

```none
AdGuard Home ist unter den folgenden Adressen erhältlich:
unter http://127.0.0.1:3000
unter http://[::1]:3000
[…]
```

Dort werden Sie durch den Assistenten für die Erstkonfiguration geführt.

![Bildschirm zur Auswahl der Netzwerkschnittstelle von AdGuard Home](https://cdn.adtidy.org/content/kb/dns/adguard-home/install2.png)

![Bildschirm zum Anlegen eines AdGuard Home-Benutzers](https://cdn.adtidy.org/content/kb/dns/adguard-home/install3.png)

In [unserem Artikel zum sicheren Betrieb von AdGuard Home](running-securely.md) finden Sie eine Anleitung, wie Sie die für Sie am besten geeignete Ausgangskonfiguration auswählen.

## Als Dienst ausgeführt {#service}

Der nächste Schritt wäre die Registrierung von AdGuard Home als Systemdienst (auch Daemon genannt). Um AdGuard Home als Dienst zu installieren, führen Sie Folgendes aus:

```sh
sudo ./AdGuardHome -s install
```

Starten Sie unter Windows `cmd.exe` mit Administratorrechten und führen Sie `AdGuardHome.exe -s install` aus, um einen Windows-Dienst zu registrieren.

Hier sind die anderen Befehle, die Sie zum Steuern des Dienstes benötigen:

- `AdGuardHome -s uninstall`: Deinstalliert den Dienst AdGuard Home.
- `AdGuardHome -s start`: Startet den Dienst.
- `AdGuardHome -s stop`: Stoppt den Dienst.
- `AdGuardHome -s start`: Startet den Dienst neu.
- `AdGuardHome -s status`: Zeigt den aktuellen Dienststatus an.

### Protokolle

Standardmäßig werden die Protokolle nach `stderr` geschrieben, wenn Sie AdGuard Home in einem Terminal ausführen. Wenn Sie es als Dienst ausführen, hängt die Protokollausgabe von der Plattform ab:

- Unter macOS wird das Protokoll in die Dateien `/var/log/AdGuardHome.*.log` geschrieben.

- Auf anderen Unixen wird das Protokoll in `syslog` oder `journald` geschrieben.

- Unter Windows wird das Protokoll in das Windows-Ereignisprotokoll geschrieben.

Sie können dieses Verhalten in der AdGuard Home [Konfigurationsdatei][conf] ändern.

[conf]: https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration

## Aktualisieren {#update}

![Ein Beispiel für eine Aktualisierungsmeldung](https://cdn.adtidy.org/content/kb/dns/adguard-home/updatenotification.png)

Wenn eine neue Version veröffentlicht wird, zeigt die Benutzeroberfläche von AdGuard Home eine Benachrichtigung und die Schaltfläche _Jetzt aktualisieren_ an. Klicken Sie auf diese Schaltfläche, und AdGuard Home wird automatisch auf die neueste Version aktualisiert. Ihre aktuelle ausführbare Datei von AdGuard Home wird zusammen mit der aktuellen Konfigurationsdatei im Verzeichnis `Backup` gespeichert, so dass Sie die Änderungen bei Bedarf widerrufen können.

### Manuelles Aktualisieren {#manual-update}

Falls die Schaltfläche nicht angezeigt wird oder eine automatische Aktualisierung fehlgeschlagen ist, können Sie die Aktualisierung manuell vornehmen. Wir haben einen [ausführlichen Leitfaden für die manuelle Aktualisierung][mupd], aber kurz gefasst:

1. Laden Sie das neue AdGuard Home-Paket herunter.

2. Entpacken Sie sie in einen temporären Ordner.

3. Ersetzen Sie die alte ausführbare Datei von AdGuard Home durch die neue.

4. Starten Sie AdGuard Home neu.

[mupd]: https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#manual-update

### Aktualisierungen für Docker, Home Assistant und Snapcraft

Automatische Aktualisierungen für Docker, Hass.io/Home Assistant und Snapcraft-Installationen sind deaktiviert. Aktualisieren Sie stattdessen das Image.

### Aktualisierung über die Befehlszeile

Um das AdGuard Home-Paket zu aktualisieren, ohne die Web-API verwenden zu müssen, führen Sie folgenden Befehl aus:

```sh
./AdGuardHome --update
```

## Geräte konfigurieren {#configure-devices}

### Router

Diese Einrichtung deckt automatisch alle Geräte ab, die mit Ihrem Heimrouter verbunden sind, und Sie müssen nicht jedes einzelne Gerät manuell konfigurieren.

1. Öffnen Sie die Einstellungen für Ihren Router. Normalerweise können Sie von Ihrem Browser aus über eine URL wie <http://192.168.0.1/> oder <http://192.168.1.1/> darauf zugreifen. Möglicherweise werden Sie aufgefordert, ein Passwort einzugeben. Wenn Sie sich nicht mehr daran erinnern, können Sie das Kennwort oft durch Drücken einer Taste am Router selbst zurücksetzen. Beachten Sie jedoch, dass Sie bei dieser Vorgehensweise wahrscheinlich die gesamte Routerkonfiguration verlieren. Wenn für die Einrichtung Ihres Routers eine App erforderlich ist, installieren Sie diese bitte auf Ihrem Telefon oder PC und verwenden Sie sie für den Zugriff auf die Einstellungen des Routers.

2. Suchen Sie die DHCP/DNS-Einstellungen. Achten Sie auf die DNS-Buchstaben neben einem Feld, das zwei oder drei Zahlengruppen zulässt, die jeweils in vier Gruppen von ein bis drei Ziffern unterteilt sind.

3. Tragen Sie dort Ihre AdGuard Home Server-Adressen ein.

4. Bei einigen Routertypen kann kein benutzerdefinierter DNS-Server eingerichtet werden. In diesem Fall kann es hilfreich sein, AdGuard Home als DHCP-Server einzurichten. Andernfalls sollten Sie im Handbuch Ihres Routers nachlesen, wie Sie die DNS-Server für Ihr spezielles Routermodell anpassen können.

### Windows

1. Open _Control Panel_ from the Start menu or Windows search.

2. Öffnen Sie _Netzwerk und Internet_ und dann _Netzwerk- und Freigabecenter_.

3. On the left side of the screen, find the _Change adapter settings_ button and click it.

4. Select your active connection, right-click it and choose _Properties_.

5. Find _Internet Protocol Version 4 (TCP/IPv4)_ (or, for IPv6, _Internet Protocol Version 6 (TCP/IPv6)_) in the list, select it, and then click _Properties_ again.

6. Choose _Use the following DNS server addresses_ and enter your AdGuard Home server addresses.

### macOS

1. Click the Apple icon and go to _System Preferences_.

2. Klicken Sie auf _Netzwerk_.

3. Select the first connection in your list and click _Advanced_.

4. Select the DNS tab and enter your AdGuard Home server addresses.

### Android

:::note

Instructions for Android devices may differ depending on the OS version and the manufacturer.

:::

1. From the Android menu home screen, tap _Settings_.

2. Tippen Sie im Menü auf _Wi-Fi_. The screen with all of the available networks will be displayed (it is impossible to set custom DNS for mobile connection).

3. Long press the network you’re connected to and tap _Modify Network_.

4. On some devices, you may need to check the box for _Advanced_ to see more settings. To adjust your Android DNS settings, you will need to change the IP settings from _DHCP_ to _Static_.

5. Change set DNS 1 and DNS 2 values to your AdGuard Home server addresses.

### iOS

1. From the home screen, tap _Settings_.

2. Select _Wi-Fi_ from the left menu (it is impossible to configure DNS for mobile networks).

3. Tap the name of the currently active network.

4. In the _DNS_ field, enter your AdGuard Home server addresses.

## Running without superuser {#running-without-superuser}

You can run AdGuard Home without superuser privileges, but you must either grant the binary a capability (on Linux) or instruct it to use a different port (all platforms).

### Granting the necessary capabilities (Linux only)

Using this method requires the `setcap` utility. You may need to install it using your Linux distribution’s package manager.

To allow AdGuard Home running on Linux to listen on port 53 without superuser privileges and bind its DNS servers to a particular interface, run:

```sh
sudo setcap 'CAP_NET_BIND_SERVICE=+eip CAP_NET_RAW=+eip' ./AdGuardHome
```

Then run `./AdGuardHome` as an unprivileged user.

### Changing the DNS listen port

To configure AdGuard Home to listen on a port that does not require superuser privileges, stop AdGuard Home, open `AdGuardHome.yaml` in your editor, and find these lines:

```yaml
dns:
    # …
    port: 53
```

You can change the port to anything above 1024 to avoid requiring superuser privileges.

## Limitations {#limitations}

Some file systems don’t support the `mmap(2)` system call required by the statistics system. See also [issue 1188].

You can resolve this issue:

- either by supplying the `--work-dir DIRECTORY` arguments to the `AdGuardHome` binary. This option will tell AGH to use another directory for all its files instead of the default `./data` directory.

- or by creating symbolic links pointing to another file system that supports `mmap(2)` (e.g. tmpfs):

  ```sh
  ln -s ${YOUR_AGH_PATH}/data/stats.db /tmp/stats.db
  ln -s ${YOUR_AGH_PATH}/data/sessions.db /tmp/sessions.db
  ```

[issue 1188]: https://github.com/AdguardTeam/AdGuardHome/issues/1188
