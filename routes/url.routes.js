const express = require('express');
const Router = express.Router();

const urlcontroller = require('../controller/url.controller');

Router.get('/', urlcontroller.getall);
Router.post('/shortUrls', urlcontroller.create);
Router.get('/:shortUrl', urlcontroller.redirectToLongUrl);

module.exports = Router;