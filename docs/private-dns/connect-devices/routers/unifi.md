---
title: UniFi
sidebar_position: 10
---

The UiFi router, commonly known as the Ubiquiti UniFi series, has a number of advantages that make it particularly suitable for home, business, and enterprise environments.

The newer UniFi firmware recently added support for DNS-over-HTTPS. UniFi refers to this feature as *Encrypted DNS*.

## Configure DNS-over-HTTPS

Follow these instructions if your UniFi router supports DNS-over-HTTPS.

UiFi routers use a DNS Stamp URL to specify the DNS-over-HTTPS URL. This URL must be calculated using your private DNS-over-HTTPS URL.

Obtain the DNS-over-HTTPS URL that is used to calculate the DNS Stamp URL.

1. Go to the AdGuard DNS Private Dashboard.
1. Proceed to *Encrypted DNS* → *Custom* and enter the following DNS server settings:
    - Device type: 'Router'
    - Device brand: 'Unifi'
    - Devive name: '(use your Unifi device name)
1. Click Next.
1. Scroll to *Use DNS server addresses* → *DNS-over-HTTPS* and take note of the DNS-over-HTTPS URL (e.g., https://d.adguard-dns.com/dns-query/123456abc).

Generate a DNS Stamp using the [DNSCrypt DNS Stamp Calculator](https://dnscrypt.info/stamps/), and set it:

1. Protocol to DNS-over-HTTPS
1. Host name to d.adguard-dns.com
1. Path: /dns-query/123456abc (replace 123456abc with the value obtained from your AdGuard DNS Private Dashboard)
1. Untick
    - No filter
    - No logs
1. Copy the DNS Stamp URL (e.g. sdns://AgcAAAAAA…)

Turn on DNS-over-HTTPS in UniFi

1. Log in to the Ubiquiti UniFi controller.
1. Go to *Settings* → *Security*.
1. Click *Protection*.
1. Proceed to *Encrypted DNS* → *Custom* and enter the following DNS server addresses.
    - Server Name: 'AdGuard DNS'
    - DNS Stamp: DNS Stamp URL copied from above.
1. Click *Save*.

## Use your router admin panel

Use these instructions if your UniFi router does not support the DNS-over-HTTPS or DNS-over-TLS configuration:

1. Log in to the Ubiquiti UniFi controller.
1. Go to *Settings* → *Networks*.
1. Click *Edit Network* → *WAN*.
1. Proceed to *Common Settings* → *DNS Server* and enter the following DNS server addresses.
    - IPv4: `94.140.14.49` and `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
1. Click *Save*.
1. Return to *Network*.
1. Choose *Edit Network* → *LAN*.
1. Find *DHCP Name Server* and select *Manual*.
1. Enter your gateway address in the *DNS Server 1* field. Alternatively, you can enter the AdGuard DNS server addresses in *DNS Server 1* and *DNS Server 2* fields:
    - IPv4: `94.140.14.49` and `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
1. Save the settings.
1. Link your IP (or your dedicated IP if you have a Team subscription).

- [Dedicated IPs](private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](private-dns/connect-devices/other-options/linked-ip.md)
