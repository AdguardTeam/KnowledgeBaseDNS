---
title: UniFi
sidebar_position: 10
---

Router UiFi (obecně známý jako řada UniFi společnosti Ubiquiti) má řadu výhod, díky nimž je vhodný zejména pro domácí, firemní a podnikové prostředí. Bohužel nepodporuje šifrovaný DNS, ale je skvělý pro nastavení AdGuard DNS prostřednictvím propojené IP.

## Použijte panel správce routeru

Pokud váš router Keenetic nepodporuje konfiguraci DNS-over-HTTPS nebo DNS-over-TLS, použijte tyto pokyny:

1. Přihlaste se k ovladači Ubiquiti UniFi.
2. Přejděte do _Nastavení_ → _Sítě_.
3. Klikněte na _Upravit síť_ → _WAN_.
4. Přejděte na _Společná nastavení_ → _DNS server_ a zadejte následující adresy DNS serverů.
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

- [Vyhrazené IP adresy](private-dns/connect-devices/other-options/dedicated-ip.md)
- [Propojené IP adresy](private-dns/connect-devices/other-options/linked-ip.md)
