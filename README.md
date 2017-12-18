# SkiU
### Carpool Website for CU Students

## Members
John Phillips, Hassan Alahmed, Jack Spicer, Duaa Alahmed, Sousheel Vunnam


## Description
  SkiU will provide a platform to help CU students find rides to the mountains during ski season. It will be built in mind of students, specifically freshman, who lack transportation to the mountains, but still wand to shred. In our experience, it has been difficult to find convenient transportation to get to the mountains, one of the best parts of Colorado. SkiU solves our problem by allowing student drivers to take other passengers to the mountains. This gets people skiing and boarding, saves gas, and connects people.


  Security measures will be taken to limit the user base to CU students. This allows for simple user verification through IdentiKey and will allow safer connections among those from CU.


  Users can either be drivers or passengers. Drivers will be able to reasonably charge students, ask for gas money, or volunteer. They're also able to set preferences on when they want to depart and return, or where they want to go. Passengers can then view the potential drivers and choose who they want to go with. They'll be able to filter through drivers based on their own preferences as well. Once a passenger requests a driver for a ride, the driver can accept it and their personal details will be shared to each other. From there, they can contact each other and specify plans.


## Vision Statement
SkiU is a website built to help CU students carpool to ski resorts in order to make the process of finding a ride easier for freshman.


## Motivation
Our motivation comes from our own frustrations trying to find rides to the mountains with no luck. This product will help new Colorado residents avoid this problem.


## Risks
### Possible Development Risks:
- Lack of experience
- Inability to get authentication with CU IdentiKey, hindering security efforts and access for kids
- Storing user information/ Server to host website
- Matching algorithm and how complicated we want it to be OR creating a search algorithm based on user preferences.

### Risk Mitigation Plan:
- Putting in more time to offset lack of experience
- Talk to identikey people early. Use alternatives, such as authenticating by email domain.
- Consult with professor about user information and hosting
- Start simple with matching algorithm and build up


## Version Control
We already set up our GitHub repository and had everyone add a test push. We plan on adding the TA, grader, and professor as soon as possible.


## Development Method
Our team will be using Agile. Specifically, we will be utilizing the scrum flavor. Each sprint will last a week (or 2 based on difficulty of milestones). The scrum meetings will take place very week on Thursdays at noon and will involve review of the past sprint, brainstorming ideas for the next sprint, planning and prioritizing these ideas, then creating plans for execution during the next sprint. Daily scrums won't be used, but discussion will be commonplace in the Slack/GroupMe. Hassan will be the product owner and Sousheel will be the scrum master.


## Collaboration Tool
Our team will be using Slack, GroupMe, and an agile site to coordinate and communicate. We will make announcements in slack with any updates we make. We also meet weekly on Thursday to talk about progression.


## Proposed Architecture
For the front end we plan to use HTML, Javascript, and CSS. For the back end we will be using Python and SQL.
The front end languages will handle user input, while Python will use the input to match people and display driver availability.
- Website structure - HTML
- Website style - CSS
- Website functionality - Javascript
- Backend function - Python
- Database - SQL

## Repo Organization/Structure
Iside the repository you will see those files:
1- views: this file contians the HTML pages for the website.
2- ruotes:conatins the node.js files.
3- public: have two sub files in it and they are the scripts and styles which have the images and the css file.
4- node_modules: conatins node.js libraries.

## Where to find the website
We already deployed the web app on heroku, so you can find it and run it here: http://skiu.herokuapp.com/

## Build/Run/Test the code
To run a local build, follow these steps:

1-Clone the repository from github
2-Using a local mysql server, create a new database calles SkiU, then in that database populate the required tables buy running the Tables.sql script
3-Navigate to the directory where the github repository was cloned
4-Run the following command: npm start (You would have to have npm installed)
5-On your browser, go to http://localhost:3000/

## Continuous Integration
We used a Continuous Integration tool to test our code. You can see the builds in the following link:
https://travis-ci.org/Palmphillips/SkiU


