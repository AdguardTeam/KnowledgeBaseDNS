---
title: MikroTik
sidebar_position: 6
---

MikroTik routers use the open-source RouterOS operating system, which provides routing, wireless networking, and firewall services for home and small office networks.

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
   - In the _Use DoH server_ field, enter the URL of the Private AdGuard DNS server: `https://d.adguard-dns.com/dns-query/*******`
   - Click _OK_
4. Create Static DNS Records:
   - In the _DNS Settings_, click _Static_
   - Click _Add New_
   - Set _Name_ to `d.adguard-dns.com`
   - Set _Type_ to `A`
   - Set _Address_ to `94.140.14.49`
   - Set _TTL_ to `1d 00:00:00`
   - Repeat the process to create an identical entry, but with _Address_ set to `94.140.14.59`
5. Disable Peer DNS on DHCP Client:
   - Go to _IP_ → _DHCP Client_
   - Double-click the client used for your Internet connection (usually on the WAN interface)
   - Uncheck _Use Peer DNS_
   - Click _OK_
6. Test and verify:
   - You might need to reboot your MikroTik router for all changes to take effect
   - Clear your browser's DNS cache. You can use a tool like [https://www.dnsleaktest.com](https://www.dnsleaktest.com/) to check if your DNS requests are now routed through AdGuard

## My router does not support DNS-over-HTTPS

Use these instructions if your MikroTik router does not support DNS-over-HTTPS configuration:

1. Toegang tot je MikroTik-router:
   - Open je webbrowser en ga naar het IP-adres van je router (meestal `192.168.88.1`)
   - Als alternatief kun je Winbox gebruiken om verbinding te maken met je MikroTik-router
   - Voer je beheerdersgebruikersnaam en wachtwoord in
2. Configure Plain DNS:
   - Ga naar _IP_ → _DNS_
   - Bij _Servers_ voeg de volgende AdGuard DNS-servers toe:
     - IPv4: `94.140.14.49` and `94.140.14.59`
     - IPv6: `2a10:50c0:0:0:0:0:ded:ff` and `2a10:50c0:0:0:0:0:dad:ff`
     - Toegewezen IPv6: Privé AdGuard DNS ondersteunt toegewezen IPv6-adressen. Om ze te vinden, open je het Dashboard, klik je op _Instellingen_ naast je apparaat → _Standaard DNS-serveradressen_ → _Toegewezen IPv6-adressen_.
   - Klik _OK_
3. Disable Peer DNS on DHCP Client:
   - Ga naar _IP_ → _DHCP Client_
   - Dubbelklik op de client die wordt gebruikt voor je internetverbinding (meestal op de WAN-interface)
   - Verwijder het vinkje bij _Peer DNS gebruiken_
   - Klik _OK_
