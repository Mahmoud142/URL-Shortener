const express = require('express');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB.connect();
});