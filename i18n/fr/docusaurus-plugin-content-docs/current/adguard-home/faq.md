---
title: FAQ
sidebar_position: 3
---

## Pourquoi AdGuard Home ne bloque-t-il pas les publicités ou les menaces ? {#doesntblock}

Supposons que vous souhaitiez qu'AdGuard Home bloque `somebadsite.com` mais que, pour une raison quelconque, il ne le fasse pas. Essayons de résoudre ce problème.

Il est fort probable que vous n'ayez pas configuré votre appareil pour qu'il utilise AdGuard Home comme serveur DNS par défaut. Pour vérifier si vous utilisez AdGuard Home comme serveur DNS par défaut :

1. Sous Windows, ouvrez une fenêtre de terminal (_Démarrer_ → _Exécuter_ → `cmd.exe`). Sur d'autres systèmes, ouvrez l'application Terminal.

2. Exécutez `nslookup example.org`. Il affichera quelque chose comme ceci :

   ```none
   Server: 192.168.0.1
   Address: 192.168.0.1#53

   Non-authoritative answer:
   Name: example.org
   Address: <IPv4>
   Name: example.org
   Address: <IPv6>
   ```

3. Vérifiez que l'adresse IP du `Server` est celle où AdGuard Home est exécuté. Si ce n'est pas le cas, vous devez configurer votre appareil en conséquence. Voir [ci-dessous](#defaultdns) pour savoir comment procéder.

4. Assurez-vous que votre requête vers `example.org` apparaît dans l'interface utilisateur d'AdGuard sur la page _Journal des requêtes_. Si ce n'est pas le cas, vous devez configurer AdGuard Home pour qu'il écoute sur l'interface réseau spécifiée. La façon la plus simple de le faire est de réinstaller AdGuard Home avec les paramètres par défaut.

Si vous êtes sûr que votre appareil utilise AdGuard Home comme serveur DNS par défaut, mais que le problème persiste, cela peut être dû à une mauvaise configuration d'AdGuard Home. Veuillez vérifier et vous assurer que :

1. Vous avez activé le paramètre _Bloquer les domaines à l'aide des filtres et des fichiers hosts_ sur la page _Paramètres_ → _Paramètres généraux_.

2. Vous avez activé les mécanismes de sécurité appropriés, tels que le Contrôle parental, sur la même page.

3. Vous avez activé les filtres appropriés sur la page _Filtres_ → _Listes de blocage DNS_.

4. Vous n'avez pas de listes de règles d'exception susceptibles d'autoriser les requêtes activées sur la page _Filtres_ → _Listes d'autorisation DNS_.

5. Vous n'avez pas de réécritures DNS qui pourraient interférer sur la page _Filtres_ → _Réécritures DNS_.

6. Vous n'avez pas de règles de filtrage personnalisées qui peuvent interférer sur la page _Filtres_ → _Règles de filtrage personnalisées_.

## Que signifie « Bloqué par CNAME ou IP » dans le journal de requêtes ? {#logs}

AdGuard Home vérifie à la fois les requêtes DNS et les réponses DNS pour prévenir une technique d'évasion des annonces connue sous le nom de [CNAME cloaking][cname-cloak]. Autrement dit, si vos règles de filtrage contiennent un domaine, par exemple `tracker.example`, et qu'une réponse DNS pour un autre nom de domaine, par exemple `blogs.example`, contient ce nom de domaine parmi ses enregistrements CNAME, cette réponse est bloquée, car elle mène en fait au service de suivi bloqué.

[cname-cloak]: https://blog.apnic.net/2020/08/04/characterizing-cname-cloaking-based-tracking/

## Où puis-je consulter les journaux ? {#logs}

L'emplacement par défaut des journaux en texte brut (à ne pas confondre avec les journaux de requête) dépend du système d'exploitation et du mode d'installation :

<!-- TODO(a.garipov): Add more info about Docker; add links to tools. -->

- **OpenWrt Linux:** utilisez la commande `logread -e AdGuardHome`.

- **Systèmes Linux** avec **systemd** et autres systèmes **Unix** avec init de style **SysV :** `/var/log/AdGuardHome.err`.

- **macOS :** `/var/log/AdGuardHome.stderr.log`.

- Systèmes **Linux** avec **Snapcraft** utilisez la commande `snap logs adguard-home`.

- **FreeBSD :** `/var/log/daemon.log`.

- **OpenBSD :** `/var/log/daemon`.

- **Windows :** le [journal des événements Windows][wlog] est utilisé.

[wlog]: https://docs.microsoft.com/en-us/windows/win32/wes/windows-event-log

## Comment configurer AdGuard Home pour écrire des journaux de niveau détaillé ? {#verboselog}

Pour résoudre un problème complexe, il est parfois nécessaire d'utiliser la journalisation de niveau détaillé. Voici comment l'activer :

1. Arrêtez AdGuard Home :

   ```sh
   ./AdGuardHome -s stop
   ```

2. Configurez AdGuard Home pour écrire des journaux de niveau détaillé :

   1. Ouvrez `AdGuardHome.yaml` dans votre éditeur.

   2. Définissez `log.file` sur le chemin souhaité du fichier journal, par exemple `/tmp/aghlog.txt`. Notez que le répertoire doit déjà exister.

   3. Définissez `log.verbose` sur `true`.

3. Redémarrez AdGuard Home et reproduisez le problème :

   ```sh
   ./AdGuardHome -s start
   ```

4. Une fois que vous avez terminé le débogage, remettez `log.verbose` à `false`.

## Comment afficher une page de blocage personnalisée ? {#customblock}

:::note

Avant de faire tout cela, veuillez noter que les navigateurs modernes sont configurés pour utiliser HTTPS, donc ils valident l'authenticité du certificat du serveur Web. Cela signifie que l'utilisation de l'un de ces éléments entraînera des écrans d'avertissement.

Il existe un certain nombre d'extensions proposées qui, si elles sont raisonnablement bien prises en charge par les clients, offriraient une meilleure expérience utilisateur, y compris les [codes d'erreur DNS étendus RFC 8914][rfc8914] et le [projet de page d'erreur d'accès DNS RFC][rfcaccess]. Nous les mettrons en œuvre lorsque les navigateurs commenceront réellement à les prendre en charge.

[rfc8914]: https://datatracker.ietf.org/doc/html/rfc8914
[rfcaccess]: https://datatracker.ietf.org/doc/html/draft-reddy-dnsop-error-page-08

:::

### Prérequis

Pour utiliser l'une de ces méthodes pour afficher une page de blocage personnalisée, vous aurez besoin d'un serveur HTTP en cours d'exécution sur une adresse IP et servant la page en question sur tous les itinéraires. Quelque chose comme [`pixelserv-tls`][pxsrv].

[pxsrv]: https://github.com/kvic-z/pixelserv-tls

### Page de blocage personnalisée pour le Contrôle parental et les filtres de navigation sécurisée

Il n'existe actuellement aucun moyen de définir ces paramètres depuis l'interface utilisateur, vous devrez donc modifier manuellement le fichier de configuration :

1. Arrêtez AdGuard Home :

   ```sh
   ./AdGuardHome -s stop
   ```

2. Ouvrez `AdGuardHome.yaml` dans votre éditeur.

3. Définissez les paramètres `dns.parental_block_host` ou `dns.safebrowsing_block_host` sur l'adresse IP du serveur (dans cet exemple, `192.168.123.45`) :

   ```yaml
   # …
   dns:
     # …

     # NOTE : Changez à l'adresse IP réelle de votre serveur.
     parental_block_host: 192.168.123.45
     safebrowsing_block_host: 192.168.123.45
   ```

4. Redémarrez AdGuard Home :

   ```sh
   ./AdGuardHome -s start
   ```

### Page de blocage personnalisée pour d'autres filtres

1. Ouvrez l'interface Web.

2. Accédez à _Paramètres_ → _Paramètres DNS._

3. Dans la section _Configuration du serveur DNS_, sélectionnez le bouton radio _IP personnalisée_ dans le sélecteur _Mode de blocage_ et saisissez les adresses IPv4 et IPv6 du serveur.

4. Cliquez sur _Enregistrer_.

## Comment changer l'adresse de l'interface du tableau de bord ? {#webaddr}

1. Arrêtez AdGuard Home :

   ```sh
   ./AdGuardHome -s stop
   ```

2. Ouvrez `AdGuardHome.yaml` dans votre éditeur.

3. Définissez le paramètre `http.address` sur une nouvelle interface réseau. Par exemple :

   - `0.0.0.0:0` pour écouter sur toutes les interfaces réseau ;
   - `0.0.0.0:8080` pour écouter sur toutes les interfaces réseau avec le port `8080` ;
   - `127.0.0.1:0` pour écouter uniquement sur l'interface de boucle locale.

4. Redémarrez AdGuard Home :

   ```sh
   ./AdGuardHome -s start
   ```

## Comment configurer AdGuard Home en tant que serveur DNS par défaut ? {#defaultdns}

Consultez la section [_Configuration des appareils_](/adguard-home/getting-started#configure-devices) sur la page _Premiers pas_.

## Existe-t-il des limitations connues ? {#limitations}

Voici quelques exemples de ce qui ne peut pas être bloqué par un bloqueur au niveau DNS :

- YouTube, publicités Twitch.

- Facebook, X (anciennement Twitter), publications sponsorisées Instagram.

Fondamentalement, toute publicité qui partage un domaine de contenu ne peut pas être bloquée par un bloqueur au niveau DNS, à moins que vous ne soyez prêt à bloquer le contenu également.

### Y a-t-il une possibilité de résoudre cela à l'avenir ?

DNS ne sera jamais suffisant pour cela. Votre seule option est d'utiliser un proxy de blocage de contenu comme ce que nous faisons dans les [applications AdGuard autonomes][adguard]. Nous ajouterons la prise en charge de cette fonctionnalité à AdGuard Home à l'avenir. Malheureusement, même alors, il y aura encore des cas où cela ne sera pas suffisant ou nécessitera une configuration assez compliquée.

[adguard]: https://adguard.com/

## Pourquoi obtiens-je l'erreur `bind: address already in use` lorsque j'essaie d'installer sur Ubuntu ? {#bindinuse}

Cela se produit parce que le port 53 sur `localhost`, qui est utilisé pour DNS, est déjà pris par un autre programme. Ubuntu est livré avec un DNS local appelé `systemd-resolved`, qui utilise l'adresse `127.0.0.53:53`, empêchant donc AdGuard Home de se lier à `127.0.0.1:53`. Vous pouvez voir cela en exécutant :

```sh
sudo lsof -i :53
```

La sortie devrait être semblable à :

```none
COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME
systemd-r 14542 systemd-resolve 13u IPv4 86178 0t0 UDP 127.0.0.53:domain
systemd-r 14542 systemd-resolve 14u IPv4 86179 0t0 TCP 127.0.0.53:domain
```

Pour résoudre cela, vous devez soit désactiver le démon `systemd-resolved`, soit choisir une autre interface réseau et lier votre AdGuard Home à une adresse IP accessible dessus, telle que l'adresse IP de votre routeur dans votre réseau. Mais si vous devez écouter sur `localhost`, il existe plusieurs solutions.

Tout d'abord, AdGuard Home peut détecter de telles configurations et désactiver `systemd-resolved` pour vous si vous appuyez sur le bouton _Réparer_ situé à côté du message `address already in use` sur l'écran d'installation.

Deuxièmement, si cela ne fonctionne pas, suivez les instructions ci-dessous. Notez que si vous utilisez AdGuard Home avec docker ou snap, vous devrez le faire vous-même.

1. Créez le répertoire `/etc/systemd/resolved.conf.d`, si nécessaire :

   ```sh
   sudo mkdir -p /etc/systemd/resolved.conf.d
   ```

2. Désactivez `DNSStubListener` et mettez à jour l'adresse du serveur DNS. Pour ce faire, créez un nouveau fichier, `/etc/systemd/resolved.conf.d/adguardhome.conf`, avec le contenu suivant :

   ```service
   [Resolve]
   DNS=127.0.0.1
   DNSStubListener=no
   ```

Spécifier `127.0.0.1` comme adresse du serveur DNS est **nécessaire.** Sinon, le serveur de noms sera `127.0.0.53` qui ne fonctionnera pas sans `DNSStubListener`.

1. Activez un autre fichier `resolv.conf` :

   ```sh
   sudo mv /etc/resolv.conf /etc/resolv.conf.backup
   sudo ln -s /run/systemd/resolve/resolv.conf /etc/resolv.conf
   ```

2. Redémarrez `DNSStubListener` :

   ```sh
   sudo systemctl reload-or-restart systemd-resolved
   ```

Après cela, `systemd-resolved` ne devrait pas apparaître dans la sortie de `lsof`, et AdGuard Home devrait pouvoir se lier à `127.0.0.1:53`.

## Comment configurer un serveur proxy inverse pour AdGuard Home ? {#reverseproxy}

Si vous exécutez déjà un serveur Web et que vous souhaitez accéder à l'interface du tableau de bord AdGuard Home à partir d'une URL comme `http://YOUR_SERVER/aghome/`, vous pouvez utiliser cette configuration pour votre serveur Web :

### nginx

```nginx
location /aghome/ {
 proxy_cookie_path / /aghome/;
 proxy_pass http://AGH_IP:AGH_PORT/;
 proxy_redirect / /aghome/;
 proxy_set_header Host $host;
}
```

### caddy

```none
:80/aghome/* {
 route {
 uri strip_prefix /aghome
 reverse_proxy AGH_IP:AGH_PORT
 }
}
```

Ou, si vous souhaitez simplement servir AdGuard Home avec TLS automatique, utilisez une configuration similaire à l'exemple ci-dessous :

```none
DOMAIN {
 encode gzip zstd
 tls YOUR_EMAIL@DOMAIN
 reverse_proxy AGH_IP:AGH_PORT
}
```

### Apache

```apache
<VirtualHost *:80>
  ProxyPass "/" "http://AGH_IP:AGH_PORT/"
  ProxyPassReverse "/" "http://AGH_IP:AGH_PORT/"
  PreserveHost On
</VirtualHost>
```

:::note

N’utilisez pas de sous-répertoires avec le proxy HTTP inverse Apache.  C'est un problème connu ([#6604]) : Apache gère les redirections relatives différemment des autres serveurs web. Cela entraîne des problèmes avec l'interface Web d'AdGuard Home.

[#6604]: https://github.com/AdguardTeam/AdGuardHome/issues/6604

:::

### Désactiver le chiffrement DoH sur AdGuard Home

Si vous utilisez TLS sur votre serveur proxy inverse, vous n'avez pas besoin d'utiliser TLS sur AdGuard Home. Définissez `allow_unencrypted_doh: true` dans `AdGuardHome.yaml` pour permettre à AdGuard Home de répondre aux demandes DoH sans chiffrement TLS.

### Adresses IP réelles des clients

Vous pouvez définir le paramètre `trusted_proxies` sur l'adresse IP de votre proxy HTTP pour que AdGuard Home prenne en compte les en-têtes contenant la vraie adresse IP du client. Consultez les pages [configuration][conf] et [chiffrement][encr] pour plus d'informations.

[encr]: https://github.com/AdguardTeam/AdGuardHome/wiki/Encryption#reverse-proxy
[conf]: https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration

## Comment corriger les erreurs `permission denied` sur Fedora ? {#fedora}

1. Déplacez le binaire `AdGuardHome` vers `/usr/local/bin`.

2. En tant que `root`, exécutez la commande suivante pour changer le contexte de sécurité du fichier :

   ```sh
   chcon -t bin_t /usr/local/bin/AdGuardHome
   ```

3. Ajoutez les règles de pare-feu requises pour le rendre accessible sur le réseau. Par exemple :

   ```sh
   firewall-cmd --new-zone=adguard --permanent
   firewall-cmd --zone=adguard --add-source=192.168.0.14/24 --permanent
   firewall-cmd --zone=adguard --add-port=3000/tcp --permanent
   firewall-cmd --zone=adguard --add-port=53/udp --permanent
   firewall-cmd --zone=adguard --add-port=80/tcp --permanent
   firewall-cmd --reload
   ```

Si vous continuez à obtenir `code=exited status=203/EXEC` ou des erreurs similaires de `systemctl`, essayez de désinstaller AdGuard Home et de l'installer **directement** dans `/usr/local/bin` en utilisant l'option `-o` du script d'installation :

```sh
curl -s -S -L 'https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh' | sh -s -- -o '/usr/local/bin' -v
```

Voir \[problème 765] et \[problème 3281].

[issue 3281]: https://github.com/AdguardTeam/AdGuardHome/issues/3281
[issue 765]: https://github.com/AdguardTeam/AdGuardHome/issues/765#issuecomment-752262353

## Comment corriger les erreurs `incompatible file system` ? {#incompatfs}

Vous devez déplacer votre installation ou votre répertoire de travail AdGuard Home à un autre endroit. Consultez la [section limitations](getting-started.md#limitations) sur la page _Premiers pas_.

## Que signifie `Error: control/version.json` ? {#version-error}

Ce message d'erreur signifie qu'AdGuard Home n'a pas pu atteindre les serveurs AdGuard pour vérifier les mises à jour et/ou les télécharger. Cela pourrait signifier que les serveurs sont bloqués par votre FAI ou qu'ils sont temporairement hors service. Si l'erreur ne se résout pas d'elle-même après un certain temps, vous pouvez essayer d'effectuer une [mise à jour manuelle](#manual-update) ou de désactiver la vérification de mise à jour automatique en exécutant l'exécutable `AdGuardHome` avec l'option de ligne de commande `--no-check-update`.

## Comment mettre à jour AdGuard Home manuellement ? {#manual-update}

If the button isn’t displayed or an automatic update has failed, you can update manually. In the examples below, we’ll use AdGuard Home versions for Linux and Windows for AMD64 CPUs.

### Unix (Linux, macOS, BSD) {#manual-update-unix}

:::important

The commands below use packages for AMD64 CPUs. Run `uname -m` before
downloading: use `amd64` for `x86_64`, and `arm64` for `aarch64` or `arm64`.
Replace every `amd64` in the package name and URL with that value. For other
results, choose the matching package from the [supported platforms page](/adguard-home/platforms#packaged-releases).

:::

1. Téléchargez le nouveau paquet AdGuard Home depuis la [page des publications][releases]. If you want to perform this step from the command line, type:

   ```sh
   curl -L -S -o '/tmp/AdGuardHome_linux_amd64.tar.gz' -s\
   'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'
   ```

   Or, with `wget`:

   ```sh
   wget -O '/tmp/AdGuardHome_linux_amd64.tar.gz'\
   'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'
   ```

2. Navigate to the directory where AdGuard Home is installed. On most Unix systems the default directory is `/opt/AdGuardHome`, but on macOS it’s `/Applications/AdGuardHome`.

3. Arrêtez AdGuard Home :

   ```sh
   sudo ./AdGuardHome -s stop
   ```

   :::note OpenBSD

   On OpenBSD, you will probably want to use `doas` instead of `sudo`.

   :::

4. Sauvegardez vos données. C'est-à-dire, votre fichier de configuration et le répertoire de données (`AdGuardHome.yaml` et `data/` par défaut). For example, to backup your data to a new directory called `~/my-agh-backup`:

   ```sh
   mkdir -p ~/my-agh-backup
   cp -r ./AdGuardHome.yaml ./data ~/my-agh-backup/
   ```

5. Extrayez l'archive AdGuard Home dans un répertoire temporaire. For example, if you downloaded the archive to your `/tmp/` directory:

   ```sh
   tar -C /tmp/ -f /tmp/AdGuardHome_linux_amd64.tar.gz -x -v -z
   ```

   Sur macOS, tapez quelque chose comme :

   ```sh
   unzip -d /tmp/ /tmp/AdGuardHome_darwin_amd64.zip
   ```

6. Remplacez l'ancien fichier exécutable AdGuard Home par le nouveau. On most Unix systems the command would look something like this:

   ```sh
   sudo cp /tmp/AdGuardHome/AdGuardHome /opt/AdGuardHome/AdGuardHome
   ```

   On macOS, something like:

   ```sh
   sudo cp /tmp/AdGuardHome/AdGuardHome /Applications/AdGuardHome/AdGuardHome
   ```

   Vous voudrez également copier les parties de documentation du paquet, telles que le journal des modifications (`CHANGELOG.md`), le fichier README (`README.md`) et la licence (`LICENSE.txt`).

   Vous pouvez maintenant supprimer le répertoire temporaire.

7. Redémarrez AdGuard Home :

   ```sh
   sudo ./AdGuardHome -s start
   ```

[releases]: https://github.com/AdguardTeam/AdGuardHome/releases/latest

### Windows (Utilisation de PowerShell) {#manual-update-win}

Dans tous les exemples ci-dessous, le PowerShell doit être exécuté en tant qu'administrateur.

1. Téléchargez le nouveau paquet AdGuard Home depuis la [page des publications][releases]. Si vous souhaitez effectuer cette étape depuis la ligne de commande :

   ```ps1
   $outFile = Join-Path -Path $Env:USERPROFILE -ChildPath 'Downloads\AdGuardHome_windows_amd64.zip'
   $aghUri = 'https://static.adguard.com/adguardhome/release/AdGuardHome_windows_amd64.zip'
   Invoke-WebRequest -OutFile "$outFile" -Uri "$aghUri"
   ```

2. Accédez au répertoire où AdGuard Home a été installé. Dans les exemples ci-dessous, nous utiliserons `C:\Program Files\AdGuardHome`.

3. Arrêtez AdGuard Home :

   ```ps1
   .\AdGuardHome.exe -s stop
   ```

4. Sauvegardez vos données. C'est-à-dire, votre fichier de configuration et le répertoire de données (`AdGuardHome.yaml` et `data/` par défaut). Par exemple, pour sauvegarder vos données dans un nouveau répertoire appelé `my-agh-backup` :

   ```ps1
   $newDir = Join-Path -Path $Env:USERPROFILE -ChildPath 'my-agh-backup'
   New-Item -Path $newDir -ItemType Directory
   Copy-Item -Path .\AdGuardHome.yaml, .\data -Destination $newDir -Recurse
   ```

5. Extrayez l'archive AdGuard Home dans un répertoire temporaire. Par exemple, si vous avez téléchargé l'archive dans votre répertoire `Downloads` et que vous souhaitez l'extraire dans un répertoire temporaire :

   ```ps1
   $outFile = Join-Path -Path $Env:USERPROFILE -ChildPath 'Downloads\AdGuardHome_windows_amd64.zip'
   Expand-Archive -Path "$outFile" -DestinationPath $Env:TEMP
   ```

6. Remplacez l'ancien fichier exécutable AdGuard Home par le nouveau. Par exemple :

   ```ps1
   $aghExe = Join-Path -Path $Env:TEMP -ChildPath 'AdGuardHome\AdGuardHome.exe'
   Copy-Item -Path "$aghExe" -Destination .\AdGuardHome.exe
   ```

   Vous voudrez également copier les parties de documentation du paquet, telles que le journal des modifications (`CHANGELOG.md`), le fichier README (`README.md`) et la licence (`LICENSE.txt`).

   Vous pouvez maintenant supprimer le répertoire temporaire.

7. Redémarrez AdGuard Home :

   ```ps1
   .\AdGuardHome.exe -s start
   ```

## Comment désinstaller AdGuard Home ? {#uninstall}

Selon la manière dont vous avez installé AdGuard Home, il existe différentes façons de le désinstaller.

:::caution

Avant de désinstaller AdGuard Home, n'oubliez pas de modifier la configuration de vos appareils et de les orienter vers un serveur DNS différent.

:::

### Installation régulière

Dans ce cas, procédez comme suit :

- Désenregistrez le service AdGuard Home : `./AdGuardHome -s uninstall`.

- Supprimez le répertoire AdGuard Home.

### Docker

Il suffit d'arrêter et de supprimer l'image.

### Magasin Snap

```sh
snap remove adguard-home
```
