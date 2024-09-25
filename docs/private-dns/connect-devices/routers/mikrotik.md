---
title: MikroTik
sidebar_position: 6
---

MikroTik routers use the open source RouterOS operating system, which provides routing, wireless networking and firewall services for home and small office networks.

## Configure DNS-over-HTTPS

1. Access your MikroTik router:
    - Open your web browser and go to your router's IP address (usually `192.168.88.1`)
    - Alternatively, you can use Winbox to connect to your MikroTik router
    - Enter your administrator username and password
1. Import root certificate:
    - Download the latest bundle of trusted root certificates: [https://curl.se/docs/caextract.html](https://curl.se/docs/caextract.html)
    - Navigate to *Files*. Click *Upload* and select the downloaded cacert.pem certificate bundle
    - Go to *System* → *Certificates* → *Import*
    - In the *File Name* field, choose the uploaded certificate file
    - Click *Import*
1. Configure DNS-over-HTTPS:
    - Go to *IP* → *DNS*
    - In the *Servers* section, add the following AdGuard DNS servers:
        - `94.140.14.49`
        - `94.140.14.59`
    - Set *Allow Remote Requests* to *Yes* (this is crucial for DoH to function)
    - In the *Use DoH server* field, enter the URL of the private AdGuard DNS server: `https://d.adguard-dns.com/dns-query/*******`
    - Click *OK*
1. Create Static DNS Records:
    - In the *DNS Settings*, click *Static*
    - Click *Add New*
    - Set *Name* to d.adguard-dns.com
    - Set *Type* to A
    - Set *Address* to `94.140.14.49`
    - Set *TTL* to 1d 00:00:00
    - Repeat the process to create an identical entry, but with *Address* set to `94.140.14.59`
1. Disable Peer DNS on DHCP Client:
    - Go to *IP* → *DHCP Client*
    - Double-click the client used for your Internet connection (usually on the WAN interface)
    - Uncheck *Use Peer DNS*
    - Click *OK*
1. Link your IP.
1. Test and verify:
    - You might need to reboot your MikroTik router for all changes to take effect
    - Clear your browser's DNS cache. You can use a tool like [https://www.dnsleaktest.com](https://www.dnsleaktest.com/) to check if your DNS requests are now routed through AdGuard

## Use your router admin panel

Use these instructions if your Keenetic router does not support DNS-over-HTTPS or DNS-over-TLS configuration:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
1. Enter the administrator username (usually, it’s admin) and router password.
1. Open *Webfig* → *IP* → *DNS*.
1. Select *Servers* and enter one of the following DNS server addresses.
    - IPv4: `94.140.14.49` and `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
1. Save the settings.
1. Link your IP (or your dedicated IP if you have a Team subscription).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
