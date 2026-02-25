---
title: DNS encryption
sidebar_position: 6
---

AdGuard Home supports all modern DNS encryption protocols **out-of-the-box**:

- [DNS-over-HTTPS](https://en.wikipedia.org/wiki/DNS_over_HTTPS)
- [DNS-over-TLS](https://en.wikipedia.org/wiki/DNS_over_TLS)
- [DNS-over-QUIC](https://datatracker.ietf.org/doc/html/rfc9250)

:::note

AdGuard Home also supports [DNSCrypt][dnscrypt-info] (both client-side and server-side). See [this section](#configure-dnscrypt) to learn about configuring AdGuard Home as a DNSCrypt server.

:::

This guide explains how to setup an encrypted DNS server with AdGuard Home.

[dnscrypt-info]: https://dnscrypt.info/

## Server installation {#server-installation}

The purpose of securing the DNS traffic is to secure it from third-parties that might be analyzing or modifying it, e.g. from ISP.

<!-- TODO(e.burkov):  Use relative links to the docs instead of absolute, see AGDNS-2226. -->

It means that you will need a server with a public dedicated IP address. There are plenty of cheap cloud servers providers: [DigitalOcean][digital-ocean], [Vultr][vultr], [Linode][linode], etc. Just choose one, create a cloud server there, and [install AdGuard Home](adguard-home/getting-started.md) on your server.

[digital-ocean]: https://digitalocean.com
[vultr]:         https://vultr.com
[linode]:        https://www.linode.com

## Register a domain name {#register-domain}

First of all, you need a domain name. If you have never registered one, here is a [simple instruction][domain-name-register] that will help you with that.

[domain-name-register]: https://www.pcworld.com/article/241722/web-apps/how-to-register-your-own-domain-name.html

## Get an SSL certificate {#certificate}

Both `DNS-over-HTTPS` and `DNS-over-TLS` are based on [TLS encryption][tls-wikipedia] so in order to use them, you will need to acquire an SSL certificate.

An SSL certificate can be bought from a "Certificate Authority" (CA), a company trusted by browsers and operating systems to enroll SSL certificates for domains.

Alternatively, you can get the certificate for free from ["Let's Encrypt" CA][letsencrypt], a free certificate authority developed by the Internet Security Research Group (ISRG).

This guide explains how to get a certificate from them.

### Using CertBot

Certbot is an easy-to-use client that fetches a certificate from Let’s Encrypt.

1. Go to [certbot.eff.org][certbot] and choose *None of the above* software and your operating system.
1. Follow the installation instructions, and stop there – don't get to the *Get Started* section.

#### Get a certificate using DNS challenge

You have just got a domain name so I suppose using DNS challenge will be the easiest way to get a certificate.

Run this command and follow the certbot's instructions:

```sh
sudo certbot certonly --manual --preferred-challenges=dns --preferred-chain="ISRG Root X1"
```

In the end you'll get two files:

- `fullchain.pem` – your PEM-encoded SSL certificate.
- `privkey.pem` – your PEM-encoded private key.

Both will be necessary to configure AdGuard Home.

:::info Important

You will need to use the very same procedure to renew the existing certificate.

:::

### Using Lego

There's also a really nice and easy-to-use alternative to CertBot called [LEGO][lego-source].

1. Install it using [an appropriate method][lego-install].
1. Choose your DNS provider from [the list][lego-provider] and follow the instruction to obtain a certificate.

Also, here's [a simple script][legoagh] that you can use to automate certificates generation and renewal.

[tls-wikipedia]: https://en.wikipedia.org/wiki/Transport_Layer_Security
[letsencrypt]:   https://letsencrypt.org
[certbot]:       https://certbot.eff.org
[lego-source]:   https://go-acme.github.io/lego
[lego-install]:  https://go-acme.github.io/lego/installation
[lego-provider]: https://go-acme.github.io/lego/dns
[legoagh]:       https://github.com/ameshkov/legoagh

## Configure AdGuard Home {#configure}

1. Open AdGuard Home web interface and go to *Settings*.
1. Choose the *Encryption* section.

    ![Encryption settings screenshot][encryption-screenshot]

1. Copy/paste the contents of the `fullchain.pem` file to input the field under *Certificates* or specify path to the file.
1. Copy/paste the contents of the `privkey.pem` file to input the field under *Private key* or specify path to the file.
1. Enter your domain name to *Server name*.
1. Get the successful validation messages and click *Save settings*.

:::note

If a certificate and/or a private key is specified by file path, AdGuard Home will automatically reload them when they change. The reload may also be triggered by a SIGHUP signal.

:::

[encryption-screenshot]: https://cdn.adtidy.org/content/kb/dns/adguard-home/encryption-screenshot.png

## Using with reverse proxy {#reverse-proxy}

We already have a [guide][reverse-proxy-faq] on configuring a reverse proxy server for accessing AdGuard Home web UI.

AdGuard Home is able to restrict DNS-over-HTTPS requests which came from the proxy server not included into "trusted" list. By default, it's configured to accept requests from IPv4 and IPv6 loopback addresses.

To enable AdGuard Home to handle DNS-over-HTTPS requests from a reverse proxy server, set the `trusted_proxies` setting in `AdGuardHome.yaml` to the IP address of the proxy server. If you have several proxy servers, you can use a CIDR instead of a simple IP address.

### Nginx reverse proxy

To configure AdGuard Home for accepting requests from Nginx reverse proxy server, make sure that the reverse proxy server itself is configured correctly.

The `nginx.conf` file should contain the appropriate directives to add the supported forwarding headers to the request which are `X-Real-IP` or `X-Forwarded-For`. This may be achieved with [`ngx_http_realip_module`][ngx-http-realip-module]. In short, the module takes real IP address of the client and writes it to the HTTP request's header. The AdGuard Home will receive and interpret the value of this header as real client's address. The address of the reverse proxy server will be received too and also checked against the "trusted" proxies list.

Another header you might want to proxy is the `Host` header, which is required to make AdGuard Home recognize requests from clients that have a ClientID in their hostnames.

For example, if the configuration of the reverse proxy server contains the following directives:

```nginx
location /dns-query {
  # …
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP '1.2.3.4';
  proxy_bind 192.168.1.2;
  # …
}
```

AdGuard Home will get the `192.168.1.2` as the address of your proxy server and check it against the `trusted_proxies`. The `1.2.3.4` will be controlled by access settings in case the proxy is "trusted".

### Cloudflare CDN

The Cloudflare's content delivery network acts as the reverse proxy appending its [own headers][cloudflare-headers] to the forwarded requests, which are `CF-Connecting-IP` and `True-Client-IP`. These are also supported by AdGuard Home so the reverse proxy servers' [addresses][cloudflare-addresses] may be inserted into `trusted_proxies` list directly. See the [official Cloudflare's reference][cloudflare-real-ip] on restoring the original visitor's IP.

### Other Headers

Other HTTP headers may be supported by AdGuard Home in the future. However, any headers-related feature requests should first be tried to be resolved by configuring the reverse proxy itself.

For example, to modify the [HTTP Strict Transport Security][hsts] mechanism to include the experimental `preload` directive, something like the following piece of configuration might be used:

```nginx
location /dns-query {
  # …
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
  # …
}
```

<!-- TODO(e.burkov):  Use relative links to the docs instead of absolute, see AGDNS-2226. -->

[reverse-proxy-faq]:      /adguard-home/faq.md#reverseproxy
[ngx-http-realip-module]: https://nginx.org/en/docs/http/ngx_http_realip_module.html
[cloudflare-headers]:     https://support.cloudflare.com/hc/en-us/articles/200170986
[cloudflare-addresses]:   https://www.cloudflare.com/ips
[cloudflare-real-ip]:     https://support.cloudflare.com/hc/en-us/articles/200170786
[hsts]:                   https://datatracker.ietf.org/doc/html/rfc6797

## Configuring devices {#configure-devices}

### Android

- Android 9 and above supports `DNS-over-TLS` natively. To configure it, go to *Settings* → *Network & internet* → *Advanced* → *Private DNS* and enter your domain name there.
- [AdGuard for Android][ag-for-android] supports `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` and `DNS-over-QUIC`.
- [Intra][intra] adds `DNS-over-HTTPS` support to Android.

### iOS

- iOS 14 and above support `DNS-over-TLS` and `DNS-over-HTTPS` natively via configuration profiles. In order to make things easier, AdGuard Home can generate these configuration profiles for you. Just head to *Setup Guide* → *DNS Privacy* and scroll to iOS.
- [AdGuard for iOS][ag-for-ios] supports `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` and `DNS-over-QUIC`.
- [DNSCloak][dnscloak] supports `DNS-over-HTTPS` but in order to configure it to use your own server, you'll need to generate a [DNS Stamp][stamps] for it.

### Windows

- Windows 10 Build 19628 and higher support `DNS-over-HTTPS` natively.
- [AdGuard for Windows][ag-for-windows] supports `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` and `DNS-over-QUIC`.

### macOS

- macOS Big Sur and higher support `DNS-over-TLS` and `DNS-over-HTTPS` natively via configuration profiles. In order to make things easier, AdGuard Home can generate these configuration profiles for you. Just head to *Setup Guide* → *DNS Privacy* and scroll to iOS.

### Other implementations

- AdGuard Home itself can be a secure DNS client on any platform.
- [dnsproxy][ag-dnsproxy] supports all known secure DNS protocols.
- [dnscrypt-proxy][dnscrypt-proxy] supports `DNS-over-HTTPS`.
- [Mozilla Firefox][firefox] supports `DNS-over-HTTPS`.

[ag-for-android]: https://adguard.com/en/adguard-android/overview.html
[intra]:          https://getintra.org
[ag-for-ios]:     https://adguard.com/en/adguard-ios/overview.html
[dnscloak]:       https://itunes.apple.com/app/id1452162351
[stamps]:         https://dnscrypt.info/stamps
[ag-for-windows]: https://adguard.com/en/adguard-windows/overview.html
[ag-dnsproxy]:    https://github.com/AdguardTeam/dnsproxy
[dnscrypt-proxy]: https://github.com/jedisct1/dnscrypt-proxy
[firefox]:        https://www.mozilla.org/firefox

## Configuring DNSCrypt {#configure-dnscrypt}

AdGuard Home is able to work as a DNSCrypt server. However, this feature is only available via configuration file, and can't be set up using the Web UI. This guide explains how to do this.

### Generating a configuration file

Here is how to generate a DNSCrypt configuration file and point AdGuard Home to it:

:::info Important

   Make sure that your TLS settings are valid and encryption is enabled.

:::

1. Get the latest version of the [`dnscrypt`] utility for your system. Extract the archive and navigate to the resulting directory.

    - On Unix, using a POSIX-compatible shell:

        (Here and below, `linux-amd64` is used as an example. Make sure to download and use the one for your platform.)

        1. Extract the files:

           ```sh
           tar -f ./dnscrypt-linux-amd64-v2.2.3.tar.gz -v -x -z
           ```

           Output example:

           ```none
           linux-amd64/
           linux-amd64/README.md
           linux-amd64/LICENSE
           linux-amd64/dnscrypt
           ```

        1. Navigate to the extracted directory:

           ```sh
           cd ./linux-amd64/
           ```

        1. Generate the configuration file:

           ```sh
           ./dnscrypt generate --provider-name '2.dnscrypt-cert.example.org' --out ./dnscrypt.yaml
           ```

            Output example:

            ```none
            2022/01/02 12:34:56 [info] Generating configuration for 2.dnscrypt-cert.example.org
            2022/02/02 12:34:56 [info] Configuration has been written to ./dnscrypt.yaml
            2022/02/02 12:34:56 [info] Go to https://dnscrypt.info/stamps to generate an SDNS stamp
            2022/02/02 12:34:56 [info] You can run a DNSCrypt server using the following command:
            2022/02/02 12:34:56 [info] dnscrypt server -c ./dnscrypt.yaml -f 8.8.8.8
            ```

    - On Windows, using PowerShell:

        (Here and below, `windows-amd64` is used as an example. Make sure to download and use the one for your CPU architecture.)

        1. Extract the files:

           ```ps1
           Expand-Archive -Path .\dnscrypt-windows-amd64-v2.2.3.zip
           ```

        1. Navigate to the extracted directory:

           ```ps1
           Set-Location -Path .\dnscrypt-windows-amd64-v2.2.3\windows-amd64\
           ```

        1. Generate the configuration file:

           ```ps1
           .\dnscrypt.exe generate --provider-name '2.dnscrypt-cert.example.org' --out .\dnscrypt.yaml
           ```

           Output example:

           ```none
           2022/01/02 12:34:56 [info] Generating configuration for 2.dnscrypt-cert.example.org
           2022/02/02 12:34:56 [info] Configuration has been written to .\dnscrypt.yaml
           2022/02/02 12:34:56 [info] Go to https://dnscrypt.info/stamps to generate an SDNS stamp
           2022/02/02 12:34:56 [info] You can run a DNSCrypt server using the following command:
           2022/02/02 12:34:56 [info] dnscrypt server -c .\dnscrypt.yaml -f 8.8.8.8
           ```

    Where `example.org` is the name of your host and `./dnscrypt.yaml` is the name of the configuration output file.

    You may add the path to the binary into your `PATH`/`$env:PATH`.

1. In the configuration file (typically `AdGuardHome.yaml`), add the following lines:

   ```yaml
   'tls':
     # N.B. The encryption must be enabled.
     'enabled': true
     # …
     'port_dnscrypt': 5443
     'dnscrypt_config_file': './dnscrypt.yaml'
   ```

   Where `5443` is the port for your DNSCrypt server and `./dnscrypt.yaml` is the name of the configuration file generated in step 2.

   :::info Important

   Stop AdGuard Home before changing the configuration file.

   :::

   :::tip

   On Windows, it is recommended to use the full path to the configuration file. For example, `C:\Users\Me\Files\dnscrypt.yaml`.

   :::

[`dnscrypt`]: https://github.com/ameshkov/dnscrypt/releases

### Generating a DNSCrypt stamp

Here is how to generate a DNSCrypt stamp and check your installation:

1. Go to <https://dnscrypt.info/stamps/>.

1. Enter the data from your DNSCrypt configuration file. The *Provider public key* is the value of the `public_key` field in your DNSCrypt configuration file.

   :::note

   Enter the host with your custom port!

   :::

1. Now you have a stamp that looks something like this:

   ```none
   sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn
   ```

   Check your installation by running:

   ```sh
   ./dnscrypt lookup-stamp \
       --domain 'example.com' \
       --stamp 'sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn' \
       --type 'a'
   ```

   Or, on Windows:

   ```ps1
   .\dnscrypt.exe lookup-stamp `
       --domain 'example.com' `
       --stamp 'sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn' `
       --type 'a'
   ```

   Where `example.com` is the domain name to lookup.

### Configuring devices to use DNSCrypt

#### All platforms

- [`dnscrypt-proxy`][prox] (reference implementation). DNSCrypt-Proxy is a command-line proxy for Linux, BSD, Windows, macOS, Android, and more.

#### Android

- [AdGuard for Android][andr] supports DNSCrypt.

#### iOS

- [AdGuard for iOS][ios] supports DNSCrypt.
- [DNSCloak][cloa] uses `dnscrypt-proxy` internally and supports DNSCrypt.

#### Windows

- [AdGuard for Windows][win] supports DNSCrypt.
- [Simple DNSCrypt][simp] is a simple management tool to configure and run `dnscrypt-proxy` on Windows.

See the [DNSCrypt website][imps1] and [DNS privacy project's list][imps2] for more.

[andr]:  https://adguard.com/en/adguard-android/overview.html
[cloa]:  https://itunes.apple.com/app/id1452162351
[imps1]: https://dnscrypt.info/implementations
[imps2]: https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Clients
[ios]:   https://adguard.com/en/adguard-ios/overview.html
[prox]:  https://github.com/DNSCrypt/dnscrypt-proxy
[simp]:  https://simplednscrypt.org/
[win]:   https://adguard.com/en/adguard-windows/overview.html
