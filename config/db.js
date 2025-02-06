const mongoose = require('mongoose');

const connect = async () => {
    try {
        const MongoDB_URL = process.env.DB_URL;
        if (!MongoDB_URL) {
            throw new Error('MongoDB connection URL is missing');
        }
        await mongoose.connect(MongoDB_URL);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('Failed to connect with mongoDB', error);
    }
}
module.exports = {
    connect
}