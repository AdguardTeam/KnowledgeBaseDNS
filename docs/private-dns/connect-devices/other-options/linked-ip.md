---
title: Linked IPs
sidebar_position: 3
---

## What are linked IPs?

Not all devices can support encrypted DNS protocols. In this case, users should consider setting up unencrypted DNS.

Blah blah blah.

## How to set up linked IP

The following instructions explain how to connect to the device via **linking IP address**:

1. Open Dashboard.

1. Add a new device or open the settings of a previously connected device.

1. Go to *Use DNS server addresses*.

1. Open *Plain DNS server addresses* and connect the Linked IP.

## DDNS: Why you need it

To automatically update the linked IP, use DDNS. AdGuard DNS will periodically check the IP address of the DDNS domain and associate it with your server.

Blah blah blah.

## DDNS: How to set it up

1. First, you need to check if DDNS is supported by your router settings:

    - To do this, go to the Router settings → Network section.
    - Locate the DDNS or Dynamic DNS section.
    - Navigate to it and verify that the settings are indeed supported.

1. Further instructions.

## Automation of linked IP update via script

### On Windows

The easiest way is to use the Task Scheduler:

1. Create a task:
    - Open the Task Scheduler.
    - Create a new task.
    - Set the trigger to run every 5 minutes.
    - Select "Run Program" as the action.

1. Further instructions.

### On macOS and Linux

On macOS and Linux, the easiest way is to use `cron`:

1. Open crontab:
    - In the terminal, run `crontab -e`.

1. Further instructions.
