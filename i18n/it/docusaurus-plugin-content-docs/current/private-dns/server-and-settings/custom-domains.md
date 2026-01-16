---
title: Domini personali
sidebar_position: 6
---

Gli abbonati AdGuard DNS possono approntare i propri domini (come `dns.example.com`) invece del dominio predefinito `d.adguard-dns.com`. Questa funzione è pensata per aiutare le aziende ad allineare la protezione DNS con la propria infrastruttura, assicurando un'integrazione ininterrotta con le politiche di sicurezza aziendale, mantenendo tutte le funzioni di blocco delle inserzioni e riservatezza offerte da AdGuard DNS.

:::note

I domini personali sono disponibili per gli utenti dei piani **Commerciale** e **Gruppo**.

:::

## Come approntare un dominio personale

Per configurare un dominio personale, accedi alla tua plancia di AdGuard DNS e vai in [_Impostazioni profilo_](https://adguard-dns.io/en/dashboard/account). Scorri verso il basso fino a _Impostazioni avanzate_ e seleziona _Domini personali_. Successivamente, dovrai seguire le tre fasi principali.

1. Scegli il protocollo. Qui hai due opzioni:

   - Aggiungi dominio DoH (per DNS-over-HTTPS)
   - Aggiungi dominio DoT/DoQ (per DNS-over-TLS o DNS-over-QUIC)

   ![Scegli il protocollo \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_1.png)

2. Dopo aver selezionato il protocollo, inserisci il nome di dominio preferito (ad esempio, `example.com`) e verifica la registrazione CNAME.

   ![Registrazione CNAME \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_2.png)

3. Appronta un certificato. Per i domini DoT/DoQ, sarà necessario caricare un certificato TLS con carattere universale. Se scegli DoH, puoi fornire il tuo certificato TLS oppure lasciare che AdGuard DNS ne generi uno per te. Una volta verificato, il tuo dominio personale apparirà nella plancia, pronto per l'uso.

   ![Lista di domini personali \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_3.png)
