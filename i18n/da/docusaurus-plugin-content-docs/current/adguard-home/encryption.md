---
title: DNS-kryptering
sidebar_position: 6
---

AdGuard Home understøtter alle moderne DNS-krypteringsprotokoller **out-of-the-box**:

- [DNS-over-HTTPS](https://en.wikipedia.org/wiki/DNS_over_HTTPS)
- [DNS-over-TLS](https://en.wikipedia.org/wiki/DNS_over_TLS)
- [DNS-over-QUIC](https://datatracker.ietf.org/doc/html/rfc9250)

:::note

AdGuard Home understøtter [DNSCrypt][dnscrypt-info] på håde klient- og på serversiden. [Læs hvordan AdGuard Home opsættes som en DNSCrypt-server](#configure-dnscrypt).

:::

Denne guide forklarer, hvordan en krypteret DNS-server opsættes med AdGuard Home.

[dnscrypt-info]: https://dnscrypt.info/

## Serverinstallation {#server-installation}

Formålet med at sikre DNS-trafikken er at sikre den mod tredjeparter, som kan analysere eller ændre den, f.eks. fra ISP.

{/*
TODO(e.burkov):  Use relative links to the docs instead of absolute, see AGDNS-2226.
*/}

Det betyder, at en server med en offentlig dedikeret IP-adresse er nødvendig. Der er masser af udbydere af billige cloud-servere: [DigitalOcean][digital-ocean], [Vultr][vultr], [Linode][linode] mv. Vælg blot en, opret en cloudserver dér, og [installér AdGuard Home](adguard-home/getting-started.md) på din server.

[digital-ocean]: https://digitalocean.com
[vultr]: https://vultr.com
[linode]: https://www.linode.com

## Registrér et domænenavn {#register-domain}

Først og fremmest behøves et domænenavn. Har man aldrig prøvet at registreret ét, er her en [enkel vejledning][domain-name-register] til at gøre det.

[domain-name-register]: https://www.pcworld.com/article/241722/web-apps/how-to-register-your-own-domain-name.html

## Få et SSL-certifikat {#certificate}

Både `DNS-over-HTTPS` og `DNS-over-TLS` er baseret på [TLS Kryptering][tls-wikipedia], så et SSL-certifikat kræves for at benytte dem.

Et SSL-certifikat kan købes via en Certificate Authority (CA), et firma, som webbrowsere og operativsystemer har tillid til ift. at udstede SSL-certifikater til domæner.

Alternativt kan et gratis certifikat fås via [Let’s Encrypt CA][letsencrypt], en gratis certifikatmyndighed udviklet af Internet Security Research Group (ISRG).

Denne vejledning forklarer, hvordan et certifikat fås fra denne CA.

### Vha. CertBot

Certbot er en brugervenlig klient, der henter et certifikat fra Let’s Encrypt.

1. Gå til [certbot.eff.org][certbot] og vælg _Ingen af ovenstående_-software og aktuelt operativsystem.
2. Følg installationsvejledningen og stop, når afsnittet _Kom i gang_ nås.

#### Hent et certifikat via DNS-udfordring

Et domænenavn have, så brug af DNS-udfordring vil være den nemmeste måde at få et certifikat på.

Eksekvér denne kommando, og følg CertBot'ens vejledning:

```sh
sudo certbot certonly --manual --preferred-challenges=dns --preferred-chain="ISRG Root X1"
```

Når færdig, haves to filer:

- `fullchain.pem`: PEM-kodet SSL-certifikat
- `privkey.pem`: PEM-kodet private nøgle

Begge vil være nødvendige for at opsætte AdGuard Home.

:::info Vigtigt

Nøjagtig den samme procedure skal benyttes ved fornyelsen af det eksisterende certifikat.

:::

### Via Lego

Der er også et rigtig godt og brugervenligt alternativ til CertBot, der hedder [LEGO][lego-source].

1. Installér det vha. [en passende metode][lego-install].
2. Vælg DNS-udbyder fra \[listen]\[lego-udbyder] og følg vejledningen for at få et certifikat.

Her er også [et simpelt script][legoagh] til automatisering af certifikatgenerering og -fornyelse.

[tls-wikipedia]: https://en.wikipedia.org/wiki/Transport_Layer_Security
[letsencrypt]: https://letsencrypt.org
[certbot]: https://certbot.eff.org
[lego-source]: https://go-acme.github.io/lego
[lego-install]: https://go-acme.github.io/lego/installation
[lego-provider]: https://go-acme.github.io/lego/dns
[legoagh]: https://github.com/ameshkov/legoagh

## Opseætning af AdGuard Hjem {#configure}

1. Åbn AdGuard Home-webgrænsefladen og gå til _indstillinger_.

2. Vælg afsnittet _Kryptering_.

   ![Skærmfoto af krypteringsindstillinger][encryption-screenshot]

3. Kopiér/indsæt indholdet af `fullchain.pem`-filen til inputfeltet under _Certifikater_ eller angiv stien til filen.

4. Kopiér/indsæt indholdet af `privkey.pem`-filen til inputfeltet under _Privat nøgle_ eller angiv stien til filen.

5. Angiv aktuelt domænenavn i _Servernavn_.

6. Efter besked om gennemført bekræftelse, klik på _Gem indstillinger_.

:::note

AdGuard Home genindlæser automatisk certifikater og/eller private nøgler angivet ved filsti, når disse ændres. En genindlæsning kan også udløses af et `SIGHUP`-signal.

:::

[encryption-screenshot]: https://cdn.adtidy.org/content/kb/dns/adguard-home/encryption-screenshot.png

## Brug med omvendt proxy {#reverse-proxy}

Vi har allerede en [vejledning][reverse-proxy-faq] til opsætning af en omvendt proxyserver for adgang til AdGuard Home Web UI.

AdGuard Home er i stand til at begrænse DNS-over-HTTPS-forespørgsler fra proxyserveren ikke er inkluderet på "betroet"-listen. Som standard er den opsat til at acceptér forespørgsler fra IPv4- og IPv6-løkkeadresser (loopback).

For at aktivere AdGuard Home til at håndtere DNS-over-HTTPS-forespørgsler fra en omvendt proxyserver skal indstillingen `trusted_proxies` i `AdGuardHome.yaml` sættes til proxyserverens IP-adresse. Haves flere proxyservere, kan der bruges en CIDR i stedet for en simpel IP-adresse.

### Nginx omvendt proxy

For at opsætte AdGuard Home til at acceptere forespørgsler fra Nginx omvendt proxyserver, så sørg for, at den omvendte proxyserver selv er opsat korrekt.

Filen `nginx.conf` skal indeholde de passende direktiver til at føje de understøttede videresendte headers til forespørgslen, som er `X-Real-IP` eller `X-Forwarded-For`. Dette kan opnås med [`ngx_http_realip_module`][ngx-http-realip-module]. Kort sagt tager modulet klientens reelle IP-adresse og skriver den til HTTP-forespørgslens header. AdGuard Home modtager og fortolker værdien af denne header som klientens reelle adresse. Adressen på den omvendte proxyserver modtages og tjekkes også mod listen over "betroede" proxyer.

En anden header, som kan overvejes proxy'et, er `Host`-headeren, der er obligatorisk, for at AdGuard Home kan genkende forespørgsler fra klienter med et ClientID i deres værtsnavne.

Eksempelvis, hvis opsætningen af den omvendte proxyserver indeholder flg. direktiver:

```nginx
location /dns-query {
  # …
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP '1.2.3.4';
  proxy_bind 192.168.1.2;
  # …
}
```

AdGuard Home vil få `192.168.1.2` som adressen på proxyserveren og tjekke den mod `trusted_proxies`. `1.2.3.4` vil være styret af adgangsindstillinger, hvis proxyen er "betroet".

### Cloudflare CDN

Cloudflares indholdsleveringsnetværk fungerer som en omvendt proxy og føjer sine [egne headers][cloudflare-headers] til de videresendte forespørgsler, som er `CF-Connecting-IP` og `True-Client-IP`. Disse understøttes også af AdGuard Home, så de omvendte proxyserveres [adresser][cloudflare-addresses] kan indsættes direkte i `trusted_proxies`-listen. Se [Cloudflares officielle reference][cloudflare-real-ip] om gendannelse af den besøgendes oprindelige IP.

### Andre headers

Andre HTTP-headers kan fremadrettet blive understøttet af AdGuard Home. Alle herader-relaterede funktionsforespørgsler bør dog først forsøges opløst via opsætning af selve den omvendte proxy.

For eksempel, for at ændre mekanismen [HTTP Strict Transport Security][hsts] til at omfatte det eksperimentelle `preload`-direktiv, kan noget i retning af flg. opsætningssekvens benyttes:

```nginx
location /dns-query {
  # …
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
  # …
}
```

{/*
TODO(e.burkov):  Use relative links to the docs instead of absolute, see AGDNS-2226.
*/}

[reverse-proxy-faq]: /adguard-home/faq.md#reverseproxy
[ngx-http-realip-module]: https://nginx.org/en/docs/http/ngx_http_realip_module.html
[cloudflare-headers]: https://support.cloudflare.com/hc/en-us/articles/200170986
[cloudflare-addresses]: https://www.cloudflare.com/ips
[cloudflare-real-ip]: https://support.cloudflare.com/hc/en-us/articles/200170786
[hsts]: https://datatracker.ietf.org/doc/html/rfc6797

## Opsætning af enheder {#configure-devices}

### Android

- Android 9 og senere har medfødt understøttelse af `DNS-over-TLS`. For at opsætte den, gå til _Indstillinger_ → _Netværk & Internet_ → _Avanceret_ → _Privat DNS_ og angiv relevant domænenavn.
- [AdGuard til Android][ag-for-android] understøtter `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` og `DNS-over-QUIC`.
- [Intra][intra] føjer `DNS-over-HTTPS` understøttelse til Android.

### iOS

- iOS 14 og senere har medfødt understttelse af `DNS-over-TLS` og `DNS-over-HTTPS` via opse6tningsprofiler. For at gøre tingene nemmere kan AdGuard Home generere disse opsætningsprofiler for brugeren. Gå blot til _Opsætningsvejledning_ → _DNS-fortrolighed_ og rul til iOS.
- [AdGuard til iOS][ag-for-ios] understøtter `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` og `DNS-over-QUIC`.
- [DNSCloak][dnscloak] understøtter `DNS-over-HTTPS`, men for at opsætte den til at bruge egen server, generér et [DNS Stamp][stamps] til den.

### Windows

- Windows 10 Build 19628 og senere har medfødt understøttelse af `DNS-over-HTTPS`.
- [AdGuard til Windows][ag-for-windows] understøtter `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` og `DNS-over-QUIC`.

### macOS

- macOS Big Sur og senere har medfødt understøttelse af `DNS-over-TLS` og `DNS-over-HTTPS` via opsætningsprofiler. For at gøre tingene nemmere kan AdGuard Home generere disse opsætningsprofiler for brugeren. Gå blot til _Opsætningsvejledning_ → _DNS-fortrolighed_ og rul til iOS.

### Andre implementeringer

- AdGuard Home selv kan være en sikker DNS-klient på alle platforme.
- [dnsproxy][ag-dnsproxy] understøtter alle kendte sikre DNS-protokoller.
- [dnscrypt-proxy][dnscrypt-proxy] understøtter `DNS-over-HTTPS`.
- [Mozilla Firefox][firefox] understøtter `DNS-over-HTTPS`.

[ag-for-android]: https://adguard.com/en/adguard-android/overview.html
[intra]: https://getintra.org
[ag-for-ios]: https://adguard.com/en/adguard-ios/overview.html
[dnscloak]: https://itunes.apple.com/app/id1452162351
[stamps]: https://dnscrypt.info/stamps
[ag-for-windows]: https://adguard.com/en/adguard-windows/overview.html
[ag-dnsproxy]: https://github.com/AdguardTeam/dnsproxy
[dnscrypt-proxy]: https://github.com/jedisct1/dnscrypt-proxy
[firefox]: https://www.mozilla.org/firefox

## Opsætning af DNSCrypt {#configure-dnscrypt}

AdGuard Home vil kunne fungere som en DNSCrypt-server. Denne funktion er dog kun tilgængelig via en opsætningsfil og kan ikke opsættes vha. Web UI. Denne vejledning forklarer, hvordan dette gøres.

### Generering af en opsætningsfil

Sådan genererer man en DNSCrypt-opsætningsfil og peger AdGuard Home på den:

:::info Vigtigt

Sørg for, at de aktuelle TLS-indstillinger er gyldige, og at kryptering er aktiveret.

:::

1. Download den seneste version af værktøjet [`dnscrypt`] til systemet. Udpak arkivet og gå til den resulterende mappe.

   - På Unix, ved brug af en POSIX-kompatibel shell:

     (Her og nedenfor bruges `linux-amd64` som et eksempel. Sørg for at download og bruge versioneen til den aktuelle platform.)

     1. Udpak filerne:

           ```sh
           tar -f ./dnscrypt-linux-amd64-v2.2.3.tar.gz -v -x -z
           ```

        Outputeksempel:

           ```none
           linux-amd64/
           linux-amd64/README.md
           linux-amd64/LICENSE
           linux-amd64/dnscrypt
           ```

     2. Gå til den udpakkede mappe:

           ```sh
           cd ./linux-amd64/
           ```

     3. Generér opsætningsfilen:

           ```sh
           ./dnscrypt generate --provider-name '2.dnscrypt-cert.example.org' --out ./dnscrypt.yaml
           ```

        Outputeksempel:

            ```none
            2022/01/02 12:34:56 [info] Generating configuration for 2.dnscrypt-cert.example.org
            2022/02/02 12:34:56 [info] Configuration has been written to ./dnscrypt.yaml
            2022/02/02 12:34:56 [info] Go to https://dnscrypt.info/stamps to generate an SDNS stamp
            2022/02/02 12:34:56 [info] You can run a DNSCrypt server using the following command:
            2022/02/02 12:34:56 [info] dnscrypt server -c ./dnscrypt.yaml -f 8.8.8.8
            ```

   - På Windows vha. PowerShell:

     (Her og nedenfor bruges `windows-amd64` som et eksempel. Sørg for at download og bruge versionen til den aktuelle CPU-arkitektur.)

     1. Udpak filerne:

           ```ps1
           Expand-Archive -Path .\dnscrypt-windows-amd64-v2.2.3.zip
           ```

     2. Gå til den udpakkede mappe:

           ```ps1
           Set-Location -Path .\dnscrypt-windows-amd64-v2.2.3\windows-amd64\
           ```

     3. Generér opsætningsfilen:

           ```ps1
           .\dnscrypt.exe generate --provider-name '2.dnscrypt-cert.example.org' --out .\dnscrypt.yaml
           ```

        Outputeksempel:

           ```none
           2022/01/02 12:34:56 [info] Generating configuration for 2.dnscrypt-cert.example.org
           2022/02/02 12:34:56 [info] Configuration has been written to .\dnscrypt.yaml
           2022/02/02 12:34:56 [info] Go to https://dnscrypt.info/stamps to generate an SDNS stamp
           2022/02/02 12:34:56 [info] You can run a DNSCrypt server using the following command:
           2022/02/02 12:34:56 [info] dnscrypt server -c .\dnscrypt.yaml -f 8.8.8.8
           ```

   Hvor `example.org` er navnet på værten, og `./dnscrypt.yaml` er navnet på opsætningsoutputfilen.

   Stien til den binære fil kan føjes til den aktuelle `PATH`/`$env:PATH`.

2. I opsætningsfilen (typisk `AdGuardHome.yaml`) skal flg. linjer tilføjes:

   ```yaml
   'tls':
     # N.B. Kryptering skal være aktiveret.
     'enabled': true
     # …
     'port_dnscrypt': 5443
     'dnscrypt_config_file': './dnscrypt.yaml'
   ```

   Hvor `5443` er porten til DNSCrypt-serveren, og `./dnscrypt.yaml` er navnet på den opsætningsfil, der blev genereret i trin 2.

   :::info Vigtigt

   Stop AdGuard Home, før opsætningsfilen ændres.

   :::

   :::tip

   På Windows anbefales det at bruge den fulde sti til opsætningsfilen. For eksempel,`C:\\Brugere\\Me\\Filer\\dnscrypt.yaml`.

   :::

[`dnscrypt`]: https://github.com/ameshkov/dnscrypt/releases

### Generering af et DNSCrypt-stempel

Sdan genererer man et DNSCrypt-stempel og tjekker installationen:

1. Go to [https://dnscrypt.info/stamps/](https://dnscrypt.info/stamps/).

2. Indtast dataene fra den relevante DNSCrypt-opsætningsfil. _Offentlige udbydernøgle_ er værdien af feltet `public_key` i DNSCrypt-opsætningsfilen.

   :::note

   Angiv værten med den tilpassede port.

   :::

3. Nu er der oprettet et stempel, der ser nogenlunde således ud:

   ```none
   sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn
   ```

   Tjek installationen ved at eksekvere:

   ```sh
   ./dnscrypt lookup-stamp \
       --domain 'example.com' \
       --stamp 'sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn' \
       --type 'a'
   ```

   Eller i Windows:

   ```ps1
   .\dnscrypt.exe lookup-stamp `
       --domain 'example.com' `
       --stamp 'sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn' `
       --type 'a'
   ```

   Hvor `example.com` er domænenavnet, der skal slås op.

### Opsætning af enheder til brug med DNSCrypt

#### Alle platforme

- [`dnscrypt-proxy`][prox] (referenceimplementering). DNSCrypt-Proxy er en kommandolinje-proxy til Linux, BSD, Windows, macOS, Android mv.

#### Android

- [AdGuard til Android][andr] understøtter DNSCrypt.

#### iOS

- [AdGuard til iOS][ios] understøtter DNSCrypt.
- [DNSCloak][cloa] anvender `dnscrypt-proxy` internt og understøtter DNSCrypt.

#### Windows

- [AdGuard til Windows][win] understøtter DNSCrypt.
- [Simple DNSCrypt][simp] er et simpelt håndteringsværktøj til opsærning og kørsel af `dnscrypt-proxy` i Windows.

Se [DNSCrypt-webstedet][imps1] og [DNS-fortrolighedsprojektets liste][imps2] for mere info.

[andr]: https://adguard.com/en/adguard-android/overview.html
[cloa]: https://itunes.apple.com/app/id1452162351
[imps1]: https://dnscrypt.info/implementations
[imps2]: https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Clients
[ios]: https://adguard.com/en/adguard-ios/overview.html
[prox]: https://github.com/DNSCrypt/dnscrypt-proxy
[simp]: https://simplednscrypt.org/
[win]: https://adguard.com/en/adguard-windows/overview.html
