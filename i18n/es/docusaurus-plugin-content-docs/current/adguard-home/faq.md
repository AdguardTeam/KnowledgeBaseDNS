---
title: Preguntas frecuentes
sidebar_position: 3
---

## Why doesn’t AdGuard Home block ads or threats? {#doesntblock}

Suppose that you want AdGuard Home to block `somebadsite.com` but for some reason it doesn’t. Let’s try to solve this problem.

Most likely, you haven’t configured your device to use AdGuard Home as the default DNS server. To check if you’re using AdGuard Home as your default DNS server:

1. On Windows, open Command Prompt (_Start_ → _Run_ → `cmd.exe`). On other systems, open your Terminal application.

2. Execute `nslookup example.org`. It will print something like this:

   ```none
   Server: 192.168.0.1
   Address: 192.168.0.1#53

   Non-authoritative answer:
   Name: example.org
   Address: <IPv4>
   Name: example.org
   Address: <IPv6>
   ```

3. Check if the `Server` IP address is the one where AdGuard Home is running. If not, you need to configure your device accordingly. See [below](#defaultdns) how to do this.

4. Ensure that your request to `example.org` appears in the AdGuard Home UI on the _Query Log_ page. If not, you need to configure AdGuard Home to listen on the specified network interface. The easiest way to do this is to reinstall AdGuard Home with default settings.

If you are sure that your device is using AdGuard Home as its default DNS server, but the problem persists, it may be due to a misconfiguration of AdGuard Home. Please check and make sure that:

1. You have enabled the _Block domains using filters and hosts files_ setting on the _Settings_ → _General settings_ page.

2. You have enabled the appropriate security mechanisms, such as Parental Control, on the same page.

3. You have enabled the appropriate filters on the _Filters_ → _DNS blocklists_ page.

4. You don’t have any exception rule lists that may allow the requests enabled on the _Filters_ → _DNS allowlists_ page.

5. You don’t have any DNS rewrites that may interfere on the _Filters_ → _DNS rewrites_ page.

6. You don’t have any custom filtering rules that may interfere on the _Filters_ → _Custom filtering rules_ page.

## What does “Blocked by CNAME or IP” in the query log mean? {#logs}

AdGuard Home checks both DNS requests and DNS responses to prevent an adblock evasion technique known as [CNAME cloaking][cname-cloak]. That is, if your filtering rules contain a domain, say `tracker.example`, and a DNS response for some other domain name, for example `blogs.example`, contains this domain name among its CNAME records, that response is blocked, because it actually leads to the blocked tracking service.

[cname-cloak]: https://blog.apnic.net/2020/08/04/characterizing-cname-cloaking-based-tracking/

## Where can I view the logs? {#logs}

The default location of the plain-text logs (not to be confused with the query logs) depends on the operating system and installation mode:

<!-- TODO(a.garipov): Add more info about Docker; add links to tools. -->

- **OpenWrt Linux:** use the `logread -e AdGuardHome` command.

- **Linux** systems with **systemd** and other **Unix** systems with **SysV-style init:** `/var/log/AdGuardHome.err`.

- **macOS:** `/var/log/AdGuardHome.stderr.log`.

- **Linux** systems with **Snapcraft** use the `snap logs adguard-home` command.

- **FreeBSD:** `/var/log/daemon.log`.

- **OpenBSD:** `/var/log/daemon`.

- **Windows:** the [Windows Event Log][wlog] is used.

[wlog]: https://docs.microsoft.com/en-us/windows/win32/wes/windows-event-log

## How do I configure AdGuard Home to write verbose-level logs? {#verboselog}

To troubleshoot a complicated issue, the verbose-level logging is sometimes required. Here’s how to enable it:

1. Stop AdGuard Home:

   ```sh
   ./AdGuardHome -s stop
   ```

2. Configure AdGuard Home to write verbose-level logs:

   1. Open `AdGuardHome.yaml` in your editor.

   2. Set `log.file` to the desired path of the log file, for example `/tmp/aghlog.txt`. Note that the directory must exist.

   3. Set `log.verbose` to `true`.

3. Restart AdGuard Home and reproduce the issue:

   ```sh
   ./AdGuardHome -s start
   ```

4. Once you’re done with the debugging, set `log.verbose` back to `false`.

## How do I show a custom block page? {#customblock}

:::note

Before doing any of this, please note that modern browsers are set up to use HTTPS, so they validate the authenticity of the web server certificate. This means that using any of these will result in warning screens.

There is a number of proposed extensions that, if reasonably well supported by clients, would provide a better user experience, including the [RFC 8914 Extended DNS Error codes][rfc8914] and the [DNS Access Denied Error Page RFC draft][rfcaccess]. We’ll implement them when browsers actually start to support them.

[rfc8914]: https://datatracker.ietf.org/doc/html/rfc8914
[rfcaccess]: https://datatracker.ietf.org/doc/html/draft-reddy-dnsop-error-page-08

:::

### Prerequisites

To use any of these methods to display a custom block page, you’ll need an HTTP server running on some IP address and serving the page in question on all routes. Something like [`pixelserv-tls`][pxsrv].

[pxsrv]: https://github.com/kvic-z/pixelserv-tls

### Custom block page for Parental Control and Safe Browsing filters

There is currently no way to set these parameters from the UI, so you’ll need to edit the configuration file manually:

1. Stop AdGuard Home:

   ```sh
   ./AdGuardHome -s stop
   ```

2. Open `AdGuardHome.yaml` in your editor.

3. Set the `dns.parental_block_host` or `dns.safebrowsing_block_host` settings to the IP address of the server (in this example, `192.168.123.45`):

   ```yaml
   # …
   dns:
     # …

     # NOTE: Change to the actual IP address of your server.
     parental_block_host: 192.168.123.45
     safebrowsing_block_host: 192.168.123.45
   ```

4. Restart AdGuard Home:

   ```sh
   ./AdGuardHome -s start
   ```

### Custom block page for other filters

1. Open the web UI.

2. Navigate to _Settings_ → _DNS settings._

3. In the _DNS server configuration_ section, select the _Custom IP_ radio button in the _Blocking mode_ selector and enter the IPv4 and IPv6 addresses of the server.

4. Click _Save_.

## How do I change dashboard interface’s address? {#webaddr}

1. Stop AdGuard Home:

   ```sh
   ./AdGuardHome -s stop
   ```

2. Open `AdGuardHome.yaml` in your editor.

3. Set the `http.address` setting to a new network interface. For example:

   - `0.0.0.0:0` to listen on all network interfaces;
   - `0.0.0.0:8080` to listen on all network interfaces with port `8080`;
   - `127.0.0.1:0` to listen on the local loopback interface only.

4. Restart AdGuard Home:

   ```sh
   ./AdGuardHome -s start
   ```

## How do I set up AdGuard Home as default DNS server? {#defaultdns}

See the [_Configuring Devices_ section](getting-started.md#configure-devices) on the _Getting Started_ page.

## Are there any known limitations? {#limitations}

Here are some examples of what cannot be blocked by a DNS-level blocker:

- YouTube, Twitch ads.

- Facebook, X (formerly Twitter), Instagram sponsored posts.

Basically, any ad that shares a domain with content cannot be blocked by a DNS-level blocker, unless you are ready to block the content as well.

### Any possibility of dealing with this in the future?

DNS will never be enough to do this. Your only option is to use a content blocking proxy like what we do in the [standalone AdGuard applications][adguard]. We’ll be adding support for this feature to AdGuard Home in the future. Unfortunately, even then there will still be cases where it won’t be enough or it will require quite complicated configuration.

[adguard]: https://adguard.com/

## Why do I get `bind: address already in use` error when trying to install on Ubuntu? {#bindinuse}

This happens because the port 53 on `localhost`, which is used for DNS, is already taken by another program. Ubuntu comes with a local DNS called `systemd-resolved`, which uses the address `127.0.0.53:53`, thus preventing AdGuard Home from binding to `127.0.0.1:53`. You can see this by running:

```sh
sudo lsof -i :53
```

The output should be similar to:

```none
COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME
systemd-r 14542 systemd-resolve 13u IPv4 86178 0t0 UDP 127.0.0.53:domain
systemd-r 14542 systemd-resolve 14u IPv4 86179 0t0 TCP 127.0.0.53:domain
```

To fix this, you must either disable the `systemd-resolved` daemon or choose a different network interface and bind your AdGuard Home to an accessible IP address on it, such as the IP address of your router inside your network. But if you do need to listen on `localhost`, there are several solutions.

Firstly, AdGuard Home can detect such configurations and disable `systemd-resolved` for you if you press the _Fix_ button located next to the `address already in use` message on the installation screen.

Secondly, if that doesn’t work, follow the instructions below. Note that if you’re using AdGuard Home with docker or snap, you’ll have to do this yourself.

1. Create the `/etc/systemd/resolved.conf.d` directory, if necessary:

   ```sh
   sudo mkdir -p /etc/systemd/resolved.conf.d
   ```

2. Deactivate `DNSStubListener` and update DNS server address. To do that, create a new file, `/etc/systemd/resolved.conf.d/adguardhome.conf`, with the following content:

   ```service
   [Resolve]
   DNS=127.0.0.1
   DNSStubListener=no
   ```

Specifying `127.0.0.1` as the DNS server address is **necessary.** Otherwise the nameserver will be `127.0.0.53` which won’t work without `DNSStubListener`.

1. Activate another `resolv.conf` file:

   ```sh
   sudo mv /etc/resolv.conf /etc/resolv.conf.backup
   sudo ln -s /run/systemd/resolve/resolv.conf /etc/resolv.conf
   ```

2. Restart `DNSStubListener`:

   ```sh
   sudo systemctl reload-or-restart systemd-resolved
   ```

After that, `systemd-resolved` shouldn’t be shown in the output of `lsof`, and AdGuard Home should be able to bind to `127.0.0.1:53`.

## How do I configure a reverse proxy server for AdGuard Home? {#reverseproxy}

If you’re already running a web server and want to access the AdGuard Home dashboard UI from a URL like `http://YOUR_SERVER/aghome/`, you can use this configuration for your web server:

### nginx

```nginx
location /aghome/ {
 proxy_cookie_path / /aghome/;
 proxy_pass http://AGH_IP:AGH_PORT/;
 proxy_redirect / /aghome/;
 proxy_set_header Host $host;
}
```

### caddy

```none
:80/aghome/* {
 route {
 uri strip_prefix /aghome
 reverse_proxy AGH_IP:AGH_PORT
 }
}
```

Or, if you only want to serve AdGuard Home with automatic TLS, use a configuration similar to the example shown below:

```none
DOMAIN {
 encode gzip zstd
 tls YOUR_EMAIL@DOMAIN
 reverse_proxy AGH_IP:AGH_PORT
}
```

### Apache

```apache
<VirtualHost *:80>
  ProxyPass "/" "http://AGH_IP:AGH_PORT/"
  ProxyPassReverse "/" "http://AGH_IP:AGH_PORT/"
  PreserveHost On
</VirtualHost>
```

:::note

Do not use subdirectories with the Apache reverse HTTP proxy.  It's a known issue ([#6604]) that Apache handles relative redirects differently than other web servers. This causes problems with the AdGuard Home web interface.

[#6604]: https://github.com/AdguardTeam/AdGuardHome/issues/6604

:::

### Disable DoH encryption on AdGuard Home

If you’re using TLS on your reverse proxy server, you don’t need to use TLS on AdGuard Home. Set `allow_unencrypted_doh: true` in `AdGuardHome.yaml` to allow AdGuard Home to respond to DoH requests without TLS encryption.

### Real IP addresses of clients

You can set the parameter `trusted_proxies` to the IP address(es) of your HTTP proxy to make AdGuard Home consider the headers containing the real client IP address. See the [configuration][conf] and [encryption][encr] pages for more information.

[encr]: https://github.com/AdguardTeam/AdGuardHome/wiki/Encryption#reverse-proxy
[conf]: https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration

## How do I fix `permission denied` errors on Fedora? {#fedora}

1. Move the `AdGuardHome` binary to `/usr/local/bin`.

2. As `root`, execute the following command to change the security context of the file:

   ```sh
   chcon -t bin_t /usr/local/bin/AdGuardHome
   ```

3. Add the required firewall rules in order to make it reachable through the network. For example:

   ```sh
   firewall-cmd --new-zone=adguard --permanent
   firewall-cmd --zone=adguard --add-source=192.168.0.14/24 --permanent
   firewall-cmd --zone=adguard --add-port=3000/tcp --permanent
   firewall-cmd --zone=adguard --add-port=53/udp --permanent
   firewall-cmd --zone=adguard --add-port=80/tcp --permanent
   firewall-cmd --reload
   ```

If you are still getting `code=exited status=203/EXEC` or similar errors from `systemctl`, try uninstalling AdGuard Home and installing it **directly** into `/usr/local/bin` by using the `-o` option of the install script:

```sh
curl -s -S -L 'https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh' | sh -s -- -o '/usr/local/bin' -v
```

See [issue 765] and [issue 3281].

[issue 3281]: https://github.com/AdguardTeam/AdGuardHome/issues/3281
[issue 765]: https://github.com/AdguardTeam/AdGuardHome/issues/765#issuecomment-752262353

## How do I fix `incompatible file system` errors? {#incompatfs}

You should move your AdGuard Home installation or working directory to another location. See the [limitations section](getting-started.md#limitations) on the _Getting Started_ page.

## What does `Error: control/version.json` mean? {#version-error}

This error message means that AdGuard Home was unable to reach AdGuard servers to check for updates and/or download them. This could mean that the servers are blocked by your ISP or are temporarily down. If the error does not resolve itself after some time, you can try performing a [manual update](#manual-update) or disabling the automatic update check by running the `AdGuardHome` executable with the `--no-check-update` command-line option.

## How do I update AdGuard Home manually? {#manual-update}

If the button isn’t displayed or an automatic update has failed, you can update manually. In the examples below, we’ll use AdGuard Home versions for Linux and Windows for AMD64 CPUs.

### Unix (Linux, macOS, BSD) {#manual-update-unix}

1. Download the new AdGuard Home package from the [releases page][releases]. If you want to perform this step from the command line, type:

   ```sh
   curl -L -S -o '/tmp/AdGuardHome_linux_amd64.tar.gz' -s\
   'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'
   ```

   Or, with `wget`:

   ```sh
   wget -O '/tmp/AdGuardHome_linux_amd64.tar.gz'\
   'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'
   ```

2. Navigate to the directory where AdGuard Home is installed. On most Unix systems the default directory is `/opt/AdGuardHome`, but on macOS it’s `/Applications/AdGuardHome`.

3. Stop AdGuard Home:

   ```sh
   sudo ./AdGuardHome -s stop
   ```

   :::note OpenBSD

   On OpenBSD, you will probably want to use `doas` instead of `sudo`.

   :::

4. Backup your data. That is, your configuration file and the data directory (`AdGuardHome.yaml` and `data/` by default). For example, to backup your data to a new directory called `~/my-agh-backup`:

   ```sh
   mkdir -p ~/my-agh-backup
   cp -r ./AdGuardHome.yaml ./data ~/my-agh-backup/
   ```

5. Extract the AdGuard Home archive to a temporary directory. For example, if you downloaded the archive to your `~/Downloads` directory and want to extract it to `/tmp/`:

   ```sh
   tar -C /tmp/ -f ~/Downloads/AdGuardHome_linux_amd64.tar.gz -x -v -z
   ```

   On macOS, type something like:

   ```sh
   unzip -d /tmp/ ~/Downloads/AdGuardHome_darwin_amd64.zip
   ```

6. Replace the old AdGuard Home executable file with the new one. On most Unix systems the command would look something like this:

   ```sh
   sudo cp /tmp/AdGuardHome/AdGuardHome /opt/AdGuardHome/AdGuardHome
   ```

   On macOS, something like:

   ```sh
   sudo cp /tmp/AdGuardHome/AdGuardHome /Applications/AdGuardHome/AdGuardHome
   ```

   You may also want to copy the documentation parts of the package, such as the change log (`CHANGELOG.md`), the README file (`README.md`), and the license (`LICENSE.txt`).

   You can now remove the temporary directory.

7. Restart AdGuard Home:

   ```sh
   sudo ./AdGuardHome -s start
   ```

[releases]: https://github.com/AdguardTeam/AdGuardHome/releases/latest

### Windows (Using PowerShell) {#manual-update-win}

In all examples below, the PowerShell must be run as Administrator.

1. Download the new AdGuard Home package from the [releases page][releases]. If you want to perform this step from the command line:

   ```ps1
   $outFile = Join-Path -Path $Env:USERPROFILE -ChildPath 'Downloads\AdGuardHome_windows_amd64.zip'
   $aghUri = 'https://static.adguard.com/adguardhome/release/AdGuardHome_windows_amd64.zip'
   Invoke-WebRequest -OutFile "$outFile" -Uri "$aghUri"
   ```

2. Navigate to the directory where AdGuard Home was installed. In the examples below, we’ll use `C:\Program Files\AdGuardHome`.

3. Stop AdGuard Home:

   ```ps1
   .\AdGuardHome.exe -s stop
   ```

4. Backup your data. That is, your configuration file and the data directory (`AdGuardHome.yaml` and `data/` by default). For example, to backup your data to a new directory called `my-agh-backup`:

   ```ps1
   $newDir = Join-Path -Path $Env:USERPROFILE -ChildPath 'my-agh-backup'
   New-Item -Path $newDir -ItemType Directory
   Copy-Item -Path .\AdGuardHome.yaml, .\data -Destination $newDir -Recurse
   ```

5. Extract the AdGuard Home archive to a temporary directory. For example, if you downloaded the archive to your `Downloads` directory and want to extract it to a temporary directory:

   ```ps1
   $outFile = Join-Path -Path $Env:USERPROFILE -ChildPath 'Downloads\AdGuardHome_windows_amd64.zip'
   Expand-Archive -Path "$outFile" -DestinationPath $Env:TEMP
   ```

6. Replace the old AdGuard Home executable file with the new one. For example:

   ```ps1
   $aghExe = Join-Path -Path $Env:TEMP -ChildPath 'AdGuardHome\AdGuardHome.exe'
   Copy-Item -Path "$aghExe" -Destination .\AdGuardHome.exe
   ```

   You may also want to copy the documentation parts of the package, such as the change log (`CHANGELOG.md`), the README file (`README.md`), and the license (`LICENSE.txt`).

   You can now remove the temporary directory.

7. Restart AdGuard Home:

   ```ps1
   .\AdGuardHome.exe -s start
   ```

## How do I uninstall AdGuard Home? {#uninstall}

Depending on how you installed AdGuard Home, there are different ways to uninstall it.

:::caution

Before uninstalling AdGuard Home, don’t forget to change the configuration of your devices and point them to a different DNS server.

:::

### Regular installation

In this case, do the following:

- Unregister AdGuard Home service: `./AdGuardHome -s uninstall`.

- Remove the AdGuard Home directory.

### Docker

Simply stop and remove the image.

### Snap Store

```sh
snap remove adguard-home
```
