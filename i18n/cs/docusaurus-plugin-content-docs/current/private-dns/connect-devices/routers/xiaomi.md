---
title: Xiaomi
sidebar_position: 11
---

Routery Xiaomi mají mnoho výhod: stabilní a silný signál, zabezpečení sítě, vysoký výkon a inteligentní správu. Uživatelé mohou k místní síti Wi-Fi připojit až 64 zařízení.

Bohužel nepodporuje šifrované DNS, ale je skvělý pro nastavení AdGuard DNS prostřednictvím propojené IP.

## Použijte panel správce routeru

Pokud váš router Keenetic nepodporuje konfiguraci DNS-over-HTTPS nebo DNS-over-TLS, použijte tyto pokyny:

1. Otevřete panel správce routeru. Přístup k němu je možný skrze `192.168.31.1` nebo na IP adrese vašeho routeru.
2. Zadejte uživatelské jméno správce (obvykle je to admin) a heslo routeru.
3. V závislosti na modelu routeru otevřete _Pokročilá nastavení_ nebo _Pokročilé_.
4. Otevřete _Síť_ nebo _Internet_ a vyhledejte Nastavení DNS nebo DNS.
5. Vyberte _Ruční DNS_. Vyberte _Použít tyto DNS servery_ nebo _Zadat DNS server ručně_ a zadejte následující adresy DNS serverů:
    - IPv4: `94.140.14.49` a `94.140.14.59`
    - IPv6: `2a10:50c0:0:0:0:0:ded:ff` a `2a10:50c0:0:0:0:0:dad:ff`
6. Uložte nastavení.
7. Propojte svou IP adresu (nebo vyhrazenou IP adresu, pokud máte předplatné Team).

- [Vyhrazené IP adresy](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Propojené IP adresy](/private-dns/connect-devices/other-options/linked-ip.md)
