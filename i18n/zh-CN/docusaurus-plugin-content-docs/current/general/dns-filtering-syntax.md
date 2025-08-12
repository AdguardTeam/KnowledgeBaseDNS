---
title: DNS 过滤规则语法
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

在这篇文章中，我们展示如何编写自定义 DNS 过滤规则，以便在 AdGuard 产品中使用。

快速链接：[下载 AdGuard 广告拦截程序](https://agrd.io/download-kb-adblock)，[获取 AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started)，[使用 AdGuard DNS](https://agrd.io/download-dns)。

:::

## 前言 {#introduction}

用户可以使用 AdGuard DNS 过滤规则语法使规则更加灵活，以便它们能够根据您的偏好屏蔽内容。 AdGuard DNS 过滤规则语法可用于不同的 AdGuard 产品，如 AdGuard Home、 AdGuard DNS、 Windows/Mac/Android 的 AdGuard。

这是三种不同的编写主机拦截列表方法：

- [Adblock-style syntax][]: the modern approach to writing filtering rules based on using a subset of the Adblock-style rule syntax. 这样阻止拦截列表与浏览器广告拦截器兼容。

- [`/etc/hosts`语法](#etc-hosts-syntax)：使用与操作系统处理其主机文件相同的语法的老式、经过实践检验的语法。

- [Domains-only 语法](#domains-only-syntax)是一个简单的域名列表。

If you are creating a blocklist, we recommend using the [Adblock-style syntax][]. 与旧式语法相比，它有几个重要的优点：

- **拦截列表大小。**使用模式匹配允许您拥有单个规则，而不是数百个 `/etc/hosts` 条目。

- **兼容性。**您的屏蔽列表将与浏览器广告拦截器兼容，并且与浏览器过滤器列表共享规则会更容易。

- **可扩展性。**在过去的十年中，Adblock 风格的语法有了很大的发展，我们认为我们能进一步扩展它并为网络范围的拦截器提供额外的功能。

If you’re maintaining either a `/etc/hosts`-style blocklist or multiple filtering lists (regardless of type), we provide a tool for blocklist compilation. We named it [Hostlist compiler][] and we use it ourselves to create [AdGuard DNS filter][].

## 基本示例 {#basic-examples}

- `||example.org^`：阻止访问 `example.org` 域及其所有子域，例如 `www.example.org` 。

- `@@||example.org^`：取消阻止对 `example.org` 域及其所有子域的访问。

- `1.2.3.4 example.org`：（注意，旧的 `/etc/hosts` 语法）在 AdGuard Home 里用 `1.2.3.4` 对 `example.org` 域名的查询，但 **没有** 其子网域的查询。 在私人 AdGuard DNS 中，阻止对 `example.org` 的访问。 `www.example.org` 仍然允许。

  在 AdGuard Home 中，对主机使用未指定的 IP 地址（`0.0.0.0`）或本地地址（`127.0.0.1` 等）基本上等同于拦截该主机。

  ```none
  # 返回 example.org 的 IP 地址 1.2.3.4。
  1.2.3.4 example.org
# 通过响应 0.0.0.0 来阻止 example.org。
  0.0.0.0 example.org
  ```

- `example.org`：一个简单的域规则。 阻止 `example.org` 域，而**不是**其子域。 `www.example.org` 仍然允许。

- `！ 这是一行注释`和`# 这也是一行注释`：注释。

- `/REGEX/`：拦截访问与特定的正则表达式匹配的域名。

## Adblock-style 语法 {#adblock-style-syntax}

This is a subset of the [traditional Adblock-style syntax][] which is used by browser ad blockers.

```none
     rule = ["@@"] pattern [ "$" modifiers ]
modifiers = [modifier0, modifier1[, ...[, modifierN]]]
```

- `pattern`：主机名掩码。 每个主机名都与此掩码匹配。 该模式还可以包含特殊字符，如下所述。

- `@@`: 用于例外的标记规则。 如果用户想取消匹配主机名的过滤，请在规则开头添加此标记。

- `modifiers`：阐明规则参数。 规则参数有可能会限制规则的范围，甚至完全改变它们的工作方式。

### 特殊字符 {#special-characters}

- `*`: 通配符字符。 它用于表示任何字符集。 这也可以是一个空的字符串或者是任意长度的字符串。

- `||`：匹配主机名的开头，包括任何子域名。 例如，`||example.org` 匹配 `example.org` 和 `test.example.org`，但不匹配 `testexample.org`。

- `^`：分隔符字符。 Unlike browser ad blocking, there’s nothing to separate in a hostname, so the only purpose of this character is to mark the end of the hostname.

- `|`：指向主机名开头或结尾的指针。 该值取决于掩码中的字符位置。 例如，规则 `ample.org|` 对应于 `example.org` 但不对应于 `example.org.com`。 `|example` 对应于 `example.org` 但不对应于 `test.example`。

### 正则表达式 {#regular-expressions}

If you want even more flexibility in making rules, you can use [regular expressions][regexp] instead of the default simplified matching syntax. 如果用户要使用正则表达式，则必须使用如下格式：

```none
pattern = "/" regexp "/"
```

**例如：**

- `/example.*/` 将拦截与 `example.*` 正则表达式匹配的主机。

- `@@/example.*/$important` 将取消拦截和匹配 `example.*` 的正则表达式。 请注意，此规则也包含 `important` 修饰符。

### 注释 {#comments}

任何以感叹号或井号开头的行都是注释，过滤引擎将忽略它。 注释通常放在规则之上，用于描述规则。

**例如：**

```none
! 这是一条注释
# 这也是一条注释
```

### 规则修改器 {#rule-modifiers}

用户可以添加修饰符来更改规则的行为。 修饰符必须位于规则末尾的 `$` 字符之后，并用逗号分隔。

**例如：**

- ```none ||example.org^$important
   ```

  `||example.org^` 是匹配模式。 `$` 是分隔符，表示规则的其余部分是修饰符。 `important` 是修饰符。

- 用户可能希望在一条规则中使用多个修饰符。 在这种情况下，用逗号分隔它们：

  ```none
  ||example.org^$client=127.0.0.1,dnstype=A
  ```

  `||example.org^` 是匹配模式。 `$` 是分隔符，表明规则的其余部分是修饰符。 `client=127.0.0.1` is the [`client`][] modifier with its value, `127.0.0.1`. `,` 是修饰符之间的分隔符。 And finally, `dnstype=A` is the [`dnstype`][] modifier with its value, `A`.

:::note

If a rule contains a modifier not listed in this document, the whole rule **must be ignored**. This way we avoid false-positives when people are trying to use unmodified browser ad blockers’ filter lists like EasyList or EasyPrivacy.

:::

#### `client` {#client-modifier}

The `client` modifier allows specifying clients this rule is applied to. There are two main ways to identify a client:

- 通过其 IP 地址或 CIDR 前缀。 这种方式适用于所有类型的客户端。

- 通过名称。 这种方式仅适用于用户手动添加的持久性客户端（在 AdGuard Home 中）和设备（在私人 AdGuard DNS 中）。

  :::note

  In AdGuard Home, ClientIDs are not currently supported, only names are. If you have added a client with the name “My Client” and ClientID `my-client` spell your modifier as `$client='My Client'` as opposed to `$client=my-client`.

  :::

The syntax is:

```none
$client=value1|value2|...
```

You can also exclude clients by adding a `~` character before the value. In this case, the rule is not be applied to this client’s DNS requests.

```none
$client=~value1
```

Client names usually contain spaces or other special characters, which is why you should enclose the name in quotes. Both single and double ASCII quotes are supported. Use the backslash (`\`) to escape quotes (`"` and `'`), commas (`,`), and pipes (`|`).

:::note

When excluding a client, you **must** place `~` outside the quotes.

:::

**例如：**

- `@@||*^$client=127.0.0.1`: 取消拦截本地主机的所有内容。

- `||example.org^$client='Frank\'s laptop'`：仅对名为 `Frank's laptop` 的客户端拦截`example.org`。 请注意，名称中的引号 (`'`) 必须转义。

- `||example.org^$client=~'Mary\'s\, John\'s\, and Boris\'s laptops'`: 除了名为 `Mary's, John's, and Boris's laptops`的客户端，为其他所有人拦截 `example.org` 。 请注意，逗号 (`,`) 也必须转义。

- `||example.org^$client=~Mom|~Dad|Kids`：只对 `Kids` 拦截 `example.org` ，但不对 `Mom` 和 `Dad` 拦截它。 此示例演示如何在一个规则中指定多个客户端。

- `||example.org^$client=192.168.0.0/24`：为 IP 地址在 `192.168.0.0` 到 `192.168.0.255` 范围内的所有客户端拦截 `example.org`。

#### `denyallow` {#denyallow-modifier}

You can use the `denyallow` modifier to exclude domains from the blocking rule. To add multiple domains to one rule, use the `|` character as a separator.

The syntax is:

```none
$denyallow=domain1|domain2|...
```

This modifier allows avoiding creating unnecessary exception rules when our blocking rule covers too many domains. You may want to block everything except for a couple of TLD domains. You could use the standard approach, i.e. rules like this:

```none
! 屏蔽一切。
/.*/

! 取消对一些 TLD 的屏蔽。
@@||com^
@@||net^
```

The problem with this approach is that this way you will also unblock tracking domains that are located on those TLDs (i.e. `google-analytics.com`). Here’s how to solve this with `denyallow`:

```none
*$denyallow=com|net
```

**例如：**

- `*$denyallow=com|net`: 除了 `*.com` 和 `*.net` 以外拦截所有内容。

- `@@*$denyallow=com|net`：除了 `*.com` 和 `*.net` 以外取消拦截所有内容

- `||example.org^$denyallow=sub.example.org`: block `example.org` and `*.example.org` but don’t block `sub.example.org`.

#### `dnstype` {#dnstype-modifier}

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

**例如：**

- `||example.org^$dnstype= AAAA`：拦截对 `example.org`的 IPv6 地址的 DNS 查询。

- `||example.org^$dnstype=~A|~CNAME`：只允许 `A` 和 `CNAME` 对 `example.org` 进行 DNS 查询 ，拦截其余部分。

:::note

Before version **v0.108.0,** AdGuard Home would use the type of the request to filter the response records, as opposed to the type of the response record itself.  That caused issues, since that meant that you could not write rules that would allow certain `CNAME` records in responses in `A` and `AAAA` requests. In **v0.108.0** that behaviour was changed, so now this:

:::

```none
||canon.example.com^$dnstype=~CNAME
```

allows you to avoid filtering of the following response:

```none
应答：
->  example.com
    canonical name = canon.example.com.
    ttl = 60
->  canon.example.com
    internet address = 1.2.3.4
    ttl = 60
```

#### `dnsrewrite` {#dnsrewrite-modifier}

The `dnsrewrite` response modifier allows replacing the content of the response to the DNS request for the matching hosts. Note that this modifier in AdGuard Home works in all rules, but in Private AdGuard DNS — only in custom ones.

**Rules with the `dnsrewrite` response modifier have higher priority than other rules in AdGuard Home and AdGuard DNS.**

Responses to all requests for a host matching a `dnsrewrite` rule will be replaced. The answer section of the replacement response will only contain RRs that match the request’s query type and, possibly, CNAME RRs. Note that this means that responses to some requests may become empty (`NODATA`) if the host matches a `dnsrewrite` rule.

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
! 或：
||example.com^$dnsrewrite=NOERROR;CNAME;example.net
```

then the response will be something like:

```sh
nslookup example.com my.adguard.local
```

```none
Server: my.adguard.local
Address: 127.0.0.1#53

Non-authoritative answer:
example.com canonical name = example.net.
Name: example.net
Address: 1.2.3.4
```

Next, the `CNAME` rewrite. After that, all other records’ values are summed as one response, so this:

```none
||example.com^$dnsrewrite=NOERROR;A;1.2.3.4
||example.com^$dnsrewrite=NOERROR;A;1.2.3.5
```

will result in a response with two `A` records.

Currently supported RR types with examples:

- `||4.3.2.1.in-addr.arpa^$dnsrewrite=NOERROR;PTR;example.net.` 添加了一个反向 DNS 的 `PTR` 记录。 向 DNS 服务器发出的 `1.2.3.4` 反向 DNS 请求将产生 `example.net`。

  :::note

  The IP MUST be in reverse order. See [RFC 1035][rfc1035].

  :::

- `||example.com^$dnsrewrite=NOERROR;A;1.2.3.4` 添加了一个值为 `1.2.3.4` 的 `A` 记录。

- `||example.com^$dnsrewrite=NOERROR;AAAA;abcd::1234` 添加了一个值为 `abcd::1234` 的 `AAAA` 记录。

- `||example.com^$dnsrewrite=NOERROR;CNAME;example.org` 添加一个 `CNAME` 记录。 见上述解释。

- `||example.com^$dnsrewrite=NOERROR;HTTPS;32 example.com alpn=h3` 添加一个 `HTTPS` 记录。 仅支持参数值的子集：值必须`连续` ，并且，如果`值列表`是`可预见的`，则当前仅支持一个值：

   ```none
   ipv4hint=127.0.0.1             // 支持。
   ipv4hint="127.0.0.1"           // 不支持。
   ipv4hint=127.0.0.1,127.0.0.2   // 不支持。
   ipv4hint="127.0.0.1,127.0.0.2" // 不支持。
   ```

  这点在将来会有所改变。

- `||example.com^$dnsrewrite=NOERROR;MX;32 example.mail` 添加一个 `MX` 记录，优先级值为 `32` ，交换值为 `example.mail`。

- `||example.com^$dnsrewrite=NOERROR;SVCB;32 example.com alpn=h3` 添加一个 `SVCB` 值。 请参阅上面的 `HTTPS` 示例。

- `||example.com^$dnsrewrite=NOERROR;TXT;hello_world` 添加一个 `TXT` 记录，其值为 `hello_world`。

- `||_svctype._tcp.example.com^$dnsrewrite=NOERROR;SRV;10 60 8080 example.com` 添加一条 `SRV` 记录，优先级值 `10`，权重值 `60`，端口 `8080`，目标值 `example.com`。

- `||example.com^$dnsrewrite=NXDOMAIN;;` 以 `NXDOMAIN` 代码进行响应。

- `$dnstype=AAAA,denyallow=example.org,dnsrewrite=NOERROR;;` 以空的 `NOERROR` 响应所有 `AAAA` 的请求，除了 `example.org`。

Exception rules unblock one or all rules:

- `@@||example.com^$dnsrewrite` 删除所有 DNS 重写规则。

- `@@||example.com^$dnsrewrite=1.2.3.4` 域名解析到IP地址 `1.2.3.4` 的 `A` 的 DNS 重写规则已解除阻止。

:::info

If you are maintaining a blocklist that is included in AdGuard DNS and AdGuard Home (i.e. included into [HostlistsRegistry][hostlistsregistry]), `$dnsrewrite` rules will be automatically filtered out. If these rules are required for your blocklist, please request permission by opening a new issue in the [HostlistsRegistry][hostlistsregistry] repo.

:::

#### `important` {#important-modifier}

The `important` modifier applied to a rule increases its priority over any other rule without the modifier. Even over basic exception rules.

**例如：**

- 例如：

  ```none
  ||example.org^$important
  @@||example.org^
  ```

  `||example.org^$important` 将拦截所有对 `*.example.org` 的请求，即使有例外规则。

- 例如：

  ```none
  ||example.org^$important
  @@||example.org^$important
  ```

  例外规则也有 `important` 修饰符，所以会起作用。

#### `badfilter` {#badfilter-modifier}

The rules with the `badfilter` modifier disable other basic rules to which they refer. It means that the text of the disabled rule should match the text of the `badfilter` rule (without the `badfilter` modifier).

**例如：**

- `||example.com$badfilter` 禁用 `||example.com`.

- `@@||example.org^$badfilter` 禁用 `@@||example.org^`.

  :::note

  The `badfilter` modifier currently doesn’t work with `/etc/hosts`-style rules. `127.0.0.1 example.org$badfilter` will **not** disable the original `127.0.0.1 example.org` rule.

  :::

#### `ctag` {#ctag-modifier}

**The `ctag` modifier can only be used in AdGuard Home.**

It allows to block domains only for specific types of DNS client tags. You can assign tags to clients in the AdGuard Home UI. In the future, we plan to assign tags automatically by analyzing the behavior of each client.

The syntax is:

```none
$ctag=value1|value2|...
```

If one of client’s tags matches the `ctag` values, this rule applies to the client. The syntax for exclusion is:

```none
$ctag=~value1|~value2|...
```

If one of client’s tags matches the exclusion `ctag` values, this rule doesn’t apply to the client.

**例如：**

- `||example.org^$ctag=device_pc|device_phone`：为标记为 `device_pc` 或 `device_phone`的客户端拦截 `example.org` 。

- `||example.org^$ctag=~device_phone`：为除了标记为 `device_phone` 的客户端以外的所有客户端，拦截 `example.org` 。

The list of allowed tags:

- 按设备类型：

    - `device_audio`：音频设备
    - `device_camera`：相机
    - `device_gameconsole`：游戏机
    - `device_laptop`：笔记本电脑
    - `device_nas`：NAS（网络附属存储）
    - `device_pc`：个人计算机
    - `device_phone`：手机
    - `device_printer`：打印机
    - `device_securityalarm`：安全警报
    - `device_tablet`：平板电脑
    - `device_tv`：电视
    - `device_other`：其他设备

- 按操作系统：

    - `os_android`: Android
    - `os_ios`：iOS
    - `os_linux`：Linux
    - `os_macos`：macOS
    - `os_windows`：Windows
    - `os_other`：其他操作系统

- 按用户组：

    - `user_admin`：管理员
    - `user_regular`：普通用户
    - `user_child`：儿童

## `/etc/hosts` 样式语法 {#etc-hosts-syntax}

For each host a single line should be present with the following information:

```none
IP_address canonical_hostname [aliases...]
```

Fields of the entries are separated by any number of space or tab characters. Text from the `#` character until the end of the line is a comment and is ignored.

Hostnames may contain only alphanumeric characters, hyphen-minus signs (`-`), and periods (`.`). They must begin with an alphabetic character and end with an alphanumeric character. Optional aliases provide for name changes, alternate spellings, shorter hostnames, or generic hostnames (for example, `localhost`).

**例如：**

```none
# 这是一个注释
127.0.0.1 example.org example.info
127.0.0.1 example.com
127.0.0.1 example.net # 这也是一个注释
```

In AdGuard Home, the IP addresses are used to respond to DNS queries for these domains. In Private AdGuard DNS, these addresses are simply blocked.

## 仅限域的语法 {#domains-only-syntax}

A simple list of domain names, one name per line.

**例如：**

```none
# 这是一个注释
example.com
example.org
example.net # 这也是一个注释
```

If a string is not a valid domain (e.g. `*.example.org`), AdGuard Home will consider it to be an [Adblock-style syntax][] rule.

## 主机清单编译器 {#hostlist-compiler}

If you are maintaining a blocklist and use different sources in it, [Hostlist compiler][] may be useful to you. It is a simple tool that makes it easier to compile a hosts blocklist compatible with AdGuard Home, Private AdGuard DNS or any other AdGuard product with DNS filtering.

What it’s capable of:

1. 从多个源编译单个黑名单。

2. Exclude the rules you don’t need.

3. 清理生成的列表：重复数据删除、删除无效规则和压缩列表。

<!-- local links -->


<!-- external links -->
[hostlistsregistry]: https://github.com/AdguardTeam/HostlistsRegistry
[Adblock-style syntax]: #adblock-style-syntax
[`client`]: #client-modifier
[`dnstype`]: #dnstype-modifier
[AdGuard DNS filter]: https://github.com/AdguardTeam/AdGuardSDNSFilter
[Hostlist compiler]: https://github.com/AdguardTeam/HostlistCompiler
[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[rfc1035]: https://tools.ietf.org/html/rfc1035#section-3.5
[traditional Adblock-style syntax]: https://adguard.com/kb/general/ad-filtering/create-own-filters/
