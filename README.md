# FriendFinder
What Big Bang Theory character is most like you?  Answer some questions and see who best matches with you!

This project is a full-stack site, that will survey users and take the answers to process.  The app will compare the answers with those from characters and other users to see who best matches. The app will then display the name and picture of the *'friend'* with the best overall match.  


# Author 
> Tim Shaffer


## Contents
* [Deployment](https://github.com/Tim-Shaffer/FriendFinder#deployment)
* [Tech Used](https://github.com/Tim-Shaffer/FriendFinder#tech-used)
* [App Organization](https://github.com/Tim-Shaffer/FriendFinder#app-organization)
* [Description](https://github.com/Tim-Shaffer/FriendFinder#description)


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

### Description

1. Clicking the **HEROKU** link -  - will take you to the Home Page.

    ![Screenshot for starting the app](/app/public/assets/images/home.jpg)

1. Clicking the **Take the Survey** button will take you to the Survey Page.

    ![Screenshot for the Survey Page](/app/public/assets/images/initial_survey.jpg)

    * *Scroll to the rest of the questions.*

    ![Screenshot for the Survey Page](/app/public/assets/images/final_survey.jpg)

1. Clicking the **Submit** button will post the answers and calculate the results causing a Modal to pop up with your match!

    ![Screenshot for the Results Page](/app/public/assets/images/results_modal.jpg)

1. If you Click the **Submit** button without having answered all of the questions, an alert will pop-up notifying you to fill out all the fields before submitting.

    ![Screenshot for the Results Page](/app/public/assets/images/alert.jpg)

1. Clicking the **API Friends List** link will direct the router to show the current list of friend objects.  *Below is a sample screenshot:*

    ![Screenshot for sample of the friendsArray](/app/public/assets/images/sample_friends_array.jpg)

1. Clicking the **GitHub Repo** link will direct you to this GitHub Repository.  