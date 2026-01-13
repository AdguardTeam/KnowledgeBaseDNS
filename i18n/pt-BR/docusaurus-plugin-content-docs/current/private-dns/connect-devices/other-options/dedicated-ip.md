---
title: IPs dedicados
sidebar_position: 2
---

## O que são IPs dedicados?

Endereços IPv4 dedicados estão disponíveis para usuários com assinaturas Team e Enterprise, enquanto IPs vinculados estão disponíveis para todos.

If you have a Team or Enterprise subscription, you’ll receive several personal dedicated IP addresses. Requests to these addresses are treated as yours, and server-level configurations and filtering rules are applied accordingly. Endereços de IP dedicados são muito mais seguros e fáceis de gerenciar. With linked IPs, you have to manually reconnect or use a special program every time the device’s IP address changes, which happens after every reboot.

## Por que você precisa de um IP dedicado?

Unfortunately, the technical specifications of the connected device may not always allow you to set up an encrypted Private AdGuard DNS server. Neste caso, você terá que usar DNS padrão não criptografado. Existem duas maneiras de configurar o AdGuard DNS: [usando IPs vinculados](/private-dns/connect-devices/other-options/linked-ip.md) e usando IPs dedicados.

IPs dedicados são geralmente uma opção mais estável. Linked IP has some limitations, such as only residential addresses are allowed, your provider can change the IP, and you’ll need to relink the IP address. Com IPs dedicados, você obtém um Endereço de IP que é exclusivamente seu, e todas as Solicitações serão contadas para o seu dispositivo.

A desvantagem é que você pode começar a receber tráfego irrelevante (scanners, bots), como sempre acontece com resolvedores de DNS públicos. Você pode precisar usar as [Configurações de acesso](/private-dns/server-and-settings/access.md) para limitar o tráfego de bots.

As instruções abaixo explicam como conectar um IP dedicado ao dispositivo:

## Conectar AdGuard DNS usando IPs dedicados

1. Abra a Dashboard.
2. Adicione um novo dispositivo ou abrir as configurações de um dispositivo criado anteriormente.
3. Selecione _Use os endereços de servidor DNS_.
4. Em seguida, abra _Endereços de servidor DNS simples_.
5. Selecione os servidores que deseja usar.
6. Para vincular um endereço IPv4 dedicado, clique em _Atribuir_.
7. Se você quiser usar um endereço IPv6 dedicado, clique em _Copiar_.
   ![Copiando o endereço \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dedicated_step7.png)
8. Copie e cole o endereço dedicado selecionado nas configurações do dispositivo.
