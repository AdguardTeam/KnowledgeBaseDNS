---
title: Fritz!Box
sidebar_position: 4
---

FRITZ!Box poskytuje maximální flexibilitu pro všechna zařízení díky současnému využití frekvenčních pásem 2,4 GHz a 5 GHz. Všechna zařízení připojená k zařízení FRITZ!Box jsou plně chráněna proti útokům z internetu. Konfigurace směrovačů této značky také umožňuje nastavit šifrovaný Soukromý AdGuard DNS.

## Konfigurace DNS-over-TLS

1. Otevřete panel správce routeru. Přístup k němu je možný skrze adresu fritz.box, IP adresu vašeho routeru nebo `192.168.178.1`.
2. Zadejte uživatelské jméno správce (obvykle je to admin) a heslo routeru.
3. Otevřete _Internet_ nebo _Domácí síť_.
4. Vyberte _DNS_ nebo _Nastavení DNS_.
5. V části DNS-over-TLS (DoT) zaškrtněte políčko _Použít DNS-over-TLS_, pokud to poskytovatel podporuje.
6. Vyberte _Použít vlastní označení názvu serveru TLS (SNI)_ a zadejte adresu soukromého DNS serveru AdGuard: `{Your_Device_ID}.d.adguard-dns.com`.
7. Uložte nastavení.

## Použijte panel správce routeru

Pokud váš router Fritz!Box nepodporuje konfiguraci DNS-over-TLS, použijte tento návod:

1. Otevřete panel správce routeru. Lze k němu přistupovat skrze adresy `192.168.1.1` nebo `192.168.0.1`.
2. Zadejte uživatelské jméno správce (obvykle je to admin) a heslo routeru.
3. Otevřete _Internet_ nebo _Domácí síť_.
4. Vyberte _DNS_ nebo _Nastavení DNS_.
5. Vyberte možnost _Ruční DNS_, poté vyberte _Použít tyto DNS servery_ nebo _Zadat DNS server ručně_ a zadejte následující adresy DNS serverů:
   - IPv4: `94.140.14.49` a `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` a `2a10:50c0:0:0:0:0:dad:ff`
6. Uložte nastavení.
7. Propojte svou IP adresu (nebo vyhrazenou IP adresu, pokud máte předplatné Team).

- [Vyhrazené IP adresy](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Propojené IP adresy](/private-dns/connect-devices/other-options/linked-ip.md)
