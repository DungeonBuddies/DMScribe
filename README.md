TO START APP ON LOCAL SERVER <br/>

In terminal use:<br/>
  $ yarn install<br/>
  
Once all dependencies have been installed, open two terminal tabs, both residing in the dungeon-master folder.<br/>
In one tab, to get react running and able to re-render, in the terminal use:<br/>
  $ npm run react-dev<br/>
  
In the other terminal tab, to get the server up and running, in the terminal use:<br/>
  $ npm run server-dev<br/>
  
Now if you navigate to localhost:3000 you should see the app up and running!<br/>

If you want to have data stored using mongo and mongoose on your local machine navigate to the folder database-mongo.<br/>
Inside this folder in the terminal use:<br/>
  $ mkdir mongoDb<br/>
  $ mongod --dbpath mongoDb<br/>
  
This creates a folder for all of the mongo data and start up the connection to the mongo database between your server and mongo.<br/>
In the future on your local machine, once mongoDb has been created you simply need to run $ mongod --dbpath mongoDb to connect to your database.
