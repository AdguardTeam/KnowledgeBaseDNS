---
title: Domini personali
sidebar_position: 6
---

Gli abbonati AdGuard DNS possono approntare i propri domini (come `dns.example.com`) invece del dominio predefinito `d.adguard-dns.com`. Questa funzione è pensata per aiutare le aziende ad allineare la protezione DNS con la propria infrastruttura, assicurando un'integrazione ininterrotta con le politiche di sicurezza aziendale, mantenendo tutte le funzioni di blocco delle inserzioni e riservatezza offerte da AdGuard DNS.

:::note

Custom domains are available to the users of **Enterprise** and **Team** plans.

:::

## How to set up a custom domain

To configure a custom domain, log in to your AdGuard DNS dashboard and go to [_Account settings_](https://adguard-dns.io/en/dashboard/account). Scroll down to _Advanced settings_ and select _Custom domains_. Next, you will need to go through the three main steps.

1. Choose the protocol. Here, you have two options:

   - Add DoH domain (for DNS-over-HTTPS)
   - Add DoT/DoQ domain (for DNS-over-TLS or DNS-over-QUIC)

   ![Choose the protocol \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_1.png)

2. After selecting the protocol, enter the preferred domain name (e.g., `example.com`) and verify the CNAME record.

   ![CNAME record \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_2.png)

3. Set up a certificate. For DoT/DoQ domains, you’ll need to upload a wildcard TLS certificate. If you choose DoH, you can either provide your own TLS certificate or let AdGuard DNS generate one for you. Once verified, your custom domain will appear in the dashboard, ready for use.

   ![Custom domain list \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_3.png)
