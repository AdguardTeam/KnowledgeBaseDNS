---
title: How to flush DNS cache
sidebar_position: 4
---

:::info

Here we explain how you can flush the DNS cache to resolve public DNS issues. You can use AdGuard Ad Blocker to set up DNS servers, including encrypted ones

Quick link: [Download AdGuard Ad Blocker](https://adguard.com/download.html?auto=true)

:::

Machine operating systems and internet browsers save and store DNS cache – information about previous DNS lookups. This speeds up website loading since the cache contains IP addresses of the requested domains: instead of referring to DNS servers, the system fetches responses to queries from the cache.

However, outdated DNS cache data stored on your computer or browser can cause problems displaying or loading websites. Even worse, the DNS cache may be corrupted by network attacks or viruses. In this case, unauthorized domain names or IP addresses will be inserted into it. And, for example, instead of going to google.com, your browser may redirect you to a malicious IP address or ad page.

To avoid the above problems, you need to clear the DNS cache: to delete all saved DNS lookup information so that the next time you send a lookup request, your computer receives updated data from DNS servers.

## How to flush DNS cache on Mac

To flush the DNS cache on your Mac, run the **Terminal** app and enter a specific command depending on the macOS version installed on your device:

* `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` on macOS v13 (Ventura), 12 (Monterey), 11 (Big Sur), 10.15 (Catalina)

* `sudo killall -HUP mDNSResponder` on macOS v10.14 (Mojave), 10.13 (High Sierra), 10.12 (Sierra), 10.08 (Mountain Lion), 10.07 (Lion)

* `sudo dscacheutil -flushcache` and `sudo killall -HUP mDNSResponder` on macOS v10.11 (El Capitan), 10.9 (Mavericks)

* `sudo discoveryutil mdnsflushcache` and `sudo discoveryutil udnsflushcaches` on macOS v10.10

* `sudo dscacheutil -flushcache` on macOS v10.6 (Snow Leopard), 10.5 (Leopard)

* `lookupd -flushcache` on macOS v10.4 (Tiger)

Then hit *Return* on your keyboard, enter the administrator password for the account and press *Return*. There is no notification once the process is finished. However, you can add another command, for example, to hear a notification when the DNS cache flush is complete:

`sudo killall -HUP mDNSResponder; say dns cleared successfully`

## How to flush DNS cache on Windows

Clearing the DNS cache on Windows is a simple thing to do. The procedure is the same for almost all Windows versions.

Open the Command Prompt as an administrator and enter the following command: `ipconfig /flushdns`. If the command succeeds, you'll receive the message *Successfully flushed the DNS Resolver Cache*.

## How to flush DNS cache on Linux

Different Linux distributions may use their own DNS service. Some distributions, such as Ubuntu, have no DNS service by default at all.

Before you flush the DNS cache, find out which service your distribution has and if it is enabled by default. Some of them are **NCSD** (Name Service Caching Daemon), **dnsmasq** and **BIND** (Berkeley Internet Name Domain).

### How to flush local NCSD DNS cache

Use this command on your Linux machine:

`sudo /etc/init.d/nscd restart`

Enter your password if required.

### How to flush local dnsmasq DNS сache

Use this command on your Linux machine:

`sudo /etc/init.d/dnsmasq restart`

Then enter your password if necessary. You will see the response when the service stops and starts again.

### How to flush local BIND DNS cache

If you use BIND for the DNS service, there are several commands you can run to clear the DNS cache. You may need to enter a password to complete the process.

`sudo /etc/init.d/named restart`

`sudo rndc restart`

`sudo rndc exec`

## How to flush DNS cache in Chrome-based browsers

In the browser address bar, enter the link **chrome://net-internals/#dns** and click the *Clear host cache* button.
