---
title: Windows
sidebar_position: 5
---

Para conectar um dispositivo iOS ao AdGuard DNS, primeiro adicione-o ao _painel_:

1. Vá para o _painel_ e clique em _Conectar novo dispositivo_.
2. No menu suspenso _Tipo de dispositivo_, selecione Windows.
3. Nomeie o dispositivo.
    ![Conectando dispositivo \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/choose_windows.png)

## Usando o Bloqueador de anúncios AdGuard (opção paga)

O aplicativo AdGuard permite que você use DNS criptografado, tornando-o perfeito para configurações do AdGuard DNS em seu dispositivo Windows. Você pode escolher entre vários protocolos de Criptografia. Juntamente com a filtragem DNS, você também tem um excelente Bloqueador de anúncio do AdGuard que funciona em todo o seu sistema.

1. [Instale o aplicativo](https://adguard.com/adguard-windows/overview.html) no dispositivo que você quer conectar ao AdGuard DNS.
2. Abra o aplicativo.
3. Clique em _Configurações_ na parte superior da tela inicial do aplicativo.
    ![Configurações \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step3.png)
4. Selecione a aba "Proteção de DNS" no menu à esquerda.
    ![Proteção de DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step4.png)
5. Clique no servidor DNS atualmente selecionado.
    ![Servidores DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step5.png)
6. Role para baixo e clique em _Adicionar um servidor DNS personalizado_.
    ![Adicione um servidor DNS personalizado \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step6.png)
7. No campo _DNS upstreams_, cole um dos seguintes endereços. Se você não tem certeza sobre a sua escolha, opte por DNS-over-HTTPS.
    ![Servidor DoH \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_1.png)
    ![Criar servidor \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_2.png)
8. Clique em _Salvar e selecionar_.
    ![Salvar e selecionar \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step8.png)
9. O servidor DNS que você adicionou aparecerá na parte inferior da lista de servidores DNS personalizados.
    ![Adicionando um servidor DNS personalizado \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step9.png)

Feito! Seu dispositivo foi conectado com sucesso ao AdGuard DNS.

## Usando o AdGuard VPN

Nem todos os serviços de VPN são compatíveis com o DNS criptografado. No entanto, nossa VPN é compatível, então, se você precisar tanto de uma VPN quanto de um DNS privado, AdGuard VPN é a sua melhor opção.

1. Instale o AdGuard VPN.
2. Abra o aplicativo e clique em _Configurações_.
3. Selecione _Configurações do aplicativo_.
    ![Configurações do aplicativo \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step4.png)
4. Role para baixo e selecione _Servidores DNS_.
    ![Servidores DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step5.png)
5. Clique em _Adicionar servidor DNS personalizado_.
    ![Adicione um servidor DNS personalizado \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step6.png)
6. No campo _Endereço do servidor_, cole um dos seguintes endereços. Se você não tem certeza, opte por DNS-over-HTTPS.
    ![Servidor DoH \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_1.png)
    ![Criar serrvidor \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_2.png)
7. Clique em _Salvar e selecionar_.
    ![Salvar e selecionar \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step8.png)

Feito! Seu dispositivo foi conectado com sucesso ao AdGuard DNS.

## Usando o Cliente do AdGuard DNS

O AdGuard DNS Client é uma ferramenta de console versátil e multiplataforma que permite a conexão ao AdGuard DNS usando protocolos DNS criptografados.

Mais detalhes podem ser encontrados em [outro artigo](/dns-client/overview/).

## Configurando o DNS simples

Se você preferir não usar software extra para configuração de DNS, pode optar por DNS não criptografado. Você tem duas opções: usar IPs vinculados ou IPs dedicados.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
