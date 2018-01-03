TO START APP ON LOCAL SERVER

In terminal use:
  $ yarn install
  
Once all dependencies have been installed, open two terminal tabs, both residing in the dungeon-master folder.
In one tab, to get react running and able to re-render, in the terminal use:
  $ npm run react-dev
  
In the other terminal tab, to get the server up and running, in the terminal use:
  $ npm run server-dev
  
Now if you navigate to localhost:3000 you should see the app up and running!

If you want to have data stored using mongo and mongoose on your local machine navigate to the folder database-mongo.
Inside this folder in the terminal use:
  $ mkdir mongoDb
  $ mongod --dbpath mongoDb
  
This creates a folder for all of the mongo data and start up the connection to the mongo database between your server and mongo.
In the future on your local machine, once mongoDb has been created you simply need to run $ mongod --dbpath mongoDb to connect to your database.
