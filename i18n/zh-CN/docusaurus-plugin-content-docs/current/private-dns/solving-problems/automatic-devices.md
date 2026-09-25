---
title: Automatic device connection
sidebar_position: 4
---

System administrators often need to manage many devices at once. To reduce the amount of manual work, you can use the [_Automatic connection_][ac] feature.

This article describes in more detail how a system administrator can set up their network to automatically create devices on an AdGuard DNS server using accessible data.

[ac]: /private-dns/connect-devices/other-options/automatic-connection

## 先决条件

Make sure that the feature is enabled on your DNS server. To do that, go to _Dashboard → Servers → Server settings → Advanced_ and check that the _Connect devices automatically_ setting is switched on.

## The basic format

The basic format of the hostname or URL used to create automatic devices is:

- for DoT and DoQ:

    ```none
    ${TYPE}-${SERVERID}-${HUMANID}.d.adguard-dns.com
    ```

- for DoH:

    ```none
    https://d.adguard-dns.com/dns-query/${TYPE}-${SERVERID}-${HUMANID}
    ```

### Device type

Device types are used to more easily distinguish between various devices in the UI. A device type is required for automatic identification of a device.

The following abbreviations are supported:

- `adr`: Android devices.
- `gam`: Gaming consoles.
- `ios`: Apple iOS and other Apple operating systems for mobile devices.
- `lnx`: Devices with Linux-based operating systems.
- `mac`: Apple macOS devices.
- `rtr`: Routers.
- `stv`: Smart TVs.
- `win`: Microsoft Windows devices.
- `otr`: Generic devices.

### DNS server ID

The next required parameter is the ID of your AdGuard DNS server to which the device is connected.

You can obtain the ID from the URL of your _Dashboard → Servers → Server settings_ page. For example, if the URL is `https://adguard-dns.io/en/dashboard/settings/server?server_id=abcd1234`, then the ID of your DNS server is `abcd1234`.

The ID is always precisely eight hexadecimal digits.

### Human-readable device identifier

The human-readable identifier part is used to both differentiate devices between each other and also serves as the basis for the device name used in the UI and in the rules with the `client` modifier. These identifiers can be automatically created based on other identifiers such as hostnames registered in your DHCP server.

The following rules apply:

- ASCII-only.

- Characters allowed in the identifiers are digits from zero to nine, hyphens, and both upper- and lowercase Latin letters. Any other characters are ignored.

- The length of the identifier should not be greater than 50 bytes. Anything beyond that will be trimmed.

- The identifier should not start or end with a hyphen.

- There should be no sequences of three or more hyphens in a row.

The device name is formed from the human-readable identifier by replacing all single hyphens with spaces and all double hyphens with single hyphens. For example, a human-readable identifier like `Super--duper-phone` is transformed into the device name `Super-duper phone`.

### A complete example

Here is a simple POSIX shell script that can translate an initial identifier into a complete DNS upstream address to use for automatic device connections:

```sh
devtype='adr'
serverid='abcd1234'

# For example, from the DHCP server or some other source.
initid='This Is My New And ✨Absolutely Amazing✨ SuperPhone-X-123456!!!!!!!'
humanid="$initid"

# Firstly, replace consecutive hyphens with double hyphens and consecutive spaces with single hyphens, resulting in 'This-Is-My-New-And-✨Absolutely-Amazing✨-SuperPhone--X--123456!!!!!!!'.
humanid="$(printf '%s\n' "$humanid" | sed -e 's/-\+/--/g' -e 's/[[:space:]]\+/-/g' )"

# Secondly, remove non-suitable bytes, resulting in 'This-Is-My-New-And-Absolutely-Amazing-SuperPhone--X--123456'.
humanid="$(printf '%s\n' "$humanid" | tr -c -d 'a-zA-Z0-9-')"

# Thirdly, trim to 50 bytes, resulting in 'This-Is-My-New-And-Absolutely-Amazing-SuperPhone--'
humanid="$(printf '%s\n' "$humanid" | head -c 50)"

# Then, make sure that there aren't any hyphens left at the start and the end of the label to get 'This-Is-My-New-And-Absolutely-Amazing-SuperPhone'
humanid="$(printf '%s\n' "$humanid" | sed -e 's/^-\+//g' -e 's/-\+$//g' )"

# Finally, assemble the upstream address. In this case, for DoT or DoQ:
dns_upstream="${devtype}-${serverid}-${humanid}.d.adguard-dns.com"

# The result is:
# adr-abcd1234-This-Is-My-New-And-Absolutely-Amazing-SuperPhone.d.adguard-dns.com
```

This will result in an Android device named `This Is My New And Absolutely Amazing SuperPhone` connected to server with ID `abcd1234`.
