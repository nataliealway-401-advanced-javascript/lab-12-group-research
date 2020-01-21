'use strict';

const superagent = require('superagent');
const users = require('./users.js');

/*
  Resources
  https://developer.wordpress.com/docs/oauth2/
*/

const tokenServerUrl = process.env.TOKEN_SERVER;
const remoteAPI = process.env.REMOTE_API;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const API_SERVER = process.env.API_SERVER;
const REDIRECT_URI = process.env.REDIRECT_URI;

module.exports = async function authorize(req, res, next) {

  try {
    let code = req.query.code;
    console.log('(1) CODE:', code);

    let remoteToken = await exchangeCodeForToken(code);
    console.log('(2) ACCESS TOKEN:', remoteToken)

    let remoteUser = await getRemoteUserInfo(remoteToken);
    console.log('(3) WORDPRESS USER', remoteUser)

    let [user, token] = await getUser(remoteUser);
    req.user = user;
    req.token = token;
    console.log('(4) LOCAL USER', user);

    next();
  } catch (e) { next(`ERROR: ${e}`) }

}

async function exchangeCodeForToken(code) {
let tokenResponse = await superagent.post(tokenServerUrl).type('form').send({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    client_secret: CLIENT_SECRET,
    code: code,
    grant_type: 'authorization_code',
  })
  let access_token = tokenResponse.body.access_token;
  console.log(tokenResponse.body)

  return access_token;
} 

async function getRemoteUserInfo(token) {

  let userResponse =
    await superagent.get(API_SERVER)
    .query({access_token: token})
      // .set('user-agent', 'express-app')
      // .set('Authorization', `token ${token}`)

  let user = userResponse;

  return user;

}

async function getUser(remoteUser) {
  let userRecord = {
    username: remoteUser.login,
    password: 'oauthpassword'
  }

  let user = await users.save(userRecord);
  let token = users.generateToken(user);

  return [user, token];

}