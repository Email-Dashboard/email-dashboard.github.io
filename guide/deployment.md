# Deployment

## Debian

### 1- Install Docker

:arrow_forward: Install the most recent version of the Docker Engine for your platform using the [official Docker releases](http://docs.docker.com/engine/installation/), which can also be installed using:<br>

```bash
wget -qO- https://get.docker.com/ | sh
```

:arrow_forward: Execute this line to allow docker to execute without being root<br>

```bash
sudo usermod -aG docker ${USER}
```
:arrow_forward: Logout, then login again. Permissions should be applied.<br>

### 2- Install Docker Compose

:arrow_forward: Install Docker Compose from the [official page](https://docs.docker.com/compose/install/), or manually run:<br>

```bash
curl -L "https://github.com/docker/compose/releases/download/1.11.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

### 3- Create data folders

```bash
 mkdir -p /datadrive/mysql && mkdir -p /datadrive/data/redis
```

### 4- Clone repo

```bash
 git clone https://github.com/Email-Dashboard/Email-Dashboard.git
```

:arrow_forward: Update environment variables with your variables `https://github.com/Email-Dashboard/Email-Dashboard/blob/master/.env`<br>


```bash
  docker-compose build
  docker-compose up -d
```
