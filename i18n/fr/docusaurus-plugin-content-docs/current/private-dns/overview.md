---
title: Vue d'ensemble
sidebar_position: 1
---

:::info

Avec AdGuard DNS, vous pouvez configurer vos serveurs DNS privés pour résoudre les requêtes DNS et bloquer les publicités, les trackers et les domaines malveillants avant qu'ils n'atteignent votre appareil

Lien rapide : [Essayez AdGuard DNS](https://agrd.io/download-dns)

:::

![Tableau de bord AdGuard DNS privé principal](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## Général

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/ME3_Ms9LO8M" title="Lecteur vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

AdGuard DNS privé offre tous les avantages d'un serveur AdGuard DNS public, y compris le chiffrement du trafic et les listes de blocage de domaine. Il offre également des fonctionnalités supplémentaires telles que la personnalisation flexible, les statistiques DNS et le Contrôle parental. Toutes ces options sont facilement accessibles et gérées via un tableau de bord convivial.

### Pourquoi vous pourriez avoir besoin de AdGuard DNS privé

Aujourd'hui, vous pouvez connecter n'importe quoi à Internet : téléviseurs, réfrigérateurs, ampoules intelligentes ou haut-parleurs. Mais ces avantages indéniables s'accompagnent de traqueurs et de publicités. Un simple bloqueur de publicité basé sur un navigateur ne vous protégera pas dans ce cas, mais AdGuard DNS, que vous pouvez configurer pour filtrer le trafic, bloquer le contenu et les traqueurs, a un effet sur l'ensemble du système.

À l'époque, la gamme de produits AdGuard ne comprenait que [AdGuard DNS public](../public-dns/overview.md) et [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome). Ces solutions conviennent à certains utilisateurs, mais pour d'autres, AdGuard DNS public manque de souplesse de configuration, tandis qu'AdGuard Home manque de simplicité. That’s where private AdGuard DNS comes into play. Il offre le meilleur des deux mondes : personnalisation, contrôle et information, le tout au moyen d'un tableau de bord simple et facile à utiliser.

### La différence entre AdGuard DNS privé et public

Voici une simple comparaison des fonctionnalités disponibles dans AdGuard DNS privé et public.

| AdGuard DNS public                           | AdGuard DNS privé                                                                                 |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Cryptage du trafic DNS                       | Cryptage du trafic DNS                                                                            |
| Listes de blocage de domaines prédéterminées | Listes de blocage de domaines personnalisables                                                    |
| -                                            | Règles de filtrage DNS personnalisées avec fonction d'importation/exportation                     |
| -                                            | Statistiques des requêtes (voir où vont vos requêtes DNS : quels pays, quelles entreprises, etc.) |
| -                                            | Journal de requêtes détaillé                                                                      |
| -                                            | Contrôle Parental                                                                                 |


<!-- ## How to set up private AdGuard DNS

### For devices that support DoH, DoT, and DoQ

1. Go to your [AdGuard DNS dashboard](https://agrd.io/download-dns) (if not logged in, log in using your AdGuard account)
1. Click *Connect device* and follow on-screen instructions

:::note Supported platforms:

- Android
- iOS
- Windows
- Mac
- Linux
- Routers
- Gaming consoles
- Smart TVs

:::

Every device that you add in the AdGuard DNS panel has its own unique address that can be used if the device supports modern encrypted DNS protocols (DoH, DoT, and DoQ).

### For devices that do not support DoH, DoT, and DoQ

If the device does not support encrypted DNS and you have to use plain DNS, there are two more ways to allow AdGuard DNS to recognize the device — use dedicated IP addresses or link device's IP address.

:::note

Use plain DNS addresses only if you have no other options: this reduces the security of DNS requests. If you decide to use plain DNS, we recommend that you choose dedicated IP addresses.

:::

#### Dedicated IP addresses

For every device that you connect to AdGuard DNS, you'll be offered two dedicated IPv6 addresses that you can enter in your device settings. Using both IPv6 addresses is not mandatory, but often devices might request you to enter two IPv6 addresses.

When you connect to them, AdGuard DNS will be able to determine which particular device is sending DNS requests and display statistics for it. And you'll be able to configure DNS rules specifically for this device.

Unfortunately, not all service providers offer IPv6 support, and not all devices allow you to configure IPv6 addresses. If this is your case, you may have to rely on the Linked IP method.

#### Linked IP

If you connect your device to AdGuard DNS via Linked IP, the service will count all plain DNS requests coming from that IP address towards that "device". With this connection method, you would have to reconnect manually or through a special program each time the device's IP changes, which happens after each reboot.

The only requirement for linking IP is that **it must be a residential IP address**.

:::note

A residential IP address is an IP address assigned to a device connected to a residential ISP. It is typically associated with a physical location and is allocated to individual homes or apartments. Residential IP addresses are used by regular Internet users for their everyday online activities, such as browsing the web, accessing social media platforms, sending emails, or streaming content.

:::

If you're trying to link a residential IP address and AdGuard DNS does not allow you to do that, please contact our support team at support@adguard-dns.io.

## Private AdGuard DNS features

### Statistics

In the *Statistics* tab you can see all the summarized statistics on DNS queries made by devices connected to your Private AdGuard  DNS. It shows the total number and geography of requests, the number of blocked requests, the list of companies the requests were addressed to, requests types and top requested domains.

![Private AdGuard DNS dashboard statistics](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/statistics.png)

### Traffic destination

This feature shows you where DNS requests sent by your devices go. On top of seeing the map of request destinations, you can filter the information by date, device and country.

![Private AdGuard DNS dashboard traffic](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/traffic_destination.png)

### Companies

This tab allows you to quickly check which companies send the most requests, and which companies have the most blocked requests.

![Private AdGuard DNS dashboard companies](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/companies.png)

### Query log

This is a detailed log where you can check out the information on every single request and also sort requests by status, type, company, device, time, country.

![Private AdGuard DNS dashboard query log](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/query_log.png)

## Server settings

This section features a range of settings allowing you to customize the operation of private AdGuard DNS, ensuring the Internet functions exactly as you desire.

### Blocklists management

The *Blocklists* feature allows you to specify which domains you want to block and which you don't. Choose from a variety of blocklists for different purposes.

![Private AdGuard DNS dashboard blocklists](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### Security settings

Even if you're aware of all the tricks online scammers use, there's always a risk you'll accidentally click a malicious link. To protect yourself from such accidents, go to the *Security settings* section and check the boxes next to the options listed there.

The *Block malicious, phishing, and scam domains* feature will block domains found in the dedicated database. And the *Block newly registered domains* will block all domains registered less than 30 days ago, which are often considered risky for your online privacy.

### Parental control

To protect your child from online content you deem inappropriate, set up and activate the *Parental control* option. In addition to options such as "adult content" blocking and safe search, we've added the ability to manually specify domains for blocking and set a schedule for the *Parental control* to work accordingly.

![Parental control](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)

### User rules

For cases where pre-installed blocklists with thousands of rules are not enough, we have a handy feature called *User rules*. Here you can manually add custom rules to block/unblock a specific domain or import custom rule lists (see [DNS filtering rules syntax](../general/dns-filtering-syntax.md)). You can export the lists.

![Private AdGuard DNS dashboard user rules](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

### DNS-over-HTTPS with authentication

DNS-over-HTTPS with authentication provides a login and password to connect to the server. This can limit access to unauthorized users and increase security.

To enable this feature, go to *Server settings* → *Devices* → *Settings* and change the DNS server to the one with authentication. Select *Deny other protocols* to disable alternative protocol usage, ensuring exclusive DNS-over-HTTPS authentication and blocking third-party access.

![DNS-over-HTTPS with authentication](https://cdn.adtidy.org/content/release_notes/dns/v2-7/http-auth/http-auth-en.png)

## Advanced

Here you can set the way AdGuard DNS must respond to blocked domains:

- Default — zero IP address
- NXDOMAIN — the domain does not exist
- REFUSED — the server has refused to process the request
- Custom IP — you can manually specify an IP address

Additionally, you can adjust the *Time to live* (TTL) setting. This parameter defines the time period (in seconds) that a client device caches the response to a DNS request. A higher TTL means that even if a previously blocked domain is unblocked, it may still appear as blocked for a while. A TTL of 0 indicates that the device does not cache responses.

In the Advanced section, there are three options that can be customized:

- Block access to iCloud Private Relay. Devices that use iCloud Private Relay may ignore DNS settings. Enabling this option ensures that AdGuard DNS can effectively protect your device.
- Block Firefox canary domain. This setting prevents Firefox from automatically switching to its DoH resolver when AdGuard DNS is set as the system-wide DNS service.
- Log IP addresses. If this option is enabled, IP addresses associated with incoming DNS requests will be recorded and displayed in the Query log.

### Access settings

Here you can manage an access to your DNS server by configuring the following settings:

- Allowed clients. Specify which clients are permitted to use your DNS server. Please note that allowed clients are not counted in added access rules, only disallowed clients and domains

![Added rules](https://cdn.adtidy.org/content/kb/dns/private/rules_added.png)

- Disallowed clients. List clients that are denied to use your DNS server
- Disallowed domains. Specify domain names that will be denied access to your DNS server. Wildcards and DNS filtering rules can also be listed here

:::note

If you only want to use DNS on certain AS numbers or IP addresses, you should block everything else in the Disallowed clients field. Simply allowing only the necessary numbers and addresses in the *Allowed clients* field won’t be enough.

:::

By setting up these options, you can control who uses your DNS server and prevent potential DDoS attacks. Requests that are not allowed will not appear in your Query log, and they are free of charge.-->

### Comment connecter des appareils à AdGuard DNS

AdGuard DNS est très flexible et peut être configuré sur une grande quantité d'appareils différents, y compris les tablettes, les PC, les routeurs et les consoles de jeux. Cette section fournit des instructions détaillées sur la façon de connecter votre appareil à AdGuard DNS.

[Comment connecter des appareils à AdGuard DNS](/private-dns/connect-devices/connect-devices.md)

### Serveur et paramètres

This section explains what a server is in AdGuard DNS and what settings are available. Les paramètres vous permettent de personnaliser la façon dont AdGuard DNS répond aux domaines bloqués et de gérer l'accès à votre serveur DNS.

[Serveur et paramètres](/private-dns/server-and-settings/server-and-settings.md)

### Comment configurer le filtrage

Dans cette section, nous décrivons un certain nombre de paramètres qui vous permettront d'affiner la fonctionnalité d'AdGuard DNS. En utilisant des listes de blocage, des règles utilisateur, des contrôles parentaux et des filtres de sécurité, vous pouvez configurer le filtrage selon vos besoins.

[Comment configurer le filtrage](/private-dns/setting-up-filtering/blocklists.md)

### Statistiques et le Journal des requêtes

Les Statistiques et le Journal des requêtes donnent un aperçu de l'activité de vos appareils. L'onglet *Statistiques* vous permet de voir un résumé des requêtes DNS effectuées par les appareils connectés à votre AdGuard DNS privé. Dans le Journal des requêtes, vous pouvez voir des informations sur chaque requête et également trier les requêtes par état, type, société, appareil, temps et pays.

[Statistiques et le Journal des requêtes](/private-dns/statistics-and-log/statistics.md)

### Custom domains

AdGuard DNS Enterprise and Team subscribers can use their own domains (like `dns.example.com`) instead of the default `d.adguard-dns.com`. This setting ensures seamless integration with corporate security policies while maintaining full ad-blocking and privacy features provided by AdGuard DNS.

[Custom domains](/private-dns/custom-domains.md)
