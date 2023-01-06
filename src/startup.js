// Build-in modules
const express = require('express');

// Custom modules

const app = express();

const PORT = process.env.PORT || 5011;

const startApp = () => {
  const server = app.listen(PORT, () => {
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
        .bold
    );
  });

  // Handle unhandled promise rejections
  process.on('unhandledRejection', (err, promisse) => {
    console.log(`Error: ${err.message}`.red);

    // Close server & exit process
    server.close(() => {
      process.exit(1);
    });
  });
};

module.exports = startApp;
