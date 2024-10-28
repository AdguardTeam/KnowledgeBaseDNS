---
title: Evrensel talimatlar
sidebar_position: 2
---

Here are some general instructions for setting up Private AdGuard DNS on routers. You can refer to this guide if you can't find your specific router in the main list. Lütfen burada verilen yapılandırma ayrıntılarının yaklaşık olduğunu ve kendi modelinizdeki ayarlardan farklı olabileceğini unutmayın.

## Yönlendirici yönetici panelini kullan

1. Yönlendiricinizin tercihlerini açın. Genellikle bunlara tarayıcınızdan erişebilirsiniz. Yönlendiricinizin modeline bağlı olarak aşağıdaki adreslerden birini girmeyi deneyin:
   - Linksys ve Asus yönlendiricileri genellikle şunu kullanır: [http://192.168.1.1](http://192.168.1.1/)
   - Netgear routers typically use: [http://192.168.0.1](http://192.168.0.1/) or [http://192.168.1.1](http://192.168.1.1/) D-Link routers typically use [http://192.168.0.1](http://192.168.0.1/)
   - Ubiquiti yönlendiricileri genellikle şunu kullanır: [http://unifi.ubnt.com](http://unifi.ubnt.com/)

2. Yönlendiricinin parolasını girin.

   :::note Önemli

   If the password is unknown, you can often reset it by pressing a button on the router; it will also reset the router to its factory settings. Some models have a dedicated management application, which should already be installed on your computer.

   :::

3. Yönlendiricinin yönetici konsolunda DNS ayarlarının nerede olduğunu bulun. Listelenen DNS adreslerini aşağıdaki adreslerle değiştirin:
   - IPv4: `94.140.14.49` ve `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` ve `2a10:50c0:0:0:0:0:dad:ff`

4. Ayarları kaydedin.

5. IP'nizi (veya bir Takım aboneliğiniz varsa özel IP'nizi) bağlayın.

- [Özel IP'ler](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Bağlı IP'ler](/private-dns/connect-devices/other-options/linked-ip.md)
