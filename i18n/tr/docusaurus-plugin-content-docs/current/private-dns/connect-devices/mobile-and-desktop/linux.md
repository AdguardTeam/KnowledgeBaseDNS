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

1. _Sistem_ → _Tercihler_ → _Ağ Bağlantıları_ öğesine tıklayın.
2. _Kablosuz_ sekmesini seçin, ardından bağlı olduğunuz ağı seçin.
3. _Düzenle_ → _IPv4_ öğesine tıklayın.
4. Listelenen DNS adreslerini aşağıdaki adreslerle değiştirin:
   - `94.140.14.49`
   - `94.140.14.59`
5. Turn off _Auto mode_.
6. _Uygula_ öğesine tıklayın.
7. _IPv6_ öğesine gidin.
8. Listelenen DNS adreslerini aşağıdaki adreslerle değiştirin:
   - `2a10:50c0:0:0:0:0:ded:ff`
   - `2a10:50c0:0:0:0:0:dad:ff`
9. Turn off _Auto mode_.
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

## Düz DNS kullanma

DNS yapılandırması için ekstra yazılım kullanmak istemiyorsanız, şifrelenmemiş DNS'i tercih edebilirsiniz. İki seçeneğiniz var: bağlı IP'ler veya özel IP'ler:

- [Özel IP'ler](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Bağlı IP'ler](/private-dns/connect-devices/other-options/linked-ip.md)
