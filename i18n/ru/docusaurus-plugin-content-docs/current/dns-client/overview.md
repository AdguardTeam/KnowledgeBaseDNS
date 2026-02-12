---
title: Обзор
sidebar_position: 1
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

## What is AdGuard DNS CLI?

A cross-platform lightweight DNS client for [AdGuard DNS]. Он работает как DNS-сервер, перенаправляющий DNS-запросы соответствующим upstream-резолверам.

[AdGuard DNS]: https://adguard-dns.io

## Быстрый старт {#start}

Поддерживаемые операционные системы:

- Linux
- macOS
- Windows

Поддерживаемые архитектуры процессоров:

- 64-разрядный ARM
- AMD64
- i386

## Начало работы {#start-basic}

### Unix-подобные операционные системы {#start-basic-unix}

1. Скачайте и распакуйте архив `.tar.gz` или `.zip` [со страницы релизов][releases].

   :::caution

   On macOS, it’s crucial that globally installed daemons are owned by `root` (see the [`launchd` documentation][launchd-requirements]), so the `adguarddns-cli` executable must be placed in the `/Applications/` directory or its subdirectory.

   :::

2. Установите его как службу, выполнив:

   ```sh
   ./adguarddns-cli -s install -v
   ```

3. Отредактируйте файл конфигурации `config.yaml`.

4. Запустите службу:

   ```sh
   ./adguarddns-cli -s start -v
   ```

Чтобы убедиться, что он работает, используйте любую утилиту проверки DNS. Например, с помощью `nslookup`:

```sh
nslookup -debug 'www.example.com' '127.0.0.1'
```

[launchd-requirements]: https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html
[releases]: https://github.com/AdguardTeam/AdGuardDNSCLI/releases

### Windows {#start-basic-win}

Просто скачайте и установите с помощью установщика MSI со страницы [релизы][releases].

Чтобы убедиться, что он работает, используйте любую утилиту проверки DNS. Например, с помощью `nslookup.exe`:

```sh
nslookup -debug "www.example.com" "127.0.0.1"
```

## Параметры командной строки {#opts}

Каждый параметр переопределяет соответствующее значение, предоставленное файлом конфигурации и средой.

### Справка {#opts-help}

Option `-h` makes AdGuard DNS CLI print out a help message to standard output and exit with a success status-code.

### Сервис {#opts-service}

Параметр `-s <value>` определяет действие службы ОС. Возможные значения:

- `install`: installs AdGuard DNS CLI as a service
- `restart`: restarts the running AdGuard DNS CLI service
- `start`: starts the installed AdGuard DNS CLI service
- `status`: shows the status of the installed AdGuard DNS CLI service
- `stop`: stops the running AdGuard DNS CLI
- `uninstall`: uninstalls AdGuard DNS CLI service

### Подробно {#opts-verbose}

Параметр `-v` включает подробный вывод логов.

### Версия {#opts-version}

Option `--version` makes AdGuard DNS CLI print out the version of the application to standard output and exit with a success status-code.

## Конфигурация {#conf}

### Файл {#conf-file}

Конфигурационный файл YAML описан [в отдельной статье][conf], там же есть пример конфигурационного файла `config.dist.yaml`.  Некоторые параметры конфигурации также можно переопределить с помощью [среды][env].

[conf]: configuration.md
[env]: environment.md

## Коды выхода {#exit-codes}

Существует несколько кодов выхода, которые могут появляться при различных условиях ошибки:

- `0`: успешное завершение и выход, ошибок нет.

- `1`: внутренняя ошибка, скорее всего, неправильная конфигурация.

- `2`: неверный аргумент или значение командной строки.
