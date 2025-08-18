---
title: iCloud Private Relay ile birlikte kullanma
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

When you’re using iCloud Private Relay, the AdGuard DNS dashboard (and associated [AdGuard test page](https://adguard.com/test.html)) will show that you are not using AdGuard DNS on that device.

![Cihaz bağlı değil](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

To fix this problem, you need to allow AdGuard websites see your IP address in your device’s settings.

- iPhone veya iPad'de:

    1. `adguard-dns.io` adresine gidin

    1. **Sayfa Ayarları** düğmesine ve ardından **IP Adresini Göster** öğesine dokunun

        ![iCloud Private Relay ayarları *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. `adguard.com` adresi için tekrarlayın

- Mac'te:

    1. `adguard-dns.io` adresine gidin

    1. Safari'de, **Görüntü** → **Yeniden Yükle ve IP Adresini Göster** öğesini seçin

    1. `adguard.com` adresi için tekrarlayın

If you can’t see the option to temporarily allow a website to see your IP address, update your device to the latest version of iOS, iPadOS, or macOS, then try again.

Artık cihazınız AdGuard DNS panosunda doğru şekilde görüntülenmelidir:

![Cihaz bağlandı](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Mind that once you turn off Private Relay for a specific website, your network provider will also be able to see which site you’re browsing.
