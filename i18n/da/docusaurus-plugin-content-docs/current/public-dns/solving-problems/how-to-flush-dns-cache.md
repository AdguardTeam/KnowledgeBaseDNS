---
title: Sådan tømmes DNS-cache
sidebar_position: 1
---

:::info

Here we explain how you can flush the DNS cache to resolve public DNS issues. You can use AdGuard Ad Blocker to set up DNS servers, including encrypted ones

Hurtig-link: [Download AdGuard Ad Blocker](https://adguard.com/download.html?auto=true&utm_source=kb_dns)

:::

## Hvad er DNS-cache?

DNS cache stores the IP addresses of visited sites on the local computer so that they load faster next time. Instead of doing a long DNS lookup, the system answers the queries with DNS records from the temporary DNS cache.

The DNS cache contains so-called [resource records (RRs)](https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records), which are:

* **Ressourcedata (eller rdata)**;
* **Posttype**;
* **Postnavn**;
* **TTL (levetid)**;
* **Klasse**;
* **Ressourcedatalængde**.

## Hvornår man muligvis skal rydde cachen

**You've changed your DNS provider to AdGuard DNS.** If the user has changed their DNS, it may take some time to see the result because of the cache.

**You regularly get a 404 error.** For example, the website has been transferred to another server, and its IP address has changed. To make the browser open the website from the new IP address, you need to remove the cached IP from the DNS cache.

**You want to improve your privacy.**

## Sådan renses DNS-cache på forskellige OS'er

### iOS

There are different ways to clear the DNS cache on your iPad or iPhone.

The simplest way is to activate the Airplane mode (for example, in the Control Center or in the Settings app) and to deactivate it again. The DNS cache will be flushed.

Another option is to reset the network settings of your device in the Settings app. Open *General*, scroll down, find *Reset* and tap *Reset Network Settings*.

> Bemærk: Ved at gøre dette, mistes alle forbindelser til Wi-Fi routere samt øvrige specifikke netværksindstillinger, inkl. DNS-servertilpasninger. Disse vil skulle nulstilles manuelt.

### Android

The easiest way to clear your DNS cache on your Android device is to turn the Airplane mode on and off. You can enable/disable the Airplane Mode in the Quick Settings pane.

A hard reboot can also help flush the DNS cache for your device. In order to do that, press and hold the power button for at least 20 seconds. It will (usually) force your device to reboot manually and the DNS cache will be cleared.

Another option is to reset the network settings of your device in the Settings app. Open *Settings > System > Advanced > Reset options > Reset network settings* and tap *Reset Settings* to confirm.

> Bemærk: Ved at gøre dette, mistes alle forbindelser til Wi-Fi routere samt øvrige specifikke netværksindstillinger, inkl. DNS-servertilpasninger. Disse vil skulle nulstilles manuelt.

### macOS

To clear the DNS cache on macOS, open the Terminal (you can find it by using the Spotlight search — to do that, press Command+Space and type *Terminal*) and enter the following command:

`sudo killall -HUP mDNSResponder`

On macOS Big Sur 11.2.0 and macOS Monterey 12.0.0, you may also use this command:

`sudo dscacheutil -flushcache`

After that, enter your administrator password to complete the process.

### Windows

To flush DNS cache on your Windows device, do the following:

Open the Command Prompt as an administrator. You can find it in the Start Menu by typing *command prompt* or *cmd*. Then type `ipconfig/flushdns` and press Enter.

You will see the line *Successfully flushed the DNS Resolver Cache*. Done!

### Linux

Linux does not have OS-level DNS caching unless a caching service such as systemd-resolved, DNSMasq, BIND or Nscd is installed and running. The process of clearing the DNS cache depends on the Linux distribution and the caching service used.

For each distribution you need to start a terminal window. Press Ctrl+Alt+T on your keyboard and use the corresponding command to clear the DNS cache for the service your Linux system is running.

To find out which DNS resolver you're using, command `sudo lsof -i :53 -S`.

#### systemd-resolved

To clear the **systemd-resolved** DNS cache, type:

`sudo systemd-resolve --flush-caches`

On success, the command doesn’t return any message.

#### DNSMasq

To clear the **DNSMasq** cache, you need to restart it:

`sudo service dnsmasq restart`

#### NSCD

To clear the **NSCD** cache, you also need to restart the service:

`sudo service nscd restart`

#### BIND

To flush the **BIND** DNS cache, run the command:

`rndc flush`

Then you will need to reload BIND:

`rndc reload`

You will get the message that the server has been successfully reloaded.

## How to flush DNS cache in Chrome

This may be useful if you do not want restart a browser every time during work with the private AdGuard DNS or AdGuard Home. Settings 1-2 only need to be changed once.

1. Disable **secure DNS** in Chrome settings

```bash
chrome://settings/security
```

2. Disable **Async DNS resolver**

```bash
chrome://flags/#enable-async-dns
```

3. Press both buttons here

```bash
chrome://net-internals/#sockets
```

4. Press **Clear host cache**

```bash
chrome://net-internals/#dns
```
