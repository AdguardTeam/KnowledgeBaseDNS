---
title: Configurações de acesso
sidebar_position: 3
---

Ao configurar as configurações de acesso, você pode proteger seu AdGuard DNS de acesso não autorizado. Por exemplo, você está usando um endereço IPv4 dedicado, e atacantes usando sniffers o reconheceram e estão bombardeando com solicitações. Sem problemas, basta adicionar o domínio ou endereço IP incômodo à lista e ele não te incomodará mais!

Solicitações bloqueadas não serão exibidas no registro de consulta e não são contadas no limite total.

## Como configurar

### Clientes permitidos

Esta configuração permite que você especifique quais clientes podem usar seu servidor DNS. Ela tem a mais alta prioridade. Por exemplo, se o mesmo endereço IP estiver na lista de negados e na lista permitida, ele ainda será permitido.

### Clientes não permitidos

Aqui você pode listar os clientes que não têm permissão para usar seu servidor DNS. Você pode bloquear o acesso a todos os clientes e usar apenas os selecionados. To do this, add two addresses to the disallowed clients: `0.0.0.0/0` and `::/0`. Então, no campo _Clientes permitidos_, especifique os endereços que podem acessar seu servidor.

:::note Importante

Antes de aplicar as configurações de acesso, certifique-se de que não está bloqueando seu próprio endereço IP. Se você fizer isso, não poderá acessar a rede. Se isso acontecer, basta desconectar do servidor DNS, ir para as configurações de acesso e ajustar as configurações conforme necessário.

:::

### Domínios bloqueados

Aqui você pode especificar os domínios (bem como regras de wildcard e filtragem de DNS) que serão negados de acessar seu servidor DNS.

![Configurações do aplicativo \*border](https://cdn.adtidy.org/content/release_notes/dns/v2-5/AS-en.png)

Para exibir endereços IP associados às solicitações de DNS no registro de consulta, selecione a caixa de verificação _Registrar endereços IP_. Para isso, abra _Configurações do servidor_ → _Configurações avançadas_.
