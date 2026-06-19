---
title: Setting up AdGuard Home securely
sidebar_position: 4
---

This page contains a list of additional recommendations to help ensure the security of your AdGuard Home.

## Choosing server addresses

The first time you start AdGuard Home, you will be asked which interface it should use to serve plain DNS. The most secure and convenient option depends on how you want to run AdGuard Home. You can change the address(es) later, by stopping your AdGuard Home, editing the `dns.bind_hosts` field in the configuration file, and restarting AdGuard Home.

:::note

The UI currently only allows you to select one interface, but you can actually select multiple addresses through the configuration file. We will be improving the UI in future releases.

:::

If you intend to run AdGuard Home on **your computer only,** select the loopback device (also known as “localhost”). It is usually called `localhost`, `lo`, or something similar and has the address `127.0.0.1`.

If you plan to run AdGuard Home on a **router within a small isolated network**, select the locally-served interface. The names can vary, but they usually contain the words `wlan` or `wlp` and have an address starting with `192.168.`. You should probably also add the loopback address as well, if you want software on the router itself to use AdGuard Home too.

If you intend to run AdGuard Home on a **publicly accessible server,** you’ll probably want to select the *All interfaces* option. Note that this may expose your server to DDoS attacks, so please read the sections on access settings and rate limiting below.

## Access settings

:::note

If your AdGuard Home is not accessible from the outside, you can skip this section.

:::

At the bottom of the *Settings* → *DNS settings* page you will find the *Access settings* section. These settings allow you to either ban clients that are known to abuse your AdGuard Home instance or to enable the Allowlist mode. The Allowlist mode is recommended for public instances where the number of clients is known and all of the clients are able to use secure DNS.

To enable the Allowlist mode, enter [ClientIDs][cid] (recommended) or IP addresses for allowed clients in the *Allowed clients* field.

[cid]: https://github.com/AdguardTeam/AdGuardHome/wiki/Clients#clientid

## Disabling plain DNS

:::note

If your AdGuard Home is not accessible from the outside, you can skip this section.

:::

If all clients using your AdGuard Home are able to use encrypted protocols, it is a good idea to disable plain DNS or make it inaccessible from the outside.

If you want to completely disable plain DNS serving, you can do so on the *Settings* → *Encryption settings* page.

If you want to restrict plain DNS to internal use only, stop your AdGuard Home, edit the `dns.bind_hosts` field in the configuration file to contain only the loopback address(es), and restart AdGuard Home.

## Plain-DNS ratelimiting

:::note

If your AdGuard Home is not accessible from the outside, you can skip this section.

:::

The default plain-DNS ratelimit of 20 should generally be sufficient, but if you have a list of known clients, you can add them to the allowlist and set a stricter ratelimit for other clients.

## OS service concerns

In order to prevent privilege escalations through binary planting, it is important that the directory where AdGuard Home is installed to has proper ownership and permissions set.

We thank Go Compile for assistance in writing this section.

### Unix (FreeBSD, Linux, macOS, OpenBSD)

AdGuard Home working directory, which is by default `/Applications/AdGuardHome` on macOS and `/opt/AdGuardHome` on other Unix systems, as well as the binary itself should generally have `root:root` ownership and not be writeable by anyone but `root`. You can check this with the following command, replacing `/opt/AdGuardHome` with your directory and `/opt/AdGuardHome/AdGuardHome` with your binary:

```sh
ls -d -l /opt/AdGuardHome
ls -l /opt/AdGuardHome/AdGuardHome
```

A reasonably secure output should look something like this:

```none
drwxr-xr-x 4 root root 4096 Jan 1 12:00 /opt/AdGuardHome/
-rwxr-xr-x 1 root root 29409280 Jan 1 12:00 /opt/AdGuardHome/AdGuardHome
```

Note the lack of write permission for anyone but `root` as well as `root` ownership. If the permissions and/or ownership are not correct, run the following commands under `root`:

```sh
chmod 755 /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
chown root:root /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome
```

### Windows

The principle is the same on Windows: make sure that the AdGuard Home directory, typically `C:\Program Files\AdGuardHome`, and the `AdGuardHome.exe` binary have the permissions that would only allow regular users to read and execute/list them.

In the future we plan to release Windows builds as MSI installer files that make sure that this is performed automatically.

## Verify releases {#verify-releases}

We sign the executable files that we build so that you can verify that they were created by us and not by anyone else. Inside an archive file, there is a small file with a `.sig` extension that contains the signature data. If someone replaces the binary file inside an archive, you’ll know it isn’t an official release from AdGuard.

### How to verify that the executable file was built by AdGuard? {#how-to-verify-executable}

1. Unpack the AdGuard Home archive file.

1. Import the AdGuard Home public key from the keyserver. For **current releases,** run:

    ```sh
    gpg --keyserver 'keys.openpgp.org' --recv-key '28645AC9776EC4C00BCE2AFC0FE641E7235E2EC6'
    ```

    The above command will print something similar to:

    ```none
    gpg: key 0FE641E7235E2EC6: public key "AdGuard <devteam@adguard.com>" imported
    gpg: Total number processed: 1
    gpg:               imported: 1
    ```

1. Verify.

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
