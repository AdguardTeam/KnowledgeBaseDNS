---
title: Getting started
sidebar_position: 2
---

## Installation {#installation}

### Official releases

Download the archive with the binary file for your operating system from the [latest stable release page][releases]. The full list of supported platforms as well as links to beta and edge (unstable) releases can be found on [our platforms page][platforms].

To install AdGuard Home as a service, extract the archive, enter the `AdGuardHome` directory, and run:

```sh
./AdGuardHome -s install
```

#### Notes

- Users of **Fedora Linux** and its derivatives: install AdGuard Home in the `/usr/local/bin` directory. Failure to do so may cause issues with SELinux and permissions. See [issue 765] and [issue 3281].

- Users of **macOS 10.15 Catalina** and newer should place the AdGuard Home working directory inside the `/Applications` directory.

### Docker and Snap

We also provide an [official AdGuard Home docker image][docker] and an [official Snap Store package][snap] for experienced users.

### Other

Some other unofficial options include:

- [Home Assistant add-on][has] maintained by [@frenck](https://github.com/frenck).

- [OpenWrt LUCI app][luci] maintained by [@kongfl888](https://github.com/kongfl888).

- [Arch Linux][arch], [Arch Linux ARM][archarm], and other Arch-based OSs, may build via the [`adguardhome` package][aghaur] in the [AUR][aur] maintained by [@graysky2](https://github.com/graysky2).

- [Cloudron app][cloudron] maintained by [@gramakri](https://github.com/gramakri).

[aghaur]: https://aur.archlinux.org/packages/adguardhome/
[arch]: https://www.archlinux.org/
[archarm]: https://archlinuxarm.org/
[aur]: https://wiki.archlinux.org/index.php/Arch_User_Repository
[cloudron]: https://git.cloudron.io/cloudron/adguard-home-app
[docker]: https://hub.docker.com/r/adguard/adguardhome
[has]: https://github.com/hassio-addons/addon-adguard-home
[issue 3281]: https://github.com/AdguardTeam/AdGuardHome/issues/3281
[issue 765]: https://github.com/AdguardTeam/AdGuardHome/issues/765#issuecomment-752262353
[luci]: https://github.com/kongfl888/luci-app-adguardhome
[platforms]: https://github.com/AdguardTeam/AdGuardHome/wiki/Platforms
[releases]: https://github.com/AdguardTeam/AdGuardHome/releases/latest
[snap]: https://snapcraft.io/adguard-home

## First start {#first-time}

First of all, check your firewall settings. To install and use AdGuard Home, the following ports and protocols must be available:

- 3000/TCP for the initial installation;
- 80/TCP for the web interface;
- 53/UDP for the DNS server.

You may need to open additional ports for protocols other than plain DNS, such as DNS-over-HTTPS.

DNS servers bind to port 53, which requires superuser privileges most of the time, [see below](#running-without-superuser). Therefore, on Unix systems, you will need to run it with `sudo` or `doas` in terminal:

```sh
sudo ./AdGuardHome
```

On Windows, run `cmd.exe` or PowerShell with admin privileges and run `AdGuardHome.exe` from there.

When you run AdGuard Home for the first time, it starts listening on `0.0.0.0:3000` and prompts you to open it in your browser:

```none
AdGuard Home is available at the following addresses:
go to http://127.0.0.1:3000
go to http://[::1]:3000
[…]
```

There you will go through the initial configuration wizard.

![AdGuard Home network interface selection screen](https://cdn.adtidy.org/content/kb/dns/adguard-home/install2.png)

![AdGuard Home user creation screen](https://cdn.adtidy.org/content/kb/dns/adguard-home/install3.png)

See [our article on running AdGuard Home securely](running-securely.md) for guidance on how to select the initial configuration that fits you best.

## Running as a service {#service}

The next step would be to register AdGuard Home as a system service (aka daemon). To install AdGuard Home as a service, run:

```sh
sudo ./AdGuardHome -s install
```

On Windows, run `cmd.exe` with admin privileges and run `AdGuardHome.exe -s install` to register a Windows service.

Here are the other commands you might need to control the service:

- `AdGuardHome -s uninstall`: Uninstall the AdGuard Home service.
- `AdGuardHome -s start`: Start the service.
- `AdGuardHome -s stop`: Stop the service.
- `AdGuardHome -s restart`: Restart the service.
- `AdGuardHome -s status`: Show the current service status.

### Logs

By default, the logs are written to `stderr` when you run AdGuard Home in a terminal. If you run it as a service, the log output depends on the platform:

- On macOS, the log is written to `/var/log/AdGuardHome.*.log` files.

- On other Unixes, the log is written to `syslog` or `journald`.

- On Windows, the log is written to the Windows event log.

You can change this behavior in the AdGuard Home [configuration file][conf].

[conf]: https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration

## Updating {#update}

![An example of an update notification](https://cdn.adtidy.org/content/kb/dns/adguard-home/updatenotification.png)

When a new version is released, AdGuard Home’s UI shows a notification message and the _Update now_ button. Click this button, and AdGuard Home will be automatically updated to the latest version. Your current AdGuard Home executable file is saved inside the `backup` directory along with the current configuration file, so you can revert the changes, if necessary.

### Manual update {#manual-update}

In case the button isn’t shown or an automatic update has failed, you can update manually. We have a [detailed guide on manual updates][mupd], but in short:

1. Download the new AdGuard Home package.

2. Extract it to a temporary directory.

3. Replace the old AdGuard Home executable file with the new one.

4. Restart AdGuard Home.

[mupd]: https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#manual-update

### Docker, Home Assistant, and Snapcraft updates

Auto-updates for Docker, Hass.io/Home Assistant, and Snapcraft installations are disabled. Update the image instead.

### Command-line update

To update AdGuard Home package without the need to use Web API run:

```sh
./AdGuardHome --update
```

## Configuring devices {#configure-devices}

### Router

This setup will automatically cover all devices connected to your home router, and you won’t need to configure each of them manually.

1. Open the preferences for your router. Usually, you can access it from your browser via a URL, such as <http://192.168.0.1/> or <http://192.168.1.1/>. You may be prompted to enter a password. If you don’t remember it, you can often reset the password by pressing a button on the router itself, but be aware that if this procedure is chosen, you will probably lose the entire router configuration. If your router requires an app to set it up, please install the app on your phone or PC and use it to access the router’s settings.

2. Find the DHCP/DNS settings. Look for the DNS letters next to a field that allows two or three sets of numbers, each divided into four groups of one to three digits.

3. Enter your AdGuard Home server addresses there.

4. On some router types, a custom DNS server cannot be set up. In that case, setting up AdGuard Home as a DHCP server may help. Otherwise, you should consult your router manual to learn how to customize DNS servers on your specific router model.

### Windows

1. Open _Control Panel_ from the Start menu or Windows search.

2. Go to _Network and Internet_ and then to _Network and Sharing Center_.

3. On the left side of the screen, find the _Change adapter settings_ button and click it.

4. Select your active connection, right-click it and choose _Properties_.

5. Find _Internet Protocol Version 4 (TCP/IPv4)_ (or, for IPv6, _Internet Protocol Version 6 (TCP/IPv6)_) in the list, select it, and then click _Properties_ again.

6. Choose _Use the following DNS server addresses_ and enter your AdGuard Home server addresses.

### macOS

1. Click the Apple icon and go to _System Preferences_.

2. Click _Network_.

3. Select the first connection in your list and click _Advanced_.

4. Select the DNS tab and enter your AdGuard Home server addresses.

### Android

:::note

Instructions for Android devices may differ depending on the OS version and the manufacturer.

:::

1. From the Android menu home screen, tap _Settings_.

2. Tap _Wi-Fi_ on the menu. The screen with all of the available networks will be displayed (it is impossible to set custom DNS for mobile connection).

3. Long press the network you’re connected to and tap _Modify Network_.

4. On some devices, you may need to check the box for _Advanced_ to see more settings. To adjust your Android DNS settings, you will need to change the IP settings from _DHCP_ to _Static_.

5. Change set DNS 1 and DNS 2 values to your AdGuard Home server addresses.

### iOS

1. From the home screen, tap _Settings_.

2. Select _Wi-Fi_ from the left menu (it is impossible to configure DNS for mobile networks).

3. Tap the name of the currently active network.

4. In the _DNS_ field, enter your AdGuard Home server addresses.

## Running without superuser {#running-without-superuser}

You can run AdGuard Home without superuser privileges, but you must either grant the binary a capability (on Linux) or instruct it to use a different port (all platforms).

### Granting the necessary capabilities (Linux only)

Using this method requires the `setcap` utility. You may need to install it using your Linux distribution’s package manager.

To allow AdGuard Home running on Linux to listen on port 53 without superuser privileges and bind its DNS servers to a particular interface, run:

```sh
sudo setcap 'CAP_NET_BIND_SERVICE=+eip CAP_NET_RAW=+eip' ./AdGuardHome
```

Then run `./AdGuardHome` as an unprivileged user.

### Changing the DNS listen port

To configure AdGuard Home to listen on a port that does not require superuser privileges, stop AdGuard Home, open `AdGuardHome.yaml` in your editor, and find these lines:

```yaml
dns:
    # …
    port: 53
```

You can change the port to anything above 1024 to avoid requiring superuser privileges.

## Limitations {#limitations}

Some file systems don’t support the `mmap(2)` system call required by the statistics system. See also [issue 1188].

You can resolve this issue:

- either by supplying the `--work-dir DIRECTORY` arguments to the `AdGuardHome` binary. This option will tell AGH to use another directory for all its files instead of the default `./data` directory.

- or by creating symbolic links pointing to another file system that supports `mmap(2)` (e.g. tmpfs):

  ```sh
  ln -s ${YOUR_AGH_PATH}/data/stats.db /tmp/stats.db
  ln -s ${YOUR_AGH_PATH}/data/sessions.db /tmp/sessions.db
  ```

[issue 1188]: https://github.com/AdguardTeam/AdGuardHome/issues/1188
