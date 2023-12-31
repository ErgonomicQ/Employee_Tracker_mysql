const mysql = require('mysql2/promise');
const dotenv = require('dotenv'); // Load the dotenv package

// Load environment variables from .env file
dotenv.config();


async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    console.log('Connected to the database');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

module.exports = {
  connectToDatabase,
};
