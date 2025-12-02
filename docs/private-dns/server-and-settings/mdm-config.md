---
title: Managing the AdGuard DNS mobile app via MDM
sidebar_position: 7
---

# Managing the AdGuard DNS mobile app via MDM

The AdGuard DNS mobile app supports enterprise management through MDM (Mobile Device Management) systems using the Managed App Configuration (MAC) standard.

This allows IT administrators to configure app settings centrally through EMM consoles, such as Google Workspace, Microsoft Intune, and other solutions compatible with [AppConfig.org](https://www.appconfig.org/).

## Compatibility and requirements

### Supported platforms

- **Android**: Fully implemented and tested
- **iOS**: In development

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

### Setup ID (setup_id)

**Type:** String  
**Required:** No  
**Valid values:** AdGuard DNS setup identifier

#### What the parameter does

Setup ID is a unique identifier for connecting a mobile device to your server in AdGuard DNS.

#### How the app responds to the parameter

On initial installation:

- If Setup ID is provided, the app automatically enters managed mode if it's not already in it
- The Setup ID input field becomes locked and filled with the specified value
- User cannot change the Setup ID manually
- The "Reset connection" option becomes unavailable

When the Setup ID value changes:

- The app completely resets the current connection
- All settings are reset
- User must go through the connection process again with the new Setup ID
- DNS protection automatically stops

If the parameter is not specified:

- User can enter Setup ID manually on first launch or scan a QR code

### Device name (device_name)

**Type:** String  
**Required:** No  
**Valid values:** Any device name

#### What the parameter does

Device Name sets the display name of the device in the AdGuard DNS control panel. This helps identify devices in a corporate environment.

#### How the app responds to the parameter

On initial installation:

- If name is provided, the app automatically enters managed mode if it's not already in it
- The specified name is automatically used when registering the device, if not set via Setup ID
- The device name input field is locked during setup

When the value changes:

- Nothing happens

If the parameter is not specified:

- User can enter device name manually on first launch
- The app may suggest Device Name specified via Setup ID

### DNS Protocol (dns_protocol)

**Type:** Choice  
**Required:** No  
**Valid values for Android:**

- `doh` — DNS-over-HTTPS (default)
- `dot` — DNS-over-TLS
- `doq` — DNS-over-QUIC

**Valid values for iOS:**

- `doh_native` — DNS-over-HTTPS + Native (default)
- `dot_native` — DNS-over-TLS + Native
- `doh_vpn` — DNS-over-HTTPS (default) + VPN
- `dot_vpn` — DNS-over-TLS + VPN
- `doq_vpn` — DNS-over-QUIC + VPN

#### What the parameter does

DNS Protocol determines which encryption protocol will be used for communication with AdGuard DNS servers.
DNS-over-QUIC not compatible with Native mode on iOS.

#### How the app responds to the parameter

On initial installation:

- If protocol is specified, the app automatically enters managed mode if it's not already in it
- The specified protocol will be used by default
- Protocol selection in settings becomes locked

When the value changes:

- The app automatically switches to the new protocol
- If DNS protection is active, automatic reconnection occurs

If the parameter is not specified:

- The user can select protocol manually in settings

## Managed mode

The app automatically enters managed mode when the MDM system provides at least one configuration parameter.

MDM parameters always take precedence over user settings:

- If a parameter is set via MDM, the user cannot change it
- Parameters not set via MDM remain available for user modification
- When MDM configuration is updated, changes are applied automatically

When the MDM system removes all configuration parameters at once:

- The app automatically exits managed mode
- All previously locked settings become available
- User can freely change parameters

## Configuration updates

- The app automatically receives notifications about configuration changes
- Changes are applied immediately upon receipt from the EMM system. EMM systems may have sync delays before configuration reaches the device.
- No app restart required

### AppConfig specification

AdGuard DNS Mobile follows the [AppConfig.org](https://www.appconfig.org/) standard to ensure compatibility with a wide range of EMM solutions.

### Configuration testing

On **Android**, use [Test DPC](https://play.google.com/store/apps/details?id=com.afwsamples.testdpc) for testing without a full MDM. As an alternative, you can use adb commands to simulate managed configuration.

On iOS, use a test account in your MDM solution.
