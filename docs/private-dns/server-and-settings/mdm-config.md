---
title: Managing the AdGuard DNS mobile app via MDM
sidebar_position: 7
---

The AdGuard DNS mobile app supports enterprise management through MDM (Mobile Device Management) systems using the Managed App Configuration (MAC) standard.

This allows IT administrators to configure and implement AdGuard DNS settings across multiple devices centrally through EMM consoles, such as Google Workspace, Microsoft Intune, and other solutions compatible with [AppConfig.org](https://www.appconfig.org/).

:::note

Managed App Configuration is fully implemented and tested on Android, while support for iOS is planned and will be added in a future update.

:::

### Supported EMM solutions

The app is compatible with any EMM systems that support the AppConfig.org standard:

- Google Workspace (Android Enterprise)
- Microsoft Intune
- VMware Workspace ONE
- Jamf Pro (for iOS)
- MobileIron
- BlackBerry UEM
- Other AppConfig-compatible solutions

## Supported parameters

### Managed App Configuration Parameters

| **Parameter**                     | **Type** | **Required** | **Valid values**                                                                                         | **What it does**                                                                                    | **How the app responds**                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Setup ID** (`setup_id`)         | String   | No           | AdGuard DNS setup identifier                                                                             | A unique identifier for connecting a mobile device to your server in AdGuard DNS.                              | **On initial installation:**<br>• If provided, the app enters managed mode automatically<br>• Setup ID field becomes locked and pre-filled<br>• User cannot change it<br>• “Reset connection” becomes unavailable<br><br>**When value changes:**<br>• App fully resets the connection<br>• All settings reset<br>• User must reconnect with the new Setup ID<br>• DNS protection stops<br><br>**If not specified:**<br>• User can enter Setup ID manually or scan a QR code |
| **Device name** (`device_name`)   | String   | No           | Any device name                                                                                          | Sets the device's display name in the AdGuard DNS control panel to help identify devices.                      | **On initial installation:**<br>• If provided, the app enters managed mode automatically<br>• Name is used when registering the device (unless Setup ID already sets it)<br>• Device name field is locked<br><br>**When value changes:**<br>• Nothing happens<br><br>**If not specified:**<br>• User can enter device name manually<br>• App may suggest name from Setup ID                                                                                                 |
| **DNS Protocol** (`dns_protocol`) | Choice   | No           | **Android:** `doh`, `dot`, `doq`<br>**iOS:** `doh_native`, `dot_native`, `doh_vpn`, `dot_vpn`, `doq_vpn` | Defines which encrypted DNS protocol is used. *Note:* DNS-over-QUIC is not compatible with Native mode on iOS. | **On initial installation:**<br>• If provided, the app enters managed mode automatically<br>• Selected protocol is applied by default<br>• Protocol selection in settings becomes locked<br><br>**When value changes:**<br>• App switches to the new protocol<br>• If DNS protection is on, it reconnects automatically<br><br>**If not specified:**<br>• User can choose protocol manually in settings                                                                     |

## Managed mode

The app automatically enters managed mode when the MDM system provides at least one configuration parameter. In this mode, MDM settings always take priority over user preferences: any parameter configured through MDM cannot be changed by the user, while parameters not defined by MDM remain editable.

When the MDM configuration is updated, all changes are applied automatically. If the MDM system removes all configuration parameters at once, the app exits managed mode, previously locked settings become available again, and the user can freely modify all parameters.

## Configuration updates

The app automatically receives notifications about configuration changes, and any updates delivered by the EMM system are applied immediately upon arrival. Depending on the EMM provider, there may be a delay before the configuration reaches the device. No app restart is required for the changes to take effect.

## Configuration testing

On **Android**, use [Test DPC](https://play.google.com/store/apps/details?id=com.afwsamples.testdpc) for testing without a full MDM. As an alternative, you can use adb commands to simulate managed configuration. On **iOS**, you can use a test account in your MDM solution.
