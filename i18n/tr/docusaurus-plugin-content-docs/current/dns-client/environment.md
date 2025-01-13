---
title: Ortam
sidebar_position: 3
---

<!-- markdownlint-configure-file {"ul-indent":{"indent":4,"start_indent":2,"start_indented":true}} -->

AdGuard DNS İstemcisi yapılandırmanın bir kısmını saklamak için [ortam değişkenleri][wiki-env] kullanır. Yapılandırmanın geri kalanı [yapılandırma dosyası][conf] içinde saklanır.

[conf]: configuration.md
[wiki-env]: https://en.wikipedia.org/wiki/Environment_variable

## `LOG_OUTPUT` {#LOG_OUTPUT}

Günlük hedefi, dosyaya giden mutlak bir yol veya özel değerlerden biri olmalıdır. Yapılandırma dosyasıyla ilgili makaledeki [günlük yapılandırma açıklaması][conf-log] bölümüne bakın.

Bu ortam değişkeni yapılandırma dosyasındaki [`log.output`][conf-log] alanını geçersiz kılar.

**Default:** **Unset.**

[conf-log]: configuration.md#log

## `LOG_FORMAT` {#LOG_FORMAT}

Günlük girişlerinin biçimi. Yapılandırma dosyasıyla ilgili makaledeki [günlük yapılandırma açıklaması][conf-log] bölümüne bakın.

Bu ortam değişkeni yapılandırma dosyasındaki [`log.format`][conf-log] alanını geçersiz kılar.

**Default:** **Unset.**

## `LOG_TIMESTAMP` {#LOG_TIMESTAMP}

`1` olarak ayarlandığında, günlük girdileri bir zaman damgasına sahip olur. `0` olarak ayarlandığında, günlük girdileri buna sahip olmaz.

Bu ortam değişkeni yapılandırma dosyasındaki [`log.timestamp`][conf-log] alanını geçersiz kılar.

**Default:** **Unset.**

## `VERBOSE` {#VERBOSE}

`1` olarak ayarlandığında ayrıntılı günlük kaydını etkinleştirir. `0` olarak ayarlandığında devre dışı bırakılır.

Bu ortam değişkeni yapılandırma dosyasındaki [`log.verbose`][conf-log] alanını geçersiz kılar.

**Default:** **Unset.**
