---
title: Özel alan adları
sidebar_position: 6
---

AdGuard DNS subscribers can set up their own domains (like `dns.example.com`) instead of the default `d.adguard-dns.com`. Bu özellik, AdGuard DNS tarafından sağlanan tam reklam engelleme ve gizlilik özelliklerini korurken kurumsal güvenlik politikalarıyla sorunsuz entegrasyon sağlayarak işletmelerin DNS korumasını altyapılarıyla uyumlu hâle getirmelerine yardımcı olmayı amaçlamaktadır.

:::note

Özel alan adları **Kurumsal** ve **Takım** planlarının kullanıcıları tarafından kullanılabilir.

:::

## How to set up a custom domain

Özel bir alan adı yapılandırmak için AdGuard DNS panonuza giriş yapın ve [_Hesap ayarları_](https://adguard-dns.io/en/dashboard/account) öğesine gidin. _Gelişmiş ayarlar_ öğesine aşağı kaydırın ve _Özel alan adları_ öğesini seçin. Ardından, üç ana adımdan geçmeniz gerekir.

1. Protokolü seçin. Burada iki seçeneğiniz var:

   - DoH alan adı ekleyin (DNS-over-HTTPS için)
   - DoT/DoQ alan adı ekleyin (DNS-over-TLS veya DNS-over-QUIC için)

   ![Choose the protocol \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_1.png)

2. After selecting the protocol, enter the preferred domain name (e.g., `example.com`) and verify the CNAME record.

   ![CNAME kaydı \*mobil](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_2.png)

3. Set up a certificate. For DoT/DoQ domains, you’ll need to upload a wildcard TLS certificate. If you choose DoH, you can either provide your own TLS certificate or let AdGuard DNS generate one for you. Doğrulandıktan sonra, özel alan adınız panoda kullanıma hazır olarak görünür.

   ![Özel alan adı listesi \*mobil](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_3.png)
