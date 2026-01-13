---
title: Managing the AdGuard DNS mobile app via MDM
sidebar_position: 7
---

:::info

Bu makale, AdGuard DNS mobil uygulamasında bulunan bir özelliği açıklamaktadır. Bunu kendiniz denemek için [Android](https://agrd.io/android_dns) veya [iOS](https://agrd.io/ios_dns) için AdGuard DNS uygulamasını indirin.

:::

The AdGuard DNS mobile app supports enterprise management through MDM (Mobile Device Management) systems using the Managed App Configuration (MAC) standard.

This allows IT administrators to configure and implement AdGuard DNS settings across multiple devices centrally through EMM consoles, such as Google Workspace, Microsoft Intune, and other solutions compatible with [AppConfig.org](https://www.appconfig.org/).

### Desteklenen EMM çözümleri

Uygulama, AppConfig.org standardını destekleyen tüm EMM sistemleriyle uyumludur:

- Google Workspace (Android Enterprise)
- Microsoft Intune
- VMware Workspace ONE
- Jamf Pro (iOS için)
- MobileIron
- BlackBerry UEM
- Diğer AppConfig uyumlu çözümler

## Desteklenen parametreler

### Managed App Configuration Parameters

| **Parametre**                                         | **Tür** | **Gerekli** | **Geçerli değerler**                                                                                                                                                                                                                                             | **Parametre ne yapar**                                                                                                                                 | **On initial installation**                                                                                                         | **When value changes**                                                                                                                                                                                                                                                 | **Belirtilmemişse**                                                         |
| ----------------------------------------------------- | ------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Kurulum kimliği** (`setup_id`)   | String  | Hayır       | AdGuard DNS setup identifier                                                                                                                                                                                                                                     | AdGuard DNS sunucusuna bağlanmak için cihazı tanımlar.                                                                                 | Uygulama yönetilen moda girer; alan kilitlidir; kullanıcı değiştiremez; "Bağlantıyı sıfırla" seçeneği kullanılamaz. | Connection and settings are fully reset; user must reconnect; DNS protection stops.                                                                                                                                                                    | Kullanıcı elle girebilir veya bir QR kodu kullanabilir.     |
| **Cihaz adı** (`device_name`)      | String  | Hayır       | Herhangi bir cihaz adı                                                                                                                                                                                                                                           | Sets the device’s display name in the AdGuard DNS control panel. It must have a maximum length of 64 characters.       | App enters managed mode; name used automatically if not set via Setup ID; field is locked.                          | Nothing happens.                                                                                                                                                                                                                                       | User can enter manually; app may suggest name via Setup ID. |
| **DNS Protokolü** (`dns_protocol`) | Choice  | Hayır       | **Android:** doh, dot, doq. **iOS:** doh_native, dot_native, doh_vpn, dot_vpn, doq_vpn. | Determines which encrypted DNS protocol is used (Note: DoQ not compatible with Native mode on iOS). | Uygulama yönetilen moda girer; belirtilen protokol varsayılan olarak uygulanır; ayarlardaki seçim kilitlenir.       | Uygulama yeni protokole geçer; DNS koruması etkinse otomatik olarak yeniden bağlanır. When switching the operating mode (Native ↔ VPN), the app will not reconnect automatically, the user must manually reconnect. | User can select manually in settings.                       |

## Managed mode

The app automatically enters managed mode when the MDM system provides at least one configuration parameter. In this mode, MDM settings always take priority over user preferences: any parameter configured through MDM cannot be changed by the user, while parameters not defined by MDM remain editable.

When the MDM configuration is updated, all changes are applied automatically. If the MDM system removes all configuration parameters at once, the app exits managed mode, previously locked settings become available again, and the user can freely modify all parameters.

## Yapılandırma güncellemeleri

The app automatically receives notifications about configuration changes, and any updates delivered by the EMM system are applied immediately upon arrival. Depending on the EMM provider, there may be a delay before the configuration reaches the device. No app restart is required for the changes to take effect.
