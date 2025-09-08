---
title: Univerzální pokyny
sidebar_position: 2
---

Zde jsou uvedeny obecné pokyny pro nastavení Soukromého AdGuard DNS na routerech. Pokud nemůžete najít svůj konkrétní router v hlavním seznamu, můžete se obrátit na tohoto průvodce. Upozorňujeme, že zde uvedené údaje o konfiguraci jsou přibližné a mohou se lišit od nastavení vašeho konkrétního modelu.

## Použijte panel správce routeru

1. Otevřete předvolby routeru. Obvykle k nim máte přístup z prohlížeče. V závislosti na modelu vašeho routeru zkuste zadat jednu z následujících adres:
    - Routery Linksys a Asus obvykle používají: [http://192.168.1.1](http://192.168.1.1/)
    - Routery Netgear obvykle používají: [http://192.168.0.1](http://192.168.0.1/) nebo [http://192.168.1.1](http://192.168.1.1/) Routery D-Link obvykle používají [http://192.168.0.1](http://192.168.0.1/)
    - Routery Ubiquiti obvykle používají: [http://unifi.ubnt.com](http://unifi.ubnt.com/)

2. Zadejte heslo routeru.

   :::note Důležité

   Pokud je heslo neznámé, můžete ho často resetovat stisknutím tlačítka na routeru; tím se také obnoví tovární nastavení routeru. Některé modely mají speciální aplikaci pro správu, která by již měla být v počítači nainstalována.

   :::

3. V konzole správce routeru zjistěte, kde se nachází nastavení DNS. Změňte uvedené adresy DNS na následující adresy:
    - IPv4: `94.140.14.49` a `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` a `2a10:50c0:0:0:0:0:dad:ff`

4. Uložte nastavení.

5. Propojte svou IP adresu (nebo vyhrazenou IP adresu, pokud máte předplatné Team).

 - [Vyhrazené IP adresy](/private-dns/connect-devices/other-options/dedicated-ip.md)
 - [Propojené IP adresy](/private-dns/connect-devices/other-options/linked-ip.md)
