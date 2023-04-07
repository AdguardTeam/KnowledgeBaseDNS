---
title: Tổng quan
sidebar_position: 1
slug: /
---

## What is DNS?

DNS stands for "Domain Name System", and its purpose is to convert websites' names into IP addresses. Mỗi lần bạn truy cập một trang web, trình duyệt của bạn sẽ gửi một truy vấn DNS đến máy chủ DNS để tìm ra địa chỉ IP của trang web. Và một trình phân giải DNS thông thường chỉ cần trả lại địa chỉ IP của miền được yêu cầu.

> Máy chủ DNS mặc định thường do ISP của bạn cung cấp. Điều này có nghĩa là ISP của bạn có thể theo dõi hoạt động trực tuyến của bạn và bán nhật ký cho các bên thứ ba.

![Thiết bị của bạn luôn sử dụng một số máy chủ DNS để lấy địa chỉ IP của các ứng dụng tên miền muốn điều hướng đến](https://cdn.adtidy.org/content/blog/articles/dns-cbs/scr1.png)

There are also DNS servers that can block certain websites at DNS-level. Họ làm việc như thế nào? When your device sends a "bad" request, be it an ad or a tracker, a DNS server prevents the connection by responding with a non-routable IP address for a blocked domain.

## Why use DNS for content blocking

Tất cả mọi thứ đều được kết nối với Internet ngày nay, từ TV đến bóng đèn thông minh, từ thiết bị di động đến ô tô thông minh. Và Internet ở đâu, ở đó có quảng cáo và trình theo dõi. In this case, a browser-based ad blocker has proven insufficient. Để được bảo vệ tốt hơn, hãy sử dụng DNS kết hợp với VPN và trình chặn quảng cáo.

Sử dụng DNS để chặn nội dung có một số ưu điểm cũng như những sai sót rõ ràng. Mặt khác, DNS không có điểm mù vì nó quan sát tất cả các thiết bị chứ không chỉ các trình duyệt. Tuy nhiên, mặt khác, chỉ chặn DNS không thể cung cấp tính năng lọc thẩm mỹ.

## What is AdGuard DNS?

AdGuard DNS is one of the most privacy-oriented DNS services on the market. Nó hỗ trợ các giao thức mã hóa đáng tin cậy như DNS-over-HTTPS, DNS-over-TLS và DNS-over-QUIC. It can work as a regular DNS resolver in Non-filtering mode, but also it can provide DNS-level content blocking: identify requests to ad, tracking, and/or adult domains (optionally), and respond with an empty response. AdGuard có cơ sở tên miền riêng phục vụ quảng cáo, trình theo dõi và gian lận và nó được cập nhật thường xuyên.

![Lược đồ gần đúng về cách AdGuard DNS hoạt động](https://cdn.adtidy.org/public/Adguard/Blog/scr2.png)

> Khoảng 75% lưu lượng AdGuard DNS được mã hóa. This is actually what differentiates content-blocking DNS servers from others. Nếu bạn nhìn vào số liệu thống kê của CloudFlare hoặc Quad9, bạn sẽ thấy rằng DNS được mã hóa chỉ là một phần nhỏ của tất cả các truy vấn.

AdGuard DNS tồn tại ở hai dạng chính: [AdGuard DNS](public-dns/overview.md) công khai và [AdGuard DNS](private-dns/overview.md)riêng tư. Cả hai dịch vụ này đều không yêu cầu cài đặt bất kỳ ứng dụng nào. Chúng dễ thiết lập và sử dụng, đồng thời cung cấp cho người dùng các tính năng tối thiểu cần thiết để chặn quảng cáo, trình theo dõi, trang web độc hại và nội dung người lớn (nếu cần). Không có giới hạn nào đối với những thiết bị mà chúng có thể được sử dụng.

Mặc dù có rất nhiều điểm tương đồng, AdGuard DNS riêng và AdGuard DNS công cộng là hai dịch vụ khác nhau. Sự khác biệt chính của chúng là bạn có thể tùy chỉnh AdGuard DNS riêng, trong khi AdGuard DNS công cộng không thể.

## Mô-đun lọc DNS trong các sản phẩm AdGuard

Tất cả các sản phẩm AdGuard chính, bao gồm AdGuard VPN, đều có mô-đun lọc DNS **** nơi bạn có thể chọn máy chủ DNS bởi nhà cung cấp mà bạn tin tưởng. Tất nhiên, AdGuard DNS Default, AdGuard DNS Non-filter và AdGuard DNS Family Protection đều có trong danh sách. Also, AdGuard apps allow users to [easily configure and use AdGuard DNS](https://adguard-dns.io/public-dns.html) — public or private.
