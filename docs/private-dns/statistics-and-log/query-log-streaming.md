---
title: Query log streaming
sidebar_position: 6
---
# Query log streaming for Enterprise customers

> The **Query Log streaming** feature is currently in beta testing. During this phase, configuration and setup are semi-manual and performed in coordination with the AdGuard team.

This article describes how to set up and use the Query log streaming feature in AdGuard DNS. This feature allows Enterprise customers to automatically export raw DNS query events to external storage for security, analysis, or compliance purposes.

## 1. What is Query log streaming?

Query Log streaming lets Enterprise customers automatically export raw DNS query events to their own external, S3-compatible storage — without relying on manual API polling. Once exported, these logs can be ingested into SIEM systems, SOC platforms, data lakes, or internal analytics pipelines, giving you programmatic access to raw query data for security monitoring, auditing, and compliance.

Events are collected and delivered in periodic, compressed batches; delivery timing depends on traffic volume (see the [*Delivery garantees and limitations*](#delivery-guarantees-and-limitations) section for details).

AdGuard DNS supports streaming logs exclusively to S3-compatible storage in its current version. You can then ingest these logs into your SIEM or analytics pipeline using your own tooling and connectors.

During the current phase, setup is performed manually by the AdGuard team upon request.

## 2. Availability and requirements

To use Query Log streaming, the following requirements must be met:

*   **Enterprise Plan:** This feature is strictly available to AdGuard DNS Enterprise customers. If the account is no longer on an Enterprise plan, the log streaming service will be deactivated. For voluntary deactivation, see the FAQ below.
*   **Active Query Log:** Your AdGuard DNS configuration must have query logging enabled.
*   **S3-Compatible Bucket:** You must have an active, writeable bucket on Amazon S3 or another S3-compatible cloud storage provider (e.g., Cloudflare R2, Backblaze B2, Google Cloud Storage, Wasabi, or MinIO).
*   **Access Credentials:** You must provide the connection parameters and credentials required for AdGuard DNS to write objects to your bucket.

## 3. How to request setup

Since configuration is currently handled manually by our infrastructure team, please follow these steps to request log streaming:

### Step 1: Prepare Your S3 Bucket
1. Create a dedicated bucket or path/prefix within your S3-compatible storage.
2. Grant the minimum required permissions to the credentials you will share with AdGuard. At a minimum, the credentials must have write permissions (`s3:PutObject`) on the designated path.

### Step 2: Contact your account manager or AdGuard support team
Reach out to your dedicated AdGuard account manager or contact AdGuard support team at `support@adguard-dns.io`, and provide the target account or organization for which logs should be streamed.

### Step 3: Provide configuration details

Once the request is approved, the support team will provide further instructions and request the specific configuration parameters required to establish the log stream.

### Step 4: Stream activation

Upon activation of the log stream, a `.healthcheck` file containing `ok` is automatically written to the destination bucket. In the event of any connection or write errors during this process, the customer will be notified.  No further action is required once the stream is enabled.

## 4. Log format and S3 object structure

Logs are delivered as **minified JSON files containing an array of objects**, where each object within the array represents a single DNS query event.

### Compression and encoding

*   **Encoding:** UTF-8
*   **Compression:** Gzip compression is mandatory and automatically applied to all exported log files.

### S3 Object layout and naming

Log files are written to the S3-compatible bucket using a structured folder hierarchy and a specific timestamp-based naming convention to facilitate efficient partition-based querying and ingestion.

*   **Object prefix (Path):** `/logs/%Y/%m/%d/` (organized by Year, Month, and Day)
*   **Filename pattern:** `%H-%M-%S-%3f.json.gz` (Hour-Minute-Second-Millisecond of the batch generation)

**Example S3 object key:**
`logs/2026/08/24/14-02-02-123.json.gz`
jsonl
### File Schema Structure
Unlike JSON Lines (JSONL), the delivered file is a standard, single-line minified JSON array.

**Example of the delivered minified file structure (uncompressed representation):**
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

## 5. Fields reference {#fields-reference}

The table below describes the schema for the exported DNS query logs.

| Field | Type | Required | Description | Example |
| :--- | :--- | :--- | :--- | :--- |
| `AccountId` | integer | No | Detected account ID, if any. | `1234` |
| `DnsServerId` | string | No | Detected profile ID, also known as DNS ID or DNS Server ID, if any. | `"prof1234"` |
| `DeviceId` | string | No | Detected device ID, if any. | `"dev1234"` |
| `ClientCountry` | string | No | Country of the client's IP address as an ISO 3166-1 alpha-2 code. Absent if it could not be detected. `XK` is used for Kosovo. | `"AU"` |
| `ResponseCountry` | string | No | Country of the first IP address in the response as an ISO 3166-1 alpha-2 code. Absent if it could not be detected. `XK` is used for Kosovo; `QN` means "Not Applicable" when the response type contains no IP address information. | `"US"` |
| `DomainFQDN` | string | Yes | Requested DNS resource name (FQDN). | `"example.com."` |
| `FilterListId` | string | No | ID of the first filter whose rules matched the query. Omitted if no rule matched. Reserved values include `adult_blocking`, `blocked_service`, `category`, `custom`, `general_safe_search`, `newly_registered_domains`, `safe_browsing`, and `youtube_safe_search`. | `"adguard_dns_filter"` |
| `FilterRule` | string | No | First rule that matched the query. For `blocked_service`, contains the blocked service ID. For `category`, contains the category ID. Omitted if no rule matched. | `"||example.com^"` |
| `TimeAddedMs` | integer | Yes | Unix timestamp when the request was received, in milliseconds. | `1629974298000` |
| `ASN` | integer | No | Autonomous System Number (ASN) detected from the client's IP address, if any. | `1234` |
| `ElapsedMs` | integer | Yes | Time elapsed since the beginning of request processing, in milliseconds. | `3` |
| `RequestType` | integer | Yes | Numeric DNS resource-record type of the query, for example `1` for an `A` record. | `1` |
| `RequestIdNum` | integer | Yes | Random unsigned 16-bit integer used to simplify deduplication when the old `u` field is not used. | `12345` |
| `Action` | integer | Yes | Filtering action: `0` unknown, `1` no filtering, `2` request blocked, `3` response blocked, `4` request allowed by allowlist, `5` response allowed by allowlist, `6` request or response modified/rewritten. | `2` |
| `DNSSEC` | integer | Yes | Whether the response was validated with DNSSEC: `0` = no, `1` = yes. | `1` |
| `Protocol` | integer | Yes | DNS protocol: `0` unknown, `3` DNS-over-HTTPS, `4` DNS-over-QUIC, `5` DNS-over-TLS, `8` Plain DNS, `9` DNSCrypt. | `3` |
| `ResponseCode` | integer | Yes | DNS response code (`RCODE`) sent to the client. | `0` |
| `IpAddress` | string | No | Client IP address. Omitted when IP logging is disabled for the corresponding profile. | `"1.2.3.4"` |
| `TrackerId` | string / null | Yes | Tracker ID found by matching the requested domain against the `dns-trackers` enrichment table. Set to `null` if no tracker is found. | `"google"` |
| `CategoryId` | string / null | Yes | Tracker category ID returned by the `dns-trackers` enrichment lookup. Set to `null` if no tracker is found. | `"search_engines"` |

## 6. Delivery guarantees and limitations {#delivery-guarantees-and-limitations}

Understanding how logs are batched and delivered is critical for designing your SIEM ingestion pipeline.
*   **Batch-Only Delivery:** Logs are exported strictly in batches, not in real time. To keep the system stable and adapt to different traffic levels, both batch sizes and delivery intervals are flexible. Exact file sizes and upload times are not fixed and may vary as the system is optimized.
*   **Expected Latency and Potential Delays:** While we strive for minimal latency, there is an expected delivery latency. Occasional delays are possible due to high network traffic, system load, or processing queues.
*   **At-Least-Once Delivery: ** Log delivery is guaranteed on an at-least-once basis. While this ensures that all events are successfully delivered, duplicate log entries may occasionally be written to the destination bucket (for example, during network retries or recovery from transient connection drops). Exactly-once delivery is not guaranteed.
*   **Client-side deduplication required:** The client must be capable of deduplicating events within their SIEM or data lake. Deduplication should be handled using a combination of the event `timestamp` and other unique identifiers.
*   **No order guarantees:** Due to the distributed nature of our global DNS infrastructure, the chronological order of events is not guaranteed. Events may arrive out of order within a single log file or across different batches.
*   **Unreachable destination (retries or drops):** If your S3 endpoint or bucket becomes unreachable (e.g., due to expired credentials or network outages on your provider's side), AdGuard DNS may attempt retries. However, depending on backend limits, log events generated during the outage might be dropped (skipped) to prevent buffer overflow.
*   **No historical backfill:** Log streaming is strictly forward-looking. Exporting historical logs generated before the streaming feature was activated is not supported.

## 7. Security and privacy

DNS query logs contain highly sensitive network and metadata. To ensure the safety of your organization's data, please observe the following security principles:

*   **Sensitive DNS Data:** Be aware that streamed logs can contain sensitive DNS metadata, including queried domains, device identifiers, client IP addresses, and geographic details of your clients.
*   **Client Responsibility:** The client is solely responsible for the overall security of their S3-compatible bucket, including configuring and maintaining secure bucket policies and access control lists (ACLs).
*   **Restrict Access:** We highly recommend restricting access to the bucket to the absolute minimum necessary.
*   **Credential Rotation:** Credentials (access keys and secrets) provided to AdGuard DNS for bucket access should be regularly rotated in accordance with your organization's internal security policies. However, because changing keys on the cloud provider side immediately revokes AdGuard’s write permissions, new credentials must be updated in AdGuard at the same time to prevent log delivery disruption.
*   **Dashboard Logging Settings Impact:** If certain types of logging are disabled in your AdGuard DNS account settings, this will directly affect the schema of your exported logs. For example, if you disable specific device metadata logging, those fields will be omitted (or populated with null values) in the streamed JSON files.
*   **No Bypass of Privacy Settings:** AdGuard DNS strictly respects your configuration. Under no circumstances will AdGuard bypass, override, or circumvent your account's privacy and data-anonymization settings when exporting events to your external storage.

## 8. How to Ingest Logs into SIEM

Since AdGuard DNS streams query logs to S3-compatible storage, configuring the ingestion pipeline into your SIEM platform is handled entirely on your side.

*   **S3-Compatible Destination:** AdGuard DNS delivers raw log files directly to your designated S3 bucket, which serves as the central landing zone for your security data.
*   **Custom Ingestion Pipeline:** You can connect and ingest these log files into your SIEM or analytics system using your own data pipelines, custom scripts, or ETL processes.
*   **Standard S3 Connectors:** For major platforms such as **Splunk**, **Microsoft Sentinel**, and **Elastic**, you typically utilize their respective native S3 connectors, inputs, or log collectors.
*   **Infrastructure-Dependent Setup:** The exact configuration, index mapping, and parsing rules inside your SIEM depend heavily on your organization's specific infrastructure, data schemas, and retention policies.

## 9. Troubleshooting

This section details common integration issues you may encounter when setting up or running the query log stream, along with steps to resolve them.

### Logs are not appearing in the bucket
*   **Potential cause:** Configuration on the AdGuard side is not yet complete, or incorrect connection parameters were provided.
*   **Resolution:** Verify that you received a confirmation email from your AdGuard account manager stating that the stream configuration is complete. Double-check all shared parameters (bucket name, endpoint, region).

### Incorrect bucket permissions
*   **Potential cause:** The credentials shared with AdGuard do not have sufficient permissions to write objects to the bucket.
*   **Resolution:** Ensure that the AWS IAM policy (or your provider’s equivalent) associated with the provided access keys explicitly grants `s3:PutObject` permission for the target bucket and prefix.

### S3 credentials expired
*   **Potential cause:** The credentials have expired, or they were rotated/revoked in accordance with your organization's internal security policies.
*   **Resolution:** Generate a new set of access and secret keys, and share them securely with your AdGuard account manager to update your stream configuration.

### Duplicates appeared in the log destination
*   **Potential cause:** Network retries triggered by the "at-least-once" delivery model during transient network interruptions.
*   **Resolution:** This is expected behavior in distributed logging pipelines. Configure deduplication rules in your SIEM or database using a combination of the `timestamp`, `domain`, and `device_id` (or other unique event identifiers).

### Latency is higher than expected
*   **Potential cause:** Temporary network congestion, system load, or buffering delays on the cloud provider's side.
*   **Resolution:** Check the operational status of your S3-compatible cloud provider. If log delivery delays consistently exceed your expected batch interval (e.g., more than 15–30 minutes), contact AdGuard support to check the status of our outbound delivery queues.

### Missing fields in the logs
*   **Potential cause:** Specific logging or privacy features (such as client IP logging or device metadata collection) are disabled in your AdGuard DNS dashboard settings.
*   **Resolution:** Review your privacy and logging settings within the AdGuard DNS dashboard. The log streaming export strictly respects these settings and will not bypass your data-minimization preferences.

### Enterprise status changed
*   **Potential cause:** Your Enterprise subscription has expired, was cancelled, or your account was downgraded.
*   **Resolution:** Log streaming is deactivated automatically if the account loses Enterprise status. Contact your AdGuard account manager to restore your subscription and reactivate the stream.

### SIEM fails to parse or split the JSON array
*   **Potential Cause:** Many S3 log collectors expect Newline Delimited JSON (NDJSON/JSONL) by default. Since the exported logs are formatted as a minified JSON array (`[...]`), the collector may fail to parse the file or ingest the entire array as a single, massive log event instead of splitting it into individual query records.
*   **Resolution:** Configure the S3 connector, log shipper, or SIEM parser to handle standard JSON arrays. The ingestion pipeline must be set to unpack the array and split its elements into separate log entries before indexing.

### Compressed files do not decompress
*   **Potential Cause:** The compression format (e.g., `.gz`) used during export is either unsupported or misconfigured in your SIEM's ingestion connector.
*   **Resolution:** Verify the decompression settings on your SIEM connector (e.g., ensure automatic gzip decompression is enabled for S3 object retrieval).

## 10. FAQ

#### Can logs be streamed directly to Splunk or Microsoft Sentinel?
No. In the current MVP version, direct streaming to SIEM endpoints or APIs (such as Splunk HEC) is not supported. Logs must be written to an S3-compatible bucket first, which the SIEM can then monitor and ingest from using standard S3 connectors.

#### Can storage options other than S3 be used?
No. Currently, only S3-compatible storage is supported. Standard options include Amazon S3 or compatible offerings from other cloud providers (e.g., Cloudflare R2, Google Cloud Storage, Backblaze B2, Wasabi, or MinIO). Native integration with other storage types (such as direct Azure Blob or SFTP) is not available at this time.

#### Is it possible to retrieve historical logs?
No. Log streaming is strictly forward-looking. Only DNS query events generated *after* the streaming feature has been successfully activated and configured will be exported. Historical backfill of logs is not supported.

#### How quickly are logs delivered?
Logs are delivered in compressed batches rather than in real-time. For more details on batching intervals and delivery mechanics, refer to [Section 6](#delivery-guarantees-and-limitations) (Delivery Guarantees and Limitations).

#### Is the delivery of every single event guaranteed?
Yes. Under the "at-least-once" delivery model, network retries triggered by transient outages can cause duplicate log events to be written to the bucket. The ingestion pipeline or SIEM must be configured to handle deduplication.

#### Are duplicate events possible in the destination?
Yes. Under the "at-least-once" delivery model, network retries triggered by transient outages can cause duplicate log events to be written to the bucket. The ingestion pipeline or SIEM must be configured to handle deduplication.

#### What fields are included in the logs?

The logs include essential DNS query fields such as `TimeAddedMs` (timestamp), `DomainFQDN`, `RequestType`, `Action`, and `ClientCountry`. For the full list of fields and data types, refer to [Section 5](#fields-reference). Account privacy settings directly affect these logs; sensitive fields (such as `IpAddress`) will be omitted or set to `null` if logging is disabled in the dashboard.

#### What happens if Enterprise status is lost?
Log streaming is strictly an Enterprise-tier feature. If the account downgrades or the subscription lapses, the streaming service will be automatically deactivated.

#### Can log streaming be deactivated?
Yes. The log stream can be deactivated at any time upon request. To do so, please contact the dedicated AdGuard account manager or reach out to the AdGuard support team.

#### Can multiple S3 streaming destinations be configured?
No. The current version only supports configuring a single S3-compatible streaming destination per Enterprise organization.
