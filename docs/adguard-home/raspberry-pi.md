---
title: Raspberry Pi
sidebar_position: 12
---

You can install AdGuard Home on your [Raspberry Pi][pi] and use it to filter ads and save traffic. Once it is installed, you can use your AdGuard Home on any machine connected to the same local network.

[pi]: https://www.raspberrypi.org

## Prepare your Pi {#prepare}

You’ll need a Raspberry Pi with network access and [SSH enabled][ssh]. Connect it to a display and a keyboard, boot it, and write down the IP address that has been assigned to your Pi:

```sh
hostname -I | xargs -n 1
```

If there are several IP addresses, write down the first one. Switch back to your main computer, but keep your Pi running, and launch an ssh client. On Windows, you can use [PuTTY][putty], while on Linux, macOS, and other Unix-like OSes, you can just use your preferred terminal emulator.

Type:

```sh
ssh pi@192.168.10.20
```

(where `192.168.10.20` is the IP you’ve written down) and then type your Pi’s password (which is `raspberry` unless you’ve changed it already). Once you’re done, you will be greeted by the command line interface. Now you’re ready to install your own AdGuard Home!

[ssh]:   https://www.raspberrypi.com/documentation/computers/remote-access.html
[putty]: https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html

## Install AdGuard Home {#install}

Go to [AdGuard Home page][inst] and download binaries for Raspberry Pi:

```sh
cd
wget 'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_armv6.tar.gz'
tar -f AdGuardHome_linux_armv6.tar.gz -x -v
```

(Replace `armv6` with the ARM version that is best supported by your Pi.)

That command unpacks the necessary data into a new directory called `AdGuardHome`.

:::note

Then install AdGuard Home as a [service].

:::

[service]: https://adguard-dns.io/kb/adguard-home/getting-started/#service
[inst]:    https://github.com/AdguardTeam/AdGuardHome

## Check the filtering {#check}

You can verify that it’s working properly by running this on your Pi:

```sh
host doubleclick.net 127.0.0.1
```

If everything works correctly, you will get this output:

```sh
Using domain server:
Name: 127.0.0.1
Address: 127.0.0.1#53
Aliases:

Host doubleclick.net not found: 3(NXDOMAIN)
```

## Configure your devices {#devices}

Once it is confirmed that AdGuard Home works on our Raspberry Pi, you can use it on other computers in your network by changing their system DNS settings to use the Pi’s IP address.

Go to the *Setup Guide* page in the web interface and follow the instructions.
