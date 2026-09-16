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

! [Categorie-gebaseerde blokkering \*mobile_border] (https://cdn.adtidy.org/content/release_notes/dns/v2-18/category_en.png)

### Pauzeschema

Temporarily suspends _Parental control_ restrictions on selected days and during specified time intervals. Je kunt één of meerdere pauzes per dag toevoegen.

For example, you can pause the restrictions on weekdays from 7:00 a.m. to 8:00 a.m. before school and from 6:00 p.m. to 8:00 p.m. in the evening. Outside of these intervals, _Parental control_ applies as usual.

Om een pauzeschema op te stellen:

1. Ga naar _Servers_ → selecteer een server → _Ouderlijk toezicht_ → _Pauzeschema_.
2. Klik op de **+**-knop naast de gewenste dag en stel het interval in in het _pauze toevoegen_-dialoog.
3. Repeat to add more intervals to the same day.
4. To change an existing interval, click _Edit_.

Je kunt meerdere intervallen voor dezelfde dag instellen. Intervallen op dezelfde dag mogen niet overlappen: als je probeert overlappende intervallen te maken, krijg je een waarschuwing en kun je het schema niet opslaan.

! [Overlappende intervallen \*mobiel] (https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/overlapping_intervals.png)

Selecting the _All day_ checkbox pauses _Parental control_ restrictions for the entire day, replacing any intervals you’ve set.

Pauzeperiodes kunnen ook middernacht duren. For example, if you set a pause from 10 p.m. on Monday to 7 a.m. on Tuesday, the dashboard will display it as two intervals: Monday, 22:00–00:00, and Tuesday, 00:00–07:00.

![Pause schedule \*mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/Pause_schedule.png)
