---
title: Windows
sidebar_position: 5
---

Pour connecter un appareil iOS à AdGuard DNS, commencez par l'ajouter au _tableau de bord_ :

1. Allez dans le _tableau de bord_ et cliquez sur _Connecter un nouvel appareil_.
2. Dans le menu déroulant _Type d'appareil_, sélectionnez Windows.
3. Nommez le dispositif.
   ![Connexion de l'appareil \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/choose_windows.png)

## Utilisez le Bloqueur AdGuard (option payante)

L'application AdGuard vous permet d'utiliser DNS chiffré, ce qui est parfait pour configurer AdGuard DNS sur votre appareil Windows. Vous pouvez choisir parmi les différents protocoles de chiffrement. En plus du filtrage DNS, vous obtenez également un excellent bloqueur de publicité qui fonctionne sur l'ensemble de votre système.

1. [Installez l'application](https://adguard.com/adguard-windows/overview.html) sur le dispositif que vous souhaitez connecter à AdGuard DNS.
2. Ouvrez l'application.
3. Cliquez sur _Paramètres_ en haut de l'écran d'accueil de l'application.
   ![Paramètres \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step3.png)
4. Sélectionnez l'onglet _Protection DNS_ du menu à gauche.
   ![Protection DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step4.png)
5. Cliquez sur votre serveur DNS actuellement sélectionné.
   ![Serveur DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step5.png)
6. Faites défiler l'écran vers le bas et cliquez sur _Ajouter un serveur DNS personnalisé_.
   ![Ajouter un serveur personnalisé \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step6.png)
7. Dans le champ des en-têtes DNS, collez l'une des adresses suivantes. Si vous n'êtes pas sûr de celle à privilégier, choisissez DNS-over-HTTPS.
   ![Serveur DoH \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_1.png)
   ![Créer serveur \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_2.png)
8. Cliquez sur _Enregistrer et sélectionner_.
   ![Enregistrer et sélectionner \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step8.png)
9. Le serveur DNS que vous avez ajouté apparaîtra en bas de la liste des _Serveurs DNS personnalisés_.
   ![Serveurs DNS personnalisés \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step9.png)

C'est fait ! Votre dispositif est maintenant connecté à AdGuard DNS.

## Utilisez AdGuard VPN

Tous les services VPN ne prennent pas en charge DNS chiffré. Cependant, notre VPN le fait, donc si vous avez besoin à la fois d'un VPN et d'un DNS privé, AdGuard VPN est votre option de choix.

1. Installez AdGuard VPN.
2. Ouvrez l'application et cliquez sur _Paramètres_.
3. Sélectionnez _Paramètres de l'application_.
   ![Paramètres de l'app \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step4.png)
4. Faites défiler vers le bas et sélectionnez _Serveurs DNS_.
   ![Serveurs DNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step5.png)
5. Cliquez sur _Ajouter un serveur DNS personnalisé_.
   ![Ajouter un serveur DNS personnalisé \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step6.png)
6. Dans le champ _Adresse du serveur_, collez l'une des adresses suivantes. Si vous n'êtes pas sûr de celle à privilégier, sélectionnez DNS-over-HTTPS.
   ![Serveur DoH \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_ab/windows_step7_1.png)
   ![Créer serveur \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step7_2.png)
7. Cliquez sur _Enregistrer et sélectionner_.
   ![Enregistrer et sélectionner \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/windows_vpn/windows_step8.png)

C'est fait ! Votre dispositif est maintenant connecté à AdGuard DNS.

## Utiliser le client AdGuard DNS

AdGuard DNS Client est un outil console polyvalent et multiplateforme qui vous permet de vous connecter à AdGuard DNS en utilisant des protocoles DNS chiffrés.

Des détails supplémentaires peuvent être trouvés dans [un article différent](/dns-client/overview/).

## Configuration du DNS brut

Si vous préférez ne pas utiliser de logiciel supplémentaire pour la configuration DNS, vous pouvez opter pour le DNS non chiffré. Vous avez deux choix : utiliser des IP liées ou des IP dédiées.

- [IP dédiées](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP liées](/private-dns/connect-devices/other-options/linked-ip.md)
