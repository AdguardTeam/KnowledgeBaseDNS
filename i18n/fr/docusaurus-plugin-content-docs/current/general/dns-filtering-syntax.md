---
title: DNS filtering rules syntax
sidebar_position: 2
---

## Introduction

You can use AdGuard DNS filtering rules syntax to make the rules more flexible, so they can block content according to your preferences. AdGuard DNS filtering rules syntax can be used in different AdGuard products such as AdGuard Home, AdGuard DNS, AdGuard for Windows/Mac/Android.

There are three different approaches to writing hosts blocklists:

* [Adblock-style syntax](#adblock-style-syntax): the modern approach to writing filtering rules based on using a subset of the Adblock-style rule syntax. This way blocklists are compatible with browser ad blockers.

* [`/etc/hosts` syntax](#etc-hosts-syntax): the old, tried-and-true approach that uses the same syntax that operating systems do for their hosts files.

* [Domains-only syntax](#domains-only-syntax): a simple list of domain names.

If you are creating a blocklist, we recommend using the [Adblock-style syntax](#adblock-style-syntax). It has a couple of important advantages over the old-style syntax:

* **Blocklists size.** Using pattern matching allows you to have a single rule instead of hundreds of `/etc/hosts` entries.

* **Compatibility.** Your blocklist will be compatible with browser ad blockers, and it will be easier to share rules with a browser filter list.

* **Extensibility.** For the last decade the Adblock-style syntax has greatly evolved, and we don't see why we can't extend it even more and provide additional features for network-wide blockers.

If you're maintaining an `/etc/hosts`-style blocklist or if you maintain multiple filter lists regardless of their type, we provide a tool that can be used to compile blocklists. We called it [Hostlist compiler][hlc] and we use it ourselves to create [AdGuard DNS filter][sdn].

## Basic Examples

* `||example.org^`: block access to the `example.org` domain and all its subdomains, like `www.example.org`.

* `@@||example.org^`: unblock access to the `example.org` domain and all its subdomains.

* `1.2.3.4 example.org`: (attention, old `/etc/hosts`-style syntax) in AdGuard Home, respond with `1.2.3.4` to queries for the `example.org` domain but **not** its subdomains. In Private AdGuard DNS, block access to `example.org`. `www.example.org` remains allowed.

  In AdGuard Home, using the unspecified IP address (`0.0.0.0`) or a local address (`127.0.0.1` and alike) for a host is basically the same as blocking that host.

  ```none
  # Returns the IP address 1.2.3.4 for example.org.
  1.2.3.4 example.org
  # Blocks example.com by responding with 0.0.0.0.
  0.0.0.0 example.com
  ```

* `example.org`: a simple domain rule. Blocks `example.org` domain but **not** its subdomains. `www.example.org` remains allowed.

* `! Here goes a comment` and `# Also a comment`: comments.

* `/REGEX/`: block access to the domains matching the specified regular expression.

## Adblock-Style Syntax

This is a subset of the [traditional Adblock-style][adb] syntax which is used by browser ad blockers.

```none
     rule = ["@@"] pattern [ "$" modifiers ]
modifiers = [modifier0, modifier1[, ...[, modifierN]]]
```

* `pattern`: the hostname mask. Every hostname is matched against this mask. The pattern can also contain special characters, which are described below.

* `@@`: the marker that is used in the exception rules. Start your rule with this marker if you want to turn off filtering for the matching hostnames.

* `modifiers`: parameters that clarify the rule. They may limit the scope of the rule or even completely change the way it works.

### Special Characters

* `*`: the wildcard character. It is used to represent any set of characters. This can also be an empty string or a string of any length.

* `||`: matches the beginning of a hostname, including any subdomain. For instance, `||example.org` matches `example.org` and `test.example.org` but not `testexample.org`.

* `^`: the separator character. Unlike browser ad blocking, there's nothing to separate in a hostname, so the only purpose of this character is to mark the end of the hostname.

* `|`: a pointer to the beginning or the end of the hostname. The value depends on the character placement in the mask. For example, the rule `ample.org|` corresponds to `example.org` but not to `example.org.com`. `|example` corresponds to `example.org` but not to `test.example`.

### Regular Expressions

If you want even more flexibility in making rules, you can use [regular expressions][regexp] instead of the default simplified matching syntax. If you want to use a regular expression, the pattern has to look like this:

```none
pattern = "/" regexp "/"
```

**Examples:**

* `/example.*/` will block hosts matching the `example.*` regexp.

* `@@/example.*/$important` will unblock hosts matching the `example.*` regexp. Note that this rule also implies the `important` modifier.

### Comments

Any line that starts with an exclamation mark or a hash sign is a comment and it will be ignored by the filtering engine. Comments are usually placed above rules and used to describe what a rule does.

**Example:**

```none
! This is a comment.
# This is also a comment.
```

### Rule Modifiers

You can change the behavior of a rule by adding modifiers. Modifiers must be located at the end of the rule after the `$` character and be separated by commas.

**Examples:**

* ```none ||example.org^$important
   ```

  `||example.org^` is the matching pattern. `$` is the delimiter, which signals that the rest of the rule are modifiers. `important` is the modifier.

* You may want to use multiple modifiers in a rule. Separate them by commas in this case:

  ```none
  ||example.org^$client=127.0.0.1,dnstype=A
  ```

  `||example.org^` is the matching pattern. `$` is the delimiter, which signals that the rest of the rule are modifiers. `client=127.0.0.1` is the [`client`](#client) modifier with its value, `127.0.0.1`, is the delimiter. And finally, `dnstype=A` is the [`dnstype`](#dnstype) modifier with its value, `A`.

**NOTE:** If a rule contains a modifier not listed in this document, the whole rule **must be ignored**. This way we avoid false-positives when people are trying to use unmodified browser ad blockers' filter lists like EasyList or EasyPrivacy.

#### `client`

The `client` modifier allows specifying clients this rule is applied to. There are two main ways to identify a client:

* By their IP address or CIDR prefix. This way works for all kinds of clients.

* By their name. This way only works for persistent clients (in AdGuard Home) and devices (in Private AdGuard DNS), which you have manually added.

  **NOTE:** In AdGuard Home, ClientIDs are not currently supported, only names are. If you have added a client with the name “My Client” and ClientID `my-client` spell your modifier as `$client='My Client'` as opposed to `$client=my-client`.

The syntax is:

```none
$client=value1|value2|...
```

You can also exclude clients by adding a `~` character before the value. In this case, the rule is not be applied to this client's DNS requests.

```none
$client=~value1
```

Client names usually contain spaces or other special characters, which is why you should enclose the name in quotes. Both single and double ASCII quotes are supported. Use the backslash (`\`) to escape quotes (`"` and `'`), commas (`,`), and pipes (`|`).

**NOTE:** When excluding a client, you **must** keep `~` out of the quotes.

**Examples:**

* `@@||*^$client=127.0.0.1`: unblock everything for localhost.

* `||example.org^$client='Frank\'s laptop'`: block `example.org` for the client named `Frank's laptop` only. Note that quote (`'`) in the name must be escaped.

* `||example.org^$client=~'Mary\'s\, John\'s\, and Boris\'s laptops'`: block `example.org` for everyone except for the client named `Mary's, John's, and Boris's laptops`. Note that comma (`,`) must be escaped as well.

* `||example.org^$client=~Mom|~Dad|Kids`: block `example.org` for `Kids`, but not for `Mom` and `Dad`. This example demonstrates how to specify multiple clients in one rule.

* `||example.org^$client=192.168.0.0/24`: block `example.org` for all clients with IP addresses in the range from `192.168.0.0` to `192.168.0.255`.

#### `denyallow`

You can use the `denyallow` modifier to exclude domains from the blocking rule. To add multiple domains to one rule, use the `|` character as a separator.

The syntax is:

```none
$denyallow=domain1|domain2|...
```

This modifier allows avoiding creating unnecessary exception rules when our blocking rule covers too many domains. You may want to block everything save for a couple of TLD domains. You could use the standard approach, i.e. rules like this:

```none
! Block everything.
/.*/

! Unblock a couple of TLDs.
@@||com^
@@||net^
```

The problem with this approach is that this way you will also unblock tracking domains that are located on those TLDs (i.e. `google-analytics.com`). Here's how to solve this with `denyallow`:

```none
*$denyallow=com|net
```

**Examples:**

* `*$denyallow=com|net`: block everything save for `*.com` and `*.net`.

* `@@*$denyallow=com|net`: unblock everything save for `*.com` and `*.net`.

* `||example.org^$denyallow=sub.example.org`. block `example.org` and `*.example.org` but don't block `sub.example.org`.

#### `dnstype`

The `dnstype` modifier allows specifying DNS request or response type on which this rule will be triggered.

The syntax is:

```none
$dnstype=value1|value2|...
$dnstype=~value1|~value2|~...
```

The names of the types are case-insensitive, but are validated against a set of actual DNS resource record (RR) types.

Do not combine exclusion rules with inclusion ones. This:

```none
$dnstype=~value1|value2
```

is equivalent to this:

```none
$dnstype=value2
```

**Examples:**

* `||example.org^$dnstype=AAAA`: block DNS queries for the IPv6 addresses of `example.org`.

* `||example.org^$dnstype=~A|~CNAME`: only allow `A` and `CNAME` DNS queries for `example.org`, block out the rest.

**NOTE:** Before version **v0.108.0,** AdGuard Home would use the type of the request to filter the response records, as opposed to the type of the response record itself.  That caused issues, since that meant that you could not write rules that would allow certain `CNAME` records in responses in `A` and `AAAA` requests. In **v0.108.0** that behaviour was changed, so now this:

```none
||canon.example.com^$dnstype=~CNAME
```

allows you to avoid filtering of the following response:

```none
ANSWERS:
->  example.com
    canonical name = canon.example.com.
    ttl = 60
->  canon.example.com
    internet address = 1.2.3.4
    ttl = 60
```

#### `dnsrewrite`

The `dnsrewrite` response modifier allows replacing the content of the response to the DNS request for the matching hosts. Note that this modifier in AdGuard Home works in all rules, but in Private AdGuard DNS — only in custom ones.

**Rules with the `dnsrewrite` response modifier have higher priority than other rules in AdGuard Home.**

The shorthand syntax is:

```none
$dnsrewrite=1.2.3.4
$dnsrewrite=abcd::1234
$dnsrewrite=example.net
$dnsrewrite=REFUSED
```

The keywords MUST be in all caps (e.g. `NOERROR`). Keyword rewrites take precedence over the other and will result in an empty response with an appropriate response code.

The full syntax is of the form `RCODE;RRTYPE;VALUE`:

```none
$dnsrewrite=NOERROR;A;1.2.3.4
$dnsrewrite=NOERROR;AAAA;abcd::1234
$dnsrewrite=NOERROR;CNAME;example.net
$dnsrewrite=REFUSED;;
```

The `$dnsrewrite` modifier with the `NOERROR` response code may also has empty `RRTYPE` and `VALUE` fields.

The `CNAME` one is special because AdGuard Home will resolve the host and add its info to the response. That is, if `example.net` has IP `1.2.3.4`, and the user has this in their filter rules:

```none
||example.com^$dnsrewrite=example.net
! Or:
||example.com^$dnsrewrite=NOERROR;CNAME;example.net
```

then the response will be something like:

```sh
$ nslookup example.com my.adguard.local
```

```none
Server:     my.adguard.local
Address:    127.0.0.1#53

Non-authoritative answer:
example.com canonical name = example.net.
Name:   example.net
Address: 1.2.3.4
```

Next, the `CNAME` rewrite. After that, all other records' values are summed as one response, so this:

```none
||example.com^$dnsrewrite=NOERROR;A;1.2.3.4
||example.com^$dnsrewrite=NOERROR;A;1.2.3.5
```

will result in a response with two `A` records.

Currently supported RR types with examples:

* `||4.3.2.1.in-addr.arpa^$dnsrewrite=NOERROR;PTR;example.net.` adds a `PTR`record for reverse DNS. Reverse DNS requests for `1.2.3.4` to the DNS server will result in `example.net`.

  **NOTE:** the IP MUST be in reverse order. See [RFC 1035][rfc1035].

* `||example.com^$dnsrewrite=NOERROR;A;1.2.3.4` adds an `A` record with the value `1.2.3.4`.

* `||example.com^$dnsrewrite=NOERROR;AAAA;abcd::1234` adds an `AAAA` record with the value `abcd::1234`.

* `||example.com^$dnsrewrite=NOERROR;CNAME;example.org` adds a `CNAME` record. See explanation above.

* `||example.com^$dnsrewrite=NOERROR;HTTPS;32 example.com alpn=h3` adds an `HTTPS` record. Only a subset of parameter values is supported: values must be `contiguous` and, where a `value-list` is `expected`, only one value is currently supported:

   ```none
   ipv4hint=127.0.0.1             // Supported.
   ipv4hint="127.0.0.1"           // Unsupported.
   ipv4hint=127.0.0.1,127.0.0.2   // Unsupported.
   ipv4hint="127.0.0.1,127.0.0.2" // Unsupported.
   ```

  This will be changed in the future.

* `||example.com^$dnsrewrite=NOERROR;MX;32 example.mail` adds an `MX` record with precedence value `32` and exchange value `example.mail`.

* `||example.com^$dnsrewrite=NOERROR;SVCB;32 example.com alpn=h3` adds a `SVCB` value. See the `HTTPS` example above.

* `||example.com^$dnsrewrite=NOERROR;TXT;hello_world` adds a `TXT` record with the value `hello_world`.

* `||_svctype._tcp.example.com^$dnsrewrite=NOERROR;SRV;10 60 8080 example.com` adds an `SRV` record with priority value `10`, weight value `60`, port`8080`, and target value `example.com`.

* `||example.com^$dnsrewrite=NXDOMAIN;;` responds with an `NXDOMAIN` code.

* `$dnstype=AAAA,denyallow=example.org,dnsrewrite=NOERROR;;` responds with an empty `NOERROR` answers for all `AAAA` requests except the ones for `example.org`.

Exception rules remove one or all rules:

* `@@||example.com^$dnsrewrite` removes all DNS rewrite rules.

* `@@||example.com^$dnsrewrite=1.2.3.4` removes the DNS rewrite rule that adds an `A` record with the value `1.2.3.4`.

#### `important`

The `important` modifier applied to a rule increases its priority over any other rule without the modifier. Even over basic exception rules.

**Examples:**

* In this example:

  ```none
  ||example.org^$important
  @@||example.org^
  ```

  `||example.org^$important` will block all requests to `*.example.org` despite the exception rule.

* In this example:

  ```none
  ||example.org^$important
  @@||example.org^$important
  ```

  the exception rule also has the `important` modifier, so it will work.

#### `badfilter`

The rules with the `badfilter` modifier disable other basic rules to which they refer. It means that the text of the disabled rule should match the text of the `badfilter` rule (without the `badfilter` modifier).

**Examples:**

* `||example.com$badfilter` disables `||example.com`.

* `@@||example.org^$badfilter` disables `@@||example.org^`.

  **NOTE:** The `badfilter` modifier currently doesn't work with `/etc/hosts`-style rules. `127.0.0.1 example.org$badfilter` will **not** disable the original `127.0.0.1 example.org` rule.

#### `ctag`

**The `ctag` modifier can only be used in AdGuard Home.**

It allows to block domains only for specific types of DNS client tags. You can assign tags to clients in the AdGuard Home UI. In the future, we plan to assign tags automatically by analyzing the behavior of each client.

The syntax is:

```none
$ctag=value1|value2|...
```

If one of client's tags matches the `ctag` values, this rule applies to the client. The syntax for exclusion is:

```none
$ctag=~value1|~value2|...
```

If one of client's tags matches the exclusion `ctag` values, this rule doesn't apply to the client.

**Examples:**

* `||example.org^$ctag=device_pc|device_phone`: block `example.org` for clients tagged as `device_pc` or `device_phone`.

* `||example.org^$ctag=~device_phone`: block `example.org` for all clients except those tagged as `device_phone`.

The list of allowed tags:

* By device type:

  * `device_audio`: audio devices.
  * `device_camera`: cameras.
  * `device_gameconsole`: game consoles.
  * `device_laptop`: laptops,
  * `device_nas`: NAS (Network-attached Storages).
  * `device_pc`: PCs.
  * `device_phone`: phones.
  * `device_printer`: printers.
  * `device_securityalarm`: security alarms.
  * `device_tablet`: tablets.
  * `device_tv`: TVs.
  * `device_other`: other devices.

* By operating system:

  * `os_android`: Android.
  * `os_ios`: iOS.
  * `os_linux`: Linux.
  * `os_macos`: macOS.
  * `os_windows`: Windows.
  * `os_other`: other OSes.

* By user group:

  * `user_admin`: administrators.
  * `user_regular`: regular users.
  * `user_child`: children.


## `/etc/hosts`-Style Syntax {#etc-hosts-syntax}

For each host a single line should be present with the following information:

```none
IP_address canonical_hostname [aliases...]
```

Fields of the entries are separated by any number of space or tab characters. Text from the `#` character until the end of the line is a comment and is ignored.

Hostnames may contain only alphanumeric characters, hyphen-minus signs (`-`), and periods (`.`). They must begin with an alphabetic character and end with an alphanumeric character. Optional aliases provide for name changes, alternate spellings, shorter hostnames, or generic hostnames (for example, `localhost`).

**Example:**

```none
# This is a comment
127.0.0.1 example.org example.info
127.0.0.1 example.com
127.0.0.1 example.net # this is also a comment
```

In AdGuard Home, the IP addresses are used to respond to DNS queries for these domains. In Private AdGuard DNS, these addresses are simply blocked.


## Domains-Only Syntax

A simple list of domain names, one name per line.

**Example:**

```none
# This is a comment
example.com
example.org
example.net # this is also a comment
```

If a string is not a valid domain (e.g. `*.example.org`), AdGuard Home will consider it to be an [Adblock-style](#adblock-style-syntax) rule.

## Hostlists Compiler

If you are maintaining a blocklist and use different sources in it, [Hostlists compiler][hlc] may be useful to you. It is a simple tool that makes it easier to compile a hosts blocklist compatible with AdGuard Home, Private AdGuard DNS or any other AdGuard product with DNS filtering.

What it's capable of:

1. Compile a single blocklist from multiple sources.

2. Exclude the rules you don't need.

3. Cleanup the resulting list: deduplicate, remove invalid rules, and compress the list.

[hlc]: https://github.com/AdguardTeam/HostlistCompiler

[hlc]: https://github.com/AdguardTeam/HostlistCompiler
[sdn]: https://github.com/AdguardTeam/AdGuardSDNSFilter

[adb]: https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters
[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[rfc1035]: https://tools.ietf.org/html/rfc1035#section-3.5
