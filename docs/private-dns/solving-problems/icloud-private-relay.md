---
title: Using alongside iCloud Private Relay
sidebar_position: 1
toc_min_heading_level: 3
toc_max_heading_level: 4
---

When you're using iCloud Private Relay, the AdGuard DNS dashboard (and associated [AdGuard test page](https://adguard.com/test.html)) will show that you are not using AdGuard DNS on that device.

![Device is not connected](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

To fix this problem, you need to allow AdGuard websites see your IP address in your device's settings.

- On iPhone or iPad:

    1. Go to `adguard-dns.io`

    1. Tap the **Page Settings** button, then tap **Show IP Address**

        ![iCloud Private Relay settings *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. Repeat for `adguard.com`

- On Mac:

    1. Go to `adguard-dns.io`

    1. In Safari, choose **View** → **Reload and Show IP Address**

    1. Repeat for `adguard.com`

If you can't see the option to temporarily allow a website to see your IP address, update your device to the latest version of iOS, iPadOS, or macOS, then try again.

Now your device should be displayed correctly in the AdGuard DNS dashboard:

![Device is connected](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Mind that once you turn off Private Relay for a specific website, your network provider will also be able to see which site you're browsing.
