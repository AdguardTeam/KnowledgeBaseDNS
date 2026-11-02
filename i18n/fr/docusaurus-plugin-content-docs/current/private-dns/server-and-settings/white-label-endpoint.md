---
title: Point de terminaison en marque blanche (adresse IP du compte)
sidebar_position: 7
---

Les domaines personnalisés permettent aux partenaires de proposer AdGuard DNS sous leur propre marque. Avec la formule Entreprise, ce service peut fonctionner sur une adresse IP privée : cette fonctionnalité s'appelle _Account IP_. Les domaines pointent vers l'_Account IP_ via un enregistrement A au lieu d'un enregistrement CNAME, utilisé pour les domaines personnalisés standard.

:::note

**CNAME** pointe votre domaine vers un autre domaine (`dns.partner.com` → `cname.adguard-dns.com`). La véritable adresse IP est résolue via ce second domaine, si bien que le trafic passe par l'infrastructure partagée qu'il dessert.

**L'enregistrement A** pointe votre domaine directement vers une adresse IP (`dns.partner.com` → `203.0.113.10`). Aucun domaine intermédiaire : l'adresse vers laquelle votre domaine pointe est celle qui gère le trafic.

:::

Chaque compte peut avoir un _Account IP_, et vous pouvez y pointer plusieurs domaines. Ce n'est pas la même chose que les adresses IPv4 et IPv6 dédiées utilisées pour identifier les appareils : un _Account IP_ est l'adresse vers laquelle vos domaines personnalisés pointent.

## Comment obtenir un Account IP

Pour demander un _Account IP_, contactez votre gestionnaire de compte ou l'équipe d'assistance à l'adresse [support@adguard-dns.io](mailto:support@adguard-dns.io).

Une fois l'adresse attribuée, le bloc _Point de terminaison white-label_ apparaît dans _Paramètres_ → _Paramètres avancés_ → _Domaines personnalisés_, affichant votre _adresse IP du compte_. Jusque-là, le bloc n'est pas affiché.

![Point de terminaison en marque blanche](https://cdn.adtidy.org/content/kb/dns/enterprise/whitelabel_endpoint_en.png)

:::caution

Si votre compte quitte la formule Entreprise, l'adresse devient inactive et les domaines qui pointent vers elle cessent de fonctionner. Les domaines personnalisés restent disponibles sur le plan **Équipe**, mais uniquement via un enregistrement CNAME — pour remettre en service les domaines suspendus, ajoutez-les à nouveau en tant que domaines personnalisés standard.

L'adresse elle-même reste réservée à votre compte : si vous revenez à la formule Enterprise, vous récupérez la même.

:::

## Comment pointer un domaine vers votre adresse Account IP

La configuration suit les mêmes étapes qu'un domaine personnalisé standard, sauf que vous créez un enregistrement A au lieu d'un CNAME. De plus, pour les domaines DoH, le certificat n'est pas délivré automatiquement — vous devez importer le vôtre.

1. Dans _Domaines personnalisés_, choisissez le protocole : _Ajouter un domaine DoH_ (pour DNS-over-HTTPS) ou _Ajouter un domaine DoT/DoQ_ (pour DNS-over-TLS ou DNS-over-QUIC).

   ![Choix du protocole](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_protocol_en.png)

2. Saisissez le domaine que vous souhaitez utiliser (par exemple `dns.partner.com`), puis cliquez sur _Suivant_. Vous devez avoir accès au panneau de gestion DNS de ce domaine.

   ![Saisie du domaine](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_domain_en.png)

3. L'écran suivant affiche les valeurs de votre enregistrement DNS : votre domaine sous _Nom (hôte)_ et votre _Account IP_ sous _Valeur (pointe vers / adresse IP)_. En laissant cet écran ouvert, rendez-vous dans le panneau de contrôle de votre fournisseur DNS et créez un enregistrement A avec ces valeurs. Ne créez pas d'enregistrement CNAME — les domaines sur un _Account IP_ pointent directement vers l'adresse.

   ![Valeurs de l'enregistrement DNS](https://cdn.adtidy.org/content/kb/dns/enterprise/a_record_en.png)

4. Sur l'écran AdGuard DNS avec les valeurs de l'enregistrement, cliquez sur _Vérifier_. Si l'enregistrement n'a pas encore été propagé ou pointe ailleurs, la vérification échoue. Vérifiez l'enregistrement et réessayez dans quelques minutes.

5. Importez un certificat TLS. Les certificats ne sont pas délivrés automatiquement pour les domaines sur un _Account IP_ :

   - Pour **DoT/DoQ**, vous importez un certificat générique (`*.partner.com`), comme pour un domaine personnalisé standard.
   - Pour **DoH**, vous importez également votre propre certificat. Cela diffère du flux standard, où AdGuard DNS peut en générer un pour vous.

   Tant que vous n'avez pas ajouté de certificat, le domaine affiche le statut _Aucun certificat_ et vos clients ne peuvent pas s'y connecter.

   ![Import d'un certificat](https://cdn.adtidy.org/content/kb/dns/enterprise/account_ip_certificate_en.png)

:::note

Le renouvellement est à votre charge. Vous recevrez un rappel par e-mail avant l'expiration du certificat. Le cas échéant, votre domaine cessera de fonctionner jusqu'à ce que vous importiez un nouveau certificat.

:::

## Domaines personnalisés existants et adresse IP du compte

Les domaines ajoutés avant d'obtenir un _Account IP_ n'y sont pas transférés automatiquement. Ils continuent de fonctionner via leur enregistrement CNAME, comme avant.

Pour transférer un domaine vers votre _Account IP_, commencez par supprimer son enregistrement CNAME chez votre fournisseur DNS — un domaine ne peut pas avoir à la fois un CNAME et un enregistrement A. Supprimez ensuite le domaine dans AdGuard DNS et ajoutez-le à nouveau en suivant les étapes ci-dessus.

:::caution

Vos clients ne pourront pas utiliser le domaine entre le moment où vous le supprimez et celui où la nouvelle configuration est vérifiée.

:::

## Limitations

Un _Account IP_ change l'adresse vers laquelle votre domaine pointe. Voici ce qu'il ne couvre pas :

- L'adresse IP du compte n'est pas entièrement à marque blanche au niveau réseau. Une recherche WHOIS, RDAP ou ASN de l'adresse IP peut encore identifier AdGuard comme fournisseur de l'infrastructure IP sous-jacente.
- Le DNS inversé ne peut pas être personnalisé, donc une recherche PTR ne renverra pas votre domaine.
- La découverte des serveurs DNS (DDR) n'est pas disponible sur un _Account IP_.
- Les certificats contenant l'adresse IP dans le champ SAN ne sont pas pris en charge, vos clients se connectent donc via le nom de domaine plutôt que via l'adresse elle-même.
- L'utilisation de votre propre plage d'adresses IP (BYOIP) n'est pas prise en charge, car l'adresse est attribuée par AdGuard.
- Les domaines DNSCheck, utilisés pour vérifier la connexion DNS d'un appareil, continuent d'être résolus via l'infrastructure d'AdGuard.
