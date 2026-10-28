---
title: Streaming del registro richieste
sidebar_position: 6
---

:::info

La funzione _Streaming del registro richieste_ è attualmente in fase di test beta. In questa fase, la configurazione e l'installazione sono semi-manuali e vengono eseguite in collaborazione con il team di AdGuard.

:::

Questo articolo descrive come configurare e utilizzare lo _streaming del registro richieste_ in AdGuard DNS. Questa funzione consente agli utenti di AdGuard DNS Aziendale di esportare automaticamente eventi di richieste DNS non elaborati in un archivio esterno per scopi di sicurezza, analisi o conformità.

## Cos'è il streaming del registro richieste?

_Il streaming dati del registro richieste_ consente agli utenti di AdGuard DNS Aziendale di esportare automaticamente gli eventi delle richieste DNS non elaborate nel proprio archivio esterno compatibile con S3 — senza affidarsi al polling manuale delle API. Una volta esportate, questi registri possono essere importate in sistemi SIEM, piattaforme SOC, data lake o strutture di analisi interne, offrendo l'accesso programmatico ai dati grezzi delle richieste per il monitoraggio della sicurezza, l'auditing e la conformità.

Gli eventi vengono raccolti e consegnati in batch periodici e compressi; i tempi di consegna dipendono dal volume di traffico (vedi la sezione [_Garanzie e limitazioni di consegna_](#delivery-guarantees-and-limitations) per i dettagli).

## Disponibilità e requisiti

Per utilizzare il _Streaming del Registro richieste_, devono essere soddisfatti i seguenti requisiti:

- **Piano Aziendale:** Questa funzione è disponibile esclusivamente per gli utenti AdGuard DNS Commerciale. Se il profilo non ha più un piano Aziendale, il servizio di streaming del registro richieste verrà disattivato. Per la disattivazione volontaria, vedi le FAQ sottostanti.
- **Registro richieste attivo:** La tua configurazione di AdGuard DNS deve avere la registrazione delle richieste abilitata.
- **Bucket compatibile con S3:** È necessario disporre di un bucket attivo e scrivibile su Amazon S3 o un altro provider di archivio cloud compatibile con S3 (ad es., Cloudflare R2, Backblaze B2, Wasabi o MinIO).
- **Credenziali di accesso:** Devi fornire i parametri di connessione e le credenziali obbligatorie affinché AdGuard DNS possa scrivere oggetti nel tuo bucket.

## Come richiedere la configurazione

Poiché la configurazione viene attualmente gestita manualmente dal nostro team infrastrutturale, si prega di seguire questi passaggi per richiedere lo streaming dei registri richieste:

### Fase 1: Prepara il tuo bucket S3

1. Crea un bucket o un percorso/prefisso dedicato all'interno del tuo archivio compatibile con S3.
2. Concedi i permessi minimi obbligatori alle credenziali che condividerai con AdGuard. Come minimo, le credenziali devono avere i permessi di scrittura (`s3:PutObject`) sul percorso designato.

### Fase 2: Contatta il tuo gestore del profilo o il gruppo di assistenza AdGuard

Rivolgiti al gestore dedicato del profilo AdGuard o contatta il gruppo di assistenza AdGuard all'indirizzo `support@adguard-dns.io` e fornisci il profilo o l'organizzazione obiettivo per cui le annotazioni devono essere trasmesse in streaming.

### Fase 3: Fornisci i dettagli di configurazione

Una volta approvata la richiesta, il gruppo di assistenza fornirà ulteriori istruzioni e richiederà i parametri di configurazione specifici obbligatori per stabilire il streaming di registri.

### Fase 4: Attendi che il streaming degli registri venga attivato

Una volta attivato il streaming di richieste, un file `.healthcheck` contenente `ok` viene scritto automaticamente nel bucket di destinazione. Se si verifica qualunque errore di connessione o di scrittura durante l'approntamento, riceverai una notifica. Nessuna ulteriore azione è obbligatoria una volta che lo stream è abilitato.

## Formato dei registri e struttura degli oggetti S3

Le registri vengono recapitate come **file JSON minimizzati contenenti un array di oggetti**, in cui ciascun oggetto all'interno dell'array rappresenta un singolo evento di richiesta DNS.

### Compressione e codifica

- **Codifica:** UTF-8
- **Compressione:** la compressione Gzip è obbligatoria e viene applicata automaticamente a tutti i file di annotazione esportati.

### Layout e denominazione degli oggetti S3

I file di registri vengono scritti nel bucket compatibile con S3 utilizzando una gerarchia di cartelle strutturata e una convenzione di denominazione specifica basata su timestamp per facilitare richieste e ingestione efficienti basate su partizioni.

- **Prefisso oggetto (Percorso):** `/logs/%Y/%m/%d/` (organizzato per Anno, Mese e Giorno)
- **Modello del nome file:** `%H-%M-%S-%3f.json.gz` (Ora-Minuto-Secondo-Millisecondo della generazione del batch)

**Esempio di chiave dell'oggetto S3:**

`logs/2026/08/24/14-02-02-123.json.gz`

### Struttura dello schema del file

A differenza di JSON Lines (JSONL), il file consegnato è un array JSON standard, minificato e su una singola riga.

**Esempio della struttura del file minimizzato consegnato (rappresentazione non compressa):**

```json

{"ASN":1234,
"AccountId":4432,
"Action":1,
"CategoryId":null,
"ClientCountry":null,
"DNSSEC":0,
"DeviceId":"54cff1db",
"DnsServerId":"b13fe9a2",
"DomainFQDN":"qwerty20.onlineteam.ru.",
"ElapsedMs":51,
"FilterListId":null,
"FilterRule":null,
"IpAddress":null,
"Protocol":8,
"RequestIdNum":65027,
"RequestType":1,
"ResponseCode":0,
"ResponseCountry":"RU",
"TimeAddedMs":1787671509268,
"TrackerId":null
}
```

## Riferimento dei campi {#fields-reference}

La tabella sottostante descrive lo schema per le annotazioni delle richieste DNS esportate.

| Campo             | Tipo          | Obbligatorio | Descrizione                                                                                                                                                                                                                                                                                                                                               | Example                |
| :---------------- | :------------ | :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------- |
| `AccountId`       | integer       | No           | ID del profilo rilevato, se presente.                                                                                                                                                                                                                                                                                                     | `1234`                 |
| `DnsServerId`     | string        | No           | ID del profilo rilevato, noto anche come ID DNS o ID del server DNS, se presente.                                                                                                                                                                                                                                                         | `"prof1234"`           |
| `DeviceId`        | string        | No           | ID del dispositivo rilevato, se presente.                                                                                                                                                                                                                                                                                                 | `"dev1234"`            |
| `ClientCountry`   | string        | No           | Paese dell'indirizzo IP del client come codice ISO 3166-1 alpha-2. Assente se non rilevabile. `XK` è il termine usato per indicare il Kosovo.                                                                                                                                                             | `"AU"`                 |
| `ResponseCountry` | string        | No           | Paese del primo indirizzo IP nella risposta come codice ISO 3166-1 alpha-2. Assente se non rilevabile. `XK` viene utilizzato per il Kosovo; `QN` significa “Non applicabile” quando il tipo di risposta non contiene informazioni sull'indirizzo IP.                                                      | `"US"`                 |
| `DomainFQDN`      | string        | Sì           | Nome della risorsa DNS richiesta (FQDN).                                                                                                                                                                                                                                                                               | `"example.com."`       |
| `FilterListId`    | string        | No           | ID del primo filtro le cui regole corrispondevano alla richiesta. Omesso se nessuna regola ha trovato corrispondenza. I valori riservati includono `adult_blocking`, `blocked_service`, `category`, `custom`, `general_safe_search`, `newly_registered_domains`, `safe_browsing` e `youtube_safe_search`. | `"adguard_dns_filter"` |
| `FilterRule`      | string        | No           | Prima regola che corrispondeva alla richiesta. Per `blocked_service`, contiene l'ID del servizio bloccato. Per `category`, contiene l'ID della categoria. Omesso se nessuna regola ha trovato corrispondenza.                                                                             | `"example.com^"`       |
| `TimeAddedMs`     | integer       | Sì           | Unix timestamp when the request was received, in milliseconds.                                                                                                                                                                                                                                                                            | `1629974298000`        |
| `ASN`             | integer       | No           | Autonomous System Number (ASN) detected from the client’s IP address, if any.                                                                                                                                                                                                                                          | `1234`                 |
| `ElapsedMs`       | integer       | Sì           | Time elapsed since the beginning of request processing, in milliseconds.                                                                                                                                                                                                                                                                  | `3`                    |
| `RequestType`     | integer       | Sì           | Numeric DNS resource-record type of the query, for example `1` for an `A` record.                                                                                                                                                                                                                                                         | `1`                    |
| `RequestIdNum`    | integer       | Sì           | Random unsigned 16-bit integer used to simplify deduplication when the old `u` field is not used.                                                                                                                                                                                                                                         | `12345`                |
| `Action`          | integer       | Sì           | Filtering action: `0` unknown, `1` no filtering, `2` request blocked, `3` response blocked, `4` request allowed by allowlist, `5` response allowed by allowlist, `6` request or response modified/rewritten.                                                                                                              | `2`                    |
| `DNSSEC`          | integer       | Sì           | Whether the response was validated with DNSSEC: `0` = no, `1` = yes.                                                                                                                                                                                                                                                      | `1`                    |
| `Protocol`        | integer       | Sì           | DNS protocol: `0` unknown, `3` DNS-over-HTTPS, `4` DNS-over-QUIC, `5` DNS-over-TLS, `8` Plain DNS, `9` DNSCrypt.                                                                                                                                                                                                          | `3`                    |
| `ResponseCode`    | integer       | Sì           | DNS response code (`RCODE`) sent to the client.                                                                                                                                                                                                                                                                        | `0`                    |
| `IpAddress`       | string        | No           | Client IP address. Omitted when IP logging is disabled for the corresponding profile.                                                                                                                                                                                                                                     | `"1.2.3.4"`            |
| `TrackerId`       | string / null | Sì           | Tracker ID found by matching the requested domain against the `dns-trackers` enrichment table. Set to `null` if no tracker is found.                                                                                                                                                                                      | `"google"`             |
| `CategoryId`      | string / null | Sì           | Tracker category ID returned by the `dns-trackers` enrichment lookup. Set to `null` if no tracker is found.                                                                                                                                                                                                               | `"search_engines"`     |

## Delivery guarantees and limitations {#delivery-guarantees-and-limitations}

Understanding how logs are batched and delivered is critical for designing your SIEM ingestion pipeline.

- **Batch-only delivery:** Logs are exported strictly in batches, not in real time. To keep the system stable and adapt to different traffic levels, both batch sizes and delivery intervals are flexible. Exact file sizes and upload times are not fixed and may vary as the system is optimized.
- **Expected latency and potential delays:** While we strive for minimal latency, there is an expected delivery latency. Occasional delays are possible due to high network traffic, system load, or processing queues.
- **At-least-once delivery:** Log delivery is guaranteed on an at-least-once basis. While this ensures that all events are successfully delivered, duplicate log entries may occasionally be written to the destination bucket (for example, during network retries or recovery from transient connection drops). Exactly-once delivery is not guaranteed.
- **Client-side deduplication required:** The client must be capable of deduplicating events within their SIEM or data lake. Deduplication should be handled using a combination of the event `timestamp` and other unique identifiers.
- **No order guarantees:** Due to the distributed nature of our global DNS infrastructure, the chronological order of events is not guaranteed. Events may arrive out of order within a single log file or across different batches.
- **Unreachable destination (retries or drops):** If your S3 endpoint or bucket becomes unreachable (e.g., due to expired credentials or network outages on your provider’s side), AdGuard DNS may attempt retries. However, depending on backend limits, log events generated during the outage might be dropped (skipped) to prevent buffer overflow.
- **No historical backfill:** Log streaming is strictly forward-looking. Exporting historical logs generated before the streaming feature was activated is not supported.

## Security and privacy

DNS query logs contain highly sensitive network and metadata. To ensure the safety of your organization’s data, please observe the following security principles:

- **Sensitive DNS data:** Be aware that streamed logs can contain sensitive DNS metadata, including queried domains, device identifiers, client IP addresses, and geographic details of your clients.
- **Client responsibility:** The client is solely responsible for the overall security of their S3-compatible bucket, including configuring and maintaining secure bucket policies and access control lists (ACLs).
- **Restrict access:** We highly recommend restricting access to the bucket to the absolute minimum necessary.
- **Credential rotation:** Credentials (access keys and secrets) provided to AdGuard DNS for bucket access should be regularly rotated in accordance with your organization’s internal security policies. However, because changing keys on the cloud provider side immediately revokes AdGuard’s write permissions, new credentials must be updated in AdGuard at the same time to prevent log delivery disruption.
- **Dashboard logging settings impact:** If certain types of logging are disabled in your AdGuard DNS account settings, this will directly affect the schema of your exported logs. For example, if you disable specific device metadata logging, those fields will be omitted (or populated with null values) in the streamed JSON files.
- **No bypass of privacy settings:** AdGuard DNS strictly respects your configuration. Under no circumstances will AdGuard bypass, override, or circumvent your account’s privacy and data-anonymization settings when exporting events to your external storage.

## How to ingest logs into SIEM

Since AdGuard DNS streams query logs to S3-compatible storage, configuring the ingestion pipeline into your SIEM platform is handled entirely on your side.

- **S3-compatible destination:** AdGuard DNS delivers raw log files directly to your designated S3 bucket, which serves as the central landing zone for your security data.
- **Custom ingestion pipeline:** You can connect and ingest these log files into your SIEM or analytics system using your own data pipelines, custom scripts, or ETL processes.
- **Standard S3 connectors:** For major platforms such as **Splunk**, **Microsoft Sentinel**, and **Elastic**, you typically utilize their respective native S3 connectors, inputs, or log collectors.
- **Infrastructure-dependent setup:** The exact configuration, index mapping, and parsing rules inside your SIEM depend heavily on your organization’s specific infrastructure, data schemas, and retention policies.

## Troubleshooting

This section details common integration issues you may encounter when setting up or running the query log stream, along with steps to resolve them.

### Logs are not appearing in the bucket

**Potential cause:** Configuration on the AdGuard side is not yet complete, or incorrect connection parameters were provided.

**Resolution:** Verify that you received a confirmation email from your AdGuard account manager stating that the stream configuration is complete. Double-check all shared parameters (bucket name, endpoint, region).

### Incorrect bucket permissions

**Potential cause:** The credentials shared with AdGuard do not have sufficient permissions to write objects to the bucket.

**Resolution:** Ensure that the AWS IAM policy (or your provider’s equivalent) associated with the provided access keys explicitly grants `s3:PutObject` permission for the target bucket and prefix.

### S3 credentials expired

**Potential cause:** The credentials have expired, or they were rotated/revoked in accordance with your organization’s internal security policies.

**Resolution:** Generate a new set of access and secret keys, and share them securely with your AdGuard account manager to update your stream configuration.

### Duplicates appeared in the log destination

**Potential cause:** Network retries triggered by the “at-least-once” delivery model during transient network interruptions.

**Resolution:** This is expected behavior in distributed logging pipelines. Configure deduplication rules in your SIEM or database using a combination of the `timestamp`, `domain`, and `device_id` (or other unique event identifiers).

### Latency is higher than expected

**Potential cause:** Temporary network congestion, system load, or buffering delays on the cloud provider’s side.

**Resolution:** Check the operational status of your S3-compatible cloud provider. If log delivery delays consistently exceed your expected batch interval (e.g., more than 15–30 minutes), contact AdGuard support to check the status of our outbound delivery queues.

### Missing fields in the logs

**Potential cause:** Specific logging or privacy features (such as client IP logging or device metadata collection) are disabled in your AdGuard DNS dashboard settings.

**Resolution:** Review your privacy and logging settings within the AdGuard DNS dashboard. The log streaming export strictly respects these settings and will not bypass your data-minimization preferences.

### Enterprise status changed

**Potential cause:** Your Enterprise subscription has expired, was cancelled, or your account was downgraded.

**Resolution:** Log streaming is deactivated automatically if the account loses Enterprise status. Contact your AdGuard account manager to restore your subscription and reactivate the stream.

### SIEM fails to parse or split the JSON array

**Potential Cause:** Many S3 log collectors expect Newline Delimited JSON (NDJSON/JSONL) by default. Since the exported logs are formatted as a minified JSON array (`[...]`), the collector may fail to parse the file or ingest the entire array as a single, massive log event instead of splitting it into individual query records.

**Resolution:** Configure the S3 connector, log shipper, or SIEM parser to handle standard JSON arrays. The ingestion pipeline must be set to unpack the array and split its elements into separate log entries before indexing.

### Compressed files do not decompress

**Potential cause:** The compression format (e.g., `.gz`) used during export is either unsupported or misconfigured in your SIEM’s ingestion connector.

**Resolution:** Verify the decompression settings on your SIEM connector (e.g., ensure automatic gzip decompression is enabled for S3 object retrieval).

## FAQ

### Can logs be streamed directly to Splunk or Microsoft Sentinel?

No. In the current MVP version, direct streaming to SIEM endpoints or APIs (such as Splunk HEC) is not supported. Logs must be written to an S3-compatible bucket first, which the SIEM can then monitor and ingest from using standard S3 connectors.

### Can storage options other than S3 be used?

No. Currently, only S3-compatible storage is supported. Standard options include Amazon S3 or compatible offerings from other cloud providers (e.g., Cloudflare R2, Backblaze B2, Wasabi, or MinIO). Native integration with other storage types (such as direct Azure Blob or SFTP) is not available at this time.

### Is it possible to retrieve historical logs?

No. Log streaming is strictly forward-looking. Only DNS query events generated _after_ the streaming feature has been successfully activated and configured will be exported. Historical backfill of logs is not supported.

### How quickly are logs delivered?

Logs are delivered in compressed batches rather than in real-time. For more details on batching intervals and delivery mechanics, refer to the [Delivery guarantees and limitations](#delivery-guarantees-and-limitations) section.

### Is the delivery of every single event guaranteed?

Yes, under normal operating conditions. However, if the destination bucket becomes unreachable, log events may eventually be dropped once the retry buffer limit is exceeded. Refer to the [Delivery guarantees and limitations](#delivery-guarantees-and-limitations) section for details.

### Are duplicate events possible in the destination?

Yes. Under the “at-least-once” delivery model, network retries triggered by transient outages can cause duplicate log events to be written to the bucket. The ingestion pipeline or SIEM must be configured to handle deduplication.

### What fields are included in the logs?

The logs include essential DNS query fields such as `TimeAddedMs` (timestamp), `DomainFQDN`, `RequestType`, `Action`, and `ClientCountry`. For the full list of fields and data types, refer to the [Fields reference](#fields-reference) section. Account privacy settings directly affect these logs; sensitive fields (such as `IpAddress`) will be omitted or set to `null` if logging is disabled in the dashboard.

### What happens if the Enterprise status is lost?

Log streaming is strictly an Enterprise-tier feature. If the account is no longer on an Enterprise plan or the subscription lapses, the streaming service will be deactivated automatically.

### Can log streaming be deactivated?

Yes. The log stream can be deactivated at any time upon request. To do so, please contact the dedicated AdGuard account manager or reach out to the AdGuard support team at `support@adguard-dns.io`.

### Can multiple S3 streaming destinations be configured?

No. The current version only supports configuring a single S3-compatible streaming destination per Enterprise organization.
