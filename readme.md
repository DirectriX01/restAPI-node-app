# RESTAPI Node App for basic-shopping-cart #

## To run this project:## 
*Running the Backend
    * In terminal type `git clone https://github.com/DirectriX01/restAPI-node-app.git`
    * After files are downloaded, navigate inside the folder using `cd ./restAPI-node-app`
    * Install the dependencies using `npm install`
    * Run the server using `npm start`
        :exclamation: You must change the mongoDB url in [app.js](https://github.com/DirectriX01/restAPI-node-app/blob/65a7cf2ec0ccd094fc564bc831b7f381e106cbac/app.js#L56 "App.js") to your own database link

*Running the frontend
    *Open a different window of terminal or your IDE
    *Navigate to the same folder
    *Type `git checkout frontendFiles` to switch to the branch of FrontendFiles
    *Run `npm install`, note this will take longer since dependencies of ReactLibrary are huge
    *After installing dependencies, run the frontend using `npm start` 

## Description of the project ##    
    *The backend is built using Node.js and express.js router functions. 
    *We use a no-sql mongoDB database, however database level interactions are handled using mongoose which is a package helping us in building easy relations across mongoDB documents.
    *Rest-API is written in a MVC model like implementation.


