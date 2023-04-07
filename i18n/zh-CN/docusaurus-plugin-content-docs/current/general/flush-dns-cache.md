---
title: 如何刷新 DNS 缓存
sidebar_position: 4
---

操作系统和互联网浏览器保存和存储 DNS 缓存，即有关以前 DNS 查找的信息。 这加快网站加载速度，因为缓存包含所请求域的 IP 地址：系统不是引用 DNS 服务器，而是从缓存中获取对查询的响应。

然而，存储在计算机或浏览器上的过时 DNS 缓存数据可能会导致显示或加载网站时出现问题。 更糟糕的是，DNS 缓存可能被网络攻击或病毒损坏。 在这种情况下，未经授权的域名或 IP 地址将会加入其中。 例如，您的浏览器可能会将您重定向到恶意 IP 地址或广告页面，而不是转到 google.com。

为避免上述问题，您需要清除 DNS 缓存：删除所有保存的 DNS 解析信息，以便下次发送查找请求时，您的计算机从 DNS 服务器接收更新过的数据。

## 如何在 Mac 系统上刷新 DNS 缓存

要刷新 Mac 上的 DNS 缓存，请运行 ** Terminal **，并根据您的设备上安装的 macOS 版本输入特定命令：

* `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` 用于 macOS v13 (Ventura)、12 (Monterey)、11 (Big Sur)、10.15 (Catalina)

* `sudo killall -HUP mDNSResponder` 用于 macOS v10.14（Mojave）、10.13（High Sierra）、10.12（Sierra）、10.08（Mountain Lion）、10.07（Lion）

* `sudo dscacheutil -flushcache` 和 `sudo killall -HUP mDNSResponder` 用于 macOS v10.11（El Capitan）、10.9（Mavericks）

* `sudo discoveryutil mdnsflushcache` 和 `sudo discoveryutil udnsflushcaches` 用于 macOS v10.10

* `sudo dscacheutil -flushcache` 用于 macOS v10.6（Snow Leopard）、10.5（Leopard）

* `lookupd -flushcache` 用于 macOS v10.4（Tiger）

在键盘上点击*返回* ，输入账户的管理员密码，然后再按*返回*。 该过程完成后，没有任何通知。 然而，您可以添加另一条命令，例如，当 DNS 缓存刷新完成后，收到通知：

`sudo killall -HUP mDNSResponder; say dns cleared successfully`

## 如何在 Windows 上刷新 DNS 缓存

在 Windows 上清除 DNS 缓存很简单。 该流程对几乎所有版本的 Windows 都是一样的。

以管理员身份打开命令提示符，输入以下命令： `ipconfig /flushdns`。 如果命令成功，您会收到消息「*已成功刷新 DNS 解析器缓存*」。

## 如何在 Linux 上刷新 DNS 缓存

不同的 Linux 发行版可能使用他们自己的 DNS 服务。 一些发行版，如 Ubuntu，默认不支持 DNS 服务。

在您刷新 DNS 缓存之前，找出您的发行版有哪种服务，以及它是否被默认启用。 其中一些是 **NCSD**（名称服务缓存守护进程）、**dnsmasq** 和 **BIND**（伯克利互联网域名）。

### 如何刷新本地 NCSD 的 DNS 缓存

在您的 Linux 计算机上使用下面的命令：

`sudo /etc/init.d/nscd restart`

请输入您的密码。

### 如何刷新本地 dnsmasq DNS 缓存

在您的 Linux 计算机上使用下面的命令：

`sudo /etc/init.d/dnsmasq restart`

然后，如有必要，输入您的密码。 您会看到服务停止和再次启动的响应。

### 如何刷新本地 BIND DNS 缓存

如果您使用 BIND DNS 服务，您可以运行几个命令清除 DNS 缓存。 您可能需要输入一个密码完成这个过程。

`sudo /etc/init.d/named restart`

`sudo rndc restart`

`sudo rndc exec`

## 如何在基于 Chrome 的浏览器里刷新 DNS 缓存

在浏览器地址栏中，输入 **chrome://net-internals/#dns** 链接，并点击「*Clear host cache*」按钮。 
