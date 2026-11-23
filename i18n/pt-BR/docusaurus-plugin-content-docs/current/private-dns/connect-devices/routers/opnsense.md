---
title: OPNsense
sidebar_position: 8
---

OPNsense firmware is often used to configure wireless access points, DHCP servers, DNS servers, allowing you to configure AdGuard DNS directly on the device.

## Use o painel de controle do seu roteador

Use these instructions if your OPNsense router does not support DNS-over-HTTPS or DNS-over-TLS configuration:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Digite o nome de usuário do administrador (geralmente, é admin) e a senha do roteador.
3. Clique em _Serviços_ no menu superior e selecione _Servidor DHCP_ no menu suspenso.
4. Na página _Servidor DHCP_, selecione a interface para a qual deseja definir as configurações de DNS (por exemplo, LAN, WLAN).
5. Role para baixo até _Servidores DNS_.
6. Escolha _Manual DNS_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
7. Salve as configurações.
8. Você também tem a opção de habilitar DNSSEC para maior segurança.
9. Vincule seu IP (ou seu IP dedicado, caso tenha uma assinatura Equipe).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
