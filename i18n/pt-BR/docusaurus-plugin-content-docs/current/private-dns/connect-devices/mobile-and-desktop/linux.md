---
title: Linux
sidebar_position: 6
---

Para conectar um dispositivo Linux ao AdGuard DNS, primeiro adicione-o à _Dashboard_:

1. Vá para o _painel_ e clique em _Conectar novo dispositivo_.
2. No menu suspenso _Tipo de dispositivo_, selecione Linux.
3. Nomeie o dispositivo.
   ![Conectando dispositivo \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/choose_linux.png)

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

1. Click _System_ → _Settings_ → _Network_.
2. Selecione a aba _Sem fio_, depois escolha a rede à qual você está conectado.
3. Go to _IPv4_.
4. Set _Automatic (DHCP)_ to _Manual_.
5. Change the listed DNS addresses to the following addresses:
    - `94.140.14.49`
    - `94.140.14.59`
6. Clique em _Aplicar_.
7. Vá para _IPv6_.
8. Set _Automatic_ to _Manual_.
9. Change the listed DNS addresses to the following addresses:
    - `2a10:50c0:0:0:0:0:ded:ff`
    - `2a10:50c0:0:0:0:0:dad:ff`
10. Clique em _Aplicar_.
11. Vincule seu endereço de IP (ou seu IP dedicado, caso tenha uma assinatura Equipe):
     - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
     - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)

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
     - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
     - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)

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

## Use EDNS (Extended DNS)

EDNS extends the DNS protocol, enabling larger UDP packets to carry additional data. In AdGuard DNS, it allows passing DeviceID in plain DNS using an extra parameter.

DeviceID, an eight-digit hexadecimal identifier (e.g., `1a2b3c4d`), helps link DNS requests to specific devices. For encrypted DNS, this ID is part of the domain (e.g., `1a2b3c4d.d.adguard-dns.com`). For unencrypted DNS, EDNS is required to transfer this identifier.

AdGuard DNS uses EDNS to retrieve DeviceID by looking for option number `65074`. If such an option exists, it will read DeviceID from there. For this, you can use the `dig` command in the terminal:

```sh
dig @94.140.14.49 'www.example.com' A IN +ednsopt=65074:3031323334353637
```

Here, `65074` is the option ID, and `3031323334353637` is its value in hex format (DeviceID: `01234567`).

Feito! DeviceID should be displayed.

:::note

The `dig` command is merely an example, you can use any DNS software with an ability to add EDNS options to perform this action.

:::

## Usando DNS simples

Se você preferir não usar software extra para configuração de DNS, pode optar por DNS não criptografado. Você tem duas opções: usar IPs vinculados ou IPs dedicados:

 - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
 - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
