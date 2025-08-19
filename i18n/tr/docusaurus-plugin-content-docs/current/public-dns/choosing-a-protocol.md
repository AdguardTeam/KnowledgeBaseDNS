---
title: Choosing a DNS protocol
sidebar_position: 2
---

A DNS protocol is a set of rules that your device uses to communicate with a DNS server — a system that translates website names, like example.com, into IP addresses that computers can understand. This process used to occur in plain text, meaning it could be seen or intercepted by third parties, such as your ISP or hackers. Şifrelenmiş DNS protokolleri, DNS isteklerinizi koruyarak bu sorunu çözer ve böylece gezintinizi daha gizli ve güvenli hâle getirir.

AdGuard DNS üç güvenli, şifrelenmiş DNS protokolünü destekler: DoH, DoT ve DoQ. Hepsi DNS trafiğinizi korumak için tasarlanmıştır, ancak her birinin kendi güçlü yönleri ve kısıtlamaları vardır. Aşağıdaki genel bakış, farklılıkları anlamanıza ve sizin için en iyisini seçmenize yardımcı olur.

### DNS-over-TLS (DoT)

DNS-over-TLS, DNS trafiğinizi şifreleyerek ve bunu özellikle şifrelenmiş DNS trafiği için ayrılmış olan 853 numaralı bağlantı noktası üzerinden göndererek gizliliğinizi artırır.

Gizlilik söz konusu olduğunda DoT en güçlü seçenek değildir. Özel bağlantı noktasını (853) kullanır, bu da ağların tespit etmesini ve muhtemelen engellenmesini kolaylaştırır. Ancak DoT, yöneticilerin ağ trafiği üzerinde denetimi sürdürürken güvenli DNS'e izin vermek istediği kurumsal veya yönetilen ortamlarda hala yararlı olabilir.

### DNS-over-HTTPS (DoH)

DNS-over-HTTPS, DNS sorgularınızı siteleri yüklemek için kullanılan aynı güvenli bağlantı olan 443 numaralı bağlantı noktası üzerinden gönderir. Bu, ağların veya sansürcülerin bunları tespit etmesini veya engellenmesini zorlaştırır.

Ancak, bu durum kararsız olabilir ve performans sorunlarına neden olabilir. Tüm veri paketleri aynı bağlantıyı paylaştığında, aynı aktarım katmanına güvenirler. Bu, satır başı engelleme adı verilen bir soruna neden olabilir. Bir paket kaybolur veya gecikirse, alakasız olan paketler de dâhil olmak üzere diğer her şeyi geciktirir. As a result, all responses are delayed, even if most of the data is ready to be delivered.

### DNS-over-QUIC (DoQ)

DNS-over-QUIC, DNS isteklerini iletmek için QUIC aktarım katmanı protokolünü kullanan bir DNS protokolüdür. It solves one of the main problems with the DoH protocol: head-of-line blocking.

Since DoQ uses the QUIC protocol to keep DNS activity separate from web traffic, it avoids the timing issues observed in DoH. Consequently, it doesn’t reveal any traffic patterns. This makes it harder to link your DNS queries to your browsing activity, even though the traffic itself is easier to spot.

However, DoQ remains an experimental protocol and might face stability problems or be blocked by ISPs and censors. Bununla başa çıkmaya hazır değilseniz, bu en iyi seçim olmayabilir.

![DoH ile DoQ karşılaştırması \*border](https://cdn.adtidy.org/blog/new/gy178dohdoq.jpg)

:::note

Satır başı engelleme ve DNS-over-QUIC protokolü hakkında daha ayrıntılı bilgi [blog yazımızda](https://adguard-dns.io/en/blog/dns-over-quic.html) bulunabilir

:::
