---
title: iOS
sidebar_position: 3
---

To connect an iOS device to AdGuard DNS, first add it to _Dashboard_:

1. _ダッシュボード_に移動し、「_新しいデバイスを接続_」をクリックします。
2. In the drop-down menu _Device type_, select iOS.
3. Name the device.
   ![Connecting device \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/choose_ios.png)

## Use AdGuard Ad Blocker (paid option)

The AdGuard app lets you use encrypted DNS, making it perfect for setting up AdGuard DNS on your iOS device. You can choose from various encryption protocols. Along with DNS filtering, you also get an excellent ad blocker that works across your entire system.

1. Install the [AdGuard app](https://adguard.com/adguard-ios/overview.html) on the device you want to connect to AdGuard DNS.
2. Open the AdGuard app.
3. Select the _Protection_ tab in the bottom menu.
   ![Shield icon \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step3.jpg)
4. Make sure that _DNS protection_ is toggled on and then tap it. Choose _DNS server_.
   ![DNS protection \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4.jpg)
   ![DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4_2.jpg)
5. Scroll down to the bottom and tap _Add a custom DNS server_.
   ![Add DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step5.jpg)
6. Copy one of the following DNS addresses and paste it into the _DNS server adress_ field in the app. If you are not sure which one to prefer, choose DNS-over-HTTPS.
   ![Copy server address \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_1.png)
   ![Paste server address \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_2.jpg)
7. Tap _Save And Select_.
   ![Save And Select \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step7.jpg)
8. Your freshly created server should appear at the bottom of the list.
   ![Custom server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step8.jpg)

All done! Your device is successfully connected to AdGuard DNS.

## Use AdGuard VPN

Not all VPN services support encrypted DNS. However, our VPN does, so if you need both a VPN and a private DNS, AdGuard VPN is your go-to option.

1. Install the [AdGuard VPN app](https://adguard-vpn.com/ios/overview.html) on the device you want to connect to AdGuard DNS.
2. Open the AdGuard VPN app.
3. Tap the gear icon in the bottom right corner of the screen.
   ![Gear icon \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step3.jpg)
4. Open _General_.
   ![General settings \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step4.jpg)
5. Select _DNS server_.
   ![DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step5.png)
6. Scroll down to _Add custom DNS server_.
   ![Add server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step6.png)
7. Copy one of the following DNS addresses and paste it into the _DNS server addresses_ text field. If you are not sure which one to prefer, select _DNS-over-HTTPS_.
   ![DoH server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_1.png)
   ![Custom DNS server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_2.jpg)
8. Tap _Save_.
   ![Save server \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step8.jpg)
9. Your freshly created server should appear under _Custom DNS servers_.
   ![Custom servers \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step9.png)

All done! Your device is successfully connected to AdGuard DNS.

## Use a configuration profile

An iOS device profile, also referred to as a "configuration profile" by Apple, is a certificate-signed XML file that you can manually install on your iOS device or deploy using an MDM solution. It also allows you to configure Private AdGuard DNS on your device.

:::note Important

If you are using a VPN, the configuration profile will be ignored.

:::

1. [Download](https://dns.website.agrd.dev/public_api/v1/settings/e7b499cc-94c0-4448-8404-88d11f4f51a2/doh_mobileconfig.xml) profile.
2. Open settings.
3. Tap _Profile Downloaded_.
   ![Profile Downloaded \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step3.png)
4. Tap _Install_ and follow the onscreen instructions.
   ![Install \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step4.png)

## Configure plain DNS

If you prefer not to use extra software to configure DNS, you can opt for unencrypted DNS. There are two options: using linked IPs or dedicated IPs.

- [専用IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [リンクされたIP](/private-dns/connect-devices/other-options/linked-ip.md)
