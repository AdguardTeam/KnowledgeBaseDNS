---
title: リンクされたIP（Linked IPs）
sidebar_position: 3
---

## リンクされたIPとは何か、なぜ便利なのか

デバイスの中には、暗号化DNSプロトコルをサポートしていないものもあります。 その場合、暗号化されていないDNSを設定するという方法があります。 例えば、**リンクされたIPアドレス**を使用することができます。 リンクされたIPアドレスの唯一の要件は、居住用IPであることです。

:::note

**住宅用IPアドレス**は、住宅用ISP（インターネットプロバイダ）に接続されたデバイスに割り当てられています。 It’s usually tied to a physical location and given to individual homes or apartments. 人々は、ウェブの閲覧、メールの送信、SNSの利用、またはコンテンツの閲覧・ストリーミングなど、日常的なオンライン活動のために住宅用IPアドレスを使用します。

:::

住宅用IPアドレスがすでに使用されている場合があり、そのIPアドレスに接続しようとすると、AdGuard DNS が接続を阻止します。

![Linked IPv4 address \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked.png)

そのような場合は、[support@adguard-dns.io](mailto:support@adguard-dns.io)までご連絡ください。正しいコンフィギュレーション設定をサポートいたします。

## リンクされたIPの設定方法

**リンクされたIPアドレス**を使用してデバイスに接続する方法は以下のとおりです：

1. AdGuard DNSの「ダッシュボード」を開きます。
2. 新しいデバイスを追加するか、以前に作成してあるデバイスの設定を開きます。
3. 「_DNSサーバーアドレスを使用_」を選択します。
4. 「_プレーン DNS サーバー アドレス_」を開き、リンクされたIPを接続します。

   ![Linked IP \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked_step4.png)

## 「ダイナミック（動的）DNS」が便利な理由

デバイスがネットワークに接続するたびに、新しい動的IPアドレスが取得されます。 デバイスが切断されると、DHCPサーバーは解放されたIPアドレスをネットワーク上の別のデバイスに割り当てることができます。 つまり、動的IPアドレスは頻繁かつ予測不能に変更します。 Consequently, you’ll need to update settings whenever the device is rebooted or the network changes.

リンクされたIPアドレスが自動的に更新されるようにするには、DNSを使用することができます。 AdGuard DNS は、あなたのDDNSドメインのIPアドレスを定期的にチェックし、それをあなたのサーバーにリンクしてくれます。

:::note

ダイナミックDNS（DDNS）は、IPアドレスが変わるたびにDNSレコードを自動的に更新するサービスです。 ネットワークIPアドレスを読みやすいドメイン名に変換することで、利便性を高めます。 名前とIPアドレスを結びつける情報は、DNSサーバー上の表に格納されます。 DDNSは、IPアドレスに変更があるたびにこれらのレコードを更新します。

:::

こうすれば、IPアドレスが変更されるたびに、関連するIPアドレスを手動で更新する必要がなくなります。

## ダイナミックDNS（動的DNS）を設定する方法

1. まず、お使いのルーターの設定でDDNSがサポートされているかどうかを確認する必要があります：

   - _ルーター設定_ → _ネットワーク_ に移動します
   - DDNSまたは_ダイナミックDNS_（動的DNS）セクションを見つけます。
   - それに移動し、設定が実際にサポートされていることを確認してください。 _以下は、見た目がどのようになるかの例です。実際の設定画面や項目は、ルーターによって若干異なる場合があります_：

   ![DDNS がサポートされている場合 \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dynamic_dns.png)

2. 人気のあるサービス、例えば [DynDNS](https://dyn.com/remote-access/) や [NO-IP](https://www.noip.com/)、またはお好みの他の DDNS プロバイダでドメインを登録してください。

3. ルーターの設定にドメインを入力し、構成を同期します。

4. リンクされた IP 設定に移動してアドレスを接続し、_詳細設定_ に移動して _DDNSの構成_ をクリックします。

5. 先ほど登録したドメインを入力し、「DDNS を設定」をクリックします。

   ![Configure DDNS \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dns_supported.png)

All done, you’ve successfully set up DDNS!

## リンクされた IP 更新の自動化（スクリプト）

### Windows の場合

最も簡単な方法は、タスクスケジューラ（Task Scheduler）を使用することです：

1. タスクを作成します:
   - タスク スケジューラを開きます。
   - 新しいタスクを作成します。
   - トリガーを 5 分ごとの実行に設定します。
   - アクションとしては「_プログラムの実行_」を選択します。
2. プログラムを選択します：
   - In the _Program or Script_ field, type `powershell`
   - Add Argumentsフィールドに、次のように入力します：
     - `Command "Invoke-WebRequest -Uri 'https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}'"`
3. タスクを保存します。

### macOSとLinuxの場合

macOS と Linux では、`cron` を使用するのが最も簡単な方法です。

1. crontab を開きます:
   - ターミナルで `crontab -e` を実行します。
2. タスクを追加します:
   - 次の行を挿入します:
     `/5 * * * * curl https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}`
   - このジョブは5分ごとに実行されます。
3. crontabを保存します。

:::note 【重要】

- macOS と Linux に `curl` がインストールされていることを確認します。
- 設定からアドレスをコピーし、`ServerID`と`UniqueKey`を置き換えることを忘れないでください。
- より複雑なロジックやクエリー結果の処理が必要な場合は、スクリプト（BashやPythonなど）とタスクスケジューラーやcronの併用をご検討ください。

:::
