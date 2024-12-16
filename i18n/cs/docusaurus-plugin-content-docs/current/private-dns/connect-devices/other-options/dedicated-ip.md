---
title: Vyhrazené IP adresy
sidebar_position: 2
---

## Co jsou vyhrazené IP adresy?

Vyhrazené adresy IPv4 jsou k dispozici uživatelům s předplatným Team a Enterprise, zatímco propojené IP jsou k dispozici všem.

Pokud máte předplatné Team nebo Enterprise, získáte několik osobních vyhrazených IP adres. Požadavky na tyto adresy jsou považovány za "vaše" a podle toho jsou použity konfigurace a pravidla filtrování na úrovni serveru. Vyhrazené IP adresy jsou mnohem bezpečnější a snadněji se spravují. S propojenými IP adresami se musíte ručně znovu připojit nebo použít speciální program pokaždé, když se změní IP adresa zařízení, což se děje po každém restartu.

## Proč potřebujete vyhrazenou IP adresu?

Technické specifikace připojeného zařízení bohužel nemusí vždy umožnit nastavení šifrovaného soukromého serveru AdGuard DNS. V takovém případě budete muset použít standardní nešifrovaný DNS. AdGuard DNS lze nastavit dvěma způsoby: [pomocí propojených IP](/private-dns/connect-devices/other-options/linked-ip.md) a pomocí vyhrazených IP.

Vyhrazené IP adresy jsou obecně stabilnější variantou. Propojená IP má některá omezení, například jsou povoleny pouze rezidenční adresy, poskytovatel může IP změnit a je nutné IP adresu znovu propojit. S vyhrazenými IP adresami získáte IP adresu, která je výhradně vaše, a všechny požadavky se budou počítat pro vaše zařízení.

Nevýhodou je, že můžete začít přijímat irelevantní provoz (skenery, boti), což se u veřejných DNS řešitelů stává vždy. Pro omezení provozu botů může být nutné použít [Nastavení přístupu](/private-dns/server-and-settings/access.md).

Níže uvedené pokyny vysvětlují, jak k zařízení připojit vyhrazenou IP adresu:

## Připojení AdGuard DNS pomocí vyhrazených IP adres

1. Otevřete hlavní panel.
2. Přidejte nové zařízení nebo otevřete nastavení dříve vytvořeného zařízení.
3. Vyberte _Použít adresy serverů_.
4. Poté otevřete _Běžné adresy DNS serverů_.
5. Vyberte server, který chcete použít.
6. Chcete-li vázat vyhrazenou adresu IPv4, klikněte na tlačítko _Přiřadit_.
7. Pokud chcete použít vyhrazenou adresu IPv6, klikněte na _Kopírovat_.
   ![Copy address \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dedicated_step7.png)
8. Zkopírujte a vložte vybranou vyhrazenou adresu do konfigurace zařízení.
