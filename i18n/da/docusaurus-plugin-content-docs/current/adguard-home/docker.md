---
title: Docker
sidebar_position: 11
---

Denne side indeholder specifikke retningslinjer for kørsel af AdGuard Home i Docker-containeren.

## Hurtig start {#quick-start}

### Hent Docker-afbildning

Denne kommando henter den seneste stabile version:

```sh
docker pull adguard/adguardhome
```

### Opret mapper til permanent opsætning og data

Afbildningen eksponerer to diskenheder til permanent lagring af data og opsætning. Flg. mapper skal derfor oprettes på en egnet diskenhed på værtssystemet:

- Datamappe, f.eks. `/min/egen/arbejdsmappe`.

- Opsætningsmappe, f.eks. `/min/egen/opsmappe`.

### Opret og kør containeren

Brug flg. kommando til at oprette en ny container og køre AdGuard Home:

```sh
docker run \
    -d \
    --name adguardhome \
    -p 53:53/tcp -p 53:53/udp \
    -p 67:67/udp -p 68:68/udp \
    -p 80:80/tcp -p 443:443/tcp \
    -p 443:443/udp -p 3000:3000/tcp \
    -p 853:853/tcp \
    -p 853:853/udp \
    -p 5443:5443/tcp -p 5443:5443/udp \
    -p 6060:6060/tcp \
    --restart unless-stopped \
    -v /my/own/workdir:/opt/adguardhome/work \
    -v /my/own/confdir:/opt/adguardhome/conf \
    adguard/adguardhome \
    ;
```

AdGuard Home-tjenestens admin-panel kan nu tilgås via http://127.0.0.1:3000/ fra en webbrowser.

Flg. porttildelinger kan være nødvendige:

- `-p 53:53/tcp -p 53:53/udp`: Krævet til almindelig DNS.

- `-p 67:67/udp -p 68:68/tcp -p 68:68/udp`: Krævet for at køre en DHCP-server.

- `-p 80:80/tcp -p 443:443/tcp -p 443:443/udp -p 3000:3000/tcp`: Krævet til admin-panelet samt for at køre en [HTTPS/DNS-over-HTTPS][enc]-server.

- `-p 853:853/tcp`: Krævet for at køre en [DNS-over-TLS][enc]-server.

- `-p 853:853/udp`: Krævet for at køre en [DNS-over-QUIC][enc]-server.

- `-p 5443:5443/tcp -p 5443:5443/udp`: Krævet for at køre en [DNSCrypt]-server.

- `-p 6060:6060/tcp`: Krævet for at køre en pprof debug-API.

### Klient-IP'er

For at få AdGuard Home til at se de oprindelige klient-IP'er i stedet for noget såsom `172.17.0.1` skal argumentet `--network host` føjes til listen over indstillinger.

### Styring af containeren

AdGuard Home-containeren kan styres med flg. kommandoer:

- Start:

    ```sh
    docker start adguardhome
    ```

- Stop:

    ```sh
    docker stop adguardhome
    ```

- Fjern:

    ```sh
    docker rm adguardhome
    ```

[DNSCrypt]: /adguard-home/encryption#configure-dnscrypt
[enc]: /adguard-home/encryption

## Opdatering til en nyere version {#update}

1. Hent den nye version fra Docker Hub:

    ```sh
    docker pull adguard/adguardhome
    ```

2. Stop og fjern den aktuelt kørende container (forudsat containeren hedder `adguardhome`):

    ```sh
    docker stop adguardhome
    docker rm adguardhome
    ```

3. Opret og start containeren med de nye afbildning via kommandoen fra det foregående afsnit.

## Kørsel af udviklings-builds {#unstable}

Ustabile udviklings-builds kan muligvis tilgås via tagsene `edge` eller `beta`. For at bruge det, erstat blot `adguard/adguardhome` med `adguard/adguardhome:edge` eller `adguard/adguardhome:beta` i hver kommando fra hurtigstartvejledningen. F.eks.:

```sh
docker pull adguard/adguardhome:edge
```

## Yderligere opsætning {#configuration}

Ved første kørsel oprettes en fil med standardværdierne ved navn `AdGuardHome.yaml`. Denne fil kan redigeres, når AdGuard Home-containeren ikke kører. Ellers vil evt. ændringer i filen gå tabt, da det kørende program vil overskrive dem.

Indstillingerne gemmes i [YAML]-formatet. Dokumentationen, der beskriver alle opsætbare parametre og deres værdier, er tilgængelig på [denne side][conf].

[YAML]: https://yaml.org
[conf]: /adguard-home/configuration

### Sundhedstjek

Den anbefalede måde at implementere en mekanisme til sundhedstjek på er at oprette en ny afbildning skræddersyet til målopsætningen. Implementeringer kan bruge det særlige domænenavn `healthcheck.adguardhome.test` i forventning om, at det returnerer et `NODATA`-svar. Angives dette specifikke navn i `blocked_hosts`-listen under afsnittet `dns` i opsætningsfilen, afbryder det sundhedstjekket, da det pålægger begrænsninger på brugen af dette navn. Egenskaberne `allowed_clients` og `disallowed_clients` bør også tillade klient-IP-sundhedstjekket.

## DHCP-server {#dhcp}

For at bruge AdGuard Home DHCP-serveren skal argumentet `--network host` videregives, når containeren oprettes:

```sh
docker run --name adguardhome --network host ...
```

Denne indstilling angiver, at Docker skal bruge værtens netværk i stedet for et Docker-bridged netværk.  Bemærk, at porttildeling med `-p` er unødvendig i dette tilfælde.

:::note

Værtsnetværksdriveren fungerer kun på Linux-værter og understøttes ikke på Docker Desktop til Mac, Docker Desktop til Windows eller Docker EE til Windows Server.

:::

## `resolved`-dæmon {#resolved}

For at køre AdGuard Home på et system, hvor `resolved`-dæmonen er startet, skal `DNSStubListener` deaktiveres for at forhindre porttilknytningskonflikt:

1. Deaktivér `DNSStubListener` og opdatér DNS-serveradressen.  Opret en ny fil, `/etc/systemd/resolved.conf.d/adguardhome.conf` (opret om nødvendigt mappen `/etc/systemd/resolved.conf.d`), og føj flg. indhold til den:

    ```ini
    [Resolve]
    DNS=127.0.0.1
    DNSStubListener=no
    ```

   Angivelse af `127.0.0.1` som DNS-serveradressen er nødvendig, da navneserveren ellers vil være `127.0.0.53`, hvilket ikke vil fungerer uden `DNSStubListener`.

2. Aktivér en ny `resolv.conf`-fil:

    ```sh
    mv /etc/resolv.conf /etc/resolv.conf.backup
    ln -s /run/systemd/resolve/resolv.conf /etc/resolv.conf
    ```

3. Stop `DNSStubListener`:

    ```sh
    systemctl reload-or-restart systemd-resolved
    ```
