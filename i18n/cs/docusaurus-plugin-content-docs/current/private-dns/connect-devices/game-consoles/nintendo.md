---
title: Nintendo
sidebar_position: 2
---

Herní konzole nepodporují šifrovaný DNS, ale jsou vhodné pro nastavení veřejného AdGuard DNS nebo soukromého AdGuard DNS prostřednictvím propojené IP adresy.

Je pravděpodobné, že váš router podporuje používání šifrovaných serverů DNS, takže na něm můžete kdykoli nakonfigurovat soukromý AdGuard DNS a připojit k němu herní konzoli.

[Jak nakonfigurovat router](/private-dns/connect-devices/routers/routers.md)

:::note Kompatibilita

Platí pro nové Nintendo 3DS, Nové Nintendo 3DS XL, Nové Nintendo 2DS XL, Nintendo 3DS, Nintendo 3DS XL a Nintendo 2DS.

:::

## Připojení k AdGuard DNS

Nakonfigurujte herní konzoli tak, aby používala veřejný server AdGuard DNS, nebo ji nakonfigurujte pomocí propojené IP adresy:

1. V nabídce Domů vyberte _Nastavení systému_.
2. Přejděte do _Internet_ → _Nastavení internetu_ → _Nastavení připojení_.
3. Vyberte síť ze seznamu.
4. Vyberte _Změnit nastavení_ → _Nastavení DNS_.
5. Nastavte _Automaticky_ na _Ruční_.
6. Vyberte _Primární DNS_. Podržením šipky doleva (tlačítko B) smažete stávající DNS.
7. Do pole _Primární DNS_ zadejte jednu z následujících adres DNS serveru:
   - `94.140.14.49`
   - `94.140.14.59`
8. Uložte nastavení.

Bylo by vhodnější použít propojenou IP (nebo vyhrazenou IP, pokud máte předplatné Team):

- [Vyhrazené IP adresy](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Propojené IP adresy](/private-dns/connect-devices/other-options/linked-ip.md)
