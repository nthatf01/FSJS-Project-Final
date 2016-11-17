# Nathaniel Hatfield's Project for the FullStack JavaScript Course

This is the project I'm submitting for the September 2016 FSJS Code Louisville project.

This app is something I hope to build out into an actual site.  I am a Quick Recall coach at a local elementary school, and I wanted to make an app that would help them practice and also reduce the amount of paper we use during our practices by going digital.

My project uses the MEAN stack so node.js and mongodb should be installed and running to start the server.

* Clone my project to your local machine
* Go to the root directory of the project
* Run $ npm install package.json
* Run mongod from its directory to start the mongo service
* Run node src/app.js to start the server
* Open a web browser and navigate to localhost:3000 to view the web site

When adding a new question to the database, the answer is actually an array of potential correct answers.  In the Question Admin tab, answers should be separated by a semicolon in the input box.  They should also be all caps (a future update should fix this but for now the logic that checks the user's answer on the Quiz Tab does a toUpperCase).

Before running the server and app for the first time, data will need to be seeded into the MongoDB database.  Please follow these steps:

* Run $ npm install -g node-mongo-seeds
* Run $ seed to seed your mongodb with all of the data from the /seeds folder
