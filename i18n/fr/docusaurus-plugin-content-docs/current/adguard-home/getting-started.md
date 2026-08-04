---
title: Prise en main
sidebar_position: 2
---

## Installation {#installation}

### Publications officielles

Téléchargez l'archive contenant le fichier binaire pour votre système d'exploitation à partir de la \[dernière page de version stable]\[versions]. La liste complète des plateformes prises en charge ainsi que les liens vers les versions bêta et edge (non-stables) sont disponibles sur \[notre page plateformes]\[plateformes].

Pour installer AdGuard Home en tant que service, extrayez l'archive, entrez dans le répertoire `AdGuardHome` et exécutez :

```sh
./AdGuardHome -s install
```

#### Notes

- Utilisateurs de **Fedora Linux** et de ses dérivés : installez AdGuard Home dans le répertoire `/usr/local/bin`. Le non-respect de cela peut causer des problèmes avec SELinux et les autorisations. Voir \[problème 765] et \[problème 3281].

- Les utilisateurs de **macOS 10.15 Catalina** et plus récents doivent placer le répertoire de travail d'AdGuard Home dans le répertoire `/Applications`.

- For **Raspberry Pi** users, there is a separate [guide][raspberry-pi-guide].

[raspberry-pi-guide]: /adguard-home/raspberry-pi

### Docker et Snap

Nous fournissons également une [image officielle docker AdGuard Home][docker] et un [paquet officiel Snap Store][snap] pour les utilisateurs expérimentés.

### Autres

Certaines autres options non officielles incluent :

- L'\[Extension Home Assistant]\[est] maintenue par [@frenck](https://github.com/frenck).

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
[platforms]: /adguard-home/platforms
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

[conf]: /adguard-home/configuration#log

## Mise à jour {#update}

![Un exemple de notification de mise à jour](https://cdn.adtidy.org/content/kb/dns/adguard-home/updatenotification.png)

Lorsqu'une nouvelle version est publiée, l'interface utilisateur d'AdGuard Home affiche un message de notification et le bouton _Mettre à jour maintenant_. Cliquez sur ce bouton, et AdGuard Home sera automatiquement mis à jour vers la version la plus récente. Votre fichier exécutable AdGuard Home actuel est enregistré dans le répertoire `backup` avec le fichier de configuration actuel, afin que vous puissiez revenir en arrière en cas de besoin.

### Mise à jour manuelle {#manual-update}

Dans le cas où le bouton n'est pas affiché ou si une mise à jour automatique a échoué, vous pouvez mettre à jour manuellement. Nous avons un [guide détaillé sur les mises à jour manuelles][mupd], mais en résumé :

1. Téléchargez le nouveau paquet AdGuard Home.

2. Extrayez-le dans un répertoire temporaire.

3. Remplacez l'ancien fichier exécutable AdGuard Home par le nouveau.

4. Redémarrez AdGuard Home.

[mupd]: faq.md#manual-update

### Mises à jour Docker, Home Assistant et Snapcraft

Les mises à jour automatiques pour Docker, Hass.io/Home Assistant et les installations Snapcraft sont désactivées. Mettez plutôt à jour l'image.

### Mise à jour en ligne de commande

Pour mettre à jour le paquet AdGuard Home sans avoir besoin d'utiliser Web API, exécutez :

```sh
./AdGuardHome --update
```

## La configuration des appareils {#configure-devices}

### Routeur

Cette configuration couvrira automatiquement tous les appareils connectés à votre routeur domestique, vous n'aurez pas besoin de configurer chacun d'eux manuellement.

1. Ouvrez les préférences de votre routeur. Normalement, vous pouvez y accéder depuis votre navigateur via une URL, telle que [http://192.168.0.1/](http://192.168.0.1/) ou [http://192.168.1.1/](http://192.168.1.1/). Il se peut que vous soyez invité à saisir un mot de passe. Si vous ne vous en souvenez pas, vous pouvez souvent réinitialiser le mot de passe en appuyant sur un bouton sur le routeur lui-même, mais soyez conscient que si cette procédure est choisie, vous perdrez probablement toute la configuration du routeur. Si votre routeur nécessite une application pour être configuré, veuillez installer l'application sur votre téléphone ou PC et l'utiliser pour accéder aux paramètres du routeur.

2. Trouvez les paramètres DHCP/DNS. Recherchez les lettres DNS à côté d'un champ qui permet deux ou trois ensembles de numéros, chacun divisé en quatre groupes de un à trois chiffres.

3. Saisissez vos adresses de serveur AdGuard Home ici.

4. Sur certains types de routeurs, un serveur DNS personnalisé ne peut pas être configuré. Dans ce cas, configurer AdGuard Home en tant que serveur DHCP peut aider. Sinon, vous devriez consulter le manuel de votre routeur pour apprendre comment personnaliser les serveurs DNS sur votre modèle de routeur spécifique.

### Windows

1. Ouvrez le _Panneau de configuration_ depuis le menu Démarrer ou la recherche Windows.

2. Allez dans _Réseau et Internet_ puis dans _Centre Réseau et partage_.

3. Sur le côté gauche de l'écran, trouvez le bouton _Modifier les paramètres de l'adaptateur_ et cliquez dessus.

4. Sélectionnez votre connexion active, cliquez droit dessus et choisissez _Propriétés_.

5. Recherchez _Protocole Internet Version 4 (TCP/IPv4)_ (ou, pour IPv6, _Protocole Internet Version 6 (TCP/IPv6)_) dans la liste, sélectionnez-le, puis cliquez à nouveau sur _Propriétés_.

6. Choisissez _Utiliser l’adresse de serveur DNS suivante_ et entrez vos adresses de serveur AdGuard Home.

### macOS

1. Cliquez sur l'icône Apple et allez dans _Préférences Système_.

2. Cliquez sur _Réseau_.

3. Sélectionnez la première connexion de votre liste et cliquez sur _Avancés_.

4. Sélectionnez l'onglet DNS et entrez vos adresses de serveur AdGuard Home.

### Android

:::note

Les instructions pour les appareils Android peuvent différer selon la version du système d'exploitation et le fabricant.

:::

1. Depuis l'écran d'accueil Android, appuyez sur _Paramètres_.

2. Appuyez sur _Wi-Fi_ dans le menu. L'écran affichant tous les réseaux disponibles sera affiché (il est impossible de définir des DNS personnalisés pour la connexion mobile).

3. Appuyez longuement sur le réseau auquel vous êtes connecté et tapez sur _Modifier le réseau_.

4. Sur certains appareils, vous devrez peut-être cocher la case _Avancés_ pour voir plus de paramètres. Pour ajuster vos paramètres DNS Android, vous devrez changer les paramètres IP de _DHCP_ à _Statique_.

5. Changez les valeurs DNS 1 et DNS 2 pour vos adresses de serveur AdGuard Home.

### iOS

1. Depuis l'écran d'accueil, appuyez sur _Paramètres_.

2. Sélectionnez _Wi-Fi_ dans le menu à gauche (il est impossible de configurer DNS pour les réseaux mobiles).

3. Appuyez sur le nom du réseau actuellement actif.

4. Dans le champ _DNS_, saisissez vos adresses de serveur AdGuard Home.

## Fonctionnement sans superutilisateur {#running-without-superuser}

Vous pouvez exécuter AdGuard Home sans privilèges de superutilisateur, mais vous devez soit accorder une capacité à l'exécutable (sur Linux), soit lui indiquer d'utiliser un port différent (sur toutes les plateformes).

### Octroi des capacités nécessaires (Linux uniquement)

L'utilisation de cette méthode nécessite l'utilitaire `setcap`. Vous devrez peut-être l'installer à l'aide du gestionnaire de paquets de votre distribution Linux.

Pour permettre à AdGuard Home fonctionnant sur Linux d'écouter sur le port 53 sans privilèges de superutilisateur et de lier ses serveurs DNS à une interface particulière, exécutez :

```sh
sudo setcap 'CAP_NET_BIND_SERVICE=+eip CAP_NET_RAW=+eip' ./AdGuardHome
```

Puis exécutez `./AdGuardHome` en tant qu'utilisateur non privilégié.

### Modification du port d'écoute DNS

Pour configurer AdGuard Home afin d'écouter sur un port qui ne nécessite pas de privilèges de superutilisateur, arrêtez AdGuard Home, ouvrez `AdGuardHome.yaml` dans votre éditeur, et trouvez ces lignes :

```yaml
dns:
    # …
    port: 53
```

Vous pouvez changer le port à n'importe quoi au-dessus de 1024 pour éviter d'exiger des privilèges de superutilisateur.

## Limitations {#limitations}

Certains systèmes de fichiers ne prennent pas en charge l'appel système `mmap(2)` requis par le système de statistiques. Voir également \[problème 1188].

Vous pouvez résoudre ce problème :

- soit en fournissant les arguments `--work-dir DIRECTORY` à l'exécutable `AdGuardHome`. Cette option indiquera à AGH d'utiliser un autre répertoire pour tous ses fichiers au lieu du répertoire par défaut `./data`.

- ou en créant des liens symboliques pointant vers un autre système de fichiers qui prend en charge `mmap(2)` (par exemple tmpfs) :

  ```sh
  ln -s ${YOUR_AGH_PATH}/data/stats.db /tmp/stats.db
  ln -s ${YOUR_AGH_PATH}/data/sessions.db /tmp/sessions.db
  ```

[issue 1188]: https://github.com/AdguardTeam/AdGuardHome/issues/1188
