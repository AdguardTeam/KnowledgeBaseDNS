---
title: OpenWRT
sidebar_position: 7
---

OpenWRT routers use an open source, Linux-based operating system that provides the flexibility to configure routers and gateways according to user preferences. The developers took care to add support for encrypted DNS servers, allowing you to configure Private AdGuard DNS on your device.

## Configure DNS-over-HTTPS

- **Command-line instructions**. Install the required packages. DNS encryption should be enabled automatically.

- **Web interface**. If you want to manage the settings using web interface, install the necessary packages.

- **Configure DoH provider**. https-dns-proxy is configured with Google DNS and Cloudflare DNS by default. You need to change it to AdGuard DoH. Specify several resolvers to improve fault tolerance.

## Configure DNS-over-TLS

- **Command-line instructions**. [Disable](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#disabling_dns_role) Dnsmasq DNS role or remove it completely optionally [replacing](https://openwrt.org/docs/guide-user/base-system/dhcp_configuration#replacing_dnsmasq_with_odhcpd_and_unbound) its DHCP role with odhcpd.

- **Web interface**. If you want to manage the settings using web interface, install the necessary packages.

- **Configure AdGuard DNS-over-TLS**. Further instructions.

## Use your router admin panel

Use these instructions if your Keenetic router does not support DNS-over-HTTPS or DNS-over-TLS configuration:

1. Open the router admin panel. It can be accessed at 192.168.1.1 or 192.168.0.1.

1. Enter the administrator username (usually, it’s admin) and router password.

1. Open Network → Interfaces.

1. Further instructions.

Alternatively you can opt for unencrypted DNS. You have two choices: using linked IPs or dedicated IPs.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
