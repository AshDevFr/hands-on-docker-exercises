# Docker Hub

## Exercise 1 : 

* Pull the version 3.3 of alpine

```sh
$ docker pull alpine:3.3
``` 

* Run an interactive shell with alpine

```sh
$ docker run -it --name alpine-node alpine:3.3
/ # 
``` 

* Setup node.js 

```sh
/ # apk add --update nodejs
```

## Exercise 2 : 

* Commit the container previously edited to create an alpine-node image

```sh
$ docker commit -m 'Add nodejs' alpine-node $USER/alpine-node
``` 
