---
title: MikroTik
sidebar_position: 6
---

Roteadores MikroTik utilizam o sistema operacional RouterOS de código aberto, que fornece serviços de roteamento, rede sem fio e firewall para redes domésticas e de pequenos escritórios.

## Configuração do DNS-over-HTTPS

1. Acesse seu roteador MikroTik:
   - Abra seu navegador e acesse o endereço de IP do seu roteador (geralmente `192.168.88.1`)
   - Alternativamente, você pode usar o Winbox para conectar-se ao seu roteador MikroTik
   - Digite seu nome de usuário e senha de administrador
2. Importe o certificado root:
   - Baixe o pacote mais recente de certificados root confiáveis: [https://curl.se/docs/caextract.html](https://curl.se/docs/caextract.html)
   - Navegar para _Arquivos_. Clique em _Upload_ e selecione o pacote de certificado cacert.pem baixado
   - Vá para _Sistema_ → _Certificados_ → _Importação_
   - No campo _Nome do arquivo_, escolha o arquivo de certificado carregado
   - Clique em _Importar_
3. Configuração do DNS-over-HTTPS:
   - Vá para _IP_ → _DNS_
   - Na seção _Servidores_, adicione os seguintes servidores DNS do AdGuard:
     - `94.140.14.49`
     - `94.140.14.59`
   - Defina _Permitir solicitações remotas_ para _Sim_ (isso é crucial para o funcionamento do DNS-over-HTTPS)
   - No campo _Usar servidor DNS-over-HTTPS_, insira a URL do servidor privado do AdGuard DNS: `https://d.adguard-dns.com/dns-query/*******`
   - Clique em _OK_
4. Crie registros DNS estáticos:
   - Nas _Configurações de DNS_, clique em _Estático_
   - Clique em _Adicionar novo_
   - Defina _Name_ para d.adguard-dns.com
   - Defina _Type_ como A
   - Defina o _Endereço_ como `94.140.14.49`
   - Defina o _TTL_ para 1d 00:00:00
   - Repita o processo para criar uma entrada idêntica, mas com _Address_ definido como `94.140.14.59`
5. Desative o Peer DNS no DHCP Client:
   - Vá para _IP_ → _DHCP Client_
   - Clique duas vezes no cliente usado para sua conexão de internet (geralmente na interface WAN)
   - Desmarque _Usar Peer DNS_
   - Clique em _OK_
6. Vincule seu IP.
7. Teste e verifique:
   - Pode ser necessário reiniciar seu roteador MikroTik para que todas as alterações tenham efeito
   - Limpe o cache DNS do seu navegador. Você pode usar uma ferramenta como [https://www.dnsleaktest.com](https://www.dnsleaktest.com/) para verificar se as suas solicitações de DNS estão agora sendo roteadas pelo AdGuard

## Use o painel de controle do seu roteador

Use estas instruções se o seu roteador Keenetic não oferece suporte à configuração de DNS-over-HTTPS ou DNS-over-TLS:

1. Abra o painel de administração do roteador. Pode ser acessado em `192.168.1.1` ou `192.168.0.1`.
2. Digite o nome de usuário do administrador (geralmente, é admin) e a senha do roteador.
3. Abra _Webfig_ → _IP_ → _DNS_.
4. Selecione _Servidores_ e insira um dos seguintes endereços de servidor DNS.
   - IPv4: `94.140.14.49` e `94.140.14.59`
   - IPv6: `2a10:50c0:0:0:0:0:ded:ff` e `2a10:50c0:0:0:0:0:dad:ff`
5. Salve as configurações.
6. Vincule seu IP (ou seu IP dedicado, caso tenha uma assinatura Equipe).

- [IPs dedicados](/private-dns/connect-devices/other-options/dedicated-ip.md)
- [IPs vinculados](/private-dns/connect-devices/other-options/linked-ip.md)
