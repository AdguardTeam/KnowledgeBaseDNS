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

[cid]: /adguard-home/clients#client-id

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

## Bekræft udgivelser {#verify-releases}

Vi signerer de eksekverbare filer, vi bygger, så det kan bekræftes, at de er oprettet af os og ikke af nogen andre. En arkivfil vil indeholde en lille fil af typen `.sig` indeholdende signaturdataene. Udskifter nogen den binære fil i et arkiv, vil det stå klart, at det ikke er en officiel AdGuard-udgivelse.

### Hvordan bekræftes det, at den eksekverbare fil er bygget af AdGuard? {#sådan-bekræftes-en-eksekverbar-fil}

1. Udpak AdGuard Home-arkivfilen.

2. Importér den offentlige AdGuard Home-nøgle fra nøgleserveren. For **de seneste udgivelser**, kør:

   ```sh
   gpg --keyserver 'keys.openpgp.org' --recv-key '28645AC9776EC4C00BCE2AFC0FE641E7235E2EC6'
   ```

   Ovenstående kommando vil vise noget i stil med:

   ```none
   gpg: key 0FE641E7235E2EC6: public key "AdGuard <devteam@adguard.com>" imported
   gpg: Total number processed: 1
   gpg:               imported: 1
   ```

3. Bekræft.

   - UNIX:

     ```sh
     gpg --verify AdGuardHome/AdGuardHome.sig
     ```

   - Windows (PGP skal muligvis installeres):

     ```ps1
     gpg --verify AdGuardHome/AdGuardHome.exe.sig
     ```

   Der vil ses noget i stil med:

   ```none
   gpg: assuming signed data in 'AdGuardHome/AdGuardHome'
   gpg: Signature made Mon 15 Aug 2022 19:30:55 MSK
   gpg:                using RSA key 28645AC9776EC4C00BCE2AFC0FE641E7235E2EC6
   gpg:                issuer "devteam@adguard.com"
   gpg: Good signature from "AdGuard <devteam@adguard.com>" [ultimate]
   ```

   Tjek følgende:

   - RSA-nøgle: Skal være `28645AC9776EC4C00BCE2AFC0FE641E7235E2EC6`;
   - udstedernavn: Skal være `AdGuard`;
   - E-mailadresse: Skal være `devteam@adguard.com`;

   Der kan også forekomme flg. advarsel:

   ```none
   gpg: ADVARSEL: Nøglens bruger-ID er ikke certificeret med en betroet signatur!
   gpg:          Der er ingen indikation af, at signaturen tilhører ejeren.
   Primær nøgles fingeraftryk: 2864 5AC9 776E C4C0 0BCE  2AFC 0FE6 41E7 235E 2EC6
   ```

### Reproduktion af AdGuard Home-builds {#reproducing-builds}

AdGuard Home anvender [reproducerbare builds][repr]. Se afsnittet `build-release.sh` i vores [build script-dokumentation][build].

[build]: https://github.com/AdguardTeam/AdGuardHome/tree/master/scripts
[repr]: https://reproducible-builds.org/
