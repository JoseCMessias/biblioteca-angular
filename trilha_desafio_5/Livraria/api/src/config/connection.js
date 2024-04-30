import 'dotenv/config'
import pg from 'pg';

const connection = new pg.Pool({
  connectionString: process.env.CONNECTION_STRING,
});

// const connection = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DB,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT, 
// });

export default connection;