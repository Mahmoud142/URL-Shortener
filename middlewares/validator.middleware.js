
const {validationResult} = require('express-validator');
const ShortUrl = require('../models/shortUrl.model');
exports.validatorMiddleware = async (req, res, next) => {

    // User Wants to Track his Short URL || an error happened
    const found = await ShortUrl.findOne({ shortUrl: req.body.longUrl });
    if (found) {
        return res.render('index', { shortUrls: [found] });
    }

    // Check if the request has validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('index', { shortUrls: [], error: errors.array() });
    }
    // no errors happened go to next middleware
    next();
}