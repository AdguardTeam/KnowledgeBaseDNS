---
title: Asus
sidebar_position: 3
---

## Konfigurace DNS-over-TLS

Toto jsou obecné pokyny pro konfiguraci Soukromého AdGuard DNS pro routery Asus.

Informace o konfiguraci v těchto pokynech jsou převzaty z konkrétního modelu routeru, takže se mohou lišit od rozhraní jednotlivých zařízení.

V případě potřeby: Nainstalujte do počítače firmware [ASUS Merlin](https://www.asuswrt-merlin.net/download) vhodný pro vaši verzi routeru.

1. Přihlaste se do panelu správce routeru Asus. Můžete k němu přistupovat skrze [http://router.asus.com](http://router.asus.com/), [http://192.168.1.1](http://192.168.1.1/), [http://192.168.0.1](http://192.168.0.1/), nebo [http://192.168.2.1](http://192.168.2.1/).
2. Zadejte uživatelské jméno správce (obvykle je to admin) a heslo routeru.
3. V postranním panelu _Pokročilá nastavení_ přejděte do části WAN.
4. V části _Nastavení DNS WAN_ nastavte _Připojit k DNS serveru automaticky_ na _Ne_.
5. Nastavte položky _Přesměrování místních dotazů_, _Zapnout ochranu DNS Rebind_ a _Zapnout podporu DNSSEC_ na hodnotu _Ne_.
6. Změňte protokol ochrany soukromí DNS na DNS-over-TLS (DoT).
7. Zkontrolujte, zda je profil _DNS-over-TLS_ nastaven na hodnotu _Přísný_.
8. Přejděte dolů do sekce _Seznam serverů DNS-over-TLS_. Do pole _Adresa_ zadejte jednu z níže uvedených adres:
   - `94.140.14.49` a `94.140.14.59`
9. Pro port _TLS_ zadejte 853.
10. Do pole _Název hostitele TLS_ zadejte adresu Soukromého DNS AdGuard:
    - `{Your_Device_ID}.d.adguard-dns.com`
11. Přejděte na konec stránky a klikněte na tlačítko _Použít_.

## Použijte panel správce routeru

1. Otevřete panel správce routeru. Lze k němu přistupovat skrze adresy `192.168.1.1` nebo `192.168.0.1`.
2. Zadejte uživatelské jméno správce (obvykle je to admin) a heslo routeru.
3. Otevřete _Pokročilá nastavení_ nebo _Pokročilé_.
4. Vyberte _WAN_ nebo _Internet_.
5. Otevřete _Nastavení DNS_ nebo _DNS_.
6. Vyberte _Ruční nastavení_. Vyberte _Použít tyto DNS servery_ nebo _Zadat DNS server ručně_ a zadejte následující adresy DNS serverů:
   - IPv4: `94.140.14.49` a `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` a `2a10:50c0:0:0:0:0:dad:ff`
7. Uložte nastavení.
8. Propojte svou IP adresu (nebo vyhrazenou IP adresu, pokud máte předplatné Team).
   - [Vyhrazené IP adresy](/private-dns/connect-devices/other-options/dedicated-ip.md)
   - [Propojené IP adresy](/private-dns/connect-devices/other-options/linked-ip.md)
