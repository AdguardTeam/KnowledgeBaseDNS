---
title: OPNSense
sidebar_position: 8
---

O firmware do OPNSense é frequentemente utilizado para configurar pontos de acesso sem fio, servidores DHCP, servidores DNS, permitindo que você configure o AdGuard DNS diretamente no dispositivo.

## Use o painel de controle do seu roteador

Use estas instruções se o seu roteador Keenetic não oferece suporte à configuração de DNS-over-HTTPS ou DNS-over-TLS:

1. Abra o painel de administração do roteador. Pode ser acessado em `192.168.1.1` ou `192.168.0.1`.
2. Digite o nome de usuário do administrador (geralmente, é admin) e a senha do roteador.
3. Clique em _Serviços_ no menu superior e selecione _Servidor DHCP_ no menu suspenso.
4. Na página _Servidor DHCP_, selecione a interface para a qual deseja definir as configurações de DNS (por exemplo, LAN, WLAN).
5. Role para baixo até _Servidores DNS_.
6. Escolha _Manual DNS_. Selecione _Usar estes servidores DNS_ ou _Especificar servidor DNS manualmente_ e insira os seguintes endereços de servidor DNS:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
7. Salve as configurações.
8. Você também tem a opção de habilitar DNSSEC para maior segurança.
9. Vincule seu IP (ou seu IP dedicado, caso tenha uma assinatura Equipe).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
