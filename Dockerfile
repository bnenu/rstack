# nodejs static site
FROM node:4-onbuild

# Bundle app source
COPY package.json /www/
# Install app dependencies
RUN cd /www npm install

# Copy distro
COPY ./dist /www/dist/
COPY server.js /www/

EXPOSE  8080
CMD cd /www && node server.js
