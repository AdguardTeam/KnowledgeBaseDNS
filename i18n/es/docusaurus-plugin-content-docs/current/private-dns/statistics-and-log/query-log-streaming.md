---
title: Transmisión del registro de consultas
sidebar_position: 6
---

:::info

La _Transmisión del registro de consultas_ está actualmente en fase de pruebas beta. Durante esta fase, la configuración y la puesta en marcha son semimanuales y se realizan en coordinación con el equipo de AdGuard.

:::

Este artículo describe cómo configurar y utilizar la _Transmisión del registro de consultas_ en AdGuard DNS. Esta función permite a los usuarios de AdGuard DNS Enterprise exportar automáticamente eventos sin procesar de consultas DNS a un almacenamiento externo con fines de seguridad, análisis o cumplimiento normativo.

## ¿Qué es la Transmisión del registro de consultas?

La _Transmisión del registro de consultas_ permite a los usuarios de AdGuard DNS Enterprise exportar automáticamente eventos sin procesar de consultas DNS a su propio almacenamiento externo compatible con S3, sin depender de consultas periódicas manuales a la API. Una vez exportados, estos registros pueden incorporarse a sistemas SIEM, plataformas SOC, lagos de datos o canalizaciones de análisis internas, lo que te proporciona acceso programático a los datos sin procesar de las consultas para la supervisión de seguridad, las auditorías y el cumplimiento normativo.

Los eventos se recopilan y entregan en lotes periódicos comprimidos; el plazo de entrega depende del volumen de tráfico (consulta la sección [_Garantías y limitaciones de entrega_](#delivery-guarantees-and-limitations) para obtener más información).

## Disponibilidad y requisitos

Para utilizar la _Transmisión del registro de consultas_, deben cumplirse los siguientes requisitos:

- **Plan Enterprise:** esta función está disponible exclusivamente para los usuarios de AdGuard DNS Enterprise. Si la cuenta deja de tener un plan Enterprise, el servicio de transmisión de registros se desactivará. Para desactivarlo voluntariamente, consulta las preguntas frecuentes que aparecen más abajo.
- **Registro de consultas activo:** el registro de consultas debe estar habilitado en tu configuración de AdGuard DNS.
- **Bucket compatible con S3:** debes tener un bucket activo con permisos de escritura en Amazon S3 o en otro proveedor de almacenamiento en la nube compatible con S3 (por ejemplo, Cloudflare R2, Backblaze B2, Wasabi o MinIO).
- **Credenciales de acceso:** debes proporcionar los parámetros de conexión y las credenciales necesarios para que AdGuard DNS escriba objetos en tu bucket.

## Cómo solicitar la configuración

Como actualmente nuestro equipo de infraestructura se encarga de la configuración de forma manual, sigue estos pasos para solicitar la transmisión de registros:

### Paso 1: prepara tu bucket S3

1. Crea un bucket dedicado o una ruta/prefijo dentro de tu almacenamiento compatible con S3.
2. Concede los permisos mínimos necesarios a las credenciales que compartirás con AdGuard. Como mínimo, las credenciales deben tener permisos de escritura (`s3:PutObject`) en la ruta designada.

### Paso 2: contacta con tu gestor de cuenta o con el equipo de soporte de AdGuard

Ponte en contacto con tu gestor de cuenta dedicado de AdGuard o con el equipo de soporte de AdGuard en `support@adguard-dns.io` e indica la cuenta u organización cuyos registros deben transmitirse.

### Paso 3: proporciona los detalles de configuración

Una vez aprobada la solicitud, el equipo de soporte proporcionará más instrucciones y solicitará los parámetros de configuración específicos necesarios para establecer la transmisión de registros.

### Paso 4: espera a que se active la transmisión de registros

Una vez activada la transmisión de registros, se escribe automáticamente en el bucket de destino un archivo `.healthcheck` que contiene `ok`. Se te notificará si se produce algún error de conexión o escritura durante la configuración. No es necesario realizar ninguna otra acción una vez habilitada la transmisión.

## Formato de los registros y estructura de los objetos S3

Los registros se entregan como **archivos JSON minificados que contienen un array de objetos**, donde cada objeto del array representa un único evento de consulta DNS.

### Compresión y codificación

- **Codificación:** UTF-8
- **Compresión:** la compresión Gzip es obligatoria y se aplica automáticamente a todos los archivos de registro exportados.

### Organización y nomenclatura de los objetos S3

Los archivos de registro se escriben en el bucket compatible con S3 utilizando una jerarquía de carpetas estructurada y una convención de nomenclatura específica basada en marcas de tiempo para facilitar las consultas y la ingesta eficientes por particiones.

- **Prefijo del objeto (ruta):** `/logs/%Y/%m/%d/` (organizado por año, mes y día)
- **Patrón del nombre de archivo:** `%H-%M-%S-%3f.json.gz` (hora-minuto-segundo-milisegundo de la generación del lote)

**Ejemplo de clave de objeto S3:**

`logs/2026/08/24/14-02-02-123.json.gz`

### Estructura del esquema del archivo

A diferencia de JSON Lines (JSONL), el archivo entregado es un array JSON estándar minificado en una sola línea.

**Ejemplo de la estructura del archivo minificado entregado (representación sin comprimir):**

```json

{"ASN":1234,
"AccountId":4432,
"Action":1,
"CategoryId":null,
"ClientCountry":null,
"DNSSEC":0,
"DeviceId":"54cff1db",
"DnsServerId":"b13fe9a2",
"DomainFQDN":"qwerty20.onlineteam.ru.",
"ElapsedMs":51,
"FilterListId":null,
"FilterRule":null,
"IpAddress":null,
"Protocol":8,
"RequestIdNum":65027,
"RequestType":1,
"ResponseCode":0,
"ResponseCountry":"RU",
"TimeAddedMs":1787671509268,
"TrackerId":null
}
```

## Referencia de los campos {#fields-reference}

La siguiente tabla describe el esquema de los registros de consultas DNS exportados.

| Campo             | Tipo          | Requerido | Descripción                                                                                                                                                                                                                                                                                                         | Example                |
| :---------------- | :------------ | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------- |
| `AccountId`       | integer       | No        | Detected account ID, if any.                                                                                                                                                                                                                                                                        | `1234`                 |
| `DnsServerId`     | linha         | No        | Detected profile ID, also known as DNS ID or DNS Server ID, if any.                                                                                                                                                                                                                                 | `"prof1234"`           |
| `DeviceId`        | linha         | No        | Detected device ID, if any.                                                                                                                                                                                                                                                                         | `"dev1234"`            |
| `ClientCountry`   | linha         | No        | Country of the client’s IP address as an ISO 3166-1 alpha-2 code. Absent if it could not be detected. `XK` is used for Kosovo.                                                                                                                                      | `"AU"`                 |
| `ResponseCountry` | linha         | No        | Country of the first IP address in the response as an ISO 3166-1 alpha-2 code. Absent if it could not be detected. `XK` is used for Kosovo; `QN` means “Not Applicable” when the response type contains no IP address information.                                  | `"US"`                 |
| `DomainFQDN`      | linha         | Sí        | Requested DNS resource name (FQDN).                                                                                                                                                                                                                                              | `"example.com."`       |
| `FilterListId`    | linha         | No        | ID of the first filter whose rules matched the query. Omitted if no rule matched. Reserved values include `adult_blocking`, `blocked_service`, `category`, `custom`, `general_safe_search`, `newly_registered_domains`, `safe_browsing`, and `youtube_safe_search`. | `"adguard_dns_filter"` |
| `FilterRule`      | linha         | No        | First rule that matched the query. For `blocked_service`, contains the blocked service ID. For `category`, contains the category ID. Omitted if no rule matched.                                                                                    | `"example.com^"`       |
| `TimeAddedMs`     | integer       | Sí        | Unix timestamp when the request was received, in milliseconds.                                                                                                                                                                                                                                      | `1629974298000`        |
| `ASN`             | integer       | No        | Autonomous System Number (ASN) detected from the client’s IP address, if any.                                                                                                                                                                                                    | `1234`                 |
| `ElapsedMs`       | integer       | Sí        | Time elapsed since the beginning of request processing, in milliseconds.                                                                                                                                                                                                                            | `3`                    |
| `RequestType`     | integer       | Sí        | Numeric DNS resource-record type of the query, for example `1` for an `A` record.                                                                                                                                                                                                                   | `1`                    |
| `RequestIdNum`    | integer       | Sí        | Random unsigned 16-bit integer used to simplify deduplication when the old `u` field is not used.                                                                                                                                                                                                   | `12345`                |
| `Action`          | integer       | Sí        | Acción de filtrado: `0` desconocida, `1` sin filtrado, `2` solicitud bloqueada, `3` respuesta bloqueada, `4` solicitud permitida por la lista de permitidos, `5` respuesta permitida por la lista de permitidos, `6` solicitud o respuesta modificada/reescrita.                    | `2`                    |
| `DNSSEC`          | integer       | Sí        | Indica si la respuesta se validó con DNSSEC: `0` = no, `1` = sí.                                                                                                                                                                                                                    | `1`                    |
| `Protocol`        | integer       | Sí        | Protocolo DNS: `0` desconocido, `3` DNS-over-HTTPS, `4` DNS-over-QUIC, `5` DNS-over-TLS, `8` DNS sin cifrar, `9` DNSCrypt.                                                                                                                                                          | `3`                    |
| `ResponseCode`    | integer       | Sí        | Código de respuesta DNS (`RCODE`) enviado al cliente.                                                                                                                                                                                                                            | `0`                    |
| `IpAddress`       | linha         | No        | Dirección IP del cliente. Se omite cuando el registro de direcciones IP está desactivado para el perfil correspondiente.                                                                                                                                                            | `"1.2.3.4"`            |
| `TrackerId`       | string / null | Sí        | ID del rastreador encontrado al comparar el dominio solicitado con la tabla de enriquecimiento `dns-trackers`. Se establece en `null` si no se encuentra ningún rastreador.                                                                                                         | `"google"`             |
| `CategoryId`      | string / null | Sí        | ID de la categoría del rastreador devuelto por la consulta de enriquecimiento `dns-trackers`. Se establece en `null` si no se encuentra ningún rastreador.                                                                                                                          | `"search_engines"`     |

## Garantías y limitaciones de entrega {#delivery-guarantees-and-limitations}

Comprender cómo se agrupan y entregan los registros es fundamental para diseñar tu canalización de ingesta en el SIEM.

- **Entrega solo por lotes:** los registros se exportan exclusivamente por lotes, no en tiempo real. Para mantener la estabilidad del sistema y adaptarse a diferentes niveles de tráfico, tanto el tamaño de los lotes como los intervalos de entrega son flexibles. El tamaño exacto de los archivos y los horarios de carga no son fijos y pueden variar a medida que se optimiza el sistema.
- **Latencia esperada y posibles retrasos:** aunque procuramos minimizar la latencia, existe una latencia de entrega prevista. Pueden producirse retrasos ocasionales debido a un tráfico de red elevado, la carga del sistema o las colas de procesamiento.
- **Entrega al menos una vez:** se garantiza la entrega de los registros al menos una vez. Aunque esto garantiza que todos los eventos se entreguen correctamente, ocasionalmente pueden escribirse entradas de registro duplicadas en el bucket de destino (por ejemplo, durante los reintentos de red o la recuperación tras cortes transitorios de conexión). No se garantiza la entrega exactamente una vez.
- **Deduplicación obligatoria en el lado del cliente:** el cliente debe poder deduplicar eventos en su SIEM o lago de datos. La deduplicación debe realizarse mediante una combinación del `timestamp` del evento y otros identificadores únicos.
- **Sin garantía de orden:** debido a la naturaleza distribuida de nuestra infraestructura DNS global, no se garantiza el orden cronológico de los eventos. Los eventos pueden llegar desordenados dentro de un mismo archivo de registro o entre lotes diferentes.
- **Destino inaccesible (reintentos o descartes):** si tu endpoint S3 o bucket deja de estar accesible (por ejemplo, por credenciales caducadas o interrupciones de red en tu proveedor), AdGuard DNS puede realizar reintentos. Sin embargo, según los límites del backend, los eventos de registro generados durante la interrupción podrían descartarse (omitirse) para evitar un desbordamiento del búfer.
- **Sin exportación retroactiva:** la transmisión de registros solo incluye eventos futuros. No se admite la exportación de registros históricos generados antes de activar la función de transmisión.

## Seguridad y privacidad

Los registros de consultas DNS contienen datos de red y metadatos altamente sensibles. Para garantizar la seguridad de los datos de tu organización, respeta los siguientes principios de seguridad:

- **Datos DNS sensibles:** ten en cuenta que los registros transmitidos pueden contener metadatos DNS sensibles, incluidos los dominios consultados, los identificadores de dispositivos, las direcciones IP de los clientes y los datos geográficos de tus clientes.
- **Responsabilidad del cliente:** el cliente es el único responsable de la seguridad general de su bucket compatible con S3, incluida la configuración y el mantenimiento de políticas de bucket seguras y listas de control de acceso (ACL).
- **Restringe el acceso:** recomendamos encarecidamente limitar el acceso al bucket al mínimo absolutamente necesario.
- **Rotación de credenciales:** las credenciales (claves de acceso y secretos) proporcionadas a AdGuard DNS para acceder al bucket deben rotarse periódicamente de acuerdo con las políticas de seguridad internas de tu organización. However, because changing keys on the cloud provider side immediately revokes AdGuard’s write permissions, new credentials must be updated in AdGuard at the same time to prevent log delivery disruption.
- **Impacto de la configuración de registro del panel:** si determinados tipos de registro están desactivados en la configuración de tu cuenta de AdGuard DNS, esto afectará directamente al esquema de los registros exportados. Por ejemplo, si desactivas el registro de metadatos específicos de los dispositivos, esos campos se omitirán (o se rellenarán con valores nulos) en los archivos JSON transmitidos.
- **Sin eludir la configuración de privacidad:** AdGuard DNS respeta estrictamente tu configuración. En ningún caso AdGuard eludirá, anulará o sorteará la configuración de privacidad y anonimización de datos de tu cuenta al exportar eventos a tu almacenamiento externo.

## Cómo incorporar registros a un SIEM

Como AdGuard DNS transmite los registros de consultas a un almacenamiento compatible con S3, la configuración de la canalización de ingesta en tu plataforma SIEM depende enteramente de ti.

- **Destino compatible con S3:** AdGuard DNS entrega los archivos de registro sin procesar directamente al bucket S3 designado, que actúa como punto central de recepción de tus datos de seguridad.
- **Canalización de ingesta personalizada:** puedes conectar e incorporar estos archivos de registro a tu SIEM o sistema de análisis mediante tus propias canalizaciones de datos, scripts personalizados o procesos ETL.
- **Conectores S3 estándar:** en las principales plataformas, como **Splunk**, **Microsoft Sentinel** y **Elastic**, normalmente se utilizan sus respectivos conectores S3 nativos, entradas de datos o recopiladores de registros.
- **Configuración dependiente de la infraestructura:** la configuración exacta, el mapeo de índices y las reglas de análisis dentro de tu SIEM dependen en gran medida de la infraestructura específica, los esquemas de datos y las políticas de retención de tu organización.

## Solución de problemas

Esta sección detalla los problemas de integración habituales que puedes encontrar al configurar o ejecutar la transmisión de registros de consultas, junto con los pasos para resolverlos.

### Los registros no aparecen en el bucket

**Posible causa:** la configuración por parte de AdGuard aún no está completa o se han proporcionado parámetros de conexión incorrectos.

**Solución:** comprueba que hayas recibido un correo electrónico de confirmación de tu gestor de cuenta de AdGuard indicando que la configuración de la transmisión está completa. Revisa de nuevo todos los parámetros compartidos (nombre del bucket, endpoint y región).

### Permisos incorrectos del bucket

**Posible causa:** las credenciales compartidas con AdGuard no tienen permisos suficientes para escribir objetos en el bucket.

**Solución:** asegúrate de que la política de AWS IAM (o su equivalente en tu proveedor) asociada a las claves de acceso proporcionadas conceda explícitamente el permiso `s3:PutObject` para el bucket y el prefijo de destino.

### Las credenciales S3 han caducado

**Posible causa:** las credenciales han caducado o se han rotado/revocado de acuerdo con las políticas de seguridad internas de tu organización.

**Solución:** genera un nuevo conjunto de claves de acceso y claves secretas y compártelas de forma segura con tu gestor de cuenta de AdGuard para actualizar la configuración de la transmisión.

### Han aparecido duplicados en el destino de los registros

**Posible causa:** reintentos de red activados por el modelo de entrega “al menos una vez” durante interrupciones transitorias de la red.

**Solución:** este es el comportamiento esperado en las canalizaciones distribuidas de registro. Configura reglas de deduplicación en tu SIEM o base de datos utilizando una combinación de `timestamp`, `domain` y `device_id` (u otros identificadores únicos de eventos).

### La latencia es mayor de lo esperado

**Posible causa:** congestión temporal de la red, carga del sistema o retrasos de almacenamiento en búfer en el proveedor de nube.

**Solución:** comprueba el estado operativo de tu proveedor de nube compatible con S3. Si los retrasos en la entrega de registros superan de forma constante el intervalo de lotes esperado (por ejemplo, más de 15–30 minutos), contacta con el soporte de AdGuard para comprobar el estado de nuestras colas de envío.

### Faltan campos en los registros

**Posible causa:** determinadas funciones de registro o privacidad (como el registro de direcciones IP de los clientes o la recopilación de metadatos de dispositivos) están desactivadas en la configuración del panel de AdGuard DNS.

**Solución:** revisa la configuración de privacidad y registro en el panel de AdGuard DNS. La exportación mediante la transmisión de registros respeta estrictamente esta configuración y no eludirá tus preferencias de minimización de datos.

### El estado Enterprise ha cambiado

**Posible causa:** tu suscripción Enterprise ha caducado, se ha cancelado o tu cuenta ha pasado a un plan inferior.

**Solución:** la transmisión de registros se desactiva automáticamente si la cuenta pierde el estado Enterprise. Contacta con tu gestor de cuenta de AdGuard para restablecer tu suscripción y reactivar la transmisión.

### El SIEM no puede analizar o dividir el array JSON

**Posible causa:** muchos recopiladores de registros S3 esperan, de forma predeterminada, JSON delimitado por saltos de línea (NDJSON/JSONL). Como los registros exportados tienen el formato de un array JSON minificado (`[...]`), es posible que el recopilador no pueda analizar el archivo o que incorpore todo el array como un único evento de registro de gran tamaño, en lugar de dividirlo en registros de consultas individuales.

**Solución:** configura el conector S3, el agente de envío de registros o el analizador del SIEM para procesar arrays JSON estándar. La canalización de ingesta debe configurarse para descomponer el array y separar sus elementos en entradas de registro individuales antes de indexarlos.

### Los archivos comprimidos no se descomprimen

**Posible causa:** el formato de compresión (por ejemplo, `.gz`) utilizado durante la exportación no es compatible o está mal configurado en el conector de ingesta de tu SIEM.

**Solución:** comprueba la configuración de descompresión de tu conector del SIEM (por ejemplo, asegúrate de que la descompresión automática gzip esté habilitada para la recuperación de objetos S3).

## Preguntas frecuentes

### ¿Se pueden transmitir los registros directamente a Splunk o Microsoft Sentinel?

No. En la versión MVP actual, no se admite la transmisión directa a endpoints o API de SIEM (como Splunk HEC). Los registros deben escribirse primero en un bucket compatible con S3, que el SIEM podrá supervisar y del que podrá incorporar datos mediante conectores S3 estándar.

### ¿Se pueden utilizar opciones de almacenamiento distintas de S3?

No. Actualmente, solo se admite almacenamiento compatible con S3. Las opciones estándar incluyen Amazon S3 u ofertas compatibles de otros proveedores de nube (por ejemplo, Cloudflare R2, Backblaze B2, Wasabi o MinIO). La integración nativa con otros tipos de almacenamiento (como el acceso directo a Azure Blob o SFTP) no está disponible actualmente.

### ¿Es posible recuperar registros históricos?

No. La transmisión de registros solo incluye eventos futuros. Solo se exportarán los eventos de consultas DNS generados _después_ de que la función de transmisión se haya activado y configurado correctamente. No se admite la exportación retroactiva de registros.

### ¿Con qué rapidez se entregan los registros?

Los registros se entregan en lotes comprimidos, no en tiempo real. Para obtener más información sobre los intervalos de los lotes y el funcionamiento de la entrega, consulta la sección [Garantías y limitaciones de entrega](#delivery-guarantees-and-limitations).

### ¿Se garantiza la entrega de cada evento?

Sí, en condiciones normales de funcionamiento. Sin embargo, si el bucket de destino deja de estar accesible, los eventos de registro pueden acabar descartándose una vez superado el límite del búfer de reintentos. Consulta la sección [Garantías y limitaciones de entrega](#delivery-guarantees-and-limitations) para obtener más información.

### ¿Puede haber eventos duplicados en el destino?

Sí. En el modelo de entrega “al menos una vez”, los reintentos de red activados por interrupciones transitorias pueden provocar que se escriban eventos de registro duplicados en el bucket. La canalización de ingesta o el SIEM deben configurarse para realizar la deduplicación.

### ¿Qué campos se incluyen en los registros?

Los registros incluyen campos esenciales de consultas DNS, como `TimeAddedMs` (marca de tiempo), `DomainFQDN`, `RequestType`, `Action` y `ClientCountry`. Para consultar la lista completa de campos y tipos de datos, ve a la sección [Referencia de los campos](#fields-reference). La configuración de privacidad de la cuenta afecta directamente a estos registros; los campos sensibles (como `IpAddress`) se omitirán o se establecerán en `null` si el registro está desactivado en el panel.

### ¿Qué ocurre si se pierde el estado Enterprise?

La transmisión de registros es una función exclusiva del plan Enterprise. Si la cuenta deja de tener un plan Enterprise o la suscripción caduca, el servicio de transmisión se desactivará automáticamente.

### ¿Se puede desactivar la transmisión de registros?

Sí. La transmisión de registros puede desactivarse en cualquier momento previa solicitud. Para ello, ponte en contacto con tu gestor de cuenta dedicado de AdGuard o con el equipo de soporte de AdGuard en `support@adguard-dns.io`.

### ¿Se pueden configurar varios destinos S3 para la transmisión?

No. La versión actual solo permite configurar un único destino de transmisión compatible con S3 por organización Enterprise.
