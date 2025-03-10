---
title: Asus
sidebar_position: 3
---

## Configuração do DNS-over-TLS

Estas são instruções gerais para a configuração do AdGuard DNS Privado em roteadores Asus.

As informações de configuração nestas instruções são retiradas de um modelo específico de roteador, portanto podem diferir da interface de um dispositivo individual.

Se necessário: Para configurar o DNS-over-TLS no ASUS, instale o [firmware ASUS Merlin](https://www.asuswrt-merlin.net/download) adequado à versão do seu roteador no seu computador.

1. Efetue login no painel de administração do seu roteador Asus. Pode ser acessado via [http://router.asus.com](http://router.asus.com/), [http://192.168.1.1](http://192.168.1.1/), [http://192.168.0.1](http://192.168.0.1/), ou [http://192.168.2.1](http://192.168.2.1/).
2. Digite o nome de usuário do administrador (geralmente, é admin) e a senha do roteador.
3. Na barra lateral das _Configurações Avançadas_, navegue até a seção WAN.
4. Na seção _Configurações de DNS da WAN_, defina _Conectar ao servidor DNS automaticamente_ como _Não_.
5. Set _Forward local queries_, _Enable DNS Rebind protection_, and _Enable DNSSEC suppport_ to _No_.
6. Altere o protocolo de privacidade do DNS para DNS-over-TLS (DoT).
7. Certifique-se de que o _Perfil DNS-over-TLS_ está definido como _Estrito_.
8. Role para baixo até a seção _Lista de Servidores DNS-over-TLS_. No campo _Endereço_, insira um dos endereços abaixo:
    - `94.140.14.49` e `94.140.14.59`
9. Para _Porta TLS_, insira 853.
10. No campo _TLS Hostname_, insira o endereço do servidor Private AdGuard DNS:
    - `{Your_Device_ID}.d.adguard-dns.com`
11. Role até a parte inferior da página e clique em _Aplicar_.

## Use o painel de controle do seu roteador

1. Abra o painel de administração do roteador. Pode ser acessado em `192.168.1.1` ou `192.168.0.1`.
2. Digite o nome de usuário do administrador (geralmente, é admin) e a senha do roteador.
3. Abra _Configurações avançadas_ ou _Avançado_.
4. Selecione _WAN_ ou _Internet_.
5. Abra _Configurações de DNS_ ou _DNS_.
6. Choose _Manual Setting_. Selecione _Usar estes servidores DNS_ ou _Especificar servidor DNS manualmente_ e insira os seguintes endereços de servidor DNS:
    - IPv4: `94.140.14.49` e `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
7. Salve as configurações.
8. Vincule seu IP (ou seu IP dedicado, caso tenha uma assinatura Equipe).
    - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
