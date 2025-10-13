---
title: Dominios personalizados
sidebar_position: 6
---

Los suscriptores de AdGuard DNS pueden realizar la configuración de sus propios dominios (como `dns.example.com`) en lugar del dominio predeterminado `d.adguard-dns.com`. Esta función está diseñada para ayudar a las empresas a alinear la Protección DNS con su infraestructura, garantizando una integración fluida con las políticas de seguridad corporativas, mientras se mantienen todas las funciones de bloqueo de anuncios y privacidad proporcionadas por AdGuard DNS.

:::note

Los dominios personalizados están disponibles para los usuarios de los planes **Enterprise** y **Equipo**.

:::

## Cómo realizar la configuración de un dominio personalizado

Para configurar un dominio personalizado, inicia sesión en tu panel de control de AdGuard DNS y ve a [_Configuración de la cuenta_](https://adguard-dns.io/es/dashboard/account). Desplázate hacia abajo hasta la configuración avanzada y selecciona _Dominios personalizados_. A continuación, deberá pasar por los tres pasos principales.

1. Elige el protocolo. Aquí, tienes dos opciones:

    - Agrega un dominio DoH (para DNS-over-HTTPS)
    - Agrega un dominio DoT/DoQ (para DNS-over-TLS o DNS-over-QUIC)

   ![Elija el protocolo \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_es_1.png)

2. Después de seleccionar el protocolo, introduce el nombre de dominio preferido (por ejemplo, "example.com") y verifica el registro CNAME.

   ![Registro CNAME \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_es_2.png)

3. Configura un certificado. Para los dominios de DNS-over-TLS/DNS-over-QUIC, deberás cargar un certificado TLS wildcard. Si eliges DNS-over-HTTPS, puedes proporcionar tu propio certificado TLS o permitir que AdGuard DNS genere uno para ti. Una vez verificado, tu dominio personalizado aparecerá en el panel de control, listo para ser utilizado.

   ![Lista de dominios personalizados \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_es_3.png)
