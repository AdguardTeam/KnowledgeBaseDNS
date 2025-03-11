---
title: Syntaxe des règles de filtrage DNS
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 4
---

:::info

Nous vous montrons ici comment écrire des règles de filtrage DNS personnalisées à utiliser dans les produits AdGuard

Quick links: [Download AdGuard Ad Blocker](https://agrd.io/download-kb-adblock), [Get AdGuard Home](https://github.com/AdguardTeam/AdGuardHome#getting-started), [Try AdGuard DNS](https://agrd.io/download-dns)

:::

## Introduction {#introduction}

Vous pouvez utiliser la syntaxe de règles de filtrage DNS AdGuard pour rendre les règles plus flexibles, pour qu’elles puissent bloquer le contenu selon vos préférences. La syntaxe des règles de filtrage DNS AdGuard peut être utilisée dans des produits AdGuard différents, tels que AdGuard Home, AdGuard DNS, AdGuard pour Windows/Mac/Android.

Il y existe trois approches différentes pour écrire des listes de blocage d’hôtes :

- [Adblock-style syntax][]: the modern approach to writing filtering rules based on using a subset of the Adblock-style rule syntax. De cette façon, les listes de blocage sont compatibles avec les bloqueurs de publicités du navigateur.

- [`/etc/hosts` syntaxe](#etc-hosts-syntax): la vieille approche éprouvée qui utilise la même syntaxe que les systèmes d'exploitation pour leurs fichiers hosts.

- [Domains-only syntax](#domains-only-syntax): une simple liste de noms de domaine.

If you are creating a blocklist, we recommend using the [Adblock-style syntax][]. Elle présente quelques avantages importants par rapport à l’ancienne syntaxe :

- **Taille des listes de blocage.** L'utilisation de la correspondance de modèles vous permet d'avoir une seule règle au lieu de centaines d'entrées `/etc/hosts`.

- **Compatibilité.** Votre liste de blocage sera compatible avec les bloqueurs de publicité des navigateurs et il sera plus facile de partager des règles avec une liste de filtrage des navigateurs.

- **Extensibilité.** Au cours de la dernière décennie, la syntaxe de style Adblock a beaucoup évolué, et nous ne voyons aucune raison de ne pas l’étendre encore plus loin et d’offrir des fonctionnalités supplémentaires pour les bloqueurs au niveau du réseau.

Si vous maintenez une liste de blocage de style `/etc/hosts` ou plusieurs listes de filtrage (quel que soit le type), nous fournissons un outil pour la compilation de listes de blocage. We named it [Hostlist compiler][] and we use it ourselves to create [AdGuard DNS filter][].

## Basic examples {#basic-examples}

- `||example.org^`: bloque l'accès au domaine `example.org` et à tous ses sous-domaines, comme `www.example.org`.

- `@@||example.org^`: débloque l'accès au domaine `example.org` et à tous ses sous-domaines.

- `1.2.3.4 example.org`: (attention, ancienne `/etc/hosts` -syntaxe) dans AdGuard Home, réponse avec `1.2.3.4` aux requêtes pour `example.org` domaine mais **pas** ses sous-domaines. Dans AdGuard DNS Privé, bloque l'accès à `example.org`. `www.example.org` reste autorisé.

  Dans AdGuard Home, utiliser l’adresse IP non spécifiée (`0.0.0.0`) ou une adresse locale (`127.0.0.1` et les mêmes) pour un hôte est fondamentalement la même chose que de bloquer cet hôte.

  ```none
  # Retourne l’adresse IP 1.2.3.4 pour example.org.
  1.2.3.4 example.org
  # Bloque example.org en répondant avec 0.0.0.0.
  0.0.0.0 example.org
  ```

- `example.org`: une règle de domaine simple. Bloque le domaine `example.org` mais **pas** ses sous-domaines. `www.example.org` reste autorisé.

- `! Voici un commentaire ` et `# aussi un commentaire `: Comments.

- `/REGEX/`: bloquez l’accès aux domaines correspondant à l’expression régulière spécifiée.

## Adblock-style syntax {#adblock-style-syntax}

This is a subset of the [traditional Adblock-style syntax][] which is used by browser ad blockers.

```none
     règle = ["@@"] modèle [" $" modificateurs]
Modificateurs = [modier0, modier1 [, … [, modifié]]]
```

- `pattern`: le masque de nom d’hôte. Chaque nom d'hôte est comparé à ce masque. Le modèle peut également contenir des caractères spéciaux, qui sont décrits ci-dessous.

- `@@`: le marqueur utilisé dans les règles d’exception. Commencez votre règle avec ce marqueur si vous voulez arrêter le filtrage pour les noms d’hôtes correspondants.

- `modificateurs`: paramètres qui clarifient la règle. Ils peuvent limiter la portée de la règle ou même modifier complètement son fonctionnement.

### Special characters {#special-characters}

- `*`: le caractère générique. Il est utilisé pour représenter n’importe quel ensemble de caractères. Cela peut aussi être une chaîne vide ou une chaîne de n’importe quelle longueur.

- `||`: correspond au début d’un nom d’hôte, y compris un sous-domaine. Par exemple, `||example.org` correspond à `example.org` et `test.example.org` mais pas `testexample.org`.

- `^`: le caractère séparateur. Contrairement au blocage des publicités en navigateur, il n'y a rien à séparer dans un nom d'hôte, donc le seul but de ce caractère est de marquer la fin du nom d'hôte.

- `|`: un pointeur vers le début ou la fin du nom d'hôte. La valeur dépend du placement des caractères dans le masque. Par exemple, la règle `ample.org|` correspond à `example.org` mais pas à `example.org.com`. `|exemple` correspond à `exemple.org` mais pas à `test.exemple`.

### Regular expressions {#regular-expressions}

If you want even more flexibility in making rules, you can use [regular expressions][regexp] instead of the default simplified matching syntax. Si vous souhaitez utiliser une expression régulière, le modèle doit ressembler à ceci :

```none
modèle = "/" regexp "/"
```

**Exemples :**

- `/exemple.*/` bloquera les hôtes correspondant à l'`exemple*` regexp.

- `@@/exemple.*/$important` débloquera les hôtes correspondant à l'`exemple*` regexp. Notez que cette règle implique également le modificateur `important`.

### Comments {#comments}

Toute ligne commençant par un point d'exclamation ou un dièse est un commentaire et sera ignorée par le moteur de filtrage. Les commentaires sont généralement placés au-dessus des règles et utilisés pour décrire ce que fait une règle.

**Exemple :**

```none
! Ceci est un commentaire.
# Ceci est aussi un commentaire.
```

### Rule modifiers {#rule-modifiers}

Vous pouvez modifier le comportement d'une règle en ajoutant des modificateurs. Les modificateurs doivent être situés à la fin de la règle après le caractère `$` et être séparés par des virgules.

**Exemples :**

- ```none ||example.org^$important
   ```

  `||example.org^` est le modèle correspondant. `$` est le délimiteur, qui signale que le reste de la règle sont des modificateurs. `important` est le modificateur.

- Vous pouvez utiliser plusieurs modificateurs dans une règle. Dans ce cas, séparez-les par des virgules :

  ```none
  ||example.org^$client=127.0.0.1,dnstype=A
  ```

  `||example.org^` est le modèle correspondant. `$` est le délimiteur, qui signale que le reste de la règle sont des modificateurs. `client=127.0.0.1` is the [`client`][] modifier with its value, `127.0.0.1`. `,` is the delimiter between modifiers. And finally, `dnstype=A` is the [`dnstype`][] modifier with its value, `A`.

**ATTENTION :** Si une règle contient un modificateur non répertorié dans ce document, toute la règle **doit être ignorée**. De cette façon, nous évitons les faux positifs lorsque les gens essaient d'utiliser les listes de filtres des bloqueurs de publicités de navigateur non modifiés comme EasyList ou EasyPrivacy.

#### `client` {#client-modifier}

Le modificateur `client` permet de spécifier les clients auxquels cette règle s'applique. Il existe deux façons principales d'identifier un client :

- Par leur adresse IP ou leur préfixe CIDR. Cette méthode fonctionne pour tous les types de clients.

- Par leur nom. Cette méthode ne fonctionne que pour les clients persistants (dans AdGuard Home) et les appareils (dans AdGuard DNS Privé), que vous avez ajoutés manuellement.

  **REMARQUE :** Dans AdGuard Home, les ID client ne sont actuellement pas pris en charge, seuls les noms le sont. Si vous avez ajouté un client portant le nom "My client" et le numéro de client `my-client` , écrivez votre modificateur sous la forme `$client='My Client'` au lieu de `$client=my-client`.

La syntaxe est :

```none
$client=value1|value2|...
```

Vous pouvez également exclure des clients en ajoutant un caractère `~` avant la valeur. Dans ce cas, la règle n'est pas appliquée aux requêtes DNS de ce client.

```none
$client=~value1
```

Les noms de client contiennent généralement des espaces ou d'autres caractères spéciaux, c'est pourquoi vous devez placer le nom entre guillemets. Les guillemets ASCII simples et doubles sont pris en charge. Utilisez la barre oblique inverse (`\`) pour échapper les guillemets (`"` et `'`), les virgules (`,`) et les barres verticales (`|`).

**REMARQUE :** Lorsque vous excluez un client, vous **devez** placer `~` en dehors des guillemets.

**Exemples :**

- `@@||*^$client=127.0.0.1`: débloquer tout pour localhost.

- `||example.org^$client='Frank\'s laptop'`: bloque `example.org` pour le client nommé `Frank's laptop` uniquement. Notez que les guillemets (`'`) dans le nom doivent être échappés.

- `||example.org^$client=~'Mary\'s\, John\'s\, and Boris\'s laptops'` : bloc `example.org` pour tout le monde sauf le client nommé `Mary's, John's, and Boris's laptops`. Notez que la virgule (`,`) doit également être échappée.

- `||example.org^$client=~Mom|~Dad|Kids`: bloquer `exemple.org` pour `Kids`, mais pas pour `Mom` et `Dad`. Cet exemple montre comment spécifier plusieurs clients dans une règle.

- `||example.org^$client=192.168.0.0/24`: bloquer `example.org` pour tous les clients dont les adresses IP sont comprises entre `192.168.0.0` et `192.168.0.255`.

#### `denyallow` {#denyallow-modifier}

Vous pouvez utiliser le modificateur `denyallow` pour exclure des domaines de la règle de blocage. Pour ajouter plusieurs domaines à une règle, utilisez le `|` caractère comme séparateur.

La syntaxe est :

```none
$denyallow=domain1|domain2|...
```

Ce modificateur permet d'éviter de créer des règles d'exception inutiles quand notre règle de blocage couvre trop de domaines. Vous voudrez peut-être tout bloquer sauf quelques domaines TLD. Vous pouvez utiliser l'approche standard, c'est-à-dire des règles comme celle-ci :

```none
! Bloquer tout.
/.*/

! Débloquer quelques TLD.
@@||com^
@@||net^
```

Le problème avec cette approche est que de cette façon, vous débloquerez également les domaines de suivi situés sur ces TLD (c'est-à-dire `google-analytics.com`). Voici comment résoudre ce problème avec `denyallow` :

```none
*$denyallow=com|net
```

**Exemples :**

- `*$denyallow=com|net`: bloque tout sauf `*.com` et `*.net`.

- `@@*$denyallow=com|net`: débloque tout sauf `*.com` et `*.net`.

- `||example.org^$denyallow=sub.example.org`. bloque `example.org` et `*.example.org` mais ne bloque pas `sub.example.org`.

#### `dnstype` {#dnstype-modifier}

Le modificateur `dnstype` permet de spécifier le type de requête ou de réponse DNS sur lequel cette règle sera déclenchée.

La syntaxe est :

```none
$dnstype=value1|value2|...
$dnstype=~value1|~value2|~...
```

Les noms des types ne sont pas sensibles à la casse, mais sont validés par rapport à un ensemble de types d'enregistrements de ressources DNS (RR) réels.

Ne combinez pas les règles d'exclusion avec celles d'inclusion. Ceci :

```none
$dnstype=~value1|value2
```

est équivalent à ceci :

```none
$dnstype=value2
```

**Exemples :**

- `||example.org^$dnstype=AAAA`: bloque les requêtes DNS pour les adresses IPv6 de `example.org`.

- `||example.org^$dnstype=~A|~CNAME`: n'autorise que les requêtes DNS du type `A` et `CNAME` pour `example.org`, et bloque le reste.

**ATTENTION :** Avant la version **v0.108.0,** AdGuard Home utilisait le type de requête pour filtrer les enregistrements de réponse, par opposition au type de l'enregistrement de réponse lui-même.  Cela posait des problèmes, puisque dans ce cas-là vous ne pouviez pas écrire de règles autorisant certains enregistrements `CNAME` dans les réponses aux requêtes `A` et `AAAA` . Dans **v0.108.0** ce comportement a été modifié, alors maintenant ceci :

```none
||canon.example.com^$dnstype=~CNAME
```

permet d'éviter le filtrage de la réponse suivante :

```none
REPONSES :
->  example.com
    canonical name = canon.example.com.
    ttl = 60
->  canon.example.com
    internet address = 1.2.3.4
    ttl = 60
```

#### `dnsrewrite` {#dnsrewrite-modifier}

Le modificateur de réponse `dnsrewrite` permet de remplacer le contenu de la réponse à la requête DNS pour les hôtes correspondants. Tenez compte que ce modificateur dans AdGuard Home fonctionne dans toutes les règles, mais dans AdGuard DNS Privé - uniquement dans les règles personnalisées.

**Rules with the `dnsrewrite` response modifier have higher priority than other rules in AdGuard Home and AdGuard DNS.**

Responses to all requests for a host matching a `dnsrewrite` rule will be replaced. The answer section of the replacement response will only contain RRs that match the request's query type and, possibly, CNAME RRs. Note that this means that responses to some requests may become empty (`NODATA`) if the host matches a `dnsrewrite` rule.

La syntaxe abrégée est la suivante :

```none
$dnsrewrite=1.2.3.4
$dnsrewrite=abcd::1234
$dnsrewrite=example.net
$dnsrewrite=REFUSED
```

Les mots clés DOIVENT être en majuscules (par exemple `NOERROR`). Les réécritures de mots-clés ont priorité sur les autres et donneront une réponse vide avec un code de réponse approprié.

La syntaxe complète est de la forme `RCODE;RRTYPE;VALUE`:

```none
$dnsrewrite=NOERROR;A;1.2.3.4
$dnsrewrite=NOERROR;AAAA;abcd::1234
$dnsrewrite=NOERROR;CNAME;example.net
$dnsrewrite=REFUSED;;
```

Le modificateur `$dnsrewrite` avec le code de réponse `NOERROR` peut également avoir des champs `RRTYPE` et `VALUE` vides.

Le `CNAME` est spécial, car AdGuard Home résoudra l'hôte et ajoutera ses informations à la réponse. Autrement dit, si `example.net` a l'IP `1.2.3.4`et l'utilisateur a ceci dans ses règles de filtrage :

```none
||example.com^$dnsrewrite=example.net
! Soit :
||example.com^$dnsrewrite=NOERROR;CNAME;example.net
```

alors la réponse sera de cette sorte :

```sh
nslookup example.com my.adguard.local
```

```none
Serveur : my.adguard.local
Adresse : 127.0.0.1#53

Réponse non officielle :
exemple.com canonical name = exemple.net.
Nom : example.net
Adresse : 1.2.3.4
```

Ensuite, la réécriture `CNAME`. Après cela, les valeurs de tous les autres enregistrements sont additionnées en une seule réponse, donc ceci :

```none
||example.com^$dnsrewrite=NOERROR;A;1.2.3.4
||example.com^$dnsrewrite=NOERROR;A;1.2.3.5
```

entraînera une réponse avec deux enregistrements `A`.

Types de RR actuellement pris en charge avec des exemples :

- `||4.3.2.1.in-addr.arpa^$dnsrewrite=NOERROR;PTR;example.net.` adds a `PTR` record for reverse DNS. Les requêtes DNS inversées pour `1.2.3.4` au serveur DNS donneront `example.net`.

  **ATTENTION :** l'adresse IP DOIT être dans l'ordre inverse. See [RFC 1035][rfc1035].

- `||example.com^$dnsrewrite=NOERROR;A;1.2.3.4` ajoute un enregistrement `A` avec la valeur `1.2.3.4`.

- `||example.com^$dnsrewrite=NOERROR;AAAA;abcd::1234` ajoute un enregistrement `AAAA` avec la valeur `abcd::1234`.

- `||example.com^$dnsrewrite=NOERROR;CNAME;example.org` ajoute un enregistrement `CNAME`. Voir l'explication ci-dessus.

- `||example.com^$dnsrewrite=NOERROR;HTTPS;32 example.com alpn=h3` ajoute un enregistrement `HTTPS`. Seul un sous-ensemble de valeurs de paramètres est pris en charge : les valeurs doivent être `contiguës à` et, lorsqu'une `liste de valeurs` est `attendue`, une seule valeur est actuellement prise en charge :

   ```none
   ipv4hint=127.0.0.1 // Pris en charge.
   ipv4hint="127.0.0.1" // Non pris en charge.
   ipv4hint=127.0.0.1,127.0.0.2   // Non pris en charge.
   ipv4hint="127.0.0.1,127.0.0.2"  // Non pris en charge.
   ```

  Cela changera à l’avenir.

- `||example.com^$dnsrewrite=NOERROR;MX;32 example.mail` ajoute un enregistrement `MX` avec la valeur de priorité `32` et la valeur d'échange `example.mail`.

- `||example.com^$dnsrewrite=NOERROR;SVCB;32 example.com alpn=h3` ajoute une valeur `SVCB`. Voir l'exemple `HTTPS` ci-dessus.

- `||example.com^$dnsrewrite=NOERROR;TXT;hello_world` ajoute un enregistrement `TXT` avec la valeur `hello_world`.

- `||_svctype._tcp.example.com^$dnsrewrite=NOERROR;SRV;10 60 8080 example.com` ajoute un enregistrement `SRV` avec la valeur de priorité `10`, la valeur de pondération `60`, le port`8080`et la valeur cible `example.com`.

- `||example.com^$dnsrewrite=NXDOMAIN;;` répond par un code `NXDOMAIN`.

- `$dnstype=AAAA,denyallow=example.org,dnsrewrite=NOERROR ;;` fait retour avec des réponses `NOERROR` vides pour toutes requêtes `AAA` sauf celles pour `example.org`.

Exception rules unblock one or all rules:

- `@@||example.com^$dnsrewrite` unblocks all DNS rewrite rules.

- `@@||example.com^$dnsrewrite=1.2.3.4` unblocks the DNS rewrite rule that adds an `A` record with the value `1.2.3.4`.

:::info

If you are maintaining a blocklist that is included in AdGuard DNS and AdGuard Home (i.e. included into [HostlistsRegistry][hostlistsregistry]), `$dnsrewrite` rules will be automatically filtered out. If these rules are required for your blocklist, please request permission by opening a new issue in the [HostlistsRegistry][hostlistsregistry] repo.

:::

#### `important` {#important-modifier}

The `important` modifier applied to a rule increases its priority over any other rule without the modifier. Even over basic exception rules.

**Exemples :**

- Dans cet exemple :

  ```none
  ||exemple.org^$important
  @@||exemple.org^
  ```

  `||example.org^$important` bloquera toutes les requêtes vers `*.example.org` malgré la règle d'exception.

- Dans cet exemple :

  ```none
  ||example.org^$important
  @@||example.org^$important
  ```

  la règle d'exception comporte également le modificateur `important` , donc ça doit marcher.

#### `badfilter` {#badfilter-modifier}

The rules with the `badfilter` modifier disable other basic rules to which they refer. It means that the text of the disabled rule should match the text of the `badfilter` rule (without the `badfilter` modifier).

**Exemples :**

- `||example.com$badfilter` désactive `||example.com`.

- `@@||example.org^$badfilter` désactive `@@||example.org^`.

  **REMARQUE :** Le modificateur `badfilter` ne fonctionne pas actuellement avec les règles de style `/etc/hosts`. `127.0.0.1 example.org$badfilter` ne désactivera **pas** la règle d'origine `127.0.0.1 example.org`.

#### `ctag` {#ctag-modifier}

**The `ctag` modifier can only be used in AdGuard Home.**

It allows to block domains only for specific types of DNS client tags. You can assign tags to clients in the AdGuard Home UI. In the future, we plan to assign tags automatically by analyzing the behavior of each client.

La syntaxe est :

```none
$ctag=value1|value2|...
```

If one of client's tags matches the `ctag` values, this rule applies to the client. The syntax for exclusion is:

```none
$ctag=~value1|~value2|...
```

If one of client's tags matches the exclusion `ctag` values, this rule doesn't apply to the client.

**Exemples :**

- `||example.org^$ctag=device_pc|device_phone`: bloquer `example.org` pour les clients marqués comme `device_pc` ou `device_phone`.

- `||example.org^$ctag=~device_phone`: bloquer `example.org` pour tous les clients sauf ceux marqués comme `device_phone`.

The list of allowed tags:

- Par type de dispositif :

    - `device_audio` : périphériques audio.
    - `device_camera` : caméras.
    - `device_gameconsole` : consoles de jeux.
    - `device_laptop` : ordinateurs portables.
    - `device_nas` : NAS (Stockages en réseau).
    - `device_pc` : PCs.
    - `device_phone` : téléphones.
    - `device_printer` : imprimantes.
    - `device_securityalarm` : alarmes de sécurité.
    - `device_tablet` : tablettes.
    - `device_tv` : téléviseurs.
    - `device_other` : autres appareils.

- Par système d'exploitation :

    - `os_android`: Android.
    - `os_ios`: iOS.
    - `os_linux`: Linux.
    - `os_macos`: macOS.
    - `os_windows`: Windows.
    - `os_other`: autres systèmes d'exploitation.

- Par groupe d'utilisateurs :

    - `user_admin`: administrateurs.
    - `user_regular`: utilisateurs réguliers.
    - `user_child`: enfants.

## `/etc/hosts`-style syntax {#etc-hosts-syntax}

For each host a single line should be present with the following information:

```none
IP_address canonical_hostname [aliases...]
```

Fields of the entries are separated by any number of space or tab characters. Text from the `#` character until the end of the line is a comment and is ignored.

Hostnames may contain only alphanumeric characters, hyphen-minus signs (`-`), and periods (`.`). They must begin with an alphabetic character and end with an alphanumeric character. Optional aliases provide for name changes, alternate spellings, shorter hostnames, or generic hostnames (for example, `localhost`).

**Exemple :**

```none
# Ceci est un commentaire
127.0.0.1 exemple.org example.info
127.0.0.1 exemple.com
127.0.0.1 exemple.net # ceci est aussi un commentaire
```

In AdGuard Home, the IP addresses are used to respond to DNS queries for these domains. In Private AdGuard DNS, these addresses are simply blocked.

## Domains-only syntax {#domains-only-syntax}

A simple list of domain names, one name per line.

**Exemple :**

```none
# Ceci est un commentaire
exemple.com
exemple.org
exemple.net # ceci est aussi un commentaire
```

If a string is not a valid domain (e.g. `*.example.org`), AdGuard Home will consider it to be an [Adblock-style syntax][] rule.

## Hostlist compiler {#hostlist-compiler}

If you are maintaining a blocklist and use different sources in it, [Hostlist compiler][] may be useful to you. It is a simple tool that makes it easier to compile a hosts blocklist compatible with AdGuard Home, Private AdGuard DNS or any other AdGuard product with DNS filtering.

What it's capable of:

1. Compiler une liste de blocage à partir de plusieurs sources.

2. Exclure les règles dont vous n'avez pas besoin.

3. Nettoyer la liste résultante : dédupliquer, supprimer les règles non valides et compresser la liste.

<!-- local links -->


<!-- external links -->
[hostlistsregistry]: https://github.com/AdguardTeam/HostlistsRegistry
[Adblock-style syntax]: #adblock-style-syntax
[`client`]: #client-modifier
[`dnstype`]: #dnstype-modifier
[AdGuard DNS filter]: https://github.com/AdguardTeam/AdGuardSDNSFilter
[Hostlist compiler]: https://github.com/AdguardTeam/HostlistCompiler
[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[rfc1035]: https://tools.ietf.org/html/rfc1035#section-3.5
[traditional Adblock-style syntax]: https://adguard.com/kb/general/ad-filtering/create-own-filters/
