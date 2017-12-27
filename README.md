# SocialAppWithExpress

SocialApp API with NodeJs, ExpressJS and MongoDB.

At this point authentication is implemented using OAuth.

/index.js
Is our entry point and initializes our server app. It creates an instance of express and then initializes a cookie session that expires in 30 days.

/routes/authRoutes.js
Routes implemented have been /api/logout and /api/current_user as well as /auth/google. Google Strategy working 100%. Placeholder routes for some other strategies have been defined.

/services/passport.js
Contains all the logic required by Passport, it implements the GoogleStrategy. It also contains the serializeUser and deserializeUser functions to encode and decode our cookie session.

/models/User.js
Creates a basic User model with just one property, googleID.
