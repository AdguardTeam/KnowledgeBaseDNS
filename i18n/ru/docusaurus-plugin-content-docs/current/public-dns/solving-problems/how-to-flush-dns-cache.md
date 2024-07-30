---
title: Как сбросить DNS-кеш
sidebar_position: 1
---

:::info

Рассказываем, как очистить DNS-кеш, чтобы решить проблемы с публичным DNS. Вы можете использовать Блокировщик рекламы AdGuard для настройки DNS-серверов, в том числе зашифрованных

Быстрая ссылка: [Скачать Блокировщик рекламы AdGuard](https://agrd.io/download-kb-adblock)

:::

## Что такое DNS-кеш?

DNS-кеш хранит IP-адреса посещённых сайтов на локальном компьютере, чтобы в следующий раз они загружались быстрее. Вместо того, чтобы выполнять длительный DNS-поиск, система отвечает на запросы с помощью записей DNS из временного DNS-кеша.

DNS-кеш содержит так называемые [записи о ресурсах](https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records), которые включают:

- **Данные ресурса (или rdata)**;
- **Тип записи**;
- **Имя записи**;
- **TTL (время жизни информации)**;
- **Класс**;
- **Длину данных ресурса**.

## Когда нужно сбросить кеш

**Вы сменили DNS-провайдера на AdGuard DNS.** Если пользователь изменил свой DNS, из-за кеша может потребоваться некоторое время, чтобы увидеть результат.

**Вы регулярно видите ошибку 404.** Например, сайт перенесли на другой сервер, и его IP-адрес изменился. Чтобы браузер открывал сайт с нового IP-адреса, необходимо удалить закешированный IP из DNS-кеша.

**Вы хотите повысить уровень конфиденциальности.**

## Как сбросить DNS-кеш на разных ОС

### iOS

Есть разные способы очистить DNS-кеш на iPhone и iPad.

Самый простой — включить Авиарежим (например, в Центре управления или в Настройках) и выключить его. DNS-кеш будет сброшен.

Другой способ — сбросить сетевые настройки устройства в приложении Настройки. Откройте *Основные*, пролистайте вниз, найдите *Сброс* и нажмите *Сбросить настройки сети*.

:::note

Делая так, вы потеряете подключение к роутерам Wi-Fi и другие сетевые настройки, включая настройки DNS-серверов. Их нужно будет сбросить вручную.

:::

### Android

Есть разные способы очистить DNS-кеш на Android. Точные шаги могут отличаться в зависимости от используемой версии Android и производителя устройства.

#### Очистить DNS-кеш через Chrome

Google Chrome, который часто является браузером по умолчанию на Android, имеет свой собственный DNS-кеш. Чтобы очистить этот кеш в браузере Chrome, следуйте инструкции ниже:

1. Запустите Chrome на своём Android-устройстве
1. Введите `chrome://net-internals/#DNS` в адресной строке
1. На странице DNS-поиска выберите DNS в меню слева
1. На панели справа нажмите кнопку *Clear Host Cache*, чтобы очистить DNS-кеш на вашем устройстве

#### Измените сеть Wi-Fi на статическую

Чтобы очистить DNS-кеш вашего устройства Android, изменив сеть Wi-Fi на статическую, выполните следующие действия:

1. Перейдите в *Настройки → Wi-Fi* и выберите сеть, к которой вы подключены
1. Найдите настройки IP и выберите *Статический*
1. Заполните необходимые поля. Необходимую информацию можно получить у администратора сети или на странице конфигурации роутера
1. После ввода информации снова подключитесь к сети Wi-Fi. Это действие заставит ваше устройство обновить настройки IP и DNS и очистить DNS-кеш

#### Reset network settings

Другой способ — сбросить сетевые настройки устройства в приложении Настройки. Open *Settings → System → Advanced → Reset options → Reset network settings* and tap *Reset Settings* to confirm.

:::note

Делая так, вы потеряете подключение к роутерам Wi-Fi и другие сетевые настройки, включая настройки DNS-серверов. Их нужно будет сбросить вручную.

:::

### macOS

To clear the DNS cache on macOS, open the Terminal (you can find it by using the Spotlight search — to do that, press Command+Space and type *Terminal*) and enter the following command:

`sudo killall -HUP mDNSResponder`

On macOS Big Sur 11.2.0 and macOS Monterey 12.0.0, you may also use this command:

`sudo dscacheutil -flushcache`

After that, enter your administrator password to complete the process.

### Windows

To flush DNS cache on your Windows device, do the following:

Open the Command Prompt as an administrator. You can find it in the Start Menu by typing *command prompt* or *cmd*. Then type `ipconfig /flushdns` and press Enter.

You will see the line *Successfully flushed the DNS Resolver Cache*. Done!

### Linux

Linux does not have OS-level DNS caching unless a caching service such as systemd-resolved, DNSMasq, BIND or Nscd is installed and running. The process of clearing the DNS cache depends on the Linux distribution and the caching service used.

For each distribution you need to start a terminal window. Press Ctrl+Alt+T on your keyboard and use the corresponding command to clear the DNS cache for the service your Linux system is running.

To find out which DNS resolver you're using, command `sudo lsof -i :53 -S`.

#### systemd-resolved

To clear the **systemd-resolved** DNS cache, type:

`sudo systemd-resolve --flush-caches`

On success, the command doesn’t return any message.

#### DNSMasq

To clear the **DNSMasq** cache, you need to restart it:

`sudo service dnsmasq restart`

#### NSCD

To clear the **NSCD** cache, you also need to restart the service:

`sudo service nscd restart`

#### BIND

To flush the **BIND** DNS cache, run the command:

`rndc flush`

Then you will need to reload BIND:

`rndc reload`

You will get the message that the server has been successfully reloaded.

## Как сбросить DNS-кеш в Chrome

This may be useful if you do not want restart a browser every time during work with the private AdGuard DNS or AdGuard Home. Settings 1-2 only need to be changed once.

1. Disable **secure DNS** in Chrome settings

    ```bash
    chrome://settings/security
    ```

1. Disable **Async DNS resolver**

    ```bash
    chrome://flags/#enable-async-dns
    ```

1. Нажмите обе кнопки здесь

    ```bash
    chrome://net-internals/#sockets
    ```

1. Нажмите **Очистить кеш хоста**

    ```bash
    chrome://net-internals/#dns
    ```
