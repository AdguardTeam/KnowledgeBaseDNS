---
title: Connexion automatique
sidebar_position: 5
---

## Pourquoi c'est utile

Tout le monde ne se sent pas à l'aise pour ajouter des appareils via le tableau de bord. Par exemple, si vous êtes un administrateur système configurant plusieurs appareils d'entreprise simultanément, vous souhaiterez minimiser les tâches manuelles autant que possible.

Vous pouvez créer un lien de connexion et l'utiliser dans les paramètres de l'appareil. Votre appareil sera détecté et connecté automatiquement au serveur.

## Comment configurer la connexion automatique

1. Ouvrez le _tableau de bord_ et sélectionnez le serveur requis.
2. Allez dans _Avancés_.
3. Activez l'option pour connecter les appareils automatiquement.
   ![Connecter les appareils automatiquement \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically.png)

Vous pouvez connecter automatiquement votre appareil au serveur en créant une adresse spéciale qui inclut le nom de l'appareil, le type d'appareil et l'ID du serveur actuel. Explorons à quoi ressemblent ces adresses et les règles pour les créer.

### Exemples d'adresses de connexion automatique

- `tls://adr-{Your_Server_ID}-AdGuard-Test-Device.d.adguard-dns.com` — cela créera automatiquement un appareil `Android` avec le protocole `DNS-over-TLS` nommé `Appareil Test AdGuard`

- `https://d.adguard-dns.com/dns-query/win-{Your_Server_ID}-John-Doe` — cela créera automatiquement un appareil `Windows` avec le protocole `DNS-over-HTTPS` nommé `John Doe`

- `quic://ios-73f78a1d-Mary-Sue.d.adguard-dns.com` — cela créera automatiquement un appareil `iOS` avec le protocole `DNS-over-QUIC` nommé `Mary Sue`

### Conventions d'appellation

Lors de la création manuelle d'appareils, veuillez noter qu'il existe des restrictions liées à la longueur du nom, aux caractères, aux espaces et aux traits d'union.

**Longueur du nom**: 50 caractères maximum. Les caractères au-delà de cette limite sont ignorés.

**Caractères autorisés**: Lettres anglaises, chiffres et traits d'union `-`. D'autres caractères sont ignorés.

**Espaces et traits d'union**: Utilisez un trait d'union pour un espace et un double trait d'union (`--`) pour un trait d'union.

**Type d'appareil**: Utilisez les abréviations suivantes:

- Windows — `win`
- macOS — `mac`
- Android — `adr`
- iOS — `ios`
- Linux — `lnx`
- Routeur — `rtr`
- Smart TV — `stv`
- Console de jeux — `gam`
- Autre — `otr`

## Générateur de liens

Nous avons ajouté un modèle qui génère un lien pour le type d'appareil et le protocole spécifiques.

1. Allez à _Serveurs_ → _Paramètres du serveur_ → _Appareils_ → _Connecter les appareils automatiquement_ et cliquez sur _Générateur de liens et instructions_.
2. Sélectionnez le protocole que vous souhaitez utiliser ainsi que le nom de l'appareil et le type d'appareil.
3. Cliquez sur _Générer un lien_.
   ![Générer le lien \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step7.png)
4. Vous avez réussi à générer le lien, copiez maintenant l'adresse du serveur et utilisez-la dans l'un des [applications AdGuard](https://adguard.com/welcome.html)
