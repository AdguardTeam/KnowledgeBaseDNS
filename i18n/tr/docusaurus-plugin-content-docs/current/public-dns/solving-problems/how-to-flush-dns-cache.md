---
title: DNS önbelleği nasıl temizlenir
sidebar_position: 1
---

:::info

Burada, genel DNS sorunlarını çözmek için DNS önbelleğini nasıl temizleyebileceğinizi açıklıyoruz. Şifrelenmiş olanlar da dahil olmak üzere DNS sunucularını kurmak için AdGuard Reklam Engelleyiciyi kullanabilirsiniz

Hızlı bağlantı: [AdGuard Reklam Engelleyiciyi indir](https://agrd.io/download-kb-adblock)

:::

## DNS önbelleği nedir?

DNS önbelleği, ziyaret edilen sitelerin IP adreslerini yerel bilgisayarda depolar, böylece bir dahaki sefere daha hızlı yüklenirler. Uzun bir DNS araması yapmak yerine sistem, sorguları geçici DNS önbelleğindeki DNS kayıtlarıyla yanıtlar.

DNS önbelleği, aşağıdakileri içeren [kaynak kayıtları (RR'ler)](https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records) içerir:

- **Kaynak verileri (veya rdata)**;
- **Kayıt türü**;
- **Kayıt adı**;
- **TTL (kullanım süresi)**;
- **Sınıf**;
- **Kaynak veri uzunluğu**.

## Önbelleği temizlemeniz gerektiğinde

**DNS sağlayıcınızı AdGuard DNS olarak değiştirdiniz.** Kullanıcı DNS'sini değiştirmişse, önbellek nedeniyle sonucun görülmesi biraz zaman alabilir.

**Düzenli olarak 404 hatası alıyorsunuz.** Örneğin, site başka bir sunucuya aktarılmıştır ve IP adresi değişmiştir. Tarayıcının siteyi yeni IP adresinden açmasını sağlamak için önbelleğe alınan IP'yi DNS önbelleğinden kaldırmanız gerekir.

**Gizliliğinizi geliştirmek istiyorsunuz.**

## Farklı işletim sistemlerinde DNS önbelleği nasıl temizlenir

### iOS

IPad veya iPhone'unuzdaki DNS önbelleğini temizlemenin farklı yolları vardır.

En basit yol, Uçak modunu etkinleştirmek (örneğin, Kontrol Merkezi'nde veya Ayarlar uygulamasında) ve tekrar devre dışı bırakmaktır. DNS önbelleği temizlenecektir.

Başka bir seçenek de, Ayarlar uygulamasında cihazınızın ağ ayarlarını sıfırlamaktır. *Genel* öğesini açın, aşağı kaydırın, *Sıfırla* öğesini bulun ve *Ağ Ayarlarını Sıfırla* öğesine dokunun.

:::note Not

Bunu yaparak, Wi-Fi yönlendiricilerine ve DNS sunucu özelleştirmeleri dahil diğer belirli ağ ayarlarına olan bağlantıları kaybedersiniz. Bunları elle sıfırlamanız gerekir.

:::

### Android

Android cihazınızdaki DNS önbelleğini temizlemenin farklı yolları vardır. Doğru adımlar, kullandığınız Android sürümüne ve cihaz üreticisine bağlı olarak değişebilir.

#### Chrome aracılığıyla DNS önbelleğini temizle

Android'de genellikle varsayılan tarayıcı olan Google Chrome'un kendi DNS önbelleği vardır. Chrome tarayıcısında bu önbelleği temizlemek için aşağıdaki talimatları izleyin:

1. Android cihazınızda Chrome'u başlatın
1. Adres çubuğuna `chrome://net-internals/#DNS` yazın
1. DNS arama sayfasında, soldaki menüden DNS'i seçin
1. Sağdaki panelde, cihazınızdaki DNS önbelleğini temizlemek için *Clear Host Cache* düğmesine dokunun

#### Wi-Fi ağını Statik olarak değiştir

Wi-Fi ağ ayarlarını Statik olarak değiştirerek Android cihazınızın DNS önbelleğini temizlemek için aşağıdaki adımları izleyin:

1. *Ayarlar → Wi-Fi* öğesine gidin ve bağlı olduğunuz ağı seçin
1. IP ayarlarını bulun ve *Statik* öğesini seçin
1. Gerekli alanları doldurun. Gerekli bilgileri ağ yöneticinizden veya yönlendiricinizin yapılandırma sayfasından alabilirsiniz
1. Gerekli bilgileri girdikten sonra Wi-Fi ağınıza yeniden bağlanın. Bu eylem cihazınızı IP ve DNS ayarlarını güncellemeye ve DNS önbelleğini temizlemeye zorlar

#### Ağ ayarlarını sıfırla

Başka bir seçenek de, Ayarlar uygulamasında cihazınızın ağ ayarlarını sıfırlamaktır. *Ayarlar → Sistem → Gelişmiş → Seçenekleri sıfırla → Ağ ayarlarını sıfırla* öğesini açın ve onaylamak için *Ayarları Sıfırla* öğesine dokunun.

:::note Not

Bunu yaparak, Wi-Fi yönlendiricilerine ve DNS sunucu özelleştirmeleri dahil diğer belirli ağ ayarlarına olan bağlantıları kaybedersiniz. Bunları elle sıfırlamanız gerekir.

:::

### macOS

MacOS'ta DNS önbelleğini temizlemek için Terminal'i açın (Spotlight aramasını kullanarak bulabilirsiniz - bunu yapmak için Komut+Boşluk tuşlarına basın ve *Terminal*yazın) ve aşağıdaki komutu girin:

`sudo killall -HUP mDNSResponder`

macOS Big Sur 11.2.0 ve macOS Monterey 12.0.0'da şu komutu da kullanabilirsiniz:

`sudo dscacheutil -flushcache`

Bundan sonra, işlemi tamamlamak için yönetici parolanızı girin.

### Windows

Windows cihazınızda DNS önbelleğini temizlemek için aşağıdakileri yapın:

Komut İstemi'ni yönetici olarak açın. Başlat Menüsünde *komut istemi* veya *cmd* yazarak bulabilirsiniz. Ardından `ipconfig /flushdns` yazın ve Enter'a basın.

*DNS Çözümleyici Önbelleği başarıyla temizlendi* satırını göreceksiniz. Tamamlandı!

### Linux

Linux, systemd-resolved, DNSMasq, BIND veya nscd gibi bir önbellekleme hizmeti kurulu ve çalışıyor olmadığı sürece işletim sistemi düzeyinde DNS önbelleğine sahip değildir. DNS önbelleğini temizleme işlemi Linux dağıtımına ve kullanılan önbellekleme hizmetine bağlıdır.

Her dağıtım için bir terminal penceresi başlatmanız gerekir. Klavyenizde Ctrl+Alt+T tuşlarına basın ve Linux sisteminizin çalıştırdığı hizmetin DNS önbelleğini temizlemek için ilgili komutu kullanın.

Hangi DNS çözümleyicisini kullandığınızı öğrenmek için `sudo lsof -i :53 -S` komutunu yazın.

#### systemd-resolved

**systemd-resolved** DNS önbelleğini temizlemek için şunu yazın:

`sudo systemd-resolve --flush-caches`

Başarılı olduğunda, komut herhangi bir mesaj döndürmez.

#### DNSMasq

**DNSMasq** önbelleğini temizlemek için yeniden başlatmanız gerekir:

`sudo service dnsmasq restart`

#### NSCD

**NSCD** önbelleğini temizlemek için hizmeti yeniden başlatmanız da gerekir:

`sudo service nscd restart`

#### BIND

**BIND** DNS önbelleğini temizlemek için şu komutu çalıştırın:

`rndc flush`

Ardından BIND'i yeniden yüklemeniz gerekir:

`rndc reload`

Sunucunun başarıyla yeniden yüklendiği mesajını alırsınız.

## Chrome'da DNS önbelleği nasıl temizlenir

Özel AdGuard DNS veya AdGuard Home ile çalışırken her seferinde bir tarayıcıyı yeniden başlatmak istemiyorsanız bu yararlı olabilir. 1–2 ayarlarının yalnızca bir kez değiştirilmesi gereklidir.

1. Chrome ayarlarında **güvenli DNS** öğesini devre dışı bırakın

    ```bash
    chrome://settings/security
    ```

1. **Async DNS resolver** öğesini devre dışı bırakın

    ```bash
    chrome://flags/#enable-async-dns
    ```

1. Buradaki iki düğmeye de basın

    ```bash
    chrome://net-internals/#sockets
    ```

1. **Clear host cache** öğesine basın

    ```bash
    chrome://net-internals/#dns
    ```
