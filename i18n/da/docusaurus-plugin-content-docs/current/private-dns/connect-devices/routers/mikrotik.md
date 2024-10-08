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
2. Import root certificate:
   - Download the latest bundle of trusted root certificates: [https://curl.se/docs/caextract.html](https://curl.se/docs/caextract.html)
   - Navigate to _Files_. Click _Upload_ and select the downloaded cacert.pem certificate bundle
   - Go to _System_ → _Certificates_ → _Import_
   - In the _File Name_ field, choose the uploaded certificate file
   - Click _Import_
3. Configure DNS-over-HTTPS:
   - Go to _IP_ → _DNS_
   - In the _Servers_ section, add the following AdGuard DNS servers:
     - `94.140.14.49`
     - `94.140.14.59`
   - Set _Allow Remote Requests_ to _Yes_ (this is crucial for DoH to function)
   - In the _Use DoH server_ field, enter the URL of the private AdGuard DNS server: `https://d.adguard-dns.com/dns-query/*******`
   - Click _OK_
4. Create Static DNS Records:
   - In the _DNS Settings_, click _Static_
   - Click _Add New_
   - Set _Name_ to d.adguard-dns.com
   - Set _Type_ to A
   - Set _Address_ to `94.140.14.49`
   - Set _TTL_ to 1d 00:00:00
   - Repeat the process to create an identical entry, but with _Address_ set to `94.140.14.59`
5. Disable Peer DNS on DHCP Client:
   - Go to _IP_ → _DHCP Client_
   - Double-click the client used for your Internet connection (usually on the WAN interface)
   - Uncheck _Use Peer DNS_
   - Click _OK_
6. Link your IP.
7. Test and verify:
   - You might need to reboot your MikroTik router for all changes to take effect
   - Clear your browser's DNS cache. Der kan bruges et værktøj, såsom [https://www.dnsleaktest.com](https://www.dnsleaktest.com/), til at tjekke, om DNS-forespørgslerne nu rutes igennem AdGuard

## Brug routerens håndteringspanel

Brug denne vejledning, hvis Keenetic-routeren ikke understøtter opsætning af DNS-over-HTTPS eller DNS-over-TLS:

1. Åbn routerens admin-panel. Den kan tilgås på `192.168.1.1` eller `192.168.0.1`.
2. Angiv routerens administratorbrugernavn (normalt admin) samt adgangskode.
3. Åbn _Webfig_ → _IP_ → _DNS_.
4. Vælg _Servere_ og angiv en af flg. DNS-serveradresser.
   - IPv4: `94.140.14.49` and `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
5. Gem indstillingerne.
6. Link IP'en (eller den dedikerede IP, hvis man har et Team-abonnement).

- [Dedikerede IP'er](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linket IP'er](/private-dns/connect-devices/other-options/linked-ip.md)
