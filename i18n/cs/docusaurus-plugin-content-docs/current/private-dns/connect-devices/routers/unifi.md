---
title: UniFi
sidebar_position: 10
---

Router UiFi (obecně známý jako řada UniFi společnosti Ubiquiti) má řadu výhod, díky nimž je vhodný zejména pro domácí, firemní a podnikové prostředí.

Novější firmware UniFi nedávno přidal podporu DNS-over-HTTPS. UniFi tuto funkci označuje jako _Encrypted DNS_.

## Konfigurace DNS-over-HTTPS

Pokud váš router UniFi podporuje DNS-over-HTTPS, postupujte podle těchto pokynů.

Routery UiFi používají DNS razítka URL pro zadání URL DNS-over-HTTPS. Tato URL musí být vypočítána pomocí vaší soukromé URL DNS-over-HTTPS.

Získejte URL DNS-over-HTTPS, která se používá k výpočtu DNS razítka URL.

1. Přejděte na ovládací panel soukromého AdGuard DNS.
2. Přejděte na _Šifrovaný DNS_ → _Vlastní_ a zadejte následující nastavení DNS serveru:
    - Typ zařízení: 'Router'
    - Značka zařízení: 'Unifi'
    - Název zařízení: použijte název vašeho zařízení Unifi
3. Klikněte na _Další_.
4. Přejděte na _Používat adresy DNS serverů_ → _DNS-over-HTTPS_ a poznamenejte si adresu URL DNS-over-HTTPS (např. https://d.adguard-dns.com/dns-query/123456abc).

Vygenerujte DNS razítko pomocí [kalkulačky DNS razítek DNSCrypt] (https://dnscrypt.info/stamps/) a nastavte ho.

1. Protokol: DNS-over-HTTPS
2. Název hostitele: d.adguard-dns.com
3. Cesta: /dns-query/123456abc (nahraďte 123456abc hodnotou získanou z vašeho ovládacího panelu AdGuard DNS)
4. Zrušte zaškrtnutí
    - Žádný filtr
    - Žádné logy
5. Zkopírujte URL pro razítko DNS (např. sdns://AgcAAAAAA…)

Zapněte DNS-over-HTTPS v UniFi.

1. Přihlaste se k ovladači Ubiquiti UniFi.
2. Přejděte do _Nastavení_ → _Bezpečnost_.
3. Klikněte na _Ochrana_.
4. Přejděte na _Šifrovaný DNS_ → _Vlastní_ a zadejte následující adresy DNS serveru.
    - Název serveru: 'AdGuard DNS'
    - DNS razítko: URL DNS razítka zkopírováno výše
5. Klikněte na _Uložit_.

## Použijte panel správce routeru

Pokud váš router Keenetic nepodporuje konfiguraci DNS-over-HTTPS nebo DNS-over-TLS, použijte tyto pokyny.

1. Přihlaste se k ovladači Ubiquiti UniFi.
2. Přejděte do _Nastavení_ → _Sítě_.
3. Klikněte na _Upravit síť_ → _WAN_.
4. Přejděte na _Společná nastavení_ → _DNS server_ a zadejte následující adresy DNS serverů:
    - IPv4: `94.140.14.49` a `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` a `2a10:50c0:0:0:0:0:dad:ff`
5. Klikněte na _Uložit_.
6. Vraťte se na _Síť_.
7. Vyberte _Upravit síť_ → _LAN_.
8. Najděte položku _Název serveru DHCP_ a vyberte možnost _Ručně_.
9. Do pole _DNS Server 1_ zadejte adresu brány. Případně můžete zadat adresy serverů AdGuard DNS do polí _DNS Server 1_ a _DNS Server 2_:
    - IPv4: `94.140.14.49` a `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` a `2a10:50c0:0:0:0:0:dad:ff`
10. Uložte nastavení.
11. Propojte svou IP adresu (nebo vyhrazenou IP adresu, pokud máte předplatné Team).
     - [Dedikované IP adresy](private-dns/connect-devices/other-options/dedicated-ip.md)
     - [Propojené IP adresy](private-dns/connect-devices/other-options/linked-ip.md)
