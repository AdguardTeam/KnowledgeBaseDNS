---
title: Automatické připojení
sidebar_position: 5
---

## Proč je to užitečné

Ne každému vyhovuje přidávání zařízení prostřednictvím Přehledu. Jste-li například správcem systému, který nastavuje více firemních zařízení současně, budete chtít co nejvíce minimalizovat manuální úkony.

Můžete vytvořit odkaz na připojení a použít jej v nastavení zařízení. Vaše zařízení bude detekováno a automaticky připojeno k serveru.

## Jak nakonfigurovat automatické připojení

1. Otevřete _Přehled_ a vyberte požadovaný server.
2. Go to _Advanced_.
3. Povolte možnost automatického připojení zařízení.
    ![Connect devices automatically \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically.png)

Nyní můžete zařízení automaticky připojit k serveru vytvořením speciální adresy, která obsahuje název zařízení, typ zařízení a aktuální ID serveru. Podívejme se, jak tyto adresy vypadají a jaká jsou pravidla pro jejich vytváření.

### Příklady adres automatického připojení

- `tls://adr-{Your_Server_ID}-AdGuard-Test-Device.d.adguard-dns.com` — tímto se automaticky vytvoří zařízení `Android` s protokolem `DNS-over-TLS` s názvem `AdGuard Test Device`

- `https://d.adguard-dns.com/dns-query/win-{Your_Server_ID}-John-Doe` — automaticky vytvoří zařízení `Windows` s protokolem `DNS-over-HTTPS` s názvem `John Doe`

- `quic://ios-73f78a1d-Mary-Sue.d.adguard-dns.com` — tímto se automaticky vytvoří zařízení `iOS` s protokolem `DNS-over-QUIC` s názvem `Mary Sue`

### Konvence pojmenování

Při ručním vytváření zařízení mějte na paměti, že existují omezení týkající se délky názvu, znaků, mezer a pomlček.

**Délka názvu**: maximálně 50 znaků. Znaky nad tento limit jsou ignorovány.

**Povolené znaky**: anglická písmena, číslice a pomlčky `-`. Ostatní znaky jsou ignorovány.

**Mezery a pomlčky**: Pro mezeru se používá pomlčka a pro spojovník dvojitá pomlčka ( `--`).

**Typ zařízení**: použijte následující zkratky:

- Windows — `win`
- macOS — `mac`
- Android — `adr`
- iOS — `ios`
- Linux — `lnx`
- Router — `rtr`
- Chytrá TV — `stv`
- Herní konzole — `gam`
- Ostatní — `otr`

## Generátor odkazů

Přidali jsme šablonu, která generuje odkaz pro konkrétní typ zařízení a protokol.

1. Přejděte na _Servery_ → _Nastavení serveru_ → _Zařízení_ → _Automatické připojení zařízení_ a klikněte na _Generátor odkazů a pokyny_.
2. Vyberte protokol, který chcete použít, a název a typ zařízení.
3. Klikněte na _Generovat odkaz_.
    ![Generate link \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step7.png)
4. Odkaz jste úspěšně vygenerovali, nyní zkopírujte adresu serveru a použijte ji v jedné z aplikací [AdGuard](https://adguard.com/welcome.html)
