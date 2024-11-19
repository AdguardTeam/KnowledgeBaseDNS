---
title: Evrensel talimatlar
sidebar_position: 2
---

İşte yönlendiricilerde Özel AdGuard DNS ayarlamak için bazı genel talimatlar. You can refer to this guide if you can't find your specific router in the main list. Lütfen burada verilen yapılandırma ayrıntılarının yaklaşık olduğunu ve kendi modelinizdeki ayarlardan farklı olabileceğini unutmayın.

## Yönlendirici yönetici panelini kullanma

1. Yönlendiricinizin tercihlerini açın. Genellikle bunlara tarayıcınızdan erişebilirsiniz. Yönlendiricinizin modeline bağlı olarak aşağıdaki adreslerden birini girmeyi deneyin:
   - Linksys ve Asus yönlendiricileri genellikle şunu kullanır: [http://192.168.1.1](http://192.168.1.1/)
   - Netgear yönlendiricileri genellikle şunu kullanır: [http://192.168.0.1](http://192.168.0.1/) veya [http://192.168.1.1](http://192.168.1.1/) D-Link yönlendiricileri genellikle [http://192.168.0.1](http://192.168.0.1/) kullanır
   - Ubiquiti yönlendiricileri genellikle şunu kullanır: [http://unifi.ubnt.com](http://unifi.ubnt.com/)

2. Yönlendiricinin parolasını girin.

   :::note Önemli

   Parolanızı bilmiyorsanız, genellikle yönlendirici üzerindeki bir düğmeye basarak parolanızı sıfırlayabilirsiniz; bu aynı zamanda yönlendiriciyi fabrika ayarlarına da sıfırlar. Some models have a dedicated management application, which should already be installed on your computer.

   :::

3. Yönlendiricinin yönetici konsolunda DNS ayarlarının nerede olduğunu bulun. Listelenen DNS adreslerini aşağıdaki adreslerle değiştirin:
   - IPv4: `94.140.14.49` ve `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` ve `2a10:50c0:0:0:0:0:dad:ff`

4. Ayarları kaydedin.

5. IP'nizi (veya bir Takım aboneliğiniz varsa özel IP'nizi) bağlayın.

- [Özel IP'ler](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Bağlı IP'ler](/private-dns/connect-devices/other-options/linked-ip.md)
