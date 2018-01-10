#DM Scribe 

>A tool for the well to-do but very disorganized dungeon master.

##Team
- __Product Owner__: Brooks Naylor
- __Scrum Master__: Jake Lee
- __Development Team Members__: Spencer Vaterlaus

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

##Usage

>Create players and monsters for your encounters, input the turn order for your players, and see the initiative order render at the bottom of the Arena page.

>When a monster dies, remove them from the Arena and see the initiative tracker update automatically.

##Requirements

##Development

TO START APP ON LOCAL SERVER <br/>

From within the root directory, in terminal use:<br/><br/>
  <strong>$ yarn install</strong><br/>

Once all dependencies have been installed, open two terminal tabs, both residing in the dungeon-master folder.<br/>
In one tab, to get react running and able to re-render, in the terminal use:<br/><br/>
  <strong>$ yarn run react-dev</strong><br/>

In the other terminal tab, to get the server up and running, in the terminal use:<br/><br/>
  <strong>$ yarn run server-dev</strong><br/>

Now if you navigate to localhost:3000 you should see the app up and running!<br/>

If you want to have data stored using mongo and mongoose on your local machine navigate to the folder database-mongo.<br/>
Inside this folder in the terminal use:<br/><br/>
  <strong>$ mkdir mongoDb</strong><br/><br/>
  <strong>$ mongod --dbpath mongoDb</strong><br/>

This creates a folder for all of the mongo data and start up the connection to the mongo database between your server and mongo.<br/>
In the future on your local machine, once mongoDb has been created you simply need to run $ mongod --dbpath mongoDb to connect to your database.

##Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

