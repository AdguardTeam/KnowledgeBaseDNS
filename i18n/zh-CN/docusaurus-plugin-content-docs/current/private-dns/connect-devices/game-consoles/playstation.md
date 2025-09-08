---
title: PlayStation PS4/PS5
sidebar_position: 4
---

游戏主机不支持加密 DNS，但它们非常适合通过关联的 IP 地址设置公共 AdGuard DNS 或私人 AdGuard DNS。

路由器很可能支持加密的 DNS 服务器，因此用户可以配置私人 AdGuard DNS 并将游戏主机连接到它。

[如何配置路由器](/private-dns/connect-devices/routers/routers.md)

## 连接 AdGuard DNS

Configure your game console to use a public AdGuard DNS server or configure it via linked IP.

### For PlayStation 4

1. Turn on your PS4 console and sign in to your account.
2. From the home screen, select the gear icon located in the top row.
3. Go to _Settings_ → _Network_ → _Settings_.
4. Select _Set Up Internet Connection_.
5. Select _Use a LAN Cable_ → _Easy_.
6. Select _Manual_ and then select _Automatic_ for _IP Address Settings_.
7. For _DHCP Host Name_, select _Do Not Specify_.
8. For _DNS Settings_, select _Manual_.
9. 在「DNS 服务器」字段中，输入以下其中一个 DNS 服务器地址：
    - `94.140.14.49`
    - `94.140.14.59`
10. Select _Next_ to continue.
11. On the _MTU Settings_ screen, select _Automatic_.
12. On the _Proxy Server_ screen, select _Do Not Use_.
13. Select _Test Internet Connection_ to test your new DNS settings.
14. Once the test is complete and you see “Internet Connection: Successful”, save your settings.

### For PlayStation 5

1. Turn on your PS5 console and sign in to your account.
2. From the home screen, select the gear icon located in the top row.
3. Go to _Settings_ → _Network_ → _Settings_.
4. Select _Set Up Internet Connection_.
5. Select _Set Up Wired LAN_ → _Connect_.
6. Select _Manual_ and then select _Automatic_ for _IP Address Settings_.
7. For _DHCP Host Name_, select _Do Not Specify_.
8. For _DNS Settings_, select _Manual_.
9. 在「DNS 服务器」字段中，输入以下其中一个 DNS 服务器地址：
    - `94.140.14.49`
    - `94.140.14.59`
10. Select _Next_ to continue.
11. On the _MTU Settings_ screen, select _Automatic_.
12. On the _Proxy Server_ screen, select _Do Not Use_.
13. Select _Test Internet Connection_ to test your new DNS settings.
14. Once the test is complete and you see “Internet Connection: Successful”, save your settings.

最好使用关联的 IP 地址（如果拥有团队版订阅，可以使用专用 IP 地址）：

 - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
 - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
