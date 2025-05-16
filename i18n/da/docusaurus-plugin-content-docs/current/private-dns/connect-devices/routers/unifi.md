---
title: UniFi
sidebar_position: 10
---

The UiFi router, commonly known as the Ubiquiti UniFi series, has a number of advantages that make it particularly suitable for home, business, and enterprise environments.

The newer UniFi firmware recently added support for DNS-over-HTTPS. UniFi refers to this feature as _Encrypted DNS_.

## Opsæt DNS-over-HTTPS

Follow these instructions if your UniFi router supports DNS-over-HTTPS.

UiFi routers use a DNS Stamp URL to specify the DNS-over-HTTPS URL. This URL must be calculated using your private DNS-over-HTTPS URL.

Obtain the DNS-over-HTTPS URL that is used to calculate the DNS Stamp URL.

1. Go to the AdGuard DNS Private Dashboard.
2. Proceed to _Encrypted DNS_ → _Custom_ and enter the following DNS server settings:
    - Device type: 'Router'
    - Device brand: 'Unifi'
    - Device name: '(use your Unifi device name)
3. Click _Next_.
4. Scroll to _Use DNS server addresses_ → _DNS-over-HTTPS_ and take note of the DNS-over-HTTPS URL (e.g., https://d.adguard-dns.com/dns-query/123456abc).

Generate a DNS Stamp using the [DNSCrypt DNS Stamp Calculator](https://dnscrypt.info/stamps/), and set it:

1. Protocol: DNS-over-HTTPS
2. Host name: d.adguard-dns.com
3. Path: /dns-query/123456abc (replace 123456abc with the value obtained from your AdGuard DNS Private Dashboard)
4. Untick
    - No filter
    - No logs
5. Copy the DNS Stamp URL (e.g., sdns://AgcAAAAAA…)

Turn on DNS-over-HTTPS in UniFi

1. Log ind på Ubiquiti UniFi-controlleren.
2. Go to _Settings_ → _Security_.
3. Click _Protection_.
4. Proceed to _Encrypted DNS_ → _Custom_ and enter the following DNS server addresses.
    - Server Name: 'AdGuard DNS'
    - DNS Stamp: DNS Stamp URL copied from above
5. Klik på _Gem_.

## Brug routerens håndteringspanel

Use these instructions if your UniFi router does not support the DNS-over-HTTPS or DNS-over-TLS configuration:

1. Log ind på Ubiquiti UniFi-controlleren.
2. Gå til _Indstillinger_ → _Netværk_.
3. Klik på _Redigér netværk_ → _WAN_.
4. Fortsæt til _Almindelige indstillinger_ → _DNS-server_, og angiv flg. DNS-serveradresser.
    - IPv4: `94.140.14.49` and `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
5. Klik på _Gem_.
6. Returnér til _Netværk_.
7. Vælg _Redigér netværk_ → _LAN_.
8. Find _DHCP-navneserver_ og vælg _Manuel_.
9. Angiv gateway-adressen i feltet _DNS Server 1_. Alternativt kan AdGuard DNS-serveradresserne angives i felterne _DNS-server 1_ og _DNS-server 2_:
    - IPv4: `94.140.14.49` and `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
10. Gem indstillingerne.
11. Link IP'en (eller den dedikerede IP, hvis man har et Team-abonnement).

- [Dedikerede IP'er](private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linkede IP'er](private-dns/connect-devices/other-options/linked-ip.md)
