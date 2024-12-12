---
title: Verknüpfte IPs
sidebar_position: 3
---

## Was verknüpfte IPs sind und warum sie nützlich sind

Nicht alle Geräte unterstützen verschlüsselte DNS-Protokolle. In diesem Fall sollten Sie die Einrichtung eines unverschlüsselten DNS in Betracht ziehen. Sie können zum Beispiel eine **verknüpfte IP-Adresse** verwenden. Die einzige Voraussetzung für eine verknüpfte IP-Adresse ist, dass es sich um eine private IP-Adresse handeln muss.

:::note

Eine **Wohnsitz-IP-Adresse** wird einem Gerät zugewiesen, das mit einem örtlichen ISP verbunden ist. Sie ist in der Regel an einen bestimmten Ort gebunden und wird einzelnen Häusern oder Wohnungen zugeordnet. Menschen verwenden Wohnsitz-IP-Adressen für alltägliche Online-Aktivitäten wie das Durchsuchen des Internets, das Senden von E-Mails, die Nutzung sozialer Netzwerke oder das Streamen von Inhalten.

:::

Manchmal könnte eine Wohnsitz-IP-Adresse bereits verwendet werden, und falls Sie versuchen, eine Verbindung herzustellen, wird AdGuard DNS die Verbindung verhindern.
![Verknüpfte IPv4-Adresse \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked.png)
Falls dies passiert, wenden Sie sich bitte an den Support unter [support@adguard-dns.io](mailto:support@adguard-dns.io), und sie werden Ihnen mit den richtigen Konfigurationseinstellungen weiterhelfen.

## So richten Sie eine verknüpfte IP ein

Die folgenden Anweisungen erklären, wie Sie eine Verbindung zum Gerät über eine **verknüpfte IP-Adresse** herstellen:

1. Öffnen Sie Übersicht.
2. Fügen Sie ein neues Gerät hinzu oder öffnen Sie die Einstellungen eines zuvor verbundenen Geräts.
3. Gehen Sie zu _DNS-Serveradressen verwenden_.
4. Öffnen Sie _Einfache DNS-Serveradressen_ und verbinden Sie die verknüpfte IP.
   ![Verknüpfte IP-Adresse \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked_step4.png)

## Dynamisches DNS: Warum es nützlich ist

Jedes Mal, wenn ein Gerät eine Verbindung zum Netzwerk herstellt, erhält es eine neue dynamische IP-Adresse. Wenn ein Gerät die Verbindung trennt, kann der DHCP-Server die freigegebene IP-Adresse einem anderen Gerät im Netz zuweisen. Das bedeutet, dass sich dynamische IP-Adressen häufig und unvorhersehbar ändern. Folglich müssen Sie die Einstellungen jedes Mal aktualisieren, wenn das Gerät neu gestartet wird oder sich das Netzwerk ändert.

Um die verknüpfte IP-Adresse automatisch zu aktualisieren, können Sie DNS verwenden. AdGuard DNS überprüft regelmäßig die IP-Adresse Ihrer DDNS-Domain und verknüpft sie mit Ihrem Server.

:::note

Dynamic DNS (DDNS) ist ein Dienst, der DNS-Einträge automatisch aktualisiert, wenn sich Ihre IP-Adresse ändert. Er konvertiert Netzwerk-IP-Adressen in benutzerfreundliche Domain-Namen. Die Informationen, die einen Namen mit einer IP-Adresse verbinden, werden in einer Tabelle auf dem DNS-Server gespeichert. DDNS aktualisiert diese Einträge, sobald sich die IP-Adressen ändern.

:::

Auf diese Weise müssen Sie die zugehörige IP-Adresse nicht jedes Mal manuell aktualisieren, wenn sich diese ändert.

## Dynamisches DNS: So richten Sie es ein

1. Zuerst müssen Sie überprüfen, ob DDNS von Ihren Router-Einstellungen unterstützt wird:
   - Öffnen Sie _Router-Einstellungen_ → _Netzwerk_
   - Suchen Sie den Abschnitt DDNS oder _Dynamic DNS_
   - Wechseln Sie dorthin und überprüfen Sie, ob die Einstellungen tatsächlich unterstützt werden. _Dies ist nur ein Beispiel, wie es aussehen könnte. Dies kann je nach Router variieren_
     ![DDNS unterstützt \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dynamic_dns.png)
2. Registrieren Sie Ihre Domain bei einem beliebten Service wie [DynDNS](https://dyn.com/remote-access/), [NO-IP](https://www.noip.com/) oder einem anderen DDNS-Anbieter Ihrer Wahl.
3. Geben Sie die Domain in die Router-Einstellungen ein und synchronisieren Sie die Konfigurationen.
4. Gehen Sie zu den Einstellungen der Verknüpften IP, um die Adresse zu verbinden, navigieren Sie dann zu _Erweiterte Einstellungen_ und klicken Sie auf _DDNS konfigurieren_.
5. Geben Sie die Domain ein, die Sie zuvor registriert haben, und klicken Sie auf _DDNS konfigurieren_.
   ![DDNS konfigurieren \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dns_supported.png)

Fertig! Sie haben DDNS erfolgreich eingerichtet!

## Automatisierung der Aktualisierung verknüpfter IPs über Skript

### Unter Windows

Der einfachste Weg ist die Verwendung des Aufgabenplaners:

1. Erstellen Sie eine Aufgabe:
   - Öffnen Sie den Aufgabenplaner.
   - Erstellen Sie eine neue Aufgabe.
   - Legen Sie einen Trigger (Auslöser) fest, um alle 5 Minuten ausgeführt zu werden.
   - Wählen Sie _Programm ausführen_ als Aktion.
2. Wählen Sie ein Programm:
   - Geben Sie im Feld _Programm/Skript_ `powershell` ein
   - Geben Sie im Feld _Argumente hinzufügen_ ein:
     - `Command "Invoke-WebRequest -Uri 'https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}'"`
3. Speichern Sie die Aufgabe.

### Unter macOS und Linux

Unter macOS und Linux ist es am einfachsten, `cron` zu verwenden:

1. Öffnen Sie crontab:
   - Führen Sie im Terminal `crontab -e` aus.
2. Fügen Sie eine Aufgabe hinzu:
   - Fügen Sie die folgende Zeile ein:
     `/5 * * * * curl https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}`
   - Diese Aufgabe wird alle 5 Minuten ausgeführt
3. Speichern Sie crontab.

:::note Wichtig

- Stellen Sie sicher, dass `curl` auf macOS und Linux installiert ist.
- Denken Sie daran, die Adresse aus den Einstellungen zu kopieren und `ServerID` und `UniqueKey` zu ersetzen.
- Wenn eine komplexere Logik oder Verarbeitung der Abfrageergebnisse erforderlich ist, sollten Sie Skripte (z. B. Bash, Python) in Kombination mit einem Aufgabenplaner oder cron verwenden.

:::
