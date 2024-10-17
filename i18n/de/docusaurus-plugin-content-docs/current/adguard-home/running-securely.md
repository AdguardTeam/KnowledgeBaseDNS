---
title: Setting up AdGuard Home securely
sidebar_position: 4
---

This page contains a list of additional recommendations to help ensure the security of your AdGuard Home.

## Choosing server addresses

The first time you start AdGuard Home, you will be asked which interface it should use to serve plain DNS. The most secure and convenient option depends on how you want to run AdGuard Home. You can change the address(es) later, by stopping your AdGuard Home, editing the `dns.bind_hosts` field in the configuration file, and restarting AdGuard Home.

:::note

The UI currently only allows you to select one interface, but you can actually select multiple addresses through the configuration file. We will be improving the UI in future releases.

:::

If you intend to run AdGuard Home on **your computer only,** select the loopback device (also known as “localhost”). It is usually called `localhost`, `lo`, or something similar and has the address `127.0.0.1`.

If you plan to run AdGuard Home on a **router within a small isolated network**, select the locally-served interface. The names can vary, but they usually contain the words `wlan` or `wlp` and have an address starting with `192.168.`. You should probably also add the loopback address as well, if you want software on the router itself to use AdGuard Home too.

If you intend to run AdGuard Home on a **publicly accessible server,** you’ll probably want to select the _All interfaces_ option. Note that this may expose your server to DDoS attacks, so please read the sections on access settings and rate limiting below.

## Zugriffsrechte

:::note

If your AdGuard Home is not accessible from the outside, you can skip this section.

:::

At the bottom of the _Settings_ → _DNS settings_ page you will find the _Access settings_ section. These settings allow you to either ban clients that are known to abuse your AdGuard Home instance or to enable the Allowlist mode. The Allowlist mode is recommended for public instances where the number of clients is known and all of the clients are able to use secure DNS.

To enable the Allowlist mode, enter [ClientIDs][cid] (recommended) or IP addresses for allowed clients in the _Allowed clients_ field.

[cid]: https://github.com/AdguardTeam/AdGuardHome/wiki/Clients#clientid

## Disabling plain DNS

:::note

If your AdGuard Home is not accessible from the outside, you can skip this section.

:::

If all clients using your AdGuard Home are able to use encrypted protocols, it is a good idea to disable plain DNS or make it inaccessible from the outside.

If you want to completely disable plain DNS serving, you can do so on the _Settings_ → _Encryption settings_ page.

If you want to restrict plain DNS to internal use only, stop your AdGuard Home, edit the `dns.bind_hosts` field in the configuration file to contain only the loopback address(es), and restart AdGuard Home.

## Plain-DNS ratelimiting

:::note

If your AdGuard Home is not accessible from the outside, you can skip this section.

:::

The default plain-DNS ratelimit of 20 should generally be sufficient, but if you have a list of known clients, you can add them to the allowlist and set a stricter ratelimit for other clients.

## OS service concerns

In order to prevent privilege escalations through binary planting, it is important that the directory where AdGuard Home is installed to has proper ownership and permissions set.

We thank Go Compile for assistance in writing this section.

### Unix (FreeBSD, Linux, macOS, OpenBSD)

AdGuard Home working directory, which is by default `/Applications/AdGuardHome` on macOS and `/opt/AdGuardHome` on other Unix systems, as well as the binary itself should generally have `root:root` ownership and not be writeable by anyone but `root`. You can check this with the following command, replacing `/opt/AdGuardHome` with your directory and `/opt/AdGuardHome/AdGuardHome` with your binary:

```sh
ls -d -l /opt/AdGuardHome
ls -l /opt/AdGuardHome/AdGuardHome
```

A reasonably secure output should look something like this:

```none
drwxr-xr-x 4 root root 4096 Jan 1 12:00 /opt/AdGuardHome/
-rwxr-xr-x 1 root root 29409280 Jan 1 12:00 /opt/AdGuardHome/AdGuardHome
```

Note the lack of write permission for anyone but `root` as well as `root` ownership. If the permissions and/or ownership are not correct, run the following commands under `root`:

```sh
chmod 755 /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
chown root:root /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
```

### Windows

The principle is the same on Windows: make sure that the AdGuard Home directory, typically `C:\Program Files\AdGuardHome`, and the `AdGuardHome.exe` binary have the permissions that would only allow regular users to read and execute/list them.

In the future we plan to release Windows builds as MSI installer files that make sure that this is performed automatically.
