---
title: Bekende problemen
sidebar_position: 1
---

Na het instellen van AdGuard DNS kunnen sommige gebruikers merken dat het niet goed werkt: ze zien een bericht dat hun apparaat niet is verbonden met AdGuard DNS en de verzoeken van dat apparaat worden niet weergegeven in het querylogboek. Dit kan gebeuren vanwege bepaalde verborgen instellingen in je browser of besturingssysteem. Laten we eens kijken naar verschillende veelvoorkomende problemen en hun oplossingen.

:::tip

Je kunt de status van AdGuard DNS controleren op de [testpagina](https://adguard.com/test.html).

:::

## Chrome’s secure DNS settings

Als je Chrome gebruikt en je ziet geen verzoeken in jouw AdGuard DNS-dashboard, kan dit zijn omdat Chrome zijn eigen DNS-server gebruikt. Zo kun je het uitschakelen:

1. Open de instellingen van Chrome.
1. Navigeer naar *Privacy en veiligheid*.
1. Selecteer *Beveiliging*.
1. Scroll naar beneden naar *Gebruik beveiligde DNS*.
1. Schakel de functie uit.

![Chrome’s Use secure DNS feature](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/secure-dns.png)

If you disable Chrome’s own DNS settings, the browser will use the DNS specified in your operating system, which should be AdGuard DNS if you’ve set it up correctly.

## iCloud Private Relay (Safari, macOS en iOS)

If you enable iCloud Private Relay in your device settings, Safari will use Apple’s DNS addresses, which will override the AdGuard DNS settings.

Here’s how you can disable iCloud Private Relay on your iPhone:

1. Open *Settings* and tap your name.
1. Select *iCloud* → *Private Relay*.
1. Turn off Private Relay.

![iOS Private Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay-ios-1.png)

On your Mac:

1. Open *System Settings* and click your name or *Apple ID*.
1. Select *iCloud* → *Private Relay*.
1. Turn off Private Relay.
1. Click *Done*.

![macOS Private Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png)

## Advanced Tracking and Fingerprinting Protection (Safari, starting from iOS 17)

After the iOS 17 update, Advanced Tracking and Fingerprinting Protection may be enabled in Safari settings, which could potentially have a similar effect to iCloud Private Relay bypassing AdGuard DNS settings.

Here’s how you can disable Advanced Tracking and Fingerprinting Protection:

Voor iOS 26.1 en latere versies:

1. Ga naar *Instellingen*.
1. Schuif naar beneden en selecteer *Apps*.
1. Ga naar *Safari* → *Geavanceerd*.
1. Tik op *Geavanceerde tracking- en vingerafdrukbeveiliging* en vervolgens op *Uit*.

![iOS 26.1 Bescherming tegen volgen en vingerafdrukken *mobiel](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/adv-tracking-browser-1.png)

Voor iOS-versies ouder dan 26.1:

1. Open *Settings* and scroll down to *Safari*.
1. Tap *Advanced*.
1. Disable *Advanced Tracking and Fingerprinting Protection*.

![iOS Tracking and Fingerprinting Protection *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)

## Volgen van IP-adressen op iPhone beperken

Wanneer het beperken van volgen van IP-adressen is ingeschakeld op je iPhone, kan dit de mogelijkheid van AdGuard DNS om verkeer te filteren verstoren.

Dit gebeurt omdat de functie DNS-verzoeken van Safari (en andere apps die dit ondersteunen) via Apple's eigen private relay-servers leidt. Dit voorkomt dat AdGuard DNS het werkelijke IP-adres van je apparaat ontvangt en DNS-verzoeken verwerkt, wat resulteert in uitgeschakelde filtering voor advertenties en volgers.

Om volledige DNS-gebaseerde filtering te herstellen, moet je deze functie uitschakelen voor het Wi-Fi-netwerk dat je momenteel gebruikt.

Volg de onderstaande stappen:

1. Open *Instellingen* op je iPhone.
1. Tik op *Wi-Fi*.
1. Zoek en tik op de naam van het Wi-Fi-netwerk waarmee je momenteel bent verbonden.
1. Op de pagina met netwerkinstellingen zet je de schakelaar voor *IP-adrestracering beperken* uit

![Volgen van IP-adressen beperken *mobiel](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-wifi-limit-ip-1.png)

Het DNS-filteren wordt onmiddellijk hervat nadat deze instelling is uitgeschakeld. Houd er rekening mee dat je dit proces mogelijk moet herhalen voor andere Wi-Fi-netwerken waarmee je in de toekomst verbinding maakt.
