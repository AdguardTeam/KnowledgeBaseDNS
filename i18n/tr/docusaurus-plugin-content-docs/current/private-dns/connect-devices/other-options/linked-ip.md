---
title: Bağlı IP'ler
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

1. Panoyu açın.
2. Add a new device or open the settings of a previously connected device.
3. _DNS sunucu adreslerini kullan_ öğesine gidin.
4. Open _Plain DNS server addresses_ and connect the linked IP.
   ![Linked IP \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked_step4.png)

## Dynamic DNS: Why it is useful

Every time a device connects to the network, it gets a new dynamic IP address. When a device disconnects, the DHCP server reassigns IP addresses to the remaining devices. Bu, dinamik IP adreslerinin sık sık ve öngörülemeyen bir şekilde değişebileceği anlamına gelir. Consequently, you'll need to update settings whenever the device is rebooted or the network changes.

Bağlı IP adresini otomatik olarak güncel tutmak için DNS kullanabilirsiniz. AdGuard DNS, DDNS alan adınızın IP adresini düzenli olarak kontrol eder ve sunucunuza bağlar.

:::note

Dynamic DNS (DDNS) is a service that automatically updates DNS records whenever your IP address changes. Kolaylık sağlamak için ağ IP adreslerini okunması kolay alan adlarına dönüştürür. Bir adı bir IP adresine bağlayan bilgiler DNS sunucusundaki bir tabloda saklanır. DDNS, IP adreslerinde değişiklik olduğunda bu kayıtları günceller.

:::

Bu şekilde, ilişkili IP adresini her değiştiğinde elle güncellemeniz gerekmez.

## Dinamik DNS: Nasıl kurulur

1. Öncelikle, DDNS'nin yönlendirici ayarlarınız tarafından desteklenip desteklenmediğini kontrol etmeniz gerekir:
   - _Yönlendirici ayarları_ → _Ağ_ öğesine gidin
   - DDNS veya _Dinamik DNS_ bölümünü bulun
   - Navigate to it and verify that the settings are indeed supported. _Bu sadece neye benzeyebileceğine dair bir örnektir. Yönlendiricinize bağlı olarak değişebilir_
     ![DDNS destekli \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dynamic_dns.png)
2. Alan adınızı [DynDNS](https://dyn.com/remote-access/), [NO-IP](https://www.noip.com/) veya tercih ettiğiniz başka bir DDNS sağlayıcısı gibi popüler bir hizmetle tescil ettirin.
3. Yönlendirici ayarlarınıza alan adını girin ve yapılandırmaları senkronize edin.
4. Adresi bağlamak için Bağlı IP ayarlarına gidin, ardından _Gelişmiş Ayarlar_ öğesine gidin ve _DDNS'i yapılandır_ öğesine tıklayın.
5. Daha önce tescil ettirdiğiniz alan adını girin ve _DDNS'i yapılandır_ öğesine tıklayın.
   ![DDNS'i yapılandır \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dns_supported.png)

Hepsi tamam, DDNS'i başarıyla kurdunuz!

## Betik aracılığıyla bağlı IP güncellemesinin otomasyonu

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

1. Crontab'ı açın:
   - Terminalde `crontab -e` komutunu çalıştırın.
2. Add a task:
   - Aşağıdaki satırı ekleyin:
     `/5 * * * * curl https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}`
   - This job will run every 5 minutes
3. Save crontab.

:::note Önemli

- Make sure you have `curl` installed on macOS and Linux.
- Ayarlardan adresi kopyalamayı ve `ServerID` ile `UniqueKey` ifadelerini değiştirmeyi unutmayın.
- If more complex logic or processing of query results is required, consider using scripts (e.g. Bash, Python) in conjunction with a task scheduler or cron.

:::
