---
title: iOS
sidebar_position: 3
---

Para conectar um dispositivo iOS ao AdGuard DNS, primeiro adicione-o à _Dashboard_:

1. Vá para o _painel_ e clique em _Conectar novo dispositivo_.
2. No menu suspenso _Tipo de dispositivo_, selecione iOS.
3. Nomeie o dispositivo.
   ![Conectando dispositivo \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/choose_ios.png)

## Usando o Bloqueador de anúncios AdGuard (opção paga)

O aplicativo AdGuard permite que você use DNS criptografado, tornando-o perfeito para configurações do AdGuard DNS em seu dispositivo iOS. Você pode escolher entre vários protocolos de Criptografia. Junto com a filtragem DNS, você também tem um excelente Bloqueador de anúncios que funciona em todo o seu sistema.

1. Instale o [aplicativo AdGuard](https://adguard.com/adguard-ios/overview.html) no dispositivo que você quer conectar ao AdGuard DNS.
2. Abra o aplicativo do AdGuard.
3. Selecione a aba _Proteção_ no menu inferior.
   ![Ícone do escudo \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step3.jpg)
4. Certifique-se de que a _Proteção de DNS_ esteja ativada e toque nela. Escolha _Servidor DNS_.
   ![Proteção de DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4.jpg)
   ![Servidor DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4_2.jpg)
5. Role para baixo até a parte inferior e toque em _Adicionar um servidor DNS personalizado_.
   ![Adicionar servidor DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step5.jpg)
6. Copie um dos seguintes endereços DNS e cole-o no campo de texto _Endereço do servidor DNS_ no aplicativo. Se você não tem certeza sobre sua escolha, opte por DNS-over-HTTPS.
   ![Copiar endereço do servidor \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_1.png)
   ![Colar endereço do servidor \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_2.jpg)
7. Toque em _Salvar e selecionar_.
   ![Salvar e selecionar \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step7.jpg)
8. Seu servidor recém-criado deve aparecer na parte inferior da lista.
   ![Servidor personalizado \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step8.jpg)

Feito! Seu dispositivo foi conectado com sucesso ao AdGuard DNS.

## Usando o AdGuard VPN

Nem todos os serviços de VPN suportam DNS criptografado. No entanto, nossa VPN é compatível, então, se você precisar tanto de uma VPN quanto de um DNS privado, AdGuard VPN é a sua melhor opção.

1. Instale o [aplicativo AdGuard VPN](https://adguard-vpn.com/ios/overview.html) no dispositivo que você quer conectar ao AdGuard DNS.
2. Abra o aplicativo AdGuard VPN.
3. Toque no ícone de engrenagem no canto inferior direito da tela.
   ![Ícone de engrenagem \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step3.jpg)
4. Abra _Geral_.
   ![Configurações gerais \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step4.jpg)
5. Selecione _Servidor DNS_.
   ![Servidor DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step5.png)
6. Role para baixo até _Adicionar servidor DNS personalizado_.
   ![Adicionar servidor \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step6.png)
7. Copie um dos seguintes endereços DNS e cole-o no campo de texto _Endereços de servidor DNS_. Se você não tem certeza sobre sua escolha, selecione _DNS-over-HTTPS_. Se você não tem certeza sobre qual optar, selecione _DNS-over-HTTPS_.
   ![Servidor DNS-over-HTTPS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_1.png)
   ![Servidor DNS personalizado \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_2.jpg)
8. Toque em _Salvar_.
   ![Salvar servidor \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step8.jpg)
9. Seu servidor recém-criado deve aparecer em _Servidores DNS personalizados_.
   ![Servidores personalizados \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step9.png)

Feito! Seu dispositivo foi conectado com sucesso ao AdGuard DNS.

## Usando um perfil de configuração

An iOS device profile, also referred to as a configuration profile by Apple, is a certificate-signed XML file that you can manually install on your iOS device or deploy using an MDM solution. Ele também permite que você configure o AdGuard DNS privado em seu dispositivo.

:::note Importante

Se você estiver usando uma VPN, o perfil de configuração será ignorado.

:::

1. Baixe o perfil.
2. Abra as configurações.
3. Toque em _Perfil Baixado_.
   ![Perfil Baixado \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step3.png)
4. Toque em _Instalar_ e siga as instruções na tela.
   ![Instalar \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step4.png)

## Configurando DNS simples

Se você preferir não usar software extra para configuração de DNS, pode optar por DNS não criptografado. Você tem duas opções: usar IPs vinculados ou IPs dedicados.

 - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
 - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
