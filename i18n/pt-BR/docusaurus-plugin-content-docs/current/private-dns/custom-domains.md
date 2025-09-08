---
title: Domínios personalizados
sidebar_position: 6
---

Os inscritos do AdGuard DNS podem configurar seus próprios domínios (como `dns.example.com`) em vez do domínio padrão `d.adguard-dns.com`. Este recurso tem como objetivo ajudar as empresas a alinhar a Proteção de DNS com sua infraestrutura, garantindo uma integração transparente com as políticas de segurança corporativa, ao mesmo tempo em que mantém todos os recursos de bloqueio de anúncios e privacidade fornecidos pelo AdGuard DNS.

:::note

Domínios personalizados estão disponíveis para os usuários dos planos **Enterprise** e **Equipe**.

:::

## Como configurar um domínio personalizado

Para configurar um domínio personalizado, entre no seu painel do AdGuard DNS e vá para as [_Configurações da conta_](https://adguard-dns.io/pt_br/dashboard/account). Role para baixo até _Configurações avançadas_ e selecione _Domínios personalizados_. Em seguida, você precisará passar pelos três principais passos.

1. Escolha o protocolo. Aqui, você tem duas opções:

    - Adicionar domínio DoH (para DNS-over-HTTPS)
    - Adicionar domínio DNS-over-TLS/DNS-over-QUIC (para DNS-over-TLS ou DNS-over-QUIC)

   ![Escolha o protocolo \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_pt_br_1.png)

2. Após selecionar o protocolo, insira o nome de domínio preferido (por exemplo, `example.com`) e verifique o registro CNAME.

   ![Registro CNAME \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_pt_br_2.png)

3. Configurar um certificado. Para domínios DNS-over-TLS/DoQ, você precisará fazer upload de um certificado TLS wildcard. Se você escolher DNS-over-HTTPS, pode fornecer seu próprio certificado TLS ou deixar que o AdGuard DNS gere um para você. Depois de verificado, seu domínio personalizado aparecerá no painel, pronto para usar.

   ![Lista de domínios personalizados \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_pt_br_3.png)
