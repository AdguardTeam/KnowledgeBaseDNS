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

If you’re maintaining either a `/etc/hosts`-style blocklist or multiple filtering lists (regardless of type), we provide a tool for blocklist compilation. We named it [Hostlist compiler][] and we use it ourselves to create [AdGuard DNS filter][].

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

- `^`: le caractère séparateur. Unlike browser ad blocking, there’s nothing to separate in a hostname, so the only purpose of this character is to mark the end of the hostname.

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

:::note

If a rule contains a modifier not listed in this document, the whole rule **must be ignored**. This way we avoid false-positives when people are trying to use unmodified browser ad blockers’ filter lists like EasyList or EasyPrivacy.

:::

#### `client` {#client-modifier}

The `client` modifier allows specifying clients this rule is applied to. There are two main ways to identify a client:

- Par leur adresse IP ou leur préfixe CIDR. Cette méthode fonctionne pour tous les types de clients.

- Par leur nom. Cette méthode ne fonctionne que pour les clients persistants (dans AdGuard Home) et les appareils (dans AdGuard DNS Privé), que vous avez ajoutés manuellement.

  :::note

  In AdGuard Home, ClientIDs are not currently supported, only names are. If you have added a client with the name “My Client” and ClientID `my-client` spell your modifier as `$client='My Client'` as opposed to `$client=my-client`.

  :::

The syntax is:

```none
$client=value1|value2|...
```

You can also exclude clients by adding a `~` character before the value. In this case, the rule is not be applied to this client’s DNS requests.

```none
$client=~value1
```

Client names usually contain spaces or other special characters, which is why you should enclose the name in quotes. Both single and double ASCII quotes are supported. Use the backslash (`\`) to escape quotes (`"` and `'`), commas (`,`), and pipes (`|`).

:::note

When excluding a client, you **must** place `~` outside the quotes.

:::

**Exemples :**

- `@@||*^$client=127.0.0.1`: débloquer tout pour localhost.

- `||example.org^$client='Frank\'s laptop'`: bloque `example.org` pour le client nommé `Frank's laptop` uniquement. Notez que les guillemets (`'`) dans le nom doivent être échappés.

- `||example.org^$client=~'Mary\'s\, John\'s\, and Boris\'s laptops'` : bloc `example.org` pour tout le monde sauf le client nommé `Mary's, John's, and Boris's laptops`. Notez que la virgule (`,`) doit également être échappée.

- `||example.org^$client=~Mom|~Dad|Kids`: bloquer `exemple.org` pour `Kids`, mais pas pour `Mom` et `Dad`. Cet exemple montre comment spécifier plusieurs clients dans une règle.

- `||example.org^$client=192.168.0.0/24`: bloquer `example.org` pour tous les clients dont les adresses IP sont comprises entre `192.168.0.0` et `192.168.0.255`.

#### `denyallow` {#denyallow-modifier}

You can use the `denyallow` modifier to exclude domains from the blocking rule. To add multiple domains to one rule, use the `|` character as a separator.

The syntax is:

```none
$denyallow=domain1|domain2|...
```

This modifier allows avoiding creating unnecessary exception rules when our blocking rule covers too many domains. You may want to block everything except for a couple of TLD domains. You could use the standard approach, i.e. rules like this:

```none
! Bloquer tout.
/.*/

! Débloquer quelques TLD.
@@||com^
@@||net^
```

The problem with this approach is that this way you will also unblock tracking domains that are located on those TLDs (i.e. `google-analytics.com`). Here’s how to solve this with `denyallow`:

```none
*$denyallow=com|net
```

**Exemples :**

- `*$denyallow=com|net`: bloque tout sauf `*.com` et `*.net`.

- `@@*$denyallow=com|net`: débloque tout sauf `*.com` et `*.net`.

- `||example.org^$denyallow=sub.example.org`: block `example.org` and `*.example.org`, but not `sub.example.org`.

#### `dnstype` {#dnstype-modifier}

The `dnstype` modifier allows specifying DNS request or response type on which this rule will be triggered.

The syntax is:

```none
$dnstype=value1|value2|...
$dnstype=~value1|~value2|~...
```

The names of the types are case-insensitive, but are validated against a set of actual DNS resource record (RR) types.

Do not combine exclusion rules with inclusion ones. This:

```none
$dnstype=~value1|value2
```

is equivalent to this:

```none
$dnstype=value2
```

**Exemples :**

- `||example.org^$dnstype=AAAA`: bloque les requêtes DNS pour les adresses IPv6 de `example.org`.

- `||example.org^$dnstype=~A|~CNAME`: n'autorise que les requêtes DNS du type `A` et `CNAME` pour `example.org`, et bloque le reste.

:::note

Before version **v0.108.0,** AdGuard Home would use the type of the request to filter the response records, as opposed to the type of the response record itself.  That caused issues, since that meant that you could not write rules that would allow certain `CNAME` records in responses in `A` and `AAAA` requests. In **v0.108.0** that behaviour was changed, so now this:

:::

```none
||canon.example.com^$dnstype=~CNAME
```

allows you to avoid filtering of the following response:

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

The `dnsrewrite` response modifier allows replacing the content of the response to the DNS request for the matching hosts. Note that this modifier in AdGuard Home works in all rules, but in Private AdGuard DNS — only in custom ones.

**Rules with the `dnsrewrite` response modifier have higher priority than other rules in AdGuard Home and AdGuard DNS.**

Responses to all requests for a host matching a `dnsrewrite` rule will be replaced. The answer section of the replacement response will only contain RRs that match the request’s query type and, possibly, CNAME RRs. Note that this means that responses to some requests may become empty (`NODATA`) if the host matches a `dnsrewrite` rule.

The shorthand syntax is:

```none
$dnsrewrite=1.2.3.4
$dnsrewrite=abcd::1234
$dnsrewrite=example.net
$dnsrewrite=REFUSED
```

The keywords MUST be in all caps (e.g. `NOERROR`). Keyword rewrites take precedence over the other and will result in an empty response with an appropriate response code.

The full syntax is of the form `RCODE;RRTYPE;VALUE`:

```none
$dnsrewrite=NOERROR;A;1.2.3.4
$dnsrewrite=NOERROR;AAAA;abcd::1234
$dnsrewrite=NOERROR;CNAME;example.net
$dnsrewrite=REFUSED;;
```

The `$dnsrewrite` modifier with the `NOERROR` response code may also has empty `RRTYPE` and `VALUE` fields.

The `CNAME` one is special because AdGuard Home will resolve the host and add its info to the response. That is, if `example.net` has IP `1.2.3.4`, and the user has this in their filter rules:

```none
||example.com^$dnsrewrite=example.net
! Soit :
||example.com^$dnsrewrite=NOERROR;CNAME;example.net
```

then the response will be something like:

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

Next, the `CNAME` rewrite. After that, all other records’ values are summed as one response, so this:

```none
||example.com^$dnsrewrite=NOERROR;A;1.2.3.4
||example.com^$dnsrewrite=NOERROR;A;1.2.3.5
```

will result in a response with two `A` records.

Currently supported RR types with examples:

- `||4.3.2.1.in-addr.arpa^$dnsrewrite=NOERROR;PTR;example.net.` adds a `PTR` record for reverse DNS. Les requêtes DNS inversées pour `1.2.3.4` au serveur DNS donneront `example.net`.

  :::note

  The IP MUST be in reverse order. See [RFC 1035][rfc1035].

  :::

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

  :::note

  The `badfilter` modifier currently doesn’t work with `/etc/hosts`-style rules. `127.0.0.1 example.org$badfilter` will **not** disable the original `127.0.0.1 example.org` rule.

  :::

#### `ctag` {#ctag-modifier}

**The `ctag` modifier can only be used in AdGuard Home.**

It allows to block domains only for specific types of DNS client tags. You can assign tags to clients in the AdGuard Home UI. In the future, we plan to assign tags automatically by analyzing the behavior of each client.

The syntax is:

```none
$ctag=value1|value2|...
```

If one of client’s tags matches the `ctag` values, this rule applies to the client. The syntax for exclusion is:

```none
$ctag=~value1|~value2|...
```

If one of client’s tags matches the exclusion `ctag` values, this rule doesn’t apply to the client.

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

What it’s capable of:

1. Compiler une liste de blocage à partir de plusieurs sources.

2. Exclude the rules you don’t need.

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
