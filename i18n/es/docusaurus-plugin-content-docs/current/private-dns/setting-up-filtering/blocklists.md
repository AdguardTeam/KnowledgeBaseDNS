---
title: Listas de bloqueo
sidebar_position: 1
---

## ¿Qué son las listas de bloqueo?

Las listas de bloqueo son conjuntos de reglas en formato de texto que AdGuard DNS utiliza para filtrar anuncios y contenido que podría comprometer tu privacidad. En general, un filtro consiste en reglas con un enfoque similar. Por ejemplo, pueden existir reglas para los idiomas de los sitios web (como filtros de alemán o ruso) o reglas que protegen contra sitios de phishing (como la Lista de bloqueo de URL de phishing). Puedes habilitar o deshabilitar fácilmente estas reglas como un grupo.

## Por qué son útiles

Las listas de bloqueo están diseñadas para una personalización flexible de las reglas de filtrado. Por ejemplo, puedes querer bloquear dominios publicitarios en una región de idioma específica, o puedes querer deshacerte de dominios de rastreo o publicidad. Selecciona las listas de bloqueo que desees y personaliza el filtrado a tu gusto.

## Cómo activar listas de bloqueo en AdGuard DNS

Para activar las listas de bloqueo:

1. Abre el Dashboard.
2. Ve a la sección _Servidores_.
3. Selecciona el servidor requerido.
4. Haz clic en _Listas de bloqueo_.

## Tipos de listas de bloqueo

### General

Un grupo de filtros que incluye listas para bloquear anuncios y dominios de rastreo.

![Listas de bloqueo generales \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/general.png)

### Regional

Un grupo de filtros que consiste en listas regionales para bloquear dominios en idiomas específicos.

![Listas de bloqueo regionales \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/regional.png)

### Seguridad

Un grupo de filtros que contiene reglas para bloquear sitios fraudulentos y dominios de phishing.

![Listas de bloqueo de seguridad \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/security.png)

### Otros

Listas de bloqueo con diversas reglas de bloqueo de desarrolladores de terceros.

![Otras listas de bloqueo \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/other.png)

## Añadiendo filtros

Si deseas que la lista de filtros de AdGuard DNS sea ampliada, puedes enviar una petición para añadirlos en la sección correspondiente de [Hostlistsregistry](https://github.com/AdguardTeam/HostlistsRegistry) en GitHub.

Para enviar una petición:

1. Ve al enlace anterior (puedes necesitar registrarte en GitHub).
2. Haz clic en _New issue_.
3. Haz clic en _Solicitud de lista de bloqueo_ y completa el formulario.
4. Después de completar el formulario, haz clic en _Enviar nueva incidencia_.

If your filter’s blocking rules do not duplicate the existing lists, it will be added to the repository.

## Reglas de usuario

También puedes crear tus propias reglas de bloqueo.
Más información en el [artículo de reglas del usuario](/private-dns/setting-up-filtering/user-rules.md).
