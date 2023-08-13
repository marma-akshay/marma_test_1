const pgp = require('pg-promise')();

const connection = {
  host: 'localhost',
  port: 5432,
  database: 'marma',
  user: 'postgres',
  password: 'Axis#2014'
};

const db = pgp(connection);

module.exports = db;
