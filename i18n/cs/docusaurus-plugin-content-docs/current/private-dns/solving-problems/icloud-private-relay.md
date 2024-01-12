---
title: Používání vedle služby iCloud Private Relay
sidebar_position: 2
toc_min_heading_level: 3
toc_max_heading_level: 4
---

Pokud používáte službu iCloud Private Relay, zobrazí se na hlavním panelu AdGuard DNS (a související [testovací stránce AdGuardu](https://adguard.com/test.html)) informace, že v daném zařízení nepoužíváte AdGuard DNS.

![Device is not connected](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-not-connected.jpeg)

Chcete-li tento problém vyřešit, musíte v nastavení zařízení povolit, aby webové stránky AdGuardu viděly vaši IP adresu.

- Na iPhonu nebo iPadu:

    1. Přejděte na `adguard-dns.io`

    1. Klepněte na tlačítko **Nastavení stránky** a potom klepněte na **Zobrazit IP adresu**

        ![iCloud Private Relay settings *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/icloudpr.jpg)

    1. Opakujte pro `adguard.com`

- Na Macu:

    1. Přejděte na `adguard-dns.io`

    1. V Safari vyberte **Zobrazit** → **Znovu načíst a zobrazit IP adresu**

    1. Opakujte pro `adguard.com`

Pokud se vám nezobrazuje možnost dočasně povolit webové stránce zobrazit vaši IP adresu, aktualizujte zařízení na nejnovější verzi iOS, iPadOS nebo macOS a zkuste to znovu.

Nyní by se vaše zařízení mělo správně zobrazit na ovládacím panelu AdGuard DNS:

![Device is connected](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/icloud_private_relay/device-connected.jpeg)

Nezapomeňte, že jakmile vypnete funkci Private Relay pro určitou webovou stránku, váš poskytovatel sítě bude také schopen zjistit, které stránky prohlížíte.
