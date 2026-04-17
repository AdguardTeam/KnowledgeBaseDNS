---
title: DNS-Verschlüsselung
sidebar_position: 6
---

AdGuard Home unterstützt alle modernen DNS-Verschlüsselungsprotokolle **standardmäßig**:

- [DNS-over-HTTPS](https://en.wikipedia.org/wiki/DNS_over_HTTPS)
- [DNS-over-TLS](https://en.wikipedia.org/wiki/DNS_over_TLS)
- [DNS-over-QUIC](https://datatracker.ietf.org/doc/html/rfc9250)

:::note

AdGuard Home unterstützt sowohl clientseitige als auch serverseitige [DNSCrypt][dnscrypt-info]. [Erfahren, wie Sie AdGuard Home als DNSCrypt-Server konfigurieren](#configure-dnscrypt).

:::

Diese Anleitung erklärt, wie man einen verschlüsselten DNS-Server mit AdGuard Home einrichtet.

[dnscrypt-info]: https://dnscrypt.info/

## Serverinstallation {#server-installation}

Der Zweck der Sicherung des DNS-Verkehrs besteht darin, ihn vor Dritten zu schützen, die ihn analysieren oder verändern könnten, z. B. Internetdienstanbieter.

{/_TODO(e.burkov):  Use relative links to the docs instead of absolute, see AGDNS-2226._/}

Das bedeutet, dass Sie einen Server mit einer öffentlichen dedizierten IP-Adresse benötigen. Es gibt viele günstige Cloud-Server-Anbieter: [DigitalOcean][digital-ocean], [Vultr][vultr], [Linode][linode], usw. Whlen Sie einfach einen aus, erstellen Sie dort einen Cloud-Server und [installieren Sie AdGuard Home](adguard-home/getting-started.md) auf Ihrem Server.

[digital-ocean]: https://digitalocean.com
[vultr]: https://vultr.com
[linode]: https://www.linode.com

## Registrierung eines Domainnamens {#register-domain}

Als Erstes benötigen Sie einen Domainnamen. Falls Sie noch nie eine Domain registriert haben, finden Sie hier eine [einfache Anleitung][domain-name-register], die Ihnen dabei hilft.

[domain-name-register]: https://www.pcworld.com/article/241722/web-apps/how-to-register-your-own-domain-name.html

## SSL-Zertifikat abrufen {#certificate}

Sowohl `DNS-over-HTTPS` als auch `DNS-over-TLS` basieren auf [TLS-Verschlüsselung][tls-wikipedia], daher benötigen Sie ein SSL-Zertifikat, um sie zu verwenden.

Ein SSL-Zertifikat kann bei einer Zertifizierungsstelle (CA) erworben werden, einem Unternehmen, dem Browser und Betriebssysteme die Ausstellung von SSL-Zertifikaten für Domains anvertrauen.

Alternativ können Sie das Zertifikat kostenlos von der [Let's Encrypt CA][letsencrypt], einer kostenlosen Zertifizierungsstelle, die von der Internet Security Research Group (ISRG) entwickelt wurde, erhalten.

Dieser Leitfaden erklärt, wie man von ihnen ein Zertifikat erhält.

### Verwendung von CertBot

Certbot ist ein benutzerfreundlicher Client, der ein Zertifikat von Let's Encrypt abruft.

1. Öffnen Sie die Seite [certbot.eff.org][certbot] und wählen Sie die Option _None of the above_ (Keine der oben genannten) Software sowie Ihr Betriebssystem aus.
2. Befolgen Sie die Installationsanweisungen und unterbrechen Sie den Vorgang, sobald Sie den Abschnitt _Erste Schritte_ erreichen.

#### Abrufen eines Zertifikats mit DNS-Challenge

Wenn Sie einen Domainnamen besitzen, ist die DNS-Validierung der einfachste Weg, ein Zertifikat zu erhalten.

Führen Sie diesen Befehl aus und befolgen Sie die Anweisungen von Certbot:

```sh
sudo certbot certonly --manual --preferred-challenges=dns --preferred-chain="ISRG Root X1"
```

Letztendlich erhalten Sie zwei Dateien:

- `fullchain.pem`: Ihr PEM-kodiertes SSL-Zertifikat
- `privkey.pem`: Ihr PEM-kodierter privater Schlüssel

Beide sind für die Konfiguration von AdGuard Home erforderlich.

:::info Wichtig

Um das bestehende Zertifikat zu verlängern, müssen Sie genau denselben Vorgang erneut durchführen.

:::

### Verwendung von LEGO

Es gibt auch eine wirklich gute und benutzerfreundliche Alternative zu CertBot namens [LEGO][lego-source].

1. Installieren Sie es mit [einer geeigneten Methode][lego-install].
2. Wählen Sie Ihren DNS-Anbieter aus [der Liste][lego-provider] aus und befolgen Sie die Anweisungen, um ein Zertifikat anzufordern.

Außerdem finden Sie hier [ein einfaches Skript][legoagh], mit dem Sie die Erstellung und Erneuerung von Zertifikaten automatisieren können.

[tls-wikipedia]: https://en.wikipedia.org/wiki/Transport_Layer_Security
[letsencrypt]: https://letsencrypt.org
[certbot]: https://certbot.eff.org
[lego-source]: https://go-acme.github.io/lego
[lego-install]: https://go-acme.github.io/lego/installation
[lego-provider]: https://go-acme.github.io/lego/dns
[legoagh]: https://github.com/ameshkov/legoagh

## AdGuard Home konfigurieren {#configure}

1. Öffnen Sie die Weboberfläche von AdGuard Home und gehen Sie zu _Einstellungen_.

2. Wählen Sie den Abschnitt _Verschlüsselung_.

   ![Bildschirmfoto der Verschlüsselungseinstellungen][encryption-screenshot]

3. Kopieren Sie den Inhalt der Datei `fullchain.pem` und fügen Sie ihn in das Feld unter _Zertifikate_ ein oder geben Sie den Pfad zur Datei an.

4. Kopieren Sie den Inhalt der Datei `privkey.pem` und fügen Sie ihn in das Feld unter _Privater Schlüssel_ ein oder geben Sie den Pfad zur Datei an.

5. Geben Sie Ihren Domainnamen unter _Servername_ ein.

6. Rufen Sie die Bestätigungsmeldungen ab und klicken Sie auf _Einstellungen speichern_.

:::note

AdGuard Home lädt Zertifikate und/oder private Schlüssel, die über einen Dateipfad angegeben wurden, automatisch neu, sobald sich diese ändern. Ein Neuladen kann auch durch ein `SIGHUP`-Signal ausgelöst werden.

:::

[encryption-screenshot]: https://cdn.adtidy.org/content/kb/dns/adguard-home/encryption-screenshot.png

## Verwendung mit Reverse-Proxy {#reverse-proxy}

Es gibt bereits eine [Anleitung][reverse-proxy-faq] zur Konfiguration eines Reverse-Proxy-Servers für den Zugriff auf die Weboberfläche von AdGuard Home.

AdGuard Home kann DNS-over-HTTPS-Anfragen einschränken, die von einem Proxy-Server stammen, der nicht in der Liste der „vertrauenswürdigen“ Server aufgeführt ist. Standardmäßig ist es so konfiguriert, dass Anfragen von IPv4- und IPv6-Loopback-Adressen akzeptiert werden.

Damit AdGuard Home DNS-over-HTTPS-Anfragen von einem Reverse-Proxy-Server verarbeiten kann, setzen Sie die Einstellung `trusted_proxies` in der Datei `AdGuardHome.yaml` auf die IP-Adresse des Proxy-Servers. Wenn Sie über mehrere Proxy-Server verfügen, können Sie anstelle einer einfachen IP-Adresse einen CIDR-Bezeichner verwenden.

### Nginx Reverse-Proxy

Um AdGuard Home so zu konfigurieren, dass es Anfragen vom Nginx-Reverse-Proxy-Server akzeptiert, stellen Sie sicher, dass der Reverse-Proxy-Server selbst korrekt konfiguriert ist.

Die Datei `nginx.conf` sollte die entsprechenden Anweisungen enthalten, um die unterstützten Weiterleitungsheader `X-Real-IP` oder `X-Forwarded-For` an die Anfrage anzuhängen. Dies lässt sich mit dem [`ngx_http_realip_module`][ngx-http-realip-module] erreichen. Kurz gesagt: Das Modul erfasst die tatsächliche IP-Adresse des Clients und schreibt sie in den Header der HTTP-Anfrage. AdGuard Home empfängt den Wert dieses Headers und interpretiert ihn als die tatsächliche Adresse des Clients. Die Adresse des Reverse-Proxy-Servers wird ebenfalls empfangen und anhand der Liste der „vertrauenswürdigen“ Proxys überprüft.

Ein weiterer Header, den Sie möglicherweise weiterleiten möchten, ist der `Host`-Header. Dieser ist erforderlich, damit AdGuard Home Anfragen von Clients erkennt, deren Hostnamen eine Client-ID enthalten.

Wenn die Konfiguration des Reverse-Proxy-Servers beispielsweise die folgenden Anweisungen enthält:

```nginx
location /dns-query {
  # …
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP '1.2.3.4';
  proxy_bind 192.168.1.2;
  # …
}
```

AdGuard Home erhält die Adresse `192.168.1.2` als Adresse Ihres Proxy-Servers und gleicht sie mit der Liste `trusted_proxies` ab. Die `1.2.3.4` wird durch die Zugriffseinstellungen gesteuert, sofern der Proxy als „vertrauenswürdig“ eingestuft ist.

### Cloudflare CDN

Das Content Delivery Network von Cloudflare fungiert als Reverse-Proxy und fügt den weitergeleiteten Anfragen seine [eigenen Header][cloudflare-headers] hinzu, nämlich `CF-Connecting-IP` und `True-Client-IP`. Diese werden auch von AdGuard Home unterstützt, sodass die [Adressen][cloudflare-addresses] der Reverse-Proxy-Server direkt in die Liste `trusted_proxies` eingefügt werden können. Weitere Informationen zur Wiederherstellung der ursprünglichen IP-Adresse des Besuchers finden Sie in der [offiziellen Cloudflare-Anleitung][cloudflare-real-ip].

### Weitere Header

Möglicherweise werden in Zukunft weitere HTTP-Header von AdGuard Home unterstützt. Funktionswünsche, die sich auf Header beziehen, sollten jedoch zunächst durch eine entsprechende Konfiguration des Reverse-Proxys selbst gelöst werden.

Um beispielsweise den [HTTP Strict Transport Security][hsts]-Mechanismus so anzupassen, dass er die experimentelle `preload`-Anweisung enthält, könnte etwa die folgende Konfiguration verwendet werden:

```nginx
location /dns-query {
  # …
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
  # …
}
```

{/_TODO(e.burkov):  Use relative links to the docs instead of absolute, see AGDNS-2226._/}

[reverse-proxy-faq]: /adguard-home/faq.md#reverseproxy
[ngx-http-realip-module]: https://nginx.org/en/docs/http/ngx_http_realip_module.html
[cloudflare-headers]: https://support.cloudflare.com/hc/en-us/articles/200170986
[cloudflare-addresses]: https://www.cloudflare.com/ips
[cloudflare-real-ip]: https://support.cloudflare.com/hc/en-us/articles/200170786
[hsts]: https://datatracker.ietf.org/doc/html/rfc6797

## Geräte konfigurieren {#configure-devices}

### Android

- Android 9 und höher unterstützt standardmäßig `DNS-over-TLS`. Um dies einzurichten, öffnen Sie _Einstellungen_ → _Netzwerk & Internet_ → _Erweitert_ → _Privater DNS_ und geben Sie dort Ihren Domainnamen ein.
- [AdGuard für Android][ag-for-android] unterstützt `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` und `DNS-over-QUIC`.
- [Intra][intra] erweitert Android um Unterstützung für `DNS-over-HTTPS`.

### iOS

- iOS 14 und höher unterstützen standardmäßig `DNS-over-TLS` und `DNS-over-HTTPS` über Konfigurationsprofile. Um Ihnen die Arbeit zu erleichtern, kann AdGuard Home diese Konfigurationsprofile für Sie erstellen. Öffnen Sie einfach die _Einrichtungsanleitung_ → _DNS-Datenschutz_ und wechseln Sie zum Abschnitt für iOS.
- [AdGuard für iOS][ag-for-ios] unterstützt `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` und `DNS-over-QUIC`.
- [DNSCloak][dnscloak] unterstützt `DNS-over-HTTPS`, aber um es für die Verwendung Ihres eigenen Servers zu konfigurieren, muss dafür ein [DNS-Stempel][stamps] generiert werden.

### Windows

- Windows 10 Build 19628 und höher unterstützen standardmäßig `DNS-over-HTTPS`.
- [AdGuard für Windows][ag-for-windows] unterstützt `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` und `DNS-over-QUIC`.

### macOS

- macOS Big Sur und höher unterstützen `DNS-over-TLS` und `DNS-over-HTTPS` nativ über Konfigurationsprofile. Um Ihnen die Arbeit zu erleichtern, kann AdGuard Home diese Konfigurationsprofile für Sie erstellen. Öffnen Sie einfach die _Einrichtungsanleitung_ → _DNS-Datenschutz_ und wechseln Sie zum Abschnitt für iOS.

### Weitere Implementierungen

- AdGuard Home selbst kann auf jeder Plattform als sicherer DNS-Client fungieren.
- [dnsproxy][ag-dnsproxy] unterstützt alle bekannten sicheren DNS-Protokolle.
- [dnscrypt-proxy][dnscrypt-proxy] unterstützt `DNS-over-HTTPS`.
- [Mozilla Firefox][firefox] unterstützt `DNS-over-HTTPS`.

[ag-for-android]: https://adguard.com/de/adguard-android/overview.html
[intra]: https://getintra.org
[ag-for-ios]: https://adguard.com/en/adguard-ios/overview.html
[dnscloak]: https://itunes.apple.com/app/id1452162351
[stamps]: https://dnscrypt.info/stamps
[ag-for-windows]: https://adguard.com/de/adguard-windows/overview.html
[ag-dnsproxy]: https://github.com/AdguardTeam/dnsproxy
[dnscrypt-proxy]: https://github.com/jedisct1/dnscrypt-proxy
[firefox]: https://www.mozilla.org/firefox

## DNSCrypt konfigurieren {#configure-dnscrypt}

AdGuard Home kann als DNSCrypt-Server genutzt werden. Diese Funktion ist jedoch nur über die Konfigurationsdatei verfügbar und kann nicht über die Weboberfläche eingerichtet werden. In dieser Anleitung wird die Vorgehensweise erläutert.

### Erstellen einer Konfigurationsdatei

So erstellen Sie eine DNSCrypt-Konfigurationsdatei und verweisen AdGuard Home darauf:

:::info Wichtig

Stellen Sie sicher, dass Ihre TLS-Einstellungen korrekt sind und die Verschlüsselung aktiviert ist.

:::

1. Laden Sie die neueste Version des Dienstprogramms [`dnscrypt`] für Ihr System herunter. Entpacken Sie das Archiv und wechseln Sie in den so entstandenen Ordner.

   - Unter Unix mit einer POSIX-kompatiblen Shell:

     (Hier und im Folgenden wird `linux-amd64` als Beispiel verwendet. Achten Sie darauf, die für Ihre Plattform geeignete Version herunterzuladen und zu verwenden.)

     1. Entpacken Sie die Dateien wie folgt:

           ```sh
           tar -f ./dnscrypt-linux-amd64-v2.2.3.tar.gz -v -x -z
           ```

        Beispiel für die Ausgabe:

           ```none
           linux-amd64/
           linux-amd64/README.md
           linux-amd64/LICENSE
           linux-amd64/dnscrypt
           ```

     2. Wechseln Sie in den entpackten Ordner:

           ```sh
           cd ./linux-amd64/
           ```

     3. Erstellen Sie die Konfigurationsdatei:

           ```sh
           ./dnscrypt generate --provider-name '2.dnscrypt-cert.example.org' --out ./dnscrypt.yaml
           ```

        Beispiel für die Ausgabe:

            ```none
            02.01.2022 12:34:56 [Info] Konfiguration für 2.dnscrypt-cert.example.org wird erstellt
            02.02.2022 12:34:56 [Info] Konfiguration wurde in ./dnscrypt.yaml geschrieben
            02.02.2022 12:34:56 [Info] Besuchen Sie https://dnscrypt.info/stamps, um einen SDNS-Stempel zu generieren
            02.02.2022 12:34:56 [Info] Sie können einen DNSCrypt-Server mit dem folgenden Befehl ausführen:
            02.02.2022 12:34:56 [Info] dnscrypt server -c ./dnscrypt.yaml -f 8.8.8.8
            ```

   - Unter Windows mit PowerShell:

     (Hier und im Folgenden wird `windows-amd64` als Beispiel verwendet. Achten Sie darauf, die für Ihre CPU-Architektur geeignete Version herunterzuladen und zu verwenden.)

     1. Entpacken Sie die Dateien wie folgt:

           ```ps1
           Expand-Archive -Path .\dnscrypt-windows-amd64-v2.2.3.zip
           ```

     2. Wechseln Sie in den entpackten Ordner:

           ```ps1
           Set-Location -Path .\dnscrypt-windows-amd64-v2.2.3\windows-amd64\
           ```

     3. Erstellen Sie die Konfigurationsdatei:

           ```ps1
           .\dnscrypt.exe generate --provider-name '2.dnscrypt-cert.example.org' --out .\dnscrypt.yaml
           ```

        Beispiel für die Ausgabe:

           ```none
           02.01.2022 12:34:56 [Info] Konfiguration für 2.dnscrypt-cert.example.org wird erstellt
           02.02.2022 12:34:56 [Info] Die Konfiguration wurde in die Datei .\dnscrypt.yaml geschrieben
           02.02.2022 12:34:56 [info] Besuchen Sie https://dnscrypt.info/stamps, um einen SDNS-Stempel zu generieren
           02.02.2022 12:34:56 [info] Sie können einen DNSCrypt-Server mit dem folgenden Befehl ausführen:
           02.02.2022 12:34:56 [Info] dnscrypt server -c .\dnscrypt.yaml -f 8.8.8.8
           ```

   Dabei ist `example.org` der Name Ihres Hosts und `./dnscrypt.yaml` der Name der Konfigurationsausgabedatei.

   Sie können den Pfad zur Binärdatei in Ihre `PATH`-Variable bzw. in `$env:PATH` einfügen.

2. Fügen Sie in der Konfigurationsdatei (in der Regel `AdGuardHome.yaml`) die folgenden Zeilen ein:

   ```yaml
   'tls':
     # Hinweis: Die Verschlüsselung muss aktiviert sein.
     'enabled': true
     # …
     'port_dnscrypt': 5443
     'dnscrypt_config_file': './dnscrypt.yaml'
   ```

   Dabei ist `5443` der Port für Ihren DNSCrypt-Server und `./dnscrypt.yaml` der Name der in Schritt 2 erstellten Konfigurationsdatei.

   :::info Wichtig

   Beenden Sie AdGuard Home, bevor die Konfigurationsdatei geändert wird.

   :::

   :::tip

   Unter Windows wird empfohlen, den vollständigen Pfad zur Konfigurationsdatei anzugeben. Zum Beispiel `C:\Users\Me\Files\dnscrypt.yaml`.

   :::

[`dnscrypt`]: https://github.com/ameshkov/dnscrypt/releases

### Einen DNSCrypt-Stempel (DNSCrypt stamp) erstellen

Diese Anleitung beschreibt, wie Sie einen DNSCrypt-Stempel erstellen und Ihre Installation überprüfen können:

1. Go to [https://dnscrypt.info/stamps/](https://dnscrypt.info/stamps/).

2. Geben Sie die Daten aus Ihrer DNSCrypt-Konfigurationsdatei ein. Der _öffentliche Schlüssel des Anbieters_ ist der Wert des Feldes `public_key` in Ihrer DNSCrypt-Konfigurationsdatei.

   :::note

   Geben Sie den Host mit Ihrem benutzerdefinierten Port ein.

   :::

3. Jetzt haben Sie einen Stempel, der in etwa so aussieht:

   ```none
   sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn
   ```

   Überprüfen Sie Ihre Installation, indem Sie folgenden Befehl ausführen:

   ```sh
   ./dnscrypt lookup-stamp \
       --domain 'example.com' \
       --stamp 'sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn' \
       --type 'a'
   ```

   Oder unter Windows:

   ```ps1
   .\dnscrypt.exe lookup-stamp `
       --domain 'example.com' `
       --stamp 'sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn' `
       --type 'a'
   ```

   Wobei `example.com` der zu suchende Domainname ist.

### Geräte für die Verwendung von DNSCrypt konfigurieren

#### Alle Plattformen

- [`dnscrypt-proxy`][prox] (Referenzimplementierung). DNSCrypt-Proxy ist ein Befehlszeilen-Proxy für Linux, BSD, Windows, macOS, Android und weitere Plattformen.

#### Android

- [AdGuard für Android][andr] unterstützt DNSCrypt.

#### iOS

- [AdGuard für iOS][ios] unterstützt DNSCrypt.
- [DNSCloak][cloa] verwendet intern `dnscrypt-proxy` und unterstützt DNSCrypt.

#### Windows

- [AdGuard für Windows][win] unterstützt DNSCrypt.
- [Simple DNSCrypt][simp] ist ein einfaches Verwaltungstool zum Konfigurieren und Ausführen von `dnscrypt-proxy` unter Windows.

Weitere Informationen finden Sie auf der [DNSCrypt-Website][imps1] und in der [Liste des DNS-Privacy-Projekts][imps2].

[andr]: https://adguard.com/de/adguard-android/overview.html
[cloa]: https://itunes.apple.com/app/id1452162351
[imps1]: https://dnscrypt.info/implementations
[imps2]: https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Clients
[ios]: https://adguard.com/en/adguard-ios/overview.html
[prox]: https://github.com/DNSCrypt/dnscrypt-proxy
[simp]: https://simplednscrypt.org/
[win]: https://adguard.com/de/adguard-windows/overview.html
