# Development
## macOS
Install and start Docker, check [docker-ce-desktop-mac](https://store.docker.com/editions/community/docker-ce-desktop-mac).

:arrow_forward: Create Datafolders<br>

```mkdir -p ~/datadrive/ed/mysql && mkdir -p ~/datadrive/ed/redis```

:arrow_forward: Clone the repo<br>

```git clone https://github.com/Email-Dashboard/Email-Dashboard.git```

:arrow_forward: Update mac username in ```docker-compose-dev.yml``` in ```line 7``` and ```line 27```<br>

```/Users/MacUserName/datadrive/ed/mysql:/var/lib/mysql # update MacUserName with yours```

:arrow_forward: Start<br>

```
docker-compose -f docker-compose-dev.yml build
docker-compose -f docker-compose-dev.yml up
```

:arrow_forward: Dashboard url: http://localhost:3000<br>
:arrow_forward: Make API requests to http://localhost:8080<br>

## Debian

Install and start Docker:<br>

```wget -qO- https://get.docker.com/ | sh```

:arrow_forward: Execute this line to allow docker to execute without being root<br>

```sudo usermod -aG docker ${USER} # Logout, then login again. Permissions should be applied.```

:arrow_forward: Create Datafolders<br>

```mkdir -p /datadrive/data/mysql && mkdir -p /datadrive/data/redis```

:arrow_forward: Clone the repo<br>

```git clone https://github.com/Email-Dashboard/Email-Dashboard.git```

:arrow_forward: Update ```line 7``` and ```line 27``` in ```docker-compose-dev.yml``` to:<br>

```-'/datadrive/data/mysql:/var/lib/mysql'```<br>
```...```<br>
```- '/datadrive/data/redis:/data'```

:arrow_forward: Start<br>

```
docker-compose -f docker-compose-dev.yml build
docker-compose -f docker-compose-dev.yml up
```

:arrow_forward: Dashboard url: http://localhost:3000<br>
:arrow_forward: Make API requests to http://localhost:8080
