const express = require('express');
const Router = express.Router();

const {render , createUrl, redirectToLongUrl} = require('../controller/url.controller');

Router.get('/', render);
Router.post('/', createUrl);
Router.get('/:shortUrl', redirectToLongUrl);

module.exports = Router;