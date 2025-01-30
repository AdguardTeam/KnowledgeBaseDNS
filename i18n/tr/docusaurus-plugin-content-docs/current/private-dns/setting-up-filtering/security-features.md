---
title: Güvenlik özellikleri
sidebar_position: 3
---

AdGuard DNS güvenlik ayarları, kullanıcının kişisel bilgilerini korumak için tasarlanmış bir dizi yapılandırmadır.

Burada saldırganlardan korunmak için hangi yöntemleri kullanmak istediğinizi seçebilirsiniz. Bu sizi kimlik avı ve sahte siteleri ziyaret etmekten ve hassas verilerinizin sızdırılması ihtimalinden korur.

### Kötü amaçlı, kimlik avı ve dolandırıcılık alan adlarını engelle

Bugüne kadar 15 milyondan fazla siteyi kategorilendirdik; kimlik avı ve kötü amaçlı yazılımlarla bilinen 1,5 milyon siteden oluşan bir veri tabanı oluşturduk. AdGuard bu veri tabanını kullanarak sizi çevrimiçi tehditlerden korumak için ziyaret ettiğiniz siteleri kontrol eder.

### Yeni tescilli alan adlarını engelleme

Dolandırıcılar, kimlik avı ve dolandırıcılık planları için genellikle yeni tescilli alan adlarını kullanır. Bu nedenle, bir alan adının kullanım süresini tespit eden ve yakın zamanda oluşturulmuşsa engelleyen özel bir filtre geliştirdik.
Sometimes this can cause false positives, but statistics show that in most cases this setting still protects our users from losing confidential data.

### Engel listelerini kullanarak kötü amaçlı alan adlarını engelleme

AdGuard DNS, üçüncü taraf engelleme filtrelerinin eklenmesini destekler.
Ek koruma için `security` olarak işaretli filtreleri etkinleştirin.

Engel listeleri hakkında daha fazla bilgi edinmek için [ayrı makaleye bakın](/private-dns/setting-up-filtering/blocklists.md).
