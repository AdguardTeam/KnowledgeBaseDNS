---
title: IPs vinculados
sidebar_position: 3
---

## O que são IPs vinculados e por que são úteis

Nem todos os dispositivos são compatíveis com protocolos DNS criptografados. Neste caso, você deve considerar configurar DNS não criptografado. Por exemplo, você pode usar um **endereço de IP**. O único requisito para um endereço IP vinculado é que deve ser um IP residencial.

:::note

Um **endereço IP residencial** é atribuído a um dispositivo conectado a um ISP residencial. Normalmente, ele está vinculado a uma localização física e é designado a casas ou apartamentos individuais. As pessoas usam endereços IP residenciais para atividades online do dia a dia, como procurar na Web, enviar e-mails, usar redes sociais ou streaming de conteúdo.

:::

Às vezes, um endereço IP residencial pode já estar em uso, e se você tentar se conectar a ele, o AdGuard DNS impedirá a conexão.
![Endereço IPv4 vinculado \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked.png)
Se isso acontecer, entre em contato com o suporte via [support@adguard-dns.io](mailto:support@adguard-dns.io), e eles te ajudarão com as configurações corretas.

## Como configurar IP vinculado

As instruções a seguir explicam como se conectar ao dispositivo via **endereço IP vinculado**:

1. Abra a Dashboard.
2. Adicione um novo dispositivo ou abra as configurações de um dispositivo previamente conectado.
3. Vá para _Usar endereços de servidor DNS_.
4. Abra _Endereços de servidor DNS simples_ e conecte o IP vinculado.
   ![IP vinculado \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked_step4.png)

## DNS dinâmico: por que é útil

Toda vez que um dispositivo se conecta à rede, ele recebe um novo endereço IP dinâmico. Quando um dispositivo se desconecta, o servidor DHCP pode atribuir o endereço de IP liberado a outro dispositivo na rede. Isso significa que os endereços IP dinâmicos mudam com frequência e de forma imprevisível. Consequentemente, você precisará atualizar as configurações sempre que o dispositivo for reiniciado ou a rede mudar.

Para manter automaticamente o endereço IP vinculado atualizado, você pode usar DNS. O AdGuard DNS verificará regularmente o endereço IP do seu domínio DDNS e o vinculará ao seu servidor.

:::note

DNS dinâmico (DDNS) é um serviço que atualiza automaticamente os registros DNS sempre que seu endereço IP muda. Ele converte endereços IP de rede em nomes de domínio fáceis de ler para conveniência. As informações que conectam um nome a um endereço IP são armazenadas em uma tabela no servidor DNS. O DDNS atualiza esses registros sempre que há mudanças nos endereços IP.

:::

Dessa forma, você não precisará atualizar manualmente o endereço de IP associado toda vez que ele mudar.

## DNS dinâmico: como configurá-lo

1. Primeiro, você precisa verificar se o DDNS é compatível com as configurações do seu roteador:
   - Vá para _Configurações do roteador_ → _Rede_
   - Localize a seção DDNS ou _DNS Dinâmico_
   - Navegue até ele e verifique se as configurações são realmente compatíveis. _Isso é apenas um exemplo. Pode variar dependendo do seu roteador_
     ![DDNS suportado \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dynamic_dns.png)
2. Registre seu domínio em um serviço popular como [DynDNS](https://dyn.com/remote-access/), [NO-IP](https://www.noip.com/), ou qualquer outro provedor de DDNS que preferir.
3. Insira o domínio nas configurações do seu roteador e sincronize as configurações.
4. Vá para as configurações de IP vinculado para conectar o endereço, depois navegue até _Configurações Avançadas_ e clique em _Configurar DDNS_.
5. Insira o domínio que você registrou anteriormente e clique em _Configurar DDNS_.
   ![Configurar DDNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dns_supported.png)

Tudo pronto, você configurou o DDNS com sucesso!

## Automação da atualização de IP vinculado via script

### No Windows

A maneira mais fácil é usar o Task Scheduler:

1. Crie uma tarefa:
   - Abra o Task Scheduler.
   - Crie uma nova tarefa.
   - Defina o gatilho para executar a cada 5 minutos.
   - Selecione _Executar Programa_ como a ação.
2. Selecione um programa:
   - No campo _Programa ou Script_, digite \`powershell'
   - No campo _Adicionar Argumentos_, digite:
     - `Command "Invoke-WebRequest -Uri 'https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}'"`
3. Salve a tarefa.

### No macOS e Linux

No macOS e Linux, a maneira mais fácil é usar `cron`:

1. Abra o crontab:
   - No terminal, execute `crontab -e`.
2. Adicione uma tarefa:
   - Insira a seguinte linha:
     `/5 * * * * curl https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}`
   - Este trabalho será executado a cada 5 minutos
3. Salve o crontab.

:::note Importante

- Certifique-se de ter `curl` instalado no macOS e Linux.
- Lembre-se de copiar o endereço das configurações e substituir o `ServerID` e `UniqueKey`.
- Se for necessária uma lógica mais complexa ou processamento dos resultados da consulta, considere usar scripts (por exemplo, Bash, Python) em conjunto com um agendador de tarefas ou cron.

:::
