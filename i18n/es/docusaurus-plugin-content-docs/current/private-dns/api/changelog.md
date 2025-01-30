---
title: Lista de cambios
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<!--
    Changelog is from here:
    https://api.adguard-dns.io/static/api/CHANGELOG.md
-->

Este artículo contiene el registro de cambios para la [API de AdGuard DNS] (private-dns/api/overview.md).

## v1.10

_Released on December 12, 2024_

Added a new DNS server setting — `block_chrome_prefetch`. It disables _Private prefetch proxy_ in Chrome. When this feature is enabled, Chrome will sometimes prefetch links on the Google Search results page and other participating websites even before the user clicks them.

## v1.9

_Lanzado el 11 de julio de 2024_

- Añadida funcionalidad de conexión automática de dispositivos:
  - Nueva configuración del servidor DNS — `auto_connect_devices_enabled`, que permite la aprobación para dispositivos con conexión automática a través de un tipo de enlace específico
  - Nuevo campo en el dispositivo — `auto_device`, indicando que el dispositivo está conectado automáticamente
- Reemplazado `int` por `long` para `queries` en CategoryQueriesStats, para `used` en AccountLimits, y para `blocked` y `queries` en QueriesStats

## v1.8

_Lanzado el 20 de abril del 2024_

- Se añadió soporte para la DNS-over-HTTPS con autenticación:
  - Nueva operación — Restablecer la contraseña de la DNS-over-HTTPS para el dispositivo
  - Nueva configuración del dispositivo - `detect_doh_auth_only`. Deshabilita todos los métodos de conexión DNS excepto la DNS-over-HTTPS con autenticación
  - Nuevo campo en Direcciones DNS del dispositivo: `dns_over_https_with_auth_url`. Indica la URL a utilizar al conectarse usando DNS-over-HTTPS con autenticación

## v1.7

_Lanzado el 11 de marzo de 2024_

- Añadida la funcionalidad de direcciones IPv4 dedicadas:
  - Las direcciones IPv4 dedicadas ahora pueden utilizarse en dispositivos para la configuración del servidor DNS
  - La dirección IPv4 dedicada ahora está asociada con el dispositivo al que está vinculado, de modo que las consultas realizadas a esta dirección quedan registradas para ese dispositivo
- Se agregaron nuevas operaciones:
  - Listar todas las direcciones IPv4 dedicadas disponibles
  - Asignar una nueva dirección IPv4 dedicada
  - Vincular una dirección IPv4 disponible a un dispositivo
  - Desvincular una dirección IPv4 de un dispositivo
  - Solicitar información sobre las direcciones dedicadas asociadas a un dispositivo
- Añadidos nuevos límites a Límites de cuenta:
  - `dedicated_ipv4` - proporciona información sobre la cantidad de direcciones IPv4 dedicadas ya asignadas, así como el límite de las mismas
- Se eliminó el campo obsoleto de DNSServerSettings:
  - `safebrowsing_enabled`

## v1.6

_Lanzado el 22 de enero del 2024_

- Añadida una nueva sección "Configuración de acceso" para los perfiles DNS (`access_settings`). Personalizando estos campos, podrás proteger tu servidor de AdGuard DNS de accesos no autorizados:

  - `allowed_clients` — aquí puedes especificar qué clientes pueden usar tu servidor DNS. Este campo tendrá prioridad sobre el campo `blocked_clients`
  - `blocked_clients` — aquí puedes especificar qué clientes no pueden usar tu servidor DNS
  - `blocked_domain_rules` — aquí puedes especificar qué dominios no pueden acceder a tu servidor DNS, así como definir dichos dominios con comodines y reglas de filtrado DNS

- Añadidos nuevos límites a Límites de cuenta:

  - `access_rules` proporciona la suma de los valores de `blocked_clients` y `blocked_domain_rules` utilizados actualmente, así como el límite de las reglas de acceso
  - `user_rules` muestra la cantidad de reglas de usuario creadas, así como el límite de las mismas

- Añadida nueva configuración: `ip_log_enabled` para poder registrar las direcciones IP y los dominios de los clientes

- Añadido nuevo código de error `FIELD_REACHED_LIMIT` para indicar cuándo se alcanzaron los límites:

  - Para el número total de `blocked_clients` y `blocked_domain_rules` en la configuración de acceso
  - Para `rules` en la configuración de reglas de usuario personalizadas

## v1.5

_Lanzado el 16 de junio del 2023_

- Se agregó una nueva configuración `block_nrd` y se agrupó todas las configuraciones relacionadas con la seguridad en un solo lugar

### El modelo para la configuración de navegación segura se ha cambiado

De:

```json
{
   "enabled": true
}
```

A:

```json
{
   "enabled": true,
   "block_dangerous_domains": true,
   "block_nrd": false
}
```

donde `enabled` ahora controla todas las configuraciones del grupo, `block_dangerous_domains` es el campo `enabled` del modelo anterior y `block_nrd` es una configuración que bloquea dominios recién registrados.

### El modelo para guardar la configuración del servidor ha cambiado

De:

```json
{
  "protection_enabled" : true,
  "safebrowsing_enabled" : true,
  ..
}
```

a:

```json
{
  "protection_enabled" : true,
  "safebrowsing_settings" : {
     "enabled": true,
     "block_dangerous_domains": true,
     "block_nrd": false
  }
  ..
}
```

aquí se utiliza el nuevo campo `safebrowsing_settings` en lugar del obsoleto `safebrowsing_enabled`, cuyo valor se almacena en `block_dangerous_domains`.

## v1.4

_Lanzado el 29 de marzo del 2023_

- Se agregó una opción configurable para bloquear la respuesta: predeterminada (0.0.0.0), REFUSED, NXDOMAIN o dirección IP personalizada

## v1.3

_Lanzado el 13 de diciembre de 2022_

- Se agregó un método para obtener los límites de la cuenta

## v1.2

_Lanzado el 14 de octubre de 2022_

- Se agregaron nuevos tipos de protocolo DNS y DNSCRYPT. Dejamos de usar los PLAIN_TCP, PLAIN_UDP, DNSCRYPT_TCP y DNSCRYPT_UDP que se eliminarán más adelante

## v1.1

_Lanzado el 7 de julio de 2022_

- Se agregaron métodos para recuperar estadísticas por tiempo, dominios, empresas y dispositivos
- Agregado un método para actualizar la configuración del dispositivo
- Se corrigió la definición de campos obligatorios

## v1.0

_Lanzado el 22 de febrero de 2022_

- Autenticación agregada
- Operaciones CRUD con dispositivos y servidores DNS
- Registro de consultas
- Descarga de DoH y DoT .mobileconfig
- Listas de filtros y servicios web
