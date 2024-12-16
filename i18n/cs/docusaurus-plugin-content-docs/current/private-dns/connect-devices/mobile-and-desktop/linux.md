---
title: Linux
sidebar_position: 6
---

Chcete-li zařízení Linux připojit k AdGuard DNS, přidejte je nejprve na _Přehled_:

1. Přejděte na _Přehled_ a klikněte na _Připojit nové zařízení_.
2. V rozbalovací nabídce _Typ zařízení_ vyberte Linux.
3. Pojmenujte zařízení.
   ![Connecting device \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/choose_linux.png)

## Použití klienta AdGuard DNS

Klient AdGuard DNS je multiplatformní konzolový nástroj, který umožňuje používat šifrované protokoly DNS pro přístup k AdGuard DNS.

Více informací se dozvíte v [souvisejícím článku](/dns-client/overview/).

## Použití AdGuard VPN CLI

Soukromý AdGuard DNS můžete nastavit pomocí AdGuard VPN CLI (rozhraní příkazového řádku). Chcete-li začít pracovat s rozhraním AdGuard VPN CLI, musíte použít Terminal.

1. Nainstalujte AdGuard VPN CLI podle [těchto pokynů](https://adguard-vpn.com/kb/adguard-vpn-for-linux/installation/).
2. Přejděte do [nastavení](https://adguard-vpn.com/kb/adguard-vpn-for-linux/settings/).
3. Chcete-li nastavit konkrétní server DNS, použijte příkaz: `adguardvpn-cli config set-dns <server_address>`, kde `<server_address>` je adresa vašeho privátního serveru.
4. Aktivujte nastavení DNS zadáním `adguardvpn-cli config set-system-dns on`.

## Ruční konfigurace v Ubuntu (je vyžadována propojená IP nebo vyhrazená IP)

1. Klikněte na _Systém_ → _Předvolby_ → _Síťová připojení_.
2. Vyberte kartu _Bezdrátové připojení_ a poté vyberte síť, ke které jste připojeni.
3. Klikněte na _Upravit_ → _IPv4_.
4. Změňte uvedené adresy DNS na následující adresy:
   - `94.140.14.49`
   - `94.140.14.59`
5. Vypněte _Automatický režim_.
6. Klikněte na _Použít_.
7. Přejděte na _IPv6_.
8. Změňte uvedené adresy DNS na následující adresy:
   - `2a10:50c0:0:0:0:0:ded:ff`
   - `2a10:50c0:0:0:0:0:dad:ff`
9. Vypněte _Automatický režim_.
10. Klikněte na _Použít_.
11. Propojte svou IP adresu (nebo vyhrazenou IP adresu, pokud máte předplatné Team):
    - [Vyhrazené IP adresy](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Propojené IP adresy](/private-dns/connect-devices/other-options/linked-ip.md)

## Ruční konfigurace v Debianu (je vyžadována propojená IP nebo vyhrazená IP)

1. Otevřete Terminal.
2. Do příkazového řádku napište: `su`.
3. Zadejte své heslo `admin`.
4. Do příkazového řádku zadejte: `nano /etc/resolv.conf`.
5. Změňte uvedené adresy DNS na následující:
   - IPv4: `94.140.14.49 a 94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff a 2a10:50c0:0:0:0:0:dad:ff`
6. Stisknutím kláves _ctrl + O_ na klávesnici dokument uložte.
7. Stiskněte _Enter_.
8. Stisknutím kláves _Ctrl + X_ na klávesnici dokument uložte.
9. Do příkazového řádku zadejte: `/etc/init.d/networking restart`.
10. Stiskněte _Enter_.
11. Zavřete Terminal.
12. Propojte svou IP adresu (nebo vyhrazenou IP adresu, pokud máte předplatné Team):
    - [Vyhrazené IP adresy](/private-dns/connect-devices/other-options/dedicated-ip.md)
    - [Propojené IP adresy](/private-dns/connect-devices/other-options/linked-ip.md)

## Použití dnsmasq

1. Nainstalujte dnsmasq pomocí následujících příkazů:

   `sudo apt updatesudo`

   `apt install`

   `dnsmasqsudo nano /etc/dnsmasq.conf`

2. V dnsmasq.conf použijte následující příkazy:

   `no-resolv`

   `bogus-priv`

   `strict-order`

   `server=94.140.14.49`

   `server=94.140.14.59`

   `port=5353`

   `add-cpe-id={Your_Device_ID}`

3. Restartujte službu dnsmasq:

   `sudo service dnsmasq restart`

Vše je hotovo! Vaše zařízení je úspěšně připojeno k AdGuard DNS.

:::note Důležité

Pokud se zobrazí oznámení, že nejste připojeni k AdGuard DNS, je port, na kterém běží dnsmasq pravděpodobně obsazen jinými službami. K vyřešení problému použijte [tyto pokyny](https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#bindinuse).

:::

## Použití EDNS (Rozšířený DNS)

EDNS rozšiřuje protokol DNS a umožňuje přenášet další data většími pakety UDP. V AdGuard DNS umožňuje předávání DeviceID v běžném DNS pomocí dalšího parametru.

DeviceID, osmimístný hexadecimální identifikátor (např. `1a2b3c4d`), pomáhá spojit požadavky DNS s konkrétními zařízeními. U šifrovaného DNS je toto ID součástí domény (např. `1a2b3c4d.d.adguard-dns.com`). U nešifrovaného DNS je k přenosu tohoto identifikátoru vyžadován EDNS.

AdGuard DNS používá EDNS k získání DeviceID vyhledáním čísla `65074`. Pokud taková možnost existuje, načte z ní DeviceID. K tomu můžete v terminálu použít příkaz `dig`:

```sh
dig @94.140.14.49 'www.example.com' A IN +ednsopt=65074:3031323334353637
```

Zde je `65074` ID možnosti a `3031323334353637` je její hodnota v hexadecimálním formátu (DeviceID: `01234567`).

Vše je hotovo! Mělo by se zobrazit DeviceID.

:::note

Příkaz `dig` je pouze příkladem, k provedení této akce můžete použít libovolný software DNS s možností přidání voleb EDNS.

:::

## Použití běžného DNS

Pokud nechcete používat další software pro konfiguraci DNS, můžete se rozhodnout pro nešifrovaný DNS. Máte dvě možnosti: použít propojené IP adresy nebo vyhrazené IP adresy:

- [Vyhrazené IP adresy](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Propojené IP adresy](/private-dns/connect-devices/other-options/linked-ip.md)
