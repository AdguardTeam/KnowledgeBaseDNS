---
title: Problemas conhecidos
sidebar_position: 1
---

Após configurar o AdGuard DNS, alguns usuários podem descobrir que ele não está funcionando corretamente: eles veem uma mensagem de que o dispositivo não está conectado ao AdGuard DNS e as solicitações desse dispositivo não são exibidas no registro de consultas. Isso pode ocorrer devido a determinadas configurações ocultas no navegador ou no sistema operacional. Vejamos vários problemas comuns e suas soluções.

:::tip

Você pode verificar o status do AdGuard DNS na página de teste [](https://adguard.com/test.html).

:::

## Configurações de DNS seguro do Chrome

Se você estiver usando o Chrome e não vir nenhuma solicitação no seu painel de DNS do AdGuard, isso pode ser porque o Chrome usa seu próprio servidor DNS. Veja como você pode desativá-lo:

1. Abra as configurações do Chrome.
1. Navegue até *Privacidade e segurança*.
1. Selecione *Segurança*.
1. Role para baixo até *Usar DNS seguro*.
1. Desative o recurso.

![Recurso de Usar DNS seguro do Chrome](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/secure-dns.png)

If you disable Chrome’s own DNS settings, the browser will use the DNS specified in your operating system, which should be AdGuard DNS if you’ve set it up correctly.

## iCloud Private Relay (Safari, macOS e iOS)

Se você ativar o iCloud Private Relay nas configurações do seu dispositivo, o Safari usará os endereços DNS da Apple, que sobrescreverão as configurações de DNS do AdGuard.

Veja como você pode desativar o iCloud Private Relay no seu iPhone:

1. Abra *Ajustes* e toque no seu nome.
1. Selecione *iCloud* → *Private Relay*.
1. Desative o Private Relay.

![iOS Private Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay.png)

No seu Mac:

1. Abra *Configurações do Sistema* e clique no seu nome ou *Apple ID*.
1. Selecione *iCloud* → *Private Relay*.
1. Desative o Private Relay.
1. Clique em *Feito*.

![macOS Private Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png)

## Proteção Avançada contra Rastreadores e Impressão Digital (Safari, a partir do iOS 17)

Após a atualização do iOS 17, a Proteção Avançada contra Rastreadores e Impressão Digital pode ser ativada nas configurações do Safari, o que pode ter um efeito semelhante ao do iCloud Private Relay, contornando as configurações do DNS do AdGuard.

Veja como você pode desativar a Proteção Avançada contra Rastreadores e Impressão Digital:

1. Abra *Ajustes* e role para baixo até *Safari*.
1. Toque em *Avançado*.
1. Desative *Proteção Avançada contra Rastreadores e Impressão Digital*.

![Proteção Avançada contra Rastreadores e Impressão Digital *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)
