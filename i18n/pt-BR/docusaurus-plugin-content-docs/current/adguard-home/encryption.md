---
title: Criptografia de DNS
sidebar_position: 6
---

O AdGuard Home oferece suporte a todos os protocolos modernos de criptografia DNS **prontos para uso**:

- [DNS-sobre-HTTPS](https://en.wikipedia.org/wiki/DNS_over_HTTPS)
- [DNS sobre TLS](https://en.wikipedia.org/wiki/DNS_over_TLS)
- [DNS sobre QUIC](https://datatracker.ietf.org/doc/html/rfc9250)

:::note

O AdGuard Home oferece suporte a [DNSCrypt][dnscrypt-info] tanto no lado do cliente quanto no lado do servidor. [Saiba como configurar o AdGuard Home como um servidor DNSCrypt](#configure-dnscrypt).

:::

Este guia explica como configurar um servidor DNS criptografado com o AdGuard Home.

[dnscrypt-info]: https://dnscrypt.info/

## Instalação do servidor {#server-installation}

O objetivo de proteger o tráfego DNS é protegê-lo de terceiros que possam estar analisando ou modificando-o, como, por exemplo, o provedor de serviços de internet (ISP).

{/* TODO(e.burkov):  Use relative links to the docs instead of absolute, see AGDNS-2226. */}

Significa que você precisará de um servidor com um endereço IP público dedicado. Existem muitos provedores de servidores em nuvem baratos: [DigitalOcean][digital-ocean], [Vultr][vultr], [Linode][linode], etc. Basta escolher um, criar um servidor na nuvem e [instalar o AdGuard Home](adguard-home/getting-started.md) no seu servidor.

[digital-ocean]: https://digitalocean.com
[vultr]: https://vultr.com
[linode]: https://www.linode.com

## Registre um nome de domínio {#register-domain}

Primeiramente, você precisa de um nome de domínio. Se você nunca registrou um domínio, aqui está um \[tutorial simples]\[registro de nome de domínio] que irá te ajudar com isso.

[domain-name-register]: https://www.pcworld.com/article/241722/web-apps/how-to-register-your-own-domain-name.html

## Obtenha um certificado SSL {#certificate}

Tanto o `DNS sobre HTTPS` quanto o `DNS sobre TLS` são baseados em [criptografia TLS][tls-wikipedia], portanto, você precisará de um certificado SSL para usá-los.

Um certificado SSL pode ser adquirido de uma Autoridade Certificadora (AC), uma empresa confiável para navegadores e sistemas operacionais que emite certificados SSL para domínios.

Como alternativa, você pode obter o certificado gratuitamente na [Let’s Encrypt CA][letsencrypt], uma autoridade certificadora gratuita desenvolvida pelo Internet Security Research Group (ISRG).

Este guia explica como obter um certificado deles.

### Usando o CertBot

O Certbot é um cliente fácil de usar que obtém um certificado do Let's Encrypt.

1. Vá para [certbot.eff.org][certbot] e escolha _Nenhum dos softwares acima_ e seu sistema operacional.
2. Siga as instruções de instalação e pare antes de chegar à seção _Get Started_.

#### Obter um certificado usando DNS challenge

Se você tiver um nome de domínio, usar o DNS challenge é a maneira mais fácil de obter um certificado.

Execute este comando e siga as instruções do Certbot:

```sh
sudo certbot certonly --manual --preferred-challenges=dns --preferred-chain="ISRG Root X1"
```

No final, você obterá dois arquivos:

- `fullchain.pem`: seu certificado SSL codificado em PEM
- `privkey.pem`: sua chave privada codificada em PEM

Ambos serão necessários para configurar o AdGuard Home.

:::info Importante

Você precisará usar exatamente o mesmo procedimento para renovar o certificado existente.

:::

### Usando Lego

Também há uma alternativa realmente boa e fácil de usar ao CertBot chamada [LEGO][lego-source].

1. Instale-o usando [um método apropriado][lego-install].
2. Escolha seu provedor de DNS na \[lista]\[provedor-lego] e siga as instruções para obter um certificado.

Além disso, aqui está [um script simples][legoagh] que você pode usar para automatizar a geração e a renovação de certificados.

[tls-wikipedia]: https://en.wikipedia.org/wiki/Transport_Layer_Security
[letsencrypt]: https://letsencrypt.org
[certbot]: https://certbot.eff.org
[lego-source]: https://go-acme.github.io/lego
[lego-install]: https://go-acme.github.io/lego/installation
[lego-provider]: https://go-acme.github.io/lego/dns
[legoagh]: https://github.com/ameshkov/legoagh

## Configurar o AdGuard Home {#configure}

1. Abra a interface da Web do AdGuard Home e vá para _Configurações_.

2. Selecione a seção _Criptografia_.

   ![Encryption settings screenshot][encryption-screenshot]

3. Copie e cole o conteúdo do arquivo `fullchain.pem` no campo _Certificados_ ou especifique o caminho para o arquivo.

4. Copie e cole o conteúdo do arquivo `privkey.pem` no campo de entrada em _Chave privada_ ou especifique o caminho para o arquivo.

5. Insira o nome do seu domínio em _Nome do servidor_.

6. Obtenha as mensagens de validação bem-sucedidas e clique em _Salvar configurações_.

:::note

O AdGuard Home recarregará automaticamente os certificados e/ou chaves privadas especificados pelo caminho do arquivo quando estes forem alterados. Uma recarga também pode ser acionada por um sinal `SIGHUP`.

:::

[encryption-screenshot]: https://cdn.adtidy.org/content/kb/dns/adguard-home/encryption-screenshot.png

## Usando com proxy reverso {#reverse-proxy}

Ja temos um [guia][reverse-proxy-faq] sobre como configurar um servidor proxy reverso para acessar a interface do usuario da Web do AdGuard Home.

O AdGuard Home consegue restringir solicitações DNS sobre HTTPS provenientes de servidores proxy que não estejam incluídos na lista de servidores confiáveis. Por padrão, ele é configurado para aceitar Solicitações de endereços de loopback IPv4 e IPv6.

Para permitir que o AdGuard Home processe solicitações DNS sobre HTTPS de um servidor proxy reverso, defina a configuração `trusted_proxies` no arquivo `AdGuardHome.yaml` com o endereço IP do servidor proxy. Se você tiver vários servidores proxy, poderá usar um CIDR em vez de um simples endereço IP.

### Proxy reverso Nginx

Para configurar o AdGuard Home para aceitar solicitações do servidor proxy reverso Nginx, certifique-se de que o próprio servidor proxy reverso esteja configurado corretamente.

O arquivo `nginx.conf` deve conter as diretivas apropriadas para adicionar os cabeçalhos de encaminhamento suportados à solicitação, que são `X-Real-IP` ou `X-Forwarded-For`. Isso pode ser conseguido com [`ngx_http_realip_module`][ngx-http-realip-module]. Resumindo, o módulo obtém o Endereço de IP real do cliente e o grava no header da Solicitação HTTP. O AdGuard Home receberá e interpretará o valor deste header como o endereço real do cliente. O endereço do servidor proxy reverso também será recebido e verificado na lista de proxies "confiáveis".

Outro cabeçalho que você pode querer encaminhar é o cabeçalho `Host`, necessário para que o AdGuard Home reconheça solicitações de clientes que possuem um ClientID em seus nomes de host.

Por exemplo, se a configuração do servidor proxy reverso contiver as seguintes diretivas:

```nginx
location /dns-query {
  # …
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP '1.2.3.4';
  proxy_bind 192.168.1.2;
  # …
}
```

O AdGuard Home obterá o endereço `192.168.1.2` como o endereço do seu servidor proxy e o verificará em relação aos `trusted_proxies`. O `1.2.3.4` será controlado pelas configurações de acesso caso o proxy seja "confiável".

### Cloudflare CDN

A rede de distribuição de conteúdo da Cloudflare atua como um proxy reverso, anexando seus próprios cabeçalhos (cloudflare-headers) às solicitações encaminhadas, que são `CF-Connecting-IP` e `True-Client-IP`. Eles também são compatíveis com o AdGuard Home, portanto os [endereços][cloudflare-addresses] dos servidores de proxy reverso podem ser inseridos diretamente na lista `trusted_proxies`. Consulte a [referência oficial do Cloudflare][cloudflare-real-ip] sobre como restaurar o IP original do visitante.

### Outros cabeçalhos

Outros cabeçalhos HTTP poderão ser compatíveis com o AdGuard Home no futuro. No entanto, qualquer solicitação de recurso relacionada a cabeçalhos deve primeiro ser tentada configurando o próprio proxy reverso.

Por exemplo, para modificar o mecanismo de [HTTP Strict Transport Security][hsts] para incluir a diretiva experimental `preload`, pode ser usado algo como o seguinte trecho de configuração:

```nginx
location /dns-query {
  # …
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
  # …
}
```

{/* TODO(e.burkov):  Use relative links to the docs instead of absolute, see AGDNS-2226. */}

[reverse-proxy-faq]: /adguard-home/faq.md#reverseproxy
[ngx-http-realip-module]: https://nginx.org/en/docs/http/ngx_http_realip_module.html
[cloudflare-headers]: https://support.cloudflare.com/hc/en-us/articles/200170986
[cloudflare-addresses]: https://www.cloudflare.com/ips
[cloudflare-real-ip]: https://support.cloudflare.com/hc/en-us/articles/200170786
[hsts]: https://datatracker.ietf.org/doc/html/rfc6797

## Configurando dispositivos {#configure-devices}

### Android

- O Android 9 e versões posteriores oferecem suporte nativo a `DNS-over-TLS`. Para configurar, acesse _Configurações_ → _Rede e internet_ → _Avançado_ → _DNS privado_ e insira o nome do seu domínio.
- [AdGuard para Android][ag-for-android] suporta `DNS sobre HTTPS`, `DNS sobre TLS`, `DNSCrypt` e `DNS sobre QUIC`.
- [Intra][intra] adiciona suporte a `DNS-over-HTTPS` ao Android.

### iOS

- O iOS 14 e versões posteriores oferecem suporte nativo a `DNS sobre TLS` e `DNS sobre HTTPS` por meio de perfis de configuração. Para facilitar as coisas, o AdGuard Home pode gerar esses perfis de configuração para você. Basta acessar _Guia de Configuração_ → _Privacidade de DNS_ e rolar até iOS.
- [AdGuard para iOS][ag-for-ios] é compatível com `DNS sobre HTTPS`, `DNS sobre TLS`, `DNSCrypt` e `DNS sobre QUIC`.
- [DNSCloak][dnscloak] suporta `DNS-over-HTTPS`, mas para configurá-lo para usar seu próprio servidor, você precisará gerar um [DNS Stamp][stamps] para ele.

### Windows

- O Windows 10 Build 19628 e superiores oferecem suporte nativo a `DNS-over-HTTPS`.
- [AdGuard para Windows][ag-for-windows] suporta `DNS sobre HTTPS`, `DNS sobre TLS`, `DNSCrypt` e `DNS sobre QUIC`.

### macOS

- O macOS Big Sur e versões posteriores oferecem suporte nativo a `DNS sobre TLS` e `DNS sobre HTTPS` por meio de perfis de configuração. Para facilitar as coisas, o AdGuard Home pode gerar esses perfis de configuração para você. Basta acessar _Guia de Configuração_ → _Privacidade de DNS_ e rolar até iOS.

### Outras implementações

- O próprio AdGuard Home pode ser usado como um cliente DNS seguro em qualquer plataforma.
- [dnsproxy][ag-dnsproxy] é compatível com todos os protocolos de DNS seguros conhecidos.
- [dnscrypt-proxy][dnscrypt-proxy] oferece suporte a `DNS-over-HTTPS`.
- [Mozilla Firefox][firefox] é compatível com `DNS sobre HTTPS`.

[ag-for-android]: https://adguard.com/en/adguard-android/overview.html
[intra]: https://getintra.org
[ag-for-ios]: https://adguard.com/en/adguard-ios/overview.html
[dnscloak]: https://itunes.apple.com/app/id1452162351
[stamps]: https://dnscrypt.info/stamps
[ag-for-windows]: https://adguard.com/en/adguard-windows/overview.html
[ag-dnsproxy]: https://github.com/AdguardTeam/dnsproxy
[dnscrypt-proxy]: https://github.com/jedisct1/dnscrypt-proxy
[firefox]: https://www.mozilla.org/firefox

## Configurando o DNSCrypt {#configure-dnscrypt}

O AdGuard Home pode funcionar como um servidor DNSCrypt. No entanto, esse recurso está disponível apenas por meio de um arquivo de configuração e não pode ser configurado usando a interface web. Este guia explica como fazer isso.

### Gerando um arquivo de configuração

Veja como gerar um arquivo de configuração do DNSCrypt e apontar o AdGuard Home para ele:

:::info Importante

Certifique-se de que suas configurações de TLS sejam válidas e que a criptografia esteja ativada.

:::

1. Obtenha a versão mais recente do utilitário [`dnscrypt`] para o seu sistema. Extraia o arquivo e navegue até o diretório resultante.

   - Em sistemas Unix, usando um shell compatível com POSIX:

     (Aqui e abaixo, `linux-amd64` é usado como um exemplo. Certifique-se de baixar e usar a versão compatível com sua plataforma.)

     1. Extraia os arquivos:

           ```sh
           tar -f ./dnscrypt-linux-amd64-v2.2.3.tar.gz -v -x -z
           ```

        Exemplo de saída:

           ```none
           linux-amd64/
           linux-amd64/README.md
           linux-amd64/LICENSE
           linux-amd64/dnscrypt
           ```

     2. Navegue até o diretório extraído:

           ```sh
           cd ./linux-amd64/
           ```

     3. Gerar o arquivo de configuração:

           ```sh
           ./dnscrypt generate --provider-name '2.dnscrypt-cert.example.org' --out ./dnscrypt.yaml
           ```

        Exemplo de saída:

            ```none
            2022/01/02 12:34:56 [info] Generating configuration for 2.dnscrypt-cert.example.org
            2022/02/02 12:34:56 [info] Configuration has been written to ./dnscrypt.yaml
            2022/02/02 12:34:56 [info] Go to https://dnscrypt.info/stamps to generate an SDNS stamp
            2022/02/02 12:34:56 [info] You can run a DNSCrypt server using the following command:
            2022/02/02 12:34:56 [info] dnscrypt server -c ./dnscrypt.yaml -f 8.8.8.8
            ```

   - No Windows, usando o PowerShell:

     (Aqui e abaixo, `windows-amd64` é usado como exemplo. Certifique-se de baixar e usar a arquitetura de sua CPU.)

     1. Extraia os arquivos:

           ```ps1
           Expand-Archive -Path .\dnscrypt-windows-amd64-v2.2.3.zip
           ```

     2. Navegue até o diretório extraído:

           ```ps1
           Set-Location -Path .\dnscrypt-windows-amd64-v2.2.3\windows-amd64\
           ```

     3. Gerar o arquivo de configuração:

           ```ps1
           .\dnscrypt.exe generate --provider-name '2.dnscrypt-cert.example.org' --out .\dnscrypt.yaml
           ```

        Exemplo de saída:

           ```none
           2022/01/02 12:34:56 [info] Generating configuration for 2.dnscrypt-cert.example.org
           2022/02/02 12:34:56 [info] Configuration has been written to .\dnscrypt.yaml
           2022/02/02 12:34:56 [info] Go to https://dnscrypt.info/stamps to generate an SDNS stamp
           2022/02/02 12:34:56 [info] You can run a DNSCrypt server using the following command:
           2022/02/02 12:34:56 [info] dnscrypt server -c .\dnscrypt.yaml -f 8.8.8.8
           ```

   Onde `example.org` é o nome do seu host e `./dnscrypt.yaml` é o nome do arquivo de saída da configuração.

   Você pode adicionar o caminho para o binário ao seu `PATH`/`$env:PATH`.

2. No arquivo de configuração (normalmente `AdGuardHome.yaml`), adicione as seguintes linhas:

   ```yaml
   'tls':
     # N.B. The encryption must be enabled.
     'enabled': true
     # …
     'port_dnscrypt': 5443
     'dnscrypt_config_file': './dnscrypt.yaml'
   ```

   Onde `5443` é a porta do seu servidor DNSCrypt e `./dnscrypt.yaml` é o nome do arquivo de configuração gerado na etapa 2.

   :::info Importante

   Pare o AdGuard Home antes de alterar o arquivo de configuração.

   :::

   :::dica

   No Windows, recomenda-se usar o caminho completo para o arquivo de configuração. Por exemplo, `C:\Users\Me\Files\dnscrypt.yaml`.

   :::

[`dnscrypt`]: https://github.com/ameshkov/dnscrypt/releases

### Gerando um selo DNSCrypt

Veja como gerar um carimbo DNSCrypt e verificar sua instalação:

1. Vá para [https://dnscrypt.info/stamps/](https://dnscrypt.info/stamps/).

2. Insira os data do seu arquivo de configuração DNSCrypt. A _chave pública do provedor_ é o valor do campo `public_key` no seu arquivo de configuração DNSCrypt.

   :::note

   Insira o host com sua porta personalizada.

   :::

3. Agora você tem um carimbo que se parece mais ou menos com este:

   ```none
   sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn
   ```

   Verifique sua instalação executando o seguinte comando:

   ```sh
   ./dnscrypt lookup-stamp \
       --domain 'example.com' \
       --stamp 'sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn' \
       --type 'a'
   ```

   Ou, no Windows:

   ```ps1
   .\dnscrypt.exe lookup-stamp `
       --domain 'example.com' `
       --stamp 'sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn' `
       --type 'a'
   ```

   Onde `example.com` é o nome de domínio a ser pesquisado.

### Configurando dispositivos para usar DNSCrypt

#### Todas as plataformas

- [`dnscrypt-proxy`][prox] (implementação de referência). DNSCrypt-Proxy é um proxy de linha de comando para Linux, BSD, Windows, macOS, Android e outros.

#### Android

- [AdGuard para Android][andr] oferece suporte ao DNSCrypt.

#### iOS

- [AdGuard para iOS][ios] oferece suporte ao DNSCrypt.
- [DNSCloak][cloa] usa `dnscrypt-proxy` internamente e suporta DNSCrypt.

#### Windows

- [AdGuard para Windows][win] oferece suporte ao DNSCrypt.
- [Simple DNSCrypt][simp] é uma ferramenta simples de gerenciamento para configurar e executar `dnscrypt-proxy` no Windows.

Consulte o [site do DNSCrypt][imps1] e a [lista do projeto de privacidade do DNS][imps2] para obter mais informações.

[andr]: https://adguard.com/en/adguard-android/overview.html
[cloa]: https://itunes.apple.com/app/id1452162351
[imps1]: https://dnscrypt.info/implementations
[imps2]: https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Clients
[ios]: https://adguard.com/en/adguard-ios/overview.html
[prox]: https://github.com/DNSCrypt/dnscrypt-proxy
[simp]: https://simplednscrypt.org/
[win]: https://adguard.com/en/adguard-windows/overview.html
