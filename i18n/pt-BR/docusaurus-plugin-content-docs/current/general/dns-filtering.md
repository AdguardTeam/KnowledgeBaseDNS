---
title: Filtragem de DNS
sidebar_position: 1
---

:::info

A maneira mais fácil de explorar os benefícios da filtragem de DNS é instalar o bloqueador de anúncios AdGuard ou experimentar o AdGuard DNS. Se você deseja filtrar o DNS no nível da rede, o AdGuard Home é a ferramenta para você

Links rápidos: [Baixar o bloqueador de anúncios AdGuard](https://adguard.com/download.html?auto=true&utm_source=kb_dns), [Obter o AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Experimentar o AdGuard DNS](https://adguard-dns.io/dashboard/)

:::

Para entender melhor a filtragem de DNS, primeiro devemos responder à pergunta "O que é DNS?".

## O que é DNS?

DNS significa "Domain Name System", e seu objetivo é traduzir os nomes dos sites em algo que os navegadores possam entender, ou seja, endereços IP. Assim, cada vez que você acessa um site, seu navegador envia uma solicitação para um servidor especial (servidor DNS). Esse servidor examina o nome de domínio solicitado e responde com um endereço IP correspondente. Muito esquematicamente, pode ser representado assim:

![Como funciona o DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

O mesmo se aplica, é claro, a todos os aplicativos e programas que enviam solicitações da Web, não apenas aos navegadores.

## Como funciona a filtragem de DNS?

Quando você usa um dos aplicativos AdGuard que oferece suporte à filtragem de DNS, ele atua como um buffer entre seu dispositivo e o servidor DNS. Todas as solicitações de DNS que seus navegadores ou aplicativos estão prestes a enviar primeiro são processadas pelo AdGuard. Se você estiver usando o servidor DNS padrão fornecido pelo seu ISP, seu tráfego DNS provavelmente não está criptografado e está vulnerável a espionagem e sequestro. O AdGuard criptografará todas as suas solicitações de DNS antes que elas saiam do seu dispositivo, para que nenhum malfeitor tenha acesso ao seu conteúdo. Além disso, o AdGuard pode identificar solicitações para domínios de anúncios, rastreamento e/ou adultos e redirecioná-los para um "buraco negro" em vez de encaminhá-los para o servidor DNS. Saiba mais [a seguir](#local-dns-blocklists).

![Como funciona a filtragem de DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

A filtragem de DNS é uma ferramenta poderosa compatível com todos os principais aplicativos AdGuard: [AdGuard para Windows](https://adguard.com/adguard-windows/overview.html), [AdGuard para Mac](https://adguard.com/adguard-mac/overview.html), [AdGuard para Android](https://adguard.com/adguard-android/overview.html) e [AdGuard para iOS](https://adguard.com/adguard-ios/overview.html).

A filtragem DNS pode ser dividida em duas funções separadas: criptografar e redirecionar o tráfego DNS para servidores DNS e bloquear alguns domínios localmente aplicando listas de bloqueio DNS.

### Servidores DNS

Existem milhares de servidores DNS para escolher, e todos eles são únicos em suas propriedades e propósitos. A maioria simplesmente retorna o endereço IP do domínio solicitado, mas alguns têm funções adicionais: bloqueiam anúncios, rastreamento, domínios adultos e assim por diante. Atualmente, todos os principais servidores DNS empregam um ou mais protocolos de criptografia confiáveis: DNS sobre HTTPS, DNS sobre TLS. O AdGuard também fornece um serviço [DNS](https://adguard-dns.io/) e foi o primeiro do mundo a oferecer o novo e promissor protocolo de criptografia [DNS sobre QUIC](https://adguard.com/blog/dns-over-quic.html). O AdGuard possui diferentes servidores para diferentes objetivos. Este diagrama ilustra como funcionam os servidores de bloqueio do AdGuard:

![AdGuard DNS](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Outros provedores de DNS podem funcionar de maneira diferente, portanto, aprenda mais sobre eles antes de se comprometer com este ou aquele servidor DNS. Você pode encontrar a lista de alguns dos provedores de DNS mais populares [neste artigo](dns-providers.md). Todos os aplicativos AdGuard que oferecem suporte à funcionalidade DNS também têm uma lista de servidores DNS para escolher ou até permitem selecionar qualquer servidor DNS personalizado que você desejar.

### Listas de bloqueio de DNS locais

Mas, ao confiar apenas nos servidores DNS para filtrar seu tráfego DNS, você perde toda a flexibilidade. Se o servidor selecionado bloquear um domínio, você não poderá acessá-lo. Com o AdGuard, você nem precisa configurar um servidor DNS específico para filtrar o tráfego DNS. Todos os produtos AdGuard permitem que você empregue listas de bloqueio de DNS, sejam arquivos de hosts simples ou listas que usam [sintaxe mais avançada](dns-filtering-syntax.md). Eles funcionam de maneira semelhante às listas de bloqueio regulares: quando uma solicitação de DNS corresponde a uma das regras na lista de filtros ativos, ela é bloqueada. Para ser mais preciso, ele é redirecionado para um "buraco negro".
> No AdGuard para iOS, primeiro você deve ativar o "Modo avançado" nas configurações para obter acesso ao bloqueio de DNS.

Você pode adicionar quantas listas de bloqueio personalizadas desejar. Por exemplo, você pode usar [AdGuard DNS filter](https://github.com/AdguardTeam/AdGuardSDNSFilter). Ele literalmente bloqueia tudo o que o servidor DNS AdGuard faz, mas neste caso você está livre para usar qualquer outro servidor DNS. Além disso, dessa forma, você pode adicionar mais filtros ou criar regras de exceção personalizadas, o que seria impossível com uma configuração simples de "usar um servidor DNS de bloqueio".
> Existem centenas de listas de bloqueio de DNS diferentes, você pode procurá-las [aqui](https://filterlists.com/).

## Filtragem de DNS vs. filtragem de rede

A filtragem de rede é o que chamamos de maneira "regular" que os aplicativos autônomos do AdGuard processam o tráfego de rede, daí o nome. Sinta-se à vontade para continuar lendo [este artigo](https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/).

Em primeiro lugar, temos que mencionar que com o AdGuard você não precisa escolher. Você sempre pode usar a filtragem de rede regular e a filtragem de DNS ao mesmo tempo. No entanto, é importante entender as principais diferenças entre os dois. A filtragem de DNS tem suas vantagens e desvantagens exclusivas:

**Prós da filtragem de DNS:**

1. Em algumas plataformas, essa é a única maneira de obter filtragem em todo o sistema. Por exemplo, no iOS apenas o navegador Safari suporta bloqueio de conteúdo no sentido familiar, para todo o resto há apenas filtragem de DNS.
2. Algumas formas de rastreamento (como [rastreamento CNAME-cloaked](https://adguard.com/blog/cname-tracking.html)) só podem ser tratadas pela filtragem de DNS.
3. O estágio de processamento de uma solicitação de DNS é o mais cedo possível para lidar com um anúncio ou um rastreador, o que ajuda a economizar um pouco da vida útil da bateria e do tráfego.

**Contras da filtragem de DNS:**

1. A filtragem de DNS é "áspera", o que significa que não removerá os espaços em branco deixados para trás de um anúncio bloqueado ou aplicará qualquer tipo de filtragem cosmética. Muitos dos anúncios mais complicados não podem ser bloqueados no nível do DNS (ou melhor, podem, mas apenas bloqueando todos os domínios que estão sendo usados para outros fins).

![Exemplo de diferença](https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *Um exemplo de diferença entre filtragem de DNS e filtragem de rede*

2. Não é possível saber a origem de uma solicitação de DNS, o que significa que você não pode distinguir entre diferentes aplicativos no nível do DNS. Isso prejudica as estatísticas e impossibilita a criação de regras de filtragem específicas do aplicativo.

Recomendamos usar a filtragem de DNS além da filtragem de rede, não em vez dela, sempre que possível.
