---
title: Nintendo
sidebar_position: 2
---

Os consoles de jogos não oferecem suporte a DNS criptografado, mas são ótimos para configurar o AdGuard DNS Público ou o AdGuard DNS Privado via um Endereço de IP vinculado.

É provável que o seu roteador ofereça suporte ao uso de servidores DNS criptografados, então você pode configurar o Private AdGuard DNS nele e conectar seu console de jogos sempre que precisar.

[Como configurar seu roteador](/private-dns/connect-devices/routers/routers.md)

:::note Compatibility

Applies to New Nintendo 3DS, New Nintendo 3DS XL, New Nintendo 2DS XL, Nintendo 3DS, Nintendo 3DS XL, and Nintendo 2DS.

:::

## Conectar o AdGuard DNS

Configure o seu console de jogos para usar um servidor público AdGuard DNS ou configure-o via IP vinculado:

1. From the home menu, select _System Settings_.
2. Go to _Internet Settings_ → _Connection Settings_.
3. Select the connection file, then select _Change Settings_.
4. Select _DNS_ → _Set Up_.
5. Set _Auto-Obtain DNS_ to _No_.
6. Select _Detailed Setup_ → _Primary DNS_. Hold down the left arrow to delete the existing DNS.
7. No campo _Servidor DNS_, insira um dos seguintes endereços de servidor DNS:
   - `94.140.14.49`
   - `94.140.14.59`
8. Salve as configurações.

Seria preferível usar o IP vinculado (ou o IP dedicado se você tiver uma assinatura Equipe):

- [IPs dedicados](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IPs vinculados](/private-dns/connect-devices/other-options/linked-ip.md)
