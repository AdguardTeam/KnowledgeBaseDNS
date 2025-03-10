---
title: Benutzerregeln
sidebar_position: 2
---

## Warum diese Funktion nützlich ist

Die Benutzerregeln sind die gleichen Filterregeln wie die, die in gängigen Blocklisten verwendet werden. Sie können das Filtern von Websites an Ihre Bedürfnisse anpassen, indem Sie Regeln manuell hinzufügen oder aus einer vordefinierten Liste importieren.

Um Ihr Filtern flexibler und besser an Ihre Einstellungen anzupassen, werfen Sie einen Blick auf die [Regelsyntax](/general/dns-filtering-syntax/) für AdGuard DNS-Filterregeln.

## Kurzanleitung

So richten Sie Benutzerregeln ein:

1. Wechseln Sie zur _Übersicht_.

2. Gehen Sie zum Abschnitt _Server_.

3. Wählen Sie den erforderlichen Server aus.

4. Klicken Sie auf die Option _Benutzerregeln_.

5. Sie finden mehrere Optionen zum Hinzufügen von Benutzerregeln.

    - Am einfachsten ist es, den Generator zu nutzen. Um ihn zu verwenden, klicken Sie auf _Neue Regel hinzufügen_ → Geben Sie den Namen der Domain ein, die Sie sperren oder entsperren möchten → Klicken Sie auf _Regel hinzufügen_
        ![Regel hinzufügen \*Rand](https://cdn.adtidy.org/content/kb/dns/private/new_dns/userrules_step5.png)
    - Der fortgeschrittene Weg ist die Verwendung des Regel-Editors. Klicken Sie auf _Editor öffnen_ und geben Sie Sperrregeln gemäß der [Syntax](/general/dns-filtering-syntax/) ein

Mit dieser Funktion können Sie eine [Anfrage zu einer anderen Domain umleiten, indem der Inhalt der DNS-Anfrage ersetzt wird](/general/dns-filtering-syntax/#dnsrewrite-modifier).
