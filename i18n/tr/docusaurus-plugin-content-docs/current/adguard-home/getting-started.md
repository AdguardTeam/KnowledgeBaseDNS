---
title: Başlarken
sidebar_position: 2
---

## Installation {#installation}

### Resmi sürümler

İşletim sisteminiz için ikili dosyayı içeren arşivi [en son kararlı sürüm sayfası][releases] adresinden indirin. Desteklenen platformların tam listesinin yanı sıra beta ve edge (kararsız) sürümlere bağlantılar [platformlar sayfamızda][platforms] bulunabilir.

To install AdGuard Home as a service, extract the archive, enter the `AdGuardHome` directory, and run:

```sh
./AdGuardHome -s install
```

#### Notlar

- Users of **Fedora Linux** and its derivatives: install AdGuard Home in the `/usr/local/bin` directory. Failure to do so may cause issues with SELinux and permissions. Bkz. \[sorun 765] ve \[sorun 3281].

- Users of **macOS 10.15 Catalina** and newer should place the AdGuard Home working directory inside the `/Applications` directory.

### Docker ve Snap

We also provide an [official AdGuard Home docker image][docker] and an [official Snap Store package][snap] for experienced users.

### Diğer

Diğer bazı resmi olmayan seçenekler şunlardır:

- [Home Assistant add-on][has] maintained by [@frenck](https://github.com/frenck).

- [OpenWrt LUCI app][luci] maintained by [@kongfl888](https://github.com/kongfl888).

- [Arch Linux][arch], [Arch Linux ARM][archarm], and other Arch-based OSs, may build via the [`adguardhome` package][aghaur] in the [AUR][aur] maintained by [@graysky2](https://github.com/graysky2).

- [Cloudron app][cloudron] maintained by [@gramakri](https://github.com/gramakri).

[aghaur]: https://aur.archlinux.org/packages/adguardhome/

[arch]: https://www.archlinux.org/

[archarm]: https://archlinuxarm.org/

[aur]: https://wiki.archlinux.org/index.php/Arch_User_Repository

[cloudron]: https://git.cloudron.io/cloudron/adguard-home-app

[docker]: https://hub.docker.com/r/adguard/adguardhome

[has]: https://github.com/hassio-addons/addon-adguard-home

[issue 3281]: https://github.com/AdguardTeam/AdGuardHome/issues/3281

[issue 765]: https://github.com/AdguardTeam/AdGuardHome/issues/765#issuecomment-752262353

[luci]: https://github.com/kongfl888/luci-app-adguardhome

[platforms]: https://github.com/AdguardTeam/AdGuardHome/wiki/Platforms

[releases]: https://github.com/AdguardTeam/AdGuardHome/releases/latest

[snap]: https://snapcraft.io/adguard-home

## İlk başlangıç {#first-time}

Öncelikle güvenlik duvarı ayarlarınızı kontrol edin. To install and use AdGuard Home, the following ports and protocols must be available:

- 3000/TCP for the initial installation;
- Web arayüzü için 80/TCP;
- DNS sunucusu için 53/UDP.

DNS-over-HTTPS gibi düz DNS dışındaki protokoller için ek bağlantı noktaları açmanız gerekebilir.

DNS servers bind to port 53, which requires superuser privileges most of the time, [see below](#running-without-superuser). Therefore, on Unix systems, you will need to run it with `sudo` or `doas` in terminal:

```sh
sudo ./AdGuardHome
```

Windows'ta yönetici ayrıcalıklarıyla `cmd.exe` veya PowerShell'i çalıştırın ve buradan `AdGuardHome.exe` dosyasını çalıştırın.

AdGuard Home'u ilk kez çalıştırdığınızda, `0.0.0.0:3000` adresini dinlemeye başlar ve tarayıcınızda açmanızı ister:

```none
AdGuard Home is available at the following addresses:
go to http://127.0.0.1:3000
go to http://[::1]:3000
[…]
```

There you will go through the initial configuration wizard.

![AdGuard Home network interface selection screen](https://cdn.adtidy.org/content/kb/dns/adguard-home/install2.png)

![AdGuard Home kullanıcı oluşturma ekranı](https://cdn.adtidy.org/content/kb/dns/adguard-home/install3.png)

See [our article on running AdGuard Home securely](running-securely.md) for guidance on how to select the initial configuration that fits you best.

## Hizmet olarak çalıştırma {#service}

Bir sonraki adım AdGuard Home'u bir sistem hizmeti (diğer adıyla daemon) olarak kaydetmek olacaktır. To install AdGuard Home as a service, run:

```sh
sudo ./AdGuardHome -s install
```

Windows'ta, yönetici ayrıcalıklarıyla `cmd.exe` dosyasını çalıştırın ve bir Windows hizmetini kaydetmek için `AdGuardHome.exe -s install` komutunu çalıştırın.

Here are the other commands you might need to control the service:

- `AdGuardHome -s uninstall`: Uninstall the AdGuard Home service.
- `AdGuardHome -s start`: Start the service.
- `AdGuardHome -s stop`: Stop the service.
- `AdGuardHome -s restart`: Restart the service.
- `AdGuardHome -s status`: Show the current service status.

### Günlükler

Varsayılan olarak, AdGuard Home'u bir terminalde çalıştırdığınızda günlükler `stderr` adresine yazılır. Bir hizmet olarak çalıştırırsanız, günlük çıktısı platforma göre değişir:

- MacOS'ta günlük `/var/log/AdGuardHome.*.log` dosyalarına yazılır.

- Diğer Unix'lerde günlük `syslog` veya `journald` dosyasına yazılır.

- Windows'ta günlük, Windows olay günlüğüne yazılır.

Bu davranışı AdGuard Home [yapılandırma dosyası][conf] içinde değiştirebilirsiniz.

[conf]: https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration

## Updating {#update}

![An example of an update notification](https://cdn.adtidy.org/content/kb/dns/adguard-home/updatenotification.png)

Yeni bir sürüm yayınlandığında, AdGuard Home'un kullanıcı arayüzünde bir bildirim mesajı ve _Şimdi güncelle_ düğmesi gösterilir. Bu düğmeye tıkladığınızda AdGuard Home otomatik olarak en son sürüme güncellenecektir. Mevcut AdGuard Home çalıştırılabilir dosyanız, mevcut yapılandırma dosyasıyla birlikte `backup` dizininin içine kaydedilir, böylece gerekirse değişiklikleri geri alabilirsiniz.

### Manual update {#manual-update}

Düğmenin gösterilmemesi veya otomatik güncellemenin başarısız olması durumunda, elle güncelleyebilirsiniz. We have a [detailed guide on manual updates][mupd], but in short:

1. Yeni AdGuard Home paketini indirin.

2. Geçici bir dizine çıkarın.

3. Eski AdGuard Home yürütülebilir dosyasını yenisiyle değiştirin.

4. AdGuard Home'u yeniden başlatın.

[mupd]: https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#manual-update

### Docker, Home Assistant, and Snapcraft updates

Auto-updates for Docker, Hass.io/Home Assistant, and Snapcraft installations are disabled. Bunun yerine resmi güncelleyin.

### Komut satırı güncellemesi

AdGuard Home paketini Web API'sini kullanmaya gerek kalmadan güncellemek için çalıştırın:

```sh
./AdGuardHome --update
```

## Cihazları yapılandırma {#configure-devices}

### Yönlendirici

This setup will automatically cover all devices connected to your home router, and you won’t need to configure each of them manually.

1. Yönlendiricinizin tercihlerini açın. Usually, you can access it from your browser via a URL, such as http\://192.168.0.1/ or http\://192.168.1.1/. Bir parola girmeniz istenebilir. Hatırlamıyorsanız, genellikle yönlendiricinin üzerindeki bir düğmeye basarak şifreyi sıfırlayabilirsiniz, ancak bu prosedür seçilirse muhtemelen tüm yönlendirici yapılandırmasını kaybedeceğinizi unutmayın. Yönlendiricinizin kurulumu için bir uygulama gerekiyorsa, lütfen uygulamayı telefonunuza veya bilgisayarınıza yükleyin ve yönlendiricinin ayarlarına erişmek için kullanın.

2. DHCP/DNS ayarlarını bulun. Her biri bir ila üç basamaklı dört gruba bölünmüş iki veya üç sayı kümesine izin veren bir alanın yanındaki DNS harflerini arayın.

3. AdGuard Home sunucu adreslerinizi oraya girin.

4. On some router types, a custom DNS server cannot be set up. Bu durumda, AdGuard Home'u bir DHCP sunucusu olarak ayarlamak yardımcı olabilir. Aksi takdirde, belirli yönlendirici modelinizdeki DNS sunucularını nasıl özelleştireceğinizi öğrenmek için yönlendiricinizin kılavuzuna başvurmalısınız.

### Windows

1. Başlat menüsünden veya Windows aramasından _Denetim Masası_ öğesini açın.

2. _Ağ ve İnternet_ öğesine ve ardından _Ağ ve Paylaşım Merkezi_ öğesine gidin.

3. Ekranın sol tarafında _Bağdaştırıcı ayarlarını değiştir_ düğmesini bulun ve ona tıklayın.

4. Etkin bağlantınızı seçin, sağ tıklayın ve _Özellikler_ öğesini seçin.

5. Listede _İnternet Protokolü Sürüm 4 (TCP/IPv4)_ (veya IPv6 için _İnternet Protokolü Sürüm 6 (TCP/IPv6)_) öğesini bulun, seçin ve ardından tekrar _Özellikler_ öğesine tıklayın.

6. _Aşağıdaki DNS sunucu adreslerini kullan_ öğesini seçin ve AdGuard Home sunucu adreslerinizi girin.

### macOS

1. Apple simgesine tıklayın ve _Sistem Tercihleri_ öğesine gidin.

2. _Ağ_ öğesine tıklayın.

3. Listedeki ilk bağlantıyı seçin ve _Gelişmiş_ öğesine tıklayın.

4. DNS sekmesini seçin ve AdGuard Home sunucunuzun adreslerini girin.

### Android

:::note

Android cihazlar için talimatlar işletim sistemi sürümüne ve üreticiye bağlı olarak farklılık gösterebilir.

:::

1. Android menüsü ana ekranından _Ayarlar_ öğesine dokunun.

2. Menüde _Wi-Fi_ öğesine dokunun. Mevcut tüm ağların bulunduğu ekran görüntülenecektir (mobil bağlantı için özel DNS ayarlamak mümkün değildir).

3. Bağlı olduğunuz ağın üzerine uzun basın ve _Ağı Değiştir_ öğesine dokunun.

4. Bazı cihazlarda, daha fazla ayar görmek için _Gelişmiş_ kutusunu işaretlemeniz gerekebilir. Android DNS ayarlarınızı düzenlemek için IP ayarlarınızı _DHCP_ yerine _Statik_ olarak değiştirmeniz gerekecektir.

5. DNS 1 ve DNS 2 değerlerini AdGuard Home sunucusunun ip adresleri ile değiştirin.

### iOS

1. Ana ekrandan _Ayarlar_ öğesine dokunun\*.

2. Select _Wi-Fi_ from the left menu (it is impossible to configure DNS for mobile networks).

3. O anda aktif olan ağın adına dokunun.

4. In the _DNS_ field, enter your AdGuard Home server addresses.

## Running without superuser {#running-without-superuser}

You can run AdGuard Home without superuser privileges, but you must either grant the binary a capability (on Linux) or instruct it to use a different port (all platforms).

### Gerekli yetkilerin verilmesi (yalnızca Linux)

Bu yöntemin kullanılması `setcap` yardımcı programını gerektirir. You may need to install it using your Linux distribution’s package manager.

To allow AdGuard Home running on Linux to listen on port 53 without superuser privileges and bind its DNS servers to a particular interface, run:

```sh
sudo setcap 'CAP_NET_BIND_SERVICE=+eip CAP_NET_RAW=+eip' ./AdGuardHome
```

Then run `./AdGuardHome` as an unprivileged user.

### DNS dinleme bağlantı noktasını değiştirme

To configure AdGuard Home to listen on a port that does not require superuser privileges, stop AdGuard Home, open `AdGuardHome.yaml` in your editor, and find these lines:

```yaml
dns:
    # …
    port: 53
```

You can change the port to anything above 1024 to avoid requiring superuser privileges.

## Limitations {#limitations}

Bazı dosya sistemleri, istatistik sisteminin gerektirdiği `mmap(2)` sistem çağrısını desteklemez. Ayrıca bkz. \[sorun 1188].

Bu sorunu şu şekilde çözebilirsiniz:

- either by supplying the `--work-dir DIRECTORY` arguments to the `AdGuardHome` binary. Bu seçenek AGH'ye tüm dosyaları için varsayılan `./data` dizini yerine başka bir dizin kullanmasını söyler.

- veya `mmap(2)` destekleyen başka bir dosya sistemine (örneğin tmpfs) işaret eden sembolik bağlantılar oluşturarak:

  ```sh
  ln -s ${YOUR_AGH_PATH}/data/stats.db /tmp/stats.db
  ln -s ${YOUR_AGH_PATH}/data/sessions.db /tmp/sessions.db
  ```

[issue 1188]: https://github.com/AdguardTeam/AdGuardHome/issues/1188
