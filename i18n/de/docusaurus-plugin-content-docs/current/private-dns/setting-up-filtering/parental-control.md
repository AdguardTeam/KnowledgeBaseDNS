---
title: Kindersicherung
sidebar_position: 5
---

_Kindersicherung_ ist eine Reihe von Einstellungen, die Ihnen die Flexibilität bieten, den Zugriff auf bestimmte Websites mit sensiblen Inhalt anzupassen. Diese Funktion können Sie verwenden, um den Zugriff Ihrer Kinder auf Websites mit Inhalten für Erwachsene einzuschränken, Suchabfragen anzupassen, die Nutzung beliebter Dienste zu blockieren und mehr.

## Kindersicherung einrichten

Sie können alle Funktionen flexibel auf Ihren Servern konfigurieren, einschließlich der Kindersicherungsfunktion. [Im entsprechenden Artikel](private-dns/server-and-settings/server-and-settings.md) können Sie sich damit vertraut machen, was ein Server in AdGuard DNS ist, und erfahren, wie Sie verschiedene Server mit unterschiedlichen Einstellungen erstellen.

Gehen Sie anschließend zu den Einstellungen des ausgewählten Servers und aktivieren Sie die erforderlichen Konfigurationen.

### Websites für Erwachsene blockieren

Blockiert Websites mit unangemessenen und nicht jugendfreien Inhalten.

![Blockierte Website \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/adult_blocked.png)

### Sichere Suche

Entfernt unangemessene Ergebnisse von Google, Bing, DuckDuckGo, Yandex, Pixabay, Brave und Ecosia.

### Eingeschränkter Modus für YouTube

Entfernt die Option, Kommentare unter Videos anzusehen und zu posten sowie mit Inhalten ab 18 Jahren auf YouTube zu interagieren.

### Gesperrte Dienste und Websites

Sie können den Zugriff auf beliebte Dienste mit einem Klick beschränken. Dies ist nützlich, wenn Sie nicht möchten, dass verbundene Geräte bestimmte Plattformen wie Instagram und YouTube besuchen.

![Gesperrte Dienste \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/blocked_services.png)

### Websites nach Kategorie blockieren

AdGuard DNS blockiert mit einem Klick den Zugriff auf beliebte Dienste. Wenn Sie beispielsweise Websites blockieren, die Informationen zu Alkohol, Tabak oder Drogen enthalten, kann das ausgewählte Gerät keine Seiten mehr öffnen, die unter diese Kategorien fallen.

![Kategorienbasierte Blockierung \*mobile_border] (https://cdn.adtidy.org/content/release_notes/dns/v2-18/category_de.png)

### Pausenzeitplan

Mit dieser Funktion können Sie den Zugriff auf bestimmte Kategorien von Websites einschränken, indem Sie aus mehr als 20 Kategorien auswählen, darunter _Inhalte für Erwachsene_, _Spiele_, _Bankwesen_ und _Kommunikation_. Sie können ein oder mehrere Pausenintervalle für jeden Tag hinzufügen.

Sie können die Einschränkungen beispielsweise an Wochentagen ab 7:00 Uhr pausieren. bis 8:00 Uhr vor der Schule und ab 18:00 Uhr bis 20:00 Uhr am Abend. Außerhalb dieser Intervalle wird die _Kindersicherung_ wie gewohnt übernommen.

So richten Sie einen Pausenplan ein:

1. Gehen Sie zu _Server_ → wählen Sie einen Server aus → _Kindersicherung_ → _Zeitplan pausieren_.
2. Klicken Sie neben dem gewünschten Tag auf die Schaltfläche **+** und legen Sie das Intervall im Dialog _Pause hinzufügen_ fest.
3. Wiederholen Sie den Vorgang, um weitere Intervalle für denselben Tag hinzuzufügen.
4. Um ein bestehendes Intervall zu ändern, klicken Sie auf _Bearbeiten_.

Sie können mehrere Intervalle für denselben Tag festlegen. Intervalle am selben Tag können sich nicht überschneiden: Wenn Sie versuchen, sich überschneidende Intervalle zu erstellen, sehen Sie eine Warnung und können den Zeitplan nicht speichern.

![Überlappende Intervalle \*mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/overlapping_intervals.png)

Wenn Sie das Kontrollkästchen „_Den ganzen Tag_“ aktivieren, werden die Einschränkungen der _Kindersicherung_ für den gesamten Tag ausgesetzt und ersetzen damit alle von Ihnen festgelegten Zeitintervalle.

Pausenintervalle können sich auch über Mitternacht erstrecken. Wenn Sie beispielsweise eine Pause ab 22:00 Uhr einstellen am Montag bis 7 Uhr Am Dienstag wird das Dashboard es in zwei Intervallen anzeigen: Montag, 22:00–00:00 Uhr, und Dienstag, 00:00–07:00 Uhr.

![Zeitplan pausieren \*mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/Pause_schedule.png)
