---
title: Keenetic
sidebar_position: 5
---

Os roteadores Keenetic são conhecidos pela sua estabilidade e configurações flexíveis, e são fáceis de configurar, permitindo que você instale facilmente o AdGuard DNS privado criptografado no seu dispositivo.

## Configuração do DNS-over-HTTPS

1. Abra o painel de administração do roteador. Ele pode ser acessado em my.keenetic.net, no Endereço de IP do seu roteador, ou `192.168.1.1`.
2. Pressione o botão de menu na parte inferior da tela e selecione _Gerenciamento_.
3. Abra _Configurações do sistema_.
4. Pressione _Opções de componentes_ → _Opções de componentes do sistema_.
5. Em _Utilitários e serviços_, selecione proxy DNS-over-HTTPS e instale-o.
6. Vá para _Menu_ → _Regras de rede_ → _Segurança na Internet_.
7. Navegue até servidores DNS-over-HTTPS e clique em _Adicionar servidor DNS-over-HTTPS_.
8. Insira a URL do servidor DNS privado AdGuard no campo `https://d.adguard-dns.com/dns-query/{Your_Device_ID}`.
9. Clique em Salvar\*.

## Configuração do DNS-over-TLS

1. Abra o painel de administração do roteador. Ele pode ser acessado em my.keenetic.net, no Endereço de IP do seu roteador, ou `192.168.1.1`.
2. Pressione o botão de menu na parte inferior da tela e selecione _Gerenciamento_.
3. Abra _Configurações do sistema_.
4. Pressione _Opções de componentes_ → _Opções de componentes do sistema_.
5. Em _Utilitários e serviços_, selecione proxy DNS-over-HTTPS e instale-o.
6. Vá para _Menu_ → _Regras de rede_ → _Segurança na Internet_.
7. Navegue até servidores DNS-over-HTTPS e clique em _Adicionar servidor DNS-over-HTTPS_.
8. Insira a URL do servidor DNS privado AdGuard no campo `tls://*********.d.adguard-dns.com`.
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
