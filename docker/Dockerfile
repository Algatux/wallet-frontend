FROM node:8

RUN npm install -g create-react-app

RUN useradd -m -G sudo,node -s /bin/zsh node-user \
    && mkdir -p /home/node-user/project \
    && chown -R node-user:node-user /home/node-user

USER node-user

RUN git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh \
    && cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc

WORKDIR /home/node-user/project

EXPOSE 3000
