---
title: Forældrekontrol
sidebar_position: 5
---

*Forældrekontrol* er et sæt indstillinger, som giver fleksibilitet til at tilpasse adgangen til bestemte websteder med sensitivt indhold. Du kan bruge denne funktion til at begrænse dine børns adgang til voksensider, tilpasse søgeforespørgsler, blokere brugen af populære tjenester og meget mere.

## How to set it up

You can flexibly configure all features on your servers, including the parental control feature. [In the corresponding article](private-dns/server-and-settings/server-and-settings.md), you can familiarize yourself with what a server is in AdGuard DNS and learn how to create different servers with different sets of settings.

Then, go to the settings of the selected server and enable the required configurations.

### Block adult websites

Blocks websites with inappropriate and adult content.

![Blocked website \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/adult_blocked.png)

### Safe search

Removes inappropriate results from Google, Bing, DuckDuckGo, Yandex, Pixabay, Brave, and Ecosia.

### YouTube restricted mode

Removes the option to view and post comments under videos and interact with 18+ content on YouTube.

### Blocked services and websites

Begræns adgangen til populære tjenester med ét klik. Dette er nyttigt, såfremt forbundne enheder skal hindres i at besøge bestemte platforme, såsom Instagram og YouTube.

![Blocked services \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/blocked_services.png)

### Block websites by category

Lets you restrict access to specific categories of websites by choosing from more than 20 categories, including _Adult content_, _Games_, _Banking_, and _Communication_. For example, if you block sites that contain information about alcohol, tobacco, or drugs, the selected device will no longer be able to open pages that fall under those categories.

![Kategoribaseret blokering \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/v2-18/category_en.png)

### Pausetidsplan

Suspenderer midlertidigt begrænsningerne i Forældrekontrol på udvalgte dage og i angivne tidsintervaller. Der kan tilføjes en eller flere pauseintervaller for hver dag.

Der kan f.eks. gives et barn lov til at se YouTube indtil kl. 23:00 på hverdage, mens adgangen er ubegrænset i weekenden. Der kan også tilføjes et ekstra pauseinterval, f.eks. fra 13:00 til 15:00 på en hverdag.

Sådan opsættes en pausetidsplan:

1. Gå til _Servere_ → vælg en server → _Forældrekontrol_ → _Pausetidsplan_.
2. Klik på knappen **+** ud for den ønskede dag, og indstil intervallet i dialogboksen _Tilføj pause_.
3. Et eksisterende interval ændres ved at klikke på _Redigér_.

Der kan opsættes flere intervaller for den samme dag. Intervaller på samme dag må ikke overlappe hinanden: Forsøger overlappende intervaller oprettet, vises en advarsel, og tidsplanen vil ikke kunne gemmes.

![Overlappende intervaller \*mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/overlapping_intervals.png)

Markér afkrydsningsfeltet _Hele dagen_ for at pausere Forældrekontrol for hele dagen. Dette fjerner alle eksisterende pauseintervaller for den pågældende dag.

Pauseintervaller kan også strække sig over midnat. Indstilles f.eks. en pause fra kl. 22:00 om mandagen til kl. 07:00 om tirsdagen, viser kontrolpanelet den som to intervaller: Mandag kl. 22:00-00:00 og tirsdag kl. 00:00-07:00. Dette påvirker ikke, hvordan pausen fungerer.

![Pause over midnat \*mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/past_midnight.png)
