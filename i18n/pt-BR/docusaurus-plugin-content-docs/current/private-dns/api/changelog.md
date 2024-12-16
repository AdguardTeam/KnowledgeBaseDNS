---
title: Registro de alterações
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    Changelog is from here:
    https://api.adguard-dns.io/static/api/CHANGELOG.md
-->

Este artigo contém o registro de alterações para a [API do AdGuard DNS](private-dns/api/overview.md).

## v1.9

_Lançado em 11 de julho de 2024_

- Adicionada funcionalidade de conexão automática de dispositivos:
  - Nova configuração do servidor DNS — `auto_connect_devices_enabled`, permitindo aprovação para dispositivos de conexão automática através de um tipo de link específico
  - Novo campo em Dispositivo — `auto_device`, indicando que o dispositivo está conectado automaticamente
- Substituído `int` por `long` para `queries` em CategoryQueriesStats, para `used` em AccountLimits, e para `blocked` e `queries` em QueriesStats

## v1.8

_Lançado em 20 de abril de 2024_

- Adicionada suporte para DNS-over-HTTPS com autenticação:
  - Nova operação — redefinir senha do DNS-over-HTTPS para dispositivo
  - Nova configuração do dispositivo — `detect_doh_auth_only`. Desativa todos os métodos de conexão DNS, exceto DNS-over-HTTPS com autenticação
  - Novo campo em DeviceDNSAddresses — `dns_over_https_with_auth_url`. Indica a URL a ser usada ao conectar usando DNS-over-HTTPS com autenticação

## v1.7

_Lançado em 11 de março de 2024_

- Adicionada funcionalidade dedicada de endereços IPv4:
  - Endereços IPv4 dedicados agora podem ser usados em dispositivos para configuração do servidor DNS
  - O endereço IPv4 dedicado agora está associado ao dispositivo ao qual está vinculado, para que as consultas feitas a esse endereço sejam registradas para esse dispositivo
- Novas operações adicionadas:
  - Listar todos os endereços IPv4 dedicados disponíveis
  - Alocar novo endereço IPv4 dedicado
  - Vincular um endereço IPv4 disponível a um dispositivo
  - Desvincular um endereço IPv4 de um dispositivo
  - Solicitar informações sobre endereços dedicados associados a um dispositivo
- Adicionados novos limites aos limites da conta:
  - `dedicated_ipv4` fornece informações sobre a quantidade de endereços IPv4 dedicados já alocados, bem como o limite sobre eles
- Removido campo obsoleto de DNSServerSettings:
  - `safebrowsing_enabled`

## v1.6

_Lançado em 22 de janeiro de 2024_

- Adicionada uma nova seção de configurações de Acesso para perfis DNS (`access_settings`). Personalizando esses campos, você poderá proteger seu servidor AdGuard DNS de acessos não autorizados:

  - `allowed_clients` — aqui você pode especificar quais clientes podem usar seu servidor DNS. Este campo terá prioridade sobre o campo `blocked_clients`
  - `blocked_clients` — aqui você pode especificar quais clientes não estão autorizados a usar seu servidor DNS
  - `blocked_domain_rules` — aqui você pode especificar quais domínios não estão autorizados a acessar seu servidor DNS, bem como definir tais domínios com regras de wildcard e filtragem DNS

- Adicionados novos limites aos limites da conta:

  - `access_rules` fornece a soma dos valores atualmente usados de `blocked_clients` e `blocked_domain_rules`, assim como o limite sobre as regras de acesso
  - `user_rules` mostra a quantidade de regras de usuário criadas, assim como o limite delas

- Adicionada uma nova configuração `ip_log_enabled` para registrar endereços IP de clientes e domínios

- Adicionado novo código de erro `FIELD_REACHED_LIMIT` para indicar quando os limites foram alcançados:

  - Para o número total de `blocked_clients` e `blocked_domain_rules` nas configurações de acesso
  - Para `rules` nas configurações de regras de usuário personalizadas

## v1.5

_Lançado em 16 de junho de 2023_

- Adicionada uma nova configuração `block_nrd` e agrupadas todas as configurações relacionadas à segurança em um só lugar

### Modelo para configurações de navegação segura alterado

De:

```json
{
   "enabled": true
}
```

Para:

```json
{
   "enabled": true,
   "block_dangerous_domains": true,
   "block_nrd": false
}
```

onde `enabled` agora controla todas as configurações do grupo, `block_dangerous_domains` é o campo do modelo anterior `enabled`, e `block_nrd` é uma configuração que bloqueia domínios recém-registrados.

### Modelo para salvar configurações do servidor alterado

De:

```json
{
  "protection_enabled": true,
  "safebrowsing_enabled": true,
  ..
}
```

para:

```json
{
  "protection_enabled": true,
  "safebrowsing_settings": {
     "enabled": true,
     "block_dangerous_domains": true,
     "block_nrd": false
  }
  ..
}
```

aqui um novo campo `safebrowsing_settings` é utilizado em vez do obsoleto `safebrowsing_enabled`, cujo valor é armazenado em `block_dangerous_domains`.

## v1.4

_Lançado em 29 de março de 2023_

- Adicionada opção configurável para bloquear resposta: padrão (0.0.0.0), REFUSED, NXDOMAIN ou endereço IP customizado

## v1.3

_Lançado em 13 de dezembro de 2022_

- Adicionado método para obter limites da conta

## v1.2

_Lançado em 14 de outubro de 2022_

- Adicionado novos tipos de protocolo DNS e DNSCRYPT. Desqualificando o PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP e DNSCRYPT_UDP, que serão removidos posteriormente

## v1.1

_Lançado em 7 de julho de 2022_

- Adicionados métodos para recuperar estatísticas por tempo, domínios, empresas e dispositivos
- Adicionado método para atualizar configurações de dispositivo
- Definido os campos obrigatórios

## v1.0

_Lançada em 22 de fevereiro de 2022_

- Autenticação adicionada
- Operações CRUD com dispositivos e servidores DNS
- Registro de consultas
- Baixando DoH e DoT .mobileconfig
- Listas de filtros e serviços web
