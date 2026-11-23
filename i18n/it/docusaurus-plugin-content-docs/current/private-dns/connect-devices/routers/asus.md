---
title: Asus
sidebar_position: 3
---

## Configura DNS-over-TLS

Ci sono istruzioni generali per la configurazione di AdGuard DNS per router Asus.

Le informazioni di configurazione in queste istruzioni sono tratte da un modello di router specifico, quindi potrebbero differire dall'interfaccia di un dispositivo individuale.

If necessary: Configure DNS-over-TLS on Asus, install the [Asus Merlin firmware](https://www.asuswrt-merlin.net/download) suitable for your router version on your computer.

1. Accedi al pannello di amministrazione del router Asus. Può essere accessibile tramite [http://router.asus.com](http://router.asus.com/), [http://192.168.1.1](http://192.168.1.1/), [http://192.168.0.1](http://192.168.0.1/), o [http://192.168.2.1](http://192.168.2.1/).
2. Inserisci il nome utente dell'amministratore (di solito è admin) e la password del router.
3. Nella barra laterale _Impostazioni avanzate_, vai alla sezione WAN.
4. Nella sezione _Impostazioni DNS WAN_, imposta _Connetti automaticamente al server DNS_ su _No_.
5. Imposta _Inoltra query locali_, _Attiva rebind DNS_ e _Attiva DNSSEC_ su _No_.
6. Cambia il protocollo di privacy DNS in DNS-over-TLS (DoT).
7. Assicurati che il _profilo DNS-over-TLS_ sia impostato su _Strict_.
8. Scorri in basso alla sezione _DNS-over-TLS Servers List_. Nel campo _Indirizzo_, inserisci uno degli indirizzi qui sotto:
   - IPv4: `94.140.14.49` e `94.140.14.59`
9. Per _Porta TLS_, inserisci 853.
10. Nel campo _TLS Hostname_, inserisci l'indirizzo del server AdGuard DNS privato:
    - `{Your_Device_ID}.d.adguard-dns.com`
11. Scorri fino alla fine della pagina e premi _Applica_.

## Utilizza il pannello di amministrazione del tuo router

Use these instructions if your Asus router does not support DNS-over-TLS configuration:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Inserisci il nome utente dell'amministratore (di solito è admin) e la password del router.
3. Open _Advanced Settings_ or _Advanced_.
4. Select _WAN_ or _Internet_.
5. Open _DNS Settings_ or _DNS_.
6. Choose _Manual Setting_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
7. Salva le impostazioni.
8. Collega il tuo IP (o il tuo IP dedicato se hai un abbonamento Team).
   - [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
   - [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
