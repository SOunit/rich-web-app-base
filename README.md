# rich-web-app-base
this is a base setup for develop rich web app.
- nginx assign locations
- hot reload for both react and node

setup steps done is in "setup steps".

## setup steps
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
### add react
- create-react-app client
- add docker files
### update nginx for react
- set location
### check react from nginx
- docker-compose up --build
- visit localhost
- check default page of react
