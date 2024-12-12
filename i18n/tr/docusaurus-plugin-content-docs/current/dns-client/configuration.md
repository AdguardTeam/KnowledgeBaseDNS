---
title: Yapılandırma dosyası
sidebar_position: 2
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

Açıklamalarla birlikte [YAML][yaml] yapılandırma dosyasının tam bir örneği için [`config.dist.yml`][dist] dosyasına bakın.

<!--
    TODO(a.garipov): Find ways to add IDs to individual list items.
-->

[dist]: https://github.com/AdguardTeam/AdGuardDNSClient/blob/master/config.dist.yaml
[yaml]: https://yaml.org/

## `dns` {#dns}

`dns` nesnesi DNS sunucusunun davranışını yapılandırır. Aşağıdaki özelliklere sahiptir:

### `cache` {#dns-cache}

`cache` nesnesi, DNS sorgulama sonuçlarının önbelleğe alınmasını yapılandırır. Aşağıdaki özelliklere sahiptir:

- `enabled`: DNS sonuçlarının önbelleğe alınıp alınmayacağını belirtir.

  **Örnek:** `true`

- `size`: İnsan tarafından okunabilir veri boyutu olarak DNS sonuç önbelleğinin maksimum boyutu. Eğer `enabled` değeri `true` ise sıfırdan büyük olmalıdır.

  **Örnek:** `128 MB`

- `client_size`: Yapılandırılmış her istemcinin adresi veya alt ağı için DNS sonuç önbelleğinin insan tarafından okunabilir veri boyutu olarak maksimum boyutu. Eğer `enabled` değeri `true` ise sıfırdan büyük olmalıdır.

  **Örnek:** `4 MB`

### `server` {#dns-server}

`server` nesnesi, gelen isteklerin işlenmesini yapılandırır. Aşağıdaki özelliklere sahiptir:

- `listen_addresses`: Dinlenecek bağlantı noktalarına sahip adres kümesi.

  **Özellik örneği:**

  ```yaml
  'listen_addresses':
      - address: '127.0.0.1:53'
      - address: '[::1]:53'
  ```

### `bootstrap` {#dns-bootstrap}

The `bootstrap` object configures the resolution of [upstream](#dns-upstream) server addresses. Aşağıdaki özelliklere sahiptir:

- `servers`: The list of servers to resolve the hostnames of upstream servers.

  **Özellik örneği:**

  ```yaml
  'servers':
      - address: '8.8.8.8:53'
      - address: '192.168.1.1:53'
  ```

- `timeout`: Önyükleme DNS istekleri için insan tarafından okunabilir bir süre olarak zaman aşımını belirtir.

  **Örnek:** `2 s`

### `upstream` {#dns-upstream}

`upstream` nesnesi, isteklerin fiili çözümlenmesini yapılandırır. Aşağıdaki özelliklere sahiptir:

- `groups`: Grubun adına göre anahtarlanan üst kaynak sunucular kümesi. Aşağıdaki alanlara sahiptir:

  - `address`: Yukarı akış sunucusunun adresi.

    **Örnek:** `'8.8.8.8:53'`

  - `match`: İsteğin eşleştirileceği kriterlerin listesi. Her giriş aşağıdaki özellikleri içerebilir:

    - `question_domain`: The domain or a suffix of the domain that the set of upstream servers should be used to resolve.

      **Örnek:** `'mycompany.local'`

    - `client`: The client’s address or a subnet of the client’s address from which the set of upstream servers should resolve requests. Alt ağ maskesinin dışında önemli bitler bulunmamalıdır.

      **Örnek:** `'192.0.2.0/24'`

    :::note Not

    Properties specified within a single entry are combined with a logical AND. Girişler mantıksal bir VEYA ile birleştirilir.

    :::

    **Özellik örneği:**

    ```yaml
    'match':
        - question_domain: 'mycompany.local'
        client: '192.168.1.0/24'
        - question_domain: 'mycompany.external'
        - client: '1.2.3.4'
    ```

  :::info

  `groups` should contain at least a single entry named `default`, and optionally a single entry named `private`, both should have no `match` property.

  :::

  Diğer gruplar arasında eşleşme olmadığında `default` grubu kullanılacaktır. Özel IP adresleri için PTR isteklerini çözmek için `private` grup kullanılacaktır. Bu tür sorgular, `private` grubu tanımlanmamışsa `NXDOMAIN` ile yanıtlanacaktır.

- `timeout`: İnsan tarafından okunabilir bir süre olarak üst kaynak sunucu DNS istekleri için zaman aşımı.

  **Örnek:** `2s`

### `fallback` {#dns-fallback}

`fallback` nesnesi, arıza durumunda DNS sunucusunun davranışını yapılandırır. Aşağıdaki özelliklere sahiptir:

- `servers`: Asıl [üst kaynak sunucu](#dns-upstream) yanıt veremediğinde kullanılacak sunucuların listesi.

  **Özellik örneği:**

  ```yaml
  'servers':
      - address: 'tls://94.140.14.140'
  ```

- `timeout`: Yedek DNS istekleri için insan tarafından okunabilir bir süre olarak zaman aşımını belirtir.

  **Örnek:** `2s`

## `debug` {#debug}

`debug` nesnesi hata ayıklama özelliklerini yapılandırır. Aşağıdaki özelliklere sahiptir:

### `pprof` {#debug-pprof}

Pprof` nesnesi [`pprof\`][pkg-pprof] HTTP işleyicilerini yapılandırır. Aşağıdaki özelliklere sahiptir:

- `port`: localhost üzerinde hata ayıklama HTTP istekleri için dinlenecek bağlantı noktası.

  **Örnek:** `6060`

- `enabled`: Hata ayıklama profilinin etkin olup olmadığını belirtir.

  **Örnek:** `true`

[pkg-pprof]: https://golang.org/pkg/net/http/pprof

## `log` {#log}

`log` nesnesi günlüğe kaydını yapılandırır. Aşağıdaki özelliklere sahiptir:

- `output`: Günlüklerin yazılacağı çıktı.

  :::note Not

  Sistem günlüğüne yazılan günlük girdileri `text` biçimindedir (aşağıya bakın) ve sistem zaman damgasını kullanır.

  :::

  Olası değerler:

  - `syslog`, Linux için syslog ve Windows için Olay Görüntüleyicisi olan platforma özgü sistem günlüğünün kullanıldığı anlamına gelir.

  - Standart çıktı akışı için `stdout`.

  - Standart hata akışı için `stderr`.

  - Günlük dosyasının mutlak yolu.

  **Örnek:** `/home/user/logs`

  **Örnek:** `C:\Kullanıcılar\kullanıcı\logs.txt`

  **Örnek:** `syslog`

- `format`: Günlük girdilerinin biçimini belirtir.

  Olası değerler:

  - `default`: Basit bir biçim. Örnek:

    ```none
    INFO service started prefix=program addr=127.0.0.1:53
    ```

  - `json`: Yapılandırılmış bir JSON biçimi. Örnek:

    ```json
    {"level":"INFO","msg":"service started","prefix":"program","addr":"127.0.0.1:53"}
    ```

  - `jsonhybrid`: json\` ile aynıdır ancak sınırlı sayıda alana sahiptir. Örnek:

    ```json
    {"level":"INFO","msg":"service started, attrs: prefix=program addr=127.0.0.1:53"}
    ```

  - `text`: Yapılandırılmış bir metin biçimi. Örnek:

    ```none
    level=INFO msg="service started" prefix=program addr=127.0.0.1:53
    ```

  **Örnek:** `default`

- `timestamp`: Günlük girdilerine bir zaman damgası eklenip eklenmeyeceğini belirtir.

  **Örnek:** `false`

- `verbose`: Günlüğün daha bilgilendirici olup olmayacağını belirtir.

  **Örnek:** `false`
