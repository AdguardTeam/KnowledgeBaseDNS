---
title: Структурированные ошибки DNS (SDE)
sidebar_position: 5
---

С выходом AdGuard DNS 2.10 AdGuard DNS стал первым публичным DNS-резолвером, который добавил поддержку [_структурированных ошибок DNS_ (Structured DNS Errors, SDE)](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/). Structured DNS Errors — это дополнение [к RFC 8914](https://datatracker.ietf.org/doc/rfc8914/). Эта функция позволяет DNS-серверам предоставлять подробную информацию о заблокированных сайтах непосредственно в DNS-ответе, не ограничиваясь сообщениями об ошибках, которые предлагают браузеры. In this article, we’ll explain what _Structured DNS Errors_ are and how they work.

## Что такое структурированные ошибки DNS

Когда блокируется запрос к рекламному или трекерскому домену, пользователь может увидеть пустые места на сайте или вообще не заметить следов DNS-фильтрации. Но когда на уровне DNS блокируется весь сайт, пользователь не сможет получить доступ к странице. When trying to access a blocked website, the user may see a generic “This site can’t be reached” error displayed by the browser.

![“This site can’t be reached” error](https://cdn.adtidy.org/content/blog/dns/dns_error.png)

Such errors don’t explain what happened and why. В результате пользователи не могут понять, почему сайт недоступен. Чаще всего они делают вывод, что проблема в их интернет-соединении или DNS-сервере.

DNS-серверы могли бы это исправить, перенаправляя пользователей на собственную страницу с объяснениями. Но для сайтов с HTTPS (а их большинство) потребуется отдельный сертификат.

![Ошибка сертификата](https://cdn.adtidy.org/blog/new/vc1gocert_invalid.png)

Существует более простое решение: [Структурированные ошибки DNS (SDE)](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/). Концепция SDE основана на [_расширенных ошибках DNS_ (Extended DNS Errors, RFC 8914)](https://datatracker.ietf.org/doc/rfc8914/), которые позволяют включить дополнительную информацию об ошибках в DNS-ответы. Интернет-драфт SDE расширяет эту идею: предлагается передавать информацию в формате [I-JSON](https://www.rfc-editor.org/rfc/rfc7493) (это более строгий формат JSON), который браузеры могли бы легко считать и отобразить в понятном для пользователя виде.

Данные SDE добавляются в поле `EXTRA-TEXT` DNS-ответа. Они включают в себя:

- `j` (justification): Причину блокировки
- `c` (contact): Информацию, к кому можно обратиться, если страница заблокирована по ошибке
- `o` (organization): Название организации, ответственной за DNS-фильтрацию в конкретном случае (опционально)
- `s` (suberror): Код подошибки (опционально)

Такая система повышает прозрачность между DNS-сервисами и пользователями.

### Что нужно, чтобы реализовать SDE

Хотя AdGuard DNS уже поддерживает структурированные ошибки DNS, на данный момент браузеры не умеют считывать и передавать информацию из SDE. Чтобы пользователи могли видеть подробные объяснения при блокировке на уровне DNS, разработчики браузеров должны ввести поддержку [интернет-драфта Structured DNS Errors](https://datatracker.ietf.org/doc/draft-ietf-dnsop-structured-dns-error/09/).

### Демо-расширение AdGuard DNS для SDE

Мы создали демо-расширение, чтобы показать, как могли бы работать структурированные ошибки DNS, если бы браузеры их поддерживали. Если вы со включённым расширением перейдёте на заблокированный сайт, оно покажет вам страницу с информацией, переданной в SDE: причиной блокировки, контактными данными и названием организации, ответственной за фильтрацию.

![Страница с объяснением](https://cdn.adtidy.org/blog/new/jlkdbaccess_blocked.png)

Найти расширение можно [в магазине Chrome](https://chromewebstore.google.com/detail/oeinmjfnchfhaabhchfjkbdpmgeageen) или [на GitHub](https://github.com/AdguardTeam/dns-sde-extension/).

Если вы хотите увидеть, как это выглядит на уровне DNS, вы можете использовать команду `dig` и найти `EDE` в выводе.

```text
% dig @94.140.14.14 'ad.doubleclick.net' A IN +ednsopt=15:0000

...

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1232
; EDE: 17 (Filtered): ({"j":"Filtered by AdGuard DNS","o":"AdGuard DNS","c":["mailto:support@adguard-dns.io"]})
;; QUESTION SECTION:
;ad.doubleclick.net.  IN A

...
```
