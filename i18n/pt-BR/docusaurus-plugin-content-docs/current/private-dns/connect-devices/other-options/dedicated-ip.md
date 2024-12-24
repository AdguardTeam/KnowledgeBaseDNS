---
title: IPs dedicados
sidebar_position: 2
---

## O que são IPs dedicados?

Endereços IPv4 dedicados estão disponíveis para usuários com assinaturas Team e Enterprise, enquanto IPs vinculados estão disponíveis para todos.

Se você tiver uma assinatura Team ou Enterprise, receberá vários endereços de IP individuais dedicados. Solicitações para estes endereços são tratadas como "suas", e as configurações e regras de filtragem de nível de servidor são aplicadas conforme necessário. Endereços de IP dedicados são muito mais seguros e fáceis de gerenciar. Com IPs vinculados, você precisa reconectar manualmente ou usar um programa especial toda vez que o endereço de IP do dispositivo mudar, o que acontece após cada reinicialização.

## Por que você precisa de um IP dedicado?

Unfortunately, the technical specifications of the connected device may not always allow you to set up an encrypted Private AdGuard DNS server. Neste caso, você terá que usar DNS padrão não criptografado. Existem duas maneiras de configurar o AdGuard DNS: [usando IPs vinculados](/private-dns/connect-devices/other-options/linked-ip.md) e usando IPs dedicados.

IPs dedicados são geralmente uma opção mais estável. O IP vinculado tem algumas limitações, por exemplo, a permissão de endereços residenciais apenas. No entanto, seu provedor pode mudar o IP, e você precisará revincular o endereço de IP. Com IPs dedicados, você obtém um Endereço de IP que é exclusivamente seu, e todas as Solicitações serão contadas para o seu dispositivo.

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
