---
title: Een DNS-protocol kiezen
sidebar_position: 2
---

Een DNS-protocol is een set regels die jouw apparaat gebruikt om te communiceren met een DNS-server — een systeem dat websitenaam, zoals example.com, omzet in IP-adressen die computers kunnen begrijpen. Dit proces vond vroeger plaats in platte tekst, wat betekende dat het kon worden gezien of onderschept door derden, zoals je ISP of hackers. Versleutelde DNS-protocollen pakken dit probleem aan door je DNS-verzoek te beschermen, waardoor je internetgebruik privé en veilig blijft.

AdGuard DNS ondersteunt drie veilige, versleutelde DNS-protocollen: DoH, DoT en DoQ. Ze zijn allemaal ontworpen om je DNS-verkeer te beschermen, maar ze hebben allemaal hun eigen sterke punten en beperkingen. Het volgende overzicht helpt je de verschillen te begrijpen en de beste optie voor jou te kiezen.

### DNS-over-TLS (DoT)

DNS-over-TLS verbetert de privacy door je DNS-verkeer te versleutelen en over poort 853 te sturen, die speciaal gereserveerd is voor versleuteld DNS-verkeer.

DoT is niet de sterkste optie als het gaat om privacy. Het maakt gebruik van de speciale poort (853), waardoor het voor netwerken gemakkelijker is om te detecteren en mogelijk te blokkeren. DoT kan echter nog steeds nuttig zijn in bedrijfs- of beheerde omgevingen waar beheerders veilige DNS willen toestaan met behoud van controle over het netwerkverkeer.

### DNS-over-HTTPS (DoH)

DNS-over-HTTPS stuurt je DNS query's over poort 443, dezelfde beveiligde verbinding die gebruikt wordt om websites te laden. Dit maakt het moeilijker voor netwerken of censuur om te detecteren of te blokkeren.

Het kan echter onstabiel zijn en leiden tot prestatieproblemen. Wanneer alle datapakketten dezelfde verbinding delen, vertrouwen ze op dezelfde transportlaag. Dit kan een probleem veroorzaken dat head-of-line-blokkering wordt genoemd. Als een pakket verloren gaat of vertraging oploopt, houdt het al het andere tegen, inclusief niet-gerelateerde pakketten. Als gevolg hiervan lopen alle reacties vertraging op, zelfs als de meeste gegevens klaar zijn om te worden geleverd.

### DNS-over-QUIC (DoQ)

DNS-over-QUIC is een DNS-protocol dat gebruik maakt van het QUIC-transportlaagprotocol om DNS-verzoeken te verzenden. It solves one of the main problems with the DoH protocol: head-of-line blocking.

Aangezien DoQ het QUIC-protocol gebruikt om DNS-activiteit gescheiden te houden van webverkeer, worden de timingproblemen vermeden die in DoH worden waargenomen. Consequently, it doesn’t reveal any traffic patterns. Dit maakt het moeilijker om je DNS-query's te koppelen aan je browse-activiteit, ook al is het verkeer zelf gemakkelijker te herkennen.

However, DoQ remains an experimental protocol and might face stability problems or be blocked by ISPs and censors. If you are not ready to deal with that, it might not be the best choice.

![DoH vs. DoQ \*border](https://cdn.adtidy.org/blog/new/gy178dohdoq.jpg)

:::note

Meer gedetailleerde informatie over head-of-line blocking en het DNS-over-QUIC-protocol is te vinden in onze [blogpost](https://adguard-dns.io/en/blog/dns-over-quic.html)

:::
