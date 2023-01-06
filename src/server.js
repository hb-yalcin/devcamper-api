// Load environment variables
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/config/config.env` });

// Build-in modules
const colors = require('colors');

// Custom modules
const connectDB = require('./config/db');
const startApp = require('./startup');

// Connect to Database then start to listen PORT
connectDB()
  .then(() => {
    startApp();
  })
  .catch(() => {
    console.log('Database connection error');
  });
