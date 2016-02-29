# Dockerfile

## Exercise 1 : 

* Create a dockerfile based on alpine 3.3 and add the nodejs package

```
FROM alpine:3.3
MAINTAINER AshDev <ashdevfr@gmail.com>
LABEL description="This is a nodejs image based on alpine 3.3"

RUN apk add --update nodejs
```

## Exercise 2 :

* Build the Dockerfile and name it alpine-nodejs

```sh
$ docker build --tag="$USER/alpine-nodejs" .

Sending build context to Docker daemon 15.87 kB
Step 1 : FROM alpine:3.3
3.3: Pulling from library/alpine
Digest: sha256:2d4f890b7eddb390285e3afea9be98a078c2acd2fb311da8c9048e3d1e4864d3
Status: Image is up to date for alpine:3.3
 ---> 3571dd565f47
Step 2 : MAINTAINER AshDev <ashdevfr@gmail.com>
 ---> Running in 30940bec72e2
 ---> 5901bc4df67b
Removing intermediate container 30940bec72e2
Step 3 : LABEL description "This is a nodejs image based on alpine 3.3"
 ---> Running in a817cf795254
 ---> 391110d1bb0a
Removing intermediate container a817cf795254
Step 4 : RUN apk add --update nodejs
 ---> Running in 6c900e62cf58
fetch http://dl-4.alpinelinux.org/alpine/v3.3/main/x86_64/APKINDEX.tar.gz
fetch http://dl-4.alpinelinux.org/alpine/v3.3/community/x86_64/APKINDEX.tar.gz
(1/4) Installing libgcc (5.3.0-r0)
(2/4) Installing libstdc++ (5.3.0-r0)
(3/4) Installing libuv (1.7.5-r0)
(4/4) Installing nodejs (4.3.0-r0)
Executing busybox-1.24.1-r7.trigger
OK: 29 MiB in 15 packages
 ---> 1debdedc7f3c
Removing intermediate container 6c900e62cf58
Successfully built 1debdedc7f3c
```

* Run the image alpine-nodejs and try node -v

```sh
$ docker run -it $USER/alpine-nodejs /bin/sh
/ # node -v
v4.3.0
/ #
```