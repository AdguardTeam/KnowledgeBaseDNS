---
title: FAQ
sidebar_position: 3
---

## Warum sperrt AdGuard Home keine Werbung oder Bedrohungen? {#doesntblock}

Angenommen, Sie möchten, dass AdGuard Home `eineschlechteseite.de` sperrt, aber aus irgendeinem Grund tut es das nicht. Lassen Sie uns versuchen, dieses Problem zu lösen.

Möglicherweise haben Sie Ihr Gerät nicht so konfiguriert, dass AdGuard Home als Standard-DNS-Server verwendet wird. So können Sie überprüfen, ob Sie AdGuard Home als Ihren Standard-DNS-Server verwenden:

1. Unter Windows öffnen Sie die Eingabeaufforderung (_Start_ ➜ _Ausführen_ ➜ `cmd.exe`). Auf anderen Systemen öffnen Sie Ihre Terminal-Anwendung.

2. Führen Sie `nslookup example.org` aus. Es wird in etwa so ausgegeben:

   ```none
   Server: 192.168.0.1
   Adresse: 192.168.0.1#53

   Nicht-autoritative Antwort:
   Name: example.org
   Adresse: <IPv4>
   Name: example.org
   Adresse: <IPv6>
   ```

3. Überprüfen Sie, ob die IP-Adresse des `Servers` diejenige ist, auf der AdGuard Home läuft. Falls nicht, müssen Sie Ihr Gerät entsprechend konfigurieren. Siehe [unten](#defaultdns), wie Sie dies tun können.

4. Stellen Sie sicher, dass Ihre Anfrage an `example.org` in der AdGuard Home UI auf der Seite _Abfrageprotokoll/Query Log_ angezeigt wird. Falls nicht, müssen Sie AdGuard Home so konfigurieren, dass er die angegebene Netzwerkschnittstelle belauscht. Am einfachsten ist es, wenn Sie AdGuard Home mit den Standardeinstellungen neu installieren.

Wenn Sie sicher sind, dass Ihr Gerät AdGuard Home als Standard-DNS-Server verwendet, das Problem aber weiterhin besteht, kann dies an einer Fehlkonfiguration von AdGuard Home liegen. Bitte überprüfen Sie dies und stellen Sie sicher, dass:

1. Sie haben die Einstellung _Domains mit Filtern und Hosts-Dateien sperren_ auf der Seite _Einstellungen_ ➜ _Allgemeine Einstellungen_ aktiviert.

2. Sie haben auf der gleichen Seite die entsprechenden Sicherheitsmechanismen, wie z. B. die Kindersicherung, aktiviert.

3. Sie haben die entsprechenden Filter auf der Seite _Filters_ ➜ _DNS-Sperrlisten_ aktiviert.

4. Sie haben auf der Seite _Filter_ ➜ _DNS-Zulassungslisten_ keine Ausnahmeregellisten aktiviert, die die Anfragen zulassen könnten.

5. Sie haben keine DNS-Rewrites, die auf der Seite _Filters_ ➜ _DNS-Rewrites_ stören könnten.

6. Sie haben keine benutzerdefinierten Filterregeln, die auf der Seite _Filter_ ➜ _Benutzerdefinierte Filterregeln_ stören könnten.

## Was bedeutet „Gesperrt durch CNAME oder IP“ im Abfrageprotokoll? {#logs}

AdGuard Home überprüft sowohl DNS-Anfragen als auch DNS-Antworten, um eine Technik zur Umgehung von Adblock zu verhindern, die als [CNAME-Cloaking][cname-cloak] bekannt ist. Das heißt, wenn Ihre Filterregeln eine Domäne, z. B. „tracker.example“, enthalten und eine DNS-Antwort für einen anderen Domain-Namen, z. B. „blogs.example“, diesen Domain-Namen in ihren CNAME-Einträgen enthält, wird diese Antwort gesperrt, da sie tatsächlich zu dem gesperrten Tracking-Dienst führt.

[cname-cloak]: https://blog.apnic.net/2020/08/04/characterizing-cname-cloaking-based-tracking/

## Wo können die Protokolle eingesehen werden? {#logs}

Der Standardspeicherort der Klartextprotokolle (nicht zu verwechseln mit den Abfrageprotokollen) hängt vom Betriebssystem und dem Installationsmodus ab:

<!-- TODO(a.garipov): Add more info about Docker; add links to tools. -->

- **OpenWrt Linux:** verwenden Sie den Befehl `logread -e AdGuardHome`.

- **Linux**-Systeme mit **systemd** und andere **Unix**-Systeme mit **SysV-style init:** `/var/log/AdGuardHome.err`.

- **macOS:** `/var/log/AdGuardHome.stderr.log`.

- **Linux**-Systeme mit **Snapcraft** verwenden den Befehl `snap logs adguard-home`.

- **FreeBSD:** `/var/log/daemon.log`.

- **OpenBSD:** `/var/log/daemon`.

- **Windows:** Das [Windows-Ereignisprotokoll][wlog] wird verwendet.

[wlog]: https://docs.microsoft.com/en-us/windows/win32/wes/windows-event-log

## Wie kann AdGuard Home so konfiguriert werden, dass ausführliche Protokolle geschrieben werden? {#verboselog}

Für die Fehlersuche bei einem komplizierten Problem ist manchmal die ausführliche Protokollierung erforderlich. Hier erfahren Sie, wie Sie es aktivieren können:

1. Beenden Sie AdGuard Home:

   ```sh
   ./AdGuardHome -s stop
   ```

2. Konfigurieren Sie AdGuard Home so, dass ausführliche Protokolle geschrieben werden:

   1. Öffnen Sie `AdGuardHome.yaml` in Ihrem Editor.

   2. Legen Sie `log.file` auf den gewünschten Pfad der Protokolldatei fest, zum Beispiel `/tmp/aghlog.txt`. Beachten Sie, dass das Verzeichnis existieren muss.

   3. Setzen Sie `log.verbose` auf `true`.

3. Starten Sie AdGuard Home neu und reproduzieren Sie das Problem:

   ```sh
   ./AdGuardHome -s start
   ```

4. Wenn Sie mit der Fehlersuche fertig sind, setzen Sie `log.verbose` wieder auf `false`.

## Wie kann eine benutzerdefinierte Sperrseite angezeigt werden? {#customblock}

:::note

Bevor Sie dies tun, beachten Sie bitte, dass moderne Browser so eingestellt sind, dass sie HTTPS verwenden und daher die Echtheit des Webserver-Zertifikats überprüfen. Das bedeutet, dass die Verwendung eines dieser Programme zu Warnmeldungen führt.

Es gibt eine Reihe von vorgeschlagenen Erweiterungen, die, wenn sie von den Clients einigermaßen gut unterstützt werden, eine bessere Benutzererfahrung bieten würden, darunter die [RFC 8914 Erweiterte DNS-Fehlercodes][rfc8914] und der [DNS Access Denied Error Page RFC draft][rfcaccess]. Wir werden sie implementieren, wenn die Browser sie tatsächlich unterstützen.

[rfc8914]: https://datatracker.ietf.org/doc/html/rfc8914
[rfcaccess]: https://datatracker.ietf.org/doc/html/draft-reddy-dnsop-error-page-08

:::

### Voraussetzungen

Um eine dieser Methoden zur Anzeige einer benutzerdefinierten Sperrseite zu verwenden, benötigen Sie einen HTTP-Server, der unter einer IP-Adresse läuft und die betreffende Seite auf allen Routen bereitstellt. Etwas wie [`pixelserv-tls`][pxsrv].

[pxsrv]: https://github.com/kvic-z/pixelserv-tls

### Benutzerdefinierte Sperrseite für Jugendschutz- und Safe-Browsing-Filter

Es gibt derzeit keine Möglichkeit, diese Parameter über die Benutzeroberfläche einzustellen, so dass Sie die Konfigurationsdatei manuell bearbeiten müssen:

1. Beenden Sie AdGuard Home:

   ```sh
   ./AdGuardHome -s stop
   ```

2. Öffnen Sie `AdGuardHome.yaml` in Ihrem Editor.

3. Setzen Sie die Einstellungen `dns.parental_block_host` oder `dns.safebrowsing_block_host` auf die IP-Adresse des Servers (in diesem Beispiel `192.168.123.45`):

   ```yaml
   # …
   dns:
     # …

     # HINWEIS: Wechseln Sie zur tatsächlichen IP-Adresse Ihres Servers.
     parental_block_host: 192.168.123.45
     safebrowsing_block_host: 192.168.123.45
   ```

4. Starten Sie AdGuard Home neu:

   ```sh
   ./AdGuardHome -s start
   ```

### Benutzerdefinierte Sperrseite für andere Filter

1. Öffnen Sie die Web-Benutzeroberfläche.

2. Navigieren Sie zu _Einstellungen_ ➜ _DNS-Einstellungen_.

3. Wählen Sie im Abschnitt _DNS-Server-Konfiguration_ das Optionsfeld _Benutzerdefinierte IP_ im Auswahlfeld _Sperrmodus_ und geben Sie die IPv4- und IPv6-Adresse des Servers ein.

4. Klicken Sie auf _Speichern_.

## Wie kann die Adresse der Übersichts-Schnittstelle geändert werden? {#webaddr}

1. Beenden Sie AdGuard Home:

   ```sh
   ./AdGuardHome -s stop
   ```

2. Öffnen Sie `AdGuardHome.yaml` in Ihrem Editor.

3. Legen Sie die Einstellung `http.address` auf eine neue Netzwerkschnittstelle fest. Zum Beispiel:

   - `0.0.0.0:0`, um auf allen Netzwerkschnittstellen zu lauschen;
   - `0.0.0.0:8080`, um alle Netzwerkschnittstellen mit dem Port `8080` zu belauschen;
   - `127.0.0.1:0`, um nur auf der lokalen Loopback-Schnittstelle zu lauschen.

4. Starten Sie AdGuard Home neu:

   ```sh
   ./AdGuardHome -s start
   ```

## Wie kann AdGuard Home als Standard-DNS-Server eingerichtet werden? {#defaultdns}

Siehe den Abschnitt [_Geräte konfigurieren_](getting-started.md#configure-devices) auf der Seite _Erste Schritte_.

## Gibt es bekannte Einschränkungen? {#limitations}

Hier einige Beispiele dafür, was von einem Blocker auf DNS-Ebene nicht gesperrt werden kann:

- Werbung auf YouTube und Twitch.

- Gesponserte Beiträge auf Facebook, X (früher Twitter) und Instagram.

Grundsätzlich kann jede Werbung, die eine Domain mit einem Inhalt teilt, nicht von einem Blocker auf DNS-Ebene gesperrt werden, es sei denn, Sie sind bereit, auch den Inhalt zu sperren.

### Gibt es eine Möglichkeit, dies in Zukunft zu ändern?

DNS wird dafür niemals ausreichen. Ihre einzige Möglichkeit ist die Verwendung eines Proxy zum Sperren von Inhalten, wie wir es in den [eigenständigen AdGuard-Anwendungen][adguard] tun. We’ll be adding support for this feature to AdGuard Home in the future. Unfortunately, even then there will still be cases where it won’t be enough or it will require quite complicated configuration.

[adguard]: https://adguard.com/

## Why do I get `bind: address already in use` error when trying to install on Ubuntu? {#bindinuse}

This happens because the port 53 on `localhost`, which is used for DNS, is already taken by another program. Ubuntu comes with a local DNS called `systemd-resolved`, which uses the address `127.0.0.53:53`, thus preventing AdGuard Home from binding to `127.0.0.1:53`. You can see this by running:

```sh
sudo lsof -i :53
```

The output should be similar to:

```none
COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME
systemd-r 14542 systemd-resolve 13u IPv4 86178 0t0 UDP 127.0.0.53:domain
systemd-r 14542 systemd-resolve 14u IPv4 86179 0t0 TCP 127.0.0.53:domain
```

To fix this, you must either disable the `systemd-resolved` daemon or choose a different network interface and bind your AdGuard Home to an accessible IP address on it, such as the IP address of your router inside your network. But if you do need to listen on `localhost`, there are several solutions.

Firstly, AdGuard Home can detect such configurations and disable `systemd-resolved` for you if you press the _Fix_ button located next to the `address already in use` message on the installation screen.

Secondly, if that doesn’t work, follow the instructions below. Note that if you’re using AdGuard Home with docker or snap, you’ll have to do this yourself.

1. Create the `/etc/systemd/resolved.conf.d` directory, if necessary:

   ```sh
   sudo mkdir -p /etc/systemd/resolved.conf.d
   ```

2. Deactivate `DNSStubListener` and update DNS server address. To do that, create a new file, `/etc/systemd/resolved.conf.d/adguardhome.conf`, with the following content:

   ```service
   [Resolve]
   DNS=127.0.0.1
   DNSStubListener=no
   ```

Specifying `127.0.0.1` as the DNS server address is **necessary.** Otherwise the nameserver will be `127.0.0.53` which won’t work without `DNSStubListener`.

1. Activate another `resolv.conf` file:

   ```sh
   sudo mv /etc/resolv.conf /etc/resolv.conf.backup
   sudo ln -s /run/systemd/resolve/resolv.conf /etc/resolv.conf
   ```

2. Restart `DNSStubListener`:

   ```sh
   sudo systemctl reload-or-restart systemd-resolved
   ```

After that, `systemd-resolved` shouldn’t be shown in the output of `lsof`, and AdGuard Home should be able to bind to `127.0.0.1:53`.

## How do I configure a reverse proxy server for AdGuard Home? {#reverseproxy}

If you’re already running a web server and want to access the AdGuard Home dashboard UI from a URL like `http://YOUR_SERVER/aghome/`, you can use this configuration for your web server:

### nginx

```nginx
location /aghome/ {
 proxy_cookie_path / /aghome/;
 proxy_pass http://AGH_IP:AGH_PORT/;
 proxy_redirect / /aghome/;
 proxy_set_header Host $host;
}
```

### caddy

```none
:80/aghome/* {
 route {
 uri strip_prefix /aghome
 reverse_proxy AGH_IP:AGH_PORT
 }
}
```

Or, if you only want to serve AdGuard Home with automatic TLS, use a configuration similar to the example shown below:

```none
DOMAIN {
 encode gzip zstd
 tls YOUR_EMAIL@DOMAIN
 reverse_proxy AGH_IP:AGH_PORT
}
```

### Apache

```apache
<VirtualHost *:80>
  ProxyPass "/" "http://AGH_IP:AGH_PORT/"
  ProxyPassReverse "/" "http://AGH_IP:AGH_PORT/"
  PreserveHost On
</VirtualHost>
```

:::note

Verwenden Sie keine Unterverzeichnisse mit dem Apache Reverse-HTTP-Proxy.  Es ist ein bekanntes Problem ([#6604]), dass der Apache relative Weiterleitungen anders behandelt als andere Webserver. Dies führt zu Problemen mit der Web-Oberfläche von AdGuard Home.

[#6604]: https://github.com/AdguardTeam/AdGuardHome/issues/6604

:::

### Disable DoH encryption on AdGuard Home

If you’re using TLS on your reverse proxy server, you don’t need to use TLS on AdGuard Home. Set `allow_unencrypted_doh: true` in `AdGuardHome.yaml` to allow AdGuard Home to respond to DoH requests without TLS encryption.

### Real IP addresses of clients

You can set the parameter `trusted_proxies` to the IP address(es) of your HTTP proxy to make AdGuard Home consider the headers containing the real client IP address. See the [configuration][conf] and [encryption][encr] pages for more information.

[encr]: https://github.com/AdguardTeam/AdGuardHome/wiki/Encryption#reverse-proxy
[conf]: https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration

## How do I fix `permission denied` errors on Fedora? {#fedora}

1. Move the `AdGuardHome` binary to `/usr/local/bin`.

2. As `root`, execute the following command to change the security context of the file:

   ```sh
   chcon -t bin_t /usr/local/bin/AdGuardHome
   ```

3. Add the required firewall rules in order to make it reachable through the network. Zum Beispiel:

   ```sh
   firewall-cmd --new-zone=adguard --permanent
   firewall-cmd --zone=adguard --add-source=192.168.0.14/24 --permanent
   firewall-cmd --zone=adguard --add-port=3000/tcp --permanent
   firewall-cmd --zone=adguard --add-port=53/udp --permanent
   firewall-cmd --zone=adguard --add-port=80/tcp --permanent
   firewall-cmd --reload
   ```

If you are still getting `code=exited status=203/EXEC` or similar errors from `systemctl`, try uninstalling AdGuard Home and installing it **directly** into `/usr/local/bin` by using the `-o` option of the install script:

```sh
curl -s -S -L 'https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh' | sh -s -- -o '/usr/local/bin' -v
```

Siehe \[Problem 765] und \[Problem 3281].

[issue 3281]: https://github.com/AdguardTeam/AdGuardHome/issues/3281
[issue 765]: https://github.com/AdguardTeam/AdGuardHome/issues/765#issuecomment-752262353

## How do I fix `incompatible file system` errors? {#incompatfs}

You should move your AdGuard Home installation or working directory to another location. See the [limitations section](getting-started.md#limitations) on the _Getting Started_ page.

## Was bedeutet „Fehler: control/version.json“? {#version-error}

Diese Fehlermeldung bedeutet, dass AdGuard Home die AdGuard-Server nicht erreichen konnte, um nach Aktualisierungen zu suchen und/oder diese herunterzuladen. Dies könnte bedeuten, dass die Server von Ihrem Internetanbieter gesperrt werden oder vorübergehend nicht erreichbar sind. If the error does not resolve itself after some time, you can try performing a [manual update](#manual-update) or disabling the automatic update check by running the `AdGuardHome` executable with the `--no-check-update` command-line option.

## How do I update AdGuard Home manually? {#manual-update}

If the button isn’t displayed or an automatic update has failed, you can update manually. In the examples below, we’ll use AdGuard Home versions for Linux and Windows for AMD64 CPUs.

### Unix (Linux, macOS, BSD) {#manual-update-unix}

1. Download the new AdGuard Home package from the [releases page][releases]. If you want to perform this step from the command line, type:

   ```sh
   curl -L -S -o '/tmp/AdGuardHome_linux_amd64.tar.gz' -s\
   'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'
   ```

   Or, with `wget`:

   ```sh
   wget -O '/tmp/AdGuardHome_linux_amd64.tar.gz'\
   'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'
   ```

2. Navigate to the directory where AdGuard Home is installed. On most Unix systems the default directory is `/opt/AdGuardHome`, but on macOS it’s `/Applications/AdGuardHome`.

3. Beenden Sie AdGuard Home:

   ```sh
   sudo ./AdGuardHome -s stop
   ```

   :::note OpenBSD

   On OpenBSD, you will probably want to use `doas` instead of `sudo`.

   :::

4. Backup your data. That is, your configuration file and the data directory (`AdGuardHome.yaml` and `data/` by default). For example, to backup your data to a new directory called `~/my-agh-backup`:

   ```sh
   mkdir -p ~/my-agh-backup
   cp -r ./AdGuardHome.yaml ./data ~/my-agh-backup/
   ```

5. Extract the AdGuard Home archive to a temporary directory. For example, if you downloaded the archive to your `~/Downloads` directory and want to extract it to `/tmp/`:

   ```sh
   tar -C /tmp/ -f ~/Downloads/AdGuardHome_linux_amd64.tar.gz -x -v -z
   ```

   On macOS, type something like:

   ```sh
   unzip -d /tmp/ ~/Downloads/AdGuardHome_darwin_amd64.zip
   ```

6. Ersetzen Sie die alte ausführbare Datei von AdGuard Home durch die neue. Auf den meisten Unix-Systemen würde der Befehl etwa so aussehen:

   ```sh
   sudo cp /tmp/AdGuardHome/AdGuardHome /opt/AdGuardHome/AdGuardHome
   ```

   Unter macOS etwa so:

   ```sh
   sudo cp /tmp/AdGuardHome/AdGuardHome /Applications/AdGuardHome/AdGuardHome
   ```

   Sie möchten vielleicht auch die Dokumentationsteile des Pakets kopieren, wie das Änderungsprotokoll (`CHANGELOG.md`), die README-Datei (`README.md`) und die Lizenz (`LICENSE.txt`).

   Sie können nun das temporäre Verzeichnis entfernen.

7. Starten Sie AdGuard Home neu:

   ```sh
   sudo ./AdGuardHome -s start
   ```

[releases]: https://github.com/AdguardTeam/AdGuardHome/releases/latest

### Windows (mit PowerShell) {#manual-update-win}

In allen folgenden Beispielen muss die PowerShell als Administrator ausgeführt werden.

1. Download the new AdGuard Home package from the [releases page][releases]. Wenn Sie diesen Schritt über die Befehlszeile ausführen möchten:

   ```ps1
   $outFile = Join-Path -Path $Env:USERPROFILE -ChildPath 'Downloads\AdGuardHome_windows_amd64.zip'
   $aghUri = 'https://static.adguard.com/adguardhome/release/AdGuardHome_windows_amd64.zip'
   Invoke-WebRequest -OutFile "$outFile" -Uri "$aghUri"
   ```

2. Wechseln Sie in den Ordner, in dem AdGuard Home installiert wurde. In den folgenden Beispielen wird `C:\Program Files\AdGuardHome`. verwendet.

3. Beenden Sie AdGuard Home:

   ```ps1
   .\AdGuardHome.exe -s stop
   ```

4. Backup your data. That is, your configuration file and the data directory (`AdGuardHome.yaml` and `data/` by default). Zum Beispiel, um Ihre Daten in einem neuen Ordner namens `my-agh-backup` zu sichern:

   ```ps1
   $newDir = Join-Path -Path $Env:USERPROFILE -ChildPath 'my-agh-backup'
   New-Item -Path $newDir -ItemType Directory
   Copy-Item -Path .\AdGuardHome.yaml, .\data -Destination $newDir -Recurse
   ```

5. Extract the AdGuard Home archive to a temporary directory. Wenn Sie das Archiv beispielsweise in den Ordner `Downloads` heruntergeladen haben und es in einen temporären Ordner entpacken möchten:

   ```ps1
   $outFile = Join-Path -Path $Env:USERPROFILE -ChildPath 'Downloads\AdGuardHome_windows_amd64.zip'
   Expand-Archive -Path "$outFile" -DestinationPath $Env:TEMP
   ```

6. Ersetzen Sie die alte ausführbare Datei von AdGuard Home durch die neue. Zum Beispiel:

   ```ps1
   $aghExe = Join-Path -Path $Env:TEMP -ChildPath 'AdGuardHome\AdGuardHome.exe'
   Copy-Item -Path "$aghExe" -Destination .\AdGuardHome.exe
   ```

   Sie möchten vielleicht auch die Dokumentationsteile des Pakets kopieren, wie das Änderungsprotokoll (`CHANGELOG.md`), die README-Datei (`README.md`) und die Lizenz (`LICENSE.txt`).

   Sie können nun das temporäre Verzeichnis entfernen.

7. Starten Sie AdGuard Home neu:

   ```ps1
   .\AdGuardHome.exe -s start
   ```

## Wie kann AdGuard Home deinstalliert werden? {#uninstall}

Je nachdem, wie Sie AdGuard Home installiert haben, gibt es verschiedene Möglichkeiten, es zu deinstallieren.

:::caution

Bevor Sie AdGuard Home deinstallieren, vergessen Sie nicht, die Konfiguration Ihrer Geräte zu ändern und sie auf einen anderen DNS-Server zu verweisen.

:::

### Normale Installation

In diesem Fall gehen Sie wie folgt vor:

- Heben Sie die Registrierung des AdGuard Home-Dienstes auf: `./AdGuardHome -s uninstall`.

- Entfernen Sie den Ordner AdGuard Home.

### Docker

Stoppen Sie einfach und entfernen Sie das Image.

### Snap Store

```sh
snap remove adguard-home
```
