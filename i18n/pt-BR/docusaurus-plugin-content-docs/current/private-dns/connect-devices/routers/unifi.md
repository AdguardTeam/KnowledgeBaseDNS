---
title: UniFi
sidebar_position: 10
---

O roteador UiFi (comumente conhecido como a série UniFi da Ubiquiti) possui uma série de vantagens que o tornam particularmente adequado para ambientes domésticos, empresariais e corporativos. Infelizmente, ele não oferece suporte para DNS criptografado, mas é ótimo para configurar o AdGuard DNS via IP vinculado.

## Use o painel de controle do seu roteador

Use estas instruções se o seu roteador Keenetic não oferece suporte à configuração de DNS-over-HTTPS ou DNS-over-TLS:

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
