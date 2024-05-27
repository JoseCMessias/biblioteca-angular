import "dotenv/config";
import pg from "pg";

class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }

    this.connection = new pg.Pool({
      connectionString: process.env.CONNECTION_STRING,
    });

    Database.instance = this;
  }

  query(sql, params) {
    return this.connection.query(sql, params);
  }
}

const db = new Database();

export default db;
