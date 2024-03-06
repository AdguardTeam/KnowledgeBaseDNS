---
title: Sikker opsætning af AdGuard Home
sidebar_position: 4
---

Denne side indeholder en liste over yderligere anbefalinger, som fremmer sikkerheden i AdGuard Home.

## Valg af serveradresser

Første gang AdGuard Home startes, spørger den om, hvilken grænseflade der skal bruge til levering af alm. DNS. Den mest sikre og bekvemme mulighed afhænger af, hvorledes AdGuard Home ønskes kørt. Adresse(r) kan skiftes senere ved at stoppe AdGuard Home, redigere feltet `dns.bind_hosts` i opsætningsfilen og genstarte AdGuard Home.

:::note

UI'en giver pt. kun mulighed for at vælge én grænseflade, men der kan faktisk vælges flere adresser gennem opsætningsfilen. Vi vil forbedre UI'en i fremtidige udgivelser.

:::

Er det hensigten at køre AdGuard Home **kun på en computer,** vælg da loopback-enheden (også kaldet "localhost"). Den kaldes normalt `localhost`, `lo` eller noget lignende og har adressen `127.0.0.1`.

Planlægges AdGuard Home kørt på en **router på et lille isoleret netværk**, vælg da den lokalt leverede grænseflade. Navnene kan variere, men de indeholder normalt ordene 'wlan' eller 'wlp' og har en adresse begyndende med '192.168.'. Man bør nok også tilføje loopback-adressen, hvis software på selve routeren også skal bruge AdGuard Home.

Er hensigten at køre AdGuard Home på en **offentligt tilgængelig server**, vil man sandsynligvis vælge indstillingen _Alle grænseflader_. Bemærk, at dette kan udsætte serveren for DDoS-angreb, så læs venligst afsnittene om adgangsindstillinger og hastighedsbegrænsning nedenfor.

## Adgangsindstillinger

:::note

Hvis AdGuard Home ikke er tilgængelig udefra, kan dette afsnit overspringes.

:::

Nederst på siden _Indstillinger_ → _DNS-indstillinger_ findes afsnittet _Adgangsindstillinger_. Disse indstillinger muliggør enten at udelukke klienter kendt for at misbruge AdGuard Home-instansen, eller at aktivere Hvidlistetilstanden. Hvidlistetilstanden anbefales til offentlig brug, hvor antallet af klienter er kendt, og alle klienterne er i stand til at bruge sikker DNS.

For at aktivere Hvidlistetilstanden, angiv [ClientIDs][cid] (anbefales) eller IP-adresser for tilladte klienter i feltet _Tilladte klienter_.

[cid]: https://github.com/AdguardTeam/AdGuardHome/wiki/Clients#clientid

## Deaktivering af alm. DNS

:::note

Hvis AdGuard Home ikke er tilgængelig udefra, kan dette afsnit overspringes.

:::

Er alle klienter, som anvender AdGuard Home, i stand til at anvende krypterede protokoller, er det en god idé at deaktivere alm. DNS eller at gøre den utilgængelig udefra.

Ønskes alm. DNS-levering deaktiveret helt, kan dette gøres fra siden _Indstillinger_ → _Krypteringsindstillinger_.

Ønskes alm. DNS begrænset til kun intern brug, stop AdGuard Home, redigér feltet `dns.bind_hosts` i opsætningsfilen, så det kun indeholder loopback-adresse(n/rne) og genstart dernæst AdGuard Home.

## Alm. DNS-frekvensbegrænsning

:::note

Hvis AdGuard Home ikke er tilgængelig udefra, kan dette afsnit overspringes.

:::

En standard alm. DNS-frekvensbegrænsning på 20 burde generelt være tilstrækkelig, men har man en liste over kendte klienter, kan man føje dem til hvidlisten og angive en strengere frekvensbegrænsning for andre klienter.

## OS-tjenesteproblemer

For at forhindre eskalering af privilegier gennem binær plantning er det vigtigt, at den mappe, hvori AdGuard Home er installeret, er tildelt korrekt ejerskab og tilladelser.

Vi takker Go Compile for hjælpen med at skrive dette afsnit.

### Unix (FreeBSD, Linux, macOS, OpenBSD)

AdGuard Home-arbejdsmappen, der som standard er `/Applications/AdGuardHome` på macOS og `/opt/AdGuardHome` på andre Unix-systemer, såvel som selve binærfilen bør generelt have `root:root`-ejerskab og ikke kunne skrives til af andre end 'root'. Man kan tjekke dette med flg. kommando, og erstatte `/opt/AdGuardHome` med sin mappe og `/opt/AdGuardHome/AdGuardHome` med sin binære:

```sh
ls -d -l /opt/AdGuardHome
ls -l /opt/AdGuardHome/AdGuardHome
```

Et rimeligt sikkert output burde se sådan ud:

```none
drwxr-xr-x 4 root root 4096 Jan 1 12:00 /opt/AdGuardHome/
-rwxr-xr-x 1 root root 29409280 Jan 1 12:00 /opt/AdGuardHome/AdGuardHome
```

Bemærk manglen på skrivetilladelse for andre end "root", såvel som "root"-ejerskab. Er tilladelserne og/eller ejerskabet ikke er korrekte, eksekvér flg. kommandoer under `root`:

```sh
chmod 755 /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
chown root:root /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
```

### Windows

Princippet er det samme på Windows: Sørg for, at AdGuard-hjemmemappen, typisk `C:\Program Files\AdGuardHome`, samt den binære `AdGuardHome.exe`, har de tilladelser, som kun tillader alm. brugere at læse og eksekvere/opliste dem.

Fremadrettet planlægger vi at frigive Windows-builds som MSI-installationsfiler, hvilket sikrer, at dette udføres automatisk.
