---
title: DNS-over-HTTPS com autenticação
sidebar_position: 4
---

## Por que ele pode ser útil

DNS-over-HTTPS com autenticação permite que você defina um nome de usuário e uma senha para acessar seu servidor escolhido.

Isso ajuda a prevenir que usuários não autorizados tenham acesso e melhora a segurança. Além disso, você pode restringir o uso de outros protocolos para perfis específicos. Esse recurso é particularmente útil quando o endereço do seu servidor DNS é conhecido por outros. Ao adicionar uma senha, você pode bloquear o acesso e garantir que apenas você possa usá-lo.

## Como configurar

:::note Compatibilidade

Esse recurso é suportado pelo [AdGuard DNS Client](/dns-client/overview.md) e pelos [aplicativos AdGuard](https://adguard.com/welcome.html).

:::

1. Abra a Dashboard.
2. Adicione um dispositivo ou abra as configurações de um dispositivo criado anteriormente.
3. Clique em _Usar endereços de servidor DNS_ e abra a seção _Endereços de servidor DNS criptografados_.
4. Configure DNS-over-HTTPS com autenticação como preferir.
5. Reconfigure seu dispositivo para usar este servidor no AdGuard DNS Client ou em um dos aplicativos AdGuard.
6. Para fazer isso, copie o endereço do servidor criptografado e cole-o nas configurações do aplicativo AdGuard ou do AdGuard DNS Client.
    ![Copiando o endereço \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/doh_step6.png)
7. Você também pode negar o uso de outros protocolos.
    ![Negar protocolos \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/deny_protocol.png)
