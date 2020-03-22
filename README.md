# FriendFinder
What Bib Bang Theory character is most like you?  Answer some questions and see who best matches with you!

This project is a full-stack site, that will survey users and take the answers to process.  The app will compare the answers with those from characters and other users to see who best matches. The app will then display the name and picture of the *'friend'* with the best overall match.  

# Author 
> Tim Shaffer

# Deployment
The app is deployed to **HEROKU** at the following link: 

## Tech Used

* JavaScript
    * constructors

* Node.js
    * Express
        * get 
        * post
        * use
    * path

* HTML 
* CSS
* Bootstrap
* jQuery

## App Organization

* The app is designed to use the Express framework for Node.js
    * The `server.js` file will create a server process to listen and handle activity on a specific port.
    * The `server.js` file also establishes the express app itself with any necessary middleware and routing.
    * The `htmlRoutes.js` file defines the *`GET`* route to the `survey.html` file as well as a *'catch-all'* route to the `home.html` homepage.
    * The `apiRoutes.js` file processes a *`GET`* route and displays the contents of the `friendsArray` as built in the `friends.js` constructor file and added onto with surveys being taken.  
    * The `apiRoutes.js` file also processes a *`POST`* route handling the incoming survey data and calling the `findBestFriend()` function to handle the compatibility logic.