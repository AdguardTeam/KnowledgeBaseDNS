---
title: White-label endpoint (Account IP address)
sidebar_position: 7
---

Custom domains allow partners to offer AdGuard DNS under their own brand. With the Enterprise plan, this service can run on a private IP address: this feature is called _Account IP_. Domains point to the _Account IP_ through an A record instead of a CNAME record, which is used for standard custom domains.

:::note

**CNAME** points your domain to another domain (`dns.partner.com` → `cname.adguard-dns.com`). The real IP address is resolved through that second domain, so traffic goes through the shared infrastructure it serves.

**A record** points your domain straight to an IP address (`dns.partner.com` → `203.0.113.10`). There’s no domain in between: the address your domain resolves to is the one that handles the traffic.

:::

Each account can have one _Account IP_, and you can point several domains to it. This isn’t the same as the dedicated IPv4 and IPv6 addresses used to identify devices: an _Account IP_ is the address your custom domains resolve to.

## How to get an Account IP

To request an _Account IP_, contact your account manager or support team at [support@adguard-dns.io](mailto:support@adguard-dns.io).

Once the address is assigned, the _White-label endpoint_ block appears in _Settings_ → _Advanced settings_ → _Custom domains_, showing your _Account IP address_. Until then, the block isn’t shown.

![White-label endpoint](https://cdn.adtidy.org/content/kb/dns/enterprise/whitelabel_endpoint_en.png)

:::caution

If your account moves off the Enterprise plan, the address becomes inactive and domains pointing to it stop working. Custom domains stay available on the **Team** plan, but only through a CNAME record — to bring the paused domains back, add them again as standard custom domains.

The address itself stays reserved for your account, so if you return to the Enterprise plan, you get the same one back.

:::

## How to point a domain to your Account IP address

Setup follows the same steps as a standard custom domain, except you create an A record instead of a CNAME. Also, for DoH domains, the certificate isn’t issued automatically — you must upload your own.

1. In _Custom domains_, choose the protocol: _Add DoH domain_ (for DNS-over-HTTPS) or _Add DoT/DoQ domain_ (for DNS-over-TLS or DNS-over-QUIC).

   ![Choosing the protocol](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_protocol_en.png)

2. Enter the domain you want to use (e.g., `dns.partner.com`) and click _Next_. You need access to this domain’s DNS management panel.

   ![Entering the domain](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_domain_en.png)

3. The next screen shows the values for your DNS record: your domain under _Name (Host)_ and your _Account IP_ under _Value (Points to / IP address)_. Leaving this screen open, go to your DNS provider’s control panel and create an A record with those values. Don’t create a CNAME record — domains on an _Account IP_ point to the address directly.

   ![DNS record values](https://cdn.adtidy.org/content/kb/dns/enterprise/a_record_en.png)

4. On the AdGuard DNS screen with the record values, click _Verify_. If the record hasn’t propagated yet or points somewhere else, verification fails. Check the record and try again in a few minutes.

5. Upload a TLS certificate. Certificates aren’t issued automatically for domains on an _Account IP_:

   - For **DoT/DoQ**, you upload a wildcard certificate (`*.partner.com`), same as for a standard custom domain.
   - For **DoH**, you upload your own certificate too. This differs from the standard flow, where AdGuard DNS can generate one for you.

   Until you add a certificate, the domain shows the _No certificate_ status and your customers can’t connect to it.

   ![Uploading a certificate](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_certificate_en.png)

:::note

Renewal is on your side. You’ll get an email reminder before the certificate expires. When this happens, your domain will stop working until you upload a new certificate.

:::

## Existing custom domains and Account IP address

Domains you added before getting an _Account IP_ aren’t moved to it automatically. They keep working through their CNAME record, as before.

To move a domain over to your _Account IP_, start by deleting its CNAME record at your DNS provider — a domain can’t have both a CNAME and an A record at once. Then delete the domain in AdGuard DNS and add it again, following the steps above.

:::caution

Your customers won’t be able to use the domain between the moment you delete it and the moment the new setup is verified.

:::

## Limitazioni

An _Account IP_ changes the address your domain resolves to. A few things it doesn’t cover:

- Account IP address isn’t fully white-label at the network level. A WHOIS, RDAP, or ASN lookup of the IP address can still identify AdGuard as the provider of the underlying IP infrastructure.
- Reverse DNS can’t be customized, so a PTR lookup won’t return your domain.
- DNS server discovery (DDR) isn’t available on an _Account IP_.
- Certificates with the IP address in the SAN field aren’t supported, so your customers connect through the domain name rather than the address itself.
- Using your own IP range (BYOIP) isn’t supported, since the address is assigned by AdGuard.
- DNSCheck domains, used to verify a device’s DNS connection, still resolve through AdGuard’s infrastructure.
