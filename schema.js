var pg = require('pg').native
  , connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/dailyjs'
  , client;

client = new pg.Client(connectionString);
client.connect();
client.query('CREATE TABLE visits (date date)');
