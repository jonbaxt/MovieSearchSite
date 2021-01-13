# Web App and Web Service Using Vue and Node Express

Author: Jonathan Baxter

This is my example of using Node.js Express calling to an API server.

## Setup Instructions:
- Clone th repo
- Create a .env file and place it outside of the folder with an API key to Movie Database formatted as: API_KEY="Your API Key Here"
- Run NPM Install in both folders to build the package.json.
- In one terminal/console, run: nodemon while inside webservice folder, this will activate the local express server. And inside the web app run: npm run serve. This will have the environments work the way they are meant to locally.

## Current Build
The current build of this site is in it's early stages. What I learned from this, was how to connect an express server to a Vue project which I have never done before, but happy that it worked. Styling is very to the point given the time to build this.

The functionality currently is typing in the input box and then pressing the button to obtain your movie results. I also have commented out, the option to just type and remove the button entirely as well, but for the sake of API calls, I went with a button.

## Future Build Wishlist
Since I have the early stages coded, what I would like to do in future updates is follows:
- Improve styling / look.
- Make it so the user on the site can email the list that was found to an address the choose to.
- Update the express server so that it can be delivered online via my website so there is a live express server.
- Along with the server, update the build of the vue so that it can be hosted on my portfolio site along with the express server. Currently I have mainly react sites on my site, and it's been a goal of mine to host a vue project on there as well.
