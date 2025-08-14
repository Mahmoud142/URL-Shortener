const express = require('express');
const router = express.Router();

const {render , createUrl, redirectToLongUrl} = require('../controller/url.controller');
const { urlValidator } = require('../utils/url.validator');

router.route('/')
    .get(render)
    .post(urlValidator, createUrl);


router.route('/:shortUrl')
    .get(redirectToLongUrl);

module.exports = router;