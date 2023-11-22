# Project 2 Planning

## Part 1

Review the Project 2 requirements and check out some [examples](https://romebell.gitbook.io/sei-802/projects/past-projects/project2).

In this space below, list **THREE** ideas for your Project 2. For each idea, include [user stories](https://www.atlassian.com/agile/project-management/user-stories) for each idea and a link to the API(s) you want to use for it.

--------------------------------------------------------
1. Cup-ConnectApp
2. Yardie-Tech Connect 
3. Escape to Ocho Rios Blog
---------------------------------------------------------

Make a PR when you're done!

---

## Part 2

In the space below:
* either embed or link a completed ERD for your approved P2 idea
* if there are any changes/additions to your user stories, place your full set of revised user stories here
* either embed or link wireframes for every page of your app

----------------------------------------------------------
### ERD

----------------------------------------------------------
### User Stories
1. Idea #1 - The Cup-Connect App :
Primary User Story: I want to connect with other international tourists attending the event.So that I can share experiences, make new friends, and enhance my overall World Cup experience.

As a user, I can create a profile with information about my country, interests, and preferred languages.

As a user, I can browse a list of other international tourists who have created profiles.

As a user, I can filter and search for tourists based on their country, interests, or language preferences.

As a user, I can send connection requests to other tourists.

As a user, I receive notifications when someone sends me a connection request.

As a user, I can accept or decline connection requests.
--------------------------------------------------------------------------------------
Future Enhancements:

As a connected user, I can initiate private messages with other connected tourists.

As a user, I can see a map displaying the locations of connected tourists around the World Cup venues.

As a user, I can receive recommendations for meetups, events, or activities based on my profile and preferences.

//Additional Considerations //:

The application should prioritize user privacy and allow users to control the visibility of their information.

The user interface should be intuitive and user-friendly, encouraging users to explore and connect.

The application should support multiple languages to accommodate the diverse international audience.

----------------------------------------------------------
### Wireframes
---------------------------------
|        World Cup Connect Logo  |
---------------------------------
|    [Search Bar] [Profile Icon] |
---------------------------------
|                               |
|        Upcoming Matches        |
|                               |
|   [Match Card] [Match Card]    |
|   [Match Card] [Match Card]    |
|                               |
|         Explore Teams          |
|                               |
|   [Team Card] [Team Card]      |
|   [Team Card] [Team Card]      |
|                               |
|     Connect with Fans          |
|                               |
|   [Fan Post] [Fan Post]        |
|   [Fan Post] [Fan Post]        |
|                               |
---------------------------------
|      Bottom Navigation Bar     |
|   [Home] [Explore] [Connect]   |
---------------------------------
----------------------------------------------------------

Make a PR when you're done!

Model Ideas
--------------------------------------

User Model:

Attributes:
id
username
email
password 
favorite_teams (relationship to Tourist Model atrribute: Country)

Tourist Model:

Attributes:
id
Full Name 
Biography
Interests
Country
Date of Birth




## Requirements Inside `Project Board`

`card` FUNDAMENTALS
```
### FUNDAMENTALS
- [ ] Deployed (e.g. Heroku)
- [ ] Site has basic functionality related to its goal
- [ ] At least 2 GET routes (other than auth)
- [ ] At least 1 POST route
- [ ] At least 1 DELETE route
- [ ] At least 1 PUT route
```

`card` SUFFICIENT DIFFICULTY
```
### SUFFICIENT DIFFICULTY: At least 1 of the following: 
- [ ] Use of an API
- [ ] Advanced Database Relationships
- [ ] Sockets
- [ ] Scraping
- [ ] OAuth
- [ ] Other
```

`card` AUTH/SECURITY
```
### AUTH/SECURITY (Mostly From Template Boilerplate)
- [ ] Log in works (required: boilerplate or better)
- [ ] Sensible error messages for bad login info  (boilerplate or better)
- [ ] Passwords hashed in database
- [ ] Passwords in form are input type="password" (dots)
- [ ] Password verification is checked
- [ ] Can't sneak edit/delete data that I don't own by typing in random ids
```
`card` GITHUB USAGE
```
### GITHUB USAGE
- [ ] Appropriate Use of Github
- [ ] `README` is included and is descriptive
- [ ] `.gitignore` properly set up
- [ ] No API keys in Github code (used a .env file)
- [ ] Multiple commits per day
- [ ] Repo up on day 1 of project week or sooner
- [ ] `README` has *Installation Instructions*
```

`card` DATABASE USAGE
```
### DATABASE USAGE
- [ ] At least 2 Models other than join tables (required)
- [ ] Relationships were set up appropriately between models
- [ ] Avoided global variables, storing data in files, etc
- [ ] No raw file/image data stored in database, etc
```

`card` CODE STYLE
```
### CODE STYLE
- [ ] Generally DRY code / No enormous files
- [ ] Proper indentation (or mostly pretty good!)
- [ ] Naming conventions kept
- [ ] No glaring logic errors
```
`card` USER EXPERIENCE
```
### USER EXPERIENCE
- [ ] Effort was put into design
- [ ] No broken links (server errors or 404s)
- [ ] Typing a purposely bad link renders an error ejs page
- [ ] Content is responsive to screen size changes
- [ ] No glaring alignment or grid errors
```
