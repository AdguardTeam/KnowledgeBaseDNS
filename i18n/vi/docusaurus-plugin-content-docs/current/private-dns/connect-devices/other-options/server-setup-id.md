---
title: Server setup ID
sidebar_position: 6
---

## What is a server setup ID?

If you want to connect a device to a specific server and don’t want to manually create each device in the Dashboard on the website, you can use the **server setup ID**. Simply take the ID and use it to connect via the AdGuard DNS app. This way, the “device” will be automatically created upon connection.

## How to connect using server setup ID

1. Go to _Dashboard_ → [_Servers_](https://adguard-dns.io/dashboard/servers).
2. Select the desired server.
3. Scroll down and click _Setup ID_.
   ![Setup ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/server_settings_setup_ID.png)
4. Copy the **setup ID**.
   ![Server setup ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/settings_setup_ID.png)
5. Open the app and paste the **setup ID**.
   ![Paste setup ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/SetupIDMobile.png)
6. Choose a device name.
7. Click **Connect**.
   ![Connect \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ConnectMobile.png)

Done! You are now connected, and the device will be automatically created in the Dashboard.

## Resetting the server setup ID

If you want to disconnect all devices using a specific setup ID, you can reset it. To do so, follow these steps:

1. Go to _Dashboard_ → [_Servers_](https://adguard-dns.io/dashboard/servers) and select the desired server.
2. Scroll down and click _Setup ID_.
3. Click _Reset setup ID_.

After resetting, the Setup ID will change, and all devices that were using the old ID will be disconnected from the server.
