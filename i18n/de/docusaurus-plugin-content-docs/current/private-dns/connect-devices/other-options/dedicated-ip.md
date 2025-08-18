---
title: Dedizierte IP-Adressen
sidebar_position: 2
---

## Was sind dedizierte IP-Adressen?

Dedizierte IPv4-Adressen sind für Nutzer:innen mit Team- und Enterprise-Abonnements verfügbar, während verknüpfte IPs für alle verfügbar sind.

If you have a Team or Enterprise subscription, you’ll receive several personal dedicated IP addresses. Requests to these addresses are treated as yours, and server-level configurations and filtering rules are applied accordingly. Dedizierte IP-Adressen sind viel sicherer und einfacher zu verwalten. With linked IPs, you have to manually reconnect or use a special program every time the device’s IP address changes, which happens after every reboot.

## Warum benötigen Sie eine dedizierte IP?

Leider erlauben es die technischen Spezifikationen des angeschlossenen Geräts nicht immer, einen verschlüsselten Private AdGuard DNS-Server einzurichten. In diesem Fall müssen Sie standardmäßiges unverschlüsseltes DNS verwenden. Es gibt zwei Möglichkeiten, AdGuard DNS einzurichten: [verknüpfte IPs verwenden](/private-dns/connect-devices/other-options/linked-ip.md) und dedizierte IPs verwenden.

Dedizierte IP-Adressen sind im Allgemeinen eine stabilere Option. Linked IP has some limitations, such as only residential addresses are allowed, your provider can change the IP, and you’ll need to relink the IP address. Mit dedizierten IPs erhalten Sie eine IP-Adresse, die ausschließlich Ihnen gehört, und alle Anfragen werden für Ihr Gerät gezählt.

Der Nachteil ist, dass Sie möglicherweise unerwünschten Datenverkehr (Scanner, Bots) erhalten, wie es bei öffentlichen DNS-Resolvern immer der Fall ist. Möglicherweise müssen Sie [Zugriffseinstellungen](/private-dns/server-and-settings/access.md) verwenden, um den Bot-Datenverkehr zu begrenzen.

Die nachstehenden Anweisungen erklären, wie Sie eine dedizierte IP mit dem Gerät verbinden:

## AdGuard DNS über dedizierte IPs verbinden

1. Öffnen Sie Übersicht.
2. Fügen Sie ein neues Gerät hinzu oder öffnen Sie die Einstellungen eines zuvor erstellten Geräts.
3. Wählen Sie _Serveradressen verwenden_.
4. Öffnen Sie anschließend _Einfache DNS-Serveradressen_.
5. Wählen Sie den Server aus, den Sie verwenden möchten.
6. Um eine dedizierte IPv4-Adresse zu binden, klicken Sie auf _Zuweisen_.
7. Wenn Sie eine dedizierte IPv6-Adresse verwenden möchten, klicken Sie auf _Kopieren_.
    ![Adresse kopieren \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dedicated_step7.png)
8. Kopieren Sie die ausgewählte dedizierte Adresse und fügen Sie sie in die Gerätekonfigurationen ein.
