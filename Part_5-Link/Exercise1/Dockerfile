FROM sylvaincau/alpine-nodejs
MAINTAINER AshDev <ashdevfr@gmail.com>

ENV workdir_path /home/workspace
WORKDIR ${workdir_path}

COPY package.json ${workdir_path}/

RUN npm i

EXPOSE 9000
VOLUME ${workdir_path}

CMD ["npm", "start"]
