---
title: Forældrekontrol
sidebar_position: 5
---

\*Forældrekontrol er et sæt indstillinger, som giver fleksibilitet til at tilpasse adgangen til bestemte websteder med sensitivt indhold. Denne funktion kan anvendes til at begrænse børnenes adgang til voksenwebsteder, tilpasse søgeforespørgsler, blokere brugen af populære tjenester mv.

## Sådan opsættes det

Man kan fleksibelt opsætte alle funktioner på sine servere, herunder funktionen Forældrekontrol. [I artiklen](private-dns/server-and-settings/server-and-settings.md) kan man gøre sig bekendt med, hvad en "server" er i AdGuard DNS og læse, hvordan forskellige servere oprettes med forskellige sæt af indstillinger.

Gå dernæst til indstillingerne for den valgte server og aktivér de ønskede opsætninger.

### Blokér voksenwebsteder

Blokerer websteder med upassende og voksenindhold.

![Blokeret websted \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/adult_blocked.png)

### Sikker søgning

Fjerner upassende resultater fra Google, Bing, DuckDuckGo, Yandex, Pixabay, Brave og Ecosia.

### YouTube restriktiv tilstand

Fjerner muligheden for at se og skrive kommentarer under videoer og interagere med 18+ indhold på YouTube.

### Blokerede tjenester og websteder

Begræns adgangen til populære tjenester med ét klik. Dette er nyttigt, såfremt forbundne enheder skal hindres i at besøge bestemte platforme, såsom Instagram og YouTube.

![Blokerede tjenester \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/blocked_services.png)

### Blokér websteder efter kategori

Muliggør at begrænse adgangen til bestemte kategorier af websteder ved at vælge mellem flere end 20 kategorier, herunder _Voksenindhold_, _Spil_, _Bankvirksomhed_ og _Kommunikation_. Blokeres eksempelvis websteder indeholdende information om alkohol, tobak eller stoffer, vil den valgte enhed ikke længere kunne åbne sider, som falder ind under disse kategorier.

![Kategoribaseret blokering \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/v2-18/category_en.png)

### Pausere tidsplan

Suspenderer midlertidigt _Forældrekontrol_-restriktioner på udvalgte dage og i bestemte tidsintervaller. Der kan tilføjes en eller flere pauseintervaller for hver dag.

Restriktionerne kan f.eks. pauseres på hverdage fra kl. 07:00. til 08:00. før skole og fra kl. 18:00. til 20:00. om aftenen. Uden for disse intervaller gælder _Forældrekontrol_ som normalt.

Sådan opsættes en pausetidsplan:

1. Gå til _Servere_ → vælg en server → _Forældrekontrol_ → _Pausere tidsplan_.
2. Klik på knappen **+** ud for den ønskede dag, og indstil intervallet i dialogboksen _Tilføj pause_.
3. Gentag for at føje flere intervaller til den samme dag.
4. Et eksisterende interval ændres ved at klikke på _Redigér_.

Der kan opsættes flere intervaller for den samme dag. Intervaller på samme dag må ikke overlappe hinanden: Forsøger overlappende intervaller oprettet, vises en advarsel, og tidsplanen vil ikke kunne gemmes.

![Overlappende intervaller \*mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/overlapping_intervals.png)

Afkrydses feltet _Hele dagen_ pauseres _Forældrekontrol_-begrænsningerne for hele dagen og erstatter evt. intervaller, som er angivet.

Pauseintervaller kan også strække sig over midnat. Opsættes f.eks. en pause fra kl. 22. mandag til kl. 07. tirsdag, viser kontrolpanelet det som to intervaller: Mandag, 22:00-00:00 og tirsdag, 00:00-07:00.

![Pausere tidsplan \*mobile](https://cdn.adtidy.org/content/kb/dns/private/new_dns/parental_control/Pause_schedule.png)
