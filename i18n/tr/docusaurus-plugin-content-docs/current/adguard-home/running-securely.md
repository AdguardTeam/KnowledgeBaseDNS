---
title: AdGuard Home'u güvenli bir şekilde ayarlama
sidebar_position: 4
---

Bu sayfa, AdGuard Home'unuzun güvenliğini sağlamaya yardımcı olacak ek önerilerin bir listesini içerir.

## Sunucu adreslerini seçme

AdGuard Home'u ilk kez başlattığınızda, düz DNS sunmak için hangi arayüzü kullanması gerektiği sorulacaktır. En güvenli ve kullanışlı seçenek, AdGuard Home'u nasıl çalıştırmak istediğinize bağlıdır. Adresleri daha sonra AdGuard Home'u durdurarak, yapılandırma dosyasındaki `dns.bind_hosts` alanını düzenleyerek ve AdGuard Home'u yeniden başlatarak değiştirebilirsiniz.

:::note

Kullanıcı arayüzü şu anda yalnızca bir arayüz seçmenize izin veriyor, ancak aslında yapılandırma dosyası aracılığıyla birden fazla adres seçebilirsiniz. Gelecek sürümlerde kullanıcı arayüzünü geliştireceğiz.

:::

AdGuard Home'u yalnızca **sizin bilgisayarınızda** çalıştırmak istiyorsanız, geri döngü aygıtını ("localhost" olarak da bilinir) seçin. Genellikle `localhost`, `lo` veya benzer bir adla anılır ve `127.0.0.1` adresine sahiptir.

If you plan to run AdGuard Home on a **router within a small isolated network**, select the locally-served interface. İsimler değişebilir, ancak genellikle `wlan` veya `wlp` kelimelerini içerirler ve `192.168.` ile başlayan bir adrese sahiptirler. Yönlendiricideki yazılımın da AdGuard Home'u kullanmasını istiyorsanız muhtemelen geri döngü adresini de eklemelisiniz.

AdGuard Home'u **genel erişime açık bir sunucuda** çalıştırmayı düşünüyorsanız, muhtemelen _Tüm arayüzler_ seçeneğini belirlemek isteyeceksiniz. Bunun sunucunuzu DDoS saldırılarına maruz bırakabileceğini unutmayın, bu nedenle lütfen aşağıdaki erişim ayarları ve hız sınırlama bölümlerini okuyun.

## Erişim ayarları

:::note

AdGuard Home'unuza dışarıdan erişilemiyorsa, bu bölümü atlayabilirsiniz.

:::

_Ayarlar_ → _DNS ayarları_ sayfasının alt kısmında _Erişim ayarları_ bölümünü bulacaksınız. Bu ayarlar, AdGuard Home örneğinizi kötüye kullandığı bilinen istemcileri yasaklamanıza veya İzin listesi modunu etkinleştirmenize olanak tanır. İzin listesi modu, istemci sayısının bilindiği ve tüm istemcilerin güvenli DNS kullanabildiği genel örnekler için önerilir.

İzin listesi modunu etkinleştirmek için, _İzin verilen istemciler_ alanına izin verilen istemciler için [ClientIDs][cid] (önerilir) veya IP adreslerini girin.

[cid]: https://github.com/AdguardTeam/AdGuardHome/wiki/Clients#clientid

## Düz DNS'i devre dışı bırakma

:::note

AdGuard Home'unuza dışarıdan erişilemiyorsa, bu bölümü atlayabilirsiniz.

:::

AdGuard Home'unuzu kullanan tüm istemciler şifrelenmiş protokolleri kullanabiliyorsa, düz DNS'i devre dışı bırakmak veya dışarıdan erişilemez hâle getirmek iyi bir fikirdir.

Düz DNS hizmetini tamamen devre dışı bırakmak istiyorsanız, bunu _Ayarlar_ → _Şifreleme ayarları_ sayfasından yapabilirsiniz.

Düz DNS'i yalnızca dahili kullanımla kısıtlamak istiyorsanız, AdGuard Home'unuzu durdurun, yapılandırma dosyasındaki `dns.bind_hosts` alanını yalnızca geri döngü adreslerini içerecek şekilde düzenleyin ve AdGuard Home'u yeniden başlatın.

## Düz DNS hız sınırlaması

:::note

AdGuard Home'unuza dışarıdan erişilemiyorsa, bu bölümü atlayabilirsiniz.

:::

Varsayılan düz DNS hız sınırının 20 olması genellikle yeterli olacaktır, ancak bilinen istemcilerin bir listesine sahipseniz, bunları izin listesine ekleyebilir ve diğer istemciler için daha katı bir hız sınırı ayarlayabilirsiniz.

## İşletim sistemi hizmet kaygıları

In order to prevent privilege escalations through binary planting, it is important that the directory where AdGuard Home is installed to has proper ownership and permissions set.

Bu bölümün yazılmasındaki yardımları için Go Compile'a teşekkür ederiz.

### Unix (FreeBSD, Linux, macOS, OpenBSD)

MacOS üzerinde varsayılan olarak `/Applications/AdGuardHome` ve diğer Unix sistemlerinde `/opt/AdGuardHome` olan AdGuard Home çalışma dizini ve ikili dosyanın kendisi genellikle `root:root` sahipliğine sahip olmalı ve `root` dışında kimse tarafından yazılamamalıdır. Bunu `/opt/AdGuardHome` yerine dizininizi ve `/opt/AdGuardHome/AdGuardHome` yerine ikili dosyanızı koyarak aşağıdaki komutla kontrol edebilirsiniz:

```sh
ls -d -l /opt/AdGuardHome
ls -l /opt/AdGuardHome/AdGuardHome
```

Makul derecede güvenli bir çıktı aşağıdaki gibi görünmelidir:

```none
drwxr-xr-x 4 root root 4096 Jan 1 12:00 /opt/AdGuardHome/
-rwxr-xr-x 1 root root 29409280 Jan 1 12:00 /opt/AdGuardHome/AdGuardHome
```

`root` dışında herhangi biri için yazma izni olmadığına ve `root` sahipliğine dikkat edin. Eğer izinler ve/veya sahiplik doğru değilse, `root` altında aşağıdaki komutları çalıştırın:

```sh
chmod 755 /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
chown root:root /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
```

### Windows

Windows'ta da prensip aynıdır: AdGuard Home dizininin, tipik olarak `C:\Program Files\AdGuardHome` ve `AdGuardHome.exe` ikili dosyasının yalnızca normal kullanıcıların bunları okumasına ve çalıştırmasına veya listelemesine izin verecek izinlere sahip olduğundan emin olun.

Gelecekte Windows yapılarını, bunun otomatik olarak gerçekleştirilmesini sağlayan MSI yükleyici dosyaları olarak yayınlamayı planlıyoruz.
