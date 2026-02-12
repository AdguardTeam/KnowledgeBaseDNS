---
title: Genel Bakış
sidebar_position: 1
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

## What is AdGuard DNS CLI?

A cross-platform lightweight DNS client for [AdGuard DNS]. It operates as a DNS server that forwards DNS requests to the corresponding upstream resolvers.

[AdGuard DNS]: https://adguard-dns.io

## Hızlı başlangıç {#start}

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

1. `.tar.gz` or `.zip` arşivini [sürümler sayfasından][releases] indirin ve açın.

   :::caution

   On macOS, it’s crucial that globally installed daemons are owned by `root` (see the [`launchd` documentation][launchd-requirements]), so the `adguarddns-cli` executable must be placed in the `/Applications/` directory or its subdirectory.

   :::

2. Çalıştırarak bir hizmet olarak yükleyin:

   ```sh
   ./adguarddns-cli -s install -v
   ```

3. `config.yaml` yapılandırma dosyasını düzenleyin.

4. Hizmeti başlatın:

   ```sh
   ./adguarddns-cli -s start -v
   ```

Çalıştığını kontrol etmek için herhangi bir DNS kontrol yardımcı programını kullanın. Örneğin, `nslookup` kullanarak:

```sh
nslookup -debug 'www.example.com' '127.0.0.1'
```

[launchd-requirements]: https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html
[releases]: https://github.com/AdguardTeam/AdGuardDNSCLI/releases

### Windows {#start-basic-win}

Sadece [sürümler sayfasından][releases] MSI yükleyicisini kullanarak indirin ve kurun.

Çalıştığını kontrol etmek için herhangi bir DNS kontrol yardımcı programını kullanın. Örneğin, `nslookup.exe` kullanarak:

```sh
nslookup -debug "www.example.com" "127.0.0.1"
```

## Komut satırı seçenekleri {#opts}

Her seçenek, yapılandırma dosyası ve çevre tarafından sağlanan ilgili değeri geçersiz kılar.

### Yardım {#opts-help}

Option `-h` makes AdGuard DNS CLI print out a help message to standard output and exit with a success status-code.

### Hizmet {#opts-service}

`-s <value>` seçeneği işletim sistemi hizmeti eylemini belirtir. Olası değerler:

- `install`: installs AdGuard DNS CLI as a service
- `restart`: restarts the running AdGuard DNS CLI service
- `start`: starts the installed AdGuard DNS CLI service
- `status`: shows the status of the installed AdGuard DNS CLI service
- `stop`: stops the running AdGuard DNS CLI
- `uninstall`: uninstalls AdGuard DNS CLI service

### Verbose {#opts-verbose}

`-v` seçeneği ayrıntılı günlük çıktısını etkinleştirir.

### Sürüm {#opts-version}

Option `--version` makes AdGuard DNS CLI print out the version of the application to standard output and exit with a success status-code.

## Yapılandırma {#conf}

### Dosya {#conf-file}

YAML yapılandırma dosyası [kendi makalesinde][conf] açıklanmıştır ve ayrıca `config.dist.yaml` örnek yapılandırma dosyası da bulunmaktadır.  Bazı yapılandırma parametreleri [ortam][env] kullanılarak da geçersiz kılınabilir.

[conf]: configuration.md
[env]: environment.md

## Çıkış kodları {#exit-codes}

Farklı hata koşullarında görünebilecek birkaç farklı çıkış kodu vardır:

- `0`: Başarıyla tamamlandı ve çıkıldı, hata yok.

- `1`: Dâhili hata, büyük olasılıkla yanlış yapılandırma.

- `2`: Hatalı komut satırı argümanı veya değeri.
