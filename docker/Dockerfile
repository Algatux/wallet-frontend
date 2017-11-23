FROM node:8

RUN npm install -g create-react-app

RUN useradd -m -G node node-user \
    && mkdir -p /home/node-user/project \
    && chown -R node-user:node-user /home/node-user \
    && usermod -g node-user node

USER node-user

WORKDIR /home/node-user/project

EXPOSE 3000
