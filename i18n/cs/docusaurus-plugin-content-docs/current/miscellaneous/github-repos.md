---
title: GitHub repozitáře AdGuard DNS
sidebar_position: 6
---

V AdGuardu je naším cílem učinit internet bezpečnějším, pohodlnějším a transparentnějším. Tento závazek se odráží nejen ve vlastnostech našich produktů a přísných zásadách ochrany osobních údajů, ale také v tom, že o naší práci informujeme co nejotevřeněji. To zahrnuje i aktivní komunikaci s naší komunitou.

Proto má AdGuard DNS několik veřejných repozitářů na GitHubu — jde o online prostory, kde si kdokoli může prohlédnout, na čem právě pracujeme, nahlásit problémy přímo vývojářům AdGuardu a dokonce přispět k našim open-source projektům.

Tento článek uvádí seznam repozitářů souvisejících s AdGuard DNS, shrnuje účel každého z nich a stručně popisuje, jaké možnosti uživatelé v nich mají. Můžete si také prohlédnout [seznam všech hlavních repozitářů AdGuardu na GitHubu a návod, jak je používat](https://adguard.com/kb/general/github-repos/).

:::note

Vytvoření ticketu na GitHubu je nejúčinnější způsob, jak upozornit vývojáře AdGuard DNS na nějaký problém. Nezapomeňte se nejprve ujistit, zda již podobný dotaz neexistuje, a problém popište srozumitelně, ale stručně. Pokud existuje, můžete mu dát kladný hlas.

:::

## Právní dokumenty

### [LegalDocs](https://github.com/AdguardTeam/LegalDocs)

V rámci našeho závazku k transparentnosti zveřejňujeme všechny právní dokumenty — jako jsou licenční smlouvy s koncovým uživatelem, zásady ochrany osobních údajů a obchodní podmínky — na platformě GitHub. Složka [`adguard-dns.io`](https://github.com/AdguardTeam/LegalDocs/tree/master/adguard-dns.io) v našem repozitáři _LegalDocs_ umožňuje komukoli zkontrolovat kompletní historii změn dokumentů souvisejících s AdGuard DNS.

## Produkty založené na DNS

### [AdGuardDNS](https://github.com/AdguardTeam/AdGuardDNS)

Open-source repozitář, který slouží také ke sledování chyb a problémů souvisejících s AdGuard DNS. Uživatelé mohou:

- Zobrazit a nahlásit problémy s DNS
- Navrhnout vylepšení

### [AdGuardHome](https://github.com/AdguardTeam/AdGuardHome)

Repozitář AdGuard Home — bezplatný software pro blokování reklam a slídičů v celé síti prostřednictvím DNS. Uživatelé mohou:

- Zkontrolovat a odeslat hlášení o chybách nebo požadavcích na nové funkce
- Zkontrolovat nebo přispět ke kódu
- Stáhnout a nainstalovat sestavení

### [AdGuardSDNSFilter](https://github.com/AdguardTeam/AdGuardSDNSFilter)

Repozitář filtru AdGuard DNS — hlavní seznam blokování na úrovni DNS používaný v AdGuard DNS a funkcích DNS filtrování. Uživatelé mohou:

- Zkontrolovat aktuální sadu pravidel
- Navrhnout změny nebo doplnění

### [AdGuardDNSCLI](https://github.com/AdguardTeam/AdGuardDNSCLI)

Repozitář AdGuard DNS CLI — multiplatformní DNS klient pro AdGuard DNS. Funguje jako DNS server, který předává požadavky DNS odpovídajícím odchozím řešitelům.

### [DNSLibs](https://github.com/AdguardTeam/DNSLibs)

Knihovna DNS používaná v balíčcích CoreLibs a AdGuard Home. Uživatelé mohou:

- Posoudit a přispět k nízkoúrovňové implementaci DNS
- Navrhnout optimalizace

## Databáze znalostí a dokumentace

### [KnowledgeBaseDNS](https://github.com/AdguardTeam/KnowledgeBaseDNS)

Databáze znalostí AdGuard DNS má za cíl pomoci uživatelům lépe porozumět službě AdGuard DNS a využívat ji. Podrobně popisuje službu AdGuard DNS (veřejnou i soukromou): od přehledů funkcí a návodů k řešení problémů až po příručky k pokročilým nastavením a dokumentaci k API. V repozitáři mohou uživatelé:

- Navrhnout opravy nebo úpravy článků databáze znalostí
- Navrhnout nové články
- Otestovat nebo spustit lokální verzi

## Kde najít všechny repozitáře AdGuardu

Výše jsme uvedli hlavní repozitáře související s AdGuard DNS, přičemž celkem existuje 96 repozitářů AdGuard. Všechny je najdete [na stránce AdGuardTeam na GitHubu](https://github.com/orgs/AdguardTeam/repositories?type=all&q=visibility%3Apublic+archived%3Afalse).
