---
title: 연결된 IP
sidebar_position: 3
---

## 연결된 IP란 무엇이며 왜 유용한가요?

모든 기기가 암호화된 DNS 프로토콜을 지원하는 것은 아닙니다. 이 경우 암호화되지 않은 DNS를 설정하는 것을 고려해야 합니다. 예를 들어 **연결된 IP 주소**를 사용할 수 있습니다. 연결된 IP 주소의 유일한 요구 사항은 주거용 IP여야 한다는 것입니다.

:::note

**주거용 IP 주소**는 주거용 ISP에 연결된 기기에 할당됩니다. 일반적으로 물리적 위치와 연결되어 있으며 개별 주택이나 아파트에 제공됩니다. 사람들은 웹 검색, 이메일 전송, 소셜 미디어 사용, 콘텐츠 스트리밍과 같은 일상적인 온라인 활동에 주거용 IP 주소를 사용합니다.

:::

Sometimes, a residential IP address may already be in use, and if you try to connect to it, AdGuard DNS will prevent the connection.

![Linked IPv4 address \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked.png)

If that happens, please reach out to support at [support@adguard-dns.io](mailto:support@adguard-dns.io), and they’ll assist you with the right configuration settings.

## 연결 IP 설정 방법

다음 지침은 **연결 IP 주소**를 통해 기기에 연결하는 방법을 설명합니다.

1. 대시보드를 엽니다.
2. 새 기기를 추가하거나 이전에 연결된 기기의 설정을 엽니다.
3. **DNS 서버 주소 사용**으로 이동합니다.
4. **일반 DNS 서버 주소**를 열고 연결된 IP를 연결합니다.

    ![연결된 IP \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/linked_step4.png)

## 동적 DNS

기기가 네트워크에 연결할 때마다 새로운 동적 IP 주소를 얻습니다. 기기가 연결이 끊어지면, DHCP 서버는 해제된 IP 주소를 네트워크의 다른 기기에 할당할 수 있습니다. 즉, 동적 IP 주소는 예측할 수 없을 정도로 자주 변경됩니다. 따라서 기기를 재부팅하거나 네트워크가 변경될 때마다 설정을 업데이트해야 합니다.

연결된 IP 주소를 자동으로 업데이트하려면 DNS를 사용하면 됩니다. AdGuard DNS는 정기적으로 DDNS 도메인의 IP 주소를 확인하여 서버에 연결합니다.

:::note

DDNS(동적 DNS)는 IP 주소가 변경될 때마다 DNS 레코드를 자동으로 업데이트하는 서비스입니다. 편의를 위해 네트워크 IP 주소를 읽기 쉬운 도메인 이름으로 변환합니다. 이름을 IP 주소에 연결하는 정보는 DNS 서버의 테이블에 저장됩니다. DDNS는 IP 주소가 변경될 때마다 이러한 레코드를 업데이트합니다.

:::

이렇게 하면 연결된 IP 주소가 변경될 때마다 수동으로 업데이트할 필요가 없습니다.

## 동적 DNS: 설정 방법

1. 라우터 설정에서 DDNS가 지원되는지 확인해야 합니다.

    - **라우터 설정** → **네트워크**로 이동합니다.
    - DDNS 또는 **동적 DNS** 섹션을 찾습니다.
    - 해당 페이지로 이동하여 설정이 실제로 지원되는지 확인합니다. _This is just an example of what it may look like, the settings may vary depending on your router_

    ![DDNS supported \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dynamic_dns.png)

2. [DynDNS](https://dyn.com/remote-access/), [NO-IP](https://www.noip.com/) 등 인기 있는 서비스 또는 선호하는 기타 DDNS 공급업체에 도메인을 등록합니다.

3. 라우터 설정에 도메인을 입력하고 구성을 동기화합니다.

4. 연결된 IP 설정으로 이동하여 주소를 연결한 다음 **고급 설정**으로 이동하여 **DDNS 구성**을 클릭합니다.

5. 이전에 등록한 도메인을 입력하고 **DDNS 구성**을 클릭합니다.

    ![DDNS 설정 \*border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/dns_supported.png)

DDNS를 성공적으로 설정했습니다!

## 스크립트를 통한 연결된 IP 업데이트 자동화

### Windows

가장 쉬운 방법은 작업 스케줄러(Task Scheduler)를 사용하는 것입니다.

1. 작업을 만듭니다.
    - 작업 스케줄러를 엽니다.
    - 새 작업을 만듭니다.
    - 트리거를 5분마다 실행되도록 설정합니다.
    - 액션으로 **프로그램 실행**을 선택합니다.
2. 프로그램을 선택합니다.
    - **프로그램 또는 스크립트** 필드에 \`powershell'을 입력합니다.
    - **인수 추가** 필드에 다음을 입력합니다.
        - `Command "Invoke-WebRequest -Uri 'https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}'"`
3. 작업을 저장합니다.

### macOS 및 Linux

macOS 및 Linux에서 가장 쉬운 방법은 `cron`을 사용하는 것입니다.

1. crontab을 엽니다.
    - 터미널에서 `crontab -e`를 실행합니다.
2. 작업을 추가합니다.
    - 다음 줄을 삽입합니다:
        `/5 * * * * curl https://linkip.adguard-dns.com/linkip/{ServerID}/{UniqueKey}`
    - 이 작업은 5분마다 실행됩니다.
3. crontab을 저장합니다.

:::note 중요

- macOS 및 Linux에 'curl'이 설치되어 있는지 확인하세요.
- 설정에서 주소를 복사하고 `ServerID`와 `UniqueKey`를 교체하는 것을 잊지 마세요.
- 더 복잡한 로직이나 쿼리 결과 처리가 필요한 경우에는 작업 스케줄러 또는 cron과 함께 스크립트(예: Bash, Python)를 사용하는 것을 고려하세요.

:::
