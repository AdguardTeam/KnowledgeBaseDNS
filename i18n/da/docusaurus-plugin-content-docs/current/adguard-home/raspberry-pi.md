---
title: Raspberry Pi
sidebar_position: 12
---

AdGuard Home kan installeres på [Raspberry Pi][pi] og bruges til at filtrere reklamer og spare datatrafik. Når installeret, kan AdGuard Home benyttes på enhver enhed forbundet til det samme lokale netværk.

[pi]: https://www.raspberrypi.org

## Klargør Pi {#prepare}

Der skal bruges en Raspberry Pi med netværksadgang samt [SSH aktiveret][ssh]. Slut den til en skærm og et tastatur, start den op og notér IP-adresse, som Pi-enheden er blevet tildelt:

```sh
hostname -I | xargs -n 1
```

Findes flere IP-adresser, notér den første. Skift til den primære computer, mens Pi-enheden fortsat kører, og start en SSH-klient. På Windows kan der bruges [PuTTY][putty], mens der på Linux, macOS og andre Unix-lignende OS'er blot kan bruge den foretrukne terminalemulator.

Skriv:

```sh
ssh pi@192.168.10.20
```

(hvor `192.168.10.20` er den IP-adresse, der blev noteret), og skriv dernæst adgangskoden til Pi-enheden (som er `raspberry`, hvis den ikke allerede er blevet skiftet). Når det er klaret, vises kommandolinjegrænsefladen. Nu er alt klar til installationen af AdGuard Home!

[ssh]: https://www.raspberrypi.com/documentation/computers/remote-access.html
[putty]: https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html

## Installation af AdGuard Home {#install}

Gå til [AdGuard-websiden][inst] og download de binære filer til Raspberry Pi:

```sh
cd
wget 'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_armv6.tar.gz'
tar -f AdGuardHome_linux_armv6.tar.gz -x -v
```

Erstat `armv6` med den ARM-version, der understøttes bedst af Pi-enheden.

Denne kommando udpakker de nødvendige data til et ny mappe ved navn `AdGuardHome`.

Installér dernæst AdGuard Home som en \[tjeneste].

[service]: /adguard-home/getting-started#service
[inst]: https://github.com/AdguardTeam/AdGuardHome

## Tjek filtreringen {#check}

Det kan tjekkes, om den fungerer korrekt, ved at køre denne på Pi-enheden:

```sh
host doubleclick.net 127.0.0.1
```

Fungerer alt korrekt, vises dette output:

```sh
Bruger domæneserver:
Navn: 127.0.0.1
Adresse: 127.0.0.1#53
Aliasser:

Værten doubleclick.net blev ikke fundet: 3(NXDOMAIN)
```

## Opsæt relevante enheder {#devices}

Når det er bekræftet, at AdGuard Home fungerer på Raspberry Pi-enheden, kan den benyttes på andre computere på netværket ved at ændre deres system-DNS-indstillinger, så de bruger Pi-enhedens IP-adresse.

Gå til siden _Opsætningsvejledning_ i webgrænsefladen og følg instruktionerne.
