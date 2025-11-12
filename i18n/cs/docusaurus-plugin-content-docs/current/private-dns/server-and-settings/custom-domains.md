---
title: Vlastní domény
sidebar_position: 6
---

Předplatitelé AdGuard DNS mohou nastavit své vlastní domény (např. `dns.example.com`) namísto výchozí `d.adguard-dns.com`. Tato funkce má pomoci podnikům sladit ochranu DNS s jejich infrastrukturou tím, že zajistí hladkou integraci s firemními bezpečnostními zásadami a zároveň zachová všechny funkce blokování reklam a ochrany soukromí, které poskytuje AdGuard DNS.

:::note

Vlastní domény jsou k dispozici uživatelům tarifů **Enterprise** a **Team**.

:::

## Jak nastavit vlastní doménu

Chcete-li nakonfigurovat vlastní doménu, přihlaste se do svého ovládacího panelu AdGuard DNS a přejděte do části [_Nastavení účtu_](https://adguard-dns.io/en/dashboard/account). Přejděte dolů na _Pokročilá nastavení_ a vyberte _Vlastní domény_. Dále budete muset projít třemi hlavními kroky.

1. Výběr protokolu. Zde máte dvě možnosti:

   - Přidat doménu DNS-over-HTTPS (pro DNS-over-HTTPS)
   - Přidat doménu DoT/DoQ (pro DNS-over-TLS nebo DNS-over-QUIC)

   ![Choose the protocol \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_1.png)

2. Po výběru protokolu zadejte preferovaný název domény (např. `example.com`) a ověřte záznam CNAME.

   ![CNAME record \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_2.png)

3. Nastavení certifikátu. Pro domény DoT/DoQ budete muset nahrát certifikát TLS se zástupným znakem. Pokud zvolíte DoH, můžete buď poskytnout svůj vlastní certifikát TLS, nebo nechat AdGuard DNS, aby vám jej vygeneroval. Po ověření se vaše vlastní doména zobrazí na ovládacím panelu a bude připravena k použití.

   ![Custom domain list \*mobile](https://cdn.adtidy.org/content/release_notes/dns/v2-15/picture_en_3.png)
