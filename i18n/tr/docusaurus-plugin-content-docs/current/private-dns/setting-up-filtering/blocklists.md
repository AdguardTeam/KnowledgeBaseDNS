---
title: Engel listeleri
sidebar_position: 1
---

## Engel listeleri nelerdir

Engel listeleri, AdGuard DNS'in gizliliğinizi tehlikeye atabilecek reklamları ve içerikleri filtrelemek için kullandığı metin biçimindeki kurallar kümesidir. In general, a filter consists of rules with a similar focus. For example, there may be rules for website languages (such as German or Russian filters) or rules that protect against phishing sites (such as the Phishing URL Blocklist). You can easily enable or disable these rules as a group.

## Why they are useful

Blocklists are designed for flexible customization of filtering rules. For example, you may want to block advertising domains in a specific language region, or you may want to get rid of tracking or advertising domains. Select the blocklists you want and customize the filtering to your liking.

## How to activate blocklists in AdGuard DNS

Engel listelerini etkinleştirmek için:

1. Panoyu açın.
2. _Sunucular_ bölümüne gidin.
3. Gerekli sunucuyu seçin.
4. _Engel listeleri_ öğesine tıklayın.

## Blocklists types

### Genel

A group of filters that includes lists for blocking ads and tracking domains.

![General blocklists \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/general.png)

### Bölgesel

A group of filters consisting of regional lists to block domains in specific languages.

![Regional blocklists \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/regional.png)

### Security

A group of filters containing rules for blocking fraudulent sites and phishing domains.

![Güvenlik engel listeleri \*sınır](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/security.png)

### Diğer

Üçüncü taraf geliştiricilerin çeşitli engelleme kurallarına sahip engelleme listeleri.

![Diğer engel listeleri \*sınır](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/other.png)

## Filtre ekleme

If you would like the list of AdGuard DNS filters to be expanded, you can submit a request to add them in the relevant section of [Hostlistsregistry](https://github.com/AdguardTeam/HostlistsRegistry) on GitHub.

Talepte bulunmak için:

1. Yukarıdaki bağlantıya gidin (GitHub'a kaydolmanız gerekebilir).
2. _New issue_ öğesine tıklayın.
3. Click _Blocklist request_ and fill out the form.
4. Formu doldurduktan sonra _Submit new issue_ öğesine tıklayın.

If your filter's blocking rules do not duplicate the existing lists, it will be added to the repository.

## Kullanıcı kuralları

Ayrıca kendi engelleme kurallarınızı da oluşturabilirsiniz.
Daha fazla bilgi edinmek için [Kullanıcı kuralları makalesine](/private-dns/setting-up-filtering/user-rules.md) bakın.
