---
title: OPNSense
sidebar_position: 8
---

Il firmware di OPNSense è spesso usato per configurare punti di accesso wireless, server DHCP, server DNS, consentendoti di configurare AdGuard DNS direttamente sul dispositivo.

## Utilizza il pannello di amministrazione del tuo router

Utilizza queste istruzioni se il tuo router Keenetic non supporta la configurazione DNS-over-HTTPS o DNS-over-TLS:

1. Apri il pannello di amministrazione del router. Può essere accessibile a `192.168.1.1` o `192.168.0.1`.
2. Inserisci il nome utente dell'amministratore (di solito è admin) e la password del router.
3. Fai clic su _Servizi_ nel menu in alto, quindi selezionare _Server DHCP_ dal menu a discesa.
4. Nella pagina Server DHCP, scegli l'interfaccia per la quale si desidera configurare le impostazioni DNS (ad esempio, LAN, WLAN).
5. Scorri verso il basso fino a _Server DNS_.
6. Scegli _Manuale DNS_. Seleziona _Usa questi server DNS_ oppure _Specifica manualmente il server DNS_ e inserisci i seguenti indirizzi server:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
7. Salva le impostazioni.
8. Facoltativamente, puoi abilitare DNSSEC per maggiore sicurezza.
9. Collega il tuo IP (o il tuo IP dedicato se hai un abbonamento Team).

- [IP dedicati](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP collegati](/private-dns/connect-devices/other-options/linked-ip.md)
