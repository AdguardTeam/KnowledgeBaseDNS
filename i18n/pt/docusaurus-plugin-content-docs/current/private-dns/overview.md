---
title: Visão Geral
sidebar_position: 1
---

# AdGuard DNS Privado

![Painel do AdGuard DNS Privado principal](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/main.png)

## O que é AdGuard DNS Privado

O AdGuard DNS Privado é um servidor DNS que, além dos benefícios de um servidor DNS público (como criptografia de tráfego e listas de bloqueio de domínio), oferece recursos como personalização flexível, estatísticas de DNS e controle dos pais e é facilmente gerenciado por meio de um painel prático.

## Por que o AdGuard DNS Privado é necessário

Hoje, você pode conectar qualquer coisa à Internet: TVs, geladeiras, lâmpadas inteligentes ou alto-falantes. Mas junto com as conveniências inegáveis, você obtém rastreadores e anúncios. Um bloqueador de anúncios simples baseado em navegador não o protegerá neste caso, mas o AdGuard DNS, que você pode configurar para filtrar tráfego, bloquear conteúdo e rastreadores, tem um efeito em todo o sistema.

Já temos o [AdGuard DNS público](../public-dns/overview.md) e [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome). Essas soluções funcionam bem para alguns usuários, mas para outros, o AdGuard DNS público não tem flexibilidade de configuração, enquanto o AdGuard Home não tem simplicidade. É aí que entra o AdGuard DNS privado. Ele tem o melhor dos dois mundos: oferece personalização, controle e informações - tudo através de um painel simples e fácil de usar.

## A diferença entre AdGuard DNS Privado e Público

Aqui está uma comparação simples dos recursos disponíveis nos servidores AdGuard DNS Público e AdGuard DNS Privado.

| AdGuard DNS Público                            | AdGuard DNS Privado                                                                                           |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Criptografia de tráfego DNS                    | Criptografia de tráfego DNS                                                                                   |
| Listas de bloqueio de domínio pré-determinadas | Listas de bloqueio de domínio personalizáveis                                                                 |
| -                                              | Regras de filtragem de DNS personalizadas com recurso de importação/exportação                                |
| -                                              | Estatísticas de solicitações (veja para onde vão suas solicitações de DNS: quais países, quais empresas etc.) |
| -                                              | Registro de consulta detalhado                                                                                |
| -                                              | Controle parental                                                                                             |

## Como configurar o AdGuard DNS Privado

1. Vá para o seu [painel de DNS do AdGuard](https://adguard-dns.io/dashboard/) (se não estiver logado, faça login usando sua conta do AdGuard)
2. Clique em “Conectar dispositivo” e siga as instruções na tela

> Plataformas suportadas: - Android - iOS - Windows - Mac - Linux - Roteadores - Consoles de jogos


## Recursos do AdGuard DNS Privado

### Gerenciamento de listas de bloqueio

Com o recurso "Listas de bloqueio", você pode definir quais domínios deseja bloquear e quais não. Escolha entre uma grande variedade de listas de bloqueio para diferentes propósitos.

![Painel de listas de bloqueio do AdGuard DNS Privado](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### Regras de usuário

Para momentos em que *Listas de bloqueio* pré-instalados com milhares de regras não são suficientes, temos uma função útil chamada "Regras do usuário". Aqui você pode adicionar regras personalizadas manualmente para bloquear/desbloquear um determinado domínio ou importar listas de regras personalizadas (confira [sintaxe de regras de filtragem de DNS](../general/dns-filtering-syntax.md)). Você pode exportar as listas.

![Painel de regras de usuário do AdGuard DNS Privado](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/import.png)

### Estatísticas

Na guia "Estatísticas" você pode ver todas as estatísticas resumidas sobre consultas DNS feitas por dispositivos conectados ao seu AdGuard DNS Privado. Ele mostra o número total e a geografia das solicitações, o número de solicitações bloqueadas, a lista de empresas para as quais as solicitações foram endereçadas, os tipos de solicitações e os principais domínios solicitados.

![Painel de estatísticas do AdGuard DNS Privado](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/statistics.png)

### Destino do tráfego

Esse recurso mostra para onde vão as solicitações de DNS enviadas por seus dispositivos. Além de ver o mapa dos destinos das solicitações, você pode filtrar as informações por data, dispositivo e país.

![Painel de tráfego do AdGuard DNS Privado](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/traffic_destination.png)

### Empresas

Essa guia permite verificar rapidamente quais empresas enviam mais solicitações e quais empresas têm mais solicitações bloqueadas.

![Painel de empresas do AdGuard DNS Privado](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/companies.png)

### Registro de consultas

Este é um registro detalhado onde você pode verificar as informações sobre cada solicitação e também classificar as solicitações por status, tipo, empresa, dispositivo, horário, país.

![Painel de registro de consultas do AdGuard DNS Privado](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/query_log.png)

### Controle parental

Para proteger seu filho de conteúdo online que você considera inapropriado, configure e ative a opção *Controle parental*. Além de opções como bloqueio de "conteúdo adulto" e pesquisa segura, adicionamos a capacidade de especificar manualmente os domínios para bloqueio e definir uma programação para que o *Controle parental* funcione adequadamente.

![Painel do Controle Parental do AdGuard DNS Privado](https://cdn.adguard.com/public/Adguard/Blog/private_adguard_dns/parental_control.png)
> Caso você ainda não tenha o AdGuard DNS Privado, você pode [obtê-lo no site oficial](https://adguard-dns.io/).