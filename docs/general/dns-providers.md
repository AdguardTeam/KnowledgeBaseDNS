---
title: Known DNS Providers
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

Here we suggest a list of trusted DNS providers. To use them, first install AdGuard Ad Blocker or AdGuard VPN on your device. Then, on the same device, click the link to a provider in this article

Quick links: [Download AdGuard Ad Blocker](https://agrd.io/download-kb-adblock), [Download AdGuard VPN](https://adguard-vpn.com/download.html?auto=true&utm_source=kb_dns)

:::

## **Public anycast resolvers**

These are globally distributed, large-scale DNS resolvers that use anycast routing to direct your DNS queries to the nearest data center.

### AdGuard DNS

[AdGuard DNS](https://adguard-dns.io/welcome.html) is an alternative solution for ad blocking, privacy protection, and parental control. It provides the necessary number of protection features aga[...] 

#### Default

These servers block ads, tracking, and phishing.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `94.140.14.14` and `94.140.15.15`                  | [Add to AdGuard](adguard:add_dns_server?address=94.140.14.14&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_se[...] 
| DNS, IPv6      | `2a10:50c0::ad1:ff` and `2a10:50c0::ad2:ff`        | [Add to AdGuard](adguard:add_dns_server?address=2a10:50c0::ad1:ff&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_d[...] 
| DNS-over-HTTPS | `https://dns.adguard-dns.com/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Add to AdGuard VPN](adguard[...]
| DNS-over-TLS | `tls://dns.adguard-dns.com` | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.adguard-dns.com&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?address[...]
| DNS-over-QUIC | `quic://dns.adguard-dns.com` | [Add to AdGuard](adguard:add_dns_server?address=quic://dns.adguard-dns.com&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?addr[...]
| DNSCrypt, IPv4 | Provider: `2.dnscrypt.default.ns1.adguard.com` IP: `94.140.14.14:5443`  |      [Add to AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNDo1NDQzINErR_JS3PLCu_iZEIbq95zkSV2LFsigxDIuUs[...]
| DNSCrypt, IPv6 | Provider: `2.dnscrypt.default.ns1.adguard.com` IP: `[2a10:50c0::ad1:ff]:5443` | [Add to AdGuard](sdns://AQIAAAAAAAAAGFsyYTEwOjUwYzA6OmFkMTpmZl06NTQ0MyDRK0fyUtzywrv4mRCG6vec5Eldi[...] 

#### Family Protection

These servers provide the Default features + Blocking adult websites + Safe search.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `94.140.14.15` and `94.140.15.16`                  | [Add to AdGuard](adguard:add_dns_server?address=94.140.14.15&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_se[...] 
| DNS, IPv6      | `2a10:50c0::bad1:ff` and `2a10:50c0::bad2:ff`      | [Add to AdGuard](adguard:add_dns_server?address=2a10:50c0::bad1:ff&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_[...]
| DNS-over-HTTPS | `https://family.adguard-dns.com/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://family.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Add to AdGuard VPN](a[...]
| DNS-over-TLS | `tls://family.adguard-dns.com` | [Add to AdGuard](adguard:add_dns_server?address=tls://family.adguard-dns.com&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_server?a[...]
| DNS-over-QUIC | `quic://family.adguard-dns.com` | [Add to AdGuard](adguard:add_dns_server?address=quic://family.adguard-dns.com&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_serve[...]
| DNSCrypt, IPv4 | Provider: `2.dnscrypt.family.ns1.adguard.com` IP: `94.140.14.15:5443`| [Add to AdGuard](sdns://AQIAAAAAAAAAETk0LjE0MC4xNC4xNTo1NDQzILgxXdexS27jIKRw3C7Wsao5jMnlhvhdRUXWuMm1AFq6IT[...]
| DNSCrypt, IPv6 | Provider: `2.dnscrypt.family.ns1.adguard.com` IP: `[2a10:50c0::bad1:ff]:5443`| [Add to AdGuard](sdns://AQIAAAAAAAAAGVsyYTEwOjUwYzA6OmJhZDE6ZmZdOjU0NDMguDFd17FLbuMgpHDcLtaxqjmMye[...] 

#### Non-filtering

Each of these servers provides a secure and reliable connection, but unlike the *Standard* and *Family Protection* servers, they don’t filter anything.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `94.140.14.140` and `94.140.14.141`                | [Add to AdGuard](adguard:add_dns_server?address=94.140.14.140&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_s[...]
| DNS, IPv6      | `2a10:50c0::1:ff` and `2a10:50c0::2:ff`            | [Add to AdGuard](adguard:add_dns_server?address=2a10:50c0::1:ff&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns[...]
| DNS-over-HTTPS | `https://unfiltered.adguard-dns.com/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://unfiltered.adguard-dns.com/dns-query&name=AdGuard%20DNS), [Add to AdGuar[...]
| DNS-over-TLS | `tls://unfiltered.adguard-dns.com` | [Add to AdGuard](adguard:add_dns_server?address=tls://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_dns_[...]
| DNS-over-QUIC | `quic://unfiltered.adguard-dns.com` | [Add to AdGuard](adguard:add_dns_server?address=quic://unfiltered.adguard-dns.com&name=AdGuard%20DNS), [Add to AdGuard VPN](adguardvpn:add_d[...]
| DNSCrypt, IPv4 | Provider: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `94.140.14.140:5443`| [Add to AdGuard](sdns://AQIAAAAAAAAAFlsyYTEwOjUwYzA6OjE6ZmZdOjU0NDMgtehE1rg6Pj4SaOtoH76nDePF-mjb1ogUH[...]
| DNSCrypt, IPv6 |  Provider: `2.dnscrypt.unfiltered.ns1.adguard.com` IP: `[2a10:50c0::1:ff]:5443`| [Add to AdGuard](sdns://AQIAAAAAAAAAF1syYTAwOjVhNjA6OjAxOmZmXTo1NDQzIIHQAtNqTKUMRzt0eWUP4S4CsyHL[...] 

### Ali DNS

[Ali DNS](https://alidns.com/) is a free recursive DNS service that committed to providing fast, stable and secure DNS resolution for the majority of Internet users. It includes AliGuard facility [...]

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS, IPv4      | `223.5.5.5` and `223.6.6.6`                        | [Add to AdGuard](adguard:add_dns_server?address=223.5.5.5&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=223[...]
| DNS, IPv6      | `2400:3200::1` and `2400:3200:baba::1`             | [Add to AdGuard](adguard:add_dns_server?address=2400:3200::1&name=), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=[...]
| DNS-over-HTTPS | `https://dns.alidns.com/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.alidns.com/dns-query&name=dns.alidns.com), [Add to AdGuard VPN](adguardvpn:add_d[...]
| DNS-over-TLS | `tls://dns.alidns.com` | [Add to AdGuard](adguard:add_dns_server?address=tls://dns.alidns.com&name=dns.alidns.com), [Add to AdGuard VPN](adguardvpn:add_dns_server?address=tls://dn[...]

### Caliph DNS

 [Caliph DNS](https://dns.caliph.dev) is a free DNS service based in Indonesia to surf the Internet safely and without worries.

 | Type            | Address                                              |                                                                                                                         [...]
 |-----------------|------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------[...]
 | DNS, IPv4       | `160.19.167.150`                                    | [Add to AdGuard](adguard:add_dns_server?address=160.19.167.150&name=160.19.167.150), [Add to AdGuard VPN](adguardvpn:add_[...]
 | DNS, IPv6       | `2001:df7:5300:3::51e`                 | [Add to AdGuard](adguard:add_dns_server?address=2001:df7:5300:3::51e&name=2001:df7:5300:3::51e), [Add to AdGuard VPN](adguardvpn:add_d[...]
 | DNS-over-HTTPS  | `https://dns.caliph.dev/dns-query`                   | [Add to AdGuard](adguard:add_dns_server?address=https://dns.caliph.dev/dns-query&name=dns.caliph.dev), [Add to AdGuard V[...]
 | DNS-over-TLS    | `tls://dns.caliph.dev:853`                           | [Add to AdGuard](adguard:add_dns_server?address=dns.caliph.dev:853&name=dns.caliph.dev:853), [Add to AdGuard VPN](adguar[...]
 | DNS-over-QUIC   | `quic://dns.caliph.dev:853`                          | [Add to AdGuard](adguard:add_dns_server?address=quic://dns.caliph.dev:853&name=dns.caliph.dev:853), [Add to AdGuard VPN][...]

### BebasDNS by BebasID

[BebasDNS](https://github.com/bebasid/bebasdns) is a free and neutral public resolver based in Indonesia which supports OpenNIC domain. Created by Komunitas Internet Netral Indonesia (KINI) to ser[...]

#### Default

This is the default variant of BebasDNS. This variant blocks ads, malware, and phishing domains.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-HTTPS | `https://dns.bebasid.com/dns-query` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.bebasid.com/dns-query&name=dns.bebasid.com), [Add to AdGuard VPN](adguardvpn:a[...]
| DNS-over-TLS   | `tls://dns.bebasid.com:853` | [Add to AdGuard](adguard:add_dns_server?address=dns.bebasid.com:853&name=dns.bebasid.com:853), [Add to AdGuard VPN](adguardvpn:add_dns_server?addr[...]
| DNSCrypt, IPv4 | Provider: `2.dnscrypt-cert.dns.bebasid.com` IP: `103.87.68.194:8443` | [Add to AdGuard](sdns://AQMAAAAAAAAAEjEwMy44Ny42OC4xOTQ6ODQ0MyAxXDKkdrOao8ZeLyu7vTnVrT0C7YlPNNf6trdMkje7Q[...]

#### Unfiltered

This variant doesn’t filter anything.

| Protocol       | Address                                            |                |
|----------------|----------------------------------------------------|----------------|
| DNS-over-HTTPS | `https://dns.bebasid.com/unfiltered` | [Add to AdGuard](adguard:add_dns_server?address=https://dns.bebasid.com/unfiltered&name=dns.bebasid.com), [Add to AdGuard VPN](adguardvpn[...]
| DNS-over-TLS   | `tls://unfiltered.dns.bebasid.com:853` | [Add to AdGuard](adguard:add_dns_server?address=unfiltered.dns.bebasid.com:853&name=unfiltered.dns.bebasid.com:853), [Add to AdGuard VP[...]

... (file content unchanged except removal of consecutive extra blank lines)
