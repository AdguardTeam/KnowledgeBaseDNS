---
title: Kullanıcı kuralları
sidebar_position: 2
---

## What is it and why you need it

Kullanıcı kuralları, yaygın engel listelerinde kullanılan kurallarla aynı filtreleme kurallarıdır. Kuralları elle ekleyerek veya önceden tanımlanmış bir listeden içe aktararak site filtrelemeyi ihtiyaçlarınıza uyacak şekilde özelleştirebilirsiniz.

Filtrelemenizi daha esnek ve tercihlere daha uygun hâle getirmek için AdGuard DNS filtreleme kuralları için [kural söz dizimini](/general/dns-filtering-syntax/) inceleyin.

## Nasıl kullanılır

Kullanıcı kurallarını ayarlamak için:

1. _Pano_ öğesine gidin.

2. _Sunucular_ bölümüne gidin.

3. Gerekli sunucuyu seçin.

4. _Kullanıcı kuralları_ seçeneğine tıklayın.

5. Kullanıcı kuralları eklemek için çeşitli seçenekler bulacaksınız.

   - En kolay yol oluşturucuyu kullanmaktır. Kullanmak için _Yeni kural ekle_ öğesine tıklayın → Engellemek veya engelini kaldırmak istediğiniz alan adını girin → _Kural ekle_ öğesine tıklayın
     ![Kural ekle \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/userrules_step5.png)
   - Gelişmiş yolu ise kural düzenleyicisini kullanmaktır. _Düzenleyiciyi aç_ öğesine tıklayın ve [söz dizimine](/general/dns-filtering-syntax/) göre engelleme kurallarını girin

Bu özellik, [DNS sorgusunun içeriğini değiştirerek sorguyu başka bir alan adına yönlendirmenize](/general/dns-filtering-syntax/#dnsrewrite-modifier) olanak tanır.
