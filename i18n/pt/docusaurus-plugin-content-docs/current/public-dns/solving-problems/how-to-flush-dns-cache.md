---
title: Como limpar o cache DNS
sidebar_position: 1
---

# Como limpar o cache DNS

## What is DNS cache?

O cache DNS armazena os endereços IP dos sites visitados no computador local para que eles carreguem mais rápido na próxima vez. Em vez de fazer uma longa pesquisa de DNS, o sistema responde às consultas com registros DNS do cache DNS temporário.

O cache DNS contém os chamados [registros de recursos (RRs)](https://pt.wikipedia.org/wiki/Sistema_de_Nomes_de_Dom%C3%ADnio#Registros_de_recurso), que são:

* **Dados do recurso (ou rdata)**;
* **Tipo de registro**;
* **Nome do registro**;
* **TTL (tempo de vida)**;
* **Classe**;
* **Comprimento dos dados do recurso**.

## Quando você pode precisar limpar o cache

**Você recebe regularmente um erro 404.** Por exemplo, o site foi transferido para outro servidor e seu endereço IP foi alterado. To make the browser open the website from the new IP address, you need to remove the cached IP from the DNS cache.

**You want to improve your privacy.**

**You want to protect yourself from hacker attacks and viruses.** When the DNS cache is corrupted, your browser may redirect you to an IP address of a malicious website that an attacker inserted in your computer’s DNS records.

## Como liberar o cache DNS em diferentes sistemas operacionais

### macOS

Para limpar o cache DNS no macOS, abra o Terminal (você pode encontrá-lo usando a pesquisa do Spotlight — para fazer isso, pressione Command+Space e digite *Terminal*) e digite o seguinte comando:

`sudo killall -HUP mDNSResponder`

No macOS Big Sur 11.2.0 e macOS Monterey 12.0.0, você também pode usar este comando:

`sudo dscacheutil -flushcache`

Depois disso, digite sua senha de administrador para concluir o processo.

### Windows

Para liberar o cache DNS em seu dispositivo Windows, faça o seguinte:

Open the Command Prompt as an administrator. Você pode encontrá-lo no Menu Iniciar digitando *prompt de comando* ou *cmd*. Then type `ipconfig/flushdns` and press Enter.

You will see the line *Successfully flushed the DNS Resolver Cache*. Done!

### Linux

Linux does not have OS-level DNS caching unless a caching service such as systemd-resolved, DNSMasq, BIND or Nscd is installed and running. O processo de limpeza do cache DNS depende da distribuição Linux e do serviço de cache usado.

Para cada distribuição, você precisa iniciar uma janela de terminal. Pressione Ctrl+Alt+T no teclado e use o comando correspondente para limpar o cache DNS do serviço que seu sistema Linux está executando.

Para descobrir qual resolvedor de DNS você está usando, comando `sudo lsof -i :53 -S`.

#### systemd-resolved

To clear the **systemd-resolved** DNS cache, type:

`sudo systemd-resolve --flush-caches`

Em caso de sucesso, o comando não retorna nenhuma mensagem.

#### DNSMasq

To clear the **DNSMasq** cache, you need to restart it:

`sudo service dnsmasq restart`

#### Nscd

To clear the **Nscd** cache, you also need to restart the service:

`sudo service nscd restart`

#### BIND

To flush the **BIND** DNS cache, run the command:

`rndc flush`

Then you will need to reload BIND:

`rndc reload`

You will get the message that the server has been successfully reloaded.

### Android

The easiest way to clear your DNS cache on your Android device is to turn the Airplane mode on and off. You can enable/disable the Airplane Mode in the Quick Settings pane.

A hard reboot can also help flush the DNS cache for your device. In order to do that, press and hold the power button for at least 20 seconds. It will (usually) force your device to reboot manually and the DNS cache will be cleared.

Another option is to reset the network settings of your device in the Settings app. Open *Settings > System > Advanced > Reset options > Reset network settings* and tap *Reset Settings* to confirm.

> Note: by doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually.

### iOS

There are different ways to clear the DNS cache on your iPad or iPhone.

The simplest way is to activate the Airplane mode (for example, in the Control Center or in the Settings app) and to deactivate it again. The DNS cache will be flushed.

Another option is to reset the network settings of your device in the Settings app. Open *General*, scroll down, find *Reset* and tap *Reset Network Settings*.

> Note: by doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually.