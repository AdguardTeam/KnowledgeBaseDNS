# Jak vytvořit vlastní razítko DNS pro zabezpečený DNS

Tento průvodce vám ukáže, jak vytvořit vlastní razítko DNS pro zabezpečený DNS. Zabezpečený DNS je služba, která zvyšuje bezpečnost a soukromí na internetu šifrováním dotazů DNS. Tím se zabrání tomu, aby vaše dotazy zachytily nebo zmanipulovaly zákeřné subjekty.

Zabezpečený DNS obvykle používá URL `tls://`, `https://` nebo `quic://`. Tento způsob je pro většinu uživatelů dostačující a je doporučován.

Pokud však potřebujete další zabezpečení, jako jsou předvyřešené IP adresy serverů a připnutí certifikátu pomocí hashe, můžete si vygenerovat vlastní razítko DNS.

## Úvod k razítkům DNS

Razítka DNS jsou krátké řetězce, které obsahují všechny informace potřebné k připojení k zabezpečenému serveru DNS. Zjednodušují proces nastavení zabezpečeného DNS, protože uživatel nemusí všechny tyto údaje zadávat ručně.

Razítka DNS umožňují přizpůsobit nastavení zabezpečeného DNS nad rámec obvyklých adres URL. Umožňují zejména zadávat pevně zadané adresy serverů, používat hašování certifikátů atd. Díky těmto funkcím jsou razítka DNS robustnější a univerzálnější možností konfigurace nastavení zabezpečeného DNS.

## Výběr protokolu

Mezi typy zabezpečených DNS patří `DNS-over-HTTPS (DoH)`, `DNS-over-QUIC (DoQ)` a `DNS-over-TLS (DoT)` a některé další. Výběr jednoho z těchto protokolů závisí na kontextu, ve kterém je budete používat.

## Vytvoření razítka DNS

1. Otevřete [DNSCrypt Stamp Calculator](https://dnscrypt.info/stamps/).

2. V závislosti na zvoleném protokolu vyberte příslušný protokol z rozbalovací nabídky (DoH, DoT nebo DoQ).

3. Vyplňte potřebná pole:
    - **IP adresa**: Zadejte IP adresu serveru DNS. Pokud používáte protokol DoT nebo DoQ, ujistěte se, že jste zadali také příslušný port.

    :::note

    Toto pole je nepovinné a mělo by být použito s opatrností: použití této možnosti může narušit internet v sítích využívajících pouze protokol IPv6.


:::
    - **Hash**: Zadejte SHA256 přehled jednoho z certifikátů TBS nalezených v ověřovacím řetězci. Pokud DNS server, který používáte, poskytuje hotový hash, vyhledejte jej a zkopírujte. V opačném případě jej můžete získat podle pokynů v části [*Získání hashové hodnoty certifikátu*](#obtaining-the-certificate-hash).

    :::note

    Toto pole je nepovinné


:::

    - **Název hostitele**: Zadejte název hostitele DNS serveru. Toto pole se používá k ověření názvu serveru v protokolech DoT a DoQ.

    - Pro **DoH**:
      - **Cesta**: Zadejte cestu k provádění požadavků DoH. Obvykle je to `"/dns-query"`, ale váš poskytovatel může poskytnout jinou cestu.

    -     Pro **DoT a DoQ**:
      - V tomto nástroji obvykle nejsou pro tyto protokoly žádná specifická pole. Jen se ujistěte, že port zadaný v adrese řešitele je správný.

    - V části **Vlastnosti** můžete zkontrolovat příslušné vlastnosti, pokud jsou známé a použitelné pro váš DNS server.

4. Vaše razítko se automaticky vygeneruje a zobrazí se v poli **Razítko**.

### Získání hash certifikátu

Chcete-li vyplnit pole **hash certifikátu** serveru, můžete použít následující příkaz, kterým nahradíte `<IP_ADDRESS>`, `<PORT>` a `<SERVER_NAME>` odpovídajícími hodnotami pro váš DNS server:

```bash
echo | openssl s_client -connect <IP_ADDRESS>:<PORT> -servername <SERVER_NAME> 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256
```

:::caution

Výsledek příkazu hash se může v průběhu času měnit v závislosti na aktualizaci certifikátu serveru. Pokud tedy razítko DNS náhle přestane fungovat, může být nutné přepočítat hash certifikátu a vygenerovat nové razítko. Pravidelná aktualizace razítka DNS pomůže zajistit trvalý bezpečný provoz služby zabezpečeného DNS.

:::

## Použití razítka DNS

Nyní máte vlastní razítko DNS, které můžete použít k nastavení služby zabezpečeného DNS. Toto razítko lze zadat do aplikací AdGuard a AdGuard VPN pro zvýšení soukromí a bezpečnosti na internetu.

## Příklad vytvoření razítka DNS

Uveďme si příklad vytvoření razítka pro AdGuard DNS pomocí DoT:

1. Otevřete [DNSCrypt Stamp Calculator](https://dnscrypt.info/stamps/).

2. Vyberte protokol DNS-over-TLS (DoT).

3. Vyplňte následující pole:

    - **IP adresa**: Zadejte IP adresu a port DNS serveru. V tomto případě je to `94.140.14.14:853`.

    - **Název hostitele**: Zadejte název hostitele DNS serveru. V tomto případě je to `dns.adguard-dns.com`.

    - **Hash**: Proveďte příkaz

    ```bash
    echo | openssl s_client -connect 94.140.14.14:853 -servername dns.adguard-dns.com 2>/dev/null | openssl x509 -outform der | openssl asn1parse -inform der -strparse 4 -noout -out - | openssl dgst -sha256
    ```

    Výsledek je `1ebea9685d57a3063c427ac4f0983f34e73c129b06e7e7705640cacd40c371c8` Tento hash SHA256 certifikátu serveru vložte do pole.

4. Sekci Vlastnosti ponechte prázdnou.

5. Vaše razítko se automaticky vygeneruje a zobrazí se v poli **Razítko**.
