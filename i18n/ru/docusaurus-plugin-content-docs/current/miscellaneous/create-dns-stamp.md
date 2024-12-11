- - -
title: How to create your own DNS stamp for Secure DNS sidebar_position: 4
- - -

This guide will show you how to create your own DNS stamp for Secure DNS. Secure DNS is a service that enhances your internet security and privacy by encrypting your DNS queries. This prevents your queries from being intercepted or manipulated by malicious actors.

Secure DNS usually uses `tls://`, `https://`, or `quic://` URLs. This is sufficient for most users and is the recommended way.

However, if you need additional security, like pre-resolved server IPs and certificate pinning by hash, you may generate your own DNS stamp.

## Коротко о DNS-метках

DNS stamps are short strings that contain all the information needed to connect to a secure DNS server. They simplify the process of setting up Secure DNS as the user does not need to manually enter all this data.

DNS stamps allow you to customize Secure DNS settings beyond the usual URLs. In particular, they allow you to specify hard-coded server addresses, use certificate hashing, and so on. These features make DNS stamps a more robust and versatile option for configuring Secure DNS settings.

## Выбор протокола

Types of Secure DNS include `DNS-over-HTTPS (DoH)`, `DNS-over-QUIC (DoQ)`, `DNS-over-TLS (DoT)`, and some others. Choosing one of these protocols depends on the context in which you'll be using them.

## Создание DNS-метки

1. Откройте [DNSCrypt Stamp Calculator](https://dnscrypt.info/stamps/).

2. В зависимости от выбранного протокола выберите соответствующий протокол из раскрывающегося меню (DoH, DoT или DoQ).

3. Заполните необходимые поля:
    - **IP address**: Введите IP-адрес DNS-сервера. Если вы используете протокол DoT или DoQ, убедитесь, что вы также указали соответствующий порт.

    :::note

    Это поле необязательное, и его следует заполнять с осторожностью: использование этого параметра может привести к нарушению работы интернета в сетях, поддерживающих только IPv6.


:::
    - **Hashes**: Введите SHA256-дайджест одного из сертификатов TBS, найденных в цепочке проверки. Если используемый вами DNS-сервер предоставляет готовый хеш, найдите и скопируйте его. Иначе вы можете получить его, следуя инструкциям в разделе [*Получение хеша сертификата*](#obtaining-the-certificate-hash).

    :::note

    Это поле необязательно


:::

    - **Host name**: введите имя хоста DNS-сервера. Это поле используется для проверки имени сервера в протоколах DoT и DoQ.

    - Для **DoH**:
      - **Path**: введите путь для выполнения DoH-запросов. Обычно это `"/dns-query"`, но ваш провайдер может указать другой путь.

    -     Для **DoT и DoQ**:
      - Обычно в этом инструменте нет специальных полей для этих протоколов. Убедитесь, что порт, указанный в адресе резолвера, введён правильно.

    - В разделе **Properties** вы можете проверить соответствующие свойства, если они известны и применимы к вашему DNS-серверу.

4. Ваша метка будет сгенерирована автоматически, и вы увидите ее в поле **Метка**.

### Получение хеша сертификата

To fill in the **Hashes of the server's certificate** field, you can use the following command, replacing `<IP_ADDRESS>`, `<PORT>`, and `<SERVER_NAME>` with the corresponding values for your DNS server:

```bash
echo | openssl s_client -connect <IP_ADDRESS>:<PORT> -servername <SERVER_NAME> 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256
```

:::caution

The result of the hash command may change over time as the server's certificate is updated. Therefore, if your DNS stamp suddenly stops working, you may need to recalculate the hash of the certificate and generate a new stamp. Regularly updating your DNS stamp will help ensure the continued secure operation of your Secure DNS service.

:::

## Использование DNS-метки

You now have your own DNS stamp that you can use to set up Secure DNS. This stamp can be entered into AdGuard and AdGuard VPN for enhanced internet privacy and security.

## Пример создания DNS-метки

Let's go through an example of creating a stamp for AdGuard DNS using DoT:

1. Откройте [DNSCrypt Stamp Calculator](https://dnscrypt.info/stamps/).

2. Выберите протокол DNS-over-TLS (DoT).

3. Заполните следующие поля:

    - **IP-адрес**: введите IP-адрес и порт DNS-сервера. В данном случае это `94.140.14.14:853`.

    - **Host name**: введите имя хоста DNS-сервера. В данном случае это `dns.adguard-dns.com`.

    - **Hashes**: Выполните команду

    ```bash
    echo | openssl s_client -connect 94.140.14.14:853 -servername dns.adguard-dns.com 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256
    ```

    Результат: `1ebea9685d57a3063c427ac4f0983f34e73c129b06e7e7705640cacd40c371c8` Вставьте этот хеш SHA256 сертификата сервера в поле.

4. Оставьте раздел «Свойства» пустым.

5. Ваша метка будет сгенерирована автоматически, и вы увидите ее в поле **Stamp**.
