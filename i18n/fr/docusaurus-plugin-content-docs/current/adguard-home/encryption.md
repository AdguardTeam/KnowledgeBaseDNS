---
title: Chiffrement DNS
sidebar_position: 6
---

AdGuard Home prend en charge tous les protocoles de chiffrement DNS modernes **prêts à l'emploi** :

- [DNS-over-HTTPS](https://en.wikipedia.org/wiki/DNS_over_HTTPS)
- [DNS-over-TLS](https://en.wikipedia.org/wiki/DNS_over_TLS)
- [DNS-over-QUIC](https://datatracker.ietf.org/doc/html/rfc9250)

:::note

AdGuard Home prend en charge à la fois [DNSCrypt][dnscrypt-info] côté client et côté serveur. [Apprenez à configurer AdGuard Home comme serveur DNSCrypt](#configure-dnscrypt).

:::

Ce guide explique comment configurer un serveur DNS chiffré avec AdGuard Home.

[dnscrypt-info]: https://dnscrypt.info/

## Installation du serveur {#server-installation}

L'objectif de la sécurisation du trafic DNS est de le protéger contre les tiers qui pourraient l'analyser ou le modifier, par exemple les fournisseurs d'accès à Internet.

<!-- TODO(e.burkov):  Use relative links to the docs instead of absolute, see AGDNS-2226. -->

Cela signifie que vous aurez besoin d'un serveur doté d'une adresse IP publique et dédiée. Il existe de nombreux fournisseurs de serveurs cloud bon marché�: [DigitalOcean][digital-ocean], [Vultr][vultr], [Linode][linode], etc. Choisissez-en un, créez-y un serveur cloud, et [Installer AdGuard Home](adguard-home/getting-started.md) sur votre serveur.

[digital-ocean]: https://digitalocean.com
[vultr]: https://vultr.com
[linode]: https://www.linode.com

## Enregistrer un nom de domaine {#register-domain}

Tout d’abord, vous avez besoin d’un nom de domaine. Si vous n'en avez jamais enregistré, voici une \[instruction simple]\[enregistrement de nom de domaine] qui vous aidera.

[domain-name-register]: https://www.pcworld.com/article/241722/web-apps/how-to-register-your-own-domain-name.html

## Obtenir un certificat SSL {#certificate}

`DNS-over-HTTPS` et `DNS-over-TLS` reposent tous deux sur le [chiffrement TLS][tls-wikipedia], vous aurez donc besoin d	un certificat SSL pour les utiliser.

Un certificat SSL peut être acheté auprès d'une autorité de certification (CA), une entreprise à laquelle les navigateurs et les systèmes d'exploitation font confiance pour enregistrer les certificats SSL des domaines.

Vous pouvez également obtenir le certificat gratuitement auprès de la [CA Let’s Encrypt][letsencrypt], une autorité de certification gratuite développée par l’Internet Security Research Group (ISRG).

Ce guide explique comment obtenir un certificat auprès d'eux.

### L'utilisation de CertBot

Certbot est un client facile à utiliser qui récupère un certificat auprès de Let’s Encrypt.

1. Accédez à [certbot.eff.org][certbot] et choisissez _Aucun des éléments ci-dessus_ pour le logiciel et votre système d’exploitation.
2. Suivez les instructions d’installation et arrêtez-vous avant d’atteindre la section _Démarrer_.

#### Obtenez un certificat via DNS challenge

Vous avez un nom de domaine, l'utilisation de DNS challenge est le moyen le plus simple d'obtenir un certificat.

Exécutez cette commande et suivez les instructions de certbot :

```sh
sudo certbot certonly --manual --preferred-challenges=dns --preferred-chain="ISRG Root X1"
```

Au final, vous obtiendrez deux fichiers :

- `fullchain.pem` : votre certificat SSL encodé au format PEM
- `privkey.pem` : votre clé privée encodée au format PEM

Les deux seront nécessaires pour configurer AdGuard Home.

:::info Important

Vous devrez utiliser exactement la même procédure pour renouveler le certificat existant.

:::

### L'utilisation de Lego

Il existe également une alternative très agréable et facile à utiliser à CertBot appelée [LEGO][lego-source].

1. Installez-le en utilisant [une méthode appropriée][lego-install].
2. Choisissez votre fournisseur DNS dans [la liste][lego-provider] et suivez les instructions pour obtenir un certificat.

Voici également [un script simple][legoagh] que vous pouvez utiliser pour automatiser la génération et le renouvellement des certificats.

[tls-wikipedia]: https://en.wikipedia.org/wiki/Transport_Layer_Security
[letsencrypt]: https://letsencrypt.org
[certbot]: https://certbot.eff.org
[lego-source]: https://go-acme.github.io/lego
[lego-install]: https://go-acme.github.io/lego/installation
[lego-provider]: https://go-acme.github.io/lego/dns
[legoagh]: https://github.com/ameshkov/legoagh

## Configurer AdGuard Accueil {#configure}

1. Ouvrez l’interface Web d’AdGuard Home et accédez aux _Paramètres_.

2. Choisissez la section _Cryptage_.

   ![Capture d’écran des paramètres de chiffrement][encryption-screenshot]

3. Copiez/collez le contenu du fichier `fullchain.pem` dans le champ sous _Certificats_ ou spécifiez le chemin d'accès au fichier.

4. Copiez/collez le contenu du fichier `privkey.pem` dans le champ sous _Clé privée_ ou spécifiez le chemin d'accès au fichier.

5. Saisissez votre nom de domaine dans _Nom du serveur_.

6. Recevez les messages de validation et cliquez sur _Enregistrer les paramètres_.

:::note

AdGuard Home rechargera automatiquement les certificats et/ou les clés privées spécifiés par le chemin d'accès au fichier lorsqu'ils seront modifiés. Un rechargement peut également être déclenché par un signal `SIGHUP`.

:::

[encryption-screenshot]: https://cdn.adtidy.org/content/kb/dns/adguard-home/encryption-screenshot.png

## L'utilisation avec proxy inverse {#reverse-proxy}

Nous avons déjà un [guide][reverse-proxy-faq] sur la configuration d�'un serveur proxy inverse pour accéder à l�'interface utilisateur Web d�'AdGuard Home.

AdGuard Home est en mesure de restreindre les requêtes DNS-over-HTTPS qui proviennent du serveur proxy non inclus dans la liste "de confiance". Par défaut, il est configuré pour accepter les requêtes provenant d'adresses de bouclage IPv4 et IPv6.

Pour permettre à AdGuard Home de gérer les requêtes DNS sur HTTPS provenant d'un serveur proxy inverse, définissez le paramètre `trusted_proxies` dans `AdGuardHome.yaml` sur l'adresse IP du serveur proxy. Si vous disposez de plusieurs serveurs proxy, vous pouvez utiliser un CIDR au lieu d'une simple adresse IP.

### Proxy inverse Nginx

Pour configurer AdGuard Home dans le but qu'il accepte les requêtes provenant du serveur proxy inverse Nginx, assurez-vous que ce dernier soit configuré correctement.

Le fichier `nginx.conf` doit contenir les directives appropriées pour ajouter les en-têtes de transfert pris en charge à la requête, à savoir `X-Real-IP` ou `X-Forwarded-For`. Ceci peut être réalisé avec [`ngx_http_realip_module`][ngx-http-realip-module]. En résumé, le module récupère l'adresse IP réelle du client et l'inscrit dans l'en-tête de la requête HTTP. AdGuard Home recevra et interprétera la valeur de cet en-tête comme l'adresse réelle du client. L'adresse du serveur proxy inverse sera également reçue et vérifiée par rapport à la liste des serveurs proxy "de confiance".

Un autre en-tête que vous pourriez vouloir faire transiter est l'en-tête `Host`, qui est nécessaire pour qu'AdGuard Home reconnaisse les requêtes provenant de clients dont le nom d'hôte contient un identifiant ClientID.

Par exemple, si la configuration du serveur proxy inverse contient les directives suivantes :

```nginx
location /dns-query {
  # …
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP '1.2.3.4';
  proxy_bind 192.168.1.2;
  # …
}
```

AdGuard Home récupérera l'adresse `192.168.1.2` comme adresse de votre serveur proxy et la comparera à la liste `trusted_proxies`. La version `1.2.3.4` sera contrôlée par les paramètres d'accès si le proxy est considéré "fiable".

### Cloudflare CDN

Le réseau de distribution de contenu (CDN) de Cloudflare agit comme un proxy inverse ajoutant ses propres en-têtes [cloudflare-headers] aux requêtes transférées, qui sont `CF-Connecting-IP` et `True-Client-IP`. Ceux-ci sont également pris en charge par AdGuard Home, de sorte que les [adresses][cloudflare-addresses] des serveurs proxy inverses peuvent être insérées directement dans la liste `trusted_proxies`. Consultez la [référence officielle de Cloudflare][cloudflare-real-ip] sur la restauration de l'adresse IP originelle du visiteur.

### Autres en-têtes

D'autres en-têtes HTTP pourraient être pris en charge à l'avenir par AdGuard Home. Toutefois, toute requête de fonctionnalité relative aux en-têtes doit d'abord être résolue en configurant le proxy inverse lui-même.

Par exemple, pour modifier le mécanisme [HTTP Strict Transport Security][hsts] afin d'inclure la directive expérimentale `preload`, on pourrait utiliser une configuration similaire à celle-ci :

```nginx
location /dns-query {
  # …
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
  # …
}
```

<!-- TODO(e.burkov):  Use relative links to the docs instead of absolute, see AGDNS-2226. -->

[reverse-proxy-faq]: /adguard-home/faq.md#reverseproxy
[ngx-http-realip-module]: https://nginx.org/en/docs/http/ngx_http_realip_module.html
[cloudflare-headers]: https://support.cloudflare.com/hc/en-us/articles/200170986
[cloudflare-addresses]: https://www.cloudflare.com/ips
[cloudflare-real-ip]: https://support.cloudflare.com/hc/en-us/articles/200170786
[hsts]: https://datatracker.ietf.org/doc/html/rfc6797

## Configuration des appareils {#configure-devices}

### Android

- Android 9 and above supports `DNS-over-TLS` natively. To configure it, go to _Settings_ → _Network & internet_ → _Advanced_ → _Private DNS_ and enter your domain name there.
- [AdGuard for Android][ag-for-android] supports `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` and `DNS-over-QUIC`.
- [Intra][intra] adds `DNS-over-HTTPS` support to Android.

### iOS

- iOS 14 and above support `DNS-over-TLS` and `DNS-over-HTTPS` natively via configuration profiles. In order to make things easier, AdGuard Home can generate these configuration profiles for you. Just head to _Setup Guide_ → _DNS Privacy_ and scroll to iOS.
- [AdGuard for iOS][ag-for-ios] supports `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` and `DNS-over-QUIC`.
- [DNSCloak][dnscloak] supports `DNS-over-HTTPS` but in order to configure it to use your own server, you’ll need to generate a [DNS Stamp][stamps] for it.

### Windows

- Windows 10 Build 19628 and higher support `DNS-over-HTTPS` natively.
- [AdGuard for Windows][ag-for-windows] supports `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` and `DNS-over-QUIC`.

### macOS

- macOS Big Sur and higher support `DNS-over-TLS` and `DNS-over-HTTPS` natively via configuration profiles. In order to make things easier, AdGuard Home can generate these configuration profiles for you. Just head to _Setup Guide_ → _DNS Privacy_ and scroll to iOS.

### Other implementations

- AdGuard Home itself can be a secure DNS client on any platform.
- [dnsproxy][ag-dnsproxy] supports all known secure DNS protocols.
- [dnscrypt-proxy][dnscrypt-proxy] supports `DNS-over-HTTPS`.
- [Mozilla Firefox][firefox] supports `DNS-over-HTTPS`.

[ag-for-android]: https://adguard.com/en/adguard-android/overview.html
[intra]: https://getintra.org
[ag-for-ios]: https://adguard.com/en/adguard-ios/overview.html
[dnscloak]: https://itunes.apple.com/app/id1452162351
[stamps]: https://dnscrypt.info/stamps
[ag-for-windows]: https://adguard.com/en/adguard-windows/overview.html
[ag-dnsproxy]: https://github.com/AdguardTeam/dnsproxy
[dnscrypt-proxy]: https://github.com/jedisct1/dnscrypt-proxy
[firefox]: https://www.mozilla.org/firefox

## Configuring DNSCrypt {#configure-dnscrypt}

AdGuard Home is able to work as a DNSCrypt server. However, this feature is only available via configuration file, and can’t be set up using the Web UI. This guide explains how to do this.

### Generating a configuration file

Here is how to generate a DNSCrypt configuration file and point AdGuard Home to it:

:::info Important

Make sure that your TLS settings are valid and encryption is enabled.

:::

1. Get the latest version of the [`dnscrypt`] utility for your system. Extract the archive and navigate to the resulting directory.

   - On Unix, using a POSIX-compatible shell:

     (Here and below, `linux-amd64` is used as an example. Make sure to download and use the one for your platform.)

     1. Extract the files:

           ```sh
           tar -f ./dnscrypt-linux-amd64-v2.2.3.tar.gz -v -x -z
           ```

        Output example:

           ```none
           linux-amd64/
           linux-amd64/README.md
           linux-amd64/LICENSE
           linux-amd64/dnscrypt
           ```

     2. Navigate to the extracted directory:

           ```sh
           cd ./linux-amd64/
           ```

     3. Generate the configuration file:

           ```sh
           ./dnscrypt generate --provider-name '2.dnscrypt-cert.example.org' --out ./dnscrypt.yaml
           ```

        Output example:

            ```none
            2022/01/02 12:34:56 [info] Generating configuration for 2.dnscrypt-cert.example.org
            2022/02/02 12:34:56 [info] Configuration has been written to ./dnscrypt.yaml
            2022/02/02 12:34:56 [info] Go to https://dnscrypt.info/stamps to generate an SDNS stamp
            2022/02/02 12:34:56 [info] You can run a DNSCrypt server using the following command:
            2022/02/02 12:34:56 [info] dnscrypt server -c ./dnscrypt.yaml -f 8.8.8.8
            ```

   - On Windows, using PowerShell:

     (Here and below, `windows-amd64` is used as an example. Make sure to download and use the one for your CPU architecture.)

     1. Extract the files:

           ```ps1
           Expand-Archive -Path .\dnscrypt-windows-amd64-v2.2.3.zip
           ```

     2. Navigate to the extracted directory:

           ```ps1
           Set-Location -Path .\dnscrypt-windows-amd64-v2.2.3\windows-amd64\
           ```

     3. Generate the configuration file:

           ```ps1
           .\dnscrypt.exe generate --provider-name '2.dnscrypt-cert.example.org' --out .\dnscrypt.yaml
           ```

        Output example:

           ```none
           2022/01/02 12:34:56 [info] Generating configuration for 2.dnscrypt-cert.example.org
           2022/02/02 12:34:56 [info] Configuration has been written to .\dnscrypt.yaml
           2022/02/02 12:34:56 [info] Go to https://dnscrypt.info/stamps to generate an SDNS stamp
           2022/02/02 12:34:56 [info] You can run a DNSCrypt server using the following command:
           2022/02/02 12:34:56 [info] dnscrypt server -c .\dnscrypt.yaml -f 8.8.8.8
           ```

   Where `example.org` is the name of your host and `./dnscrypt.yaml` is the name of the configuration output file.

   You may add the path to the binary into your `PATH`/`$env:PATH`.

2. In the configuration file (typically `AdGuardHome.yaml`), add the following lines:

   ```yaml
   'tls':
     # N.B. The encryption must be enabled.
     'enabled': true
     # …
     'port_dnscrypt': 5443
     'dnscrypt_config_file': './dnscrypt.yaml'
   ```

   Where `5443` is the port for your DNSCrypt server and `./dnscrypt.yaml` is the name of the configuration file generated in step 2.

   :::info Important

   Stop AdGuard Home before changing the configuration file.

   :::

   :::tip

   On Windows, it is recommended to use the full path to the configuration file. For example, `C:\Users\Me\Files\dnscrypt.yaml`.

   :::

[`dnscrypt`]: https://github.com/ameshkov/dnscrypt/releases

### Generating a DNSCrypt stamp

Here is how to generate a DNSCrypt stamp and check your installation:

1. Go to <https://dnscrypt.info/stamps/>.

2. Enter the data from your DNSCrypt configuration file. The _Provider public key_ is the value of the `public_key` field in your DNSCrypt configuration file.

   :::note

   Enter the host with your custom port.

   :::

3. Now you have a stamp that looks something like this:

   ```none
   sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn
   ```

   Check your installation by running:

   ```sh
   ./dnscrypt lookup-stamp \
       --domain 'example.com' \
       --stamp 'sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn' \
       --type 'a'
   ```

   Or, on Windows:

   ```ps1
   .\dnscrypt.exe lookup-stamp `
       --domain 'example.com' `
       --stamp 'sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn' `
       --type 'a'
   ```

   Where `example.com` is the domain name to lookup.

### Configuring devices to use DNSCrypt

#### All platforms

- [`dnscrypt-proxy`][prox] (reference implementation). DNSCrypt-Proxy is a command-line proxy for Linux, BSD, Windows, macOS, Android, and more.

#### Android

- [AdGuard for Android][andr] supports DNSCrypt.

#### iOS

- [AdGuard for iOS][ios] supports DNSCrypt.
- [DNSCloak][cloa] uses `dnscrypt-proxy` internally and supports DNSCrypt.

#### Windows

- [AdGuard for Windows][win] supports DNSCrypt.
- [Simple DNSCrypt][simp] is a simple management tool to configure and run `dnscrypt-proxy` on Windows.

See the [DNSCrypt website][imps1] and [DNS privacy project’s list][imps2] for more.

[andr]: https://adguard.com/en/adguard-android/overview.html
[cloa]: https://itunes.apple.com/app/id1452162351
[imps1]: https://dnscrypt.info/implementations
[imps2]: https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Clients
[ios]: https://adguard.com/en/adguard-ios/overview.html
[prox]: https://github.com/DNSCrypt/dnscrypt-proxy
[simp]: https://simplednscrypt.org/
[win]: https://adguard.com/en/adguard-windows/overview.html
