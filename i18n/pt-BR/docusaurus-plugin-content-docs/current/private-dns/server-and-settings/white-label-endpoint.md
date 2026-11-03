---
title: Endpoint white-label (endereço IP da conta)
sidebar_position: 7
---

Os domínios personalizados permitem que os parceiros ofereçam o AdGuard DNS com sua própria marca. Com o plano Enterprise, esse serviço pode ser executado em um endereço IP privado: esse recurso é chamado de _IP da conta_. Os domínios apontam para o _IP da conta_ por meio de um registro A, em vez de um registro CNAME, que é usado nos domínios personalizados padrão.

:::note

O **CNAME** aponta seu domínio para outro domínio (`dns.partner.com` → `cname.adguard-dns.com`). O endereço IP real é resolvido por meio desse segundo domínio, portanto o tráfego passa pela infraestrutura compartilhada que o atende.

O **registro A** aponta seu domínio diretamente para um endereço IP (`dns.partner.com` → `203.0.113.10`). Não há um domínio intermediário: o endereço para o qual seu domínio é resolvido é o que processa o tráfego.

:::

Cada conta pode ter um _IP da conta_, e você pode apontar vários domínios para ele. Esse endereço não é o mesmo que os endereços IPv4 e IPv6 dedicados usados para identificar dispositivos: um _IP da conta_ é o endereço para o qual seus domínios personalizados são resolvidos.

## Como obter um IP da conta

Para solicitar um _IP da conta_, entre em contato com seu gerente de conta ou com a equipe de suporte pelo e-mail [support@adguard-dns.io](mailto:support@adguard-dns.io).

Depois que o endereço for atribuído, o bloco _Endpoint white-label_ aparecerá em _Configurações_ → _Configurações avançadas_ → _Domínios personalizados_, exibindo seu _Endereço IP da conta_. Até lá, o bloco não será exibido.

![Endpoint white-label](https://cdn.adtidy.org/content/kb/dns/enterprise/whitelabel_endpoint_en.png)

:::caution

Se sua conta deixar de usar o plano Enterprise, o endereço ficará inativo e os domínios que apontam para ele deixarão de funcionar. Os domínios personalizados continuam disponíveis no plano **Equipe**, mas apenas por meio de um registro CNAME — para reativar os domínios suspensos, adicione-os novamente como domínios personalizados padrão.

O endereço permanece reservado para sua conta, portanto, se você voltar ao plano Enterprise, receberá o mesmo endereço.

:::

## Como apontar um domínio para o endereço IP da sua conta

A configuração segue as mesmas etapas de um domínio personalizado padrão, mas você cria um registro A em vez de um CNAME. Além disso, para domínios DoH, o certificado não é emitido automaticamente — você precisa enviar seu próprio certificado.

1. Em _Domínios personalizados_, escolha o protocolo: _Adicionar domínio DoH_ (para DNS-over-HTTPS) ou _Adicionar domínio DoT/DoQ_ (para DNS-over-TLS ou DNS-over-QUIC).

   ![Escolha do protocolo](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_protocol_en.png)

2. Digite o domínio que deseja usar (por exemplo, `dns.partner.com`) e clique em _Avançar_. Você precisa ter acesso ao painel de gerenciamento de DNS desse domínio.

   ![Inserção do domínio](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_domain_en.png)

3. A próxima tela mostra os valores do seu registro DNS: seu domínio em _Nome (Host)_ e seu _IP da conta_ em _Valor (Aponta para / Endereço IP)_. Mantenha essa tela aberta, acesse o painel de controle do seu provedor de DNS e crie um registro A com esses valores. Não crie um registro CNAME — os domínios que usam um _IP da conta_ apontam diretamente para o endereço.

   ![Valores do registro DNS](https://cdn.adtidy.org/content/kb/dns/enterprise/a_record_en.png)

4. Na tela do AdGuard DNS com os valores do registro, clique em _Verificar_. Se o registro ainda não tiver sido propagado ou apontar para outro destino, a verificação falhará. Confira o registro e tente novamente em alguns minutos.

5. Envie um certificado TLS. Os certificados não são emitidos automaticamente para domínios que usam um _IP da conta_:

   - Para **DoT/DoQ**, você envia um certificado curinga (`*.partner.com`), assim como em um domínio personalizado padrão.
   - Para **DoH**, você também envia seu próprio certificado. Isso difere do processo padrão, no qual o AdGuard DNS pode gerar um certificado para você.

   Até que você adicione um certificado, o domínio exibirá o status _Sem certificado_ e seus clientes não poderão se conectar a ele.

   ![Envio de um certificado](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_certificate_en.png)

:::note

A renovação é sua responsabilidade. Você receberá um lembrete por e-mail antes que o certificado expire. Quando o certificado expirar, seu domínio deixará de funcionar até que você envie um novo certificado.

:::

## Domínios personalizados existentes e endereço IP da conta

Os domínios que você adicionou antes de obter um _IP da conta_ não são migrados para ele automaticamente. Eles continuam funcionando por meio do registro CNAME, como antes.

Para migrar um domínio para seu _IP da conta_, comece excluindo o registro CNAME no seu provedor de DNS — um domínio não pode ter um registro CNAME e um registro A ao mesmo tempo. Em seguida, exclua o domínio no AdGuard DNS e adicione-o novamente, seguindo as etapas acima.

:::caution

Seus clientes não poderão usar o domínio entre o momento em que você o excluir e o momento em que a nova configuração for verificada.

:::

## Limitações

Um _IP da conta_ altera o endereço para o qual seu domínio é resolvido. Alguns aspectos que ele não abrange:

- O endereço IP da conta não é totalmente white-label no nível de rede. Uma consulta WHOIS, RDAP ou ASN do endereço IP ainda pode identificar o AdGuard como o provedor da infraestrutura IP subjacente.
- O DNS reverso não pode ser personalizado, portanto uma consulta PTR não retornará seu domínio.
- A descoberta de resolvedores DNS (DDR) não está disponível em um _IP da conta_.
- Certificados com o endereço IP no campo SAN não são compatíveis, por isso seus clientes se conectam pelo nome de domínio, e não pelo próprio endereço.
- O uso do seu próprio intervalo de endereços IP (BYOIP) não é compatível, pois o endereço é atribuído pelo AdGuard.
- Os domínios DNSCheck, usados para verificar a conexão DNS de um dispositivo, continuam sendo resolvidos pela infraestrutura do AdGuard.
