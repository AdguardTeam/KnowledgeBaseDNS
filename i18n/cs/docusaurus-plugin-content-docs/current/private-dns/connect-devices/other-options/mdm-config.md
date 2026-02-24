---
title: Správa mobilní aplikace AdGuard DNS přes MDM
sidebar_position: 7
---

:::info

Tento článek popisuje funkci dostupnou v mobilní aplikaci AdGuard DNS. Chcete-li to vyzkoušet sami, stáhněte si aplikaci AdGuard DNS pro [Android](https://agrd.io/android_dns) nebo pro [iOS](https://agrd.io/ios_dns).

:::

Mobilní aplikace AdGuard DNS podporuje správu podnikových zařízení prostřednictvím systémů MDM (Mobile Device Management) využívajících standard MAC (Managed App Configuration).

To umožňuje správcům IT centrálně konfigurovat a implementovat nastavení AdGuard DNS na více zařízeních prostřednictvím konzolí EMM, jako jsou Google Workspace, Microsoft Intune a další řešení kompatibilní s [AppConfig.org](https://www.appconfig.org/).

### Podporovaná řešení EMM

Aplikace je kompatibilní se všemi systémy EMM, které podporují standard AppConfig.org:

- Google Workspace (Android Enterprise)
- Microsoft Intune
- VMware Workspace ONE
- Jamf Pro (pro iOS)
- mobiconnect
- MobileIron
- BlackBerry UEM
- Další řešení kompatibilní s AppConfig

## Podporované parametry

### Spravované parametry konfigurace aplikace

| **Parametr**                                          | **Typ**   | **Požadováno** | **Platné hodnoty**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | **Co parametr dělá**                                                                                                                                                   | **Při prvotní instalaci**                                                                                                                             | **Když se hodnota změní**                                                                                                                                                                                                                                                                                                                             | **Není-li specifikováno**                                                                              |
| ----------------------------------------------------- | --------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **ID nastavení** (`setup_id`)      | Řetězec   | Ne             | Identifikátor nastavení AdGuard DNS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Identifikuje zařízení pro připojení k serveru AdGuard DNS.                                                                                             | Aplikace přejde do řízeného režimu; pole je uzamčeno; uživatel jej nemůže změnit; možnost ”Obnovit připojení” není k dispozici.       | Připojení a nastavení jsou zcela resetovány; uživatel se musí znovu připojit; ochrana DNS se zastaví.                                                                                                                                                                                                                                 | Uživatel může zadat ručně nebo použít QR kód.                                          |
| **Název zařízení** (`device_name`) | Řetězec   | Ne             | Jakýkoliv název zařízení                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Nastaví zobrazovaný název zařízení v ovládacím panelu AdGuard DNS. Musí mít maximální délku 64 znaků.                                  | Aplikace přejde do řízeného režimu; název se použije automaticky, pokud není nastaven prostřednictvím ID nastavení; pole je uzamčeno. | Nic se neděje.                                                                                                                                                                                                                                                                                                                        | Uživatel může zadat ručně; aplikace může navrhnout název prostřednictvím ID nastavení. |
| **DNS Protokol** (`dns_protocol`)  | Volitelné | Ne             | **Android:** doh, dot, doq. **iOS:** doh_native, dot_native, doh_vpn, dot_vpn, doq_vpn, doh_dnsproxy, dot_dnsproxy, doq_dnsproxy (Note: doh_dnsproxy, dot_dnsproxy a doq_dnsproxy funguje pouze v MDM s mobileconfig). | Určuje, který šifrovaný protokol DNS se používá (poznámka: DoQ není kompatibilní s nativním režimem v systému iOS). | Aplikace přejde do řízeného režimu; přednastavený protokol se použije jako výchozí; výběr v nastavení je uzamčen.                     | Aplikace přepne na nový protokol; pokud je aktivní ochrana DNS, automaticky se znovu připojí. Při přepnutí provozního režimu (Native ↔ VPN) se aplikace nepřipojí automaticky, uživatel se musí připojit ručně. Pokud je proxy DNS povolen, aplikace se automaticky znovu připojí. | Uživatel může vybrat ručně v nastavení, pokud není výběr definován skrze MDM.          |

## Spravovaný režim

Aplikace automaticky přejde do spravovaného režimu, pokud systém MDM poskytne alespoň jeden konfigurační parametr. V tomto režimu mají nastavení MDM vždy přednost před uživatelskými preferencemi: žádné parametry nakonfigurované prostřednictvím MDM nelze uživatelem změnit, zatímco parametry, které nejsou definovány MDM, zůstávají editovatelné.

Po aktualizaci konfigurace MDM se všechny změny použijí automaticky. Pokud systém MDM odstraní všechny konfigurační parametry najednou, aplikace opustí řízený režim, dříve uzamčená nastavení se znovu zpřístupní a uživatel může libovolně měnit všechny parametry.

## Aktualizace konfigurace

Aplikace automaticky přijímá oznámení o změnách konfigurace a veškeré aktualizace dodané systémem EMM jsou aplikovány ihned po doručení. V závislosti na poskytovateli EMM může dojít ke zpoždění, než se konfigurace dostane do zařízení. Pro provedení změn není požadován restart aplikace.

## Konfigurace zařízení pro trvalé používání DNS AdGuard

Pomocí MDM můžete nakonfigurovat zařízení tak, aby byla ochrana DNS **vždy zapnutá**. Uživatelé nemohou měnit nastavení DNS ani obcházet ochranu.

:::caution

Aby uživatelé nemohli deaktivovat nastavení DNS na svém zařízení, musí být aplikace AdGuard DNS také uzamčena prostřednictvím MDM.

:::

### Pro Android

Při konfiguraci skrze MDM nastavte `com.adguard.dnsclient` jako `Vždy zapnuto` a přidejte `Uzamknout`, aby uživatel nemohl odebrat profil VPN z nastavení zařízení.

### Pro iOS

V systému iOS používá AdGuard DNS proxy DNS k prosazování zásad DNS a zůstává **vždy zapnutý** pro sledovaná zařízení. Chcete-li toto povolit, vytvořte pro zařízení `mobileconfig` a nasaďte jej prostřednictvím MDM. Pro parametr `dns_protocol` MAC použijte `doh_dnsproxy`, `dot_dnsproxy` nebo `doq_dnsproxy`.

:::important

Tuto metodu lze použít také pro zařízení bez dohledu, jako jsou osobní zařízení, kterým byl udělen přístup k firemním zdrojům a aplikacím. Uživatelé však mohou otevřít nastavení systému a přepnout do jiného režimu. Na těchto zařízeních není DNS proxy **vždy zapnutý**; funguje jako volitelný, samostatný režim.

:::

Minimální profil se skládá z hlavního užitečného zatížení s jedním vnořeným užitečným zatížením:

```bash
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadType</key>
    <string>Configuration</string>

    <key>PayloadVersion</key>
    <integer>1</integer>

    <key>PayloadIdentifier</key>
    <string>com.adguard.ios.adguard-dns.mdmprofile.dnsproxy</string>

    <key>PayloadUUID</key>
    <string>5D81E5F2-6CF4-4E1F-8F55-7D7ED1B07B28</string>

    <key>PayloadDisplayName</key>
    <string>AdGuard DNS DNSProxy</string>

    <key>PayloadOrganization</key>
    <string>AdGuard</string>

    <key>PayloadContent</key>
    <array>
        <dict>
            <key>PayloadType</key>
            <string>com.apple.dnsProxy.managed</string>

            <key>PayloadVersion</key>
            <integer>1</integer>

            <key>PayloadIdentifier</key>
            <string>com.adguard.ios.adguard-dns.payload.dnsproxy</string>

            <key>PayloadUUID</key>
            <string>2B8E8B67-0E66-4F3C-8FE6-1B6D6BB6D931</string>

            <key>PayloadDisplayName</key>
            <string>AdGuard DNS DNSProxy</string>

            <key>AppBundleIdentifier</key>
            <string>com.adguard.ios.adguard-dns</string>

            <key>ProviderBundleIdentifier</key>
            <string>com.adguard.ios.adguard-dns.dnsproxy</string>

            <key>ProviderConfiguration</key>
            <dict>
            </dict>
        </dict>
    </array>
</dict>
</plist>
```

#### Vyplnění užitečného zatížení nejvyšší úrovně

| Klíč                    | Řetězec                                           | Popis                                                                                                                                                                                                   |
| ----------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PayloadType**         | `Konfigurace`                                     | Definuje konfigurační profil. Neměňte.                                                                                                                                  |
| **PayloadVersion**      | `1`                                               | Verze schématu užitečného zatížení.                                                                                                                                                     |
| **PayloadUUID**         | `5D81E5F2-6CF4-4E1F-8F55-7D7ED1B07B28`            | Jedinečný identifikátor UUID pro tento profil. Vygenerujte nový pro každou instanci profilu.                                                                            |
| **PayloadIdentifier**   | `com.adguard.ios.adguard-dns.mdmprofile.dnsproxy` | Jedinečné ID v rámci MDM/zařízení, které lze přizpůsobit. Musí být jedinečný pro každé zařízení/MDM, aby bylo možné profil aktualizovat nebo nahradit stejným profilem. |
| **PayloadDisplayName**  | `AdGuard DNS DNSProxy`                            | Jméno zobrazené uživateli v nastavení a správci v MDM.                                                                                                                                  |
| **PayloadOrganization** | `AdGuard`                                         | Název organizace, která vydala konfiguraci.                                                                                                                                             |
| **PayloadContent**      |                                                   | Obsahuje vnořené užitečné zatížení; každé z nich definuje zásadu nebo nastavení.                                                                                                        |

#### Vyplnění vnořeného užitečného zatížení

| Klíč                         | Řetězec                                        | Popis                                                                                                                                                                                                                                          |
| ---------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PayloadType**              | `com.apple.dnsProxy.managed`                   | Povoluje DNS proxy prostřednictvím síťového rozšíření. Neměňte.                                                                                                                                                |
| **PayloadVersion**           | `1`                                            | Verze schématu užitečného zatížení.                                                                                                                                                                                            |
| **PayloadIdentifier**        | `com.adguard.ios.adguard-dns.payload.dnsproxy` | Jedinečné ID tohoto užitečného zatížení v rámci profilu.                                                                                                                                                                       |
| **PayloadUUID**              | `2B8E8B67-0E66-4F3C-8FE6-1B6D6BB6D931`         | Jedinečný identifikátor UUID pro toto užitečné zatížení.                                                                                                                                                                       |
| **PayloadDisplayName**       | `AdGuard DNS DNSProxy`                         | Toto je název zobrazený pro tuto konkrétní část profilu. Může být stejný jako `PayloadUUID` nebo odlišný. Název se uživateli zobrazí v části Nastavení → Obecné → VPN a správa zařízení → DNS. |
| **AppBundleIdentifier**      | `com.adguard.ios.adguard-dns`                  | ID balíčku kontejnerové aplikace odpovědné za síťové rozšíření. Neměňte.                                                                                                                                       |
| **ProviderBundleIdentifier** | `com.adguard.ios.adguard-dns.dnsproxy`         | ID balíčku poskytovatele proxy DNS v aplikaci. Neměňte.                                                                                                                                                        |
| **ProviderConfiguration**    | `{ }`                                          | Konfigurační slovník předaný systémem iOS do rozšíření. Prázdné, protože všechna nastavení pocházejí z hlavní aplikace.                                                                                        |

**Jakmile je profil nainstalován, nezapomeňte se přihlásit do aplikace AdGuard DNS a povolit ochranu.** Poté se automaticky spustí síťové rozšíření s DNS proxy.
