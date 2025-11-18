---
title: iOS
sidebar_position: 3
---

Pour connecter un appareil iOS à AdGuard DNS, commencez par l'ajouter au _tableau de bord_ :

1. Allez dans le _tableau de bord_ et cliquez sur _Connecter un nouvel appareil_.
2. Dans le menu déroulant _Type d'appareil_, sélectionnez iOS.
3. Nommez le dispositif.
   ![Connexion de l'appareil \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/choose_ios.png)

## Utilisez l'application AdGuard DNS

L'application AdGuard DNS est conçue pour une protection DNS de base — elle bloque les publicités, les traqueurs et les sites web malveillants. Si vous n’avez pas besoin de toute la gamme de fonctionnalités proposées par le Bloqueur AdGuard ou AdGuard VPN, ce pourrait être le meilleur choix pour vous.

Pour configurer votre appareil :

1. [Téléchargez l'application AdGuard DNS](https://agrd.io/ios_dns).
2. Allez sur votre tableau de bord DNS AdGuard à [adguard-dns.io/dashboard](https://adguard-dns.io/dashboard/).
3. Cliquez sur _Ajouter un nouvel appareil_ dans l'onglet _Accueil_.
4. Sélectionnez le type de votre appareil et donnez-lui un nom, puis cliquez sur _Suivant_.
5. Développez la section _Utiliser les applications AdGuard_.

![Utiliser les applications AdGuard \*border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/UseAdGuardDnsAppsiOS.png)

1. Sous _Utiliser l'application AdGuard DNS_, choisissez l'une de ces méthodes de configuration :

   - Cliquez sur _Configurer_ si vous vous trouvez sur l'appareil que vous souhaitez protéger.
   - Scannez le code QR avec l'appareil que vous souhaitez protéger.
   - Copiez votre identifiant de configuration et collez-le directement dans l'application.

     ![Id de configuration \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/SetupIDiOS.png)

2. Appuyez sur _Continuer_ → _Se connecter_.

![Connecter \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ConnectiOS.png)

1. Votre dispositif est maintenant connecté à AdGuard DNS. Il vous suffit d'appuyer sur _Activer_ pour démarrer la protection.

![Activer \*mobile_border](https://cdn.adtidy.org/content/release_notes/dns/dns-app-v1-0/ProtectioniOS.png)

1. Même en utilisant un protocole basé sur un VPN, vous devez autoriser la création d'un profil VPN avant d'être pleinement protégé. Pour cela, allez sur la page d’accueil de l’application, cliquez sur _Activer_ et suivez les instructions intégrées.

2. Si vous préférez utiliser un DNS natif, allez dans _Paramètres_ → _Général_ → _Gestion du VPN et dispositifs_ → _DNS_ et activez le DNS AdGuard.

C'est fait ! Votre dispositif est maintenant connecté à AdGuard DNS.

## Utilisez le Bloqueur AdGuard (option payante)

L'application AdGuard vous permet d'utiliser DNS chiffré, ce qui est parfait pour configurer AdGuard DNS sur votre appareil iOS. Vous pouvez choisir parmi les différents protocoles de chiffrement. En plus du filtrage DNS, vous obtenez également un excellent bloqueur de publicité qui fonctionne sur l'ensemble de votre système.

1. Installez l'[application AdGuard](https://adguard.com/adguard-ios/overview.html) sur l'appareil que vous souhaitez connecter à AdGuard DNS.
2. Ouvrez l'application AdGuard.
3. Sélectionnez l'onglet _Protection_ dans le menu du bas.
   ![Icône du bouclier \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step3.jpg)
4. Assurez-vous que la _protection DNS_ est activée et puis tapez dessus. Choisissez _serveur DNS_.
   ![Protection DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4.jpg)
   ![Serveur DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step4_2.jpg)
5. Faites défiler vers le bas et tapez sur _Ajouter un serveur DNS personnalisé_.
   ![Ajouter un serveur DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step5.jpg)
6. Copiez l'une des adresses DNS suivantes et collez-la dans le champ _adresse du serveur DNS_ dans l'application. Si vous n'êtes pas sûr de celui à privilégier, choisissez DNS-over-HTTPS.
   ![Copier l'adresse du serveur \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_1.png)
   ![Coller l'adresse du serveur \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step6_2.jpg)
7. Tapez _Enregistrer et sélectionner_.
   ![Enregistrer et sélectionner \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step7.jpg)
8. Votre serveur nouvellement créé devrait apparaître en bas de la liste.
   ![Serveur personnalisé \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_ab/ios_step8.jpg)

C'est fait ! Votre dispositif est maintenant connecté à AdGuard DNS.

## Utilisez AdGuard VPN

Tous les services VPN ne prennent pas en charge DNS chiffré. Cependant, notre VPN le fait, donc si vous avez besoin à la fois d'un VPN et d'un DNS privé, AdGuard VPN est votre option de choix.

1. Installez l'[application AdGuard VPN](https://adguard-vpn.com/ios/overview.html) sur l'appareil que vous souhaitez connecter à AdGuard DNS.
2. Ouvrez l'application AdGuard VPN.
3. Tapez sur l'icône de l'engrenage dans le coin inférieur droit de l'écran.
   ![Icône de l'engrenage \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step3.jpg)
4. Ouvrez _Général_.
   ![Paramètres généraux \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step4.jpg)
5. Sélectionnez _serveur DNS_.
   ![Serveur DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step5.png)
6. Faites défiler vers le bas jusqu'à _Ajouter un serveur DNS personnalisé_.
   ![Ajouter un serveur \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step6.png)
7. Copiez l'une des adresses DNS suivantes et collez-la dans le champ de texte _adresses des serveurs DNS_. Si vous n'êtes pas sûr de celui à privilégier, choisissez _DNS-over-HTTPS_.
   ![Serveur DoH \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_1.png)
   ![Serveur DNS personnalisé \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step7_2.jpg)
8. Tapez _Enregistrer_.
   ![Enregistrer le serveur \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step8.jpg)
9. Votre serveur nouvellement créé devrait apparaître sous _Serveurs DNS personnalisés_.
   ![Serveurs personnalisés \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_vpn/ios_step9.png)

C'est fait ! Votre dispositif est maintenant connecté à AdGuard DNS.

## Utilisez un profil de configuration

Un profil d'appareil iOS, également appelé "profil de configuration" par Apple, est un fichier XML signé par un certificat que vous pouvez installer manuellement sur votre appareil iOS ou déployer en utilisant une solution MDM. Il vous permet également de configurer le DNS AdGuard privé sur votre appareil.

:::note Important

Si vous utilisez un VPN, le profil de configuration sera ignoré.

:::

1. Téléchargez le profil.
2. Ouvrez les paramètres.
3. Tapez sur _Profil téléchargé_.
   ![Profil téléchargé \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step3.png)
4. Tapez sur _Installer_ et suivez les instructions à l'écran.
   ![Installer \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/ios_manual/manual_step4.png)

## Configuration du DNS brut

Si vous préférez ne pas utiliser de logiciel supplémentaire pour configurer le DNS, vous pouvez opter pour un DNS non chiffré. Il existe deux options : utiliser des adresses IP liées ou des adresses IP dédiées.

- [IP dédiées](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP liées](/private-dns/connect-devices/other-options/linked-ip.md)
