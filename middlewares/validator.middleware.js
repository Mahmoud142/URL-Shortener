
const {validationResult} = require('express-validator');

exports.validatorMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('index', { shortUrls: [], error: errors.array()});
    }
    next();
}