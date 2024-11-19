---
title: 차단 목록
sidebar_position: 1
---

## 차단 목록이란 무엇인가요?

차단 목록은 AdGuard DNS가 광고 및 개인정보 보호를 침해할 수 있는 콘텐츠를 필터링하기 위해 사용하는 텍스트 형식의 규칙 집합입니다. 일반적으로 필터는 유사한 초점을 가진 규칙으로 구성됩니다. For example, there may be rules for website languages (such as German or Russian filters) or rules that protect against phishing sites (such as the Phishing URL Blocklist). You can easily enable or disable these rules as a group.

## Why they are useful

차단 목록은 필터링 규칙을 유연하게 사용자화하도록 설계되었습니다. 예를 들어, 특정 언어 지역의 광고 도메인을 차단하거나 추적 또는 광고 도메인을 제거할 수 있습니다. Select the blocklists you want and customize the filtering to your liking.

## AdGuard DNS에서 차단 목록 활성화하는 방법

To activate the blocklists:

1. Open the Dashboard.
2. Go to the _Servers_ section.
3. Select the required server.
4. Click _Blocklists_.

## Blocklists types

### 일반

A group of filters that includes lists for blocking ads and tracking domains.

![General blocklists \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/general.png)

### Regional

A group of filters consisting of regional lists to block domains in specific languages.

![Regional blocklists \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/regional.png)

### Security

A group of filters containing rules for blocking fraudulent sites and phishing domains.

![Security blocklists \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/security.png)

### Other

Blocklists with various blocking rules from third-party developers.

![Other blocklists \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/blocklists/other.png)

## Adding filters

If you would like the list of AdGuard DNS filters to be expanded, you can submit a request to add them in the relevant section of [Hostlistsregistry](https://github.com/AdguardTeam/HostlistsRegistry) on GitHub.

To submit a request:

1. Go to the link above (you may need to register on GitHub).
2. Click _New issue_.
3. Click _Blocklist request_ and fill out the form.
4. After filling out the form, click _Submit new issue_.

If your filter's blocking rules do not duplicate the existing lists, it will be added to the repository.

## User rules

You can also create your own blocking rules.
Learn more in the [User rules article](/private-dns/setting-up-filtering/user-rules.md).
