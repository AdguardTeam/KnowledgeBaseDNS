---
title: Structured DNS Errors (SDE)
sidebar_position: 5
---

With the release of AdGuard DNS v2.10, AdGuard has become the first public DNS resolver to implement support for [_Structured DNS Errors_ (SDE)](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/), an update to [RFC 8914](https://datatracker.ietf.org/doc/rfc8914/). Bu özellik, DNS sunucularının genel tarayıcı mesajlarına güvenmek yerine doğrudan DNS yanıtında engellenen siteler hakkında ayrıntılı bilgi sağlamasına olanak tanır. In this article, we'll explain what _Structured DNS Errors_ are and how they work.

## What Structured DNS Errors are

When a request to an advertising or tracking domain is blocked, the user may see blank spaces on a website or may not even notice that DNS filtering has occurred. Ancak bir sitenin tamamı DNS düzeyinde engellendiğinde, kullanıcı sayfaya erişim tamamen imkansız hâle gelecektir. When trying to access a blocked website, the user may see a generic "This site can't be reached" error displayed by the browser.

!["Bu siteye ulaşılamıyor" hatası](https://cdn.adtidy.org/content/blog/dns/dns_error.png)

Bu tür hatalar neyin ve neden olduğunu açıklamıyor. Bu durum, kullanıcıların bir siteye neden erişilemediği konusunda kafalarının karışmasına ve genellikle internet bağlantılarının veya DNS çözümleyicilerinin bozuk olduğunu düşünmelerine neden olur.

Bunu açıklığa kavuşturmak için DNS sunucuları kullanıcıları bir açıklamayla kendi sayfalarına yönlendirebilir. However, HTTPS websites (which are the majority of websites) would require a separate certificate.

![Sertifika hatası](https://cdn.adtidy.org/content/blog/dns/certificate_error.png?1)

There’s a simpler solution: [Structured DNS Errors (SDE)](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/). The concept of SDE builds on the foundation of [_Extended DNS Errors_ (RFC 8914)](https://datatracker.ietf.org/doc/rfc8914/), which introduced the ability to include additional error information in DNS responses. The SDE draft takes this a step further by using [I-JSON](https://www.rfc-editor.org/rfc/rfc7493) (a restricted profile of JSON) to format the information in a way that browsers and client applications can easily parse.

The SDE data is included in the `EXTRA-TEXT` field of the DNS response. Şunu içerir:

- `j` (justification): Reason for blocking
- `c` (contact): Contact information for inquiries if the page was blocked by mistake
- `o` (organization): Organization responsible for DNS filtering in this case (optional)
- `s` (suberror): The suberror code for this particular DNS filtering (optional)

Böyle bir sistem, DNS hizmetleri ile kullanıcılar arasındaki şeffaflığı artırır.

### What is required to implement Structured DNS Errors

Although AdGuard DNS has implemented support for Structured DNS Errors, browsers currently do not natively support parsing and displaying SDE data. For users to see detailed explanations in their browsers when a website is blocked, browser developers need to adopt and support the SDE draft specification.

### AdGuard DNS demo extension for SDE

To showcase how Structured DNS Errors work, AdGuard DNS has developed a demo browser extension that shows how _Structured DNS Errors_ could work if browsers supported them. If you try to visit a website blocked by AdGuard DNS with this extension enabled, you will see a detailed explanation page with the information provided via SDE, such as the reason for blocking, contact details, and the organization responsible.

![Açıklama sayfası](https://cdn.adtidy.org/blog/new/jlkdbaccess_blocked.png)

Uzantıyı [Chrome Web Mağazası](https://chromewebstore.google.com/detail/oeinmjfnchfhaabhchfjkbdpmgeageen) veya [GitHub'dan](https://github.com/AdguardTeam/dns-sde-extension/) yükleyebilirsiniz.

DNS düzeyinde neye benzediğini görmek istiyorsanız, `dig` komutunu kullanabilir ve çıktıda `EDE` araması yapabilirsiniz.

```text
% dig @94.140.14.14 'ad.doubleclick.net' A IN +ednsopt=15:0000

...

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; EDE: 17 (Filtered): ({"j":"Filtered by AdGuard DNS","o":"AdGuard DNS","c":["mailto:support@adguard-dns.io"]})
;; QUESTION SECTION:
;ad.doubleclick.net.  IN A

...
```
