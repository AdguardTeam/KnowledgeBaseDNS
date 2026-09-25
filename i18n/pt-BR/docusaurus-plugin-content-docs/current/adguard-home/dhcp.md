---
title: DHCP
sidebar_position: 10
---

AdGuard Home can be used as a DHCP server. This page describes how to do that.

## Prerequisites {#prerequisites}

1. Make sure that you run an OS on which AdGuard Home supports DHCP. We currently don’t support DHCP on Windows.

2. Make sure that your machine has a static IP address.

## Configuration {#configuration}

See the [overview of the DHCP configuration options][dhcp-conf]. There are several parameters for DHCP that can’t be set via the AdGuard Home administrator dashboard. Those are described below.

:::note

By default, AdGuard Home will set itself as the DNS server for the DHCP clients. The default lease time is 24 hours.

:::

[dhcp-conf]: /adguard-home/configuration#dhcp

### DHCPv4 options {#dhcpv4-options}

The `options` field is used to explicitly specify the values for DHCP options and modify the response. In accordance with _Section 4.3.1_ of [RFC 2131][rfc-2131], these options override the default options’ values set by Adguard Home and requested by a client, which means that if you want to set custom DNS server addresses using option `6` (Domain Name Server), you may want also add Adguard Home’s own addresses there. Otherwise, AdGuard Home’s filtering won’t work for the DHCP clients who receive these DNS server addresses.

Any option begins with a code written as a decimal integer. See [RFC 2132][rfc-2132] for the actual DHCP option codes and allowed lengths. The code is followed by the option’s type and value. Currently the following types are supported:

- `bool`: Human-readable form of a boolean value, and has the length of 1 octet.

  **Example**:

    ```yaml
    'options':
    - '19 bool 0'     # Disable IP forwarding for hosts.
    - '20 bool t'     # Enable non-local source routing for hosts.
    - '29 bool F'     # Disable subnet mask discovery.
    - '30 bool true'  # Enable mask supplying for supporting hosts.
    - '36 bool False' # Make the hosts use RFC 894 for ethernet encapsulation.
    ```

- `del`: No-value option is used to unconditionally remove options from the server’s responses (which may lead to weird behaviors, use with caution).

  Since the list of options is interpreted sequentially from first to last, the subsequent option may override the previous ones. So this:

    ```yaml
    'options':
    - '19 bool T'
    - '19 del'
    - '20 del'
    - '20 bool F'
    ```

  instructs to remove the option `19`, and to set the option `20` to `false`.

- `dur`: A human-readable form of a duration in the range of 0 to 4,294,967,296 seconds (approximately 136 days), consisting of _4_ octets, just like a 32-bit unsigned integer.

  **Example**:

    ```yaml
    'options':
    - '24 dur 10m'
    ```

- `hex`: A sequence of hexadecimal numbers of arbitrary length.

  **Example**:

    ```yaml
    'options':
    - '25 hex 0044012801FC03EE05D407D211001FE645FA'
    ```

- `ip`: Accepts an IPv4 address and has a length of _4_ octets, just like an IPv4 itself.

  **Example**:

    ```yaml
    'options':
    - '28 ip 192.168.0.255'
    ```

- `ips`: Accepts a comma-separated list of IPv4 addresses. It has an arbitrary length, but is always a multiple of _4_ octets.

  **Example**:

    ```yaml
    'options':
    - '6 ips 1.2.3.4,1.2.3.5'
    ```

- `text`: Accepts an arbitrary UTF-8 encoded string and has a length of encoded text.

  **Example:**

    ```yaml
    'options':
    - '252 text http://server.domain/proxyconfig.pac'
    ```

- `u8`: A decimal number in the range of 0 to 255 that takes _1_ octet, just like an unsigned 8-bit integer.

  **Example:**

    ```yaml
    'options':
    - '23 u8 64'
    ```

- `u16`: A decimal number in the range of 0 to 65535 that takes _2_ octets, just like an unsigned 16-bit integer.

  **Example:**

    ```yaml
    'options':
    - '22 u16 576'
    ```

:::note

Thoroughly check that the option format and value are valid for the chosen type in accordance with [RFC 2132][rfc-2132] or others. AdGuard Home does not perform any option-specific validations.

:::

Currently there is a set of options listed in _Appendix A_ of [RFC 2131][rfc-2131] with the default values chosen according to the documents mentioned there:

| Option                           | Value                                                           |
| -------------------------------- | --------------------------------------------------------------- |
| IP Forwarding                    | Disabled                                                        |
| Non-Local Source Routing         | Disabled                                                        |
| Maximum Datagram Reassembly Size | 576 bytes                                                       |
| Default IP Time-to-live          | 64 seconds                                                      |
| Path MTU Aging Timeout Option    | 10 minutes                                                      |
| Path MTU Plateau Table           | See [Table 7.1 in RFC 1191][rfc-1191-tbl-7.1]                   |
| Interface MTU                    | 576 bytes                                                       |
| All subnets are local            | False                                                           |
| Perform Mask Discovery           | False                                                           |
| Mask Supplier                    | False                                                           |
| Perform Router Discovery         | True                                                            |
| Router Solicitation Address      | 224.0.0.2       |
| Broadcast Address                | 255.255.255.255 |
| Use Trailer Encapsulation        | False                                                           |
| ARP Cache Timeout                | 1 minute                                                        |
| Ethernet Encapsulation version   | RFC 894                                                         |
| Default TCP TTL                  | 60 seconds                                                      |
| TCP Keepalive Interval           | 2 hours                                                         |
| Put TCP Keepalive Garbage        | True                                                            |
| Roteadores                       | `gateway_ip` from configuration                                 |
| Subnet Mask                      | `subnet_mask` from configuration                                |

Some of these values may appear obsolete or cause issues with certain DHCP client implementations. According to [RFC 2131][rfc-2131], the options are only returned if requested by the client within option `55` (Parameter Request List) when not explicitly configured.

### DHCPv6 options {#dhcpv6-options}

The option `dhcp.dhcpv6.ra_slaac_only`, if `true`, sends RA packets forcing the clients to use SLAAC. The DHCPv6 server won’t be started in this case.

The option `dhcp.dhcpv6.ra_allow_slaac`, if `true`, sends RA packets allowing the clients to choose between SLAAC and DHCPv6.

[rfc-1191-tbl-7.1]: https://datatracker.ietf.org/doc/html/rfc1191#section-7.1
[rfc-2131]: https://datatracker.ietf.org/doc/html/rfc2131
[rfc-2132]: https://datatracker.ietf.org/doc/html/rfc2132

## Automatic hosts {#auto-hosts}

Machines in the network can be reached more easily using the hostnames they send in the DHCP requests with a configurable top-level domain (TLD). By default, the TLD is `lan`. For example, if you have a machine called “workstation” in the network, and it sends a DHCP request with option 12 set to `workstation`, you can reach it over HTTP on the host `http://workstation.lan`.

You can also set a custom TLD or domain name using the `dns.local_domain_name` field in the [configuration][dhcp-conf] file.

## Stored leases {#stored-leases}

DHCP leases are stored in `data/leases.json`. The file format is not stable and may change in the future releases.
