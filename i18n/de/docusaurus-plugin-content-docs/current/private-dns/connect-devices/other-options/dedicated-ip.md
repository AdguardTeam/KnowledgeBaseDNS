---
title: Dedizierte IP-Adressen
sidebar_position: 2
---

## Was sind dedizierte IP-Adressen?

Dedizierte IPv4-Adressen sind für Nutzer:innen mit Team- und Enterprise-Abonnements verfügbar, während verknüpfte IPs für alle verfügbar sind.

Wenn Sie ein Team- oder Enterprise-Abonnement haben, erhalten Sie mehrere persönliche dedizierte IP-Adressen. Anfragen an diese Adressen werden als „Ihre Anfragen“ behandelt, und Serverkonfigurationen sowie Filterregeln werden entsprechend übernommen. Dedizierte IP-Adressen sind viel sicherer und einfacher zu verwalten. Bei dieser Verbindungsmethode müssten Sie jedes Mal, wenn sich die IP-Adresse des Geräts ändert, was nach jedem Neustart der Fall ist, die Verbindung manuell oder über ein spezielles Programm neu herstellen.

## Warum benötigen Sie eine dedizierte IP?

Leider erlauben die technischen Spezifikationen des angeschlossenen Geräts möglicherweise nicht immer, einen verschlüsselten privaten AdGuard DNS-Server einzurichten. In diesem Fall müssen Sie standardmäßiges unverschlüsseltes DNS verwenden. Es gibt zwei Möglichkeiten, AdGuard DNS einzurichten: [verknüpfte IPs verwenden](/private-dns/connect-devices/other-options/linked-ip.md) und dedizierte IPs verwenden.

Dedizierte IP-Adressen sind im Allgemeinen eine stabilere Option. Für verknüpfte IP-Adressen gelten einige Einschränkungen, z. B. sind nur Wohnadressen zulässig. Ihr Anbieter kann die IP-Adresse ändern und Sie müssen die IP-Adresse erneut verknüpfen. Mit dedizierten IPs erhalten Sie eine IP-Adresse, die ausschließlich Ihnen gehört, und alle Anfragen werden für Ihr Gerät gezählt.

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
