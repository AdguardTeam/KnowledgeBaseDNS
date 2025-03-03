---
title: DNS-over-HTTPS s ověřováním
sidebar_position: 4
---

## Proč je to užitečné

Služba DNS-over-HTTPS s ověřováním umožňuje nastavit uživatelské jméno a heslo pro přístup k vybranému serveru.

To pomáhá zabránit přístupu neoprávněných uživatelů a zvyšuje bezpečnost. Kromě toho můžete pro určité profily omezit používání jiných protokolů. Tato funkce je užitečná zejména v případech, kdy je adresa vašeho serveru DNS známá ostatním uživatelům. Přidáním hesla můžete zablokovat přístup a zajistit, abyste jej mohli používat pouze vy.

## Jak to nastavit

:::note Kompatibilita

Tuto funkci podporuje [Klient AdGuard DNS](/dns-client/overview.md) i [AdGuard apps](https://adguard.com/welcome.html).

:::

1. Otevřete hlavní panel.
2. Přidejte zařízení nebo otevřete nastavení dříve vytvořeného zařízení.
3. Klikněte na _Použít adresy serverů DNS_ a otevřete část _Adresy šifrovaných serverů DNS_.
4. Nakonfigurujte DNS-over-HTTPS s ověřováním podle svých představ.
5. Překonfigurujte zařízení tak, aby používalo tento server v klientovi AdGuard DNS nebo v jedné z aplikací AdGuard.
6. Za tímto účelem zkopírujte adresu šifrovaného serveru a vložte ji do nastavení aplikace AdGuard nebo klienta AdGuard DNS.
    ![Copy address \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/doh_step6.png)
7. Můžete také zakázat používání jiných protokolů.
    ![Deny protocols \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/deny_protocol.png)
