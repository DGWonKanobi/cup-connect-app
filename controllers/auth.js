const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const { User } = require('../models');
const db = require('../models');


// Signup route
router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

// Login route
router.get('/login', (req, res) => {
  res.render('auth/login');
});

// Logout route
router.get('/logout', (req, res) => {
  req.logout(); // Passport's logout method
  req.flash('success', 'Logging out... See you next time!');
  res.redirect('/');
});

// Login POST route
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  successFlash: 'Welcome back!',
  failureFlash: 'Either email or password is incorrect'
}));

// Signup POST route
router.post('/signup', async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const [newUser, created] = await User.findOrCreate({
      where: { email },
      defaults: { name, password }
    });

    if (created) {
      console.log(`----- ${newUser.name} was created -----`);
      const successObject = {
        successRedirect: '/',
        successFlash: `Welcome ${newUser.name}. Account was created and logging in...`
      };
      passport.authenticate('local', successObject)(req, res);
    } else {
      req.flash('error', 'Email already exists');
      res.redirect('/auth/signup');
    }
  } catch (error) {
    console.log('**************Error');
    console.log(error);
    req.flash('error', 'Either email or password is incorrect. Please try again.');
    res.redirect('/auth/signup');
  }
});

module.exports = router;