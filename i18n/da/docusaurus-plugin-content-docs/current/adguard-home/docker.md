---
title: Docker
sidebar_position: 11
---

This page provides specific guidelines for running AdGuard Home inside the Docker container.

## Quick start {#quick-start}

### Pull the Docker image

This command will pull the latest stable version:

```sh
docker pull adguard/adguardhome
```

### Create directories for persistent configuration and data

The image exposes two volumes for data and configuration persistence. So, the following directories must be created on a suitable volume on the host system:

- Data directory, for example `/my/own/workdir`.

- Configuration directory, for example `/my/own/confdir`.

### Create and run the container

Use the following command to create a new container and run AdGuard Home:

```sh
docker run \
    -d \
    --name adguardhome \
    -p 53:53/tcp -p 53:53/udp \
    -p 67:67/udp -p 68:68/udp \
    -p 80:80/tcp -p 443:443/tcp \
    -p 443:443/udp -p 3000:3000/tcp \
    -p 853:853/tcp \
    -p 853:853/udp \
    -p 5443:5443/tcp -p 5443:5443/udp \
    -p 6060:6060/tcp \
    --restart unless-stopped \
    -v /my/own/workdir:/opt/adguardhome/work \
    -v /my/own/confdir:/opt/adguardhome/conf \
    adguard/adguardhome \
    ;
```

The AdGuard Home service admin panel can now be accessed via http://127.0.0.1:3000/ from a web browser.

The following port mappings might be needed:

- `-p 53:53/tcp -p 53:53/udp`: Required for plain DNS.

- `-p 67:67/udp -p 68:68/tcp -p 68:68/udp`: Required for running a DHCP server.

- `-p 80:80/tcp -p 443:443/tcp -p 443:443/udp -p 3000:3000/tcp`: Required for the admin panel and for running a [HTTPS/DNS-over-HTTPS][enc] server.

- `-p 853:853/tcp`: Required for running a [DNS-over-TLS][enc] server.

- `-p 853:853/udp`: Required for running a [DNS-over-QUIC][enc] server.

- `-p 5443:5443/tcp -p 5443:5443/udp`: Required for running a [DNSCrypt] server.

- `-p 6060:6060/tcp`: Required for running a pprof debug API.

### Client IPs

To make AdGuard Home see the original client IPs as opposed to something like `172.17.0.1`, the `--network host` argument must be added to the list of options.

### Control the container

AdGuard Home container can be controlled using the following commands:

- Start:

    ```sh
    docker start adguardhome
    ```

- Stop:

    ```sh
    docker stop adguardhome
    ```

- Remove:

    ```sh
    docker rm adguardhome
    ```

[DNSCrypt]: /adguard-home/encryption#configure-dnscrypt
[enc]: /adguard-home/encryption

## Update to a newer version {#update}

1. Pull the new version from Docker Hub:

    ```sh
    docker pull adguard/adguardhome
    ```

2. Stop and remove currently running container (assuming the container is named `adguardhome`):

    ```sh
    docker stop adguardhome
    docker rm adguardhome
    ```

3. Create and start the container using the new image using the command from the previous section.

## Running development builds {#unstable}

Unstable development builds might be accessed using `edge` or `beta` tags. In order to use it, simply replace `adguard/adguardhome` with `adguard/adguardhome:edge` or `adguard/adguardhome:beta` in every command from the quick start. F.eks.:

```sh
docker pull adguard/adguardhome:edge
```

## Additional configuration {#configuration}

Upon the first run, a file with the default values named `AdGuardHome.yaml` is created. This file can be modified while the AdGuard Home container is not running. Otherwise, any changes to the file will be lost because the running program will overwrite them.

The settings are stored in the [YAML] format. The documentation describing all configurable parameters and their values is available on [this page][conf].

[YAML]: https://yaml.org
[conf]: /adguard-home/configuration

### Health-check

The recommended way to implement a health check mechanism is to create a new image tailored for the target configuration. Implementations may use the special domain name `healthcheck.adguardhome.test`, expecting it to return a `NODATA` response. Specifying this particular name within the `blocked_hosts` array under the `dns` section of the configuration file will break the health check because it imposes restrictions on usage of this name. The `allowed_clients` and `disallowed_clients` properties should also allow the client IP health check.

## DHCP server {#dhcp}

To use AdGuard Home’s DHCP server, the `--network host` argument should be passed when creating the container:

```sh
docker run --name adguardhome --network host ...
```

This option instructs Docker to use the host’s network rather than a docker-bridged network.  Note that port mapping with `-p` is not necessary in this case.

:::note

The host networking driver only works on Linux hosts, and is not supported on Docker Desktop for Mac, Docker Desktop for Windows, or Docker EE for Windows Server.

:::

## `resolved` daemon {#resolved}

To run AdGuard Home on a system where the `resolved` daemon is started, `DNSStubListener` must be disabled to prevent port bind conflict:

1. Deactivate `DNSStubListener` and update the DNS server address.  Create a new file, `/etc/systemd/resolved.conf.d/adguardhome.conf` (creating the `/etc/systemd/resolved.conf.d` directory if needed) and add the following content to it:

    ```ini
    [Resolve]
    DNS=127.0.0.1
    DNSStubListener=no
    ```

   Specifying `127.0.0.1` as the DNS server address is necessary because otherwise the nameserver will be `127.0.0.53` which doesn’t work without `DNSStubListener`.

2. Activate a new `resolv.conf` file:

    ```sh
    mv /etc/resolv.conf /etc/resolv.conf.backup
    ln -s /run/systemd/resolve/resolv.conf /etc/resolv.conf
    ```

3. Stop `DNSStubListener`:

    ```sh
    systemctl reload-or-restart systemd-resolved
    ```
