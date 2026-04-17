---
title: Güvenlik özellikleri
sidebar_position: 4
---

The AdGuard DNS security settings are a set of configurations designed to protect the user’s personal information.

Burada saldırganlardan korunmak için hangi yöntemleri kullanmak istediğinizi seçebilirsiniz. Bu sizi kimlik avı ve sahte siteleri ziyaret etmekten ve hassas verilerin olası sızıntılarından korur.

### Kötü amaçlı, kimlik avı ve dolandırıcılık alan adlarını engelle

Bugüne kadar 15 milyondan fazla siteyi kategorilendirdik; kimlik avı ve kötü amaçlı yazılımlarla bilinen 1,5 milyon siteden oluşan bir veri tabanı oluşturduk. AdGuard bu veri tabanını kullanarak sizi çevrimiçi tehditlerden korumak için ziyaret ettiğiniz siteleri kontrol eder.

### Yeni tescilli alan adlarını engelleme

Dolandırıcılar, kimlik avı ve dolandırıcılık planları için genellikle yeni tescilli alan adlarını kullanır. Bu nedenle, bir alan adının kullanım süresini tespit eden ve yakın zamanda oluşturulmuşsa engelleyen özel bir filtre geliştirdik.
Sometimes this can cause false positives, but statistics show that in most cases this setting still protects our users from losing confidential data.

### Engel listelerini kullanarak kötü amaçlı alan adlarını engelleme

AdGuard DNS, üçüncü taraf engelleme filtrelerinin eklenmesini destekler.
Ek koruma için `security` olarak işaretli filtreleri etkinleştirin.

To learn more about Blocklists, see [the separate article](/private-dns/setting-up-filtering/blocklists.md).

## Protection against typosquatting domains

AdGuard DNS detects and blocks suspicious look-alike domains at the DNS level by analyzing patterns such as common typos, swapped characters, and missing or extra letters. It blocks the request before a connection is even established.

Because this feature relies on similarity detection, legitimate domains that resemble popular websites may occasionally be flagged. If that happens, you can add the domain to the allowlist by going to [_Servers_](https://adguard-dns.io/dashboard/servers) ⭢ _Server settings_ ⭢ _User rules_ ⭢ _Add new rule_.
