- - -
title: How to create your own DNS stamp for Secure DNS

sidebar_position: 4
- - -

This guide will show you how to create your own DNS stamp for Secure DNS. Secure DNS is a service that enhances your internet security and privacy by encrypting your DNS queries. This prevents your queries from being intercepted or manipulated by malicious actors.

Secure DNS usually uses `tls://`, `https://`, or `quic://` URLs. This is sufficient for most users and is the recommended way.

However, if you need additional security, like pre-resolved server IPs and certificate pinning by hash, you may generate your own DNS stamp.

## Introduction to DNS stamps

DNS stamps are short strings that contain all the information needed to connect to a secure DNS server. They simplify the process of setting up Secure DNS as the user does not need to manually enter all this data.

DNS stamps allow you to customize Secure DNS settings beyond the usual URLs. In particular, they allow you to specify hard-coded server addresses, use certificate hashing, and so on. These features make DNS stamps a more robust and versatile option for configuring Secure DNS settings.

## Choosing the protocol

Types of Secure DNS include `DNS-over-HTTPS (DoH)`, `DNS-over-QUIC (DoQ)`, `DNS-over-TLS (DoT)`, and some others. Choosing one of these protocols depends on the context in which you'll be using them.

## Creating a DNS stamp

1. Open the [DNSCrypt Stamp Calculator](https://dnscrypt.info/stamps/).

2. Depending on the chosen protocol, select the corresponding protocol from the dropdown menu (DoH, DoT, or DoQ).

3. Fill in the necessary fields:
    - **IP address**: Enter the IP address of the DNS server. If you are using the DoT or DoQ protocol, make sure that you have specified the appropriate port as well.

    :::note

    This field is optional and should be used with caution: using this option may disrupt the Internet on IPv6-only networks.


:::
    - **Hashes**: Enter the SHA256 digest of one of the TBS certificates found in the validation chain. If the DNS server you are using provides a ready-made hash, find and copy it. Otherwise, you can obtain it by following the instructions in the [*Obtaining the Certificate Hash*](#obtaining-the-certificate-hash) section.

    :::note

    This field is optional


:::

    - **Host name**: Enter the host name of the DNS server. This field is used for server name verification in DoT and DoQ protocols.

    - For **DoH**:
      - **Path**: Enter the path for performing DoH requests. This is usually `"/dns-query"`, but your provider may provide a different path.

    -     For **DoT and DoQ**:
      - There are usually no specific fields for these protocols in this tool. Just make sure the port specified in the resolver address is the correct port.

    - In the **Properties** section, you can check the relevant properties if they are known and applicable to your DNS server.

4. Your stamp will be automatically generated and you will see it in the **Stamp** field.

### Obtaining the certificate hash

To fill in the **Hashes of the server's certificate** field, you can use the following command, replacing `<IP_ADDRESS>`, `<PORT>`, and `<SERVER_NAME>` with the corresponding values for your DNS server:

```bash
echo | openssl s_client -connect <IP_ADDRESS>:<PORT> -servername <SERVER_NAME> 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256
```

:::caution

The result of the hash command may change over time as the server's certificate is updated. Therefore, if your DNS stamp suddenly stops working, you may need to recalculate the hash of the certificate and generate a new stamp. Regularly updating your DNS stamp will help ensure the continued secure operation of your Secure DNS service.

:::

## Using the DNS stamp

You now have your own DNS stamp that you can use to set up Secure DNS. This stamp can be entered into AdGuard and AdGuard VPN for enhanced internet privacy and security.

## Example of creating a DNS stamp

Let's go through an example of creating a stamp for AdGuard DNS using DoT:

1. Open the [DNSCrypt Stamp Calculator](https://dnscrypt.info/stamps/).

2. Select the DNS-over-TLS (DoT) protocol.

3. Fill in the following fields:

    - **IP address**: Enter the IP address and port of the DNS server. In this case, it's `94.140.14.14:853`.

    - **Host name**: Enter the host name of the DNS server. In this case, it's `dns.adguard-dns.com`.

    - **Hashes**: Execute the command

    ```bash
    echo | openssl s_client -connect 94.140.14.14:853 -servername dns.adguard-dns.com 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256
    ```

    The result is `1ebea9685d57a3063c427ac4f0983f34e73c129b06e7e7705640cacd40c371c8` Paste this SHA256 hash of the server's certificate into the field.

4. Leave the Properties section blank.

5. Your stamp will be automatically generated and you will see it in the **Stamp** field.
