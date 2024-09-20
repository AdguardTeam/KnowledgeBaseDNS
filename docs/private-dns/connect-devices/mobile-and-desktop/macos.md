---
title: macOS
sidebar_position: 4
---

To connect a macOS device to AdGuard DNS, first add it to *Dashboard*:

1. Go to *Dashboard* and click *Connect new device*.
1. In the drop-down menu *Device type*, select Mac.
1. Name the device.

    ![Connecting_device *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/choose_mac.png)

## Use AdGuard Ad Blocker (paid option)

The AdGuard app lets you use encrypted DNS, making it perfect for setting up AdGuard DNS on your macOS device. You can choose from various encryption protocols. Along with DNS filtering, you also get an excellent ad blocker that works across your entire system.

1. [Install the app](https://adguard.com/adguard-mac/overview.html) on the device you want to connect to AdGuard DNS.
1. Open the app.
1. Click the icon in the top right corner.

    ![Protection icon *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step3.png)

1. Select *Preferences...*.

    ![Preferences *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step4.png)

1. Click the *DNS* tab from the top row of icons.

    ![DNS tab *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step5.png)

1. Enable DNS protection by ticking the box at the top.

    ![DNS protection *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step6.png)

1. Click the *+* button in the bottom left corner.

    ![Click + *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step7.png)

1. Copy one of the following DNS addresses and paste it into the *DNS servers* field in the app. If you are not sure which one to prefer, select *DNS-over-HTTPS*.

    ![DoH server *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_1.png)

    ![Create server *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_2.png)

1. Click *Save and Choose*.

    ![Save and Choose *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step9.png)

1. Your newly created server should appear at the bottom of the list.

    ![Providers *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step10.png)

All done! Your device is successfully connected to AdGuard DNS.

## Use AdGuard VPN

Not all VPN services support encrypted DNS. However, our VPN does, so if you need both a VPN and private DNS, AdGuard VPN is your go-to option.

1. Install the [AdGuard VPN app](https://adguard-vpn.com/mac/overview.html) on the device you want to connect to AdGuard DNS.
1. Open the AdGuard VPN app.
1. Open *Settings* → *App settings* → *DNS servers* → *Add Custom Server*.

    ![Add custom server *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step3.png)

1. Copy one of the following DNS addresses and paste it into the *DNS server addresses* text field. If you are not sure which one to prefer, select DNS-over-HTTPS.

    ![DNS servers *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step4.png)

1. Click *Save and select*.
1. The DNS server you’ve added will appear at the bottom of the *Custom DNS servers* list.

    ![Custom DNS servers *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step6.png)

All done! Your device is successfully connected to AdGuard DNS.

## se a configuration profile

A macOS device profile, also referred to as a "configuration profile" by Apple, is a certificate-signed XML file that you can manually install on your device or deploy using an MDM solution. It also allows you to configure Private AdGuard DNS on your device.

> If you are using a VPN, the configuration profile will be ignored.

1. On the device that you want to connect to AdGuard DNS, download the configuration profile.
1. Choose Apple menu → *System Settings*, click *Privacy & Security* in the sidebar, then click *Profiles* on the right (you may need to scroll down).

    ![Profile Downloaded *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step2.png)

1. In the *Downloaded* section, double-click the profile.

    ![Downloaded *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step3.png)

1. Review the profile contents and click *Install*.

    ![Install *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step4.png)

1. Enter the admin password and click *OK*.

All done! Your device is successfully connected to AdGuard DNS.

## Configure plain DNS

If you prefer not to use extra software for DNS configuration, you can opt for unencrypted DNS. You have two choices: using linked IPs or dedicated IPs.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
