const express = require('express');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const {connect} = require('./config/db');
const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

// middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10, // limit each IP to 10 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);

// route
const urlRoutes = require('./routes/url.routes');
app.use('/', urlRoutes);
// error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

connect();
// Handle connection errors
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
    connect();
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});