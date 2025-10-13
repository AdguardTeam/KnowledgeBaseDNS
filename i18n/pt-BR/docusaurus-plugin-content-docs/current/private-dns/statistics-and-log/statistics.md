---
title: Estatísticas
sidebar_position: 2
---

## Estatísticas gerais

A aba _Estatísticas_ exibe todas as estatísticas resumidas das solicitações de DNS feitas por dispositivos conectados ao AdGuard DNS Privado. Mostra o número total e a localização das solicitações, o número de solicitações bloqueadas, a lista de empresas para as quais as solicitações foram direcionadas, os tipos de solicitações e os domínios mais frequentemente solicitados.

![Site bloqueado \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/overall_stats.png)

## Categorias

### Tipos de solicitações

- **Publicidade**: solicitações publicitárias e outras relacionadas a anúncios que coletam e compartilham dados do usuário, analisam o comportamento do usuário e segmentam anúncios
- **Rastreadores**: solicitações de sites e terceiros com o objetivo de rastrear a atividade do usuário
- **Mídias sociais**: solicitações a sites de redes sociais
- **CDN**: solicitação conectada à Rede de Distribuição de Conteúdo (CDN), uma rede mundial de servidores proxy que acelera a entrega de conteúdo aos usuários finais
- **Outro**

![Tipos de solicitações \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/request_types.png)

### Principais empresas

Aqui você pode ver as empresas que mais enviaram solicitações.

![Principais empresas \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_companies.png)

### Principais destinos

Isso mostra os países para os quais mais solicitações foram enviadas.

Além dos nomes dos países, a lista contém duas categorias gerais adicionais:

- **Not applicable**: Response doesn’t include IP address
- **Unknown destination**: Country can’t be determined from IP address

![Principais destinos \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_destinations.png)

### Principais domínios

Contém uma lista de domínios que receberam mais solicitações.

![Principais domínios \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/top_domains.png)

### Solicitações criptografadas

Mostra o número total de solicitações e a porcentagem de tráfego criptografado e não criptografado.

![Solicitações criptografadas \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/statistics/encrypted_requests.png)

### Principais clientes

Exibe o número de solicitações feitas para clientes. Para visualizar os endereços IP dos clientes, ative a opção _Registrar endereços IP_ nas _Configurações do servidor_. [Mais informações sobre as configurações do servidor](/private-dns/server-and-settings/advanced.md) podem ser encontradas em uma seção relacionada.
