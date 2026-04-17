---
title: DNS šifrování
sidebar_position: 6
---

AdGuard Home podporuje všechny moderní protokoly šifrování DNS **ihned po instalaci**:

- [DNS-over-HTTPS](https://en.wikipedia.org/wiki/DNS_over_HTTPS)
- [DNS-over-TLS](https://en.wikipedia.org/wiki/DNS_over_TLS)
- [DNS-over-QUIC](https://datatracker.ietf.org/doc/html/rfc9250)

:::note

AdGuard Home podporuje jak klientovou, tak serverovou stranu [DNSCrypt][dnscrypt-info]. [Zjistěte, jak nakonfigurovat AdGuard Home jako server DNSCrypt](#configure-dnscrypt).

:::

Tento průvodce vysvětluje, jak nastavit šifrovaný DNS server s AdGuard Home.

[dnscrypt-info]: https://dnscrypt.info/

## Instalace serveru {#server-installation}

Účelem zabezpečení DNS provozu je ochrana před třetími stranami, které by jej mohly analyzovat nebo upravovat, např. před poskytovateli internetových služeb.

{/_TODO(e.burkov):  Use relative links to the docs instead of absolute, see AGDNS-2226._/}

To znamená, že budete potřebovat server s veřejnou vyhrazenou IP adresou. Existuje spousta levných poskytovatelů cloudových serverů: [DigitalOcean][digital-ocean], [Vultr][vultr], [Linode][linode] atd. Stačí si vybrat jeden, vytvořit tam cloudový server a [nainstalovat AdGuard Home](adguard-home/getting-started.md) na svůj server.

[digital-ocean]: https://digitalocean.com
[vultr]: https://vultr.com
[linode]: https://www.linode.com

## Registrace domény {#register-domain}

Nejprve potřebujete doménu. Pokud jste ještě nikdy žádnou nezaregistrovali, zde najdete [jednoduchý návod][domain-name-register], který vám s tím pomůže.

[domain-name-register]: https://www.pcworld.com/article/241722/web-apps/how-to-register-your-own-domain-name.html

## Získání certifikátu SSL {#certificate}

Jak `DNS-over-HTTPS`, tak `DNS-over-TLS` jsou založeny na [šifrování TLS][tls-wikipedia], takže k jejich použití budete potřebovat certifikát SSL.

SSL certifikát lze zakoupit od certifikační autority (CA), společnosti, které prohlížeče a operační systémy důvěřují a která vydává SSL certifikáty pro domény.

Alternativně můžete certifikát získat zdarma od [Let’s Encrypt CA][letsencrypt], bezplatné certifikační autority vyvinuté skupinou Internet Security Research Group (ISRG).

Tato příručka vysvětluje, jak od nich získat certifikát.

### Použití CertBot

CertBot je snadno použitelný klient, který stahuje certifikáty od Let’s Encrypt.

1. Přejděte na [certbot.eff.org][certbot] a vyberte možnost _Žádný z výše uvedených_ softwarů a svůj operační systém.
2. Postupujte podle instalačních pokynů a zastavte se před sekcí _Začínáme_.

#### Získání certifikátu pomocí DNS výzvy

Máte doménové jméno, nejjednodušším způsobem, jak získat certifikát, je použít DNS výzvy.

Spusťte tento příkaz a postupujte podle pokynů CertBot:

```sh
sudo certbot certonly --manual --preferred-challenges=dns --preferred-chain="ISRG Root X1"
```

Nakonec získáte dva soubory:

- `fullchain.pem`: váš SSL certifikát kódovaný v PEM
- `privkey.pem`: váš soukromý klíč zakódovaný v PEM

Obojí bude nutné pro konfiguraci AdGuard Home.

:::info Důležité

K obnovení stávajícího certifikátu budete muset použít stejný postup.

:::

### Použití LEGO

Existuje také velmi příjemná a snadno použitelná alternativa k CertBot s názvem [LEGO][lego-source].

1. Instalujte jej pomocí [vhodné metody][lego-install].
2. Vyberte si svého poskytovatele DNS ze [seznamu][lego-provider] a postupujte podle pokynů k získání certifikátu.

Zde je také [jednoduchý skript][legoagh], který můžete použít k automatizaci generování a obnovování certifikátů.

[tls-wikipedia]: https://en.wikipedia.org/wiki/Transport_Layer_Security
[letsencrypt]: https://letsencrypt.org
[certbot]: https://certbot.eff.org
[lego-source]: https://go-acme.github.io/lego
[lego-install]: https://go-acme.github.io/lego/installation
[lego-provider]: https://go-acme.github.io/lego/dns
[legoagh]: https://github.com/ameshkov/legoagh

## Konfigurace AdGuard Home {#configure}

1. Otevřete webové rozhraní AdGuard Home a přejděte do _Nastavení_.

2. Vyberte sekci _Šifrování_.

   ![Encryption settings screenshot][encryption-screenshot]

3. Zkopírujte/vložte obsah souboru `fullchain.pem` do vstupního pole v sekci _Certifikáty_ nebo zadejte cestu k souboru.

4. Zkopírujte/vložte obsah souboru `privkey.pem` do vstupního pole v sekci _Soukromý klíč_ nebo zadejte cestu k souboru.

5. Zadejte název své domény do sekce _Název serveru_.

6. Získejte úspěšné ověřovací zprávy a klikněte na _Uložit nastavení_.

:::note

AdGuard Home automaticky znovu načte certifikáty a/nebo soukromé klíče určené cestou k souboru, když dojde k jejich změně. Znovunačtení může být také spuštěno signálem `SIGHUP`.

:::

[encryption-screenshot]: https://cdn.adtidy.org/content/kb/dns/adguard-home/encryption-screenshot.png

## Použití s reverzním proxy {#reverse-proxy}

Již máme [průvodce][reverse-proxy-faq] konfigurací reverzního proxy serveru pro přístup k webovému rozhraní AdGuard Home.

AdGuard Home je schopen omezit požadavky DNS-over-HTTPS, které pocházejí z proxy serveru, který není zahrnut do seznamu "důvěryhodných". Ve výchozím nastavení je nakonfigurován tak, aby přijímal požadavky z adres IPv4 a IPv6 loopback.

Chcete-li umožnit AdGuard Home zpracovávat požadavky DNS-over-HTTPS z reverzního proxy serveru, nastavte v souboru `AdGuardHome.yaml` parametr `trusted_proxies` na IP adresu proxy serveru. Pokud máte několik proxy serverů, můžete místo jednoduché IP adresy použít CIDR.

### Reverzní proxy Nginx

Chcete-li nakonfigurovat AdGuard Home tak, aby přijímal požadavky od reverzního proxy serveru Nginx, ujistěte se, že je reverzní proxy server správně nakonfigurován.

Soubor `nginx.conf` by měl obsahovat příslušné direktivy pro přidání podporovaných hlaviček předávání k požadavku, kterými jsou `X-Real-IP` nebo `X-Forwarded-For`. Toho lze dosáhnout pomocí [`ngx_http_realip_module`][ngx-http-realip-module]. Stručně řečeno, modul vezme skutečnou IP adresu klienta a zapíše ji do hlavičky HTTP požadavku. AdGuard Home přijme a interpretuje hodnotu tohoto záhlaví jako skutečnou adresu klienta. Adresa reverzního proxy serveru bude také přijata a zkontrolována podle seznamu "důvěryhodných" proxy serverů.

Další hlavičkou, kterou můžete chtít proxy, je hlavička `Host`, která je nutná k tomu, aby AdGuard Home rozpoznal požadavky od klientů, kteří mají ClientID ve svých názvech hostitele.

Například pokud konfigurace reverzního proxy serveru obsahuje následující direktivy:

```nginx
location /dns-query {
  # …
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP '1.2.3.4';
  proxy_bind 192.168.1.2;
  # …
}
```

AdGuard Home získá adresu `192.168.1.2` jako adresu vašeho proxy serveru a porovná ji s `trusted_proxies`. V případě, že je proxy "důvěryhodný", bude `1.2.3.4` řízeno nastavením přístupu.

### Cloudflare CDN

Síť pro doručování obsahu Cloudflare funguje jako reverzní proxy, která připojuje své [vlastní hlavičky][cloudflare-headers] k předávaným požadavkům, kterými jsou `CF-Connecting-IP` a `True-Client-IP`. Tyto jsou také podporovány AdGuard Home, takže [adresy][cloudflare-addresses] reverzních proxy serverů mohou být vloženy přímo do seznamu `trusted_proxies`. Viz [oficiální reference Cloudflare][cloudflare-real-ip] ohledně obnovení původní IP adresy návštěvníka.

### Jiné hlavičky

Jiné HTTP hlavičky mohou být v budoucnu podporovány AdGuard Home. Jakékoli požadavky na funkce související s hlavičkami by se však měly nejprve pokusit vyřešit konfigurací samotného reverzního proxy serveru.

Například pro úpravu mechanismu [HTTP Strict Transport Security][hsts] tak, aby zahrnoval experimentální direktivu `preload`, lze použít následující konfiguraci:

```nginx
location /dns-query {
  # …
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
  # …
}
```

{/_TODO(e.burkov):  Use relative links to the docs instead of absolute, see AGDNS-2226._/}

[reverse-proxy-faq]: /adguard-home/faq.md#reverseproxy
[ngx-http-realip-module]: https://nginx.org/en/docs/http/ngx_http_realip_module.html
[cloudflare-headers]: https://support.cloudflare.com/hc/en-us/articles/200170986
[cloudflare-addresses]: https://www.cloudflare.com/ips
[cloudflare-real-ip]: https://support.cloudflare.com/hc/en-us/articles/200170786
[hsts]: https://datatracker.ietf.org/doc/html/rfc6797

## Konfigurace zařízení {#configure-devices}

### Android

- Android 9 a vyšší nativně podporuje `DNS-over-TLS`. Chcete-li jej nakonfigurovat, přejděte do _Nastavení_ → _Síť a internet_ → _Pokročilé_ → _Soukromý DNS_ a zadejte tam název své domény.
- [AdGuard pro Android][ag-for-android] podporuje `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` a `DNS-over-QUIC`.
- [Intra][intra] přidává podporu `DNS-over-HTTPS` do systému Android.

### iOS

- iOS 14 a vyšší podporují `DNS-over-TLS` a `DNS-over-HTTPS` nativně prostřednictvím konfiguračních profilů. Abychom vám to usnadnili, AdGuard Home může tyto konfigurační profily vygenerovat za vás. Stačí přejít do _Průvodce nastavením_ → _Soukromý DNS_ a přejít na iOS.
- [AdGuard pro iOS][ag-for-ios] podporuje `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` a `DNS-over-QUIC`.
- [DNSCloak][dnscloak] podporuje `DNS-over-HTTPS`, ale abyste jej mohli nakonfigurovat pro použití vlastního serveru, budete muset pro něj vygenerovat [DNS razítko][stamps].

### Windows

- Windows 10 Build 19628 a vyšší nativně podporují `DNS-over-HTTPS`.
- [AdGuard pro Windows][ag-for-windows] podporuje `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` a `DNS-over-QUIC`.

### macOS

- macOS Big Sur a vyšší podporují `DNS-over-TLS` a `DNS-over-HTTPS` nativně prostřednictvím konfiguračních profilů. Abychom vám to usnadnili, AdGuard Home může tyto konfigurační profily vygenerovat za vás. Stačí přejít do _Průvodce nastavením_ → _Soukromý DNS_ a přejít na iOS.

### Další implementace

- Samotný AdGuard Home může být bezpečným klientem DNS na jakékoli platformě.
- [dnsproxy][ag-dnsproxy] podporuje všechny známé bezpečné DNS protokoly.
- [dnscrypt-proxy][dnscrypt-proxy] podporuje `DNS-over-HTTPS`.
- [Mozilla Firefox][firefox] podporuje `DNS-over-HTTPS`.

[ag-for-android]: https://adguard.com/en/adguard-android/overview.html
[intra]: https://getintra.org
[ag-for-ios]: https://adguard.com/en/adguard-ios/overview.html
[dnscloak]: https://itunes.apple.com/app/id1452162351
[stamps]: https://dnscrypt.info/stamps
[ag-for-windows]: https://adguard.com/en/adguard-windows/overview.html
[ag-dnsproxy]: https://github.com/AdguardTeam/dnsproxy
[dnscrypt-proxy]: https://github.com/jedisct1/dnscrypt-proxy
[firefox]: https://www.mozilla.org/firefox

## Konfigurace DNSCrypt {#configure-dnscrypt}

AdGuard Home může fungovat jako server DNSCrypt. Tato funkce je však dostupná pouze prostřednictvím konfiguračního souboru a nelze ji nastavit pomocí webového uživatelského rozhraní. V této příručce je vysvětleno, jak to udělat.

### Generování konfiguračního souboru

Zde je návod, jak vygenerovat konfigurační soubor DNSCrypt a nasměrovat na něj AdGuard Home:

:::info Důležité

Ujistěte se, že vaše nastavení TLS je platné a šifrování je povoleno.

:::

1. Získejte nejnovější verzi nástroje [`dnscrypt`] pro váš systém. Rozbalte archiv a přejděte do výsledného adresáře.

   - V systému Unix pomocí shellu kompatibilního s POSIX:

     (Zde a níže je jako příklad použit `linux-amd64`. Nezapomeňte si stáhnout a používat verzi pro vaši platformu.)

     1. Rozbalte soubory:

           ```sh
           tar -f ./dnscrypt-linux-amd64-v2.2.3.tar.gz -v -x -z
           ```

        Příklad výstupu:

           ```none
           linux-amd64/
           linux-amd64/README.md
           linux-amd64/LICENSE
           linux-amd64/dnscrypt
           ```

     2. Přejděte do rozbaleného adresáře:

           ```sh
           cd ./linux-amd64/
           ```

     3. Vygenerujte konfigurační soubor:

           ```sh
           ./dnscrypt generate --provider-name '2.dnscrypt-cert.example.org' --out ./dnscrypt.yaml
           ```

        Příklad výstupu:

            ```none
            2022/01/02 12:34:56 [info] Generating configuration for 2.dnscrypt-cert.example.org
            2022/02/02 12:34:56 [info] Configuration has been written to ./dnscrypt.yaml
            2022/02/02 12:34:56 [info] Go to https://dnscrypt.info/stamps to generate an SDNS stamp
            2022/02/02 12:34:56 [info] You can run a DNSCrypt server using the following command:
            2022/02/02 12:34:56 [info] dnscrypt server -c ./dnscrypt.yaml -f 8.8.8.8
            ```

   - Ve Windows pomocí PowerShell:

     (Zde a níže je jako příklad použit `windows-arm64`. Nezapomeňte si stáhnout a používat verzi pro vaši architekturu CPU.)

     1. Rozbalte soubory:

           ```ps1
           Expand-Archive -Path .\dnscrypt-windows-amd64-v2.2.3.zip
           ```

     2. Přejděte do rozbaleného adresáře:

           ```ps1
           Set-Location -Path .\dnscrypt-windows-amd64-v2.2.3\windows-amd64\
           ```

     3. Vygenerujte konfigurační soubor:

           ```ps1
           .\dnscrypt.exe generate --provider-name '2.dnscrypt-cert.example.org' --out .\dnscrypt.yaml
           ```

        Příklad výstupu:

           ```none
           2022/01/02 12:34:56 [info] Generating configuration for 2.dnscrypt-cert.example.org
           2022/02/02 12:34:56 [info] Configuration has been written to .\dnscrypt.yaml
           2022/02/02 12:34:56 [info] Go to https://dnscrypt.info/stamps to generate an SDNS stamp
           2022/02/02 12:34:56 [info] You can run a DNSCrypt server using the following command:
           2022/02/02 12:34:56 [info] dnscrypt server -c .\dnscrypt.yaml -f 8.8.8.8
           ```

   Kde `example.org` je název vašeho hostitele a `./dnscrypt.yaml` je název výstupního souboru konfigurace.

   Cestu k binárnímu souboru můžete přidat do `PATH`/`$env:PATH`.

2. Do konfiguračního souboru (obvykle `AdGuardHome.yaml`) přidejte následující řádky:

   ```yaml
   'tls':
     # N.B. The encryption must be enabled.
     'enabled': true
     # …
     'port_dnscrypt': 5443
     'dnscrypt_config_file': './dnscrypt.yaml'
   ```

   Kde `5443` je port pro váš server DNSCrypt a `./dnscrypt.yaml` je název konfiguračního souboru vygenerovaného v kroku 2.

   :::info Důležité

   Před změnou konfiguračního souboru ukončete AdGuard Home.

   :::

   :::tip

   Ve Windows se doporučuje použít úplnou cestu ke konfiguračnímu souboru. Např. `C:\Users\Me\Files\dnscrypt.yaml`.

   :::

[`dnscrypt`]: https://github.com/ameshkov/dnscrypt/releases

### Generování razítka DNSCrypt

Zde je návod, jak vygenerovat razítko DNSCrypt a zkontrolovat instalaci:

1. Go to [https://dnscrypt.info/stamps/](https://dnscrypt.info/stamps/).

2. Zadejte údaje z konfiguračního souboru DNSCrypt. _Veřejný klíč poskytovatele_ je hodnota pole `public_key` ve vašem konfiguračním souboru DNSCrypt.

   :::note

   Zadejte hostitele s vaším vlastním portem.

   :::

3. Nyní máte razítko, které vypadá přibližně takto:

   ```none
   sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn
   ```

   Zkontrolujte svou instalaci spuštěním:

   ```sh
   ./dnscrypt lookup-stamp \
       --domain 'example.com' \
       --stamp 'sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn' \
       --type 'a'
   ```

   Nebo ve Windows:

   ```ps1
   .\dnscrypt.exe lookup-stamp `
       --domain 'example.com' `
       --stamp 'sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn' `
       --type 'a'
   ```

   Kde `example.com` je název domény, který chcete vyhledat.

### Konfigurace zařízení pro použití DNSCrypt

#### Všechny platformy

- [`dnscrypt-proxy`][prox] (referenční implementace). DNSCrypt-Proxy je proxy pro příkazový řádek pro Linux, BSD, Windows, macOS, Android a další.

#### Android

- [AdGuard pro Android][andr] podporuje DNSCrypt.

#### iOS

- [AdGuard pro iOS][ios] podporuje DNSCrypt.
- [DNSCloak][cloa] používá interně `dnscrypt-proxy` a podporuje DNSCrypt.

#### Windows

- [AdGuard pro Windows][win] podporuje DNSCrypt.
- [Simple DNSCrypt][simp] je jednoduchý nástroj pro správu, který slouží ke konfiguraci a spouštění `dnscrypt-proxy` v systému Windows.

Více informací najdete na [webových stránkách DNSCrypt][imps1] a v [seznamu projektů na ochranu soukromí v DNS][imps2].

[andr]: https://adguard.com/en/adguard-android/overview.html
[cloa]: https://itunes.apple.com/app/id1452162351
[imps1]: https://dnscrypt.info/implementations
[imps2]: https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Clients
[ios]: https://adguard.com/en/adguard-ios/overview.html
[prox]: https://github.com/DNSCrypt/dnscrypt-proxy
[simp]: https://simplednscrypt.org/
[win]: https://adguard.com/en/adguard-windows/overview.html
