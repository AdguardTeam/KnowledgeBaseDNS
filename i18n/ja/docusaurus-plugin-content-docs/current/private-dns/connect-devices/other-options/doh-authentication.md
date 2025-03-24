---
title: 認証付き DNS-over-HTTPS（DNS-over-HTTPS with authentication）
sidebar_position: 4
---

## この方法のメリット

認証付き DNS-over-HTTPS では、選択のサーバーにアクセスするためのユーザ名とパスワードを設定できます。

これにより、権限のないユーザーによる無断アクセスを防ぎ、セキュリティを強化することができます。 さらに、特定のプロファイルに対して他のプロトコルの使用を制限することもできます。 この機能は特に、DNSサーバーのアドレスが他人に知られている場合に役立ちます。 パスワードを追加することにより、アクセスをブロックし、あなた以外の人が使用できないようにすることができます。

## 設定方法

:::note 互換性

この機能は [AdGuard DNS Client](/dns-client/overview.md) および [AdGuard アプリ](https://adguard.com/welcome.html)でサポートされています。

:::

1. AdGuard DNSの「ダッシュボード」を開きます。
2. 新しいデバイスを追加するか、以前に作成してあるデバイスの設定を開きます。
3. 「_DNSサーバーアドレスを使用_」を選択し、「_暗号化された DNS サーバーアドレス_」セクションを開いてください。
4. 「認証付き DNS-over-HTTPS 」をお好みに設定します。
5. AdGuard DNS Client または AdGuard アプリのいずれかで、このサーバーを使用するようにデバイスを再設定します。
6. これを行うには、暗号化されたサーバーのアドレスをコピーして、AdGuard アプリまたは AdGuard DNS Client の設定に貼り付けます。
    ![Copy address \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/doh_step6.png)
7. 他のプロトコルの使用を拒否するよう設定しておくこともできます。
    ![Deny protocols \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/deny_protocol.png)
