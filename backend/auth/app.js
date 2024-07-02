const express = require('express');
const cors = require('cors');
const dbConfig = require('./db/DatabaseConfig');
require('dotenv').config(); // Load environment variables

const app = express();

dbConfig.initializeDB().then(() => {
  console.log('Database initialized');

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(cors());

  const authRoutes = require('./routes/auth');
  // const userRoute = require('./routes/users');

  app.use('/auth', authRoutes);
  // app.use('/signup', userRoute);

  app.listen(process.env.GUARD_PORT || 4000, function () {
    console.log('App Started on ', process.env.GUARD_PORT || 4000);
  });
}).catch(error => {
  console.error('Failed to initialize the database:', error);
  process.exit(1); // Exit the process with an error code
});
