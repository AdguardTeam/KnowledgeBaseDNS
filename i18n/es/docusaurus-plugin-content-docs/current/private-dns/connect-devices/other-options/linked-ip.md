---
title: IPs vinculadas
sidebar_position: 3
---

## Qué son las IP vinculadas y por qué son útiles

No todos los dispositivos pueden soportar protocolos DNS cifrados. En este caso, debes considerar la configuración de DNS no cifrada. Por ejemplo, puedes usar una **dirección IP**. El único requisito para una dirección IP vinculada es que debe ser una IP residencial.

:::note

Una **dirección IP residencial** es asignada a un dispositivo conectado a un ISP residencial. Por lo general, se asocia con una ubicación física y se asigna a viviendas o apartamentos individuales. Las gente utiliza direcciones IP residenciales para actividades en línea diarias como navegar por la web, enviar correos electrónicos, utilizar redes sociales o streaming de contenido.

:::

A veces, una dirección IP residencial puede estar ya en uso, y si intentas conectarte a ella, AdGuard DNS evitará la conexión.
![Dirección IPv4 vinculada \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked.png)
Si eso sucede, comunícate con nuestro servicio de soporte vía [support@adguard-dns.io](mailto:support@adguard-dns.io), y te ayudarán con la configuración correcta.

## Cómo configurar la IP vinculada

Las siguientes instrucciones explican cómo conectarse al dispositivo a través de **la dirección IP vinculada**:

1. Abre el Dashboard.
2. Añade un nuevo dispositivo o abre la configuración de un dispositivo previamente conectado.
3. Ve a _Utilizar direcciones de servidor DNS_.
4. Abre _Direcciones de servidor DNS simple_ y conecta la IP vinculada.
   ![IP vinculada \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked_step4.png)

## DNS dinámico: por qué es útil

Cada vez que un dispositivo se conecta a la red, obtiene una nueva dirección IP dinámica. Cuando un dispositivo se desconecta, el servidor DHCP puede asignar la dirección IP liberada a otro dispositivo en la red. Esto significa que las direcciones IP dinámicas pueden cambiar con frecuencia y de manera impredecible. Por lo tanto, deberás actualizar la configuración cada vez que el dispositivo se reinicie o la red cambie.

Para mantener automáticamente actualizada la dirección IP vinculada, puedes usar DNS. AdGuard DNS verificará regularmente la dirección IP de tu dominio DDNS y la vinculará a tu servidor.

:::note

DNS dinámico (DDNS) es un servicio que actualiza automáticamente los registros DNS cada vez que tu dirección IP cambia. Convierte las direcciones IP de la red en nombres de dominio fáciles de leer para mayor comodidad. La información que conecta un nombre a una dirección IP se almacena en una tabla en el servidor DNS. DDNS actualiza estos registros cada vez que hay cambios en las direcciones IP.

:::

De esta manera, no tendrás que actualizar manualmente la dirección IP asociada cada vez que cambie.

## DNS Dinámico: cómo configurarlo

1. Primero, debes comprobar si el DDNS es compatible con la configuración de tu router:
   - Ve a _Configuraciones del router_ → _Red_
   - Localiza la sección DDNS o _DNS dinámico_
   - Navega hasta él y verifica que la configuración es realmente compatible. _Este es solo un ejemplo de cómo podría verse. Puede variar dependiendo de tu router_
     ![DDNS soportado \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dynamic_dns.png)
2. Registra tu dominio en un servicio popular como [DynDNS](https://dyn.com/remote-access/), [NO-IP](https://www.noip.com/), o cualquier otro proveedor de DDNS que prefieras.
3. Introduce el dominio en la configuración de tu router y sincroniza las configuraciones.
4. Ve a la configuración de IP vinculada para conectar la dirección, luego navega a _Configuraciones avanzadas_ y haz clic en _Configurar DDNS_.
5. Ingresa el dominio que registraste anteriormente y haz clic en _Configurar DDNS_.
   ![Configurar DDNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dns_supported.png)

¡Todo listo, has configurado DDNS con éxito!

## Automatización de la actualización de IP vinculada a través de un script

### En Windows

La forma más sencilla es usar Task Scheduler:

1. Crea una tarea:
   - Abre el Task Scheduler.
   - Crea una nueva tarea.
   - Establece el trigger para que se ejecute cada 5 minutos.
   - Selecciona _Ejecutar programa_ como la acción.
2. Selecciona un programa:
   - En el campo _Programa o Script_, escribe \`powershell'
   - En el campo _Agregar argumentos_, escribe:
     - `Command "Invoke-WebRequest -Uri 'https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}'"`
3. Guarda la tarea.

### En macOS y Linux

En macOS y Linux, la forma más sencilla es usar `cron`:

1. Abre crontab:
   - En la terminal, ejecuta `crontab -e`.
2. Agrega una tarea:
   - Inserta la siguiente línea:
     `/5 * * * * curl https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}`
   - Este trabajo se ejecutará cada 5 minutos
3. Guarda crontab.

:::note Importante

- Asegúrate de tener `curl` instalado en macOS y Linux.
- Recuerda copiar la dirección de la configuración y reemplazar `ServerID` y `UniqueKey`.
- Si se requiere una lógica o procesamiento de resultados de consultas más complejos, considera usar scripts (por ejemplo, Bash, Python) en conjunto con un programador de tareas o cron.

:::
