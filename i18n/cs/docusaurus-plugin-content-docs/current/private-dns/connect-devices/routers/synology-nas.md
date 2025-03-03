---
title: Synology NAS
sidebar_position: 9
---

Routery Synology NAS se neuvěřitelně snadno používají a lze je spojit do jedné mesh sítě. Síť můžete spravovat na dálku kdykoli a odkudkoli. AdGuard DNS můžete nakonfigurovat také přímo v routeru.

## Použijte panel správce routeru

Pokud váš router Keenetic nepodporuje konfiguraci DNS-over-HTTPS nebo DNS-over-TLS, použijte tyto pokyny:

1. Otevřete panel správce routeru. Lze k němu přistupovat skrze adresy `192.168.1.1` nebo `192.168.0.1`.
2. Zadejte uživatelské jméno správce (obvykle je to admin) a heslo routeru.
3. Otevřete _Ovládací panely_ nebo _Síť_.
4. Vyberte _Síťové rozhraní_ nebo _Nastavení sítě_.
5. Vyberte svou Wi-Fi nebo kabelové připojení.
6. Vyberte _Ruční DNS_. Vyberte _Použít tyto DNS servery_ nebo _Zadat DNS server ručně_ a zadejte následující adresy DNS serverů:
    - IPv4: `94.140.14.49` a `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` a `2a10:50c0:0:0:0:0:dad:ff`
7. Uložte nastavení.
8. Propojte svou IP adresu (nebo vyhrazenou IP adresu, pokud máte předplatné Team).

- [Vyhrazené IP adresy](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Propojené IP adresy](private-dns/connect-devices/other-options/linked-ip.md)
