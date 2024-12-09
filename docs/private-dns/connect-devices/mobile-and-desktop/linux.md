---
title: Linux
sidebar_position: 6
---

To connect a Linux device to AdGuard DNS, first add it to *Dashboard*:

1. Go to *Dashboard* and click *Connect new device*.
1. In the drop-down menu *Device type*, select Linux.
1. Name the device.
    ![Connecting device *mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/choose_linux.png)

## Use AdGuard DNS Client

AdGuard DNS Client is a cross-platform console utility that allows you to use encrypted DNS protocols to access AdGuard DNS.

You can learn more about this in the [related article](/dns-client/overview/).

## Use AdGuard VPN CLI

You can set up Private AdGuard DNS using the AdGuard VPN CLI (command-line interface). To get started with AdGuard VPN CLI, you’ll need to use Terminal.

1. Install AdGuard VPN CLI by following [these instructions](https://adguard-vpn.com/kb/adguard-vpn-for-linux/installation/).
1. Go to [Settings](https://adguard-vpn.com/kb/adguard-vpn-for-linux/settings/).
1. To set a specific DNS server, use the command: `adguardvpn-cli config set-dns <server_address>`, where `<server_address>` is your private server’s address.
1. Activate the DNS settings by entering `adguardvpn-cli config set-system-dns on`.

## Configure manually on Ubuntu (linked IP or dedicated IP required)

1. Click *System* → *Preferences* → *Network Connections*.
1. Select the *Wireless* tab, then choose the network you’re connected to.
1. Click *Edit* → *IPv4*.
1. Change the listed DNS addresses to the following addresses:
    - `94.140.14.49`
    - `94.140.14.59`
1. Turn off *Auto mode*.
1. Click *Apply*.
1. Go to *IPv6*.
1. Change the listed DNS addresses to the following addresses:
    - `2a10:50c0:0:0:0:0:ded:ff`
    - `2a10:50c0:0:0:0:0:dad:ff`
1. Turn off *Auto mode*.
1. Click *Apply*.
1. Link your IP address (or your dedicated IP if you have a Team subscription):
    - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)

## Configure manually on Debian (linked IP or dedicated IP required)

1. Open the Terminal.
1. In the command line, type: `su`.
1. Enter your `admin` password.
1. In the command line, type: `nano /etc/resolv.conf`.
1. Change the listed DNS addresses to the following:
    - IPv4: `94.140.14.49 and 94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff and 2a10:50c0:0:0:0:0:dad:ff`
1. Press *Ctrl + O* to save the document.
1. Press *Enter*.
1. Press *Ctrl + X* to save the document.
1. In the command line, type: `/etc/init.d/networking restart`.
1. Press *Enter*.
1. Close the Terminal.
1. Link your IP address (or your dedicated IP if you have a Team subscription):
    - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)

## Use dnsmasq

1. Install dnsmasq using the following commands:

    `sudo apt updatesudo`

    `apt install`

    `dnsmasqsudo nano /etc/dnsmasq.conf`

1. Use the following commands in dnsmasq.conf:

    `no-resolv`

    `bogus-priv`

    `strict-order`

    `server=94.140.14.49`

    `server=94.140.14.59`

    `port=5353`

    `add-cpe-id={Your_Device_ID}`

1. Restart the dnsmasq service:

    `sudo service dnsmasq restart`

All done! Your device is successfully connected to AdGuard DNS.

:::note Important

If you see a notification that you are not connected to AdGuard DNS, most likely the port on which dnsmasq is running is occupied by other services. Use [these instructions](https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#bindinuse) to solve the problem.

:::

## Use EDNS (Extended DNS)

EDNS extends the DNS protocol, enabling larger UDP packets to carry additional data. In AdGuard DNS, it allows passing DeviceID in plain DNS using an extra parameter.

DeviceID, an eight-digit hexadecimal identifier (e.g., `1a2b3c4d`), helps link DNS requests to specific devices. For encrypted DNS, this ID is part of the domain (e.g., `1a2b3c4d.d.adguard-dns.com`). For unencrypted DNS, EDNS is required to transfer this identifier.

AdGuard DNS uses EDNS to retrieve DeviceID by looking for option number `65074`. If such an option exists, it will read DeviceID from there. For this, you can use the `dig` command on the terminal:

```sh
dig @94.140.14.49 'www.example.com' A IN +ednsopt=65074:3031323334353637
```

Here, `65074` is the option ID, and `3031323334353637` is its value in hex format (DeviceID: `01234567`).

All done! DeviceID should be displayed.

:::note

The `dig` command is merely an example, you can use any DNS software with an ability to add EDNS options to perform this action.

:::

## Use plain DNS

If you prefer not to use extra software for DNS configuration, you can opt for unencrypted DNS. You have two choices: using linked IPs or dedicated IPs:

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
