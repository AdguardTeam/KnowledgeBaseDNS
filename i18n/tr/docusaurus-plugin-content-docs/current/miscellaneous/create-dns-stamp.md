- - -
title: How to create your own DNS stamp for Secure DNS sidebar_position: 4
- - -

Bu kılavuz, Güvenli DNS için kendi DNS damganızı nasıl oluşturacağınızı gösterir. Güvenli DNS, DNS sorgularınızı şifreleyerek internet güvenliğinizi ve gizliliğinizi artıran bir hizmettir. Bu, sorgularınızın kötü niyetli kişiler tarafından ele geçirilmesini veya manipüle edilmesini önler.

Güvenli DNS genellikle `tls://`, `https://` veya `quic://` URL'lerini kullanır. This is sufficient for most users and is the recommended way.

However, if you need additional security, like pre-resolved server IPs and certificate pinning by hash, you may generate your own DNS stamp.

## DNS damgalarına giriş

DNS stamps are short strings that contain all the information needed to connect to a secure DNS server. They simplify the process of setting up Secure DNS as the user does not need to manually enter all this data.

DNS stamps allow you to customize Secure DNS settings beyond the usual URLs. In particular, they allow you to specify hard-coded server addresses, use certificate hashing, and so on. These features make DNS stamps a more robust and versatile option for configuring Secure DNS settings.

## Protokol seçimi

Güvenli DNS türleri arasında `DNS-over-HTTPS (DoH)`, `DNS-over-QUIC (DoQ)`, `DNS-over-TLS (DoT)` ve diğerleri yer alır. Bu protokollerden birini seçmek, bunları hangi bağlamda kullanacağınıza bağlıdır.

## DNS damgası oluşturma

1. [DNSCrypt Damga Hesaplayıcısını](https://dnscrypt.info/stamps/) açın.

2. Seçilen protokole bağlı olarak, açılır menüden ilgili protokolü seçin (DoH, DoT veya DoQ).

3. Gerekli alanları doldurun:
    - **IP adresi**: DNS sunucusunun IP adresini girin. DoT veya DoQ protokolünü kullanıyorsanız uygun bağlantı noktasını da belirttiğinizden emin olun.

    :::note Not

    Bu alan isteğe bağlıdır ve dikkatli kullanılmalıdır: Bu seçeneğin kullanılması, yalnızca IPv6 ağlarında interneti bozabilir.


:::
    - **Karma**: Doğrulama zincirinde bulunan TBS sertifikalarından birinin SHA256 özetini girin. Kullanmakta olduğunuz DNS sunucusu hazır bir karma sağlıyorsa, bulun ve kopyalayın. Aksi takdirde, [*Sertifika Karmasını Elde Etme*](#obtaining-the-certificate-hash) bölümündeki talimatları izleyerek elde edebilirsiniz.

    :::note Not

    Bu alan isteğe bağlıdır


:::

    - **Ana makine adı**: DNS sunucusunun ana makine adını girin. Bu alan, DoT ve DoQ protokollerinde sunucu adı doğrulaması için kullanılır.

    - **DoH** için:
      - **Yol**: DoH isteklerini gerçekleştirmek için yolu girin. Bu genellikle `"/dns-query"` şeklindedir, ancak sağlayıcınız farklı bir yol sağlayabilir.

    -     **DoT ve DoQ** için:
      - Bu araçta genellikle bu protokoller için özel alanlar yoktur. Çözümleyici adresinde belirtilen bağlantı noktasının doğru bağlantı noktası olduğundan emin olun.

    - **Özellikler** bölümünde, ilgili özelliklerin bilinip bilinmediğini ve DNS sunucunuz için geçerli olup olmadığını kontrol edebilirsiniz.

4. Damganız otomatik olarak oluşturulacaktır ve bunu **Damga** alanında göreceksiniz.

### Sertifika karmasının elde edilmesi

To fill in the **Hashes of the server's certificate** field, you can use the following command, replacing `<IP_ADDRESS>`, `<PORT>`, and `<SERVER_NAME>` with the corresponding values for your DNS server:

```bash
echo | openssl s_client -connect <IP_ADDRESS>:<PORT> -servername <SERVER_NAME> 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256
```

:::caution

Karma komutunun sonucu, sunucunun sertifikası güncelleştirildikçe zaman içinde değişebilir. Bu nedenle, DNS damganız aniden çalışmayı durdurursa, sertifikanın karmasını yeniden hesaplamanız ve yeni bir damga oluşturmanız gerekebilir. DNS damganızı düzenli olarak güncellemek, Güvenli DNS hizmetinizin sürekli güvenli çalışmasını sağlamaya yardımcı olur.

:::

## DNS damgasını kullanma

Artık Güvenli DNS kurmak için kullanabileceğiniz kendi DNS damganız var. Bu damga, gelişmiş internet gizliliği ve güvenliği için AdGuard ve AdGuard VPN'e girilebilir.

## DNS damgası oluşturma örneği

DoT kullanarak AdGuard DNS için bir damga oluşturma örneği üzerinden gidelim:

1. [DNSCrypt Damga Hesaplayıcısını](https://dnscrypt.info/stamps/) açın.

2. DNS-over-TLS (DoT) protokolünü seçin.

3. Aşağıdaki alanları doldurun:

    - **IP adresi**: DNS sunucusunun IP adresini ve bağlantı noktasını girin. Bu durumda, `94.140.14.14:853` şeklindedir.

    - **Ana makine adı**: DNS sunucusunun ana makine adını girin. Bu durumda, `dns.adguard-dns.com` şeklindedir.

    - **Karma**: Komutu çalıştırın

    ```bash
    echo | openssl s_client -connect 94.140.14.14:853 -servername dns.adguard-dns.com 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256
    ```

    Sonuç `1ebea9685d57a3063c427ac4f0983f34e73c129b06e7e7705640cacd40c371c8` Sunucu sertifikasının bu SHA256 karmasını alana yapıştırın.

4. Özellikler bölümünü boş bırakın.

5. Damganız otomatik olarak oluşturulacaktır ve bunu **Damga** alanında göreceksiniz.
