---
title: Parental control
sidebar_position: 5
---

## What is it

Parental control is a set of settings that gives you the flexibility to customize access to certain websites with sensitive content. You can use this feature to restrict your children’s access to adult sites, customize search queries, block the use of popular services, and more.

## How to set it up

You can flexibly configure all features on your servers, including the parental control feature. [In the corresponding article](private-dns/server-and-settings/server-and-settings.md), you can familiarize yourself with what a server is in AdGuard DNS and learn how to create different servers with different sets of settings.

Then, go to the settings of the selected server and enable the required configurations.

### Block adult websites

Blocks websites with inappropriate and adult content.

![Blocked website *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/adult_blocked.png)

### Safe search

Removes inappropriate results from Google, Bing, DuckDuckGo, Yandex, Pixabay, Brave, and Ecosia.

![Safe search *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/porn.png)

### YouTube restricted mode

Removes the option to view and post comments under videos and interact with 18+ content on YouTube.

![Restricted mode *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/restricted.png)

### Blocked services and websites

AdGuard DNS blocks access to popular services with one click. It’s useful if you don’t want connected devices to visit Instagram and YouTube, for example.

![Blocked services *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/blocked_services.png)

### Block websites by category

This feature lets you restrict access to specific categories of websites by choosing from more than 20 categories, including *Adult content*, *Games*, *Banking*, and *Communication*. For example, if you block sites that contain information about alcohol, tobacco, or drugs, the selected device will no longer be able to open pages that fall under those categories.

![Category-based blocking *border](https://cdn.adtidy.org/content/release_notes/dns/v2-18/category_en.png)

### Pause schedule

This feature suspends Parental control restrictions on selected days with one or multiple time intervals.

For example, you may have allowed your child to watch YouTube videos only until 23:00 on weekdays - but on weekends this access will not be restricted by Parental Control. If you wish to add another interval from 13:00 till 15:00 on a weekday, you can use the Pause schedule feature to do it.

To set the schedule, do the following:

1. Open *Servers* → choose a server → *Parental control* → *Pause schedule*
2. Click “+” next to a day and set an interval in the *Add pause* pop-up screen
3. To modify an existing interval, click the *Edit* button

You can set multiple intervals during the same day. Please note that if you try to set two overlapping intervals on the same day, you will see a warning message and the system will not let you proceed.

Ticking the *All day* checkbox will remove all existing pauses for the day.

It is important to note that intervals can run past midnight: if you set a pause from 22:00 to 07:00 on Monday, the dashboard will display two intervals — Monday 22:00–00:00 and Tuesday 00:00–07:00. It will not affect the way pauses work.

![Schedule *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/schedule.png)
