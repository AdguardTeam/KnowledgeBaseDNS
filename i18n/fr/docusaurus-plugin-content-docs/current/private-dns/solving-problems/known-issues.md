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
1. Scroll down and select *Apps*.
1. Go to *Safari* → *Advanced*.
1. Tap *Advanced Tracking and Fingerprinting Protection* and then *Off*.

![iOS 26.1 Tracking and Fingerprinting Protection *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/adv-tracking-browser-1.png)

For iOS versions prior to 26.1:

1. Open *Settings* and scroll down to *Safari*.
1. Tap *Advanced*.
1. Disable *Advanced Tracking and Fingerprinting Protection*.

![iOS Tracking and Fingerprinting Protection *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-tracking-and-fingerprinting.png)

## Limit IP Address Tracking on iPhone

When the Limit IP Address Tracking feature is enabled on your iPhone, it can interfere with AdGuard DNS’s ability to filter traffic.

This happens because the feature routes DNS queries from Safari (and other apps that support it) through Apple’s own private relay servers. This prevents AdGuard DNS from receiving your device’s actual IP address and processing DNS requests, resulting in disabled filtering for ads and trackers.

To restore full DNS-based filtering, you will need to disable this feature for the Wi-Fi network you are currently using.

Please follow the steps below:

1. Open *Settings* on your iPhone.
1. Tap *Wi-Fi*.
1. Find and tap the name of the Wi-Fi network you are currently connected to.
1. On the network’s settings page, toggle off the switch for *Limit IP Address Tracking.*

![Limit IP Address Tracking *mobile](https://cdn.adtidy.org/content/kb/dns/private/solving_problems/known_issues/ios-wifi-limit-ip-1.png)

DNS filtering will resume immediately after disabling this setting. Please note that you may need to repeat this process for other Wi-Fi networks you connect to in the future.
