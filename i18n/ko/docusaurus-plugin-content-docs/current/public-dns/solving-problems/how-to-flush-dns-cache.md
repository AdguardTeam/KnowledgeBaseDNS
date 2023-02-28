---
title: How to flush DNS cache
sidebar_position: 1
---

# How to flush DNS cache

## What is DNS cache?

DNS 캐시는 방문 사이트의 IP 주소를 로컬 컴퓨터에 저장하여 다음에 접속할 때, 더 빨리 로드할 수 있도록 합니다. 긴 DNS 조회를 수행하는 대신 시스템은 임시 DNS 캐시의 DNS 레코드를 사용하여 쿼리에 응답합니다.

DNS 캐시에는 다음과 같은 이른바 [리소스 레코드(RRs)](https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records)가 포함되어 있습니다.

* **리소스 데이터(또는 rdata)**;
* **레코드 유형**;
* **레코드 이름**;
* **TTL(수명)**;
* **Class**;
* **리소스 데이터 길이**

## 캐시를 지워야 하는 경우

**정기적으로 404 오류가 발생될 때.** 예를 들어, 웹사이트가 다른 서버로 이전되고 해당 IP 주소가 변경되었을 때. 브라우저가 새 IP 주소에서 웹 사이트를 열도록 하려면 DNS 캐시에서 캐시된 IP를 제거해야 합니다.

**개인 정보를 안전하게 개선하고 싶을 때**

**당신은 해커의 공격과 바이러스로부터 안전하기를 원할 것입니다.** DNS 캐시가 손상되면 브라우저가 공격자가 컴퓨터의 DNS 레코드에 삽입한 악성 웹사이트의 IP 주소로 리디렉션 할 수 있습니다.

## 다른 OS에서 DNS 캐시를 삭제하는 방법

### macOS

macOS에서 DNS 캐시를 지우려면 *터미널을 * 열고 (스포트라이트 검색을 사용하여 찾을 수 있습니다. 명령 + 스페이스 바를 누르고 터미널 입력하십시오) 다음 명령을 입력하십시오.

`sudo killall -HUP mDNSResponder`

macOS Big Sur 11.2.0 및 macOS Monterey 12.0.0에서는 다음 명령을 사용할 수도 있습니다.

`sudo dscacheutil -flushcache`

그런 다음 관리자 암호를 입력하여 프로세스를 완료하십시오.

### Windows

Windows 장치에서 DNS 캐시를 삭제하려면 다음을 수행하십시오.

Open the Command Prompt as an administrator. 시작 메뉴에서 *명령 프롬프트* 또는 *cmd*를 입력하여 찾을 수 있습니다. 그런 다음 `ipconfig/flushdns` 를 입력하고 Enter 키를 누릅니다.

*DNS 클라이언트 캐시가 성공적으로 삭제되었습니다.* 라는 줄이 표시됩니다. 끝!

### Linux

Linux does not have OS-level DNS caching unless a caching service such as systemd-resolved, DNSMasq, BIND or Nscd is installed and running. DNS 캐시를 지우는 프로세스는 Linux 배포와 사용된 cache 서비스에 따라 다릅니다.

각 배포판에서 터미널 창을 실행해야 합니다. 키보드에서 Ctrl+Alt+T를 누르고 해당 명령을 사용하여 Linux 시스템이 실행 중인 서비스의 DNS 캐시를 삭제합니다.

사용 중인 DNS 클라이언트를 찾으려면 `sudo lsof -i :53 -S`명령을 실행합니다.

#### systemd-resolved

To clear the **systemd-resolved** DNS cache, type:

`sudo systemd-resolve --flush-caches`

On success, the command doesn’t return any message.

#### DNSMasq

To clear the **DNSMasq** cache, you need to restart it:

`sudo service dnsmasq restart`

#### Nscd

To clear the **Nscd** cache, you also need to restart the service:

`sudo service nscd restart`

#### BIND

To flush the **BIND** DNS cache, run the command:

`rndc flush`

Then you will need to reload BIND:

`rndc reload`

You will get the message that the server has been successfully reloaded.

### Android

The easiest way to clear your DNS cache on your Android device is to turn the Airplane mode on and off. You can enable/disable the Airplane Mode in the Quick Settings pane.

A hard reboot can also help flush the DNS cache for your device. In order to do that, press and hold the power button for at least 20 seconds. It will (usually) force your device to reboot manually and the DNS cache will be cleared.

Another option is to reset the network settings of your device in the Settings app. Open *Settings > System > Advanced > Reset options > Reset network settings* and tap *Reset Settings* to confirm.

> Note: by doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually.

### iOS

There are different ways to clear the DNS cache on your iPad or iPhone.

The simplest way is to activate the Airplane mode (for example, in the Control Center or in the Settings app) and to deactivate it again. The DNS cache will be flushed.

Another option is to reset the network settings of your device in the Settings app. Open *General*, scroll down, find *Reset* and tap *Reset Network Settings*.

> Note: by doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually.