const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log('ACCESS TOKEN: ', accessToken);
      console.log('REFRESH TOKEN: ', refreshToken);
      console.log('PROFILE: ', profile);
    }
  )
);
