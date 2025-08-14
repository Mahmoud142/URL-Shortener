const ShortUrl = require('../models/shortUrl.model')
const shortid = require('shortid');
const asyncWrapper = require('../middlewares/asyncWrapper');


// @desc render the main page
// @route GET /
// @access Public
exports.render = asyncWrapper(async (req, res) => {
    res.render('index', { shortUrls: [] });
});

//@desc create a short URL
//@route POST /api/
//@access Public
exports.createUrl = asyncWrapper(async (req, res) => {
    const longUrl = req.body.longUrl;
    const found = await ShortUrl.findOne({ longUrl });
    if (found) {
        return res.render('index', { shortUrls: [found] });
    }
    const url = await ShortUrl.create({ longUrl: req.body.longUrl });
    url.shortUrl = `${req.protocol}://${req.get('host')}/${shortid.generate()}`;
    // console.log(url);
    await url.save();
    res.render('index', { shortUrls: [url] });
});


//@desc redirect to the long URL
//@route GET /:shortUrl
//@access Public
exports.redirectToLongUrl = asyncWrapper(async (req, res) => {
    const url = `${req.protocol}://${req.get('host')}/${req.params.shortUrl}`;
    const foundUrl = await ShortUrl.findOne({ shortUrl: url });
    if (!foundUrl)
        return res.sendStatus(404);
    foundUrl.clicks++;
    await foundUrl.save();
    res.redirect(foundUrl.longUrl);
});