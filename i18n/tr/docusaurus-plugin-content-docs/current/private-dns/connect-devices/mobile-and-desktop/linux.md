---
title: Linux
sidebar_position: 6
---

Bir Linux cihazını AdGuard DNS'e bağlanmak için önce onu _Pano_ öğesine ekleyin:

1. _Pano_ öğesine gidin ve _Yeni cihaz bağla_ öğesine tıklayın.
2. Açılır menüde _Cihaz türü_ olarak Linux öğesini seçin.
3. Cihazı adlandırın.
   ![Connecting device \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/choose_linux.png)

## AdGuard DNS İstemcisini kullanma

AdGuard DNS İstemcisi, şifrelenmiş DNS protokollerini kullanarak AdGuard DNS'e erişmenizi sağlayan çapraz platformlu bir konsol yardımcı programıdır.

Bu konu hakkında daha fazla bilgiyi [ilgili makalede](/dns-client/overview/) bulabilirsiniz.

## AdGuard VPN CLI'yi kullanma

Özel AdGuard DNS'i AdGuard VPN CLI (komut satırı arayüzü) kullanarak kurabilirsiniz. AdGuard VPN CLI'yi kullanmaya başlamak için Terminal'i kullanmanız gerekir.

1. AdGuard VPN CLI'yi [bu talimatları](https://adguard-vpn.com/kb/adguard-vpn-for-linux/installation/) izleyerek kurun.
2. Go to [Settings](https://adguard-vpn.com/kb/adguard-vpn-for-linux/settings/).
3. Belirli bir DNS sunucusu ayarlamak için şu komutu kullanın: `adguardvpn-cli config set-dns <server_address>`, buradaki `<server_address>` özel sunucunuzun adresidir.
4. DNS ayarlarını `adguardvpn-cli config set-system-dns on` yazarak etkinleştirin.

## Configure manually on Ubuntu (linked IP or dedicated IP required)

1. Click _System_ → _Settings_ → _Network_.
2. _Kablosuz_ sekmesini seçin, ardından bağlı olduğunuz ağı seçin.
3. Go to _IPv4_.
4. _Otomatik (DHCP)_ öğesini _Manuel_ olarak ayarlayın.
5. Change the listed DNS addresses to the following addresses:
   - `94.140.14.49`
   - `94.140.14.59`
6. _Uygula_ öğesine tıklayın.
7. _IPv6_ öğesine gidin.
8. _Otomatik_ öğesini _Manuel_ olarak ayarlayın.
9. Change the listed DNS addresses to the following addresses:
   - `2a10:50c0:0:0:0:0:ded:ff`
   - `2a10:50c0:0:0:0:0:dad:ff`
10. _Uygula_ öğesine tıklayın.
11. IP adresinizi (veya bir Takım aboneliğiniz varsa özel IP'nizi) bağlayın:
    - [Özel IP'ler](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Bağlı IP'ler](/private-dns/connect-devices/other-options/linked-ip.md)

## Configure manually on Debian (linked IP or dedicated IP required)

1. Terminali açın.
2. Komut satırına şunu yazın: `su`.
3. Enter your `admin` password.
4. Komut satırına şunu yazın: `nano /etc/resolv.conf`.
5. Listelenen DNS adreslerini aşağıdaki şekilde değiştirin:
   - IPv4: `94.140.14.49` ve `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` ve `2a10:50c0:0:0:0:0:dad:ff`
6. Dokümanı kaydetmek için _Ctrl + O_ tuşlarına basın.
7. _Enter_ tuşuna basın.
8. Dokümanı kaydetmek için _Ctrl + X_ tuşlarına basın.
9. Komut satırına şunu yazın: `/etc/init.d/networking restart`.
10. _Enter_ tuşuna basın.
11. Terminali kapatın.
12. IP adresinizi (veya bir Takım aboneliğiniz varsa özel IP'nizi) bağlayın:
    - [Özel IP'ler](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Bağlı IP'ler](/private-dns/connect-devices/other-options/linked-ip.md)

## dnsmasq'ı kullan

1. Aşağıdaki komutları kullanarak dnsmasq'ı yükleyin:

   `sudo apt updatesudo`

   `apt install`

   `dnsmasqsudo nano /etc/dnsmasq.conf`

2. dnsmasq.conf dosyasında aşağıdaki komutları kullanın:

   `no-resolv`

   `bogus-priv`

   `strict-order`

   `server=94.140.14.49`

   `server=94.140.14.59`

   `port=5353`

   `add-cpe-id={Your_Device_ID}`

3. dnsmasq hizmetini yeniden başlatın:

   `sudo service dnsmasq restart`

Hepsi tamam! Cihazınız AdGuard DNS'e başarıyla bağlandı.

:::note Önemli

If you see a notification that you are not connected to AdGuard DNS, most likely the port on which dnsmasq is running is occupied by other services. Sorunu çözmek için [bu talimatları](https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#bindinuse) kullanın.

:::

## EDNS (Genişletilmiş DNS) kullanma

EDNS, DNS protokolünü genişleterek daha büyük UDP paketlerinin ek veri taşımasını sağlar. AdGuard DNS'de, ekstra bir parametre kullanılarak DeviceID'nin düz DNS'te geçirilmesine izin verilir.

Sekiz basamaklı bir onaltılık tanımlayıcı olan DeviceID (örneğin, `1a2b3c4d`), DNS isteklerini belirli cihazlara bağlamaya yardımcı olur. Şifrelenmiş DNS için, bu ID alan adının bir parçasıdır (örneğin, `1a2b3c4d.d.adguard-dns.com`). Şifrelenmemiş DNS için bu tanımlayıcıyı aktarmak üzere EDNS gereklidir.

AdGuard DNS, `65074` numaralı seçeneği arayarak DeviceID'yi almak için EDNS kullanır. Böyle bir seçenek varsa, oradan DeviceID'yi okur. Bunun için terminalde `dig` komutunu kullanabilirsiniz:

```sh
dig @94.140.14.49 'www.example.com' A IN +ednsopt=65074:3031323334353637
```

Burada, `65074` seçenek kimliğidir ve `3031323334353637` onun hex biçimindeki değeridir (DeviceID: `01234567`).

Hepsi tamam! DeviceID görüntülenmelidir.

:::note

`dig` komutu sadece bir örnektir, bu eylemi gerçekleştirmek için EDNS seçeneklerini ekleme yeteneğine sahip herhangi bir DNS yazılımını kullanabilirsiniz.

:::

## Düz DNS kullanma

DNS yapılandırması için ekstra yazılım kullanmak istemiyorsanız, şifrelenmemiş DNS'i tercih edebilirsiniz. İki seçeneğiniz var: bağlı IP'ler veya özel IP'ler:

- [Özel IP'ler](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Bağlı IP'ler](/private-dns/connect-devices/other-options/linked-ip.md)
