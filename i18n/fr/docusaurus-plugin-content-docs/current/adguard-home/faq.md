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

3. Set the `http.address` setting to a new network interface. Par exemple :

   - `0.0.0.0:0` to listen on all network interfaces;
   - `0.0.0.0:8080` to listen on all network interfaces with port `8080`;
   - `127.0.0.1:0` to listen on the local loopback interface only.

4. Redémarrez AdGuard Home :

   ```sh
   ./AdGuardHome -s start
   ```

## How do I set up AdGuard Home as default DNS server? {#defaultdns}

See the [_Configuring Devices_ section](/adguard-home/getting-started#configure-devices) on the _Getting Started_ page.

## Are there any known limitations? {#limitations}

Here are some examples of what cannot be blocked by a DNS-level blocker:

- YouTube, Twitch ads.

- Facebook, X (formerly Twitter), Instagram sponsored posts.

Basically, any ad that shares a domain with content cannot be blocked by a DNS-level blocker, unless you are ready to block the content as well.

### Any possibility of dealing with this in the future?

DNS will never be enough to do this. Your only option is to use a content blocking proxy like what we do in the [standalone AdGuard applications][adguard]. We’ll be adding support for this feature to AdGuard Home in the future. Unfortunately, even then there will still be cases where it won’t be enough or it will require quite complicated configuration.

[adguard]: https://adguard.com/

## Why do I get `bind: address already in use` error when trying to install on Ubuntu? {#bindinuse}

This happens because the port 53 on `localhost`, which is used for DNS, is already taken by another program. Ubuntu comes with a local DNS called `systemd-resolved`, which uses the address `127.0.0.53:53`, thus preventing AdGuard Home from binding to `127.0.0.1:53`. You can see this by running:

```sh
sudo lsof -i :53
```

The output should be similar to:

```none
COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME
systemd-r 14542 systemd-resolve 13u IPv4 86178 0t0 UDP 127.0.0.53:domain
systemd-r 14542 systemd-resolve 14u IPv4 86179 0t0 TCP 127.0.0.53:domain
```

To fix this, you must either disable the `systemd-resolved` daemon or choose a different network interface and bind your AdGuard Home to an accessible IP address on it, such as the IP address of your router inside your network. But if you do need to listen on `localhost`, there are several solutions.

Firstly, AdGuard Home can detect such configurations and disable `systemd-resolved` for you if you press the _Fix_ button located next to the `address already in use` message on the installation screen.

Secondly, if that doesn’t work, follow the instructions below. Note that if you’re using AdGuard Home with docker or snap, you’ll have to do this yourself.

1. Create the `/etc/systemd/resolved.conf.d` directory, if necessary:

   ```sh
   sudo mkdir -p /etc/systemd/resolved.conf.d
   ```

2. Deactivate `DNSStubListener` and update DNS server address. To do that, create a new file, `/etc/systemd/resolved.conf.d/adguardhome.conf`, with the following content:

   ```service
   [Resolve]
   DNS=127.0.0.1
   DNSStubListener=no
   ```

Specifying `127.0.0.1` as the DNS server address is **necessary.** Otherwise the nameserver will be `127.0.0.53` which won’t work without `DNSStubListener`.

1. Activate another `resolv.conf` file:

   ```sh
   sudo mv /etc/resolv.conf /etc/resolv.conf.backup
   sudo ln -s /run/systemd/resolve/resolv.conf /etc/resolv.conf
   ```

2. Restart `DNSStubListener`:

   ```sh
   sudo systemctl reload-or-restart systemd-resolved
   ```

After that, `systemd-resolved` shouldn’t be shown in the output of `lsof`, and AdGuard Home should be able to bind to `127.0.0.1:53`.

## How do I configure a reverse proxy server for AdGuard Home? {#reverseproxy}

If you’re already running a web server and want to access the AdGuard Home dashboard UI from a URL like `http://YOUR_SERVER/aghome/`, you can use this configuration for your web server:

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

N’utilisez pas de sous-répertoires avec le proxy HTTP inverse Apache.  C'est un problème connu ([#6604]) : Apache gère les redirections relatives différemment des autres serveurs web. This causes problems with the AdGuard Home web interface.

[#6604]: https://github.com/AdguardTeam/AdGuardHome/issues/6604

:::

### Disable DoH encryption on AdGuard Home

If you’re using TLS on your reverse proxy server, you don’t need to use TLS on AdGuard Home. Set `allow_unencrypted_doh: true` in `AdGuardHome.yaml` to allow AdGuard Home to respond to DoH requests without TLS encryption.

### Real IP addresses of clients

You can set the parameter `trusted_proxies` to the IP address(es) of your HTTP proxy to make AdGuard Home consider the headers containing the real client IP address. See the [configuration][conf] and [encryption][encr] pages for more information.

[encr]: /adguard-home/encryption#reverse-proxy
[conf]: /adguard-home/configuration

## How do I fix `permission denied` errors on Fedora? {#fedora}

1. Move the `AdGuardHome` binary to `/usr/local/bin`.

2. As `root`, execute the following command to change the security context of the file:

   ```sh
   chcon -t bin_t /usr/local/bin/AdGuardHome
   ```

3. Add the required firewall rules in order to make it reachable through the network. Par exemple :

   ```sh
   firewall-cmd --new-zone=adguard --permanent
   firewall-cmd --zone=adguard --add-source=192.168.0.14/24 --permanent
   firewall-cmd --zone=adguard --add-port=3000/tcp --permanent
   firewall-cmd --zone=adguard --add-port=53/udp --permanent
   firewall-cmd --zone=adguard --add-port=80/tcp --permanent
   firewall-cmd --reload
   ```

If you are still getting `code=exited status=203/EXEC` or similar errors from `systemctl`, try uninstalling AdGuard Home and installing it **directly** into `/usr/local/bin` by using the `-o` option of the install script:

```sh
curl -s -S -L 'https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh' | sh -s -- -o '/usr/local/bin' -v
```

Voir \[problème 765] et \[problème 3281].

[issue 3281]: https://github.com/AdguardTeam/AdGuardHome/issues/3281
[issue 765]: https://github.com/AdguardTeam/AdGuardHome/issues/765#issuecomment-752262353

## How do I fix `incompatible file system` errors? {#incompatfs}

You should move your AdGuard Home installation or working directory to another location. See the [limitations section](getting-started.md#limitations) on the _Getting Started_ page.

## What does `Error: control/version.json` mean? {#version-error}

This error message means that AdGuard Home was unable to reach AdGuard servers to check for updates and/or download them. This could mean that the servers are blocked by your ISP or are temporarily down. If the error does not resolve itself after some time, you can try performing a [manual update](#manual-update) or disabling the automatic update check by running the `AdGuardHome` executable with the `--no-check-update` command-line option.

## How do I update AdGuard Home manually? {#manual-update}

If the button isn’t displayed or an automatic update has failed, you can update manually. In the examples below, we’ll use AdGuard Home versions for Linux and Windows for AMD64 CPUs.

### Unix (Linux, macOS, BSD) {#manual-update-unix}

1. Download the new AdGuard Home package from the [releases page][releases]. If you want to perform this step from the command line, type:

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

4. Backup your data. That is, your configuration file and the data directory (`AdGuardHome.yaml` and `data/` by default). For example, to backup your data to a new directory called `~/my-agh-backup`:

   ```sh
   mkdir -p ~/my-agh-backup
   cp -r ./AdGuardHome.yaml ./data ~/my-agh-backup/
   ```

5. Extract the AdGuard Home archive to a temporary directory. For example, if you downloaded the archive to your `/tmp/` directory:

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

   You may also want to copy the documentation parts of the package, such as the change log (`CHANGELOG.md`), the README file (`README.md`), and the license (`LICENSE.txt`).

   You can now remove the temporary directory.

7. Redémarrez AdGuard Home :

   ```sh
   sudo ./AdGuardHome -s start
   ```

[releases]: https://github.com/AdguardTeam/AdGuardHome/releases/latest

### Windows (Using PowerShell) {#manual-update-win}

In all examples below, the PowerShell must be run as Administrator.

1. Download the new AdGuard Home package from the [releases page][releases]. If you want to perform this step from the command line:

   ```ps1
   $outFile = Join-Path -Path $Env:USERPROFILE -ChildPath 'Downloads\AdGuardHome_windows_amd64.zip'
   $aghUri = 'https://static.adguard.com/adguardhome/release/AdGuardHome_windows_amd64.zip'
   Invoke-WebRequest -OutFile "$outFile" -Uri "$aghUri"
   ```

2. Navigate to the directory where AdGuard Home was installed. In the examples below, we’ll use `C:\Program Files\AdGuardHome`.

3. Arrêtez AdGuard Home :

   ```ps1
   .\AdGuardHome.exe -s stop
   ```

4. Backup your data. That is, your configuration file and the data directory (`AdGuardHome.yaml` and `data/` by default). For example, to backup your data to a new directory called `my-agh-backup`:

   ```ps1
   $newDir = Join-Path -Path $Env:USERPROFILE -ChildPath 'my-agh-backup'
   New-Item -Path $newDir -ItemType Directory
   Copy-Item -Path .\AdGuardHome.yaml, .\data -Destination $newDir -Recurse
   ```

5. Extract the AdGuard Home archive to a temporary directory. For example, if you downloaded the archive to your `Downloads` directory and want to extract it to a temporary directory:

   ```ps1
   $outFile = Join-Path -Path $Env:USERPROFILE -ChildPath 'Downloads\AdGuardHome_windows_amd64.zip'
   Expand-Archive -Path "$outFile" -DestinationPath $Env:TEMP
   ```

6. Remplacez l'ancien fichier exécutable AdGuard Home par le nouveau. Par exemple :

   ```ps1
   $aghExe = Join-Path -Path $Env:TEMP -ChildPath 'AdGuardHome\AdGuardHome.exe'
   Copy-Item -Path "$aghExe" -Destination .\AdGuardHome.exe
   ```

   You may also want to copy the documentation parts of the package, such as the change log (`CHANGELOG.md`), the README file (`README.md`), and the license (`LICENSE.txt`).

   You can now remove the temporary directory.

7. Redémarrez AdGuard Home :

   ```ps1
   .\AdGuardHome.exe -s start
   ```

## How do I uninstall AdGuard Home? {#uninstall}

Depending on how you installed AdGuard Home, there are different ways to uninstall it.

:::caution

Before uninstalling AdGuard Home, don’t forget to change the configuration of your devices and point them to a different DNS server.

:::

### Regular installation

In this case, do the following:

- Unregister AdGuard Home service: `./AdGuardHome -s uninstall`.

- Remove the AdGuard Home directory.

### Docker

Simply stop and remove the image.

### Snap Store

```sh
snap remove adguard-home
```
