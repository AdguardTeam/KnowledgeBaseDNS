---
title: PlayStation PS4/PS5
sidebar_position: 4
---

Os consoles de jogos não oferecem suporte a DNS criptografado, mas são ótimos para configurar o AdGuard DNS Público ou o AdGuard DNS Privado via um Endereço de IP vinculado.

É provável que o seu roteador ofereça suporte ao uso de servidores DNS criptografados, então você pode configurar o Private AdGuard DNS nele e conectar seu console de jogos sempre que precisar.

[Como configurar seu roteador](/private-dns/connect-devices/routers/routers.md)

## Conectar o AdGuard DNS

Configure o seu console de jogos para usar um servidor público AdGuard DNS ou configure-o via IP vinculado:

1. Ligue seu console PS4/PS5 e entre na sua conta.
2. Na tela inicial, selecione o ícone de engrenagem localizado na parte superior.
3. No menu _Configurações_, selecione _Rede_.
4. Selecione _Configurar conexão com a Internet_.
5. Escolha _Usar Wi-Fi_ ou _Usar um cabo LAN_, dependendo das configurações da sua rede.
6. Selecione _Personalizado_ e, em seguida, selecione _Automático_ para _Configurações de Endereço de IP_.
7. Para _Nome do host DHCP_, selecione _Não especificar_.
8. Para _Configurações de DNS_, selecione _Manual_.
9. No campo _Servidor DNS_, insira um dos seguintes endereços de servidor DNS:
   - `94.140.14.49`
   - `94.140.14.59`
10. Selecione _Próximo_ para continuar.
11. Na tela _Configurações de MTU_, selecione _Automático_.
12. Na tela _Servidor proxy_, selecione _Não usar_.
13. Selecione _Testar conexão com a Internet_ para testar suas novas configurações de DNS.
14. Assim que o teste for concluído e você vir "Conexão com a Internet bem-sucedida", salve suas configurações.

Seria preferível usar o IP vinculado (ou o IP dedicado se você tiver uma assinatura Equipe):

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
