const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

// middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

// route
const urlRoutes = require('./routes/url.routes');
app.use('/', urlRoutes);

app.listen(PORT,()=> {
    console.log(`Server is running on port ${PORT}`);
    connectDB.connect();
})