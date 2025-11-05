---
title: OpenWRT
sidebar_position: 7
---

Os roteadores OpenWRT utilizam um sistema operacional de código aberto baseado em Linux que fornece a flexibilidade para a configuração de roteadores e gateways de acordo com as preferências do usuário. Os desenvolvedores se preocuparam em adicionar suporte para servidores DNS criptografados, permitindo que você faça a configuração do AdGuard DNS Privado no seu dispositivo.

## Configuração do DNS-over-HTTPS

- **Instruções de linha de comando**. Instale os pacotes necessários. A criptografia de DNS deve ser habilitada automaticamente.

  ```# Install packages
  1. opkg update
  2. opkg install https-dns-proxy

  ```
- **Interface da Web**. Se você deseja gerenciar as configurações usando a interface da Web, instale os pacotes necessários.

  ```# Install packages
  1. opkg update
  2. opkg install luci-app-https-dns-proxy
  3. /etc/init.d/rpcd restart
  ```

Navegue até _LuCI_ → _Serviços_ → _Proxy DNS HTTPS_ para configurar o https-dns-proxy.

- **Configure o provedor de Dns-over-Https**. https-dns-proxy está configurado com o DNS do Google e o DNS da Cloudflare por padrão. Você precisa alterá-lo para o DNS-over-HTTPS do AdGuard. Especifique vários resolvedores de Dns para melhorar a tolerância a falhas.

  ```# Configure DoH provider
  1. while uci -q delete https-dns-proxy.@https-dns-proxy[0]; do :; done
  2. uci set https-dns-proxy.dns="https-dns-proxy"
  3. uci set https-dns-proxy.dns.bootstrap_dns="94.140.14.49,94.140.14.59"
  4. uci set https-dns-proxy.dns.resolver_url="https://d.adguard-dns.com/dns-query/{Your_Private_Server_ID}"
  5. uci set https-dns-proxy.dns.listen_addr="127.0.0.1"
  6. uci set https-dns-proxy.dns.listen_port="5053"
  7. uci commit https-dns-proxy
  8. /etc/init.d/https-dns-proxy restart
  ```

## Configuração do DNS-over-TLS

- **Instruções de linha de comando**. [Desative](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#disabling_dns_role) o papel do DNS Dnsmasq ou remova-o completamente opcionalmente [substituindo](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#replacing_dnsmasq_with_odhcpd_and_unbound) seu papel DHCP pelo odhcpd.

  ```# Install packages
  1. opkg update
  2. opkg install unbound-daemon ca-certificates
  ```

Os clientes LAN e o sistema local devem usar o Unbound como um Resolvedor de DNS primário, supondo que o Dnsmasq esteja desativado.

- **Interface da Web**. Se você deseja gerenciar as configurações usando a interface da Web, instale os pacotes necessários.

  ```# Install packages
  1. opkg update
  2. opkg install luci-app-unbound ca-certificates
  3. /etc/init.d/rpcd restart
  ```

Navegue até _LuCI_ → _Serviços_ → _DNS Recursivo_ para configurar o Unbound.

- **Configuração do AdGuard DNS-over-TLS**.

  ```1. uci add unbound zone
  2. uci set unbound.@zone[-1].enabled="1"
  3. uci set unbound.@zone[-1].fallback="0"
  4. uci set unbound.@zone[-1].zone_type="forward_zone"
  5. uci add_list unbound.@zone[-1].zone_name="."
  6. uci set unbound.@zone[-1].tls_upstream="1"
  7. uci set unbound.@zone[-1].tls_index="{Your_Private_Server_ID}.d.adguard-dns.com"
  8. uci add_list unbound.@zone[-1].server="94.140.14.49"
  9. uci add_list unbound.@zone[-1].server="94.140.14.59"
  10. uci add_list unbound.@zone[-1].server="2a10:50c0::ded:ff"
  11. uci add_list unbound.@zone[-1].server="2a10:50c0::dad:ff"
  12. uci commit unbound
  13. /etc/init.d/unbound restart
  ```

## Use o painel de controle do seu roteador

Use estas instruções se o seu roteador Keenetic não oferece suporte à configuração de DNS-over-HTTPS ou DNS-over-TLS:

1. Abra o painel de administração do roteador. Pode ser acessado em `192.168.1.1` ou `192.168.0.1`.
2. Digite o nome de usuário do administrador (geralmente, é admin) e a senha do roteador.
3. Abra _Rede_ → _Interfaces_.
4. Selecione sua rede Wi-Fi ou conexão com fio.
5. Role para baixo até endereço IPv4 ou endereço IPv6, dependendo da versão IP que você deseja configurar.
6. Em _Usar servidores DNS personalizados_, digite os endereços IP dos servidores DNS que você deseja usar. Você pode inserir vários servidores DNS, separados por espaços ou vírgulas:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
7. Se quiser, você pode ativar o encaminhamento de DNS se quiser que o roteador atue como um encaminhador de DNS para dispositivos em sua rede.
8. Salve as configurações.
9. Vincule seu IP (ou seu IP dedicado, caso tenha uma assinatura Equipe).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
