---
title: Streaming do registro de consultas
sidebar_position: 6
---

:::info

O _Streaming do registro de consultas_ está atualmente em testes beta. Nesta fase, a configuração e a implantação são semimanuais e realizadas em coordenação com a equipe do AdGuard.

:::

Este artigo descreve como configurar e usar o _Streaming do registro de consultas_ no AdGuard DNS. Esse recurso permite que os usuários do AdGuard DNS Enterprise exportem automaticamente eventos brutos de consultas DNS para armazenamento externo, para fins de segurança, análise ou conformidade.

## O que é o Streaming do registro de consultas?

O _Streaming do registro de consultas_ permite que os usuários do AdGuard DNS Enterprise exportem automaticamente eventos brutos de consultas DNS para seu próprio armazenamento externo compatível com S3 — sem depender de consultas periódicas manuais à API. Após a exportação, esses logs podem ser ingeridos por sistemas SIEM, plataformas SOC, data lakes ou pipelines internos de análise, fornecendo acesso programático aos dados brutos das consultas para monitoramento de segurança, auditoria e conformidade.

Os eventos são coletados e entregues em lotes periódicos compactados; o prazo de entrega depende do volume de tráfego (consulte a seção [_Garantias e limitações de entrega_](#delivery-guarantees-and-limitations) para obter detalhes).

## Disponibilidade e requisitos

Para usar o _Streaming do registro de consultas_, os seguintes requisitos devem ser atendidos:

- **Plano Enterprise:** esse recurso está disponível exclusivamente para usuários do AdGuard DNS Enterprise. Se a conta deixar de usar um plano Enterprise, o serviço de transmissão de logs será desativado. Para desativá-lo por solicitação, consulte as perguntas frequentes abaixo.
- **Registro de consultas ativo:** o registro de consultas deve estar habilitado na configuração do AdGuard DNS.
- **Bucket compatível com S3:** você precisa ter um bucket ativo com permissão de gravação no Amazon S3 ou em outro provedor de armazenamento em nuvem compatível com S3 (por exemplo, Cloudflare R2, Backblaze B2, Wasabi ou MinIO).
- **Credenciais de acesso:** você precisa fornecer os parâmetros de conexão e as credenciais necessários para que o AdGuard DNS grave objetos no seu bucket.

## Como solicitar a configuração

Como a configuração é atualmente realizada manualmente pela nossa equipe de infraestrutura, siga estas etapas para solicitar a transmissão de logs:

### Etapa 1: prepare seu bucket S3

1. Crie um bucket dedicado ou um caminho/prefixo no seu armazenamento compatível com S3.
2. Conceda apenas as permissões mínimas necessárias às credenciais que você compartilhará com o AdGuard. No mínimo, as credenciais devem ter permissão de gravação (`s3:PutObject`) no caminho designado.

### Etapa 2: entre em contato com seu gerente de conta ou com a equipe de suporte do AdGuard

Entre em contato com seu gerente de conta dedicado do AdGuard ou com a equipe de suporte do AdGuard pelo e-mail `support@adguard-dns.io` e informe a conta ou organização cujos logs devem ser transmitidos.

### Etapa 3: forneça os detalhes da configuração

Depois que a solicitação for aprovada, a equipe de suporte fornecerá mais instruções e solicitará os parâmetros de configuração específicos necessários para estabelecer a transmissão de logs.

### Etapa 4: aguarde a ativação da transmissão de logs

Quando a transmissão de logs é ativada, um arquivo `.healthcheck` contendo `ok` é gravado automaticamente no bucket de destino. Você receberá uma notificação se ocorrer algum erro de conexão ou gravação durante a configuração. Nenhuma outra ação é necessária após a ativação da transmissão.

## Formato dos logs e estrutura dos objetos S3

Os logs são entregues como **arquivos JSON minificados contendo um array de objetos**, em que cada objeto do array representa um único evento de consulta DNS.

### Compactação e codificação

- **Codificação:** UTF-8
- **Compactação:** a compactação Gzip é obrigatória e aplicada automaticamente a todos os arquivos de log exportados.

### Organização e nomenclatura dos objetos S3

Os arquivos de log são gravados no bucket compatível com S3 usando uma hierarquia estruturada de pastas e uma convenção de nomenclatura específica baseada em carimbos de data/hora para facilitar a consulta e a ingestão eficientes por partição.

- **Prefixo do objeto (caminho):** `/logs/%Y/%m/%d/` (organizado por ano, mês e dia)
- **Padrão do nome do arquivo:** `%H-%M-%S-%3f.json.gz` (hora-minuto-segundo-milissegundo da geração do lote)

**Exemplo de chave de objeto S3:**

`logs/2026/08/24/14-02-02-123.json.gz`

### Estrutura do esquema do arquivo

Ao contrário do JSON Lines (JSONL), o arquivo entregue é um array JSON padrão, minificado em uma única linha.

**Exemplo da estrutura do arquivo minificado entregue (representação sem compactação):**

```json

{"ASN":1234,
"AccountId":4432,
"Action":1,
"CategoryId":null,
"ClientCountry":null,
"DNSSEC":0,
"DeviceId":"54cff1db",
"DnsServerId":"b13fe9a2",
"DomainFQDN":"qwerty20.onlineteam.ru.",
"ElapsedMs":51,
"FilterListId":null,
"FilterRule":null,
"IpAddress":null,
"Protocol":8,
"RequestIdNum":65027,
"RequestType":1,
"ResponseCode":0,
"ResponseCountry":"RU",
"TimeAddedMs":1787671509268,
"TrackerId":null
}
```

## Referência dos campos {#fields-reference}

A tabela abaixo descreve o esquema dos logs de consultas DNS exportados.

| Campo             | Tipo          | Obrigatório | Descrição                                                                                                                                                                                                                                                                                                                                 | Exemplo                |
| :---------------- | :------------ | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------- |
| `AccountId`       | integer       | Não         | ID da conta detectada, se houver.                                                                                                                                                                                                                                                                                         | `1234`                 |
| `DnsServerId`     | linhas        | Não         | ID do perfil detectado, também conhecido como ID do DNS ou ID do servidor DNS, se houver.                                                                                                                                                                                                                                 | `"prof1234"`           |
| `DeviceId`        | linhas        | Não         | ID do dispositivo detectado, se houver.                                                                                                                                                                                                                                                                                   | `"dev1234"`            |
| `ClientCountry`   | linhas        | Não         | País do endereço IP do cliente, representado por um código ISO 3166-1 alfa-2. Ausente se não for possível detectá-lo. `XK` é usado para Kosovo.                                                                                                                                           | `"AU"`                 |
| `ResponseCountry` | linhas        | Não         | País do primeiro endereço IP da resposta, representado por um código ISO 3166-1 alfa-2. Ausente se não for possível detectá-lo. `XK` é usado para Kosovo; `QN` significa “Não se aplica” quando o tipo de resposta não contém informações de endereço IP.                                 | `"US"`                 |
| `DomainFQDN`      | linhas        | Sim         | Nome do recurso DNS solicitado (FQDN).                                                                                                                                                                                                                                                                 | `"example.com."`       |
| `FilterListId`    | linhas        | Não         | ID do primeiro filtro cujas regras corresponderam à consulta. Omitido se nenhuma regra corresponder. Os valores reservados incluem `adult_blocking`, `blocked_service`, `category`, `custom`, `general_safe_search`, `newly_registered_domains`, `safe_browsing` e `youtube_safe_search`. | `"adguard_dns_filter"` |
| `FilterRule`      | linhas        | Não         | Primeira regra que correspondeu à consulta. Para `blocked_service`, contém o ID do serviço bloqueado. Para `category`, contém o ID da categoria. Omitido se nenhuma regra corresponder.                                                                                   | `"example.com^"`       |
| `TimeAddedMs`     | integer       | Sim         | Carimbo de data/hora Unix do recebimento da solicitação, em milissegundos.                                                                                                                                                                                                                                                | `1629974298000`        |
| `ASN`             | integer       | Não         | Número do Sistema Autônomo (ASN) detectado a partir do endereço IP do cliente, se houver.                                                                                                                                                                                                              | `1234`                 |
| `ElapsedMs`       | integer       | Sim         | Tempo decorrido desde o início do processamento da solicitação, em milissegundos.                                                                                                                                                                                                                                         | `3`                    |
| `RequestType`     | integer       | Sim         | Tipo numérico do registro de recurso DNS da consulta, por exemplo, `1` para um registro `A`.                                                                                                                                                                                                                              | `1`                    |
| `RequestIdNum`    | integer       | Sim         | Número inteiro aleatório de 16 bits sem sinal usado para simplificar a deduplicação quando o campo antigo `u` não é utilizado.                                                                                                                                                                                            | `12345`                |
| `Action`          | integer       | Sim         | Ação de filtragem: `0` desconhecida, `1` sem filtragem, `2` solicitação bloqueada, `3` resposta bloqueada, `4` solicitação permitida pela lista de permissões, `5` resposta permitida pela lista de permissões, `6` solicitação ou resposta modificada/reescrita.                                         | `2`                    |
| `DNSSEC`          | integer       | Sim         | Indica se a resposta foi validada com DNSSEC: `0` = não, `1` = sim.                                                                                                                                                                                                                                       | `1`                    |
| `Protocol`        | integer       | Sim         | Protocolo DNS: `0` desconhecido, `3` DNS-over-HTTPS, `4` DNS-over-QUIC, `5` DNS-over-TLS, `8` DNS simples, `9` DNSCrypt.                                                                                                                                                                                  | `3`                    |
| `ResponseCode`    | integer       | Sim         | Código de resposta DNS (`RCODE`) enviado ao cliente.                                                                                                                                                                                                                                                   | `0`                    |
| `IpAddress`       | linhas        | Não         | Endereço IP do cliente. Omitido quando o registro de endereços IP está desativado para o perfil correspondente.                                                                                                                                                                                           | `"1.2.3.4"`            |
| `TrackerId`       | string / null | Sim         | ID do rastreador encontrado ao comparar o domínio solicitado com a tabela de enriquecimento `dns-trackers`. Definido como `null` se nenhum rastreador for encontrado.                                                                                                                                     | `"google"`             |
| `CategoryId`      | string / null | Sim         | ID da categoria do rastreador retornado pela consulta de enriquecimento `dns-trackers`. Definido como `null` se nenhum rastreador for encontrado.                                                                                                                                                         | `"search_engines"`     |

## Garantias e limitações de entrega {#delivery-guarantees-and-limitations}

Entender como os logs são agrupados em lotes e entregues é fundamental para projetar seu pipeline de ingestão no SIEM.

- **Entrega apenas em lotes:** os logs são exportados exclusivamente em lotes, e não em tempo real. Para manter a estabilidade do sistema e se adaptar a diferentes níveis de tráfego, tanto o tamanho dos lotes quanto os intervalos de entrega são flexíveis. Os tamanhos exatos dos arquivos e os horários de envio não são fixos e podem variar conforme o sistema é otimizado.
- **Latência esperada e possíveis atrasos:** embora busquemos minimizar a latência, há uma latência de entrega esperada. Podem ocorrer atrasos ocasionais devido a tráfego de rede intenso, carga do sistema ou filas de processamento.
- **Entrega pelo menos uma vez:** a entrega dos logs é garantida pelo menos uma vez. Embora isso garanta que todos os eventos sejam entregues com sucesso, entradas de log duplicadas podem ocasionalmente ser gravadas no bucket de destino (por exemplo, durante novas tentativas de rede ou a recuperação de quedas temporárias de conexão). A entrega exatamente uma vez não é garantida.
- **Deduplicação obrigatória no lado do cliente:** o cliente deve ser capaz de deduplicar eventos no seu SIEM ou data lake. A deduplicação deve usar uma combinação do `timestamp` do evento com outros identificadores exclusivos.
- **Sem garantia de ordem:** devido à natureza distribuída da nossa infraestrutura DNS global, a ordem cronológica dos eventos não é garantida. Os eventos podem chegar fora de ordem dentro de um mesmo arquivo de log ou entre lotes diferentes.
- **Destino inacessível (novas tentativas ou descartes):** se o endpoint S3 ou o bucket ficar inacessível (por exemplo, devido a credenciais expiradas ou interrupções de rede no seu provedor), o AdGuard DNS poderá fazer novas tentativas. No entanto, dependendo dos limites do backend, os eventos de log gerados durante a interrupção poderão ser descartados (ignorados) para evitar o estouro do buffer.
- **Sem exportação retroativa:** a transmissão de logs abrange apenas eventos futuros. A exportação de logs históricos gerados antes da ativação do recurso de transmissão não é compatível.

## Segurança e privacidade

Os logs de consultas DNS contêm dados de rede e metadados altamente sensíveis. Para garantir a segurança dos dados da sua organização, observe os seguintes princípios de segurança:

- **Dados DNS sensíveis:** lembre-se de que os logs transmitidos podem conter metadados DNS sensíveis, incluindo domínios consultados, identificadores de dispositivos, endereços IP dos clientes e informações geográficas dos seus clientes.
- **Responsabilidade do cliente:** o cliente é o único responsável pela segurança geral do seu bucket compatível com S3, incluindo a configuração e a manutenção de políticas de bucket seguras e listas de controle de acesso (ACLs).
- **Restrinja o acesso:** recomendamos fortemente limitar o acesso ao bucket ao mínimo absolutamente necessário.
- **Rotação de credenciais:** as credenciais (chaves de acesso e segredos) fornecidas ao AdGuard DNS para acesso ao bucket devem ser substituídas regularmente de acordo com as políticas de segurança internas da sua organização. No entanto, como a alteração das chaves no provedor de nuvem revoga imediatamente as permissões de gravação do AdGuard, as novas credenciais devem ser atualizadas no AdGuard ao mesmo tempo para evitar a interrupção da entrega de logs.
- **Impacto das configurações de registro do painel:** se determinados tipos de registro forem desativados nas configurações da sua conta do AdGuard DNS, isso afetará diretamente o esquema dos logs exportados. Por exemplo, se você desativar o registro de metadados específicos dos dispositivos, esses campos serão omitidos (ou preenchidos com valores nulos) nos arquivos JSON transmitidos.
- **Respeito às configurações de privacidade:** o AdGuard DNS respeita rigorosamente suas configurações. Em nenhuma circunstância o AdGuard ignorará, substituirá ou contornará as configurações de privacidade e anonimização de dados da sua conta ao exportar eventos para seu armazenamento externo.

## Como ingerir logs no SIEM

Como o AdGuard DNS transmite logs de consultas para um armazenamento compatível com S3, a configuração do pipeline de ingestão na sua plataforma SIEM é inteiramente sua responsabilidade.

- **Destino compatível com S3:** o AdGuard DNS entrega os arquivos de log brutos diretamente ao bucket S3 designado, que funciona como o ponto central de recebimento dos seus dados de segurança.
- **Pipeline de ingestão personalizado:** você pode conectar e ingerir esses arquivos de log no seu SIEM ou sistema de análise usando seus próprios pipelines de dados, scripts personalizados ou processos ETL.
- **Conectores S3 padrão:** em plataformas amplamente utilizadas, como **Splunk**, **Microsoft Sentinel** e **Elastic**, normalmente são usados os respectivos conectores S3 nativos, entradas de dados ou coletores de logs.
- **Configuração dependente da infraestrutura:** a configuração exata, o mapeamento de índices e as regras de análise no seu SIEM dependem muito da infraestrutura específica, dos esquemas de dados e das políticas de retenção da sua organização.

## Solução de problemas

Esta seção detalha problemas comuns de integração que você pode encontrar ao configurar ou executar a transmissão de logs de consultas, além das etapas para resolvê-los.

### Os logs não aparecem no bucket

**Possível causa:** a configuração pelo AdGuard ainda não foi concluída ou foram fornecidos parâmetros de conexão incorretos.

**Solução:** verifique se você recebeu um e-mail de confirmação do seu gerente de conta do AdGuard informando que a configuração da transmissão foi concluída. Confira novamente todos os parâmetros compartilhados (nome do bucket, endpoint e região).

### Permissões incorretas do bucket

**Possível causa:** as credenciais compartilhadas com o AdGuard não têm permissões suficientes para gravar objetos no bucket.

**Solução:** certifique-se de que a política do AWS IAM (ou o equivalente do seu provedor) associada às chaves de acesso fornecidas conceda explicitamente a permissão `s3:PutObject` para o bucket e o prefixo de destino.

### As credenciais S3 expiraram

**Possível causa:** as credenciais expiraram ou foram substituídas/revogadas de acordo com as políticas de segurança internas da sua organização.

**Solução:** gere um novo conjunto de chaves de acesso e chaves secretas e compartilhe-as com segurança com seu gerente de conta do AdGuard para atualizar a configuração da transmissão.

### Surgiram duplicatas no destino dos logs

**Possível causa:** novas tentativas de rede acionadas pelo modelo de entrega “pelo menos uma vez” durante interrupções temporárias da rede.

**Solução:** esse é o comportamento esperado em pipelines distribuídos de registro de logs. Configure regras de deduplicação no seu SIEM ou banco de dados usando uma combinação de `timestamp`, `domain` e `device_id` (ou outros identificadores exclusivos de eventos).

### A latência está maior que o esperado

**Possível causa:** congestionamento temporário da rede, carga do sistema ou atrasos no armazenamento em buffer no provedor de nuvem.

**Solução:** verifique o status operacional do seu provedor de nuvem compatível com S3. Se os atrasos na entrega de logs excederem constantemente o intervalo de lotes esperado (por exemplo, mais de 15–30 minutos), entre em contato com o suporte do AdGuard para verificar o status das nossas filas de entrega de saída.

### Campos ausentes nos logs

**Possível causa:** recursos específicos de registro ou privacidade (como o registro de endereços IP dos clientes ou a coleta de metadados dos dispositivos) estão desativados nas configurações do painel do AdGuard DNS.

**Solução:** revise suas configurações de privacidade e registro no painel do AdGuard DNS. A exportação por transmissão de logs respeita rigorosamente essas configurações e não contornará suas preferências de minimização de dados.

### O status Enterprise foi alterado

**Possível causa:** sua assinatura Enterprise expirou, foi cancelada ou sua conta foi transferida para um plano inferior.

**Solução:** a transmissão de logs é desativada automaticamente se a conta perder o status Enterprise. Entre em contato com seu gerente de conta do AdGuard para restaurar sua assinatura e reativar a transmissão.

### O SIEM não consegue analisar ou dividir o array JSON

**Possível causa:** muitos coletores de logs S3 esperam, por padrão, JSON delimitado por quebras de linha (NDJSON/JSONL). Como os logs exportados são formatados como um array JSON minificado (`[...]`), o coletor pode não conseguir analisar o arquivo ou pode ingerir o array inteiro como um único evento de log enorme, em vez de dividi-lo em registros individuais de consultas.

**Solução:** configure o conector S3, o agente de envio de logs ou o parser do SIEM para lidar com arrays JSON padrão. O pipeline de ingestão deve ser configurado para descompactar a estrutura do array e dividir seus elementos em entradas de log separadas antes da indexação.

### Os arquivos compactados não são descompactados

**Possível causa:** o formato de compactação (por exemplo, `.gz`) usado durante a exportação não é compatível ou está configurado incorretamente no conector de ingestão do seu SIEM.

**Solução:** verifique as configurações de descompactação do seu conector do SIEM (por exemplo, certifique-se de que a descompactação automática gzip esteja habilitada para a recuperação de objetos S3).

## FAQ

### Os logs podem ser transmitidos diretamente para o Splunk ou o Microsoft Sentinel?

Não. Na versão MVP atual, a transmissão direta para endpoints ou APIs de SIEM (como o Splunk HEC) não é compatível. Os logs precisam primeiro ser gravados em um bucket compatível com S3, que o SIEM poderá monitorar e do qual poderá ingerir dados usando conectores S3 padrão.

### É possível usar opções de armazenamento diferentes do S3?

Não. Atualmente, apenas o armazenamento compatível com S3 é aceito. As opções padrão incluem o Amazon S3 ou ofertas compatíveis de outros provedores de nuvem (por exemplo, Cloudflare R2, Backblaze B2, Wasabi ou MinIO). A integração nativa com outros tipos de armazenamento (como o acesso direto ao Azure Blob ou SFTP) não está disponível no momento.

### É possível recuperar logs históricos?

Não. A transmissão de logs abrange apenas eventos futuros. Somente os eventos de consultas DNS gerados _após_ a ativação e a configuração bem-sucedidas do recurso de transmissão serão exportados. A exportação retroativa de logs não é compatível.

### Com que rapidez os logs são entregues?

Os logs são entregues em lotes compactados, e não em tempo real. Para obter mais detalhes sobre os intervalos dos lotes e o funcionamento da entrega, consulte a seção [Garantias e limitações de entrega](#delivery-guarantees-and-limitations).

### A entrega de cada evento é garantida?

Sim, em condições normais de operação. No entanto, se o bucket de destino ficar inacessível, os eventos de log poderão acabar sendo descartados quando o limite do buffer de novas tentativas for excedido. Consulte a seção [Garantias e limitações de entrega](#delivery-guarantees-and-limitations) para obter detalhes.

### Podem ocorrer eventos duplicados no destino?

Sim. No modelo de entrega “pelo menos uma vez”, novas tentativas de rede acionadas por interrupções temporárias podem fazer com que eventos de log duplicados sejam gravados no bucket. O pipeline de ingestão ou o SIEM deve ser configurado para realizar a deduplicação.

### Quais campos estão incluídos nos logs?

Os logs incluem campos essenciais de consultas DNS, como `TimeAddedMs` (carimbo de data/hora), `DomainFQDN`, `RequestType`, `Action` e `ClientCountry`. Para ver a lista completa de campos e tipos de dados, consulte a seção [Referência dos campos](#fields-reference). As configurações de privacidade da conta afetam diretamente esses logs; campos sensíveis (como `IpAddress`) serão omitidos ou definidos como `null` se o registro estiver desativado no painel.

### O que acontece se o status Enterprise for perdido?

A transmissão de logs é um recurso exclusivo do plano Enterprise. Se a conta deixar de usar um plano Enterprise ou a assinatura expirar, o serviço de transmissão será desativado automaticamente.

### A transmissão de logs pode ser desativada?

Sim. A transmissão de logs pode ser desativada a qualquer momento mediante solicitação. Para isso, entre em contato com seu gerente de conta dedicado do AdGuard ou com a equipe de suporte do AdGuard pelo e-mail `support@adguard-dns.io`.

### É possível configurar vários destinos S3 para a transmissão?

Não. A versão atual permite configurar apenas um destino de transmissão compatível com S3 por organização Enterprise.
