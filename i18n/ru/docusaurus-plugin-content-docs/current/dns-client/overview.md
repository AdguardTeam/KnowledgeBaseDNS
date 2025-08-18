---
title: Обзор
sidebar_position: 1
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

## Что такое AdGuard DNS Client?

Кроссплатформенный облегчённый DNS-клиент для [AdGuard DNS][agdns]. Он работает как DNS-сервер, перенаправляющий DNS-запросы соответствующим upstream-резолверам.

[agdns]: https://adguard-dns.io

## Быстрый старт {#start}

:::caution

AdGuard DNS Client всё ещё находится в стадии бета-тестирования. Он может быть нестабильным.

:::

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

  On macOS, it’s crucial that globally installed daemons are owned by `root` (see the [`launchd` documentation][launchd-requirements]), so the `AdGuardDNSClient` executable must be placed in the `/Applications/` directory or its subdirectory.

  :::

2. Установите его как службу, выполнив:

  ```sh
  ./AdGuardDNSClient -s install -v
  ```

3. Отредактируйте файл конфигурации `config.yaml`.

4. Запустите службу:

  ```sh
  ./AdGuardDNSClient -s start -v
  ```

Чтобы убедиться, что он работает, используйте любую утилиту проверки DNS. Например, с помощью `nslookup`:

```sh
nslookup -debug 'www.example.com' '127.0.0.1'
```

[launchd-requirements]: https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html
[releases]: https://github.com/AdguardTeam/AdGuardDNSClient/releases

### Windows {#start-basic-win}

Просто скачайте и установите с помощью установщика MSI со страницы [релизы][releases].

Чтобы убедиться, что он работает, используйте любую утилиту проверки DNS. Например, с помощью `nslookup.exe`:

```sh
nslookup -debug "www.example.com" "127.0.0.1"
```

## Параметры командной строки {#opts}

Каждый параметр переопределяет соответствующее значение, предоставленное файлом конфигурации и средой.

### Справка {#opts-help}

Опция `-h` заставляет AdGuard DNS Client выводить справочное сообщение на стандартный вывод и завершать работу с кодом успешного выполнения.

### Сервис {#opts-service}

Параметр `-s <value>` определяет действие службы ОС. Возможные значения:

- `install`: устанавливает AdGuard DNS Client в качестве службы
- `restart`: перезапускает запущенную службу AdGuard DNS Client
- `start`: запускает установленную службу AdGuard DNS Client
- `status`: показывает статус установленной службы AdGuard DNS Client
- `stop`: останавливает запущенный AdGuard DNS Client
- `uninstall`: удаляет службу AdGuard DNS Client

### Подробно {#opts-verbose}

Параметр `-v` включает подробный вывод логов.

### Версия {#opts-version}

Параметр `--version` заставляет AdGuard DNS Client выводить стандартную версию исполняемого файла `AdGuardDNSClient` и завершать работу с кодом успешного завершения.

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
