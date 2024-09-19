---
title: Automatic connection
sidebar_position: 5
---

## What it is and why you need it

Not everyone feels at ease adding devices through the Dashboard. For instance, if you're a system administrator setting up multiple corporate devices simultaneously, you'd prefer to minimize manual tasks as much as possible.

Blah blah blah.

## How to configure Auto-connect devices

1. Open Dashboard.

1. Select the required *server*.

1. Go to *Devices*.

## Rules for generating automatically connected devices

### Device name

When manually creating devices, please note that there are a number of restrictions related to name length, characters, spaces, and hyphens:

**Name length**: maximum 50 characters. Characters beyond this limit are ignored.

**Permitted characters**: English letters, numbers and hyphens (`-`). Other characters are ignored.

**Spaces and hyphens**: Use a hyphen to indicate a space. For a hyphen, use a double hyphen `--`.

Let's look at one of the options with an example:

- Create a device with the selected DNS-over-TLS protocol
- Give it a space-sensitive name: AdGuard Test Device
- Device type: Android
- Click the “Generate Link” button
- Link generated: **tls://adr-{Your_Server_ID}-AdGuard-Test-Device.d.adguard-dns.com**

### Device type

This list contains all valid device types

- Windows - `win`
- macOS - `mac`
- Android - `adr`
- iOS - `ios`
- Linux - `lnx`
- Router - `rtr
- Smart TV - `stv
- Game console - `gam`
- Other - `otr
