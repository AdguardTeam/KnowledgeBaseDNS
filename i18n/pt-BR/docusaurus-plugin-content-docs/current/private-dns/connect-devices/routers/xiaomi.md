---
title: Xiaomi
sidebar_position: 11
---

Xiaomi routers have many advantages: a stable, strong signal, network security, robust performance, and smart management. Users can connect up to 64 devices to a local Wi-Fi network.

Infelizmente, ele não oferece suporte para DNS criptografado, mas é ótimo para configurar o AdGuard DNS via IP vinculado.

## Use o painel de controle do seu roteador

Use estas instruções se o seu roteador Keenetic não oferece suporte à configuração de DNS-over-HTTPS ou DNS-over-TLS:

1. Abra o painel de administração do roteador. Pode ser acessado em `192.168.31.1` ou no endereço de IP do seu roteador.
2. Digite o nome de usuário do administrador (geralmente, é admin) e a senha do roteador.
3. Abra Configurações avançadas ou Avançado, dependendo do modelo do seu roteador.
4. Abra _Rede_ ou _Internet_ e procure DNS ou Configurações de DNS.
5. Escolha _Manual DNS_. Selecione _Usar estes servidores DNS_ ou _Especificar servidor DNS manualmente_ e insira os seguintes endereços de servidor DNS:
    - IPv4: `94.140.14.49` e `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
6. Salve as configurações.
7. Vincule seu IP (ou seu IP dedicado, caso tenha uma assinatura Equipe).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
