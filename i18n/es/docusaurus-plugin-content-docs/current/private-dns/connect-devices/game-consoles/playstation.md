---
title: PlayStation PS4/PS5
sidebar_position: 4
---

Las consolas de juegos no admiten DNS encriptados, pero son adecuadas para configurar DNS público de AdGuard o DNS privado de AdGuard a través de una dirección IP vinculada.

Es probable que tu router admita el uso de servidores DNS encriptados, por lo que siempre puedes configurar DNS privado de AdGuard en él y conectar tu consola de juegos a él.

[Cómo configurar tu router](/private-dns/connect-devices/routers/routers.md)

## Conectar AdGuard DNS

Configura tu consola de juegos para usar un servidor DNS público de AdGuard o configúralo a través de IP vinculada:

1. Enciende tu consola PS4/PS5 e inicia sesión en tu cuenta.
2. Desde la pantalla de inicio, selecciona el ícono de ajustes ubicado en la fila superior.
3. En el menú _Configuración_, selecciona _Red_.
4. Selecciona _Configurar Conexión a Internet_.
5. Elige _Usar Wi-Fi_ o _Usar un cable LAN_, según la configuración de tu red.
6. Selecciona _Personalizado_ y luego selecciona _Automático_ para _Configuración de dirección IP_.
7. Para _Nombre de host DHCP_, selecciona _No especificar_.
8. Para _Configuración de DNS_, selecciona _Manual_.
9. En el campo _Servidor DNS_, ingresa una de las siguientes direcciones de servidor DNS:
   - `94.140.14.49`
   - `94.140.14.59`
10. Elige _Siguiente_ para continuar.
11. En la pantalla de Configuración de MTU, selecciona _Automático_.
12. En la pantalla del servidor proxy, selecciona _No usar_.
13. Selecciona _Probar Conexión a Internet_ para probar tu nueva configuración de DNS.
14. Una vez que se complete la prueba y veas "Conexión a Internet: Correcta", guarda tu configuración.

Sería preferible usar IP vinculada (o IP dedicada si tienes una suscripción de Team):

- [IP dedicadas](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP vinculadas](/private-dns/connect-devices/other-options/linked-ip.md)
