---
title: Synology NAS
sidebar_position: 9
---

Os roteadores Synology NAS são incrivelmente fáceis de usar e podem ser combinados em uma única rede mesh. Você pode gerenciar sua rede remotamente a qualquer hora e em qualquer lugar. Você também pode configurar o AdGuard DNS diretamente no roteador.

## Use o painel de controle do seu roteador

Use estas instruções se o seu roteador Keenetic não oferece suporte à configuração de DNS-over-HTTPS ou DNS-over-TLS:

1. Abra o painel de administração do roteador. Pode ser acessado em `192.168.1.1` ou `192.168.0.1`.
2. Digite o nome de usuário do administrador (geralmente, é admin) e a senha do roteador.
3. Abra o _Painel de Controle_ ou _Rede_.
4. Selecione _Interface de rede_ ou _Configurações de rede_.
5. Selecione sua rede Wi-Fi ou conexão com fio.
6. Escolha _Manual DNS_. Selecione _Usar estes servidores DNS_ ou _Especificar servidor DNS manualmente_ e insira os seguintes endereços de servidor DNS:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
7. Salve as configurações.
8. Vincule seu IP (ou seu IP dedicado, caso tenha uma assinatura Equipe).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IPs vinculados](private-dns/connect-devices/other-options/linked-ip.md)
