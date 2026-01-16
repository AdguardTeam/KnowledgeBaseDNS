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

| **Parametr**                                          | **Typ**   | **Požadováno** | **Platné hodnoty**                                                                                                                                                                                                                                               | **Co parametr dělá**                                                                                                                                                   | **Při prvotní instalaci**                                                                                                                             | **Když se hodnota změní**                                                                                                                                                                                                                                          | **Není-li specifikováno**                                                                              |
| ----------------------------------------------------- | --------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| **ID nastavení** (`setup_id`)      | Řetězec   | Ne             | Identifikátor nastavení AdGuard DNS                                                                                                                                                                                                                              | Identifikuje zařízení pro připojení k serveru AdGuard DNS.                                                                                             | Aplikace přejde do řízeného režimu; pole je uzamčeno; uživatel jej nemůže změnit; možnost ”Obnovit připojení” není k dispozici.       | Připojení a nastavení jsou zcela resetovány; uživatel se musí znovu připojit; ochrana DNS se zastaví.                                                                                                                                              | Uživatel může zadat ručně nebo použít QR kód.                                          |
| **Název zařízení** (`device_name`) | Řetězec   | Ne             | Jakýkoliv název zařízení                                                                                                                                                                                                                                         | Nastaví zobrazovaný název zařízení v ovládacím panelu AdGuard DNS. Musí mít maximální délku 64 znaků.                                  | Aplikace přejde do řízeného režimu; název se použije automaticky, pokud není nastaven prostřednictvím ID nastavení; pole je uzamčeno. | Nic se neděje.                                                                                                                                                                                                                                     | Uživatel může zadat ručně; aplikace může navrhnout název prostřednictvím ID nastavení. |
| **DNS Protokol** (`dns_protocol`)  | Volitelné | Ne             | **Android:** doh, dot, doq. **iOS:** doh_native, dot_native, doh_vpn, dot_vpn, doq_vpn. | Určuje, který šifrovaný protokol DNS se používá (poznámka: DoQ není kompatibilní s nativním režimem v systému iOS). | Aplikace přejde do řízeného režimu; přednastavený protokol se použije jako výchozí; výběr v nastavení je uzamčen.                     | Aplikace přepne na nový protokol; pokud je aktivní ochrana DNS, automaticky se znovu připojí. Při přepnutí provozního režimu (Native ↔ VPN) se aplikace nepřipojí automaticky, uživatel se musí připojit ručně. | Uživatel může vybrat ručně v nastavení.                                                |

## Spravovaný režim

Aplikace automaticky přejde do spravovaného režimu, pokud systém MDM poskytne alespoň jeden konfigurační parametr. V tomto režimu mají nastavení MDM vždy přednost před uživatelskými preferencemi: žádné parametry nakonfigurované prostřednictvím MDM nelze uživatelem změnit, zatímco parametry, které nejsou definovány MDM, zůstávají editovatelné.

Po aktualizaci konfigurace MDM se všechny změny použijí automaticky. Pokud systém MDM odstraní všechny konfigurační parametry najednou, aplikace opustí řízený režim, dříve uzamčená nastavení se znovu zpřístupní a uživatel může libovolně měnit všechny parametry.

## Aktualizace konfigurace

Aplikace automaticky přijímá oznámení o změnách konfigurace a veškeré aktualizace dodané systémem EMM jsou aplikovány ihned po doručení. V závislosti na poskytovateli EMM může dojít ke zpoždění, než se konfigurace dostane do zařízení. Pro provedení změn není požadován restart aplikace.
