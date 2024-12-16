---
title: Genel Bakış
sidebar_position: 1
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

## AdGuard DNS İstemcisi nedir?

[AdGuard DNS][agdns] için platformlar arası hafif bir DNS istemcisi. It operates as a DNS server that forwards DNS requests to the corresponding upstream resolvers.

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

1. `.tar.gz` or `.zip` arşivini [sürümler sayfasından][releases] indirin ve açın.

   :::dikkat

   macOS'ta, genel olarak yüklenen daemonların `root` tarafından sahiplenilmesi çok önemlidir (bkz. [`launchd` dokümantasyonu][launchd-requirements]), bu nedenle `AdGuardDNSClient` çalıştırılabilir dosyası `/Applications/` dizinine veya alt dizinine yerleştirilmelidir.

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

`-h` seçeneği AdGuard DNS İstemcisinin standart çıktıya bir yardım mesajı yazdırmasını ve başarılı durum koduyla çıkmasını sağlar.

### Hizmet {#opts-service}

`-s <value>` seçeneği işletim sistemi hizmeti eylemini belirtir. Olası değerler:

- `install`: AdGuard DNS İstemcisini bir hizmet olarak yükler
- `restart`: çalışan AdGuard DNS İstemcisi hizmetini yeniden başlatır
- `start`: yüklü AdGuard DNS İstemcisi hizmetini başlatır
- `status`: kurulu AdGuard DNS İstemcisi hizmetinin durumunu gösterir
- `stop`: çalışan AdGuard DNS İstemcisini durdurur
- `uninstall`: AdGuard DNS İstemcisi hizmetini kaldırır

### Verbose {#opts-verbose}

`-v` seçeneği ayrıntılı günlük çıktısını etkinleştirir.

### Sürüm {#opts-version}

`--version` seçeneği, AdGuard DNS İstemcisinin `AdGuardDNSClient` çalıştırılabilir sürümünü standart çıktıya yazdırmasını ve bir başarı durum koduyla çıkmasını sağlar.

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
