---
title: SSS
sidebar_position: 3
---

## AdGuard Home neden reklamları veya tehditleri engellemiyor? {#doesntblock}

AdGuard Home'un \`somebadsite.com'u engellemesini istediğinizi ancak bazı nedenlerden dolayı engellemediğini varsayalım. Bu sorunu çözmeye çalışalım.

Büyük olasılıkla, cihazınızı AdGuard Home'u varsayılan DNS sunucusu olarak kullanacak şekilde yapılandırmadınız. Varsayılan DNS sunucunuz olarak AdGuard Home'u kullanıp kullanmadığınızı kontrol etmek için:

1. Windows'ta Komut İstemi'ni açın (_Başlat_ → _Çalıştır_ → `cmd.exe`). Diğer sistemlerde, Terminal uygulamanızı açın.

2. nslookup example.org\` öğesini yürütün. Şuna benzer bir şey yazdırır:

  ```none
  Server: 192.168.0.1
  Address: 192.168.0.1#53

  Non-authoritative answer:
  Name: example.org
  Address: <IPv4>
  Name: example.org
  Address: <IPv6>
  ```

3. `Sunucu` IP adresinin AdGuard Home'un çalıştığı IP adresi olup olmadığını kontrol edin. Eğer yoksa, cihazınızı buna göre yapılandırmanız gerekir. Bunun nasıl yapılacağını [aşağıda](#defaultdns) görebilirsiniz.

4. AdGuard Home kullanıcı arayüzünde _Sorgu Günlüğü_ sayfasında `example.org` isteğinizin göründüğünden emin olun. Eğer görünmüyorsa, AdGuard Home'u belirtilen ağ arayüzünü dinleyecek şekilde yapılandırmanız gerekir. Bunu yapmanın en kolay yolu, AdGuard Home'u varsayılan ayarlarla yeniden kurmaktır.

Cihazınızın varsayılan DNS sunucusu olarak AdGuard Home'u kullandığından eminseniz ancak sorun devam ediyorsa bunun nedeni AdGuard Home'un yanlış yapılandırılması olabilir. Lütfen aşağıdakileri kontrol edin ve emin olun:

1. _Ayarlar_ → _Genel ayarlar_ sayfasında _Filtreleri ve hosts dosyalarını kullanarak alan adlarını engelle_ ayarını etkinleştirdiniz.

2. Ebeveyn Denetimi gibi uygun güvenlik mekanizmalarını aynı sayfada etkinleştirdiniz.

3. _Filtreler_ → _DNS engel listeleri_ sayfasında uygun filtreleri etkinleştirdiniz.

4. _Filtreler_ → _DNS izin listeleri_ sayfasında etkinleştirilen isteklere izin verebilecek herhangi bir istisna kuralı listeniz yok.

5. _Filtreler_ → _DNS yeniden yazmaları_ sayfasında müdahale edebilecek herhangi bir DNS yeniden yazmanız yok.

6. _Filtreler_ → _Özel filtreleme kuralları_ sayfasında müdahale edebilecek herhangi bir özel filtreleme kuralınız yok.

## Sorgu günlüğünde “CNAME veya IP tarafından engellendi” ne anlama geliyor? {#logs}

AdGuard Home checks both DNS requests and DNS responses to prevent an adblock evasion technique known as [CNAME cloaking][cname-cloak]. That is, if your filtering rules contain a domain, say `tracker.example`, and a DNS response for some other domain name, for example `blogs.example`, contains this domain name among its CNAME records, that response is blocked, because it actually leads to the blocked tracking service.

[cname-cloak]: https://blog.apnic.net/2020/08/04/characterizing-cname-cloaking-based-tracking/

## Günlükleri nerede görüntüleyebilirim? {#logs}

Düz metin günlüklerinin (sorgu günlükleri ile karıştırılmamalıdır) varsayılan konumu işletim sistemine ve kurulum moduna bağlıdır:

<!-- TODO(a.garipov): Add more info about Docker; add links to tools. -->

- **OpenWrt Linux:** `logread -e AdGuardHome` komutunu kullanın.

- **Linux** systems with **systemd** and other **Unix** systems with **SysV-style init:** `/var/log/AdGuardHome.err`.

- **macOS:** `/var/log/AdGuardHome.stderr.log`.

- **Linux** sistemlerinde **Snapcraft** ile `snap logs adguard-home` komutu kullanılır.

- **FreeBSD:** `/var/log/daemon.log`.

- **OpenBSD:** `/var/log/daemon`.

- **Windows:** [Windows Olay Günlüğü][wlog] kullanılır.

[wlog]: https://docs.microsoft.com/en-us/windows/win32/wes/windows-event-log

## AdGuard Home'u ayrıntılı düzeyde günlükler yazacak şekilde nasıl yapılandırabilirim? {#verboselog}

Karmaşık bir sorunu gidermek için bazen ayrıntılı düzeyde günlük kaydı gerekir. İşte nasıl etkinleştireceğiniz:

1. AdGuard Home'u durdurun:

  ```sh
  ./AdGuardHome -s stop
  ```

2. AdGuard Home'u ayrıntılı düzeyde günlükler yazacak şekilde yapılandırın:

  1. Düzenleyicinizde `AdGuardHome.yaml` dosyasını açın.

  2. `log.file` dosyasını istediğiniz günlük dosyası yoluna ayarlayın, örneğin `/tmp/aghlog.txt`. Dizinin var olması gerektiğini unutmayın.

  3. `log.verbose` öğesini `true` olarak ayarlayın.

3. AdGuard Home'u yeniden başlatın ve sorunu yeniden oluşturun:

  ```sh
  ./AdGuardHome -s start
  ```

4. Hata ayıklama işlemini tamamladığınızda, `log.verbose` ayarını `false` olarak geri ayarlayın.

## Özel bir engelleme sayfasını nasıl gösteririm? {#customblock}

:::note

Bunları yapmadan önce, modern tarayıcıların HTTPS kullanmak üzere ayarlandığını, dolayısıyla web sunucusu sertifikasının gerçekliğini doğruladıklarını lütfen unutmayın. Bu, bunlardan herhangi birinin kullanılmasının uyarı ekranlarıyla sonuçlanacağı anlamına gelir.

There is a number of proposed extensions that, if reasonably well supported by clients, would provide a better user experience, including the [RFC 8914 Extended DNS Error codes][rfc8914] and the [DNS Access Denied Error Page RFC draft][rfcaccess]. Tarayıcılar bunları gerçekten desteklemeye başladığında bunları uygulayacağız.

[rfc8914]: https://datatracker.ietf.org/doc/html/rfc8914
[rfcaccess]: https://datatracker.ietf.org/doc/html/draft-reddy-dnsop-error-page-08

:::

### Ön Koşullar

Özel bir blok sayfasını görüntülemek üzere bu yöntemlerden herhangi birini kullanmak için, bazı IP adreslerinde çalışan ve söz konusu sayfayı tüm yollarda sunan bir HTTP sunucusuna ihtiyacınız olacaktır. [`pixelserv-tls`][pxsrv] gibi bir şey.

[pxsrv]: https://github.com/kvic-z/pixelserv-tls

### Ebeveyn Denetimi ve Güvenli Gezinti filtreleri için özel engelleme sayfası

Şu anda bu parametreleri kullanıcı arayüzünden ayarlamanın bir yolu yoktur, bu nedenle yapılandırma dosyasını elle düzenlemeniz gerekir:

1. AdGuard Home'u durdurun:

  ```sh
  ./AdGuardHome -s stop
  ```

2. Düzenleyicinizde `AdGuardHome.yaml` dosyasını açın.

3. `dns.parental_block_host` veya `dns.safebrowsing_block_host` ayarlarını sunucunun IP adresine ayarlayın (bu örnekte, `192.168.123.45`):

  ```yaml
  # …
  dns:
    # …

    # NOT: Sunucunuzun gerçek IP adresiyle değiştirin.
    parental_block_host: 192.168.123.45
    safebrowsing_block_host: 192.168.123.45
  ```

4. AdGuard Home'u yeniden başlatın:

  ```sh
  ./AdGuardHome -s start
  ```

### Diğer filtreler için özel engelleme sayfası

1. Web kullanıcı arayüzünü açın.

2. Ayarlar\* → _DNS ayarları_ öğesine gidin.

3. _DNS sunucusu yapılandırması_ bölümünde, _Engelleme modu_ seçicisinde _Özel IP_ onay düğmesini seçin ve sunucunun IPv4 ve IPv6 adreslerini girin.

4. _Kaydet_ öğesine tıklayın.

## Pano arayüzünün adresini nasıl değiştiririm? {#webaddr}

1. AdGuard Home'u durdurun:

  ```sh
  ./AdGuardHome -s stop
  ```

2. Düzenleyicinizde `AdGuardHome.yaml` dosyasını açın.

3. 'http.address' ayarını yeni bir ağ arayüzüne ayarlayın. Örneğin:

  - Tüm ağ arayüzlerini dinlemek için `0.0.0.0:0`;
  - `8080` bağlantı noktasına sahip tüm ağ arabirimlerini dinlemek için `0.0.0.0:8080`;
  - Sadece yerel geri döngü arayüzünü dinlemek için `127.0.0.1:0`.

4. AdGuard Home'u yeniden başlatın:

  ```sh
  ./AdGuardHome -s start
  ```

## AdGuard Home'u varsayılan DNS sunucusu olarak nasıl ayarlarım? {#defaultdns}

_Başlarken_ sayfasındaki [_Cihazların Yapılandırılması_ bölümüne](getting-started.md#configure-devices) bakın.

## Bilinen herhangi bir sınırlama var mı? {#limitations}

DNS düzeyinde bir engelleyici tarafından nelerin engellenemeyeceğine dair bazı örnekler aşağıda verilmiştir:

- YouTube, Twitch reklamları.

- Facebook, X (eski adıyla Twitter), Instagram sponsorlu gönderiler.

Temel olarak, içerikle aynı alan adını paylaşan herhangi bir reklam, içeriği de engellemeye hazır olmadığınız sürece DNS düzeyinde bir engelleyici tarafından engellenemez.

### Gelecekte bununla başa çıkma olasılığı var mı?

DNS bunu yapmak için asla yeterli olmayacaktır. Tek seçeneğiniz, [bağımsız AdGuard uygulamalarında][adguard] yaptığımız gibi bir içerik engelleme proxy'si kullanmaktır. Gelecekte AdGuard Home'a bu özellik için destek ekleyeceğiz. Ne yazık ki, o zaman bile yeterli olmayacağı veya oldukça karmaşık bir yapılandırma gerektireceği durumlar olur.

[adguard]: https://adguard.com/

## Ubuntu'ya kurmaya çalışırken neden `bind: address already in use` hatası alıyorum? {#bindinuse}

Bunun nedeni, DNS için kullanılan `localhost` üzerindeki 53 numaralı bağlantı noktasının zaten başka bir program tarafından alınmış olmasıdır. Ubuntu, `127.0.0.53:53` adresini kullanan `systemd-resolved` adlı yerel bir DNS ile birlikte gelir, böylece AdGuard Home'un `127.0.0.1:53` adresine bağlanmasını engeller. Bunu çalıştırarak görebilirsiniz:

```sh
sudo lsof -i :53
```

Çıktı şuna benzer olmalıdır:

```none
COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME
systemd-r 14542 systemd-resolve 13u IPv4 86178 0t0 UDP 127.0.0.53:domain
systemd-r 14542 systemd-resolve 14u IPv4 86179 0t0 TCP 127.0.0.53:domain
```

Bunu düzeltmek için ya `systemd-resolved` daemon'unu devre dışı bırakmalı ya da farklı bir ağ arayüzü seçmeli ve AdGuard Home'unuzu ağınızdaki yönlendiricinizin IP adresi gibi erişilebilir bir IP adresine bağlamalısınız. Ancak `localhost` üzerinde dinleme yapmanız gerekiyorsa, birkaç çözüm vardır.

Öncelikle, kurulum ekranındaki 'adres zaten kullanımda' mesajının yanında bulunan _Düzelt_ düğmesine basarsanız, AdGuard Home bu tür yapılandırmaları algılayabilir ve sizin için `systemd-resolved` öğesini devre dışı bırakabilir.

İkinci olarak, bu işe yaramazsa, aşağıdaki talimatları izleyin. AdGuard Home'u docker veya snap ile kullanıyorsanız, bunu kendiniz yapmanız gerekeceğini unutmayın.

1. Gerekirse `/etc/systemd/resolved.conf.d` dizinini oluşturun:

  ```sh
  sudo mkdir -p /etc/systemd/resolved.conf.d
  ```

2. `DNSStubListener` öğesini devre dışı bırakın ve DNS sunucu adresini güncelleyin. Bunu yapmak için, aşağıdaki içeriğe sahip yeni bir `/etc/systemd/resolved.conf.d/adguardhome.conf` dosyası oluşturun:

  ```service
  [Resolve]
  DNS=127.0.0.1
  DNSStubListener=no
  ```

DNS sunucu adresi olarak `127.0.0.1` belirtilmesi **gereklidir.** Aksi takdirde ad sunucusu `127.0.0.53` olacaktır ve bu da `DNSStubListener` olmadan çalışmaz.

1. Başka bir `resolv.conf` dosyasını etkinleştirin:

  ```sh
  sudo mv /etc/resolv.conf /etc/resolv.conf.backup
  sudo ln -s /run/systemd/resolve/resolv.conf /etc/resolv.conf
  ```

2. `DNSStubListener` öğesini yeniden başlatın:

  ```sh
  sudo systemctl reload-or-restart systemd-resolved
  ```

Bundan sonra, `systemd-resolved` `lsof` çıktısında gösterilmemeli ve AdGuard Home `127.0.0.1:53` adresine bağlanabilmelidir.

## AdGuard Home için bir ters proxy sunucusunu nasıl yapılandırabilirim? {#reverseproxy}

Zaten bir web sunucusu çalıştırıyorsanız ve AdGuard Home panosu kullanıcı arayüzüne `http://YOUR_SERVER/aghome/` gibi bir URL'den erişmek istiyorsanız, web sunucunuz için bu yapılandırmayı kullanabilirsiniz:

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

Veya AdGuard Home'u yalnızca otomatik TLS ile sunmak istiyorsanız, aşağıda gösterilen örneğe benzer bir yapılandırma kullanın:

```none
DOMAIN {
 encode gzip zstd
 tls YOUR_EMAIL@DOMAIN
 reverse_proxy AGH_IP:AGH_PORT
}
```

### Apache

```apache
<VirtualHost *:80>
  ProxyPass "/" "http://AGH_IP:AGH_PORT/"
  ProxyPassReverse "/" "http://AGH_IP:AGH_PORT/"
  PreserveHost On
</VirtualHost>
```

:::note

Apache ters HTTP proxy ile alt dizinleri kullanmayın.  Apache'nin bağıl yönlendirmeleri diğer web sunucularından farklı şekilde ele aldığı bilinen bir sorundur ([#6604]). Bu, AdGuard Home web arayüzünde sorunlara neden olur.

[#6604]: https://github.com/AdguardTeam/AdGuardHome/issues/6604

:::

### AdGuard Home'da DoH şifrelemesini devre dışı bırakma

Ters proxy sunucunuzda TLS kullanıyorsanız, AdGuard Home'da TLS kullanmanıza gerek yoktur. AdGuard Home'un DoH isteklerine TLS şifrelemesi olmadan yanıt vermesine izin vermek için `AdGuardHome.yaml` içinde `allow_unencrypted_doh: true` ayarını yapın.

### İstemcilerin gerçek IP adresleri

AdGuard Home'un gerçek istemci IP adresini içeren başlıkları dikkate almasını sağlamak için `trusted_proxies` parametresini HTTP proxy'nizin IP adreslerine ayarlayabilirsiniz. Daha fazla bilgi için [configuration][conf] ve [encryption][encr] sayfalarına bakın.

[encr]: https://github.com/AdguardTeam/AdGuardHome/wiki/Encryption#reverse-proxy
[conf]: https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration

## Fedora'da `permission denied` hatalarını nasıl düzeltirim? {#fedora}

1. `AdGuardHome` ikili dosyasını `/usr/local/bin` konumuna taşıyın.

2. Dosyanın güvenlik bağlamını değiştirmek için `root` olarak aşağıdaki komutu çalıştırın:

  ```sh
  chcon -t bin_t /usr/local/bin/AdGuardHome
  ```

3. Ağ üzerinden erişilebilir hâle getirmek için gerekli güvenlik duvarı kurallarını ekleyin. Örneğin:

  ```sh
  firewall-cmd --new-zone=adguard --permanent
  firewall-cmd --zone=adguard --add-source=192.168.0.14/24 --permanent
  firewall-cmd --zone=adguard --add-port=3000/tcp --permanent
  firewall-cmd --zone=adguard --add-port=53/udp --permanent
  firewall-cmd --zone=adguard --add-port=80/tcp --permanent
  firewall-cmd --reload
  ```

Eğer hâlâ `systemctl'den `code=exited status=203/EXEC`veya benzeri hatalar alıyorsanız, AdGuard Home'u kaldırmayı ve kurulum betiğinin`-o`seçeneğini kullanarak`/usr/local/bin\` içine **doğrudan** kurmayı deneyin:

```sh
curl -s -S -L 'https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh' | sh -s -- -o '/usr/local/bin' -v
```

Bkz. \[sorun 765] ve \[sorun 3281].

[issue 3281]: https://github.com/AdguardTeam/AdGuardHome/issues/3281
[issue 765]: https://github.com/AdguardTeam/AdGuardHome/issues/765#issuecomment-752262353

## `Uyumsuz dosya sistemi` hatalarını nasıl düzeltirim? {#incompatfs}

AdGuard Home kurulumunuzu veya çalışma dizininizi başka bir konuma taşımalısınız. See the [limitations section](getting-started.md#limitations) on the _Getting Started_ page.

## `Hata: control/version.json` ne anlama geliyor? {#version-error}

Bu hata mesajı, AdGuard Home'un güncellemeleri denetlemek ve/veya indirmek için AdGuard sunucularına ulaşamadığı anlamına gelir. Bu, sunucuların İSS'niz tarafından engellendiği veya geçici olarak kapalı olduğu anlamına gelebilir. Hata bir süre sonra kendiliğinden düzelmezse, `AdGuardHome` yürütülebilir dosyasını `--no-check-update` komut satırı seçeneğiyle çalıştırarak [elle güncelleme](#manual-update) yapmayı veya otomatik güncelleme denetimini devre dışı bırakmayı deneyebilirsiniz.

## AdGuard Home'u elle nasıl güncelleyebilirim? {#manual-update}

Düğme görüntülenmiyorsa veya otomatik güncelleme başarısız olduysa, elle güncelleyebilirsiniz. Aşağıdaki örneklerde, AMD64 CPU'lar için Linux ve Windows için AdGuard Home sürümlerini kullanacağız.

### Unix (Linux, macOS, BSD) {#manual-update-unix}

1. Yeni AdGuard Home paketini [sürümler sayfasından][releases] indirin. Bu adımı komut satırından gerçekleştirmek istiyorsanız, şunu yazın:

  ```sh
  curl -L -S -o '/tmp/AdGuardHome_linux_amd64.tar.gz' -s\
  'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'
  ```

  Ya da `wget` ile:

  ```sh
  wget -O '/tmp/AdGuardHome_linux_amd64.tar.gz'\
  'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'
  ```

2. AdGuard Home'un kurulu olduğu dizine gidin. Çoğu Unix sisteminde varsayılan dizin `/opt/AdGuardHome` şeklindedir, ancak macOS'ta `/Applications/AdGuardHome` şeklinde olur.

3. AdGuard Home'u durdurun:

  ```sh
  sudo ./AdGuardHome -s stop
  ```

  :::note OpenBSD

  OpenBSD üzerinde, muhtemelen `sudo` yerine `doas` kullanmak isteyeceksiniz.

  :::

4. Verilerinizi yedekleyin. Yani, yapılandırma dosyanız ve veri dizininiz (varsayılan olarak `AdGuardHome.yaml` ve `data/`). Örneğin, verilerinizi `~/my-agh-backup` adlı yeni bir dizine yedeklemek için:

  ```sh
  mkdir -p ~/my-agh-backup
  cp -r ./AdGuardHome.yaml ./data ~/my-agh-backup/
  ```

5. AdGuard Home arşivini geçici bir dizine çıkarın. Örneğin, arşivi `~/Downloads` dizininize indirdiyseniz ve `/tmp/` dizinine çıkarmak istiyorsanız:

  ```sh
  tar -C /tmp/ -f ~/Downloads/AdGuardHome_linux_amd64.tar.gz -x -v -z
  ```

  macOS'ta aşağıdaki gibi bir şey yazın:

  ```sh
  unzip -d /tmp/ ~/Downloads/AdGuardHome_darwin_amd64.zip
  ```

6. Eski AdGuard Home yürütülebilir dosyasını yenisiyle değiştirin. Çoğu Unix sisteminde komut aşağıdaki gibi görünecektir:

  ```sh
  sudo cp /tmp/AdGuardHome/AdGuardHome /opt/AdGuardHome/AdGuardHome
  ```

  macOS'ta aşağıdaki gibi bir şey:

  ```sh
  sudo cp /tmp/AdGuardHome/AdGuardHome /Applications/AdGuardHome/AdGuardHome
  ```

  Ayrıca değişiklik günlüğü (`CHANGELOG.md`), README dosyası (`README.md`) ve lisans (`LICENSE.txt`) gibi paketin dokümantasyon bölümlerini de kopyalamak isteyebilirsiniz.

  Artık geçici dizini kaldırabilirsiniz.

7. AdGuard Home'u yeniden başlatın:

  ```sh
  sudo ./AdGuardHome -s start
  ```

[releases]: https://github.com/AdguardTeam/AdGuardHome/releases/latest

### Windows (PowerShell Kullanarak) {#manual-update-win}

Aşağıdaki tüm örneklerde, PowerShell Yönetici olarak çalıştırılmalıdır.

1. Yeni AdGuard Home paketini [sürümler sayfasından][releases] indirin. Bu adımı komut satırından gerçekleştirmek istiyorsanız:

  ```ps1
  $outFile = Join-Path -Path $Env:USERPROFILE -ChildPath 'Downloads\AdGuardHome_windows_amd64.zip'
  $aghUri = 'https://static.adguard.com/adguardhome/release/AdGuardHome_windows_amd64.zip'
  Invoke-WebRequest -OutFile "$outFile" -Uri "$aghUri"
  ```

2. AdGuard Home'un kurulu olduğu dizine gidin. Aşağıdaki örneklerde `C:\Program Files\AdGuardHome` dizinini kullanacağız.

3. AdGuard Home'u durdurun:

  ```ps1
  .\AdGuardHome.exe -s stop
  ```

4. Verilerinizi yedekleyin. Yani, yapılandırma dosyanız ve veri dizini (varsayılan olarak `AdGuardHome.yaml` ve `data/`). Örneğin, verilerinizi `my-agh-backup` adlı yeni bir dizine yedeklemek için:

  ```ps1
  $newDir = Join-Path -Path $Env:USERPROFILE -ChildPath 'my-agh-backup'
  New-Item -Path $newDir -ItemType Directory
  Copy-Item -Path .\AdGuardHome.yaml, .\data -Destination $newDir -Recurse
  ```

5. AdGuard Home arşivini geçici bir dizine çıkarın. Örneğin, arşivi `İndirilenler` dizininize indirdiyseniz ve geçici bir dizine çıkarmak istiyorsanız:

  ```ps1
  $outFile = Join-Path -Path $Env:USERPROFILE -ChildPath 'Downloads\AdGuardHome_windows_amd64.zip'
  Expand-Archive -Path "$outFile" -DestinationPath $Env:TEMP
  ```

6. Eski AdGuard Home yürütülebilir dosyasını yenisiyle değiştirin. Örneğin:

  ```ps1
  $aghExe = Join-Path -Path $Env:TEMP -ChildPath 'AdGuardHome\AdGuardHome.exe'
  Copy-Item -Path "$aghExe" -Destination .\AdGuardHome.exe
  ```

  Ayrıca değişiklik günlüğü (`CHANGELOG.md`), README dosyası (`README.md`) ve lisans (`LICENSE.txt`) gibi paketin dokümantasyon bölümlerini de kopyalamak isteyebilirsiniz.

  Artık geçici dizini kaldırabilirsiniz.

7. AdGuard Home'u yeniden başlatın:

  ```ps1
  .\AdGuardHome.exe -s start
  ```

## AdGuard Home'u nasıl kaldırabilirim? {#uninstall}

AdGuard Home'u nasıl yüklediğinize bağlı olarak, onu kaldırmanın farklı yolları vardır.

:::caution

AdGuard Home'u kaldırmadan önce, cihazlarınızın yapılandırmasını değiştirmeyi ve onları farklı bir DNS sunucusuna yönlendirmeyi unutmayın.

:::

### Normal kurulum

Bu durumda aşağıdakileri yapın:

- AdGuard Home hizmetinin kaydını kaldırın: `./AdGuardHome -s uninstall`.

- AdGuard Home dizinini kaldırın.

### Docker

Basitçe durdurun ve görüntüyü kaldırın.

### Snap Store

```sh
snap remove adguard-home
```
