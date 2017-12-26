const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  // user.id is the ID of the record saved in our DB.
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('ACCESS TOKEN: ', accessToken);
      console.log('REFRESH TOKEN: ', refreshToken);
      console.log('PROFILE: ', profile);

      // Query our MongoDB and see if record with
      // the GoogleProfileID already exists.
      User.findOne({ googleID: profile.id })
        .then(existingUser => {
          // User record exists in database
          if (existingUser){
            done(null, existingUser);
          } else {
            // User record does not exists in database
            // Create a new User record
            new User({ googleID: profile.id })
              .save()
              .then(user => done(null, user));
          }
        });
    }
  )
);
