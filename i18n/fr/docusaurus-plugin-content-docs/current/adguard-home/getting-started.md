---
title: Prise en main
sidebar_position: 2
---

## Installation {#installation}

### Publications officielles

Téléchargez l'archive contenant le fichier binaire pour votre système d'exploitation à partir de la [dernière page de version stable][releases]. La liste complète des plateformes prises en charge ainsi que les liens vers les versions bêta et edge (non-stables) sont disponibles sur [notre page plateformes][platforms].

Pour installer AdGuard Home en tant que service, extrayez l'archive, entrez dans le répertoire `AdGuardHome` et exécutez :

```sh
./AdGuardHome -s install
```

#### Notes

- Utilisateurs de **Fedora Linux** et de ses dérivés : installez AdGuard Home dans le répertoire `/usr/local/bin`. Le non-respect de cela peut causer des problèmes avec SELinux et les autorisations. Voir \[problème 765] et \[problème 3281].

- Les utilisateurs de **macOS 10.15 Catalina** et plus récents doivent placer le répertoire de travail d'AdGuard Home dans le répertoire `/Applications`.

### Docker et Snap

Nous fournissons également une [image officielle docker AdGuard Home][docker] et un [paquet officiel Snap Store][snap] pour les utilisateurs expérimentés.

### Autres

Certaines autres options non officielles incluent :

- L'[Extension Home Assistant][has] maintenue par [@frenck](https://github.com/frenck).

- [OpenWrt LUCI app][luci] maintenue par [@kongfl888](https://github.com/kongfl888).

- [Arch Linux][arch], [Arch Linux ARM][archarm], et d'autres systèmes d'exploitation basés sur Arch, peuvent être compilés via le [paquet `adguardhome`][aghaur] dans l'[AUR][aur] maintenu par [@graysky2](https://github.com/graysky2).

- [Application Cloudron][cloudron] maintenue par [@gramakri](https://github.com/gramakri).

[aghaur]: https://aur.archlinux.org/packages/adguardhome/
[arch]: https://www.archlinux.org/
[archarm]: https://archlinuxarm.org/
[aur]: https://wiki.archlinux.org/index.php/Arch_User_Repository
[cloudron]: https://git.cloudron.io/cloudron/adguard-home-app
[docker]: https://hub.docker.com/r/adguard/adguardhome
[has]: https://github.com/hassio-addons/addon-adguard-home
[issue 3281]: https://github.com/AdguardTeam/AdGuardHome/issues/3281
[issue 765]: https://github.com/AdguardTeam/AdGuardHome/issues/765#issuecomment-752262353
[luci]: https://github.com/kongfl888/luci-app-adguardhome
[platforms]: https://github.com/AdguardTeam/AdGuardHome/wiki/Platforms
[releases]: https://github.com/AdguardTeam/AdGuardHome/releases/latest
[snap]: https://snapcraft.io/adguard-home

## Premier démarrage {#first-time}

Tout d'abord, vérifiez les paramètres de votre pare-feu. Pour installer et utiliser AdGuard Home, les ports et protocoles suivants doivent être disponibles :

- 3000/TCP pour l'installation initiale;
- 80/TCP pour l'interface web;
- 53/UDP pour le serveur DNS.

Vous devrez peut-être ouvrir des ports supplémentaires pour des protocoles autres que le DNS simple, tels que DNS-over-HTTPS.

Les serveurs DNS se lient au port 53, ce qui nécessite des privilèges de super-utilisateur la plupart du temps, [voir ci-dessous](#running-without-superuser). Par conséquent, sur les systèmes Unix, vous devrez le lancer avec `sudo` ou `doas` dans le terminal :

```sh
sudo ./AdGuardHome
```

Sur Windows, exécutez `cmd.exe` ou PowerShell avec des privilèges d'administrateur et exécutez `AdGuardHome.exe` à partir de là.

Lorsque vous exécutez AdGuard Home pour la première fois, il commence à écouter sur `0.0.0.0:3000` et vous invite à l'ouvrir dans votre navigateur :

```none
AdGuard Home est disponible aux adresses suivantes :
aller à http://127.0.0.1:3000
aller à http://[::1]:3000
[…]
```

Là, vous passerez par l'assistant de configuration initiale.

![Écran de sélection de l'interface réseau AdGuard Home](https://cdn.adtidy.org/content/kb/dns/adguard-home/install2.png)

![Écran de création d'utilisateur AdGuard Home](https://cdn.adtidy.org/content/kb/dns/adguard-home/install3.png)

Voir [notre article sur l'exécution d'AdGuard Home en toute sécurité](running-securely.md) pour des conseils sur la manière de choisir la configuration initiale qui vous convient le mieux.

## Fonctionnement en tant que service {#service}

L'étape suivante consiste à enregistrer AdGuard Home en tant que service système (alias daemon). Pour installer AdGuard Home en tant que service, exécutez :

```sh
sudo ./AdGuardHome -s install
```

Sur Windows, exécutez `cmd.exe` avec des privilèges d'administrateur et exécutez `AdGuardHome.exe -s install` pour enregistrer un service Windows.

Voici les autres commandes dont vous pourriez avoir besoin pour contrôler le service :

- `AdGuardHome -s uninstall` : Désinstaller le service AdGuard Home.
- `AdGuardHome -s start` : Démarrer le service.
- `AdGuardHome -s stop` : Arrêter le service.
- `AdGuardHome -s restart` : Redémarrer le service.
- `AdGuardHome -s status` : Afficher l'état actuel du service.

### Les journaux

Par défaut, les journaux sont écrits dans `stderr` lorsque vous exécutez AdGuard Home dans un terminal. Si vous l'exécutez en tant que service, la sortie des journaux dépend de la plateforme :

- Sur macOS, le journal est écrit dans des fichiers `/var/log/AdGuardHome.*.log`.

- Sur d'autres systèmes Unix, le journal est écrit dans `syslog` ou `journald`.

- Sur Windows, le journal est écrit dans le journal d'événements Windows.

Vous pouvez modifier ce comportement dans le [fichier de configuration AdGuard Home][conf].

[conf]: https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration

## Mise à jour {#update}

![Un exemple de notification de mise à jour](https://cdn.adtidy.org/content/kb/dns/adguard-home/updatenotification.png)

Lorsqu'une nouvelle version est publiée, l'interface utilisateur d'AdGuard Home affiche un message de notification et le bouton _Mettre à jour maintenant_. Cliquez sur ce bouton, et AdGuard Home sera automatiquement mis à jour vers la version la plus récente. Votre fichier exécutable AdGuard Home actuel est enregistré dans le répertoire `backup` avec le fichier de configuration actuel, afin que vous puissiez revenir en arrière en cas de besoin.

### Mise à jour manuelle {#manual-update}

In case the button isn’t shown or an automatic update has failed, you can update manually. We have a [detailed guide on manual updates][mupd], but in short:

1. Download the new AdGuard Home package.

2. Extract it to a temporary directory.

3. Replace the old AdGuard Home executable file with the new one.

4. Restart AdGuard Home.

[mupd]: faq.md#manual-update

### Docker, Home Assistant, and Snapcraft updates

Auto-updates for Docker, Hass.io/Home Assistant, and Snapcraft installations are disabled. Update the image instead.

### Command-line update

To update AdGuard Home package without the need to use Web API run:

```sh
./AdGuardHome --update
```

## Configurer les appareils {#configure-devices}

### Router

This setup will automatically cover all devices connected to your home router, and you won’t need to configure each of them manually.

1. Ouvrez les préférences de votre routeur. Usually, you can access it from your browser via a URL, such as [http://192.168.0.1/](http://192.168.0.1/) or [http://192.168.1.1/](http://192.168.1.1/). You may be prompted to enter a password. If you don’t remember it, you can often reset the password by pressing a button on the router itself, but be aware that if this procedure is chosen, you will probably lose the entire router configuration. If your router requires an app to set it up, please install the app on your phone or PC and use it to access the router’s settings.

2. Find the DHCP/DNS settings. Look for the DNS letters next to a field that allows two or three sets of numbers, each divided into four groups of one to three digits.

3. Enter your AdGuard Home server addresses there.

4. On some router types, a custom DNS server cannot be set up. In that case, setting up AdGuard Home as a DHCP server may help. Otherwise, you should consult your router manual to learn how to customize DNS servers on your specific router model.

### Windows

1. Open _Control Panel_ from the Start menu or Windows search.

2. Go to _Network and Internet_ and then to _Network and Sharing Center_.

3. On the left side of the screen, find the _Change adapter settings_ button and click it.

4. Select your active connection, right-click it and choose _Properties_.

5. Find _Internet Protocol Version 4 (TCP/IPv4)_ (or, for IPv6, _Internet Protocol Version 6 (TCP/IPv6)_) in the list, select it, and then click _Properties_ again.

6. Choose _Use the following DNS server addresses_ and enter your AdGuard Home server addresses.

### macOS

1. Click the Apple icon and go to _System Preferences_.

2. Cliquez sur _Réseau_.

3. Select the first connection in your list and click _Advanced_.

4. Select the DNS tab and enter your AdGuard Home server addresses.

### Android

:::note

Instructions for Android devices may differ depending on the OS version and the manufacturer.

:::

1. From the Android menu home screen, tap _Settings_.

2. Tap _Wi-Fi_ on the menu. The screen with all of the available networks will be displayed (it is impossible to set custom DNS for mobile connection).

3. Long press the network you’re connected to and tap _Modify Network_.

4. On some devices, you may need to check the box for _Advanced_ to see more settings. To adjust your Android DNS settings, you will need to change the IP settings from _DHCP_ to _Static_.

5. Change set DNS 1 and DNS 2 values to your AdGuard Home server addresses.

### iOS

1. From the home screen, tap _Settings_.

2. Select _Wi-Fi_ from the left menu (it is impossible to configure DNS for mobile networks).

3. Tap the name of the currently active network.

4. In the _DNS_ field, enter your AdGuard Home server addresses.

## Running without superuser {#running-without-superuser}

You can run AdGuard Home without superuser privileges, but you must either grant the binary a capability (on Linux) or instruct it to use a different port (all platforms).

### Granting the necessary capabilities (Linux only)

Using this method requires the `setcap` utility. You may need to install it using your Linux distribution’s package manager.

To allow AdGuard Home running on Linux to listen on port 53 without superuser privileges and bind its DNS servers to a particular interface, run:

```sh
sudo setcap 'CAP_NET_BIND_SERVICE=+eip CAP_NET_RAW=+eip' ./AdGuardHome
```

Then run `./AdGuardHome` as an unprivileged user.

### Changing the DNS listen port

To configure AdGuard Home to listen on a port that does not require superuser privileges, stop AdGuard Home, open `AdGuardHome.yaml` in your editor, and find these lines:

```yaml
dns:
    # …
    port: 53
```

You can change the port to anything above 1024 to avoid requiring superuser privileges.

## Limitations {#limitations}

Some file systems don’t support the `mmap(2)` system call required by the statistics system. See also [issue 1188].

You can resolve this issue:

- either by supplying the `--work-dir DIRECTORY` arguments to the `AdGuardHome` binary. This option will tell AGH to use another directory for all its files instead of the default `./data` directory.

- or by creating symbolic links pointing to another file system that supports `mmap(2)` (e.g. tmpfs):

  ```sh
  ln -s ${YOUR_AGH_PATH}/data/stats.db /tmp/stats.db
  ln -s ${YOUR_AGH_PATH}/data/sessions.db /tmp/sessions.db
  ```

[issue 1188]: https://github.com/AdguardTeam/AdGuardHome/issues/1188
