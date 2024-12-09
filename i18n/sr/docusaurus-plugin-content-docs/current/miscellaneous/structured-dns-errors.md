---
title: Structured DNS Errors (SDE)
sidebar_position: 5
---

With the release of AdGuard DNS v2.10, AdGuard has become the first public DNS resolver to implement support for [_Structured DNS Errors_ (SDE)](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/), an update to [RFC 8914](https://datatracker.ietf.org/doc/rfc8914/). This feature allows DNS servers to provide detailed information about blocked websites directly in the DNS response, rather than relying on generic browser messages. In this article, we'll explain what _Structured DNS Errors_ are and how they work.

## What Structured DNS Errors are

When a request to an advertising or tracking domain is blocked, the user may see blank spaces on a website or may not even notice that DNS filtering has occurred. However, if an entire website is blocked at the DNS level, the user will be completely unable to access the page. When trying to access a blocked website, the user may see a generic "This site can't be reached" error displayed by the browser.

!["This site can't be reached" error](https://cdn.adtidy.org/content/blog/dns/dns_error.png)

Such errors don't explain what happened and why. This leaves users confused about why a website is inaccessible, often leading them to assume that their Internet connection or DNS resolver is broken.

To clarify this, DNS servers could redirect users to their own page with an explanation. However, HTTPS websites (which are the majority of websites) would require a separate certificate.

![Certificate error](https://cdn.adtidy.org/content/blog/dns/certificate_error.png?1)

There’s a simpler solution: [Structured DNS Errors (SDE)](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/). The concept of SDE builds on the foundation of [_Extended DNS Errors_ (RFC 8914)](https://datatracker.ietf.org/doc/rfc8914/), which introduced the ability to include additional error information in DNS responses. The SDE draft takes this a step further by using [I-JSON](https://www.rfc-editor.org/rfc/rfc7493) (a restricted profile of JSON) to format the information in a way that browsers and client applications can easily parse.

The SDE data is included in the `EXTRA-TEXT` field of the DNS response. It contains:

- `j` (justification): Reason for blocking
- `c` (contact): Contact information for inquiries if the page was blocked by mistake
- `o` (organization): Organization responsible for DNS filtering in this case (optional)
- `s` (suberror): The suberror code for this particular DNS filtering (optional)

Such a system enhances transparency between DNS services and users.

### What is required to implement Structured DNS Errors

Although AdGuard DNS has implemented support for Structured DNS Errors, browsers currently do not natively support parsing and displaying SDE data. For users to see detailed explanations in their browsers when a website is blocked, browser developers need to adopt and support the SDE draft specification.

### AdGuard DNS demo extension for SDE

To showcase how Structured DNS Errors work, AdGuard DNS has developed a demo browser extension that shows how _Structured DNS Errors_ could work if browsers supported them. If you try to visit a website blocked by AdGuard DNS with this extension enabled, you will see a detailed explanation page with the information provided via SDE, such as the reason for blocking, contact details, and the organization responsible.

![Explanation page](https://cdn.adtidy.org/blog/new/jlkdbaccess_blocked.png)

You can install the extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/oeinmjfnchfhaabhchfjkbdpmgeageen) or from [GitHub](https://github.com/AdguardTeam/dns-sde-extension/).

If you want to see what it looks like at the DNS level, you can use the `dig` command and look for `EDE` in the output.

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
