# So erstellen Sie Ihren eigenen DNS-Stempel für Secure DNS

Diese Anleitung zeigt Ihnen, wie Sie Ihren eigenen DNS-Stempel für Secure DNS erstellen. Secure DNS is a service that enhances your internet security and privacy by encrypting your DNS queries. Dadurch wird verhindert, dass Ihre Abfragen von böswilligen Akteuren abgefangen oder manipuliert werden.

Sicheres DNS verwendet in der Regel `tls://`, `https://`, oder `quic://` URLs. Dies ist für die meisten Benutzer ausreichend und wird empfohlen.

Wenn Sie jedoch zusätzliche Sicherheit benötigen, wie z. B. vorab aufgelöste Server-IPs und Zertifikats-Pinning durch Hash, können Sie Ihren eigenen DNS-Stempel erzeugen.

## Einführung in DNS-Stempel

DNS-Stempel sind kurze Zeichenfolgen, die alle Informationen enthalten, die für die Verbindung mit einem sicheren DNS-Server erforderlich sind. Sie vereinfachen die Einrichtung von Secure DNS, da der Benutzer nicht alle Daten manuell eingeben muss.

DNS-Stempel ermöglichen es Ihnen, die Secure DNS-Einstellungen über die üblichen URLs hinaus anzupassen. Sie ermöglichen insbesondere die Angabe von fest kodierten Serveradressen, die Verwendung von Zertifikathashing und so weiter. Diese Funktionen machen DNS-Stempel zu einer robusten und vielseitigen Option für die Konfiguration von Secure DNS-Einstellungen.

## Auswahl des Protokolls

Zu den Arten von Secure DNS gehören `DNS-over-HTTPS (DoH)`, `DNS-over-QUIC (DoQ)`, `DNS-over-TLS (DoT)` und einige andere. Die Wahl eines dieser Protokolle hängt von dem Kontext ab, in dem Sie sie verwenden werden.

## Erstellen eines DNS-Stempels

1. Öffnen Sie den [DNSCrypt Stamp Calculator](https://dnscrypt.info/stamps/) (DNSCrypt-Stempel-Rechner).

2. Je nach gewähltem Protokoll wählen Sie das entsprechende Protokoll aus dem Auswahlmenü (DoH, DoT oder DoQ).

3. Füllen Sie die erforderlichen Felder aus:
    - **IP-Adresse**: Geben Sie die IP-Adresse des DNS-Servers ein. Wenn Sie das DoT- oder DoQ-Protokoll verwenden, vergewissern Sie sich, dass Sie auch den entsprechenden Port angegeben haben.

    :::note

    Dieses Feld ist optional und sollte mit Vorsicht verwendet werden: Das Verwenden dieser Option kann das Internet in reinen IPv6-Netzen stören.


:::
    - **Hashes**: Geben Sie den SHA256-Digest eines der in der Validierungskette gefundenen TBS-Zertifikate ein. Wenn der von Ihnen verwendete DNS-Server einen vorgefertigten Hash bereitstellt, suchen und kopieren Sie ihn. Andernfalls können Sie es durch Befolgen der Anweisungen im Abschnitt [*Abrufen des Zertifikats-Hashes*](#obtaining-the-certificate-hash) erhalten.

    :::note

    Dieses Feld ist optional


:::

    - **Hostname**: Geben Sie den Hostnamen des DNS-Servers ein. Dieses Feld wird zur Überprüfung des Servernamens in den Protokollen DoT und DoQ verwendet.

    - Für **DoH**:
      - **Pfad**: Geben Sie den Pfad für die Ausführung von DoH-Anfragen an. Normalerweise ist dies `"/dns-query"`, aber Ihr Provider könnte einen anderen Pfad angegeben haben.

    -     Für **DoT und DoQ**:
      - Normalerweise gibt es in diesem Tool keine speziellen Felder für diese Protokolle. Vergewissern Sie sich nur, dass der in der Resolveradresse angegebene Port der richtige ist.

    - Im Abschnitt **Eigenschaften** können Sie die relevanten Eigenschaften überprüfen, wenn sie bekannt sind und auf Ihren DNS-Server zutreffen.

4. Ihr Stempel wird automatisch erstellt und im Feld **Stempel** angezeigt.

### Abrufen des Zertifikats-Hashes

Um das Feld **Zertifikat-Hashes des Servers** auszufüllen, können Sie den folgenden Befehl verwenden, wobei Sie `<IP_ADDRESS>`, `<PORT>` und `<SERVER_NAME>` durch die entsprechenden Werte für Ihren DNS-Server ersetzen:

```bash
echo | openssl s_client -connect <IP_ADDRESS>:<PORT> -servername <SERVER_NAME> 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256
```

:::caution

Das Ergebnis des Hash-Befehls kann sich im Laufe der Zeit ändern, wenn das Zertifikat des Servers aktualisiert wird. Wenn also Ihr DNS-Stempel plötzlich nicht mehr funktioniert, müssen Sie möglicherweise den Hash des Zertifikats neu berechnen und einen neuen Stempel erstellen. Die regelmäßige Aktualisierung Ihres DNS-Stempels trägt dazu bei, den sicheren Betrieb Ihres Secure DNS-Dienstes zu gewährleisten.

:::

## Verwendung des DNS-Stempels

Sie haben nun Ihren eigenen DNS-Stempel, den Sie zur Einrichtung von Secure DNS verwenden können. Dieser Stempel kann in AdGuard und AdGuard VPN eingegeben werden, um den Datenschutz und die Sicherheit im Internet zu verbessern.

## Beispiel für die Erstellung eines DNS-Stempels

Lassen Sie uns ein Beispiel für die Erstellung eines Stempels für AdGuard DNS mit DoT durchgehen:

1. Öffnen Sie den [DNSCrypt Stamp Calculator](https://dnscrypt.info/stamps/) (DNSCrypt-Stempel-Rechner).

2. Wählen Sie das Protokoll DNS-over-TLS (DoT).

3. Füllen Sie die folgenden Felder aus:

    - **IP-Adresse**: Geben Sie die IP-Adresse und den Port des DNS-Servers ein. In diesem Fall ist es `94.140.14.14:853`.

    - **Hostname**: Geben Sie den Hostnamen des DNS-Servers ein. In diesem Fall ist es `dns.adguard-dns.com`.

    - **Hashes**: Führen Sie folgenden Befehl aus

    ```bash
    echo | openssl s_client -connect 94.140.14.14:853 -servername dns.adguard-dns.com 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256
    ```

    Das Ergebnis ist `1ebea9685d57a3063c427ac4f0983f34e73c129b06e7e7705640cacd40c371c8` Fügen Sie diesen SHA256-Hash des Serverzertifikats in das Feld ein.

4. Lassen Sie den Abschnitt Eigenschaften leer.

5. Ihr Stempel wird automatisch erstellt und im Feld **Stempel** angezeigt.
