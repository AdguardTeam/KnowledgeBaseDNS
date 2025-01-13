---
title: macOS
sidebar_position: 4
---

Pour connecter un appareil macOS à AdGuard DNS, ajoutez-le d'abord au _tableau de bord_ :

1. Allez dans le _tableau de bord_ et cliquez sur _Connecter un nouvel appareil_.
2. Dans le menu déroulant _Type d'appareil_, sélectionnez Mac.
3. Nommez le dispositif.
   ![Connexion de l'appareil \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/choose_mac.png)

## Utilisez le Bloqueur AdGuard (option payante)

L'application AdGuard vous permet d'utiliser DNS crypté, ce qui est idéal pour configurer AdGuard DNS sur votre appareil macOS. Vous pouvez choisir parmi les différents protocoles de chiffrement. En plus du filtrage DNS, vous obtenez également un excellent bloqueur de publicité qui fonctionne sur l'ensemble de votre système.

1. [Installez l'application](https://adguard.com/adguard-mac/overview.html) sur l'appareil que vous souhaitez connecter à AdGuard DNS.
2. Ouvrez l'application.
3. Cliquez sur l'icône dans le coin supérieur droit.
   ![Icône de protection \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step3.png)
4. Sélectionnez _Préférences..._.
   ![Préférences \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step4.png)
5. Cliquez sur l'onglet _DNS_ dans la ligne supérieure d'icônes.
   ![Onglet \*DNS](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step5.png)
6. Activez la protection DNS en cochant la case en haut.
   ![Protection DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step6.png)
7. Cliquez sur _+_ dans le coin inférieur gauche.
   ![Cliquez + \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step7.png)
8. Copiez l'une des adresses DNS suivantes et collez-la dans le champ _serveurs DNS_ de l'application. Si vous n'êtes pas sûr de celui à privilégier, choisissez _DNS-over-HTTPS_.
   ![Serveur DoH \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_1.png)
   ![Serveur DNS personnalisé \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step8_2.png)
9. Cliquez sur _Enregistrer et choisir_.
   ![Enregistrer et Choisir \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step9.png)
10. Votre serveur nouvellement créé devrait apparaître en bas de la liste.
    ![Fournisseurs \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_ab/mac_step10.png)

C'est fait ! Votre dispositif est maintenant connecté à AdGuard DNS.

## Utilisation de AdGuard VPN

Tous les services VPN ne prennent pas en charge DNS chiffré. Cependant, notre VPN le fait, donc si vous avez besoin à la fois d'un VPN et d'un DNS privé, AdGuard VPN est votre option de choix.

1. Installez l'[application AdGuard VPN](https://adguard-vpn.com/mac/overview.html) sur l'appareil que vous souhaitez connecter à AdGuard DNS.
2. Ouvrez l'application AdGuard VPN.
3. Ouvrez _Paramètres_ → _Paramètres de l'application_ → _Serveurs DNS_ → _Ajouter un serveur personnalisé_.
   ![Ajouter un serveur personnalisé \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step3.png)
4. Copiez l'une des adresses DNS suivantes et collez-la dans le champ de texte _adresses des serveurs DNS_. Si vous n'êtes pas sûr du choix, sélectionnez DNS-over-HTTPS.
   ![Serveurs DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step4.png)
5. Cliquez sur _Enregistrer et sélectionner_.
6. Le serveur DNS que vous avez ajouté apparaîtra en bas de la liste des _Serveurs DNS personnalisés_.
   ![Serveurs DNS personnalisés \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_vpn/mac_step6.png)

C'est fait ! Votre dispositif est maintenant connecté à AdGuard DNS.

## Utilisez un profil de configuration

Un profil d'appareil macOS, également appelé "profil de configuration" par Apple, est un fichier XML signé par un certificat que vous pouvez installer manuellement sur votre appareil ou déployer à l'aide d'une solution MDM. Il vous permet également de configurer le DNS AdGuard privé sur votre appareil.

:::note Important

Si vous utilisez un VPN, le profil de configuration sera ignoré.

:::

1. Sur l'appareil que vous souhaitez connecter à AdGuard DNS, téléchargez le profil de configuration.
2. Choisissez le menu Apple → _Paramètres système_, cliquez sur _Confidentialité et sécurité_ dans la barre latérale, puis cliquez sur _Profils_ à droite (vous devrez peut-être faire défiler vers le bas).
   ![Profil téléchargé \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step2.png)
3. Dans la section _Téléchargés_, double-cliquez sur le profil.
   ![Téléchargé \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step3.png)
4. Vérifiez le contenu du profil et cliquez sur _Installer_.
   ![Installer \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/mac_profile/mac_step4.png)
5. Saisissez le mot de passe administrateur et cliquez sur _OK_.

C'est fait ! Votre dispositif est maintenant connecté à AdGuard DNS.

## Configuration du DNS brut

Si vous préférez ne pas utiliser de logiciel supplémentaire pour la configuration DNS, vous pouvez opter pour le DNS non chiffré. Vous avez deux choix : utiliser des IP liées ou des IP dédiées.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
