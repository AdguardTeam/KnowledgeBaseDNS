---
title: Configuración avanzada
sidebar_position: 2
---

La sección de configuración avanzada está destinada a los usuarios más experimentados e incluye los siguientes ajustes.

## Responder a dominios bloqueados

Aquí puedes seleccionar la respuesta DNS para la petición bloqueada:

- **Predeterminado**: Responde con dirección IP cero (0.0.0.0 para A; :: para AAAA) cuando está bloqueado por la regla de estilo Adblock; responde con la dirección IP especificada en la regla cuando está bloqueado por una regla de estilo /etc/hosts
- **REFUSED**: Responde con el código REFUSED
- **NXDOMAIN**: Responde con el código NXDOMAIN
- **Custom IP**: Responde con una dirección IP establecida manualmente

## TTL (tiempo de vida)

El tiempo de vida (TTL) establece el período de tiempo (en segundos) para que un dispositivo cliente almacene en caché la respuesta a una petición DNS y la recupere de su caché sin volver a pedir al servidor DNS. Si el valor TTL es alto, las peticiones recién desbloqueadas pueden seguir pareciendo bloqueadas durante un tiempo. Si el valor TTL es alto, las peticiones recientemente desbloqueadas pueden seguir pareciendo bloqueadas durante un tiempo. Si el TTL es 0, el dispositivo no almacena en caché las respuestas.

## Bloquear el acceso a iCloud Private Relay

Los dispositivos que usan iCloud Private Relay pueden ignorar su configuración de DNS, por lo que AdGuard DNS no puede protegerlos.

## Bloquear el dominio Canary de Firefox

Evita que Firefox cambie a la resolución DoH desde su configuración cuando AdGuard DNS está configurado en todo el sistema.

## Registrar direcciones IP

Por defecto, AdGuard DNS no registra direcciones IP de las peticiones DNS entrantes. Si habilitas esta configuración, las direcciones IP serán registradas y mostradas en el registro de consultas.
