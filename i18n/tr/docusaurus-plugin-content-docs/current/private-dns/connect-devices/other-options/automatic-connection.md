---
title: Otomatik bağlantı
sidebar_position: 5
---

## Why it is useful

Not everyone feels at ease adding devices through the Dashboard. For instance, if you’re a system administrator setting up multiple corporate devices simultaneously, you’ll want to minimize manual tasks as much as possible.

You can create a connection link and use it in the device settings. Your device will be detected and automatically connected to the server.

## How to configure automatic connection

1. _Pano_ öğesini açın ve gerekli sunucuyu seçin.
2. _Cihazlar_ öğesine gidin.
3. Cihazların otomatik olarak bağlanma seçeneğini etkinleştirin.
   ![Connect devices automatically \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step4.png)

Artık cihaz adını, cihaz türünü ve geçerli sunucu kimliğini içeren özel bir adres oluşturarak cihazınızı sunucuya otomatik olarak bağlayabilirsiniz. Let’s explore what these addresses look like and the rules for creating them.

### Otomatik bağlantı adreslerine örnekler

- `tls://adr-{Your_Server_ID}-AdGuard-Test-Device.d.adguard-dns.com` — bu işlem otomatik olarak `AdGuard Test Device` adında `DNS-over-TLS` protokolüne sahip bir `Android` cihazı oluşturur

- `https://d.adguard-dns.com/dns-query/win-{Your_Server_ID}-John-Doe` — bu otomatik olarak `John Doe` adında `DNS-over-HTTPS` protokolüne sahip bir `Windows` cihazı oluşturur

- `quic://ios-73f78a1d-Mary-Sue.d.adguard-dns.com` — bu otomatik olarak `Mary Sue` adında `DNS-over-QUIC` protokolüne sahip bir `iOS` cihazı oluşturur

### Naming conventions

Cihazları elle oluştururken ad uzunluğu, karakterler, boşluklar ve tirelerle ilgili kısıtlamalar olduğunu lütfen unutmayın.

**Ad uzunluğu**: Maksimum 50 karakter. Bu sınırı aşan karakterler yok sayılır.

**İzin verilen karakterler**: İngilizce harfler, sayılar ve tireler `-`. Diğer karakterler göz ardı edilir.

**Boşluklar ve tireler**: Boşluklar için tire, tireler için çift tire ( `--`) kullanın.

**Cihaz türü**: Aşağıdaki kısaltmaları kullanın:

- Windows — `win`
- macOS — `mac`
- Android — `adr`
- iOS — `ios`
- Linux — `lnx`
- Yönlendirici — `rtr`
- Akıllı TV — `stv`
- Oyun konsolu — `gam`
- Diğer — `otr`

## Bağlantı oluşturucu

Belirli cihaz türü ve protokol için bir bağlantı oluşturan bir şablon ekledik.

1. _Sunucular_ → _Sunucu ayarları_ → _Cihazlar_ → _Cihazları otomatik olarak bağla_ öğesine gidin ve _Bağlantı oluşturucu ve talimatlar_ öğesine tıklayın.
2. Kullanmak istediğiniz protokolün yanı sıra cihaz adını ve cihaz türünü seçin.
3. _Bağlantı oluştur_ öğesine tıklayın.
   ![Bağlantı oluştur \*mobil\_sınır](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step7.png)
4. Bağlantıyı başarıyla oluşturdunuz, şimdi sunucu adresini kopyalayın ve [AdGuard uygulamalarından](https://adguard.com/welcome.html) birinde kullanın
