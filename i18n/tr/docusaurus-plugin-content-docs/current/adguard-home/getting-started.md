---
title: Başlarken
sidebar_position: 2
---

## Kurulum {#installation}

### Resmi sürümler

İşletim sisteminiz için ikili dosyayı içeren arşivi [en son kararlı sürüm sayfası][releases] adresinden indirin. Desteklenen platformların tam listesinin yanı sıra beta ve edge (kararsız) sürümlere bağlantılar [platformlar sayfamızda][platforms] bulunabilir.

AdGuard Home'u bir hizmet olarak kurmak için arşivi çıkarın, `AdGuardHome` dizinine girin ve çalıştırın:

```sh
./AdGuardHome -s install
```

#### Notlar

- **Fedora Linux** ve türevlerini kullananlar: AdGuard Home'u \`/usr/local/bin' dizinine kurun. Bunun yapılmaması SELinux ve izinlerle ilgili sorunlara neden olabilir. Bkz. \[sorun 765] ve \[sorun 3281].

- MacOS 10.15 Catalina\*\* ve daha yeni sürüm kullanıcıları AdGuard Home çalışma dizinini `/Applications` dizininin içine yerleştirmelidir.

### Docker ve Snap

We also provide an [official AdGuard Home docker image][docker] and an [official Snap Store package][snap] for experienced users.

### Diğer

Diğer bazı resmi olmayan seçenekler şunlardır:

- [Home Assistant add-on][has] maintained by [@frenck](https://github.com/frenck).

- [OpenWrt LUCI uygulaması][luci], [@kongfl888](https://github.com/kongfl888) tarafından sürdürülmektedir.

- [Arch Linux][arch], [Arch Linux ARM][archarm] ve diğer Arch tabanlı işletim sistemleri, [@graysky2](https://github.com/graysky2) tarafından sürdürülen [AUR'daki][aur] [`adguardhome` paketi][aghaur] aracılığıyla oluşturulabilir.

- [Cloudron uygulaması][cloudron], [@gramakri](https://github.com/gramakri) tarafından sürdürülmektedir.

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

Öncelikle güvenlik duvarı ayarlarınızı kontrol edin. AdGuard Home'u kurmak ve kullanmak için aşağıdaki bağlantı noktalarının ve protokollerin kullanılabilir olması gerekir:

- İlk kurulum için 3000/TCP;
- Web arayüzü için 80/TCP;
- DNS sunucusu için 53/UDP.

DNS-over-HTTPS gibi düz DNS dışındaki protokoller için ek bağlantı noktaları açmanız gerekebilir.

DNS sunucuları, çoğu zaman süper kullanıcı ayrıcalıkları gerektiren 53 numaralı bağlantı noktasına bağlanır, [aşağıya bakın](#running-without-superuser). Bu nedenle, Unix sistemlerinde, terminalde `sudo` veya `doas` ile çalıştırmanız gerekecektir:

```sh
sudo ./AdGuardHome
```

Windows'ta yönetici ayrıcalıklarıyla `cmd.exe` veya PowerShell'i çalıştırın ve buradan `AdGuardHome.exe` dosyasını çalıştırın.

AdGuard Home'u ilk kez çalıştırdığınızda, `0.0.0.0:3000` adresini dinlemeye başlar ve tarayıcınızda açmanızı ister:

```none
AdGuard Home aşağıdaki adreslerde mevcuttur:
http://127.0.0.1:3000 adresine gidin
http://[::1]:3000 adresine gidin
[…]
```

Orada ilk yapılandırma sihirbazından geçeceksiniz.

![AdGuard Home ağ arayüzü seçim ekranı](https://cdn.adtidy.org/content/kb/dns/adguard-home/install2.png)

![AdGuard Home kullanıcı oluşturma ekranı](https://cdn.adtidy.org/content/kb/dns/adguard-home/install3.png)

Size en uygun başlangıç yapılandırmasını nasıl seçeceğiniz konusunda rehberlik için [AdGuard Home'u güvenli bir şekilde çalıştırma makalemize](running-securely.md) bakın.

## Hizmet olarak çalıştırma {#service}

Bir sonraki adım AdGuard Home'u bir sistem hizmeti (diğer adıyla daemon) olarak kaydetmek olacaktır. AdGuard Home'u bir hizmet olarak kurmak için şunu çalıştırın:

```sh
sudo ./AdGuardHome -s install
```

Windows'ta, yönetici ayrıcalıklarıyla `cmd.exe` dosyasını çalıştırın ve bir Windows hizmetini kaydetmek için `AdGuardHome.exe -s install` komutunu çalıştırın.

Hizmeti kontrol etmek için ihtiyaç duyabileceğiniz diğer komutlar şunlardır:

- `AdGuardHome -s uninstall`: AdGuard Home hizmetini kaldırın.
- `AdGuardHome -s start`: Hizmeti başlatın.
- `AdGuardHome -s stop`: Hizmeti durdurun.
- `AdGuardHome -s restart`: Hizmeti yeniden başlatın.
- `AdGuardHome -s status`: Geçerli hizmet durumunu gösterin.

### Günlükler

Varsayılan olarak, AdGuard Home'u bir terminalde çalıştırdığınızda günlükler `stderr` adresine yazılır. Bir hizmet olarak çalıştırırsanız, günlük çıktısı platforma göre değişir:

- MacOS'ta günlük `/var/log/AdGuardHome.*.log` dosyalarına yazılır.

- Diğer Unix'lerde günlük `syslog` veya `journald` dosyasına yazılır.

- Windows'ta günlük, Windows olay günlüğüne yazılır.

Bu davranışı AdGuard Home [yapılandırma dosyası][conf] içinde değiştirebilirsiniz.

[conf]: https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration

## Güncelleme {#update}

![Bir güncelleme bildirimi örneği](https://cdn.adtidy.org/content/kb/dns/adguard-home/updatenotification.png)

Yeni bir sürüm yayınlandığında, AdGuard Home'un kullanıcı arayüzünde bir bildirim mesajı ve _Şimdi güncelle_ düğmesi gösterilir. Bu düğmeye tıkladığınızda AdGuard Home otomatik olarak en son sürüme güncellenecektir. Mevcut AdGuard Home çalıştırılabilir dosyanız, mevcut yapılandırma dosyasıyla birlikte `backup` dizininin içine kaydedilir, böylece gerekirse değişiklikleri geri alabilirsiniz.

### Elle güncelleme {#manual-update}

Düğmenin gösterilmemesi veya otomatik güncellemenin başarısız olması durumunda, elle güncelleyebilirsiniz. [Elle güncellemeler hakkında ayrıntılı bir kılavuzumuz][mupd] var, ancak kısaca:

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

Bu kurulum, ev yönlendiricinize bağlı tüm cihazları otomatik olarak kapsar ve her birini elle yapılandırmanız gerekmez.

1. Yönlendiricinizin tercihlerini açın. Genellikle, tarayıcınızdan <http://192.168.0.1/> veya <http://192.168.1.1/> gibi bir URL aracılığıyla erişebilirsiniz. Bir parola girmeniz istenebilir. Hatırlamıyorsanız, genellikle yönlendiricinin üzerindeki bir düğmeye basarak şifreyi sıfırlayabilirsiniz, ancak bu prosedür seçilirse muhtemelen tüm yönlendirici yapılandırmasını kaybedeceğinizi unutmayın. Yönlendiricinizin kurulumu için bir uygulama gerekiyorsa, lütfen uygulamayı telefonunuza veya bilgisayarınıza yükleyin ve yönlendiricinin ayarlarına erişmek için kullanın.

2. DHCP/DNS ayarlarını bulun. Her biri bir ila üç basamaklı dört gruba bölünmüş iki veya üç sayı kümesine izin veren bir alanın yanındaki DNS harflerini arayın.

3. AdGuard Home sunucu adreslerinizi oraya girin.

4. Bazı yönlendirici türlerinde özel bir DNS sunucusu kurulamaz. Bu durumda, AdGuard Home'u bir DHCP sunucusu olarak ayarlamak yardımcı olabilir. Aksi takdirde, belirli yönlendirici modelinizdeki DNS sunucularını nasıl özelleştireceğinizi öğrenmek için yönlendiricinizin kılavuzuna başvurmalısınız.

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

2. Sol menüden _Wi-Fi_ öğesini seçin (mobil ağlar için DNS yapılandırması mümkün değildir).

3. O anda aktif olan ağın adına dokunun.

4. _DNS_ alanına AdGuard Home sunucu adreslerinizi girin.

## Süper kullanıcı olmadan çalıştırma {#running-without-superuser}

You can run AdGuard Home without superuser privileges, but you must either grant the binary a capability (on Linux) or instruct it to use a different port (all platforms).

### Gerekli yetkilerin verilmesi (yalnızca Linux)

Bu yöntemin kullanılması `setcap` yardımcı programını gerektirir. Linux dağıtımınızın paket yöneticisini kullanarak kurmanız gerekebilir.

Linux'da çalışan AdGuard Home'un süper kullanıcı ayrıcalıkları olmadan 53 numaralı bağlantı noktasını dinlemesine ve DNS sunucularını belirli bir arayüze bağlamasına izin vermek için çalıştırın:

```sh
sudo setcap 'CAP_NET_BIND_SERVICE=+eip CAP_NET_RAW=+eip' ./AdGuardHome
```

Ardından `./AdGuardHome` dosyasını ayrıcalıksız bir kullanıcı olarak çalıştırın.

### DNS dinleme bağlantı noktasını değiştirme

AdGuard Home'u süper kullanıcı ayrıcalıkları gerektirmeyen bir bağlantı noktasını dinleyecek şekilde yapılandırmak için AdGuard Home'u durdurun, düzenleyicinizde `AdGuardHome.yaml` dosyasını açın ve bu satırları bulun:

```yaml
dns:
    # …
    port: 53
```

Süper kullanıcı ayrıcalıkları gerektirmemek için bağlantı noktasını 1024'ün üzerinde herhangi bir değerle değiştirebilirsiniz.

## Kısıtlamalar {#limitations}

Bazı dosya sistemleri, istatistik sisteminin gerektirdiği `mmap(2)` sistem çağrısını desteklemez. Ayrıca bkz. \[sorun 1188].

Bu sorunu şu şekilde çözebilirsiniz:

- ya da `AdGuardHome` ikili dosyasına `--work-dir DIRECTORY` argümanlarını sağlayarak. Bu seçenek AGH'ye tüm dosyaları için varsayılan `./data` dizini yerine başka bir dizin kullanmasını söyler.

- veya `mmap(2)` destekleyen başka bir dosya sistemine (örneğin tmpfs) işaret eden sembolik bağlantılar oluşturarak:

  ```sh
  ln -s ${YOUR_AGH_PATH}/data/stats.db /tmp/stats.db
  ln -s ${YOUR_AGH_PATH}/data/sessions.db /tmp/sessions.db
  ```

[issue 1188]: https://github.com/AdguardTeam/AdGuardHome/issues/1188
