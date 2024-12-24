---
title: FritzBox
sidebar_position: 4
---

O FRITZ!Box oferece máxima flexibilidade para todos os dispositivos ao usar simultaneamente as bandas de frequência de 2,4 GHz e 5 GHz. Todos os dispositivos conectados ao FRITZ!Box estão totalmente protegidos contra ataques da Internet. A configuração desta marca de roteadores também permite configurar o DNS Privado AdGuard criptografado.

## Configuração do DNS-over-TLS

1. Abra o painel de administração do roteador. Ele pode ser acessado em fritz.box, no Endereço de IP do seu roteador, ou `192.168.178.1`.
2. Digite o nome de usuário do administrador (geralmente, é admin) e a senha do roteador.
3. Abrir _Internet_ ou _Rede Doméstica_.
4. Selecione _DNS_ ou _Configurações de DNS_.
5. Em DNS-over-TLS (DoT), marque _Usar DNS-over-TLS_, se for compatível com o seu provedor.
6. Selecione _Usar indicação de nome de servidor TLS personalizado (SNI)_ e digite o endereço do servidor DNS privado do AdGuard:  `{Your_Device_ID}.d.adguard-dns.com`.
7. Salve as configurações.

## Use o painel de controle do seu roteador

Use este guia se o seu roteador FritzBox não oferece suporte à configuração de DNS-over-TLS:

1. Abra o painel de administração do roteador. Pode ser acessado em `192.168.1.1` ou `192.168.0.1`.
2. Digite o nome de usuário do administrador (geralmente, é admin) e a senha do roteador.
3. Abrir _Internet_ ou _Rede Doméstica_.
4. Selecione _DNS_ ou _Configurações de DNS_.
5. Selecione _DNS manual_, depois _Usar estes servidores DNS_ ou _Especificar servidor DNS manualmente_ e insira os seguintes endereços de servidor DNS:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
6. Salve as configurações.
7. Vincule seu IP (ou seu IP dedicado, caso tenha uma assinatura Equipe).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
