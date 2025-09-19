---
title: Steam Deck
sidebar_position: 5
---

Os consoles de jogos não oferecem suporte a DNS criptografado, mas são ótimos para configurar o AdGuard DNS Público ou o AdGuard DNS Privado via um Endereço de IP vinculado.

É provável que o seu roteador ofereça suporte ao uso de servidores DNS criptografados, então você pode configurar o Private AdGuard DNS nele e conectar seu console de jogos sempre que precisar.

[Como configurar seu roteador](/private-dns/connect-devices/routers/routers.md)

## Conectar o AdGuard DNS

Configure o seu console de jogos para usar um servidor público AdGuard DNS ou configure-o via IP vinculado:

1. Abra as configurações do Steam Deck clicando no ícone de engrenagem no canto superior direito da tela.
2. Clique em _Rede_.
3. Clique no ícone de engrenagem ao lado da conexão de rede que você deseja configurar.
4. Select IPv4 or IPv6, depending on the type of network you’re using.
5. Selecione _Somente endereços Automático (DHCP)_ ou _Automático (DHCP)_.
6. No campo _Servidor DNS_, insira um dos seguintes endereços de servidor DNS:
   - `94.140.14.49`
   - `94.140.14.59`
7. Salve as alterações.

Seria preferível usar o IP vinculado (ou o IP dedicado se você tiver uma assinatura Equipe):

- [IPs dedicados](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IPs vinculados](/private-dns/connect-devices/other-options/linked-ip.md)
