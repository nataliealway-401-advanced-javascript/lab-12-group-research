# OAuth Comparative Analysis

## WordPress OAuth

### Research Conducted By: Natalie Alway, Lindsay Peltier, Travis Skyles

### Overall Score and Comments
#### Score (Out of 10): 7
#### General Comments
This is a full stack application using an Express api server with an html front end login page, that connects to Wordpress's OAuth client. 

#### Pros
* Clear step by step instructions
* Code snippets and visual

#### Cons
* Lack of trouble shooting information
* Poor scanability

### Ratings and Reviews
#### Documentation
The documentation overall was easy to read and follow along. It matched the 5-step handshake method. We spent a considerable amount of time troubleshooting the return of our access token. We were receiving a "bad request" error. The solution we came accross was to add the "form" exchange type to the ExchangeCodeForToken function. Nothing in the documentation would have lead us to this solution. 

#### Systems Requirements
bcrypt, express, jsonwebtoken, base-64 and superagent. It can be hosted on heroku. It does require a database, to save and validate users.


#### Ramp-Up Projections
It would take a team of junior developers probably 2 to 4 hours to become productive on this kind of project using Wordpress's OAuth
- The use of starter code greatly reduces the ramp up time.

#### Community Support and Adoption levels
WordPress itself is a very popular blog hosting platform, however as a OAuth gatekeeper, we don't see it as a popular choice for using it to sign into other platforms, unless the user is wanting to access certain Wordpress blogs within another source. Wordpress itself is very developer friendly and offers alot of resources for developers, not just for creating a Wordpress OAuth, but also other tools for the Wordpress community.


### Links and Resources
* [framework](https://developer.wordpress.com/apps/)
* [docs](https://developer.wordpress.com/docs/oauth2/)

### Code Demos
* [live/running application](http://localhost:3000/)
* [code repository](http://xyz.com)

### Operating Instructions
If someone were to download your repo (above), what steps do they need to take to run the application
* Insure you have a wordpress account, or be prepared to start one.
* `clone repo`
* `npm install` - bcrypt, express, jsonwebtoken, base-64 and superagent
* `npm start`
* Endpoint: `/`
  * Returns a login page

