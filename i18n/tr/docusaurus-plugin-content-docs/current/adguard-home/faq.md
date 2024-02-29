---
title: SSS
sidebar_position: 3
---

## AdGuard Home neden reklamları veya tehditleri engellemiyor? {#doesntblock}

AdGuard Home'un \`somebadsite.com'u engellemesini istediğinizi ancak bazı nedenlerden dolayı engellemediğini varsayalım. Bu sorunu çözmeye çalışalım.

Büyük olasılıkla, cihazınızı AdGuard Home'u varsayılan DNS sunucusu olarak kullanacak şekilde yapılandırmadınız. Varsayılan DNS sunucunuz olarak AdGuard Home'u kullanıp kullanmadığınızı kontrol etmek için:

1. On Windows, open Command Prompt (_Start_ → _Run_ → `cmd.exe`). Diğer sistemlerde, Terminal uygulamanızı açın.

2. nslookup example.org\` öğesini yürütün. Şuna benzer bir şey yazdıracaktır:

   ```none
   Server: 192.168.0.1
   Address: 192.168.0.1#53

   Non-authoritative answer:
   Name: example.org
   Address: <IPv4>
   Name: example.org
   Address: <IPv6>
   ```

3. Check if the `Server` IP address is the one where AdGuard Home is running. If not, you need to configure your device accordingly. Bunun nasıl yapılacağını [aşağıda](#defaultdns) görebilirsiniz.

4. Ensure that your request to `example.org` appears in the AdGuard Home UI on the _Query Log_ page. If not, you need to configure AdGuard Home to listen on the specified network interface. The easiest way to do this is to reinstall AdGuard Home with default settings.

If you are sure that your device is using AdGuard Home as its default DNS server, but the problem persists, it may be due to a misconfiguration of AdGuard Home. Lütfen aşağıdakileri kontrol edin ve emin olun:

1. _Ayarlar_ → _Genel ayarlar_ sayfasında _Filtreleri ve hosts dosyalarını kullanarak alan adlarını engelle_ ayarını etkinleştirdiniz.

2. Ebeveyn Denetimi gibi uygun güvenlik mekanizmalarını aynı sayfada etkinleştirdiniz.

3. _Filtreler_ → _DNS engel listeleri_ sayfasında uygun filtreleri etkinleştirdiniz.

4. You don’t have any exception rule lists that may allow the requests enabled on the _Filters_ → _DNS allowlists_ page.

5. You don’t have any DNS rewrites that may interfere on the _Filters_ → _DNS rewrites_ page.

6. You don’t have any custom filtering rules that may interfere on the _Filters_ → _Custom filtering rules_ page.

## Günlükleri nerede görüntüleyebilirim? {#logs}

Düz metin günlüklerinin (sorgu günlükleri ile karıştırılmamalıdır) varsayılan konumu işletim sistemine ve kurulum moduna bağlıdır:

<!-- TODO(a.garipov): Add more info about Docker; add links to tools. -->

- **OpenWrt Linux:** `logread -e AdGuardHome` komutunu kullanın.

- **Linux** systems with **systemd** and other **Unix** systems with **SysV-style init:** `/var/log/AdGuardHome.err`.

- **macOS:** `/var/log/AdGuardHome.stderr.log`.

- **Linux** systems with **Snapcraft** use the `snap logs adguard-home` command.

- **FreeBSD:** `/var/log/daemon.log`.

- **OpenBSD:** `/var/log/daemon`.

- **Windows:** the [Windows Event Log][wlog] is used.

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

There is a number of proposed extensions that, if reasonably well supported by clients, would provide a better user experience, including the [RFC 8914 Extended DNS Error codes][rfc8914] and the [DNS Access Denied Error Page RFC draft][rfcaccess]. We’ll implement them when browsers actually start to support them.

[rfc8914]: https://datatracker.ietf.org/doc/html/rfc8914

[rfcaccess]: https://datatracker.ietf.org/doc/html/draft-reddy-dnsop-error-page-08

:::

### Ön Koşullar

To use any of these methods to display a custom block page, you’ll need an HTTP server running on some IP address and serving the page in question on all routes. [`pixelserv-tls`][pxsrv] gibi bir şey.

[pxsrv]: https://github.com/kvic-z/pixelserv-tls

### Custom block page for Parental Control and Safe Browsing filters

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

3. In the _DNS server configuration_ section, select the _Custom IP_ radio button in the _Blocking mode_ selector and enter the IPv4 and IPv6 addresses of the server.

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

See the [_Configuring Devices_ section](getting-started.md#configure-devices) on the _Getting Started_ page.

## Bilinen herhangi bir sınırlama var mı? {#limitations}

DNS düzeyinde bir engelleyici tarafından nelerin engellenemeyeceğine dair bazı örnekler aşağıda verilmiştir:

- YouTube, Twitch reklamları.

- Facebook, X (eski adıyla Twitter), Instagram sponsorlu gönderiler.

Temel olarak, içerikle aynı alan adını paylaşan herhangi bir reklam, içeriği de engellemeye hazır olmadığınız sürece DNS düzeyinde bir engelleyici tarafından engellenemez.

### Gelecekte bununla başa çıkma olasılığı var mı?

DNS bunu yapmak için asla yeterli olmayacaktır. Your only option is to use a content blocking proxy like what we do in the [standalone AdGuard applications][adguard]. Gelecekte AdGuard Home'a bu özellik için destek ekleyeceğiz. Unfortunately, even then there will still be cases where it won’t be enough or it will require quite complicated configuration.

[adguard]: https://adguard.com/

## Why do I get `bind: address already in use` error when trying to install on Ubuntu? {#bindinuse}

This happens because the port 53 on `localhost`, which is used for DNS, is already taken by another program. Ubuntu comes with a local DNS called `systemd-resolved`, which uses the address `127.0.0.53:53`, thus preventing AdGuard Home from binding to `127.0.0.1:53`. Bunu çalıştırarak görebilirsiniz:

```sh
sudo lsof -i :53
```

Çıktı şuna benzer olmalıdır:

```none
COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME
systemd-r 14542 systemd-resolve 13u IPv4 86178 0t0 UDP 127.0.0.53:domain
systemd-r 14542 systemd-resolve 14u IPv4 86179 0t0 TCP 127.0.0.53:domain
```

To fix this, you must either disable the `systemd-resolved` daemon or choose a different network interface and bind your AdGuard Home to an accessible IP address on it, such as the IP address of your router inside your network. But if you do need to listen on `localhost`, there are several solutions.

Firstly, AdGuard Home can detect such configurations and disable `systemd-resolved` for you if you press the _Fix_ button located next to the `address already in use` message on the installation screen.

Secondly, if that doesn’t work, follow the instructions below. Note that if you’re using AdGuard Home with docker or snap, you’ll have to do this yourself.

1. Create the `/etc/systemd/resolved.conf.d` directory, if necessary:

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

If you’re already running a web server and want to access the AdGuard Home dashboard UI from a URL like `http://YOUR_SERVER/aghome/`, you can use this configuration for your web server:

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

### Disable DoH encryption on AdGuard Home

If you’re using TLS on your reverse proxy server, you don’t need to use TLS on AdGuard Home. Set `allow_unencrypted_doh: true` in `AdGuardHome.yaml` to allow AdGuard Home to respond to DoH requests without TLS encryption.

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

If you are still getting `code=exited status=203/EXEC` or similar errors from `systemctl`, try uninstalling AdGuard Home and installing it **directly** into `/usr/local/bin` by using the `-o` option of the install script:

```sh
curl -s -S -L 'https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh' | sh -s -- -o '/usr/local/bin' -v
```

Bkz. \[sorun 765] ve \[sorun 3281].

[issue 3281]: https://github.com/AdguardTeam/AdGuardHome/issues/3281

[issue 765]: https://github.com/AdguardTeam/AdGuardHome/issues/765#issuecomment-752262353

## `Uyumsuz dosya sistemi` hatalarını nasıl düzeltirim? {#incompatfs}

You should move your AdGuard Home installation or working directory to another location. See the [limitations section](getting-started.md#limitations) on the _Getting Started_ page.

## How do I update AdGuard Home manually? {#manual-update}

If the button isn’t displayed or an automatic update has failed, you can update manually. In the examples below, we’ll use AdGuard Home versions for Linux and Windows for AMD64 CPUs.

### Unix (Linux, macOS, BSD) {#manual-update-unix}

1. Download the new AdGuard Home package from the [releases page][releases]. If you want to perform this step from the command line, type:

   ```sh
   curl -L -S -o '/tmp/AdGuardHome_linux_amd64.tar.gz' -s\
   'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'
   ```

   Ya da `wget` ile:

   ```sh
   wget -O '/tmp/AdGuardHome_linux_amd64.tar.gz'\
   'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'
   ```

2. Navigate to the directory where AdGuard Home is installed. On most Unix systems the default directory is `/opt/AdGuardHome`, but on macOS it’s `/Applications/AdGuardHome`.

3. AdGuard Home'u durdurun:

   ```sh
   sudo ./AdGuardHome -s stop
   ```

   :::note OpenBSD

   OpenBSD üzerinde, muhtemelen `sudo` yerine `doas` kullanmak isteyeceksiniz.

   :::

4. Verilerinizi yedekleyin. That is, your configuration file and the data directory (`AdGuardHome.yaml` and `data/` by default). Örneğin, verilerinizi `~/my-agh-backup` adlı yeni bir dizine yedeklemek için:

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

   You may also want to copy the documentation parts of the package, such as the change log (`CHANGELOG.md`), the README file (`README.md`), and the license (`LICENSE.txt`).

   Artık geçici dizini kaldırabilirsiniz.

7. AdGuard Home'u yeniden başlatın:

   ```sh
   sudo ./AdGuardHome -s start
   ```

[releases]: https://github.com/AdguardTeam/AdGuardHome/releases/latest

### Windows (PowerShell Kullanarak) {#manual-update-win}

Aşağıdaki tüm örneklerde, PowerShell Yönetici olarak çalıştırılmalıdır.

1. Download the new AdGuard Home package from the [releases page][releases]. If you want to perform this step from the command line:

   ```ps1
   $outFile = Join-Path -Path $Env:USERPROFILE -ChildPath 'Downloads\AdGuardHome_windows_amd64.zip'
   $aghUri = 'https://static.adguard.com/adguardhome/release/AdGuardHome_windows_amd64.zip'
   Invoke-WebRequest -OutFile "$outFile" -Uri "$aghUri"
   ```

2. Navigate to the directory where AdGuard Home was installed. Aşağıdaki örneklerde `C:\Program Files\AdGuardHome` dizinini kullanacağız.

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

   You may also want to copy the documentation parts of the package, such as the change log (`CHANGELOG.md`), the README file (`README.md`), and the license (`LICENSE.txt`).

   Artık geçici dizini kaldırabilirsiniz.

7. AdGuard Home'u yeniden başlatın:

   ```ps1
   .\AdGuardHome.exe -s start
   ```

## How do I uninstall AdGuard Home? {#uninstall}

Depending on how you installed AdGuard Home, there are different ways to uninstall it.

:::caution

AdGuard Home'u kaldırmadan önce, cihazlarınızın yapılandırmasını değiştirmeyi ve onları farklı bir DNS sunucusuna yönlendirmeyi unutmayın.

:::

### Regular installation

Bu durumda aşağıdakileri yapın:

- AdGuard Home hizmetinin kaydını kaldırın: `./AdGuardHome -s uninstall`.

- AdGuard Home dizinini kaldırın.

### Docker

Basitçe durdurun ve görüntüyü kaldırın.

### Snap Store

```sh
snap remove adguard-home
```
