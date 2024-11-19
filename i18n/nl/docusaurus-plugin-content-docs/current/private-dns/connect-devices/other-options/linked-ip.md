---
title: Linked IPs
sidebar_position: 3
---

## What linked IPs are and why they are useful

Niet alle apparaten ondersteunen versleutelde DNS-protocollen. In dit geval moet je overwegen om een niet-versleutelde DNS in te stellen. Je kunt bijvoorbeeld een **gekoppeld IP-adres** gebruiken. De enige vereiste voor een gekoppeld IP-adres is dat het een residentieel IP-adres moet zijn.

:::note

Een **residentieel IP-adres** wordt toegewezen aan een apparaat dat is verbonden met een residentiële ISP. Meestal is het gekoppeld aan een fysieke locatie en toegekend aan individuele huizen of appartementen. Mensen gebruiken residentiële IP-adressen voor dagelijkse online activiteiten, zoals surfen op internet, het verzenden van e-mails, het gebruik van sociale media of het streamen van inhoud.

:::

Soms kan een residentieel IP-adres al in gebruik zijn, en als je probeert er mee te verbinden, zal AdGuard DNS de verbinding voorkomen.
![Gekoppeld IPv4-adres \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked.png)
Mocht dat gebeuren, neem dan contact op met de ondersteuning via [support@adguard-dns.io](mailto:support@adguard-dns.io), dan helpen zij je met de juiste configuratie-instellingen.

## Hoe een gekoppeld IP-adres in te stellen

De volgende instructies leggen uit hoe je verbinding kunt maken met het apparaat via **het koppelen van een IP-adres**:

1. Open Dashboard.
2. Voeg een nieuw apparaat toe of open de instellingen van een eerder verbonden apparaat.
3. Ga naar _DNS-serveradressen gebruiken_.
4. Open _Gewone DNS-serveradressen_ en verbind het gekoppelde IP-adres.
   ![Gekoppelde IP \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked_step4.png)

## Dynamische DNS: waarom het nuttig is

Elke keer dat een apparaat verbinding maakt met het netwerk, krijgt het een nieuw dynamisch IP-adres. Wanneer de verbinding met een apparaat wordt verbroken, kan de DHCP-server het vrijgegeven IP-adres toewijzen aan een ander apparaat in het netwerk. Dit betekent dat dynamische IP-adressen vaak en onvoorspelbaar veranderen. Daarom moet je de instellingen bijwerken wanneer het apparaat opnieuw wordt opgestart of het netwerk verandert.

Om het gekoppelde IP-adres automatisch up-to-date te houden, kun je DNS gebruiken. AdGuard DNS controleert regelmatig het IP-adres van je DDNS-domein en koppelt dit aan je server.

:::note

Dynamic DNS (DDNS) is een service die DNS-records automatisch bijwerkt wanneer jouw IP-adres verandert. It converts network IP addresses into easy-to-read domain names for convenience. The information that connects a name to an IP address is stored in a table on the DNS server. DDNS updates these records whenever there are changes to the IP addresses.

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
