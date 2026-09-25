---
title: Engel listeleri
sidebar_position: 2
---

## Engel listeleri nelerdir

Engel listeleri, AdGuard DNS'in gizliliğinizi tehlikeye atabilecek reklamları ve içerikleri filtrelemek için kullandığı metin biçimindeki kurallar kümesidir. Genel olarak bir filtre, benzer odak noktasına sahip kurallardan oluşur. Örneğin, site dilleri için kurallar (Almanca veya Rusça filtreleri gibi) veya kimlik avı sitelerine karşı koruma sağlayan kurallar (Phishing URL Blocklist gibi) olabilir. Bu kuralları bir grup olarak kolayca etkinleştirebilir veya devre dışı bırakabilirsiniz.

## Neden faydalıdırlar

Engel listeleri, filtreleme kurallarının esnek bir şekilde özelleştirilmesi için tasarlanmıştır. Örneğin, belirli bir dil bölgesindeki reklam alan adlarını engellemek, izleme veya reklam alan adlarından kurtulmak isteyebilirsiniz. İstediğiniz engel listelerini seçin ve filtrelemeyi isteğinize göre özelleştirin.

## AdGuard DNS'de engel listeleri nasıl etkinleştirilir

Engel listelerini etkinleştirmek için:

1. Panoyu açın.
2. _Sunucular_ bölümüne gidin.
3. Gerekli sunucuyu seçin.
4. _Engel listeleri_ öğesine tıklayın.

## Engel listesi türleri

### Genel

Reklamları ve izleme alan adlarını engellemek için listeler içeren bir filtre grubu.

![Genel engel listeleri \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/general.png)

### Bölgesel

Belirli dillerdeki alan adlarını engellemek için bölgesel listelerden oluşan bir filtre grubu.

![Bölgesel engel listeleri \*sınır](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/regional.png)

### Security

Dolandırcı siteleri ve kimlik avı alan adlarını engellemek için kurallar içeren bir filtre grubu.

![Güvenlik engel listeleri \*sınır](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/security.png)

### Diğer

Üçüncü taraf geliştiricilerin çeşitli engelleme kurallarına sahip engelleme listeleri.

![Diğer engel listeleri \*sınır](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/other.png)

## Filtre ekleme

AdGuard DNS filtrelerinin listesinin genişletilmesini istiyorsanız, GitHub'daki [Hostlistsregistry](https://github.com/AdguardTeam/HostlistsRegistry) adresinin ilgili bölümüne eklenmesi için bir istek gönderebilirsiniz.

Talepte bulunmak için:

1. Yukarıdaki bağlantıya gidin (GitHub'a kaydolmanız gerekebilir).
2. _New issue_ öğesine tıklayın.
3. _Blocklist request_ öğesine tıklayın ve formu doldurun.
4. Formu doldurduktan sonra _Submit new issue_ öğesine tıklayın.

If your filter’s blocking rules do not duplicate the existing lists, it will be added to the repository.

## Kullanıcı kuralları

Ayrıca kendi engelleme kurallarınızı da oluşturabilirsiniz.
Daha fazla bilgi edinmek için [Kullanıcı kuralları makalesine](/private-dns/setting-up-filtering/user-rules.md) bakın.

## Custom blocklists

If you need any specific blocklist to be added to AdGuard DNS, you can download it via URL.

![Add custom blocklist](https://cdn.adguardvpn.com/content/release_notes/dns/v2-20/add_blocklists_en.png)

1. Open the dashboard and click _Servers_ in the left-hand menu
2. Select _My server → Blocklists_
3. In the _Custom_ section, click _Add custom blocklist_
4. Enter the blocklist name, its URL, and an optional description, then click _Add_

:::note

Each subscription plan has a limit on the total number of filtering rules: Personal — 1K, Team — 5K, Enterprise — 100K. This limitation is in place because blocklists are downloaded to DNS servers, and allowing unlimited blocklist sizes could lead to server overload, potentially causing performance issues.

:::

If a custom blocklist surpasses the limit, it will be **disabled automatically**, and you’ll see a corresponding notification. To enable a newly added blocklist that exceeds the rule limit, you’ll need to either remove other blocklists or upgrade to a plan with a higher rule limit.
