- - -
title: How to create your own DNS stamp for Secure DNS sidebar_position: 4
- - -

This guide will show you how to create your own DNS stamp for Secure DNS. Secure DNS is a service that enhances your internet security and privacy by encrypting your DNS queries. This prevents your queries from being intercepted or manipulated by malicious actors.

Secure DNS usually uses `tls://`, `https://`, or `quic://` URLs. This is sufficient for most users and is the recommended way.

However, if you need additional security, like pre-resolved server IPs and certificate pinning by hash, you may generate your own DNS stamp.

## Úvod k razítkům DNS

DNS stamps are short strings that contain all the information needed to connect to a secure DNS server. They simplify the process of setting up Secure DNS as the user does not need to manually enter all this data.

DNS stamps allow you to customize Secure DNS settings beyond the usual URLs. In particular, they allow you to specify hard-coded server addresses, use certificate hashing, and so on. These features make DNS stamps a more robust and versatile option for configuring Secure DNS settings.

## Výběr protokolu

Types of Secure DNS include `DNS-over-HTTPS (DoH)`, `DNS-over-QUIC (DoQ)`, `DNS-over-TLS (DoT)`, and some others. Choosing one of these protocols depends on the context in which you'll be using them.

## Vytvoření razítka DNS

1. Otevřete [DNSCrypt Stamp Calculator](https://dnscrypt.info/stamps/).

2. V závislosti na zvoleném protokolu vyberte příslušný protokol z rozbalovací nabídky (DoH, DoT nebo DoQ).

3. Vyplňte potřebná pole:
    - **IP adresa**: Zadejte IP adresu serveru DNS. Pokud používáte protokol DoT nebo DoQ, ujistěte se, že jste zadali také příslušný port.

    :::note

    Toto pole je nepovinné a mělo by být použito s opatrností: použití této možnosti může narušit internet v sítích využívajících pouze protokol IPv6.


:::
    - **Hash**: Zadejte SHA256 přehled jednoho z certifikátů TBS nalezených v ověřovacím řetězci. Pokud DNS server, který používáte, poskytuje hotový hash, vyhledejte jej a zkopírujte. V opačném případě jej můžete získat podle pokynů v části [*Získání hashové hodnoty certifikátu*](#obtaining-the-certificate-hash).

    :::note

    Toto pole je nepovinné


:::

    - **Název hostitele**: Zadejte název hostitele DNS serveru. Toto pole se používá k ověření názvu serveru v protokolech DoT a DoQ.

    - Pro **DoH**:
      - **Cesta**: Zadejte cestu k provádění požadavků DoH. Obvykle je to `"/dns-query"`, ale váš poskytovatel může poskytnout jinou cestu.

    -     Pro **DoT a DoQ**:
      - V tomto nástroji obvykle nejsou pro tyto protokoly žádná specifická pole. Jen se ujistěte, že port zadaný v adrese řešitele je správný.

    - V části **Vlastnosti** můžete zkontrolovat příslušné vlastnosti, pokud jsou známé a použitelné pro váš DNS server.

4. Vaše razítko se automaticky vygeneruje a zobrazí se v poli **Razítko**.

### Získání hash certifikátu

To fill in the **Hashes of the server's certificate** field, you can use the following command, replacing `<IP_ADDRESS>`, `<PORT>`, and `<SERVER_NAME>` with the corresponding values for your DNS server:

```bash
echo | openssl s_client -connect <IP_ADDRESS>:<PORT> -servername <SERVER_NAME> 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256
```

:::caution

The result of the hash command may change over time as the server's certificate is updated. Therefore, if your DNS stamp suddenly stops working, you may need to recalculate the hash of the certificate and generate a new stamp. Regularly updating your DNS stamp will help ensure the continued secure operation of your Secure DNS service.

:::

## Použití razítka DNS

You now have your own DNS stamp that you can use to set up Secure DNS. This stamp can be entered into AdGuard and AdGuard VPN for enhanced internet privacy and security.

## Příklad vytvoření razítka DNS

Let's go through an example of creating a stamp for AdGuard DNS using DoT:

1. Otevřete [DNSCrypt Stamp Calculator](https://dnscrypt.info/stamps/).

2. Vyberte protokol DNS-over-TLS (DoT).

3. Vyplňte následující pole:

    - **IP adresa**: Zadejte IP adresu a port DNS serveru. V tomto případě je to `94.140.14.14:853`.

    - **Název hostitele**: Zadejte název hostitele DNS serveru. V tomto případě je to `dns.adguard-dns.com`.

    - **Hash**: Proveďte příkaz

    ```bash
    echo | openssl s_client -connect 94.140.14.14:853 -servername dns.adguard-dns.com 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256
    ```

    Výsledek je `1ebea9685d57a3063c427ac4f0983f34e73c129b06e7e7705640cacd40c371c8` Tento hash SHA256 certifikátu serveru vložte do pole.

4. Sekci Vlastnosti ponechte prázdnou.

5. Vaše razítko se automaticky vygeneruje a zobrazí se v poli **Razítko**.
