const ShortUrl = require('../models/shortUrl')

const getall = async (req, res) => {
    const shortUrls = await ShortUrl.find();
    res.render('index', { shortUrls: shortUrls });
}

const create = async (req, res) => {
    await ShortUrl.create({ longUrl: req.body.longUrl });
    res.redirect('/');
}

const redirectToLongUrl = async (req, res) => {
    const url = req.params.shortUrl;
    const foundUrl = await ShortUrl.findOne({ shortUrl: url });
    if (!foundUrl)
        return res.sendStatus(404);
    foundUrl.clicks++;
    await foundUrl.save();
    res.redirect(foundUrl.longUrl);
}
module.exports = {
    getall,
    create,
    redirectToLongUrl,
}