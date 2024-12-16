---
title: Bağlı IP'ler
sidebar_position: 3
---

## What linked IPs are and why they are useful

Tüm cihazlar şifrelenmiş DNS protokollerini desteklemez. Bu durumda, şifrelenmemiş DNS kurmayı düşünmelisiniz. Örneğin, **bağlı IP adresi** kullanabilirsiniz. Bağlı bir IP adresi için tek gereksinim, bunun bir konut IP'si olmasıdır.

:::note

**Konut IP adresi**, konut bir İSS'ye bağlı bir cihaza atanır. Genellikle fiziksel bir konuma bağlıdır ve bireysel evlere veya dairelere verilir. İnsanlar web'de gezinmek, e-posta göndermek, sosyal medya kullanmak veya canlı yayın akışı içeriği sağlamak gibi günlük çevrimiçi etkinlikler için konut IP adreslerini kullanırlar.

:::

Bazen, bir konut IP adresi zaten kullanımda olabilir ve siz bu adrese bağlanmaya çalıştığınızda AdGuard DNS bağlantıyı önler.
![Bağlı IPv4 adresi \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked.png)
Eğer böyle bir durum olursa lütfen [support@adguard-dns.io](mailto:support@adguard-dns.io) adresinden destek ekibiyle iletişime geçin, doğru yapılandırma ayarları konusunda size yardımcı olacaklardır.

## Bağlı IP nasıl kurulur

Aşağıdaki talimatlar, cihaza **IP adresini bağlamak** aracılığıyla nasıl bağlanılacağını açıklamaktadır:

1. Panoyu açın.
2. Yeni bir cihaz ekleyin veya önceden bağlanmış bir cihazın ayarlarını açın.
3. _DNS sunucu adreslerini kullan_ öğesine gidin.
4. _Düz DNS sunucu adresleri_ öğesini açın ve bağlı IP'yi bağlayın.
   ![Bağlı IP \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked_step4.png)

## Dynamic DNS: Why it is useful

Bir cihaz ağa her bağlandığında yeni bir dinamik IP adresi alır. When a device disconnects, the DHCP server can assign the released IP address to another device on the network. This means dynamic IP addresses change frequently and unpredictably. Sonuç olarak, cihaz her yeniden başlatıldığında veya ağ değiştiğinde ayarları güncellemeniz gerekir.

Bağlı IP adresini otomatik olarak güncel tutmak için DNS kullanabilirsiniz. AdGuard DNS, DDNS alan adınızın IP adresini düzenli olarak kontrol eder ve sunucunuza bağlar.

:::note

Dinamik DNS (DDNS), IP adresiniz değiştiğinde DNS kayıtlarını otomatik olarak güncelleyen bir hizmettir. Kolaylık sağlamak için ağ IP adreslerini okunması kolay alan adlarına dönüştürür. Bir adı bir IP adresine bağlayan bilgiler DNS sunucusundaki bir tabloda saklanır. DDNS, IP adreslerinde değişiklik olduğunda bu kayıtları günceller.

:::

Bu şekilde, ilişkili IP adresini her değiştiğinde elle güncellemeniz gerekmez.

## Dinamik DNS: Nasıl kurulur

1. Öncelikle, DDNS'nin yönlendirici ayarlarınız tarafından desteklenip desteklenmediğini kontrol etmeniz gerekir:
   - _Yönlendirici ayarları_ → _Ağ_ öğesine gidin
   - DDNS veya _Dinamik DNS_ bölümünü bulun
   - Oraya gidin ve ayarların gerçekten desteklendiğini doğrulayın. _Bu sadece neye benzeyebileceğine dair bir örnektir. Yönlendiricinize bağlı olarak değişebilir_
     ![DDNS destekli \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dynamic_dns.png)
2. Alan adınızı [DynDNS](https://dyn.com/remote-access/), [NO-IP](https://www.noip.com/) veya tercih ettiğiniz başka bir DDNS sağlayıcısı gibi popüler bir hizmetle tescil ettirin.
3. Yönlendirici ayarlarınıza alan adını girin ve yapılandırmaları senkronize edin.
4. Adresi bağlamak için Bağlı IP ayarlarına gidin, ardından _Gelişmiş Ayarlar_ öğesine gidin ve _DDNS'i yapılandır_ öğesine tıklayın.
5. Daha önce tescil ettirdiğiniz alan adını girin ve _DDNS'i yapılandır_ öğesine tıklayın.
   ![DDNS'i yapılandır \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dns_supported.png)

Hepsi tamam, DDNS'i başarıyla kurdunuz!

## Betik aracılığıyla bağlı IP güncellemesinin otomasyonu

### On Windows

En kolay yol Görev Zamanlayıcı'yı kullanmaktır:

1. Bir görev oluşturun:
   - Görev Zamanlayıcı'yı açın.
   - Yeni bir görev oluşturun.
   - Tetikleyiciyi her 5 dakikada bir çalışacak şekilde ayarlayın.
   - Select _Run Program_ as the action.
2. Program seçin:
   - _Program veya Betik_ alanına `powershell` yazın
   - In the _Add Arguments_ field, type:
     - `Command "Invoke-WebRequest -Uri 'https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}'"`
3. Görevi kaydedin.

### On macOS and Linux

On macOS and Linux, the easiest way is to use `cron`:

1. Open crontab:
   - In the terminal, run `crontab -e`.
2. Bir görev ekleyin:
   - Aşağıdaki satırı ekleyin:
     `/5 * * * * curl https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}`
   - This job will run every 5 minutes
3. Save crontab.

:::note Önemli

- Make sure you have `curl` installed on macOS and Linux.
- Ayarlardan adresi kopyalamayı ve `ServerID` ile `UniqueKey` ifadelerini değiştirmeyi unutmayın.
- Daha karmaşık mantık veya sorgu sonuçlarının işlenmesi gerekiyorsa, bir görev zamanlayıcı veya cron ile birlikte betikler (örn. Bash, Python) kullanmayı göz önünde bulundurun.

:::
