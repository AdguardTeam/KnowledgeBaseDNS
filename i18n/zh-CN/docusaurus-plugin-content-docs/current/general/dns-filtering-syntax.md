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

- [Adblock 风格语法][]：一种基于 Adblock 风格规则语法子集的现代过滤规则编写方式。 这样阻止拦截列表与浏览器广告拦截器兼容。

- [`/etc/hosts`语法](#etc-hosts-syntax)：使用与操作系统处理其主机文件相同的语法的老式、经过实践检验的语法。

- [Domains-only 语法](#domains-only-syntax)是一个简单的域名列表。

如果您正在创建拦截列表，我们建议使用 [Adblock 风格语法][]。 与旧式语法相比，它有几个重要的优点：

- **拦截列表大小。**使用模式匹配允许您拥有单个规则，而不是数百个 `/etc/hosts` 条目。

- **兼容性。**您的屏蔽列表将与浏览器广告拦截器兼容，并且与浏览器过滤器列表共享规则会更容易。

- **可扩展性。**在过去的十年中，Adblock 风格的语法有了很大的发展，我们认为我们能进一步扩展它并为网络范围的拦截器提供额外的功能。

如果您正在维护 `/etc/hosts` 风格的拦截列表或多个过滤列表（无论类型如何），我们提供一款用于拦截列表编译的工具。 我们将其命名为 [Hostlist compiler][]，并且我们自己也在使用它来创建 [AdGuard DNS 过滤器][]。

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

这是[传统 Adblock-style 语法][] 的子集，浏览器广告拦截程序都使用这种语法。

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

- `^`：分隔符字符。 与浏览器广告拦截不同，主机名中没有什么可以分隔的，因此该字符的唯一目的是标记主机名的结尾。

- `|`：指向主机名开头或结尾的指针。 该值取决于掩码中的字符位置。 例如，规则 `ample.org|` 对应于 `example.org` 但不对应于 `example.org.com`。 `|example` 对应于 `example.org` 但不对应于 `test.example`。

### 正则表达式 {#regular-expressions}

如果用户希望更加灵活地制定规则，可以使用[正则表达式][regexp]代替默认的简易匹配语法。 如果用户要使用正则表达式，则必须使用如下格式：

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

  `||example.org^` 是匹配模式。 `$` 是分隔符，表明规则的其余部分是修饰符。 `client=127.0.0.1` 是 [` client `][] 修饰符，其值是 `127.0.0.1`。 `,` 是修饰符之间的分隔符。 最后， `dnstype=A` 是 [`dnstype`][] 修饰符，其值为 `A`。

:::note

如果规则包含本文档未列出的修饰符，则**必须忽略整条规则**。 这样可以避免用户尝试使用未经修改的浏览器广告拦截程序过滤列表（如 EasyList 或 EasyPrivacy）时出现误报。

:::

#### `client` {#client-modifier}

:::note

`client` 修饰符仅可用于 AdGuard Home 和 AdGuard DNS。

:::

`client` 修饰符允许指定此规则所适用的客户端。 识别客户端的主要方法有两种：

- 通过其 IP 地址或 CIDR 前缀。 这种方式适用于所有类型的客户端。

- 通过名称。 这种方式仅适用于用户手动添加的持久性客户端（在 AdGuard Home 中）和设备（在私人 AdGuard DNS 中）。

  :::note

  在 AdGuard Home 中，目前不支持 ClientID，仅支持名称。 如果您添加了一个名称为「My Client」、ClientID 为 `my-client` 的客户端，请将修饰符写为 `$client='My Client'`，而不是 `$client=my-client`。

  :::

语法为：

```none
$client=value1|value2|...
```

还可以通过在值前添加 `~` 字符来排除客户端。 在这种情况下，该规则不会应用于此客户端的 DNS 请求。

```none
$client=~value1
```

客户端名称通常包含空格或其他特殊字符，因此建议用引号将名称括起来。 支持单引号和双引号（ASCII 引号）。 可使用反斜杠（`\`）转义引号（`"` 和 `'`）、逗号（`,`）和竖线（`|`）。

:::note

当排除客户端时，您 **必须** 将 `~` 放在引号外。

:::

**例如：**

- `@@||*^$client=127.0.0.1`: 取消拦截本地主机的所有内容。

- `||example.org^$client='Frank\'s laptop'`：仅对名为 `Frank's laptop` 的客户端拦截`example.org`。 请注意，名称中的引号 (`'`) 必须转义。

- `||example.org^$client=~'Mary\'s\, John\'s\, and Boris\'s laptops'`: 除了名为 `Mary's, John's, and Boris's laptops`的客户端，为其他所有人拦截 `example.org` 。 请注意，逗号 (`,`) 也必须转义。

- `||example.org^$client=~Mom|~Dad|Kids`：只对 `Kids` 拦截 `example.org` ，但不对 `Mom` 和 `Dad` 拦截它。 此示例演示如何在一个规则中指定多个客户端。

- `||example.org^$client=192.168.0.0/24`：为 IP 地址在 `192.168.0.0` 到 `192.168.0.255` 范围内的所有客户端拦截 `example.org`。

#### `denyallow` {#denyallow-modifier}

您可以使用 `denyallow` 修饰符从拦截规则中排除特定域名。 如需在一条规则中添加多个域名，请使用 `|` 字符作为分隔符。

语法为：

```none
$denyallow=domain1|domain2|...
```

当拦截规则覆盖的域名过多时，此修饰符可避免创建不必要的例外规则。 例如，您可能希望拦截除少数顶级域名之外的所有内容。 标准做法是编写如下规则：

```none
! 屏蔽一切。
/.*/

! 取消对一些 TLD 的屏蔽。
@@||com^
@@||net^
```

这种方法的缺点是，位于这些顶级域名下的追踪域名（如 `google-analytics.com`）也会被放行。 以下是使用 `denyallow` 解决此问题的方法：

```none
*$denyallow=com|net
```

**例如：**

- `*$denyallow=com|net`: 除了 `*.com` 和 `*.net` 以外拦截所有内容。

- `@@*$denyallow=com|net`：除了 `*.com` 和 `*.net` 以外取消拦截所有内容

- `||example.org^$denyallow=sub.example.org`：拦截 `example.org` 和 `*.example.org`，但不拦截 `sub.example.org`。

#### `dnstype` {#dnstype-modifier}

`dnstype` 修饰符允许指定触发此规则的 DNS 请求或响应类型。

语法为：

```none
$dnstype=value1|value2|...
$dnstype=~value1|~value2|~...
```

类型名称不区分大小写，但会依据实际 DNS 资源记录（RR）类型集合进行验证。

请勿将排除规则与包含规则混用。 以下写法：

```none
$dnstype=~value1|value2
```

等效于：

```none
$dnstype=value2
```

**例如：**

- `||example.org^$dnstype= AAAA`：拦截对 `example.org`的 IPv6 地址的 DNS 查询。

- `||example.org^$dnstype=~A|~CNAME`：只允许 `A` 和 `CNAME` 对 `example.org` 进行 DNS 查询 ，拦截其余部分。

:::note

在 **v0.108.0** 之前，AdGuard Home 会使用请求的类型来过滤响应记录，而非响应记录本身的类型。  这导致了一个问题：用户无法编写规则来允许 `A` 和 `AAAA` 请求的响应中的某些 `CNAME` 记录。 在 **v0.108.0** 中，此行为已更改。现在，以下规则：

:::

```none
||canon.example.com^$dnstype=~CNAME
```

可让您避免过滤以下响应：

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

`dnsrewrite` 响应修饰符允许替换匹配主机的 DNS 请求的响应内容。 请注意，此修饰符在 AdGuard Home 中适用于所有规则，但在 Private AdGuard DNS 中仅适用于自定义规则。

:::note

在 AdGuard Home 和 AdGuard DNS 中，带有 `dnsrewrite` 响应修饰符的规则优先级高于其他规则。

:::

对匹配 `dnsrewrite` 规则的主机的所有请求的响应都将被替换。 替换响应的应答部分仅包含与请求的查询类型匹配的资源记录，以及可能的 CNAME 记录。 请注意，这意味着如果主机匹配 `dnsrewrite` 规则，对某些请求的响应可能变为空（`NODATA`）。

简写语法为：

```none
$dnsrewrite=1.2.3.4
$dnsrewrite=abcd::1234
$dnsrewrite=example.net
$dnsrewrite=REFUSED
```

关键字必须全部大写（例如 `NOERROR`）。 关键字重写优先于其他重写，并将生成一个带有相应响应码的空响应。

完整语法格式为 `RCODE;RRTYPE;VALUE`：

```none
$dnsrewrite=NOERROR;A;1.2.3.4
$dnsrewrite=NOERROR;AAAA;abcd::1234
$dnsrewrite=NOERROR;CNAME;example.net
$dnsrewrite=REFUSED;;
```

带有 `NOERROR` 响应码的 `$dnsrewrite` 修饰符也可以将 `RRTYPE` 和 `VALUE` 字段留空。

`CNAME` 较为特殊，因为 AdGuard Home 将解析该主机并将其信息添加到响应中。 也就是说，如果 `example.net` 的 IP 为 `1.2.3.4`，且用户在其过滤规则中有以下内容：

```none
||example.com^$dnsrewrite=example.net
! 或：
||example.com^$dnsrewrite=NOERROR;CNAME;example.net
```

则响应将类似于：

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

接下来是 `CNAME` 重写。 之后，所有其他记录的值将汇总为一个响应，因此：

```none
||example.com^$dnsrewrite=NOERROR;A;1.2.3.4
||example.com^$dnsrewrite=NOERROR;A;1.2.3.5
```

将生成一个包含两条 `A` 记录的响应。

目前支持的 RR 类型及示例：

- `||4.3.2.1.in-addr.arpa^$dnsrewrite=NOERROR;PTR;example.net.` 添加了一个反向 DNS 的 `PTR` 记录。 向 DNS 服务器发出的 `1.2.3.4` 反向 DNS 请求将产生 `example.net`。

  :::note

  IP 必须反向排列。 请参阅 [RFC 1035][rfc1035]。

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

例外规则可以解除一条或所有规则的拦截。

- `@@||example.com^$dnsrewrite` 删除所有 DNS 重写规则。

- `@@||example.com^$dnsrewrite=1.2.3.4` 域名解析到IP地址 `1.2.3.4` 的 `A` 的 DNS 重写规则已解除阻止。

:::info

如果您维护的拦截列表被包含在 AdGuard DNS 和 AdGuard Home 中（即包含在 [HostlistsRegistry][hostlistsregistry] 中），`$dnsrewrite` 规则将被自动过滤掉。 如果您的拦截列表需要这些规则，请在 [HostlistsRegistry][hostlistsregistry] 仓库中提交新的 issue 以请求许可。

:::

#### `important` {#important-modifier}

应用于规则的 `important` 修饰符会使其优先级高于任何其他不带此修饰符的规则， 甚至高于基本的例外规则。

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

带有 `badfilter` 修饰符的规则会禁用它们所引用的其他基本规则。 这意味着被禁用的规则的文本应与 `badfilter` 规则的文本相匹配（不包括 `badfilter` 修饰符）。

**例如：**

- `||example.com$badfilter` 禁用 `||example.com`.

- `@@||example.org^$badfilter` 禁用 `@@||example.org^`.

  :::note

  `badfilter` 修饰符目前不适用于 `/etc/hosts` 风格的规则。 `127.0.0.1 example.org$badfilter` **不会**禁用原始的 `127.0.0.1 example.org` 规则。

  :::

#### `ctag` {#ctag-modifier}

:::note

`ctag` 修饰符仅可用于 AdGuard Home。

:::

它允许仅为特定类型的 DNS 客户端标签拦截域名。 用户可以在 AdGuard Home 界面中为客户端分配标签。 未来，我们计划通过分析每个客户端的行为来自动分配标签。

语法为：

```none
$ctag=value1|value2|...
```

如果客户端的标签之一与 `ctag` 值匹配，则此规则适用于该客户端。 排除语法为：

```none
$ctag=~value1|~value2|...
```

如果客户端的标签之一与排除的 `ctag` 值匹配，则此规则不适用于该客户端。

**例如：**

- `||example.org^$ctag=device_pc|device_phone`：为标记为 `device_pc` 或 `device_phone`的客户端拦截 `example.org` 。

- `||example.org^$ctag=~device_phone`：为除了标记为 `device_phone` 的客户端以外的所有客户端，拦截 `example.org` 。

允许的标签列表：

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

#### `respgeo` {#respgeo-modifier}

:::note

`respgeo` 修饰符仅可用于 AdGuard DNS。

:::

`respgeo` 修饰符允许您根据 DNS 响应中返回的 IP 地址的国家或 ASN 来应用规则。 它会检查**目标** IP 地址，即域名解析到的 IP 地址。 它**不会**检查用户、设备或 DNS 客户端的 IP 地址、国家或 ASN。

##### 按响应国家拦截

修饰符的值必须为 ISO 3166-1 alpha-2 格式的两位国家代码。 您也可以使用 `--` 来匹配无法确定国家的响应。

**例如：**

- `||*^$respgeo=US`：如果 DNS 响应中的 IP 地址与美国关联，则拦截域名。
- `||*^$respgeo=FR|DE`：如果 DNS 响应中的 IP 地址与法国或德国关联，则拦截域名。
- `||*^$respgeo=--`：如果 DNS 响应中的 IP 地址的国家未知，则拦截域名。
- `||*^$respgeo=~--`：如果 DNS 响应中的 IP 地址的国家已知，则拦截域名。
- `@@||whitehouse.gov^`：放行 `whitehouse.gov`，即使它被带有 `respgeo` 修饰符的通配符规则拦截。
- `@@||example.org^$respgeo=US`：如果 DNS 响应中的 IP 地址与美国关联，则放行 `example.org`。
- `||whitehouse.gov^$respgeo=US`：仅当 DNS 响应中的 IP 地址与美国关联时，才拦截 `whitehouse.gov`。
- 例如：

  ```none
  ||whitehouse.gov^
  @@||whitehouse.gov^$respgeo=US
  ```

  `@@||whitehouse.gov^$respgeo=US` **不会**放行 `whitehouse.gov`，因为第一条规则通过检查请求数据进行拦截，而第二条规则试图通过检查响应来放行。

您可以使用 `~` 来反转条件：

- `||*^$respgeo=~DE`：如果 DNS 响应中的 IP 地址与德国**无关**，则拦截域名。

**限制**

`respgeo` 修饰符根据当前*查询日志*逻辑使用单个计算出的 IP 地址和国家。 如果域名解析到多个 IP 地址或国家，AdGuard DNS 不会分析所有返回的 IP 地址。

由于许多域名使用 CDN、负载均衡或地理分布式基础设施，检测到的国家可能随时间变化。

如果无法确定国家，GeoIP 条件将不匹配。 使用 `respgeo=--` 来匹配国家未知的响应。

带有 `respgeo` 修饰符的规则在*查询日志*中显示为常规规则。

##### 按 ASN 拦截

`respgeo` 修饰符还可用于根据 DNS 响应中返回的 IP 地址的 ASN 来应用规则。

ASN 代表**自治系统编号**。 它标识一个自治系统，由 ISP、托管服务商、云提供商、公司或其他组织运营的网络。

此修饰符检查**目标 ASN**，即域名解析到的 IP 地址关联的 ASN。 它**不会**检查用户、设备或 DNS 客户端的 ASN。

修饰符的值必须为 `AS<number>` 格式的 ASN，例如 `AS15169`。

**例如：**

- `||*^$respgeo=AS15169`：如果 DNS 响应中的 IP 地址属于 ASN AS15169，则拦截域名。
- `||*^$respgeo=AS15169|AS8075`：如果 DNS 响应中的 IP 地址属于 ASN AS15169 或 AS8075，则拦截域名。
- `||*^$respgeo=AS--`：如果 DNS 响应中的 IP 地址的 ASN 未知，则拦截域名。
- `||*^$respgeo=~AS--`：如果 DNS 响应中的 IP 地址的 ASN 已知，则拦截域名。
- `@@||google.com^$respgeo=AS15169`：如果 DNS 响应中的 IP 地址属于 ASN AS15169，则放行 `google.com`。
- `||google.com^$respgeo=AS15169`：仅当 DNS 响应中的 IP 地址属于 ASN AS15169 时，才拦截 `google.com`。
- 例如：

  ```none
  ||google.com^
  @@||google.com^$respgeo=AS15169
  ```

  `@@||google.com^$respgeo=AS15169` **不会**放行 `google.com`，因为第一条规则通过检查请求数据进行拦截，而第二条规则试图通过检查响应来放行。

您可以使用 `~` 来反转条件：

- `||*^$respgeo=~AS15169`：如果 DNS 响应中的 IP 地址**不属于** ASN AS15169，则拦截域名。

**限制**

`respgeo` 修饰符根据当前*查询日志*逻辑使用单个计算出的 IP 地址和 ASN。 如果域名解析到多个 IP 地址或 ASN，AdGuard DNS 不会分析所有返回的 ASN。

大型 CDN、云或托管 ASN 可能包含许多无关的网站。 因此，拦截某个 ASN 可能影响超出预期的更多域名。

如果无法确定 ASN，ASN 条件将不匹配。 使用 `respgeo=AS--` 来匹配 ASN 未知的响应。

ASN 并不总是对应特定的公司、产品或服务。 它仅标识与解析 IP 地址关联的网络。

带有 `respgeo` 修饰符的规则在*查询日志*中显示为常规规则。

## `/etc/hosts` 样式语法 {#etc-hosts-syntax}

对于每个主机，应有一行包含以下信息：

```none
IP_address canonical_hostname [aliases...]
```

条目中的字段由任意数量的空格或制表符分隔。 从 `#` 字符到行尾的文本为注释，将被忽略。

主机名只能包含字母数字字符、连字符减号（`-`）和句点（`.`）。 它们必须以字母字符开头，以字母数字字符结尾。 可选的别名用于名称更改、替代拼写、较短的主机名或通用主机名（例如 `localhost`）。

**例如：**

```none
# 这是一个注释
127.0.0.1 example.org example.info
127.0.0.1 example.com
127.0.0.1 example.net # 这也是一个注释
```

在 AdGuard Home 中，这些 IP 地址用于响应对这些域名的 DNS 查询。 在个人版 AdGuard DNS 中，这些地址会被直接拦截。

## 仅限域的语法 {#domains-only-syntax}

一个简单的域名列表，每行一个域名。

**例如：**

```none
# 这是一个注释
example.com
example.org
example.net # 这也是一个注释
```

如果某个字符串不是有效域名（例如 `*.example.org`），AdGuard Home 将将其视为 [Adblock 风格语法][]规则。

## 主机清单编译器 {#hostlist-compiler}

如果您正在维护一个拦截列表，并且其中使用了不同的来源，[Hostlist compiler][] 可能对您有用。 这是一个简单的工具，可以更轻松地编译与 AdGuard Home、个人版 AdGuard DNS 或任何其他具有 DNS 过滤功能的 AdGuard 产品兼容的 hosts 拦截列表。

功能特性：

1. 从多个源编译单个黑名单。

2. 排除不需要的规则。

3. 清理生成的列表：重复数据删除、删除无效规则和压缩列表。

<!-- local links -->



<!-- external links -->

[hostlistsregistry]: https://github.com/AdguardTeam/HostlistsRegistry

[Adblock 风格语法]: #adblock-style-syntax
[` client `]: #client-modifier
[`dnstype`]: #dnstype-modifier

[AdGuard DNS 过滤器]: https://github.com/AdguardTeam/AdGuardSDNSFilter
[Hostlist compiler]: https://github.com/AdguardTeam/HostlistCompiler
[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[rfc1035]: https://tools.ietf.org/html/rfc1035#section-3.5
[传统 Adblock-style 语法]: https://adguard.com/kb/general/ad-filtering/create-own-filters/
