# DartFeed

A news aggregator for all of your tech news.

## Team

  - __Product Owner__: Greg Dungca
  - __Scrum Master__: Manu Mishra
  - __Development Team Members__: Chris Bee, Will Dembinski


## Requirements

- Node

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

###Facebook Integration 
- You will need to create a developer account with an facebook profile - developers.facebook.com
- You need to add the app to your developer account and it needs to be configured to reflect the url of your app (localhost:8000 for local development)
- You will need to add your team as devlopers on the project
- The project looks for a config.js file that that is in root server directory
```
module.exports = {
  fbClientID: YOUR_ID,
  fbClientSecret: 'YOUR_SECRET', 
  fbCallback: 'http://localhost:8000/api/auth/facebook/callback'
}
```
- Note: to keep your account secure, *the config.js file should not be checked into git hub!* Make sure it remains in the .gitignore. Alternatively, you could set the requried values and ENV values and update the code to use them. 

### Future Features

- Followers
- Users page styling
- Popular articles
- Recommended articles
- Define more categories 
