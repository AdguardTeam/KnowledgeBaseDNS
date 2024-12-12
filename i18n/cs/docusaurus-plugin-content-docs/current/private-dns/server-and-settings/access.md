---
title: Nastavení přístupu
sidebar_position: 3
---

Konfigurací nastavení přístupu můžete chránit svůj AdGuard DNS před neoprávněným přístupem. Používáte například vyhrazenou adresu IPv4, kterou útočníci pomocí snifferu rozpoznali a bombardují ji požadavky. Žádný problém, stačí přidat otravnou doménu nebo IP adresu do seznamu a už vás nebude obtěžovat!

Blokované požadavky se nezobrazují v protokolu dotazů a nezapočítávají se do celkového limitu.

## Jak to nastavit

### Povolení klienti

Toto nastavení umožňuje určit, kteří klienti mohou používat váš server DNS. Má nejvyšší prioritu. Pokud je například stejná IP adresa na seznamu zakázaných i povolených adres, bude stále povolena.

### Blokovaní klienti

Zde můžete zobrazit seznam klientů, kteří nemají povoleno používat váš server DNS. Můžete zablokovat přístup ke všem klientům a používat pouze vybrané klienty. Za tímto účelem přidejte dvě adresy mezi zakázané klienty: `0.0.0.0/0` a `::/0`. Poté v poli _Povolení klienti_ zadejte adresy, které mohou přistupovat k serveru.

:::note Důležité

Před použitím nastavení přístupu se ujistěte, že neblokujete vlastní IP adresu. Pokud tak učiníte, nebudete mít přístup k síti. Pokud se tak stane, stačí se od serveru DNS odpojit, přejít do nastavení přístupu a odpovídajícím způsobem upravit konfiguraci.

:::

### Blokované domény

Zde můžete zadat domény (a také pravidla filtrování zástupných znaků a DNS), kterým bude odepřen přístup k serveru DNS.

![Access settings \*border](https://cdn.adtidy.org/content/release_notes/dns/v2-5/AS-en.png)

Chcete-li v protokolu dotazů zobrazit IP adresy spojené s požadavky DNS, zaškrtněte políčko _Zaznamenat IP adresy_. Chcete-li to provést, otevřete _Nastavení serveru_ → _Pokročilá nastavení_.
