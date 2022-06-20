//importing pg
const { Pool } = require('pg');
//Pool will connect to the postgres
const pool = new Pool({
    //this can be remove and it will still work
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
  })
module.exports = {
  query: (text, params) => pool.query(text, params),
};