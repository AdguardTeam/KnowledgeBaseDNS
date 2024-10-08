---
title: Verknüpfte IPs
sidebar_position: 3
---

## Was verknüpfte IPs sind und warum sie nützlich sind

Nicht alle Geräte unterstützen verschlüsselte DNS-Protokolle. In diesem Fall sollten Nutzer:innen in Betracht ziehen, unverschlüsselten DNS einzurichten.

You can use a **linked IP address**: in this setup, the service will consider all standard DNS queries coming from that IP address and for that specific device. Die einzige Voraussetzung für eine verknüpfte IP-Adresse ist, dass es sich um eine Wohnsitz-IP handeln muss.

:::note

Eine **Wohnsitz-IP-Adresse** wird einem Gerät zugewiesen, das mit einem örtlichen ISP verbunden ist. Sie ist in der Regel an einen bestimmten Ort gebunden und wird einzelnen Häusern oder Wohnungen zugeordnet. People use residential IP addresses for everyday online activities like browsing the web, sending emails, using social media, or streaming content.

:::

Sometimes, a residential IP address may already be in use, and if you try to connect to it, AdGuard DNS will prevent the connection.
![Verknüpfte IPv4-Adresse \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked.png)
Falls dies passiert, wenden Sie sich bitte an den Support unter [support@adguard-dns.io](mailto:support@adguard-dns.io), und sie werden Ihnen mit den richtigen Konfigurationseinstellungen weiterhelfen.

## So richten Sie eine verknüpfte IP ein

Die folgenden Anweisungen erklären, wie Sie eine Verbindung zum Gerät über eine **verknüpfte IP-Adresse** herstellen:

1. Open Dashboard.
2. Add a new device or open the settings of a previously connected device.
3. Go to _Use DNS server addresses_.
4. Open _Plain DNS server addresses_ and connect the linked IP.
   ![Verknüpfte IP-Adresse \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked_step4.png)

## Dynamisches DNS: Warum es nützlich ist

Jedes Mal, wenn ein Gerät eine Verbindung zum Netzwerk herstellt, erhält es eine neue dynamische IP-Adresse. When a device disconnects, the DHCP server reassigns IP addresses to the remaining devices. This means dynamic IP addresses can change frequently and unpredictably. Consequently, you'll need to update settings whenever the device is rebooted or the network changes.

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

### Unter Windows

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

### Unter macOS und Linux

On macOS and Linux, the easiest way is to use `cron`:

1. Open crontab:
   - In the terminal, run `crontab -e`.
2. Add a task:
   - Insert the following line:
     `/5 * * * * curl https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}`
   - This job will run every 5 minutes
3. Save crontab.

:::note Wichtig

- Make sure you have `curl` installed on macOS and Linux.
- Remember to copy the address from the settings and replace the `ServerID` and `UniqueKey`.
- If more complex logic or processing of query results is required, consider using scripts (e.g. Bash, Python) in conjunction with a task scheduler or cron.

:::
