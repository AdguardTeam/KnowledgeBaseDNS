---
title: Android
sidebar_position: 2
---

Pour connecter un appareil Android à AdGuard DNS, ajoutez-le d'abord au _tableau de bord_ :

1. Allez dans le _tableau de bord_ et cliquez sur _Connecter un nouvel appareil_.
2. Dans le menu déroulant _Type d'appareil_, sélectionnez Android.
3. Nommez le dispositif.
    ![Connexion de l'appareil \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/choose_android.png)

## Utilisez le Bloqueur AdGuard (option payante)

L'application AdGuard vous permet d'utiliser DNS chiffré, ce qui la rend parfaite pour configurer AdGuard DNS sur votre appareil Android. Vous pouvez choisir parmi les différents protocoles de chiffrement. En plus du filtrage DNS, vous obtenez également un excellent bloqueur de publicité qui fonctionne sur l'ensemble de votre système.

1. Installez [l'application AdGuard](https://adguard.com/adguard-android/overview.html) sur l'appareil que vous souhaitez connecter à AdGuard DNS.
2. Ouvrez l'application.
3. Appuyez sur l'icône du bouclier dans la barre de menu en bas de l'écran.
    ![Icône du bouclier \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step3.png)
4. Appuyez sur _Protection DNS_.
    ![Protection DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step4.png)
5. Sélectionnez _serveur DNS_.
    ![Serveur DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step5.png)
6. Faites défiler jusqu'à _Serveurs personnalisés_ et appuyez sur _Ajouter un serveur DNS_.
    ![Ajouter un serveur DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step6.png)
7. Copy one of the following DNS addresses and paste it into the _Server addresses_ field in the app. Si vous n’êtes pas sûr de l’option à utiliser, sélectionnez _DNS-over-HTTPS_.
    ![DoH \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_1.png)
    ![Serveur DNS personnalisé \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step7_2.png)
8. Appuyez sur _Ajouter_.
9. Le serveur DNS que vous avez ajouté apparaîtra en bas de la liste des _Serveurs personnalisés_. Pour le sélectionner, appuyez sur son nom ou le bouton radio à côté.
    ![Sélectionner le serveur DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step_9.png)
10. Appuyez sur _Enregistrer et sélectionner_.
    ![Enregistrer et sélectionner \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_ab/android_step10.png)

C'est fait ! Votre dispositif est maintenant connecté à AdGuard DNS.

## Utilisez AdGuard VPN

Tous les services VPN ne prennent pas en charge DNS chiffré. Cependant, notre VPN le fait, donc si vous avez besoin à la fois d'un VPN et d'un DNS privé, AdGuard VPN est votre option de choix.

1. Installez [l'application AdGuard VPN](https://adguard-vpn.com/android/overview.html) sur l'appareil que vous souhaitez connecter à AdGuard DNS.
2. Ouvrez l'application.
3. Dans la barre de menu en bas de l'écran, appuyez sur l'icône d'engrenage.
    ![Icône d'engrenage \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step3.png)
4. Ouvrez _Paramètres de l'application_.
    ![Paramètres de l'application \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step4.png)
5. Sélectionnez _serveur DNS_.
    ![Serveur DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step5.png)
6. Faites défiler et appuyez sur _Ajouter un serveur DNS personnalisé_.
    ![Ajouter un serveur DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step6.png)
7. Copy one of the following DNS addresses and paste it into the _DNS server addresses_ field in the app. Si vous n'êtes pas sûr de laquelle utiliser, sélectionnez DNS-over-HTTPS.
    ![DoH \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_1.png)
    ![Serveur DNS personnalisé \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step7_2.png)
8. Appuyez sur _Enregistrer et sélectionner_.
    ![Ajouter un serveur DNS \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_vpn/android_step8.png)
9. Le serveur DNS que vous avez ajouté apparaîtra en bas de la liste des _Serveurs DNS personnalisés_.

C'est fait ! Votre dispositif est maintenant connecté à AdGuard DNS.

## Configurer DNS privé manuellement

Vous pouvez configurer votre serveur DNS dans les paramètres de votre appareil. Veuillez noter que les appareils Android ne prennent en charge que le protocole DNS-over-TLS.

1. Allez vers _Paramètres_ → _Wi-Fi & Internet_ (ou _Réseau et Internet_, selon votre version de l'OS).
    ![Paramètres \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step1.png)
2. Sélectionnez _Avancés_ et tapez sur _DNS privé_.
    ![DNS privé \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step2.png)
3. Sélectionnez l'option _nom d'hôte du fournisseur DNS privé_ et saisissez l'adresse de votre serveur personnelle : `{Your_Device_ID}.d.adguard-dns.com`.
4. Tapez _Enregistrer_.
    ![DNS privé \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/android_manual/manual_step4.png)
    C'est tout ! Votre dispositif est maintenant connecté à AdGuard DNS.

## Configuration du DNS brut

Si vous préférez ne pas utiliser de logiciel supplémentaire pour la configuration DNS, vous pouvez opter pour le DNS non chiffré. Vous avez deux choix : utiliser des IP liées ou des IP dédiées.

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
