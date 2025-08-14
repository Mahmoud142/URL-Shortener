const mongoose = require('mongoose');

const shortUrlSchema = new mongoose.Schema({

    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        default: ''
    },
    clicks: {
        type: Number,
        default: 0
    }
});
module.exports = mongoose.model('ShortUrl', shortUrlSchema);