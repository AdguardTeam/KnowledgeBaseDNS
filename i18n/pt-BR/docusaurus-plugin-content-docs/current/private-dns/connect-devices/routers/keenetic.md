---
title: Keenetic
sidebar_position: 5
---

Keenetic routers are known for their stability and flexible configurations, and are easy to set up, allowing you to easily install encrypted Private AdGuard DNS on your device.

## Configuração do DNS-over-HTTPS

1. Abra o painel de administração do roteador. It can be accessed at my.keenetic.net, the IP address of your router, or `192.168.1.1`.
2. Press the menu button at the bottom of the screen and select _Management_.
3. Open _System settings_.
4. Press _Component options_ → _System component options_.
5. In _Utilities and services_, select DNS-over-HTTPS proxy and install it.
6. Head to _Menu_ → _Network rules_ → _Internet safety_.
7. Navigate to DNS-over-HTTPS servers and click _Add DNS-over-HTTPS server_.
8. Enter the URL of the private AdGuard DNS server in the `https://d.adguard-dns.com/dns-query/{Your_Device_ID}` field.
9. Clique em Salvar\*.

## Configuração do DNS-over-TLS

1. Abra o painel de administração do roteador. It can be accessed at my.keenetic.net, the IP address of your router, or `192.168.1.1`.
2. Press the menu button at the bottom of the screen and select _Management_.
3. Open _System settings_.
4. Press _Component options_ → _System component options_.
5. In _Utilities and services_, select DNS-over-HTTPS proxy and install it.
6. Head to _Menu_ → _Network rules_ → _Internet safety_.
7. Navigate to DNS-over-HTTPS servers and click _Add DNS-over-HTTPS server_.
8. Enter the URL of the private AdGuard DNS server in the `tls://*********.d.adguard-dns.com` field.
9. Clique em Salvar\*.

## Use o painel de controle do seu roteador

Use estas instruções se o seu roteador Keenetic não oferece suporte à configuração de DNS-over-HTTPS ou DNS-over-TLS:

1. Abra o painel de administração do roteador. Pode ser acessado em `192.168.1.1` ou `192.168.0.1`.
2. Digite o nome de usuário do administrador (geralmente, é admin) e a senha do roteador.
3. Abrir _Internet_ ou _Rede Doméstica_.
4. Selecione _WAN_ ou _Internet_.
5. Selecione _DNS_ ou _Configurações de DNS_.
6. Escolha _Manual DNS_. Selecione _Usar estes servidores DNS_ ou _Especificar servidor DNS manualmente_ e insira os seguintes endereços de servidor DNS:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
7. Salve as configurações.
8. Vincule seu IP (ou seu IP dedicado, caso tenha uma assinatura Equipe).

- [IPs dedicados](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IPs vinculados](/private-dns/connect-devices/other-options/linked-ip.md)
