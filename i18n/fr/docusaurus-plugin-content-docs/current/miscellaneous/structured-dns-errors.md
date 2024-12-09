---
title: Structured DNS Errors (SDE)
sidebar_position: 5
---

Avec la sortie d'AdGuard DNS v2.10, AdGuard est devenu le premier résolveur DNS public à mettre en œuvre la prise en charge des erreurs DNS structurées ou [SDE _(Structured DNS Errors)_](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/), une mise à jour de la [RFC 8914](https://datatracker.ietf.org/doc/rfc8914/). Cette fonctionnalité permet aux serveurs DNS de fournir des informations détaillées sur les sites web bloqués directement dans la réponse DNS, plutôt que de s'appuyer sur des messages de navigateur génériques. Dans cet article, nous expliquerons ce que sont les _SDE_ et comment elles fonctionnent.

## Qu'est-ce que c'est que les SDE

Lorsqu'une requête vers un domaine de publicité ou de suivi est bloquée, l'utilisateur peut voir des espaces vides sur un site web ou ne même pas remarquer que le filtrage DNS a eu lieu. Cependant, si un site web entier est bloqué au niveau DNS, l'utilisateur ne pourra absolument pas accéder à la page. Lors des tentatives d'accès à un site web bloqué, l'utilisateur peut voir une erreur générique "Ce site est inaccessible" affichée par le navigateur.

![Erreur "Ce site est inaccessible"](https://cdn.adtidy.org/content/blog/dns/dns_error.png)

Ces erreurs n'expliquent pas ce qui s'est passé et pourquoi. Les utilisateurs ne savent donc pas pourquoi un site web est inaccessible, ce qui les amène souvent à penser que leur connexion Internet ou leur résolveur DNS est défectueux.

Pour clarifier ce point, les serveurs DNS pourraient rediriger les utilisateurs vers leur propre page avec une explication. Cependant, les sites web HTTPS (qui constituent la majorité des sites web) nécessiteraient un certificat séparé.

![Erreur de certificat](https://cdn.adtidy.org/content/blog/dns/certificate_error.png?1)

Il existe une solution plus simple : [SDE (Erreurs DNS structurées)](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/). Le concept de SDE s'appuie sur les bases des [_Erreurs DNS étendues_ (RFC 8914)](https://datatracker.ietf.org/doc/rfc8914/), qui ont introduit la possibilité d'inclure des informations d'erreur supplémentaires dans les réponses DNS. Le projet SDE va encore plus loin en utilisant [I-JSON](https://www.rfc-editor.org/rfc/rfc7493) (un profil restreint de JSON) pour formater les informations d'une telle manière où les navigateurs et les applications clientes puissent facilement les analyser.

Les données SDE sont incluses dans le champ `EXTRA-TEXT` de la réponse DNS. Les contenus :

- `j` (justification): Raison du blocage
- `c` (contact): Informations de contact pour les demandes si la page a été bloquée par erreur
- `o` (organisation) : Organisation responsable du filtrage DNS dans ce cas (facultatif)
- `s` (sous-erreur) : Le code de sous-erreur pour ce filtrage DNS particulier (facultatif)

Un tel système améliore la transparence entre les services DNS et les utilisateurs.

### Que faut-il pour mettre en œuvre SDE

Bien qu'AdGuard DNS ait mis en œuvre la prise en charge des erreurs DNS structurées, les navigateurs ne prennent actuellement pas en charge nativement l'analyse et l'affichage des données SDE. Pour que les utilisateurs puissent voir des explications détaillées dans leurs navigateurs lorsqu'un site web est bloqué, les développeurs de navigateurs doivent adopter et prendre en charge le projet de spécification SDE.

### Extension démo AdGuard DNS pour SDE

Pour montrer comment fonctionnent les SDE, AdGuard DNS a développé une extension de navigateur de démonstration qui montre comment les _SDE_ pourraient fonctionner si les navigateurs les prenaient en charge. Si vous essayez de visiter un site web bloqué par AdGuard DNS avec cette extension activée, vous verrez une page d'explication détaillée avec les informations fournies via SDE, telles que la raison du blocage, les coordonnées et l'organisation responsable.

![Page d'explication](https://cdn.adtidy.org/blog/new/jlkdbaccess_blocked.png)

Vous pouvez installer l'extension depuis le [Chrome Web Store](https://chromewebstore.google.com/detail/oeinmjfnchfhaabhchfjkbdpmgeageen) ou depuis [GitHub](https://github.com/AdguardTeam/dns-sde-extension/).

Si vous voulez voir à quoi cela ressemble au niveau DNS, vous pouvez utiliser la commande `dig` et chercher `EDE` dans la sortie.

```text
% dig @94.140.14.14 'ad.doubleclick.net' A IN +ednsopt=15:0000

...

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; EDE: 17 (Filtered): ({"j":"Filtered by AdGuard DNS","o":"AdGuard DNS","c":["mailto:support@adguard-dns.io"]})
;; QUESTION SECTION:
;ad.doubleclick.net.  IN A

...
```
