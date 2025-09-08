---
title: Steam Deck
sidebar_position: 5
---

Herní konzole nepodporují šifrovaný DNS, ale jsou vhodné pro nastavení veřejného AdGuard DNS nebo soukromého AdGuard DNS prostřednictvím propojené IP adresy.

Je pravděpodobné, že váš router podporuje používání šifrovaných serverů DNS, takže na něm můžete kdykoli nakonfigurovat soukromý AdGuard DNS a připojit k němu herní konzoli.

[Jak nakonfigurovat router](/private-dns/connect-devices/routers/routers.md)

## Připojení k AdGuard DNS

Nakonfigurujte herní konzoli tak, aby používala veřejný server AdGuard DNS, nebo ji nakonfigurujte pomocí propojené IP adresy:

1. Otevřete nastavení Steam Deck kliknutím na ikonu ozubeného kola v pravém horním rohu obrazovky.
2. Klikněte na _Síť_.
3. Klikněte na ikonu ozubeného kola vedle síťového připojení, které chcete nakonfigurovat.
4. Vyberte IPv4 nebo IPv6 v závislosti na typu sítě, kterou používáte.
5. Vyberte možnost _Pouze automatické (DHCP) adresy_ nebo _Automatické (DHCP)_.
6. Do pole _DNS server_ zadejte jednu z následujících adres DNS serveru:
    - `94.140.14.49`
    - `94.140.14.59`
7. Save the changes.

Bylo by vhodnější použít propojenou IP (nebo vyhrazenou IP, pokud máte předplatné Team):

 - [Vyhrazené IP adresy](/private-dns/connect-devices/other-options/dedicated-ip.md)
 - [Propojené IP adresy](/private-dns/connect-devices/other-options/linked-ip.md)
