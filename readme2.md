The Cup Connect App

### User Stories
1. Idea  - The Cup-Connect App :
Primary User Story: I want to connect with other international tourists attending the event.So that I can share experiences, make new friends, and enhance my overall World Cup experience.

As a user, I can create a profile with information about my country, interests, and preferred languages.

As a user, I can browse a list of other international tourists who have created profiles.

As a user, I can filter and search for tourists based on their country, interests, or language preferences.

As a user, I can send connection requests to other tourists.

As a user, I receive notifications when someone sends me a connection request.

As a user, I can accept or decline connection requests.

As a user I can view a feed of  "tourist activity"  to see what  cup events countries(houses)are participating in. Envisioned it as way for countries to compete with eachother while out at the world up for community service. More Activities attended = More points to Country House. Highest Ranking Country decides The Philanthropy of their Choice FIFA to donate to.

--------------------------------------------------------------------------------------

Technologies Used :
-HTML
-CSS
-Javascript
-Express
-Node
-Postman
-Postgres
-SQL
----------------------------------------------------------------------------
INSTALLATION INSTRUCTIONS

1.Fork and clone this repository.

2.Run npm install from your terminal while inside of the project's directory.

3.Set up a .env file and add SECRET_SESSION=YOUR_KEY_HERE and OPENAI_API_KEY=YOUR_OPENAIAPI_KEY_HERE

4.Create a config.json file inside the config folder, add the following template and update it to suit your desired database and credentials:

{
  "development": {
    "username": "YourUsername",
    "password": "YourPasswordGoesHere",
    "database": "lolchamps",
    "host": "127.0.0.1",
    "dialect": "postgres" //Adjust if needed
  },
  "test": {
    "username": "YourUsername",
    "password": "YourPasswordGoesHere",
    "database": "lolchamps",
    "host": "127.0.0.1",
    "dialect": "postgres" //Adjust if needed
  },
  "production": {
    "username": "YourUsername",
    "password": "YourPasswordGoesHere",
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres", //Adjust if needed
    "dialectOptions": {
        "ssl": {
          "require": true,
          "rejectUnauthorized": false
        }
    }
  }
}

5.Run sequelize db:create from your terminal or manually create the required database in your server.

6.Run sequelize db:migrate from your terminal to update your database's schema to the project's specifications.

7.Recommended: Do an initial commit and push to your fork.

8.Run your server and access the app through the port specified in server.js.

----------------------------------------------------------------------------------------
MODELS
----------
USER MODEL
id
name
email
password


TOURIST MODEL
id
Fullname
Biography
interests
country
age
tourist_id


# `Express Authentication`

Express authentication template using Passport + Flash messages + custom middleware

## What it includes

* Sequelize user model / migration
* Settings for PostgreSQL
* Passport and passport-local for authentication
* Sessions to keep user logged in between pages
* Flash messages for errors and successes
* Passwords that are hashed with BCrypt
* EJS Templating and EJS Layouts

### User Model

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| id | Integer | Serial Primary Key, Auto-generated |
| name | String | Must be provided |
| email | String | Must be unique / used for login |
| password | String | Stored as a hash |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |

### Default Routes

| Method | Path | Location | Purpose |
| ------ | ---------------- | -------------- | ------------------- |
| GET | / | server.js | Home page |
| GET | /auth/login | auth.js | Login form |
| GET | /auth/signup | auth.js | Signup form |
| POST | /auth/login | auth.js | Login user |
| POST | /auth/signup | auth.js | Creates User |
| GET | /auth/logout | auth.js | Removes session info |
| GET | /profile | server.js | Regular User Profile |

## `1` Fork & Clone Project & Install Dependencies
`1` The first thing that we are going to do is `fork` and `clone`

`2` Now we are going to install the current dependencies that are listed inside of `package.json`
```text
npm install
```

`3` We have the current packages for `authentication`. These are the following packages:

-  [bcryptjs](https://www.npmjs.com/package/bcryptjs): A library to help you hash passwords. ( [wikipedia](https://en.wikipedia.org/wiki/Bcrypt) ) 
    - Blowfish has a 64-bit block size and a variable key length from 32 bits up to 448 bits.
- [connect-flash](https://github.com/jaredhanson/connect-flash): The flash is an area of the session used for storing messages that will be used to to display to the user. Flash is typically used with redirects.
- [passport](https://www.passportjs.org/docs/): Passport is authentication middleware for Node.js. It is designed to do one thing authenticate requests. There are over 500+ strategies used to authenticate a user; however, we will be using one - *passport-local* Passport is authentication middleware for Node. It is designed to serve a singular purpose: authenticate requests
- [passport-local](http://www.passportjs.org/packages/passport-local/): The local authentication strategy authenticates users using a username and password. The strategy requires a verify callback, which accepts these credentials and calls done providing a user. [passport-local](http://www.passportjs.org/packages/passport-local/)
- [express-session](https://github.com/expressjs/session): Create a session middleware with given *options*.
- [method-override](https://github.com/expressjs/method-override): Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.


## `2` Create Database & Update Sequelize Config

`1` Update **`config.json`** file with the following:

```json
{
  "development": {
    "database": "express_auth_dev",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "database": "express_auth_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "dialectOptions": {
        "ssl": {
          "require": true,
          "rejectUnauthorized": false
        }
    }
  }
}
```

`2` Create database `express_auth_dev`

```text
sequelize db:create
```



## `3` Analyze File Structure

```text
├── config
│   └── config.json
├── controllers
│   └── auth.js
├── models
│   └── index.js
├── node_modules
│   └── ...
├── public
│   └── assets
│   └── css
│       └── style.css
├── test
│   └── auth.test.js
│   └── index.test.js
│   └── profile.test.js
│   └── user.test.js
├── views
│   └── auth
│       └── login.ejs
│       └── signup.ejs
│   └── index.ejs
│   └── layout.ejs
│   └── profile.ejs
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── server.js
```
