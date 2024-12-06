---
title: macOS
sidebar_position: 4
---

To connect a macOS device to AdGuard DNS, first add it to _Dashboard_:

1. _ダッシュボード_に移動し、「_新しいデバイスを接続_」をクリックします。
2. In the drop-down menu _Device type_, select Mac.
3. Name the device.
   ![Connecting\_device \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/choose_mac.png)

## Use AdGuard Ad Blocker (paid option)

The AdGuard app lets you use encrypted DNS, making it perfect for setting up AdGuard DNS on your macOS device. You can choose from various encryption protocols. Along with DNS filtering, you also get an excellent ad blocker that works across your entire system.

1. [Install the app](https://adguard.com/adguard-mac/overview.html) on the device you want to connect to AdGuard DNS.
2. Open the app.
3. Click the icon in the top right corner.
   ![Protection icon \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step3.png)
4. Select _Preferences..._.
   ![Preferences \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step4.png)
5. Click the _DNS_ tab from the top row of icons.
   ![DNS tab \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step5.png)
6. Enable DNS protection by ticking the box at the top.
   ![DNS protection \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step6.png)
7. Click _+_ in the bottom left corner.
   ![Click + \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step7.png)
8. Copy one of the following DNS addresses and paste it into the _DNS servers_ field in the app. If you are not sure which one to prefer, select _DNS-over-HTTPS_.
   ![DoH server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_1.png)
   ![Create server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_2.png)
9. Click _Save and Choose_.
   ![Save and Choose \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step9.png)
10. Your newly created server should appear at the bottom of the list.
    ![Providers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step10.png)

All done! Your device is successfully connected to AdGuard DNS.

## Use AdGuard VPN

Not all VPN services support encrypted DNS. However, our VPN does, so if you need both a VPN and a private DNS, AdGuard VPN is your go-to option.

1. Install the [AdGuard VPN app](https://adguard-vpn.com/mac/overview.html) on the device you want to connect to AdGuard DNS.
2. Open the AdGuard VPN app.
3. Open _Settings_ → _App settings_ → _DNS servers_ → _Add Custom Server_.
   ![Add custom server \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step3.png)
4. Copy one of the following DNS addresses and paste it into the _DNS server addresses_ text field. If you are not sure which one to prefer, select DNS-over-HTTPS.
   ![DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step4.png)
5. Click _Save and select_.
6. The DNS server you’ve added will appear at the bottom of the _Custom DNS servers_ list.
   ![Custom DNS servers \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step6.png)

All done! Your device is successfully connected to AdGuard DNS.

## Use a configuration profile

A macOS device profile, also referred to as a "configuration profile" by Apple, is a certificate-signed XML file that you can manually install on your device or deploy using an MDM solution. It also allows you to configure Private AdGuard DNS on your device.

:::note Important

If you are using a VPN, the configuration profile will be ignored.

:::

1. On the device that you want to connect to AdGuard DNS, download the configuration profile.
2. Choose Apple menu → _System Settings_, click _Privacy & Security_ in the sidebar, then click _Profiles_ on the right (you may need to scroll down).
   ![Profile Downloaded \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step2.png)
3. In the _Downloaded_ section, double-click the profile.
   ![Downloaded \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step3.png)
4. Review the profile contents and click _Install_.
   ![Install \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step4.png)
5. Enter the admin password and click _OK_.

All done! Your device is successfully connected to AdGuard DNS.

## Configure plain DNS

If you prefer not to use extra software for DNS configuration, you can opt for unencrypted DNS. You have two choices: using linked IPs or dedicated IPs.

- [専用IP](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [リンクされたIP](/private-dns/connect-devices/other-options/linked-ip.md)
