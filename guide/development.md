# Development

## Docker

### macOS

* Follow installation instructions here to install docker on mac: [docker-ce-desktop-mac](https://store.docker.com/editions/community/docker-ce-desktop-mac)

* Start docker

* Create Datafolders

```bash
mkdir -p ~/datadrive/ed/mysql && mkdir -p ~/datadrive/ed/redis
```

* Clone the repo

``` bash
git clone https://github.com/Email-Dashboard/Email-Dashboard.git
```

* Update mac username in `docker-compose-dev.yml` in `line 7` and line `27`
```yaml
/Users/MacUserName/datadrive/ed/mysql:/var/lib/mysql # update MacUserName with yours
```

* Start

```bash
docker-compose -f docker-compose-dev.yml build
docker-compose -f docker-compose-dev.yml run web rake db:migrate
docker-compose -f docker-compose-dev.yml up
```
* Dashboard url: [http://localhost:3000](http://localhost:3000)
* Make API requests to [http://localhost:8080](http://localhost:8080)

**ps: Remember to re-build the image again if you make changes to the Gemfile or added a new go package.**

### Ubuntu

* Install the most recent version of the Docker Engine for your platform using the [official Docker releases](http://docs.docker.com/engine/installation/), which can also be installed using:

```bash
wget -qO- https://get.docker.com/ | sh
```

* Execute this line to allow docker to execute without being root
```bash
sudo usermod -aG docker ${USER}
# Logout, then login again. Permissions should be applied.
```

* Create Datafolders
```bash
 mkdir -p /datadrive/data/mysql && mkdir -p /datadrive/data/redis
```

* Clone the repo
``` bash
git clone https://github.com/Email-Dashboard/Email-Dashboard.git
```

* Update `line 7` and line `27` in `docker-compose-dev.yml` to:
```yaml
- '/datadrive/data/mysql:/var/lib/mysql'
...
- '/datadrive/data/redis:/data'
```

* Start

```bash
docker-compose -f docker-compose-dev.yml build
docker-compose -f docker-compose-dev.yml run web rake db:migrate
docker-compose -f docker-compose-dev.yml up
```
* Dashboard url: [http://localhost:3000](http://localhost:3000)
* Make API requests to [http://localhost:8080](http://localhost:8080)

**ps: Remember to re-build the image again if you make changes to the Gemfile or added a new go package.**
