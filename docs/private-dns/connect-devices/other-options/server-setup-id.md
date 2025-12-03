---
title: Server setup ID
sidebar_position: 6
---

## What is a server setup ID?

If you want to connect a device to a specific server and don’t want to manually create each device in the Dashboard on the website, you can use the **server setup ID**. Simply take the ID and use it to connect via the AdGuard DNS app. This way, the “device” will be automatically created upon connection.

## How to connect using server setup ID

1. Go to *Dashboard* → [*Servers*](https://adguard-dns.io/dashboard/servers).
1. Select the desired server.
1. Scroll down and click *Setup ID*.
  ![Setup ID *mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/server_settings_setup_ID.png)
1. Copy the **setup ID**.
  ![Server setup ID *mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/settings_setup_ID.png)
1. Open the app and paste the **setup ID**.
  ![Paste setup ID *mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/SetupIDMobile.png)
1. Choose a device name.
1. Click **Connect**.
  ![Connect *mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ConnectMobile.png)

Done! You are now connected, and the device will be automatically created in the Dashboard.

## Resetting the server setup ID

If you want to disconnect all devices using a specific setup ID, you can reset it. To do so, follow these steps:

1. Go to *Dashboard* → [*Servers*](https://adguard-dns.io/dashboard/servers) and select the desired server.
1. Scroll down and click *Setup ID*.
1. Click *Reset setup ID*.

After resetting, the Setup ID will change, and all devices that were using the old ID will be disconnected from the server.
