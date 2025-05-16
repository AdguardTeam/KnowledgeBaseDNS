---
title: UniFi
sidebar_position: 10
---

The UiFi router, commonly known as the Ubiquiti UniFi series, has a number of advantages that make it particularly suitable for home, business, and enterprise environments.

The newer UniFi firmware recently added support for DNS-over-HTTPS. UniFi refers to this feature as _Encrypted DNS_.

## Configuração do DNS-over-HTTPS

Follow these instructions if your UniFi router supports DNS-over-HTTPS.

UiFi routers use a DNS Stamp URL to specify the DNS-over-HTTPS URL. This URL must be calculated using your private DNS-over-HTTPS URL.

Obtain the DNS-over-HTTPS URL that is used to calculate the DNS Stamp URL.

1. Go to the AdGuard DNS Private Dashboard.
2. Proceed to _Encrypted DNS_ → _Custom_ and enter the following DNS server settings:
    - Device type: 'Router'
    - Device brand: 'Unifi'
    - Device name: '(use your Unifi device name)
3. Click _Next_.
4. Scroll to _Use DNS server addresses_ → _DNS-over-HTTPS_ and take note of the DNS-over-HTTPS URL (e.g., https://d.adguard-dns.com/dns-query/123456abc).

Generate a DNS Stamp using the [DNSCrypt DNS Stamp Calculator](https://dnscrypt.info/stamps/), and set it:

1. Protocol: DNS-over-HTTPS
2. Host name: d.adguard-dns.com
3. Path: /dns-query/123456abc (replace 123456abc with the value obtained from your AdGuard DNS Private Dashboard)
4. Untick
    - No filter
    - No logs
5. Copy the DNS Stamp URL (e.g., sdns://AgcAAAAAA…)

Turn on DNS-over-HTTPS in UniFi

1. Faça login no controller Ubiquiti UniFi.
2. Go to _Settings_ → _Security_.
3. Click _Protection_.
4. Proceed to _Encrypted DNS_ → _Custom_ and enter the following DNS server addresses.
    - Server Name: 'AdGuard DNS'
    - DNS Stamp: DNS Stamp URL copied from above
5. Clique em Salvar\*.

## Use o painel de controle do seu roteador

Use these instructions if your UniFi router does not support the DNS-over-HTTPS or DNS-over-TLS configuration:

1. Faça login no controller Ubiquiti UniFi.
2. Vá para _Configurações_ → _Redes_.
3. Clique em _Editar rede_ → _WAN_.
4. Prossiga para _Configurações Comuns_ → _Servidor DNS_ e insira os seguintes endereços de servidor DNS.
    - IPv4: `94.140.14.49` e `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
5. Clique em Salvar\*.
6. Retorne à _Rede_.
7. Escolha _Editar rede_ → _LAN_.
8. Encontre o _servidor de nomes DHCP_ e selecione _Manual_.
9. Insira o seu endereço de gateway no campo _DNS Server 1_. Como alternativa, você pode inserir os endereços de servidor do AdGuard DNS nos campos _Servidor DNS 1_ e _Servidor DNS 2_:
    - IPv4: `94.140.14.49` e `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
10. Salve as configurações.
11. Vincule seu IP (ou seu IP dedicado, caso tenha uma assinatura Equipe).

- [IPs dedicados](private-dns/connect-devices/other-options/dedicated-ip.md)
- [IPs vinculados](private-dns/connect-devices/other-options/linked-ip.md)
