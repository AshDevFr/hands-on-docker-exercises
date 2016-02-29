# Docker Compose

## Exercise 1 : 

* Use compose to automatize build & run

```
web:
  build: .
  volumes:
   - ./src/:/home/workspace/src
  ports:
   - "9000:9000"
  links:
   - db
db:
   image: mongo:latest
   ports:
   - "27017:27017"

```
