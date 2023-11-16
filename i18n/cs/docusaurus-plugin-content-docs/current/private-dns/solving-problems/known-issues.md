---
title: Známé problémy
sidebar_position: 1
---

Po nastavení AdGuard DNS mohou někteří uživatelé zjistit, že nefunguje správně: zobrazí se zpráva, že jejich zařízení není připojeno k AdGuard DNS a požadavky z tohoto zařízení se nezobrazují v protokolu dotazů. K tomu může dojít kvůli určitým skrytým nastavením v prohlížeči nebo operačním systému. Podívejme se na několik běžných problémů a jejich řešení.

:::tip

Stav AdGuard DNS můžete zkontrolovat na [testovací stránce](https://adguard.com/test.html).

:::

## Nastavení zabezpečeného DNS v Chrome

Pokud používáte Chrome a v přehledu AdGuard DNS nevidíte žádné požadavky, může to být způsobeno tím, že Chrome používá vlastní DNS server. Zde se dozvíte, jak jej můžete zakázat:

1. Otevřete nastavení Chrome.
1. Přejděte na *Ochrana soukromí a zabezpečení*.
1. Vyberte *Zabezpečení*.
1. Přejděte dolů na *Používat zabezpečené DNS*.
1. Zakažte funkci.

![Chrome’s Use secure DNS feature](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/secure-dns.png)

Pokud zakážete nastavení vlastního DNS v Chrome, bude prohlížeč používat DNS zadaný v operačním systému, což by měl být AdGuard DNS, pokud jste jej správně nastavili.

## iCloud Soukromý přenos (Safari, macOS, a iOS)

Pokud v nastavení zařízení povolíte iCloud Soukromý přenos, Safari použije adresy DNS Apple, které přepíší nastavení AdGuard DNS.

Zde se dozvíte, jak můžete na iPhonu zakázat iCloud Soukromý přenos:

1. Otevřete *Nastavení* a klepněte na své jméno.
1. Vyberte *iCloud* → *Soukromý přenos*.
1. Vypněte Soukromý přenos.

![iOS Private Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay.png)

V počítači Mac:

1. Otevřete *Nastavení systému* a klikněte na své jméno nebo *Apple ID*.
1. Vyberte *iCloud* → *Soukromý přenos*.
1. Vypněte Soukromý přenos.
1. Klikněte na *Hotovo*.

![macOS Private Relay](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png)

## Pokročilá ochrana před sledováním a fingerprintingem (Safari, počínaje iOS 17)

Po aktualizaci na iOS 17 může být v nastavení Safari povolena Pokročilá ochrana před sledováním a fingerprintingem, což může mít podobný účinek jako obcházení nastavení AdGuard DNS u iCloud Soukromý přenos.

Zde je návod, jak deaktivovat Pokročilou ochranu před sledováním a fingerprintingem:

1. Otevřete *Nastavení* a přejděte dolů na *Safari*.
1. Klepněte na *Pokročilé*.
1. Zakařte *Pokročilou ochranu před sledováním a fingerprintingem*.

![iOS Tracking and Fingerprinting Protection *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)
