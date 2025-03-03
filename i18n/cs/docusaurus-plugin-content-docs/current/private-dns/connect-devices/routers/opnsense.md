---
title: OPNSense
sidebar_position: 8
---

Firmware OPNSense se často používá ke konfiguraci bezdrátových přístupových bodů, serverů DHCP a serverů DNS a umožňuje konfigurovat AdGuard DNS přímo v zařízení.

## Použijte panel správce routeru

Pokud váš router Keenetic nepodporuje konfiguraci DNS-over-HTTPS nebo DNS-over-TLS, použijte tyto pokyny:

1. Otevřete panel správce routeru. Lze k němu přistupovat skrze adresy `192.168.1.1` nebo `192.168.0.1`.
2. Zadejte uživatelské jméno správce (obvykle je to admin) a heslo routeru.
3. V horní nabídce klikněte na _Služby_ a z rozevírací nabídky vyberte _server DHCP_.
4. Na stránce _DHCP server_ vyberte rozhraní, pro které chcete konfigurovat nastavení DNS (např. LAN, WLAN).
5. Přejděte dolů na _DNS servery_.
6. Vyberte _Ruční DNS_. Vyberte _Použít tyto DNS servery_ nebo _Zadat DNS server ručně_ a zadejte následující adresy DNS serverů:
    - IPv4: `94.140.14.49` a `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` a `2a10:50c0:0:0:0:0:dad:ff`
7. Uložte nastavení.
8. Volitelně můžete povolit DNSSEC pro zvýšení zabezpečení.
9. Propojte svou IP adresu (nebo vyhrazenou IP adresu, pokud máte předplatné Team).

- [Vyhrazené IP adresy](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Propojené IP adresy](/private-dns/connect-devices/other-options/linked-ip.md)
