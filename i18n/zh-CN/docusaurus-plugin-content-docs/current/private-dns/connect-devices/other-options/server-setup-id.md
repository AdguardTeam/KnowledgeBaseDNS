---
title: 服务器 Setup ID
sidebar_position: 6
---

## 服务器 Setup ID 是什么？

若需将设备连接至特定服务器，且不希望手动在网页控制面板中逐一创建设备，可以使用**服务器 Setup ID**。 只需获取该 ID 并通过 AdGuard DNS 应用完成连接， 「设备」将在连接时自动创建至控制面板。

## 通过服务器 Setup ID 连接的操作步骤

1. 前往「控制面板」→「[服务器](https://adguard-dns.io/dashboard/servers)」
2. 选择所需的服务器
3. 向下滚动并单击「Setup ID」
   ![Setup ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/server_settings_setup_ID.png)
4. 复制 **Setup ID**
   ![服务器 setup ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/settings_setup_ID.png)
5. 打开应用并粘贴 **Setup ID**
   ![粘贴 Setup ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/setup-id-zh_cn.png)
6. 输入设备名称
7. 点击「**连接**」
   ![连接 \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ConnectMobile.png)

完成！ 设备已成功连接，并将在控制面板中自动生成设备记录。

## 重置服务器 Setup ID

如需断开通过特定 Setup ID 连接的所有设备，可以通过重置实现。 请按照以下步骤操作：

1. 前往「控制面板」→「[服务器](https://adguard-dns.io/dashboard/servers)」并选择目标服务器
2. 向下滚动并单击「Setup ID」
3. 点击「重置 Setup ID」

重置后，Setup ID 将更改，所有使用原 ID 的设备将自动与服务器断开连接。
