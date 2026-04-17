---
title: Crittografia DNS
sidebar_position: 6
---

AdGuard Home gestisce tutti i moderni protocolli di crittografia DNS **pronto all'uso**:

- [DNS-over-HTTPS](https://en.wikipedia.org/wiki/DNS_over_HTTPS)
- [DNS-over-TLS](https://en.wikipedia.org/wiki/DNS_over_TLS)
- [DNS-over-Quic](https://datatracker.ietf.org/doc/html/rfc9250)

:::note

AdGuard Home gestisce sia [DNSCrypt][dnscrypt-info] lato client che lato server. [Scopri come configurare AdGuard Home come server DNSCrypt](#configure-dnscrypt).

:::

Questa guida spiega come configurare un server DNS crittografato con AdGuard Home.

[dnscrypt-info]: https://dnscrypt.info/

## Installazione server {#server-installation}

Lo scopo di mettere al sicuro il traffico DNS è metterlo al sicuro dalle terze parti che potrebbero analizzarlo o modificarlo, ad es. da ISP.

{/*
TODO(e.burkov):  Use relative links to the docs instead of absolute, see AGDNS-2226.
*/}

Significa che avrai bisogno di un server con un indirizzo IP pubblico dedicato. Esistono molti provider di server cloud economici: [DigitalOcean][digital-ocean], [Vultr][vultr], [Linode][linode], ecc. Scegline semplicemente uno, crea lì un server cloud e [installa AdGuard Home](adguard-home/getting-started.md) sul tuo server.

[digital-ocean]: https://digitalocean.com
[vultr]: https://vultr.com
[linode]: https://www.linode.com

## Registra un nome di dominio {#register-domain}

Prima di tutto, ti serve un nome di dominio. Se non ne hai mai registrato uno, ecco una [istruzione semplice][domain-name-register] che ti aiuterà.

[domain-name-register]: https://www.pcworld.com/article/241722/web-apps/how-to-register-your-own-domain-name.html

## Ottieni un certificato SSL {#certificate}

Sia `DNS-over-HTTPS` che `DNS-over-TLS` si basano sulla [crittografia TLS][tls-wikipedia], quindi avrai bisogno di un certificato SSL per usarli.

Un certificato SSL può essere acquistato da un'autorità di certificazione (CA), un'azienda considerata affidabile dai browser e dai sistemi operativi per la registrazione dei certificati SSL per i domini.

In alternativa, puoi ottenere il certificato gratuitamente da [Let's Encrypt CA][letsencrypt], un'autorità di certificazione gratuita sviluppata dall'Internet Security Research Group (ISRG).

Questa guida spiega come ottenere un certificato da loro.

### Usare CertBot

Certbot è un client facile da usare che recupera un certificato da Let’s Encrypt.

1. Vai su [certbot.eff.org][certbot] e scegli il software _Nessuna delle opzioni precedenti_ e il tuo sistema operativo.
2. Segui le istruzioni di installazione e fermati prima di raggiungere la sezione _Per iniziare_.

#### Ottieni un certificato usando la verifica DNS

Hai un nome di dominio, usare la verifica DNS è il modo più semplice per ottenere un certificato.

Esegui questo comando e segui le istruzioni di certbot:

```sh
sudo certbot certonly --manual --preferred-challenges=dns --preferred-chain="ISRG Root X1"
```

Alla fine, otterrai due file:

- `fullchain.pem`: il tuo certificato SSL con codifica PEM
- `privkey.pem`: la tua chiave privata codificata PEM

Entrambi saranno necessari per configurare AdGuard Home.

:::info Importante

Dovrai usare la stessa identica procedura per rinnovare il certificato esistente.

:::

### Usare Lego

C’è anche un’alternativa a CertBot davvero valida e facile da usare chiamata [LEGO][lego-source].

1. Installalo usando [un metodo appropriato][lego-install].
2. Scegli il tuo fornitore DNS dalla [lista][lego-provider] e segui le istruzioni per ottenere un certificato.

Inoltre, ecco [un semplice codice][legoagh] che puoi usare per automatizzare la generazione e il rinnovo dei certificati.

[tls-wikipedia]: https://en.wikipedia.org/wiki/Transport_Layer_Security
[letsencrypt]: https://letsencrypt.org
[certbot]: https://certbot.eff.org
[lego-source]: https://go-acme.github.io/lego
[lego-install]: https://go-acme.github.io/lego/installation
[lego-provider]: https://go-acme.github.io/lego/dns
[legoagh]: https://github.com/ameshkov/legoagh

## Configura AdGuard Home {#configure}

1. Apri l'interfaccia web di AdGuard Home e vai in _Impostazioni_.

2. Scegli la sezione _Crittografia_.

   ![Schermata delle impostazioni di crittografia][encryption-screenshot]

3. Copia/incolla il contenuto del file `fullchain.pem` per immettere il campo sotto _Certificati_ o specifica il percorso al file.

4. Copia/incolla i contenuti del file `privkey.pem` per immettere il campo sotto _Chiave privata_ oppure specifica il percorso del file.

5. Inserisci il nome del tuo dominio in _Nome del server_.

6. Ottieni i messaggi di convalida e clicca _Salva impostazioni_.

:::note

AdGuard Home ricaricherà automaticamente i certificati e/o le chiavi private specificati dal percorso del file quando cambiano. Un ricaricamento può anche essere attivato da un segnale `SIGHUP`.

:::

[encryption-screenshot]: https://cdn.adtidy.org/content/kb/dns/adguard-home/encryption-screenshot.png

## Uso con proxy inverso {#reverse-proxy}

Abbiamo già una [guida][reverse-proxy-faq] sulla configurazione di un server proxy inverso per accedere all'interfaccia web di AdGuard Home.

AdGuard Home è in grado di limitare le richieste DNS-over-HTTPS provenienti da server proxy non inclusi nell'elenco dei server "attendibili". Di default, è configurato per accettare richieste provenienti da indirizzi di loopback IPv4 e IPv6.

Per consentire ad AdGuard Home di gestire le richieste DNS-over-HTTPS provenienti da un server proxy inverso, impostare il parametro `trusted_proxies` nel file `AdGuardHome.yaml` sull'indirizzo IP del server proxy. Se disponi di più server proxy, puoi utilizzare un CIDR anziché un semplice indirizzo IP.

### Proxy inverso Nginx

Per configurare AdGuard Home in modo che accetti richieste dal server proxy inverso Nginx, assicurati che il server proxy inverso stesso sia configurato correttamente.

Il file `nginx.conf` deve contenere le direttive appropriate per aggiungere alla richiesta le intestazioni di inoltro supportate, ovvero `X-Real-IP` o `X-Forwarded-For`. Questo può essere ottenuto con [`ngx_http_realip_module`][ngx-http-realip-module]. In breve, il modulo preleva l'indirizzo IP reale del client e lo scrive nell'intestazione della richiesta HTTP. AdGuard Home riceve e interpreta il valore di questa intestazione come l'indirizzo del cliente reale. Viene ricevuto anche l'indirizzo del server proxy inverso, che viene anche controllato rispetto all'elenco dei proxy "affidabili".

Un'altra intestazione che si potrebbe voler proxyare è l'intestazione `Host`, necessaria per far sì che AdGuard Home riconosca le richieste provenienti da client che hanno un ClientID nei loro nomi di host.

Ad esempio, se la configurazione del server proxy inverso contiene le seguenti direttive:

```nginx
location /dns-query {
  # …
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP '1.2.3.4';
  proxy_bind 192.168.1.2;
  # …
}
```

AdGuard Home utilizzerà l'indirizzo `192.168.1.2` come indirizzo del tuo server proxy e lo controllerà con l'elenco `trusted_proxies`. La versione `1.2.3.4` sarà controllata dalle impostazioni di accesso nel caso in cui il proxy sia considerato "affidabile".

### Cloudflare CDN

La rete dedicata di distribuzione dei contenuti di Cloudflare agisce come proxy inverso aggiungendo i \[propri intestazioni]\[intestazioni cloudflare] alle richieste inoltrate, che sono `CF-Connecting-IP` e `True-Client-IP`. Questi sono supportati anche da AdGuard Home, quindi gli \[indirizzi]\[indirizzi cloudflare] dei server proxy inversi possono essere inseriti direttamente nell'elenco `trusted_proxies`. Vedi la [referenza ufficiale di Cloudflare][cloudflare-real-ip] sul ripristino dell’IP originale del visitatore.

### Altre intestazioni

In futuro, AdGuard Home potrebbe supportare altre intestazioni HTTP. Tuttavia, qualunque richiesta di funzione relativa alle intestazioni dovrebbe prima essere tentata di essere risolvi configurando il proxy inverso stesso.

Ad esempio, per modificare il meccanismo [HTTP Strict Transport Security][hsts] per includere la direttiva sperimentale `preload`, potrebbe essere utilizzato qualcosa come il seguente frammento di configurazione:

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

## Configurare i dispositivi {#configure-devices}

### Android

- Android 9 e versioni successive supportano nativamente `DNS-over-TLS`. Per configurarlo, vai su _Impostazioni_ → _Rete e Internet_ → _Avanzate_ → _DNS privato_ e inserisci il tuo nome di dominio.
- [AdGuard per Android][ag-for-android] supporta `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` e `DNS-over-QUIC`.
- [Intra][intra] aggiunge il supporto `DNS-over-HTTPS` ad Android.

### iOS

- iOS 14 e versioni successive supportano nativamente `DNS-over-TLS` e `DNS-over-HTTPS` tramite profili di configurazione. Per semplificare le cose, AdGuard Home può generare automaticamente questi profili di configurazione. Basta andare su _Guida alla configurazione_ → _DNS Privacy_ e scorrere su iOS.
- [AdGuard per iOS][ag-for-ios] supporta `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` e `DNS-over-QUIC`.
- [DNSCloak][dnscloak] supporta 'DNS-sopra-HTTPS' ma per configurarlo per usare il tuo server dovrai generare un [DNS Stamp][stamps] per esso.

### Windows

- Windows 10 Build 19628 e versioni successive supportano nativamente `DNS-over-HTTPS`.
- [AdGuard per Windows][ag-for-windows] supporta `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` e `DNS-over-QUIC`.

### macOS

- macOS Big Sur e versioni successive supportano `DNS-over-TLS` e `DNS-over-HTTPS` in modo nativo tramite profili di configurazione. Per semplificare le cose, AdGuard Home può generare automaticamente questi profili di configurazione. Basta andare su _Guida alla configurazione_ → _DNS Privacy_ e scorrere su iOS.

### Altre implementazioni

- AdGuard Home può essere un client DNS sicuro su qualsiasi piattaforma.
- [dnsproxy][ag-dnsproxy] gestisce tutti i protocolli DNS sicuri noti.
- [dnscrypt-proxy][dnscrypt-proxy] supporta `DNS-over-HTTPS`.
- [Mozilla Firefox][firefox] supporta `DNS-over-HTTPS`.

[ag-for-android]: https://adguard.com/en/adguard-android/overview.html
[intra]: https://getintra.org
[ag-for-ios]: https://adguard.com/en/adguard-ios/overview.html
[dnscloak]: https://itunes.apple.com/app/id1452162351
[stamps]: https://dnscrypt.info/stamps
[ag-for-windows]: https://adguard.com/en/adguard-windows/overview.html
[ag-dnsproxy]: https://github.com/AdguardTeam/dnsproxy
[dnscrypt-proxy]: https://github.com/jedisct1/dnscrypt-proxy
[firefox]: https://www.mozilla.org/firefox

## Configurare DNSCrypt {#configure-dnscrypt}

AdGuard Home è in grado di funzionare come server DNSCrypt. Tuttavia, questa funzionalità è disponibile solo tramite file di configurazione e non può essere impostata tramite l'interfaccia web. Questa guida spiega come fare.

### Generazione di un file di configurazione

Ecco come generare un file di configurazione DNSCrypt e indicare ad AdGuard Home di utilizzarlo:

:::info Importante

Assicurati che le impostazioni TLS siano valide e che la crittografia sia abilitata.

:::

1. Scarica l'ultima versione dell'utilità [`dnscrypt`] per il tuo sistema. Estrai l'archivio e accedi alla cartella risultante.

   - Su Unix, utilizzando una shell compatibile con POSIX:

     (Qui e di seguito, `linux-amd64` viene utilizzato come esempio. Assicurati di scaricare e utilizzare la versione compatibile con la tua piattaforma.)

     1. Estrai i file:

           ```sh
           tar -f ./dnscrypt-linux-amd64-v2.2.3.tar.gz -v -x -z
           ```

        Esempio di output:

           ```none
           linux-amd64/
           linux-amd64/README.md
           linux-amd64/LICENSE
           linux-amd64/dnscrypt
           ```

     2. Accedere alla cartella estratta:

           ```sh
           cd ./linux-amd64/
           ```

     3. Genera il file di configurazione:

           ```sh
           ./dnscrypt generate --provider-name '2.dnscrypt-cert.example.org' --out ./dnscrypt.yaml
           ```

        Esempio di output:

            ```none
            2022/01/02 12:34:56 [info] Generating configuration for 2.dnscrypt-cert.example.org
            2022/02/02 12:34:56 [info] Configuration has been written to ./dnscrypt.yaml
            2022/02/02 12:34:56 [info] Go to https://dnscrypt.info/stamps to generate an SDNS stamp
            2022/02/02 12:34:56 [info] You can run a DNSCrypt server using the following command:
            2022/02/02 12:34:56 [info] dnscrypt server -c ./dnscrypt.yaml -f 8.8.8.8
            ```

   - Su Windows, utilizzando PowerShell:

     (Qui e di seguito, `windows-amd64` viene utilizzato come esempio. Assicurati di scaricare e utilizzare la versione compatibile con l'architettura della tua CPU.)

     1. Estrai i file:

           ```ps1
           Expand-Archive -Path .\dnscrypt-windows-amd64-v2.2.3.zip
           ```

     2. Accedere alla cartella estratta:

           ```ps1
           Set-Location -Path .\dnscrypt-windows-amd64-v2.2.3\windows-amd64\
           ```

     3. Genera il file di configurazione:

           ```ps1
           .\dnscrypt.exe generate --provider-name '2.dnscrypt-cert.example.org' --out .\dnscrypt.yaml
           ```

        Esempio di output:

           ```none
           2022/01/02 12:34:56 [info] Generating configuration for 2.dnscrypt-cert.example.org
           2022/02/02 12:34:56 [info] Configuration has been written to .\dnscrypt.yaml
           2022/02/02 12:34:56 [info] Go to https://dnscrypt.info/stamps to generate an SDNS stamp
           2022/02/02 12:34:56 [info] You can run a DNSCrypt server using the following command:
           2022/02/02 12:34:56 [info] dnscrypt server -c .\dnscrypt.yaml -f 8.8.8.8
           ```

   Dove `example.org` è il nome del tuo host e `./dnscrypt.yaml` è il nome del file di output della configurazione.

   Puoi aggiungere il percorso al file binario nel tuo `PATH`/`$env:PATH`.

2. Nel file di configurazione (tipicamente `AdGuardHome.yaml`), aggiungi le seguenti righe:

   ```yaml
   'tls':
     # N.B. The encryption must be enabled.
     'enabled': true
     # …
     'port_dnscrypt': 5443
     'dnscrypt_config_file': './dnscrypt.yaml'
   ```

   Dove `5443` è la porta del tuo server DNSCrypt e `./dnscrypt.yaml` è il nome del file di configurazione generato al passaggio 2.

   :::info Importante

   Ferma AdGuard Home prima di modificare il file di configurazione.

   :::

   :::tip

   Su Windows, si consiglia di utilizzare il percorso completo del file di configurazione. Ad esempio, `C:\Utenti\Io\File\dnscrypt.yaml`.

   :::

[`dnscrypt`]: https://github.com/ameshkov/dnscrypt/releases

### Generazione di un stamp DNSCrypt

Ecco come generare un stamp DNSCrypt e verificare l'installazione:

1. Go to [https://dnscrypt.info/stamps/](https://dnscrypt.info/stamps/).

2. Inserisci i dati dal tuo file di configurazione DNSCrypt. La _chiave pubblica del provider_ è il valore del campo `public_key` nel tuo file di configurazione DNSCrypt.

   :::note

   Inserisci l'host con il port personalizzato.

   :::

3. Ora hai un stamp che assomiglia a qualcosa del genere:

   ```none
   sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn
   ```

   Verifica l'installazione eseguendo il seguente comando:

   ```sh
   ./dnscrypt lookup-stamp \
       --domain 'example.com' \
       --stamp 'sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn' \
       --type 'a'
   ```

   Oppure, su Windows:

   ```ps1
   .\dnscrypt.exe lookup-stamp `
       --domain 'example.com' `
       --stamp 'sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn' `
       --type 'a'
   ```

   Dove `example.com` è il nome di dominio da cercare.

### Configurazione dei dispositivi per l'utilizzo di DNSCrypt

#### Tutte le piattaforme

- [`dnscrypt-proxy`][prox] (implementazione di riferimento). DNSCrypt-Proxy è un proxy da riga di comando per Linux, BSD, Windows, macOS, Android e altro.

#### Android

- [AdGuard per Android][andr] supporta DNSCrypt.

#### iOS

- [AdGuard per iOS][iOS] supporta DNSCrypt.
- [DNSCloak][cloa] utilizza internamente `dnscrypt-proxy` e supporta DNSCrypt.

#### Windows

- [AdGuard per Windows][win] supporta DNSCrypt.
- [Simple DNSCrypt][simp] è un semplice strumento di gestione per configurare ed eseguire `dnscrypt-proxy` su Windows.

Vedi il [sito web DNSCrypt][imps1] e la [lista del progetto riservatezza DNS][imps2] per ulteriori informazioni.

[andr]: https://adguard.com/en/adguard-android/overview.html
[cloa]: https://itunes.apple.com/app/id1452162351
[imps1]: https://dnscrypt.info/implementations
[imps2]: https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Clients
[ios]: https://adguard.com/en/adguard-ios/overview.html
[prox]: https://github.com/DNSCrypt/dnscrypt-proxy
[simp]: https://simplednscrypt.org/
[win]: https://adguard.com/en/adguard-windows/overview.html
