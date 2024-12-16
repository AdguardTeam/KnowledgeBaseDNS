---
title: IPs liées
sidebar_position: 3
---

## Qu'est-ce qu'une IP liée et pourquoi est-ce utile

Not all devices support encrypted DNS protocols. In this case, you should consider setting up unencrypted DNS. For example, you can use a **linked IP address**. The only requirement for a linked IP address is that it must be a residential IP.

:::note

A **residential IP address** is assigned to a device connected to a residential ISP. It's usually tied to a physical location and given to individual homes or apartments. People use residential IP addresses for everyday online activities like browsing the web, sending emails, using social media, or streaming content.

:::

Sometimes, a residential IP address may already be in use, and if you try to connect to it, AdGuard DNS will prevent the connection.
![Linked IPv4 address \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked.png)
If that happens, please reach out to support at [support@adguard-dns.io](mailto:support@adguard-dns.io), and they’ll assist you with the right configuration settings.

## How to set up linked IP

The following instructions explain how to connect to the device via **linking IP address**:

1. Open Dashboard.
2. Add a new device or open the settings of a previously connected device.
3. Go to _Use DNS server addresses_.
4. Open _Plain DNS server addresses_ and connect the linked IP.
   ![Linked IP \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked_step4.png)

## Dynamic DNS: Why it is useful

Every time a device connects to the network, it gets a new dynamic IP address. When a device disconnects, the DHCP server can assign the released IP address to another device on the network. This means dynamic IP addresses change frequently and unpredictably. Consequently, you'll need to update settings whenever the device is rebooted or the network changes.

To automatically keep the linked IP address updated, you can use DNS. AdGuard DNS will regularly check the IP address of your DDNS domain and link it to your server.

:::note

Dynamic DNS (DDNS) is a service that automatically updates DNS records whenever your IP address changes. It converts network IP addresses into easy-to-read domain names for convenience. The information that connects a name to an IP address is stored in a table on the DNS server. DDNS updates these records whenever there are changes to the IP addresses.

:::

This way, you won’t have to manually update the associated IP address each time it changes.

## Dynamic DNS: How to set it up

1. First, you need to check if DDNS is supported by your router settings:
   - Go to _Router settings_ → _Network_
   - Locate the DDNS or the _Dynamic DNS_ section
   - Navigate to it and verify that the settings are indeed supported. _This is just an example of what it may look like. It may vary depending on your router_
     ![DDNS supported \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dynamic_dns.png)
2. Register your domain with a popular service like [DynDNS](https://dyn.com/remote-access/), [NO-IP](https://www.noip.com/), or any other DDNS provider you prefer.
3. Enter the domain in your router settings and sync the configurations.
4. Go to the Linked IP settings to connect the address, then navigate to _Advanced Settings_ and click _Configure DDNS_.
5. Input the domain you registered earlier and click _Configure DDNS_.
   ![Configure DDNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dns_supported.png)

All done, you've successfully set up DDNS!

## Automation of linked IP update via script

### On Windows

The easiest way is to use the Task Scheduler:

1. Create a task:
   - Open the Task Scheduler.
   - Create a new task.
   - Set the trigger to run every 5 minutes.
   - Select _Run Program_ as the action.
2. Select a program:
   - In the _Program or Script_ field, type \`powershell'
   - In the _Add Arguments_ field, type:
     - `Command "Invoke-WebRequest -Uri 'https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}'"`
3. Save the task.

### On macOS and Linux

On macOS and Linux, the easiest way is to use `cron`:

1. Open crontab:
   - In the terminal, run `crontab -e`.
2. Add a task:
   - Insert the following line:
     `/5 * * * * curl https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}`
   - This job will run every 5 minutes
3. Save crontab.

:::note Important

- Make sure you have `curl` installed on macOS and Linux.
- Remember to copy the address from the settings and replace the `ServerID` and `UniqueKey`.
- If more complex logic or processing of query results is required, consider using scripts (e.g. Bash, Python) in conjunction with a task scheduler or cron.

:::
