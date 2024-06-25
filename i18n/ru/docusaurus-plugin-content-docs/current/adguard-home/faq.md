---
title: FAQ
sidebar_position: 3
---

## Почему AdGuard Home не блокирует рекламу или онлайн-угрозы? {#doesntblock}

Предположим, вы хотите, чтобы AdGuard Home заблокировал `somebadsite.com`, но по какой-то причине он этого не делает. Попробуем решить эту проблему.

Скорее всего, вы не настроили устройство на использование AdGuard Home в качестве DNS-сервера по умолчанию. Чтобы проверить, используете ли вы AdGuard Home в качестве DNS-сервера по умолчанию:

1. В Windows откройте командную строку (_Пуск_ → _Выполнить_ → `cmd.exe`). В других системах откройте приложение Терминал.

2. Выполните команду `nslookup example.org`. В результате вы увидите что-то вроде этого:

   ```none
   Server: 192.168.0.1
   Address: 192.168.0.1#53

   Non-authoritative answer:
   Name: example.org
   Address: <IPv4>
   Name: example.org
   Address: <IPv6>
   ```

3. Проверьте, является ли IP-адрес, указанный в строке `Server`, тем, на котором запущен AdGuard Home. Если нет, нужно соответствующим образом настроить устройство. Как это сделать, смотрите [ниже](#defaultdns).

4. Убедитесь, что ваш запрос к `example.org ` отображается в интерфейсе AdGuard Home в _Журнале запросов_. Если нет, необходимо настроить AdGuard Home на прослушивание указанного сетевого интерфейса. Самый простой способ сделать это — переустановить AdGuard Home с настройками по умолчанию.

Если вы уверены, что ваше устройство использует AdGuard Home в качестве DNS-сервера по умолчанию, но проблема сохраняется, это может быть связано с неправильной настройкой AdGuard Home. Пожалуйста, проверьте и убедитесь, что:

1. Вы включили настройку _Блокировать домены с использованием фильтров и файлов hosts_ во вкладке _Настройки_ → _Основные настройки_.

2. Вы включили соответствующие механизмы безопасности, такие как родительский контроль, на той же странице.

3. Вы включили соответствующие фильтры, перейдя в _Фильтры_ → _Чёрные списки DNS_.

4. У вас нет списков правил исключений, которые могли бы разрешить запросы, включённые на странице _Фильтры_ → _Белые списки DNS_.

5. У вас нет перезаписей DNS, которые могли бы мешать работе страницы _Фильтры_ → _Перезапись DNS-запросов_.

6. У вас нет пользовательских правил фильтрации, которые могли бы мешать настройкам на странице _Фильтры_ → _Пользовательские правила фильтрации_.

## What does “Blocked by CNAME or IP” in the query log mean? {#logs}

AdGuard Home checks both DNS requests and DNS responses to prevent an adblock evasion technique known as [CNAME cloaking][cname-cloak]. That is, if your filtering rules contain a domain, say `tracker.example`, and a DNS response for some other domain name, for example `blogs.example`, contains this domain name among its CNAME records, that response is blocked, because it actually leads to the blocked tracking service.

[cname-cloak]: https://blog.apnic.net/2020/08/04/characterizing-cname-cloaking-based-tracking/

## Где просмотреть логи? {#logs}

Дефолтное расположение текстовых логов (не путайте их с теми, что в Журнале запросов) зависит от операционной системы и режима установки:

<!-- TODO(a.garipov): Add more info about Docker; add links to tools. -->

- **OpenWrt Linux:** используйте команду `logread -e AdGuardHome`.

- Системы **Linux** с **systemd** и другие системы **Unix** с **SysV-стилем init:** используйте команду `/var/log/AdGuardHome.err`.

- **macOS:** `/var/log/AdGuardHome.stderr.log`.

- В системах **Linux** с **Snapcraft** используйте команду `snap logs adguard-home`.

- **FreeBSD:** `/var/log/daemon.log`.

- **OpenBSD:** `/var/log/daemon`.

- **Windows:** используйте [Журнал событий Windows][wlog].

[wlog]: https://docs.microsoft.com/en-us/windows/win32/wes/windows-event-log

## Как настроить AdGuard Home для записи verbose-логов? {#verboselog}

Для устранения сложной проблемы иногда требуется собрать verbose-логи. Вот как это можно сделать:

1. Остановите AdGuard Home:

   ```sh
   ./AdGuardHome -s stop
   ```

2. Настройте AdGuard Home для записи verbose-логов:

   1. Откройте файл `AdGuardHome.yaml` в своём редакторе.

   2. Установите настройку `log.file` в путь до желаемого файла журнала, например `/tmp/aghlog.txt`. Обратите внимание, что директория должна существовать.

   3. Установите для параметра `log.verbose` значение `true`.

3. Перезапустите AdGuard Home и воспроизведите проблему:

   ```sh
   ./AdGuardHome -s start
   ```

4. Когда вы закончите отладку, установите `log.verbose` обратно на `false`.

## Как отобразить пользовательскую страницу блокировки? {#customblock}

:::note

Прежде чем выполнять все эти действия, обратите внимание, что современные браузеры настроены на использование HTTPS, поэтому они проверяют подлинность сертификата веб-сервера. Это означает, что использование любого из них приведёт к появлению экранов с предупреждениями.

Есть несколько расширений, которые, если они будут достаточно хорошо поддерживаться клиентами, обеспечат лучший опыт использования, в том числе [RFC 8914 Extended DNS Error codes][rfc8914] и [DNS Access Denied Error Page RFC draft][rfcaccess]. Мы внедрим их, когда браузеры начнут их поддерживать.

[rfc8914]: https://datatracker.ietf.org/doc/html/rfc8914
[rfcaccess]: https://datatracker.ietf.org/doc/html/draft-reddy-dnsop-error-page-08

:::

### Необходимые условия

Чтобы использовать любой из этих методов для отображения пользовательской страницы блокировки, вам понадобится HTTP-сервер, работающий на некотором IP-адресе и обслуживающий соответствующую страницу по всем маршрутам. Что-то вроде [`pixelserv-tls`][pxsrv].

[pxsrv]: https://github.com/kvic-z/pixelserv-tls

### Пользовательская страница блокировки для фильтров Родительский контроль и Безопасный просмотр

В настоящее время нет возможности установить эти параметры из пользовательского интерфейса, поэтому вам придётся отредактировать файл конфигурации вручную:

1. Остановите AdGuard Home:

   ```sh
   ./AdGuardHome -s stop
   ```

2. Откройте файл `AdGuardHome.yaml` в своём редакторе.

3. Установите в настройках `dns.parental_block_host` или `dns.safebrowsing_block_host` IP-адрес сервера (в данном примере `192.168.123.45`):

   ```yaml
   # …
   dns:
     # …

     # NOTE: Change to the actual IP address of your server.
     parental_block_host: 192.168.123.45
     safebrowsing_block_host: 192.168.123.45
   ```

4. Перезапустите AdGuard Home:

   ```sh
   ./AdGuardHome -s start
   ```

### Пользовательская страница блокировки для других фильтров

1. Откройте веб-интерфейс.

2. Перейдите в _Настройки_ → _DNS-Настройки_.

3. В разделе _Настройки DNS-сервера_ выберите пункт _Свой IP_ в селекторе _Режим блокировки_ и введите адреса IPv4- и IPv6-серверов.

4. Нажмите _Сохранить_.

## Как изменить адрес интерфейса дашборда? {#webaddr}

1. Остановите AdGuard Home:

   ```sh
   ./AdGuardHome -s stop
   ```

2. Откройте файл `AdGuardHome.yaml` в своём редакторе.

3. Установите параметр 'http.address' на новый сетевой интерфейс. Например:

   - `0.0.0.0:0` для прослушивания на всех сетевых интерфейсах;
   - `0.0.0.0:8080` для прослушивания всех сетевых интерфейсов с портом `8080`;
   - `127.0.0.1:0` для прослушивания только локального loopback-интерфейса.

4. Перезапустите AdGuard Home:

   ```sh
   ./AdGuardHome -s start
   ```

## Как настроить AdGuard Home в качестве DNS-сервера по умолчанию? {#defaultdns}

Вся необходимая информация есть в разделе [_Настройка устройств_](getting-started.md#configure-devices) на странице _Начало работы_.

## Существуют ли какие-то известные ограничения? {#limitations}

Вот несколько примеров того, что блокировщик DNS-уровня не сможет заблокировать:

- Реклама на YouTube, Twitch.

- Спонсируемые посты Facebook, X (ранее Twitter), Instagram.

В принципе, любая реклама, имеющая общий домен с контентом, не может быть заблокирована блокировщиком на уровне DNS, если только вы не готовы заблокировать и контент.

### Есть ли возможность решить эту проблему в будущем?

DNS никогда с этим не справится. Единственный вариант — использовать прокси-сервер для блокировки контента, как это сделано в [приложениях AdGuard][adguard]. В будущем мы добавим поддержку этой функции в AdGuard Home. К сожалению, даже тогда будут случаи, когда этого будет недостаточно или потребуется довольно сложная настройка.

[adguard]: https://adguard.com/

## Почему я получаю ошибку `bind: address already in use` при попытке установки на Ubuntu? {#bindinuse}

Это происходит потому, что порт 53 на `localhost`, который используется для DNS, уже занят другой программой. Ubuntu поставляется с локальным DNS под названием `systemd-resolved`, который использует адрес `127.0.0.53:53`, что не позволяет AdGuard Home привязываться к `127.0.0.1:53`. Вы можете убедиться в этом, выполнив команду:

```sh
sudo lsof -i :53
```

Результат должен быть похож на следующий:

```none
COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME
systemd-r 14542 systemd-resolve 13u IPv4 86178 0t0 UDP 127.0.0.53:domain
systemd-r 14542 systemd-resolve 14u IPv4 86179 0t0 TCP 127.0.0.53:domain
```

Чтобы это исправить, вам необходимо либо отключить демон `systemd-resolved`, либо выбрать другой сетевой интерфейс и привязать AdGuard Home к доступному IP-адресу на нём, например, к IP-адресу вашего роутера внутри вашей сети. Но если вам нужно прослушивать `localhost`, есть несколько решений.

Во-первых, AdGuard Home может обнаружить такие конфигурации и отключить `systemd-resolved, если вы нажмёте кнопку *Fix*, расположенную рядом с сообщением `address already in use\` на экране установки.

Во-вторых, если это не сработает, следуйте инструкциям ниже. Обратите внимание: если вы используете AdGuard Home с Docker или Snap, вам придётся сделать это самостоятельно.

1. Создайте каталог `/etc/systemd/resolved.conf.d`, если это необходимо:

   ```sh
   sudo mkdir -p /etc/systemd/resolved.conf.d
   ```

2. Деактивируйте `DNSStubListener` и обновите адрес DNS-сервера. Для этого создайте новый файл `/etc/systemd/resolved.conf.d/adguardhome.conf` со следующим содержимым:

   ```service
   [Resolve]
   DNS=127.0.0.1
   DNSStubListener=no
   ```

Указать `127.0.0.1` в качестве адреса DNS-сервера **необходимо**. В противном случае сервером имён будет `127.0.0.53`, который не будет работать без `DNSStubListener`.

1. Активируйте ещё один файл `resolv.conf`:

   ```sh
   sudo mv /etc/resolv.conf /etc/resolv.conf.backup
   sudo ln -s /run/systemd/resolve/resolv.conf /etc/resolv.conf
   ```

2. Перезапустите DNSStubListener:

   ```sh
   sudo systemctl reload-or-restart systemd-resolved
   ```

После этого `systemd-resolved` не должен будет отображаться в выводе `lsof`, а AdGuard Home сможет привязываться к `127.0.0.1:53`.

## Как настроить обратный прокси-сервер для AdGuard Home? {#reverseproxy}

Если вы уже используете веб-сервер и хотите получить доступ к панели управления AdGuard Home с URL-адреса типа `http://YOUR_SERVER/aghome/`, вы можете использовать эту конфигурацию для своего веб-сервера:

### nginx

```nginx
location /aghome/ {
 proxy_cookie_path / /aghome/;
 proxy_pass http://AGH_IP:AGH_PORT/;
 proxy_redirect / /aghome/;
 proxy_set_header Host $host;
}
```

### caddy

```none
:80/aghome/* {
 route {
 uri strip_prefix /aghome
 reverse_proxy AGH_IP:AGH_PORT
 }
}
```

Или, если вы хотите обслуживать AdGuard Home только с автоматическим TLS, используйте конфигурацию, аналогичную примеру ниже:

```none
DOMAIN {
 encode gzip zstd
 tls YOUR_EMAIL@DOMAIN
 reverse_proxy AGH_IP:AGH_PORT
}
```

### Отключите шифрование DoH на AdGuard Home

Если вы используете TLS на обратном прокси-сервере, вам не нужно использовать TLS на AdGuard Home. Установите `allow_unencrypted_doh: true` в `AdGuardHome.yaml`, чтобы разрешить AdGuard Home отвечать на запросы DoH без шифрования TLS.

### Реальные IP-адреса клиентов

Вы можете установить параметр `trusted_proxies` на IP-адрес(-а) вашего HTTP-прокси, чтобы AdGuard Home учитывал заголовки, содержащие реальный IP-адрес клиента. Дополнительную информацию смотрите на страницах [настроек][conf] и [шифрования][encr].

[encr]: https://github.com/AdguardTeam/AdGuardHome/wiki/Encryption#reverse-proxy
[conf]: https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration

## Как исправить ошибки `permission denied` на Fedora? {#fedora}

1. Переместите двоичный файл `AdGuardHome` в `/usr/local/bin`.

2. От имени `root` выполните следующую команду, чтобы изменить контекст безопасности файла:

   ```sh
   chcon -t bin_t /usr/local/bin/AdGuardHome
   ```

3. Добавьте необходимые правила фаервола, чтобы сделать его доступным через сеть. Например:

   ```sh
   firewall-cmd --new-zone=adguard --permanent
   firewall-cmd --zone=adguard --add-source=192.168.0.14/24 --permanent
   firewall-cmd --zone=adguard --add-port=3000/tcp --permanent
   firewall-cmd --zone=adguard --add-port=53/udp --permanent
   firewall-cmd --zone=adguard --add-port=80/tcp --permanent
   firewall-cmd --reload
   ```

Если вы по-прежнему получаете `code=exited status=203/EXEC` или подобные ошибки из `systemctl`, попробуйте удалить AdGuard Home и установить его **напрямую** в `/usr/local/bin` с помощью опции `-o ` сценария установки:

```sh
curl -s -S -L 'https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh' | sh -s -- -o '/usr/local/bin' -v
```

Смотрите \[ошибку 765] и \[ошибку 3281].

[issue 3281]: https://github.com/AdguardTeam/AdGuardHome/issues/3281
[issue 765]: https://github.com/AdguardTeam/AdGuardHome/issues/765#issuecomment-752262353

## Как исправить ошибки `incompatible file system`? {#incompatfs}

Переместите установку или рабочую директорию AdGuard Home в другое место. Вся необходимая информация есть в разделе [_Ограничения_](getting-started.md#limitations) на странице _Начало работы_.

## What does `Error: control/version.json` mean? {#version-error}

This error message means that AdGuard Home was unable to reach AdGuard servers to check for updates and/or download them. This could mean that the servers are blocked by your ISP or are temporarily down. If the error does not resolve itself after some time, you can try performing a [manual update](#manual-update) or disabling the automatic update check by running the `AdGuardHome` executable with the `--no-check-update` command-line option.

## Как обновить AdGuard Home вручную? {#manual-update}

Если кнопка не отображается или автоматическое обновление не удалось, вы можете выполнить его вручную. В примерах ниже мы будем использовать версии AdGuard Home для Linux и Windows для процессоров AMD64.

### Unix (Linux, macOS, BSD) {#manual-update-unix}

1. Загрузите новый пакет AdGuard Home со [страницы релизов][releases]. Если вы хотите выполнить этот шаг из командной строки, введите:

   ```sh
   curl -L -S -o '/tmp/AdGuardHome_linux_amd64.tar.gz' -s\
   'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'
   ```

   Или с помощью `wget`:

   ```sh
   wget -O '/tmp/AdGuardHome_linux_amd64.tar.gz'\
   'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'
   ```

2. Перейдите в директорию, в которой установлен AdGuard Home. On most Unix systems the default directory is `/opt/AdGuardHome`, but on macOS it’s `/Applications/AdGuardHome`.

3. Остановите AdGuard Home:

   ```sh
   sudo ./AdGuardHome -s stop
   ```

   :::note OpenBSD

   On OpenBSD, you will probably want to use `doas` instead of `sudo`.

   :::

4. Backup your data. That is, your configuration file and the data directory (`AdGuardHome.yaml` and `data/` by default). For example, to backup your data to a new directory called `~/my-agh-backup`:

   ```sh
   mkdir -p ~/my-agh-backup
   cp -r ./AdGuardHome.yaml ./data ~/my-agh-backup/
   ```

5. Extract the AdGuard Home archive to a temporary directory. For example, if you downloaded the archive to your `~/Downloads` directory and want to extract it to `/tmp/`:

   ```sh
   tar -C /tmp/ -f ~/Downloads/AdGuardHome_linux_amd64.tar.gz -x -v -z
   ```

   On macOS, type something like:

   ```sh
   unzip -d /tmp/ ~/Downloads/AdGuardHome_darwin_amd64.zip
   ```

6. Replace the old AdGuard Home executable file with the new one. On most Unix systems the command would look something like this:

   ```sh
   sudo cp /tmp/AdGuardHome/AdGuardHome /opt/AdGuardHome/AdGuardHome
   ```

   On macOS, something like:

   ```sh
   sudo cp /tmp/AdGuardHome/AdGuardHome /Applications/AdGuardHome/AdGuardHome
   ```

   You may also want to copy the documentation parts of the package, such as the change log (`CHANGELOG.md`), the README file (`README.md`), and the license (`LICENSE.txt`).

   You can now remove the temporary directory.

7. Перезапустите AdGuard Home:

   ```sh
   sudo ./AdGuardHome -s start
   ```

[releases]: https://github.com/AdguardTeam/AdGuardHome/releases/latest

### Windows (Using PowerShell) {#manual-update-win}

In all examples below, the PowerShell must be run as Administrator.

1. Загрузите новый пакет AdGuard Home со [страницы релизов][releases]. If you want to perform this step from the command line:

   ```ps1
   $outFile = Join-Path -Path $Env:USERPROFILE -ChildPath 'Downloads\AdGuardHome_windows_amd64.zip'
   $aghUri = 'https://static.adguard.com/adguardhome/release/AdGuardHome_windows_amd64.zip'
   Invoke-WebRequest -OutFile "$outFile" -Uri "$aghUri"
   ```

2. Navigate to the directory where AdGuard Home was installed. In the examples below, we’ll use `C:\Program Files\AdGuardHome`.

3. Остановите AdGuard Home:

   ```ps1
   .\AdGuardHome.exe -s stop
   ```

4. Backup your data. That is, your configuration file and the data directory (`AdGuardHome.yaml` and `data/` by default). For example, to backup your data to a new directory called `my-agh-backup`:

   ```ps1
   $newDir = Join-Path -Path $Env:USERPROFILE -ChildPath 'my-agh-backup'
   New-Item -Path $newDir -ItemType Directory
   Copy-Item -Path .\AdGuardHome.yaml, .\data -Destination $newDir -Recurse
   ```

5. Extract the AdGuard Home archive to a temporary directory. For example, if you downloaded the archive to your `Downloads` directory and want to extract it to a temporary directory:

   ```ps1
   $outFile = Join-Path -Path $Env:USERPROFILE -ChildPath 'Downloads\AdGuardHome_windows_amd64.zip'
   Expand-Archive -Path "$outFile" -DestinationPath $Env:TEMP
   ```

6. Replace the old AdGuard Home executable file with the new one. Например:

   ```ps1
   $aghExe = Join-Path -Path $Env:TEMP -ChildPath 'AdGuardHome\AdGuardHome.exe'
   Copy-Item -Path "$aghExe" -Destination .\AdGuardHome.exe
   ```

   You may also want to copy the documentation parts of the package, such as the change log (`CHANGELOG.md`), the README file (`README.md`), and the license (`LICENSE.txt`).

   You can now remove the temporary directory.

7. Перезапустите AdGuard Home:

   ```ps1
   .\AdGuardHome.exe -s start
   ```

## How do I uninstall AdGuard Home? {#uninstall}

Depending on how you installed AdGuard Home, there are different ways to uninstall it.

:::caution

Before uninstalling AdGuard Home, don’t forget to change the configuration of your devices and point them to a different DNS server.

:::

### Regular installation

In this case, do the following:

- Unregister AdGuard Home service: `./AdGuardHome -s uninstall`.

- Remove the AdGuard Home directory.

### Docker

Simply stop and remove the image.

### Snap Store

```sh
snap remove adguard-home
```
