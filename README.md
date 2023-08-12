# Project

Small social-network application for posting, chating and following other users.

## Technologies

Project is created with:

- JavaScript
- Express node.js framework
- MongoDB database instance
- React framework

## Setup

To run this project in development environment, download ZIP or clone the project and install it locally using npm.

```
$ npm install
$ npm run dev
```

Setup for MongoDB demands for profile account and setting database username, password and database name.
Those should be included in backend's .env file as follows. Configuration of server claims jwt auth so signature should be included also.

```
CONNECTIONSTRING=mongodb+srv://username:password@cluster@example.com/databaseName?retryWrites=true&w=majority
PORT=8080
JWTSECRET=secretphrase
```

## Info

You can visit commit history for both [client](https://github.com/mhorvat85/react-social-network-app) and [backend](https://github.com/mhorvat85/social-network-app)
