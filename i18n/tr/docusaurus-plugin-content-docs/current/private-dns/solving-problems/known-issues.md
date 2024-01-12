---
title: Bilinen sorunlar
sidebar_position: 1
---

AdGuard DNS'i kurduktan sonra bazı kullanıcılar bunun düzgün çalışmadığını görebilir: cihazlarının AdGuard DNS'e bağlı olmadığını ve bu cihazdan gelen isteklerin Sorgu günlüğünde görüntülenmediğini belirten bir mesaj görürler. Bunun nedeni, tarayıcınızdaki veya işletim sisteminizdeki bazı gizli ayarlar olabilir. Şimdi birkaç yaygın soruna ve çözümlerine bakalım.

:::ipucu

AdGuard DNS'in durumunu [test sayfasında](https://adguard.com/test.html) kontrol edebilirsiniz.

:::

## Chrome'un güvenli DNS ayarları

Chrome kullanıyorsanız ve AdGuard DNS panonuzda herhangi bir istek görmüyorsanız, bunun nedeni Chrome'un kendi DNS sunucusunu kullanması olabilir. İşte bunu nasıl devre dışı bırakabileceğiniz:

1. Chrome ayarlarını açın.
1. *Gizlilik ve güvenlik* öğesine gidin.
1. *Güvenlik* öğesini seçin.
1. *Güvenli DNS kullan* öğesine aşağı kaydırın.
1. Özelliği devre dışı bırakın.

![Chrome'un güvenli DNS kullan özelliği](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/secure-dns.png)

Chrome'un kendi DNS ayarlarını devre dışı bırakırsanız tarayıcı, işletim sisteminizde belirtilen DNS'i kullanır; doğru şekilde ayarladıysanız bu DNS, AdGuard DNS olmalıdır.

## iCloud Özel Geçişi (Safari, macOS ve iOS)

Aygıt ayarlarınızda iCloud Özel Geçişi'ni etkinleştirirseniz Safari, Apple'ın DNS adreslerini kullanır ve bu da AdGuard DNS ayarlarını geçersiz kılar.

iPhone'unuzda iCloud Özel Geçişi'i şu şekilde devre dışı bırakabilirsiniz:

1. *Ayarlar* öğesini açın ve adınıza dokunun.
1. *iCloud* → *Özel Geçişi* öğesini seçin.
1. Özel Geçişi kapatın.

![iOS Özel Geçişi](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay.png)

Mac'inizde:

1. *Sistem Ayarları* öğesini açın ve adınıza veya *Apple Kimliği* öğesine tıklayın.
1. *iCloud* → *Özel Geçişi* öğesini seçin.
1. Özel Geçişi kapatın.
1. *Bitti* öğesine tıklayın.

![macOS Özel Geçişi](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png)

## Gelişmiş İzleme ve Parmak İzi Koruması (Safari, iOS 17'den itibaren)

İOS 17 güncellemesinden sonra Safari ayarlarında Gelişmiş İzleme ve Parmak İzi Koruması etkinleştirilebilir ve bu, AdGuard DNS ayarlarını atlayan iCloud Özel Geçişi işlemine benzer bir etkiye sahip olabilir.

Gelişmiş İzleme ve Parmak İzi Korumasını şu şekilde devre dışı bırakabilirsiniz:

1. *Ayarlar* öğesini açın ve *Safari* öğesine aşağı kaydırın.
1. *Gelişmiş* öğesine dokunun.
1. *Gelişmiş İzleme ve Parmak İzi Korumasını* devre dışı bırakın.

![iOS İzleme ve Parmak İzi Koruması *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)
