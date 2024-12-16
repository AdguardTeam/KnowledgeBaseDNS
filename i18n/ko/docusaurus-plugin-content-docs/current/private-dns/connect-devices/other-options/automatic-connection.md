---
title: 기기 자동 연결
sidebar_position: 5
---

## 왜 유용한가요?

모든 사용자가 대시보드를 통해 기기를 추가하는 데 편안함을 느끼는 것은 아닙니다. 예를 들어, 여러 기업 기기를 동시에 설정하는 시스템 관리자인 경우, 가능한 한 수동 작업을 최소화하고 싶을 것입니다.

연결 링크를 생성하고 이를 기기 설정에 사용할 수 있습니다. 기기가 감지되어 서버에 자동으로 연결됩니다.

## 기기 자동 연결을 설정하는 방법

1. **대시보드**를 열고 필요한 서버를 선택합니다.
2. **기기**로 이동합니다.
3. 기기를 자동으로 연결하는 옵션을 활성화합니다.
   ![기기를 자동으로 연결하는 방법 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step4.png)

이제 기기 이름, 기기 유형 및 현재 서버 ID가 포함된 특별한 주소를 생성함으로써 기기를 서버에 자동으로 연결할 수 있습니다. 이 주소가 어떤 모양인지와 생성 규칙에 대해 알아보겠습니다.

### 기기 자동 연결 주소의 예시

- `tls://adr-{Your_Server_ID}-AdGuard-Test-Device.d.adguard-dns.com` — 이는 자동으로 `DNS-over-TLS` 프로토콜을 사용하는 `Android` 기기가 `AdGuard Test Device`라는 이름으로 생성됩니다.

- `https://d.adguard-dns.com/dns-query/win-{Your_Server_ID}-John-Doe` — 그러면 ' John Doe'라는 이름의 `DNS-over-HTTPS` 프로토콜을 사용하는 `Windows` 기기가 자동으로 생성됩니다.

- `quic://ios-73f78a1d-Mary-Sue.d.adguard-dns.com` — 그러면 `Mary Sue`라는 `DNS-over-QUIC` 프로토콜을 사용하는 `iOS` 기기가 자동으로 생성됩니다.

### 기기 이름 지정

기기를 수동으로 생성할 때 이름 길이, 문자, 공백 및 하이픈에 대한 제한이 있음을 유의하십시오.

**이름 길이**: 최대 50자. 이 제한을 초과하는 문자는 무시됩니다.

**허용된 문자**: 영어 알파벳, 숫자 및 하이픈 `-`. 기타 문자는 무시됩니다.

**공백 및 하이픈**: 공백에는 하이픈을 사용하고 하이픈에는 이중 하이픈 ( `--`)을 사용하세요.

**기기 유형**: 다음 약어를 사용하세요:

- Windows — `win`
- macOS — `mac`
- Android — `adr`
- iOS — `ios`
- Linux — `lnx`
- 라우터 — `rtr`
- 스마트 TV — `stv`
- 게임 콘솔 — `gam`
- 기타 — `otr`

## 링크 생성기

특정 기기 유형 및 프로토콜에 대한 링크를 생성하는 템플릿을 추가했습니다.

1. **서버** → **서버 설정** → **기기** → **기기를 자동으로 연결**로 이동한 후 **링크 생성기 및 설명서**를 클릭합니다.
2. 사용하려는 프로토콜과 기기 이름 및 기기 유형을 선택합니다.
3. **링크 생성**을 클릭합니다.
   ![링크 생성 \*mobile\_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step7.png)
4. 링크를 성공적으로 생성했으면 이제 서버 주소를 복사하여 [AdGuard 앱](https://adguard.com/welcome.html) 중 하나에서 사용합니다.
