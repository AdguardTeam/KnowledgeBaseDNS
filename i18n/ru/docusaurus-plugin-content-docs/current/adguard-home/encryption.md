---
title: DNS-шифрование
sidebar_position: 6
---

AdGuard Home поддерживает все современные протоколы DNS-шифрования **из коробки**:

- [DNS-over-HTTPS](https://en.wikipedia.org/wiki/DNS_over_HTTPS)
- [DNS-over-TLS](https://en.wikipedia.org/wiki/DNS_over_TLS)
- [DNS-over-QUIC](https://datatracker.ietf.org/doc/html/rfc9250)

:::note

AdGuard Home поддерживает [DNSCrypt][dnscrypt-info] как на стороне клиента, так и на стороне сервера. [Узнайте, как настроить AdGuard Home как DNSCrypt-сервер](#configure-dnscrypt).

:::

В этом руководстве объясняется, как настроить зашифрованный DNS-сервер с помощью AdGuard Home.

[dnscrypt-info]: https://dnscrypt.info/

## Установка сервера {#server-installation}

Цель защиты DNS-трафика — обезопасить его от третьих лиц, таких как интернет-провайдеры, которые могут анализировать или изменять его.

{/* TODO(e.burkov):  Use relative links to the docs instead of absolute, see AGDNS-2226. */}

Это означает, что вам понадобится сервер с публичным выделенным IP-адресом. Есть множество недорогих провайдеров облачных серверов: [DigitalOcean][digital-ocean], [Vultr][vultr], [Linode][linode] и другие. Просто выберите один из них, создайте там облачный сервер и [установите AdGuard Home](adguard-home/getting-started.md) на свой сервер.

[digital-ocean]: https://digitalocean.com
[vultr]: https://vultr.com
[linode]: https://www.linode.com

## Регистрация доменного имени {#register-domain}

Прежде всего, вам понадобится доменное имя. Если вы никогда его не регистрировали, вам поможет [простая инструкция][domain-name-register].

[domain-name-register]: https://www.pcworld.com/article/241722/web-apps/how-to-register-your-own-domain-name.html

## Получение SSL-сертификата {#certificate}

И `DNS-over-HTTPS`, и `DNS-over-TLS` основаны на [TLS-шифровании][tls-wikipedia], поэтому для их использования вам потребуется SSL-сертификат.

SSL-сертификат можно купить в центре сертификации (Certificate Authority, CA) — компании, которой браузеры и операционные системы доверяют регистрацию SSL-сертификатов для доменов.

Или получите сертификат бесплатно от центра сертификации [Let's Encrypt CA][letsencrypt], разработанного Internet Security Research Group (ISRG).

Вот руководство по получению бесплатного сертификата.

### Используйте CertBot

Certbot — это простой в использовании клиент, который получает сертификат от Let’s Encrypt.

1. Перейдите на [certbot.eff.org][certbot] и выберите _None of the above_ в выпадающем меню Software и вашу операционную систему.
2. Следуйте инструкции по установке и остановитесь, прежде чем дойдёте до раздела _Get Started_.

#### Получите сертификат с помощью DNS-проверки

Если у вас есть доменное имя, проще всего получить сертификат через DNS-проверку.

Выполните эту команду и следуйте инструкциям Certbot:

```sh
sudo certbot certonly --manual --preferred-challenges=dns --preferred-chain="ISRG Root X1"
```

В конце вы получите два файла:

- `fullchain.pem`: ваш SSL-сертификат в кодировке PEM
- `privkey.pem`: ваш приватный ключ в PEM-кодировке

Оба будут необходимы для настройки AdGuard Home.

:::info Важно

Для обновления существующего сертификата вам потребуется выполнить ту же процедуру.

:::

### Используйте Lego

Также есть хорошая и простая альтернатива CertBot — [LEGO][lego-source].

1. Установите его с помощью [подходящего метода][lego-install].
2. Выберите своего DNS-провайдера из [списка][lego-provider] и следуйте инструкциям, чтобы получить сертификат.

Также есть [простой скрипт][legoagh], который можно использовать для автоматизации генерации и продления сертификатов.

[tls-wikipedia]: https://en.wikipedia.org/wiki/Transport_Layer_Security
[letsencrypt]: https://letsencrypt.org
[certbot]: https://certbot.eff.org
[lego-source]: https://go-acme.github.io/lego
[lego-install]: https://go-acme.github.io/lego/installation
[lego-provider]: https://go-acme.github.io/lego/dns
[legoagh]: https://github.com/ameshkov/legoagh

## Настройка AdGuard Home {#configure}

1. Откройте веб-интерфейс AdGuard Home и перейдите в раздел _Настройки_.

2. Выберите раздел _Шифрование_.

   !\[Скриншот настроек шифрования]\[скриншот шифрования]

3. Скопируйте и вставьте содержимое файла `fullchain.pem` в поле ввода в разделе _Сертификаты_ или укажите путь к файлу.

4. Скопируйте и вставьте содержимое файла `privkey.pem` в поле _Приватный ключ_ или укажите путь к файлу.

5. Введите имя вашего домена в поле _Имя сервера_.

6. Получите сообщения об успешной проверке и нажмите _Сохранить настройки_.

:::note

AdGuard Home будет автоматически перезагружать сертификаты и/или приватные ключи, указанные в пути к файлу, при их изменении. Перезагрузка также может быть инициирована сигналом `SIGHUP`.

:::

[encryption-screenshot]: https://cdn.adtidy.org/content/kb/dns/adguard-home/encryption-screenshot.png

## Использование с обратным прокси {#reverse-proxy}

У нас уже есть [руководство][reverse-proxy-faq] по настройке обратного прокси-сервера для доступа к веб-интерфейсу AdGuard Home.

AdGuard Home может ограничивать запросы DNS-over-HTTPS, которые поступают с прокси-сервера, не входящего в список «доверенных». По умолчанию он настроен на приём запросов с IPv4 и IPv6 loopback-адресов.

Чтобы AdGuard Home обрабатывал DNS-over-HTTPS запросы с обратного прокси-сервера, установите параметр `trusted_proxies` в `AdGuardHome.yaml` на IP-адрес прокси-сервера. Если у вас несколько прокси-серверов, вы можете использовать CIDR вместо простого IP-адреса.

### Обратный прокси Nginx

Чтобы настроить AdGuard Home для принятия запросов от обратного прокси-сервера Nginx, убедитесь, что сам обратный прокси-сервер настроен правильно.

Файл 'nginx.conf' должен содержать соответствующие директивы для добавления поддерживаемых заголовков пересылки в запрос — `X-Real-IP` или `X-Forwarded-For`. Это можно реализовать с помощью [`ngx_http_realip_module`][ngx-http-realip-module]. Вкратце процесс такой: модуль берёт реальный IP-адрес клиента и записывает его в заголовок HTTP-запроса. AdGuard Home получит и интерпретирует значение этого заголовка как реальный адрес клиента. Адрес обратного прокси-сервера также будет получен и проверен по списку «доверенных» прокси.

Ещё один заголовок, который вы, возможно, захотите использовать в качестве прокси, — это заголовок `Host`, необходимый для того, чтобы AdGuard Home распознавал запросы от клиентов, у которых в имени хоста присутствует ClientID.

Например, если конфигурация обратного прокси-сервера содержит следующие директивы:

```nginx
location /dns-query {
  # …
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP '1.2.3.4';
  proxy_bind 192.168.1.2;
  # …
}
```

AdGuard Home получит `192.168.1.2` как адрес вашего прокси-сервера и проверит его по `trusted_proxies`. Доступ к `1.2.3.4` будет контролироваться настройками доступа в случае, если прокси-сервер является «доверенным».

### Cloudflare CDN

Сеть доставки контента Cloudflare выступает в роли обратного прокси-сервера, добавляя свои собственные заголовки [cloudflare-headers] к пересылаемым запросам, которые имеют вид `CF-Connecting-IP` и `True-Client-IP`. Они также поддерживаются AdGuard Home, поэтому [адреса][cloudflare-addresses] обратных прокси-серверов можно вставить напрямую в список `trusted_proxies`. Инструкции по восстановлению IP-адреса исходного посетителя можно найти в [официальном справочнике Cloudflare][cloudflare-real-ip].

### Другие заголовки

В будущем AdGuard Home может начать поддерживать и другие HTTP-заголовки. Однако любые запросы на добавление функций, связанных с заголовками, следует сначала попытаться удовлетворить путем настройки обратного прокси-сервера.

Например, чтобы изменить механизм [HTTP Strict Transport Security][hsts], включив экспериментальную директиву `preload`, можно использовать примерно следующий фрагмент конфигурации:

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

## Настройка устройств {#configure-devices}

### Android

- Android 9 и выше поддерживает `DNS-over-TLS` нативно. Для настройки перейдите в _Настройки_ → _Сеть и интернет_ → _Другие соединения_ → _Частный DNS_ и введите там имя своего домена.
- [AdGuard для Android][ag-for-android] поддерживает `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` и `DNS-over-QUIC`.
- [Intra][intra] добавляет поддержку `DNS-over-HTTPS` на Android.

### iOS

- iOS 14 и выше поддерживают `DNS-over-TLS` и `DNS-over-HTTPS` нативно через профили конфигурации. Для упрощения процесса AdGuard Home может автоматически создавать для вас эти профили. Просто перейдите в _Инструкцию по настройке_ → _Зашифрованный DNS_ и прокрутите до iOS.
- [AdGuard для iOS][ag-for-ios] поддерживает `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` и `DNS-over-QUIC`.
- [DNSCloak][dnscloak] поддерживает `DNS-over-HTTPS`, но чтобы настроить его для использования собственного сервера, нужно сгенерировать [DNS Stamp][stamps] для него.

### Windows

- Windows 10 Build 19628 и выше поддерживают `DNS-over-HTTPS` нативно.
- [AdGuard для Windows][ag-for-windows] поддерживает `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` и `DNS-over-QUIC`.

### macOS

- macOS Big Sur и выше поддерживают `DNS-over-TLS` и `DNS-over-HTTPS` нативно через профили конфигурации. Для упрощения процесса AdGuard Home может автоматически создавать для вас эти профили. Просто перейдите в _Инструкцию по настройке_ → _Зашифрованный DNS_ и прокрутите до iOS.

### Другие решения

- Сам по себе AdGuard Home может быть безопасным DNS-клиентом на любой платформе.
- [dnsproxy][ag-DNSPROXY] поддерживает все известные безопасные DNS-протоколы.
- [dnscrypt-proxy][dnscrypt-proxy] поддерживает `DNS-over-HTTPS`.
- [Mozilla Firefox][firefox] поддерживает `DNS-over-HTTPS`.

[ag-for-android]: https://adguard.com/en/adguard-android/overview.html
[intra]: https://getintra.org
[ag-for-ios]: https://adguard.com/en/adguard-ios/overview.html
[dnscloak]: https://itunes.apple.com/app/id1452162351
[stamps]: https://dnscrypt.info/stamps
[ag-for-windows]: https://adguard.com/en/adguard-windows/overview.html
[ag-dnsproxy]: https://github.com/AdguardTeam/dnsproxy
[dnscrypt-proxy]: https://github.com/jedisct1/dnscrypt-proxy
[firefox]: https://www.mozilla.org/firefox

## Настройка DNSCrypt {#configure-dnscrypt}

AdGuard Home может работать как DNSCrypt-сервер. Однако эта функция доступна только через файл конфигурации и не может быть настроена с помощью веб-интерфейса. В этом руководстве указаны все тонкости настройки.

### Создание файла конфигурации

Рассказываем, как сгенирировать файл конфигурации DNSCrypt и указать его в AdGuard Home:

:::info Важно

Убедитесь, что настройки TLS верны и шифрование включено.

:::

1. Загрузите последнюю версию утилиты [`dnscrypt`] для вашей системы. Распакуйте архив и перейдите в полученную директорию.

   - В Unix при использовании POSIX-совместимой оболочки:

     (Здесь и далее `linux-amd64` используется в качестве примера. Убедитесь, что вы скачали и используете версию для вашей платформы.)

     1. Извлеките файлы:

           ```sh
           tar -f ./dnscrypt-linux-amd64-v2.2.3.tar.gz -v -x -z
           ```

        Пример результата:

           ```none
           linux-amd64/
           linux-amd64/README.md
           linux-amd64/LICENSE
           linux-amd64/dnscrypt
           ```

     2. Перейдите в извлечнёную директорию:

           ```sh
           cd ./linux-amd64/
           ```

     3. Сгенерируйте файл конфигурации:

           ```sh
           ./dnscrypt generate --provider-name '2.dnscrypt-cert.example.org' --out ./dnscrypt.yaml
           ```

        Пример результата:

            ```none
            2022/01/02 12:34:56 [info] Generating configuration for 2.dnscrypt-cert.example.org
            2022/02/02 12:34:56 [info] Configuration has been written to ./dnscrypt.yaml
            2022/02/02 12:34:56 [info] Go to https://dnscrypt.info/stamps to generate an SDNS stamp
            2022/02/02 12:34:56 [info] You can run a DNSCrypt server using the following command:
            2022/02/02 12:34:56 [info] dnscrypt server -c ./dnscrypt.yaml -f 8.8.8.8
            ```

   - В Windows, с использованием PowerShell:

     (Здесь и далее `windows-amd64` используется в качестве примера. Убедитесь, что вы скачали и используете версию для вашей архитектуры процессора.)

     1. Извлеките файлы:

           ```ps1
           Expand-Archive -Path .\dnscrypt-windows-amd64-v2.2.3.zip
           ```

     2. Перейдите в извлечнёную директорию:

           ```ps1
           Set-Location -Path .\dnscrypt-windows-amd64-v2.2.3\windows-amd64\
           ```

     3. Сгенерируйте файл конфигурации:

           ```ps1
           .\dnscrypt.exe generate --provider-name '2.dnscrypt-cert.example.org' --out .\dnscrypt.yaml
           ```

        Пример результата:

           ```none
           2022/01/02 12:34:56 [info] Generating configuration for 2.dnscrypt-cert.example.org
           2022/02/02 12:34:56 [info] Configuration has been written to .\dnscrypt.yaml
           2022/02/02 12:34:56 [info] Go to https://dnscrypt.info/stamps to generate an SDNS stamp
           2022/02/02 12:34:56 [info] You can run a DNSCrypt server using the following command:
           2022/02/02 12:34:56 [info] dnscrypt server -c .\dnscrypt.yaml -f 8.8.8.8
           ```

   Где `example.org` — имя вашего хоста, а `./dnscrypt.yaml` — имя файла с конфигурацией, который будет создан.

   Вы можете добавить путь к бинарному файлу в свой `PATH`/`$env:PATH`.

2. В конфигурационный файл (обычно `AdGuardHome.yaml`) добавьте следующие строки:

   ```yaml
   'tls':
     # N.B. The encryption must be enabled.
     'enabled': true
     # …
     'port_dnscrypt': 5443
     'dnscrypt_config_file': './dnscrypt.yaml'
   ```

   Где `5443` — это порт вашего DNSCrypt-сервера, а `./dnscrypt.yaml` — это имя конфигурационного файла, сгенерированного на втором шаге.

   :::info Важно

   Перед изменением конфигурационного файла остановите AdGuard Home.

   :::

   :::tip

   В Windows рекомендуется использовать полный путь к файлу конфигурации. For example, `C:\Users\Me\Files\dnscrypt.yaml`.

   :::

[`dnscrypt`]: https://github.com/ameshkov/dnscrypt/releases

### Создание DNSCrypt stamp

Вот как можно сгенерировать DNSCrypt stamp и проверить установку:

1. Перейдите по ссылке [https://dnscrypt.info/stamps/](https://dnscrypt.info/stamps/).

2. Введите данные из файла конфигурации DNSCrypt. _Публичный ключ провайдера_ — это значение поля `public_key` в вашем конфигурационном файле DNSCrypt.

   :::note

   Введите хост с пользовательским портом.

   :::

3. Теперь у вас есть метка, которая выглядит примерно так:

   ```none
   sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn
   ```

   Проверьте правильность установки, выполнив команду:

   ```sh
   ./dnscrypt lookup-stamp \
       --domain 'example.com' \
       --stamp 'sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn' \
       --type 'a'
   ```

   Или на Windows:

   ```ps1
   .\dnscrypt.exe lookup-stamp `
       --domain 'example.com' `
       --stamp 'sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn' `
       --type 'a'
   ```

   Где `example.com` — это доменное, для которого выполняется запрос.

### Настройка устройств для использования DNSCrypt

#### Все платформы

- [`dnscrypt-proxy`][prox] (эталонная реализация). DNSCrypt-Proxy — это прокси-сервер командной строки для Linux, BSD, Windows, macOS, Android и других операционных систем.

#### Android

- [AdGuard для Android][andr] поддерживает DNSCrypt.

#### iOS

- [AdGuard для iOS][ios] поддерживает DNSCrypt.
- [DNSCloak][cloa] использует `dnscrypt-proxy` внутри и поддерживает DNSCrypt.

#### Windows

- [AdGuard для Windows][win] поддерживает DNSCrypt.
- [Simple DNSCrypt][simp] — это простой инструмент управления для настройки и запуска `dnscrypt-proxy` в Windows.

Дополнительная информация на сайте [DNSCrypt][imps1] и [в списке DNS privacy project][imps2].

[andr]: https://adguard.com/en/adguard-android/overview.html
[cloa]: https://itunes.apple.com/app/id1452162351
[imps1]: https://dnscrypt.info/implementations
[imps2]: https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Clients
[ios]: https://adguard.com/en/adguard-ios/overview.html
[prox]: https://github.com/DNSCrypt/dnscrypt-proxy
[simp]: https://simplednscrypt.org/
[win]: https://adguard.com/en/adguard-windows/overview.html
