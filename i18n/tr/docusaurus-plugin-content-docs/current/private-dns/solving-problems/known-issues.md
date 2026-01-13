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

If you disable Chrome’s own DNS settings, the browser will use the DNS specified in your operating system, which should be AdGuard DNS if you’ve set it up correctly.

## iCloud Özel Geçişi (Safari, macOS ve iOS)

Aygıt ayarlarınızda iCloud Özel Geçişi'ni etkinleştirirseniz Safari, Apple'ın DNS adreslerini kullanır ve bu da AdGuard DNS ayarlarını geçersiz kılar.

iPhone'unuzda iCloud Özel Geçişi'i şu şekilde devre dışı bırakabilirsiniz:

1. *Ayarlar* öğesini açın ve adınıza dokunun.
1. *iCloud* → *Özel Geçişi* öğesini seçin.
1. Özel Geçişi kapatın.

![iOS Özel Geçişi](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay-ios-1.png)

Mac'inizde:

1. *Sistem Ayarları* öğesini açın ve adınıza veya *Apple Kimliği* öğesine tıklayın.
1. *iCloud* → *Özel Geçişi* öğesini seçin.
1. Özel Geçişi kapatın.
1. *Bitti* öğesine tıklayın.

![macOS Özel Geçişi](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png)

## Gelişmiş İzleme ve Parmak İzi Koruması (Safari, iOS 17'den itibaren)

İOS 17 güncellemesinden sonra Safari ayarlarında Gelişmiş İzleme ve Parmak İzi Koruması etkinleştirilebilir ve bu, AdGuard DNS ayarlarını atlayan iCloud Özel Geçişi işlemine benzer bir etkiye sahip olabilir.

Gelişmiş İzleme ve Parmak İzi Korumasını şu şekilde devre dışı bırakabilirsiniz:

iOS 26.1 ve sonraki sürümler için:

1. *Ayarlar* öğesine gidin.
1. Aşağı kaydırın ve *Uygulamalar* öğesini seçin.
1. Go to *Safari* → *Advanced*.
1. Tap *Advanced Tracking and Fingerprinting Protection* and then *Off*.

![iOS 26.1 İzleme ve Parmak İzi Koruması *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/adv-tracking-browser-1.png)

26.1'den önceki iOS sürümleri için:

1. Open *Settings* and scroll down to *Safari*.
1. Tap *Advanced*.
1. Disable *Advanced Tracking and Fingerprinting Protection*.

![iOS Tracking and Fingerprinting Protection *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)

## Limit IP Address Tracking on iPhone

When the Limit IP Address Tracking feature is enabled on your iPhone, it can interfere with AdGuard DNS’s ability to filter traffic.

This happens because the feature routes DNS queries from Safari (and other apps that support it) through Apple’s own private relay servers. This prevents AdGuard DNS from receiving your device’s actual IP address and processing DNS requests, resulting in disabled filtering for ads and trackers.

To restore full DNS-based filtering, you will need to disable this feature for the Wi-Fi network you are currently using.

Lütfen aşağıdaki adımları izleyin:

1. iPhone'unuzda *Ayarlar* öğesini açın.
1. *Wi-Fi* öğesine dokunun.
1. Şu anda bağlı olduğunuz Wi-Fi ağının adını bulun ve dokunun.
1. On the network’s settings page, toggle off the switch for *Limit IP Address Tracking.*

![Limit IP Address Tracking *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-wifi-limit-ip-1.png)

DNS filtering will resume immediately after disabling this setting. Please note that you may need to repeat this process for other Wi-Fi networks you connect to in the future.
