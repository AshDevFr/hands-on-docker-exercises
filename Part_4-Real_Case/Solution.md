# Real Case

## Exercise 1 : 

* Mount the Exercice1 folder in an alpine-nodejs container

```sh
$ docker run -it -v /<path>/Part_4-Real_Case/Exercise1:/tmp/Exercise1 sylvaincau/alpine-nodejs /bin/sh
/ #
```

* With the ls command, list the files in the mounted folder

```sh
/ # ls /tmp/Exercise1
README.md
```

## Exercise 2 : 

* Dockerfile

```
FROM sylvaincau/alpine-nodejs
MAINTAINER AshDev <ashdevfr@gmail.com>

ENV workdir_path /home/workspace
WORKDIR ${workdir_path}

COPY package.json ${workdir_path}/

EXPOSE 9000
VOLUME ${workdir_path}

CMD ["npm", "start"]
```

* Build & run

```sh
$ docker build -t exercise2
```

```sh
$ docker run -it -v $(pwd)/src:/home/workspace/src/ -p 9000:9000 exercise2

> project@0.0.0 start /home/workspace
> node src/server

Server running at http://127.0.0.1:9000/

```
