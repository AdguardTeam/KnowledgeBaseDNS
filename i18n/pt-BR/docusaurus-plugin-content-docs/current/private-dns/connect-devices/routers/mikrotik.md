---
title: MikroTik
sidebar_position: 6
---

MikroTik routers use the open-source RouterOS operating system, which provides routing, wireless networking, and firewall services for home and small office networks.

## Configuração do DNS-over-HTTPS

1. Acesse seu roteador MikroTik:
    - Abra seu navegador e acesse o endereço de IP do seu roteador (geralmente `192.168.88.1`)
    - Alternativamente, você pode usar o Winbox para conectar-se ao seu roteador MikroTik
    - Digite seu nome de usuário e senha de administrador
2. Importe o certificado root:
    - Baixe o pacote mais recente de certificados root confiáveis: [https://curl.se/docs/caextract.html](https://curl.se/docs/caextract.html)
    - Navegar para _Arquivos_. Clique em _Upload_ e selecione o pacote de certificado cacert.pem baixado
    - Vá para _Sistema_ → _Certificados_ → _Importação_
    - No campo _Nome do arquivo_, escolha o arquivo de certificado carregado
    - Clique em _Importar_
3. Configuração do DNS-over-HTTPS:
    - Vá para _IP_ → _DNS_
    - Na seção _Servidores_, adicione os seguintes servidores DNS do AdGuard:
        - `94.140.14.49`
        - `94.140.14.59`
    - Defina _Permitir solicitações remotas_ para _Sim_ (isso é crucial para o funcionamento do DNS-over-HTTPS)
    - In the _Use DoH server_ field, enter the URL of the Private AdGuard DNS server: `https://d.adguard-dns.com/dns-query/*******`
    - Clique em _OK_
4. Crie registros DNS estáticos:
    - Nas _Configurações de DNS_, clique em _Estático_
    - Clique em _Adicionar novo_
    - Set _Name_ to `d.adguard-dns.com`
    - Set _Type_ to `A`
    - Defina o _Endereço_ como `94.140.14.49`
    - Set _TTL_ to `1d 00:00:00`
    - Repita o processo para criar uma entrada idêntica, mas com _Address_ definido como `94.140.14.59`
5. Desative o Peer DNS no DHCP Client:
    - Vá para _IP_ → _DHCP Client_
    - Clique duas vezes no cliente usado para sua conexão de internet (geralmente na interface WAN)
    - Desmarque _Usar Peer DNS_
    - Clique em _OK_
6. Test and verify:
    - You might need to reboot your MikroTik router for all changes to take effect
    - Clear your browser's DNS cache. You can use a tool like [https://www.dnsleaktest.com](https://www.dnsleaktest.com/) to check if your DNS requests are now routed through AdGuard

## My router does not support DNS-over-HTTPS

Use these instructions if your MikroTik router does not support DNS-over-HTTPS configuration:

1. Acesse seu roteador MikroTik:
    - Abra seu navegador e acesse o endereço de IP do seu roteador (geralmente `192.168.88.1`)
    - Alternativamente, você pode usar o Winbox para conectar-se ao seu roteador MikroTik
    - Digite seu nome de usuário e senha de administrador
2. Configure Plain DNS:
    - Go to _IP_ → _DNS_
    - In the _Servers_ section, add the following AdGuard DNS servers:
        - IPv4: `94.140.14.49` e `94.140.14.59`
        - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
        - Dedicated IPv6: Private AdGuard DNS supports dedicated IPv6 addresses. To find them, open the Dashboard, click _Settings_ next to your device → _Plain DNS server addresses_ → _Dedicated IPv6 addresses_.
    - Click _OK_
3. Desative o Peer DNS no DHCP Client:
    - Go to _IP_ → _DHCP Client_
    - Clique duas vezes no cliente usado para sua conexão de internet (geralmente na interface WAN)
    - Uncheck _Use Peer DNS_
    - Click _OK_
