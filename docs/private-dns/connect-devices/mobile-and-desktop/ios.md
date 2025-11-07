---
title: iOS
sidebar_position: 3
---

To connect an iOS device to AdGuard DNS, first add it to *Dashboard*:

1. Go to *Dashboard* and click *Connect new device*.
1. In the drop-down menu *Device type*, select iOS.
1. Name the device.
    ![Connecting device *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/choose_ios.png)

## Use the AdGuard DNS app

The AdGuard DNS app is designed for basic DNS-level protection —  blocking ads, trackers, and malicious websites. If you don’t need the full range of features offered by AdGuard Ad Blocker or AdGuard VPN, this may be the best choice for you.  

To set up your device:

1. Download the AdGuard DNS app.
1. Go to your AdGuard DNS dashboard at [adguard-dns.io/dashboard](https://adguard-dns.io/dashboard/).
1. Click *Add new device* on the *Home* tab.
1. Select your device type and give it a name, then click *Next*.
1. Expand the *Use AdGuard Apps* section.

![Use AdGuard Apps *border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/UseAdGuardApps.png)

1. Under *Use the AdGuard DNS app*, choose one of these setup methods:

    - Click *Configure* if you’re on the device you want to protect.
    - Scan the QR code with the device you want to protect.
    - Copy your Setup ID and paste it directly into the app.

1. Tap *Continue* → *Connect*.

![Connect *mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/Connect.png)

1. Your device is successfully connected to AdGuard DNS. All you have to do is tap *Enable* to start the protection.

![Enable *mobile_ *mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/Protection.png)

1. When using a VPN-based protocol, you still need to allow creating a VPN profile before being fully protected. To do this, go to the app’s home page, click *Enable*, and follow the in-app instructions. 

1. If you prefer to use native DNS, go to *Settings* → *General* → *VPN & Device Management* → *DNS* and enable AdGuard DNS.

All done! Your device is successfully connected to AdGuard DNS.

## Use AdGuard Ad Blocker (paid option)

The AdGuard app lets you use encrypted DNS, making it perfect for setting up AdGuard DNS on your iOS device. You can choose from various encryption protocols. Along with DNS filtering, you also get an excellent ad blocker that works across your entire system.

1. Install the [AdGuard app](https://adguard.com/adguard-ios/overview.html) on the device you want to connect to AdGuard DNS.
1. Open the AdGuard app.
1. Select the *Protection* tab in the bottom menu.
    ![Shield icon *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step3.jpg)
1. Make sure that *DNS protection* is toggled on and then tap it. Choose *DNS server*.
    ![DNS protection *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4.jpg)
    ![DNS server *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4_2.jpg)
1. Scroll down to the bottom and tap *Add a custom DNS server*.
    ![Add DNS server *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step5.jpg)
1. Copy one of the following DNS addresses and paste it into the *DNS server adress* field in the app. If you are not sure which one to prefer, choose DNS-over-HTTPS.
    ![Copy server address *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_1.png)
    ![Paste server address *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_2.jpg)
1. Tap *Save And Select*.
    ![Save And Select *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step7.jpg)
1. Your freshly created server should appear at the bottom of the list.
    ![Custom server *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step8.jpg)

All done! Your device is successfully connected to AdGuard DNS.

## Use AdGuard VPN

Not all VPN services support encrypted DNS. However, our VPN does, so if you need both a VPN and a private DNS, AdGuard VPN is your go-to option.

1. Install the [AdGuard VPN app](https://adguard-vpn.com/ios/overview.html) on the device you want to connect to AdGuard DNS.
1. Open the AdGuard VPN app.
1. Tap the gear icon in the bottom right corner of the screen.
    ![Gear icon *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step3.jpg)
1. Open *General*.
    ![General settings *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step4.jpg)
1. Select *DNS server*.
    ![DNS server *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step5.png)
1. Scroll down to *Add custom DNS server*.
    ![Add server *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step6.png)
1. Copy one of the following DNS addresses and paste it into the *DNS server addresses* text field. If you are not sure which one to prefer, select *DNS-over-HTTPS*.
    ![DoH server *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_1.png)
    ![Custom DNS server *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_2.jpg)
1. Tap *Save*.
    ![Save server *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step8.jpg)
1. Your freshly created server should appear under *Custom DNS servers*.
    ![Custom servers *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step9.png)

All done! Your device is successfully connected to AdGuard DNS.

## Use a configuration profile

An iOS device profile, also referred to as a configuration profile by Apple, is a certificate-signed XML file that you can manually install on your iOS device or deploy using an MDM solution. It also allows you to configure Private AdGuard DNS on your device.

:::note Important

If you are using a VPN, the configuration profile will be ignored.

:::

1. Download the profile.
1. Open settings.
1. Tap *Profile Downloaded*.
    ![Profile Downloaded *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step3.png)
1. Tap *Install* and follow the onscreen instructions.
    ![Install *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step4.png)

## Configure plain DNS

If you prefer not to use extra software to configure DNS, you can opt for unencrypted DNS. There are two options: using linked IPs or dedicated IPs.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
