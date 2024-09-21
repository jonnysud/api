const express = require('express');
const routers = express.Router();
const controller = require('../controllers');

//routers.get('/', controller.firstFunction);
routers.get('/professional', controller.professional);

module.exports = routers;