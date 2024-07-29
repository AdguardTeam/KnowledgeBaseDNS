---
title: Genel Bakış
sidebar_position: 1
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

## AdGuard DNS İstemcisi nedir?

A cross-platform lightweight DNS client for [AdGuard DNS][agdns]. It operates as a DNS server that forwards DNS requests to the corresponding upstream resolvers.

[agdns]: https://adguard-dns.io

## Hızlı başlangıç {#start}

:::caution

AdGuard DNS İstemcisi hâlâ Beta aşamasındadır. Kararsız olabilir.

:::

Desteklenen işletim sistemleri:

- Linux
- macOS
- Windows

Desteklenen CPU mimarileri:

- 64 bit ARM
- AMD64
- i386

## Başlarken {#start-basic}

### Unix benzeri işletim sistemleri {#start-basic-unix}

1. Download and unpack the `.tar.gz` or `.zip` archive from the [releases page][releases].

   :::dikkat

   On macOS, it's crucial that globally installed daemons are owned by `root` (see the [`launchd` documentation][launchd-requirements]), so the `AdGuardDNSClient` executable must be placed in the `/Applications/` directory or its subdirectory.

   :::

2. Çalıştırarak bir hizmet olarak yükleyin:

   ```sh
   ./AdGuardDNSClient -s install -v
   ```

3. `config.yaml` yapılandırma dosyasını düzenleyin.

4. Hizmeti başlatın:

   ```sh
   ./AdGuardDNSClient -s start -v
   ```

Çalıştığını kontrol etmek için herhangi bir DNS kontrol yardımcı programını kullanın. Örneğin, `nslookup` kullanarak:

```sh
nslookup -debug 'www.example.com' '127.0.0.1'
```

[launchd-requirements]: https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html
[releases]: https://github.com/AdguardTeam/AdGuardDNSClient/releases

### Windows {#start-basic-win}

Sadece [sürümler sayfasından][releases] MSI yükleyicisini kullanarak indirin ve kurun.

Çalıştığını kontrol etmek için herhangi bir DNS kontrol yardımcı programını kullanın. Örneğin, `nslookup.exe` kullanarak:

```sh
nslookup -debug "www.example.com" "127.0.0.1"
```

## Komut satırı seçenekleri {#opts}

Her seçenek, yapılandırma dosyası ve çevre tarafından sağlanan ilgili değeri geçersiz kılar.

### Yardım {#opts-help}

Option `-h` makes AdGuard DNS Client print out a help message to standard output and exit with a success status-code.

### Service {#opts-service}

Option `-s <value>` specifies the OS service action. Olası değerler:

- `install`: installs AdGuard DNS Client as a service
- `restart`: çalışan AdGuard DNS İstemcisi hizmetini yeniden başlatır
- `start`: starts the installed AdGuard DNS Client service
- `status`: kurulu AdGuard DNS İstemcisi hizmetinin durumunu gösterir
- `stop`: çalışan AdGuard DNS İstemcisini durdurur
- `uninstall`: AdGuard DNS İstemcisi hizmetini kaldırır

### Verbose {#opts-verbose}

Option `-v` enables the verbose log output.

### Version {#opts-version}

Option `--version` makes AdGuard DNS Client print out the version of the `AdGuardDNSClient` executable to standard output and exit with a success status-code.

## Configuration {#conf}

### File {#conf-file}

The YAML configuration file is described in [its own article][conf], and there is also a sample configuration file `config.dist.yaml`.  Some configuration parameters can also be overridden using the [environment][env].

[conf]: configuration.md
[env]: environment.md

## Exit codes {#exit-codes}

There are a few different exit codes that may appear under different error conditions:

- `0`: Successfully finished and exited, no errors.

- `1`: Internal error, most likely a misconfiguration.

- `2`: Bad command-line argument or value.
