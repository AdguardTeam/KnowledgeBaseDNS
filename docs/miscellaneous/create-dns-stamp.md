# How to Create Your Own DNS Stamp for Secure DNS

This guide will help you learn how to create your own DNS stamp for Secure DNS. Secure DNS is a service that enhances your internet security and privacy by encrypting your DNS queries. This prevents the possibility of your queries being intercepted or manipulated by malicious actors.

For Secure DNS, `tls://`, `https://` or `quic://` URLs are normally used and it is enough for most users, and is recommended way.

However, if you need additional security, like pre-resolved server IPs and certificate pinning by hash, you may generate your own DNS stamp. This guide tells you how to do it.

## Introduction to DNS Stamps

DNS Stamps are short strings that include all the information needed to connect to a secure DNS server. They simplify the process of setting up Secure DNS as the user does not need to manually enter all this data. 

DNS stamps allow you to customize secure DNS settings beyond the usual URLs. In particular, they allow you to specify hard-coded server addresses, use certificate hashing, and so on. These features make DNS stamps a more robust and versatile option for configuring secure DNS settings.

## Choosing the Protocol

Types of secure DNS include `DNS-over-HTTPS (DoH)`, `DNS-over-QUIC (DoQ)`, and `DNS-over-TLS (DoT)` and some others. Choosing one of these protocols depends on your preferences and usage conditions.

## Creating a DNS Stamp

1. Open the [DNSCrypt Stamp Calculator](https://dnscrypt.info/stamps/).

2. Depending on the chosen protocol, select the corresponding protocol from the dropdown menu (DoH, DoT, or DoQ).

3. Fill in the necessary fields:
    - **IP address**: 
    **Note**: This field is optional and should be used with caution: using this option can break the Internet on IPv6-only networks.
    Enter the DNS server's IP address. If you are using the DoT or DoQ protocol, ensure you have also specified the corresponding port.
    - **Hashes**: 
    **Note**: The field is optional
    Enter the SHA256 digest of one of the TBS certificate found in the validation chain. If the DNS server you are using provides a ready-made hash, find and copy it. Otherwise, you can obtain it by following the instructions in the ["Obtaining the Certificate Hash"](###obtaining-the-certificate-hash) section.
    - **Host name**: Enter the DNS server's hostname. This field is used for server name verification in DoT and DoQ protocols.
    - For **DoH**:
      - **Path**: Enter the path for performing DoH requests. This is usually `"/dns-query"`, but your provider may provide a different path.
    - For **DoT and DoQ**:
      - There are usually no specific fields for these protocols in this tool. Just make sure the port specified in the resolver address is the correct port.
    - In the "Properties" section, you can check the relevant properties if they are known and applicable to your DNS server.

4. Your stamp will be automatically generated and you will see it in the "Stamp" field.

### Obtaining the Certificate Hash

To fill in the "Hashes of the server's certificate" field, you can use the following command, replacing `<IP_ADDRESS>`, `<PORT>`, and `<SERVER_NAME>` with the corresponding values for your DNS server:

```bash
echo | openssl s_client -connect <IP_ADDRESS>:<PORT> -servername <SERVER_NAME> 2>/dev/null | openssl x509 -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256
```

**NOTE**: Keep in mind that the result of the hash calculation command can change over time as the server's certificate may be updated. Therefore, if your DNS stamp suddenly stops working, you may need to recalculate the hash of the certificate and generate a new stamp. Regularly updating your DNS stamp will help ensure the continued secure operation of your Secure DNS service.

## Using the DNS Stamp

You now have your own DNS stamp, which you can use to set up Secure DNS in your internet connection. This stamp can be entered into AdGuard and AdGuard VPN for enhanced internet privacy and security.

## Example of Creating a DNS Stamp

Let's walk through an example of creating a stamp for AdGuard DNS using DoT:

1. Open the DNSCrypt stamp generator web page at https://dnscrypt.info/stamps/.

2. Select the "DNS-over-TLS (DoT)" protocol.

3. Fill in the following fields:

    - **IP address**: Enter the DNS server's IP address and port. In this case, it's `94.140.14.14:853`.
    
    - **Host name**: Enter the host name of the DNS server. In this case, it's `dns.adguard-dns.com`.
    
    - **Hashes**: 
    Execute the command 
    ```bash
    echo | openssl s_client -connect 94.140.14.14:853 -servername dns.adguard-dns.com 2>/dev/null | openssl x509 -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256
    ```
    The result is `a54670fda8ed13bded0a9515f35d0a2bed937e100aa6282703cb3b87282055ec`
    Paste this SHA256 hash of the server's certificate into the field.

4. Leave the Properties section blank.

5. Your stamp will be automatically generated and you will see it in the "Stamp" field.
