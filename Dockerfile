# nodejs static site
FROM node:4-onbuild

WORKDIR /public
# Bundle app source
COPY package.json /public/
# Install app dependencies
RUN npm install

# Copy distro
COPY ./dist /public/dist/
COPY server.js /public/

EXPOSE  8080
CMD NODE_ENV=production node server
