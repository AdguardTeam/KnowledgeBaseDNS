---
title: Instruções universais
sidebar_position: 2
---

Aqui estão algumas instruções gerais para a configuração do AdGuard DNS Privado em roteadores. You can refer to this guide if you can’t find your specific router in the main list. Por favor, note que os detalhes da configuração fornecidos aqui são aproximados e podem diferir das configurações do seu modelo específico.

## Use o painel de controle do seu roteador

1. Abra as preferências do seu roteador. Normalmente, você pode acessá-los pelo seu navegador. Dependendo do modelo do seu roteador, tente inserir um dos seguintes endereços:
    - Roteadores Linksys e Asus geralmente usam: [http://192.168.1.1](http://192.168.1.1/)
    - Roteadores Netgear geralmente usam: [http://192.168.0.1](http://192.168.0.1/) ou [http://192.168.1.1](http://192.168.1.1/) Roteadores D-Link geralmente usam [http://192.168.0.1](http://192.168.0.1/)
    - Os roteadores Ubiquiti geralmente usam: [http://unifi.ubnt.com](http://unifi.ubnt.com/)

2. Enter the router’s password.

    :::note Importante

    Se a senha for desconhecida, você pode frequentemente redefini-la pressionando um botão no roteador; isso também redefinirá o roteador para as configurações de fábrica. Alguns modelos têm um aplicativo de gerenciamento dedicado, que já deve estar instalado no seu computador.

    :::

3. Find where DNS settings are located in the router’s admin console. Change the listed DNS addresses to the following addresses:
    - IPv4: `94.140.14.49` e `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`

4. Salve as configurações.

5. Vincule seu IP (ou seu IP dedicado, caso tenha uma assinatura Equipe).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
