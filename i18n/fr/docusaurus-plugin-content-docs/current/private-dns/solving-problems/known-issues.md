---
title: Problèmes connus
sidebar_position: 1
---

Après avoir configuré AdGuard DNS, certains utilisateurs peuvent voir son fonctionnement incorrect : ils voient un message indiquant que leur appareil n'est pas connecté à AdGuard DNS et que les requêtes de cet appareil ne sont pas affichées dans le journal des requêtes. Cela peut se produire à cause de certains paramètres cachés dans votre navigateur ou votre système d'exploitation. Examinons plusieurs problèmes courants et leurs solutions.

:::tip

Vous pouvez vérifier l'état d'AdGuard DNS sur la [page de test](https://adguard.com/test.html).

:::

## Paramètres DNS sécurisés de Chrome

Si vous utilisez Chrome et vous ne voyez aucune requête dans votre tableau de bord AdGuard DNS, cela peut être dû au fait que Chrome utilise son propre serveur DNS. Voici comment vous pouvez désactiver cette fonction :

1. Ouvrez les paramètres de Chrome.
1. Accédez à *Confidentialité et sécurité*.
1. Sélectionnez *Sécurité*.
1. Faites défiler vers le bas jusqu'à *Utiliser DNS sécurisé*.
1. Désactivez la fonction.

![Fonction Utiliser DNS sécurisé de Chrome](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/secure-dns.png)

Si vous désactivez les propres paramètres DNS de Chrome, le navigateur utilisera le DNS spécifié dans votre système d'exploitation, qui devrait être AdGuard DNS si vous l'avez configuré correctement.

## Relais privé iCloud (Safari, macOS et iOS)

Si vous activez le relais privé iCloud dans les paramètres de votre appareil, Safari utilisera les adresses DNS d'Apple, ce qui remplacera les paramètres DNS d'AdGuard.

Voici comment vous pouvez désactiver le relais privé iCloud sur votre iPhone :

1. Ouvrez *Réglages* et touchez votre nom.
1. Sélectionnez *iCloud* → *Relais privé*.
1. Désactivez le relais privé.

![Relais privé iOS](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay.png)

Sur votre Mac :

1. Ouvrez *Paramètres du système* et cliquez sur votre nom ou *Identifiant Apple*.
1. Sélectionnez *iCloud* → *Relais privé*.
1. Désactivez le relais privé.
1. Cliquez sur *Terminé*.

![Relais privé macOS](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png)

## Protection avancée contre le suivi et le fingerprinting (Safari, à partir de iOS 17)

Après la mise à jour d'iOS 17, la protection avancée contre le suivi et le fingerprinting peut être activée dans les paramètres de Safari, ce qui pourrait potentiellement avoir un effet similaire à celui du relais privé iCloud contournant les paramètres d'AdGuard DNS.

Voici comment vous pouvez désactiver la protection avancée contre le suivi et le fingerprinting :

1. Ouvrez *Paramètres* et faites défiler jusqu'à *Safari*.
1. Tapez sur *Avancés*.
1. Désactivez *Protection avancée contre le suivi et le fingerprinting*.

![Protection avancée contre le suivi et le fingerprinting sur iOS *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)
