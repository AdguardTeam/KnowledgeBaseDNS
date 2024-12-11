---
title: Structured DNS Errors (SDE)
sidebar_position: 5
---

Com o lançamento do AdGuard DNS v2.10, o AdGuard se tornou o primeiro resolvedor de DNS público a implementar suporte para [_Structured DNS Errors_ (SDE)](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/), uma atualização para [RFC 8914](https://datatracker.ietf.org/doc/rfc8914/). Este recurso permite que servidores DNS forneçam informações detalhadas sobre sites bloqueados diretamente na resposta DNS, em vez de depender de mensagens genéricas do navegador. Neste artigo, vamos explicar o que são _Structured DNS Errors_ e como funcionam.

## O que são Structured DNS Errors

Quando uma solicitação a um domínio de publicidade ou rastreadores é bloqueada, o usuário pode ver espaços em branco em um site ou pode nem mesmo notar que a filtragem de DNS ocorreu. No entanto, se um site inteiro for bloqueado no nível DNS, o usuário ficará completamente impossibilitado de acessar a página. Ao tentar acessar um site bloqueado, o usuário pode ver um erro genérico "Este site não pode ser acessaado" exibido pelo navegador.

![Erro "Este site não pode ser acessado"](https://cdn.adtidy.org/content/blog/dns/dns_error.png)

Tais erros não explicam o que aconteceu e por quê. Isso deixa os usuários confusos sobre o motivo pelo qual um site é inacessível, levando-os frequentemente a assumir que sua conexão de internet ou resolvedor de DNS está quebrado.

Para esclarecer isso, servidores DNS poderiam redirecionar usuários para sua própria página com uma explicação. No entanto, sites HTTPS (que são a maioria dos sites) exigiriam um certificado separado.

![Erro de certificado](https://cdn.adtidy.org/content/blog/dns/certificate_error.png?1)

Há uma solução mais simples: [Structured DNS Errors (SDE)](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/). O conceito de SDE baseia-se na [_Extended DNS Errors_ (RFC 8914)](https://datatracker.ietf.org/doc/rfc8914/), que introduziu a capacidade de incluir informações adicionais de erro nas respostas DNS. O rascunho do SDE dá um passo adiante ao usar [I-JSON](https://www.rfc-editor.org/rfc/rfc7493) (um perfil restrito de JSON) para formatar as informações de uma maneira que navegadores e aplicativos clientes possam facilmente analisar.

Os dados SDE estão incluídos no campo `EXTRA-TEXT` da resposta DNS. Ele contém:

- `j` (justificação): Motivo para bloqueio
- `c` (contato): Informações de contato para consultas se a página foi bloqueada por engano
- `o` (organização): Organização responsável pela filtragem DNS neste caso (opcional)
- `s` (suberro): O código de suberro para esta filtragem de DNS específica (opcional)

Esse sistema aumenta a transparência entre os serviços de DNS e os usuários.

### O que é necessário para implementar erros estruturados de DNS

Embora o AdGuard DNS tenha implementado suporte para Structured DNS Errors, os navegadores atualmente não suportam nativamente a análise e exibição de dados SDE. Para que os usuários vejam explicações detalhadas em seus navegadores quando um site é bloqueado, os desenvolvedores de navegadores precisam adotar e dar suporte à especificação preliminar de SDE.

### Extensão do AdGuard DNS para SDE

Para mostrar como os Structured DNS Errors funcionam, o AdGuard DNS desenvolveu uma extensão de navegador de demonstração que mostra como _Structured DNS Errors_ poderiam funcionar se os navegadores os suportassem. Se você tentar acessar um site bloqueado pelo AdGuard DNS com esta extensão ativada, verá uma página de explicação detalhada com as informações fornecidas via SDE, como o motivo do bloqueio, detalhes de contato e a organização responsável.

![Página de explicação](https://cdn.adtidy.org/blog/new/jlkdbaccess_blocked.png)

Você pode instalar a extensão da [Chrome Web Store](https://chromewebstore.google.com/detail/oeinmjfnchfhaabhchfjkbdpmgeageen) ou do [GitHub](https://github.com/AdguardTeam/dns-sde-extension/).

Se quiser ver como fica no nível de DNS, você pode usar o comando `dig` e procurar por `EDE` na saída.

```text
% dig @94.140.14.14 'ad.doubleclick.net' A IN +ednsopt=15:0000

...

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; EDE: 17 (Filtered): ({"j":"Filtered by AdGuard DNS","o":"AdGuard DNS","c":["mailto:support@adguard-dns.io"]})
;; QUESTION SECTION:
;ad.doubleclick.net.  IN A

...
```
