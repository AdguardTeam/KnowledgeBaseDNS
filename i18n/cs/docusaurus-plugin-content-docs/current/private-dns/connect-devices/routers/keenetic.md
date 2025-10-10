---
title: Keenetic
sidebar_position: 5
---

Routery Keenetic jsou známé svou stabilitou a flexibilními konfiguracemi, snadno se nastavují a umožňují snadnou instalaci šifrovaného soukromého AdGuard DNS do vašeho zařízení.

## Konfigurace DNS-over-HTTPS

1. Otevřete panel správce routeru. Přístup k němu je možný skrze adresu my.keenetic.net, IP adresu vašeho routeru nebo `192.168.1.1`.
2. Stiskněte tlačítko nabídky v dolní části obrazovky a vyberte _Správa_.
3. Otevřete _Systémová nastavení_.
4. Stiskněte _Možnosti komponenty_ → _Možnosti systémových komponent_.
5. V části _Nástroje a služby_ vyberte proxy DNS-over-HTTPS a nainstalujte jej.
6. Přejděte do _Menu_ → _Pravidla sítě_ → _Bezpečnost internetu_.
7. Přejděte na položku Servery DNS-over-HTTPS a klikněte na tlačítko _Přidat server DNS-over-HTTPS_.
8. Do pole `https://d.adguard-dns.com/dns-query/{Your_Device_ID}` zadejte adresu URL soukromého serveru AdGuard DNS.
9. Klikněte na _Uložit_.

## Konfigurace DNS-over-TLS

1. Otevřete panel správce routeru. Přístup k němu je možný skrze adresu my.keenetic.net, IP adresu vašeho routeru nebo `192.168.1.1`.
2. Stiskněte tlačítko nabídky v dolní části obrazovky a vyberte _Správa_.
3. Otevřete _Systémová nastavení_.
4. Stiskněte _Možnosti komponenty_ → _Možnosti systémových komponent_.
5. V části _Nástroje a služby_ vyberte proxy DNS-over-HTTPS a nainstalujte jej.
6. Přejděte do _Menu_ → _Pravidla sítě_ → _Bezpečnost internetu_.
7. Přejděte na položku Servery DNS-over-HTTPS a klikněte na tlačítko _Přidat server DNS-over-HTTPS_.
8. Do pole `tls://*********.d.adguard-dns.com` zadejte adresu URL soukromého serveru AdGuard DNS.
9. Klikněte na _Uložit_.

## Použijte panel správce routeru

Pokud váš router Keenetic nepodporuje konfiguraci DNS-over-HTTPS nebo DNS-over-TLS, použijte tyto pokyny:

1. Otevřete panel správce routeru. Lze k němu přistupovat skrze adresy `192.168.1.1` nebo `192.168.0.1`.
2. Zadejte uživatelské jméno správce (obvykle je to admin) a heslo routeru.
3. Otevřete _Internet_ nebo _Domácí síť_.
4. Vyberte _WAN_ nebo _Internet_.
5. Vyberte _DNS_ nebo _Nastavení DNS_.
6. Vyberte _Ruční DNS_. Vyberte _Použít tyto DNS servery_ nebo _Zadat DNS server ručně_ a zadejte následující adresy DNS serverů:
   - IPv4: `94.140.14.49` a `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` a `2a10:50c0:0:0:0:0:dad:ff`
7. Uložte nastavení.
8. Propojte svou IP adresu (nebo vyhrazenou IP adresu, pokud máte předplatné Team).

- [Vyhrazené IP adresy](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Propojené IP adresy](/private-dns/connect-devices/other-options/linked-ip.md)
