---
title: Istruzioni universali
sidebar_position: 2
---

Ecco alcune istruzioni generali per impostare AdGuard DNS privato sui router. Puoi fare riferimento a questa guida se non riesci a trovare il tuo router specifico nell'elenco principale. Si prega di notare che i dettagli di configurazione forniti qui sono approssimativi e possono differire dalle impostazioni del tuo modello particolare.

## Utilizza il pannello di amministrazione del tuo router

1. Apri le preferenze per il tuo router. Di solito puoi accedervi dal tuo browser. In base al modello del tuo router, prova a inserire uno dei seguenti indirizzi:
   - I router Linksys e Asus di solito usano: [http://192.168.1.1](http://192.168.1.1/)
   - I router Netgear di solito usano: [http://192.168.0.1](http://192.168.0.1/) o [http://192.168.1.1](http://192.168.1.1/) I router D-Link di solito usano [http://192.168.0.1](http://192.168.0.1/)
   - I router Ubiquiti di solito utilizzano: [http://unifi.ubnt.com](http://unifi.ubnt.com/)

2. Inserisci la password del router.

   :::note Importante

   Se la password è sconosciuta, puoi spesso reimpostarla premendo un pulsante sul router; verrà anche reimpostato il router alle impostazioni di fabbrica. Alcuni modelli hanno un'applicazione di gestione dedicata, che dovrebbe essere già installata sul tuo computer.

   :::

3. Trova dove si trovano le impostazioni DNS nella console di amministrazione del router. Sostituisci gli indirizzi DNS elencati con gli indirizzi seguenti:
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`

4. Salva le impostazioni.

5. Collega il tuo IP (o il tuo IP dedicato se hai un abbonamento Team).

- [IP dedicate](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IP collegate](/private-dns/connect-devices/other-options/linked-ip.md)
