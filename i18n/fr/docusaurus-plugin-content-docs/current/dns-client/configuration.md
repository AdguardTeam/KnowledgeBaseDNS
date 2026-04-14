---
title: Fichier de configuration
sidebar_position: 2
---


Voir le fichier [`config.dist.yml`][dist] pour un exemple complet d'un fichier de configuration [YAML][yaml] avec des commentaires.

{/*
    TODO(a.garipov): Find ways to add IDs to individual list items.
*/}

[dist]: https://github.com/AdguardTeam/AdGuardDNSClient/blob/master/config.dist.yaml
[yaml]: https://yaml.org/

## `dns` {#dns}

L'objet `dns` configure le comportement du serveur DNS. Il a les propriétés suivantes :

### `cache` {#dns-cache}

L'objet `cache` configure le stockage en cache des résultats de requête DNS. Il a les propriétés suivantes :

- `enabled`: Si les résultats DNS doivent être mis en cache, ou pas.

  **Exemple :** `true`

- `size`: La taille maximale du cache des résultats DNS en tant que taille de données lisible par l'homme. Elle doit être supérieure à zéro si `enabled` est `true`.

  **Exemple :** `128 MB`

- `client_size`: La taille maximale du cache des résultats DNS pour chaque adresse du client configuré ou sous-réseau en tant que taille de données lisible par l'homme. Elle doit être supérieure à zéro si `enabled` est `true`.

  **Exemple :** `4 MB`

### `server` {#dns-server}

L'objet `server` configure la gestion des requêtes entrantes. Il a les propriétés suivantes :

- `bind_retry`: La configuration du mécanisme de re-tentative pour joindre les adresses d'écoute. C'est utile si le serveur est démarré avant que le réseau ne soit prêt et que les adresses ne soient pas encore disponibles, comme sur certaines éditions de Windows lorsqu'elles sont installées en tant que service système.

  :::note

  Cet objet est disponible depuis **v0.0.3**.

  :::

  Il a les propriétés suivantes :

  - `enabled` : Indique si la nouvelle tentative de liaison est activée ou non.

    **Exemple :** `true`

  - `interval` : L'intervalle entre les tentatives sous forme de durée lisible par l'homme.

    **Exemple :** `1s`

  - `count`: Le nombre maximum de tentatives après le premier échec. C'est-à-dire que si `count` est `4`, le nombre total de tentatives sera de cinq.

    **Exemple :** `4`

- `listen_addresses`: L'ensemble d'adresses avec des ports à écouter.

  **Exemple de propriété :**

  ```yaml
  'listen_addresses':
      - adresse: '127.0.0.1:53'
      - adresse: '[::1]:53'
  ```

- `pending_requests` : Configuration permettant de gérer les requêtes simultanées dupliquées afin d’atténuer les attaques par empoisonnement du cache.

  :::note

  Cet objet est disponible depuis **v0.0.4**.

  :::

  - `enabled` : Si true, le serveur n'effectuera qu'une seule requête pour chaque question unique.  La valeur par défaut est true.

    **Exemple :** `true`

### `bootstrap` {#dns-bootstrap}

L'objet `bootstrap` configure la résolution des adresses des serveurs [en amont](#dns-upstream). Il a les propriétés suivantes :

- `servers`: La liste des serveurs pour résoudre les noms d'hôtes des serveurs en amont.

  **Exemple de propriété :**

  ```yaml
  'servers':
      - adresse: '8.8.8.8:53'
      - adresse: '192.168.1.1:53'
  ```

- `timeout`: Le délai pour les requêtes DNS d'amorçage en tant que durée lisible par l'homme.

  **Exemple :** `2 s`

### `upstream` {#dns-upstream}

L'objet `upstream` configure la résolution effective des requêtes. Il a les propriétés suivantes :

- `groups`: L'ensemble des serveurs en amont par le nom du groupe. Il a les propriétés suivantes :

  - `address`: L'adresse du serveur en amont.

    **Exemple :** `'8.8.8.8:53'`

  - `match`: La liste des critères pour faire correspondre la requête. Chaque entrée peut contenir les propriétés suivantes :

    - `question_domain`: Le domaine ou un suffixe du domaine que l'ensemble des serveurs en amont doit utiliser pour résoudre.

      **Exemple :** `'mycompany.local'`

    - `client`: L'adresse du client ou un sous-réseau de l'adresse du client à partir duquel l'ensemble des serveurs en amont doit résoudre les requêtes. Il ne doit pas avoir de bits significatifs en dehors du masque de sous-réseau.

      **Exemple :** `'192.0.2.0/24'`

    :::note

    Les propriétés spécifiées dans une seule entrée sont combinées avec un ET logique. Les entrées sont combinées avec un OR logique.

    :::

    **Exemple de propriété :**

    ```yaml
    'match':
        - question_domain: 'mycompany.local'
        client: '192.168.1.0/24'
        - question_domain: 'mycompany.external'
        - client: '1.2.3.4'
    ```

  :::info

  `groups` doit contenir au moins une seule entrée nommée `default`, et éventuellement une seule entrée nommée `private`, aucune des deux ne devrait avoir de propriété `match`.

  :::

  Le groupe `default` sera utilisé lorsqu'il n'y a pas de correspondances parmi les autres groupes. Le groupe `private` sera utilisé pour résoudre les requêtes PTR pour les adresses IP privées. Ces requêtes seront répondues avec `NXDOMAIN` si aucun groupe `private` n'est défini.

- `timeout`: Le délai pour les requêtes DNS en amont en tant que durée lisible par l'homme.

  **Exemple :** `2s`

### `fallback` {#dns-fallback}

L'objet `fallback` configure le comportement du serveur DNS en cas d'échec. Il a les propriétés suivantes :

- `servers`: La liste des serveurs à utiliser après que l'[amont](#dns-upstream) n'ait pas répondu.

  **Exemple de propriété :**

  ```yaml
  'servers':
      - address: 'tls://94.140.14.140'
  ```

- `timeout`: Le délai pour les requêtes DNS de traitement de secours en tant que durée lisible par l'homme.

  **Exemple :** `2s`

## `debug` {#debug}

L'objet `debug` configure les fonctionnalités de débogage. Il a les propriétés suivantes :

### `pprof` {#debug-pprof}

L'objet `pprof` configure les gestionnaires HTTP [`pprof`][pkg-pprof]. Il a les propriétés suivantes :

- `port`: Le port à écouter pour les requêtes HTTP de débogage sur localhost.

  **Exemple :** `6060`

- `enabled`: Si oui ou non le profilage de débogage est activé.

  **Exemple :** `true`

[pkg-pprof]: https://golang.org/pkg/net/http/pprof

## `log` {#log}

L'objet `log` configure la journalisation. Il a les propriétés suivantes :

- `output`: La sortie vers laquelle les journaux sont écrits.

  :::note

  Les entrées de journal écrites dans le journal système sont au format `text` (voir ci-dessous) et utilisent l'horodatage du système.

  :::

  Valeurs possibles :

  - `syslog` signifie que le journal système spécifique à la plateforme est utilisé, notamment syslog pour Linux et Event Log pour Windows.

  - `stdout` pour le flux de sortie standard.

  - `stderr` pour le flux d'erreur standard.

  - Chemin absolu vers le fichier de journal.

  **Exemple :** `/home/user/logs`

  **Exemple :** `C:\Users\user\logs.txt`

  **Exemple :** `syslog`

- `format`: Spécifie le format des entrées de journal.

  Valeurs possibles :

  - `default`: Un format simple. Exemple :

    ```none
    INFO service started prefix=program addr=127.0.0.1:53
    ```

  - `json`: Un format JSON structuré. Exemple :

    ```json
    {"level":"INFO","msg":"service started","prefix":"program","addr":"127.0.0.1:53"}
    ```

  - `jsonhybrid`: Identique à `json` mais avec un nombre limité de champs. Exemple :

    ```json
    {"level":"INFO","msg":"service started, attrs: prefix=program addr=127.0.0.1:53"}
    ```

  - `text`: Un format textuel structuré. Exemple :

    ```none
    level=INFO msg="service started" prefix=program addr=127.0.0.1:53
    ```

  **Exemple :** `default`

- `timestamp`: Spécifie s'il faut inclure un horodatage dans les entrées de journal.

  **Exemple :** `false`

- `verbose`: Spécifie si le journal doit être plus informatif.

  **Exemple :** `false`
