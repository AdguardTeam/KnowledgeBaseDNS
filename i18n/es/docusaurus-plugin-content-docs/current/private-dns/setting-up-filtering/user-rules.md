---
title: Reglas de usuario
sidebar_position: 3
---

## Qué es y por qué lo necesitas

Las reglas del usuario son las mismas reglas de filtrado que se utilizan en las listas de bloqueo comunes. Puedes personalizar el filtrado del sitio web para que se adapte a tus necesidades agregando reglas manualmente o importándolas de una lista predefinida.

Para hacer que tu filtrado sea más flexible y se ajuste mejor a tus preferencias, consulta la [sintaxis de reglas](/general/dns-filtering-syntax/) para las reglas de filtrado de AdGuard DNS.

## Cómo utilizar

Para configurar reglas de usuario:

1. Navega hasta el _Dashboard_.

2. Ve a la sección _Servidores_.

3. Selecciona el servidor requerido.

4. Haz clic en la opción _Reglas del usuario_.

5. You’ll find several options for adding user rules.

   - La forma más sencilla es usar el generador. Para usarlo, haz clic en _Agregar nueva regla_ → Ingresa el nombre del dominio que deseas bloquear o desbloquear → Haz clic en _Agregar regla_
     ![Agregar regla \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/userrules_step5.png)
   - La forma avanzada es usar el editor de reglas. Haz clic en _Abrir editor_ e ingresa las reglas de bloqueo de acuerdo con la [sintaxis](/general/dns-filtering-syntax/)

Esta función te permite [redirigir una consulta a otro dominio reemplazando el contenido de la consulta DNS](/general/dns-filtering-syntax/#dnsrewrite-modifier).
