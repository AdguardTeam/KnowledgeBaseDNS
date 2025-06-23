---
title: Conexão automática
sidebar_position: 5
---

## Por que ela pode ser útil

Nem todo mundo se sente à vontade para adicionar dispositivos através da Dashboard. Por exemplo, se você for um administrador de sistema configurando vários dispositivos corporativos simultaneamente, você vai querer minimizar as tarefas manuais o máximo possível.

Você pode criar um link de conexão e usá-lo nas configurações do dispositivo. Seu dispositivo será detectado e conectado automaticamente ao servidor.

## Como configurar a conexão automática

1. Abra a _Dashboard_ e selecione o servidor necessário.
2. Go to _Advanced_.
3. Ative a opção para conectar dispositivos automaticamente.
    ![Connect devices automatically \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically.png)

Agora você pode conectar automaticamente seu dispositivo ao servidor criando um endereço especial que inclui o nome do dispositivo, tipo de dispositivo e ID do servidor atual. Vamos explorar como são esses endereços e as regras para criá-los.

### Exemplos de endereços de conexão automática

- `tls://adr-{Your_Server_ID}-AdGuard-Test-Device.d.adguard-dns.com` — isso criará automaticamente um dispositivo `Android` com o protocolo `DNS-over-TLS` chamado `AdGuard Test Device`

- `https://d.adguard-dns.com/dns-query/win-{Your_Server_ID}-John-Doe` — isso criará automaticamente um dispositivo `Windows` com o protocolo `DNS-over-HTTPS` chamado `John Doe`

- `quic://ios-73f78a1d-Mary-Sue.d.adguard-dns.com` — isso criará automaticamente um dispositivo `iOS` com o protocolo `DNS-over-QUIC` chamado `Mary Sue`

### Convenções de nomenclatura

Ao criar dispositivos manualmente, observe que há restrições relacionadas ao comprimento do nome, caracteres, espaços e hífens.

**Comprimento do nome**: máximo de 50 caracteres. Caracteres além desse limite são ignorados.

**Caracteres permitidos**: letras, números e hífens `-`. Outros caracteres são ignorados.

**Espaços e hífens**: use um hífen para um espaço e um hífen duplo ( `--`) para um hífen.

**Tipo de dispositivo**: use as seguintes abreviações:

- Windows — `win`
- macOS — `mac`
- Android — `adr`
- iOS — `ios`
- Linux — `lnx`
- Roteador — `rtr`
- Smart TV — `stv`
- Console de jogos — `gam`
- Outro — `otr`

## Gerador de Links

Adicionamos um modelo que gera um link para o tipo de dispositivo e protocolo específico.

1. Vá para _Servidores_ → _Configurações do servidor_ → _Dispositivos_ → _Conectar dispositivos automaticamente_ e clique em _Gerador de links e instruções_.
2. Selecione o protocolo que deseja usar, bem como o nome e o tipo do dispositivo.
3. Clique em _Gerar link_.
    ![Gerar link \*mobile_border](https://cdn.adtidy.org/content/kb/dns/private/new_dns/connect/automatically_step7.png)
4. Você gerou o link com sucesso, agora copie o endereço do servidor e use-o em um dos [aplicativos AdGuard](https://adguard.com/welcome.html)
