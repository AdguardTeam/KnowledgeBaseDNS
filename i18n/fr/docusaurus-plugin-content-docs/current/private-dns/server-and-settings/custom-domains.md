---
title: Domaines personnalisés
sidebar_position: 6
---

Les abonnés à AdGuard DNS peuvent configurer leurs propres domaines (comme \`dns.example.com\`) au lieu du domaine par défaut \`d.adguard-dns.com\`. Cette fonctionnalité est conçue pour aider les entreprises à aligner la Protection DNS sur leur infrastructure en garantissant une intégration fluide avec les politiques de sécurité d’entreprise, tout en maintenant toutes les fonctionnalités de blocage des publicités et de confidentialité fournies par AdGuard DNS.

:::note

Les domaines personnalisés sont disponibles pour les utilisateurs des plans **Entreprise** et **Équipe**.

:::

## Comment configurer un domaine personnalisé

Pour configurer un domaine personnalisé, connectez-vous à votre tableau de bord AdGuard DNS et accédez aux [_Paramètres du compte_](https://adguard-dns.io/en/dashboard/account). Faites défiler vers le bas jusqu'aux _Paramètres avancés_ et sélectionnez _Domaines personnalisés_. Ensuite, vous devrez suivre les trois étapes principales.

1. Choisissez le protocole. Ici, vous avez deux options :

   - Ajouter le domaine DoH (pour DNS-over-HTTPS)
   - Ajouter un domaine DoT/DoQ (pour DNS-over-TLS ou DNS-over-QUIC)

   ![Choose the protocol \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_1.png)

2. Après avoir sélectionné le protocole, saisissez le nom de domaine préféré (par exemple, \`exemple.com\`) et vérifiez l'enregistrement CNAME.

   ![CNAME record \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_2.png)

3. Configurez un certificat. Pour les domaines DoT/DoQ, vous devrez téléverser un certificat TLS de type wildcard. Si vous choisissez DoH, vous pouvez soit fournir votre propre certificat TLS, soit laisser AdGuard DNS en générer un pour vous. Une fois vérifié, votre domaine personnalisé apparaîtra dans le tableau de bord, prêt à être utilisé.

   ![Custom domain list \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_3.png)
