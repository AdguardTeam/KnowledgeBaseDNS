---
title: Kimlik doğrulamalı DNS-over-HTTPS
sidebar_position: 4
---

## Neden faydalıdır

Kimlik doğrulamalı DNS-over-HTTPS, seçtiğiniz sunucuya erişmek için bir kullanıcı adı ve parola belirlemenize olanak tanır.

Bu, yetkisiz kullanıcıların erişmesini önlemeye yardımcı olur ve güvenliği artırır. Ayrıca, belirli profiller için diğer protokollerin kullanımını kısıtlayabilirsiniz. Bu özellik, DNS sunucu adresinizin başkaları tarafından bilindiği durumlarda özellikle kullanışlıdır. Parola ekleyerek erişimi engelleyebilir ve yalnızca sizin kullanabilmenizi sağlayabilirsiniz.

## Nasıl ayarlanır

:::note Uyumluluk

Bu özellik [AdGuard DNS İstemcisi](/dns-client/overview.md) ve [AdGuard uygulamaları](https://adguard.com/welcome.html) tarafından desteklenmektedir.

:::

1. Panoyu açın.
2. Cihaz ekleyin veya daha önce oluşturulmuş bir cihazın ayarlarına gidin.
3. _DNS sunucu adreslerini kullan_ öğesine tıklayın ve _Şifrelenmiş DNS sunucu adresleri_ bölümünü açın.
4. DNS-over-HTTPS'i istediğiniz gibi kimlik doğrulamasıyla yapılandırın.
5. AdGuard DNS İstemcisi veya AdGuard uygulamalarından birinde bu sunucuyu kullanmak için cihazınızı yeniden yapılandırın.
6. Bunu yapmak için, şifrelenmiş sunucunun adresini kopyalayın ve AdGuard uygulamasına veya AdGuard DNS İstemcisi ayarlarına yapıştırın.
   ![Adresi kopyala \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/doh_step6.png)
7. Diğer protokollerin kullanımını da reddedebilirsiniz.
   ![Protokolleri reddet \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/deny_protocol.png)
