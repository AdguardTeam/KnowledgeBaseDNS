- - -
title: How to create your own DNS stamp for Secure DNS sidebar_position: 4
- - -

This guide will show you how to create your own DNS stamp for Secure DNS. Secure DNS is a service that enhances your internet security and privacy by encrypting your DNS queries. This prevents your queries from being intercepted or manipulated by malicious actors.

Secure DNS usually uses `tls://`, `https://`, or `quic://` URLs. This is sufficient for most users and is the recommended way.

However, if you need additional security, like pre-resolved server IPs and certificate pinning by hash, you may generate your own DNS stamp.

## Introduktion til DNS-stempler

DNS stamps are short strings that contain all the information needed to connect to a secure DNS server. They simplify the process of setting up Secure DNS as the user does not need to manually enter all this data.

DNS stamps allow you to customize Secure DNS settings beyond the usual URLs. In particular, they allow you to specify hard-coded server addresses, use certificate hashing, and so on. These features make DNS stamps a more robust and versatile option for configuring Secure DNS settings.

## Valg af protokol

Types of Secure DNS include `DNS-over-HTTPS (DoH)`, `DNS-over-QUIC (DoQ)`, `DNS-over-TLS (DoT)`, and some others. Choosing one of these protocols depends on the context in which you'll be using them.

## Oprettelse af et DNS-stempel

1. Åbn [DNSCrypt Stamp Calculator](https://dnscrypt.info/stamps/).

2. Afhængigt af den valgte protokol, vælg den korresponderende protokol fra rullemenuen (DoH, DoT eller DoQ).

3. Udfyld de nødvendige felter:
    - **IP-adresse**: Angiv DNS-serverens IP-adresse. Bruges DoT- eller DoQ-protokollen, så sørg for, at den relevante port ligeledes er angivet.

    :::note

    Dette felt er valgfrit og bør bruges med forsigtighed: Brug af denne indstilling kan afbryde internet på IPv6-netværk.


:::
    - **Hashes**: Angiv SHA256-sammendraget for et af de TBS-certifikater, der findes i valideringskæden. Leverer den anvendte DNS-server en færdig hash, så find og kopiér denne. Ellers kan den hentes ved at følge vejledningen i afsnittet [*Hentning af Certifikat Hash'en*](#obtaining-the-certificate-hash).

    :::note

    Dette felt er valgfrit


:::

    - **Værtsnavn**: Angiv DNS-serverens værtsnavn. Dette felt bruges til bekræftelse af servernavnet i DoT- og DoQ-protokoller.

    - For **DoH**:
      - **Sti**: Angiv stien til udførelse af DoH-forespørgsler. Dette er normalt `"/dns-query"`, men din udbyder kan bruge en anden sti.

    -     For **DoT og DoQ**:
      - Der er normalt ingen bestemte felter til disse protokoller i dette værktøj. Sørg blot for, at den i opløseradressen angivne port også er den korrekte port.

    - I afsnittet **Egenskaber** kan de relevante egenskaber markeres, såfremt de er kendte og relevante for DNS-serveren.

4. Dit stempel genereres automatisk og vil fremgå i feltet **Stamp**.

### Indhentning af certifikat-hash

To fill in the **Hashes of the server's certificate** field, you can use the following command, replacing `<IP_ADDRESS>`, `<PORT>`, and `<SERVER_NAME>` with the corresponding values for your DNS server:

```bash
echo | openssl s_client -connect <IP_ADDRESS>:<PORT> -servernavn <SERVER_NAME> 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256
```

:::caution

The result of the hash command may change over time as the server's certificate is updated. Therefore, if your DNS stamp suddenly stops working, you may need to recalculate the hash of the certificate and generate a new stamp. Regularly updating your DNS stamp will help ensure the continued secure operation of your Secure DNS service.

:::

## Brug af DNS-stemplet

You now have your own DNS stamp that you can use to set up Secure DNS. This stamp can be entered into AdGuard and AdGuard VPN for enhanced internet privacy and security.

## Eksempel på oprettelse af et DNS-stempel

Let's go through an example of creating a stamp for AdGuard DNS using DoT:

1. Åbn [DNSCrypt Stamp Calculator](https://dnscrypt.info/stamps/).

2. Vælg protokollen DNS-over-TLS (DoT).

3. Udfyld flg. felter:

    - **IP-adresse**: Angiv DNS-serverens IP-adresse og port. I dette eksempel `94.140.14.14:853`.

    - **Værtsnavn**: Angiv DNS-serverens værtsnavn. I dette eksempel `dns.adguard-dns.com`.

    - **Hashes**: Eksekvér kommandoen

    ```bash
    echo | openssl s_client -connect 94.140.14.14:853 -servername dns.adguard-dns.com 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256
    ```

    Resultatet er `1ebea9685d57a3063c427ac4f0983f34e73c129b06e7e7705640cacd40c371c8` Indsæt denne SHA256-hash af serverens certifikat i feltet.

4. Lad afsnittet Egenskaber stå tomt.

5. Dit stempel genereres automatisk og vil fremgå i feltet **Stamp**.
