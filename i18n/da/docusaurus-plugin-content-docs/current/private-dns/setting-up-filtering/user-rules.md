---
title: Brugerregler
sidebar_position: 3
---

## Hvad det er, og hvorfor man behøver det

Brugerregler er de samme filtreringsregler som dem, der anvendes i almindelige blokeringslister. Man kan tilpasse webstedets filtrering jf. sine behov ved at tilføje regler manuelt eller importere dem fra en prædefineret liste.

For at gøre filtreringen mere fleksibel og bedre tilpasset egne præferencer, kan man tjekke [regelsyntaksen](/general/dns-filtering-syntax/) ud for AdGuard DNS-filtreringsregler.

## Anvendelse

For at opsætte brugerregler:

1. Gå til _Kontrolpanel_.

2. Gå til afsnittet _Servere_.

3. Vælg den ønskede server.

4. Klik på indstillingen _Brugerregler_.

5. Der findes flere muligheder for at tilføje brugerregler.

   - Den nemmeste måde er at bruge generatoren. For at bruge den, klik på _Tilføj ny regel_ → Angiv navnet på det domæne, man vil blokere eller afblokere → Klik på _Tilføj regel_
     ![Tilføj regel \*grænse](https://cdn.adtidy.org/content/kb/dns/private/new_dns/userrules_step5.png)
   - Den avancerede måde er at bruge regel-editoren. Klik på _Åbn editor_ og indtast blokkeringsregler iht. [syntaks](/general/dns-filtering-syntax/)

Denne funktion muliggør at [omdirigere en forespørgsel til et andet domæne ved at erstatte indholdet af DNS-forespørgslen](/general/dns-filtering-syntax/#dnsrewrite-modifier).
