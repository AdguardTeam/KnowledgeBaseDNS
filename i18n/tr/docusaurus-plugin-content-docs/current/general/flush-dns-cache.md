---
title: DNS önbelleği nasıl temizlenir
sidebar_position: 4
---

Makine işletim sistemleri ve internet tarayıcıları, önceki DNS aramalarıyla ilgili bilgiler olan DNS önbelleğini kaydeder ve depolar. Önbellek, istenen alan adlarının IP adreslerini içerdiğinden bu, site açılışını hızlandırır: sistem, DNS sunucularına yönlendirmek yerine önbellekten sorgulara verilen yanıtları getirir.

Ancak, bilgisayarınızda veya tarayıcınızda depolanan eski DNS önbellek verileri, sitelerin görüntülenmesinde veya yüklenmesinde sorunlara neden olabilir. Daha da kötüsü, DNS önbelleği ağ saldırıları veya virüsler tarafından bozulabilir. Bu durumda, yetkilendirilmemiş alan adları veya IP adresleri içine eklenecektir. Ve örneğin, tarayıcınız google.com'a gitmek yerine sizi kötü amaçlı bir IP adresine veya reklam sayfasına yönlendirebilir.

Yukarıdaki sorunlardan kaçınmak için, DNS önbelleğini temizlemeniz gerekir: kaydedilen tüm DNS arama bilgilerini silmek, böylece bir sonraki arama isteği gönderdiğinizde, bilgisayarınız DNS sunucularından güncellenmiş verileri alır.

## Mac'te DNS önbelleği nasıl temizlenir

Mac'inizdeki DNS önbelleğini temizlemek için **Terminal** uygulamasını çalıştırın ve cihazınızda yüklü olan macOS sürümüne bağlı olarak belirli bir komut girin:

* macOS v13 (Ventura), 12 (Monterey), 11 (Big Sur), 10.15 (Catalina) sürümünde `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`

* macOS v10.14 (Mojave), 10.13 (High Sierra), 10.12 (Sierra), 10.08 (Mountain Lion), 10.07 (Lion) sürümünde `sudo killall -HUP mDNSResponder`

* macOS v10.11 (El Capitan), 10.9 (Mavericks) sürümünde `sudo dscacheutil -flushcache` ve `sudo killall -HUP mDNSResponder`

* macOS v10.10 sürümünde `sudo discoveryutil mdnsflushcache` ve `sudo discoveryutil udnsflushcaches`

* macOS v10.6 (Snow Leopard), 10.5 (Leopard) sürümünde `sudo dscacheutil -flushcache`

* macOS v10.4 (Tiger) sürümünde `lookupd -flushcache`

Ardından klavyenizde *Enter* düğmesine basın, hesap için yönetici parolasını girin ve *Enter* düğmesine basın. İşlem tamamlandığında herhangi bir bildirim olmaz. Ancak, örneğin, DNS önbelleğinin temizlenmesi tamamlandığında bir bildirim duymak için başka bir komut ekleyebilirsiniz:

`sudo killall -HUP mDNSResponder; dns başarıyla temizlendiğini söyler`

## Windows'ta DNS önbelleği nasıl temizlenir

Windows'ta DNS önbelleğini temizlemek basit bir işlemdir. Prosedür hemen hemen tüm Windows sürümleri için aynıdır.

Komut İstemi'ni yönetici olarak açın ve şu komutu girin: `ipconfig /flushdns`. If the command succeeds, you'll receive the message *Successfully flushed the DNS Resolver Cache*.

## Linux'ta DNS önbelleği nasıl temizlenir

Farklı Linux dağıtımları kendi DNS servislerini kullanabilir. Ubuntu gibi bazı dağıtımların varsayılan olarak hiçbir DNS hizmeti yoktur.

DNS önbelleğini temizlemeden önce, dağıtımınızın hangi hizmete sahip olduğunu ve varsayılan olarak etkin olup olmadığını öğrenin. Some of them are **NCSD** (Name Service Caching Daemon), **dnsmasq** and **BIND** (Berkeley Internet Name Domain).

### Yerel NCSD DNS önbelleği nasıl temizlenir

Linux makinenizde bu komutu kullanın:

`sudo /etc/init.d/nscd restart`

Gerekirse parolanızı girin.

### Yerel dnsmasq DNS önbelleği nasıl temizlenir

Linux makinenizde bu komutu kullanın:

`sudo /etc/init.d/dnsmasq restart`

Ardından gerekirse parolanızı girin. Hizmet durduğunda ve tekrar başladığında yanıtı görürsünüz.

### Yerel BIND DNS önbelleği nasıl temizlenir

DNS hizmeti için BIND kullanıyorsanız, DNS önbelleğini temizlemek için çalıştırabileceğiniz birkaç komut vardır. İşlemi tamamlamak için bir parola girmeniz gerekebilir.

`sudo /etc/init.d/named restart`

`sudo rndc restart`

`sudo rndc exec`

## Chrome tabanlı tarayıcılarda DNS önbelleği nasıl temizlenir

Tarayıcı adres çubuğuna **chrome://net-internals/#dns** bağlantısını girin ve *Clear host cache* düğmesine tıklayın. 
