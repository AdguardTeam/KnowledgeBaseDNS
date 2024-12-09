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

DNS wird dafür niemals ausreichen. Ihre einzige Möglichkeit ist die Verwendung eines Proxy zum Sperren von Inhalten, wie wir es in den [eigenständigen AdGuard-Anwendungen][adguard] tun. Zukünftig wird AdGuard Home auch diese Funktion unterstützen. Leider wird es auch dann noch Fälle geben, in denen dies nicht ausreicht oder eine recht komplizierte Konfiguration erfordert.

[adguard]: https://adguard.com/

## Warum erhalte ich beim Installationsversuch auf Ubuntu die Fehlermeldung `bind: address already in use`? {#bindinuse}

Dies geschieht, weil der Port 53 auf `localhost`, der für DNS verwendet wird, bereits von einem anderen Programm belegt ist. Ubuntu wird mit einem lokalen DNS namens `systemd-resolved` ausgeliefert, der die Adresse `127.0.0.53:53` verwendet und somit verhindert, dass sich AdGuard Home an `127.0.0.1:53` binden kann. Sie können dies prüfen, indem Sie den Befehl ausführen:

```sh
sudo lsof -i :53
```

Die Ausgabe sollte in etwa so aussehen:

```none
COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME
systemd-r 14542 systemd-resolve 13u IPv4 86178 0t0 UDP 127.0.0.53:domain
systemd-r 14542 systemd-resolve 14u IPv4 86179 0t0 TCP 127.0.0.53:domain
```

Um dies zu beheben, müssen Sie entweder den Daemon `systemd-resolved` deaktivieren oder eine andere Netzwerkschnittstelle wählen und Ihren AdGuard Home an eine erreichbare IP-Adresse binden, z.B. an die IP-Adresse Ihres Routers innerhalb Ihres Netzwerks. Wenn Sie jedoch auf `localhost` lauschen müssen, gibt es mehrere Lösungen.

Erstens kann AdGuard Home solche Konfigurationen erkennen und `systemd-resolved` für Sie deaktivieren, wenn Sie auf dem Installationsbildschirm die Schaltfläche _Fix_ neben der Meldung `address already in use` drücken.

Sollte das nicht funktionieren, befolgen Sie bitte die nachstehenden Anweisungen. Beachten Sie, dass Sie dies selbst tun müssen, wenn Sie AdGuard Home mit Docker oder Snap verwenden.

1. Erstellen Sie den Ordner `/etc/systemd/resolved.conf.d`, falls erforderlich:

   ```sh
   sudo mkdir -p /etc/systemd/resolved.conf.d
   ```

2. Deaktivieren Sie `DNSStubListener` und aktualisieren Sie die DNS-Serveradresse. Dazu erstellen Sie eine neue Datei, `/etc/systemd/resolved.conf.d/adguardhome.conf`, mit dem folgenden Inhalt:

   ```service
   [Resolve]
   DNS=127.0.0.1
   DNSStubListener=no
   ```

Die Angabe von `127.0.0.1` als DNS-Server-Adresse ist **notwendig.** Andernfalls wird der Nameserver `127.0.0.53` sein, was ohne `DNSStubListener` nicht funktionieren wird.

1. Aktivieren Sie eine weitere Datei `resolv.conf`:

   ```sh
   sudo mv /etc/resolv.conf /etc/resolv.conf.backup
   sudo ln -s /run/systemd/resolve/resolv.conf /etc/resolv.conf
   ```

2. Starten Sie `DNSStubListener` neu:

   ```sh
   sudo systemctl reload-or-restart systemd-resolved
   ```

Danach sollte `systemd-resolved` in der Ausgabe von `lsof` nicht mehr angezeigt werden, und AdGuard Home sollte sich an `127.0.0.1:53` binden können.

## Wie kann ein Reverse-Proxy-Server für AdGuard Home konfiguriert werden? {#reverseproxy}

Wenn Sie bereits einen Webserver betreiben und auf das AdGuard Home-Benutzeroberfläche von einer URL wie `http://YOUR_SERVER/aghome/` zugreifen möchten, können Sie diese Konfiguration für Ihren Webserver verwenden:

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

Oder, wenn Sie AdGuard Home nur mit automatischem TLS ausliefern möchten, verwenden Sie eine Konfiguration ähnlich dem unten gezeigten Beispiel:

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

### Deaktivieren Sie die DoH-Verschlüsselung auf AdGuard Home

Wenn Sie TLS auf Ihrem Reverse-Proxy-Server verwenden, müssen Sie TLS nicht auf AdGuard Home verwenden. Setzen Sie `allow_unencrypted_doh: true` in `AdGuardHome.yaml`, damit AdGuard Home auf DoH-Anfragen ohne TLS-Verschlüsselung antworten kann.

### Wahre IP-Adressen der Clients

Sie können den Parameter `trusted_proxies` auf die IP-Adresse(n) Ihres HTTP-Proxys setzen, damit AdGuard Home die Header berücksichtigt, die die echte Client-IP-Adresse enthalten. Weitere Informationen finden Sie auf den Seiten [configuration][conf] und [encryption][encr].

[encr]: https://github.com/AdguardTeam/AdGuardHome/wiki/Encryption#reverse-proxy
[conf]: https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration

## Wie kann der Fehler `permission denied` unter Fedora behoben werden? {#fedora}

1. Verschieben Sie die Binärdatei `AdGuardHome` nach `/usr/local/bin`.

2. Führen Sie als `root` den folgenden Befehl aus, um den Sicherheitskontext der Datei zu ändern:

   ```sh
   chcon -t bin_t /usr/local/bin/AdGuardHome
   ```

3. Fügen Sie die erforderlichen Firewall-Regeln hinzu, um die Erreichbarkeit über das Netzwerk zu gewährleisten. Zum Beispiel:

   ```sh
   firewall-cmd --new-zone=adguard --permanent
   firewall-cmd --zone=adguard --add-source=192.168.0.14/24 --permanent
   firewall-cmd --zone=adguard --add-port=3000/tcp --permanent
   firewall-cmd --zone=adguard --add-port=53/udp --permanent
   firewall-cmd --zone=adguard --add-port=80/tcp --permanent
   firewall-cmd --reload
   ```

Wenn Sie noch immer `code=exited status=203/EXEC` oder ähnliche Fehler von `systemctl` erhalten, versuchen Sie, AdGuard Home zu deinstallieren und es **direkt** in `/usr/local/bin` zu installieren, indem Sie die Option `-o` des Installationsskripts verwenden:

```sh
curl -s -S -L 'https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh' | sh -s -- -o '/usr/local/bin' -v
```

Siehe \[Problem 765] und \[Problem 3281].

[issue 3281]: https://github.com/AdguardTeam/AdGuardHome/issues/3281
[issue 765]: https://github.com/AdguardTeam/AdGuardHome/issues/765#issuecomment-752262353

## Wie kann der Fehler `incompatible file system` behoben werden? {#incompatfs}

Sie sollten Ihr AdGuard Home Installations- oder Arbeitsverzeichnis an einen anderen Ort verschieben. Siehe den Abschnitt [Einschränkungen](getting-started.md#limitations) auf der Seite _Erste Schritte_.

## Was bedeutet „Fehler: control/version.json“? {#version-error}

Diese Fehlermeldung bedeutet, dass AdGuard Home die AdGuard-Server nicht erreichen konnte, um nach Aktualisierungen zu suchen und/oder diese herunterzuladen. Dies könnte bedeuten, dass die Server von Ihrem Internetanbieter gesperrt werden oder vorübergehend nicht erreichbar sind. Wenn sich der Fehler nach einiger Zeit nicht behoben ist, können Sie versuchen, ein [manuelles Update](#manual-update) durchzuführen oder die automatische Update-Prüfung zu deaktivieren, indem Sie die ausführbare Datei `AdGuardHome` mit der Befehlszeilenoption `--no-check-update` ausführen.

## Wie kann AdGuard Home manuell aktualisiert werden? {#manual-update}

Wenn die Schaltfläche nicht angezeigt wird oder eine automatische Aktualisierung fehlgeschlagen ist, können Sie AdGuard Home manuell aktualisieren. In den folgenden Beispielen verwenden wir die Versionen für Linux und Windows für AMD64 CPUs.

### Unix (Linux, macOS, BSD) {#manual-update-unix}

1. Laden Sie das neue AdGuard Home-Paket von der [Release-Seite][Releases] herunter. Wenn Sie diesen Schritt über die Befehlszeile ausführen möchten, geben Sie folgenden Befehl ein:

   ```sh
   curl -L -S -o '/tmp/AdGuardHome_linux_amd64.tar.gz' -s\
   'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'
   ```

   Oder mit `wget`:

   ```sh
   wget -O '/tmp/AdGuardHome_linux_amd64.tar.gz'\
   'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'
   ```

2. Wechseln Sie in den Ordner, in dem AdGuard Home installiert ist. Auf den meisten Unix-Systemen ist das Standardverzeichnis `/opt/AdGuardHome`, aber unter macOS ist es `/Applications/AdGuardHome`.

3. Beenden Sie AdGuard Home:

   ```sh
   sudo ./AdGuardHome -s stop
   ```

   :::note OpenBSD

   Unter OpenBSD werden Sie wahrscheinlich `doas` anstelle von `sudo` verwenden wollen.

   :::

4. Sichern Sie Ihre Daten. Das heißt, Ihre Konfigurationsdatei und das Datenverzeichnis (standardmäßig `AdGuardHome.yaml` und `data/`). Zum Beispiel, um Ihre Daten in einen neuen Ordner namens `~/my-agh-backup` zu sichern:

   ```sh
   mkdir -p ~/my-agh-backup
   cp -r ./AdGuardHome.yaml ./data ~/my-agh-backup/
   ```

5. Entpacken Sie das AdGuard Home-Archiv in einen temporären Ordner. Wenn Sie zum Beispiel das Archiv in den Ordner `~/Downloads` heruntergeladen haben und es nach `/tmp/` entpacken wollen:

   ```sh
   tar -C /tmp/ -f ~/Downloads/AdGuardHome_linux_amd64.tar.gz -x -v -z
   ```

   Unter macOS geben Sie etwas ein wie:

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

1. Laden Sie das neue AdGuard Home-Paket von der [Release-Seite][Releases] herunter. Wenn Sie diesen Schritt über die Befehlszeile ausführen möchten:

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

4. Sichern Sie Ihre Daten. Das heißt, Ihre Konfigurationsdatei und das Datenverzeichnis (standardmäßig `AdGuardHome.yaml` und `data/`). Zum Beispiel, um Ihre Daten in einem neuen Ordner namens `my-agh-backup` zu sichern:

   ```ps1
   $newDir = Join-Path -Path $Env:USERPROFILE -ChildPath 'my-agh-backup'
   New-Item -Path $newDir -ItemType Directory
   Copy-Item -Path .\AdGuardHome.yaml, .\data -Destination $newDir -Recurse
   ```

5. Entpacken Sie das AdGuard Home-Archiv in einen temporären Ordner. Wenn Sie das Archiv beispielsweise in den Ordner `Downloads` heruntergeladen haben und es in einen temporären Ordner entpacken möchten:

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
