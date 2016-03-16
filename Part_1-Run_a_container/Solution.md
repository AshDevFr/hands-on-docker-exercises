# Run a container

## Exercise 1 : 

* Run an 'Hello world!'

```sh
$ docker run busybox /bin/echo 'Hello world'
Hello world
```

* Use the 'uname -a' command to retrieve the container informations

```sh
$ docker run busybox /bin/uname -a
Linux b63e982a8593 4.1.13-boot2docker #1 SMP Fri Nov 20 19:05:50 UTC 2015 x86_64 GNU/Linux
```

## Exercise 2 : 

* Using Bash (/bin/sh) in interactive mode

```sh
$ docker run -it busybox /bin/sh
/ #
```
* Run a 'Hello world' when in interactive mode

```sh
/ # echo 'Hello world'
Hello world
```
