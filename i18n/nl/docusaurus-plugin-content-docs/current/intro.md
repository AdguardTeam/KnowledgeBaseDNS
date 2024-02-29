---
title: Overzicht
sidebar_position: 1
slug: /
---

## Wat is DNS?

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/MSp7Ki03-LI" title="YouTube-videospeler" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

DNS staat voor "Domain Name System", en heeft tot doel de namen van websites om te zetten in IP-adressen. Elke keer dat je naar een website gaat, stuurt je browser een DNS-query naar een DNS-server om het IP-adres van de website te achterhalen. En een gewone DNS-resolver retourneert eenvoudigweg het IP-adres van het aangevraagde domein.

:::note

De standaard DNS-server wordt meestal geleverd door je internetprovider. Dit betekent dat je ISP jouw online activiteiten kan volgen en logboeken aan derden kan verkopen.

:::

![Your device always uses a DNS server to obtain the IP addresses of the domains that are accessed by various apps, services, etc.](https://cdn.adtidy.org/content/blog/articles/dns-cbs/scr1.png)

Er zijn ook DNS-servers die bepaalde websites op DNS-niveau kunnen blokkeren. Hoe werken ze? Wanneer jouw apparaat een "slecht" verzoek verzendt, of het nu een advertentie of een tracker is, verhindert een DNS-server de verbinding door te reageren met een niet-routeerbaar IP-adres voor een geblokkeerd domein.

## Waarom DNS gebruiken voor het blokkeren van inhoud

Absolutely everything is connected to the Internet these days, from TV to smart light bulbs, from mobile devices to smart car. En waar internet is, zijn er advertenties en volgers. In dit geval is een browsergebaseerde advertentieblokker onvoldoende gebleken. Om beter beschermd te worden, gebruik je DNS in combinatie met VPN en een advertentieblokker.

Het gebruik van DNS voor blokkering van inhoud heeft bepaalde voordelen, maar ook duidelijke nadelen. On the one hand, DNS is in the loop for queries from all devices and their apps. Maar, aan de andere kant kan DNS-blokkering op zichzelf geen cosmetische filtering bieden.

## Wat is Adguard DNS?

AdGuard DNS is een van de meest privacygerichte DNS-diensten op de markt. Het ondersteunt betrouwbare coderingsprotocollen zoals DNS-over-HTTPS, DNS-over-TLS en DNS-over-QUIC. Het kan werken als een gewone DNS-resolver in de modus Niet-filtering, maar het kan ook inhoud op DNS-niveau blokkeren: verzoeken naar advertentie-, volgers- en/of adult-domeinen identificeren (optioneel) en reageren met een leeg antwoord. AdGuard heeft zijn eigen, regelmatig bijgewerkte database met namen van domeinen die advertenties, volgers en oplichting weergeven.

![Een versimpeld schema over de werking van AdGuard DNS](https://cdn.adtidy.org/public/Adguard/Blog/scr2.png)

Ongeveer 75% van AdGuards DNS-verkeer is versleuteld. Dit is eigenlijk wat DNS-servers die inhoud blokkeren onderscheidt van andere. Als je de statistieken van CloudFlare of Quad9 bekijkt, zul je zien dat gecodeerde DNS slechts een klein deel van alle zoekopdrachten uitmaakt.

AdGuard DNS exists in two main forms: [Public AdGuard DNS](public-dns/overview) and [Private AdGuard DNS](private-dns/overview). Voor geen van deze services is de installatie van apps vereist. Ze zijn eenvoudig in te stellen en te gebruiken en bieden gebruikers de minimale functies die nodig zijn om advertenties, volgers, kwaadaardige websites en inhoud voor volwassenen te blokkeren (indien nodig). Er zijn geen beperkingen op welke apparaten ze kunnen worden gebruikt.

Despite so many similarities, private AdGuard DNS and public AdGuard DNS are two different products. Their main difference is that you can customize Private AdGuard DNS, while Public AdGuard DNS cannot.

## DNS-filtermodule in AdGuard-producten

Alle belangrijke AdGuard-producten, inclusief AdGuard VPN, hebben een **DNS-filtermodule** waar je een DNS-server kunt selecteren op basis van een provider die je vertrouwt. Vanzelfsprekend zijn AdGuards standaard DNS; niet-filterende DNS en de gezinsbeschermende DNS ook keuzemogelijkheden. Also, AdGuard apps allow users to [easily configure and use AdGuard DNS](https://adguard-dns.io/public-dns.html) — Public or Private.
