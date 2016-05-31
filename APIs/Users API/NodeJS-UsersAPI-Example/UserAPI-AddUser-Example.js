/*
 Web call needed to discover baseURI needed to call Users API for individual LiveEngage accounts for Accounts:
 This URL is for app keys that have Read/Write enabled on the API
 https://api.liveperson.net/api/account/{YOUR ACCOUNT NUMBER}/service/accountConfigReadWrite/baseURI.json?version=1.0
 Expected response example:
{
 "service":"accountConfigReadOnly",
 "account":"56072331",
 "baseURI":"va-a.acr.liveperson.net"
}
*/

// To run this example, you will need to install the Request module. 
// run -  npm install request

var request = require('request');

var oauth = {
        consumer_key: 'your app key',
        consumer_secret: 'your app secret',
        token: 'your access token',
        token_secret: 'your access token secret'
    };

// Add new user

qs = {
  "nickname": "User",
  "memberOf": {
    "agentGroupId": <groupid>
  },
  "isEnabled": true,
  "isActive": true,
  "permissionGroups": [
    1
  ],
  "email": "user@email.com",
  "maxChats": 0,
  "fullName": "Full Name User",
  "loginName": "user@email.com",
  "passwordSh": "Password01"
};

// Example URL: https://va-a.acr.liveperson.net/api/account/56072331/configuration/le-users/users
var url = 'https://{YOUR BASE URI}/api/account/{YOUR ACCOUNT NUMBER}/configuration/le-users/users?v=1';
request.post({
    url: url,
    oauth: oauth,
    body: qs,
    json: true,
    headers: {
        'Content-Type': 'application/json'
    }
}, function (e, r, b) {
    console.log(JSON.stringify(b));
});
