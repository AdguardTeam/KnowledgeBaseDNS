---
title: デバイスの自動接続
sidebar_position: 5
---

## この方法のメリット

ダッシュボードからデバイスを追加する方法に安心できないこともあるかもしれません。 例えば、システム管理者が複数の企業内デバイスを同時にセットアップする場合、手作業はできるだけ少なくしたいところです。

そこで、接続用リンクを作成して、デバイス設定で使用するという方法（デバイスの自動接続）もあります。 そうすると、お使いのデバイスは検出され、サーバーに自動的に接続されます。

## 自動接続の設定方法

1. 「_ダッシュボード_」を開き、必要なサーバーを選択します。
2. Go to _Advanced_.
3. デバイスの自動的接続オプションを有効にします。
    ![Connect devices automatically \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically.png)

これで、特別なアドレスを使用して、デバイス名、デバイスの種類、現在のサーバーIDを含むアドレスを使用して、デバイスを自動的にサーバーに接続できるようになります。 これらのアドレスがどのようなものなのか、また、アドレスを作成する方法を見てみましょう。

### 自動接続アドレスの例

- `tls://adr-{Your_Server_ID}-AdGuard-Test-Device.d.adguard-dns.com` — これは `AdGuard Test Device` という名前の `Android` デバイスを `DNS-over-TLS` プロトコルで自動的に作成します。

- `https://d.adguard-dns.com/dns-query/win-{Your_Server_ID}-John-Doe` — これは `John Doe` という名前の `Windows` デバイスを `DNS-over-HTTPS` プロトコルで自動的に作成します。

- `quic://ios-73f78a1d-Mary-Sue.d.adguard-dns.com` — これは `Mary Sue` という名前の `iOS` デバイスを `DNS-over-QUIC` プロトコルで自動的に作成します。

### 命名規則

手動でデバイスを作成する場合、名前の長さ、文字、スペース、ハイフンに関する制限があることに注意してください。

**名前の長さ**: 最大50文字。 この制限を超える文字は無視されます。

**使える文字**: 英字、数字、ハイフン「-」。 その他の文字は無視されます。

**スペースとハイフン**: スペースにはハイフンを、ハイフンにはダブルハイフン ( `--`) を使用してください。

**デバイスタイプ**: 以下の略語を使用してください:

- Windows — `win`
- macOS — `mac`
- Android — `adr`
- iOS — `ios`
- Linux — `lnx`
- ルーター — `rtr`
- スマートTV — `stv`
- ゲーム機 — `gam`
- その他 — `otr`

## リンクジェネレーター（リンク生成ツール）

任意のデバイスタイプとプロトコルのリンクを生成してくれるテンプレートもご用意しております。

1. 「_サーバー_」 → 「_サーバー設定_」 → 「_デバイス_」 → 「_デバイスを自動的に接続_」 に移動し、「_リンクジェネレーターと手順_」をクリックします。
2. 使用したいプロトコルとデバイス名、デバイスタイプを選択します。
3. 「_リンクを生成する_」をクリックします。
    ![Generate link \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step7.png)
4. これで、リンクの生成が完了です。そのサーバーアドレスをコピーし、デバイス上の[AdGuard アプリ](https://adguard.com/welcome.html)内で使用してください。
