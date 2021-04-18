# Node-Express App with REST API(Basic Shopping cart) #

## Building this project ##
* Open terminal and clone this repository using using `git clone https://github.com/DirectriX01/restAPI-node-app.git`
    * Running the Backend
        * Navigate into the folder using `cd ./restAPI-node-app`
        * You're on master branch by default, run `npm install` to install the backend dependencies
        * Run the server using `npm start`
        :exclamation: You must change the mongoDB url in [app.js](https://github.com/DirectriX01/restAPI-node-app/blob/65a7cf2ec0ccd094fc564bc831b7f381e106cbac/app.js#L57 "app.js") and set it to your own mongoDB databaseURL
    * Running the frontend
        * Open a new window of your terminal/IDE and navigate into the same folder.
        * Run `git checkout frontendFiles` to change the branch to frontendFiles.
        * Install the dependencies using `npm install`. Note this will take time since dependencies of React-App are huge    
        * After installing, run the frontend live using `npm start`

## Description of the Project ##
* The backend is built using Node.js framework along with express routers. 
* The REST-API is implemented along the lines of MVC Model.
*  mongoDB is used for storing data. However for performing database level interactions we use mongoose which is a library built to perform mongoDB documents operations easily.