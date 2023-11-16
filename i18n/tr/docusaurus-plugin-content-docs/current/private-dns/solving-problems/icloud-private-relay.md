---
title: iCloud Private Relay ile birlikte kullanma
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

iCloud Private Relay kullanırken, AdGuard DNS panosu (ve ilgili [AdGuard test sayfası](https://adguard.com/test.html)) o aygıtta AdGuard DNS kullanmadığınızı gösterir.

![Cihaz bağlı değil](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

Bu sorunu çözmek için cihazınızın ayarlarında AdGuard sitelerin IP adresinizi görmesine izin vermeniz gerekir.

- iPhone veya iPad'de:

    1. `adguard-dns.io` adresine gidin

    1. **Sayfa Ayarları** düğmesine ve ardından **IP Adresini Göster** öğesine dokunun

        ![iCloud Private Relay ayarları *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. `adguard.com` adresi için tekrarlayın

- Mac'te:

    1. `adguard-dns.io` adresine gidin

    1. Safari'de, **Görüntüle** → **Yeniden Yükle ve IP Adresini Göster** öğesini seçin

    1. `adguard.com` adresi için tekrarlayın

Bir sitenin IP adresinizi geçici olarak görmesine izin verme seçeneğini göremiyorsanız aygıtınızı iOS, iPadOS veya macOS'in en son sürümüne güncelleyin ve ardından tekrar deneyin.

Artık cihazınız AdGuard DNS panosunda doğru şekilde görüntülenmelidir:

![Cihaz bağlandı](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Belirli bir site için Private Relay'i kapattığınızda ağ sağlayıcınızın da hangi siteye göz attığınızı görebileceğini unutmayın.
