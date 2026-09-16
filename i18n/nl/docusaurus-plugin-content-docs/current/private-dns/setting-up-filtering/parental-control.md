---
title: Parental control
sidebar_position: 5
---

_Ouderlijk toezicht_ is een set instellingen die je de flexibiliteit geven om toegang tot bepaalde websites met gevoelige inhoud aan te passen. You can use this feature to restrict your children’s access to adult sites, customize search queries, block the use of popular services, and more.

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

Beperkt de toegang tot populaire diensten met één klik. Dit is handig als je niet wilt dat verbonden apparaten bepaalde platforms bezoeken, zoals Instagram en YouTube.

![Blocked services \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/blocked_services.png)

### Block websites by category

Lets you restrict access to specific categories of websites by choosing from more than 20 categories, including _Adult content_, _Games_, _Banking_, and _Communication_. For example, if you block sites that contain information about alcohol, tobacco, or drugs, the selected device will no longer be able to open pages that fall under those categories.

![Categorie-gebaseerde blokkering \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/v2-18/category_en.png)

### Pauzeschema

Temporarily suspends Parental control restrictions on selected days and during specified time intervals. Je kunt één of meerdere pauzes per dag toevoegen.

Zo kun je je kind bijvoorbeeld toestaan om YouTube te kijken tot 23:00 uur op weekdagen, terwijl je in het weekend de toegang onbeperkt laat. Je kunt ook een extra pauze toevoegen, bijvoorbeeld van 13:00 tot 15:00 op een doordeweekse dag.

Om een pauzeschema op te stellen:

1. Ga naar _Servers_ → selecteer een server → _Ouderlijk toezicht_ → _Pauzeschema_.
2. Klik op de **+**-knop naast de gewenste dag en stel het interval in in het _pauze toevoegen_-dialoog.
3. Om een bestaand interval te wijzigen, klik op _Bewerken_.

Je kunt meerdere intervallen voor dezelfde dag instellen. Intervallen op dezelfde dag mogen niet overlappen: als je probeert overlappende intervallen te maken, krijg je een waarschuwing en kun je het schema niet opslaan.

![Overlappende intervallen \*mobiel](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/overlapping_intervals.png)

Selecteer het _De hele dag_ selectievakje om ouderlijk toezicht de hele dag te pauzeren. Hierdoor worden alle bestaande pauzes voor die dag verwijderd.

Pauzeperiodes kunnen ook middernacht duren. Als je bijvoorbeeld een pauze zet van 22:00 op maandag tot 07:00 op dinsdag, toont het dashboard deze in twee intervallen: maandag, 22:00–00:00, en dinsdag, 00:00–07:00. Dit beïnvloedt niet hoe de pauze werkt.

![Pauze na middernacht \*mobiel](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/past_midnight.png)
