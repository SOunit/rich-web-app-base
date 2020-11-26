# rich-web-app-base
this is a base setup for develop rich web app.
- nginx assign locations
- hot reload for both react and node

setup steps done is in "setup steps".

## setup steps
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
- visit localhost/node
- check node message
