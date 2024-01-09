---
title: Overzicht
sidebar_position: 1
---

:::info

With AdGuard DNS, you can set up your private DNS servers to resolve DNS requests and block ads, trackers, and malicious domains before they reach your device

Snelle link: [AdGuard DNS proberen](https://agrd.io/download-dns)

:::

![Private AdGuard DNS dashboard main](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png)

## Algemeen

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/ME3_Ms9LO8M" title="YouTube-videospeler" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Private AdGuard DNS biedt alle voordelen van een openbare AdGuard DNS-server, inclusief dataverkeer versleuteling en domeinblokkeerlijsten. Het biedt ook extra functies zoals flexibele aanpassing, DNS-statistieken en ouderlijk toezicht. Al deze opties zijn eenvoudig toegankelijk en worden beheerd via een gebruiksvriendelijk dashboard.

### Waarom je privé AdGuard DNS nodig hebt

Today, you can connect anything to the Internet: TVs, refrigerators, smart bulbs, or speakers. But along with the undeniable conveniences you get trackers and ads. A simple browser-based ad blocker will not protect you in this case, but AdGuard DNS, which you can set up to filter traffic, block content and trackers, has a system-wide effect.

Ooit omvatte de AdGuard-productlijn alleen [openbare AdGuard DNS](../public-dns/overview.md) en [AdGuard Startpagina](https://github.com/AdguardTeam/AdGuardHome). These solutions work fine for some users, but for others, the public AdGuard DNS lacks the flexibility of configuration, while the AdGuard Home lacks simplicity. That's where private AdGuard DNS comes into play. It has the best of both worlds: it offers customizability, control and information - all through a simple easy-to-use dashboard.

### Het verschil tussen publieke en private AdGuard DNS

Hier is een eenvoudige vergelijking van functies die beschikbaar zijn in openbare en private AdGuard DNS.

| Public AdGuard DNS               | Private AdGuard DNS                                                                                    |
| -------------------------------- | ------------------------------------------------------------------------------------------------------ |
| DNS traffic encryption           | DNS traffic encryption                                                                                 |
| Pre-determined domain blocklists | Customizable domain blocklists                                                                         |
| -                                | Custom DNS filtering rules with import/export feature                                                  |
| -                                | Verzoekstatistieken (zie waar je DNS-verzoeken naartoe gaan: naar welke landen, welke bedrijven, enz.) |
| -                                | Detailed query log                                                                                     |
| -                                | Parental control                                                                                       |

## Hoe je privé AdGuard DNS instelt

### Voor apparaten die DoH, DoT en DoQ ondersteunen

1. Ga naar jouw [AdGuard DNS-dashboard](https://agrd.io/download-dns) (indien niet aangemeld, meld je aan met jouw AdGuard account)
1. Klik op *Apparaat aansluiten* en volg de instructies op het scherm

:::note Supported platforms:

- Android
- iOS
- Windows
- Mac
- Linux
- Routers
- Gaming consoles
- Smart-TV's

:::

Every device that you add in the AdGuard DNS panel has its own unique address that can be used if the device supports modern encrypted DNS protocols (DoH, DoT, and DoQ).

### Voor apparaten die geen DoH, DoT en DoQ ondersteunen

Als het apparaat geen versleutelde DNS ondersteunt en je gewone DNS moet gebruiken, zijn er nog twee manieren om AdGuard DNS het apparaat te laten herkennen - gebruik specifieke IP-adressen of koppel het IP-adres van het apparaat.

:::note

Gebruik alleen gewone DNS-adressen als je geen andere opties hebt: dit vermindert de veiligheid van DNS-verzoeken. Als je besluit om gewone DNS te gebruiken, raden we je aan om speciale IP-adressen te kiezen.

:::

#### Toegewezen IP-adressen

Voor elk apparaat dat je verbindt met AdGuard DNS, krijg je twee speciale IPv6-adressen die je kunt invoeren in de instellingen van je apparaat. Het is niet verplicht om beide IPv6-adressen te gebruiken, maar vaak vragen apparaten je om twee IPv6-adressen in te voeren.

Wanneer je er verbinding mee maakt, kan AdGuard DNS bepalen welk bepaald apparaat DNS-verzoeken verstuurt en er statistieken over weergeven. En je kunt DNS-regels specifiek voor dit apparaat configureren.

Helaas bieden niet alle serviceproviders IPv6-ondersteuning en kun je niet op alle apparaten IPv6-adressen configureren. Als dit het geval is, moet je misschien vertrouwen op de Linked IP-methode.

#### Linked IP

Als je je apparaat via Linked IP verbindt met AdGuard DNS, telt de service alle gewone DNS-verzoeken die van dat IP-adres naar dat "apparaat" komen. Met deze verbindingsmethode zou je elke keer dat het IP-adres van het apparaat verandert, handmatig of via een speciaal programma opnieuw verbinding moeten maken, wat na elke herstart gebeurt.

The only requirement for linking IP is that **it must be a residential IP address**.

:::note

A residential IP address is an IP address assigned to a device connected to a residential ISP. It is typically associated with a physical location and is allocated to individual homes or apartments. Residential IP addresses are used by regular Internet users for their everyday online activities, such as browsing the web, accessing social media platforms, sending emails, or streaming content.

:::

If you're trying to link a residential IP address and AdGuard DNS does not allow you to do that, please contact our support team at support@adguard.com.

## Private AdGuard DNS features

### Statistics

Op het tabblad *Statistieken* kun je alle samengevatte statistieken bekijken over DNS-query's gemaakt door apparaten die zijn aangesloten op jouw Private AdGuard DNS. It shows the total number and geography of requests, the number of blocked requests, the list of companies the requests were addressed to, requests types and top requested domains.

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

## Serverinstellingen

Dit gedeelte bevat een reeks instellingen waarmee je de werking van privé AdGuard DNS kunt aanpassen, zodat het internet precies zo werkt als jij wilt.

### Blocklists management

Met de functie *Blokkeerlijsten* kun je aangeven welke domeinen je wilt blokkeren en welke niet. Kies uit verschillende blokkeerlijsten voor verschillende doeleinden.

![Private AdGuard DNS dashboard blocklists](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png)

### Beveiligingsinstellingen

Zelfs als je op de hoogte bent van alle trucs die online oplichters gebruiken, is er altijd een kans dat je per ongeluk op een kwaadaardige link klikt. Om jezelf tegen dergelijke ongelukken te beschermen, ga je naar de sectie *Beveiligingsinstellingen* en vink je de vakjes aan naast de opties die daar worden vermeld.

De functie *Kkwaadaardige, phishing- en oplichtingsdomeinen blokkeren* blokkeert domeinen die in de speciale database worden gevonden. En de *Nieuw geregistreerde domeinen blokkeren* blokkeert alle domeinen die minder dan 30 dagen geleden zijn geregistreerd, wat vaak als riskant wordt beschouwd voor jouw online privacy.

### Parental control

To protect your child from online content you deem inappropriate, set up and activate the *Parental control* option. In addition to options such as "adult content" blocking and safe search, we've added the ability to manually specify domains for blocking and set a schedule for the *Parental control* to work accordingly.

![Parental control](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png)

### User rules

Voor gevallen waarin vooraf geïnstalleerde blokkeerlijsten met duizenden regels niet voldoende zijn, hebben we een handige functie genaamd *Gebruikersregels*. Hier kun je handmatig aangepaste regels toevoegen om een specifiek domein te blokkeren/deblokkeren of aangepaste regellijsten te importeren (zie [Syntaxis van DNS-filterregels](../general/dns-filtering-syntax.md)). You can export the lists.

![Private AdGuard DNS dashboard user rules](https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png)

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

- Allowed clients. Specify which clients are permitted to use your DNS server
- Disallowed clients. List clients that are denied to use your DNS server
- Disallowed domains. Specify domain names that will be denied access to your DNS server. Wildcards and DNS filtering rules can also be listed here

By setting up these options, you can control who uses your DNS server and prevent potential DDoS attacks. Requests that are not allowed will not appear in your Query log, and they are free of charge.
