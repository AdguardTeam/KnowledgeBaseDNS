---
title: DNS cifrado
sidebar_position: 6
---

AdGuard Home admite todos los protocolos de cifrado DNS modernos **listos para usar**:

- [DNS -over-HTTPS](https://en.wikipedia.org/wiki/DNS_over_HTTPS)
- [DNS-over-TLS](https://en.wikipedia.org/wiki/DNS_over_TLS)
- [DNS-over-QUIC](https://datatracker.ietf.org/doc/html/rfc9250)

:::note

AdGuard Home admite [DNSCrypt][dnscrypt-info] tanto del lado del cliente, como del lado del servidor. [Aprende a configurar AdGuard Home como un servidor DNSCrypt](#configure-dnscrypt).

:::

Esta guía explica cómo configurar un servidor DNS cifrado con AdGuard Home.

[dnscrypt-info]: https://dnscrypt.info/

## Instalación del servidor {#server-installation}

El propósito de proteger el tráfico DNS es protegerlo de terceros que podrían analizarlo o modificarlo, por ejemplo, del ISP.

{/_TODO(e.burkov):  Use relative links to the docs instead of absolute, see AGDNS-2226._/}

Significa que necesitarás un servidor con una dirección IP pública dedicada. Hay muchos proveedores de servidores en la nube baratos: [DigitalOcean][digital-ocean], [Vultr][vultr], [Linode][linode], etc. Solo elige uno, crea un servidor en la nube allí e [instala AdGuard Inicio](adguard-home/getting-started.md) en tu servidor.

[digital-ocean]: https://digitalocean.com
[vultr]: https://vultr.com
[linode]: https://www.linode.com

## Registrar un nombre de dominio {#register-domain}

En primer lugar, necesita un nombre de dominio. Si nunca has registrado uno, aquí tienes una \[instrucción simple]\[nombre-dominio-registro] que te ayudará con eso.

[domain-name-register]: https://www.pcworld.com/article/241722/web-apps/how-to-register-your-own-domain-name.html

## Obtén un certificado SSL {#certificate}

Tanto `DNS-over-HTTPS` como `DNS-over-TLS` se basan en [encriptación TLS][tls-wikipedia], por lo que necesitarás un certificado SSL para utilizarlos.

Se puede comprar un certificado SSL a una autoridad de certificación (CA), una empresa en la que confían los navegadores y sistemas operativos para inscribir certificados SSL para dominios.

Alternativamente, puedes obtener el certificado de forma gratuita de [Let's Encrypt CA][letsencrypt], una autoridad de certificación gratuita desarrollada por Internet Security Research Group (ISRG).

Esta guía explica cómo obtener un certificado de ellos.

### Usando o CertBot

Certbot es un cliente fácil de usar que obtiene un certificado de Let's Encrypt.

1. Ve a [certbot.eff.org][certbot] y elige _Ninguno de los anteriores_ software y tu sistema operativo.
2. Sigue las instrucciones de instalación y detente antes de llegar a la sección _Empezar_.

#### Obtener un certificado usando DNS challenge

Tienes un nombre de dominio y usar el desafío DNS es la forma más fácil de obtener un certificado.

Ejecuta este comando y sigue las instrucciones del certbot:

```sh
sudo certbot certonly --manual --preferred-challenges=dns --preferred-chain="ISRG Root X1"
```

Al final, obtendrás dos archivos:

- `fullchain.pem`: tu certificado SSL codificado en PEM
- `privkey.pem`: tu clave privada codificada en PEM

Ambos serán necesarios para configurar AdGuard Home.

:::info Importante

Necesitarás utilizar el mismo procedimiento para renovar el certificado existente.

:::

### Usando Lego

También existe una alternativa muy agradable y fácil de usar a CertBot llamada [LEGO][lego-source].

1. Instálalo utilizando [un método apropiado][lego-install].
2. Elige tu proveedor DNS de \[la lista]\[proveedor de lego] y sigue las instrucciones para obtener un certificado.

Además, aquí hay [un script simple][legoagh] que puedes usar para automatizar la generación y renovación de certificados.

[tls-wikipedia]: https://en.wikipedia.org/wiki/Transport_Layer_Security
[letsencrypt]: https://letsencrypt.org
[certbot]: https://certbot.eff.org
[lego-source]: https://go-acme.github.io/lego
[lego-install]: https://go-acme.github.io/lego/installation
[lego-provider]: https://go-acme.github.io/lego/dns
[legoagh]: https://github.com/ameshkov/legoagh

## Configurar AdGuard Home {#configure}

1. Abre la interfaz web de AdGuard Home y ve a _Configuración_.

2. Selecciona la sección _Cifrado_.

   ![Encryption settings screenshot][encryption-screenshot]

3. Copia y pega el contenido del archivo 'fullchain.pem' para introducir el campo bajo _Certificates_ o especificar la ruta hacia el archivo.

4. Copia y pega el contenido del archivo 'privkey.pem' para introducir el campo bajo _Clave privada_ o especifica la ruta hacia el archivo.

5. Introduce tu nombre de dominio como _Nombre del servidor_.

6. Obtén los mensajes de validación exitosa y haz clic en _Guardar configuración_.

:::note

AdGuard Home recargará automáticamente los certificados y/o claves privadas especificados por la ruta del archivo cuando cambien. Una recarga también puede ser activada por una señal 'SIGHUP'.

:::

[encryption-screenshot]: https://cdn.adtidy.org/content/kb/dns/adguard-home/encryption-screenshot.png

## Uso con proxy inverso {#reverse-proxy}

Ya tenemos una \[guía]\[preguntas frecuentes sobre proxy inverso] sobre cómo configurar un servidor proxy inverso para acceder a la interfaz web de AdGuard Home.

AdGuard Home es capaz de restringir las peticiones de DNS mediante HTTPS que proceden del servidor proxy no incluido en la lista "de confianza". De forma predeterminada, está configurado para aceptar Peticiones de direcciones en bucle IPv4 e IPv6.

Para habilitar AdGuard Home para gestionar peticiones de DNS mediante HTTPS desde un servidor proxy inverso, establezca la configuración `trusted_proxies` en `AdGuardHome.yaml` con la Dirección IP del servidor proxy. Si tienes varios servidores proxy, puedes usar un CIDR en lugar de una simple dirección IP.

### Proxy inverso Nginx

Para configurar AdGuard Home para aceptar Peticiones desde el servidor proxy inverso Nginx, asegúrate de que el propio servidor proxy inverso esté configurado correctamente.

El archivo `nginx.conf` debe contener las directivas adecuadas para agregar los headers de reenvo compatibles a la Peticin, que son `X-Real-IP` o `X-Forwarded-For`. Esto se puede lograr con [`ngx_http_realip_module`][ngx-http-realip-module]. En resumen, el módulo toma la Dirección IP real del cliente y la escribe en el header de la Petición HTTP. AdGuard Home recibirá e interpretará el valor de este encabezado como la dirección real del cliente. La dirección del servidor proxy inverso también se recibirá y también se comprobará en comparación con la lista de proxies "trusted".

Otro header que quizá quieras usar como proxy es el header `Host`, que es requerido para que AdGuard Home reconozca peticiones de clientes que tengan un ClientID en sus nombres de host.

Por ejemplo, si la configuración del servidor proxy inverso contiene las siguientes directivas:

```nginx
location /dns-query {
  # …
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP '1.2.3.4';
  proxy_bind 192.168.1.2;
  # …
}
```

AdGuard Home obtendrá `192.168.1.2` como la dirección de su servidor proxy y la comparará con `trusted_proxies`. El `1.2.3.4` será controlado por la configuración de acceso en caso de que el proxy sea "confiable".

### Cloudflare CDN

La red de distribución de contenido de Cloudflare actúa como un proxy inverso que agrega sus [propios encabezados][cloudflare-headers] a las solicitudes reenviadas, que son `CF-Connecting-IP` y `True-Client-IP`. Estos también son compatibles con AdGuard Home, por lo que las [direcciones][cloudflare-addresses] de los servidores proxy inversos se pueden insertar directamente en la lista `trusted_proxies`. Consulta la [referencia oficial de Cloudflare][cloudflare-real-ip] sobre la restauracin de la IP original del visitante.

### Otros encabezados

Otros encabezados HTTP pueden ser compatibles con AdGuard Inicio en el futuro. Sin embargo, cualquier solicitud de funciones relacionada con los encabezados debe intentar resolverse primero configurando el proxy inverso.

Por ejemplo, para modificar el mecanismo de [HTTP Strict Transport Security][hsts] para incluir la directiva experimental `preload`, se podría usar algo como el siguiente fragmento de configuración:

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

## Configurando dispositivos {#configure-devices}

### Android

- Android 9 y superior admiten «DNS-over-TLS» de forma nativa. Para configurarlo, ve a _Configuración_ → _Red e Internet_ → _Avanzado_ → _DNS privado_ e ingresa el nombre del dominio allí.
- [AdGuard para Android][ag-for-android] admite `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` y `DNS-over-QUIC`.
- [Intra][intra] añade soporte a Android para `DNS-over-HTTPS`.

### iOS

- iOS 14 y superiores son compatibles de forma nativa con `DNS-over-TLS` y `DNS-over-HTTPS` mediante perfiles de configuración. Con el fin de facilitar las cosas, AdGuard Home puede generar estos perfiles de configuración para ti. Simplemente dirígete a _Guía de configuración_ → _Privacidad de DNS_ y desplázate hasta iOS.
- [AdGuard para iOS][ag-for-ios] admite `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` y `DNS-over-QUIC`.
- [DNSCloak][dnscloak] soporta `DNS-over-HTTPS` pero con el fin de configurarlo para que use tu propio servidor, necesitarás generar un [DNS Stamp][stamps] para ello.

### Windows

- Windows 10 Build 19628 y superiores admiten «DNS-over-HTTPS» de forma nativa.
- [AdGuard para Windows][ag-for-windows] admite `DNS-over-HTTPS`, `DNS-over-TLS`, `DNSCrypt` y `DNS-over-QUIC`.

### macOS

- macOS Big Sur y superiores son compatibles de forma nativa con `DNS-over-TLS` y `DNS-over-HTTPS` mediante perfiles de configuración. Con el fin de facilitar las cosas, AdGuard Home puede generar estos perfiles de configuración para ti. Simplemente dirígete a _Guía de configuración_ → _Privacidad de DNS_ y desplázate hasta iOS.

### Otras implementaciones

- AdGuard Home en sí mismo puede ser un cliente DNS seguro en cualquier plataforma.
- [dnsproxy][ag-dnsproxy] soporta todos los protocolos DNS seguros conocidos.
- [dnscrypt-proxy][dnscrypt-proxy] soporta `DNS-over-HTTPS`.
- [Mozilla Firefox][firefox] soporta `DNS-over-HTTPS`.

[ag-for-android]: https://adguard.com/en/adguard-android/overview.html
[intra]: https://getintra.org
[ag-for-ios]: https://adguard.com/en/adguard-ios/overview.html
[dnscloak]: https://itunes.apple.com/app/id1452162351
[stamps]: https://dnscrypt.info/stamps
[ag-for-windows]: https://adguard.com/en/adguard-windows/overview.html
[ag-dnsproxy]: https://github.com/AdguardTeam/dnsproxy
[dnscrypt-proxy]: https://github.com/jedisct1/dnscrypt-proxy
[firefox]: https://www.mozilla.org/firefox

## Configuración de DNSCrypt {#configure-dnscrypt}

AdGuard Home es capaz de funcionar como un servidor DNSCrypt. Sin embargo, esta característica solo está disponible mediante el archivo de configuración y no se puede configurar usando la interfaz de usuario web. Esta guía explica cómo hacerlo.

### Generando un archivo de configuración

A continuación se explica cómo generar un archivo de configuración DNSCrypt y apuntar AdGuard Home hacia él:

:::info Importante

Asegúrate de que tu configuración de TLS sea válida y el cifrado esté habilitado.

:::

1. Descarga la última versión de la utilidad \['dnscrypt'] para tu sistema. Extrae el archivo y navega hasta el directorio resultante.

   - En Unix, usando un shell compatible con POSIX:

     (Aquí y más abajo se utiliza `linux-amd64` como ejemplo. Asegúrate de descargar y utilizar el correspondiente a tu plataforma)

     1. Extrae los archivos:

           ```sh
           tar -f ./dnscrypt-linux-amd64-v2.2.3.tar.gz -v -x -z
           ```

        Ejemplo de salida:

           ```none
           linux-amd64/
           linux-amd64/README.md
           linux-amd64/LICENSE
           linux-amd64/dnscrypt
           ```

     2. Navegue hasta el directorio extraído:

           ```sh
           cd ./linux-amd64/
           ```

     3. Genera el archivo de configuración:

           ```sh
           ./dnscrypt generate --provider-name '2.dnscrypt-cert.example.org' --out ./dnscrypt.yaml
           ```

        Ejemplo de salida:

            ```none
            2022/01/02 12:34:56 [info] Generando configuración para 2.dnscrypt-cert.example.org
            2022/02/02 12:34:56 [info] La configuración se ha escrito en ./dnscrypt.yaml
            2022/02/02 12:34:56 [info] Vaya a https://dnscrypt.info/stamps para generar un sello SDNS
            2022/02/02 12:34:56 [info] Puede ejecutar un servidor DNSCrypt usando el siguiente comando:
            2022/02/02 12:34:56 [info] dnscrypt server -c ./dnscrypt.yaml -f 8.8.8.8
            ```

   - En Windows, usando PowerShell:

     (Aquí y más abajo se utiliza `windows-amd64` como ejemplo. Asegúrate de descargar y utilizar el correspondiente a la arquitectura de tu CPU.)

     1. Extrae los archivos:

           ```ps1
           Expand-Archive -Path .\dnscrypt-windows-amd64-v2.2.3.zip
           ```

     2. Navega hasta el directorio extraído:

           ```ps1
           Set-Location -Path .\dnscrypt-windows-amd64-v2.2.3\windows-amd64\
           ```

     3. Genera el archivo de configuración:

           ```ps1
           .\dnscrypt.exe generate --provider-name '2.dnscrypt-cert.example.org' --out .\dnscrypt.yaml
           ```

        Ejemplo de salida:

           ```none
           2022/01/02 12:34:56 [info] Generando configuración para 2.dnscrypt-cert.example.org
           2022/02/02 12:34:56 [info] La configuración se ha escrito en .\dnscrypt.yaml
           2022/02/02 12:34:56 [info] Ve a https://dnscrypt.info/stamps para generar un sello SDNS
           2022/02/02 12:34:56 [info] Puedes ejecutar un servidor DNSCrypt usando el siguiente comando:
           2022/02/02 12:34:56 [info] dnscrypt server -c .\dnscrypt.yaml -f 8.8.8.8
           ```

   Donde `example.org` es el nombre de tu host y `./dnscrypt.yaml` es el nombre del archivo de salida de configuración.

   Puedes añadir el camino al binario en tu `PATH`/`$env:PATH`.

2. En el archivo de configuración (normalmente `AdGuardHome.yaml`), agrega las siguientes líneas:

   ```yaml
   'tls':
     # N.B. The encryption must be enabled.
     'enabled': true
     # …
     'port_dnscrypt': 5443
     'dnscrypt_config_file': './dnscrypt.yaml'
   ```

   Donde `5443` es el puerto para tu servidor DNSCrypt y `./dnscrypt.yaml` es el nombre del archivo de configuración generado en el paso 2.

   :::info Importante

   Detén AdGuard Home antes de cambiar el archivo de configuración.

   :::

   :::tip

   En Windows, se recomienda usar la ruta completa al archivo de configuración. Por ejemplo, `C:\Usuarios\Me\Files\dnscrypt.yaml`.

   :::

[`dnscrypt`]: https://github.com/ameshkov/dnscrypt/releases

### Generando un sello DNSCrypt

A continuación se explica cómo generar un sello DNSCrypt y verificar su instalación:

1. Go to [https://dnscrypt.info/stamps/](https://dnscrypt.info/stamps/).

2. Introduce los datos de tu archivo de configuración DNSCrypt. La _clave pública del proveedor_ es el valor del campo `public_key` en su archivo de configuración DNSCrypt.

   :::note

   Introduce el host con tu puerto personalizado.

   :::

3. Ahora tienes un sello que se ve algo así:

   ```none
   sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn
   ```

   Revisa tu instalación ejecutando:

   ```sh
   ./dnscrypt lookup-stamp \
       --domain 'example.com' \
       --stamp 'sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn' \
       --type 'a'
   ```

   O bien, en Windows:

   ```ps1
   .\dnscrypt.exe lookup-stamp `
       --domain 'example.com' `
       --stamp 'sdns://AQcAAAAAAAAADTEyNy4wLjAuMTo0NDMg8R3bzEgX5UOEX93Uy4gYSbZCJvPeOXYlZp2HuRm8T7AbMi5kbnNjcnlwdC1jZXJ0LmV4YW1wbGUub3Jn' `
       --type 'a'
   ```

   Donde `example.com` es el nombre de dominio a consultar.

### Configuración de dispositivos para usar DNSCrypt

#### Todas las plataformas

- [`dnscrypt-proxy`][prox] (implementación de referencia). DNSCrypt-Proxy es un proxy de línea de comandos para Linux, BSD, Windows, macOS, Android y más.

#### Android

- [AdGuard para Android][andr] es compatible con DNSCrypt.

#### iOS

- [AdGuard para iOS][ios] es compatible con DNSCrypt.
- [DNSCloak][cloa] usa `dnscrypt-proxy` internamente y admite DNSCrypt.

#### Windows

- [AdGuard para Windows][win] admite DNSCrypt.
- [Simple DNSCrypt][simp] es una herramienta de gestión sencilla para configurar y ejecutar `dnscrypt-proxy` en Windows.

Consulta el sitio de [DNSCrypt][imps1] y [DNS privacy project’s list][imps2] para más información.

[andr]: https://adguard.com/en/adguard-android/overview.html
[cloa]: https://itunes.apple.com/app/id1452162351
[imps1]: https://dnscrypt.info/implementations
[imps2]: https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Clients
[ios]: https://adguard.com/en/adguard-ios/overview.html
[prox]: https://github.com/DNSCrypt/dnscrypt-proxy
[simp]: https://simplednscrypt.org/
[win]: https://adguard.com/en/adguard-windows/overview.html
