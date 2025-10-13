---
title: Resumen
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    API info is from here:
    https://api.adguard-dns.io/static/api/API.md
-->

AdGuard DNS proporciona una API REST que puede ser utilizada para integrar tus aplicaciones con él.

## Autenticación

### Generar el identificador de acceso

Realiza una petición POST para la siguiente URL con los parámetros dados para generar el `access_token`:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parámetro             | Descripción                                                                                 |
|:--------------------- |:------------------------------------------------------------------------------------------- |
| **nombre de usuario** | Correo electrónico de la cuenta                                                             |
| **contraseña**        | Contraseña de la cuenta                                                                     |
| mfa_token             | Código de autenticación de dos factores (si está activada en la configuración de la cuenta) |

A continuación, obtendrás tanto el `access_token` como el `refresh_token`.

- El `access_token` expirará después de algunos segundos especificados (representados por el parámetro `expires_in` en la respuesta). Puedes volver a generar un nuevo `access_token` utilizando él `refresh_token` (Consulta: `Generate Access Token from Refresh Token`).

- Él `refresh_token` es permanente. Para eliminar un `refresh_token`, consulta: `Revoking a Refresh Token`.

#### Ejemplo de petición

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'username=user%40adguard.com' \
    -d 'password=********' \
    -d 'mfa_token=727810'
```

#### Ejemplo de respuesta

```json
{
  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2620978
}
```

### Generar un identificador de acceso a partir de un identificador de actualización

Los tokens de acceso tienen una validez limitada. Una vez que expire, tu aplicación tendrá que usar `refresh token` para solicitar un nuevo `access token`.

Realiza la siguiente solicitud POST con los parámetros dados para obtener un nuevo identificador de acceso:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parámetro         | Descripción                                                                     |
|:----------------- |:------------------------------------------------------------------------------- |
| **refresh_token** | `REFRESH TOKEN` con el cual se deberá generar un nuevo identificador de acceso. |

#### Ejemplo de petición

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

#### Ejemplo de respuesta

```json
{
  "access_token": "xQnT7GYT6Ag--3oY_EcOOdXe-I0",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2627999
}
```

### Eliminación de un identificador de actualización

Para eliminar un identificador de actualización, realiza una solicitud POST con los parámetros indicados:

`https://api.adguard-dns.io/oapi/v1/revoke_token`

#### Ejemplo de petición

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/revoke_token' -i -X POST \
    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

| Parámetro         | Descripción                          |
|:----------------- |:------------------------------------ |
| **refresh_token** | `REFRESH TOKEN` que va a ser anulado |

### Punto final de autorización

> Para acceder a este punto final, necesitas contactarnos en **devteam@adguard.com**. Por favor, describe la razón y los casos de uso para este punto final, así como proporciona la URI de redirección. Tras la aprobación, recibirás un identificador de cliente único, que debe ser utilizado para el parámetro **client_id**.

El punto final **/oapi/v1/oauth_authorize** se utiliza para interactuar con el propietario del recurso y obtener la autorización para acceder al recurso protegido.

El servicio te redirige a AdGuard para autenticarte (si aún no has iniciado sesión) y luego de vuelta a tu aplicación.

Los parámetros de solicitud del punto final **/oapi/v1/oauth_authorize** son:

| Parámetro         | Descripción                                                                                                                                                                  |
|:----------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **response_type** | Indica al servidor de autorización qué permiso ejecutar                                                                                                                      |
| **client_id**     | El ID del cliente OAuth que pide autorización                                                                                                                                |
| **redirect_uri**  | Contiene una URL. Una respuesta exitosa de este punto final resulta en una redirección a esta URL                                                                            |
| **state**         | Un valor opaco utilizado para fines de seguridad. Si este parámetro de solicitud se establece en la solicitud, se devuelve a la aplicación como parte de la **redirect_uri** |
| **aid**           | Identificador de afiliado                                                                                                                                                    |

Por ejemplo:

```http request
https://api.adguard-dns.io/oapi/v1/oauth_authorize?response_type=token&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&state=1jbmuc0m9WTr1T6dOO82
```

Para informar al servidor de autorización qué tipo de permiso usar, se utiliza el parámetro de solicitud **response_type** de la siguiente manera:

- Para el permiso implícito, utiliza **response_type=token** para incluir un token de acceso.

Una respuesta exitosa es **302 Found**, que desencadena una redirección a **redirect_uri** (que es un parámetro de solicitud). Los parámetros de respuesta están incrustados en el componente de fragmento (la parte después de `#`) del parámetro **redirect_uri** en el encabezado **Location**.

Por ejemplo:

```http request
HTTP/1.1 302 Found
Location: REDIRECT_URI#access_token=...&token_type=Bearer&expires_in=3600&state=1jbmuc0m9WTr1T6dOO82
```

### Accediendo a la API

Una vez generados el identificador de acceso y de actualización, se pueden realizar llamadas a la API pasando el identificador de acceso en el encabezado.

- El nombre de la cabecera debe ser `Autorización`
- El valor del encabezado debe ser `Portador {access_token}`

## API

### Referencia

Please see the [method’s reference](reference.md).

### Especificaciones de OpenAPI

OpenAPI specification is available at [https://api.adguard-dns.io/swagger/openapi.json][openapi].

Puedes utilizar diferentes herramientas para ver la lista disponible de los métodos de la API. Por ejemplo, puedes abrir este archivo en [https://editor.swagger.io/][swagger].

### Lista de cambios

El registro de cambios completo de la API de AdGuard DNS está disponible en [esta página](private-dns/api/changelog.md).

## Comentarios

Si deseas que esta API se amplíe con nuevos métodos, envía un correo electrónico a `devteam@adguard.com` y comunícanos qué te gustaría que se agregara.

[openapi]: https://api.adguard-dns.io/swagger/openapi.json
[swagger]: https://editor.swagger.io/
