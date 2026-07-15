---
title: Automatické připojení zařízení
sidebar_position: 4
---

Správci systémů často potřebují spravovat mnoho zařízení najednou. Chcete-li omezit množství ruční práce, můžete využít funkci [_Automatické připojení_][ac].

Tento článek podrobněji popisuje, jak může správce systému nakonfigurovat svou síť tak, aby na serveru AdGuard DNS automaticky vytvářela zařízení na základě dostupných údajů.

[ac]: /private-dns/connect-devices/other-options/automatic-connection

## Předpoklady

Ujistěte se, že je tato funkce na vašem DNS serveru zapnutá. Chcete-li to provést, přejděte do části _Hlavní panel → Servery → Nastavení serveru → Pokročilé_ a zkontrolujte, zda je zapnuta možnost _Automaticky připojovat zařízení_.

## Základní formát

Základní formát názvu hostitele nebo adresy URL používaného k vytvoření automatických zařízení je:

- pro DoT a DoQ:

    ```none
    ${TYPE}-${SERVERID}-${HUMANID}.d.adguard-dns.com
    ```

- pro DoH:

    ```none
    https://d.adguard-dns.com/dns-query/${TYPE}-${SERVERID}-${HUMANID}
    ```

### Typ zařízení {#device-type}

Typy zařízení slouží k tomu, aby se v uživatelském rozhraní snáze rozlišovaly různé typy zařízení. Pro automatickou identifikaci zařízení je nutné zadat typ zařízení.

Jsou podporovány následující zkratky:

- `adr`: Zařízení Android.
- `gam`: Herní konzole.
- `ios`: Apple iOS a další operační systémy Apple pro mobilní zařízení.
- `lnx`: Zařízení s operačními systémy založenými na Linuxu.
- `mac`: Zařízení Apple macOS.
- `rtr`: Routery.
- `stv`: Chytré TV.
- `win`: Zařízení Microsoft Windows.
- `otr`: Obecná zařízení.

### ID DNS serveru {#dns-server-id}

Dalším povinným parametrem je ID vašeho serveru AdGuard DNS, ke kterému je zařízení připojeno.

ID najdete v adrese URL stránky _Hlavní panel → Servery → Nastavení serveru_. Například pokud je adresa URL `https://adguard-dns.io/en/dashboard/settings/server?server_id=abcd1234`, pak je ID vašeho DNS serveru `abcd1234`.

ID se vždy skládá přesně z osmi hexadecimálních číslic.

### Identifikátor zařízení v čitelné podobě

Část identifikátoru v čitelné podobě slouží jednak k rozlišení jednotlivých zařízení a jednak jako základ pro název zařízení používaný v uživatelském rozhraní a v pravidlech s modifikátorem `client`. Tyto identifikátory lze automaticky vytvořit na základě jiných identifikátorů, jako jsou například názvy hostitelů registrované na vašem serveru DHCP.

Platí následující pravidla:

- Pouze ASCII.

- V identifikátorech jsou povoleny číslice od nuly do devíti, pomlčky a velká i malá latinská písmena. Všechny ostatní znaky se ignorují.

- Délka identifikátoru by neměla přesáhnout 50 bajtů. Vše, co přesahuje tento limit, bude oříznuto.

- Identifikátor by neměl začínat ani končit pomlčkou.

- V textu by se neměly vyskytovat řady tří nebo více pomlček za sebou.

Název zařízení se tvoří z identifikátoru v čitelné podobě tak, že se všechny jednoduché pomlčky nahradí mezerami a všechny dvojité pomlčky jednoduchými pomlčkami. Například identifikátor v čitatelné podobě, jako je `Super--duper-phone`, se převede na název zařízení `Super-duper phone`.

### Kompletní příklad

Zde je jednoduchý skript pro shell POSIX, který dokáže převést počáteční identifikátor na úplnou adresu DNS upstreamu, kterou lze použít pro automatické připojení zařízení:

```sh
devtype='adr'
serverid='abcd1234'

# Například z DHCP serveru nebo z jiného zdroje.
initid='This Is My New And ✨Absolutely Amazing✨ SuperPhone-X-123456!!!!!!!'
humanid="$initid"

# Nejprve nahraďte po sobě jdoucí pomlčky dvojitými pomlčkami a po sobě jdoucí mezery jednoduchými pomlčkami, čímž vznikne 'This-Is-My-New-And-✨Absolutely-Amazing✨-SuperPhone--X--123456!!!!!!!'.
humanid="$(printf '%s\n' "$humanid" | sed -e 's/-\+/--/g' -e 's/[[:space:]]\+/-/g' )"

# Za druhé, odstraňte nevhodné bajty, čímž vznikne 'This-Is-My-New-And-Absolutely-Amazing-SuperPhone--X--123456'.
humanid="$(printf '%s\n' "$humanid" | tr -c -d 'a-zA-Z0-9-')"

# Za třetí, zkraťte text na 50 bajtů, čímž vznikne 'This-Is-My-New-And-Absolutely-Amazing-SuperPhone--'
humanid="$(printf '%s\n' "$humanid" | head -c 50)"

# Poté se ujistěte, že na začátku a na konci názvu nezůstaly žádné pomlčky, abyste získali 'This-Is-My-New-And-Absolutely-Amazing-SuperPhone'
humanid="$(printf '%s\n' "$humanid" | sed -e 's/^-\+//g' -e 's/-\+$//g' )"

# Na závěr sestavte adresu na vstupní straně. V tomto případě pro DoT nebo DoQ:
dns_upstream="${devtype}-${serverid}-${humanid}.d.adguard-dns.com"

# Výsledek je:
# adr-abcd1234-This-Is-My-New-And-Absolutely-Amazing-SuperPhone.d.adguard-dns.com
```

Výsledkem bude, že se zařízení Android s názvem `This Is My New And Absolutely Amazing SuperPhone` připojí k serveru s ID `abcd1234`.
