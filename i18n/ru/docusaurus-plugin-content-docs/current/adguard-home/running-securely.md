---
title: Безопасная настройка AdGuard Home
sidebar_position: 4
---

На этой странице вы найдёте список дополнительных рекомендаций, которые помогут обеспечить безопасность вашего AdGuard Home.

## Выбор адреса сервера

При первом запуске AdGuard Home вам будет предложено выбрать интерфейс, который он должен использовать для обслуживания обычного DNS. Самый безопасный и удобный вариант зависит от того, как вы хотите запускать AdGuard Home. Вы можете изменить адрес(а) позже, остановив AdGuard Home, отредактировав поле `dns.bind_hosts` в файле конфигурации и перезапустив AdGuard Home.

:::note

Пользовательский интерфейс позволяет выбрать только один интерфейс, но на самом деле вы можете выбрать несколько адресов через файл конфигурации. Мы будем улучшать пользовательский интерфейс в будущих релизах.

:::

Если вы собираетесь запускать AdGuard Home только на **только на своём компьютере**, выберите устройство обратной связи (также известное как localhost). Обычно он называется `localhost`, `lo` или что-то подобное и имеет адрес `127.0.0.1`.

Если вы планируете запускать AdGuard Home на **роутере в небольшой изолированной сети**, выберите локально обслуживаемый интерфейс. Названия могут быть разными, но обычно они содержат слова `wlan` или `wlp` и имеют адрес, начинающийся с `192.168.`. Вероятно, вам также следует добавить loopback-адрес, если вы хотите, чтобы программное обеспечение на самом роутере также использовало AdGuard Home.

Если вы собираетесь запускать AdGuard Home на **общедоступном сервере**, вам, вероятно, стоит выбрать опцию _Все интерфейсы_. Обратите внимание, что это может подвергнуть ваш сервер DDoS-атакам, поэтому прочтите разделы о настройках доступа и ограничении скорости ниже.

## Настройки доступа

:::note

Если ваш AdGuard Home недоступен извне, вы можете пропустить этот раздел.

:::

В нижней части страницы _Настройки_ → _Настройки DNS_ находится раздел _Настройки доступа_. Эти настройки позволяют вам либо заблокировать клиентов, которые, как известно, злоупотребляют вашим AdGuard Home, либо включить режим Белого списка. Режим Белого списка рекомендуется для общедоступных сайтов, в которых известно количество клиентов и все клиенты могут использовать защищённый DNS.

Чтобы включить режим Белого списка, введите [ClientIDs][cid] (рекомендуется) или IP-адреса разрешённых клиентов в поле _Разрешённые клиенты_.

[cid]: /adguard-home/clients#client-id

## Отключение обычного DNS

:::note

Если ваш AdGuard Home недоступен извне, вы можете пропустить этот раздел.

:::

Если все клиенты, использующие ваш AdGuard Home, могут использовать зашифрованные протоколы, рекомендуется отключить обычный DNS или сделать его недоступным извне.

Если вы хотите полностью отключить обычный DNS, вы можете сделать это на странице _Настройки_ → _Настройки шифрования_.

Если вы хотите ограничить простой DNS только внутренним использованием, остановите AdGuard Home, измените поле `dns.bind_hosts` в конфигурационном файле так, чтобы оно содержало только loopback-адрес (или адреса), и перезапустите AdGuard Home.

## Ограничение скорости обычного DNS

:::note

Если ваш AdGuard Home недоступен извне, вы можете пропустить этот раздел.

:::

Стандартного ограничения скорости DNS, равного 20, обычно достаточно, но если у вас есть список известных клиентов, вы можете добавить их в Белый список и установить более строгое ограничение скорости для других клиентов.

## Проблемы с обслуживанием ОС

Чтобы предотвратить повышение привилегий через бинарную установку, важно, чтобы у директории, в которую установлен AdGuard Home, было правильное право собственности и разрешения.

Мы благодарим Go Compile за помощь в написании этого раздела.

### Unix (FreeBSD, Linux, macOS, OpenBSD)

Рабочая директория AdGuard Home, по умолчанию `/Applications/AdGuardHome` на macOS и `/opt/AdGuardHome` на других Unix-системах, а также сам двоичный файл должны иметь право собственности `root:root` и не должны быть доступны для записи никому, кроме `root`. Вы можете проверить это с помощью следующей команды, заменив `/opt/AdGuardHome` своей директорией и `/opt/AdGuardHome/AdGuardHome` своим двоичным файлом:

```sh
ls -d -l /opt/AdGuardHome
ls -l /opt/AdGuardHome/AdGuardHome
```

Достаточно безопасный вывод должен выглядеть примерно так:

```none
drwxr-xr-x 4 root root 4096 Jan 1 12:00 /opt/AdGuardHome/
-rwxr-xr-x 1 root root 29409280 Jan 1 12:00 /opt/AdGuardHome/AdGuardHome
```

Обратите внимание на отсутствие прав на запись для всех, кроме `root`, а также на право владения `root`. Если разрешения и/или права собственности не верны, выполните следующие команды под `root`:

```sh
chmod 755 /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
chown root:root /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
```

### Windows

На Windows принцип тот же: убедитесь, что у директории AdGuard Home, обычно `C:\Program Files\AdGuardHome`, и двоичного файла `AdGuardHome.exe` есть права, позволяющие обычным пользователям читать и выполнять/перечислять их.

В будущем мы планируем выпускать сборки Windows в виде установочных файлов MSI, которые будут выполнять это автоматически.

## Verify releases {#verify-releases}

We sign the executable files that we build so that you can verify that they were created by us and not by anyone else. Inside an archive file, there is a small file with a `.sig` extension that contains the signature data. If someone replaces the binary file inside an archive, you’ll know it isn’t an official release from AdGuard.

### How to verify that the executable file was built by AdGuard? {#how-to-verify-executable}

1. Unpack the AdGuard Home archive file.

2. Import the AdGuard Home public key from the keyserver. For **current releases,** run:

   ```sh
   gpg --keyserver 'keys.openpgp.org' --recv-key '28645AC9776EC4C00BCE2AFC0FE641E7235E2EC6'
   ```

   The above command will print something similar to:

   ```none
   gpg: key 0FE641E7235E2EC6: public key "AdGuard <devteam@adguard.com>" imported
   gpg: Total number processed: 1
   gpg:               imported: 1
   ```

3. Verify.

   - On UNIX:

     ```sh
     gpg --verify AdGuardHome/AdGuardHome.sig
     ```

   - On Windows (you might need to install PGP):

     ```ps1
     gpg --verify AdGuardHome/AdGuardHome.exe.sig
     ```

   You'll see something like this:

   ```none
   gpg: assuming signed data in 'AdGuardHome/AdGuardHome'
   gpg: Signature made Mon 15 Aug 2022 19:30:55 MSK
   gpg:                using RSA key 28645AC9776EC4C00BCE2AFC0FE641E7235E2EC6
   gpg:                issuer "devteam@adguard.com"
   gpg: Good signature from "AdGuard <devteam@adguard.com>" [ultimate]
   ```

   Check the following:

   - RSA key: must be `28645AC9776EC4C00BCE2AFC0FE641E7235E2EC6`;
   - issuer name: must be `AdGuard`;
   - E-mail address: must be `devteam@adguard.com`;

   There may also be the following warning:

   ```none
   gpg: WARNING: The key's User ID is not certified with a trusted signature!
   gpg:          There is no indication that the signature belongs to the owner.
   Primary key fingerprint: 2864 5AC9 776E C4C0 0BCE  2AFC 0FE6 41E7 235E 2EC6
   ```

### Reproducing AdGuard Home builds {#reproducing-builds}

AdGuard Home uses [reproducible builds][repr]. See the `build-release.sh` section in our [build script documentation][build].

[build]: https://github.com/AdguardTeam/AdGuardHome/tree/master/scripts
[repr]: https://reproducible-builds.org/
