# Production Deploy

## Installation

### Install Docker

#### Linux
Install the most recent version of the Docker Engine for your platform using the [official Docker releases](http://docs.docker.com/engine/installation/), which can also be installed using:

```bash
wget -qO- https://get.docker.com/ | sh
```

Execute this line to allow docker to execute without being root
```bash
sudo usermod -aG docker ${USER}
```
Logout, then login again. Permissions should be applied.

### Install Docker Compose
Install docker compose from the [official page](https://docs.docker.com/compose/install/), or manually run:

```bash
curl -L "https://github.com/docker/compose/releases/download/1.11.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

### Create data folders

##### Ubuntu
```bash
 mkdir -p /datadrive/mysql && mkdir -p /datadrive/data/redis
```

### Clone repo

```bash
 git clone https://github.com/Email-Dashboard/Email-Dashboard.git
```

* Update environment variables with your variables https://github.com/Email-Dashboard/Email-Dashboard/blob/master/.env

* If you are running on macOS enable commented lines in `docker-compose.yml`

## Deploy

```bash
  docker-compose build
  docker-compose run web rake db:migrate
  docker-compose up -d
```
