---
title: DNS önbelleği nasıl temizlenir
sidebar_position: 1
---

# DNS önbelleği nasıl temizlenir

## DNS önbelleği nedir

DNS önbelleği, ziyaret edilen sitelerin IP adreslerini yerel bilgisayarda depolar, böylece bir dahaki sefere daha hızlı yüklenirler. Instead of doing a long DNS lookup, the system answers the queries with DNS records from the temporary DNS cache.

DNS önbelleği, aşağıdakileri içeren [kaynak kayıtları (RR'ler)](https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records) içerir:

* **Kaynak verileri (veya rdata)**;
* **Kayıt türü**;
* **Kayıt adı**;
* **TTL (kullanım süresi)**;
* **Sınıf**;
* **Kaynak veri uzunluğu**.

## Önbelleği temizlemeniz gerektiğinde

**You regularly get a 404 error.** For example, the website was transferred to another server, and its IP address has changed. Tarayıcının siteyi yeni IP adresinden açmasını sağlamak için önbelleğe alınan IP'yi DNS önbelleğinden kaldırmanız gerekir.

**Gizliliğinizi geliştirmek istiyorsunuz.**

**You want to protect yourself from hacker attacks and viruses.** When the DNS cache is corrupted, your browser may redirect you to an IP address of a malicious website that an attacker inserted in your computer’s DNS records.

## Farklı işletim sistemlerinde DNS önbelleği nasıl temizlenir

### macOS

To clear the DNS cache on macOS, open the Terminal (you can find it by using the Spotlight search — to do that, press Command+Space and type *Terminal*) and enter the following command:

`sudo killall -HUP mDNSResponder`

macOS Big Sur 11.2.0 ve macOS Monterey 12.0.0'da şu komutu da kullanabilirsiniz:

`sudo dscacheutil -flushcache`

Bundan sonra, işlemi tamamlamak için yönetici parolanızı girin.

### Windows

Windows cihazınızda DNS önbelleğini temizlemek için aşağıdakileri yapın:

Load the Command Prompt as an administrator. Başlat Menüsünde *komut istemi* veya *cmd* yazarak bulabilirsiniz. Ardından `ipconfig/flushdns` yazın ve Enter'a basın.

You will see the line *Successfully flushed the DNS Resolver Cache*. Tamamlandı!

### Linux

Linux does not have OS-level DNS caching unless a caching service such as Systemd Resolved, DNSMasq, BIND or Nscd is installed and running. The process of clearing the DNS cache depends on the Linux distribution and the caching service used.

For each distribution you need to start a terminal window. Press Ctrl+Alt+T on your keyboard and use the corresponding command to clear the DNS cache for the service your Linux system is running.

To find out which DNS resolver you're using, command `sudo lsof -i :53 -S`.

#### Systemd Resolved

To clear the **Systemd Resolved** DNS cache, type:

`sudo systemd-resolve --flush-caches`

Başarılı olduğunda, komut herhangi bir mesaj döndürmez.

#### DNSMasq

**DNSMasq** önbelleğini temizlemek için yeniden başlatmanız gerekir:

`sudo service dnsmasq restart`

#### Nscd

**Nscd** önbelleğini temizlemek için hizmeti yeniden başlatmanız da gerekir:

`sudo service nscd restart`

#### BIND

**BIND** DNS önbelleğini temizlemek için şu komutu çalıştırın:

`rndc flush`

Ardından BIND'i yeniden yüklemeniz gerekecek:

`rndc reload`

Sunucunun başarıyla yeniden yüklendiği mesajını alırsınız.

### Android

Android cihazınızda DNS önbelleğinizi temizlemenin en kolay yolu Uçak modunu açıp kapatmaktır. Uçak Modunu Hızlı Ayarlar bölmesinde etkinleştirebilir veya devre dışı bırakabilirsiniz.

Zorla yeniden başlatmak da, cihazınız için DNS önbelleğini temizlemeye de yardımcı olabilir. Bunu yapmak için güç düğmesini en az 20 saniye basılı tutun. (Genellikle) cihazınızı elle yeniden başlatmaya zorlar ve DNS önbelleği temizlenir.

Başka bir seçenek de, Ayarlar uygulamasında cihazınızın ağ ayarlarını sıfırlamaktır. Open *Settings > System > Advanced > Reset options > Reset network settings* and tap *Reset Settings* to confirm.

> Not: Bunu yaparak, Wi-Fi yönlendiricilerine ve DNS sunucu özelleştirmeleri dahil diğer belirli ağ ayarlarına olan bağlantıları kaybedersiniz. Bunları elle sıfırlamanız gerekir.

### iOS

iPad veya iPhone'unuzdaki DNS önbelleğini temizlemenin farklı yolları vardır.

En basit yol, Uçak modunu etkinleştirmek (örneğin, Kontrol Merkezi'nde veya Ayarlar uygulamasında) ve tekrar devre dışı bırakmaktır. DNS önbelleği temizlenecektir.

Başka bir seçenek de, Ayarlar uygulamasında cihazınızın ağ ayarlarını sıfırlamaktır. Open *General*, scroll down, find *Reset* and tap *Reset Network Settings*.

> Not: Bunu yaparak, Wi-Fi yönlendiricilerine ve DNS sunucu özelleştirmeleri dahil diğer belirli ağ ayarlarına olan bağlantıları kaybedersiniz. Bunları elle sıfırlamanız gerekir.