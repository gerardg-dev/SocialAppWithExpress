const passport = require('passport');

module.exports = app => {

  // Local Strategy

  app.get('/auth/local', (req, res, next) => {
    console.log({ 'AuthRoute': 'Local' });
    res.send({ 'AuthRoute': 'Local' });
  });

  // Google Strategy

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  // Facebook Strategy

  app.get('/auth/facebook', (req, res, next) => {
    console.log({ 'AuthRoute': 'Facebook' });
    res.send({ 'AuthRoute': 'Facebook' });
  });

  // Instagram Strategy

  app.get('/auth/instagram', (req, res, next) => {
    console.log({ 'AuthRoute': 'Instagram' });
    res.send({ 'AuthRoute': 'Instagram' });
  });

  // Twitter Strategy

  app.get('/auth/twitter', (req, res, next) => {
    console.log({ 'AuthRoute': 'Twitter' });
    res.send({ 'AuthRoute': 'Twitter' });
  });

  // LogOut Route

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  // Current LoggedIn User Route

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
