const knex = require('knex');
const knexConfig = require('../knexfile');
const environment = process.env.NODE_ENV || 'development';
const db = knex(knexConfig[environment]);

const initializeDB = async () => {
  try {
    // Run migrations
    await db.migrate.latest();
    console.log('Migrations completed');
    
    // Run seeds
    await db.seed.run();
    console.log('Seeding completed');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

module.exports = {
  db,
  initializeDB
};
