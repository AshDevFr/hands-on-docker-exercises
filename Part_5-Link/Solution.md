# Link

## Exercise 1 : 

* Run a mongoDB image

```sh
$ docker run --name myDb mongo
```

* Build the Dockerfile in the Exercise1 folder

```sh
$ docker build -t exercise1 .
```

* Run your application

```sh
$ docker run -it --link myDb:db -v $(pwd)/src:/home/workspace/src/ -p 9000 exercise1
```
