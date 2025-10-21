---
title: Known issues
sidebar_position: 1
---

After setting up AdGuard DNS, some users may find that it doesn’t work properly: they see a message that their device is not connected to AdGuard DNS and the requests from that device are not displayed in the Query log. This can happen because of certain hidden settings in your browser or operating system. Let’s look at several common issues and their solutions.

:::tip

You can check the status of AdGuard DNS on the [test page](https://adguard.com/test.html).

:::

## Chrome’s secure DNS settings

If you’re using Chrome and you don’t see any requests in your AdGuard DNS dashboard, this may be because Chrome uses its own DNS server. Here’s how you can disable it:

1. Open Chrome’s settings.
1. Navigate to *Privacy and security*.
1. Select *Security*.
1. Scroll down to *Use secure DNS*.
1. Disable the feature.

![Chrome’s Use secure DNS feature](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/secure-dns.png)

If you disable Chrome’s own DNS settings, the browser will use the DNS specified in your operating system, which should be AdGuard DNS if you’ve set it up correctly.

## iCloud Private Relay (Safari, macOS, and iOS)

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

For iOS 26.1 and later versions:

1. Go to *Settings*.
1. Scroll down and select *Apps*.
1. Go to *Safari* → *Advanced*.
1. Tap *Advanced Tracking and Fingerprinting Protection* and then *Off*.

![iOS 26.1 Tracking and Fingerprinting Protection *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/adv-tracking-browser-1.png)

For iOS versions prior to 26.1:

1. Open *Settings* and scroll down to *Safari*.
1. Tap *Advanced*.
1. Disable *Advanced Tracking and Fingerprinting Protection*.

![iOS Tracking and Fingerprinting Protection *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)

## Limit IP Address Tracking on iPhone

When the Limit IP Address Tracking feature is enabled on your iPhone, it can interfere with AdGuard DNS's ability to filter traffic. 

This happens because the feature routes DNS queries from Safari (and other apps that support it) through Apple's own private relay servers. This prevents AdGuard DNS from receiving your device's actual IP address and processing DNS requests, resulting in disabled filtering for ads and trackers.

To restore full DNS-based filtering, you will need to disable this feature for the Wi-Fi network you are currently using. Please follow the steps below:

1.  Open *Settings* on your iPhone.
1.  Tap *Wi-Fi*.
1.  Find and tap the name of the Wi-Fi network you are currently connected to.
1.  On the network's settings page, toggle off the switch for *Limit IP Address Tracking.*

![Limit IP Address Tracking *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-wifi-limit-ip-1.png)

DNS filtering will resume immediately after disabling this setting. Please note that you may need to repeat this process for other Wi-Fi networks you connect to in the future.
