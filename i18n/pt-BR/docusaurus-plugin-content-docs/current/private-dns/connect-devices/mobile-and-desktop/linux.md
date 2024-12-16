---
title: Linux
sidebar_position: 6
---

Para conectar um dispositivo Linux ao AdGuard DNS, primeiro adicione-o à _Dashboard_:

1. Vá para o _painel_ e clique em _Conectar novo dispositivo_.
2. No menu suspenso _Tipo de dispositivo_, selecione Linux.
3. Nomeie o dispositivo.
   ![Conectando dispositivo \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/choose_linux.png)

## Usando o Cliente do AdGuard DNS

O Cliente do AdGuard DNS é uma utilidade de console multiplataforma que permite o uso de protocolos de DNS criptografados para acessar o AdGuard DNS.

Você pode saber mais sobre isso no [artigo relacionado](/dns-client/overview/).

## Usando o AdGuard VPN CLI

Você pode configurar o AdGuard DNS Privado usando a interface de linha de comando (CLI) do AdGuard VPN. Para começar a usar o AdGuard VPN CLI, você precisará usar o Terminal.

1. Instale o AdGuard VPN CLI seguindo [estas instruções](https://adguard-vpn.com/kb/adguard-vpn-for-linux/installation/).
2. Go to [Settings](https://adguard-vpn.com/kb/adguard-vpn-for-linux/settings/).
3. Para configurar um servidor DNS específico, use o comando: `adguardvpn-cli config set-dns <server_address>`, onde `<server_address>` é o endereço do seu servidor privado.
4. Ative as configurações de DNS inserindo `adguardvpn-cli config set-system-dns on`.

## Configure manualmente no Ubuntu (IP vinculado ou IP dedicado necessário)

1. Clique em _Sistema_ → _Preferências_ → _Conexões de rede_.
2. Selecione a aba _Sem fio_, depois escolha a rede à qual você está conectado.
3. Clique em _Editar_ → _IPv4_.
4. Altere os endereços DNS listados para os seguintes endereços:
   - `94.140.14.49`
   - `94.140.14.59`
5. Desligue o _Modo automático_.
6. Clique em _Aplicar_.
7. Vá para _IPv6_.
8. Altere os endereços DNS listados para os seguintes endereços:
   - `2a10:50c0:0:0:0:0:ded:ff`
   - `2a10:50c0:0:0:0:0:dad:ff`
9. Desligue o _Modo automático_.
10. Clique em _Aplicar_.
11. Vincule seu endereço de IP (ou seu IP dedicado, caso tenha uma assinatura Equipe):
    - [IPs dedicados](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [IPs vinculados](/private-dns/connect-devices/other-options/linked-ip.md)

## Configure manualmente no Debian (IP vinculado ou IP dedicado necessário)

1. Abra o Terminal.
2. Na linha de comando, digite: `su`.
3. Digite sua senha `admin`.
4. Na linha de comando, digite: `nano /etc/resolv.conf`.
5. Altere os endereços DNS listados para os seguintes:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
6. Pressione _Ctrl + O_ para salvar o documento.
7. Pressione _Enter_.
8. Pressione _Ctrl + X_ para salvar o documento.
9. Na linha de comando, digite: `/etc/init.d/networking restart`.
10. Pressione _Enter_.
11. Feche o Terminal.
12. Vincule seu endereço de IP (ou seu IP dedicado, caso tenha uma assinatura Equipe):
    - [IPs dedicados](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [IPs vinculados](/private-dns/connect-devices/other-options/linked-ip.md)

## Use dnsmasq

1. Instale dnsmasq usando os seguintes comandos:

   `sudo apt updatesudo`

   `apt install`

   `dnsmasqsudo nano /etc/dnsmasq.conf`

2. Use os seguintes comandos em dnsmasq.conf:

   `no-resolv`

   `bogus-priv`

   `strict-order`

   `server=94.140.14.49`

   `server=94.140.14.59`

   `port=5353`

   `add-cpe-id={Your_Device_ID}`

3. Reinicie o serviço dnsmasq:

   `sudo service dnsmasq restart`

Feito! Seu dispositivo foi conectado com sucesso ao AdGuard DNS.

:::note Importante

Se você receber uma notificação de que não está conectado ao AdGuard DNS, provavelmente a porta na qual dnsmasq está sendo executado está ocupada por outros serviços. Use [essas instruções](https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#bindinuse) para resolver o problema.

:::

## Usando DNS simples

Se você preferir não usar software extra para configuração de DNS, pode optar por DNS não criptografado. Você tem duas opções: usar IPs vinculados ou IPs dedicados:

- [IPs dedicados](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IPs vinculados](/private-dns/connect-devices/other-options/linked-ip.md)
