---
title: OPNsense
sidebar_position: 8
---

OPNsense firmware is often used to configure wireless access points, DHCP servers, DNS servers, allowing you to configure AdGuard DNS directly on the device.

## Utilizza il pannello di amministrazione del tuo router

Use these instructions if your OPNsense router does not support DNS-over-HTTPS or DNS-over-TLS configuration:

1. Open the router admin panel. It can be accessed at `192.168.1.1` or `192.168.0.1`.
2. Inserisci il nome utente dell'amministratore (di solito è admin) e la password del router.
3. Fai clic su _Servizi_ nel menu in alto, quindi selezionare _Server DHCP_ dal menu a discesa.
4. Nella pagina Server DHCP, scegli l'interfaccia per la quale si desidera configurare le impostazioni DNS (ad esempio, LAN, WLAN).
5. Scorri verso il basso fino a _Server DNS_.
6. Scegli _Manuale DNS_. Select _Use These DNS Servers_ or _Specify DNS Server Manually_ and enter the following DNS server addresses:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
7. Salva le impostazioni.
8. Facoltativamente, puoi abilitare DNSSEC per maggiore sicurezza.
9. Collega il tuo IP (o il tuo IP dedicato se hai un abbonamento Team).

- [Dedicated IPs](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [Linked IPs](/private-dns/connect-devices/other-options/linked-ip.md)
