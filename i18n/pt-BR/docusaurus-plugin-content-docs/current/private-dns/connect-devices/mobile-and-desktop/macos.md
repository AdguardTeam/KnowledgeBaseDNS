---
title: macOS
sidebar_position: 4
---

Para conectar um dispositivo macOS ao AdGuard DNS, primeiro adicione-o ao _painel_:

1. Vá para o _painel_ e clique em _Conectar novo dispositivo_.
2. No menu suspenso _Tipo de dispositivo_, selecione Mac.
3. Nomeie o dispositivo.
   ![Conectando dispositivo \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/choose_mac.png)

## Usando o Bloqueador de anúncios AdGuard (opção paga)

O aplicativo AdGuard permite que você use DNS criptografado, tornando-o perfeito para configurações do AdGuard DNS em seu dispositivo macOS. Você pode escolher entre vários protocolos de Criptografia. Junto com a filtragem DNS, você também tem um excelente Bloqueador de anúncios que funciona em todo o seu sistema.

1. [Instale o aplicativo](https://adguard.com/adguard-mac/overview.html) no dispositivo que você quer conectar ao AdGuard DNS.
2. Abra o aplicativo.
3. Clique no ícone no canto superior direito.
   ![Ícone de proteção \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step3.png)
4. Selecione _Preferências..._.
   ![Preferências \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step4.png)
5. Clique na aba _DNS_ na linha superior de ícones.
   ![Aba DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step5.png)
6. Ative a proteção DNS marcando a caixa na parte superior.
   ![Proteção de DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step6.png)
7. Clique em _+_ no canto inferior esquerdo.
   ![Clique + \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step7.png)
8. Copie um dos seguintes endereços DNS e cole-o no campo _Servidores DNS_ no aplicativo. Se você não tem certeza sobre qual optar, selecione _DNS-over-HTTPS_.
   ![Servidor DoH \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_1.png)
   ![Criar servidor \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_2.png)
9. Clique em _Salvar e Escolher_.
   ![Salvar e selecionar \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step9.png)
10. Seu servidor recém-criado deve aparecer na parte inferior da lista.
    ![Provedores \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step10.png)

Feito! Seu dispositivo foi conectado com sucesso ao AdGuard DNS.

## Usando o AdGuard VPN

Nem todos os serviços de VPN suportam DNS criptografado. No entanto, nossa VPN é compatível, então, se você precisar tanto de uma VPN quanto de um DNS privado, AdGuard VPN é a sua melhor opção.

1. Instale o [aplicativo AdGuard VPN](https://adguard-vpn.com/mac/overview.html) no dispositivo que você quer conectar ao AdGuard DNS.
2. Abra o aplicativo AdGuard VPN.
3. Abra _Configurações_ → _Configurações do aplicativo_ → _Servidores DNS_ → _Adicionar Servidor Personalizado_.
   ![Adicione um servidor DNS personalizado \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step3.png)
4. Copie um dos seguintes endereços DNS e cole-o no campo de texto _Endereços de servidor DNS_. Se você não tem certeza sobre sua escolha, selecione _DNS-over-HTTPS_. Se você não tem certeza, opte por DNS-over-HTTPS.
   ![Servidores DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step4.png)
5. Clique em _Salvar e selecionar_.
6. O servidor DNS que você adicionou aparecerá na parte inferior da lista de _Servidores DNS personalizados_.
   ![Adicione um servidor DNS personalizado \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step6.png)

Feito! Seu dispositivo foi conectado com sucesso ao AdGuard DNS.

## Usando um perfil de configuração

A macOS device profile, also referred to as a configuration profile by Apple, is a certificate-signed XML file that you can manually install on your device or deploy using an MDM solution. Também permite que você configure o AdGuard DNS no seu dispositivo.

:::note Importante

Se você estiver usando uma VPN, o perfil de configuração será ignorado.

:::

1. No dispositivo em que você deseja conectar o AdGuard DNS, baixe o perfil de configuração.
2. Escolha o menu Apple → _Configurações do sistema_, clique em _Privacidade e segurança_ na barra lateral, e clique em _Perfis_ à direita (talvez seja necessário rolar a tela para baixo).
   ![Perfil Baixado \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step2.png)
3. Na seção de Downloads, clique duas vezes no perfil.
   ![Baixado \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step3.png)
4. Revise o conteúdo do perfil e clique em _Instalar_.
   ![Instalar \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step4.png)
5. Digite a senha de administrador e clique em _OK_.

Feito! Seu dispositivo foi conectado com sucesso ao AdGuard DNS.

## Configurando o DNS simples

Se você preferir não usar software extra para configuração de DNS, pode optar por DNS não criptografado. Você tem duas opções: usar IPs vinculados ou IPs dedicados.

 - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
 - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
