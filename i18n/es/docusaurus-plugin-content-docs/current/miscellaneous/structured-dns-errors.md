---
title: .
sidebar_position: 5
---

Con el lanzamiento de AdGuard DNS V2.10, este se ha convertido en el primer solucionador DNS público en implementar soporte para [\*Errores de DNS estructurados (SDE)] (https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/) una actualización de [RFC 8914](https://datatracker.ietf.org/doc/rfc8914/). Esta función permite a los servidores DNS proporcionar información detallada sobre los sitios web bloqueados directamente en respuesta del DNS, en lugar de depender de mensajes genéricos del navegador. En este artículo, explicaremos que son los "Errores DNS estructurados" y como funcionan.

## Que son los Errores de DNS Estructurados

Cuando se bloquea un anuncio o dominio, el usuario puede que vea un espacio en blanco en la web o ni siquiera se dé cuenta de que el DNS ha filtrado y bloqueado el elemento. Sin embargo, si la página web es esta dentro del rango de bloqueo del DNS, el usuario no podrá acceder a la página de ninguna manera. Al intentar acceder a una página web bloqueada, le aparecerá al usuario un error genérico "No se puede acceder a este sitio".

![Error "No se puede acceder a este sitio web"](https://cdn.adtidy.org/content/blog/dns/dns_error.png)

Tales errores no tienen explicación de porque han ocurrido. Esto hace que los usuarios no entiendan el por qué no pueden acceder y puede que crean que es por su conexión a internet o que el DNS este roto.

Para aclarar esto, los servidores DNS podrían redirigir a los usuarios a una página con la explicación. Sin embargo, los sitios web HTTPS (que son la mayoría de los sitios web) requerirían un certificado aparte.

![Certificado de error](https://cdn.adtidy.org/content/blog/dns/certificate_error.png?1)

Hay una solución más simple: [Errores DNS estructurados](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/). El concepto SDE, está construido sobre la base de [_Errores DNS extendidos_ (RFC 8914)](https://datatracker.ietf.org/doc/rfc8914/), que introdujo la habilidad de incluir información de los errores adicional a las respuestas DNS. El borrador va un paso más allá utilizando [I-JSON](https://www.rfc-editor.org/rfc/rfc7493) (un perfil restringido de JSON) para formatear la información de una manera que los navegadores y las aplicaciones clientes puedan analizar fácilmente.

Los datos SDE están incluidos en el "EXTRA-TEXT" de la respuesta DNS. Contiene:

- `J` (Justificación): Motivo del bloqueo
- `C` (Contacto): Información de contacto si la página fuera bloqueada por error
- `O` (Organización): Organización responsable de la filtración DNS en este caso (opcional)
- `S` (Sub error): El código de sub error para esta filtración en particular (opcional)

Un sistema así mejora la transparencia entre los servidores DNS y los usuarios.

### Qué se requiere para implementar errores DNS estructurados

Aunque AdGuard DNS ha implementado un soporte para los errores DNS estructurados, los navegadores actualmente no admiten de forma nativa el análisis y la muestra de datos DNS. Para que los usuarios vean la explicación de los errores en los navegadores cuando se bloquea una página web, los desarrolladores de los navegadores necesitan adoptar y apoyar el borrador específico de SDE.

### Extensión de demostración AdGuard DNS para SDE

Para mostrar como funcionan los errores de DNS estructurados, AdGuard DNS ha desarrollado una extensión de navegador que muestra como "los errores DNS estructurados" podrían funcionar si los navegadores los admitieran. Si intentas visitar una página web bloqueada por AdGuard DNS con esta extensión habilitada, verás una página explicativa con la información proporcionada vía SDE, con el motivo del bloqueo, los datos de contacto y la organización responsable.

![Página explicativa](https://cdn.adtidy.org/blog/new/jlkdbaccess_blocked.png)

Puedes instalar la extensión desde [Chrome Web Store](https://chromewebstore.google.com/detail/oeinmjfnchfhaabhchfjkbdpmgeageen) o desde [GitHub](https://github.com/AdguardTeam/dns-sde-extension/).

Si quieres ver como se ve el rango de bloqueo del DNS, puedes usar el comando `dig` y buscar `EDE`en la información procesada.

```text
% dig @94.140.14.14 'ad.doubleclick.net' A IN +ednsopt=15:0000

...

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; EDE: 17 (Filtered): ({"j":"Filtered by AdGuard DNS","o":"AdGuard DNS","c":["mailto:support@adguard-dns.io"]})
;; QUESTION SECTION:
;ad.doubleclick.net.  IN A

...
```
