---
title: Android
sidebar_position: 2
---

To connect an Android device to AdGuard DNS, first add it to _Dashboard_:

1. _ダッシュボード_に移動し、「_新しいデバイスを接続_」をクリックします。
2. In the drop-down menu _Device type_, select Android.
3. Name the device.
   ![Connecting device \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/choose_android.png)

## Use AdGuard Ad Blocker (paid option)

The AdGuard app lets you use encrypted DNS, making it perfect for setting up AdGuard DNS on your Android device. You can choose from various encryption protocols. Along with DNS filtering, you also get an excellent ad blocker that works across your entire system.

1. Install [the AdGuard app](https://adguard.com/adguard-android/overview.html) on the device you want to connect to AdGuard DNS.
2. Open the app.
3. Tap the shield icon in the menu bar at the bottom of the screen.
   ![Shield icon \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step3.png)
4. Tap _DNS protection_.
   ![DNS protection \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step4.png)
5. Select _DNS server_.
   ![DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step5.png)
6. Scroll down to _Custom servers_ and tap _Add DNS server_.
   ![Add DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step6.png)
7. Copy one of the following DNS addresses and paste it into the _Server adresses_ field in the app. If you are not sure which one to use, select _DNS-over-HTTPS_.
   ![DoH \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_1.png)
   ![Custom DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_2.png)
8. Tap _Add_.
9. The DNS server you’ve added will appear at the bottom of the _Custom servers_ list. To select it, tap its name or the radio button next to it.
   ![Select DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step_9.png)
10. Tap _Save and select_.
    ![Save and select \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step10.png)

All done! Your device is successfully connected to AdGuard DNS.

## Use AdGuard VPN

Not all VPN services support encrypted DNS. However, our VPN does, so if you need both a VPN and a private DNS, AdGuard VPN is your go-to option.

1. Install [the AdGuard VPN app](https://adguard-vpn.com/android/overview.html) on the device you want to connect to AdGuard DNS.
2. Open the app.
3. In the menu bar at the bottom of the screen, tap the gear icon.
   ![Gear icon \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step3.png)
4. Open _App settings_.
   ![App settings \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step4.png)
5. Select _DNS server_.
   ![DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step5.png)
6. Scroll down and tap _Add a custom DNS server_.
   ![Add a DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step6.png)
7. Copy one of the following DNS addresses and paste it into the _DNS servers adresses_ field in the app. If you are not sure which one to use, select DNS-over-HTTPS.
   ![DoH \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_1.png)
   ![Custom DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_2.png)
8. Tap _Save and select_.
   ![Add a DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step8.png)
9. The DNS server you’ve added will appear at the bottom of the _Custom DNS servers_ list.

All done! Your device is successfully connected to AdGuard DNS.

## Configure Private DNS manually

You can configure your DNS server in your device settings. Please note that Android devices only support DNS-over-TLS protocol.

1. Go to _Settings_ → _Wi-Fi & Internet_ (or _Network and Internet_, depending on your OS version).
   ![Settings \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step1.png)
2. Select _Advanced_ and tap _Private DNS_.
   ![Private DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step2.png)
3. Select the _Private DNS provider hostname_ option and enter the address of your personal server: `{Your_Device_ID}.d.adguard-dns.com`.
4. Tap _Save_.
   ![Private DNS \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step4.png)
   All done! Your device is successfully connected to AdGuard DNS.

## Configure plain DNS

If you prefer not to use extra software for DNS configuration, you can opt for unencrypted DNS. You have two choices: using linked IPs or dedicated IPs.

- [専用IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [リンクされたIP](/private-dns/connect-devices/other-options/linked-ip.md)
