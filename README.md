# rich-web-app-base
this is a base setup for develop rich web app.
- nginx assign locations
- hot reload for both react and node

setup steps done is in "setup steps".

## Setup Steps
## Docker, Nginx
### npm init
- clone project
- npm init
### add nginx
- add nginx files
### add docker
- add Dockerfile.dev
- add docker-compose.yml
### check docker and nginx
- docker-compose up
- visit localhost
- check default page of nginx
## React
### add react
- create-react-app client
- add docker files
### update nginx for react
- set location
### check react from nginx
- docker-compose up --build
- visit localhost
- check default page of react
### add reload setting of react to docker-compose.yml
- add volume setting
- add reload setting
### check hot reload of react
- edit app.js
- check auto reload
## Node
### add node
- create node file
- add docker files
### update nginx for node
- set location
### check node from nginx
- docker-compose up --build
- visit localhost/node/
- check node message
### add node request to react
- npm install --save axios
- add axios node request in react app
### check node message in react
- visit localhost
- check node message in react
### add nodemon to node
- update package.json, nodemon -L
### check nodemon
- update node message
- refresh react page
## mongo db
### add mongo db to docker
- add mongo db to docker-compose.yml
### check mongo db connection in console
- add mongo access to node
- check mongo connect message in console

