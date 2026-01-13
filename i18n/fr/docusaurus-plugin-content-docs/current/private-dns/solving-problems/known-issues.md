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

If you disable Chrome’s own DNS settings, the browser will use the DNS specified in your operating system, which should be AdGuard DNS if you’ve set it up correctly.

## Relais privé iCloud (Safari, macOS et iOS)

Si vous activez le relais privé iCloud dans les paramètres de votre appareil, Safari utilisera les adresses DNS d'Apple, ce qui remplacera les paramètres DNS d'AdGuard.

Voici comment vous pouvez désactiver le relais privé iCloud sur votre iPhone :

1. Ouvrez *Réglages* et touchez votre nom.
1. Sélectionnez *iCloud* → *Relais privé*.
1. Désactivez le relais privé.

![Relais privé iOS](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/private-relay-ios-1.png)

Sur votre Mac :

1. Ouvrez *Paramètres du système* et cliquez sur votre nom ou *Identifiant Apple*.
1. Sélectionnez *iCloud* → *Relais privé*.
1. Désactivez le relais privé.
1. Cliquez sur *Terminé*.

![Relais privé macOS](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/mac-private-relay.png)

## Protection avancée contre le suivi et le fingerprinting (Safari, à partir de iOS 17)

Après la mise à jour d'iOS 17, la protection avancée contre le suivi et le fingerprinting peut être activée dans les paramètres de Safari, ce qui pourrait potentiellement avoir un effet similaire à celui du relais privé iCloud contournant les paramètres d'AdGuard DNS.

Voici comment vous pouvez désactiver la protection avancée contre le suivi et le fingerprinting :

For iOS 26.1 and later versions:

1. Go to *Settings*.
1. Défilez vers le bas et sélectionnez *Applications*.
1. Allez dans *Safari* → *Avancé*.
1. Appuyez sur *Protection avancée contre le suivi et le fingerprinting*, puis sur *Désactivé*.

![iOS 26.1 Protection contre le suivi et le fingerprinting *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/adv-tracking-browser-1.png)

Pour les versions d'iOS antérieures à 26.1 :

1. Ouvrez *Paramètres* et faites défiler jusqu'à *Safari*.
1. Tapez sur *Avancés*.
1. Désactivez *Protection avancée contre le suivi et le fingerprinting*.

![Protection avancée contre le suivi et le fingerprinting sur iOS *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)

## Limiter le suivi des adresses IP sur l'iPhone

Lorsque la fonction Limiter le suivi des adresses IP est activée sur votre iPhone, elle peut interférer avec la capacité d'AdGuard DNS à filtrer le trafic.

Cela est dû au fait que la fonction achemine les requêtes DNS provenant de Safari (et d'autres applications qui la prennent en charge) par l'intermédiaire de serveurs relais privés d'Apple. Cela empêche AdGuard DNS de recevoir l'adresse IP réelle de votre appareil et de traiter les requêtes DNS, ce qui désactive le filtrage des publicités et des traqueurs.

Pour rétablir le filtrage complet basé sur le DNS, vous devez désactiver cette fonction pour le réseau Wi-Fi que vous utilisez actuellement.

Veuillez suivre les étapes ci-dessous :

1. Ouvrez les *Réglages* sur votre iPhone.
1. Appuyez sur *Wi-Fi*.
1. Trouvez et appuyez sur le nom du réseau Wi-Fi auquel vous êtes actuellement connecté.
1. Sur la page des paramètres du réseau, désactivez l'option *Limiter le suivi des adresses IP.*

![Limiter le suivi des adresses IP *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-wifi-limit-ip-1.png)

Le filtrage DNS reprend immédiatement après la désactivation de ce paramètre. Notez que vous devrez peut-être répéter cette opération pour d'autres réseaux Wi-Fi auxquels vous vous connecterez à l'avenir.
