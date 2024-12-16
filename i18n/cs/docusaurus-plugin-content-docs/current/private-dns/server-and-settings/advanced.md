---
title: Pokročilá nastavení
sidebar_position: 2
---

Část Pokročilá nastavení je určena zkušenějším uživatelům a obsahuje následující nastavení.

## Odezva na blokované domény

Zde můžete vybrat DNS odezvu pro blokovaný požadavek:

- **Výchozí**: Odezva s nulovou IP adresou (0.0.0.0 pro A; :: pro AAAA), pokud je blokováno pravidlem ve stylu Adblock; odezva pomocí IP adresy uvedené v pravidle, pokud je blokováno pravidlem /etc/hosts-style
- **REFUSED**: Odezva pomocí kódu REFUSED
- **NXDOMAIN**: Odezva s kódem NXDOMAIN
- **Vlastní IP**: Odezva s ručně nastavenou IP adresou

## TTL (Time-To-Live)

Time-to-live (TTL) nastavuje dobu (v sekundách), po kterou má klientské zařízení uložit odpověď na požadavek DNS do mezipaměti a načíst ji ze své mezipaměti bez opětovného dotazování serveru DNS. Pokud je hodnota TTL vysoká, mohou nedávno odblokované požadavky ještě nějakou dobu vypadat jako zablokované. Pokud je TTL 0, zařízení neukládá odpovědi do mezipaměti.

## Blokování přístupu k iCloud Private Relay

Zařízení, která používají iCloud Private Relay, mohou ignorovat nastavení DNS, takže je AdGuard DNS nemůže chránit.

## Blokování domény Firefox canary

Zabraňuje Firefoxu přepnout na DoH řešitel z jeho nastavení, když je AdGuard DNS nakonfigurován v celém systému.

## Zaznamenávání IP adres

Ve výchozím nastavení AdGuard DNS nezaznamenává IP adresy příchozích požadavků DNS. Pokud toto nastavení povolíte, budou se IP adresy zaznamenávat a zobrazovat v protokolu dotazů.
