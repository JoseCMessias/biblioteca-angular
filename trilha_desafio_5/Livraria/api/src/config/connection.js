import 'dotenv/config'
import pg from 'pg';

const connection = new pg.Pool({
  connectionString: process.env.CONNECTION_STRING,
});

export default connection;