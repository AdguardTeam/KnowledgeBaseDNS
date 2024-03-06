---
title: AdGuard Home'u güvenli bir şekilde ayarlama
sidebar_position: 4
---

Bu sayfa, AdGuard Home'unuzun güvenliğini sağlamaya yardımcı olacak ek önerilerin bir listesini içerir.

## Sunucu adreslerini seçme

AdGuard Home'u ilk kez başlattığınızda, düz DNS sunmak için hangi arayüzü kullanması gerektiği sorulacaktır. En güvenli ve kullanışlı seçenek, AdGuard Home'u nasıl çalıştırmak istediğinize bağlıdır. You can change the address(es) later, by stopping your AdGuard Home, editing the `dns.bind_hosts` field in the configuration file, and restarting AdGuard Home.

:::note

Kullanıcı arayüzü şu anda yalnızca bir arayüz seçmenize izin veriyor, ancak aslında yapılandırma dosyası aracılığıyla birden fazla adres seçebilirsiniz. Gelecek sürümlerde kullanıcı arayüzünü geliştireceğiz.

:::

If you intend to run AdGuard Home on **your computer only,** select the loopback device (also known as “localhost”). Genellikle `localhost`, `lo` veya benzer bir adla anılır ve `127.0.0.1` adresine sahiptir.

If you plan to run AdGuard Home on a **router within a small isolated network**, select the locally-served interface. The names can vary, but they usually contain the words `wlan` or `wlp` and have an address starting with `192.168.`. You should probably also add the loopback address as well, if you want software on the router itself to use AdGuard Home too.

AdGuard Home'u **genel erişime açık bir sunucuda** çalıştırmayı düşünüyorsanız, muhtemelen _Tüm arayüzler_ seçeneğini belirlemek isteyeceksiniz. Note that this may expose your server to DDoS attacks, so please read the sections on access settings and rate limiting below.

## Erişim ayarları

:::note

AdGuard Home'unuza dışarıdan erişilemiyorsa, bu bölümü atlayabilirsiniz.

:::

_Ayarlar_ → _DNS ayarları_ sayfasının alt kısmında _Erişim ayarları_ bölümünü bulacaksınız. Bu ayarlar, AdGuard Home örneğinizi kötüye kullandığı bilinen istemcileri yasaklamanıza veya İzin listesi modunu etkinleştirmenize olanak tanır. İzin listesi modu, istemci sayısının bilindiği ve tüm istemcilerin güvenli DNS kullanabildiği genel örnekler için önerilir.

To enable the Allowlist mode, enter [ClientIDs][cid] (recommended) or IP addresses for allowed clients in the _Allowed clients_ field.

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

AdGuard Home working directory, which is by default `/Applications/AdGuardHome` on macOS and `/opt/AdGuardHome` on other Unix systems, as well as the binary itself should generally have `root:root` ownership and not be writeable by anyone but `root`. Bunu `/opt/AdGuardHome` yerine dizininizi ve `/opt/AdGuardHome/AdGuardHome` yerine ikili dosyanızı koyarak aşağıdaki komutla kontrol edebilirsiniz:

```sh
ls -d -l /opt/AdGuardHome
ls -l /opt/AdGuardHome/AdGuardHome
```

Makul derecede güvenli bir çıktı aşağıdaki gibi görünmelidir:

```none
drwxr-xr-x 4 root root 4096 Jan 1 12:00 /opt/AdGuardHome/
-rwxr-xr-x 1 root root 29409280 Jan 1 12:00 /opt/AdGuardHome/AdGuardHome
```

Note the lack of write permission for anyone but `root` as well as `root` ownership. If the permissions and/or ownership are not correct, run the following commands under `root`:

```sh
chmod 755 /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
chown root:root /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
```

### Windows

The principle is the same on Windows: make sure that the AdGuard Home directory, typically `C:\Program Files\AdGuardHome`, and the `AdGuardHome.exe` binary have the permissions that would only allow regular users to read and execute/list them.

Gelecekte Windows yapılarını, bunun otomatik olarak gerçekleştirilmesini sağlayan MSI yükleyici dosyaları olarak yayınlamayı planlıyoruz.
