- - -
title: How to create your own DNS stamp for Secure DNS sidebar_position: 4
- - -

This guide will show you how to create your own DNS stamp for Secure DNS. Secure DNS is a service that enhances your internet security and privacy by encrypting your DNS queries. This prevents your queries from being intercepted or manipulated by malicious actors.

Secure DNS usually uses `tls://`, `https://`, or `quic://` URLs. This is sufficient for most users and is the recommended way.

However, if you need additional security, like pre-resolved server IPs and certificate pinning by hash, you may generate your own DNS stamp.

## Einführung in DNS-Stempel

DNS stamps are short strings that contain all the information needed to connect to a secure DNS server. They simplify the process of setting up Secure DNS as the user does not need to manually enter all this data.

DNS stamps allow you to customize Secure DNS settings beyond the usual URLs. In particular, they allow you to specify hard-coded server addresses, use certificate hashing, and so on. These features make DNS stamps a more robust and versatile option for configuring Secure DNS settings.

## Auswahl des Protokolls

Types of Secure DNS include `DNS-over-HTTPS (DoH)`, `DNS-over-QUIC (DoQ)`, `DNS-over-TLS (DoT)`, and some others. Choosing one of these protocols depends on the context in which you'll be using them.

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

To fill in the **Hashes of the server's certificate** field, you can use the following command, replacing `<IP_ADDRESS>`, `<PORT>`, and `<SERVER_NAME>` with the corresponding values for your DNS server:

```bash
echo | openssl s_client -connect <IP_ADDRESS>:<PORT> -servername <SERVER_NAME> 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256
```

:::caution

The result of the hash command may change over time as the server's certificate is updated. Therefore, if your DNS stamp suddenly stops working, you may need to recalculate the hash of the certificate and generate a new stamp. Regularly updating your DNS stamp will help ensure the continued secure operation of your Secure DNS service.

:::

## Verwendung des DNS-Stempels

You now have your own DNS stamp that you can use to set up Secure DNS. This stamp can be entered into AdGuard and AdGuard VPN for enhanced internet privacy and security.

## Beispiel für die Erstellung eines DNS-Stempels

Let's go through an example of creating a stamp for AdGuard DNS using DoT:

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
