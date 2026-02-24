---
title: Listas de bloqueo
sidebar_position: 2
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

## Custom blocklists

If you need any specific blocklist to be added to AdGuard DNS, you can download it via URL.

![Add custom blocklist](https://cdn.adguardvpn.com/content/release_notes/dns/v2-20/add_blocklists_en.png)

1. Open the dashboard and click _Servers_ in the left-hand menu
2. Select _My server → Blocklists_
3. In the _Custom_ section, click _Add custom blocklist_
4. Enter the blocklist name, its URL, and an optional description, then click _Add_

:::note

Each subscription plan has a limit on the total number of filtering rules: Personal — 1K, Team — 5K, Enterprise — 100K. This limitation is in place because blocklists are downloaded to DNS servers, and allowing unlimited blocklist sizes could lead to server overload, potentially causing performance issues.

:::

If a custom blocklist surpasses the limit, it will be **disabled automatically**, and you’ll see a corresponding notification. To enable a newly added blocklist that exceeds the rule limit, you’ll need to either remove other blocklists or upgrade to a plan with a higher rule limit.
