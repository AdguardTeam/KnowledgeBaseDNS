---
title: Linux
sidebar_position: 6
---

To connect a Linux device to AdGuard DNS, first add it to *Dashboard*:

1. Go to *Dashboard* and click *Connect new device*.
1. In the drop-down menu *Device type*, select Linux.
1. Name the device.

    ![Connecting device *border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/choose_linux.png)

## Use AdGuard DNS Client

AdGuard DNS Client is a cross-platform console utility that allows you to use encrypted DNS protocols to access AdGuard DNS.

You can learn more about this in the [related article](/dns-client/overview/).

## Use AdGuard VPN CLI

You can set up Private AdGuard DNS using the AdGuard VPN CLI (Command Line Interface). To get started with AdGuard VPN CLI, you’ll need to use a terminal.

1. Install AdGuard VPN CLI by following [these instructions](https://adguard-vpn.com/kb/adguard-vpn-for-linux/installation/).
1. Access the [settings](https://adguard-vpn.com/kb/adguard-vpn-for-linux/settings/).
1. To set a specific DNS server, use the command: `adguardvpn-cli config set-dns <server_address>`

    where `<server_address>` is your private server’s address.

1. Activate the DNS settings by entering `adguardvpn-cli config set-system-dns on`

## Configure manually on Ubuntu (linked IP or dedicated IP required)

1. Click *System* → *Preferences* → *Network Connections*.
1. Select the *Wireless* tab, then choose the network you’re connected to.
1. Click *Edit* → *IPv4*.
1. Change the listed DNS addresses to the following addresses:
    - 94.140.14.49
    - 94.140.14.59
1. Turn off *Auto mode*.
1. Click *Apply*.
1. Go to *IPv6*.
1. Change the listed DNS addresses to the following addresses:
    - 2a10:50c0:0:0:0:0:ded:ff
    - 2a10:50c0:0:0:0:0:dad:ff
1. Turn off *Auto mode*.
1. Click *Apply*.
1. Link your IP address (or link your dedicated IP if you're using a Team subscription).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)

## Configure manually on Debian (linked IP or dedicated IP required)

1. Open the Terminal.
1. In the command line, type: `su`.
1. Enter your `admin` password.
1. In the command line, type: `nano /etc/resolv.conf`.
1. Change the listed DNS addresses to the following:

    IPv4: 94.140.14.49 and 94.140.14.59

    IPv6: 2a10:50c0:0:0:0:0:ded:ff and 2a10:50c0:0:0:0:0:dad:ff

1. Press *Ctrl + O* to save the document.
1. Press *Enter*.
1. Press *Ctrl + X* to save the document.
1. In the command line, type: `/etc/init.d/networking restart`.
1. Press *Enter*.
1. Close the Terminal.
1. Link your IP address (or link your dedicated IP if you're using a Team subscription).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)

## Use dnsmasq

1. Install dnsmasq using following commands:

    `sudo apt updatesudo`

    `apt install`

    `dnsmasqsudo nano /etc/dnsmasq.conf`

1. Use the following in dnsmasq.conf:

    `no-resolv`

    `bogus-priv`

    `strict-order`

    `server=94.140.14.49`

    `server=94.140.14.59`

    `port=5353`

    `add-cpe-id={Your_Device_ID}`

1. Restart dnsmasq service:

    `sudo service dnsmasq restart`

All done! Your device is successfully connected to AdGuard DNS.

> If you see a notification that you are not connected to AdGuard DNS, most likely the port on which dnsmasq is running is occupied by other services. Use [these instructions](https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#bindinuse) to solve the problem.

## Use plain DNS

If you prefer not to use extra software for DNS configuration, you can opt for unencrypted DNS. You have two choices: using linked IPs or dedicated IPs.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)