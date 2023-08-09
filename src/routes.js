const express = require('express');
const route = express.Router();
const auth = require('./controllers/authentication/JwtAuthController.js') 
const PalindromoController = require('./controllers/palindromo/PalindromoController.js');

route.get('/palindromo', PalindromoController.VerifyPalindrome);


module.exports = route; 
