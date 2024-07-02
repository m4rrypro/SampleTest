const db = require('../db/DatabaseConfig').db;

const createUser = async (userData) => {
  try {
    await db('users').insert(userData);
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

module.exports = {
  createUser
};
