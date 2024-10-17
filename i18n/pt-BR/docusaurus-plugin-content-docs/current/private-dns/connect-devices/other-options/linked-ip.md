---
title: Linked IPs
sidebar_position: 3
---

## What linked IPs are and why they are useful

Not all devices can support encrypted DNS protocols. In this case, users should consider setting up unencrypted DNS.

You can use a **linked IP address**: in this setup, the service will consider all standard DNS queries coming from that IP address and for that specific device. The only requirement for a linked IP address is that it must be a residential IP.

:::note

A **residential IP address** is assigned to a device connected to a residential ISP. It's usually tied to a physical location and given to individual homes or apartments. People use residential IP addresses for everyday online activities like browsing the web, sending emails, using social media, or streaming content.

:::

Sometimes, a residential IP address may already be in use, and if you try to connect to it, AdGuard DNS will prevent the connection.
![Linked IPv4 address \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked.png)
If that happens, please reach out to support at [support@adguard-dns.io](mailto:support@adguard-dns.io), and they’ll assist you with the right configuration settings.

## How to set up linked IP

The following instructions explain how to connect to the device via **linking IP address**:

1. Abra a Dashboard.
2. Add a new device or open the settings of a previously connected device.
3. Go to _Use DNS server addresses_.
4. Open _Plain DNS server addresses_ and connect the linked IP.
   ![Linked IP \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked_step4.png)

## Dynamic DNS: Why it is useful

Every time a device connects to the network, it gets a new dynamic IP address. When a device disconnects, the DHCP server reassigns IP addresses to the remaining devices. This means dynamic IP addresses can change frequently and unpredictably. Consequently, you'll need to update settings whenever the device is rebooted or the network changes.

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

### No Windows

A maneira mais fácil é usar o Task Scheduler:

1. Crie uma tarefa:
   - Abra o Task Scheduler.
   - Crie uma nova tarefa.
   - Defina o gatilho para executar a cada 5 minutos.
   - Selecione _Executar Programa_ como a ação.
2. Selecione um programa:
   - No campo _Programa ou Script_, digite \`powershell'
   - No campo _Adicionar Argumentos_, digite:
     - `Command "Invoke-WebRequest -Uri 'https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}'"`
3. Salve a tarefa.

### No macOS e Linux

No macOS e Linux, a maneira mais fácil é usar `cron`:

1. Abra o crontab:
   - No terminal, execute `crontab -e`.
2. Adicione uma tarefa:
   - Insira a seguinte linha:
     `/5 * * * * curl https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}`
   - Este trabalho será executado a cada 5 minutos
3. Salve o crontab.

:::note Importante

- Certifique-se de ter `curl` instalado no macOS e Linux.
- Lembre-se de copiar o endereço das configurações e substituir o `ServerID` e `UniqueKey`.
- Se for necessária uma lógica mais complexa ou processamento dos resultados da consulta, considere usar scripts (por exemplo, Bash, Python) em conjunto com um agendador de tarefas ou cron.

:::
