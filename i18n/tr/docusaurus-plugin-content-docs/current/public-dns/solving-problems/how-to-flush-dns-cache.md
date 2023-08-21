---
title: DNS önbelleği nasıl temizlenir
sidebar_position: 1
---

:::info

Here we explain how you can flush the DNS cache to resolve public DNS issues. Şifrelenmiş olanlar da dahil olmak üzere DNS sunucularını kurmak için AdGuard Reklam Engelleyiciyi kullanabilirsiniz

Quick link: [Download AdGuard Ad Blocker](https://adguard.com/download.html?auto=true&utm_source=kb_dns)

:::

## DNS önbelleği nedir?

DNS önbelleği, ziyaret edilen sitelerin IP adreslerini yerel bilgisayarda depolar, böylece bir dahaki sefere daha hızlı yüklenirler. Uzun bir DNS araması yapmak yerine sistem, sorguları geçici DNS önbelleğindeki DNS kayıtlarıyla yanıtlar.

The DNS cache contains so-called [resource records (RRs)](https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records), which are:

- **Kaynak verileri (veya rdata)**;
- **Kayıt türü**;
- **Kayıt adı**;
- **TTL (kullanım süresi)**;
- **Sınıf**;
- **Kaynak veri uzunluğu**.

## Önbelleği temizlemeniz gerektiğinde

**You've changed your DNS provider to AdGuard DNS.** If the user has changed their DNS, it may take some time to see the result because of the cache.

**You regularly get a 404 error.** For example, the website has been transferred to another server, and its IP address has changed. To make the browser open the website from the new IP address, you need to remove the cached IP from the DNS cache.

**You want to improve your privacy.**

## Farklı işletim sistemlerinde DNS önbelleği nasıl temizlenir

### iOS

There are different ways to clear the DNS cache on your iPad or iPhone.

En basit yol, Uçak modunu etkinleştirmek (örneğin, Kontrol Merkezi'nde veya Ayarlar uygulamasında) ve tekrar devre dışı bırakmaktır. DNS önbelleği temizlenecektir.

Başka bir seçenek de, Ayarlar uygulamasında cihazınızın ağ ayarlarını sıfırlamaktır. *Genel* öğesini açın, aşağı kaydırın, *Sıfırla* öğesini bulun ve *Ağ Ayarlarını Sıfırla* öğesine dokunun.

:::not

Bunu yaparak, Wi-Fi yönlendiricilerine ve DNS sunucu özelleştirmeleri dahil diğer belirli ağ ayarlarına olan bağlantıları kaybedersiniz. Bunları elle sıfırlamanız gerekir.

:::

### Android

Android cihazınızda DNS önbelleğinizi temizlemenin en kolay yolu Uçak modunu açıp kapatmaktır. Uçak Modunu Hızlı Ayarlar bölmesinde etkinleştirebilir veya devre dışı bırakabilirsiniz.

Zorla yeniden başlatmak da, cihazınız için DNS önbelleğini temizlemeye de yardımcı olabilir. Bunu yapmak için güç düğmesini en az 20 saniye basılı tutun. (Genellikle) cihazınızı elle yeniden başlatmaya zorlar ve DNS önbelleği temizlenir.

Başka bir seçenek de, Ayarlar uygulamasında cihazınızın ağ ayarlarını sıfırlamaktır. Open *Settings → System → Advanced → Reset options → Reset network settings* and tap *Reset Settings* to confirm.

:::not

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

Komut İstemi'ni yönetici olarak açın. Başlat Menüsünde *komut istemi* veya *cmd* yazarak bulabilirsiniz. Ardından `ipconfig/flushdns` yazın ve Enter'a basın.

*DNS Çözümleyici Önbelleği başarıyla temizlendi* satırını göreceksiniz. Tamamlandı!

### Linux

Linux, systemd-resolved, DNSMasq, BIND veya Nscd gibi bir önbellekleme hizmeti kurulu ve çalışıyor olmadığı sürece işletim sistemi düzeyinde DNS önbelleğine sahip değildir. DNS önbelleğini temizleme işlemi Linux dağıtımına ve kullanılan önbellekleme hizmetine bağlıdır.

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

Özel AdGuard DNS veya AdGuard Home ile çalışırken her seferinde bir tarayıcıyı yeniden başlatmak istemiyorsanız bu yararlı olabilir. Ayarlar 1-2'nin yalnızca bir kez değiştirilmesi gerekir.

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
