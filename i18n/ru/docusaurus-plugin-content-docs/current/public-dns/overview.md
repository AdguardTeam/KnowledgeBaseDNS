---
title: Обзор
sidebar_position: 1
---

## Что такое AdGuard DNS?

AdGuard DNS — это бесплатный, защищающий конфиденциальность DNS-резолвер, который делает соединение безопасным и блокирует рекламу, трекеры, фишинг и контент для взрослых (опционально). AdGuard DNS не требует установки приложений. Им легко пользоваться, его легко настроить на любом устройстве (смартфоне, компьютере, роутере, игровой консоли и т.д.).


## Публичные серверы AdGuard DNS
У AdGuard DNS три публичных сервера. Сервер по умолчанию для блокировки рекламы, трекеров, вредоносного ПО и фишинговых сайтов. Семейная защита делает то же самое, но ещё блокирует сайты с контентом для взрослых и включает опцию «Безопасный поиск» в браузерах, где она доступна. Нефильтрующий обеспечивает безопасное и надёжное соединение, но ничего не блокирует. You can find detailed instructions on setting up AdGuard DNS on any device on [our website](https://adguard-dns.io/en/public-dns.html). Each server supports different secure protocols: DNSCrypt, DNS-over-HTTPS (DoH), DNS-over-TLS (DoT), and DNS-over-QUIC (DoQ).


## AdGuard DNS protocols
Besides plain DNS (both IPv4 and IPv6) AdGuard DNS supports various encrypted protocols, so you can choose the one that suits you best.

### DNSCrypt
AdGuard DNS allows you to use a specific encrypted protocol — DNSCrypt. Thanks to it, all DNS requests are being encrypted, which protects you from possible request interception and subsequent eavesdropping and/or alteration. But compared to the DoH, DoT and DoQ protocols, DNSCrypt is considered obsolete and if possible we recommend using these protocols.

### DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT)
DoH and DoT are modern secure DNS protocols that gain more and more popularity and will become the industry standards for the foreseeable future. Both are more reliable than DNSCrypt and both are supported by AdGuard DNS.

### DNS-over-QUIC (DoQ)
[DNS-over-QUIC is a new DNS encryption protocol](https://adguard.com/en/blog/dns-over-quic.html) and AdGuard DNS is the first public resolver that supports it. Unlike DoH and DoT, it uses QUIC as a transport protocol and finally brings DNS back to its roots — working over UDP. It brings all the good things that QUIC has to offer — out-of-the-box encryption, reduced connection times, better performance when data packets are lost. Also, QUIC is supposed to be a transport-level protocol and there are no risks of metadata leaks that could happen with DoH.


