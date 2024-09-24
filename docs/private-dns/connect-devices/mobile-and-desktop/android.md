---
title: Android
sidebar_position: 2
---

To connect an Android device to AdGuard DNS, first add it to *Dashboard*:

1. Go to *Dashboard* and click *Connect new device*.
1. In the drop-down menu *Device type*, select Android.
1. Name the device.

    ![Connecting device *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/choose_android.png)

## Use AdGuard Ad Blocker (paid option)

The AdGuard app lets you use encrypted DNS, making it perfect for setting up AdGuard DNS on your Android device. You can choose from various encryption protocols. Along with DNS filtering, you also get an excellent ad blocker that works across your entire system.

1. Install [the AdGuard app](https://adguard.com/adguard-android/overview.html) on the device you want to connect to AdGuard DNS.
1. Open the app.
1. Tap the shield icon in the menu bar at the bottom of the screen.

    ![Shield icon *mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step3.png)

1. Tap *DNS protection*.

    ![DNS protection *mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step4.png)

1. Select *DNS server*.

    ![DNS server *mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step5.png)

1. Scroll down to *Custom servers* and tap *Add DNS server*.

    ![Add DNS server *mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step6.png)

1. Copy one of the following DNS addresses and paste it into the *Server adresses* field in the app. If you are not sure which one to use, select *DNS-over-HTTPS*.

    ![DoH *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_1.png)

    ![Custom DNS server *mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_2.png)

1. Tap *Add*.
1. The DNS server you’ve added will appear at the bottom of the *Custom servers* list. To select it, tap its name or the radio button next to it.

    ![Select DNS server *mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step_9.png)

1. Tap *Save and select*.

    ![Save and select *mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step10.png)

All done! Your device is successfully connected to AdGuard DNS.

## Use AdGuard VPN

Not all VPN services support encrypted DNS. However, our VPN does, so if you need both a VPN and private DNS, AdGuard VPN is your go-to option.

1. Install [the AdGuard VPN app](https://adguard-vpn.com/android/overview.html) on the device you want to connect to AdGuard DNS.
1. Open the app.
1. In the menu bar at the bottom of the screen, tap the gear icon.

    ![Gear icon *mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step3.png)

1. Open *App settings*.

    ![App settings *mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step4.png)

1. Select *DNS server*.

    ![DNS server *mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step5.png)

1. Scroll down and tap *Add a custom DNS server*.

    ![Add a DNS server *mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step6.png)

1. Copy one of the following DNS addresses and paste it into the *DNS servers adresses* field in the app. If you are not sure which one to use, select DNS-over-HTTPS.

    ![DoH *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_1.png)

    ![Custom DNS server *mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_2.png)

1. Tap *Save and select*.

    ![Add a DNS server *mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step8.png)

1. The DNS server you’ve added will appear at the bottom of the *Custom DNS servers* list.

All done! Your device is successfully connected to AdGuard DNS.

## Configure Private DNS manually

You can configure your DNS server in your device settings. Please note that Android devices only support DNS-over-TLS protocol.

1. Go to *Settings* → *Wi-Fi & Internet* (or *Network and Internet*, depending on your OS version).

    ![Settings *mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step1.png)

1. Select *Advanced* and tap *Private DNS*.

    ![Private DNS *mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step2.png)

1. Select the *Private DNS provider hostname* option and and enter the address of your personal server: `{Your_Device_ID}.d.adguard-dns.com`.
1. Tap *Save*.

    ![Private DNS *mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step4.png)

All done! Your device is successfully connected to AdGuard DNS.

## Configure plain DNS

If you prefer not to use extra software for DNS configuration, you can opt for unencrypted DNS. You have two choices: using linked IPs or dedicated IPs.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
