---
title: Asus
sidebar_position: 3
---

## Configuração do DNS-over-TLS

Estas são instruções gerais para a configuração do AdGuard DNS Privado em roteadores Asus.

As informações de configuração nestas instruções são retiradas de um modelo específico de roteador, portanto podem diferir da interface de um dispositivo individual.

If necessary: Configure DNS-over-TLS on Asus, install the [Asus Merlin firmware](https://www.asuswrt-merlin.net/download) suitable for your router version on your computer.

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

Use these instructions if your Asus router does not support DNS-over-TLS configuration:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Digite o nome de usuário do administrador (geralmente, é admin) e a senha do roteador.
3. Open _Advanced Settings_ or _Advanced_.
4. Select _WAN_ or _Internet_.
5. Open _DNS Settings_ or _DNS_.
6. Choose _Manual Setting_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
7. Salve as configurações.
8. Vincule seu IP (ou seu IP dedicado, caso tenha uma assinatura Equipe).
   - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
   - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
