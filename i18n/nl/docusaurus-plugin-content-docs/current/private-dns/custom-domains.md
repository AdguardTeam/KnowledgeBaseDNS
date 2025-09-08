---
title: Aangepaste domeinen
sidebar_position: 6
---

AdGuard DNS-abonnees kunnen hun eigen domeinen (zoals `dns.example.com`) instellen in plaats van de standaard `d.adguard-dns.com`. Deze functie is bedoeld om bedrijven te helpen DNS-beveiliging af te stemmen op hun infrastructuur door naadloze integratie met het beveiligingsbeleid van het bedrijf te garanderen, terwijl de volledige advertentieblokkering en privacyfuncties van AdGuard DNS behouden blijven.

:::note

Aangepaste domeinen zijn beschikbaar voor de gebruikers van **Zakelijk**- en **Team**-abonnementen.

:::

## Hoe een aangepast domein in te stellen

Om een aangepast domein te configureren, meld je aan bij je AdGuard DNS-dashboard en ga naar [_Accountinstellingen_](https://adguard-dns.io/en/dashboard/account). Scroll omlaag naar _Geavanceerde instellingen_ en selecteer _Aangepaste domeinen_. Vervolgens moet je de drie belangrijkste stappen doorlopen.

1. Het protocol kiezen. Hier heb je twee opties:

    - DoH-domein toevoegen (voor DNS-over-HTTPS)
    - DoT/DoQ-domein toevoegen (voor DNS-over-TLS of DNS-over-QUIC)

   ![Kies het protocol \*mobiel](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_1.png)

2. Voer na het selecteren van het protocol de gewenste domeinnaam in (bijvoorbeeld `voorbeeld.com`) en controleer het CNAME-record.

   ![CNAME-record \*mobiel](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_2.png)

3. Een certificaat instellen. Voor DoT/DoQ-domeinen moet je een TLS-certificaat met jokertekens uploaden. Als je DoH kiest, kun je je eigen TLS-certificaat opgeven of AdGuard DNS er een voor je laten genereren. Na verificatie verschijnt je aangepaste domein op het dashboard, klaar voor gebruik.

   ![Aangepaste domeinlijst \*mobiel](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_3.png)
