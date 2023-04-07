---
title: 개요
sidebar_position: 1
---

## What is AdGuard DNS?

AdGuard DNS는 무료로, 안전한 연결을 제공하고 추적, 광고, 피싱 및 성인 콘텐츠(선택 사항)를 차단할 수 있는 개인 정보 보호 지향적인 DNS 입니다. AdGuard DNS는 응용 프로그램을 설치할 필요가 없습니다. 사용하기 쉽고 모든 장치 (스마트폰, 컴퓨터, 공유기, 게임 콘솔 등) 에 쉽게 설정할 수 있습니다.

## 공용 AdGuard DNS 서버

AdGuard DNS has three different types of public servers. "기본" 서버는 광고, 추적기, 멀웨어 및 피싱 웹사이트를 차단하기 위한 것입니다. "가족 보호"도 동일하지만 성인 콘텐츠가 포함된 웹사이트를 차단하고 이를 제공하는 브라우저에서 "안전한 검색" 옵션을 제공합니다. "필터링 하지 않음" 은 안전하고 신뢰할 수 있는 연결을 제공하지만 아무것도 차단하지 않습니다. You can find detailed instructions on setting up AdGuard DNS on any device on [our website](https://adguard-dns.io/public-dns.html). 각 서버는 DNSCrypt, DNS-over-HTTPS(DoH), DNS-over-TLS(DoT) 및 DNS-over-QUIC(DoQ)와 같은 다양한 보안 프로토콜을 지원합니다.

## AdGuard DNS 프로토콜

일반 DNS(IPv4 및 IPv6 모두) 외에도 AdGuard DNS는 다양한 암호화 프로토콜을 지원하므로 가장 적합한 프로토콜을 선택할 수 있습니다.

### DNSCrypt

AdGuard DNS를 사용하면 특정 암호화 프로토콜 DNSCrypt를 사용할 수 있습니다. 그 덕분에 모든 DNS 요청이 암호화되어 요청 가로채기 및 도청, 변경으로부터 사용자를 보호합니다. 그러나 DoH, DoT 및 DoQ 프로토콜에 비교할 때, DNSCrypt는 더 이상 사용되지 않는 것으로 간주되며 가능한 경우 이러한 프로토콜을 사용하는 것이 좋습니다.

### DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT)

DoH와 DoT는 점점 더 많은 인기를 얻고 가까운 장래에 업계 표준이 될 최신 보안 DNS 프로토콜입니다. 모두 DNSCrypt보다 안정적이며 AdGuard DNS에서 지원됩니다.

### DNS-over-QUIC (DoQ)

[DNS-over-QUIC is a new DNS encryption protocol](https://adguard.com/blog/dns-over-quic.html) and AdGuard DNS is the first public resolver that supports it. DoH 및 DoT와 달리 QUIC를 전송 프로토콜로 사용하고 마지막으로 UDP를 통해 작동하는 DNS를 루트로 되돌립니다. 이는 QUIC의 좋은 장점들 - 기본 암호화, 연결 시간 단축, 데이터 패킷 손실 시 성능 향상 등을 제공합니다. 또한 QUIC는 transport-level 프로토콜로 간주되며 DoH에서 발생할 수있는 메타 데이터 유출의 위험이 없습니다.
