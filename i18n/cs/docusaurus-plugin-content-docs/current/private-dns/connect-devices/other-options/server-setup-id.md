---
title: ID nastavení serveru
sidebar_position: 6
---

:::info

This article covers a feature available in the AdGuard DNS mobile app. To try it yourself, download the AdGuard DNS app for [Android](https://agrd.io/android_dns) or [iOS](https://agrd.io/ios_dns).

:::

## Co je ID nastavení serveru?

Pokud chcete připojit zařízení k určitému serveru a nechcete ručně vytvářet každé zařízení na hlavním panelu na webových stránkách, můžete použít **ID nastavení serveru**. Stačí vzít ID a použít ho k připojení přes aplikaci AdGuard DNS. Tímto způsobem bude “zařízení” po připojení automaticky vytvořeno.

## Jak se připojit pomocí ID nastavení serveru

:::note

If you’re configuring AdGuard on multiple managed devices, consider using managed app configuration to automatically provide the server setup ID to each app. [Learn more](/private-dns/connect-devices/other-options/mdm-config.md).

:::

1. Přejděte na _Hlavní panel_ → [_Servery_](https://adguard-dns.io/dashboard/servers).
2. Vyberte požadovaný server.
3. Přejděte dolů a klikněte na _ID nastavení_.
   ![Setup ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/server_settings_setup_ID.png)
4. Zkopírujte **ID nastavení**.
   ![Server setup ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/settings_setup_ID.png)
5. Otevřete aplikaci a vložte **ID nastavení**.
   ![Paste setup ID \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/SetupIDMobile.png)
6. Vyberte název zařízení.
7. Klikněte na **Připojit**.
   ![Connect \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ConnectMobile.png)

Hotovo! Nyní jste připojeni a zařízení se automaticky vytvoří na hlavním panelu.

## Resetování ID nastavení serveru

Pokud chcete odpojit všechna zařízení používající konkrétní ID nastavení, můžete jej resetovat. Postupujte podle těchto kroků:

1. Přejděte na _Hlavní panel_ → [_Servery_](https://adguard-dns.io/dashboard/servers) a vyberte požadovaný server.
2. Přejděte dolů a klikněte na _ID nastavení_.
3. Klikněte na _Resetovat ID nastavení_.

Po resetování se změní ID nastavení a všechna zařízení, která používala staré ID, budou odpojena od serveru.
