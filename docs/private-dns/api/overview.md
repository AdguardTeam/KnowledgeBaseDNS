---
title: Overview
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    API info is from here:
    https://api.adguard-dns.io/static/api/API.md
-->

AdGuard DNS provides a REST API you can use to integrate your apps with it.

## Authentication

### Generate Access token

Make a POST request for the following URL with the given params to generate the `access_token`:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parameter    | Description                                                      |
|:------------ |:---------------------------------------------------------------- |
| **username** | Account email                                                    |
| **password** | Account password                                                 |
| mfa_token    | Two-Factor authentication token (if enabled in account settings) |

In the response, you will get both `access_token` and `refresh_token`.

- The `access_token` will expire after some specified seconds (represented by
  the `expires_in` param in the response). You can regenerate a new `access_token`
  using the `refresh_token` (Refer: `Generate Access Token from Refresh Token`).

- The `refresh_token` is permanent. To revoke a `refresh_token`, refer: `Revoking a Refresh Token`.

#### Example request

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'username=user%40adguard.com' \
    -d 'password=********' \
    -d 'mfa_token=727810'
```

#### Example response

```json
{
  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2620978
}
```

### Generate Access Token from Refresh Token

Access tokens have limited validity. Once it expires, your app will have to use the `refresh token` to request for a new `access token`.

Make the following POST request with the given params to get a new access token:

`https://api.adguard-dns.io/oapi/v1/oauth_token`

| Parameter         | Description                                                         |
|:----------------- |:------------------------------------------------------------------- |
| **refresh_token** | `REFRESH TOKEN` using which a new access token has to be generated. |

#### Example request

```bash
$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

#### Example response

```json
{
  "access_token": "xQnT7GYT6Ag--3oY_EcOOdXe-I0",
  "token_type": "bearer",
  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",
  "expires_in": 2627999
}
```

### Revoking a Refresh Token

To revoke a refresh token, make the following POST request with the given params:

`https://api.adguard-dns.io/oapi/v1/revoke_token`

#### Request Example

```bash
$ curl 'https://api.adguard-dns.com/oapi/v1/revoke_token' -i -X POST \
    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'
```

| Parameter         | Description                            |
|:----------------- |:-------------------------------------- |
| **refresh_token** | `REFRESH TOKEN` which is to be revoked |

### Authorization endpoint

> To access this endpoint, you need to contact us at **devteam@adguard.com**.
> Please describe the reason and use cases for this endpoint, as well as provide the redirect URI.
> Upon approval, you will receive a unique client identifier, which should be used for the **client_id** parameter.

The **/oapi/v1/oauth_authorize** endpoint is used to interact with the resource owner and get the authorization to access the protected resource.

The service redirects you to AdGuard to authenticate (if you are not already logged in) and then back to your application.

The request parameters of the **/oapi/v1/oauth_authorize** endpoint are:

| Parameter         | Description             |
|:------------------|:------------------------|
| **response_type** | Tells the authorization server which grant to execute |
| **client_id**     | The ID of the OAuth client that asks for authorization |
| **redirect_uri**  | Contains a URL. A successful response from this endpoint results in a redirect to this URL |
| **state**         | An opaque value, used for security purposes. If this request parameter is set in the request, it is returned to the application as part of the **redirect_uri** |
| **aid**           | Affiliate identifier |

For example:

```http request
https://api.adguard-dns.io/oapi/v1/oauth_authorize?response_type=token&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&state=1jbmuc0m9WTr1T6dOO82
```

To inform the authorization server which grant type to use, the **response_type** request parameter is used as follows:

- For the Implicit grant, use **response_type=token** to include an access token.

A successful response is **302 Found**, which triggers a redirect to **redirect_uri** (which is a request parameter). The response parameters are embedded in the fragment component (the part after `#`) of the **redirect_uri** parameter in the **Location** header.

For example:

```http request
HTTP/1.1 302 Found
Location: REDIRECT_URI#access_token=...&token_type=Bearer&expires_in=3600&state=1jbmuc0m9WTr1T6dOO82
```

### Accessing API

Once the access and the refresh tokens are generated, API calls can be made by passing the access token in the header.

- Header name should be `Authorization`
- Header value should be `Bearer {access_token}`

## API

### Reference

Please see the methods reference [here](reference.md).

### OpenAPI spec

OpenAPI specification is available at [https://api.adguard-dns.io/static/swagger/openapi.json][openapi].

You can use different tools to view the list of available API methods. For instance, you can open this file in [https://editor.swagger.io/][swagger].

[openapi]: https://api.adguard-dns.io/static/swagger/openapi.json
[swagger]: https://editor.swagger.io/

### Changelog

The complete AdGuard DNS API changelog is available on [this page](private-dns/api/changelog.md).

## Feedback

If you would like this API to be extended with new methods, please email us to `devteam@adguard.com` and let us know what you would like to be added.
